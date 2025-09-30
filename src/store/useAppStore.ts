import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface NameResult {
  korean: string;
  hanja?: string;
  meaning: string;
  pronunciation: string;
  fortune?: string;
  compatibility?: 'excellent' | 'good' | 'fair' | 'poor';
  cultural?: string;
  story?: string;
  similar?: string[];
  romanization?: string;
  hanjaBreakdown?: {
    characters: Array<{
      korean: string;
      hanja: string;
      meaning: string;
    }>;
    traditionalMeaning: string;
  };
  pronunciationMatch?: number;
  harmony?: string;
  kpopMember?: {
    group: string;
    memberName: string;
  };
  soundMatch?: number;
  soundMatchGrade?: string;
}

export interface UserData {
  firstName: string;
  lastName?: string;
  birthDate: Date;
  birthTime?: string;
  birthPlace?: string;
  gender: 'male' | 'female' | 'neutral';
  style: 'traditional' | 'modern' | 'kpop' | 'mixed';
  meaning: 'strength' | 'wisdom' | 'beauty' | 'success' | 'happiness' | 'peace' | 'creativity' | 'leadership' | 'compassion' | 'freedom';
}

export interface AppState {
  // Navigation
  currentScreen: 'welcome' | 'nameInput' | 'results' | 'payment' | 'shared';
  inputStep: 1 | 2 | 3;

  // User data
  userData: Partial<UserData>;

  // Name generation
  freeNames: NameResult[];
  premiumNames: NameResult[];
  additionalPremiumNames: NameResult[];
  oppositeGenderNames: NameResult[];
  isGenerating: boolean;

  // Payment
  isPremiumUnlocked: boolean;
  paymentStatus: 'idle' | 'processing' | 'success' | 'error' | 'cancelled';

  // UI State
  isPaymentModalOpen: boolean;

  // Locale
  locale: string;
}

export interface AppActions {
  // Navigation
  setCurrentScreen: (screen: AppState['currentScreen']) => void;
  setInputStep: (step: AppState['inputStep']) => void;
  nextInputStep: () => void;
  prevInputStep: () => void;

  // User data
  updateUserData: (data: Partial<UserData>) => void;
  resetUserData: () => void;

  // Name generation
  setFreeNames: (names: NameResult[]) => void;
  setPremiumNames: (names: NameResult[]) => void;
  setAdditionalPremiumNames: (names: NameResult[]) => void;
  setOppositeGenderNames: (names: NameResult[]) => void;
  setIsGenerating: (isGenerating: boolean) => void;

  // Payment
  setIsPremiumUnlocked: (unlocked: boolean) => void;
  setPaymentStatus: (status: AppState['paymentStatus']) => void;

  // UI State
  setIsPaymentModalOpen: (open: boolean) => void;

  // Locale
  setLocale: (locale: string) => void;

  // Combined actions
  startNameGeneration: () => void;
  completeNameGeneration: (freeNames: NameResult[], premiumNames?: NameResult[]) => void;
  unlockPremium: (premiumNames: NameResult[], additionalPremiumNames?: NameResult[], oppositeGenderNames?: NameResult[]) => void;
}

const initialState: AppState = {
  currentScreen: 'welcome',
  inputStep: 1,
  userData: {},
  freeNames: [],
  premiumNames: [],
  additionalPremiumNames: [],
  oppositeGenderNames: [],
  isGenerating: false,
  isPremiumUnlocked: false,
  paymentStatus: 'idle',
  isPaymentModalOpen: false,
  locale: 'en',
};

export const useAppStore = create<AppState & AppActions>()(
  devtools(
    (set) => ({
      ...initialState,

      // Navigation
      setCurrentScreen: (screen) => set({ currentScreen: screen }),
      setInputStep: (step) => set({ inputStep: step }),
      nextInputStep: () => set((state) => ({
        inputStep: Math.min(3, state.inputStep + 1) as 1 | 2 | 3
      })),
      prevInputStep: () => set((state) => ({
        inputStep: Math.max(1, state.inputStep - 1) as 1 | 2 | 3
      })),

      // User data
      updateUserData: (data) => set((state) => ({
        userData: { ...state.userData, ...data }
      })),
      resetUserData: () => set({ userData: {} }),

      // Name generation
      setFreeNames: (names) => set({ freeNames: names }),
      setPremiumNames: (names) => set({ premiumNames: names }),
      setAdditionalPremiumNames: (names) => set({ additionalPremiumNames: names }),
      setOppositeGenderNames: (names) => set({ oppositeGenderNames: names }),
      setIsGenerating: (isGenerating) => set({ isGenerating }),

      // Payment
      setIsPremiumUnlocked: (unlocked) => set({ isPremiumUnlocked: unlocked }),
      setPaymentStatus: (status) => set({ paymentStatus: status }),

      // UI State
      setIsPaymentModalOpen: (open) => set({ isPaymentModalOpen: open }),

      // Locale
      setLocale: (locale) => set({ locale }),

      // Combined actions
      startNameGeneration: () => set({
        isGenerating: true,
        currentScreen: 'results',
        freeNames: [],
        premiumNames: [],
        additionalPremiumNames: [],
        oppositeGenderNames: [],
      }),

      completeNameGeneration: (freeNames, premiumNames = []) => set({
        isGenerating: false,
        freeNames,
        premiumNames,
      }),

      unlockPremium: (premiumNames, additionalPremiumNames = [], oppositeGenderNames = []) => set({
        isPremiumUnlocked: true,
        premiumNames,
        additionalPremiumNames,
        oppositeGenderNames,
        paymentStatus: 'success',
        isPaymentModalOpen: false,
      }),
    }),
    {
      name: 'korean-name-studio',
    }
  )
);