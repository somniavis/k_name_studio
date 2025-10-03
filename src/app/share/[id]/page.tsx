'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { NameResult, UserData } from '@/store/useAppStore';
import '@/components/screens/ResultScreen.css'; // Re-use base styles
import styles from './page.module.css'; // Enhanced share page styles

// Define a comprehensive type for the shared data
interface SharedData {
  userData: Partial<UserData>;
  freeNames: NameResult[];
  premiumNames: NameResult[];
  sajuAnalysis: {
    pillars?: string[];
    elements?: Record<string, number>;
    fortune?: { overall: string; career: string; love: string; health: string; wealth: string; advice: string; };
  };
  isPremiumUnlocked: boolean;
  oppositeGenderNames?: NameResult[];
}

export default function SharePage() {
  const params = useParams();
  const id = params.id as string;

  const [data, setData] = useState<SharedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/share/${id}`)
        .then(async (res) => {
          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || 'Failed to fetch data');
          }
          return res.json();
        })
        .then((fetchedData) => {
          setData(fetchedData);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div className="screen result-screen"><div className="loading-container"><h2>Loading your results...</h2></div></div>;
  }

  if (error || !data) {
    return (
      <div className="screen result-screen">
        <div className="result-header">
          <h1>Link Expired or Invalid</h1>
          <p>The link you used may have expired (results are saved for 15 days) or is incorrect.</p>
        </div>
      </div>
    );
  }

  const getCompatibilityClass = (compatibility: string) => {
    switch (compatibility) {
      case 'excellent': return 'excellent';
      case 'good': return 'good';
      case 'fair': return 'moderate';
      case 'poor': return 'weak';
      default: return 'moderate';
    }
  };

  const getCompatibilityText = (compatibility: string) => {
    switch (compatibility) {
      case 'excellent': return 'Perfect Match';
      case 'good': return 'Great Match';
      case 'fair': return 'Fair Match';
      case 'poor': return 'Unique Path';
      default: return 'Unique Path';
    }
  };

  const playPronunciation = (korean: string, pronunciation: string) => {
    // Use Web Speech API to pronounce the Korean name
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(korean);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      speechSynthesis.speak(utterance);
    } else {
      // Fallback: show pronunciation text
      alert(`Pronunciation: ${pronunciation}`);
    }
  };

  // Enhanced render logic with full premium features
  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareContent}>
        <div className={styles.headerSection}>
          <div className={styles.celebrationEmoji}>🎉</div>
          <h1 className={styles.shareTitle}>Your Premium Korean Names</h1>
          <p className={styles.shareSubtitle}>Based on &quot;{data.userData.firstName}&quot; with complete Saju analysis</p>
          {data.isPremiumUnlocked && (
            <div className={styles.premiumBadgeContainer}>
              <div className={styles.premiumBadge}>⭐ PREMIUM RESULTS</div>
            </div>
          )}
        </div>

        {/* Data Deletion Notice */}
        <div className={styles.privacyNotice}>
          <div className={styles.privacyIcon}>🔒</div>
          <p className={styles.privacyText}>For your privacy, this result page is temporary and will be automatically deleted 15 days after creation.</p>
        </div>

        {/* Free Names Section */}
        {data.freeNames && data.freeNames.length > 0 && (
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Your Korean Names</h2>
            </div>
            <div className={styles.namesGrid}>
              {data.freeNames.map((nameData, index) => (
                <div key={index} className={styles.nameCard}>
                  <div className={styles.nameHeader}>
                    <div className={styles.nameTitleSection}>
                      <div className={styles.koreanName}>{nameData.korean}</div>
                      <div className={styles.romanization}>
                        <span>{nameData.pronunciation}</span>
                        <button
                          className={styles.pronunciationButton}
                          onClick={() => playPronunciation(nameData.korean, nameData.pronunciation)}
                          title="Listen to pronunciation"
                        >
                          🔊
                        </button>
                      </div>
                    </div>
                    {nameData.compatibility && (
                      <div className={`${styles.compatibilityBadge} ${styles[getCompatibilityClass(nameData.compatibility)]}`}>
                        {getCompatibilityText(nameData.compatibility)}
                      </div>
                    )}
                  </div>
                  <div className={styles.nameSection}>
                    <h4 className={styles.nameSectionTitle}>💎 Meaning</h4>
                    <p className={styles.nameSectionText}>{nameData.meaning}</p>
                  </div>
                  {nameData.story && (
                    <div className={styles.nameSection}>
                      <h4 className={styles.nameSectionTitle}>📚 Cultural Story</h4>
                      <p className={styles.nameSectionText}>{nameData.story}</p>
                    </div>
                  )}
                  {nameData.harmony && (
                    <div className={styles.nameSection}>
                      <h4 className={styles.nameSectionTitle}>🔮 Saju Harmony</h4>
                      <p className={styles.nameSectionText}>{nameData.harmony}</p>
                    </div>
                  )}
                  {nameData.hanjaBreakdown && (
                    <div className={`${styles.nameSection} ${styles.hanjaBreakdown}`}>
                      <h4 className={styles.nameSectionTitle}>🈯 Hanja Breakdown</h4>
                      <div className={styles.hanjaCharacters}>
                        {nameData.hanjaBreakdown.characters.map((char, charIndex) => (
                          <div key={charIndex} className={styles.hanjaChar}>
                            <span className={styles.hanja}>{char.hanja}</span>
                            <span className={styles.korean}>{char.korean}</span>
                            <span className={styles.meaning}>{char.meaning}</span>
                          </div>
                        ))}
                      </div>
                      {nameData.hanjaBreakdown.traditionalMeaning && (
                        <p className={styles.traditionalMeaning}>{nameData.hanjaBreakdown.traditionalMeaning}</p>
                      )}
                    </div>
                  )}
                  {nameData.kpopMember && (
                    <div className={`${styles.nameSection} ${styles.kpopConnection}`}>
                      <h4 className={styles.nameSectionTitle}>🎤 K-Pop Connection</h4>
                      <p className={styles.nameSectionText}>✨ Shares name with {nameData.kpopMember.memberName} from {nameData.kpopMember.group}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Premium Names Section */}
        {data.premiumNames && data.premiumNames.length > 0 && (
          <div className={styles.sectionContainer}>
            <div className={`${styles.sectionHeader} ${styles.premiumHeader}`}>
              <div className={styles.premiumBadge}>⭐ PREMIUM</div>
              <h2 className={styles.sectionTitle}>Premium Recommended Names</h2>
              <p className={styles.sectionDescription}>These names have been specially selected based on your complete Saju analysis</p>
            </div>
            <div className={styles.namesGrid}>
              {data.premiumNames.map((nameData, index) => (
                <div key={`premium-${index}`} className={`${styles.nameCard} ${styles.premium}`}>
                  <div className={styles.nameHeader}>
                    <div className={styles.nameTitleSection}>
                      <div className={styles.koreanName}>{nameData.korean}</div>
                      <div className={styles.romanization}>
                        <span>{nameData.pronunciation}</span>
                        <button
                          className={styles.pronunciationButton}
                          onClick={() => playPronunciation(nameData.korean, nameData.pronunciation)}
                          title="Listen to pronunciation"
                        >
                          🔊
                        </button>
                      </div>
                    </div>
                    {nameData.compatibility && (
                      <div className={`${styles.compatibilityBadge} ${styles[getCompatibilityClass(nameData.compatibility)]}`}>
                        {getCompatibilityText(nameData.compatibility)}
                      </div>
                    )}
                  </div>
                  <div className={styles.nameSection}>
                    <h4 className={styles.nameSectionTitle}>💎 Meaning</h4>
                    <p className={styles.nameSectionText}>{nameData.meaning}</p>
                  </div>
                  {nameData.story && (
                    <div className={styles.nameSection}>
                      <h4 className={styles.nameSectionTitle}>📚 Cultural Story</h4>
                      <p className={styles.nameSectionText}>{nameData.story}</p>
                    </div>
                  )}
                  {nameData.harmony && (
                    <div className={styles.nameSection}>
                      <h4 className={styles.nameSectionTitle}>🔮 Saju Harmony</h4>
                      <p className={styles.nameSectionText}>{nameData.harmony}</p>
                    </div>
                  )}
                  {nameData.hanjaBreakdown && (
                    <div className={`${styles.nameSection} ${styles.hanjaBreakdown}`}>
                      <h4 className={styles.nameSectionTitle}>🈯 Hanja Breakdown</h4>
                      <div className={styles.hanjaCharacters}>
                        {nameData.hanjaBreakdown.characters.map((char, charIndex) => (
                          <div key={charIndex} className={styles.hanjaChar}>
                            <span className={styles.hanja}>{char.hanja}</span>
                            <span className={styles.korean}>{char.korean}</span>
                            <span className={styles.meaning}>{char.meaning}</span>
                          </div>
                        ))}
                      </div>
                      {nameData.hanjaBreakdown.traditionalMeaning && (
                        <p className={styles.traditionalMeaning}>{nameData.hanjaBreakdown.traditionalMeaning}</p>
                      )}
                    </div>
                  )}
                  {nameData.kpopMember && (
                    <div className={`${styles.nameSection} ${styles.kpopConnection}`}>
                      <h4 className={styles.nameSectionTitle}>🎤 K-Pop Connection</h4>
                      <p className={styles.nameSectionText}>✨ Shares name with {nameData.kpopMember.memberName} from {nameData.kpopMember.group}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Perfect Partner Names Section */}
        {data.oppositeGenderNames && data.oppositeGenderNames.length > 0 && (
          <div className={styles.sectionContainer}>
            <div className={`${styles.sectionHeader} ${styles.partnerHeader}`}>
              <div className={styles.premiumBadge}>💕 PERFECT PARTNERS</div>
              <h2 className={styles.sectionTitle}>Perfect Partner Names</h2>
              <p className={styles.sectionDescription}>Names that harmonize perfectly with your selected Korean name</p>
            </div>
            <div className={styles.namesGrid}>
              {data.oppositeGenderNames.map((nameData, index) => (
                <div key={`partner-${index}`} className={`${styles.nameCard} ${styles.partner}`}>
                  <div className={styles.nameHeader}>
                    <div className={styles.nameTitleSection}>
                      <div className={styles.koreanName}>{nameData.korean}</div>
                      <div className={styles.romanization}>
                        <span>{nameData.pronunciation}</span>
                        <button
                          className={styles.pronunciationButton}
                          onClick={() => playPronunciation(nameData.korean, nameData.pronunciation)}
                          title="Listen to pronunciation"
                        >
                          🔊
                        </button>
                      </div>
                    </div>
                    {nameData.compatibility && (
                      <div className={`${styles.compatibilityBadge} ${styles[getCompatibilityClass(nameData.compatibility)]}`}>
                        {getCompatibilityText(nameData.compatibility)}
                      </div>
                    )}
                  </div>
                  <div className={styles.nameSection}>
                    <h4 className={styles.nameSectionTitle}>💎 Meaning</h4>
                    <p className={styles.nameSectionText}>{nameData.meaning}</p>
                  </div>
                  {nameData.story && (
                    <div className={styles.nameSection}>
                      <h4 className={styles.nameSectionTitle}>📚 Cultural Story</h4>
                      <p className={styles.nameSectionText}>{nameData.story}</p>
                    </div>
                  )}
                  {nameData.harmony && (
                    <div className={styles.nameSection}>
                      <h4 className={styles.nameSectionTitle}>💕 Partner Harmony</h4>
                      <p className={styles.nameSectionText}>{nameData.harmony}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Saju Analysis Section */}
        {data.sajuAnalysis && (
          <div className={styles.sectionContainer}>
            <div className={`${styles.sectionHeader} ${styles.sajuHeader}`}>
              <div className={`${styles.premiumBadge} ${styles.sajuBadge}`}>🔮 SAJU ANALYSIS</div>
              <h2 className={styles.sectionTitle}>Your Life Fortune Analysis</h2>
              <p className={`${styles.sectionDescription} ${styles.analysisSubtitle}`}>Based on your birth details and Korean metaphysics</p>
            </div>

            {data.sajuAnalysis.elements && (
              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>📊 Elemental Balance</h3>
                <div className={styles.elementsGrid}>
                  {Object.entries(data.sajuAnalysis.elements).map(([element, count]) => (
                    <div key={element} className={styles.elementItem}>
                      <div className={styles.elementIcon}>
                        {element === 'wood' ? '🌲' :
                         element === 'fire' ? '🔥' :
                         element === 'earth' ? '⛰️' :
                         element === 'metal' ? '⚡' : '💧'}
                      </div>
                      <div className={styles.elementDetails}>
                        <div className={styles.elementName}>{element.charAt(0).toUpperCase() + element.slice(1)}</div>
                        <div className={styles.elementCount}>{count}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.sajuAnalysis.fortune && (
              <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>🌟 Life Aspects</h3>
                <div className={styles.fortuneGrid}>
                  <div className={styles.fortuneItem}>
                    <div className={styles.fortuneIcon}>🎯</div>
                    <h4>Overall</h4>
                    <p>{data.sajuAnalysis.fortune.overall}</p>
                  </div>
                  <div className={styles.fortuneItem}>
                    <div className={styles.fortuneIcon}>💼</div>
                    <h4>Career</h4>
                    <p>{data.sajuAnalysis.fortune.career}</p>
                  </div>
                  <div className={styles.fortuneItem}>
                    <div className={styles.fortuneIcon}>💕</div>
                    <h4>Love</h4>
                    <p>{data.sajuAnalysis.fortune.love}</p>
                  </div>
                  <div className={styles.fortuneItem}>
                    <div className={styles.fortuneIcon}>🌿</div>
                    <h4>Health</h4>
                    <p>{data.sajuAnalysis.fortune.health}</p>
                  </div>
                  <div className={styles.fortuneItem}>
                    <div className={styles.fortuneIcon}>💰</div>
                    <h4>Wealth</h4>
                    <p>{data.sajuAnalysis.fortune.wealth}</p>
                  </div>
                  <div className={`${styles.fortuneItem} ${styles.advice}`}>
                    <div className={styles.fortuneIcon}>💡</div>
                    <h4>Life Advice</h4>
                    <p>{data.sajuAnalysis.fortune.advice}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <footer className={styles.footer}>
          <p>Copyright ⓒ K-Name-Studio. All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}
