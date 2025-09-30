'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { NameResult, UserData } from '@/store/useAppStore';
import '@/components/screens/ResultScreen.css'; // Re-use styles

// Define a type for the shared data
interface SharedData {
  userData: Partial<UserData>;
  freeNames: NameResult[];
  premiumNames: NameResult[];
  sajuAnalysis: {
    pillars?: string[];
    elements?: Record<string, number>;
    fortune?: { overall: string; career: string; love: string; health: string; wealth: string; advice: string; };
  };
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

  // Simplified render logic copied from ResultScreen
  // This should be refactored into a reusable component later
  return (
    <div className="screen result-screen">
      <div className="screen-content">
        <div className="result-header">
          <div className="celebration-emoji">🎉</div>
          <h1>Your Saved Korean Names</h1>
          <p>Based on &quot;{data.userData.firstName}&quot; and Saju analysis</p>
        </div>

        {/* Data Deletion Notice */}
        <div className="cultural-note" style={{ textAlign: 'center', margin: '0 20px 30px', justifyContent: 'center' }}>
          <div className="note-icon">🔒</div>
          <p>For your privacy, this result page is temporary and will be automatically deleted 15 days after creation.</p>
        </div>

        {/* Free Names Section */}
        <div className="names-container">
          {data.freeNames.map((nameData, index) => (
            <div key={index} className="name-card">
              {/* Simplified rendering of the name card */}
              <div className="name-header">
                <div className="name-title-section">
                  <div className="korean-name">{nameData.korean}</div>
                  <div className="romanization">{nameData.pronunciation}</div>
                </div>
              </div>
              <div className="name-meaning">
                <h4>Meaning</h4>
                <p>{nameData.meaning}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Names Section */}
        {data.premiumNames && data.premiumNames.length > 0 && (
          <div className="premium-names-section">
            <div className="premium-header">
              <div className="premium-badge">PREMIUM</div>
              <h2>Premium Names</h2>
            </div>
            <div className="names-container">
              {data.premiumNames.map((nameData, index) => (
                <div key={`premium-${index}`} className="name-card premium">
                  {/* Simplified rendering */}
                   <div className="name-header">
                    <div className="name-title-section">
                      <div className="korean-name">{nameData.korean}</div>
                      <div className="romanization">{nameData.pronunciation}</div>
                    </div>
                  </div>
                  <div className="name-meaning">
                    <h4>Meaning</h4>
                    <p>{nameData.meaning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
         <footer className="app-footer">
          <p>Copyright ⓒ K-Name-Studio. All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}
