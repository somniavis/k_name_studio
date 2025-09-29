'use client';

import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useAppStore } from '@/store/useAppStore';
import { DatePicker, TimePicker } from '@/components/ui';
import './NameInputScreen.css';

export const NameInputScreen: React.FC = () => {
  const { t } = useTranslation('nameInput');
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);
  const updateUserData = useAppStore((state) => state.updateUserData);
  const userData = useAppStore((state) => state.userData);

  const [formData, setFormData] = useState({
    englishName: userData.firstName || '',
    birthDate: userData.birthDate ? userData.birthDate.toISOString().split('T')[0] : '',
    birthTime: userData.birthTime || '',
    gender: userData.gender || 'any'
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1 && formData.englishName.trim()) {
      updateUserData({ firstName: formData.englishName.trim() });
      setCurrentStep(2);
    } else if (currentStep === 2 && formData.birthDate && formData.birthTime) {
      updateUserData({
        birthDate: new Date(formData.birthDate),
        birthTime: formData.birthTime
      });
      setCurrentStep(3);
    } else if (currentStep === 3) {
      updateUserData({ gender: formData.gender as 'male' | 'female' | 'neutral' });
      setCurrentScreen('results');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentScreen('welcome');
    }
  };

  const isCurrentStepValid = () => {
    if (currentStep === 1) return formData.englishName.trim();
    if (currentStep === 2) return formData.birthDate && formData.birthTime;
    if (currentStep === 3) return true;
    return false;
  };

  return (
    <div className="screen input-screen">
      <div className="input-background">
        <div className="floating-hanbok"></div>
      </div>

      <button className="back-button" onClick={handleBack}>
        ←
      </button>

      <div className="progress-indicator">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
        <div className="progress-steps">
          <span className={currentStep >= 1 ? 'active' : ''}>{t('steps.name')}</span>
          <span className={currentStep >= 2 ? 'active' : ''}>{t('steps.birth')}</span>
          <span className={currentStep >= 3 ? 'active' : ''}>{t('steps.gender')}</span>
        </div>
      </div>

      <div className="screen-content">
        {/* Step 1: English Name */}
        {currentStep === 1 && (
          <div className="step-content">
            <div className="step-header">
              <h2>{t('step1.title')}</h2>
              <p>{t('step1.subtitle')}</p>
            </div>

            <div className="input-group">
              <div className="input-container">
                <input
                  type="text"
                  placeholder={t('step1.placeholder')}
                  value={formData.englishName}
                  onChange={(e) => handleInputChange('englishName', e.target.value)}
                  className="main-input"
                />
                <div className="input-decoration">✨</div>
              </div>
            </div>

            <div className="cultural-note">
              <div className="note-icon">💡</div>
              <p>{t('step1.culturalNote')}</p>
            </div>
          </div>
        )}

        {/* Step 2: Birth Information */}
        {currentStep === 2 && (
          <div className="step-content">
            <div className="step-header">
              <h2>{t('step2.title')}</h2>
              <p>{t('step2.subtitle')}</p>
            </div>

            <div className="input-group">
              <label className="input-label">{t('step2.birthDate')}</label>
              <DatePicker
                value={formData.birthDate}
                onChange={(date) => handleInputChange('birthDate', date)}
                placeholder={t('step2.birthDate')}
              />
            </div>

            <div className="input-group">
              <label className="input-label">{t('step2.birthTime')}</label>
              <TimePicker
                value={formData.birthTime}
                onChange={(time) => handleInputChange('birthTime', time)}
                placeholder={t('step2.birthTime')}
              />
              <div className="input-hint">
                24-hour format (e.g., 14:30)
              </div>
            </div>

            <div className="cultural-note">
              <div className="note-icon">🔮</div>
              <p>{t('step2.culturalNote')}</p>
            </div>
          </div>
        )}

        {/* Step 3: Gender Preference */}
        {currentStep === 3 && (
          <div className="step-content">
            <div className="step-header">
              <h2>{t('step3.title')}</h2>
              <p>{t('step3.subtitle')}</p>
            </div>

            <div className="gender-options">
              {['female', 'male', 'any'].map(option => (
                <button
                  key={option}
                  className={`gender-option ${formData.gender === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('gender', option)}
                >
                  <div className="option-icon">
                    {option === 'female' ? '👩' : option === 'male' ? '👨' : '✨'}
                  </div>
                  <span className="option-text">
                    {t(`step3.options.${option}`)}
                  </span>
                </button>
              ))}
            </div>

            <div className="cultural-note">
              <div className="note-icon">🌸</div>
              <p>{t('step3.culturalNote')}</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom-section">
        <button
          className="bottom-button"
          onClick={handleNext}
          disabled={!isCurrentStepValid()}
        >
          <span>{currentStep === 3 ? t('generateName') : t('continue')}</span>
          <span>{currentStep === 3 ? '🌟' : '→'}</span>
        </button>

        {/* Footer */}
        <footer className="app-footer">
          <p>{t('footer')}</p>
        </footer>
      </div>
    </div>
  );
};