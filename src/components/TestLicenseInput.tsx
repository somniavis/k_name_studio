'use client';

import { useState } from 'react';

interface TestLicenseInputProps {
  onVerify: (licenseKey: string) => void;
}

export default function TestLicenseInput({ onVerify }: TestLicenseInputProps) {
  const [licenseKey, setLicenseKey] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/gumroad/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ licenseKey }),
      });

      const result = await response.json();

      if (result.valid) {
        alert('✅ 라이센스 검증 성공!');
        onVerify(licenseKey);
      } else {
        alert('❌ 유효하지 않은 라이센스 키입니다.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert('검증 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>🧪 테스트: 라이센스 입력</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={licenseKey}
          onChange={(e) => setLicenseKey(e.target.value)}
          placeholder="라이센스 키 입력"
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '12px'
          }}
        />
        <button
          type="submit"
          disabled={loading || !licenseKey}
          style={{
            width: '100%',
            padding: '8px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          {loading ? '검증 중...' : '검증하기'}
        </button>
      </form>
      <p style={{ margin: '10px 0 0 0', fontSize: '11px', color: '#666' }}>
        개발 모드 전용 (운영에서는 숨김)
      </p>
    </div>
  );
}
