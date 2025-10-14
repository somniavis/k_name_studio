'use client';

import React from 'react';
import { NameResult, UserData } from '@/store/useAppStore';
import '@/components/screens/ResultScreen.css'; // Re-use base styles
import styles from './page.module.css'; // Enhanced share page styles

// Define a comprehensive type for the shared data
interface SharedData {
  userData: Partial<UserData>;
  freeNames: NameResult[];
  premiumNames: NameResult[];
  sajuAnalysis: any; // Simplified for client component
  isPremiumUnlocked: boolean;
  oppositeGenderNames?: NameResult[];
}

interface ShareResultProps {
  data: SharedData;
}

export const ShareResult: React.FC<ShareResultProps> = ({ data }) => {

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
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(korean);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      speechSynthesis.speak(utterance);
    } else {
      alert(`Pronunciation: ${pronunciation}`);
    }
  };

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

        <div className={styles.privacyNotice}>
          <div className={styles.privacyIcon}>🔒</div>
          <p className={styles.privacyText}>For your privacy, this result page is temporary and will be automatically deleted 15 days after creation.</p>
        </div>

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
                  {/* Other sections like meaning, story, etc. */}
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
                  {/* Other sections */}
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className={styles.footer}>
          <p>Copyright ⓒ K-Name-Studio. All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};
