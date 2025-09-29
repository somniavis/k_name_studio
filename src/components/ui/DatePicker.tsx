'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface DatePickerProps {
  value?: string;
  onChange: (date: string) => void;
  placeholder?: string;
  className?: string;
}

type CalendarView = 'date' | 'month' | 'year';

export const DatePicker: React.FC<DatePickerProps> = ({
  value = '',
  onChange,
  placeholder = 'Select date',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null
  );
  const [viewDate, setViewDate] = useState(
    value ? new Date(value) : new Date()
  );
  const [currentView, setCurrentView] = useState<CalendarView>('date');
  const containerRef = useRef<HTMLDivElement>(null);
  const { locale } = useTranslation();

  const { t: tCommon } = useTranslation('common');

  const months = useMemo(() => [
    tCommon('months.january') || 'January',
    tCommon('months.february') || 'February',
    tCommon('months.march') || 'March',
    tCommon('months.april') || 'April',
    tCommon('months.may') || 'May',
    tCommon('months.june') || 'June',
    tCommon('months.july') || 'July',
    tCommon('months.august') || 'August',
    tCommon('months.september') || 'September',
    tCommon('months.october') || 'October',
    tCommon('months.november') || 'November',
    tCommon('months.december') || 'December'
  ], [tCommon, locale]);

  const daysOfWeek = useMemo(() => [
    tCommon('days.sunday') || 'Su',
    tCommon('days.monday') || 'Mo',
    tCommon('days.tuesday') || 'Tu',
    tCommon('days.wednesday') || 'We',
    tCommon('days.thursday') || 'Th',
    tCommon('days.friday') || 'Fr',
    tCommon('days.saturday') || 'Sa'
  ], [tCommon, locale]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    // Previous month's last few days
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayWeekday = firstDayOfMonth.getDay();
    const prevMonth = new Date(year, month - 1, 0);

    // Current month's days
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInCurrentMonth = lastDayOfMonth.getDate();

    const calendarDays = [];

    // Add previous month's trailing days
    for (let i = firstDayWeekday - 1; i >= 0; i--) {
      calendarDays.push({
        day: prevMonth.getDate() - i,
        isCurrentMonth: false,
        date: new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonth.getDate() - i)
      });
    }

    // Add current month's days
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      calendarDays.push({
        day,
        isCurrentMonth: true,
        date: new Date(year, month, day)
      });
    }

    // Add next month's leading days to fill the grid
    const remainingSlots = 42 - calendarDays.length; // 6 weeks × 7 days
    for (let day = 1; day <= remainingSlots; day++) {
      calendarDays.push({
        day,
        isCurrentMonth: false,
        date: new Date(year, month + 1, day)
      });
    }

    return calendarDays;
  };

  const handleDateClick = (dateInfo: { day: number; isCurrentMonth: boolean; date: Date }) => {
    if (!dateInfo.isCurrentMonth) {
      setViewDate(dateInfo.date);
      return;
    }

    setSelectedDate(dateInfo.date);
    onChange(dateInfo.date.toISOString().split('T')[0]);
    setIsOpen(false);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(viewDate);
    if (currentView === 'year') {
      newDate.setFullYear(newDate.getFullYear() + (direction === 'prev' ? -10 : 10));
    } else if (currentView === 'month') {
      newDate.setFullYear(newDate.getFullYear() + (direction === 'prev' ? -1 : 1));
    } else {
      newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -1 : 1));
    }
    setViewDate(newDate);
  };

  const handleHeaderClick = () => {
    if (currentView === 'date') {
      setCurrentView('month');
    } else if (currentView === 'month') {
      setCurrentView('year');
    } else {
      setCurrentView('date');
    }
  };

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(monthIndex);
    setViewDate(newDate);
    setCurrentView('date');
  };

  const handleYearSelect = (year: number) => {
    const newDate = new Date(viewDate);
    newDate.setFullYear(year);
    setViewDate(newDate);
    setCurrentView('month');
  };

  const getYearRange = () => {
    const currentYear = viewDate.getFullYear();
    const startYear = Math.floor(currentYear / 10) * 10;
    return Array.from({ length: 10 }, (_, i) => startYear + i);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const calendarDays = getDaysInMonth(viewDate);

  return (
    <div className={`p-calendar ${className}`} ref={containerRef}>
      <div className={`input-container ${isOpen ? 'input-focused' : ''}`}>
        <input
          type="text"
          className="main-input"
          placeholder={placeholder}
          value={selectedDate ? formatDate(selectedDate) : ''}
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
          📅
        </button>
      </div>

      {isOpen && (
        <div className="p-calendar-panel">
          <div className="p-calendar-header">
            <button
              type="button"
              className="p-calendar-prev-button"
              onClick={() => navigateMonth('prev')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </button>
            <button
              type="button"
              className="p-calendar-title p-calendar-title-button"
              onClick={handleHeaderClick}
            >
              {currentView === 'year' ? (
                `${getYearRange()[0]} - ${getYearRange()[9]}`
              ) : currentView === 'month' ? (
                viewDate.getFullYear()
              ) : (
                `${months[viewDate.getMonth()]} ${viewDate.getFullYear()}`
              )}
            </button>
            <button
              type="button"
              className="p-calendar-next-button"
              onClick={() => navigateMonth('next')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="m4.646 1.646 6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 1 1 .708-.708z"/>
              </svg>
            </button>
          </div>

          <div className="p-calendar-content">
            {currentView === 'date' && (
              <>
                <div className="p-calendar-weekdays">
                  {daysOfWeek.map((day, index) => (
                    <span key={index} className="p-calendar-weekday">
                      {day}
                    </span>
                  ))}
                </div>

                <div className="p-calendar-dates">
                  {calendarDays.map((dateInfo, index) => (
                    <span
                      key={index}
                      className={`
                        p-calendar-date
                        ${!dateInfo.isCurrentMonth ? 'p-calendar-date-other-month' : ''}
                        ${isToday(dateInfo.date) ? 'p-calendar-date-today' : ''}
                        ${isSelected(dateInfo.date) ? 'p-calendar-date-selected' : ''}
                      `}
                      onClick={() => handleDateClick(dateInfo)}
                    >
                      {dateInfo.day}
                    </span>
                  ))}
                </div>
              </>
            )}

            {currentView === 'month' && (
              <div className="p-calendar-months">
                {months.map((month, index) => (
                  <span
                    key={index}
                    className={`p-calendar-month ${viewDate.getMonth() === index ? 'p-calendar-month-selected' : ''}`}
                    onClick={() => handleMonthSelect(index)}
                  >
                    {month}
                  </span>
                ))}
              </div>
            )}

            {currentView === 'year' && (
              <div className="p-calendar-years">
                {getYearRange().map((year) => (
                  <span
                    key={year}
                    className={`p-calendar-year ${viewDate.getFullYear() === year ? 'p-calendar-year-selected' : ''}`}
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};