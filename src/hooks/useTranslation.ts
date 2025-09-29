import { useAppStore } from '@/store/useAppStore';
import { useEffect, useState } from 'react';

export interface TranslationHook {
  t: (key: string) => string;
  locale: string;
  changeLanguage: (locale: string) => Promise<void>;
}

// Load translations from JSON files
const loadTranslations = async (locale: string, namespace: string) => {
  try {
    const response = await fetch(`/locales/${locale}/${namespace}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load ${locale}/${namespace}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`Failed to load translations for ${locale}/${namespace}:`, error);
    return {};
  }
};

// Cache for loaded translations
const translationCache: Record<string, Record<string, unknown>> = {};

export const useTranslation = (namespace: string = 'common'): TranslationHook => {
  const locale = useAppStore((state) => state.locale);
  const setLocale = useAppStore((state) => state.setLocale);
  const [translations, setTranslations] = useState<Record<string, unknown>>({});

  useEffect(() => {
    const loadNamespaceTranslations = async () => {
      const cacheKey = `${locale}-${namespace}`;

      if (translationCache[cacheKey]) {
        setTranslations(translationCache[cacheKey]);
        return;
      }

      const data = await loadTranslations(locale, namespace);
      translationCache[cacheKey] = data;
      setTranslations(data);
    };

    loadNamespaceTranslations();
  }, [locale, namespace]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }

    return typeof value === 'string' ? value : key;
  };

  const changeLanguage = async (newLocale: string) => {
    // Clear all cache to force fresh loading for all namespaces
    Object.keys(translationCache).forEach(key => {
      delete translationCache[key];
    });
    setLocale(newLocale);
  };

  return {
    t,
    locale,
    changeLanguage,
  };
};