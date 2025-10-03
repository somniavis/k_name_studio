'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { NameResult, UserData } from '@/store/useAppStore';
import '@/components/screens/ResultScreen.css'; // Re-use styles

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

  // Enhanced render logic with full premium features
  return (
    <div className="screen result-screen">
      <div className="screen-content">
        <div className="result-header">
          <div className="celebration-emoji">🎉</div>
          <h1>Your Premium Korean Names</h1>
          <p>Based on &quot;{data.userData.firstName}&quot; with complete Saju analysis</p>
          {data.isPremiumUnlocked && (
            <div className="premium-badge-container">
              <div className="premium-badge">⭐ PREMIUM RESULTS</div>
            </div>
          )}
        </div>

        {/* Data Deletion Notice */}
        <div className="cultural-note" style={{ textAlign: 'center', margin: '0 20px 30px', justifyContent: 'center' }}>
          <div className="note-icon">🔒</div>
          <p>For your privacy, this result page is temporary and will be automatically deleted 15 days after creation.</p>
        </div>

        {/* Free Names Section */}
        {data.freeNames && data.freeNames.length > 0 && (
          <div className="names-section">
            <h2>Your Korean Names</h2>
            <div className="names-container">
              {data.freeNames.map((nameData, index) => (
                <div key={index} className="name-card">
                  <div className="name-header">
                    <div className="name-title-section">
                      <div className="korean-name">{nameData.korean}</div>
                      <div className="romanization">{nameData.pronunciation}</div>
                    </div>
                    {nameData.compatibility && (
                      <div className={`compatibility-badge ${getCompatibilityClass(nameData.compatibility)}`}>
                        {getCompatibilityText(nameData.compatibility)}
                      </div>
                    )}
                  </div>
                  <div className="name-meaning">
                    <h4>Meaning</h4>
                    <p>{nameData.meaning}</p>
                  </div>
                  {nameData.story && (
                    <div className="name-story">
                      <h4>Cultural Story</h4>
                      <p>{nameData.story}</p>
                    </div>
                  )}
                  {nameData.harmony && (
                    <div className="name-harmony">
                      <h4>Saju Harmony</h4>
                      <p>{nameData.harmony}</p>
                    </div>
                  )}
                  {nameData.hanjaBreakdown && (
                    <div className="hanja-breakdown">
                      <h4>Hanja Breakdown</h4>
                      <div className="hanja-characters">
                        {nameData.hanjaBreakdown.characters.map((char, charIndex) => (
                          <div key={charIndex} className="hanja-char">
                            <span className="hanja">{char.hanja}</span>
                            <span className="korean">{char.korean}</span>
                            <span className="meaning">{char.meaning}</span>
                          </div>
                        ))}
                      </div>
                      {nameData.hanjaBreakdown.traditionalMeaning && (
                        <p className="traditional-meaning">{nameData.hanjaBreakdown.traditionalMeaning}</p>
                      )}
                    </div>
                  )}
                  {nameData.kpopMember && (
                    <div className="kpop-connection">
                      <h4>K-Pop Connection</h4>
                      <p>✨ Shares name with {nameData.kpopMember.memberName} from {nameData.kpopMember.group}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Premium Names Section */}
        {data.premiumNames && data.premiumNames.length > 0 && (
          <div className="premium-names-section">
            <div className="premium-header">
              <div className="premium-badge">⭐ PREMIUM</div>
              <h2>Premium Recommended Names</h2>
              <p>These names have been specially selected based on your complete Saju analysis</p>
            </div>
            <div className="names-container">
              {data.premiumNames.map((nameData, index) => (
                <div key={`premium-${index}`} className="name-card premium">
                  <div className="name-header">
                    <div className="name-title-section">
                      <div className="korean-name">{nameData.korean}</div>
                      <div className="romanization">{nameData.pronunciation}</div>
                    </div>
                    {nameData.compatibility && (
                      <div className={`compatibility-badge ${getCompatibilityClass(nameData.compatibility)}`}>
                        {getCompatibilityText(nameData.compatibility)}
                      </div>
                    )}
                  </div>
                  <div className="name-meaning">
                    <h4>Meaning</h4>
                    <p>{nameData.meaning}</p>
                  </div>
                  {nameData.story && (
                    <div className="name-story">
                      <h4>Cultural Story</h4>
                      <p>{nameData.story}</p>
                    </div>
                  )}
                  {nameData.harmony && (
                    <div className="name-harmony">
                      <h4>Saju Harmony</h4>
                      <p>{nameData.harmony}</p>
                    </div>
                  )}
                  {nameData.hanjaBreakdown && (
                    <div className="hanja-breakdown">
                      <h4>Hanja Breakdown</h4>
                      <div className="hanja-characters">
                        {nameData.hanjaBreakdown.characters.map((char, charIndex) => (
                          <div key={charIndex} className="hanja-char">
                            <span className="hanja">{char.hanja}</span>
                            <span className="korean">{char.korean}</span>
                            <span className="meaning">{char.meaning}</span>
                          </div>
                        ))}
                      </div>
                      {nameData.hanjaBreakdown.traditionalMeaning && (
                        <p className="traditional-meaning">{nameData.hanjaBreakdown.traditionalMeaning}</p>
                      )}
                    </div>
                  )}
                  {nameData.kpopMember && (
                    <div className="kpop-connection">
                      <h4>K-Pop Connection</h4>
                      <p>✨ Shares name with {nameData.kpopMember.memberName} from {nameData.kpopMember.group}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Perfect Partner Names Section */}
        {data.oppositeGenderNames && data.oppositeGenderNames.length > 0 && (
          <div className="partner-names-section">
            <div className="partner-header">
              <div className="premium-badge">💕 PERFECT PARTNERS</div>
              <h2>Perfect Partner Names</h2>
              <p>Names that harmonize perfectly with your selected Korean name</p>
            </div>
            <div className="names-container">
              {data.oppositeGenderNames.map((nameData, index) => (
                <div key={`partner-${index}`} className="name-card partner">
                  <div className="name-header">
                    <div className="name-title-section">
                      <div className="korean-name">{nameData.korean}</div>
                      <div className="romanization">{nameData.pronunciation}</div>
                    </div>
                    {nameData.compatibility && (
                      <div className={`compatibility-badge ${getCompatibilityClass(nameData.compatibility)}`}>
                        {getCompatibilityText(nameData.compatibility)}
                      </div>
                    )}
                  </div>
                  <div className="name-meaning">
                    <h4>Meaning</h4>
                    <p>{nameData.meaning}</p>
                  </div>
                  {nameData.story && (
                    <div className="name-story">
                      <h4>Cultural Story</h4>
                      <p>{nameData.story}</p>
                    </div>
                  )}
                  {nameData.harmony && (
                    <div className="name-harmony">
                      <h4>Partner Harmony</h4>
                      <p>{nameData.harmony}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Saju Analysis Section */}
        {data.sajuAnalysis && (
          <div className="saju-analysis-section">
            <div className="analysis-header">
              <div className="premium-badge">🔮 SAJU ANALYSIS</div>
              <h2>Your Complete Four Pillars Analysis</h2>
            </div>

            {data.sajuAnalysis.pillars && data.sajuAnalysis.pillars.length > 0 && (
              <div className="pillars-section">
                <h3>Your Four Pillars</h3>
                <div className="pillars-grid">
                  {data.sajuAnalysis.pillars.map((pillar, index) => (
                    <div key={index} className="pillar-item">
                      <div className="pillar-label">
                        {index === 0 ? 'Year' : index === 1 ? 'Month' : index === 2 ? 'Day' : 'Hour'}
                      </div>
                      <div className="pillar-value">{pillar}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.sajuAnalysis.elements && (
              <div className="elements-section">
                <h3>Elemental Balance</h3>
                <div className="elements-grid">
                  {Object.entries(data.sajuAnalysis.elements).map(([element, count]) => (
                    <div key={element} className="element-item">
                      <div className="element-name">{element}</div>
                      <div className="element-count">{count}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.sajuAnalysis.fortune && (
              <div className="fortune-section">
                <h3>Life Fortune Analysis</h3>
                <div className="fortune-grid">
                  <div className="fortune-item">
                    <h4>Overall</h4>
                    <p>{data.sajuAnalysis.fortune.overall}</p>
                  </div>
                  <div className="fortune-item">
                    <h4>Career</h4>
                    <p>{data.sajuAnalysis.fortune.career}</p>
                  </div>
                  <div className="fortune-item">
                    <h4>Love</h4>
                    <p>{data.sajuAnalysis.fortune.love}</p>
                  </div>
                  <div className="fortune-item">
                    <h4>Health</h4>
                    <p>{data.sajuAnalysis.fortune.health}</p>
                  </div>
                  <div className="fortune-item">
                    <h4>Wealth</h4>
                    <p>{data.sajuAnalysis.fortune.wealth}</p>
                  </div>
                  <div className="fortune-item advice">
                    <h4>Life Advice</h4>
                    <p>{data.sajuAnalysis.fortune.advice}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <footer className="app-footer">
          <p>Copyright ⓒ K-Name-Studio. All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}
