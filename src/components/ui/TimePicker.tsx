'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface TimePickerProps {
  value?: string;
  onChange: (time: string) => void;
  placeholder?: string;
  className?: string;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  value = '',
  onChange,
  placeholder = 'Select time',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<{ hours: number; minutes: number } | null>(
    value ? {
      hours: parseInt(value.split(':')[0]) || 0,
      minutes: parseInt(value.split(':')[1]) || 0
    } : null
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const { locale } = useTranslation();
  const { t: tCommon } = useTranslation('common');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDisplayTime = (hours: number, minutes: number) => {
    if (locale === 'ko') {
      const period = hours >= 12 ? '오후' : '오전';
      const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
      return `${period} ${displayHours}:${minutes.toString().padStart(2, '0')}`;
    }
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  const handleTimeSelect = (hours: number, minutes: number) => {
    setSelectedTime({ hours, minutes });
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    onChange(timeString);
    setIsOpen(false);
  };

  const handleHourSelect = (hour: number) => {
    const currentMinutes = selectedTime?.minutes;
    const newSelectedTime = { hours: hour, minutes: currentMinutes || 0 };
    setSelectedTime(newSelectedTime);
    const timeString = `${hour.toString().padStart(2, '0')}:${(currentMinutes || 0).toString().padStart(2, '0')}`;
    onChange(timeString);

    // 시간과 분이 모두 선택되었고, 분이 이미 선택되어 있었다면 닫기
    if (currentMinutes !== null && currentMinutes !== undefined) {
      setIsOpen(false);
    }
  };

  const handleMinuteSelect = (minute: number) => {
    const currentHours = selectedTime?.hours;
    const newSelectedTime = { hours: currentHours || 0, minutes: minute };
    setSelectedTime(newSelectedTime);
    const timeString = `${(currentHours || 0).toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    onChange(timeString);

    // 시간과 분이 모두 선택되었고, 시간이 이미 선택되어 있었다면 닫기
    if (currentHours !== null && currentHours !== undefined) {
      setIsOpen(false);
    }
  };

  const generateHours = () => {
    return Array.from({ length: 24 }, (_, i) => i);
  };

  const generateMinutes = () => {
    return Array.from({ length: 60 }, (_, i) => i);
  };

  const hours = generateHours();
  const minutes = generateMinutes();

  const isSelected = (hours: number, minutes: number) => {
    return selectedTime?.hours === hours && selectedTime?.minutes === minutes;
  };

  return (
    <div className={`time-picker-container ${className}`} ref={containerRef}>
      <div className={`input-container ${isOpen ? 'input-focused' : ''}`}>
        <input
          type="text"
          className="main-input"
          placeholder={placeholder}
          value={selectedTime ? formatDisplayTime(selectedTime.hours, selectedTime.minutes) : ''}
          onFocus={() => setIsOpen(true)}
          readOnly
        />
        <button
          type="button"
          className="input-decoration"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '16px',
            opacity: 0.7
          }}
        >
          🕐
        </button>
      </div>

      {isOpen && (
        <div className="time-picker-dropdown">
          <div className="time-picker-header">
            <h3 className="time-picker-title">
              {tCommon('time.selectTime') || 'Select Time'}
            </h3>
          </div>

          <div className="time-picker-columns">
            <div className="time-picker-column">
              <div className="time-picker-column-header">
                {tCommon('time.hour') || 'Hour'}
              </div>
              <div className="time-picker-slots">
                {hours.map((hour) => (
                  <button
                    key={hour}
                    type="button"
                    className={`time-picker-slot ${selectedTime?.hours === hour ? 'time-picker-slot-selected' : ''}`}
                    onClick={() => handleHourSelect(hour)}
                  >
                    {hour.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            <div className="time-picker-column">
              <div className="time-picker-column-header">
                {tCommon('time.minute') || 'Min'}
              </div>
              <div className="time-picker-slots">
                {minutes.map((minute) => (
                  <button
                    key={minute}
                    type="button"
                    className={`time-picker-slot ${selectedTime?.minutes === minute ? 'time-picker-slot-selected' : ''}`}
                    onClick={() => handleMinuteSelect(minute)}
                  >
                    {minute.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="time-picker-footer">
            <button
              type="button"
              className="time-picker-now-button"
              onClick={() => {
                const now = new Date();
                const currentHours = now.getHours();
                const currentMinutes = now.getMinutes();
                handleTimeSelect(currentHours, currentMinutes);
              }}
            >
              {tCommon('time.now') || 'Now'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};