'use client';

import React, { useState } from 'react';
import { NameResult, UserData } from '@/store/useAppStore';
import '@/components/screens/ResultScreen.css';
import styles from './page.module.css';

// Define a comprehensive type for the shared data
interface SharedData {
  userData: Partial<UserData>;
  freeNames: NameResult[];
  premiumNames: NameResult[];
  sajuAnalysis: any;
  isPremiumUnlocked: boolean;
  oppositeGenderNames?: NameResult[];
}

interface ShareResultProps {
  data: SharedData;
}

export const ShareResult: React.FC<ShareResultProps> = ({ data }) => {
  const [selectedName, setSelectedName] = useState<number | null>(null);

  const handleSelectName = (index: number) => {
    setSelectedName(selectedName === index ? null : index);
  };

  const handlePronunciation = (korean: string, pronunciation: string) => {
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

  const getScoreLevel = (score: number) => {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'fair';
    return 'poor';
  };

  return (
    <div className="screen result-screen">
      <div className="result-background">
        <div className="floating-element cherry">🌸</div>
        <div className="floating-element heart">💜</div>
        <div className="floating-element star">✨</div>
      </div>

      <div className="screen-content">
        {/* Custom Share Header */}
        <div className="result-header">
          <div className="celebration-emoji">🎉</div>
          <h1>Your Premium Korean Names</h1>
          <p>Based on &quot;{data.userData.firstName}&quot; with complete Saju analysis</p>
          {data.isPremiumUnlocked && (
            <div className={styles.premiumBadgeContainer}>
              <div className={styles.premiumBadge}>⭐ PREMIUM RESULTS</div>
            </div>
          )}
        </div>

        <div className={styles.privacyNotice}>
          <div className={styles.privacyIcon}>🔒</div>
          <p className={styles.privacyText}>
            For your privacy, this result page is temporary and will be automatically deleted 15 days after creation.
          </p>
        </div>

        {/* Free Names Section */}
        {data.freeNames && data.freeNames.length > 0 && (
          <div className="names-container">
            {data.freeNames.map((nameData, index) => (
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
                      title="Listen to pronunciation"
                    >
                      🔊
                    </button>
                    {nameData.kpopMember ? (
                      <div className="kpop-badge">K-POP</div>
                    ) : (
                      <div className="free-badge">FREE</div>
                    )}
                  </div>
                </div>

                <div className="name-meaning">
                  <h4>Meaning</h4>
                  <p>{nameData.meaning}</p>
                  {nameData.hanjaBreakdown && nameData.hanjaBreakdown.characters && (
                    <div className="korean-breakdown">
                      <div className="korean-characters">
                        {nameData.hanjaBreakdown.characters.map((char: any, charIndex: number) => (
                          <div key={charIndex} className="korean-character">
                            <span className="korean-char">{char.korean}</span>
                            <span className="char-meaning">&quot;{char.meaning}&quot;</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

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
                      Similarity between your name and Korean name pronunciation
                    </span>
                  </div>
                </div>

                {selectedName === index && (
                  <div className="saju-analysis">
                    <h4>Saju Analysis</h4>

                    {data.sajuAnalysis && data.sajuAnalysis.elementBalance && (
                      <div className="elements-analysis">
                        <h5>Elements Balance</h5>
                        <div className="elements-chart">
                          {Object.entries(data.sajuAnalysis.elementBalance).map(([element, count]) => (
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

                    {nameData.fortune && (
                      <div className="fortune-summary">
                        <h5>Fortune Reading</h5>
                        <p>{nameData.fortune}</p>
                      </div>
                    )}

                    {nameData.harmony && (
                      <div className="name-compatibility">
                        <h5>Name Harmony</h5>
                        <p>{nameData.harmony}</p>
                      </div>
                    )}
                  </div>
                )}

                <button className="expand-btn">
                  {selectedName === index ? 'Show Less' : 'View Full Analysis'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Premium Names Section */}
        {data.isPremiumUnlocked && data.premiumNames && data.premiumNames.length > 0 && (
          <div className="premium-names-section">
            <div className="premium-header">
              <div className="premium-badge">PREMIUM</div>
              <h2>Premium Names</h2>
              <p>5 additional names with enhanced cultural stories</p>
            </div>

            <div className="names-container">
              {data.premiumNames.map((nameData, index) => {
                const premiumIndex = data.freeNames.length + index;
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
                          title="Listen to pronunciation"
                        >
                          🔊
                        </button>
                        <div className="premium-badge">⭐</div>
                      </div>
                    </div>

                    <div className="name-meaning">
                      <h4>Meaning</h4>
                      <p>{nameData.meaning}</p>
                      {nameData.hanjaBreakdown && nameData.hanjaBreakdown.characters && (
                        <div className="korean-breakdown">
                          <div className="korean-characters">
                            {nameData.hanjaBreakdown.characters.map((char: any, charIndex: number) => (
                              <div key={charIndex} className="korean-character">
                                <span className="korean-char">{char.korean}</span>
                                <span className="char-meaning">&quot;{char.meaning}&quot;</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

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
                          Similarity between your name and Korean name pronunciation
                        </span>
                      </div>
                    </div>

                    {selectedName === premiumIndex && (
                      <div className="saju-analysis">
                        <h4>Saju Analysis</h4>

                        {data.sajuAnalysis && data.sajuAnalysis.elementBalance && (
                          <div className="elements-analysis">
                            <h5>Elements Balance</h5>
                            <div className="elements-chart">
                              {Object.entries(data.sajuAnalysis.elementBalance).map(([element, count]) => (
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

                        {nameData.fortune && (
                          <div className="fortune-summary">
                            <h5>Fortune Reading</h5>
                            <p>{nameData.fortune}</p>
                          </div>
                        )}

                        {nameData.harmony && (
                          <div className="name-compatibility">
                            <h5>Name Harmony</h5>
                            <p>{nameData.harmony}</p>
                          </div>
                        )}
                      </div>
                    )}

                    <button className="expand-btn">
                      {selectedName === premiumIndex ? 'Show Less' : 'View Full Analysis'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Opposite Gender Names Section */}
        {data.isPremiumUnlocked && data.oppositeGenderNames && data.oppositeGenderNames.length > 0 && (
          <div className="opposite-gender-section">
            <div className="section-header">
              <h2>💕 Perfect Partner Names</h2>
              <p>Perfect harmony names for your partner</p>
            </div>
            <div className="names-grid opposite-gender-grid">
              {data.oppositeGenderNames.map((nameData, index) => {
                const oppositeIndex = data.freeNames.length + data.premiumNames.length + index;
                return (
                  <div
                    key={`opposite-${index}`}
                    className={`name-card partner ${selectedName === oppositeIndex ? 'selected' : ''}`}
                    onClick={() => handleSelectName(oppositeIndex)}
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
                          title="Listen to pronunciation"
                        >
                          🔊
                        </button>
                        <div className="partner-badge">{data.userData.gender === 'male' ? '👩' : '👨'} PARTNER</div>
                      </div>
                    </div>

                    <div className="name-meaning">
                      <h4>Meaning</h4>
                      <p>{nameData.meaning}</p>
                      {nameData.hanjaBreakdown && nameData.hanjaBreakdown.characters && (
                        <div className="korean-breakdown">
                          <div className="korean-characters">
                            {nameData.hanjaBreakdown.characters.map((char: any, charIndex: number) => (
                              <div key={charIndex} className="korean-character">
                                <span className="korean-char">{char.korean}</span>
                                <span className="char-meaning">&quot;{char.meaning}&quot;</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

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
                          Similarity between your name and Korean name pronunciation
                        </span>
                      </div>
                    </div>

                    {selectedName === oppositeIndex && (
                      <div className="saju-analysis">
                        <h4>Saju Analysis</h4>

                        {data.sajuAnalysis && data.sajuAnalysis.elementBalance && (
                          <div className="elements-analysis">
                            <h5>Elements Balance</h5>
                            <div className="elements-chart">
                              {Object.entries(data.sajuAnalysis.elementBalance).map(([element, count]) => (
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

                        {nameData.fortune && (
                          <div className="fortune-summary">
                            <h5>Fortune Reading</h5>
                            <p>{nameData.fortune}</p>
                          </div>
                        )}

                        {nameData.harmony && (
                          <div className="name-compatibility">
                            <h5>Name Harmony</h5>
                            <p>{nameData.harmony}</p>
                          </div>
                        )}
                      </div>
                    )}

                    <button className="expand-btn">
                      {selectedName === oppositeIndex ? 'Show Less' : 'View Full Analysis'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Premium 15-Day Share Link Info */}
        {data.isPremiumUnlocked && (
          <div className="premium-share-highlight">
            <div className="premium-share-header">
              <div className="premium-badge-large">⭐ PREMIUM</div>
              <h3 className="premium-share-title">🔗 15-Day Share Link</h3>
              <p className="premium-share-subtitle">This special link saves your results for 15 days</p>
            </div>
            <div className="premium-share-result">
              <div className="link-info">
                <span className="link-label">🔗 You&apos;re viewing a shared link</span>
                <span className="expiry-info">Valid for 15 days from creation</span>
              </div>
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
