// Multilingual Korean Name Database
// Based on traditional Saju elements and modern popularity

export interface KoreanName {
  korean: string;
  hanja?: string;
  romanization: string;
  pronunciation: string;
  meaning: {
    [key: string]: string; // locale-based meanings
  };
  story: {
    [key: string]: string; // locale-based stories
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
  harmony?: {
    [key: string]: string;
  };
}

const createName = (params: KoreanName) => params;

export const KOREAN_NAMES: KoreanName[] = [
  // Wood Element - Male Names (20 total)
createName({
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
  },
  story: {
    en: 'This name combines the wisdom of a scholar with natural charm, perfect for someone who grows like a strong tree.',
    ko: '학자의 지혜와 자연스러운 매력을 결합한 이름으로, 강한 나무처럼 자라는 사람에게 완벽합니다.',
    ja: 'この名前は学者の知恵と自然な魅力を組み合わせ、強い木のように成長する人にぴったりです。',
    zh: '这个名字结合了学者的智慧和自然魅力，非常适合像强壮的树木一样成长的人。',
    fr: 'Ce nom combine la sagesse d\'un érudit avec un charme naturel, parfait pour quelqu\'un qui grandit comme un arbre solide.',
    de: 'Dieser Name vereint die Weisheit eines Gelehrten mit natürlichem Charme, perfekt für jemanden, der wie ein starker Baum wächst.',
    es: 'Este nombre combina la sabiduría de un erudito con encanto natural, perfecto para alguien que crece como un árbol fuerte.',
    ru: 'Это имя сочетает мудрость учёного с естественным обаянием, идеально для того, кто растёт как сильное дерево.',
    ar: 'يجمع هذا الاسم بين حكمة العالم والسحر الطبيعي، مثالي لمن ينمو مثل شجرة قوية.',
    hi: 'यह नाम विद्वान की बुद्धिमत्ता और प्राकृतिक आकर्षण को जोड़ता है, उस व्यक्ति के लिए आदर्श जो एक मजबूत पेड़ की तरह बढ़ता है।'
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating deep roots of learning and growth. The quick-thinking aspect balances your natural patience, while the handsome meaning reflects the inner beauty that comes from cultivated wisdom and genuine character.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 배움과 성장의 깊은 뿌리를 만듭니다. 빠른 사고는 당신의 타고난 인내심과 균형을 이루고, 잘생겼다는 의미는 교양 있는 지혜와 진정한 성품에서 오는 내면의 아름다움을 반영합니다.',
    ja: 'あなたの木の元素の性質はこの名前と完璧に調和し、学びと成長の深い根を作ります。素早い思考の面はあなたの生来の忍耐力とバランスを取り、ハンサムという意味は教養ある知恵と真の人格から来る内面の美しさを反映します。',
    zh: '您的木元素性质与这个名字完美和谐，创造了深根的学习和成长。快速思考的特质平衡了您天生的耐心，而英俊的含义反映了来自修养的智慧和真正品格的内在美。',
    fr: 'Votre nature d\'\u00e9l\u00e9ment Bois s\'harmonise parfaitement avec ce nom, cr\u00e9ant des racines profondes d\'apprentissage et de croissance. L\'aspect de pens\u00e9e rapide \u00e9quilibre votre patience naturelle, tandis que la signification belle refl\u00e8te la beaut\u00e9 int\u00e9rieure qui vient de la sagesse cultiv\u00e9e et du caract\u00e8re authentique.',
    de: 'Ihre Holz-Element-Natur harmoniert perfekt mit diesem Namen und schafft tiefe Wurzeln des Lernens und Wachstums. Der schnelldenkende Aspekt balanciert Ihre nat\u00fcrliche Geduld aus, w\u00e4hrend die sch\u00f6ne Bedeutung die innere Sch\u00f6nheit widerspiegelt, die aus kultivierter Weisheit und echtem Charakter kommt.',
    es: 'Su naturaleza del elemento Madera armoniza perfectamente con este nombre, creando ra\u00edces profundas de aprendizaje y crecimiento. El aspecto de pensamiento r\u00e1pido equilibra su paciencia natural, mientras que el significado hermoso refleja la belleza interior que proviene de la sabidur\u00eda cultivada y el car\u00e1cter genuino.',
    ru: '\u0412\u0430\u0448\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0414\u0435\u0440\u0435\u0432\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0440\u0443\u0435\u0442 \u0441 \u044d\u0442\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u044f \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0435 \u043a\u043e\u0440\u043d\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438 \u0440\u043e\u0441\u0442\u0430. \u0410\u0441\u043f\u0435\u043a\u0442 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u044f \u0443\u0440\u0430\u0432\u043d\u043e\u0432\u0435\u0448\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0448\u0435 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0442\u0435\u0440\u043f\u0435\u043d\u0438\u0435, \u0430 \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044e\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043e\u0442 \u043a\u0443\u043b\u044c\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043c\u0443\u0434\u0440\u043e\u0441\u0442\u0438 \u0438 \u043f\u043e\u0434\u043b\u0438\u043d\u043d\u043e\u0433\u043e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430.',
    ar: '\u0637\u0628\u064a\u0639\u062a\u0643 \u0627\u0644\u062e\u0634\u0628\u064a\u0629 \u062a\u062a\u0646\u0627\u063a\u0645 \u0628\u0634\u0643\u0644 \u0645\u062b\u0627\u0644\u064a \u0645\u0639 \u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u0645\u060c \u0645\u0645\u0627 \u064a\u062e\u0644\u0642 \u062c\u0630\u0648\u0631\u0627\u064b \u0639\u0645\u064a\u0642\u0629 \u0644\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u0646\u0645\u0648. \u062c\u0627\u0646\u0628 \u0627\u0644\u062a\u0641\u0643\u064a\u0631 \u0627\u0644\u0633\u0631\u064a\u0639 \u064a\u0648\u0627\u0632\u0646 \u0635\u0628\u0631\u0643 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u060c \u0628\u064a\u0646\u0645\u0627 \u064a\u0639\u0643\u0633 \u0627\u0644\u0645\u0639\u0646\u0649 \u0627\u0644\u062c\u0645\u064a\u0644 \u0627\u0644\u062c\u0645\u0627\u0644 \u0627\u0644\u062f\u0627\u062e\u0644\u064a \u0627\u0644\u0630\u064a \u064a\u0623\u062a\u064a \u0645\u0646 \u0627\u0644\u062d\u0643\u0645\u0629 \u0627\u0644\u0645\u0632\u0631\u0648\u0639\u0629 \u0648\u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0627\u0644\u0623\u0635\u064a\u0644\u0629.',
    hi: '\u0906\u092a\u0915\u093e \u0932\u0915\u0921\u093c\u0940 \u0924\u0924\u094d\u0935 \u0915\u093e \u0938\u094d\u0935\u092d\u093e\u0935 \u0907\u0938 \u0928\u093e\u092e \u0915\u0947 \u0938\u093e\u0925 \u092a\u0942\u0930\u094d\u0923 \u0930\u0942\u092a \u0938\u0947 \u0924\u093e\u0932\u092e\u0947\u0932 \u092c\u093f\u0920\u093e\u0924\u093e \u0939\u0948, \u0938\u0940\u0916\u0928\u0947 \u0914\u0930 \u0935\u093f\u0915\u093e\u0938 \u0915\u0940 \u0917\u0939\u0930\u0940 \u091c\u0921\u093c\u0947\u0902 \u092c\u0928\u093e\u0924\u093e \u0939\u0948\u0964 \u0924\u0947\u091c\u093c \u0938\u094b\u091a \u0915\u093e \u092a\u0939\u0932\u0942 \u0906\u092a\u0915\u0947 \u092a\u094d\u0930\u093e\u0915\u0943\u0924\u093f\u0915 \u0927\u0948\u0930\u094d\u092f \u0915\u0947 \u0938\u093e\u0925 \u0938\u0902\u0924\u0941\u0932\u0928 \u092c\u0928\u093e\u0924\u093e \u0939\u0948, \u091c\u092c\u0915\u093f \u0938\u0941\u0902\u0926\u0930 \u0905\u0930\u094d\u0925 \u0909\u0938 \u0906\u0902\u0924\u0930\u093f\u0915 \u0938\u0941\u0902\u0926\u0930\u0924\u093e \u0915\u094b \u0926\u0930\u094d\u0936\u093e\u0924\u093e \u0939\u0948 \u091c\u094b \u0938\u0902\u0938\u094d\u0915\u0943\u0924 \u092c\u0941\u0926\u094d\u0927\u093f\u092e\u0924\u094d\u0924\u093e \u0914\u0930 \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u091a\u0930\u093f\u0924\u094d\u0930 \u0938\u0947 \u0906\u0924\u0940 \u0939\u0948\u0964'
  }
}),
  createName({
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
  },
  story: {
    en: 'Like a mighty oak that provides shelter, this name represents strength rooted in kindness and protection of others.',
    ko: '거대한 참나무가 피난처를 제공하듯, 이 이름은 친절과 타인 보호에 뿌리를 둔 힘을 나타냅니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, providing deep roots of strength and protection. The excellent and strong qualities align with your natural capacity for patient growth, while your protective instincts flourish like branches that shelter others.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 힘과 보호의 깊은 뿌리를 제공합니다. 뛰어나고 강한 자질은 당신의 꾸준한 성장을 위한 타고난 능력과 일치하며, 당신의 보호 본능은 다른 사람들을 보호하는 나뭇가지처럼 번성합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'This name carries the essence of ancient wisdom combined with modern greatness, like a sage who guides with gentle strength.',
    ko: '고대의 지혜와 현대적 위대함의 본질을 담고 있으며, 부드러운 힘으로 인도하는 현자와 같습니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, cultivating wisdom through patience and steady growth. The wise and great meaning resonates with your natural ability to nurture understanding, allowing your inner wisdom to flourish like an ancient tree that provides guidance to all who seek shelter beneath its branches.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루며, 인내와 꾸준한 성장을 통해 지혜를 기릅니다. 현명하고 위대하다는 의미는 이해심을 키우는 당신의 타고난 능력과 공명하며, 당신의 내면의 지혜가 그 가지 아래에서 쉼터를 찾는 모든 사람에게 지침을 제공하는 고대 나무처럼 번성하도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'Like bamboo that bends but never breaks, this name represents resilient talent that adapts and grows.',
    ko: '구부러지지만 결코 부러지지 않는 대나무처럼, 이 이름은 적응하고 성장하는 회복력 있는 재능을 나타냅니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, embodying resilient talent that bends but never breaks. The talented and quick qualities resonate with your natural adaptability, allowing your abilities to flourish like bamboo that grows swiftly while maintaining flexibility in all seasons.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루며, 휘어지지만 결코 부러지지 않는 회복력 있는 재능을 구현합니다. 재능 있고 빠른 자질은 당신의 타고난 적응력과 공명하며, 모든 계절에 유연성을 유지하면서 빠르게 자라는 대나무처럼 당신의 능력이 번성하도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  createName({
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
  },
  story: {
    en: 'Like morning dew that nourishes new growth, this name represents sincere effort that leads to natural success.',
    ko: '새로운 성장을 기르는 아침 이슬처럼, 자연스러운 성공으로 이어지는 성실한 노력을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of quick growth and sincere heart. The quickness of \'Min\' balances the patient nature of Wood, while the sincerity of \'Seong\' provides deep roots of integrity.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 빠른 성장과 성실한 마음을 가진 성품을 만듭니다. \'민\'의 신속함은 나무의 인내심 있는 본성과 균형을 이루고, \'성\'의 성실함은 깊은 성실의 뿌리를 제공합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  createName({
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
  },
  story: {
    en: 'Like a tree that grows straight toward the light, this name represents honest growth and natural integrity.',
    ko: '빛을 향해 곧게 자라는 나무처럼, 정직한 성장과 자연스러운 성실함을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of sincere growth and quick thinking. The sincerity of \'Seong\' provides deep roots of integrity, while the quickness of \'Min\' balances the patient nature of Wood.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 성실한 성장과 빠른 사고를 가진 성품을 만듭니다. \'성\'의 성실함은 깊은 성실의 뿌리를 제공하고, \'민\'의 신속함은 나무의 인내심 있는 본성과 균형을 이룹니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  createName({
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
  },
  story: {
    en: 'Like a young pine that reaches boldly toward the sky, this name embodies quick excellence and natural ambition.',
    ko: '하늘을 향해 대담하게 뻗어나가는 어린 소나무처럼, 빠른 탁월함과 자연스러운 야망을 구현한 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of quick growth and excellent spirit. The quickness of \'Min\' balances the patient nature of Wood, while the excellence of \'Woo\' allows your talents to flourish like a well-nurtured tree.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 빠른 성장과 뛰어난 정신을 가진 성품을 만듭니다. \'민\'의 신속함은 나무의 인내심 있는 본성과 균형을 이루고, \'우\'의 뛰어남은 잘 가꾸어진 나무처럼 당신의 재능이 번성하도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'This name combines artistic talent with moral virtue, like a master craftsman who creates beauty with integrity.',
    ko: '예술적 재능과 도덕적 덕을 결합하여, 성실함으로 아름다움을 창조하는 대장장이와 같은 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of talented growth and virtuous spirit. The talent of \'Jae\' allows you to grow and flourish, while the virtue of \'Hyun\' provides deep roots of integrity and honor.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 재능 있는 성장과 덕망 있는 정신을 가진 성품을 만듭니다. \'재\'의 재능은 당신이 성장하고 번성하도록 하며, \'현\'의 덕망은 깊은 성실과 명예의 뿌리를 제공합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'Like gentle rain that awakens sleeping seeds, this name represents wisdom that nurtures growth in others.',
    ko: '잠자는 씨앗을 깨우는 부드러운 비처럼, 다른 사람의 성장을 기르는 지혜를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of wise growth and gentle spirit. The wisdom of \'Ji\' allows you to grow with purpose, while the gentle rain of \'Woo\' nurtures your talents and allows them to flourish.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 지혜로운 성장과 온화한 정신을 가진 성품을 만듭니다. \'지\'의 지혜는 당신이 목적을 가지고 성장하도록 하며, \'우\'의 부드러운 비는 당신의 재능을 키우고 번성하도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'This name shines like sunlight through forest canopy, representing strength that illuminates and guides others.',
    ko: '숲의 캐노피를 통한 햇빛처럼 빛나며, 다른 사람을 비추고 안내하는 힘을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of strong growth and bright spirit. The strength of \'Geon\' provides a solid foundation for growth, while the brightness of \'Hui\' allows your spirit to shine like the sun on a flourishing tree.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 강한 성장과 밝은 정신을 가진 성품을 만듭니다. \'건\'의 힘은 성장을 위한 견고한 기반을 제공하고, \'희\'의 밝음은 당신의 정신이 번성하는 나무에 비치는 태양처럼 빛나게 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'Like a swift stream that carves its path through rock, this name represents talent that finds its way naturally.',
    ko: '바위를 뚫고 길을 만드는 빠른 개울처럼, 자연스럽게 길을 찾는 재능을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of quick growth and talented spirit. The quickness of \'Min\' balances the patient nature of Wood, while the talent of \'Jae\' allows your abilities to flourish like a strong and healthy tree.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 빠른 성장과 재능 있는 정신을 가진 성품을 만듭니다. \'민\'의 신속함은 나무의 인내심 있는 본성과 균형을 이루고, \'재\'의 재능은 당신의 능력이 튼튼하고 건강한 나무처럼 번성하도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  createName({
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
  },
  story: {
    en: 'Like a bamboo shoot that grows with righteous purpose, this name represents virtue expressed through swift action.',
    ko: '의로운 목적으로 자라는 대나무 새싹처럼, 신속한 행동을 통해 표현되는 덕을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of virtuous growth and quick thinking. The virtue of \'Hyun\' provides deep roots of integrity, while the quickness of \'Min\' balances the patient nature of Wood, allowing you to act swiftly on your principles.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 덕망 있는 성장과 빠른 사고를 가진 성품을 만듭니다. \'현\'의 덕망은 깊은 성실의 뿌리를 제공하고, \'민\'의 신속함은 나무의 인내심 있는 본성과 균형을 이루어 원칙에 따라 신속하게 행동할 수 있도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'This name grows like ancient wisdom rooted in sincere practice, representing knowledge that comes from honest effort.',
    ko: '성실한 수행에 뿌리를 둔 고대 지혜처럼 자라며, 정직한 노력에서 오는 지식을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of wise growth and sincere spirit. The wisdom of \'Ji\' allows you to grow with purpose, while the sincerity of \'Seong\' provides deep roots of integrity and trust.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 지혜로운 성장과 성실한 정신을 가진 성품을 만듭니다. \'지\'의 지혜는 당신이 목적을 가지고 성장하도록 하며, \'성\'의 성실함은 깊은 성실과 신뢰의 뿌리를 제공합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'Like wind through spring leaves, this name represents energetic intelligence that brings life and movement to everything it touches.',
    ko: '봄잎 사이로 부는 바람처럼, 손대는 모든 것에 생명과 움직임을 가져다주는 활기찬 지성을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of quick growth and energetic spirit. The quickness of \'Min\' balances the patient nature of Wood, while the energy of \'Gi\' allows your spirit to grow and expand like a flourishing tree.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 빠른 성장과 활기찬 정신을 가진 성품을 만듭니다. \'민\'의 신속함은 나무의 인내심 있는 본성과 균형을 이루고, \'기\'의 에너지는 당신의 정신이 번성하는 나무처럼 성장하고 확장하도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'This name embodies excellence that grows from natural talent, like a tree that bears beautiful fruit season after season.',
    ko: '자연스러운 재능에서 자라나는 탁월함을 구현하며, 계절마다 아름다운 열매를 맺는 나무와 같은 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of talented growth and excellent spirit. The talent of \'Jae\' allows you to grow and flourish, while the excellence of \'Woo\' ensures your abilities reach their highest potential, like a magnificent, towering tree.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 재능 있는 성장과 뛰어난 정신을 가진 성품을 만듭니다. \'재\'의 재능은 당신이 성장하고 번성하도록 하며, \'우\'의 뛰어남은 당신의 능력이 웅장하고 높이 솟은 나무처럼 최고의 잠재력에 도달하도록 보장합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  // K-pop Wood Male Names
  createName({
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
  story: {
    en: 'Like a strong tree that grows with great virtue, this name represents someone who stands tall with moral strength and natural charisma.',
    ko: '큰 덕을 가지고 자라는 강한 나무처럼, 도덕적 힘과 자연스러운 카리스마로 우뚝 서는 사람을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, embodying the spirit of victorious growth. The name\'s meaning of triumph aligns with your natural ability to overcome challenges and inspire others, leading to success that stands tall and proud.',
    ko: '당신의 나무(木) 오행은 이 이름과 완벽하게 조화를 이루며, 승리하는 성장의 정신을 구현합니다. 이름의 승리라는 의미는 도전을 극복하고 다른 사람들에게 영감을 주는 당신의 타고난 능력과 일치하며, 키 크고 자랑스러운 성공으로 이어집니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  kpopMember: { group: 'BTS', memberName: 'V' }
}),
  createName({
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
  story: {
    en: 'This name embodies talent that flows like a river from the south, bringing wisdom and leadership like ancient scholars.',
    ko: '남쪽에서 흘러오는 강처럼 재능을 구현하며, 고대 학자들처럼 지혜와 리더십을 가져다주는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, as the southern warmth encourages your talented growth. The name\'s meaning aligns with your natural ability to flourish and nurture, creating a supportive environment where everyone can thrive.',
    ko: '당신의 나무(木) 오행은 이 이름과 완벽하게 조화를 이루며, 남쪽의 따뜻함이 당신의 재능 있는 성장을 격려합니다. 이름의 의미는 번성하고 양육하는 당신의 타고난 능력과 일치하여 모든 사람이 번창할 수 있는 지원적인 환경을 조성합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  kpopMember: { group: 'BTS', memberName: 'RM' }
}),
  createName({
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
  story: {
    en: 'Like bamboo that grows from a prosperous foundation, this name represents success built on solid roots and creative expression.',
    ko: '번영하는 기초에서 자라는 대나무처럼, 탄탄한 뿌리와 창조적 표현 위에 세워진 성공을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of prosperous growth from a solid foundation. The prosperity of \'Yoon\' allows your talents to flourish, while the foundation of \'Gi\' provides the stability for long-term success.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 견고한 기반에서 번영하는 성장을 이루는 성품을 만듭니다. \'윤\'의 번영은 당신의 재능이 번성하도록 하며, \'기\'의 기반은 장기적인 성공을 위한 안정성을 제공합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  kpopMember: { group: 'BTS', memberName: 'Suga' }
}),

  // Wood Element - Female Names (20 total)
  createName({
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
  },
  story: {
    en: 'Like a lotus that blooms pure and beautiful from muddy waters, this name represents grace that emerges from challenges.',
    ko: '진흙 속에서 순수하고 아름답게 피는 연꽃처럼, 도전에서 나타나는 우아함을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your destiny weaves auspicious connections that strengthen entire communities. Like the hidden root network that nourishes a forest, you create bonds that support growth and prosperity for all who are touched by your harmonious spirit.',
    ko: '당신의 운명은 전체 공동체를 강화하는 상서로운 인연을 엮습니다. 숲을 키우는 숨겨진 뿌리 네트워크처럼, 당신은 당신의 조화로운 정신에 닿는 모든 사람들의 성장과 번영을 지원하는 유대를 만듭니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  createName({
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
  },
  story: {
    en: 'Like a garden in full bloom, this name represents someone who brings beauty and variety to the world around them.',
    ko: '만개한 정원처럼, 주변 세계에 아름다움과 다양성을 가져다주는 사람을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your destiny blooms with the beauty of a diverse garden where every talent adds to the magnificent whole. Like a master gardener who creates harmony from variety, you bring together different gifts to create spectacular natural abundance.',
    ko: '당신의 운명은 모든 재능이 웅장한 전체에 더해지는 다양한 정원의 아름다움으로 피어납니다. 다양성에서 조화를 창조하는 거장 정원사처럼, 당신은 화려한 자연의 풍요를 창조하기 위해 다양한 재능을 하나로 모읍니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'Like rich earth that nurtures seeds into flowers, this name embodies wisdom that brings abundance through patient nurturing.',
    ko: '씨앗을 꽃으로 기르는 풍부한 흙처럼, 인내심 있는 양육을 통해 풍요로움을 가져다주는 지혜를 구현한 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your wisdom grows from gentle nurturing and patient understanding, blessed with the ability to cultivate growth in others. Like rich earth that knows exactly what each seed needs, you provide the perfect conditions for potential to flourish.',
    ko: '당신의 지혜는 부드러운 양육과 끈기 있는 이해에서 자라며, 다른 사람들의 성장을 촉진하는 능력으로 축복받았습니다. 각 씨앗에 무엇이 필요한지 정확히 아는 풍부한 흙처럼, 당신은 잠재력이 번성할 수 있는 완벽한 조건을 제공합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'This name flows like blessed rain that brings prosperity, representing good fortune that nurtures growth in all areas of life.',
    ko: '번영을 가져다주는 축복받은 비처럼 흐르며, 삶의 모든 영역에서 성장을 기르는 행운을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of auspicious growth and gentle spirit. The auspiciousness of \'Seo\' brings good fortune to your endeavors, while the rain of \'Woo\' nurtures your talents, allowing them to flourish like a forest after a refreshing shower.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 상서로운 성장과 온화한 정신을 가진 성품을 만듭니다. \'서\'의 상서로움은 당신의 노력에 행운을 가져다주고, \'우\'의 비는 상쾌한 소나기 뒤의 숲처럼 당신의 재능을 키우고 번성하게 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  
  
  
  createName({
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
  },
  story: {
    en: 'Like a precious flower that blooms in the most auspicious season, this name represents value that grows naturally over time.',
    ko: '가장 길조로운 계절에 피는 소중한 꽃처럼, 시간이 지나면서 자연스럽게 자라나는 가치를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of auspicious growth and precious spirit. The auspiciousness of \'Seo\' brings good fortune to your endeavors, while the preciousness of \'Jin\' ensures your talents are valued and cherished.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 상서로운 성장과 귀한 정신을 가진 성품을 만듭니다. \'서\'의 상서로움은 당신의 노력에 행운을 가져다주고, \'진\'의 귀함은 당신의 재능이 소중히 여겨지고 귀하게 여겨지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  
  
  createName({
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
  },
  story: {
    en: 'Like a tree that prospers in the most favorable conditions, this name represents fortune that grows with proper nurturing.',
    ko: '가장 유리한 조건에서 번영하는 나무처럼, 적절한 양육과 함께 자라나는 운을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Wood element nature harmonizes perfectly with this name, creating a character of auspicious growth and prosperous spirit. The auspiciousness of \'Seo\' brings good fortune to your endeavors, while the prosperity of \'Yeong\' ensures your talents lead to abundant success.',
    ko: '당신의 나무 오행은 이 이름과 완벽하게 조화를 이루어 상서로운 성장과 번영하는 정신을 가진 성품을 만듭니다. \'서\'의 상서로움은 당신의 노력에 행운을 가져다주고, \'영\'의 번영은 당신의 재능이 풍부한 성공으로 이어지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  
  createName({
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
  },
  story: {
    en: 'This name flows like graceful wisdom through generations, representing knowledge that is passed down with love and care.',
    ko: '세대를 거쳐 흘러내리는 우아한 지혜처럼, 사랑과 보살핌으로 전해지는 지식을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your wisdom flows like a graceful river through generations, blessed with the ability to transmit knowledge with love. Like a wise teacher who nurtures growth, you create lasting legacies of understanding that enrich families and communities.',
    ko: '당신의 지혜는 여러 세대에 걸쳐 흐르는 우아한 강물처럼, 사랑으로 지식을 전달하는 능력으로 축복받았습니다. 성장을 촉진하는 현명한 스승처럼, 당신은 가족과 지역 사회를 풍요롭게 하는 이해의 지속적인 유산을 만듭니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  createName({
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
  },
  story: {
    en: 'Like a forest where each tree contributes its own color, this name represents wisdom that comes from embracing diversity.',
    ko: '각 나무가 고유한 색깔을 기여하는 숲처럼, 다양성을 포용하는 것에서 오는 지혜를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your wisdom shines with the colors of diversity, blessed with the ability to see beauty in all perspectives. Like an autumn forest where every leaf adds to the magnificent whole, you create harmony by celebrating the unique gifts that each person brings.',
    ko: '당신의 지혜는 다양성의 색깔로 빛나며, 모든 관점에서 아름다움을 볼 수 있는 능력으로 축복받았습니다. 모든 잎이 웅장한 전체에 더해지는 가을 숲처럼, 당신은 각 사람이 가져오는 독특한 재능을 축하함으로써 조화를 창조합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  // K-pop Wood Female Names
  

  // Fire Element - Male Names (20 total)
  createName({
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
    },
    story: {
      en: 'This name captures the peak of summer\'s warmth and energy, representing someone who shines brightest when helping others.',
      ko: '여름의 따뜻함과 에너지의 절정을 담고 있으며, 다른 사람을 도울 때 가장 밝게 빛나는 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Fire element nature harmonizes perfectly with this name, igniting summer warmth and passionate talent in perfect union. The talented summer meaning resonates with your natural capacity for illumination and energy, creating brilliant success like the sun at its zenith that nurtures all life with generous radiance.',
      ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 여름의 따뜻함과 열정적인 재능을 완벽하게 결합시킵니다. 재능 있는 여름이라는 의미는 조명과 에너지에 대한 당신의 타고난 능력과 공명하며, 관대 한 광채로 모든 생명을 키우는 천정의 태양처럼 찬란한 성공을 창조합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    story: {
      en: 'This name represents the first rain that breaks a drought, bringing hope and renewal with passionate energy.',
      ko: '가뭄을 깨뜨리는 첫 비를 나타내며, 열정적인 에너지로 희망과 새로운 시작을 가져다주는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Fire element nature harmonizes perfectly with this name, bringing passionate energy to renewal and new beginnings. The beginning rain meaning aligns with your natural ability to ignite hope, creating transformative change like the first storm that breaks drought and awakens dormant seeds to life.',
      ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 갱신과 새로운 시작에 열정적인 에너지를 가져옵니다. 시작의 비라는 의미는 희망을 불태우는 당신의 타고난 능력과 일치하며, 가뭄을 깨고 잠자는 씨앗을 깨우는 첫 폭풍처럼 변혁적인 변화를 창조합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    pronunciationMatch: 81
  }),
  createName({
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
    story: {
      en: 'Like a flame that burns bright and clean, this name embodies ethical leadership and success through integrity.',
      ko: '밝고 깨끗하게 타는 불꽃처럼, 윤리적 리더십과 성실함을 통한 성공을 구현하는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Fire element nature harmonizes perfectly with this name, illuminating moral prosperity through passionate integrity and transformative leadership. The ethical and successful meaning resonates with your natural capacity for purification, creating abundant prosperity like a sacred flame that guides communities toward enlightenment.',
      ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 열정적인 정직함과 변혁적인 리더십을 통해 도덕적 번영을 비춥니다. 윤리적이고 성공적인 의미는 정화에 대한 당신의 타고난 능력과 공명하며, 공동체를 깨달음으로 이끄는 신성한 불꽃처럼 풍부한 번영을 창조합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    pronunciationMatch: 78
  }),
  
  createName({
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
    },
    story: {
      en: 'This name burns like a bright flame that moves swiftly, representing greatness achieved through passionate dedication.',
      ko: '빠르게 움직이는 밝은 불꽃처럼 타며, 열정적인 헌신을 통해 달성된 위대함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your spirit burns with great flame that moves swiftly toward excellence. Like lightning that strikes with perfect timing, you achieve magnificent results through passionate dedication, inspiring others with your brilliant energy and swift accomplishments.',
      ko: '당신의 영혼은 탁월함을 향해 빠르게 움직이는 큰 불꽃으로 타오릅니다. 완벽한 타이밍에 치는 번개처럼, 당신은 열정적인 헌신을 통해 웅장한 결과를 달성하고, 당신의 찬란한 에너지와 빠른 성취로 다른 사람들에게 영감을 줍니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  
  createName({
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
    },
    story: {
      en: 'This name blazes like righteous fire that purifies and protects, representing strength used for noble purposes.',
      ko: '정화하고 보호하는 의로운 불처럼 타오르며, 고귀한 목적을 위해 사용되는 힘을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of righteous passion and excellent spirit. The righteousness of \'Jeong\' fuels your actions with integrity, while the excellence of \'Woo\' ensures your passionate endeavors lead to outstanding success.',
      ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 의로운 열정과 뛰어난 정신을 가진 성품을 만듭니다. \'정\'의 의로움은 당신의 행동에 성실함을 불어넣고, \'우\'의 뛰어남은 당신의 열정적인 노력이 뛰어난 성공으로 이어지도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  
  createName({
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
  },
  story: {
    en: 'This name rises like the sun from the east, representing virtue that brings new light to each day.',
    ko: '동쪽에서 떠오르는 태양처럼 솟아오르며, 매일 새로운 빛을 가져다주는 덕을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your destiny rises with the glory of eastern dawn, blessed with achievements that herald new beginnings. Like the morning sun that awakens the forest to life, your merit brings hope and renewal to all who encounter your radiant accomplishments.',
    ko: '당신의 운명은 새로운 시작을 알리는 업적으로 축복받은 동쪽 새벽의 영광과 함께 떠오릅니다. 숲을 깨우는 아침 햇살처럼, 당신의 공적은 당신의 빛나는 성취를 만나는 모든 사람에게 희망과 새로움을 가져다줍니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  createName({
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
  },
  story: {
    en: 'This name shines like wise fire that illuminates without burning, representing intelligence that warms and enlightens.',
    ko: '타지 않고 밝히는 지혜로운 불처럼 빛나며, 따뜻하게 하고 깨우치는 지성을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of wise passion and bright spirit. The wisdom of \'Ji\' fuels your actions with purpose, while the brightness of \'Hwan\' ensures your passionate endeavors shine with brilliant success.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 지혜로운 열정과 밝은 정신을 가진 성품을 만듭니다. \'지\'의 지혜는 당신의 행동에 목적을 부여하고, \'환\'의 밝음은 당신의 열정적인 노력이 찬란한 성공으로 빛나도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like a great bonfire that draws people together, this name represents talent that creates community and warmth.',
    ko: '사람들을 하나로 모으는 큰 모닥불처럼, 공동체와 따뜻함을 창조하는 재능을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Like a great bonfire that draws people together, this name represents talent that creates community and warmth.',
    ko: '사람들을 하나로 모으는 큰 모닥불처럼, 이 이름은 공동체와 따뜻함을 창조하는 재능을 나타냅니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like a triumphant flame that never dims, this name represents excellent victories that inspire others to achieve.',
    ko: '결코 꺼지지 않는 승리의 불꽃처럼, 다른 사람들이 성취하도록 영감을 주는 훌륭한 승리를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of victorious passion and excellent spirit. The victory of \'Seung\' fuels your actions with a winning spirit, while the excellence of \'Woo\' ensures your passionate endeavors lead to outstanding and inspiring success.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 승리의 열정과 뛰어난 정신을 가진 성품을 만듭니다. \'승\'의 승리는 당신의 행동에 승리의 정신을 불어넣고, \'우\'의 뛰어남은 당신의 열정적인 노력이 뛰어나고 영감을 주는 성공으로 이어지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like the swift sunrise that brings hope each morning, this name represents quick action that brings renewal and energy.',
    ko: '매일 아침 희망을 가져다주는 빠른 일출처럼, 새로움과 활력을 가져다주는 신속한 행동을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of eastern brightness and quick thinking. The eastern aspect of \'Dong\' brings the energy of the rising sun, while the quickness of \'Min\' allows you to seize new opportunities with passion and intelligence.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 동쪽의 밝음과 빠른 사고를 가진 성품을 만듭니다. \'동\'의 동쪽 측면은 떠오르는 태양의 에너지를 가져오고, \'민\'의 신속함은 열정과 지성으로 새로운 기회를 포착할 수 있도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'This name burns like a great flame that achieves excellence, representing passionate pursuit of worthy goals.',
    ko: '탁월함을 달성하는 큰 불꽃처럼 타오르며, 가치있는 목표를 향한 열정적 추구를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of great passion and excellent spirit. The greatness of \'Tae\' fuels your ambitions, while the excellence of \'Woo\' ensures your passionate endeavors lead to outstanding and inspiring success.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 위대한 열정과 뛰어난 정신을 가진 성품을 만듭니다. \'태\'의 위대함은 당신의 야망에 불을 지피고, \'우\'의 뛰어남은 당신의 열정적인 노력이 뛰어나고 영감을 주는 성공으로 이어지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  // K-pop Fire Male Names
  
  createName({
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
  story: {
    en: 'This name burns like righteous fire that protects the country, representing patriotic passion and strength that defends what is precious.',
    ko: '나라를 보호하는 의로운 불처럼 타오르며, 소중한 것을 지키는 애국적 열정과 힘을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your destiny burns with righteous fire that protects all that is precious and sacred. Like a guardian flame that defends the homeland, you are blessed with patriotic passion and moral strength that creates safety and prosperity for your community.',
    ko: '당신의 운명은 소중하고 신성한 모든 것을 보호하는 의로운 불로 타오릅니다. 조국을 지키는 수호 불꽃처럼, 당신은 공동체를 위해 안전과 번영을 창조하는 애국적인 열정과 도덕적 힘으로 축복받았습니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  kpopMember: { group: 'BTS', memberName: 'Jungkook' }
}),
createName({
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
  story: {
    en: 'Like a great stone heated by fire, this name represents solid strength combined with passionate energy and joyful spirit.',
    ko: '불로 달궈진 큰 돌처럼, 열정적 에너지와 기쁜 정신이 결합된 견고한 힘을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your spirit combines the solidity of great stone with the warmth of passionate fire, creating unshakeable strength filled with joyful energy. Like a hearthstone that provides both stability and warmth, you create lasting happiness and security for others.',
    ko: '당신의 영혼은 큰 돌의 견고함과 열정적인 불의 따뜻함을 결합하여 즐거운 에너지로 가득 찬 흔들리지 않는 힘을 창조합니다. 안정과 따뜻함을 모두 제공하는 난로의 돌처럼, 당신은 다른 사람들을 위해 지속적인 행복과 안정을 창조합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  kpopMember: { group: 'BTS', memberName: 'J-Hope' }
}),

  // Fire Element - Female Names (20 total)
  
  createName({
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
  },
  story: {
    en: 'This name embodies the warmth of a sunset that promises a bright tomorrow, bringing abundance and joy.',
    ko: '밝은 내일을 약속하는 석양의 따뜻함을 담고 있으며, 풍요와 기쁨을 가져다주는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your path shines with the golden light of western prosperity, destined to bring abundance through your generous spirit. Like the evening star that guides travelers home, you create wealth not just for yourself but for your entire community.',
    ko: '당신의 길은 관대 한 정신을 통해 풍요를 가져다 줄 운명인 서양 번영의 황금빛으로 빛납니다. 여행자들을 집으로 안내하는 저녁 별처럼, 당신은 자신뿐만 아니라 전체 공동체를 위해 부를 창출합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like a campfire that draws people together, this name represents beauty that comes from inner wisdom and warmth.',
    ko: '사람들을 하나로 모으는 모닥불처럼, 내면의 지혜와 따뜻함에서 오는 아름다움을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your soul burns with the dual flame of beauty and wisdom, destined to bring people together through your radiant understanding. Like a gathering fire that shares both light and warmth, you naturally create communities of learning and love.',
    ko: '당신의 영혼은 아름다움과 지혜의 이중 불꽃으로 타오르며, 당신의 빛나는 이해를 통해 사람들을 하나로 모을 운명입니다. 빛과 따뜻함을 모두 나누는 모닥불처럼, 당신은 자연스럽게 배움과 사랑의 공동체를 만듭니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'This name glows like wise flame that beautifies everything around it, representing intelligence that creates harmony.',
    ko: '주변의 모든 것을 아름답게 하는 지혜로운 불꽃처럼 빛나며, 조화를 창조하는 지성을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your destiny flows with the wisdom of ages and the beauty of eternal flames. You are born to be a bridge between knowledge and grace, helping others discover their own inner wisdom while creating harmony in relationships and communities.',
    ko: '당신의 운명은 시대의 지혜와 영원한 불꽃의 아름다움과 함께 흐릅니다. 당신은 지식과 은혜 사이의 다리가 되어 다른 사람들이 자신의 내면의 지혜를 발견하도록 돕고 관계와 공동체에 조화를 창조하도록 태어났습니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like a delicate flame that burns steadily, this name represents gentle strength that endures through all seasons.',
    ko: '꾸준히 타는 섬세한 불꽃처럼, 모든 계절을 견뎌내는 부드러운 힘을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of gentle passion and resilient beauty. The small lotus meaning resonates with your ability to bloom in any circumstance, your inner fire providing the warmth and light for your delicate strength to unfold.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 부드러운 열정과 탄력 있는 아름다움을 지닌 성품을 만듭니다. 작은 연꽃이라는 의미는 어떤 상황에서도 피어나는 당신의 능력과 공명하며, 당신의 내면의 불은 당신의 섬세한 힘이 펼쳐질 수 있도록 따뜻함과 빛을 제공합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'This name shines like confident fire that celebrates inner beauty, representing self-acceptance that inspires others.',
    ko: '내면의 아름다움을 찬양하는 자신감 있는 불처럼 빛나며, 다른 사람들에게 영감을 주는 자아수용을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of confident beauty and radiant self-expression. The name\'s meaning of \'Beautiful me\' resonates with your inner fire, allowing you to shine with a unique and inspiring passion that celebrates your authentic self.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 자신감 있는 아름다움과 빛나는 자기 표현의 성품을 만듭니다. \'아름다운 나\'라는 이름의 의미는 당신의 내면의 불과 공명하며, 당신의 진정한 자아를 기념하는 독특하고 영감을 주는 열정으로 빛나게 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like a flame that has many beautiful colors, this name represents abundant grace expressed in countless ways.',
    ko: '여러 아름다운 색을 가진 불꽃처럼, 무수한 방법으로 표현되는 풍부한 은혜를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of abundant grace and radiant warmth. The \'many\' of \'Da\' suggests a boundless spirit, while the \'grace\' of \'Eun\' ensures your passionate energy is expressed with kindness and generosity, like a warm fire that shares its light with all.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 풍부한 은혜와 빛나는 따뜻함을 지닌 성품을 만듭니다. \'다\'의 \'많음\'은 무한한 정신을 암시하고, \'은\'의 \'은혜\'는 당신의 열정적인 에너지가 모든 사람과 빛을 나누는 따뜻한 불처럼 친절과 관대함으로 표현되도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'This name burns like virtuous fire under auspicious stars, representing moral character blessed with good fortune.',
    ko: '길조의 별 아래에서 타는 덕스러운 불처럼, 좋은 운으로 축복받은 도덕적 성품을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'This name burns like virtuous fire under auspicious stars, representing moral character blessed with good fortune.',
    ko: '길조의 별 아래에서 타는 덕스러운 불처럼, 좋은 운으로 축복받은 도덕적 성품을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'Like sacred fire that burns with wise virtue, this name represents moral wisdom that lights the way forward.',
    ko: '지혜로운 덕으로 타는 신성한 불처럼, 앞으로의 길을 밝히는 도덕적 지혜를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of wise passion and virtuous spirit. The wisdom of \'Ji\' fuels your actions with purpose, while the virtue of \'Hyun\' ensures your passionate endeavors are guided by strong moral principles, leading to inspiring and righteous success.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 지혜로운 열정과 덕망 있는 정신을 가진 성품을 만듭니다. \'지\'의 지혜는 당신의 행동에 목적을 부여하고, \'현\'의 덕망은 당신의 열정적인 노력이 강력한 도덕적 원칙에 따라 인도되어 영감을 주고 의로운 성공으로 이어지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'This name flows like a beautiful source of creative fire, representing artistic talent that inspires and renews.',
    ko: '창조적인 불의 아름다운 근원처럼 흐르며, 영감을 주고 새롭게 하는 예술적 재능을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of beautiful passion and a radiant spirit. The beauty of \'Ye\' fuels your creative expression, while the \'source\' of \'Won\' ensures your passionate energy flows from a deep and authentic place, inspiring others with your unique light.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 아름다운 열정과 빛나는 정신을 가진 성품을 만듭니다. \'예\'의 아름다움은 당신의 창의적인 표현에 활력을 불어넣고, \'원\'의 \'근원\'은 당신의 열정적인 에너지가 깊고 진정한 곳에서 흘러나와 당신의 독특한 빛으로 다른 사람들에게 영감을 주도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  story: {
    en: 'Like a cheerful flame that brings joy to small moments, this name represents happiness found in life\'s simple pleasures.',
    ko: '작은 순간들에 기쁨을 가져다주는 쾌활한 불꽃처럼, 삶의 단순한 즐거움에서 찾는 행복을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of pure passion and bright joy. The purity of \'So\' ensures your intentions are clear and true, while the joy of \'Hui\' allows your spirit to shine with a radiant and infectious happiness.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 순수한 열정과 밝은 기쁨을 가진 성품을 만듭니다. \'소\'의 순수함은 당신의 의도가 명확하고 진실되도록 보장하며, \'희\'의 기쁨은 당신의 정신이 빛나고 전염성 있는 행복으로 빛나게 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  
  createName({
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
  story: {
    en: 'Like the wise fire that becomes a source of warmth for others, this name represents knowledge that nurtures community.',
    ko: '다른 사람들의 따뜻함의 원천이 되는 지혜로운 불처럼, 공동체를 기르는 지식을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of wise passion and a radiant spirit. The wisdom of \'Ji\' fuels your creative expression, while the \'source\' of \'Won\' ensures your passionate energy flows from a deep and authentic place, inspiring others with your unique light.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 지혜로운 열정과 빛나는 정신을 가진 성품을 만듭니다. \'지\'의 지혜는 당신의 창의적인 표현에 활력을 불어넣고, \'원\'의 \'근원\'은 당신의 열정적인 에너지가 깊고 진정한 곳에서 흘러나와 당신의 독특한 빛으로 다른 사람들에게 영감을 주도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  story: {
    en: 'This name glows like precious fire that reveals inner beauty, representing value that comes from authentic self-expression.',
    ko: '내면의 아름다움을 드러내는 소중한 불처럼 빛나며, 진정한 자기표현에서 오는 가치를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of beautiful passion and precious spirit. The beauty of \'Ye\' fuels your creative expression, while the \'precious\' of \'Jin\' ensures your passionate energy is valued and cherished, like a rare gem that glows with inner fire.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 아름다운 열정과 귀한 정신을 가진 성품을 만듭니다. \'예\'의 아름다움은 당신의 창의적인 표현에 활력을 불어넣고, \'진\'의 \'귀함\'은 당신의 열정적인 에너지가 내면의 불로 빛나는 희귀한 보석처럼 소중히 여겨지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),

  createName({
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
  story: {
    en: 'This name flows like beautiful fire from its source, representing inner beauty that radiates outward naturally.',
    ko: '근원에서 흘러나오는 아름다운 불처럼, 자연스럽게 바깥으로 발산되는 내적 아름다움을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
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
}),
  createName({
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
    },
    story: {
      en: 'Like a cheerful flame that brings joy to small moments, this name represents happiness found in life\'s simple pleasures.',
      ko: '작은 순간들에 기쁨을 가져다주는 쾌활한 불꽃처럼, 삶의 단순한 즐거움에서 찾는 행복을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  
  createName({
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
    },
    story: {
      en: 'Like the wise fire that becomes a source of warmth for others, this name represents knowledge that nurtures community.',
      ko: '다른 사람들의 따뜻함의 원천이 되는 지혜로운 불처럼, 공동체를 기르는 지식을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name glows like precious fire that reveals inner beauty, representing value that comes from authentic self-expression.',
      ko: '내면의 아름다움을 드러내는 소중한 불처럼 빛나며, 진정한 자기표현에서 오는 가치를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
  },
  story: {
    en: 'Like prosperous fire that brings abundance, this name represents success that lights the way for others to follow.',
    ko: '풍요를 가져다주는 번영의 불처럼, 다른 사람들이 따를 길을 밝히는 성공을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Fire element nature harmonizes perfectly with this name, creating a character of great passion and prosperous spirit. The greatness of \'Ha\' fuels your ambitions, while the prosperity of \'Yeong\' ensures your passionate endeavors lead to abundant and radiant success.',
    ko: '당신의 불 오행은 이 이름과 완벽하게 조화를 이루어 위대한 열정과 번영하는 정신을 가진 성품을 만듭니다. \'하\'의 위대함은 당신의 야망에 불을 지피고, \'영\'의 번영은 당신의 열정적인 노력이 풍부하고 빛나는 성공으로 이어지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  // K-pop Fire Female Names
  
  createName({
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
  story: {
    en: 'Like warm fire that creates meaningful connections, this name represents someone who brings people together with natural charm and bright energy.',
    ko: '의미있는 연결을 만드는 따뜻한 불처럼, 자연스러운 매력과 밝은 에너지로 사람들을 하나로 모으는 사람을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your heart burns with the sacred fire of connection, destined to weave together souls that need each other. Like a bright flame that draws people from the cold, you create warmth and belonging wherever you shine.',
    ko: '당신의 마음은 서로를 필요로 하는 영혼들을 함께 엮을 운명인 신성한 연결의 불로 타오릅니다. 추위에서 사람들을 끌어들이는 밝은 불꽃처럼, 당신은 어디에서나 빛나며 따뜻함과 소속감을 창조합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  kpopMember: { group: 'TWICE', memberName: 'Nayeon' }
}),
createName({
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
  story: {
    en: 'This name burns like righteous fire that forms pure connections, representing honest relationships built on moral strength and warm sincerity.',
    ko: '순수한 연결을 만드는 의로운 불처럼 타오르며, 도덕적 힘과 따뜻한 진실성 위에 세워진 정직한 관계를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'This name burns like righteous fire that forms pure connections, representing honest relationships built on moral strength and warm sincerity.',
    ko: '순수한 연결을 만드는 의로운 불처럼 타오르며, 도덕적 힘과 따뜻한 진실성 위에 세워진 정직한 관계를 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  kpopMember: { group: 'TWICE', memberName: 'Jeongyeon' }
}),

  // Earth Element - Male Names (20 total)
createName({
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
  },
  story: {
    en: 'Like a mountain spring that feeds countless streams, this name represents someone who provides for and nurtures others.',
    ko: '수많은 개울을 기르는 산의 샘처럼, 다른 사람들을 돌보고 기르는 사람을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Earth element nature harmonizes perfectly with this name, providing stable foundations for nurturing talent and steady growth. The second talented meaning resonates with your natural capacity for grounding and support, creating abundance like fertile soil that nourishes countless seeds into flourishing life.',
    ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 재능을 키우고 꾸준한 성장을 위한 안정적인 기반을 제공합니다. 두 번째 재능 있다는 의미는 당신의 타고난 기반과 지원 능력과 공명하며, 비옥한 토양이 수많은 씨앗을 번성하는 생명으로 키우는 것처럼 풍요를 창조합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'This name flows like the steady source that feeds a great river, representing reliable strength that supports entire communities.',
    ko: '큰 강을 기르는 꾸준한 원천처럼 흘러, 전체 공동체를 지탱하는 신뢰할 수 있는 힘을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Earth element nature harmonizes perfectly with this name, establishing yourself as the reliable main source of stability and prosperity. The meaning aligns with your natural ability to provide grounding support, creating lasting abundance like bedrock that feeds eternal springs and sustains entire ecosystems.',
    ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 안정과 번영의 신뢰할 수 있는 주된 원천으로 자리매김합니다. 그 의미는 기반을 제공하는 당신의 타고난 능력과 일치하며, 영원한 샘을 먹이고 전체 생태계를 유지하는 기반암처럼 지속적인 풍요를 창조합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'Like fertile soil that receives rain and produces truth in the form of abundant harvest, this name represents honest productivity.',
    ko: '비를 받아 풍성한 수확의 형태로 진실을 생산하는 비옥한 토양처럼, 정직한 생산성을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Like fertile soil that receives rain and produces truth in the form of abundant harvest, this name represents honest productivity.',
    ko: '비를 받아 풍성한 수확의 형태로 진실을 생산하는 비옥한 토양처럼, 정직한 생산성을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like a master craftsman who creates with humble precision, this name represents refined talent grounded in respect.',
    ko: '겸손한 정밀함으로 창조하는 숙련장인처럼, 존경에 뿌리를 둔 세련된 재능을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your destiny combines refined talent with humble precision, blessed to create masterworks through respectful character. Like a wise craftsman who honors tradition while innovating, you achieve excellence that inspires admiration and respect.',
    ko: '당신의 운명은 세련된 재능과 겸손한 정밀함을 결합하여, 존경받는 성품을 통해 걸작을 창조하도록 축복받았습니다. 전통을 존중하면서 혁신하는 현명한 장인처럼, 당신은 존경과 존경을 불러일으키는 탁월함을 달성합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'This name stands like a sacred mountain that embodies virtue, representing moral character that provides guidance and stability.',
    ko: '덕을 구현하는 신성한 산처럼 서있으며, 인도와 안정을 제공하는 도덕적 성품을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your soul stands as a sacred mountain embodying divine virtue, destined to provide moral guidance and unwavering stability. Like an ancient peak that serves as a beacon for travelers, your character creates a foundation of trust and righteousness.',
    ko: '당신의 영혼은 신성한 미덕을 구현하는 신성한 산으로 서 있으며, 도덕적 지침과 확고한 안정을 제공할 운명입니다. 여행자들을 위한 등대 역할을 하는 고대 봉우리처럼, 당신의 성품은 신뢰와 의로움의 기초를 만듭니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'This name builds like prosperous earth that supports talented growth, representing success rooted in solid foundations.',
    ko: '재능있는 성장을 지탱하는 번영하는 대지처럼 건설되며, 견고한 기초에 뿌리를  અ 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of talented growth and prosperous spirit. The talent of \'Jun\' allows you to build a solid foundation for your abilities, while the prosperity of \'Yeong\' ensures your efforts lead to abundant and lasting success.',
    ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 재능 있는 성장과 번영하는 정신을 가진 성품을 만듭니다. \'준\'의 재능은 당신의 능력에 대한 견고한 기반을 구축하도록 하며, \'영\'의 번영은 당신의 노력이 풍부하고 지속적인 성공으로 이어지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like fertile ground that produces excellent harvest, this name represents prosperity achieved through steady, quality effort.',
    ko: '훌륭한 수확을 생산하는 비옥한 땅처럼, 꾸준한 품질 노력을 통해 달성된 번영을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of prosperous growth and excellent spirit. The prosperity of \'Yoon\' allows your talents to flourish, while the excellence of \'Soo\' ensures your efforts lead to outstanding and lasting success, like a mountain that reaches for the sky.',
    ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 번영하는 성장과 뛰어난 정신을 가진 성품을 만듭니다. \'윤\'의 번영은 당신의 재능이 번성하도록 하며, \'수\'의 뛰어남은 당신의 노력이 하늘을 향해 뻗어 있는 산처럼 뛰어나고 지속적인 성공으로 이어지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
  },
  story: {
    en: 'This name connects like earth that supports all growth mutually, representing excellence that lifts everyone up together.',
    ko: '모든 성장을 상호 지원하는 대지처럼 연결되며, 모든 사람을 함께 끌어올리는 탁월함을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of mutual growth and excellent spirit. The mutuality of \'Sang\' fosters cooperation and strong bonds, while the excellence of \'Woo\' ensures that your combined efforts lead to outstanding and shared success.',
    ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 상호 성장과 뛰어난 정신을 가진 성품을 만듭니다. \'상\'의 상호성은 협력과 강한 유대를 촉진하고, \'우\'의 뛰어남은 당신의 공동 노력이 뛰어나고 공유된 성공으로 이어지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like precious earth that contains valuable minerals, this name represents excellence that becomes more valuable over time.',
    ko: '귀중한 광물을 포함한 소중한 대지처럼, 시간이 지날수록 더욱 가치있게 되는 탁월함을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of precious growth and excellent spirit. The preciousness of \'Jin\' ensures your talents are valued and cherished, while the excellence of \'Woo\' allows your abilities to flourish and become a treasure to the world.',
    ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 귀한 성장과 뛰어난 정신을 가진 성품을 만듭니다. \'진\'의 귀함은 당신의 재능이 소중히 여겨지고 귀하게 여겨지도록 하며, \'우\'의 뛰어남은 당신의 능력이 번성하여 세상의 보물이 되도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'This name stands like sacred ground that holds precious treasures, representing character that treasures what is truly valuable.',
    ko: '소중한 보물을 품은 신성한 땅처럼 서있으며, 진정으로 가치있는 것을 소중히 여기는 성품을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of holy growth and precious spirit. The holiness of \'Seong\' provides a sacred foundation for your endeavors, while the preciousness of \'Jin\' ensures your talents are valued and cherished as a divine gift.',
    ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 성스러운 성장과 귀한 정신을 가진 성품을 만듭니다. \'성\'의 성스러움은 당신의 노력에 신성한 기반을 제공하고, \'진\'의 귀함은 당신의 재능이 신성한 선물로 소중히 여겨지고 귀하게 여겨지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'Like auspicious earth that nurtures talented growth, this name represents skill blessed with favorable conditions.',
    ko: '재능있는 성장을 기르는 길조로운 대지처럼, 유리한 조건으로 축복받은 기술을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of talented growth and auspicious spirit. The talent of \'Jun\' allows you to build a solid foundation for your abilities, while the auspiciousness of \'Seo\' ensures your efforts are blessed with good fortune and lead to abundant success.',
    ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 재능 있는 성장과 상서로운 정신을 가진 성품을 만듭니다. \'준\'의 재능은 당신의 능력에 대한 견고한 기반을 구축하도록 하며, \'서\'의 상서로움은 당신의 노력이 행운으로 축복받고 풍부한 성공으로 이어지도록 합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
createName({
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
  },
  story: {
    en: 'This name grows like quick earth that immediately supports new talent, representing responsive nurturing of emerging gifts.',
    ko: '새로운 재능을 즉시 지원하는 빠른 대지처럼 자라며, 새롭게 떠오르는 재능의 반응적 양육을 나타내는 이름입니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  },
  harmony: {
    en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of quick growth and talented spirit. The quickness of \'Min\' allows you to respond swiftly to opportunities, while the talent of \'Jae\' provides a solid foundation for your abilities to flourish.',
    ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 빠른 성장과 재능 있는 정신을 가진 성품을 만듭니다. \'민\'의 신속함은 기회에 신속하게 대응할 수 있도록 하며, \'재\'의 재능은 당신의 능력이 번성할 수 있는 견고한 기반을 제공합니다.',
    ja: '',
    zh: '',
    fr: '',
    de: '',
    es: '',
    ru: '',
    ar: '',
    hi: ''
  }
}),
  createName({
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
    },
    story: {
      en: 'Like great earth that creates lasting prosperity, this name represents achievements that benefit many generations.',
      ko: '지속적인 번영을 창조하는 위대한 대지처럼, 여러 세대에게 도움이 되는 성취를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of prosperous growth and great spirit. The prosperity of \'Yoon\' allows your talents to flourish, while the greatness of \'Ho\' ensures your efforts lead to abundant and lasting success, like a great mountain that stands the test of time.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 번영하는 성장과 위대한 정신을 가진 성품을 만듭니다. \'윤\'의 번영은 당신의 재능이 번성하도록 하며, \'호\'의 위대함은 당신의 노력이 시간의 시험을 견디는 위대한 산처럼 풍부하고 지속적인 성공으로 이어지도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'This name connects like earth that quickly responds to mutual needs, representing swift cooperation and shared success.',
      ko: '상호 필요에 빠르게 반응하는 대지처럼 연결되며, 신속한 협력과 공동 성공을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of mutual growth and quick thinking. The mutuality of \'Sang\' fosters cooperation and strong bonds, while the quickness of \'Min\' allows you to respond swiftly to opportunities, building shared success on a solid foundation.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 상호 성장과 빠른 사고를 가진 성품을 만듭니다. \'상\'의 상호성은 협력과 강한 유대를 촉진하고, \'민\'의 신속함은 기회에 신속하게 대응하여 견고한 기반 위에 공유된 성공을 구축할 수 있도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'This name stands like holy ground that produces excellent fruit, representing character that achieves sacred excellence.',
      ko: '훌륭한 열매를 맺는 거룩한 땅처럼 서있으며, 신성한 탁월함을 달성하는 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of holy growth and excellent spirit. The holiness of \'Seong\' provides a sacred foundation for your endeavors, while the excellence of \'Soo\' ensures your efforts lead to outstanding and lasting success, like a great mountain that stands the test of time.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 성스러운 성장과 뛰어난 정신을 가진 성품을 만듭니다. \'성\'의 성스러움은 당신의 노력에 신성한 기반을 제공하고, \'수\'의 뛰어남은 당신의 노력이 시간의 시험을 견디는 위대한 산처럼 뛰어나고 지속적인 성공으로 이어지도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  // K-pop Earth Male Names
  createName({
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
    story: {
      en: 'Like earth that achieves victory through steady persistence, this name represents success built on solid foundations and determined effort.',
      ko: '꾸준한 끈기를 통해 승리를 달성하는 대지처럼, 견고한 기초와 확고한 노력 위에 세워진 성공을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, representing success built on solid foundations and determined effort. The name\'s meaning of victory and quickness aligns with your natural ability to achieve goals through a combination of steadfastness and agile thinking.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루며, 견고한 기반과 단호한 노력 위에 세워진 성공을 나타냅니다. 승리와 신속함이라는 이름의 의미는 끈기와 민첩한 사고의 조합을 통해 목표를 달성하는 당신의 타고난 능력과 일치합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Seungmin' }
  }),
  createName({
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
    story: {
      en: 'This name stands like precious earth that embodies virtue, representing moral character that becomes more valuable through time and trials.',
      ko: '덕을 구현하는 소중한 대지처럼 서있으며, 시간과 시련을 통해 더욱 가치있게 되는 도덕적 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your soul stands like precious earth that embodies virtue, representing moral character that becomes more valuable through time and trials. Like a wise craftsman who honors tradition while innovating, you achieve excellence that inspires admiration and respect.',
      ko: '당신의 영혼은 미덕을 구현하는 귀한 흙처럼 서 있으며, 시간과 시련을 통해 더욱 가치있게 되는 도덕적 성품을 나타냅니다. 전통을 존중하면서 혁신하는 현명한 장인처럼, 당신은 존경과 존경을 불러일으키는 탁월함을 달성합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Hyunjin' }
  }),
  createName({
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
    story: {
      en: 'Like the great earth that supports all life, this name represents someone with vast potential and the ability to provide stable foundation for others.',
      ko: '모든 생명을 지탱하는 위대한 대지처럼, 광대한 잠재력과 다른 사람들에게 안정적인 기초를 제공하는 능력을 가진 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Like the great earth that supports all life, this name represents someone with vast potential and the ability to provide stable foundation for others.',
      ko: '모든 생명을 지탱하는 위대한 대지처럼, 광대한 잠재력과 다른 사람들에게 안정적인 기초를 제공하는 능력을 가진 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Han' }
  }),

  // Earth Element - Female Names (20 total)
  createName({
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
    },
    story: {
      en: 'Like gentle earth that brings auspicious growth, this name represents grace that creates favorable conditions for others to flourish.',
      ko: '길조로운 성장을 가져다주는 부드러운 대지처럼, 다른 사람들이 번영할 수 있는 유리한 조건을 만드는 은혜를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your soul carries gentle grace that creates auspicious conditions for others to flourish. Like fertile earth that transforms seeds into gardens, you naturally cultivate environments where prosperity and happiness can take root and bloom.',
      ko: '당신의 영혼은 다른 사람들이 번성할 수 있는 상서로운 조건을 만드는 부드러운 은혜를 지니고 있습니다. 씨앗을 정원으로 바꾸는 비옥한 땅처럼, 당신은 자연스럽게 번영과 행복이 뿌리 내리고 피어날 수 있는 환경을 가꾸게 됩니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    story: {
      en: 'This name flows like a gentle stream that carves beautiful valleys, representing quiet strength that shapes the world.',
      ko: '아름다운 계곡을 조각하는 부드러운 시냇물처럼 흐르며, 세상을 형성하는 조용한 힘을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your destiny flows with quiet strength that shapes the world through persistent beauty. Like a gentle stream that carves magnificent valleys, you create lasting change through consistent grace and patient determination.',
      ko: '당신의 운명은 끈기 있는 아름다움을 통해 세상을 형성하는 조용한 힘으로 흐릅니다. 웅장한 계곡을 조각하는 부드러운 시냇물처럼, 당신은 일관된 은혜와 끈기 있는 결단력을 통해 지속적인 변화를 창조합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    pronunciationMatch: 81
  }),
  
  createName({
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
    story: {
      en: 'Like the steady heartbeat of the earth itself, this name represents someone who brings harmony and natural rhythm to life.',
      ko: '대지 자체의 꾸준한 심장박동처럼, 삶에 조화와 자연스러운 리듬을 가져다주는 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Like the steady heartbeat of the earth itself, this name represents someone who brings harmony and natural rhythm to life.',
      ko: '대지 자체의 꾸준한 심장박동처럼, 이 이름은 삶에 조화와 자연스러운 리듬을 가져다주는 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    pronunciationMatch: 75
  }),
  createName({
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
    },
    story: {
      en: 'This name blooms like auspicious earth that produces beautiful flowers, representing beauty blessed with good fortune.',
      ko: '아름다운 꽃을 피우는 길조로운 대지처럼 꽃피며, 좋은 운으로 축복받은 아름다움을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of auspicious growth and beautiful spirit. The auspiciousness of \'Seo\' brings good fortune to your endeavors, while the beauty of \'Ah\' ensures your efforts blossom into something truly magnificent.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 상서로운 성장과 아름다운 정신을 가진 성품을 만듭니다. \'서\'의 상서로움은 당신의 노력에 행운을 가져다주고, \'아\'의 아름다움은 당신의 노력이 진정으로 웅장한 것으로 피어나도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'Like abundant earth that generously supports all growth, this name represents self-confidence that nurtures abundance in others.',
      ko: '모든 성장을 관대하게 지원하는 풍부한 대지처럼, 다른 사람들의 풍요로움을 기르는 자신감을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Like abundant earth that generously supports all growth, this name represents self-confidence that nurtures abundance in others.',
      ko: '모든 성장을 아낌없이 지원하는 풍부한 흙처럼, 이 이름은 다른 사람들에게 풍요를 키우는 자신감을 나타냅니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'This name flourishes like colorful earth that produces prosperous harvests, representing diverse talents that create abundance.',
      ko: '번영하는 수확을 생산하는 다채로운 대지처럼 번성하며, 풍요로움을 창조하는 다양한 재능을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, cultivating a holy and refined character through patient and steady growth. The meaning of sacred refinement resonates with your natural ability to grow in wisdom and grace, creating a presence that is both grounding and inspiring.',
      ko: '당신의 흙(土) 오행은 이 이름과 완벽하게 조화를 이루며, 인내심 있고 꾸준한 성장을 통해 성스럽고 세련된 성품을 길러냅니다. 신성한 세련됨이라는 의미는 지혜와 은혜 안에서 성장하는 당신의 타고난 능력과 공명하며, 안정감을 주면서도 영감을 주는 존재감을 만들어냅니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'Like earth that beautifully connects all living things, this name represents relationships that create harmony and mutual support.',
      ko: '모든 생명체를 아름답게 연결하는 대지처럼, 조화와 상호 지원을 만드는 관계를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of beautiful connections and grounded spirit. The beauty of \'Soo\' allows you to see the best in others, while the \'connection\' of \'Yeon\' ensures you build strong and lasting relationships on a foundation of trust and mutual support.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 아름다운 관계와 안정된 정신을 가진 성품을 만듭니다. \'수\'의 아름다움은 다른 사람의 장점을 볼 수 있게 해주며, \'연\'의 \'연결\'은 신뢰와 상호 지원의 기반 위에 강력하고 지속적인 관계를 구축하도록 보장합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'This name nurtures like kind earth blessed with auspicious seasons, representing generosity that brings good fortune to all.',
      ko: '길조로운 계절로 축복받은 친절한 대지처럼 기르며, 모든 사람에게 행운을 가져다주는 관대함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your soul carries gentle grace that creates auspicious conditions for others to flourish. Like fertile earth that transforms seeds into gardens, you naturally cultivate environments where prosperity and happiness can take root and bloom.',
      ko: '당신의 영혼은 다른 사람들이 번성할 수 있는 상서로운 조건을 만드는 부드러운 은혜를 지니고 있습니다. 씨앗을 정원으로 바꾸는 비옥한 땅처럼, 당신은 자연스럽게 번영과 행복이 뿌리 내리고 피어날 수 있는 환경을 가꾸게 됩니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'Like beautiful earth under auspicious stars, this name represents grace that is blessed with favorable circumstances.',
      ko: '길조로운 별 아래의 아름다운 대지처럼, 유리한 환경으로 축복받은 은혜를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of beautiful growth and auspicious spirit. The beauty of \'Ye\' allows your talents to blossom, while the auspiciousness of \'Seo\' ensures your efforts are blessed with good fortune and lead to magnificent success.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 아름다운 성장과 상서로운 정신을 가진 성품을 만듭니다. \'예\'의 아름다움은 당신의 재능이 피어나도록 하며, \'서\'의 상서로움은 당신의 노력이 행운으로 축복받고 웅장한 성공으로 이어지도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'This name responds like beautiful earth that quickly adapts to changes, representing grace that flows smoothly through life\'s seasons.',
      ko: '변화에 빠르게 적응하는 아름다운 대지처럼 반응하며, 삶의 변화하는 모든 계절을 부드럽게 흘러가는 은혜를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of beautiful growth and quick thinking. The beauty of \'Soo\' allows your talents to blossom, while the quickness of \'Min\' allows you to respond swiftly to opportunities, building shared success on a solid foundation.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 아름다운 성장과 빠른 사고를 가진 성품을 만듭니다. \'수\'의 아름다움은 당신의 재능이 피어나도록 하며, \'민\'의 신속함은 기회에 신속하게 대응하여 견고한 기반 위에 공유된 성공을 구축할 수 있도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'Like wise earth that connects forest to meadow, this name represents intelligence that builds meaningful bridges between people.',
      ko: '숲과 초원을 연결하는 지혜로운 대지처럼, 사람들 사이에 의미있는 다리를 건설하는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of wise connections and grounded spirit. The wisdom of \'Ji\' allows you to build strong and lasting relationships, while the \'connection\' of \'Yeon\' ensures you foster harmony and mutual support on a foundation of trust.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 지혜로운 관계와 안정된 정신을 가진 성품을 만듭니다. \'지\'의 지혜는 당신이 강력하고 지속적인 관계를 구축하도록 하며, \'연\'의 \'연결\'은 신뢰의 기반 위에 조화와 상호 지원을 촉진하도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'This name treasures like abundant earth that holds precious minerals, representing generosity that recognizes true value.',
      ko: '소중한 광물을 품은 풍부한 대지처럼 소중히 여기며, 진정한 가치를 인식하는 관대함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of abundant growth and precious spirit. The abundance of \'Yu\' allows your talents to flourish, while the preciousness of \'Jin\' ensures your efforts are valued and cherished, like a rare gem unearthed from the ground.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 풍부한 성장과 귀한 정신을 가진 성품을 만듭니다. \'유\'의 풍요로움은 당신의 재능이 번성하도록 하며, \'진\'의 귀함은 당신의 노력이 땅에서 파낸 희귀한 보석처럼 소중히 여겨지도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'Like colorful earth that shows grace in every season, this name represents diverse beauty that brings harmony to all situations.',
      ko: '모든 계절에 은혜를 보여주는 다채로운 대지처럼, 모든 상황에 조화를 가져다주는 다양한 아름다움을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of colorful growth and graceful spirit. The \'colorful\' aspect of \'Chae\' allows your talents to blossom in many forms, while the \'grace\' of \'Eun\' ensures your growth is grounded in kindness and generosity.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 다채로운 성장과 우아한 정신을 가진 성품을 만듭니다. \'채\'의 \'다채로움\'은 당신의 재능이 여러 형태로 피어나도록 하며, \'은\'의 \'은혜\'는 당신의 성장이 친절과 관대함에 기반을 두도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'This name stands like beautiful earth that embodies virtue, representing moral beauty that inspires and guides others.',
      ko: '덕을 구현하는 아름다운 대지처럼 서있으며, 다른 사람들에게 영감을 주고 인도하는 도덕적 아름다움을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of beautiful growth and virtuous spirit. The beauty of \'Soo\' allows your talents to blossom, while the virtue of \'Hyun\' ensures your growth is grounded in strong moral principles.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 아름다운 성장과 덕망 있는 정신을 가진 성품을 만듭니다. \'수\'의 아름다움은 당신의 재능이 피어나도록 하며, \'현\'의 덕망은 당신의 성장이 강력한 도덕적 원칙에 기반을 두도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'Like kind earth that holds ancient wisdom, this name represents compassion that comes from deep understanding.',
      ko: '고대의 지혜를 품은 친절한 대지처럼, 깊은 이해에서 오는 연민을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of kind growth and wise spirit. The kindness of \'Eun\' allows you to nurture others, while the wisdom of \'Ji\' ensures your actions are grounded in deep understanding and compassion.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 친절한 성장과 지혜로운 정신을 가진 성품을 만듭니다. \'은\'의 친절함은 다른 사람을 양육할 수 있게 해주며, \'지\'의 지혜는 당신의 행동이 깊은 이해와 동정심에 기반을 두도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  createName({
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
    },
    story: {
      en: 'This name flows like beautiful earth that shows grace in all its forms, representing elegance that comes from inner strength.',
      ko: '모든 형태로 은혜를 보여주는 아름다운 대지처럼 흐르며, 내적 힘에서 오는 우아함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your Earth element nature harmonizes perfectly with this name, creating a character of beautiful growth and graceful spirit. The beauty of \'Ye\' allows your talents to blossom, while the \'grace\' of \'Eun\' ensures your growth is grounded in kindness and generosity.',
      ko: '당신의 흙 오행은 이 이름과 완벽하게 조화를 이루어 아름다운 성장과 우아한 정신을 가진 성품을 만듭니다. \'예\'의 아름다움은 당신의 재능이 피어나도록 하며, \'은\'의 \'은혜\'는 당신의 성장이 친절과 관대함에 기반을 두도록 합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    }
  }),
  // K-pop Earth Female Names
  createName({
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
    story: {
      en: 'Like beautiful earth that nurtures self-acceptance, this name represents inner beauty that grows from solid self-confidence and natural grace.',
      ko: '자아수용을 기르는 아름다운 대지처럼, 견고한 자신감과 자연스러운 은혜에서 자라나는 내적 아름다움을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your inner beauty grows from solid self-confidence and natural grace, blessed to inspire self-acceptance in others. Like fertile earth that recognizes its own worth, you create authentic beauty that radiates confidence and empowers those around you.',
      ko: '당신의 내면의 아름다움은 견고한 자신감과 자연스러운 은혜에서 자라며, 다른 사람들에게 자기 수용을 불어넣도록 축복받았습니다. 자신의 가치를 인식하는 비옥한 땅처럼, 당신은 자신감을 발산하고 주변 사람들에게 힘을 실어주는 진정한 아름다움을 창조합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    kpopMember: { group: 'TWICE', memberName: 'Mina' }
  }),
  
  createName({
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
    story: {
      en: 'Like wise earth that honors family traditions, this name represents intelligence combined with respect for elders and cultural heritage.',
      ko: '가족 전통을 존중하는 지혜로운 대지처럼, 어른에 대한 존경과 문화 유산과 결합된 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
      en: 'Your soul carries the sacred power of renewal, destined to bring hope where despair has taken root. Like the first blessed rain after a long drought, you restore faith and create new beginnings wherever you arrive.',
      ko: '당신의 영혼은 절망이 뿌리 내린 곳에 희망을 가져다 줄 운명인 신성한 갱신의 힘을 지니고 있습니다. 오랜 가뭄 끝에 내리는 첫 단비처럼, 당신은 어디를 가든 믿음을 회복하고 새로운 시작을 창조합니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    kpopMember: { group: 'TWICE', memberName: 'Jihyo' }
  }),

  // Metal Element - Male Names (20 total)
  createName({
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
    story: {
      en: 'Like a perfectly forged blade that reflects light, this name represents talent that cuts through challenges with precision and honor.',
      ko: '빛을 반사하는 완벽하게 단조된 칼날처럼, 정밀함과 명예로 도전을 뚫고 나가는 재능을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    pronunciationMatch: 70
  }),
  createName({
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
    },
    story: {
      en: 'This name embodies the strength of precious metal that becomes more valuable under pressure, bringing lasting success.',
      ko: '압력 하에서 더욱 가치있어지는 귀금속의 힘을 구현하여, 지속적인 성공을 가져다주는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    story: {
      en: 'Like a master swordsmith who combines wisdom with skill, this name represents excellence achieved through disciplined practice.',
      ko: '지혜와 기술을 결합하는 명검장인처럼, 규율 있는 연습을 통해 달성된 탁월함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    pronunciationMatch: 76
  }),
  createName({
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
    },
    story: {
      en: 'Like righteous metal that stands firm for justice, this name represents greatness built on moral principles and honest action.',
      ko: '정의를 위해 굳건히 서는 의로운 금속처럼, 도덕적 원칙과 정직한 행동 위에 세워진 위대함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name strikes like quick iron that shapes itself perfectly, representing adaptability combined with inner strength and determination.',
      ko: '스스로를 완벽하게 형성하는 빠른 철처럼 치며, 내적 힘과 결단력이 결합된 적응력을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like talented metal that can be forged into any masterpiece, this name represents versatile skill guided by strong principles.',
      ko: '어떤 걸작으로도 단조될 수 있는 재능있는 금속처럼, 강한 원칙에 의해 인도되는 다재다능한 기술을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name stands like sacred metal that achieves true greatness, representing character that pursues excellence through righteous means.',
      ko: '진정한 위대함을 달성하는 신성한 금속처럼 서있으며, 의로운 방법을 통해 탁월함을 추구하는 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like precious metal formed into a perfect stone, this name represents value that comes from pressure transformed into strength.',
      ko: '완벽한 돌로 형성된 귀금속처럼, 압력이 힘으로 변환되어 오는 가치를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: "Like iron that responds quickly to the smith's hammer, this name represents strength that adapts swiftly to create something beautiful.",
      ko: '대장장이의 망치에 빠르게 반응하는 철처럼, 아름다운 것을 창조하기 위해 신속히 적응하는 힘을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name conquers like victorious metal that demonstrates talent, representing skill that achieves success through determined practice.',
      ko: '재능을 입증하는 승리의 금속처럼 정복하며, 확고한 연습을 통해 성공을 달성하는 기술을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like righteous metal that acts swiftly for justice, this name represents quick moral action guided by strong principles.',
      ko: '정의를 위해 신속히 행동하는 의로운 금속처럼, 강한 원칙에 의해 인도되는 빠른 도덕적 행동을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name forges like virtuous metal that creates lasting strength, representing character that builds excellence through ethical practice.',
      ko: '지속적인 힘을 창조하는 덕스러운 금속처럼 단조되며, 윤리적 실천을 통해 탁월함을 구축하는 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like victorious metal that wins through strength, this name represents triumph achieved through persistent effort and unwavering determination.',
      ko: '힘을 통해 승리하는 승리의 금속처럼, 지속적인 노력과 흔들리지 않는 결단력을 통해 달성된 승리를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name stands like righteous metal formed into enduring stone, representing moral character that creates lasting positive impact.',
      ko: '지속적인 돌로 형성된 의로운 금속처럼 서있으며, 지속적인 긍정적 영향을 창조하는 도덕적 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like precious metal that achieves true greatness, this name represents value that increases through dedication to worthy purposes.',
      ko: '진정한 위대함을 달성하는 귀금속처럼, 가치있는 목적에 대한 헌신을 통해 증가하는 가치를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  // K-pop Metal Male Names
  createName({
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
    story: {
      en: 'Like bright metal that illuminates every room, this name represents leadership that brings clarity and warmth to any environment.',
      ko: '모든 방을 밝히는 빛나는 금속처럼, 어떤 환경에도 명료함과 따뜻함을 가져다주는 리더십을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Bang Chan' }
  }),
  createName({
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
    story: {
      en: 'Like refined metal forged into a perfect spear, this name represents focused strength and precision in achieving goals.',
      ko: '완벽한 창으로 단조된 세련된 금속처럼, 집중된 힘과 정밀함으로 목표를 달성하는 것을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    kpopMember: { group: 'Stray Kids', memberName: 'Changbin' }
  }),
  createName({
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
    story: {
      en: 'Like excellent metal refined through goodness, this name represents someone who achieves excellence through moral character and kind strength.',
      ko: '선함을 통해 정련된 뛰어난 금속처럼, 도덕적 성품과 친절한 힘을 통해 탁월함을 달성하는 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    kpopMember: { group: 'THE BOYZ', memberName: 'Sunwoo' }
  }),

  // Metal Element - Female Names (20 total)
  createName({
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
    },
    story: {
      en: 'Like silver stars that guide travelers through dark nights, this name represents beauty that provides direction and inspiration.',
      ko: '어둠 속 여행자들을 인도하는 은빛 별들처럼, 방향과 영감을 제공하는 아름다움을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  
  
  createName({
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
    },
    story: {
      en: 'This name glows like small precious metal that creates prosperity, representing modest excellence that builds lasting abundance.',
      ko: '번영을 창조하는 작은 귀금속처럼 빛나며, 지속적인 풍요로움을 구축하는 겸손한 탁월함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
    createName({
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
    },
    story: {
      en: 'This name shines like righteous metal that shows kindness, representing moral strength that creates positive connections.',
      ko: '친절을 베푸는 의로운 금속처럼 빛나며, 긍정적인 관계를 만드는 도덕적 힘을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name shines like wise metal that creates beauty, representing intelligence that manifests as elegant strength and grace.',
      ko: '아름다움을 창조하는 지혜로운 금속처럼 빛나며, 우아한 힘과 품격으로 나타나는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like pure crystal formed by patient pressure, this name represents beauty that comes from clarity achieved through perseverance.',
      ko: '인내심 있는 압력으로 형성된 순수한 수정처럼, 끈기를 통해 달성된 명료함에서 오는 아름다움을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name prospers like precious metal that creates abundance, representing value that multiplies when shared with others.',
      ko: '풍요로움을 창조하는 귀금속처럼 번영하며, 다른 사람들과 나눌 때 배가 되는 가치를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),

  createName({
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
    },
    story: {
      en: 'This name beautifies like righteous metal that creates lasting elegance, representing beauty rooted in strong moral character.',
      ko: '지속적인 우아함을 창조하는 의로운 금속처럼 아름답게 하며, 강한 도덕적 성품에 뿌리를 둔 아름다움을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like a small crystal that refracts pure light, this name represents modest perfection that illuminates everything around it.',
      ko: '순수한 빛을 굴절시키는 작은 수정처럼, 주변의 모든 것을 밝히는 겸손한 완벽함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name treasures like wise metal that recognizes true value, representing intelligence that appreciates what is genuinely precious.',
      ko: '진정한 가치를 인식하는 지혜로운 금속처럼 소중히 여기며, 진실로 소중한 것을 감상하는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like beautiful metal that holds precious meaning, this name represents elegance that comes from valuing inner beauty.',
      ko: '소중한 의미를 품은 아름다운 금속처럼, 내적 아름다움을 가치있게 여기는 것에서 오는 우아함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name prospers like silver that creates lasting abundance, representing success that comes through consistent excellence and integrity.',
      ko: '지속적인 풍요로움을 창조하는 은처럼 번영하며, 일관된 탁월함과 성실성을 통해 오는 성공을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like righteous metal that embodies virtue, this name represents moral character that shines through principled action.',
      ko: '덕을 구현하는 의로운 금속처럼, 원칙에 입각한 행동을 통해 빛나는 도덕적 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name values like small precious metal that holds great worth, representing the understanding that true value comes in many forms.',
      ko: '큰 가치를 지닌 작은 귀금속처럼 가치 있게 여기며, 진정한 가치가 다양한 형태로 온다는 이해를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like wise metal that creates prosperity through intelligence, this name represents success achieved through thoughtful planning and action.',
      ko: '지성을 통해 번영을 창조하는 지혜로운 금속처럼, 신중한 계획과 행동을 통해 달성된 성공을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  // K-pop Metal Female Names
  
  createName({
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
    story: {
      en: 'This name soars like a dragon made of precious metal, representing powerful charisma combined with valuable inner strength.',
      ko: '귀금속으로 만들어진 용처럼 솟구치며, 가치있는 내적 힘과 결합된 강력한 카리스마를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    kpopMember: { group: 'ITZY', memberName: 'Ryujin' }
  }),
  

  // Water Element - Male Names (20 total)
  createName({
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
    },
    story: {
      en: 'Like a deep ocean that holds countless treasures, this name represents kindness that flows with excellent character and generosity.',
      ko: '수많은 보물을 품은 깊은 바다처럼, 훌륭한 성품과 관대함으로 흘러나오는 친절함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name flows like a mighty river that demonstrates both talent and greatness, representing ability that serves others with wisdom.',
      ko: '재능과 위대함을 모두 보여주는 거대한 강처럼 흘러, 지혜로 다른 사람들을 섬기는 능력을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like a swift river that carves canyons, this name represents intelligence that moves quickly and achieves greatness through adaptability.',
      ko: '계곡을 조각하는 빠른 강처럼, 신속하게 움직이며 적응력을 통해 위대함을 달성하는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  
  
  createName({
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
    },
    story: {
      en: 'Like quick water that finds the most excellent path, this name represents intelligence that swiftly identifies the best solutions.',
      ko: '가장 훌륭한 길을 찾는 빠른 물처럼, 최선의 해결책을 신속하게 찾아내는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name demonstrates like talented water that flows with excellence, representing ability that naturally creates beautiful outcomes.',
      ko: '탁월함과 함께 흘러가는 재능있는 물처럼 증명하며, 자연스럽게 아름다운 결과를 만드는 능력을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like righteous water that purifies while achieving excellence, this name represents integrity that creates truly outstanding character.',
      ko: '탁월함을 달성하면서 정화하는 의로운 물처럼, 진정으로 뛰어난 성품을 만드는 성실함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name expands like virtuous water that achieves greatness, representing moral character that naturally grows into significant influence.',
      ko: '위대함을 달성하는 덕스러운 물처럼 확장되며, 자연스럽게 중요한 영향력으로 성장하는 도덕적 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like victorious water that wins through excellence, this name represents success achieved through superior character and persistent effort.',
      ko: '탁월함을 통해 승리하는 승리의 물처럼, 뛰어난 성품과 끈질긴 노력을 통해 달성된 성공을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name treasures like precious water that displays excellence, representing value that comes from consistently demonstrating quality.',
      ko: '탁월함을 보여주는 소중한 물처럼 귀중히 여기며, 지속적으로 품질을 증명하는 것에서 오는 가치를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like eastern water that brings excellence with the dawn, this name represents quality that arrives with new opportunities and hope.',
      ko: '새벽과 함께 탁월함을 가져다주는 동방의 물처럼, 새로운 기회와 희망과 함께 도착하는 품질을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name innovates like quick water that finds new paths, representing intelligence that creates original solutions to complex challenges.',
      ko: '새로운 길을 찾는 빠른 물처럼 혁신하며, 복잡한 도전에 대한 독창적인 해결책을 만드는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like talented water that carves innovative channels, this name represents ability that creates new possibilities and breakthrough solutions.',
      ko: '혁신적인 수로를 조각하는 재능있는 물처럼, 새로운 가능성과 획기적인 해결책을 만드는 능력을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name develops like virtuous water that nurtures talent, representing moral character that helps others discover their abilities.',
      ko: '재능을 기르는 덕스러운 물처럼 발전하며, 다른 사람들이 자신의 능력을 발견하도록 돕는 도덕적 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like victorious water that achieves greatness, this name represents triumph that comes through flowing around obstacles with persistent determination.',
      ko: '위대함을 달성하는 승리의 물처럼, 끈질긴 결단력으로 장애물을 돌아서 흘러가는 것을 통해 오는 승리를 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  // K-pop Water Male Names
  createName({
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
    story: {
      en: 'Like precious water that holds immense value, this name represents someone with rare qualities and the ability to bring beauty and worth to everything they touch.',
      ko: '엄청난 가치를 지닌 소중한 물처럼, 희귀한 자질과 닿는 모든 것에 아름다움과 가치를 가져다주는 능력을 가진 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    kpopMember: { group: 'BTS', memberName: 'Jin' }
  }),
  createName({
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
    story: {
      en: 'Like innovative water that quickly finds new paths, this name represents creative intelligence that breaks new ground with fluid adaptation.',
      ko: '새로운 길을 빠르게 찾는 혁신적인 물처럼, 유연한 적응으로 새로운 지평을 여는 창조적 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    kpopMember: { group: 'BTOB', memberName: 'Minhyuk' }
  }),
  createName({
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
    story: {
      en: 'Like excellent water that flows from its source, this name represents someone who maintains excellence while being a source of inspiration and renewal for others.',
      ko: '근원에서 흘러나오는 훌륭한 물처럼, 다른 사람들에게 영감과 새로움의 근원이 되면서 탁월함을 유지하는 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    kpopMember: { group: 'SEVENTEEN', memberName: 'Wonwoo' }
  }),

  // Water Element - Female Names (20 total)
  createName({
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
    },
    story: {
      en: 'Like a spring that never runs dry, this name represents kindness that brings abundance and prosperity to all who encounter it.',
      ko: '결코 마르지 않는 샘처럼, 만나는 모든 사람에게 풍요와 번영을 가져다주는 친절함을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
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
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
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
    },
    harmony: {
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
  }),
  
  createName({
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
    },
    story: {
      en: 'This name flows like virtuous water under auspicious stars, representing moral character blessed with favorable circumstances.',
      ko: '길조의 별 아래에서 흘러가는 덕스러운 물처럼, 유리한 환경으로 축복받은 도덕적 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  
  createName({
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
    },
    story: {
      en: 'This name purifies like quick water that immediately cleanses, representing intelligence that swiftly recognizes and embraces what is true.',
      ko: '즉시 정화하는 빠른 물처럼 정화하며, 진실한 것을 신속히 인식하고 받아들이는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  
  
  
  createName({
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
    },
    story: {
      en: 'This name purifies like virtuous water that cleanses naturally, representing moral character that brings clarity to complex situations.',
      ko: '자연스럽게 정화하는 덕스러운 물처럼 정화하며, 복잡한 상황에 명료함을 가져다주는 도덕적 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  
  
  createName({
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
    },
    story: {
      en: 'Like wise water that flows with natural beauty, this name represents intelligence that creates elegance in everything it touches.',
      ko: '자연스러운 아름다움으로 흘러가는 지혜로운 물처럼, 닿는 모든 것에 우아함을 만드는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like virtuous water that polishes jewels to perfection, this name represents moral character that brings out the best in everything.',
      ko: '보석을 완벽하게 닦아내는 덕스러운 물처럼, 모든 것에서 최선을 끌어내는 도덕적 성품을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'This name sparkles like quick water that reveals hidden jewels, representing intelligence that swiftly discovers the treasure in every situation.',
      ko: '숨겨진 보석을 드러내는 빠른 물처럼 반짝이며, 모든 상황에서 보물을 신속하게 발견하는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  createName({
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
    },
    story: {
      en: 'Like wise water that creates prosperity wherever it flows, this name represents knowledge that naturally generates abundance for all.',
      ko: '흘러가는 곳마다 번영을 만드는 지혜로운 물처럼, 자연스럽게 모든 사람을 위한 풍요를 생성하는 지식을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
  }),
  // K-pop Water Female Names
  createName({
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
    story: {
      en: 'Like beautiful ocean water that holds infinite depths, this name represents someone with vast inner beauty and the wisdom of endless horizons.',
      ko: '무한한 깊이를 품은 아름다운 바닷물처럼, 광대한 내적 아름다움과 끝없는 지평선의 지혜를 가진 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    kpopMember: { group: 'NewJeans', memberName: 'Haerin' }
  }),
  createName({
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
    story: {
      en: 'This name flows like quick water that carries wisdom, representing intelligence that moves gracefully and brings insight to every situation.',
      ko: '지혜를 싣고 흘러가는 빠른 물처럼, 우아하게 움직이며 모든 상황에 통찰을 가져다주는 지성을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
    },
    kpopMember: { group: 'NewJeans', memberName: 'Minji' }
  }),
  createName({
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
    story: {
      en: 'Like water that flows from a prosperous source, this name represents someone who becomes a source of abundance and success for others through natural grace.',
      ko: '번영하는 근원에서 흘러나오는 물처럼, 자연스러운 은혜를 통해 다른 사람들에게 풍요와 성공의 근원이 되는 사람을 나타내는 이름입니다.',
      ja: '',
      zh: '',
      fr: '',
      de: '',
      es: '',
      ru: '',
      ar: '',
      hi: ''
    },
    harmony: {
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
