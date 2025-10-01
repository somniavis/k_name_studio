// Multilingual Korean Name Database
// Based on traditional Saju elements and modern popularity

export interface KoreanName {
  id: string; // unique identifier in format "이름_오행_순번"
  korean: string;
  hanja?: string;
  romanization: string;
  pronunciation: string;
  meaning: {
    [key: string]: string; // locale-based meanings
  };
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  gender: 'male' | 'female' | 'neutral';
  popularity: number;
  kpopMember?: {
    group: string;
    memberName: string;
  };
  style: 'traditional' | 'modern' | 'kpop' | 'mixed';
  hanjaBreakdown?: {
    characters: Array<{
      korean: string;
      hanja: string;
      meaning: {
        [key: string]: string; // locale-based meanings for individual characters
      };
    }>;
    traditionalMeaning: {
      [key: string]: string; // locale-based traditional meanings
    };
  };
  pronunciationMatch?: number; // percentage match with English pronunciation
}

const createName = (params: KoreanName) => params;

export const KOREAN_NAMES: KoreanName[] = [
  // Wood Element - Male Names (20 total)
createName({
  id: '민준_wood_01',
  korean: '민준',
  romanization: 'Min-jun',
  pronunciation: 'min-joon',
  element: 'wood',
  gender: 'male',
  popularity: 95,
  style: 'modern',
  hanja: '敏俊',
  meaning: {
    en: 'Quick to learn and handsome',
    ko: '민첩하고 준수한',
    ja: '賢くてハンサム',
    zh: '学习能力强且英俊',
    fr: 'Vif d\'esprit et séduisant',
    de: 'Lernfähig und gutaussehend',
    es: 'Rápido para aprender y guapo',
    ru: 'Быстро обучаемый и красивый',
    ar: 'سريع التعلم ووسيم',
    hi: 'सीखने में तेज़ और सुंदर'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          ja: '素早い、敏捷な、賢い',
          zh: '快速、敏捷、聪明',
          fr: 'rapide, agile, intelligent',
          de: 'schnell, wendig, klug',
          es: 'rápido, ágil, inteligente',
          ru: 'быстрый, проворный, умный',
          ar: 'سريع، رشيق، ذكي',
          hi: 'तेज़, फुर्तीला, चतुर'
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'handsome, talented',
          ko: '준수한, 재능있는',
          ja: 'ハンサム、才能ある',
          zh: '英俊、才华横溢',
          fr: 'beau, talentueux',
          de: 'gutaussehend, talentiert',
          es: 'guapo, talentoso',
          ru: 'красивый, талантливый',
          ar: 'وسيم، موهوب',
          hi: 'सुंदर, प्रतिभाशाली'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that brings swift learning and handsome appearance',
      ko: '빠른 학습과 준수한 모습을 가져다주는 이름',
      ja: '素早い学習とハンサムな容姿をもたらす名前',
      zh: '带来快速学习和英俊外表的名字',
      fr: 'Un nom qui apporte un apprentissage rapide et une belle apparence',
      de: 'Ein Name, der schnelles Lernen und attraktives Aussehen bringt',
      es: 'Un nombre que trae aprendizaje rápido y apariencia atractiva',
      ru: 'Имя, которое приносит быстрое обучение и красивую внешность',
      ar: 'اسم يجلب التعلم السريع والمظهر الجذاب',
      hi: 'एक नाम जो तेज़ सीखने और सुंदर दिखने का आशीर्वाद देता है'
    }
  }
}),
  createName({
  id: '건우_wood_01',
  korean: '건우',
  romanization: 'Gun-woo',
  pronunciation: 'gun-woo',
  element: 'wood',
  gender: 'male',
  popularity: 88,
  style: 'modern',
  hanja: '健友',
  meaning: {
    en: 'Strong and excellent',
    ko: '강하고 뛰어난',
    ja: '強くて優れた',
    zh: '强大而优秀',
    fr: 'Fort et excellent',
    de: 'Stark und ausgezeichnet',
    es: 'Fuerte y excelente',
    ru: 'Сильный и превосходный',
    ar: 'قوي وممتاز',
    hi: 'मजबूत और उत्कृष्ट'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '건',
        hanja: '健',
        meaning: {
          en: 'healthy, strong, robust',
          ko: '건강한, 강한, 튼튼한',
          ja: '健康的、強い、頑丈な',
          zh: '健康的、強壯的、結實的',
          fr: 'sain, fort, robuste',
          de: 'gesund, stark, robust',
          es: 'saludable, fuerte, robusto',
          ru: 'здоровый, сильный, крепкий',
          ar: 'صحي، قوي، قوي البنية',
          hi: 'स्वस्थ, मजबूत, दृढ़'
        }
      },
      {
        korean: '우',
        hanja: '友',
        meaning: {
          en: 'friend, friendship',
          ko: '친구, 우정',
          ja: '友達、友情',
          zh: '朋友、友谊',
          fr: 'ami, amitié',
          de: 'Freund, Freundschaft',
          es: 'amigo, amistad',
          ru: 'друг, дружба',
          ar: 'صديق، صداقة',
          hi: 'मित्र, मित्रता'
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '지호_wood_01',
  korean: '지호',
  romanization: 'Ji-ho',
  pronunciation: 'jee-ho',
  element: 'wood',
  gender: 'male',
  popularity: 85,
  style: 'modern',
  hanja: '智豪',
  meaning: {
    en: 'Wise and great',
    ko: '지혜롭고 위대한',
    ja: '賢くて偉大',
    zh: '充满智慧和伟大',
    fr: 'Sage et grand',
    de: 'Weise und großartig',
    es: 'Sabio y genial',
    ru: 'Мудрый и великий',
    ar: 'حكيم وعظيم',
    hi: 'बुद्धिमान और महान'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          ja: '知恵、知性',
          zh: '智慧、智能',
          fr: 'sagesse, intelligence',
          de: 'Weisheit, Intelligenz',
          es: 'sabiduría, inteligencia',
          ru: 'мудрость, интеллект',
          ar: 'حكمة، ذكاء',
          hi: 'बुद्धि, बुद्धिमत्ता'
        }
      },
      {
        korean: '호',
        hanja: '豪',
        meaning: {
          en: 'heroic, great',
          ko: '영웅적인, 위대한',
          ja: '英雄的、偉大な',
          zh: '英雄的、伟大的',
          fr: 'héroïque, grand',
          de: 'heroisch, großartig',
          es: 'heroico, grandioso',
          ru: 'героический, великий',
          ar: 'بطولي، عظيم',
          hi: 'वीर, महान'
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '재민_wood_01',
  korean: '재민',
  romanization: 'Jae-min',
  pronunciation: 'jay-min',
  element: 'wood',
  gender: 'male',
  popularity: 82,
  style: 'modern',
  hanja: '才敏',
  meaning: {
    en: 'Talented and quick',
    ko: '재능있고 민첩한',
    ja: '才能があり素早い',
    zh: '才华横溢且敏捷',
    fr: 'Talentueux et rapide',
    de: 'Talentiert und schnell',
    es: 'Talentoso y rápido',
    ru: 'Талантливый и быстрый',
    ar: 'موهوب وسريع',
    hi: 'प्रतिभाशाली और तेज'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '재',
        hanja: '才',
        meaning: {
          en: 'talent, ability',
          ko: '재주, 재능',
          ja: '才能、能力',
          zh: '才能、能力',
          fr: 'talent, capacité',
          de: 'Talent, Fähigkeit',
          es: 'talento, habilidad',
          ru: 'талант, способность',
          ar: 'موهبة، قدرة',
          hi: 'प्रतिभा, योग्यता'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          ja: '素早い、敏捷な、賢い',
          zh: '快速、敏捷、聪明',
          fr: 'rapide, agile, intelligent',
          de: 'schnell, wendig, klug',
          es: 'rápido, ágil, inteligente',
          ru: 'быстрый, проворный, умный',
          ar: 'سريع، رشيق، ذكي',
          hi: 'तेज़, फुर्तीला, चतुर'
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  createName({
  id: '민성_wood_01',
  korean: '민성',
  romanization: 'Min-seong',
  pronunciation: 'min-sung',
  element: 'wood',
  gender: 'male',
  popularity: 78,
  style: 'modern',
  hanja: '敏誠',
  meaning: {
    en: 'Quick and sincere',
    ko: '민첩하고 성실한',
    ja: '素早くて誠実',
    zh: '敏捷而真诚',
    fr: 'Rapide et sincère',
    de: 'Schnell und aufrichtig',
    es: 'Rápido y sincero',
    ru: 'Быстрый и искренний',
    ar: 'سريع ومخلص',
    hi: 'तेज और ईमानदार'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          ja: '素早い、敏捷な、賢い',
          zh: '快速、敏捷、聪明',
          fr: 'rapide, agile, intelligent',
          de: 'schnell, wendig, klug',
          es: 'rápido, ágil, inteligente',
          ru: 'быстрый, проворный, умный',
          ar: 'سريع، رشيق، ذكي',
          hi: 'तेज़, फुर्तीला, चतुर'
        }
      },
      {
        korean: '성',
        hanja: '誠',
        meaning: {
          en: 'sincere, honest',
          ko: '성실한, 정직한',
          ja: '誠実な、正直な',
          zh: '誠實的、誠實的',
          fr: 'sincère, honnête',
          de: 'aufrichtig, ehrlich',
          es: 'sincero, honesto',
          ru: 'искренний, честный',
          ar: 'مخلص، صادق',
          hi: 'ईमानदार, सच्चा'
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  createName({
  id: '성민_wood_01',
  korean: '성민',
  romanization: 'Seong-min',
  pronunciation: 'sung-min',
  element: 'wood',
  gender: 'male',
  popularity: 74,
  style: 'modern',
  hanja: '誠敏',
  meaning: {
    en: 'Sincere and quick',
    ko: '성실하고 민첩한',
    ja: '誠実で素早い',
    zh: '真诚敏捷',
    fr: 'Sincère et rapide',
    de: 'Aufrichtig und schnell',
    es: 'Sincero y rápido',
    ru: 'Искренний и быстрый',
    ar: 'صادق وسريع',
    hi: 'ईमानदार और तेज'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '성',
        hanja: '誠',
        meaning: {
          en: 'sincere, honest',
          ko: '성실한, 정직한',
          ja: '誠実な、正直な',
          zh: '誠實的、誠實的',
          fr: 'sincère, honnête',
          de: 'aufrichtig, ehrlich',
          es: 'sincero, honesto',
          ru: 'искренний, честный',
          ar: 'مخلص، صادق',
          hi: 'ईमानदार, सच्चा'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          ja: '素早い、敏捷な、賢い',
          zh: '快速、敏捷、聪明',
          fr: 'rapide, agile, intelligent',
          de: 'schnell, wendig, klug',
          es: 'rápido, ágil, inteligente',
          ru: 'быстрый, проворный, умный',
          ar: 'سريع، رشيق، ذكي',
          hi: 'तेज़, फुर्तीला, चतुर'
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  createName({
  id: '민우_wood_01',
  korean: '민우',
  romanization: 'Min-woo',
  pronunciation: 'min-woo',
  element: 'wood',
  gender: 'male',
  popularity: 70,
  style: 'modern',
  hanja: '敏優',
  meaning: {
    en: 'Quick and excellent',
    ko: '민첩하고 뛰어난',
    ja: '素早く優れた',
    zh: '敏捷而出色',
    fr: 'Rapide et excellent',
    de: 'Schnell und ausgezeichnet',
    es: 'Rápido y excelente',
    ru: 'Быстрый и превосходный',
    ar: 'سريع وممتاز',
    hi: 'तेज और उत्कृष्ट'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior',
          ko: '뛰어난, 우수한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '재현_wood_01',
  korean: '재현',
  romanization: 'Jae-hyun',
  pronunciation: 'jay-hyun',
  element: 'wood',
  gender: 'male',
  popularity: 68,
  style: 'mixed',
  hanja: '材賢',
  meaning: {
    en: 'Talented and virtuous',
    ko: '재능있고 덕이 있는',
    ja: '才能と徳がある',
    zh: '才德兼备',
    fr: 'Talentueux et vertueux',
    de: 'Talentiert und tugendhaft',
    es: 'Talentoso y virtuoso',
    ru: 'Талантливый и добродетельный',
    ar: 'موهوب وفاضل',
    hi: 'प्रतिभाशाली और गुणी'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '재',
        hanja: '材',
        meaning: {
          en: 'talent, material',
          ko: '재능, 재목',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy',
          ko: '어진, 현명한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '지우_wood_01',
  korean: '지우',
  romanization: 'Ji-woo',
  pronunciation: 'jee-woo',
  element: 'wood',
  gender: 'male',
  popularity: 66,
  style: 'modern',
  hanja: '智雨',
  meaning: {
    en: 'Wise and gentle rain',
    ko: '지혜롭고 부드러운 비',
    ja: '賢明で優しい雨',
    zh: '智慧的甘霖',
    fr: 'Pluie sage et douce',
    de: 'Weiser und sanfter Regen',
    es: 'Lluvia sabia y suave',
    ru: 'Мудрый и нежный дождь',
    ar: 'مطر حكيم ولطيف',
    hi: 'बुद्धिमान और कोमल वर्षा'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '우',
        hanja: '雨',
        meaning: {
          en: 'rain',
          ko: '비',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '건희_wood_01',
  korean: '건희',
  romanization: 'Gun-hui',
  pronunciation: 'gun-hee',
  element: 'wood',
  gender: 'male',
  popularity: 64,
  style: 'modern',
  hanja: '健熙',
  meaning: {
    en: 'Strong and bright',
    ko: '강하고 밝은',
    ja: '強くて明るい',
    zh: '坚强而光明',
    fr: 'Fort et brillant',
    de: 'Stark und hell',
    es: 'Fuerte y brillante',
    ru: 'Сильный и яркий',
    ar: 'قوي ومشرق',
    hi: 'मजबूत और उज्ज्वल'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '건',
        hanja: '健',
        meaning: {
          en: 'healthy, strong',
          ko: '건강한, 강한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '희',
        hanja: '熙',
        meaning: {
          en: 'bright, splendid',
          ko: '밝은, 빛나는',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '민재_wood_01',
  korean: '민재',
  romanization: 'Min-jae',
  pronunciation: 'min-jay',
  element: 'wood',
  gender: 'male',
  popularity: 62,
  style: 'modern',
  hanja: '敏才',
  meaning: {
    en: 'Quick and talented',
    ko: '민첩하고 재능있는',
    ja: '素早く才能のある',
    zh: '敏捷才华',
    fr: 'Rapide et talentueux',
    de: 'Schnell und talentiert',
    es: 'Rápido y talentoso',
    ru: 'Быстрый и талантливый',
    ar: 'سريع وموهوب',
    hi: 'तेज और प्रतिभाशाली'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '재',
        hanja: '才',
        meaning: {
          en: 'talent, ability',
          ko: '재주, 재능',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  createName({
  id: '현민_wood_01',
  korean: '현민',
  romanization: 'Hyun-min',
  pronunciation: 'hyun-min',
  element: 'wood',
  gender: 'male',
  popularity: 58,
  style: 'traditional',
  hanja: '賢敏',
  meaning: {
    en: 'Virtuous and quick',
    ko: '덕이 있고 민첩한',
    ja: '高潔で素早い',
    zh: '贤德敏捷',
    fr: 'Vertueux et rapide',
    de: 'Tugendhaft und schnell',
    es: 'Virtuoso y rápido',
    ru: 'Добродетельный и быстрый',
    ar: 'فاضل وسريع',
    hi: 'गुणी और तेज'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy',
          ko: '어진, 현명한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '지성_wood_01',
  korean: '지성',
  romanization: 'Ji-seong',
  pronunciation: 'jee-sung',
  element: 'wood',
  gender: 'male',
  popularity: 56,
  style: 'traditional',
  hanja: '智誠',
  meaning: {
    en: 'Wise and sincere',
    ko: '지혜롭고 성실한',
    ja: '賢くて誠実',
    zh: '智慧诚实',
    fr: 'Sage et sincère',
    de: 'Weise und aufrichtig',
    es: 'Sabio y sincero',
    ru: 'Мудрый и искренний',
    ar: 'حكيم ومخلص',
    hi: 'बुद्धिमान और ईमानदार'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '성',
        hanja: '誠',
        meaning: {
          en: 'sincere, honest',
          ko: '성실한, 정직한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '민기_wood_01',
  korean: '민기',
  romanization: 'Min-gi',
  pronunciation: 'min-gee',
  element: 'wood',
  gender: 'male',
  popularity: 54,
  style: 'modern',
  hanja: '敏氣',
  meaning: {
    en: 'Quick and energetic',
    ko: '민첩하고 활기찬',
    ja: '素早くエネルギッシュ',
    zh: '敏捷而充满活力',
    fr: 'Rapide et énergique',
    de: 'Schnell und energisch',
    es: 'Rápido y enérgico',
    ru: 'Быстрый и энергичный',
    ar: 'سريع وحيوي',
    hi: 'तेज और ऊर्जावान'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '기',
        hanja: '氣',
        meaning: {
          en: 'energy, spirit',
          ko: '기운, 정신',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '재우_wood_01',
  korean: '재우',
  romanization: 'Jae-woo',
  pronunciation: 'jay-woo',
  element: 'wood',
  gender: 'male',
  popularity: 52,
  style: 'modern',
  hanja: '才優',
  meaning: {
    en: 'Talented and excellent',
    ko: '재능있고 뛰어난',
    ja: '才能があり優れている',
    zh: '才华卓越',
    fr: 'Talentueux et excellent',
    de: 'Talentiert und ausgezeichnet',
    es: 'Talentoso y excelente',
    ru: 'Талантливый и превосходный',
    ar: 'موهوب وممتاز',
    hi: 'प्रतिभाशाली और उत्कृष्ट'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '재',
        hanja: '才',
        meaning: {
          en: 'talent, ability',
          ko: '재주, 재능',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior',
          ko: '뛰어난, 우수한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  // K-pop Wood Male Names
  createName({
  id: '태형_wood_01',
  korean: '태형',
  romanization: 'Tae-hyung',
  pronunciation: 'tay-hyung',
  element: 'wood',
  gender: 'male',
  popularity: 85,
  style: 'kpop',
  hanja: '泰亨',
  meaning: {
    en: 'Great virtue',
    ko: '큰 덕',
    ja: '大きな徳',
    zh: '伟大的美德',
    fr: 'Grande vertu',
    de: 'Große Tugend',
    es: 'Gran virtud',
    ru: 'Великая добродетель',
    ar: 'فضيلة عظيمة',
    hi: 'महान गुण'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '태',
        hanja: '泰',
        meaning: {
          en: 'great, superior',
          ko: '큰, 뛰어난',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '형',
        hanja: '亨',
        meaning: {
          en: 'smoothly, progressing',
          ko: '순조로운, 형통한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  },
  kpopMember: { group: 'BTS', memberName: 'V' }
}),
  createName({
  id: '남준_wood_01',
  korean: '남준',
  romanization: 'Nam-jun',
  pronunciation: 'nam-joon',
  element: 'wood',
  gender: 'male',
  popularity: 82,
  style: 'kpop',
  hanja: '南俊',
  meaning: {
    en: 'South talented',
    ko: '남쪽의 재능',
    ja: '南の才能',
    zh: '南方才子',
    fr: 'Talent du sud',
    de: 'Südliches Talent',
    es: 'Talento del sur',
    ru: 'Южный талант',
    ar: 'موهبة الجنوب',
    hi: 'दक्षिण की प्रतिभा'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '남',
        hanja: '南',
        meaning: {
          en: 'south',
          ko: '남쪽',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome',
          ko: '재능있는, 잘생긴',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  },
  kpopMember: { group: 'BTS', memberName: 'RM' }
}),
  createName({
  id: '윤기_wood_01',
  korean: '윤기',
  romanization: 'Yoon-gi',
  pronunciation: 'yoon-gee',
  element: 'wood',
  gender: 'male',
  popularity: 78,
  style: 'kpop',
  hanja: '潤基',
  meaning: {
    en: 'Prosperous foundation',
    ko: '번영하는 기초',
    ja: '繁栄の基盤',
    zh: '繁荣的基础',
    fr: 'Fondation prospère',
    de: 'Wohlhabendes Fundament',
    es: 'Fundación próspera',
    ru: 'Процветающий фундамент',
    ar: 'أساس مزدهر',
    hi: 'समृद्ध नींव'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to moisten, sleek',
          ko: '윤택하게 하다, 매끄럽게 하다',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '기',
        hanja: '基',
        meaning: {
          en: 'foundation, base',
          ko: '토대, 기초',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  },
  kpopMember: { group: 'BTS', memberName: 'Suga' }
}),

  // Wood Element - Female Names (20 total)
  createName({
  id: '서연_wood_01',
  korean: '서연',
  romanization: 'Seo-yeon',
  pronunciation: 'suh-yun',
  element: 'wood',
  gender: 'female',
  popularity: 95,
  style: 'modern',
  hanja: '瑞蓮',
  meaning: {
    en: 'Beautiful lotus from the west',
    ko: '서쪽의 아름다운 연꽃',
    ja: '西の美しい蓮',
    zh: '西方的美丽莲花',
    fr: 'Beau lotus de l\'ouest',
    de: 'Schöner Lotus aus dem Westen',
    es: 'Hermoso loto del oeste',
    ru: 'Красивый лотос с запада',
    ar: 'زهرة اللوتس الجميلة من الغرب',
    hi: 'पश्चिम का सुंदर कमल'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, propitious',
          ko: '상서로운, 길조의',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '연',
        hanja: '蓮',
        meaning: {
          en: 'lotus flower, pure',
          ko: '연꽃, 순수한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  createName({
  id: '채원_wood_01',
  korean: '채원',
  romanization: 'Chae-won',
  pronunciation: 'chay-won',
  element: 'wood',
  gender: 'female',
  popularity: 89,
  style: 'modern',
  hanja: '彩園',
  meaning: {
    en: 'Colorful garden',
    ko: '다채로운 정원',
    ja: 'カラフルな庭園',
    zh: '多彩的花园',
    fr: 'Jardin coloré',
    de: 'Bunter Garten',
    es: 'Jardín colorido',
    ru: 'Красочный сад',
    ar: 'حديقة ملونة',
    hi: 'रंगीन बगीचा'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '채',
        hanja: '彩',
        meaning: {
          en: 'color, brilliance, beauty',
          ko: '색깔, 빛남, 아름다움',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '원',
        hanja: '園',
        meaning: {
          en: 'garden, park, orchard',
          ko: '정원, 공원, 과수원',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '지유_wood_01',
  korean: '지유',
  romanization: 'Ji-yoo',
  pronunciation: 'jee-yoo',
  element: 'wood',
  gender: 'female',
  popularity: 86,
  style: 'modern',
  hanja: '智柔',
  meaning: {
    en: 'Wise and abundant',
    ko: '지혜롭고 풍부한',
    ja: '賢くて豊か',
    zh: '智慧丰富',
    fr: 'Sage et abondant',
    de: 'Weise und reichlich',
    es: 'Sabia y abundante',
    ru: 'Мудрый и обильный',
    ar: 'حكيم وفير',
    hi: 'बुद्धिमान और प्रचुर'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence, knowledge',
          ko: '지혜, 지능, 지식',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '유',
        hanja: '柔',
        meaning: {
          en: 'gentle, soft, flexible',
          ko: '부드러운, 온화한, 유연한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '서우_wood_01',
  korean: '서우',
  romanization: 'Seo-woo',
  pronunciation: 'suh-woo',
  element: 'wood',
  gender: 'female',
  popularity: 83,
  style: 'modern',
  hanja: '瑞雨',
  meaning: {
    en: 'Auspicious rain',
    ko: '길조의 비',
    ja: '縁起の良い雨',
    zh: '吉祥的雨',
    fr: 'Pluie de bon augure',
    de: 'Glücksverheißender Regen',
    es: 'Lluvia auspiciosa',
    ru: 'Благоприятный дождь',
    ar: 'مطر ميمون',
    hi: 'शुभ वर्षा'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, lucky',
          ko: '상서로운, 운이 좋은',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '우',
        hanja: '雨',
        meaning: {
          en: 'rain',
          ko: '비',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  
  
  
  createName({
  id: '서진_wood_01',
  korean: '서진',
  romanization: 'Seo-jin',
  pronunciation: 'suh-jin',
  element: 'wood',
  gender: 'female',
  popularity: 68,
  style: 'modern',
  hanja: '瑞珍',
  meaning: {
    en: 'Auspicious and precious',
    ko: '길조롭고 소중한',
    ja: '縁起が良く貴重',
    zh: '吉祥珍贵',
    fr: 'Auspécieux et précieux',
    de: 'Glückverheißend und kostbar',
    es: 'Auspicioso y precioso',
    ru: 'Благоприятный и драгоценный',
    ar: 'ميمون وثمين',
    hi: 'शुभ और कीमती'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, lucky',
          ko: '상서로운, 운이 좋은',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare',
          ko: '귀중한, 희귀한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  
  
  createName({
  id: '서영_wood_01',
  korean: '서영',
  romanization: 'Seo-yeong',
  pronunciation: 'suh-young',
  element: 'wood',
  gender: 'female',
  popularity: 56,
  style: 'modern',
  hanja: '瑞榮',
  meaning: {
    en: 'Auspicious and prosperous',
    ko: '길조롭고 번영하는',
    ja: '縁起が良く繁栄する',
    zh: '吉祥繁荣',
    fr: 'Auspécieux et prospère',
    de: 'Glückverheißend und wohlhabend',
    es: 'Auspicioso y próspero',
    ru: 'Благоприятный и процветающий',
    ar: 'ميمون ومزدهر',
    hi: 'शुभ और समृद्ध'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, lucky',
          ko: '상서로운, 운이 좋은',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor',
          ko: '영광, 명예',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  
  createName({
  id: '지은_wood_01',
  korean: '지은',
  romanization: 'Ji-eun',
  pronunciation: 'jee-eun',
  element: 'wood',
  gender: 'female',
  popularity: 47,
  style: 'modern',
  hanja: '智恩',
  meaning: {
    en: 'Wise grace',
    ko: '지혜로운 은혜',
    ja: '賢い恵み',
    zh: '智慧的恩典',
    fr: 'Grâce sage',
    de: 'Weise Gnade',
    es: 'Gracia sabia',
    ru: 'Мудрая благодать',
    ar: 'نعمة حكيمة',
    hi: 'बुद्धिमान अनुग्रह'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor',
          ko: '은혜, 호의',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  createName({
  id: '채린_wood_01',
  korean: '채린',
  romanization: 'Chae-rin',
  pronunciation: 'chay-rin',
  element: 'wood',
  gender: 'female',
  popularity: 38,
  style: 'modern',
  hanja: '彩潾',
  meaning: {
    en: 'Colorful wisdom',
    ko: '다채로운 지혜',
    ja: 'カラフルな知恵',
    zh: '多彩的智慧',
    fr: 'Sagesse colorée',
    de: 'Bunte Weisheit',
    es: 'Sabiduría colorida',
    ru: 'Красочная мудрость',
    ar: 'حكمة ملونة',
    hi: 'रंगीन ज्ञान'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '채',
        hanja: '彩',
        meaning: {
          en: 'color, brilliant',
          ko: '색깔, 화려한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '린',
        hanja: '潾',
        meaning: {
          en: 'clear water',
          ko: '맑은 물',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  // K-pop Wood Female Names
  

  // Fire Element - Male Names (20 total)
  createName({
  id: '하준_fire_01',
    korean: '하준',
    romanization: 'Ha-jun',
    pronunciation: 'ha-joon',
    element: 'fire',
    gender: 'male',
    popularity: 98,
    style: 'modern',
    hanja: '夏俊',
    meaning: {
      en: 'Summer and talented',
      ko: '여름과 재능',
      ja: '夏と才能',
      zh: '夏天和才华',
      fr: 'Été et talentueux',
      de: 'Sommer und talentiert',
      es: 'Verano y talentoso',
      ru: 'Лето и талантливый',
      ar: 'الصيف والموهوب',
      hi: 'गर्मी और प्रतिभाशाली'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '하',
          hanja: '夏',
          meaning: {
            en: 'summer',
            ko: '여름',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '준',
          hanja: '俊',
          meaning: {
            en: 'talented, handsome',
            ko: '재능있는, 잘생긴',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '시우_fire_01',
    korean: '시우',
    romanization: 'Si-woo',
    pronunciation: 'see-woo',
    element: 'fire',
    gender: 'male',
    popularity: 94,
    style: 'modern',
    hanja: '始雨',
    meaning: {
      en: 'Beginning rain',
      ko: '처음 비',
      ja: '始まりの雨',
      zh: '初雨',
      fr: 'Pluie du début',
      de: 'Anfang des Regens',
      es: 'Lluvia inicial',
      ru: 'Начальный дождь',
      ar: 'المطر الأول',
      hi: 'पहली बारिश'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '시',
          hanja: '始',
          meaning: {
            en: 'begin, start, beginning',
            ko: '시작하다, 시작, 처음',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '우',
          hanja: '雨',
          meaning: {
            en: 'rain, rainfall',
            ko: '비, 강우',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    pronunciationMatch: 81
  }),
  createName({
  id: '도윤_fire_01',
    korean: '도윤',
    romanization: 'Do-yoon',
    pronunciation: 'do-yoon',
    element: 'fire',
    gender: 'male',
    popularity: 90,
    style: 'modern',
    hanja: '道潤',
    meaning: {
      en: 'Moral and prosperous',
      ko: '도덕적이고 번영하는',
      ja: '道徳的で繁栄している',
      zh: '道德与繁荣',
      fr: 'Moral et prospère',
      de: 'Moralisch und wohlhabend',
      es: 'Moral y próspero',
      ru: 'Моральный и процветающий',
      ar: 'أخلاقي ومزدهر',
      hi: 'नैतिक और समृद्ध'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '도',
          hanja: '道',
          meaning: {
            en: 'path, way, moral principle',
            ko: '길, 도, 도덕적 원칙',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '윤',
          hanja: '潤',
          meaning: {
            en: 'moist, rich, glossy',
            ko: '촉촉한, 풍부한, 윤기나는',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    pronunciationMatch: 78
  }),
  
  createName({
  id: '태민_fire_01',
    korean: '태민',
    romanization: 'Tae-min',
    pronunciation: 'tay-min',
    element: 'fire',
    gender: 'male',
    popularity: 82,
    style: 'modern',
    hanja: '泰敏',
    meaning: {
      en: 'Great and quick',
      ko: '크고 민첩한',
      ja: '偉大で素早い',
      zh: '伟大而敏捷',
      fr: 'Grand et rapide',
      de: 'Groß und schnell',
      es: 'Grande y rápido',
      ru: 'Великий и быстрый',
      ar: 'عظيم وسريع',
      hi: 'महान और तेज'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '태',
          hanja: '泰',
          meaning: {
            en: 'great, superior',
            ko: '큰, 뛰어난',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  
  createName({
  id: '정우_fire_01',
    korean: '정우',
    romanization: 'Jeong-woo',
    pronunciation: 'jung-woo',
    element: 'fire',
    gender: 'male',
    popularity: 74,
    style: 'traditional',
    hanja: '正優',
    meaning: {
      en: 'Righteous and excellent',
      ko: '올바르고 뛰어난',
      ja: '義にかなって優れた',
      zh: '正直卓越',
      fr: 'Juste et excellent',
      de: 'Gerecht und ausgezeichnet',
      es: 'Justo y excelente',
      ru: 'Праведный и превосходный',
      ar: 'صالح وممتاز',
      hi: 'धर्मी और उत्कृष्ट'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '정',
          hanja: '正',
          meaning: {
            en: 'right, proper, correct',
            ko: '바른, 올바른, 정확한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '우',
          hanja: '優',
          meaning: {
            en: 'excellent, superior',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  
  createName({
  id: '동현_fire_01',
  korean: '동현',
  romanization: 'Dong-hyun',
  pronunciation: 'dong-hyun',
  element: 'fire',
  gender: 'male',
  popularity: 66,
  style: 'traditional',
  hanja: '東賢',
  meaning: {
    en: 'Eastern virtue',
    ko: '동방의 덕',
    ja: '東の徳',
    zh: '东方之德',
    fr: 'Vertu orientale',
    de: 'Östliche Tugend',
    es: 'Virtud oriental',
    ru: 'Восточная добродетель',
    ar: 'فضيلة شرقية',
    hi: 'पूर्वी गुण'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '동',
        hanja: '東',
        meaning: {
          en: 'east',
          ko: '동쪽',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy',
          ko: '어진, 현명한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  
  createName({
  id: '지환_fire_01',
  korean: '지환',
  romanization: 'Ji-hwan',
  pronunciation: 'jee-hwan',
  element: 'fire',
  gender: 'male',
  popularity: 58,
  style: 'modern',
  hanja: '智煥',
  meaning: {
    en: 'Wise and bright',
    ko: '지혜롭고 밝은',
    ja: '賢くて明るい',
    zh: '智慧光明',
    fr: 'Sage et brillant',
    de: 'Weise und hell',
    es: 'Sabio y brillante',
    ru: 'Мудрый и яркий',
    ar: 'حكيم ومشرق',
    hi: 'बुद्धिमान और उज्ज्वल'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '환',
        hanja: '煥',
        meaning: {
          en: 'shining, brilliant',
          ko: '빛나는, 찬란한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '태준_fire_01',
  korean: '태준',
  romanization: 'Tae-jun',
  pronunciation: 'tay-joon',
  element: 'fire',
  gender: 'male',
  popularity: 54,
  style: 'modern',
  hanja: '泰俊',
  meaning: {
    en: 'Great and talented',
    ko: '크고 재능있는',
    ja: '偉大で才能のある',
    zh: '伟大而有才华',
    fr: 'Grand et talentueux',
    de: 'Groß und talentiert',
    es: 'Grande y talentoso',
    ru: 'Великий и талантливый',
    ar: 'عظيم وموهوب',
    hi: 'महान और प्रतिभाशाली'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '태',
        hanja: '泰',
        meaning: {
          en: 'great, superior',
          ko: '큰, 뛰어난',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome',
          ko: '재능있는, 잘생긴',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '승우_fire_01',
  korean: '승우',
  romanization: 'Seung-woo',
  pronunciation: 'seung-woo',
  element: 'fire',
  gender: 'male',
  popularity: 46,
  style: 'modern',
  hanja: '勝優',
  meaning: {
    en: 'Victory and excellent',
    ko: '승리와 탁월함',
    ja: '勝利と卓越',
    zh: '胜利与卓越',
    fr: 'Victoire et excellent',
    de: 'Sieg und ausgezeichnet',
    es: 'Victoria y excelente',
    ru: 'Победа и превосходство',
    ar: 'النصر والتميز',
    hi: 'विजय और उत्कृष्टता'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '승',
        hanja: '勝',
        meaning: {
          en: 'victory, win',
          ko: '승리, 이기다',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior',
          ko: '뛰어난, 우수한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '동민_fire_01',
  korean: '동민',
  romanization: 'Dong-min',
  pronunciation: 'dong-min',
  element: 'fire',
  gender: 'male',
  popularity: 38,
  style: 'modern',
  hanja: '東敏',
  meaning: {
    en: 'Eastern quick',
    ko: '동방의 민첩함',
    ja: '東の素早さ',
    zh: '东方敏捷',
    fr: 'Agilité orientale',
    de: 'Östliche Schnelligkeit',
    es: 'Agilidad oriental',
    ru: 'Восточная быстрота',
    ar: 'رشاقة شرقية',
    hi: 'पूर्वी फुर्ती'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '동',
        hanja: '東',
        meaning: {
          en: 'east',
          ko: '동쪽',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '태우_fire_01',
  korean: '태우',
  romanization: 'Tae-woo',
  pronunciation: 'tay-woo',
  element: 'fire',
  gender: 'male',
  popularity: 34,
  style: 'modern',
  hanja: '泰優',
  meaning: {
    en: 'Great and excellent',
    ko: '크고 뛰어난',
    ja: '偉大で優れた',
    zh: '伟大而出色',
    fr: 'Grand et excellent',
    de: 'Groß und ausgezeichnet',
    es: 'Grande y excelente',
    ru: 'Великий и превосходный',
    ar: 'عظيم وممتاز',
    hi: 'महान और उत्कृष्ट'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '태',
        hanja: '泰',
        meaning: {
          en: 'great, superior',
          ko: '큰, 뛰어난',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior',
          ko: '뛰어난, 우수한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  // K-pop Fire Male Names
  
  createName({
  id: '정국_fire_01',
  korean: '정국',
  romanization: 'Jeong-guk',
  pronunciation: 'jung-gook',
  element: 'fire',
  gender: 'male',
  popularity: 92,
  style: 'kpop',
  hanja: '正國',
  meaning: {
    en: 'Righteous country',
    ko: '의로운 나라',
    ja: '義の国',
    zh: '正义之国',
    fr: 'Pays juste',
    de: 'Gerechtes Land',
    es: 'País justo',
    ru: 'Праведная страна',
    ar: 'بلد صالح',
    hi: 'धर्मी देश'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '국',
        hanja: '國',
        meaning: {
          en: 'country, nation',
          ko: '나라, 국가',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  },
  kpopMember: { group: 'BTS', memberName: 'Jungkook' }
}),
createName({
  id: '호석_fire_01',
  korean: '호석',
  romanization: 'Ho-seok',
  pronunciation: 'ho-suk',
  element: 'fire',
  gender: 'male',
  popularity: 89,
  style: 'kpop',
  hanja: '浩石',
  meaning: {
    en: 'Great stone',
    ko: '큰 돌',
    ja: '大きな石',
    zh: '大石头',
    fr: 'Grande pierre',
    de: 'Großer Stein',
    es: 'Gran piedra',
    ru: 'Большой камень',
    ar: 'حجر عظيم',
    hi: 'बड़ा पत्थर'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast',
          ko: '큰, 넓은',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '석',
        hanja: '石',
        meaning: {
          en: 'stone',
          ko: '돌',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  },
  kpopMember: { group: 'BTS', memberName: 'J-Hope' }
}),

  // Fire Element - Female Names (20 total)
  
  createName({
  id: '서윤_fire_01',
  korean: '서윤',
  romanization: 'Seo-yoon',
  pronunciation: 'suh-yoon',
  element: 'fire',
  gender: 'female',
  popularity: 92,
  style: 'modern',
  hanja: '西潤',
  meaning: {
    en: 'Western prosperity',
    ko: '서쪽의 번영',
    ja: '西の繁栄',
    zh: '西方繁荣',
    fr: 'Prospérité occidentale',
    de: 'Westlicher Wohlstand',
    es: 'Prosperidad occidental',
    ru: 'Западное процветание',
    ar: 'الازدهار الغربي',
    hi: 'पश्चिमी समृद्धि'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '西',
        meaning: {
          en: 'west',
          ko: '서쪽',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to moisten, sleek',
          ko: '윤택하게 하다, 매끄럽게 하다',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '예린_fire_01',
  korean: '예린',
  romanization: 'Ye-rin',
  pronunciation: 'yeh-rin',
  element: 'fire',
  gender: 'female',
  popularity: 88,
  style: 'modern',
  hanja: '藝潾',
  meaning: {
    en: 'Beautiful and wise',
    ko: '아름답고 지혜로운',
    ja: '美しく賢い',
    zh: '美丽而智慧',
    fr: 'Belle et sage',
    de: 'Schön und weise',
    es: 'Hermosa y sabia',
    ru: 'Красивая и мудрая',
    ar: 'جميلة وحكيمة',
    hi: 'सुंदर और बुद्धिमान'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '藝',
        meaning: {
          en: 'art, skill',
          ko: '예술, 기술',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '린',
        hanja: '潾',
        meaning: {
          en: 'clear water',
          ko: '맑은 물',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '지아_fire_01',
  korean: '지아',
  romanization: 'Ji-ah',
  pronunciation: 'jee-ah',
  element: 'fire',
  gender: 'female',
  popularity: 84,
  style: 'modern',
  hanja: '智雅',
  meaning: {
    en: 'Wise and beautiful',
    ko: '지혜롭고 아름다운',
    ja: '賢くて美しい',
    zh: '智慧美丽',
    fr: 'Sage et belle',
    de: 'Weise und schön',
    es: 'Sabia y hermosa',
    ru: 'Мудрая и красивая',
    ar: 'حكيمة وجميلة',
    hi: 'बुद्धिमान और सुंदर'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '아',
        hanja: '雅',
        meaning: {
          en: 'elegant, graceful',
          ko: '우아한, 고상한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '소연_fire_01',
  korean: '소연',
  romanization: 'So-yeon',
  pronunciation: 'so-yun',
  element: 'fire',
  gender: 'female',
  popularity: 80,
  style: 'traditional',
  hanja: '小蓮',
  meaning: {
    en: 'Small lotus',
    ko: '작은 연꽃',
    ja: '小さな蓮',
    zh: '小莲花',
    fr: 'Petit lotus',
    de: 'Kleine Lotusblume',
    es: 'Pequeño loto',
    ru: 'Маленький лотос',
    ar: 'زهرة اللوتس الصغيرة',
    hi: 'छोटा कमल'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '소',
        hanja: '小',
        meaning: {
          en: 'small',
          ko: '작은',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '연',
        hanja: '蓮',
        meaning: {
          en: 'lotus',
          ko: '연꽃',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '예나_fire_01',
  korean: '예나',
  romanization: 'Ye-na',
  pronunciation: 'yeh-na',
  element: 'fire',
  gender: 'female',
  popularity: 76,
  style: 'modern',
  hanja: '藝娜',
  meaning: {
    en: 'Beautiful me',
    ko: '아름다운 나',
    ja: '美しい私',
    zh: '美丽的我',
    fr: 'Belle moi',
    de: 'Schönes Ich',
    es: 'Hermosa yo',
    ru: 'Красивая я',
    ar: 'أنا جميلة',
    hi: 'सुंदर मैं'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '藝',
        meaning: {
          en: 'art, skill',
          ko: '예술, 기술',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '나',
        hanja: '娜',
        meaning: {
          en: 'elegant, graceful',
          ko: '우아한, 아리따운',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '다은_fire_01',
  korean: '다은',
  romanization: 'Da-eun',
  pronunciation: 'da-eun',
  element: 'fire',
  gender: 'female',
  popularity: 64,
  style: 'modern',
  hanja: '多恩',
  meaning: {
    en: 'Many graces',
    ko: '많은 은혜',
    ja: '多くの恵み',
    zh: '许多恩典',
    fr: 'Nombreuses grâces',
    de: 'Viele Gnaden',
    es: 'Muchas bendiciones',
    ru: 'Много милостей',
    ar: 'نعم كثيرة',
    hi: 'कई कृपा'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '다',
        hanja: '多',
        meaning: {
          en: 'many, much, abundant',
          ko: '많은, 다량의, 풍부한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor, kindness',
          ko: '은혜, 호의, 친절',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '서현_fire_01',
  korean: '서현',
  romanization: 'Seo-hyun',
  pronunciation: 'suh-hyun',
  element: 'fire',
  gender: 'female',
  popularity: 60,
  style: 'traditional',
  hanja: '瑞賢',
  meaning: {
    en: 'Auspicious virtue',
    ko: '길조의 덕',
    ja: '吉祥の徳',
    zh: '吉祥的德行',
    fr: 'Vertu auspicieuse',
    de: 'Glückverheißende Tugend',
    es: 'Virtud auspiciosa',
    ru: 'Благоприятная добродетель',
    ar: 'فضيلة ميمونة',
    hi: 'शुभ गुण'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, propitious',
          ko: '상서로운, 길조의',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'wise, virtuous, worthy',
          ko: '지혜로운, 덕이 있는, 현명한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '지현_fire_01',
  korean: '지현',
  romanization: 'Ji-hyun',
  pronunciation: 'jee-hyun',
  element: 'fire',
  gender: 'female',
  popularity: 56,
  style: 'traditional',
  hanja: '智賢',
  meaning: {
    en: 'Wise and virtuous',
    ko: '지혜롭고 덕이 있는',
    ja: '賢くて高潔な',
    zh: '智慧与贤德',
    fr: 'Sage et vertueux',
    de: 'Weise und tugendhaft',
    es: 'Sabio y virtuoso',
    ru: 'Мудрый и добродетельный',
    ar: 'حكيم وفاضل',
    hi: 'बुद्धिमान और गुणी'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy',
          ko: '어진, 현명한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '예원_fire_01',
  korean: '예원',
  romanization: 'Ye-won',
  pronunciation: 'yeh-won',
  element: 'fire',
  gender: 'female',
  popularity: 52,
  style: 'modern',
  hanja: '藝源',
  meaning: {
    en: 'Beautiful source',
    ko: '아름다운 근원',
    ja: '美しい源',
    zh: '美丽的源泉',
    fr: 'Belle source',
    de: 'Schöne Quelle',
    es: 'Hermosa fuente',
    ru: 'Красивый источник',
    ar: 'مصدر جميل',
    hi: 'सुंदर स्रोत'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '藝',
        meaning: {
          en: 'art, skill',
          ko: '예술, 기술',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '원',
        hanja: '源',
        meaning: {
          en: 'source, origin',
          ko: '근원, 기원',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '소희_fire_01',
  korean: '소희',
  romanization: 'So-hui',
  pronunciation: 'so-hee',
  element: 'fire',
  gender: 'female',
  popularity: 48,
  style: 'modern',
  hanja: '昭喜',
  meaning: {
    en: 'Pure and bright joy',
    ko: '순수하고 밝은 기쁨',
    ja: '純粋で明るい喜び',
    zh: '纯粹而灿烂的喜悦',
    fr: 'Joie pure et éclatante',
    de: 'Reine und strahlende Freude',
    es: 'Alegría pura y brillante',
    ru: 'Чистая и светлая радость',
    ar: 'فرح نقي ومشرق',
    hi: 'शुद्ध और उज्ज्वल आनंद'
  }
}),
  
  createName({
  id: '지원_fire_01',
  korean: '지원',
  romanization: 'Ji-won',
  pronunciation: 'jee-won',
  element: 'fire',
  gender: 'female',
  popularity: 40,
  style: 'modern',
  hanja: '智源',
  meaning: {
    en: 'Wise source',
    ko: '지혜로운 근원',
    ja: '賢い源',
    zh: '智慧的源泉',
    fr: 'Source de sagesse',
    de: 'Weise Quelle',
    es: 'Fuente de sabiduría',
    ru: 'Источник мудрости',
    ar: 'مصدر الحكمة',
    hi: 'बुद्धिमान स्रोत'
  }
}),
createName({
  id: '예진_fire_01',
  korean: '예진',
  romanization: 'Ye-jin',
  pronunciation: 'yeh-jin',
  element: 'fire',
  gender: 'female',
  popularity: 36,
  style: 'modern',
  hanja: '藝珍',
  meaning: {
    en: 'Beautiful precious',
    ko: '아름답고 소중한',
    ja: '美しく貴重な',
    zh: '美丽珍贵',
    fr: 'Belle et précieuse',
    de: 'Schön und kostbar',
    es: 'Hermosa y preciosa',
    ru: 'Красивая и драгоценная',
    ar: 'جميلة وثمينة',
    hi: 'सुंदर और कीमती'
  }
}),

  createName({
  id: '예원_fire_01',
  korean: '예원',
  romanization: 'Ye-won',
  pronunciation: 'yeh-won',
  element: 'fire',
  gender: 'female',
  popularity: 52,
  style: 'modern',
  hanja: '藝源',
  meaning: {
    en: 'Beautiful source',
    ko: '아름다운 근원',
    ja: '美しい源',
    zh: '美丽的源泉',
    fr: 'Belle source',
    de: 'Schöne Quelle',
    es: 'Hermosa fuente',
    ru: 'Красивый источник',
    ar: 'مصدر جميل',
    hi: 'सुंदर स्रोत'
  }
}),
  createName({
  id: '소희_fire_01',
    korean: '소희',
    romanization: 'So-hui',
    pronunciation: 'so-hee',
    element: 'fire',
    gender: 'female',
    popularity: 48,
    style: 'modern',
    hanja: '昭喜',
    meaning: {
      en: 'Pure and bright joy',
      ko: '순수하고 밝은 기쁨',
      ja: '純粋で明るい喜び',
      zh: '纯粹而灿烂的喜悦',
      fr: 'Joie pure et éclatante',
      de: 'Reine und strahlende Freude',
      es: 'Alegría pura y brillante',
      ru: 'Чистая и светлая радость',
      ar: 'فرح نقي ومشرق',
      hi: 'शुद्ध और उज्ज्वल आनंद'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '소',
          hanja: '昭',
          meaning: {
            en: 'bright, clear',
            ko: '밝은, 맑은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '희',
          hanja: '喜',
          meaning: {
            en: 'joy, happiness',
            ko: '기쁨, 행복',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  
  createName({
  id: '지원_fire_01',
    korean: '지원',
    romanization: 'Ji-won',
    pronunciation: 'jee-won',
    element: 'fire',
    gender: 'female',
    popularity: 40,
    style: 'modern',
    hanja: '智源',
    meaning: {
      en: 'Wise source',
      ko: '지혜로운 근원',
      ja: '賢い源',
      zh: '智慧的源泉',
      fr: 'Source de sagesse',
      de: 'Weise Quelle',
      es: 'Fuente de sabiduría',
      ru: 'Источник мудрости',
      ar: 'مصدر الحكمة',
      hi: 'बुद्धिमान स्रोत'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '지',
          hanja: '智',
          meaning: {
            en: 'wisdom, intelligence',
            ko: '지혜, 지능',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '원',
          hanja: '源',
          meaning: {
            en: 'source, origin',
            ko: '근원, 기원',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '예진_fire_01',
    korean: '예진',
    romanization: 'Ye-jin',
    pronunciation: 'yeh-jin',
    element: 'fire',
    gender: 'female',
    popularity: 36,
    style: 'modern',
    hanja: '藝珍',
    meaning: {
      en: 'Beautiful precious',
      ko: '아름답고 소중한',
      ja: '美しく貴重な',
      zh: '美丽珍贵',
      fr: 'Belle et précieuse',
      de: 'Schön und kostbar',
      es: 'Hermosa y preciosa',
      ru: 'Красивая и драгоценная',
      ar: 'جميلة وثمينة',
      hi: 'सुंदर और कीमती'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '예',
          hanja: '藝',
          meaning: {
            en: 'art, skill',
            ko: '예술, 기술',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '하영_fire_01',
  korean: '하영',
  romanization: 'Ha-yeong',
  pronunciation: 'ha-young',
  element: 'fire',
  gender: 'female',
  popularity: 32,
  style: 'modern',
  hanja: '夏榮',
  meaning: {
    en: 'Great prosperity',
    ko: '큰 번영',
    ja: '大いなる繁栄',
    zh: '伟大的繁荣',
    fr: 'Grande prospérité',
    de: 'Großer Wohlstand',
    es: 'Gran prosperidad',
    ru: 'Великое процветание',
    ar: 'ازدهار عظيم',
    hi: 'महान समृद्धि'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '하',
        hanja: '夏',
        meaning: {
          en: 'summer',
          ko: '여름',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor',
          ko: '영광, 명예',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  // K-pop Fire Female Names
  
  createName({
  id: '나연_fire_01',
  korean: '나연',
  romanization: 'Na-yeon',
  pronunciation: 'na-yun',
  element: 'fire',
  gender: 'female',
  popularity: 90,
  style: 'kpop',
  hanja: '娜緣',
  meaning: {
    en: 'My connection',
    ko: '나의 연결',
    ja: '私のつながり',
    zh: '我的联系',
    fr: 'Ma connexion',
    de: 'Meine Verbindung',
    es: 'Mi conexión',
    ru: 'Моя связь',
    ar: 'اتصالي',
    hi: 'मेरा कनेक्शन'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '나',
        hanja: '娜',
        meaning: {
          en: 'elegant, graceful',
          ko: '우아한, 아리따운',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '연',
        hanja: '緣',
        meaning: {
          en: 'connection, fate',
          ko: '인연, 운명',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  },
  kpopMember: { group: 'TWICE', memberName: 'Nayeon' }
}),
createName({
  id: '정연_fire_01',
  korean: '정연',
  romanization: 'Jeong-yeon',
  pronunciation: 'jung-yun',
  element: 'fire',
  gender: 'female',
  popularity: 87,
  style: 'kpop',
  hanja: '正緣',
  meaning: {
    en: 'Righteous connection',
    ko: '의로운 연결',
    ja: '正義のつながり',
    zh: '正义的联系',
    fr: 'Connexion juste',
    de: 'Rechtschaffene Verbindung',
    es: 'Conexión justa',
    ru: 'Праведная связь',
    ar: 'اتصال صالح',
    hi: 'धर्मी संबंध'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '연',
        hanja: '緣',
        meaning: {
          en: 'connection, fate',
          ko: '인연, 운명',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  },
  kpopMember: { group: 'TWICE', memberName: 'Jeongyeon' }
}),

  // Earth Element - Male Names (20 total)
createName({
  id: '이준_earth_01',
  korean: '이준',
  romanization: 'Yi-jun',
  pronunciation: 'ee-joon',
  element: 'earth',
  gender: 'male',
  popularity: 100,
  style: 'modern',
  hanja: '伊俊',
  meaning: {
    en: 'Second talented',
    ko: '둘째 재능',
    ja: '第二の才能',
    zh: '第二才子',
    fr: 'Deuxième talentueux',
    de: 'Zweiter Talentierter',
    es: 'Segundo talentoso',
    ru: 'Второй талантливый',
    ar: 'الموهوب الثاني',
    hi: 'दूसरा प्रतिभाशाली'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '이',
        hanja: '伊',
        meaning: {
          en: 'that person',
          ko: '저 사람',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome',
          ko: '재능있는, 잘생긴',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '주원_earth_01',
  korean: '주원',
  romanization: 'Ju-won',
  pronunciation: 'joo-won',
  element: 'earth',
  gender: 'male',
  popularity: 96,
  style: 'modern',
  hanja: '主源',
  meaning: {
    en: 'Main source',
    ko: '주요 원천',
    ja: '主な源',
    zh: '主要来源',
    fr: 'Source principale',
    de: 'Hauptquelle',
    es: 'Fuente principal',
    ru: 'Основной источник',
    ar: 'المصدر الرئيسي',
    hi: 'मुख्य स्रोत'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '주',
        hanja: '主',
        meaning: {
          en: 'master, owner',
          ko: '주인, 소유자',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '원',
        hanja: '源',
        meaning: {
          en: 'source, origin',
          ko: '근원, 기원',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '우진_earth_01',
  korean: '우진',
  romanization: 'Woo-jin',
  pronunciation: 'woo-jin',
  element: 'earth',
  gender: 'male',
  popularity: 92,
  style: 'modern',
  hanja: '雨眞',
  meaning: {
    en: 'Rain and truth',
    ko: '비와 진실',
    ja: '雨と真実',
    zh: '雨与真理',
    fr: 'Pluie et vérité',
    de: 'Regen und Wahrheit',
    es: 'Lluvia y verdad',
    ru: 'Дождь и истина',
    ar: 'المطر والحقيقة',
    hi: 'वर्षा और सत्य'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '우',
        hanja: '雨',
        meaning: {
          en: 'rain, rainfall',
          ko: '비, 강우',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '진',
        hanja: '眞',
        meaning: {
          en: 'true, real, genuine',
          ko: '참된, 진실한, 진짜의',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '예준_earth_01',
  korean: '예준',
  romanization: 'Ye-jun',
  pronunciation: 'yeh-joon',
  element: 'earth',
  gender: 'male',
  popularity: 88,
  style: 'traditional',
  hanja: '禮俊',
  meaning: {
    en: 'Polite and talented',
    ko: '예의바르고 재능있는',
    ja: '礼儀正しく才能がある',
    zh: '礼貌且有才华',
    fr: 'Poli et talentueux',
    de: 'Höflich und talentiert',
    es: 'Educado y talentoso',
    ru: 'Вежливый и талантливый',
    ar: 'مهذب وموهوب',
    hi: 'विनम्र और प्रतिभाशाली'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '禮',
        meaning: {
          en: 'polite, ceremony',
          ko: '예의바른, 의식',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome',
          ko: '재능있는, 잘생긴',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '성현_earth_01',
  korean: '성현',
  romanization: 'Seong-hyun',
  pronunciation: 'sung-hyun',
  element: 'earth',
  gender: 'male',
  popularity: 84,
  style: 'traditional',
  hanja: '聖賢',
  meaning: {
    en: 'Holy virtue',
    ko: '거룩한 덕',
    ja: '聖なる徳',
    zh: '神圣美德',
    fr: 'Vertu sacrée',
    de: 'Heilige Tugend',
    es: 'Virtud sagrada',
    ru: 'Священная добродетель',
    ar: 'فضيلة مقدسة',
    hi: 'पवित्र गुण'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '성',
        hanja: '聖',
        meaning: {
          en: 'holy, sacred',
          ko: '거룩한, 신성한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy',
          ko: '어진, 현명한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '준영_earth_01',
  korean: '준영',
  romanization: 'Jun-yeong',
  pronunciation: 'joon-young',
  element: 'earth',
  gender: 'male',
  popularity: 76,
  style: 'modern',
  hanja: '俊榮',
  meaning: {
    en: 'Talented and prosperous',
    ko: '재능있고 번영하는',
    ja: '才能豊かで繁栄している',
    zh: '才华横溢且繁荣',
    fr: 'Talentueux et prospère',
    de: 'Talentiert und wohlhabend',
    es: 'Talentoso y próspero',
    ru: 'Талантливый и процветающий',
    ar: 'موهوب ومزدهر',
    hi: 'प्रतिभाशाली और समृद्ध'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome',
          ko: '재능있는, 잘생긴',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor',
          ko: '영광, 명예',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '윤수_earth_01',
  korean: '윤수',
  romanization: 'Yoon-soo',
  pronunciation: 'yoon-soo',
  element: 'earth',
  gender: 'male',
  popularity: 72,
  style: 'modern',
  hanja: '潤秀',
  meaning: {
    en: 'Prosperous excellence',
    ko: '번영하는 탁월함',
    ja: '繁栄する卓越性',
    zh: '繁荣卓越',
    fr: 'Excellence prospère',
    de: 'Blühende Exzellenz',
    es: 'Excelencia próspera',
    ru: 'Процветающее превосходство',
    ar: 'التميز المزدهر',
    hi: 'समृद्ध उत्कृष्टता'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to moisten, sleek',
          ko: '윤택하게 하다, 매끄럽게 하다',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding',
          ko: '뛰어난, 우수한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
  createName({
  id: '상우_earth_01',
  korean: '상우',
  romanization: 'Sang-woo',
  pronunciation: 'sang-woo',
  element: 'earth',
  gender: 'male',
  popularity: 68,
  style: 'modern',
  hanja: '相優',
  meaning: {
    en: 'Mutual excellence',
    ko: '상호 탁월함',
    ja: '相互の卓越性',
    zh: '相互卓越',
    fr: 'Excellence mutuelle',
    de: 'Gegenseitige Exzellenz',
    es: 'Excelencia mutua',
    ru: 'Взаимное превосходство',
    ar: 'التميز المتبادل',
    hi: 'आपसी उत्कृष्टता'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '상',
        hanja: '相',
        meaning: {
          en: 'mutual, reciprocal',
          ko: '상호, 서로',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior',
          ko: '뛰어난, 우수한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '진우_earth_01',
  korean: '진우',
  romanization: 'Jin-woo',
  pronunciation: 'jin-woo',
  element: 'earth',
  gender: 'male',
  popularity: 64,
  style: 'modern',
  hanja: '珍優',
  meaning: {
    en: 'Precious excellence',
    ko: '소중한 탁월함',
    ja: '貴重な卓越性',
    zh: '珍贵卓越',
    fr: 'Excellence précieuse',
    de: 'Kostbare Exzellenz',
    es: 'Excelencia preciosa',
    ru: 'Драгоценное превосходство',
    ar: 'التميز الثمين',
    hi: 'अनमोल उत्कृष्टता'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare',
          ko: '귀중한, 희귀한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior',
          ko: '뛰어난, 우수한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '성진_earth_01',
  korean: '성진',
  romanization: 'Seong-jin',
  pronunciation: 'sung-jin',
  element: 'earth',
  gender: 'male',
  popularity: 60,
  style: 'traditional',
  hanja: '聖珍',
  meaning: {
    en: 'Holy precious',
    ko: '거룩하고 소중한',
    ja: '聖なる貴重な',
    zh: '神圣珍贵',
    fr: 'Saint précieux',
    de: 'Heiliges Kostbares',
    es: 'Santo precioso',
    ru: 'Священное драгоценное',
    ar: 'مقدس ثمين',
    hi: 'पवित्र अनमोल'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '성',
        hanja: '聖',
        meaning: {
          en: 'holy, sacred',
          ko: '거룩한, 신성한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare',
          ko: '귀중한, 희귀한',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '준서_earth_01',
  korean: '준서',
  romanization: 'Jun-seo',
  pronunciation: 'joon-suh',
  element: 'earth',
  gender: 'male',
  popularity: 56,
  style: 'modern',
  hanja: '俊瑞',
  meaning: {
    en: 'Talented auspicious',
    ko: '재능있고 길조로운',
    ja: '才能ある縁起の良い',
    zh: '才华吉祥',
    fr: 'Talentueux et propice',
    de: 'Talentiert und vielversprechend',
    es: 'Talentoso y auspicioso',
    ru: 'Талантливый благоприятный',
    ar: 'موهوب وميمون',
    hi: 'प्रतिभाशाली शुभ'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, outstanding',
          ko: '재능있는, 준수한, 뛰어난',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      },
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, propitious',
          ko: '상서로운, 길조의',
          ja: '',
          zh: '',
          fr: '',
          de: '',
          es: '',
          ru: '',
          ar: '',
          hi: ''
        }
      }
    ],
    traditionalMeaning: {
      en: '',
      ko: '',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }
}),
createName({
  id: '민재_earth_01',
  korean: '민재',
  romanization: 'Min-jae',
  pronunciation: 'min-jay',
  element: 'earth',
  gender: 'male',
  popularity: 52,
  style: 'modern',
  hanja: '敏才',
  meaning: {
    en: 'Quick talent',
    ko: '민첩한 재능',
    ja: '素早い才能',
    zh: '敏捷才华',
    fr: 'Talent rapide',
    de: 'Schnelles Talent',
    es: 'Talento rápido',
    ru: 'Быстрый талант',
    ar: 'موهبة سريعة',
    hi: 'तीव्र प्रतिभा'
  }
}),
  createName({
  id: '윤호_earth_01',
    korean: '윤호',
    romanization: 'Yoon-ho',
    pronunciation: 'yoon-ho',
    element: 'earth',
    gender: 'male',
    popularity: 48,
    style: 'modern',
    hanja: '潤浩',
    meaning: {
      en: 'Prosperous great',
      ko: '번영하고 위대한',
      ja: '繁栄する偉大な',
      zh: '繁荣伟大',
      fr: 'Prospère et grand',
      de: 'Wohlhabend und großartig',
      es: 'Próspero y grande',
      ru: 'Процветающий великий',
      ar: 'عظيم مزدهر',
      hi: 'समृद्ध महान'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '윤',
          hanja: '潤',
          meaning: {
            en: 'to moisten, sleek',
            ko: '윤택하게 하다, 매끄럽게 하다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '호',
          hanja: '浩',
          meaning: {
            en: 'great, vast',
            ko: '큰, 넓은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '상민_earth_01',
    korean: '상민',
    romanization: 'Sang-min',
    pronunciation: 'sang-min',
    element: 'earth',
    gender: 'male',
    popularity: 44,
    style: 'modern',
    hanja: '相敏',
    meaning: {
      en: 'Mutual quick',
      ko: '상호 민첩함',
      ja: '相互に素早い',
      zh: '相互敏捷',
      fr: 'Rapide mutuel',
      de: 'Gegenseitig schnell',
      es: 'Rápido mutuo',
      ru: 'Взаимно быстрый',
      ar: 'سريع متبادل',
      hi: 'आपसी तीव्र'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '상',
          hanja: '相',
          meaning: {
            en: 'mutual, reciprocal',
            ko: '상호, 서로',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '성수_earth_01',
    korean: '성수',
    romanization: 'Seong-soo',
    pronunciation: 'sung-soo',
    element: 'earth',
    gender: 'male',
    popularity: 36,
    style: 'traditional',
    hanja: '聖秀',
    meaning: {
      en: 'Holy excellence',
      ko: '거룩한 탁월함',
      ja: '聖なる卓越性',
      zh: '神圣卓越',
      fr: 'Excellence sacrée',
      de: 'Heilige Exzellenz',
      es: 'Excelencia sagrada',
    ru: 'Священное превосходство',
      ar: 'التميز المقدس',
      hi: 'पवित्र उत्कृष्टता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '성',
          hanja: '聖',
          meaning: {
            en: 'holy, sacred',
            ko: '거룩한, 신성한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  // K-pop Earth Male Names
  createName({
  id: '승민_earth_01',
    korean: '승민',
    romanization: 'Seung-min',
    pronunciation: 'seung-min',
    element: 'earth',
    gender: 'male',
    popularity: 86,
    style: 'kpop',
    hanja: '勝敏',
    meaning: {
      en: 'Victory and quick',
      ko: '승리와 민첩함',
      ja: '勝利と素早さ',
      zh: '胜利与敏捷',
      fr: 'Victoire et rapidité',
      de: 'Sieg und schnell',
      es: 'Victoria y rápido',
      ru: 'Победа и быстрый',
      ar: 'النصر والسريع',
      hi: 'विजय और तीव्र'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '승',
          hanja: '勝',
          meaning: {
            en: 'victory, win',
            ko: '승리, 이기다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Seungmin' }
  }),
  createName({
  id: '현진_earth_01',
    korean: '현진',
    romanization: 'Hyun-jin',
    pronunciation: 'hyun-jin',
    element: 'earth',
    gender: 'male',
    popularity: 83,
    style: 'kpop',
    hanja: '賢珍',
    meaning: {
      en: 'Virtuous precious',
      ko: '덕이 있고 소중한',
      ja: '徳高く貴重な',
      zh: '贤德珍贵',
      fr: 'Vertueux précieux',
      de: 'Tugendhaft kostbar',
      es: 'Virtuoso precioso',
      ru: 'Добродетельный драгоценный',
      ar: 'فاضل ثمين',
      hi: 'गुणी अनमोल'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'virtuous, worthy',
            ko: '어진, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Hyunjin' }
  }),
  createName({
  id: '한_earth_01',
    korean: '한',
    romanization: 'Han',
    pronunciation: 'han',
    element: 'earth',
    gender: 'male',
    popularity: 80,
    style: 'kpop',
    hanja: '韓',
    meaning: {
      en: 'Great and vast',
      ko: '크고 광대한',
      ja: '偉大で広大な',
      zh: '伟大而广阔',
      fr: 'Grand et vaste',
      de: 'Groß und weit',
      es: 'Grande y vasto',
      ru: 'Великий и обширный',
      ar: 'عظيم وواسع',
      hi: 'महान और विशाल'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '한',
          hanja: '韓',
          meaning: {
            en: 'Korea',
            ko: '한국',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Han' }
  }),

  // Earth Element - Female Names (20 total)
  createName({
  id: '이서_earth_01',
    korean: '이서',
    romanization: 'Yi-seo',
    pronunciation: 'ee-suh',
    element: 'earth',
    gender: 'female',
    popularity: 100,
    style: 'modern',
    hanja: '伊瑞',
    meaning: {
      en: 'Second auspicious',
      ko: '둘째 길조',
      ja: '第二の吉兆',
      zh: '第二吉祥',
      fr: 'Deuxième propice',
      de: 'Zweiter Glückverheißender',
      es: 'Segundo auspicioso',
      ru: 'Второе благоприятное',
      ar: 'الثاني الميمون',
      hi: 'दूसरा शुभ'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '이',
          hanja: '伊',
          meaning: {
            en: 'that person',
            ko: '저 사람',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '서',
          hanja: '瑞',
          meaning: {
            en: 'auspicious, lucky',
            ko: '상서로운, 운이 좋은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '수아_earth_01',
    korean: '수아',
    romanization: 'Soo-ah',
    pronunciation: 'soo-ah',
    element: 'earth',
    gender: 'female',
    popularity: 96,
    style: 'modern',
    hanja: '秀雅',
    meaning: {
      en: 'Beautiful like water',
      ko: '물처럼 아름다운',
      ja: '水のように美しい',
      zh: '美丽如水',
      fr: 'Belle comme l\'eau',
      de: 'Schön wie Wasser',
      es: 'Hermosa como el agua',
      ru: 'Красивая как вода',
      ar: 'جميلة كالماء',
      hi: 'पानी की तरह सुंदर'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'outstanding, beautiful, elegant',
            ko: '뛰어난, 아름다운, 우아한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '아',
          hanja: '雅',
          meaning: {
            en: 'elegant, graceful, refined',
            ko: '우아한, 품위 있는, 세련된',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '"outstanding, beautiful" combined with "elegant, graceful" creates a meaning of refined beauty, representing someone who embodies both natural beauty and cultivated elegance',
        ko: '"뛰어나고 아름다운"과 "우아하고 품위 있는"이 결합되어 세련된 아름다움의 의미를 만들며, 자연스러운 아름다움과 교양 있는 우아함을 모두 구현하는 사람을 나타냅니다',
        ja: '',
        zh: '',
        fr: '',
        de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
      }
    },
    pronunciationMatch: 81
  }),
  
  createName({
  id: '소율_earth_01',
    korean: '소율',
    romanization: 'So-yul',
    pronunciation: 'so-yul',
    element: 'earth',
    gender: 'female',
    popularity: 88,
    style: 'modern',
    hanja: '小律',
    meaning: {
      en: 'Small and rhythmic',
      ko: '작고 운율적인',
      ja: '小さく律動的な',
      zh: '小而有节奏',
      fr: 'Petit et rythmique',
      de: 'Klein und rhythmisch',
      es: 'Pequeño y rítmico',
      ru: 'Маленький и ритмичный',
      ar: 'صغير وإيقاعي',
      hi: 'छोटा और लयबद्ध'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '소',
          hanja: '小',
          meaning: {
            en: 'small, little, young',
            ko: '작은, 작은 것, 어린',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '율',
          hanja: '律',
          meaning: {
            en: 'rhythm, law, rule',
            ko: '운율, 법, 규칙',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '"small" combined with "rhythm, law" creates a meaning of gentle harmony, representing someone who brings subtle but important order and rhythm to life',
        ko: '"작은"과 "운율, 법칙"이 결합되어 부드러운 조화의 의미를 만들며, 삶에 미묘하지만 중요한 질서와 리듬을 가져다주는 사람을 나타냅니다',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    pronunciationMatch: 75
  }),
  createName({
  id: '서아_earth_01',
    korean: '서아',
    romanization: 'Seo-ah',
    pronunciation: 'suh-ah',
    element: 'earth',
    gender: 'female',
    popularity: 84,
    style: 'modern',
    hanja: '瑞雅',
    meaning: {
      en: 'Auspicious beautiful',
      ko: '길조롭고 아름다운',
      ja: '縁起の良い美しい',
      zh: '吉祥美丽',
      fr: 'Auspicieux et beau',
      de: 'Glückverheißend schön',
      es: 'Auspicioso y hermoso',
      ru: 'Благоприятный красивый',
      ar: 'ميمون جميل',
      hi: 'शुभ सुंदर'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '서',
          hanja: '瑞',
          meaning: {
            en: 'auspicious, lucky',
            ko: '상서로운, 운이 좋은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '아',
          hanja: '雅',
          meaning: {
            en: 'elegant, graceful',
            ko: '우아한, 고상한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '유나_earth_01',
    korean: '유나',
    romanization: 'Yu-na',
    pronunciation: 'yu-na',
    element: 'earth',
    gender: 'female',
    popularity: 80,
    style: 'modern',
    hanja: '裕娜',
    meaning: {
      en: 'Abundant me',
      ko: '풍부한 나',
      ja: '豊かな私',
      zh: '丰富的我',
      fr: 'Moi abondant',
      de: 'Reichlich ich',
      es: 'Yo abundante',
      ru: 'Обильная я',
      ar: 'أنا وفيرة',
      hi: 'प्रचुर मैं'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '유',
          hanja: '裕',
          meaning: {
            en: 'abundant, rich',
            ko: '풍부한, 부유한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '나',
          hanja: '娜',
          meaning: {
            en: 'elegant, graceful',
            ko: '우아한, 아리따운',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '채영_earth_01',
    korean: '채영',
    romanization: 'Chae-yeong',
    pronunciation: 'chay-young',
    element: 'earth',
    gender: 'female',
    popularity: 76,
    style: 'modern',
    hanja: '彩榮',
    meaning: {
      en: 'Colorful prosperity',
      ko: '다채로운 번영',
      ja: '色彩豊かな繁栄',
      zh: '多彩繁荣',
      fr: 'Prospérité colorée',
      de: 'Farbenfroher Wohlstand',
      es: 'Prosperidad colorida',
      ru: 'Красочное процветание',
      ar: 'ازدهار ملون',
      hi: 'रंगीन समृद्धि'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '채',
          hanja: '彩',
          meaning: {
            en: 'color, brilliant',
            ko: '색깔, 화려한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '영',
          hanja: '榮',
          meaning: {
            en: 'glory, honor',
            ko: '영광, 명예',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '수연_earth_01',
    korean: '수연',
    romanization: 'Soo-yeon',
    pronunciation: 'soo-yun',
    element: 'earth',
    gender: 'female',
    popularity: 72,
    style: 'modern',
    hanja: '秀緣',
    meaning: {
      en: 'Beautiful connection',
      ko: '아름다운 연결',
      ja: '美しいつながり',
      zh: '美丽的连接',
      fr: 'Belle connexion',
      de: 'Schöne Verbindung',
      es: 'Hermosa conexión',
      ru: 'Красивая связь',
      ar: 'اتصال جميل',
      hi: 'सुंदर कनेक्शन'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '연',
          hanja: '緣',
          meaning: {
            en: 'connection, fate',
            ko: '인연, 운명',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '은서_earth_01',
    korean: '은서',
    romanization: 'Eun-seo',
    pronunciation: 'eun-suh',
    element: 'earth',
    gender: 'female',
    popularity: 68,
    style: 'modern',
    hanja: '恩瑞',
    meaning: {
      en: 'Kindness auspicious',
      ko: '친절함과 길조로운',
      ja: '親切で縁起の良い',
      zh: '善良吉祥',
      fr: 'Gentillesse propice',
      de: 'Freundlichkeit verheißungsvoll',
      es: 'Amabilidad auspiciosa',
      ru: 'Доброта благоприятная',
      ar: 'لطف ميمون',
      hi: 'दयालु शुभ'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '은',
          hanja: '恩',
          meaning: {
            en: 'grace, favor',
            ko: '은혜, 호의',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '서',
          hanja: '瑞',
          meaning: {
            en: 'auspicious, lucky',
            ko: '상서로운, 운이 좋은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '예서_earth_01',
    korean: '예서',
    romanization: 'Ye-seo',
    pronunciation: 'yeh-suh',
    element: 'earth',
    gender: 'female',
    popularity: 64,
    style: 'modern',
    hanja: '藝瑞',
    meaning: {
      en: 'Beautiful auspicious',
      ko: '아름답고 길조로운',
      ja: '美しく縁起の良い',
      zh: '美丽吉祥',
      fr: 'Belle et propice',
      de: 'Schön und glückverheißend',
      es: 'Hermosa y auspiciosa',
      ru: 'Красивая благоприятная',
      ar: 'جميلة وميمونة',
      hi: 'सुंदर शुभ'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '예',
          hanja: '藝',
          meaning: {
            en: 'art, skill',
            ko: '예술, 기술',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '서',
          hanja: '瑞',
          meaning: {
            en: 'auspicious, lucky',
            ko: '상서로운, 운이 좋은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '수민_earth_01',
    korean: '수민',
    romanization: 'Soo-min',
    pronunciation: 'soo-min',
    element: 'earth',
    gender: 'female',
    popularity: 60,
    style: 'modern',
    hanja: '秀敏',
    meaning: {
      en: 'Beautiful quick',
      ko: '아름답고 민첩한',
      ja: '美しく素早い',
      zh: '美丽敏捷',
      fr: 'Belle et rapide',
      de: 'Schön und schnell',
      es: 'Hermosa y rápida',
      ru: 'Красивая и быстрая',
      ar: 'جميلة وسريعة',
      hi: 'सुंदर और तीव्र'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '지연_earth_01',
    korean: '지연',
    romanization: 'Ji-yeon',
    pronunciation: 'jee-yun',
    element: 'earth',
    gender: 'female',
    popularity: 56,
    style: 'modern',
    hanja: '智緣',
    meaning: {
      en: 'Wise connection',
      ko: '지혜로운 연결',
      ja: '賢い繋がり',
      zh: '智慧的连接',
      fr: 'Connexion sage',
      de: 'Weise Verbindung',
      es: 'Conexión sabia',
      ru: 'Мудрая связь',
      ar: 'اتصال حكيم',
      hi: 'बुद्धिमान कनेक्शन'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '지',
          hanja: '智',
          meaning: {
            en: 'wisdom, intelligence',
            ko: '지혜, 지능',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '연',
          hanja: '緣',
          meaning: {
            en: 'connection, fate',
            ko: '인연, 운명',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '유진_earth_01',
    korean: '유진',
    romanization: 'Yu-jin',
    pronunciation: 'yu-jin',
    element: 'earth',
    gender: 'female',
    popularity: 52,
    style: 'modern',
    hanja: '裕珍',
    meaning: {
      en: 'Abundant precious',
      ko: '풍부하고 소중한',
      ja: '豊かで貴重な',
      zh: '丰富珍贵',
      fr: 'Abondant et précieux',
      de: 'Reichlich kostbar',
      es: 'Abundante y precioso',
      ru: 'Обильный драгоценный',
      ar: 'وفير وثمين',
      hi: 'प्रचुर अनमोल'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '유',
          hanja: '裕',
          meaning: {
            en: 'abundant, rich',
            ko: '풍부한, 부유한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '채은_earth_01',
    korean: '채은',
    romanization: 'Chae-eun',
    pronunciation: 'chay-eun',
    element: 'earth',
    gender: 'female',
    popularity: 48,
    style: 'modern',
    hanja: '彩恩',
    meaning: {
      en: 'Colorful grace',
      ko: '다채로운 은혜',
      ja: '色彩豊かな恵み',
      zh: '多彩恩典',
      fr: 'Grâce colorée',
      de: 'Farbenfrohe Gnade',
      es: 'Gracia colorida',
      ru: 'Красочная благодать',
      ar: 'نعمة ملونة',
      hi: 'रंगीन कृपा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '채',
          hanja: '彩',
          meaning: {
            en: 'color, brilliant',
            ko: '색깔, 화려한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '은',
          hanja: '恩',
          meaning: {
            en: 'grace, favor',
            ko: '은혜, 호의',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '수현_earth_01',
    korean: '수현',
    romanization: 'Soo-hyun',
    pronunciation: 'soo-hyun',
    element: 'earth',
    gender: 'female',
    popularity: 44,
    style: 'traditional',
    hanja: '秀賢',
    meaning: {
      en: 'Beautiful virtue',
      ko: '아름다운 덕',
      ja: '美しい徳',
      zh: '美德',
      fr: 'Belle vertu',
      de: 'Schöne Tugend',
      es: 'Hermosa virtud',
      ru: 'Красивая добродетель',
      ar: 'فضيلة جميلة',
      hi: 'सुंदर गुण'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'virtuous, worthy',
            ko: '어진, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '은지_earth_01',
    korean: '은지',
    romanization: 'Eun-ji',
    pronunciation: 'eun-jee',
    element: 'earth',
    gender: 'female',
    popularity: 40,
    style: 'traditional',
    hanja: '恩智',
    meaning: {
      en: 'Kindness wisdom',
      ko: '친절함과 지혜',
      ja: '親切な知恵',
      zh: '善良智慧',
      fr: 'Sagesse de la gentillesse',
      de: 'Freundliche Weisheit',
      es: 'Sabiduría de la bondad',
      ru: 'Доброта мудрость',
      ar: 'حكمة اللطف',
      hi: 'दयालुता ज्ञान'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '은',
          hanja: '恩',
          meaning: {
            en: 'grace, favor',
            ko: '은혜, 호의',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '지',
          hanja: '智',
          meaning: {
            en: 'wisdom, intelligence',
            ko: '지혜, 지능',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '예은_earth_01',
    korean: '예은',
    romanization: 'Ye-eun',
    pronunciation: 'yeh-eun',
    element: 'earth',
    gender: 'female',
    popularity: 36,
    style: 'modern',
    hanja: '藝恩',
    meaning: {
      en: 'Beautiful grace',
      ko: '아름다운 은혜',
      ja: '美しい恵み',
      zh: '美丽恩典',
      fr: 'Belle grâce',
      de: 'Schöne Gnade',
      es: 'Hermosa gracia',
      ru: 'Красивая благодать',
      ar: 'نعمة جميلة',
      hi: 'सुंदर कृपा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '예',
          hanja: '藝',
          meaning: {
            en: 'art, skill',
            ko: '예술, 기술',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '은',
          hanja: '恩',
          meaning: {
            en: 'grace, favor',
            ko: '은혜, 호의',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  // K-pop Earth Female Names
  createName({
  id: '미나_earth_01',
    korean: '미나',
    romanization: 'Mi-na',
    pronunciation: 'mee-na',
    element: 'earth',
    gender: 'female',
    popularity: 87,
    style: 'kpop',
    hanja: '美娜',
    meaning: {
      en: 'Beautiful me',
      ko: '아름다운 나',
      ja: '美しい私',
      zh: '美丽的我',
      fr: 'Belle moi',
      de: 'Schönes Ich',
      es: 'Hermosa yo',
      ru: 'Красивая я',
      ar: 'أنا جميلة',
      hi: 'सुंदर मैं'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '미',
          hanja: '美',
          meaning: {
            en: 'beautiful',
            ko: '아름다운',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '나',
          hanja: '娜',
          meaning: {
            en: 'elegant, graceful',
            ko: '우아한, 아리따운',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'TWICE', memberName: 'Mina' }
  }),
  
  createName({
  id: '지효_earth_01',
    korean: '지효',
    romanization: 'Ji-hyo',
    pronunciation: 'jee-hyo',
    element: 'earth',
    gender: 'female',
    popularity: 81,
    style: 'kpop',
    hanja: '智孝',
    meaning: {
      en: 'Wise filial piety',
      ko: '지혜로운 효',
      ja: '賢い孝行',
      zh: '智慧孝顺',
      fr: 'Piété filiale sage',
      de: 'Weise kindliche Frömmigkeit',
      es: 'Sabia piedad filial',
      ru: 'Мудрое сыновнее благочестие',
      ar: 'بر الوالدين الحكيم',
      hi: 'बुद्धिमान पितृभक्ति'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '지',
          hanja: '智',
          meaning: {
            en: 'wisdom, intelligence',
            ko: '지혜, 지능',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '효',
          hanja: '孝',
          meaning: {
            en: 'filial piety',
            ko: '효도',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'TWICE', memberName: 'Jihyo' }
  }),

  // Metal Element - Male Names (20 total)
  createName({
  id: '서준_metal_01',
    korean: '서준',
    romanization: 'Seo-jun',
    pronunciation: 'suh-joon',
    element: 'metal',
    gender: 'male',
    popularity: 93,
    style: 'modern',
    hanja: '瑞俊',
    meaning: {
      en: 'Western talent',
      ko: '서쪽의 재능',
      ja: '西の才能',
      zh: '西方才华',
      fr: 'Talent occidental',
      de: 'Westliches Talent',
      es: 'Talento occidental',
      ru: 'Западный талант',
      ar: 'موهبة غربية',
      hi: 'पश्चिमी प्रतिभा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '서',
          hanja: '瑞',
          meaning: {
            en: 'auspicious, propitious',
            ko: '상서로운, 길조의',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '준',
          hanja: '俊',
          meaning: {
            en: 'talented, handsome, outstanding',
            ko: '재능있는, 준수한, 뛰어난',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '"auspicious" combined with "talented, outstanding" creates a meaning of blessed talent, representing someone whose abilities bring good fortune and success',
        ko: '"상서로운"과 "재능있고 뛰어난"이 결합되어 축복받은 재능의 의미를 만들며, 행운과 성공을 가져다주는 능력을 가진 사람을 나타냅니다',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    pronunciationMatch: 70
  }),
  createName({
  id: '태윤_metal_01',
    korean: '태윤',
    romanization: 'Tae-yoon',
    pronunciation: 'tay-yoon',
    element: 'metal',
    gender: 'male',
    popularity: 89,
    style: 'modern',
    hanja: '泰潤',
    meaning: {
      en: 'Great prosperity',
      ko: '큰 번영',
      ja: '大いなる繁栄',
      zh: '伟大繁荣',
      fr: 'Grande prospérité',
      de: 'Großer Wohlstand',
      es: 'Gran prosperidad',
      ru: 'Великое процветание',
      ar: 'ازدهار عظيم',
      hi: 'महान समृद्धि'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '태',
          hanja: '泰',
          meaning: {
            en: 'great, superior',
            ko: '큰, 뛰어난',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '윤',
          hanja: '潤',
          meaning: {
            en: 'to moisten, sleek',
            ko: '윤택하게 하다, 매끄럽게 하다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '현우_metal_01',
    korean: '현우',
    romanization: 'Hyun-woo',
    pronunciation: 'hyun-woo',
    element: 'metal',
    gender: 'male',
    popularity: 85,
    style: 'traditional',
    hanja: '賢佑',
    meaning: {
      en: 'Wise and excellent',
      ko: '지혜롭고 뛰어난',
      ja: '賢明で優れた',
      zh: '贤明卓越',
      fr: 'Sage et excellent',
      de: 'Weise und ausgezeichnet',
      es: 'Sabio y excelente',
      ru: 'Мудрый и превосходный',
      ar: 'حكيم وممتاز',
      hi: 'बुद्धिमान और उत्कृष्ट'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'wise, virtuous, worthy',
            ko: '지혜로운, 덕이 있는, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '우',
          hanja: '佑',
          meaning: {
            en: 'help, assist, protect',
            ko: '도움, 도움을 주다, 보호하다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '"wise, virtuous" combined with "help, protect" creates a meaning of wise protector, representing someone who uses wisdom to help and guide others',
        ko: '"지혜롭고 덕이 있는"과 "도움, 보호"가 결합되어 지혜로운 보호자의 의미를 만들며, 지혜를 사용하여 다른 사람들을 도우고 인도하는 사람을 나타냅니다',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    pronunciationMatch: 76
  }),
  createName({
  id: '정호_metal_01',
    korean: '정호',
    romanization: 'Jeong-ho',
    pronunciation: 'jung-ho',
    element: 'metal',
    gender: 'male',
    popularity: 77,
    style: 'traditional',
    hanja: '正浩',
    meaning: {
      en: 'Righteous great',
      ko: '의롭고 위대한',
      ja: '正義の偉大な',
      zh: '正义伟大',
      fr: 'Juste et grand',
      de: 'Rechtschaffen groß',
      es: 'Justo y grande',
      ru: 'Праведный великий',
      ar: 'عظيم صالح',
      hi: 'धर्मी महान'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '정',
          hanja: '正',
          meaning: {
            en: 'right, proper, correct',
            ko: '바른, 올바른, 정확한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '호',
          hanja: '浩',
          meaning: {
            en: 'great, vast',
            ko: '큰, 넓은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '민철_metal_01',
    korean: '민철',
    romanization: 'Min-chul',
    pronunciation: 'min-chul',
    element: 'metal',
    gender: 'male',
    popularity: 73,
    style: 'modern',
    hanja: '敏鐵',
    meaning: {
      en: 'Quick iron',
      ko: '빠른 철',
      ja: '素早い鉄',
      zh: '敏捷铁',
      fr: 'Fer rapide',
      de: 'Schnelles Eisen',
      es: 'Hierro rápido',
      ru: 'Быстрое железо',
      ar: 'حديد سريع',
      hi: 'तीव्र लोहा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '철',
          hanja: '鐵',
          meaning: {
            en: 'iron',
            ko: '철',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '준철_metal_01',
    korean: '준철',
    romanization: 'Jun-chul',
    pronunciation: 'joon-chul',
    element: 'metal',
    gender: 'male',
    popularity: 69,
    style: 'traditional',
    hanja: '俊鐵',
    meaning: {
      en: 'Talented iron',
      ko: '재능있는 철',
      ja: '才能ある鉄',
      zh: '才华铁',
      fr: 'Fer talentueux',
      de: 'Talentiertes Eisen',
      es: 'Hierro talentoso',
      ru: 'Талантливое железо',
      ar: 'حديد موهوب',
      hi: 'प्रतिभाशाली लोहा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '준',
          hanja: '俊',
          meaning: {
            en: 'talented, handsome',
            ko: '재능있는, 잘생긴',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '철',
          hanja: '鐵',
          meaning: {
            en: 'iron',
            ko: '철',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '성호_metal_01',
    korean: '성호',
    romanization: 'Seong-ho',
    pronunciation: 'sung-ho',
    element: 'metal',
    gender: 'male',
    popularity: 65,
    style: 'traditional',
    hanja: '聖浩',
    meaning: {
      en: 'Holy great',
      ko: '거룩하고 위대한',
      ja: '聖なる偉大な',
      zh: '神圣伟大',
      fr: 'Saint grand',
      de: 'Heiliger Großer',
      es: 'Santo grande',
      ru: 'Священный великий',
      ar: 'عظيم مقدس',
      hi: 'पवित्र महान'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '성',
          hanja: '聖',
          meaning: {
            en: 'holy, sacred',
            ko: '거룩한, 신성한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '호',
          hanja: '浩',
          meaning: {
            en: 'great, vast',
            ko: '큰, 넓은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '진석_metal_01',
    korean: '진석',
    romanization: 'Jin-seok',
    pronunciation: 'jin-suk',
    element: 'metal',
    gender: 'male',
    popularity: 61,
    style: 'traditional',
    hanja: '珍石',
    meaning: {
      en: 'Precious stone',
      ko: '소중한 돌',
      ja: '貴重な石',
      zh: '珍贵石头',
      fr: 'Pierre précieuse',
      de: 'Kostbarer Stein',
      es: 'Piedra preciosa',
      ru: 'Драгоценный камень',
      ar: 'حجر كريم',
      hi: 'अनमोल पत्थर'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '석',
          hanja: '石',
          meaning: {
            en: 'stone',
            ko: '돌',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '철민_metal_01',
    korean: '철민',
    romanization: 'Chul-min',
    pronunciation: 'chul-min',
    element: 'metal',
    gender: 'male',
    popularity: 53,
    style: 'traditional',
    hanja: '鐵敏',
    meaning: {
      en: 'Iron quick',
      ko: '철의 민첩함',
      ja: '鉄の素早さ',
      zh: '铁敏捷',
      fr: 'Fer rapide',
      de: 'Schnelles Eisen',
      es: 'Hierro rápido',
      ru: 'Быстрое железо',
      ar: 'حديد سريع',
      hi: 'तीव्र लोहा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '철',
          hanja: '鐵',
          meaning: {
            en: 'iron',
            ko: '철',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '승재_metal_01',
    korean: '승재',
    romanization: 'Seung-jae',
    pronunciation: 'seung-jay',
    element: 'metal',
    gender: 'male',
    popularity: 49,
    style: 'modern',
    hanja: '勝才',
    meaning: {
      en: 'Victory talent',
      ko: '승리의 재능',
      ja: '勝利の才能',
      zh: '胜利才华',
      fr: 'Talent de victoire',
      de: 'Siegstalent',
      es: 'Talento de victoria',
      ru: 'Талант победы',
      ar: 'موهبة النصر',
      hi: 'विजय प्रतिभा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '승',
          hanja: '勝',
          meaning: {
            en: 'victory, win',
            ko: '승리, 이기다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '재',
          hanja: '才',
          meaning: {
            en: 'talent, ability',
            ko: '재주, 재능',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '정민_metal_01',
    korean: '정민',
    romanization: 'Jeong-min',
    pronunciation: 'jung-min',
    element: 'metal',
    gender: 'male',
    popularity: 45,
    style: 'traditional',
    hanja: '正敏',
    meaning: {
      en: 'Righteous quick',
      ko: '의롭고 민첩한',
      ja: '正義の素早い',
      zh: '正义敏捷',
      fr: 'Juste et rapide',
      de: 'Rechtschaffen schnell',
      es: 'Justo y rápido',
      ru: 'Праведный быстрый',
      ar: 'سريع صالح',
      hi: 'धर्मी तीव्र'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '정',
          hanja: '正',
          meaning: {
            en: 'right, proper, correct',
            ko: '바른, 올바른, 정확한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '현철_metal_01',
    korean: '현철',
    romanization: 'Hyun-chul',
    pronunciation: 'hyun-chul',
    element: 'metal',
    gender: 'male',
    popularity: 41,
    style: 'traditional',
    hanja: '賢鐵',
    meaning: {
      en: 'Virtuous iron',
      ko: '덕이 있는 철',
      ja: '賢い鉄',
      zh: '贤铁',
      fr: 'Fer vertueux',
      de: 'Tugendhaftes Eisen',
      es: 'Hierro virtuoso',
      ru: 'Добродетельное железо',
      ar: 'حديد فاضل',
      hi: 'गुणी लोहा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'virtuous, worthy',
            ko: '어진, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '철',
          hanja: '鐵',
          meaning: {
            en: 'iron',
            ko: '철',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '승철_metal_01',
    korean: '승철',
    romanization: 'Seung-chul',
    pronunciation: 'seung-chul',
    element: 'metal',
    gender: 'male',
    popularity: 37,
    style: 'modern',
    hanja: '勝鐵',
    meaning: {
      en: 'Victory iron',
      ko: '승리의 철',
      ja: '勝利の鉄',
      zh: '胜利铁',
      fr: 'Fer de victoire',
      de: 'Siegeseisen',
      es: 'Hierro de victoria',
      ru: 'Железо победы',
      ar: 'حديد النصر',
      hi: 'विजय लोहा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '승',
          hanja: '勝',
          meaning: {
            en: 'victory, win',
            ko: '승리, 이기다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '철',
          hanja: '鐵',
          meaning: {
            en: 'iron',
            ko: '철',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '정석_metal_01',
    korean: '정석',
    romanization: 'Jeong-seok',
    pronunciation: 'jung-suk',
    element: 'metal',
    gender: 'male',
    popularity: 33,
    style: 'traditional',
    hanja: '正石',
    meaning: {
      en: 'Righteous stone',
      ko: '의로운 돌',
      ja: '正義の石',
      zh: '正义石',
      fr: 'Pierre juste',
      de: 'Rechtschaffener Stein',
      es: 'Piedra justa',
      ru: 'Праведный камень',
      ar: 'حجر صالح',
      hi: 'धर्मी पत्थर'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '정',
          hanja: '正',
          meaning: {
            en: 'right, proper, correct',
            ko: '바른, 올바른, 정확한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '석',
          hanja: '石',
          meaning: {
            en: 'stone',
            ko: '돌',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '진호_metal_01',
    korean: '진호',
    romanization: 'Jin-ho',
    pronunciation: 'jin-ho',
    element: 'metal',
    gender: 'male',
    popularity: 29,
    style: 'modern',
    hanja: '珍浩',
    meaning: {
      en: 'Precious great',
      ko: '소중하고 위대한',
      ja: '貴重で偉大な',
      zh: '珍贵伟大',
      fr: 'Précieux et grand',
      de: 'Kostbar groß',
      es: 'Precioso y grande',
      ru: 'Драгоценный великий',
      ar: 'عظيم ثمين',
      hi: 'अनमोल महान'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '호',
          hanja: '浩',
          meaning: {
            en: 'great, vast',
            ko: '큰, 넓은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  // K-pop Metal Male Names
  createName({
  id: '방찬_metal_01',
    korean: '방찬',
    romanization: 'Bang-chan',
    pronunciation: 'bang-chan',
    element: 'metal',
    gender: 'male',
    popularity: 88,
    style: 'kpop',
    hanja: '房燦',
    meaning: {
      en: 'Room bright',
      ko: '방 밝은',
      ja: '部屋が明るい',
      zh: '房间明亮',
      fr: 'Chambre lumineuse',
      de: 'Zimmer hell',
      es: 'Habitación luminosa',
      ru: 'Комната яркая',
      ar: 'غرفة مشرقة',
      hi: 'कमरा उज्ज्वल'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '방',
          hanja: '房',
          meaning: {
            en: 'room',
            ko: '방',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '찬',
          hanja: '燦',
          meaning: {
            en: 'brilliant, shining',
            ko: '찬란한, 빛나는',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Bang Chan' }
  }),
  createName({
  id: '창빈_metal_01',
    korean: '창빈',
    romanization: 'Chang-bin',
    pronunciation: 'chang-bin',
    element: 'metal',
    gender: 'male',
    popularity: 82,
    style: 'kpop',
    hanja: '槍彬',
    meaning: {
      en: 'Spear refined',
      ko: '창 세련된',
      ja: '洗練された槍',
      zh: '精炼矛',
      fr: 'Lance raffinée',
      de: 'Raffinierter Speer',
      es: 'Lanza refinada',
      ru: 'Изысканное копье',
      ar: 'رمح مكرر',
      hi: 'परिष्कृत भाला'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '창',
          hanja: '槍',
          meaning: {
            en: 'spear',
            ko: '창',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '빈',
          hanja: '彬',
          meaning: {
            en: 'refined, cultivated',
            ko: '세련된, 교양있는',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Changbin' }
  }),
  createName({
  id: '선우_metal_01',
    korean: '선우',
    romanization: 'Seon-woo',
    pronunciation: 'sun-woo',
    element: 'metal',
    gender: 'male',
    popularity: 84,
    style: 'kpop',
    hanja: '善優',
    meaning: {
      en: 'Good excellent',
      ko: '좋고 뛰어난',
      ja: '良い優れた',
      zh: '良好卓越',
      fr: 'Bon excellent',
      de: 'Gut ausgezeichnet',
      es: 'Bueno excelente',
      ru: 'Хороший превосходный',
      ar: 'جيد ممتاز',
      hi: 'अच्छा उत्कृष्ट'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '선',
          hanja: '善',
          meaning: {
            en: 'good, virtuous',
            ko: '착한, 덕이 있는',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '우',
          hanja: '優',
          meaning: {
            en: 'excellent, superior',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'THE BOYZ', memberName: 'Sunwoo' }
  }),

  // Metal Element - Female Names (20 total)
  createName({
  id: '하린_metal_01',
    korean: '하린',
    romanization: 'Ha-rin',
    pronunciation: 'ha-rin',
    element: 'metal',
    gender: 'female',
    popularity: 91,
    style: 'modern',
    hanja: '夏麟',
    meaning: {
      en: 'Beautiful sky',
      ko: '아름다운 하늘',
      ja: '美しい空',
      zh: '美丽的天空',
      fr: 'Beau ciel',
      de: 'Schöner Himmel',
      es: 'Hermoso cielo',
      ru: 'Красивое небо',
      ar: 'سماء جميلة',
      hi: 'सुंदर आकाश'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '하',
          hanja: '夏',
          meaning: {
            en: 'summer',
            ko: '여름',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '린',
          hanja: '麟',
          meaning: {
            en: 'Kirin, mythical creature',
            ko: '기린, 신화 속 동물',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  
  
  createName({
  id: '소영_metal_01',
    korean: '소영',
    romanization: 'So-yeong',
    pronunciation: 'so-young',
    element: 'metal',
    gender: 'female',
    popularity: 79,
    style: 'modern',
    hanja: '小榮',
    meaning: {
      en: 'Small prosperity',
      ko: '작은 번영',
      ja: '小さな繁栄',
      zh: '小繁荣',
      fr: 'Petite prospérité',
      de: 'Kleiner Wohlstand',
      es: 'Pequeña prosperidad',
      ru: 'Малое процветание',
      ar: 'ازدهار صغير',
      hi: 'छोटी समृद्धि'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '소',
          hanja: '小',
          meaning: {
            en: 'small',
            ko: '작은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '영',
          hanja: '榮',
          meaning: {
            en: 'glory, honor',
            ko: '영광, 명예',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
    createName({
  id: '정은_metal_01',
    korean: '정은',
    romanization: 'Jeong-eun',
    pronunciation: 'jung-eun',
    element: 'metal',
    gender: 'female',
    popularity: 75,
    style: 'traditional',
    hanja: '正恩',
    meaning: {
      en: 'Righteous kindness',
      ko: '의로운 친절함',
      ja: '正義の親切',
      zh: '正义善良',
      fr: 'Gentillesse juste',
      de: 'Rechtschaffene Freundlichkeit',
      es: 'Bondad justa',
      ru: 'Праведная доброта',
      ar: 'لطف صالح',
      hi: 'धर्मी दयालुता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '정',
          hanja: '正',
          meaning: {
            en: 'right, proper, correct',
            ko: '바른, 올바른, 정확한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '은',
          hanja: '恩',
          meaning: {
            en: 'grace, favor',
            ko: '은혜, 호의',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '혜린_metal_01',
    korean: '혜린',
    romanization: 'Hye-rin',
    pronunciation: 'hye-rin',
    element: 'metal',
    gender: 'female',
    popularity: 71,
    style: 'modern',
    hanja: '慧潾',
    meaning: {
      en: 'Wise beautiful',
      ko: '지혜롭고 아름다운',
      ja: '賢く美しい',
      zh: '智慧美丽',
      fr: 'Sage et belle',
      de: 'Weise schön',
      es: 'Sabia y hermosa',
      ru: 'Мудрая красивая',
      ar: 'حكيمة جميلة',
      hi: 'बुद्धिमान सुंदर'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '혜',
          hanja: '慧',
          meaning: {
            en: 'wise, intelligent',
            ko: '지혜로운, 총명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '린',
          hanja: '潾',
          meaning: {
            en: 'clear water',
            ko: '맑은 물',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '수정_metal_01',
    korean: '수정',
    romanization: 'Soo-jeong',
    pronunciation: 'soo-jung',
    element: 'metal',
    gender: 'female',
    popularity: 67,
    style: 'traditional',
    hanja: '秀晶',
    meaning: {
      en: 'Beautiful crystal',
      ko: '아름다운 수정',
      ja: '美しい水晶',
      zh: '美丽水晶',
      fr: 'Beau cristal',
      de: 'Schöner Kristall',
      es: 'Hermoso cristal',
      ru: 'Красивый кристалл',
      ar: 'بلورة جميلة',
      hi: 'सुंदर क्रिस्टल'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '정',
          hanja: '晶',
          meaning: {
            en: 'crystal',
            ko: '수정',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '진영_metal_01',
    korean: '진영',
    romanization: 'Jin-yeong',
    pronunciation: 'jin-young',
    element: 'metal',
    gender: 'female',
    popularity: 63,
    style: 'modern',
    hanja: '珍榮',
    meaning: {
      en: 'Precious prosperity',
      ko: '소중한 번영',
      ja: '貴重な繁栄',
      zh: '珍贵繁荣',
      fr: 'Prospérité précieuse',
      de: 'Kostbarer Wohlstand',
      es: 'Prosperidad preciosa',
      ru: 'Драгоценное процветание',
      ar: 'ازدهار ثمين',
      hi: 'अनमोल समृद्धि'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '영',
          hanja: '榮',
          meaning: {
            en: 'glory, honor',
            ko: '영광, 명예',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),

  createName({
  id: '정아_metal_01',
    korean: '정아',
    romanization: 'Jeong-ah',
    pronunciation: 'jung-ah',
    element: 'metal',
    gender: 'female',
    popularity: 55,
    style: 'traditional',
    hanja: '正雅',
    meaning: {
      en: 'Righteous beautiful',
      ko: '의롭고 아름다운',
      ja: '正義の美しい',
      zh: '正义美丽',
      fr: 'Juste et belle',
      de: 'Rechtschaffen schön',
      es: 'Justa y hermosa',
      ru: 'Праведная красивая',
      ar: 'جميلة صالحة',
      hi: 'धर्मी सुंदर'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '정',
          hanja: '正',
          meaning: {
            en: 'right, proper, correct',
            ko: '바른, 올바른, 정확한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '아',
          hanja: '雅',
          meaning: {
            en: 'elegant, graceful',
            ko: '우아한, 고상한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '소정_metal_01',
    korean: '소정',
    romanization: 'So-jeong',
    pronunciation: 'so-jung',
    element: 'metal',
    gender: 'female',
    popularity: 51,
    style: 'traditional',
    hanja: '小晶',
    meaning: {
      en: 'Small crystal',
      ko: '작은 수정',
      ja: '小さな水晶',
      zh: '小水晶',
      fr: 'Petit cristal',
      de: 'Kleiner Kristall',
      es: 'Pequeño cristal',
      ru: 'Маленький кристалл',
      ar: 'بلورة صغيرة',
      hi: 'छोटा क्रिस्टल'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '소',
          hanja: '小',
          meaning: {
            en: 'small',
            ko: '작은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '정',
          hanja: '晶',
          meaning: {
            en: 'crystal',
            ko: '수정',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '혜진_metal_01',
    korean: '혜진',
    romanization: 'Hye-jin',
    pronunciation: 'hye-jin',
    element: 'metal',
    gender: 'female',
    popularity: 47,
    style: 'traditional',
    hanja: '慧珍',
    meaning: {
      en: 'Wise precious',
      ko: '지혜롭고 소중한',
      ja: '賢く貴重な',
      zh: '智慧珍贵',
      fr: 'Sage et précieuse',
      de: 'Weise und kostbar',
      es: 'Sabia y preciosa',
      ru: 'Мудрая драгоценная',
      ar: 'حكيمة ثمينة',
      hi: 'बुद्धिमान अनमोल'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '혜',
          hanja: '慧',
          meaning: {
            en: 'wise, intelligent',
            ko: '지혜로운, 총명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '수진_metal_01',
    korean: '수진',
    romanization: 'Soo-jin',
    pronunciation: 'soo-jin',
    element: 'metal',
    gender: 'female',
    popularity: 43,
    style: 'modern',
    hanja: '秀珍',
    meaning: {
      en: 'Beautiful precious',
      ko: '아름답고 소중한',
      ja: '美しく貴重な',
      zh: '美丽珍贵',
      fr: 'Belle et précieuse',
      de: 'Schön und kostbar',
      es: 'Hermosa y preciosa',
      ru: 'Красивая и драгоценная',
      ar: 'جميلة وثمينة',
      hi: 'सुंदर और कीमती'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '은영_metal_01',
    korean: '은영',
    romanization: 'Eun-yeong',
    pronunciation: 'eun-young',
    element: 'metal',
    gender: 'female',
    popularity: 39,
    style: 'modern',
    hanja: '銀榮',
    meaning: {
      en: 'Silver prosperity',
      ko: '은빛 번영',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '은',
          hanja: '銀',
          meaning: {
            en: 'silver',
            ko: '은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '영',
          hanja: '榮',
          meaning: {
            en: 'glory, honor',
            ko: '영광, 명예',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '정현_metal_01',
    korean: '정현',
    romanization: 'Jeong-hyun',
    pronunciation: 'jung-hyun',
    element: 'metal',
    gender: 'female',
    popularity: 35,
    style: 'traditional',
    hanja: '正賢',
    meaning: {
      en: 'Righteous virtue',
      ko: '의로운 덕',
      ja: '正義の徳',
      zh: '正义美德',
      fr: 'Vertu juste',
      de: 'Rechtschaffene Tugend',
      es: 'Virtud justa',
      ru: 'Праведная добродетель',
      ar: 'فضيلة صالحة',
      hi: 'धर्मी गुण'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '정',
          hanja: '正',
          meaning: {
            en: 'right, proper, correct',
            ko: '바른, 올바른, 정확한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'virtuous, worthy',
            ko: '어진, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '소진_metal_01',
    korean: '소진',
    romanization: 'So-jin',
    pronunciation: 'so-jin',
    element: 'metal',
    gender: 'female',
    popularity: 31,
    style: 'modern',
    hanja: '小珍',
    meaning: {
      en: 'Small precious',
      ko: '작고 소중한',
      ja: '小さな貴重な',
      zh: '小珍贵',
      fr: 'Petite précieuse',
      de: 'Klein kostbar',
      es: 'Pequeña preciosa',
      ru: 'Маленькая драгоценность',
      ar: 'ثمين صغير',
      hi: 'छोटा अनमोल'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '소',
          hanja: '小',
          meaning: {
            en: 'small',
            ko: '작은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '혜영_metal_01',
    korean: '혜영',
    romanization: 'Hye-yeong',
    pronunciation: 'hye-young',
    element: 'metal',
    gender: 'female',
    popularity: 27,
    style: 'modern',
    hanja: '慧榮',
    meaning: {
      en: 'Wise prosperity',
      ko: '지혜로운 번영',
      ja: '賢い繁栄',
      zh: '智慧繁荣',
      fr: 'Prospérité sage',
      de: 'Weise Wohlstand',
      es: 'Prosperidad sabia',
      ru: 'Мудрое процветание',
      ar: 'ازدهار حكيم',
      hi: 'बुद्धिमान समृद्धि'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '혜',
          hanja: '慧',
          meaning: {
            en: 'wise, intelligent',
            ko: '지혜로운, 총명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '영',
          hanja: '榮',
          meaning: {
            en: 'glory, honor',
            ko: '영광, 명예',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  // K-pop Metal Female Names
  
  createName({
  id: '류진_metal_01',
    korean: '류진',
    romanization: 'Ryu-jin',
    pronunciation: 'ryu-jin',
    element: 'metal',
    gender: 'female',
    popularity: 86,
    style: 'kpop',
    hanja: '龍珍',
    meaning: {
      en: 'Dragon precious',
      ko: '용 소중한',
      ja: '龍の貴重な',
      zh: '龙珍贵',
      fr: 'Dragon précieux',
      de: 'Drachenkostbar',
      es: 'Dragón precioso',
      ru: 'Драгоценный дракон',
      ar: 'تنين ثمين',
      hi: 'ड्रैगन अनमोल'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '류',
          hanja: '龍',
          meaning: {
            en: 'dragon',
            ko: '용',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'ITZY', memberName: 'Ryujin' }
  }),
  

  // Water Element - Male Names (20 total)
  createName({
  id: '은우_water_01',
    korean: '은우',
    romanization: 'Eun-woo',
    pronunciation: 'eun-woo',
    element: 'water',
    gender: 'male',
    popularity: 97,
    style: 'modern',
    hanja: '恩優',
    meaning: {
      en: 'Kindness and excellence',
      ko: '친절함과 탁월함',
      ja: '親切と卓越性',
      zh: '善良与卓越',
      fr: 'Gentillesse et excellence',
      de: 'Freundlichkeit und Exzellenz',
      es: 'Amabilidad y excelencia',
      ru: 'Доброта и превосходство',
      ar: 'اللطف والتميز',
      hi: 'दयालुता और उत्कृष्टता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '은',
          hanja: '恩',
          meaning: {
            en: 'grace, favor',
            ko: '은혜, 호의',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '우',
          hanja: '優',
          meaning: {
            en: 'excellent, superior',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '준호_water_01',
    korean: '준호',
    romanization: 'Jun-ho',
    pronunciation: 'joon-ho',
    element: 'water',
    gender: 'male',
    popularity: 93,
    style: 'modern',
    hanja: '俊浩',
    meaning: {
      en: 'Talented and great',
      ko: '재능있고 위대한',
      ja: '才能豊かで偉大な',
      zh: '才华横溢且伟大',
      fr: 'Talentueux et grand',
      de: 'Talentiert und großartig',
      es: 'Talentoso y grande',
      ru: 'Талантливый и великий',
      ar: 'موهوب وعظيم',
      hi: 'प्रतिभाशाली और महान'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '준',
          hanja: '俊',
          meaning: {
            en: 'talented, handsome',
            ko: '재능있는, 잘생긴',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '호',
          hanja: '浩',
          meaning: {
            en: 'great, vast',
            ko: '큰, 넓은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '민호_water_01',
    korean: '민호',
    romanization: 'Min-ho',
    pronunciation: 'min-ho',
    element: 'water',
    gender: 'male',
    popularity: 89,
    style: 'modern',
    hanja: '敏浩',
    meaning: {
      en: 'Quick and great',
      ko: '민첩하고 위대한',
      ja: '素早く偉大な',
      zh: '敏捷伟大',
      fr: 'Rapide et grand',
      de: 'Schnell und großartig',
      es: 'Rápido y grande',
      ru: 'Быстрый и великий',
      ar: 'سريع وعظيم',
      hi: 'तीव्र और महान'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '호',
          hanja: '浩',
          meaning: {
            en: 'great, vast',
            ko: '큰, 넓은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  
  
  createName({
  id: '민수_water_01',
    korean: '민수',
    romanization: 'Min-soo',
    pronunciation: 'min-soo',
    element: 'water',
    gender: 'male',
    popularity: 77,
    style: 'modern',
    hanja: '敏秀',
    meaning: {
      en: 'Quick excellence',
      ko: '빠른 탁월함',
      ja: '素早い卓越性',
      zh: '敏捷卓越',
      fr: 'Excellence rapide',
      de: 'Schnelle Exzellenz',
      es: 'Rápida excelencia',
      ru: 'Быстрое превосходство',
      ar: 'التميز السريع',
      hi: 'तीव्र उत्कृष्टता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '준수_water_01',
    korean: '준수',
    romanization: 'Jun-soo',
    pronunciation: 'joon-soo',
    element: 'water',
    gender: 'male',
    popularity: 73,
    style: 'modern',
    hanja: '俊秀',
    meaning: {
      en: 'Talented excellence',
      ko: '재능있는 탁월함',
      ja: '才能ある卓越性',
      zh: '才华卓越',
      fr: 'Excellence talentueuse',
      de: 'Talentierte Exzellenz',
      es: 'Excelencia talentosa',
      ru: 'Талантливое превосходство',
      ar: 'التميز الموهوب',
      hi: 'प्रतिभाशाली उत्कृष्टता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '준',
          hanja: '俊',
          meaning: {
            en: 'talented, handsome',
            ko: '재능있는, 잘생긴',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '정수_water_01',
    korean: '정수',
    romanization: 'Jeong-soo',
    pronunciation: 'jung-soo',
    element: 'water',
    gender: 'male',
    popularity: 69,
    style: 'traditional',
    hanja: '正秀',
    meaning: {
      en: 'Righteous excellence',
      ko: '의로운 탁월함',
      ja: '正義の卓越性',
      zh: '正义卓越',
      fr: 'Excellence juste',
      de: 'Rechtschaffene Exzellenz',
      es: 'Excelencia justa',
      ru: 'Праведное превосходство',
      ar: 'التميز الصالح',
      hi: 'धर्मी उत्कृष्टता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '정',
          hanja: '正',
          meaning: {
            en: 'right, proper, correct',
            ko: '바른, 올바른, 정확한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '현호_water_01',
    korean: '현호',
    romanization: 'Hyun-ho',
    pronunciation: 'hyun-ho',
    element: 'water',
    gender: 'male',
    popularity: 65,
    style: 'traditional',
    hanja: '賢浩',
    meaning: {
      en: 'Virtuous great',
      ko: '덕이 있고 위대한',
      ja: '賢明で偉大な',
      zh: '贤明伟大',
      fr: 'Vertueux et grand',
      de: 'Tugendhaft groß',
      es: 'Virtuoso y grande',
      ru: 'Добродетельный великий',
      ar: 'عظيم فاضل',
      hi: 'गुणी महान'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'virtuous, worthy',
            ko: '어진, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '호',
          hanja: '浩',
          meaning: {
            en: 'great, vast',
            ko: '큰, 넓은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '승수_water_01',
    korean: '승수',
    romanization: 'Seung-soo',
    pronunciation: 'seung-soo',
    element: 'water',
    gender: 'male',
    popularity: 61,
    style: 'modern',
    hanja: '勝秀',
    meaning: {
      en: 'Victory excellence',
      ko: '승리의 탁월함',
      ja: '勝利の卓越性',
      zh: '胜利卓越',
      fr: 'Excellence de la victoire',
      de: 'Siegesexzellenz',
      es: 'Excelencia de la victoria',
      ru: 'Превосходство победы',
      ar: 'تميز النصر',
      hi: 'विजय उत्कृष्टता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '승',
          hanja: '勝',
          meaning: {
            en: 'victory, win',
            ko: '승리, 이기다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '진수_water_01',
    korean: '진수',
    romanization: 'Jin-soo',
    pronunciation: 'jin-soo',
    element: 'water',
    gender: 'male',
    popularity: 57,
    style: 'modern',
    hanja: '珍秀',
    meaning: {
      en: 'Precious excellence',
      ko: '소중한 탁월함',
      ja: '貴重な卓越性',
      zh: '珍贵卓越',
      fr: 'Excellence précieuse',
      de: 'Kostbare Exzellenz',
      es: 'Excelencia preciosa',
      ru: 'Драгоценное превосходство',
      ar: 'التميز الثمين',
      hi: 'अनमोल उत्कृष्टता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '진',
          hanja: '珍',
          meaning: {
            en: 'precious, rare',
            ko: '귀중한, 희귀한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '동수_water_01',
    korean: '동수',
    romanization: 'Dong-soo',
    pronunciation: 'dong-soo',
    element: 'water',
    gender: 'male',
    popularity: 53,
    style: 'traditional',
    hanja: '東秀',
    meaning: {
      en: 'Eastern excellence',
      ko: '동방의 탁월함',
      ja: '東洋の卓越性',
      zh: '东方卓越',
      fr: 'Excellence orientale',
      de: 'Östliche Exzellenz',
      es: 'Excelencia oriental',
      ru: 'Восточное превосходство',
      ar: 'التميز الشرقي',
      hi: 'पूर्वी उत्कृष्टता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '동',
          hanja: '東',
          meaning: {
            en: 'east',
            ko: '동쪽',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '민혁_water_01',
    korean: '민혁',
    romanization: 'Min-hyuk',
    pronunciation: 'min-hyuk',
    element: 'water',
    gender: 'male',
    popularity: 49,
    style: 'modern',
    hanja: '敏赫',
    meaning: {
      en: 'Quick innovation',
      ko: '빠른 혁신',
      ja: '素早い革新',
      zh: '敏捷创新',
      fr: 'Innovation rapide',
      de: 'Schnelle Innovation',
      es: 'Innovación rápida',
      ru: 'Быстрая инновация',
      ar: 'ابتكار سريع',
      hi: 'तीव्र नवाचार'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '혁',
          hanja: '赫',
          meaning: {
            en: 'radiant, bright',
            ko: '빛나는, 밝은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '준혁_water_01',
    korean: '준혁',
    romanization: 'Jun-hyuk',
    pronunciation: 'joon-hyuk',
    element: 'water',
    gender: 'male',
    popularity: 45,
    style: 'modern',
    hanja: '俊赫',
    meaning: {
      en: 'Talented innovation',
      ko: '재능있는 혁신',
      ja: '才能ある革新',
      zh: '才华创新',
      fr: 'Innovation talentueuse',
      de: 'Talentierte Innovation',
      es: 'Innovación talentosa',
      ru: 'Талантливая инновация',
      ar: 'ابتكار موهوب',
      hi: 'प्रतिभाशाली नवाचार'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '준',
          hanja: '俊',
          meaning: {
            en: 'talented, handsome',
            ko: '재능있는, 잘생긴',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '혁',
          hanja: '赫',
          meaning: {
            en: 'radiant, bright',
            ko: '빛나는, 밝은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '현준_water_01',
    korean: '현준',
    romanization: 'Hyun-jun',
    pronunciation: 'hyun-joon',
    element: 'water',
    gender: 'male',
    popularity: 41,
    style: 'traditional',
    hanja: '賢俊',
    meaning: {
      en: 'Virtuous talent',
      ko: '덕이 있는 재능',
      ja: '賢明な才能',
      zh: '贤德才华',
      fr: 'Talent vertueux',
      de: 'Tugendhaftes Talent',
      es: 'Talento virtuoso',
      ru: 'Добродетельный талант',
      ar: 'موهبة فاضلة',
      hi: 'गुणी प्रतिभा'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'virtuous, worthy',
            ko: '어진, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '준',
          hanja: '俊',
          meaning: {
            en: 'talented, handsome',
            ko: '재능있는, 잘생긴',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '승호_water_01',
    korean: '승호',
    romanization: 'Seung-ho',
    pronunciation: 'seung-ho',
    element: 'water',
    gender: 'male',
    popularity: 37,
    style: 'modern',
    hanja: '勝浩',
    meaning: {
      en: 'Victory great',
      ko: '승리와 위대함',
      ja: '勝利の偉大な',
      zh: '胜利伟大',
      fr: 'Victoire et grand',
      de: 'Sieg groß',
      es: 'Victoria grande',
      ru: 'Победа великая',
      ar: 'عظيم النصر',
      hi: 'विजय महान'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '승',
          hanja: '勝',
          meaning: {
            en: 'victory, win',
            ko: '승리, 이기다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '호',
          hanja: '浩',
          meaning: {
            en: 'great, vast',
            ko: '큰, 넓은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  // K-pop Water Male Names
  createName({
  id: '진_water_01',
    korean: '진',
    romanization: 'Jin',
    pronunciation: 'jin',
    element: 'water',
    gender: 'male',
    popularity: 94,
    style: 'kpop',
    hanja: '眞',
    meaning: {
      en: 'Precious and genuine',
      ko: '소중하고 진정한',
      ja: '貴重で本物の',
      zh: '珍贵真诚',
      fr: 'Précieux et authentique',
      de: 'Kostbar und echt',
      es: 'Precioso y genuino',
      ru: 'Драгоценный и подлинный',
      ar: 'ثمين وأصلي',
      hi: 'अनमोल और वास्तविक'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '진',
          hanja: '眞',
          meaning: {
            en: 'true, real, genuine',
            ko: '참된, 진짜의, 진실한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'BTS', memberName: 'Jin' }
  }),
  createName({
  id: '민혁_water_02',
    korean: '민혁',
    romanization: 'Min-hyuk',
    pronunciation: 'min-hyuk',
    element: 'water',
    gender: 'male',
    popularity: 88,
    style: 'kpop',
    hanja: '敏赫',
    meaning: {
      en: 'Quick innovation',
      ko: '빠른 혁신',
      ja: '素早い革新',
      zh: '敏捷创新',
      fr: 'Innovation rapide',
      de: 'Schnelle Innovation',
      es: 'Innovación rápida',
      ru: 'Быстрая инновация',
      ar: 'ابتكار سريع',
      hi: 'तीव्र नवाचार'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '혁',
          hanja: '赫',
          meaning: {
            en: 'radiant, bright',
            ko: '빛나는, 밝은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'BTOB', memberName: 'Minhyuk' }
  }),
  createName({
  id: '원우_water_01',
    korean: '원우',
    romanization: 'Won-woo',
    pronunciation: 'won-woo',
    element: 'water',
    gender: 'male',
    popularity: 85,
    style: 'kpop',
    hanja: '源優',
    meaning: {
      en: 'Source excellent',
      ko: '근원의 탁월함',
      ja: '源の卓越性',
      zh: '源头卓越',
      fr: 'Source excellente',
      de: 'Ausgezeichnete Quelle',
      es: 'Fuente excelente',
      ru: 'Превосходный источник',
      ar: 'مصدر ممتاز',
      hi: 'उत्कृष्ट स्रोत'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '원',
          hanja: '源',
          meaning: {
            en: 'source, origin',
            ko: '근원, 기원',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '우',
          hanja: '優',
          meaning: {
            en: 'excellent, superior',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'SEVENTEEN', memberName: 'Wonwoo' }
  }),

  // Water Element - Female Names (20 total)
  createName({
  id: '윤서_water_01',
    korean: '윤서',
    romanization: 'Yoon-seo',
    pronunciation: 'yoon-suh',
    element: 'water',
    gender: 'female',
    popularity: 98,
    style: 'modern',
    hanja: '潤瑞',
    meaning: {
      en: 'Prosperous kindness',
      ko: '번영하는 친절함',
      ja: '繁栄する親切',
      zh: '繁荣善良',
      fr: 'Gentillesse prospère',
      de: 'Wohlhabende Freundlichkeit',
      es: 'Bondad próspera',
      ru: 'Процветающая доброта',
      ar: 'لطف مزدهر',
      hi: 'समृद्ध दयालुता'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '윤',
          hanja: '潤',
          meaning: {
            en: 'to moisten, sleek',
            ko: '윤택하게 하다, 매끄럽게 하다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '서',
          hanja: '瑞',
          meaning: {
            en: 'auspicious, lucky',
            ko: '상서로운, 운이 좋은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '수빈_water_01',
    korean: '수빈',
    romanization: 'Soo-bin',
    pronunciation: 'soo-bin',
    element: 'water',
    gender: 'female',
    popularity: 94,
    style: 'modern',
    hanja: '秀彬',
    meaning: {
      en: 'excellence, longevity',
      ko: '우수함, 장수',
      ja: '卓越、長寿',
      zh: '卓越，长寿',
      fr: 'Excellence, longévité',
      de: 'Exzellenz, Langlebigkeit',
      es: 'Excelencia, longevidad',
      ru: 'Превосходство, долголетие',
      ar: 'التميز، طول العمر',
      hi: 'उत्कृष्टता, दीर्घायु'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '빈',
          hanja: '彬',
          meaning: {
            en: 'refined, cultivated',
            ko: '세련된, 교양있는',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '빈_water_01',
    korean: '빈',
    romanization: 'Bin',
    pronunciation: 'bin',
    element: 'water',
    gender: 'female',
    popularity: 70,
    style: 'modern',
    hanja: '彬',
    meaning: {
      en: 'refined, elegant',
      ko: '세련된, 우아한',
      ja: '洗練された、優雅な',
      zh: '精致，优雅',
      fr: 'Raffiné, élégant',
      de: 'Raffiniert, elegant',
      es: 'Refinado, elegante',
      ru: 'Изысканный, элегантный',
      ar: 'راقي، أنيق',
      hi: 'परिष्कृत, सुरुचिपूर्ण'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '빈',
          hanja: '彬',
          meaning: {
            en: 'refined, cultivated',
            ko: '세련된, 교양있는',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  
  createName({
  id: '현서_water_01',
    korean: '현서',
    romanization: 'Hyun-seo',
    pronunciation: 'hyun-suh',
    element: 'water',
    gender: 'female',
    popularity: 86,
    style: 'traditional',
    hanja: '賢瑞',
    meaning: {
      en: 'Virtuous auspicious',
      ko: '덕이 있고 길조로운',
      ja: '賢明で縁起の良い',
      zh: '贤德吉祥',
      fr: 'Vertueux et propice',
      de: 'Tugendhaft und glückverheißend',
      es: 'Virtuoso y auspicioso',
      ru: 'Добродетельный благоприятный',
      ar: 'فاضل ميمون',
      hi: 'गुणी शुभ'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'virtuous, worthy',
            ko: '어진, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '서',
          hanja: '瑞',
          meaning: {
            en: 'auspicious, lucky',
            ko: '상서로운, 운이 좋은',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  
  createName({
  id: '민정_water_01',
    korean: '민정',
    romanization: 'Min-jeong',
    pronunciation: 'min-jung',
    element: 'water',
    gender: 'female',
    popularity: 78,
    style: 'modern',
    hanja: '敏貞',
    meaning: {
      en: 'Quick pure',
      ko: '빠르고 순수한',
      ja: '素早く純粋な',
      zh: '敏捷纯洁',
      fr: 'Rapide et pur',
      de: 'Schnell rein',
      es: 'Rápido y puro',
      ru: 'Быстрый чистый',
      ar: 'سريع نقي',
      hi: 'तीव्र शुद्ध'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '정',
          hanja: '貞',
          meaning: {
            en: 'chaste, pure',
            ko: '곧은, 순결한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  
  
  
  createName({
  id: '현정_water_01',
    korean: '현정',
    romanization: 'Hyun-jeong',
    pronunciation: 'hyun-jung',
    element: 'water',
    gender: 'female',
    popularity: 62,
    style: 'traditional',
    hanja: '賢貞',
    meaning: {
      en: 'Virtuous pure',
      ko: '덕이 있고 순수한',
      ja: '賢明で純粋な',
      zh: '贤德纯洁',
      fr: 'Vertueux et pur',
      de: 'Tugendhaft rein',
      es: 'Virtuoso y puro',
      ru: 'Добродетельный чистый',
      ar: 'فاضل نقي',
      hi: 'गुणी शुद्ध'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'virtuous, worthy',
            ko: '어진, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '정',
          hanja: '貞',
          meaning: {
            en: 'chaste, pure',
            ko: '곧은, 순결한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  
  
  createName({
  id: '혜수_water_01',
    korean: '혜수',
    romanization: 'Hye-soo',
    pronunciation: 'hye-soo',
    element: 'water',
    gender: 'female',
    popularity: 50,
    style: 'modern',
    hanja: '慧秀',
    meaning: {
      en: 'Wise beautiful',
      ko: '지혜롭고 아름다운',
      ja: '賢く美しい',
      zh: '智慧美丽',
      fr: 'Sage et belle',
      de: 'Weise schön',
      es: 'Sabia y hermosa',
      ru: 'Мудрая красивая',
      ar: 'حكيمة جميلة',
      hi: 'बुद्धिमान सुंदर'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '혜',
          hanja: '慧',
          meaning: {
            en: 'wise, intelligent',
            ko: '지혜로운, 총명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '수',
          hanja: '秀',
          meaning: {
            en: 'excellent, outstanding',
            ko: '뛰어난, 우수한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '현주_water_01',
    korean: '현주',
    romanization: 'Hyun-ju',
    pronunciation: 'hyun-joo',
    element: 'water',
    gender: 'female',
    popularity: 42,
    style: 'traditional',
    hanja: '賢珠',
    meaning: {
      en: 'Virtuous jewel',
      ko: '덕이 있는 보석',
      ja: '賢明な宝石',
      zh: '贤德珠宝',
      fr: 'Joyau vertueux',
      de: 'Tugendhaftes Juwel',
      es: 'Joya virtuosa',
      ru: 'Добродетельная жемчужина',
      ar: 'جوهرة فاضلة',
      hi: 'गुणी गहना'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '현',
          hanja: '賢',
          meaning: {
            en: 'virtuous, worthy',
            ko: '어진, 현명한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '주',
          hanja: '珠',
          meaning: {
            en: 'jewel, pearl',
            ko: '보석, 진주',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '민주_water_01',
    korean: '민주',
    romanization: 'Min-ju',
    pronunciation: 'min-joo',
    element: 'water',
    gender: 'female',
    popularity: 38,
    style: 'modern',
    hanja: '敏珠',
    meaning: {
      en: 'Quick jewel',
      ko: '빠른 보석',
      ja: '素早い宝石',
      zh: '敏捷珠宝',
      fr: 'Joyau rapide',
      de: 'Schnelles Juwel',
      es: 'Joya rápida',
      ru: 'Быстрая жемчужина',
      ar: 'جوهرة سريعة',
      hi: 'तीव्र गहना'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '주',
          hanja: '珠',
          meaning: {
            en: 'jewel, pearl',
            ko: '보석, 진주',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  createName({
  id: '지영_water_01',
    korean: '지영',
    romanization: 'Ji-yeong',
    pronunciation: 'jee-young',
    element: 'water',
    gender: 'female',
    popularity: 34,
    style: 'modern',
    hanja: '智榮',
    meaning: {
      en: 'Wise prosperity',
      ko: '지혜로운 번영',
      ja: '賢い繁栄',
      zh: '智慧繁荣',
      fr: 'Prospérité sage',
      de: 'Weise Wohlstand',
      es: 'Prosperidad sabia',
      ru: 'Мудрое процветание',
      ar: 'ازدهار حكيم',
      hi: 'बुद्धिमान समृद्धि'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '지',
          hanja: '智',
          meaning: {
            en: 'wisdom, intelligence',
            ko: '지혜, 지능',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '영',
          hanja: '榮',
          meaning: {
            en: 'glory, honor',
            ko: '영광, 명예',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    }
  }),
  // K-pop Water Female Names
  createName({
  id: '해린_water_01',
    korean: '해린',
    romanization: 'Hae-rin',
    pronunciation: 'hay-rin',
    element: 'water',
    gender: 'female',
    popularity: 95,
    style: 'kpop',
    hanja: '海潾',
    meaning: {
      en: 'Ocean beautiful',
      ko: '바다 아름다운',
      ja: '海の美しさ',
      zh: '海洋之美',
      fr: 'Belle océan',
      de: 'Ozean schön',
      es: 'Océano hermoso',
      ru: 'Красивый океан',
      ar: 'محيط جميل',
      hi: 'सुंदर समुद्र'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '해',
          hanja: '海',
          meaning: {
            en: 'sea, ocean',
            ko: '바다',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '린',
          hanja: '潾',
          meaning: {
            en: 'clear water',
            ko: '맑은 물',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'NewJeans', memberName: 'Haerin' }
  }),
  createName({
  id: '민지_water_01',
    korean: '민지',
    romanization: 'Min-ji',
    pronunciation: 'min-jee',
    element: 'water',
    gender: 'female',
    popularity: 92,
    style: 'kpop',
    hanja: '敏智',
    meaning: {
      en: 'Quick wisdom',
      ko: '빠른 지혜',
      ja: '素早い知恵',
      zh: '快速的智慧',
      fr: 'Sagesse rapide',
      de: 'Schnelle Weisheit',
      es: 'Sabiduría rápida',
      ru: 'Быстрая мудрость',
      ar: 'حكمة سريعة',
      hi: 'तेज़ बुद्धि'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '민',
          hanja: '敏',
          meaning: {
            en: 'quick, agile, clever',
            ko: '빠른, 민첩한, 영리한',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '지',
          hanja: '智',
          meaning: {
            en: 'wisdom, intelligence',
            ko: '지혜, 지능',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'NewJeans', memberName: 'Minji' }
  }),
  createName({
  id: '원영_water_01',
    korean: '원영',
    romanization: 'Won-yeong',
    pronunciation: 'won-young',
    element: 'water',
    gender: 'female',
    popularity: 89,
    style: 'kpop',
    hanja: '源榮',
    meaning: {
      en: 'Source prosperity',
      ko: '근원의 번영',
      ja: '源の繁栄',
      zh: '源泉繁荣',
      fr: 'Prospérité de la source',
      de: 'Quelle des Wohlstands',
      es: 'Prosperidad de la fuente',
      ru: 'Процветание истока',
      ar: 'ازدهار المصدر',
      hi: 'स्रोत की समृद्धि'
    },
    hanjaBreakdown: {
      characters: [
        {
          korean: '원',
          hanja: '源',
          meaning: {
            en: 'source, origin',
            ko: '근원, 기원',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        },
        {
          korean: '영',
          hanja: '榮',
          meaning: {
            en: 'glory, honor',
            ko: '영광, 명예',
            ja: '',
            zh: '',
            fr: '',
            de: '',
            es: '',
            ru: '',
            ar: '',
            hi: ''
          }
        }
      ],
      traditionalMeaning: {
        en: '',
        ko: '',
        ja: '',
        zh: '',
        fr: '',
        de: '',
        es: '',
        ru: '',
        ar: '',
        hi: ''
      }
    },
    kpopMember: { group: 'IVE', memberName: 'Wonyoung' }
  })

]; // Close the KOREAN_NAMES array

// Function to get names by criteria
export const getNamesByGender = (gender: 'male' | 'female' | 'neutral'): KoreanName[] => {
  return KOREAN_NAMES.filter(name => name.gender === gender);
};

export const getNamesByElement = (element: 'wood' | 'fire' | 'earth' | 'metal' | 'water'): KoreanName[] => {
  return KOREAN_NAMES.filter(name => name.element === element);
};

export const getNamesByStyle = (style: 'traditional' | 'modern' | 'kpop' | 'mixed'): KoreanName[] => {
  return KOREAN_NAMES.filter(name => name.style === style);
};

export const searchNamesByPronunciation = (englishName: string): KoreanName[] => {
  // Simple phonetic matching - can be improved with more sophisticated algorithm
  const searchTerm = englishName.toLowerCase();
  return KOREAN_NAMES.filter(name =>
    name.pronunciation.toLowerCase().includes(searchTerm.substring(0, 2)) ||
    name.romanization.toLowerCase().includes(searchTerm.substring(0, 2))
  ).sort((a, b) => b.popularity - a.popularity);
};
