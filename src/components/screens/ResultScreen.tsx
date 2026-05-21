'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { useTranslation } from '@/hooks/useTranslation';
import { generateKoreanNames, getSajuAnalysis, generateAdditionalPremiumNames } from '@/utils/nameGenerator';
import { NameResult, UserData } from '@/store/useAppStore';
import './ResultScreen.css';
import { fortuneMatrix, mapStrengthToMatrix } from '@/data/fortuneData';
import type { SajuStrength } from '@/data/fortuneData';
import type { SajuResult } from '@/utils/sajuCalculator';
import TestLicenseInput from '@/components/TestLicenseInput';
import { verifyGumroadLicense } from '@/lib/apiClient';
import { GumroadPaymentModal } from '@/components/GumroadPaymentModal';

import { useRouter } from 'next/navigation';

// DestinyReading Component - 4가지 주제(직업, 사랑, 건강, 재물)의 운세 표시
interface DestinyReadingProps {
  dayMasterElement: string;
  dayMasterStrength: string;
  locale: string;
}

const DestinyReading: React.FC<DestinyReadingProps> = ({ dayMasterElement, dayMasterStrength, locale }) => {
  const topics: (keyof typeof fortuneMatrix)[] = ['career', 'health', 'love', 'wealth'];
  const topicIcons: Record<keyof typeof fortuneMatrix, string> = {
    career: '💼',
    love: '💕',
    health: '🌿',
    wealth: '💰'
  };

  const topicTitles: Record<string, Record<keyof typeof fortuneMatrix, string>> = {
    en: { career: 'Career', love: 'Love', health: 'Health', wealth: 'Wealth' },
    ko: { career: '직업', love: '사랑', health: '건강', wealth: '재물' },
    ja: { career: 'キャリア', love: '愛', health: '健康', wealth: '富' },
    fr: { career: 'Carrière', love: 'Amour', health: 'Santé', wealth: 'Richesse' },
    de: { career: 'Karriere', love: 'Liebe', health: 'Gesundheit', wealth: 'Wohlstand' },
    it: { career: 'Carriera', love: 'Amore', health: 'Salute', wealth: 'Ricchezza' },
    pt: { career: 'Carreira', love: 'Amor', health: 'Saúde', wealth: 'Riqueza' },
    es: { career: 'Carrera', love: 'Amor', health: 'Salud', wealth: 'Riqueza' },
    th: { career: 'อาชีพ', love: 'ความรัก', health: 'สุขภาพ', wealth: 'ความมั่งคั่ง' },
    id: { career: 'Karier', love: 'Cinta', health: 'Kesehatan', wealth: 'Kekayaan' }
  };

  const mainTitles: Record<string, string> = {
    en: '🔮 Your Life Fortune',
    ko: '🔮 인생 운세',
    ja: '🔮 人生の運勢',
    fr: '🔮 Votre Fortune de Vie',
    de: '🔮 Ihr Lebensglück',
    it: '🔮 La Tua Fortuna di Vita',
    pt: '🔮 Sua Fortuna de Vida',
    es: '🔮 Tu Fortuna de Vida',
    th: '🔮 โชคชะตาชีวิตของคุณ',
    id: '🔮 Keberuntungan Hidup Anda'
  };

  // 5단계 strength를 3단계로 매핑
  const mappedStrength = mapStrengthToMatrix(dayMasterStrength as SajuStrength);

  const getTranslatedText = (textObj: Partial<Record<string, string>> | undefined, lang: string) => {
    if (!textObj) return 'Analysis not available.';
    return textObj[lang] || textObj['en'] || 'Translation not available.';
  };

  const currentLocale = locale in topicTitles ? locale : 'en';

  return (
    <div className="destiny-reading">
      <h4>{mainTitles[currentLocale] || mainTitles.en}</h4>
      <div className="fortune-grid">
        {topics.map(topic => {
          const fortuneText = fortuneMatrix[topic]?.[dayMasterElement as keyof typeof fortuneMatrix.career]?.[mappedStrength];
          return (
            <div key={topic} className="fortune-card">
              <h5>{topicIcons[topic]} {topicTitles[currentLocale][topic]}</h5>
              <p>{getTranslatedText(fortuneText, locale)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ResultScreen: React.FC = () => {
  const { t, locale } = useTranslation('results');

  const userData = useAppStore((state) => state.userData);
  const freeNames = useAppStore((state) => state.freeNames);
  const premiumNames = useAppStore((state) => state.premiumNames);
  const oppositeGenderNames = useAppStore((state) => state.oppositeGenderNames);
  const isGenerating = useAppStore((state) => state.isGenerating);
  const isPremiumUnlocked = useAppStore((state) => state.isPremiumUnlocked);

  const setFreeNames = useAppStore((state) => state.setFreeNames);
  const setPremiumNames = useAppStore((state) => state.setPremiumNames);
  const setIsGenerating = useAppStore((state) => state.setIsGenerating);
  const setIsPaymentModalOpen = useAppStore((state) => state.setIsPaymentModalOpen);
  const isPaymentModalOpen = useAppStore((state) => state.isPaymentModalOpen);
  const unlockPremium = useAppStore((state) => state.unlockPremium);

  const [sajuAnalysis, setSajuAnalysis] = useState<SajuResult | null>(null);
  const [selectedName, setSelectedName] = useState<number | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [isCreatingLink, setIsCreatingLink] = useState(false);
  const [shareableLink, setShareableLink] = useState<string | null>(null);
  const [isVerifyingLicense, setIsVerifyingLicense] = useState(false);
  const [paymentSessionId, setPaymentSessionId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Don't redirect while names are being generated, or if the user has paid (premium might be coming)
    if (isGenerating || isPremiumUnlocked) {
      return;
    }
    // If generation is finished and there are no names, redirect to home.
    if (freeNames.length === 0) {
      console.log('[ResultScreen] No names found, redirecting to home.');
      router.replace('/');
    }
  }, [freeNames, isGenerating, isPremiumUnlocked, router]);

  const generateNames = useCallback(async () => {
    console.log('Generate names called with userData:', userData);

    if (!userData.birthDate || !userData.firstName || !userData.gender) {
      console.log('Missing required userData fields:', {
        birthDate: !!userData.birthDate,
        firstName: !!userData.firstName,
        gender: !!userData.gender
      });
      return;
    }

    setIsGenerating(true);
    setLoadingStep(0);

    try {
      console.log('Starting name generation...');

      // Simulate loading steps
      setTimeout(() => setLoadingStep(1), 800);
      setTimeout(() => setLoadingStep(2), 1600);

      // Generate names
      console.log('Calling generateKoreanNames...');
      const { freeNames: newFreeNames, premiumNames: newPremiumNames } = generateKoreanNames({
        userData: userData as UserData,
        locale
      });
      console.log('Generated names:', { freeNames: newFreeNames.length, premiumNames: newPremiumNames.length });

      // Get Saju analysis
      console.log('Getting Saju analysis...');
      const analysis = getSajuAnalysis(userData.birthDate, userData.birthTime, locale);
      console.log('Saju analysis completed:', analysis);

      // Final delay before showing results
      console.log('Waiting final delay...');
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Setting final results...');
      setFreeNames(newFreeNames);
      setPremiumNames(newPremiumNames);
      setSajuAnalysis(analysis);
      console.log('Name generation completed successfully!');
    } catch (error) {
      console.error('Name generation failed:', error);
      console.error('Error stack:', (error as Error).stack);
    } finally {
      console.log('Cleaning up generation state...');
      setIsGenerating(false);
      setLoadingStep(0);
    }
  }, [userData, locale]);

  // Check URL params for license key (from Gumroad redirect)
  useEffect(() => {
    const checkLicenseFromUrl = async () => {
      if (typeof window === 'undefined' || isPremiumUnlocked || isVerifyingLicense) return;

      const urlParams = new URLSearchParams(window.location.search);
      const licenseKey = urlParams.get('license_key');

      if (licenseKey) {
        console.log('[ResultScreen] License key found in URL:', licenseKey);
        setIsVerifyingLicense(true);

        try {
          // Verify the license
          const result = await verifyGumroadLicense(licenseKey);
          console.log('[ResultScreen] License verification result:', result);

          if (result.valid) {
            // Generate premium content
            if (userData.birthDate && userData.firstName && userData.gender) {
              const { oppositeGenderNames } = generateAdditionalPremiumNames({
                userData: userData as UserData,
                locale
              });

              unlockPremium(premiumNames || [], [], oppositeGenderNames);
              console.log('[ResultScreen] Premium unlocked from URL license');
            } else {
              unlockPremium(premiumNames || []);
              console.log('[ResultScreen] Premium unlocked from URL license (no additional names)');
            }

            // Remove license key from URL
            window.history.replaceState({}, document.title, window.location.pathname);

            // Show success message
            setTimeout(() => {
              alert('🎉 결제 완료! 프리미엄 콘텐츠가 잠금 해제되었습니다.');
            }, 500);
          } else {
            console.error('[ResultScreen] License verification failed from URL');
            alert('❌ 결제 확인에 실패했습니다. 고객 지원에 문의해주세요.');
          }
        } catch (error) {
          console.error('[ResultScreen] Error verifying license from URL:', error);
          alert('❌ 결제 확인 중 오류가 발생했습니다.');
        } finally {
          setIsVerifyingLicense(false);
        }
      }
    };

    checkLicenseFromUrl();
  }, [isPremiumUnlocked, isVerifyingLicense, userData, locale, premiumNames, unlockPremium]);

  useEffect(() => {
    // If we are in the 'generating' state but have no names yet, 
    // it means we just came from the input screen and need to start the generation process.
    if (isGenerating && freeNames.length === 0) {
      generateNames();
    }
  }, [isGenerating, freeNames.length, generateNames]);

  useEffect(() => {
    if (isGenerating) {
      const steps = [
        { step: 0, delay: 500 },
        { step: 1, delay: 1000 },
        { step: 2, delay: 1500 }
      ];

      steps.forEach(({ step, delay }) => {
        setTimeout(() => setLoadingStep(step), delay);
      });
    }
  }, [isGenerating]);

  const handleUnlockPremium = async () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[ResultScreen] Bypassing payment for development...');
      // Directly unlock premium content
      if (userData.birthDate && userData.firstName && userData.gender) {
        const { oppositeGenderNames } = generateAdditionalPremiumNames({
          userData: userData as UserData,
          locale
        });
        unlockPremium(premiumNames || [], [], oppositeGenderNames);
      } else {
        unlockPremium(premiumNames || []);
      }
      return;
    }

    console.log('[ResultScreen] Opening Gumroad payment modal...');

    // Get product URL from environment variable
    const productUrl = process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL;

    if (!productUrl) {
      console.error('[ResultScreen] Gumroad product URL not configured');
      alert('결제 시스템을 구성 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    try {
      // Create payment session
      const sessionResponse = await fetch('/api/payment/session', {
        method: 'POST',
      });

      if (!sessionResponse.ok) {
        throw new Error('Failed to create payment session');
      }

      const { sessionId } = await sessionResponse.json();
      console.log('[ResultScreen] Payment session created:', sessionId);

      // Open payment modal
      setPaymentSessionId(sessionId);
      setIsPaymentModalOpen(true);

    } catch (error) {
      console.error('[ResultScreen] Error creating payment session:', error);
      alert('결제 세션 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handlePaymentComplete = () => {
    console.log('[ResultScreen] Payment completed!');

    // Generate premium content
    if (userData.birthDate && userData.firstName && userData.gender) {
      const { oppositeGenderNames } = generateAdditionalPremiumNames({
        userData: userData as UserData,
        locale
      });

      unlockPremium(premiumNames || [], [], oppositeGenderNames);
      console.log('[ResultScreen] Premium unlocked with additional names');
    } else {
      unlockPremium(premiumNames || []);
      console.log('[ResultScreen] Premium unlocked');
    }

    // Close payment modal
    setIsPaymentModalOpen(false);

    // Show success message
    setTimeout(() => {
      alert('🎉 결제 완료! 프리미엄 콘텐츠가 잠금 해제되었습니다.');
    }, 300);
  };

  const handlePaymentClose = () => {
    console.log('[ResultScreen] Payment modal closed');
    setIsPaymentModalOpen(false);
    setPaymentSessionId(null);
  };

  const handleSelectName = (index: number) => {
    const newSelectedName = selectedName === index ? null : index;
    setSelectedName(newSelectedName);

    // Scroll to selected card
    if (newSelectedName !== null) {
      setTimeout(() => {
        const card = document.querySelector(`.name-card:nth-child(${index + 1})`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handlePronunciation = (koreanName: string, romanization: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(koreanName);
      const voices = window.speechSynthesis.getVoices();
      const koreanVoice = voices.find(voice =>
        voice.lang.includes('ko') || voice.lang.includes('Korean')
      );

      if (koreanVoice) {
        utterance.voice = koreanVoice;
      }

      utterance.lang = 'ko-KR';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;

      window.speechSynthesis.speak(utterance);
    } else {
      alert(`Pronunciation: ${romanization}`);
    }
  };

  const handleShare = (platform: string, nameData?: NameResult) => {
    const serviceUrl = window.location.origin;

    if (platform === 'service-link') {
      navigator.clipboard.writeText(`✨ Discover your perfect Korean name!\n🎯 Traditional Saju analysis meets modern K-pop culture\n\n${serviceUrl}`).then(() => {
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
      });
      return;
    }

    if (!nameData) return;

    const compatibilityText = nameData.compatibility === 'excellent' ? 'Perfect Harmony' :
                              nameData.compatibility === 'good' ? 'Good Connection' :
                              nameData.compatibility === 'fair' ? 'Fair Match' : 'Unique Path';
    const shareText = `My Korean Name: ${nameData.korean} (${nameData.pronunciation})
Meaning: ${nameData.meaning}
Saju Match: ${compatibilityText}
Discover your Korean name at ${serviceUrl}`;

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareText).then(() => {
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
      });
    } else if (platform === 'instagram') {
      navigator.clipboard.writeText(`${shareText}\n\nGenerate your Korean name: ${serviceUrl}`);
      window.open('https://www.instagram.com/', '_blank');
      alert('✅ Text copied to clipboard!\n\n📸 Instagram opened in new tab.\nPaste the text in your story or post!');
    } else if (platform === 'tiktok') {
      navigator.clipboard.writeText(`${shareText}\n\nGenerate your Korean name: ${serviceUrl}`);
      window.open('https://www.tiktok.com/upload', '_blank');
      alert('✅ Text copied to clipboard!\n\n🎬 TikTok upload page opened.\nPaste the text in your video description!');
    }
  };

  const handleCreateShareLink = async () => {
    setIsCreatingLink(true);
    setShareableLink(null);

    const dataToShare = {
      userData,
      freeNames,
      premiumNames,
      sajuAnalysis,
      isPremiumUnlocked,
      oppositeGenderNames,
    };

    try {
      const response = await fetch('/api/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToShare),
      });

      if (!response.ok) {
        throw new Error('Failed to create share link');
      }

      const { id } = await response.json();
      const newLink = `${window.location.origin}/share/${id}`;
      setShareableLink(newLink);

    } catch (error) {
      console.error(error);
      alert('Sorry, we could not create a share link. Please try again.');
    } finally {
      setIsCreatingLink(false);
    }
  };

  const getScoreLevel = (score: number) => {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'fair';
    return 'poor';
  };

  const getScoreLevelText = (score: number): string => {
    if (score >= 80) return t('compatibility.excellent');
    if (score >= 60) return t('compatibility.good');
    if (score >= 40) return t('compatibility.fair');
    return t('compatibility.poor');
  };

  const getCompatibilityColor = (compatibility: string) => {
    switch (compatibility) {
      case 'excellent': return 'excellent';
      case 'good': return 'good';
      case 'fair': return 'moderate';
      case 'poor': return 'weak';
      default: return 'moderate';
    }
  };

  const getCompatibilityText = (compatibility: string) => {
    return t(`compatibility.${compatibility}`) || compatibility;
  };

  const getScoreDescription = (score: number): string => {
    if (score >= 80) return t('scoreDescriptions.excellent');
    if (score >= 60) return t('scoreDescriptions.good');
    if (score >= 40) return t('scoreDescriptions.fair');
    return t('scoreDescriptions.poor');
  };

  if (isGenerating) {
    return (
      <div className="screen result-screen">
        <div className="result-background">
          <div className="floating-element cherry">🌸</div>
          <div className="floating-element heart">💜</div>
          <div className="floating-element star">✨</div>
        </div>
        <div className="loading-container">
          <div className="loading-animation">
            <div className="loading-circle"></div>
            <div className="loading-sparkles">
              <span>✨</span>
              <span>🌸</span>
              <span>💜</span>
            </div>
          </div>
          <h2>{t('generating.title')}</h2>
          <p>{t('generating.subtitle')}</p>
          <div className="progress-steps">
            <div className={`step ${loadingStep >= 0 ? 'active' : ''}`}>
              {t('generating.step1')}
            </div>
            <div className={`step ${loadingStep >= 1 ? 'active' : ''}`}>
              {t('generating.step2')}
            </div>
            <div className={`step ${loadingStep >= 2 ? 'active' : ''}`}>
              {t('generating.step3')}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen result-screen">
      <div className="result-background">
        <div className="floating-element cherry">🌸</div>
        <div className="floating-element heart">💜</div>
        <div className="floating-element star">✨</div>
      </div>

      <button className="back-button" onClick={() => router.push('/')}>
        ←
      </button>

      <div className="screen-content">
        {/* Header */}
        <div className="result-header">
          <div className="celebration-emoji">🎉</div>
          <h1>{t('title') || 'Your Perfect Korean Names!'}</h1>
          <p>{t('subtitle') || `Based on "${userData.firstName}" and your Saju analysis`}</p>
        </div>


        {/* Free Names Section */}
        <div className="names-container">
          {freeNames.map((nameData, index) => (
            <div
              key={index}
              className={`name-card ${selectedName === index ? 'selected' : ''}`}
              onClick={() => handleSelectName(index)}
            >
              <div className="name-header">
                <div className="name-title-section">
                  <div className="korean-name">{nameData.korean}</div>
                  <div className="romanization">{nameData.pronunciation}</div>
                  {nameData.kpopMember && (
                    <div className="kpop-info">
                      🎤 {nameData.kpopMember.group} - {nameData.kpopMember.memberName}
                    </div>
                  )}
                </div>
                <div className="name-actions">
                  <button
                    className="pronunciation-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePronunciation(nameData.korean, nameData.pronunciation);
                    }}
                    title={t('pronounce')}
                  >
                    🔊
                  </button>
                  {nameData.kpopMember ? (
                    <div className="kpop-badge">K-POP</div>
                  ) : (
                    <div className="free-badge">{t('free')}</div>
                  )}
                </div>
              </div>

              <div className="name-meaning">
                <h4>{t('meaning')}</h4>
                <p>{nameData.meaning}</p>
                {nameData.hanjaBreakdown && nameData.hanjaBreakdown.characters && (
                  <div className="korean-breakdown">
                    <div className="korean-characters">
                      {nameData.hanjaBreakdown.characters.map((char, charIndex) => (
                        <div key={charIndex} className="korean-character">
                          <span className="korean-char">{char.korean}</span>
                          <span className="char-meaning">&quot;{char.meaning}&quot;</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

{/* <div className="name-story">
                <h5>{t('culturalStory')}</h5>
                <p>
                  {nameData.story || 'Story not available'}
                </p>
              </div> */}

              <div className="pronunciation-match">
                <h4>🎵 Pronunciation Match</h4>
                <div className="match-score">
                  <div className="score-bar">
                    <div
                      className={`score-fill ${getScoreLevel(nameData.soundMatch || nameData.pronunciationMatch || 50)}`}
                      style={{ width: `${nameData.soundMatch || nameData.pronunciationMatch || 50}%` }}
                    ></div>
                  </div>
                  <span className="score-percentage">{nameData.soundMatch || nameData.pronunciationMatch || 50}%</span>
                </div>
                <div className="score-description">
                  <span className="score-label">
                    {nameData.soundMatchGrade || getScoreLevelText(nameData.pronunciationMatch || 50)} - Similarity between your name and Korean name pronunciation
                  </span>
                </div>
              </div>

              {selectedName === index && (
                <div className="saju-analysis">
                  <h4>{t('sajuAnalysis') || 'Saju Analysis'}</h4>


                  {sajuAnalysis && sajuAnalysis.elementBalance && (
                    <div className="elements-analysis">
                      <h5>{t('elementsBalance')}</h5>
                      <div className="elements-chart">
                        {Object.entries(sajuAnalysis.elementBalance).map(([element, count]) => (
                          <div key={element} className="element-bar">
                            <span className="element-name">{element.charAt(0).toUpperCase() + element.slice(1)}</span>
                            <div className="element-progress">
                              <div
                                className={`element-fill ${element}`}
                                style={{ width: `${(count / 8) * 100}%` }}
                              ></div>
                            </div>
                            <span className="element-count">{count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {sajuAnalysis?.dayMaster?.element && sajuAnalysis?.dayMaster?.strength ? (
                    <DestinyReading
                      dayMasterElement={sajuAnalysis.dayMaster.element}
                      dayMasterStrength={sajuAnalysis.dayMaster.strength}
                      locale={locale}
                    />
                  ) : (
                    <div className="fortune-summary">
                      <h5>{t('destinyReading')}</h5>
                      <p>{nameData.fortune || 'This name brings harmony and prosperity to your life path.'}</p>
                    </div>
                  )}

                  <div className="name-compatibility">
                    <h5>{t('nameHarmony') || 'Name Harmony'}</h5>
                    <p>{nameData.harmony || t('harmonyDescription') || 'This name resonates perfectly with your birth energy and personal destiny.'}</p>
                  </div>
                </div>
              )}

              <button className="expand-btn">
                {selectedName === index ? (t('showLess') || 'Show Less') : (t('viewFull') || 'View Full Analysis')}
              </button>
            </div>
          ))}
        </div>

        

        {/* Premium Names Section */}
        {isPremiumUnlocked && premiumNames && premiumNames.length > 0 && (
          <div className="premium-names-section">
            <div className="premium-header">
              <div className="premium-badge">{t('premium')}</div>
              <h2>{t('premiumNames.title') || 'Premium Names'}</h2>
              <p>{t('premiumNames.subtitle') || '5 additional names with enhanced cultural stories'}</p>
            </div>

            <div className="names-container">
              {premiumNames.map((nameData, index) => {
                const premiumIndex = freeNames.length + index;
                return (
                  <div
                    key={`premium-${index}`}
                    className={`name-card premium ${selectedName === premiumIndex ? 'selected' : ''}`}
                    onClick={() => handleSelectName(premiumIndex)}
                  >
                    <div className="name-header">
                      <div className="name-title-section">
                        <div className="korean-name">{nameData.korean}</div>
                        <div className="romanization">{nameData.pronunciation}</div>
                        {nameData.kpopMember && (
                          <div className="kpop-info">
                            🎤 {nameData.kpopMember.group} - {nameData.kpopMember.memberName}
                          </div>
                        )}
                      </div>
                      <div className="name-actions">
                        <button
                          className="pronunciation-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePronunciation(nameData.korean, nameData.pronunciation);
                          }}
                          title={t('pronounce')}
                        >
                          🔊
                        </button>
                        {nameData.kpopMember ? (
                          <div className="kpop-badge-premium">K-POP ⭐</div>
                        ) : (
                          <div className="premium-badge-small">{t('premium')}</div>
                        )}
                      </div>
                    </div>

                    <div className="name-meaning">
                      <h4>{t('meaning')}</h4>
                      <p>{nameData.meaning}</p>
                      {nameData.hanjaBreakdown && nameData.hanjaBreakdown.characters && (
                        <div className="korean-breakdown">
                          <div className="korean-characters">
                            {nameData.hanjaBreakdown.characters.map((char, charIndex) => (
                              <div key={charIndex} className="korean-character">
                                <span className="korean-char">{char.korean}</span>
                                <span className="char-meaning">&quot;{char.meaning}&quot;</span>
                              </div>
                            ))}
                          </div>
                          {nameData.hanjaBreakdown.traditionalMeaning && (
                            <p className="traditional-meaning">
                              <strong>Traditional:</strong> {nameData.hanjaBreakdown.traditionalMeaning}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* {nameData.story && (
                      <div className="name-story">
                        <h5>{t('culturalStory') || 'Cultural Story'}</h5>
                        <p>{nameData.story}</p>
                      </div>
                    )} */}

                    <div className="pronunciation-match">
                      <h4>🎵 Pronunciation Match</h4>
                      <div className="match-score">
                        <div className="score-bar">
                          <div
                            className={`score-fill ${getScoreLevel(nameData.soundMatch || nameData.pronunciationMatch || 85)}`}
                            style={{ width: `${nameData.soundMatch || nameData.pronunciationMatch || 85}%` }}
                          ></div>
                        </div>
                        <span className="score-percentage">{nameData.soundMatch || nameData.pronunciationMatch || 85}%</span>
                      </div>
                      <div className="score-description">
                        <span className="score-label">
                          {nameData.soundMatchGrade || 'Excellent Match'} - Similarity between your name and Korean name pronunciation
                        </span>
                      </div>
                    </div>

                    {selectedName === premiumIndex && (
                      <div className="saju-analysis">
                        <h4>{t('sajuAnalysis') || 'Saju Analysis'}</h4>


                        {sajuAnalysis?.dayMaster?.element && sajuAnalysis?.dayMaster?.strength ? (
                          <DestinyReading
                            dayMasterElement={sajuAnalysis.dayMaster.element}
                            dayMasterStrength={sajuAnalysis.dayMaster.strength}
                            locale={locale}
                          />
                        ) : (
                          <div className="fortune-summary">
                            <h5>{t('destinyReading')}</h5>
                            <p>{nameData.fortune || 'This premium name carries exceptional energy for success and harmony.'}</p>
                          </div>
                        )}

                        <div className="name-compatibility">
                          <h5>{t('nameHarmony') || 'Name Harmony'}</h5>
                          <p>{nameData.harmony || t('premiumHarmonyDescription') || 'This premium name creates powerful resonance with your celestial blueprint.'}</p>
                        </div>
                      </div>
                    )}

                    <button className="expand-btn">
                      {selectedName === premiumIndex ? (t('showLess') || 'Show Less') : (t('viewFull') || 'View Full Analysis')}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Show premium CTA only if not purchased yet */}
        {!isPremiumUnlocked && (
          <div className="premium-cta">
            <div className="cta-background-effects">
              <div className="sparkle-effect">✨</div>
              <div className="sparkle-effect sparkle-delay-1">💫</div>
              <div className="sparkle-effect sparkle-delay-2">⭐</div>
            </div>

            <div className="cta-header">
              <div className="premium-badge">
                <span className="badge-text">🏆 PREMIUM</span>
              </div>
              <h3 className="cta-title">
                <span className="gradient-text">{t('premiumCta.title') || 'Unlock Your Perfect Korean Name'}</span>
              </h3>
              <p className="cta-subtitle">
                {t('premiumCta.description') || (
                  <>
                    Get <strong className="text-accent">3 premium names</strong> with deep Saju analysis and <strong className="text-accent">2 perfect partner names</strong> for your destiny
                  </>
                )}
              </p>
            </div>

            <div className="premium-features-grid">
              <div className="feature-item feature-highlight">
                <div className="feature-icon">🎤</div>
                <div className="feature-content">
                  <h4>{t('premiumCta.feature1.title')}</h4>
                  <p>{t('premiumCta.feature1.description')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💎</div>
                <div className="feature-content">
                  <h4>{t('premiumCta.feature2.title')}</h4>
                  <p>{t('premiumCta.feature2.description')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-content">
                  <h4>{t('premiumCta.feature3.title')}</h4>
                  <p>{t('premiumCta.feature3.description')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔗</div>
                <div className="feature-content">
                  <h4>{t('premiumCta.feature4.title')}</h4>
                  <p>{t('premiumCta.feature4.description')}</p>
                </div>
              </div>
            </div>

            <div className="cta-pricing">
              <div className="price-container">
                <span className="original-price">$9.99</span>
                <span className="current-price">$2.99</span>
                <span className="discount-badge">70% OFF</span>
              </div>
              <p className="pricing-subtitle">{t('premiumCta.offerDetails')}</p>
            </div>

            <button
              className="premium-button enhanced"
              onClick={handleUnlockPremium}
            >
              <span className="button-content">
                <span className="button-icon">🚀</span>
                <span className="button-text">{t('unlockPremium') || 'Unlock Premium Experience'}</span>
                <span className="button-arrow">→</span>
              </span>
              <div className="button-glow"></div>
            </button>

            <div className="trust-indicators">
              <span className="trust-item">⚡ {t('premiumCta.instantAccess')}</span>
              <span className="trust-item">🔒 {t('premiumCta.securePayment')}</span>
            </div>
          </div>
        )}


        {/* Opposite Gender Names Section */}
        {isPremiumUnlocked && oppositeGenderNames.length > 0 && (
          <div className="opposite-gender-section">
            <div className="section-header">
              <h2>💕 {t('partnerNames.title') || 'Perfect Partner Names'}</h2>
              <p>{t('partnerNames.subtitle') || 'Perfect harmony names for your partner'}</p>
            </div>
            <div className="names-grid opposite-gender-grid">
              {oppositeGenderNames.map((nameData, index) => {
                const oppositeIndex = freeNames.length + premiumNames.length + index;
                return (
                  <div
                    key={`opposite-${index}`}
                    className={`name-card partner ${selectedName === oppositeIndex ? 'selected' : ''}`}
                    onClick={() => handleSelectName(oppositeIndex)}
                  >
                    <div className="name-header">
                      <div className="name-main">
                        <h3>{nameData.korean}</h3>
                        <span className="romanization">{nameData.romanization}</span>
                      </div>
                      <div className="partner-badge">{userData.gender === 'male' ? '👩' : '👨'} PARTNER</div>
                      {nameData.kpopMember && (
                        <div className="kpop-info">
                          🎤 {nameData.kpopMember.group} - {nameData.kpopMember.memberName}
                        </div>
                      )}
                    </div>

                    <div className="name-content">
                      <div className="meaning-section">
                        <h4>{t('meaning') || 'Meaning'}</h4>
                        <p>{nameData.meaning}</p>
                        {nameData.hanjaBreakdown && nameData.hanjaBreakdown.characters && (
                          <div className="korean-breakdown">
                            <div className="korean-characters">
                              {nameData.hanjaBreakdown.characters.map((char, charIndex) => (
                                <div key={charIndex} className="korean-character">
                                  <span className="korean-char">{char.korean}</span>
                                  <span className="char-meaning">&quot;{char.meaning}&quot;</span>
                                </div>
                              ))}
                            </div>
                            {nameData.hanjaBreakdown.traditionalMeaning && (
                              <p className="traditional-meaning">
                                <strong>Traditional:</strong> {nameData.hanjaBreakdown.traditionalMeaning}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      {/* <div className="cultural-story">
                        <h4>{t('culturalStory') || 'Cultural Story'}</h4>
                        <p>{nameData.story}</p>
                      </div> */}

                      <div className="compatibility-section">
                        <div className="match-score">
                          <div className="score-bar">
                            <div
                              className={`score-fill excellent`}
                              style={{ width: `95%` }}
                            ></div>
                          </div>
                          <span className="score-percentage">95%</span>
                        </div>
                        <span className="compatibility-text">Perfect Harmony</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Premium 15-Day Share Link - Show first and prominently */}
        {isPremiumUnlocked && freeNames.length > 0 && (
          <div className="premium-share-highlight">
            <div className="premium-share-header">
              <div className="premium-badge-large">⭐ PREMIUM</div>
              <h3 className="premium-share-title">🔗 15-Day Share Link</h3>
              <p className="premium-share-subtitle">Create a special link that saves your results for 15 days</p>
            </div>

            {!shareableLink && (
              <button
                className="premium-share-btn"
                onClick={handleCreateShareLink}
                disabled={isCreatingLink}
              >
                {isCreatingLink ? '⏳ Creating Link...' : '🔗 Create a Shareable Link'}
              </button>
            )}

            {shareableLink && (
              <div className="premium-share-result">
                <div className="link-info">
                  <span className="link-label">🔗 Your 15-Day Share Link:</span>
                  <span className="expiry-info">Expires in 15 days</span>
                </div>
                <div className="link-container">
                  <input type="text" readOnly value={shareableLink} className="share-link-input" />
                  <button
                    className="copy-link-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(shareableLink);
                      setCopiedToClipboard(true);
                      setTimeout(() => setCopiedToClipboard(false), 2000);
                    }}
                  >
                    {copiedToClipboard ? '✅ Copied!' : '📋 Copy'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Show sharing section always (basic sharing for free, enhanced for premium) */}
        {freeNames.length > 0 && (
          <div className="share-section">
            <h3>{t('sharing.title') || 'Share Your Results!'}</h3>
            <p className="share-description">
              {t('sharing.subtitle') || 'Save and share your Korean name discovery'}
            </p>

            <div className="share-buttons">
              <button
                className="share-btn copy"
                onClick={() => handleShare('copy', freeNames[0] || premiumNames[0])}
              >
                {copiedToClipboard ? '✅ Copied!' : '📋 Copy Name & Meaning'}
              </button>
              <button
                className="share-btn share-service"
                onClick={() => handleShare('service-link')}
              >
                🔗 Share Service Link
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="app-footer">
          <p>{t('footer')}</p>
        </footer>

        {/* Test License Input - Development Only */}
        {process.env.NODE_ENV === 'development' && (
          <TestLicenseInput
            onVerify={(licenseKey) => {
              // Generate premium content
              if (userData.birthDate && userData.firstName && userData.gender) {
                const { oppositeGenderNames } = generateAdditionalPremiumNames({
                  userData: userData as UserData,
                  locale
                });
                unlockPremium(premiumNames || [], [], oppositeGenderNames);
              } else {
                unlockPremium(premiumNames || []);
              }
            }}
          />
        )}
      </div>

      {/* Gumroad Payment Modal */}
      {isPaymentModalOpen && paymentSessionId && (
        <GumroadPaymentModal
          isOpen={isPaymentModalOpen}
          onClose={handlePaymentClose}
          sessionId={paymentSessionId}
          productUrl={process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL || ''}
          onPaymentComplete={handlePaymentComplete}
        />
      )}
    </div>
  );
};
