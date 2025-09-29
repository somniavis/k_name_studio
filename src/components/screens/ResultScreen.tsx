'use client';

import React, { useEffect, useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { useTranslation } from '@/hooks/useTranslation';
import { generateKoreanNames, getSajuAnalysis, generateAdditionalPremiumNames } from '@/utils/nameGenerator';
import { NameResult, UserData } from '@/store/useAppStore';
import './ResultScreen.css';

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
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);
  const unlockPremium = useAppStore((state) => state.unlockPremium);

  const [sajuAnalysis, setSajuAnalysis] = useState<{
    pillars?: string[];
    elements?: Record<string, number>;
    fortune?: { overall: string; career: string; love: string; health: string; wealth: string; advice: string; };
  } | null>(null);
  const [selectedName, setSelectedName] = useState<number | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const generateNames = async () => {
    if (!userData.birthDate || !userData.firstName || !userData.gender) return;

    setIsGenerating(true);
    setLoadingStep(0);

    try {
      // Simulate loading steps
      setTimeout(() => setLoadingStep(1), 800);
      setTimeout(() => setLoadingStep(2), 1600);

      // Generate names
      const { freeNames: newFreeNames, premiumNames: newPremiumNames } = generateKoreanNames({
        userData: userData as UserData,
        locale
      });

      // Get Saju analysis
      const analysis = getSajuAnalysis(userData.birthDate, userData.birthTime, locale);

      // Final delay before showing results
      await new Promise(resolve => setTimeout(resolve, 2000));

      setFreeNames(newFreeNames);
      setPremiumNames(newPremiumNames);
      setSajuAnalysis(analysis);
    } catch (error) {
      console.error('Name generation failed:', error);
    } finally {
      setIsGenerating(false);
      setLoadingStep(0);
    }
  };

  useEffect(() => {
    if (userData.birthDate && freeNames.length === 0 && !isGenerating) {
      generateNames();
    }
  }, [userData, freeNames.length, isGenerating, generateNames]);

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

  const handleUnlockPremium = () => {
    // Simulate payment success and generate opposite gender names
    setTimeout(() => {
      if (userData.birthDate && userData.firstName && userData.gender) {
        // Generate only opposite gender names
        const { oppositeGenderNames } = generateAdditionalPremiumNames({
          userData: userData as UserData,
          locale
        });

        // Unlock premium with only opposite gender names
        unlockPremium(premiumNames, [], oppositeGenderNames);
      } else {
        // Fallback if userData is incomplete
        unlockPremium(premiumNames);
      }
    }, 1000); // Simulate payment processing time

    setIsPaymentModalOpen(true);
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

  const handleShare = (platform: string, nameData: NameResult) => {
    const shareText = `My Korean name is ${nameData.korean} (${nameData.pronunciation})! 🇰🇷✨`;
    const shareUrl = window.location.href;

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareText).then(() => {
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
      });
    } else if (platform === 'instagram') {
      navigator.clipboard.writeText(`${shareText}\n\nGenerate your Korean name: ${shareUrl}`);
      window.open('https://www.instagram.com/', '_blank');
      alert('✅ Text copied to clipboard!\n\n📸 Instagram opened in new tab.\nPaste the text in your story or post!');
    } else if (platform === 'tiktok') {
      navigator.clipboard.writeText(`${shareText}\n\nGenerate your Korean name: ${shareUrl}`);
      window.open('https://www.tiktok.com/upload', '_blank');
      alert('✅ Text copied to clipboard!\n\n🎬 TikTok upload page opened.\nPaste the text in your video description!');
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
      <button className="back-button" onClick={() => setCurrentScreen('nameInput')}>
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

<div className="name-story">
                <h5>{t('culturalStory')}</h5>
                <p>
                  {nameData.story || 'Story not available'}
                </p>
              </div>

              <div className="pronunciation-match">
                <h4>{t('soundMatch')}</h4>
                <div className="match-score">
                  <div className="score-bar">
                    <div
                      className={`score-fill ${getScoreLevel(nameData.pronunciationMatch || 50)}`}
                      style={{ width: `${nameData.pronunciationMatch || 50}%` }}
                    ></div>
                  </div>
                  <span className="score-percentage">{nameData.pronunciationMatch || 50}%</span>
                </div>
                <div className="score-description">
                  <span className="score-label">{getScoreLevelText(nameData.pronunciationMatch || 50)} - {getScoreDescription(nameData.pronunciationMatch || 50)}</span>
                </div>
              </div>

              {selectedName === index && (
                <div className="saju-analysis">
                  <h4>{t('sajuAnalysis') || 'Saju Analysis'}</h4>

                  {sajuAnalysis && Array.isArray(sajuAnalysis.pillars) && (
                    <div className="four-pillars">
                      <h5>{t('fourPillars') || 'Four Pillars'}</h5>
                      <div className="pillars-grid">
                        <div className="pillar-item">
                          <span className="pillar-label">{t('yearPillar') || 'Year'}</span>
                          <span className="pillar-value">{sajuAnalysis.pillars[0] || '갑자'}</span>
                        </div>
                        <div className="pillar-item">
                          <span className="pillar-label">{t('monthPillar') || 'Month'}</span>
                          <span className="pillar-value">{sajuAnalysis.pillars[1] || '정묘'}</span>
                        </div>
                        <div className="pillar-item">
                          <span className="pillar-label">{t('dayPillar') || 'Day'}</span>
                          <span className="pillar-value">{sajuAnalysis.pillars[2] || '무신'}</span>
                        </div>
                        <div className="pillar-item">
                          <span className="pillar-label">{t('timePillar') || 'Time'}</span>
                          <span className="pillar-value">{sajuAnalysis.pillars[3] || '기유'}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {sajuAnalysis && sajuAnalysis.elements && (
                    <div className="elements-analysis">
                      <h5>{t('elementsBalance')}</h5>
                      <div className="elements-chart">
                        {Object.entries(sajuAnalysis.elements).map(([element, count]) => (
                          <div key={element} className="element-bar">
                            <span className="element-name">{element.charAt(0).toUpperCase() + element.slice(1)}</span>
                            <div className="element-progress">
                              <div
                                className={`element-fill ${element}`}
                                style={{ width: `${((count as number) / 8) * 100}%` }}
                              ></div>
                            </div>
                            <span className="element-count">{count as number}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="fortune-summary">
                    <h5>{t('destinyReading')}</h5>
                    <p>{nameData.fortune || sajuAnalysis?.fortune?.overall || 'This name brings harmony and prosperity to your life path.'}</p>
                  </div>

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
        {isPremiumUnlocked && premiumNames.length > 0 && (
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

                    {nameData.story && (
                      <div className="name-story">
                        <h5>{t('culturalStory') || 'Cultural Story'}</h5>
                        <p>{nameData.story}</p>
                      </div>
                    )}

                    <div className="pronunciation-match">
                      <h4>{t('soundMatch')}</h4>
                      <div className="match-score">
                        <div className="score-bar">
                          <div
                            className={`score-fill ${getCompatibilityColor(nameData.compatibility || 'fair')}`}
                            style={{ width: `${Math.floor(Math.random() * 20 + 80)}%` }}
                          ></div>
                        </div>
                        <span className="score-percentage">{Math.floor(Math.random() * 20 + 80)}%</span>
                      </div>
                      <div className="score-description">
                        <span className="score-label">{getCompatibilityText(nameData.compatibility || 'excellent')}</span>
                      </div>
                    </div>

                    {selectedName === premiumIndex && (
                      <div className="saju-analysis">
                        <h4>{t('sajuAnalysis') || 'Saju Analysis'}</h4>

                        {sajuAnalysis && Array.isArray(sajuAnalysis.pillars) && (
                          <div className="four-pillars">
                            <h5>{t('fourPillars') || 'Four Pillars'}</h5>
                            <div className="pillars-grid">
                              <div className="pillar-item">
                                <span className="pillar-label">{t('yearPillar') || 'Year'}</span>
                                <span className="pillar-value">{sajuAnalysis.pillars[0] || '갑자'}</span>
                              </div>
                              <div className="pillar-item">
                                <span className="pillar-label">{t('monthPillar') || 'Month'}</span>
                                <span className="pillar-value">{sajuAnalysis.pillars[1] || '정묘'}</span>
                              </div>
                              <div className="pillar-item">
                                <span className="pillar-label">{t('dayPillar') || 'Day'}</span>
                                <span className="pillar-value">{sajuAnalysis.pillars[2] || '무신'}</span>
                              </div>
                              <div className="pillar-item">
                                <span className="pillar-label">{t('timePillar') || 'Time'}</span>
                                <span className="pillar-value">{sajuAnalysis.pillars[3] || '기유'}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="fortune-summary">
                          <h5>{t('destinyReading')}</h5>
                          <p>{nameData.fortune || sajuAnalysis?.fortune?.overall || 'This premium name carries exceptional energy for success and harmony.'}</p>
                        </div>

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
            <div className="cta-content">
              <h3>{t('premiumCta.title') || 'Unlock Premium Names'}</h3>
              <p>{t('premiumCta.description') || 'Get 10 additional premium names with enhanced cultural stories and detailed analysis'}</p>
              <div className="cta-features">
                <span>{t('premiumCta.features.kpop') || '✨ K-Pop Names'}</span>
                <span>{t('premiumCta.features.analysis') || '📊 Deep Analysis'}</span>
                <span>{t('premiumCta.features.matching') || '🎯 Perfect Matching'}</span>
              </div>
            </div>
            <button
              className="premium-button"
              onClick={handleUnlockPremium}
            >
              {t('unlockPremium') || 'Unlock Premium'} - $2.99
            </button>
          </div>
        )}


        {/* Opposite Gender Names Section */}
        {isPremiumUnlocked && oppositeGenderNames.length > 0 && (
          <div className="opposite-gender-section">
            <div className="section-header">
              <h2>💕 Compatible Partner Names</h2>
              <p>Perfect harmony names for your {userData.gender === 'male' ? 'female' : 'male'} partner</p>
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

                      <div className="cultural-story">
                        <h4>{t('culturalStory') || 'Cultural Story'}</h4>
                        <p>{nameData.story}</p>
                      </div>

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

        {/* Show sharing section only after premium purchase or with free names */}
        {(isPremiumUnlocked && premiumNames.length > 0) || freeNames.length > 0 && (
          <div className="share-section">
            <h3>{t('sharing.title') || 'Share Your Korean Name!'}</h3>
            <p className="share-description">
              {t('sharing.subtitle') || 'Show off your new Korean name on social media'}
            </p>

            <div className="share-buttons">
              <button
                className="share-btn instagram"
                onClick={() => handleShare('instagram', freeNames[0] || premiumNames[0])}
              >
                {t('shareButtons.instagram')}
              </button>
              <button
                className="share-btn tiktok"
                onClick={() => handleShare('tiktok', freeNames[0] || premiumNames[0])}
              >
                {t('shareButtons.tiktok')}
              </button>
              <button
                className="share-btn copy"
                onClick={() => handleShare('copy', freeNames[0] || premiumNames[0])}
              >
                {copiedToClipboard ? `✅ ${t('sharing.copied') || 'Copied!'}` : `📋 ${t('sharing.copy') || 'Copy Text'}`}
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="app-footer">
          <p>{t('footer')}</p>
        </footer>
      </div>
    </div>
  );
};