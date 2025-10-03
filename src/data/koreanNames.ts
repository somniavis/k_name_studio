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
    fr: 'Vif d\'esprit et séduisant',
    it: 'Pronto nell\'apprendere e di bell\'aspetto',
    de: 'Lernfähig und gutaussehend',
    pt: 'Rápido para aprender e bonito',
    es: 'Rápido para aprender y guapo',
    ja: '賢くてハンサム',
    th: 'เรียนรู้เร็วและหล่อเหลา',
    id: 'Cepat belajar dan tampan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'handsome, talented',
          ko: '준수한, 재능있는',
          fr: 'beau, talentueux',
          it: 'bello, talentuoso',
          de: 'gutaussehend, talentiert',
          pt: 'bonito, talentoso',
          es: 'guapo, talentoso',
          ja: 'ハンサム、才能ある',
          th: 'หล่อเหลา, มีพรสวรรค์',
          id: 'tampan, berbakat'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that brings swift learning and handsome appearance',
      ko: '빠른 학습과 준수한 모습을 가져다주는 이름',
      fr: 'Un nom qui apporte un apprentissage rapide et une belle apparence',
      it: 'Un nome che porta con sé un rapido apprendimento e un bell\'aspetto',
      de: 'Ein Name, der schnelles Lernen und attraktives Aussehen bringt',
      pt: 'Um nome que traz aprendizado rápido e uma bela aparência',
      es: 'Un nombre que trae aprendizaje rápido y apariencia atractiva',
      ja: '素早い学習とハンサムな容姿をもたらす名前',
      th: 'ชื่อที่นำมาซึ่งการเรียนรู้ที่รวดเร็วและรูปลักษณ์ที่หล่อเหลา',
      id: 'Sebuah nama yang membawa pembelajaran yang cepat dan penampilan yang tampan'
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
    en: 'Strong and friendly',
    ko: '굳세고 다정한',
    fr: 'Fort et amical',
    it: 'Forte e amichevole',
    de: 'Stark und freundlich',
    pt: 'Forte e amigável',
    es: 'Fuerte y amistoso',
    ja: '強くて優しい',
    th: 'แข็งแรงและเป็นมิตร',
    id: 'Kuat dan ramah'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '건',
        hanja: '健',
        meaning: {
          en: 'healthy, strong, robust',
          ko: '건강한, 강한, 튼튼한',
          fr: 'sain, fort, robuste',
          it: 'sano, forte, robusto',
          de: 'gesund, stark, robust',
          pt: 'saudável, forte, robusto',
          es: 'saludable, fuerte, robusto',
          ja: '健康、強い、丈夫',
          th: 'สุขภาพดี, แข็งแรง, กำยำ',
          id: 'sehat, kuat, tegap'
        }
      },
      {
        korean: '우',
        hanja: '友',
        meaning: {
          en: 'friend, friendship',
          ko: '친구, 우정',
          fr: 'ami, amitié',
          it: 'amico, amicizia',
          de: 'Freund, Freundschaft',
          pt: 'amigo, amizade',
          es: 'amigo, amistad',
          ja: '友達、友情',
          th: 'เพื่อน, มิตรภาพ',
          id: 'teman, persahabatan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies being a strong and reliable friend',
      ko: '강하고 믿음직한 친구가 됨을 의미하는 이름',
      fr: 'Un nom qui signifie être un ami fort et fiable',
      it: 'Un nome che significa essere un amico forte e affidabile',
      de: 'Ein Name, der bedeutet, ein starker und zuverlässiger Freund zu sein',
      pt: 'Um nome que significa ser um amigo forte e confiável',
      es: 'Un nombre que significa ser un amigo fuerte y confiable',
      ja: '強くて頼もしい友人であることを意味する名前',
      th: 'ชื่อที่หมายถึงการเป็นเพื่อนที่แข็งแกร่งและน่าเชื่อถือ',
      id: 'Sebuah nama yang menandakan menjadi teman yang kuat dan dapat diandalkan'
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
    en: 'Wise and heroic',
    ko: '지혜롭고 호걸스러운',
    fr: 'Sage et héroïque',
    it: 'Saggio ed eroico',
    de: 'Weise und heldenhaft',
    pt: 'Sábio e heróico',
    es: 'Sabio y heroico',
    ja: '賢くて英雄的',
    th: 'ฉลาดและกล้าหาญ',
    id: 'Bijaksana dan heroik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '호',
        hanja: '豪',
        meaning: {
          en: 'heroic, great, grand',
          ko: '영웅적인, 위대한, 호탕한',
          fr: 'héroïque, grand, magnifique',
          it: 'eroico, grande, magnifico',
          de: 'heroisch, großartig, grandios',
          pt: 'heróico, grande, grandioso',
          es: 'heroico, grande, grandioso',
          ja: '英雄的、偉大な、壮大な',
          th: 'กล้าหาญ, ยิ่งใหญ่, โอ่อ่า',
          id: 'heroik, hebat, megah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies great wisdom and a heroic spirit',
      ko: '위대한 지혜와 영웅적인 기상을 의미하는 이름',
      fr: 'Un nom qui signifie une grande sagesse et un esprit héroïque',
      it: 'Un nome che significa grande saggezza e uno spirito eroico',
      de: 'Ein Name, der große Weisheit und einen heldenhaften Geist bedeutet',
      pt: 'Um nome que significa grande sabedoria e um espírito heróico',
      es: 'Un nombre que significa gran sabiduría y un espíritu heroico',
      ja: '偉大な知恵と英雄的な精神を意味する名前',
      th: 'ชื่อที่แสดงถึงสติปัญญาอันยิ่งใหญ่และจิตวิญญาณแห่งวีรบุรุษ',
      id: 'Sebuah nama yang menandakan kebijaksanaan besar dan semangat kepahlawanan'
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
    en: 'Talented and clever',
    ko: '재능있고 영리한',
    fr: 'Talentueux et intelligent',
    it: 'Talentuoso e intelligente',
    de: 'Talentiert und klug',
    pt: 'Talentoso e inteligente',
    es: 'Talentoso e inteligente',
    ja: '才能があり賢い',
    th: 'มีพรสวรรค์และฉลาดหลักแหลม',
    id: 'Berbakat dan pintar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '재',
        hanja: '才',
        meaning: {
          en: 'talent, ability',
          ko: '재주, 재능',
          fr: 'talent, capacité',
          it: 'talento, abilità',
          de: 'Talent, Fähigkeit',
          pt: 'talento, habilidade',
          es: 'talento, habilidad',
          ja: '才能、能力',
          th: 'พรสวรรค์, ความสามารถ',
          id: 'bakat, kemampuan'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies possessing a quick and agile talent',
      ko: '민첩하고 빠른 재능을 지녔음을 의미하는 이름',
      fr: 'Un nom qui signifie posséder un talent rapide et agile',
      it: 'Un nome che significa possedere un talento rapido e agile',
      de: 'Ein Name, der bedeutet, ein schnelles und agiles Talent zu besitzen',
      pt: 'Um nome que significa possuir um talento rápido e ágil',
      es: 'Un nombre que significa poseer un talento rápido y ágil',
      ja: '素早く機敏な才能を持っていることを意味する名前',
      th: 'ชื่อที่แสดงถึงการมีพรสวรรค์ที่รวดเร็วและว่องไว',
      id: 'Sebuah nama yang menandakan memiliki bakat yang cepat dan tangkas'
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
    en: 'Clever and sincere',
    ko: '영리하고 성실한',
    fr: 'Intelligent et sincère',
    it: 'Intelligente e sincero',
    de: 'Klug und aufrichtig',
    pt: 'Inteligente e sincero',
    es: 'Inteligente y sincero',
    ja: '賢くて誠実',
    th: 'ฉลาดและจริงใจ',
    id: 'Cerdas dan tulus'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '성',
        hanja: '誠',
        meaning: {
          en: 'sincere, honest',
          ko: '성실한, 정직한',
          fr: 'sincère, honnête',
          it: 'sincero, onesto',
          de: 'aufrichtig, ehrlich',
          pt: 'sincero, honesto',
          es: 'sincero, honesto',
          ja: '誠実な、正直な',
          th: 'จริงใจ, ซื่อสัตย์',
          id: 'tulus, jujur'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person who is both clever in thought and sincere in heart',
      ko: '생각이 영리하고 마음이 성실한 사람을 의미하는 이름',
      fr: 'Un nom qui désigne une personne à la fois intelligente d\'esprit et sincère de cœur',
      it: 'Un nome che significa una persona che è sia intelligente nel pensiero che sincera nel cuore',
      de: 'Ein Name, der eine Person bezeichnet, die sowohl klug im Denken als auch aufrichtig im Herzen ist',
      pt: 'Um nome que significa uma pessoa que é tanto inteligente no pensamento quanto sincera no coração',
      es: 'Un nombre que significa una persona que es tanto inteligente en el pensamiento como sincera en el corazón',
      ja: '考えが賢く、心が誠実な人を意味する名前',
      th: 'ชื่อที่หมายถึงบุคคลที่ทั้งฉลาดในความคิดและจริงใจในจิตใจ',
      id: 'Sebuah nama yang menandakan seseorang yang cerdas dalam berpikir dan tulus dalam hati'
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
    en: 'Sincere and clever',
    ko: '성실하고 영리한',
    fr: 'Sincère et intelligent',
    it: 'Sincero e intelligente',
    de: 'Aufrichtig und klug',
    pt: 'Sincero e inteligente',
    es: 'Sincero e inteligente',
    ja: '誠実で賢い',
    th: 'จริงใจและฉลาดหลักแหลม',
    id: 'Tulus dan pintar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '성',
        hanja: '誠',
        meaning: {
          en: 'sincere, honest',
          ko: '성실한, 정직한',
          fr: 'sincère, honnête',
          it: 'sincero, onesto',
          de: 'aufrichtig, ehrlich',
          pt: 'sincero, honesto',
          es: 'sincero, honesto',
          ja: '誠実な、正直な',
          th: 'จริงใจ, ซื่อสัตย์',
          id: 'tulus, jujur'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person who is sincere in heart and quick-witted',
      ko: '마음이 성실하고 머리가 영민한 사람을 의미하는 이름',
      fr: 'Un nom qui désigne une personne sincère de cœur et à l\'esprit vif',
      it: 'Un nome che significa una persona sincera di cuore e pronta di spirito',
      de: 'Ein Name, der eine Person bezeichnet, die von Herzen aufrichtig und schlagfertig ist',
      pt: 'Um nome que significa uma pessoa que é sincera de coração e de raciocínio rápido',
      es: 'Un nombre que significa una persona que es sincera de corazón y de mente ágil',
      ja: '心が誠実で頭の回転が速い人を意味する名前',
      th: 'ชื่อที่หมายถึงบุคคลผู้มีจิตใจที่จริงใจและมีไหวพริบปฏิภาณ',
      id: 'Sebuah nama yang menandakan seseorang yang tulus hati dan cerdas'
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
    en: 'Clever and excellent',
    ko: '영리하고 뛰어난',
    fr: 'Intelligent et excellent',
    it: 'Intelligente ed eccellente',
    de: 'Klug und ausgezeichnet',
    pt: 'Inteligente e excelente',
    es: 'Inteligente y excelente',
    ja: '賢くて優れた',
    th: 'ฉลาดและยอดเยี่ยม',
    id: 'Cerdas dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies being clever and possessing a gentle excellence',
      ko: '영리하고 부드러운 뛰어남을 지녔음을 의미하는 이름',
      fr: 'Un nom qui signifie être intelligent et posséder une douce excellence',
      it: 'Un nome che significa essere intelligenti e possedere una dolce eccellenza',
      de: 'Ein Name, der bedeutet, klug zu sein und eine sanfte Exzellenz zu besitzen',
      pt: 'Um nome que significa ser inteligente e possuir uma excelência gentil',
      es: 'Un nombre que significa ser inteligente y poseer una excelencia gentil',
      ja: '賢くて優しい優秀さを持っていることを意味する名前',
      th: 'ชื่อที่หมายถึงความฉลาดและมีความเป็นเลิศที่อ่อนโยน',
      id: 'Sebuah nama yang menandakan kecerdasan dan keunggulan yang lembut'
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
    ko: '재능있고 현명한',
    fr: 'Talentueux et vertueux',
    it: 'Talentuoso e virtuoso',
    de: 'Talentiert und tugendhaft',
    pt: 'Talentoso e virtuoso',
    es: 'Talentoso y virtuoso',
    ja: '才能があり賢い',
    th: 'มีความสามารถและมีคุณธรรม',
    id: 'Berbakat dan berbudi luhur'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '재',
        hanja: '材',
        meaning: {
          en: 'talent, material, timber',
          ko: '재능, 재목, 재료',
          fr: 'talent, matériau, bois de charpente',
          it: 'talento, materiale, legname',
          de: 'Talent, Material, Holz',
          pt: 'talento, material, madeira',
          es: 'talento, material, madera',
          ja: '才能、材料、木材',
          th: 'พรสวรรค์, วัสดุ, ไม้',
          id: 'bakat, bahan, kayu'
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person who has the material of a wise and virtuous leader',
      ko: '현명하고 어진 인재가 될 자질을 지녔음을 의미하는 이름',
      fr: 'Un nom qui désigne une personne qui a l\'étoffe d\'un leader sage et vertueux',
      it: 'Un nome che significa una persona che ha la stoffa di un leader saggio e virtuoso',
      de: 'Ein Name, der eine Person bezeichnet, die das Zeug zu einem weisen und tugendhaften Führer hat',
      pt: 'Um nome que significa uma pessoa que tem a matéria de um líder sábio e virtuoso',
      es: 'Un nombre que significa una persona que tiene la madera de un líder sabio y virtuoso',
      ja: '賢明で徳のある指導者になる資質を持っていることを意味する名前',
      th: 'ชื่อที่หมายถึงบุคคลที่มีคุณสมบัติของผู้นำที่ฉลาดและมีคุณธรรม',
      id: 'Sebuah nama yang menandakan seseorang yang memiliki bahan seorang pemimpin yang bijaksana dan berbudi luhur'
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
    en: 'A rain of wisdom',
    ko: '지혜의 비',
    fr: 'Une pluie de sagesse',
    it: 'Una pioggia di saggezza',
    de: 'Ein Regen der Weisheit',
    pt: 'Uma chuva de sabedoria',
    es: 'Una lluvia de sabiduría',
    ja: '知恵の雨',
    th: 'สายฝนแห่งปัญญา',
    id: 'Hujan kebijaksanaan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '우',
        hanja: '雨',
        meaning: {
          en: 'rain',
          ko: '비',
          fr: 'pluie',
          it: 'pioggia',
          de: 'Regen',
          pt: 'chuva',
          es: 'lluvia',
          ja: '雨',
          th: 'ฝน',
          id: 'hujan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies wisdom spreading widely and nourishing all things, like a welcome rain',
      ko: '단비처럼 지혜가 널리 퍼져 만물을 이롭게 함을 의미하는 이름',
      fr: 'Un nom qui signifie que la sagesse se répand largement et nourrit toutes choses, comme une pluie bienvenue',
      it: 'Un nome che significa che la saggezza si diffonde ampiamente e nutre tutte le cose, come una pioggia gradita',
      de: 'Ein Name, der bedeutet, dass sich Weisheit weithin ausbreitet und alle Dinge nährt, wie ein willkommener Regen',
      pt: 'Um nome que significa que a sabedoria se espalha amplamente e nutre todas as coisas, como uma chuva bem-vinda',
      es: 'Un nombre que significa que la sabiduría se extiende ampliamente y nutre todas las cosas, como una lluvia bienvenida',
      ja: '恵みの雨のように知恵が広く広がり、万物を養うことを意味する名前',
      th: 'ชื่อที่หมายถึงปัญญาที่แผ่ไพศาลและหล่อเลี้ยงทุกสรรพสิ่งดั่งสายฝนอันชุ่มฉ่ำ',
      id: 'Sebuah nama yang menandakan kebijaksanaan yang menyebar luas dan menyehatkan segala sesuatu, seperti hujan yang disambut baik'
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
    en: 'Strong and shining',
    ko: '굳세고 빛나는',
    fr: 'Fort et brillant',
    it: 'Forte e splendente',
    de: 'Stark und leuchtend',
    pt: 'Forte e brilhante',
    es: 'Fuerte y resplandeciente',
    ja: '健やかで輝かしい',
    th: 'แข็งแรงและส่องสว่าง',
    id: 'Kuat dan bersinar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '건',
        hanja: '健',
        meaning: {
          en: 'healthy, strong, robust',
          ko: '건강한, 강한, 튼튼한',
          fr: 'sain, fort, robuste',
          it: 'sano, forte, robusto',
          de: 'gesund, stark, robust',
          pt: 'saudável, forte, robusto',
          es: 'saludable, fuerte, robusto',
          ja: '健康、強い、丈夫',
          th: 'สุขภาพดี, แข็งแรง, กำยำ',
          id: 'sehat, kuat, tegap'
        }
      },
      {
        korean: '희',
        hanja: '熙',
        meaning: {
          en: 'bright, splendid, glorious',
          ko: '밝은, 빛나는, 찬란한',
          fr: 'brillant, splendide, glorieux',
          it: 'luminoso, splendido, glorioso',
          de: 'hell, prächtig, glorreich',
          pt: 'brilhante, esplêndido, glorioso',
          es: 'brillante, espléndido, glorioso',
          ja: '明るい、輝かしい、光り輝く',
          th: 'สดใส, งดงาม, รุ่งโรจน์',
          id: 'terang, megah, mulia'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a future that is both strong and brilliantly shining',
      ko: '몸과 마음이 굳세고 미래가 빛나기를 기원하는 이름',
      fr: 'Un nom qui signifie un avenir à la fois fort et brillamment éclatant',
      it: 'Un nome che significa un futuro che è sia forte che brillantemente splendente',
      de: 'Ein Name, der eine Zukunft bedeutet, die sowohl stark als auch strahlend leuchtend ist',
      pt: 'Um nome que significa um futuro que é tanto forte quanto brilhantemente resplandecente',
      es: 'Un nombre que significa un futuro que es a la vez fuerte y brillantemente resplandeciente',
      ja: '心身ともに健やかで、未来が輝かしくあることを願う名前',
      th: 'ชื่อที่หมายถึงอนาคตที่ทั้งแข็งแกร่งและส่องสว่างสดใส',
      id: 'Sebuah nama yang menandakan masa depan yang kuat dan bersinar cemerlang'
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
    en: 'Clever and talented',
    ko: '영리하고 재능있는',
    fr: 'Intelligent et talentueux',
    it: 'Intelligente e di talento',
    de: 'Klug und talentiert',
    pt: 'Inteligente e talentoso',
    es: 'Inteligente y talentoso',
    ja: '賢くて才能がある',
    th: 'ฉลาดและมีพรสวรรค์',
    id: 'Cerdas dan berbakat'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '재',
        hanja: '才',
        meaning: {
          en: 'talent, ability',
          ko: '재주, 재능',
          fr: 'talent, capacité',
          it: 'talento, abilità',
          de: 'Talent, Fähigkeit',
          pt: 'talento, habilidade',
          es: 'talento, habilidad',
          ja: '才能、能力',
          th: 'พรสวรรค์, ความสามารถ',
          id: 'bakat, kemampuan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person who has a quick and clever talent',
      ko: '영민하고 재빠른 재능을 지닌 사람을 의미하는 이름',
      fr: 'Un nom qui désigne une personne qui a un talent rapide et intelligent',
      it: 'Un nome che significa una persona che ha un talento rapido e intelligente',
      de: 'Ein Name, der eine Person bezeichnet, die ein schnelles und kluges Talent hat',
      pt: 'Um nome que significa uma pessoa que tem um talento rápido e inteligente',
      es: 'Un nombre que significa una persona que tiene un talento rápido e inteligente',
      ja: '賢くて素早い才能を持つ人を意味する名前',
      th: 'ชื่อที่หมายถึงบุคคลผู้มีพรสวรรค์ที่ฉลาดและว่องไว',
      id: 'Sebuah nama yang menandakan seseorang yang memiliki bakat yang cepat dan pintar'
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
    en: 'Wise and clever',
    ko: '현명하고 영리한',
    fr: 'Sage et intelligent',
    it: 'Saggio e intelligente',
    de: 'Weise und klug',
    pt: 'Sábio e inteligente',
    es: 'Sabio e inteligente',
    ja: '賢くて賢い',
    th: 'ฉลาดและหลักแหลม',
    id: 'Bijaksana dan pintar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person who is both wise and quick-witted',
      ko: '현명하고 판단이 빠른 사람을 의미하는 이름',
      fr: 'Un nom qui désigne une personne à la fois sage et à l\'esprit vif',
      it: 'Un nome che significa una persona che è sia saggia che pronta di spirito',
      de: 'Ein Name, der eine Person bezeichnet, die sowohl weise als auch schlagfertig ist',
      pt: 'Um nome que significa uma pessoa que é tanto sábia quanto de raciocínio rápido',
      es: 'Un nombre que significa una persona que es sabia y de mente ágil',
      ja: '賢明で頭の回転が速い人を意味する名前',
      th: 'ชื่อที่หมายถึงบุคคลที่ทั้งฉลาดและมีไหวพริบ',
      id: 'Sebuah nama yang menandakan seseorang yang bijaksana dan cerdas'
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
    fr: 'Sage et sincère',
    it: 'Saggio e sincero',
    de: 'Weise und aufrichtig',
    pt: 'Sábio e sincero',
    es: 'Sabio y sincero',
    ja: '賢くて誠実',
    th: 'ฉลาดและจริงใจ',
    id: 'Bijaksana dan tulus'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '성',
        hanja: '誠',
        meaning: {
          en: 'sincere, honest',
          ko: '성실한, 정직한',
          fr: 'sincère, honnête',
          it: 'sincero, onesto',
          de: 'aufrichtig, ehrlich',
          pt: 'sincero, honesto',
          es: 'sincero, honesto',
          ja: '誠実な、正直な',
          th: 'จริงใจ, ซื่อสัตย์',
          id: 'tulus, jujur'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person who has both sincere character and deep wisdom',
      ko: '성실한 품성과 깊은 지혜를 모두 갖춘 사람을 의미하는 이름',
      fr: 'Un nom qui désigne une personne qui a à la fois un caractère sincère et une profonde sagesse',
      it: 'Un nome che significa una persona che ha sia un carattere sincero che una profonda saggezza',
      de: 'Ein Name, der eine Person bezeichnet, die sowohl einen aufrichtigen Charakter als auch tiefe Weisheit besitzt',
      pt: 'Um nome que significa uma pessoa que tem tanto um caráter sincero quanto uma profunda sabedoria',
      es: 'Un nombre que significa una persona que tiene tanto un carácter sincero como una profunda sabiduría',
      ja: '誠実な人柄と深い知恵を兼ね備えた人を意味する名前',
      th: 'ชื่อที่หมายถึงบุคคลที่มีทั้งนิสัยที่จริงใจและสติปัญญาที่ลึกซึ้ง',
      id: 'Sebuah nama yang menandakan seseorang yang memiliki karakter yang tulus dan kebijaksanaan yang mendalam'
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
    en: 'Clever and energetic',
    ko: '영리하고 활기찬',
    fr: 'Intelligent et énergique',
    it: 'Intelligente ed energico',
    de: 'Klug und energisch',
    pt: 'Inteligente e energético',
    es: 'Inteligente y enérgico',
    ja: '賢くてエネルギッシュ',
    th: 'ฉลาดและมีพลัง',
    id: 'Cerdas dan energik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '기',
        hanja: '氣',
        meaning: {
          en: 'energy, spirit, vitality',
          ko: '기운, 정신, 활기',
          fr: 'énergie, esprit, vitalité',
          it: 'energia, spirito, vitalità',
          de: 'Energie, Geist, Vitalität',
          pt: 'energia, espírito, vitalidade',
          es: 'energía, espíritu, vitalidad',
          ja: 'エネルギー、精神、活力',
          th: 'พลังงาน, จิตวิญญาณ, ความมีชีวิตชีวา',
          id: 'energi, semangat, vitalitas'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person overflowing with cleverness and vibrant energy',
      ko: '영리함과 생동감 넘치는 기운을 지닌 사람을 의미하는 이름',
      fr: 'Un nom qui désigne une personne débordante d\'intelligence et d\'énergie vibrante',
      it: 'Un nome che significa una persona traboccante di intelligenza ed energia vibrante',
      de: 'Ein Name, der eine Person bezeichnet, die vor Klugheit und lebendiger Energie strotzt',
      pt: 'Um nome que significa uma pessoa transbordando de inteligência e energia vibrante',
      es: 'Un nombre que significa una persona rebosante de inteligencia y energía vibrante',
      ja: '賢さと活気に満ちたエネルギーを持つ人を意味する名前',
      th: 'ชื่อที่หมายถึงบุคคลที่เปี่ยมล้นไปด้วยความฉลาดและพลังงานที่สดใส',
      id: 'Sebuah nama yang menandakan seseorang yang penuh dengan kecerdasan dan energi yang bersemangat'
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
    fr: 'Talentueux et excellent',
    it: 'Talentuoso ed eccellente',
    de: 'Talentiert und ausgezeichnet',
    pt: 'Talentoso e excelente',
    es: 'Talentoso y excelente',
    ja: '才能があり優れている',
    th: 'มีพรสวรรค์และยอดเยี่ยม',
    id: 'Berbakat dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '재',
        hanja: '才',
        meaning: {
          en: 'talent, ability',
          ko: '재주, 재능',
          fr: 'talent, capacité',
          it: 'talento, abilità',
          de: 'Talent, Fähigkeit',
          pt: 'talento, habilidade',
          es: 'talento, habilidad',
          ja: '才能、能力',
          th: 'พรสวรรค์, ความสามารถ',
          id: 'bakat, kemampuan'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person with outstanding and gentle talent',
      ko: '부드럽고 뛰어난 재능을 지닌 사람을 의미하는 이름',
      fr: 'Un nom qui désigne une personne dotée d\'un talent exceptionnel et doux',
      it: 'Un nome che significa una persona con un talento eccezionale e gentile',
      de: 'Ein Name, der eine Person mit einem herausragenden und sanften Talent bezeichnet',
      pt: 'Um nome que significa uma pessoa com um talento excepcional e gentil',
      es: 'Un nombre que significa una persona con un talento excepcional y gentil',
      ja: '優しくて優れた才能を持つ人を意味する名前',
      th: 'ชื่อที่หมายถึงบุคคลที่มีพรสวรรค์ที่โดดเด่นและอ่อนโยน',
      id: 'Sebuah nama yang menandakan seseorang dengan bakat yang luar biasa dan lembut'
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
    en: 'Greatly prosperous, everything goes smoothly',
    ko: '크게 형통하니, 모든 일이 순조롭다',
    fr: 'Très prospère, tout se passe bien',
    it: 'Molto prospero, tutto procede senza intoppi',
    de: 'Sehr wohlhabend, alles verläuft reibungslos',
    pt: 'Grandemente próspero, tudo corre bem',
    es: 'Gran prosperidad, todo va sobre ruedas',
    ja: '大きく栄え、万事順調である',
    th: 'เจริญรุ่งเรืองอย่างยิ่ง ทุกสิ่งราบรื่น',
    id: 'Sangat makmur, semuanya berjalan lancar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '태',
        hanja: '泰',
        meaning: {
          en: 'great, superior, peaceful',
          ko: '큰, 뛰어난, 평안한',
          fr: 'grand, supérieur, paisible',
          it: 'grande, superiore, pacifico',
          de: 'groß, überlegen, friedlich',
          pt: 'grande, superior, pacífico',
          es: 'grande, superior, pacífico',
          ja: '大きい、優れた、安らかな',
          th: 'ยิ่งใหญ่, เหนือกว่า, สงบสุข',
          id: 'hebat, unggul, damai'
        }
      },
      {
        korean: '형',
        hanja: '亨',
        meaning: {
          en: 'to go smoothly, prosper, be successful',
          ko: '순조롭다, 형통하다, 성공하다',
          fr: 'aller sans encombre, prospérer, réussir',
          it: 'andare liscio, prosperare, avere successo',
          de: 'reibungslos verlaufen, gedeihen, erfolgreich sein',
          pt: 'ir sem problemas, prosperar, ser bem-sucedido',
          es: 'ir sin problemas, prosperar, tener éxito',
          ja: '順調に進む、栄える、成功する',
          th: 'ราบรื่น, เจริญรุ่งเรือง, ประสบความสำเร็จ',
          id: 'berjalan lancar, makmur, berhasil'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a peaceful and greatly successful life where everything proceeds without difficulty',
      ko: '삶이 평안하고 모든 일이 어려움 없이 크게 형통하기를 기원하는 이름',
      fr: 'Un nom qui souhaite une vie paisible et très réussie où tout se déroule sans difficulté',
      it: 'Un nome che augura una vita pacifica e di grande successo in cui tutto procede senza difficoltà',
      de: 'Ein Name, der ein friedliches und sehr erfolgreiches Leben wünscht, in dem alles ohne Schwierigkeiten verläuft',
      pt: 'Um nome que deseja uma vida pacífica e de grande sucesso, onde tudo procede sem dificuldades',
      es: 'Un nombre que desea una vida pacífica y de gran éxito en la que todo proceda sin dificultad',
      ja: '人生が平穏で、すべてのことが困難なく大いに成功することを願う名前',
      th: 'ชื่อที่อวยพรให้มีชีวิตที่สงบสุขและประสบความสำเร็จอย่างยิ่งใหญ่โดยทุกสิ่งดำเนินไปโดยปราศจากอุปสรรค',
      id: 'Sebuah nama yang mengharapkan kehidupan yang damai dan sangat sukses di mana semuanya berjalan tanpa kesulitan'
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
    en: 'A great talent from the South',
    ko: '남쪽의 뛰어난 인재',
    fr: 'Un grand talent du Sud',
    it: 'Un grande talento dal Sud',
    de: 'Ein großes Talent aus dem Süden',
    pt: 'Um grande talento do Sul',
    es: 'Un gran talento del Sur',
    ja: '南方からの優れた才能',
    th: 'ผู้มีความสามารถอันโดดเด่นจากแดนใต้',
    id: 'Bakat hebat dari Selatan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '남',
        hanja: '南',
        meaning: {
          en: 'south',
          ko: '남쪽',
          fr: 'sud',
          it: 'sud',
          de: 'Süden',
          pt: 'sul',
          es: 'sur',
          ja: '南',
          th: 'ทิศใต้',
          id: 'selatan'
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a remarkable and talented person who will be a leader, like the significance of the South',
      ko: '남쪽이 가지는 중요성처럼, 뛰어나고 재능 있는 인물이 되어 리더가 되기를 바라는 이름',
      fr: 'Un nom qui désigne une personne remarquable et talentueuse destinée à devenir un leader, à l\'image de l\'importance du Sud',
      it: 'Un nome che significa una persona notevole e di talento che diventerà un leader, come il significato del Sud',
      de: 'Ein Name, der eine bemerkenswerte und talentierte Person bezeichnet, die eine Führungspersönlichkeit sein wird, ähnlich der Bedeutung des Südens',
      pt: 'Um nome que significa uma pessoa notável e talentosa que será um líder, como o significado do Sul',
      es: 'Un nombre que significa una persona notable y talentosa que será un líder, como la importancia del Sur',
      ja: '南が持つ重要性のように、優れて才能のある人物となり、リーダーになることを願う名前',
      th: 'ชื่อที่หมายถึงบุคคลที่โดดเด่นและมีความสามารถซึ่งจะเป็นผู้นำ ดั่งความสำคัญของทิศใต้',
      id: 'Sebuah nama yang menandakan orang yang luar biasa dan berbakat yang akan menjadi pemimpin, seperti pentingnya Selatan'
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
    en: 'To enrich the foundation',
    ko: '기반을 윤택하게 하다',
    fr: 'Enrichir la fondation',
    it: 'Arricchire le fondamenta',
    de: 'Das Fundament bereichern',
    pt: 'Enriquecer a fundação',
    es: 'Enriquecer la fundación',
    ja: '基盤を豊かにする',
    th: 'ทำให้รากฐานสมบูรณ์ยิ่งขึ้น',
    id: 'Memperkaya fondasi'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to moisten, sleek, enrich, benefit',
          ko: '윤택하게 하다, 매끄럽게 하다, 이롭게 하다',
          fr: 'humecter, lisser, enrichir, bénéficier',
          it: 'inumidire, levigare, arricchire, beneficiare',
          de: 'befeuchten, glätten, bereichern, profitieren',
          pt: 'umedecer, alisar, enriquecer, beneficiar',
          es: 'humedecer, alisar, enriquecer, beneficiar',
          ja: '潤す、滑らかにする、豊かにする',
          th: 'ทำให้ชุ่มชื้น, ทำให้เรียบ, ทำให้ร่ำรวย, เป็นประโยชน์',
          id: 'melembabkan, menghaluskan, memperkaya, memberi manfaat'
        }
      },
      {
        korean: '기',
        hanja: '基',
        meaning: {
          en: 'foundation, base, fundamental',
          ko: '토대, 기초, 근본',
          fr: 'fondation, base, fondamental',
          it: 'fondazione, base, fondamentale',
          de: 'Fundament, Basis, grundlegend',
          pt: 'fundação, base, fundamental',
          es: 'fundación, base, fundamental',
          ja: '基礎、土台、根本',
          th: 'รากฐาน, พื้นฐาน, หลัก',
          id: 'fondasi, dasar, fundamental'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a life with a solid and prosperous foundation, bringing abundance to oneself and others',
      ko: '삶의 기반을 튼튼하고 윤택하게 하여 자신과 주변에 풍요로움을 가져오기를 기원하는 이름',
      fr: 'Un nom qui souhaite une vie avec une fondation solide et prospère, apportant l\'abondance à soi-même et aux autres',
      it: 'Un nome che augura una vita con fondamenta solide e prospere, portando abbondanza a sé stessi e agli altri',
      de: 'Ein Name, der ein Leben mit einem soliden und wohlhabenden Fundament wünscht, das einem selbst und anderen Überfluss bringt',
      pt: 'Um nome que deseja uma vida com uma base sólida e próspera, trazendo abundância para si e para os outros',
      es: 'Un nombre que desea una vida con una base sólida y próspera, que traiga abundancia para uno mismo y para los demás',
      ja: '人生の基盤を堅固で豊かにし、自分と周りに豊かさをもたらすことを願う名前',
      th: 'ชื่อที่อวยพรให้ชีวิตมีรากฐานที่มั่นคงและเจริญรุ่งเรือง นำความอุดมสมบูรณ์มาสู่ตนเองและผู้อื่น',
      id: 'Sebuah nama yang mengharapkan kehidupan dengan fondasi yang kokoh dan makmur, membawa kelimpahan bagi diri sendiri dan orang lain'
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
    en: 'Auspicious lotus flower',
    ko: '상서로운 연꽃',
    fr: 'Fleur de lotus de bon augure',
    it: 'Fior di loto di buon auspicio',
    de: 'Glückverheißende Lotusblume',
    pt: 'Flor de lótus auspiciosa',
    es: 'Flor de loto auspiciosa',
    ja: '縁起の良い蓮の花',
    th: 'ดอกบัวมงคล',
    id: 'Bunga teratai yang membawa pertanda baik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign, propitious',
          ko: '상서로운, 길조의, 행운의 징조',
          fr: 'auspicieux, signe favorable, propice',
          it: 'di buon auspicio, segno fortunato, propizio',
          de: 'glückverheißend, günstiges Zeichen, günstig',
          pt: 'auspicioso, sinal de sorte, propício',
          es: 'auspicioso, señal de fortuna, propicio',
          ja: '縁起の良い、吉兆、幸先の良い',
          th: 'เป็นมงคล, นิมิตหมายอันดี, เป็นลางดี',
          id: 'membawa pertanda baik, tanda keberuntungan, menguntungkan'
        }
      },
      {
        korean: '연',
        hanja: '蓮',
        meaning: {
          en: 'lotus flower, pure',
          ko: '연꽃, 순수한',
          fr: 'fleur de lotus, pure',
          it: 'fiore di loto, puro',
          de: 'Lotusblume, rein',
          pt: 'flor de lótus, pura',
          es: 'flor de loto, pura',
          ja: '蓮の花、純粋な',
          th: 'ดอกบัว, บริสุทธิ์',
          id: 'bunga teratai, murni'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person who will bring good fortune and live a pure, beautiful life like a lotus flower',
      ko: '연꽃처럼 순수하고 아름다운 삶을 살며 좋은 기운을 가져다주기를 기원하는 이름',
      fr: 'Un nom qui signifie qu\'une personne apportera la bonne fortune et vivra une vie pure et belle comme une fleur de lotus',
      it: 'Un nome che significa una persona che porterà fortuna e vivrà una vita pura e bella come un fiore di loto',
      de: 'Ein Name, der bedeutet, dass eine Person Glück bringen und ein reines, schönes Leben wie eine Lotusblume führen wird',
      pt: 'Um nome que significa que uma pessoa trará boa sorte e viverá uma vida pura e bela como uma flor de lótus',
      es: 'Un nombre que significa que una persona traerá buena fortuna y vivirá una vida pura y hermosa como una flor de loto',
      ja: '蓮の花のように純粋で美しい人生を送り、幸運をもたらすことを願う名前',
      th: 'ชื่อที่หมายถึงผู้ที่จะนำความโชคดีมาให้และใช้ชีวิตที่บริสุทธิ์และสวยงามดั่งดอกบัว',
      id: 'Sebuah nama yang menandakan seseorang yang akan membawa keberuntungan dan menjalani kehidupan yang murni dan indah seperti bunga teratai'
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
    en: 'A colorful garden',
    ko: '다채로운 정원',
    fr: 'Un jardin coloré',
    it: 'Un giardino colorato',
    de: 'Ein bunter Garten',
    pt: 'Um jardim colorido',
    es: 'Un jardín colorido',
    ja: '彩り豊かな庭園',
    th: 'สวนที่เต็มไปด้วยสีสัน',
    id: 'Taman yang penuh warna'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '채',
        hanja: '彩',
        meaning: {
          en: 'color, brilliance, beauty',
          ko: '색채, 빛, 아름다움',
          fr: 'couleur, brillance, beauté',
          it: 'colore, brillantezza, bellezza',
          de: 'Farbe, Glanz, Schönheit',
          pt: 'cor, brilho, beleza',
          es: 'color, brillo, belleza',
          ja: '彩り、輝き、美しさ',
          th: 'สีสัน, ความสดใส, ความงาม',
          id: 'warna, kecemerlangan, keindahan'
        }
      },
      {
        korean: '원',
        hanja: '園',
        meaning: {
          en: 'garden, park, orchard',
          ko: '정원, 공원, 과수원',
          fr: 'jardin, parc, verger',
          it: 'giardino, parco, frutteto',
          de: 'Garten, Park, Obstgarten',
          pt: 'jardim, parque, pomar',
          es: 'jardín, parque, huerto',
          ja: '庭園、公園、果樹園',
          th: 'สวน, อุทยาน, สวนผลไม้',
          id: 'taman, kebun, kebun buah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a life as beautiful and diverse as a garden full of colorful flowers',
      ko: '다채로운 꽃들이 만발한 정원처럼 아름답고 풍성한 삶을 살기를 기원하는 이름',
      fr: 'Un nom qui souhaite une vie aussi belle et diverse qu\'un jardin rempli de fleurs colorées',
      it: 'Un nome che augura una vita bella e variegata come un giardino pieno di fiori colorati',
      de: 'Ein Name, der ein so schönes und vielfältiges Leben wie ein Garten voller bunter Blumen wünscht',
      pt: 'Um nome que deseja uma vida tão bela e diversificada quanto um jardim cheio de flores coloridas',
      es: 'Un nombre que desea una vida tan hermosa y diversa como un jardín lleno de flores de colores',
      ja: '色とりどりの花が咲き誇る庭園のように、美しく豊かな人生を送ることを願う名前',
      th: 'ชื่อที่อวยพรให้มีชีวิตที่สวยงามและหลากหลายเหมือนสวนที่เต็มไปด้วยดอกไม้หลากสีสัน',
      id: 'Sebuah nama yang mengharapkan kehidupan yang seindah dan beragam seperti taman yang penuh dengan bunga berwarna-warni'
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
    en: 'Wise and gentle',
    ko: '지혜롭고 부드러운',
    fr: 'Sage et douce',
    it: 'Saggia e gentile',
    de: 'Weise und sanft',
    pt: 'Sábia e gentil',
    es: 'Sabia y gentil',
    ja: '賢くて優しい',
    th: 'ฉลาดและอ่อนโยน',
    id: 'Bijaksana dan lembut'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence, knowledge',
          ko: '지혜, 지능, 지식',
          fr: 'sagesse, intelligence, connaissance',
          it: 'saggezza, intelligenza, conoscenza',
          de: 'Weisheit, Intelligenz, Wissen',
          pt: 'sabedoria, inteligência, conhecimento',
          es: 'sabiduría, inteligencia, conocimiento',
          ja: '知恵、知性、知識',
          th: 'ปัญญา, สติปัญญา, ความรู้',
          id: 'kebijaksanaan, kecerdasan, pengetahuan'
        }
      },
      {
        korean: '유',
        hanja: '柔',
        meaning: {
          en: 'gentle, soft, flexible',
          ko: '부드러운, 온화한, 유연한',
          fr: 'doux, souple, flexible',
          it: 'gentile, morbido, flessibile',
          de: 'sanft, weich, flexibel',
          pt: 'gentil, suave, flexível',
          es: 'suave, tierno, flexible',
          ja: '優しい、柔らかい、しなやかな',
          th: 'อ่อนโยน, นุ่มนวล, ยืดหยุ่น',
          id: 'lembut, halus, fleksibel'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person with gentle wisdom, who is strong inside but soft and flexible on the outside',
      ko: '내면은 강하지만 겉으로는 부드럽고 유연한, 외유내강의 지혜를 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui désigne une personne d\'une douce sagesse, forte à l\'intérieur mais douce et flexible à l\'extérieur',
      it: 'Un nome che significa una persona con una saggezza gentile, che è forte dentro ma morbida e flessibile fuori',
      de: 'Ein Name, der eine Person mit sanfter Weisheit bezeichnet, die innerlich stark, aber äußerlich weich und flexibel ist',
      pt: 'Um nome que significa uma pessoa com sabedoria gentil, que é forte por dentro mas suave e flexível por fora',
      es: 'Un nombre que significa una persona con una sabiduría gentil, que es fuerte por dentro pero suave y flexible por fuera',
      ja: '内面は強いが外面は柔らかく柔軟な、優しい知恵を持つ人になることを願う名前',
      th: 'ชื่อที่หมายถึงบุคคลที่มีปัญญาอันอ่อนโยน ผู้ซึ่งแข็งแกร่งภายในแต่อ่อนนุ่มและยืดหยุ่นภายนอก',
      id: 'Sebuah nama yang menandakan seseorang dengan kebijaksanaan yang lembut, yang kuat di dalam tetapi lembut dan fleksibel di luar'
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
    ko: '상서로운 비',
    fr: 'Pluie de bon augure',
    it: 'Pioggia di buon auspicio',
    de: 'Glückverheißender Regen',
    pt: 'Chuva auspiciosa',
    es: 'Lluvia auspiciosa',
    ja: '縁起の良い雨',
    th: 'ฝนแห่งโชคลาภ',
    id: 'Hujan yang membawa pertanda baik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign, propitious',
          ko: '상서로운, 길조의, 행운의 징조',
          fr: 'auspicieux, signe favorable, propice',
          it: 'di buon auspicio, segno fortunato, propizio',
          de: 'glückverheißend, günstiges Zeichen, günstig',
          pt: 'auspicioso, sinal de sorte, propício',
          es: 'auspicioso, señal de fortuna, propicio',
          ja: '縁起の良い、吉兆、幸先の良い',
          th: 'เป็นมงคล, นิมิตหมายอันดี, เป็นลางดี',
          id: 'membawa pertanda baik, tanda keberuntungan, menguntungkan'
        }
      },
      {
        korean: '우',
        hanja: '雨',
        meaning: {
          en: 'rain',
          ko: '비',
          fr: 'pluie',
          it: 'pioggia',
          de: 'Regen',
          pt: 'chuva',
          es: 'lluvia',
          ja: '雨',
          th: 'ฝน',
          id: 'hujan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a welcome presence who brings blessings and prosperity, like a timely and auspicious rain',
      ko: '때맞춰 내리는 상서로운 비처럼, 주변에 풍요와 행운을 가져다주는 귀한 존재가 되기를 바라는 이름',
      fr: 'Un nom qui désigne une présence bienvenue qui apporte bénédictions et prospérité, comme une pluie opportune et de bon augure',
      it: 'Un nome che significa una presenza gradita che porta benedizioni e prosperità, come una pioggia tempestiva e di buon auspicio',
      de: 'Ein Name, der eine willkommene Gegenwart bedeutet, die Segen und Wohlstand bringt, wie ein rechtzeitiger und glückverheißender Regen',
      pt: 'Um nome que significa uma presença bem-vinda que traz bênçãos e prosperidade, como uma chuva oportuna e auspiciosa',
      es: 'Un nombre que significa una presencia bienvenida que trae bendiciones y prosperidad, como una lluvia oportuna y auspiciosa',
      ja: '時宜を得た縁起の良い雨のように、周りに豊かさと幸運をもたらす貴重な存在になることを願う名前',
      th: 'ชื่อที่หมายถึงการเป็นบุคคลอันเป็นที่ต้อนรับผู้นำพรและความเจริญรุ่งเรืองมาให้ ดั่งสายฝนที่เป็นมงคลและมาถูกเวลา',
      id: 'Sebuah nama yang menandakan kehadiran yang disambut baik yang membawa berkah dan kemakmuran, seperti hujan yang tepat waktu dan membawa pertanda baik'
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
    ko: '상서롭고 귀한',
    fr: 'De bon augure et précieux',
    it: 'Di buon auspicio and prezioso',
    de: 'Glückverheißend und kostbar',
    pt: 'Auspicioso e precioso',
    es: 'Auspicioso y precioso',
    ja: '縁起が良く貴重な',
    th: 'เป็นมงคลและล้ำค่า',
    id: 'Membawa pertanda baik dan berharga'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who is a precious treasure that brings good fortune',
      ko: '행운을 가져다주는 귀한 보물 같은 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui est un trésor précieux apportant la bonne fortune',
      it: 'Un nome per una persona che è un tesoro prezioso che porta fortuna',
      de: 'Ein Name für eine Person, die ein kostbarer Schatz ist, der Glück bringt',
      pt: 'Um nome para uma pessoa que é um tesouro precioso que traz boa sorte',
      es: 'Un nombre para una persona que es un tesoro precioso que trae buena fortuna',
      ja: '幸運をもたらす貴重な宝物のような人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่เป็นสมบัติล้ำค่าที่นำมาซึ่งความโชคดี',
      id: 'Sebuah nama untuk seseorang yang merupakan harta berharga yang membawa keberuntungan'
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
    en: 'Auspicious glory',
    ko: '상서로운 영광',
    fr: 'Gloire de bon augure',
    it: 'Gloria di buon auspicio',
    de: 'Glückverheißender Ruhm',
    pt: 'Glória auspiciosa',
    es: 'Gloria auspiciosa',
    ja: '縁起の良い栄光',
    th: 'เกียรติยศอันเป็นมงคล',
    id: 'Kemuliaan yang membawa pertanda baik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a life filled with honorable and prosperous achievements through good fortune',
      ko: '상서로운 기운을 받아 명예롭고 번영하는 영광을 누리기를 기원하는 이름',
      fr: 'Un nom qui souhaite une vie remplie de réalisations honorables et prospères grâce à la bonne fortune',
      it: 'Un nome che augura una vita piena di successi onorevoli e prosperi attraverso la buona sorte',
      de: 'Ein Name, der ein Leben voller ehrenhafter und erfolgreicher Errungenschaften durch Glück wünscht',
      pt: 'Um nome que deseja uma vida cheia de conquistas honrosas e prósperas através da boa sorte',
      es: 'Un nombre que desea una vida llena de logros honorables y prósperos a través de la buena fortuna',
      ja: '幸運によって名誉ある繁栄した栄光に満ちた人生を送ることを願う名前',
      th: 'ชื่อที่อวยพรให้ชีวิตเต็มไปด้วยความสำเร็จอันทรงเกียรติและเจริญรุ่งเรืองผ่านความโชคดี',
      id: 'Sebuah nama yang mengharapkan kehidupan yang penuh dengan pencapaian yang terhormat dan makmur melalui nasib baik'
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
    fr: 'Grâce sage',
    it: 'Grazia saggia',
    de: 'Weise Gnade',
    pt: 'Graça sábia',
    es: 'Gracia sabia',
    ja: '賢い恵み',
    th: 'พระคุณอันชาญฉลาด',
    id: 'Anugerah yang bijaksana'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor, kindness',
          ko: '은혜, 호의, 친절',
          fr: 'grâce, faveur, gentillesse',
          it: 'grazia, favore, gentilezza',
          de: 'Gnade, Gunst, Freundlichkeit',
          pt: 'graça, favor, bondade',
          es: 'gracia, favor, amabilidad',
          ja: '恩恵、好意、親切',
          th: 'พระคุณ, ความโปรดปราน, ความเมตตา',
          id: 'anugerah, kebaikan, kemurahan hati'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses wisdom and bestows gracious kindness upon others',
      ko: '지혜를 갖추고 다른 사람에게 은혜로운 친절을 베푸는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède la sagesse et accorde une bonté bienveillante aux autres',
      it: 'Un nome per una persona che possiede saggezza e conferisce gentilezza graziosa agli altri',
      de: 'Ein Name für eine Person, die Weisheit besitzt und anderen gnädige Freundlichkeit schenkt',
      pt: 'Um nome para uma pessoa que possui sabedoria e concede bondade graciosa aos outros',
      es: 'Un nombre para una persona que posee sabiduría y otorga una amable benevolencia a los demás',
      ja: '知恵を持ち、他者に優雅な親切を施す人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีปัญญาและมอบความเมตตาอันงดงามแก่ผู้อื่น',
      id: 'Sebuah nama untuk seseorang yang memiliki kebijaksanaan dan melimpahkan kebaikan yang ramah kepada orang lain'
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
    en: 'Brilliant and clear',
    ko: '화려하게 빛나고 맑은',
    fr: 'Brillante et claire',
    it: 'Brillante e chiara',
    de: 'Brillant und klar',
    pt: 'Brilhante e clara',
    es: 'Brillante y clara',
    ja: '彩り豊かで清らかな',
    th: 'สดใสและบริสุทธิ์',
    id: 'Cemerlang dan jernih'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '채',
        hanja: '彩',
        meaning: {
          en: 'color, brilliance, beauty',
          ko: '색채, 빛, 아름다움',
          fr: 'couleur, brillance, beauté',
          it: 'colore, brillantezza, bellezza',
          de: 'Farbe, Glanz, Schönheit',
          pt: 'cor, brilho, beleza',
          es: 'color, brillo, belleza',
          ja: '彩り、輝き、美しさ',
          th: 'สีสัน, ความสดใส, ความงาม',
          id: 'warna, kecemerlangan, keindahan'
        }
      },
      {
        korean: '린',
        hanja: '潾',
        meaning: {
          en: 'clear water, limpid',
          ko: '맑은 물, 투명한',
          fr: 'eau claire, limpide',
          it: 'acqua limpida, trasparente',
          de: 'klares Wasser, durchsichtig',
          pt: 'água clara, límpida',
          es: 'agua clara, límpida',
          ja: '澄んだ水、清らかな',
          th: 'น้ำใส, กระจ่าง',
          id: 'air jernih, bening'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person with a clear soul and a brilliantly diverse charm',
      ko: '맑은 영혼과 다채로운 매력을 지녀 화려하게 빛나는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui désigne une personne à l\'âme claire et au charme brillamment diversifié',
      it: 'Un nome che significa una persona con un\'anima chiara e un fascino brillantemente variegato',
      de: 'Ein Name, der eine Person mit einer klaren Seele und einem brillant vielfältigen Charme bezeichnet',
      pt: 'Um nome que significa uma pessoa com uma alma clara e um charme brilhantemente diversificado',
      es: 'Un nombre que significa una persona con un alma clara y un encanto brillantemente diverso',
      ja: '澄んだ魂と多彩な魅力を持ち、華やかに輝く人になることを願う名前',
      th: 'ชื่อที่หมายถึงบุคคลผู้มีจิตวิญญาณที่บริสุทธิ์และมีเสน่ห์หลากหลายอย่างสดใส',
      id: 'Sebuah nama yang menandakan seseorang dengan jiwa yang jernih dan pesona yang sangat beragam'
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
    en: 'A handsome talent like the summer',
    ko: '여름처럼 준수한 인재',
    fr: 'Un beau talent estival',
    it: 'Un talento bello come l\'estate',
    de: 'Ein stattliches Talent wie der Sommer',
    pt: 'Um belo talento de verão',
    es: 'Un talento apuesto como el verano',
    ja: '夏のように優れた才能',
    th: 'ผู้มีความสามารถอันโดดเด่นดั่งฤดูร้อน',
    id: 'Bakat tampan seperti musim panas'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '하',
        hanja: '夏',
        meaning: {
          en: 'summer',
          ko: '여름',
          fr: 'été',
          it: 'estate',
          de: 'Sommer',
          pt: 'verão',
          es: 'verano',
          ja: '夏',
          th: 'ฤดูร้อน',
          id: 'musim panas'
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to grow into a remarkable individual, full of passion and talent like the vibrant summer',
      ko: '활기찬 여름처럼 열정과 재능이 넘치는 뛰어난 인물로 성장하기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne devienne un individu remarquable, plein de passion et de talent comme l\'été vibrant',
      it: 'Un nome che augura a una persona di crescere fino a diventare un individuo notevole, pieno di passione e talento come l\'estate vibrante',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person zu einer bemerkenswerten Persönlichkeit heranwächst, voller Leidenschaft und Talent wie der pulsierende Sommer',
      pt: 'Um nome que deseja que uma pessoa se torne um indivíduo notável, cheio de paixão e talento como o verão vibrante',
      es: 'Un nombre que desea que una persona se convierta en un individuo notable, lleno de pasión y talento como el vibrante verano',
      ja: '活気ある夏のように情熱と才能にあふれた優れた人物に成長することを願う名前',
      th: 'ชื่อที่หวังให้คนเติบโตเป็นบุคคลที่โดดเด่น เปี่ยมด้วยความหลงใหลและพรสวรรค์ดั่งฤดูร้อนที่มีชีวิตชีวา',
      id: 'Sebuah nama yang mengharapkan seseorang untuk tumbuh menjadi individu yang luar biasa, penuh gairah dan bakat seperti musim panas yang bersemangat'
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
    en: 'The first rain, a timely blessing',
    ko: '첫 비, 때맞춰 내리는 축복',
    fr: 'La première pluie, une bénédiction opportune',
    it: 'La prima pioggia, una benedizione tempestiva',
    de: 'Der erste Regen, ein rechtzeitiger Segen',
    pt: 'A primeira chuva, uma bênção oportuna',
    es: 'La primera lluvia, una bendición oportuna',
    ja: '最初の雨、時宜を得た恵み',
    th: 'ฝนแรก พรที่มาถูกเวลา',
    id: 'Hujan pertama, berkah yang tepat waktu'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '시',
        hanja: '始',
        meaning: {
          en: 'begin, start, first',
          ko: '시작하다, 처음',
          fr: 'commencer, début, premier',
          it: 'iniziare, inizio, primo',
          de: 'beginnen, anfangen, erster',
          pt: 'começar, início, primeiro',
          es: 'empezar, comienzo, primero',
          ja: '始まる、始め、最初',
          th: 'เริ่มต้น, แรก',
          id: 'memulai, awal, pertama'
        }
      },
      {
        korean: '우',
        hanja: '雨',
        meaning: {
          en: 'rain',
          ko: '비',
          fr: 'pluie',
          it: 'pioggia',
          de: 'Regen',
          pt: 'chuva',
          es: 'lluvia',
          ja: '雨',
          th: 'ฝน',
          id: 'hujan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a welcome person who brings new beginnings and blessings, like the first rain after a drought',
      ko: '가뭄 끝에 내리는 단비처럼 새로운 시작과 축복을 가져다주는 반가운 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne bienvenue qui apporte de nouveaux départs et des bénédictions, comme la première pluie après une sécheresse',
      it: 'Un nome per una persona gradita che porta nuovi inizi e benedizioni, come la prima pioggia dopo una siccità',
      de: 'Ein Name für eine willkommene Person, die Neuanfänge und Segen bringt, wie der erste Regen nach einer Dürre',
      pt: 'Um nome para uma pessoa bem-vinda que traz novos começos e bênçãos, como a primeira chuva após uma seca',
      es: 'Un nombre para una persona bienvenida que trae nuevos comienzos y bendiciones, como la primera lluvia después de una sequía',
      ja: '干ばつの後の恵みの雨のように、新たな始まりと祝福をもたらす歓迎される人になることを願う名前',
      th: 'ชื่อสำหรับคนที่เป็นที่ต้อนรับผู้ซึ่งนำการเริ่มต้นใหม่และพรมาให้ ดั่งฝนแรกหลังความแห้งแล้ง',
      id: 'Sebuah nama untuk orang yang disambut baik yang membawa awal yang baru dan berkah, seperti hujan pertama setelah musim kemarau'
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
    en: 'A path of abundance',
    ko: '풍요로움의 길',
    fr: 'Un chemin d\'abondance',
    it: 'Un sentiero di abbondanza',
    de: 'Ein Weg des Überflusses',
    pt: 'Um caminho de abundância',
    es: 'Un camino de abundancia',
    ja: '豊かさへの道',
    th: 'เส้นทางแห่งความอุดมสมบูรณ์',
    id: 'Jalan kelimpahan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '도',
        hanja: '道',
        meaning: {
          en: 'path, way, the right way',
          ko: '길, 도, 올바른 길',
          fr: 'chemin, voie, la bonne voie',
          it: 'sentiero, via, la retta via',
          de: 'Pfad, Weg, der richtige Weg',
          pt: 'caminho, via, o caminho certo',
          es: 'camino, vía, el camino correcto',
          ja: '道、方法、正しい道',
          th: 'เส้นทาง, วิถี, หนทางที่ถูกต้อง',
          id: 'jalan, cara, jalan yang benar'
        }
      },
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to enrich, moisten, benefit',
          ko: '윤택하게 하다, 적시다, 이롭게 하다',
          fr: 'enrichir, humecter, bénéficier',
          it: 'arricchire, inumidire, beneficiare',
          de: 'bereichern, befeuchten, zugutekommen',
          pt: 'enriquecer, umedecer, beneficiar',
          es: 'enriquecer, humedecer, beneficiar',
          ja: '潤す、豊かにする、恩恵を与える',
          th: 'ทำให้สมบูรณ์, ทำให้ชุ่มชื้น, เป็นประโยชน์',
          id: 'memperkaya, melembabkan, memberi manfaat'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to walk a righteous path that enriches and benefits not only themselves but also the world around them',
      ko: '자신뿐만 아니라 주변 세상까지 이롭게 하고 풍요롭게 만드는 올바른 길을 걷기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne suive un chemin juste qui enrichit et profite non seulement à elle-même mais aussi au monde qui l\'entoure',
      it: 'Un nome che augura a una persona di percorrere un sentiero retto che arricchisca e giovi non solo a sé stessa ma anche al mondo che la circonda',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person einen rechtschaffenen Weg geht, der nicht nur sie selbst, sondern auch die Welt um sie herum bereichert und nützt',
      pt: 'Um nome que deseja que uma pessoa siga um caminho justo que enriqueça e beneficie não apenas a si mesma, mas também o mundo ao seu redor',
      es: 'Un nombre que desea que una persona siga un camino justo que enriquezca y beneficie no solo a sí misma sino también al mundo que la rodea',
      ja: '自分自身だけでなく、周りの世界をも豊かにし、恩恵をもたらす正しい道を歩むことを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเดินบนเส้นทางอันชอบธรรมซึ่งไม่เพียงแต่สร้างประโยชน์และความร่ำรวยให้แก่ตนเองเท่านั้น แต่ยังรวมถึงโลกรอบตัวด้วย',
      id: 'Sebuah nama yang mengharapkan seseorang untuk berjalan di jalan yang benar yang memperkaya dan memberi manfaat tidak hanya bagi diri mereka sendiri tetapi juga dunia di sekitar mereka'
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
    en: 'Great and clever',
    ko: '태평하고 영민한',
    fr: 'Grand et intelligent',
    it: 'Grande e intelligente',
    de: 'Groß und klug',
    pt: 'Grande e inteligente',
    es: 'Grande e inteligente',
    ja: '泰然として賢い',
    th: 'ยิ่งใหญ่และหลักแหลม',
    id: 'Hebat dan pintar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '태',
        hanja: '泰',
        meaning: {
          en: 'great, superior, peaceful',
          ko: '큰, 뛰어난, 평안한',
          fr: 'grand, supérieur, paisible',
          it: 'grande, superiore, pacifico',
          de: 'groß, überlegen, friedlich',
          pt: 'grande, superior, pacífico',
          es: 'grande, superior, pacífico',
          ja: '大きい、優れた、安らかな',
          th: 'ยิ่งใหญ่, เหนือกว่า, สงบสุข',
          id: 'hebat, unggul, damai'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who handles matters with cleverness and maintains a calm, great presence',
      ko: '어떤 일이든 영민하게 처리하고, 평안하고 큰마음을 잃지 않는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui traite les affaires avec intelligence et maintient une présence calme et grande',
      it: 'Un nome per una persona che gestisce le questioni con intelligenza e mantiene una presenza calma e grande',
      de: 'Ein Name für eine Person, die Angelegenheiten mit Klugheit behandelt und eine ruhige, große Präsenz bewahrt',
      pt: 'Um nome para uma pessoa que lida com os assuntos com inteligência e mantém uma presença calma e grandiosa',
      es: 'Un nombre para una persona que maneja los asuntos con inteligencia y mantiene una presencia tranquila y grandiosa',
      ja: '何事も賢く処理し、穏やかで大きな存在感を保つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จัดการเรื่องต่าง ๆ ด้วยความหลักแหลมและยังคงความสงบและยิ่งใหญ่ไว้ได้',
      id: 'Sebuah nama untuk seseorang yang menangani masalah dengan cerdas dan menjaga kehadiran yang tenang dan hebat'
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
    fr: 'Juste et excellent',
    it: 'Giusto ed eccellente',
    de: 'Gerecht und ausgezeichnet',
    pt: 'Justo e excelente',
    es: 'Justo y excelente',
    ja: '正しくて優れた',
    th: 'เที่ยงธรรมและยอดเยี่ยม',
    id: 'Benar dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          fr: 'droit, correct, juste',
          it: 'giusto, corretto, appropriato',
          de: 'richtig, korrekt, ordnungsgemäß',
          pt: 'certo, correto, adequado',
          es: 'correcto, justo, debido',
          ja: '正しい、適切な、正確な',
          th: 'ถูกต้อง, เหมาะสม, แม่นยำ',
          id: 'benar, tepat, sesuai'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who has an upright character and a gentle, outstanding ability',
      ko: '성품이 올바르고 능력이 부드러우면서도 뛰어난 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui a un caractère droit et une capacité douce et exceptionnelle',
      it: 'Un nome per una persona che ha un carattere retto e una capacità gentile ed eccezionale',
      de: 'Ein Name für eine Person, die einen aufrechten Charakter und eine sanfte, herausragende Fähigkeit hat',
      pt: 'Um nome para uma pessoa que tem um caráter reto e uma habilidade gentil e excepcional',
      es: 'Un nombre para una persona que tiene un carácter recto y una habilidad gentil y sobresaliente',
      ja: '品行方正で、優しく優れた能力を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่มีอุปนิสัยเที่ยงตรงและความสามารถที่อ่อนโยนและโดดเด่น',
      id: 'Sebuah nama untuk seseorang yang memiliki karakter yang lurus dan kemampuan yang lembut dan luar biasa'
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
    en: 'A wise man from the East',
    ko: '동쪽의 현자',
    fr: 'Un sage de l\'Est',
    it: 'Un saggio dall\'Est',
    de: 'Ein Weiser aus dem Osten',
    pt: 'Um sábio do Leste',
    es: 'Un sabio del Este',
    ja: '東方の賢者',
    th: 'นักปราชญ์แห่งตะวันออก',
    id: 'Orang bijak dari Timur'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '동',
        hanja: '東',
        meaning: {
          en: 'east',
          ko: '동쪽',
          fr: 'est',
          it: 'est',
          de: 'Osten',
          pt: 'leste',
          es: 'este',
          ja: '東',
          th: 'ทิศตะวันออก',
          id: 'timur'
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person who will become a wise and virtuous leader, like the sun rising from the East',
      ko: '동쪽에서 해가 떠오르듯, 세상을 밝히는 어질고 현명한 지도자가 되기를 바라는 이름',
      fr: 'Un nom qui signifie qu\'une personne deviendra un leader sage et vertueux, comme le soleil se levant à l\'Est',
      it: 'Un nome che significa che una persona diventerà un leader saggio e virtuoso, come il sole che sorge da Est',
      de: 'Ein Name, der bedeutet, dass eine Person eine weise und tugendhafte Führungspersönlichkeit wird, wie die Sonne, die im Osten aufgeht',
      pt: 'Um nome que significa que uma pessoa se tornará um líder sábio e virtuoso, como o sol que nasce no Leste',
      es: 'Un nombre que significa que una persona se convertirá en un líder sabio y virtuoso, como el sol que sale por el Este',
      ja: '東から太陽が昇るように、世を照らす賢明で徳のある指導者になることを願う名前',
      th: 'ชื่อที่หมายถึงบุคคลที่จะเป็นผู้นำที่ฉลาดและมีคุณธรรม ดั่งดวงอาทิตย์ที่ขึ้นทางทิศตะวันออก',
      id: 'Sebuah nama yang menandakan seseorang yang akan menjadi pemimpin yang bijaksana dan berbudi luhur, seperti matahari terbit dari Timur'
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
    en: 'Shining wisdom',
    ko: '빛나는 지혜',
    fr: 'Sagesse éclatante',
    it: 'Saggezza splendente',
    de: 'Leuchtende Weisheit',
    pt: 'Sabedoria reluzente',
    es: 'Sabiduría resplandeciente',
    ja: '輝く知恵',
    th: 'ปัญญาอันส่องสว่าง',
    id: 'Kebijaksanaan yang bersinar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '환',
        hanja: '煥',
        meaning: {
          en: 'shining, brilliant, lustrous',
          ko: '빛나는, 찬란한, 윤기나는',
          fr: 'brillant, éclatant, lustré',
          it: 'splendente, brillante, lucente',
          de: 'leuchtend, brillant, glänzend',
          pt: 'brilhante, reluzente, lustroso',
          es: 'brillante, resplandeciente, lustroso',
          ja: '輝くばかりの、きらびやかな',
          th: 'ส่องแสง, สุกใส, เป็นมันเงา',
          id: 'bersinar, cemerlang, berkilau'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person whose wisdom shines brightly, illuminating the path for themselves and others',
      ko: '자신과 타인의 길을 밝게 비추는, 환하게 빛나는 지혜를 가진 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne dont la sagesse brille de mille feux, éclairant son propre chemin et celui des autres',
      it: 'Un nome per una persona la cui saggezza splende luminosa, illuminando il cammino per sé e per gli altri',
      de: 'Ein Name für eine Person, deren Weisheit hell leuchtet und den Weg für sich und andere erhellt',
      pt: 'Um nome para uma pessoa cuja sabedoria brilha intensamente, iluminando o caminho para si e para os outros',
      es: 'Un nombre para una persona cuya sabiduría brilla intensamente, iluminando el camino para sí misma y para los demás',
      ja: '自分と他者の道を明るく照らす、輝く知恵を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีปัญญาอันส่องสว่าง นำทางให้แก่ตนเองและผู้อื่น',
      id: 'Sebuah nama untuk seseorang yang kebijaksanaannya bersinar terang, menerangi jalan bagi diri mereka sendiri dan orang lain'
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
    en: 'A great and remarkable talent',
    ko: '태산처럼 크고 뛰어난 인재',
    fr: 'Un grand et remarquable talent',
    it: 'Un grande e notevole talento',
    de: 'Ein großes und bemerkenswertes Talent',
    pt: 'Um grande e notável talento',
    es: 'Un gran y notable talento',
    ja: '泰然として優れた才能',
    th: 'ผู้มีความสามารถอันยิ่งใหญ่และโดดเด่น',
    id: 'Bakat yang hebat dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '태',
        hanja: '泰',
        meaning: {
          en: 'great, superior, peaceful',
          ko: '큰, 뛰어난, 평안한',
          fr: 'grand, supérieur, paisible',
          it: 'grande, superiore, pacifico',
          de: 'groß, überlegen, friedlich',
          pt: 'grande, superior, pacífico',
          es: 'grande, superior, pacífico',
          ja: '大きい、優れた、安らかな',
          th: 'ยิ่งใหญ่, เหนือกว่า, สงบสุข',
          id: 'hebat, unggul, damai'
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to become a great and outstanding figure, with a calm presence and exceptional talents',
      ko: '태산처럼 평온한 마음과 뛰어난 재능으로 위대한 인물이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne devienne une grande figure exceptionnelle, avec une présence calme et des talents exceptionnels',
      it: 'Un nome che augura a una persona di diventare una figura grande ed eccezionale, con una presenza calma e talenti eccezionali',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine große und herausragende Persönlichkeit wird, mit einer ruhigen Präsenz und außergewöhnlichen Talenten',
      pt: 'Um nome que deseja que uma pessoa se torne uma figura grande e proeminente, com uma presença calma e talentos excepcionais',
      es: 'Un nombre que desea que una persona se convierta en una figura grande y destacada, con una presencia serena y talentos excepcionales',
      ja: '泰山のような穏やかな心と優れた才能で偉大な人物になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลกลายเป็นบุคคลที่ยิ่งใหญ่และโดดเด่น ด้วยความสงบและความสามารถพิเศษ',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi tokoh yang hebat dan luar biasa, dengan kehadiran yang tenang dan bakat yang luar biasa'
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
    en: 'Excellent victory',
    ko: '뛰어난 승리',
    fr: 'Victoire excellente',
    it: 'Vittoria eccellente',
    de: 'Ausgezeichneter Sieg',
    pt: 'Vitória excelente',
    es: 'Victoria excelente',
    ja: '優れた勝利',
    th: 'ชัยชนะอันยอดเยี่ยม',
    id: 'Kemenangan yang luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '승',
        hanja: '勝',
        meaning: {
          en: 'victory, win, superior',
          ko: '승리, 이기다, 뛰어나다',
          fr: 'victoire, gagner, supérieur',
          it: 'vittoria, vincere, superiore',
          de: 'Sieg, gewinnen, überlegen',
          pt: 'vitória, vencer, superior',
          es: 'victoria, ganar, superior',
          ja: '勝利、勝つ、優れる',
          th: 'ชัยชนะ, ชนะ, เหนือกว่า',
          id: 'kemenangan, menang, unggul'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who achieves victory with superior skill and a gentle heart',
      ko: '부드러운 마음과 뛰어난 능력으로 승리를 쟁취하는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui remporte la victoire avec une compétence supérieure et un cœur doux',
      it: 'Un nome per una persona che ottiene la vittoria con abilità superiore e un cuore gentile',
      de: 'Ein Name für eine Person, die mit überlegenem Können und einem sanften Herzen den Sieg erringt',
      pt: 'Um nome para uma pessoa que alcança a vitória com habilidade superior e um coração gentil',
      es: 'Un nombre para una persona que logra la victoria con una habilidad superior y un corazón gentil',
      ja: '優しい心と優れた能力で勝利を収める人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่ได้รับชัยชนะด้วยทักษะที่เหนือกว่าและหัวใจที่อ่อนโยน',
      id: 'Sebuah nama untuk seseorang yang meraih kemenangan dengan keterampilan unggul dan hati yang lembut'
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
    en: 'Cleverness of the East',
    ko: '동쪽의 영민함',
    fr: 'L\'intelligence de l\'Est',
    it: 'L\'intelligenza dell\'Est',
    de: 'Die Klugheit des Ostens',
    pt: 'A inteligência do Leste',
    es: 'La inteligencia del Este',
    ja: '東方の賢さ',
    th: 'ความเฉลียวฉลาดแห่งตะวันออก',
    id: 'Kecerdasan dari Timur'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '동',
        hanja: '東',
        meaning: {
          en: 'east',
          ko: '동쪽',
          fr: 'est',
          it: 'est',
          de: 'Osten',
          pt: 'leste',
          es: 'este',
          ja: '東',
          th: 'ทิศตะวันออก',
          id: 'timur'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses the bright and sharp cleverness of the rising sun',
      ko: '떠오르는 태양처럼 밝고 예리한 영민함을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède l\'intelligence vive et perçante du soleil levant',
      it: 'Un nome per una persona che possiede l\'intelligenza brillante e acuta del sole nascente',
      de: 'Ein Name für eine Person, die die helle und scharfe Klugheit der aufgehenden Sonne besitzt',
      pt: 'Um nome para uma pessoa que possui a inteligência brilhante e afiada do sol nascente',
      es: 'Un nombre para una persona que posee la inteligencia brillante y aguda del sol naciente',
      ja: '昇る太陽のように明るく鋭い賢さを持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีความเฉลียวฉลาดที่สดใสและเฉียบแหลมดั่งดวงอาทิตย์ขึ้น',
      id: 'Sebuah nama untuk seseorang yang memiliki kecerdasan yang cerah dan tajam dari matahari terbit'
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
    ko: '태평하고 뛰어난',
    fr: 'Grand et excellent',
    it: 'Grande ed eccellente',
    de: 'Groß und ausgezeichnet',
    pt: 'Grande e excelente',
    es: 'Grande y excelente',
    ja: '泰然として優れた',
    th: 'ยิ่งใหญ่และยอดเยี่ยม',
    id: 'Hebat dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '태',
        hanja: '泰',
        meaning: {
          en: 'great, superior, peaceful',
          ko: '큰, 뛰어난, 평안한',
          fr: 'grand, supérieur, paisible',
          it: 'grande, superiore, pacifico',
          de: 'groß, überlegen, friedlich',
          pt: 'grande, superior, pacífico',
          es: 'grande, superior, pacífico',
          ja: '大きい、優れた、安らかな',
          th: 'ยิ่งใหญ่, เหนือกว่า, สงบสุข',
          id: 'hebat, unggul, damai'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a peaceful heart and outstanding, gentle abilities',
      ko: '평안한 마음과 부드럽고 뛰어난 능력을 겸비한 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait un cœur paisible et des capacités exceptionnelles et douces',
      it: 'Un nome che augura a una persona di avere un cuore pacifico e capacità eccezionali e gentili',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein friedliches Herz und herausragende, sanfte Fähigkeiten hat',
      pt: 'Um nome que deseja que uma pessoa tenha um coração pacífico e habilidades excepcionais e gentis',
      es: 'Un nombre que desea que una persona tenga un corazón pacífico y habilidades excepcionales y gentiles',
      ja: '穏やかな心と優しく優れた能力を兼ね備えた人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีจิตใจที่สงบและความสามารถที่โดดเด่นและอ่อนโยน',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki hati yang damai dan kemampuan yang luar biasa dan lembut'
    }
  }
}),
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
    en: 'The pillar of a nation',
    ko: '나라의 기둥',
    fr: 'Le pilier d\'une nation',
    it: 'Il pilastro di una nazione',
    de: 'Die Säule einer Nation',
    pt: 'O pilar de uma nação',
    es: 'El pilar de una nación',
    ja: '国の柱',
    th: 'เสาหลักของประเทศ',
    id: 'Pilar sebuah bangsa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, center',
          ko: '바른, 올바른, 중심',
          fr: 'droit, correct, centre',
          it: 'giusto, corretto, centro',
          de: 'richtig, korrekt, Zentrum',
          pt: 'certo, correto, centro',
          es: 'correcto, justo, centro',
          ja: '正しい、適切な、中心',
          th: 'ถูกต้อง, เหมาะสม, ศูนย์กลาง',
          id: 'benar, tepat, pusat'
        }
      },
      {
        korean: '국',
        hanja: '國',
        meaning: {
          en: 'country, nation, state',
          ko: '나라, 국가, 민족',
          fr: 'pays, nation, état',
          it: 'paese, nazione, stato',
          de: 'Land, Nation, Staat',
          pt: 'país, nação, estado',
          es: 'país, nación, estado',
          ja: '国、国家、国民',
          th: 'ประเทศ, ชาติ, รัฐ',
          id: 'negara, bangsa, negeri'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will become a central and upright pillar for their country',
      ko: '나라의 중심이 되는 바르고 곧은 기둥 같은 인물이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui deviendra un pilier central et droit pour son pays',
      it: 'Un nome per una persona che diventerà un pilastro centrale e retto per il proprio paese',
      de: 'Ein Name für eine Person, die eine zentrale und aufrechte Säule für ihr Land wird',
      pt: 'Um nome para uma pessoa que se tornará um pilar central e justo para o seu país',
      es: 'Un nombre para una persona que se convertirá en un pilar central y recto para su país',
      ja: '国の中心となる正しくまっすぐな柱のような人物になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะเป็นเสาหลักที่สำคัญและเที่ยงตรงของประเทศ',
      id: 'Sebuah nama untuk seseorang yang akan menjadi pilar utama dan lurus bagi negaranya'
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
    en: 'A great and solid rock',
    ko: '크고 단단한 바위',
    fr: 'Un grand et solide rocher',
    it: 'Una grande e solida roccia',
    de: 'Ein großer und solider Fels',
    pt: 'Uma grande e sólida rocha',
    es: 'Una roca grande y sólida',
    ja: '大きく堅固な岩',
    th: 'หินผาที่ยิ่งใหญ่และแข็งแกร่ง',
    id: 'Batu yang besar dan kokoh'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast, grand',
          ko: '큰, 넓은, 웅장한',
          fr: 'grand, vaste, magnifique',
          it: 'grande, vasto, magnifico',
          de: 'groß, weit, prächtig',
          pt: 'grande, vasto, grandioso',
          es: 'grande, vasto, grandioso',
          ja: '大きい、広大な、雄大な',
          th: 'ยิ่งใหญ่, กว้างใหญ่, โอ่อ่า',
          id: 'besar, luas, agung'
        }
      },
      {
        korean: '석',
        hanja: '石',
        meaning: {
          en: 'stone, rock',
          ko: '돌, 바위',
          fr: 'pierre, rocher',
          it: 'pietra, roccia',
          de: 'Stein, Fels',
          pt: 'pedra, rocha',
          es: 'piedra, roca',
          ja: '石、岩',
          th: 'หิน, ศิลา',
          id: 'batu, karang'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a vast heart and an unwavering presence like a great rock',
      ko: '큰 바위처럼 마음이 넓고 흔들림 없는 굳건한 존재가 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait un cœur vaste et une présence inébranlable comme un grand rocher',
      it: 'Un nome che augura a una persona di avere un cuore vasto e una presenza incrollabile come una grande roccia',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein weites Herz und eine unerschütterliche Präsenz wie ein großer Fels hat',
      pt: 'Um nome que deseja que uma pessoa tenha um coração vasto e uma presença inabalável como uma grande rocha',
      es: 'Un nombre que desea que una persona tenga un corazón vasto y una presencia inquebrantable como una gran roca',
      ja: '大きな岩のように心が広く、揺るぎない存在になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีหัวใจที่กว้างใหญ่และมั่นคงไม่หวั่นไหวดั่งหินผา',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki hati yang luas dan kehadiran yang tak tergoyahkan seperti batu besar'
    }
  },
  kpopMember: { group: 'BTS', memberName: 'J-Hope' }
}),
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
    en: 'Enriching the West',
    ko: '서쪽을 윤택하게 하다',
    fr: 'Enrichir l\'Ouest',
    it: 'Arricchire l\'Ovest',
    de: 'Den Westen bereichern',
    pt: 'Enriquecer o Oeste',
    es: 'Enriquecer el Oeste',
    ja: '西を潤す',
    th: 'ทำให้ทิศตะวันตกสมบูรณ์',
    id: 'Memperkaya Barat'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '西',
        meaning: {
          en: 'west',
          ko: '서쪽',
          fr: 'ouest',
          it: 'ovest',
          de: 'Westen',
          pt: 'oeste',
          es: 'oeste',
          ja: '西',
          th: 'ทิศตะวันตก',
          id: 'barat'
        }
      },
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to enrich, moisten, benefit',
          ko: '윤택하게 하다, 적시다, 이롭게 하다',
          fr: 'enrichir, humecter, bénéficier',
          it: 'arricchire, inumidire, beneficiare',
          de: 'bereichern, befeuchten, zugutekommen',
          pt: 'enriquecer, umedecer, beneficiar',
          es: 'enriquecer, humedecer, beneficiar',
          ja: '潤す、豊かにする、恩恵を与える',
          th: 'ทำให้สมบูรณ์, ทำให้ชุ่มชื้น, เป็นประโยชน์',
          id: 'memperkaya, melembabkan, memberi manfaat'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who brings abundance and positive influence to their surroundings, enriching the world like a setting sun',
      ko: '지는 해처럼 세상을 풍요롭게 하고, 주변에 긍정적인 영향을 끼치는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui apporte l\'abondance et une influence positive à son entourage, enrichissant le monde comme un soleil couchant',
      it: 'Un nome per una persona che porta abbondanza e influenza positiva a ciò che la circonda, arricchendo il mondo come un sole al tramonto',
      de: 'Ein Name für eine Person, die ihrer Umgebung Fülle und positiven Einfluss bringt und die Welt wie eine untergehende Sonne bereichert',
      pt: 'Um nome para uma pessoa que traz abundância e influência positiva ao seu redor, enriquecendo o mundo como um sol poente',
      es: 'Un nombre para una persona que aporta abundancia e influencia positiva a su entorno, enriqueciendo el mundo como un sol poniente',
      ja: '沈む太陽のように世界を豊かにし、周囲に良い影響を与える人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่นำความอุดมสมบูรณ์และอิทธิพลเชิงบวกมาสู่สิ่งรอบข้าง ทำให้โลกสมบูรณ์เหมือนดวงอาทิตย์ตกดิน',
      id: 'Sebuah nama untuk seseorang yang membawa kelimpahan dan pengaruh positif bagi lingkungan mereka, memperkaya dunia seperti matahari terbenam'
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
    en: 'Clear artistry',
    ko: '맑은 예술적 재능',
    fr: 'Art clair',
    it: 'Arte chiara',
    de: 'Klare Kunstfertigkeit',
    pt: 'Arte clara',
    es: 'Arte claro',
    ja: '清らかな芸術性',
    th: 'ศิลปะอันบริสุทธิ์',
    id: 'Seni yang jernih'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '藝',
        meaning: {
          en: 'art, skill, talent',
          ko: '예술, 기술, 재주',
          fr: 'art, compétence, talent',
          it: 'arte, abilità, talento',
          de: 'Kunst, Fähigkeit, Talent',
          pt: 'arte, habilidade, talento',
          es: 'arte, habilidad, talento',
          ja: '芸術、技術、才能',
          th: 'ศิลปะ, ทักษะ, พรสวรรค์',
          id: 'seni, keterampilan, bakat'
        }
      },
      {
        korean: '린',
        hanja: '潾',
        meaning: {
          en: 'clear water, limpid',
          ko: '맑은 물, 투명한',
          fr: 'eau claire, limpide',
          it: 'acqua limpida, trasparente',
          de: 'klares Wasser, durchsichtig',
          pt: 'água clara, límpida',
          es: 'agua clara, límpida',
          ja: '澄んだ水、清らかな',
          th: 'น้ำใส, กระจ่าง',
          id: 'air jernih, bening'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person whose artistic talents shine clearly and purely, like light reflecting on clear water',
      ko: '맑은 물에 비친 빛처럼, 예술적 재능이 맑고 순수하게 빛나는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne dont les talents artistiques brillent de manière claire et pure, comme la lumière se reflétant sur l\'eau claire',
      it: 'Un nome per una persona i cui talenti artistici brillano in modo chiaro e puro, come la luce che si riflette sull\'acqua limpida',
      de: 'Ein Name für eine Person, deren künstlerische Talente klar und rein leuchten, wie Licht, das sich auf klarem Wasser spiegelt',
      pt: 'Um nome para uma pessoa cujos talentos artísticos brilham de forma clara e pura, como a luz refletida na água límpida',
      es: 'Un nombre para una persona cuyos talentos artísticos brillan de manera clara y pura, como la luz que se refleja en el agua clara',
      ja: '澄んだ水に映る光のように、芸術的な才能が清く純粋に輝く人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่มีพรสวรรค์ทางศิลปะส่องประกายอย่างชัดเจนและบริสุทธิ์ ดุจแสงสะท้อนบนน้ำใส',
      id: 'Sebuah nama untuk seseorang yang bakat seninya bersinar dengan jelas dan murni, seperti cahaya yang memantul di air jernih'
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
    en: 'Wise and elegant',
    ko: '지혜롭고 우아한',
    fr: 'Sage et élégante',
    it: 'Saggia ed elegante',
    de: 'Weise und elegant',
    pt: 'Sábia e elegante',
    es: 'Sabia y elegante',
    ja: '賢くて優雅な',
    th: 'ฉลาดและสง่างาม',
    id: 'Bijaksana dan anggun'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '아',
        hanja: '雅',
        meaning: {
          en: 'elegant, graceful, refined',
          ko: '우아한, 고상한, 세련된',
          fr: 'élégant, gracieux, raffiné',
          it: 'elegante, grazioso, raffinato',
          de: 'elegant, anmutig, raffiniert',
          pt: 'elegante, gracioso, refinado',
          es: 'elegante, garboso, refinado',
          ja: '優雅な、上品な、洗練された',
          th: 'สง่างาม, นุ่มนวล, ประณีต',
          id: 'anggun, elok, halus'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses both inner wisdom and an outer elegant grace',
      ko: '내면의 지혜와 외면의 우아한 기품을 모두 갖춘 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède à la fois une sagesse intérieure et une grâce extérieure élégante',
      it: 'Un nome per una persona che possiede sia la saggezza interiore che una grazia esteriore elegante',
      de: 'Ein Name für eine Person, die sowohl innere Weisheit als auch äußere elegante Anmut besitzt',
      pt: 'Um nome para uma pessoa que possui tanto a sabedoria interior quanto uma graça exterior elegante',
      es: 'Un nombre para una persona que posee tanto sabiduría interior como una elegante gracia exterior',
      ja: '内面の知恵と外面の優雅な気品を兼ね備えた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีทั้งปัญญาภายในและความสง่างามภายนอก',
      id: 'Sebuah nama untuk seseorang yang memiliki kebijaksanaan batin dan keanggunan luar yang elegan'
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
    en: 'A small, lovely lotus',
    ko: '작고 사랑스러운 연꽃',
    fr: 'Un petit et charmant lotus',
    it: 'Un piccolo e grazioso loto',
    de: 'Ein kleiner, lieblicher Lotus',
    pt: 'Um pequeno e adorável lótus',
    es: 'Un pequeño y encantador loto',
    ja: '小さく愛らしい蓮',
    th: 'ดอกบัวน้อยที่น่ารัก',
    id: 'Teratai kecil yang menawan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '소',
        hanja: '小',
        meaning: {
          en: 'small, little',
          ko: '작은',
          fr: 'petit',
          it: 'piccolo',
          de: 'klein',
          pt: 'pequeno',
          es: 'pequeño',
          ja: '小さい',
          th: 'เล็ก',
          id: 'kecil'
        }
      },
      {
        korean: '연',
        hanja: '蓮',
        meaning: {
          en: 'lotus flower, pure',
          ko: '연꽃, 순수한',
          fr: 'fleur de lotus, pure',
          it: 'fiore di loto, puro',
          de: 'Lotusblume, rein',
          pt: 'flor de lótus, pura',
          es: 'flor de loto, pura',
          ja: '蓮の花、純粋な',
          th: 'ดอกบัว, บริสุทธิ์',
          id: 'bunga teratai, murni'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person who, though seemingly small, possesses the great inner purity and beauty of a lotus flower',
      ko: '작아 보일지라도 연꽃처럼 내면에 위대한 순수함과 아름다움을 간직한 사람이 되기를 바라는 이름',
      fr: 'Un nom qui signifie qu\'une personne, bien que d\'apparence petite, possède la grande pureté intérieure et la beauté d\'une fleur de lotus',
      it: 'Un nome che significa una persona che, sebbene apparentemente piccola, possiede la grande purezza interiore e la bellezza di un fiore di loto',
      de: 'Ein Name, der bedeutet, dass eine Person, obwohl sie klein erscheint, die große innere Reinheit und Schönheit einer Lotusblume besitzt',
      pt: 'Um nome que significa uma pessoa que, embora pareça pequena, possui a grande pureza interior e a beleza de uma flor de lótus',
      es: 'Un nombre que significa que una persona, aunque parezca pequeña, posee la gran pureza interior y la belleza de una flor de loto',
      ja: '小さく見えても、蓮の花のように内面に偉大な純粋さと美しさを秘めた人になることを願う名前',
      th: 'ชื่อที่หมายถึงบุคคลที่แม้จะดูเล็ก แต่ก็มีความบริสุทธิ์ภายในและความงามอันยิ่งใหญ่ของดอกบัว',
      id: 'Sebuah nama yang menandakan seseorang yang, meskipun tampak kecil, memiliki kemurnian batin yang agung dan keindahan bunga teratai'
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
    en: 'Artistically elegant',
    ko: '예술적으로 아리따운',
    fr: 'Artistiquement élégante',
    it: 'Artisticamente elegante',
    de: 'Künstlerisch elegant',
    pt: 'Artisticamente elegante',
    es: 'Artísticamente elegante',
    ja: '芸術的に優雅な',
    th: 'สง่างามอย่างมีศิลปะ',
    id: 'Anggun secara artistik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '藝',
        meaning: {
          en: 'art, skill, talent',
          ko: '예술, 기술, 재주',
          fr: 'art, compétence, talent',
          it: 'arte, abilità, talento',
          de: 'Kunst, Fähigkeit, Talent',
          pt: 'arte, habilidade, talento',
          es: 'arte, habilidad, talento',
          ja: '芸術、技術、才能',
          th: 'ศิลปะ, ทักษะ, พรสวรรค์',
          id: 'seni, keterampilan, bakat'
        }
      },
      {
        korean: '나',
        hanja: '娜',
        meaning: {
          en: 'elegant, graceful, beautiful',
          ko: '우아한, 아리따운, 아름다운',
          fr: 'élégant, gracieux, beau',
          it: 'elegante, grazioso, bello',
          de: 'elegant, anmutig, schön',
          pt: 'elegante, gracioso, belo',
          es: 'elegante, garboso, hermoso',
          ja: '優雅な、しなやかな、美しい',
          th: 'สง่างาม, อ่อนช้อย, สวยงาม',
          id: 'anggun, elok, cantik'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses an elegant beauty that is as deep and graceful as a work of art',
      ko: '한 폭의 예술 작품처럼 깊이 있고 품위 있는, 우아한 아름다움을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède une beauté élégante, aussi profonde et gracieuse qu\'une œuvre d\'art',
      it: 'Un nome per una persona che possiede una bellezza elegante, profonda e graziosa come un\'opera d\'arte',
      de: 'Ein Name für eine Person, die eine elegante Schönheit besitzt, die so tief und anmutig ist wie ein Kunstwerk',
      pt: 'Um nome para uma pessoa que possui uma beleza elegante, tão profunda e graciosa como uma obra de arte',
      es: 'Un nombre para una persona que posee una belleza elegante, tan profunda y garbosa como una obra de arte',
      ja: '芸術作品のように深く気品のある、優雅な美しさを持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีความงามสง่าซึ่งลึกซึ้งและนุ่มนวลดุจงานศิลปะ',
      id: 'Sebuah nama untuk seseorang yang memiliki keindahan yang elegan, yang dalam dan anggun seperti sebuah karya seni'
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
    en: 'Abundant grace',
    ko: '풍성한 은혜',
    fr: 'Grâce abondante',
    it: 'Grazia abbondante',
    de: 'Reichliche Gnade',
    pt: 'Graça abundante',
    es: 'Gracia abundante',
    ja: '豊かな恵み',
    th: 'พระคุณอันไพศาล',
    id: 'Anugerah yang melimpah'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '다',
        hanja: '多',
        meaning: {
          en: 'many, much, abundant',
          ko: '많은, 풍부한',
          fr: 'beaucoup, nombreux, abondant',
          it: 'molti, tanto, abbondante',
          de: 'viele, viel, reichlich',
          pt: 'muitos, muito, abundante',
          es: 'muchos, mucho, abundante',
          ja: '多い、豊かな',
          th: 'มากมาย, อุดมสมบูรณ์',
          id: 'banyak, berlimpah'
        }
      },
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor, kindness',
          ko: '은혜, 호의, 친절',
          fr: 'grâce, faveur, gentillesse',
          it: 'grazia, favore, gentilezza',
          de: 'Gnade, Gunst, Freundlichkeit',
          pt: 'graça, favor, bondade',
          es: 'gracia, favor, amabilidad',
          ja: '恩恵、好意、親切',
          th: 'พระคุณ, ความโปรดปราน, ความเมตตา',
          id: 'anugerah, kebaikan, kemurahan hati'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who receives many blessings and shares that abundant kindness with others',
      ko: '많은 축복을 받고, 그 풍성한 친절을 다른 사람들과 함께 나누는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui reçoit de nombreuses bénédictions et partage cette bonté abondante avec les autres',
      it: 'Un nome per una persona che riceve molte benedizioni e condivide quell\'abbondante gentilezza con gli altri',
      de: 'Ein Name für eine Person, die viele Segnungen empfängt und diese überreiche Freundlichkeit mit anderen teilt',
      pt: 'Um nome para uma pessoa que recebe muitas bênçãos e compartilha essa bondade abundante com os outros',
      es: 'Un nombre para una persona que recibe muchas bendiciones y comparte esa abundante bondad con los demás',
      ja: '多くの祝福を受け、その豊かな優しさを他の人々と分かち合う人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่ได้รับพรมากมายและแบ่งปันความเมตตาอันเปี่ยมล้นนั้นกับผู้อื่น',
      id: 'Sebuah nama untuk seseorang yang menerima banyak berkat dan berbagi kebaikan yang melimpah itu dengan orang lain'
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
    en: 'Auspicious and wise',
    ko: '상서롭고 현명한',
    fr: 'De bon augure et sage',
    it: 'Di buon auspicio e saggia',
    de: 'Glückverheißend und weise',
    pt: 'Auspiciosa e sábia',
    es: 'Auspiciosa y sabia',
    ja: '縁起が良く賢い',
    th: 'เป็นมงคลและฉลาด',
    id: 'Membawa pertanda baik dan bijaksana'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to become a wise and virtuous individual who brings good fortune to those around them',
      ko: '주변에 상서로운 기운을 가져다주는 현명하고 어진 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne devienne un individu sage et vertueux qui porte bonheur à son entourage',
      it: 'Un nome che augura a una persona di diventare un individuo saggio e virtuoso che porta fortuna a coloro che la circondano',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine weise und tugendhafte Person wird, die ihren Mitmenschen Glück bringt',
      pt: 'Um nome que deseja que uma pessoa se torne um indivíduo sábio e virtuoso que traz boa sorte para aqueles ao seu redor',
      es: 'Un nombre que desea que una persona se convierta en un individuo sabio y virtuoso que traiga buena fortuna a quienes la rodean',
      ja: '周りに幸運をもたらす、賢明で徳のある人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลกลายเป็นผู้มีปัญญาและคุณธรรมซึ่งนำความโชคดีมาสู่คนรอบข้าง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang bijaksana dan berbudi luhur yang membawa keberuntungan bagi orang di sekitarnya'
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
    ko: '지혜롭고 현명한',
    fr: 'Sage et vertueuse',
    it: 'Saggia e virtuosa',
    de: 'Weise und tugendhaft',
    pt: 'Sábia e virtuosa',
    es: 'Sabia y virtuosa',
    ja: '賢くて徳のある',
    th: 'ฉลาดและมีคุณธรรม',
    id: 'Bijaksana dan berbudi luhur'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses both deep wisdom and a virtuous character, able to make wise decisions',
      ko: '깊은 지혜와 어진 성품을 모두 갖추어 현명한 판단을 내리는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède à la fois une profonde sagesse et un caractère vertueux, capable de prendre des décisions sages',
      it: 'Un nome per una persona che possiede sia una profonda saggezza che un carattere virtuoso, in grado di prendere decisioni sagge',
      de: 'Ein Name für eine Person, die sowohl tiefe Weisheit als auch einen tugendhaften Charakter besitzt und in der Lage ist, weise Entscheidungen zu treffen',
      pt: 'Um nome para uma pessoa que possui tanto uma sabedoria profunda quanto um caráter virtuoso, capaz de tomar decisões sábias',
      es: 'Un nombre para una persona que posee tanto una profunda sabiduría como un carácter virtuoso, capaz de tomar decisiones sabias',
      ja: '深い知恵と徳のある人格を兼ね備え、賢明な判断を下せる人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีทั้งปัญญาอันลึกซึ้งและอุปนิสัยอันดีงาม สามารถตัดสินใจได้อย่างชาญฉลาด',
      id: 'Sebuah nama untuk seseorang yang memiliki kebijaksanaan yang mendalam dan karakter yang berbudi luhur, mampu membuat keputusan yang bijaksana'
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
    en: 'Source of artistry',
    ko: '예술의 근원',
    fr: 'Source d\'art',
    it: 'Fonte d\'arte',
    de: 'Quelle der Kunstfertigkeit',
    pt: 'Fonte de arte',
    es: 'Fuente de arte',
    ja: '芸術の源',
    th: 'แหล่งกำเนิดแห่งศิลปะ',
    id: 'Sumber kesenian'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '藝',
        meaning: {
          en: 'art, skill, talent',
          ko: '예술, 기술, 재주',
          fr: 'art, compétence, talent',
          it: 'arte, abilità, talento',
          de: 'Kunst, Fähigkeit, Talent',
          pt: 'arte, habilidade, talento',
          es: 'arte, habilidad, talento',
          ja: '芸術、技術、才能',
          th: 'ศิลปะ, ทักษะ, พรสวรรค์',
          id: 'seni, keterampilan, bakat'
        }
      },
      {
        korean: '원',
        hanja: '源',
        meaning: {
          en: 'source, origin, root',
          ko: '근원, 기원, 뿌리',
          fr: 'source, origine, racine',
          it: 'fonte, origine, radice',
          de: 'Quelle, Ursprung, Wurzel',
          pt: 'fonte, origem, raiz',
          es: 'fuente, origen, raíz',
          ja: '源、起源、根源',
          th: 'แหล่งกำเนิด, ต้นกำเนิด, รากฐาน',
          id: 'sumber, asal, akar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a source of artistic inspiration and creativity for the world',
      ko: '세상을 위한 예술적 영감과 창의력의 근원이 되는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit une source d\'inspiration artistique et de créativité pour le monde',
      it: 'Un nome che augura a una persona di essere una fonte di ispirazione artistica e creatività per il mondo',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine Quelle künstlerischer Inspiration und Kreativität für die Welt wird',
      pt: 'Um nome que deseja que uma pessoa seja uma fonte de inspiração artística e criatividade para o mundo',
      es: 'Un nombre que desea que una persona sea una fuente de inspiración artística y creatividad para el mundo',
      ja: '世界の芸術的なインスピレーションと創造性の源となる人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นแหล่งของแรงบันดาลใจทางศิลปะและความคิดสร้างสรรค์สำหรับโลก',
      id: 'Sebuah nama yang mengharapkan seseorang menjadi sumber inspirasi artistik dan kreativitas bagi dunia'
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
    en: 'Bright joy',
    ko: '밝은 기쁨',
    fr: 'Joie éclatante',
    it: 'Gioia luminosa',
    de: 'Helle Freude',
    pt: 'Alegria brilhante',
    es: 'Alegría brillante',
    ja: '明るい喜び',
    th: 'ความสุขที่สดใส',
    id: 'Keceriaan yang cerah'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '소',
        hanja: '昭',
        meaning: {
          en: 'bright, clear, luminous',
          ko: '밝은, 맑은, 빛나는',
          fr: 'brillant, clair, lumineux',
          it: 'brillante, chiaro, luminoso',
          de: 'hell, klar, leuchtend',
          pt: 'brilhante, claro, luminoso',
          es: 'brillante, claro, luminoso',
          ja: '明るい、明らかな',
          th: 'สดใส, ชัดเจน, ส่องสว่าง',
          id: 'cerah, jernih, bercahaya'
        }
      },
      {
        korean: '희',
        hanja: '喜',
        meaning: {
          en: 'joy, happiness, delight',
          ko: '기쁨, 행복, 즐거움',
          fr: 'joie, bonheur, délice',
          it: 'gioia, felicità, diletto',
          de: 'Freude, Glück, Vergnügen',
          pt: 'alegria, felicidade, deleite',
          es: 'alegría, felicidad, deleite',
          ja: '喜び、幸福、楽しみ',
          th: 'ความสุข, ความยินดี, ความปิติ',
          id: 'kegembiraan, kebahagiaan, kesenangan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person whose presence brings bright and clear happiness to everyone around them',
      ko: '그 존재만으로 주변 모든 사람에게 밝고 환한 기쁨을 주는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne dont la présence apporte un bonheur vif et clair à tous ceux qui l\'entourent',
      it: 'Un nome per una persona la cui presenza porta felicità luminosa e chiara a tutti coloro che la circondano',
      de: 'Ein Name für eine Person, deren Anwesenheit allen um sie herum helle und klare Freude bereitet',
      pt: 'Um nome para uma pessoa cuja presença traz felicidade brilhante e clara a todos ao seu redor',
      es: 'Un nombre para una persona cuya presencia trae una felicidad brillante y clara a todos los que la rodean',
      ja: 'その存在が周りのすべての人に明るく澄んだ喜びをもたらす人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่การมีอยู่ของเขานำความสุขที่สดใสและชัดเจนมาสู่ทุกคนรอบข้าง',
      id: 'Sebuah nama untuk seseorang yang kehadirannya membawa kebahagiaan yang cerah dan jernih bagi semua orang di sekitarnya'
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
    en: 'Source of wisdom',
    ko: '지혜의 근원',
    fr: 'Source de sagesse',
    it: 'Fonte di saggezza',
    de: 'Quelle der Weisheit',
    pt: 'Fonte de sabedoria',
    es: 'Fuente de sabiduría',
    ja: '知恵の源',
    th: 'แหล่งแห่งปัญญา',
    id: 'Sumber kebijaksanaan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '원',
        hanja: '源',
        meaning: {
          en: 'source, origin, root',
          ko: '근원, 기원, 뿌리',
          fr: 'source, origine, racine',
          it: 'fonte, origine, radice',
          de: 'Quelle, Ursprung, Wurzel',
          pt: 'fonte, origem, raiz',
          es: 'fuente, origen, raíz',
          ja: '源、起源、根源',
          th: 'แหล่งกำเนิด, ต้นกำเนิด, รากฐาน',
          id: 'sumber, asal, akar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a fundamental source of wisdom and knowledge for others',
      ko: '다른 사람들에게 지혜와 지식의 근본적인 원천이 되는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit une source fondamentale de sagesse et de connaissance pour les autres',
      it: 'Un nome che augura a una persona di essere una fonte fondamentale di saggezza e conoscenza per gli altri',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine grundlegende Quelle der Weisheit und des Wissens für andere wird',
      pt: 'Um nome que deseja que uma pessoa seja uma fonte fundamental de sabedoria e conhecimento para os outros',
      es: 'Un nombre que desea que una persona sea una fuente fundamental de sabiduría y conocimiento para los demás',
      ja: '他者にとって知恵と知識の根本的な源となる人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นแหล่งพื้นฐานของปัญญาและความรู้สำหรับผู้อื่น',
      id: 'Sebuah nama yang mengharapkan seseorang menjadi sumber fundamental kebijaksanaan dan pengetahuan bagi orang lain'
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
    en: 'Artistic treasure',
    ko: '예술적인 보물',
    fr: 'Trésor artistique',
    it: 'Tesoro artistico',
    de: 'Künstlerischer Schatz',
    pt: 'Tesouro artístico',
    es: 'Tesoro artístico',
    ja: '芸術的な宝物',
    th: 'สมบัติแห่งศิลป์',
    id: 'Harta karun artistik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '藝',
        meaning: {
          en: 'art, skill, talent',
          ko: '예술, 기술, 재주',
          fr: 'art, compétence, talent',
          it: 'arte, abilità, talento',
          de: 'Kunst, Fähigkeit, Talent',
          pt: 'arte, habilidade, talento',
          es: 'arte, habilidad, talento',
          ja: '芸術、技術、才能',
          th: 'ศิลปะ, ทักษะ, พรสวรรค์',
          id: 'seni, keterampilan, bakat'
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses rare and precious artistic talent, becoming a treasure to the world',
      ko: '귀하고 소중한 예술적 재능을 지녀 세상의 보물과 같은 존재가 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède un talent artistique rare et précieux, devenant un trésor pour le monde',
      it: 'Un nome per una persona che possiede un talento artistico raro e prezioso, diventando un tesoro per il mondo',
      de: 'Ein Name für eine Person, die ein seltenes und kostbares künstlerisches Talent besitzt und zu einem Schatz für die Welt wird',
      pt: 'Um nome para uma pessoa que possui um talento artístico raro e precioso, tornando-se um tesouro para o mundo',
      es: 'Un nombre para una persona que posee un talento artístico raro y precioso, convirtiéndose en un tesoro para el mundo',
      ja: '希少で貴重な芸術的才能を持ち、世界の宝となるような存在になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีพรสวรรค์ทางศิลปะที่หายากและล้ำค่า จนกลายเป็นสมบัติของโลก',
      id: 'Sebuah nama untuk seseorang yang memiliki bakat artistik yang langka dan berharga, menjadi harta karun bagi dunia'
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
    en: 'Summer glory',
    ko: '여름의 영광',
    fr: 'Gloire d\'été',
    it: 'Gloria estiva',
    de: 'Sommerlicher Ruhm',
    pt: 'Glória de verão',
    es: 'Gloria de verano',
    ja: '夏の栄光',
    th: 'ความรุ่งโรจน์แห่งฤดูร้อน',
    id: 'Kejayaan musim panas'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '하',
        hanja: '夏',
        meaning: {
          en: 'summer',
          ko: '여름',
          fr: 'été',
          it: 'estate',
          de: 'Sommer',
          pt: 'verão',
          es: 'verano',
          ja: '夏',
          th: 'ฤดูร้อน',
          id: 'musim panas'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to live a glorious and prosperous life, full of the passion and vibrancy of summer',
      ko: '여름의 열정과 생동감 넘치는, 영광스럽고 번영하는 삶을 살기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne vive une vie glorieuse et prospère, pleine de la passion et de la vitalité de l\'été',
      it: 'Un nome che augura a una persona di vivere una vita gloriosa e prospera, piena della passione e della vitalità dell\'estate',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein ruhmreiches und erfolgreiches Leben führt, voller Leidenschaft und Lebendigkeit des Sommers',
      pt: 'Um nome que deseja que uma pessoa viva uma vida gloriosa e próspera, cheia da paixão e da vibração do verão',
      es: 'Un nombre que desea que una persona viva una vida gloriosa y próspera, llena de la pasión y la vitalidad del verano',
      ja: '夏の情熱と活気に満ちた、栄光ある繁栄した人生を送ることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีชีวิตที่รุ่งโรจน์และเจริญรุ่งเรือง เต็มไปด้วยความหลงใหลและความมีชีวิตชีวาของฤดูร้อน',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjalani kehidupan yang mulia dan makmur, penuh dengan semangat dan semaraknya musim panas'
    }
  }
}),
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
    en: 'An elegant, fateful connection',
    ko: '아리따운 인연',
    fr: 'Une connexion élégante et prédestinée',
    it: 'Una connessione elegante e fatale',
    de: 'Eine elegante, schicksalhafte Verbindung',
    pt: 'Uma conexão elegante e predestinada',
    es: 'Una conexión elegante y predestinada',
    ja: '優雅な縁',
    th: '연결ที่สง่างามและเป็นพรหมลิขิต',
    id: 'Hubungan takdir yang anggun'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '나',
        hanja: '娜',
        meaning: {
          en: 'elegant, graceful, beautiful',
          ko: '우아한, 아리따운, 아름다운',
          fr: 'élégant, gracieux, beau',
          it: 'elegante, grazioso, bello',
          de: 'elegant, anmutig, schön',
          pt: 'elegante, gracioso, belo',
          es: 'elegante, garboso, hermoso',
          ja: '優雅な、しなやかな、美しい',
          th: 'สง่างาม, อ่อนช้อย, สวยงาม',
          id: 'anggun, elok, cantik'
        }
      },
      {
        korean: '연',
        hanja: '緣',
        meaning: {
          en: 'connection, fate, destiny',
          ko: '인연, 운명',
          fr: 'connexion, destin, destinée',
          it: 'connessione, fato, destino',
          de: 'Verbindung, Schicksal',
          pt: 'conexão, destino',
          es: 'conexión, destino',
          ja: '縁、運命',
          th: 'ความผูกพัน, โชคชะตา, พรหมลิขิต',
          id: 'hubungan, takdir, nasib'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to form beautiful and elegant relationships, creating a precious destiny',
      ko: '아름답고 우아한 인연들을 만들어나가며 귀한 운명을 개척하기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne noue des relations belles et élégantes, se créant un destin précieux',
      it: 'Un nome che augura a una persona di formare relazioni belle ed eleganti, creando un destino prezioso',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person schöne und elegante Beziehungen knüpft und so ein kostbares Schicksal schafft',
      pt: 'Um nome que deseja que uma pessoa forme belas e elegantes relações, criando um destino precioso',
      es: 'Un nombre que desea que una persona forme relaciones hermosas y elegantes, creando un destino precioso',
      ja: '美しく優雅な縁を結び、貴重な運命を切り開くことを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลสร้างความสัมพันธ์ที่สวยงามและสง่างาม สร้างโชคชะตาอันล้ำค่า',
      id: 'Sebuah nama yang mengharapkan seseorang untuk membentuk hubungan yang indah dan anggun, menciptakan takdir yang berharga'
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
    en: 'A righteous, fateful connection',
    ko: '올바른 인연',
    fr: 'Une connexion juste et prédestinée',
    it: 'Una connessione giusta e fatale',
    de: 'Eine rechtschaffene, schicksalhafte Verbindung',
    pt: 'Uma conexão justa e predestinada',
    es: 'Una conexión justa y predestinada',
    ja: '正しい縁',
    th: '연결ที่ถูกต้องและเป็นพรหมลิขิต',
    id: 'Hubungan takdir yang benar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          fr: 'droit, correct, juste',
          it: 'giusto, corretto, appropriato',
          de: 'richtig, korrekt, ordnungsgemäß',
          pt: 'certo, correto, adequado',
          es: 'correcto, justo, debido',
          ja: '正しい、適切な、正確な',
          th: 'ถูกต้อง, เหมาะสม, แม่นยำ',
          id: 'benar, tepat, sesuai'
        }
      },
      {
        korean: '연',
        hanja: '緣',
        meaning: {
          en: 'connection, fate, destiny',
          ko: '인연, 운명',
          fr: 'connexion, destin, destinée',
          it: 'connessione, fato, destino',
          de: 'Verbindung, Schicksal',
          pt: 'conexão, destino',
          es: 'conexión, destino',
          ja: '縁、運命',
          th: 'ความผูกพัน, โชคชะตา, พรหมลิขิต',
          id: 'hubungan, takdir, nasib'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be guided by destiny to form upright and good relationships',
      ko: '운명에 따라 올바르고 좋은 인연들을 만나기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit guidée par le destin pour former des relations droites et bonnes',
      it: 'Un nome che augura a una persona di essere guidata dal destino per formare relazioni rette e buone',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person vom Schicksal geleitet wird, um aufrichtige und gute Beziehungen zu knüpfen',
      pt: 'Um nome que deseja que uma pessoa seja guiada pelo destino para formar relações retas e boas',
      es: 'Un nombre que desea que una persona sea guiada por el destino para formar relaciones rectas y buenas',
      ja: '運命に導かれて、正しく良い縁を結ぶことを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลถูกนำทางโดยโชคชะตาเพื่อสร้างความสัมพันธ์ที่ดีและถูกต้อง',
      id: 'Sebuah nama yang mengharapkan seseorang dibimbing oleh takdir untuk membentuk hubungan yang benar dan baik'
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
    en: 'That remarkable person',
    ko: '저 뛰어난 사람',
    fr: 'Cette personne remarquable',
    it: 'Quella persona notevole',
    de: 'Diese bemerkenswerte Person',
    pt: 'Aquela pessoa notável',
    es: 'Esa persona notable',
    ja: 'あの優れた人',
    th: 'บุคคลผู้โดดเด่นคนนั้น',
    id: 'Orang yang luar biasa itu'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '이',
        hanja: '伊',
        meaning: {
          en: 'that person, he/she',
          ko: '저 사람, 그/그녀',
          fr: 'cette personne, il/elle',
          it: 'quella persona, lui/lei',
          de: 'diese Person, er/sie',
          pt: 'aquela pessoa, ele/ela',
          es: 'esa persona, él/ella',
          ja: 'あの人、彼・彼女',
          th: 'คนนั้น, เขา/เธอ',
          id: 'orang itu, dia'
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person so talented and remarkable that they stand out and are pointed to by all',
      ko: '모두가 가리킬 만큼 뛰어나고 재능이 출중하여 돋보이는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui signifie qu\'une personne est si talentueuse et remarquable qu\'elle se distingue et est montrée du doigt par tous',
      it: 'Un nome che significa una persona così talentuosa e notevole da distinguersi ed essere indicata da tutti',
      de: 'Ein Name, der bedeutet, dass eine Person so talentiert und bemerkenswert ist, dass sie herausragt und von allen hervorgehoben wird',
      pt: 'Um nome que significa uma pessoa tão talentosa e notável que se destaca e é apontada por todos',
      es: 'Un nombre que significa que una persona es tan talentosa y notable que se destaca y es señalada por todos',
      ja: '誰もが指さすほど優れて才能があり、際立った存在になることを願う名前',
      th: 'ชื่อที่หมายถึงบุคคลที่มีความสามารถและโดดเด่นจนเป็นที่จับตามองของทุกคน',
      id: 'Sebuah nama yang menandakan seseorang yang begitu berbakat dan luar biasa sehingga mereka menonjol dan ditunjuk oleh semua orang'
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
    en: 'The primary source',
    ko: '으뜸가는 근원',
    fr: 'La source principale',
    it: 'La fonte primaria',
    de: 'Die primäre Quelle',
    pt: 'A fonte primária',
    es: 'La fuente principal',
    ja: '第一の源',
    th: 'แหล่งกำเนิดหลัก',
    id: 'Sumber utama'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '주',
        hanja: '主',
        meaning: {
          en: 'master, owner, main',
          ko: '주인, 소유자, 주요한',
          fr: 'maître, propriétaire, principal',
          it: 'padrone, proprietario, principale',
          de: 'Meister, Besitzer, Haupt-',
          pt: 'mestre, proprietário, principal',
          es: 'amo, dueño, principal',
          ja: '主人、所有者、主な',
          th: 'เจ้านาย, เจ้าของ, หลัก',
          id: 'tuan, pemilik, utama'
        }
      },
      {
        korean: '원',
        hanja: '源',
        meaning: {
          en: 'source, origin, root',
          ko: '근원, 기원, 뿌리',
          fr: 'source, origine, racine',
          it: 'fonte, origine, radice',
          de: 'Quelle, Ursprung, Wurzel',
          pt: 'fonte, origem, raiz',
          es: 'fuente, origen, raíz',
          ja: '源、起源、根源',
          th: 'แหล่งกำเนิด, ต้นกำเนิด, รากฐาน',
          id: 'sumber, asal, akar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will become a leader and a fundamental source of strength and wisdom for their community',
      ko: '공동체의 주인이자 힘과 지혜의 근원이 되는 지도자가 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui deviendra un leader et une source fondamentale de force et de sagesse pour sa communauté',
      it: 'Un nome per una persona che diventerà un leader e una fonte fondamentale di forza e saggezza per la propria comunità',
      de: 'Ein Name für eine Person, die zu einer Führungspersönlichkeit und einer grundlegenden Quelle der Stärke und Weisheit für ihre Gemeinschaft wird',
      pt: 'Um nome para uma pessoa que se tornará um líder e uma fonte fundamental de força e sabedoria para sua comunidade',
      es: 'Un nombre para una persona que se convertirá en un líder y una fuente fundamental de fuerza y sabiduría para su comunidad',
      ja: '共同体の主であり、力と知恵の根源となる指導者になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะเป็นผู้นำและเป็นแหล่งพลังและปัญญาพื้นฐานของชุมชน',
      id: 'Sebuah nama untuk seseorang yang akan menjadi pemimpin dan sumber kekuatan dan kebijaksanaan fundamental bagi komunitas mereka'
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
    en: 'Truth like a refreshing rain',
    ko: '세상을 씻어내는 진실의 비',
    fr: 'La vérité comme une pluie rafraîchissante',
    it: 'La verità come una pioggia rinfrescante',
    de: 'Wahrheit wie ein erfrischender Regen',
    pt: 'A verdade como uma chuva refrescante',
    es: 'La verdad como una lluvia refrescante',
    ja: '世界を洗い流す真実の雨',
    th: 'ความจริงดุจสายฝนอันสดชื่น',
    id: 'Kebenaran seperti hujan yang menyegarkan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '우',
        hanja: '雨',
        meaning: {
          en: 'rain',
          ko: '비',
          fr: 'pluie',
          it: 'pioggia',
          de: 'Regen',
          pt: 'chuva',
          es: 'lluvia',
          ja: '雨',
          th: 'ฝน',
          id: 'hujan'
        }
      },
      {
        korean: '진',
        hanja: '眞',
        meaning: {
          en: 'true, real, genuine',
          ko: '참된, 진실한',
          fr: 'vrai, réel, authentique',
          it: 'vero, reale, genuino',
          de: 'wahr, echt, aufrichtig',
          pt: 'verdadeiro, real, genuíno',
          es: 'verdadero, real, genuino',
          ja: '真の、真実の',
          th: 'แท้จริง, จริงใจ',
          id: 'benar, nyata, asli'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to bring clarity and truth to the world, washing away falsehoods like a cleansing rain',
      ko: '정화하는 비처럼 거짓을 씻어내고 세상에 명료함과 진실을 가져오는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne apporte clarté et vérité au monde, balayant les mensonges comme une pluie purificatrice',
      it: 'Un nome che augura a una persona di portare chiarezza e verità nel mondo, spazzando via le falsità come una pioggia purificatrice',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person der Welt Klarheit und Wahrheit bringt und Unwahrheiten wie ein reinigender Regen wegwäscht',
      pt: 'Um nome que deseja que uma pessoa traga clareza e verdade ao mundo, lavando as falsidades como uma chuva purificadora',
      es: 'Un nombre que desea que una persona traiga claridad y verdad al mundo, barriendo las falsedades como una lluvia purificadora',
      ja: '浄化の雨のように偽りを洗い流し、世界に明瞭さと真実をもたらす人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลนำความกระจ่างและความจริงมาสู่โลก ชะล้างความเท็จเหมือนสายฝนที่ชำระล้าง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk membawa kejelasan dan kebenaran kepada dunia, menghapus kebohongan seperti hujan yang membersihkan'
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
    ko: '예의 바르고 재능이 뛰어난',
    fr: 'Poli et talentueux',
    it: 'Educato e talentuoso',
    de: 'Höflich und talentiert',
    pt: 'Educado e talentoso',
    es: 'Educado y talentoso',
    ja: '礼儀正しく才能豊かな',
    th: 'สุภาพและมีพรสวรรค์',
    id: 'Sopan dan berbakat'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '禮',
        meaning: {
          en: 'politeness, etiquette, ceremony',
          ko: '예의, 예절, 의례',
          fr: 'politesse, étiquette, cérémonie',
          it: 'educazione, etichetta, cerimonia',
          de: 'Höflichkeit, Etikette, Zeremonie',
          pt: 'polidez, etiqueta, cerimônia',
          es: 'cortesía, etiqueta, ceremonia',
          ja: '礼儀、作法、儀式',
          th: 'ความสุภาพ, มารยาท, พิธี',
          id: 'kesopanan, etiket, upacara'
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who is respected for both their remarkable talents and their courteous, upright character',
      ko: '뛰어난 재능과 예의 바른 성품을 겸비하여 모든 이에게 존경받는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne respectée à la fois pour ses talents remarquables et son caractère courtois et droit',
      it: 'Un nome per una persona rispettata sia per i suoi notevoli talenti che per il suo carattere cortese e retto',
      de: 'Ein Name für eine Person, die sowohl für ihre bemerkenswerten Talente als auch für ihren höflichen, aufrechten Charakter respektiert wird',
      pt: 'Um nome para uma pessoa que é respeitada tanto por seus talentos notáveis quanto por seu caráter cortês e íntegro',
      es: 'Un nombre para una persona que es respetada tanto por sus notables talentos como por su carácter cortés y recto',
      ja: '優れた才能と礼儀正しい人格を兼ね備え、誰からも尊敬される人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่ได้รับการยอมรับนับถือทั้งในด้านความสามารถที่โดดเด่นและอุปนิสัยที่สุภาพและเที่ยงตรง',
      id: 'Sebuah nama untuk seseorang yang dihormati karena bakatnya yang luar biasa dan karakternya yang sopan dan lurus'
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
    en: 'A sacred sage',
    ko: '성스러운 현자',
    fr: 'Un sage sacré',
    it: 'Un saggio sacro',
    de: 'Ein heiliger Weiser',
    pt: 'Um sábio sagrado',
    es: 'Un sabio sagrado',
    ja: '聖なる賢者',
    th: 'นักปราชญ์ผู้ศักดิ์สิทธิ์',
    id: 'Orang bijak yang suci'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '성',
        hanja: '聖',
        meaning: {
          en: 'holy, sacred, saint',
          ko: '거룩한, 신성한, 성인',
          fr: 'saint, sacré',
          it: 'santo, sacro',
          de: 'heilig',
          pt: 'santo, sagrado',
          es: 'santo, sagrado',
          ja: '聖なる、神聖な',
          th: 'ศักดิ์สิทธิ์, นักบุญ',
          id: 'suci, keramat, orang suci'
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise person (sage)',
          ko: '어진, 현명한 사람(현자)',
          fr: 'vertueux, digne, sage (personne)',
          it: 'virtuoso, degno, saggio (persona)',
          de: 'tugendhaft, würdig, weise Person (Weiser)',
          pt: 'virtuoso, digno, sábio (pessoa)',
          es: 'virtuoso, digno, sabio (persona)',
          ja: '賢い、徳のある人（賢者）',
          th: 'มีคุณธรรม, คู่ควร, ผู้มีปัญญา (นักปราชญ์)',
          id: 'berbudi luhur, layak, orang bijak (sage)'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to attain the highest level of wisdom and virtue, becoming a respected sage',
      ko: '가장 높은 경지의 지혜와 덕을 쌓아 존경받는 성인군자와 같은 현자가 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne atteigne le plus haut niveau de sagesse et de vertu, devenant un sage respecté',
      it: 'Un nome che augura a una persona di raggiungere il più alto livello di saggezza e virtù, diventando un saggio rispettato',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person das höchste Maß an Weisheit und Tugend erlangt und zu einem angesehenen Weisen wird',
      pt: 'Um nome que deseja que uma pessoa alcance o mais alto nível de sabedoria e virtude, tornando-se um sábio respeitado',
      es: 'Un nombre que desea que una persona alcance el más alto nivel de sabiduría y virtud, convirtiéndose en un sabio respetado',
      ja: '最高の知恵と徳を積み、尊敬される聖人賢者になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลบรรลุถึงระดับสูงสุดของปัญญาและคุณธรรม กลายเป็นนักปราชญ์ที่น่าเคารพ',
      id: 'Sebuah nama yang mengharapkan seseorang untuk mencapai tingkat kebijaksanaan dan kebajikan tertinggi, menjadi orang bijak yang dihormati'
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
    en: 'Glorious talent',
    ko: '영광스러운 재능',
    fr: 'Talent glorieux',
    it: 'Talento glorioso',
    de: 'Ruhmreiches Talent',
    pt: 'Talento glorioso',
    es: 'Talento glorioso',
    ja: '栄光ある才能',
    th: 'พรสวรรค์อันรุ่งโรจน์',
    id: 'Bakat yang mulia'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to use their outstanding talents to achieve great honor and prosperity',
      ko: '자신의 뛰어난 재능을 사용하여 위대한 명예와 번영을 이루기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne utilise ses talents exceptionnels pour atteindre un grand honneur et une grande prospérité',
      it: 'Un nome che augura a una persona di usare i suoi eccezionali talenti per raggiungere grande onore e prosperità',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ihre herausragenden Talente einsetzt, um große Ehre und Wohlstand zu erlangen',
      pt: 'Um nome que deseja que uma pessoa use seus talentos excepcionais para alcançar grande honra e prosperidade',
      es: 'Un nombre que desea que una persona utilice sus talentos excepcionales para alcanzar un gran honor y prosperidad',
      ja: 'その卓越した才能を用いて、大いなる名誉と繁栄を達成することを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลใช้ความสามารถที่โดดเด่นของตนเพื่อบรรลุเกียรติยศและความเจริญรุ่งเรืองอันยิ่งใหญ่',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menggunakan bakat luar biasa mereka untuk mencapai kehormatan dan kemakmuran yang besar'
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
    en: 'Enriched with excellence',
    ko: '뛰어남으로 윤택해진',
    fr: 'Enrichi d\'excellence',
    it: 'Arricchito di eccellenza',
    de: 'Mit Exzellenz bereichert',
    pt: 'Enriquecido com excelência',
    es: 'Enriquecido con excelencia',
    ja: '卓越して潤いのある',
    th: 'เปี่ยมด้วยความเป็นเลิศ',
    id: 'Diperkaya dengan keunggulan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to enrich, moisten, benefit',
          ko: '윤택하게 하다, 적시다, 이롭게 하다',
          fr: 'enrichir, humecter, bénéficier',
          it: 'arricchire, inumidire, beneficiare',
          de: 'bereichern, befeuchten, zugutekommen',
          pt: 'enriquecer, umedecer, beneficiar',
          es: 'enriquecer, humedecer, beneficiar',
          ja: '潤す、豊かにする、恩恵を与える',
          th: 'ทำให้สมบูรณ์, ทำให้ชุ่มชื้น, เป็นประโยชน์',
          id: 'memperkaya, melembabkan, memberi manfaat'
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have an abundant and beautiful life, enriched by their own outstanding qualities',
      ko: '자신의 뛰어난 자질로 윤택하고 아름다운 삶을 살아가기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait une vie abondante et belle, enrichie par ses propres qualités exceptionnelles',
      it: 'Un nome che augura a una persona di avere una vita abbondante e bella, arricchita dalle proprie eccezionali qualità',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein reiches und schönes Leben führt, bereichert durch ihre eigenen herausragenden Qualitäten',
      pt: 'Um nome que deseja que uma pessoa tenha uma vida abundante e bela, enriquecida por suas próprias qualidades excepcionais',
      es: 'Un nombre que desea que una persona tenga una vida abundante y hermosa, enriquecida por sus propias cualidades excepcionales',
      ja: '自らの優れた資質によって、豊かで美しい人生を送ることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีชีวิตที่อุดมสมบูรณ์และสวยงามด้วยคุณสมบัติที่โดดเด่นของตนเอง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki kehidupan yang berkelimpahan dan indah, diperkaya oleh kualitas luar biasa mereka sendiri'
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
    en: 'A helpful and excellent friend',
    ko: '서로 돕는 뛰어난 친구',
    fr: 'Un ami serviable et excellent',
    it: 'Un amico disponibile ed eccellente',
    de: 'Ein hilfsbereiter und ausgezeichneter Freund',
    pt: 'Um amigo prestativo e excelente',
    es: 'Un amigo servicial y excelente',
    ja: '互いに助け合う優れた友人',
    th: 'เพื่อนผู้ยอดเยี่ยมและช่วยเหลือซึ่งกันและกัน',
    id: 'Teman yang suka menolong dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '상',
        hanja: '相',
        meaning: {
          en: 'mutual, reciprocal, to help',
          ko: '상호, 서로, 돕다',
          fr: 'mutuel, réciproque, aider',
          it: 'reciproco, aiutare',
          de: 'gegenseitig, helfen',
          pt: 'mútuo, recíproco, ajudar',
          es: 'mutuo, recíproco, ayudar',
          ja: '相互、互いに、助ける',
          th: 'ซึ่งกันและกัน, ช่วยเหลือ',
          id: 'saling, timbal balik, membantu'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will be an outstanding and gentle individual, helping others and excelling together',
      ko: '타인을 돕고 함께 성장하며, 부드럽고 뛰어난 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui sera un individu exceptionnel et doux, aidant les autres et excellant ensemble',
      it: 'Un nome per una persona che sarà un individuo eccezionale e gentile, aiutando gli altri ed eccellendo insieme',
      de: 'Ein Name für eine Person, die eine herausragende und sanfte Persönlichkeit sein wird, die anderen hilft und gemeinsam hervorragende Leistungen erbringt',
      pt: 'Um nome para uma pessoa que será um indivíduo excepcional e gentil, ajudando os outros e se destacando juntos',
      es: 'Un nombre para una persona que será un individuo excepcional y gentil, que ayudará a los demás y sobresaldrá junto a ellos',
      ja: '他人を助け、共に成長し、優しく優れた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะเป็นผู้ที่โดดเด่นและอ่อนโยน ช่วยเหลือผู้อื่นและเก่งไปด้วยกัน',
      id: 'Sebuah nama untuk seseorang yang akan menjadi individu yang luar biasa dan lembut, membantu orang lain dan unggul bersama'
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
    en: 'Precious and excellent',
    ko: '귀하고 뛰어난',
    fr: 'Précieux et excellent',
    it: 'Prezioso ed eccellente',
    de: 'Kostbar und ausgezeichnet',
    pt: 'Precioso e excelente',
    es: 'Precioso y excelente',
    ja: '貴重で優れた',
    th: 'ล้ำค่าและยอดเยี่ยม',
    id: 'Berharga dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a rare treasure with gentle and outstanding abilities',
      ko: '부드럽고 뛰어난 능력을 지닌, 세상에 둘도 없는 귀한 보물 같은 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un trésor rare doté de capacités douces et exceptionnelles',
      it: 'Un nome che augura a una persona di essere un tesoro raro con abilità gentili ed eccezionali',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein seltener Schatz mit sanften und herausragenden Fähigkeiten wird',
      pt: 'Um nome que deseja que uma pessoa seja um tesouro raro com habilidades gentis e excepcionais',
      es: 'Un nombre que desea que una persona sea un tesoro raro con habilidades gentiles y excepcionales',
      ja: '優しく優れた能力を持つ、世にも稀な宝物のような人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นสมบัติล้ำค่าที่หาได้ยาก พร้อมด้วยความสามารถที่อ่อนโยนและโดดเด่น',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi harta karun langka dengan kemampuan yang lembut dan luar biasa'
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
    en: 'A sacred treasure',
    ko: '성스러운 보물',
    fr: 'Un trésor sacré',
    it: 'Un tesoro sacro',
    de: 'Ein heiliger Schatz',
    pt: 'Um tesouro sagrado',
    es: 'Un tesoro sagrado',
    ja: '聖なる宝物',
    th: 'สมบัติอันศักดิ์สิทธิ์',
    id: 'Harta karun yang suci'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '성',
        hanja: '聖',
        meaning: {
          en: 'holy, sacred, saint',
          ko: '거룩한, 신성한, 성인',
          fr: 'saint, sacré',
          it: 'santo, sacro',
          de: 'heilig',
          pt: 'santo, sagrado',
          es: 'santo, sagrado',
          ja: '聖なる、神聖な',
          th: 'ศักดิ์สิทธิ์, นักบุญ',
          id: 'suci, keramat, orang suci'
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a rare and precious being with a sacred and noble character',
      ko: '성스럽고 고귀한 품성을 지닌, 귀하고 소중한 존재가 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un être rare et précieux doté d\'un caractère sacré et noble',
      it: 'Un nome che augura a una persona di essere un essere raro e prezioso con un carattere sacro e nobile',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein seltenes und kostbares Wesen mit einem heiligen und edlen Charakter wird',
      pt: 'Um nome que deseja que uma pessoa seja um ser raro e precioso com um caráter sagrado e nobre',
      es: 'Un nombre que desea que una persona sea un ser raro y precioso con un carácter sagrado y noble',
      ja: '神聖で高貴な品格を持つ、貴重で大切な存在になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ที่หายากและล้ำค่า พร้อมด้วยอุปนิสัยอันศักดิ์สิทธิ์และสูงส่ง',
      id: 'Sebuah nama yang mengharapkan seseorang menjadi makhluk yang langka dan berharga dengan karakter yang suci dan mulia'
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
    en: 'An auspicious talent',
    ko: '상서로운 인재',
    fr: 'Un talent de bon augure',
    it: 'Un talento di buon auspicio',
    de: 'Ein glückverheißendes Talent',
    pt: 'Um talento auspicioso',
    es: 'Un talento auspicioso',
    ja: '縁起の良い才能',
    th: 'ผู้มีพรสวรรค์อันเป็นมงคล',
    id: 'Bakat yang membawa pertanda baik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      },
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a remarkable individual whose talents bring good fortune and auspicious events',
      ko: '자신의 뛰어난 재능으로 좋은 운과 상서로운 일들을 가져오는 인물이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un individu remarquable dont les talents apportent la bonne fortune et des événements auspicieux',
      it: 'Un nome che augura a una persona di essere un individuo notevole i cui talenti portano fortuna ed eventi di buon auspicio',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine bemerkenswerte Persönlichkeit wird, deren Talente Glück und glückverheißende Ereignisse bringen',
      pt: 'Um nome que deseja que uma pessoa seja um indivíduo notável cujos talentos trazem boa sorte e eventos auspiciosos',
      es: 'Un nombre que desea que una person sea un individuo notable cuyos talentos traigan buena fortuna y eventos auspiciosos',
      ja: 'その優れた才能で幸運と縁起の良い出来事をもたらす人物になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ที่โดดเด่นซึ่งความสามารถของเขานำมาซึ่งความโชคดีและเหตุการณ์ที่เป็นมงคล',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang luar biasa yang bakatnya membawa nasib baik dan peristiwa yang menguntungkan'
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
    en: 'Clever and talented',
    ko: '영리하고 재능있는',
    fr: 'Intelligent et talentueux',
    it: 'Intelligente e di talento',
    de: 'Klug und talentiert',
    pt: 'Inteligente e talentoso',
    es: 'Inteligente y talentoso',
    ja: '賢くて才能がある',
    th: 'ฉลาดและมีพรสวรรค์',
    id: 'Cerdas dan berbakat'
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
    en: 'Vast and abundant',
    ko: '넓고 풍요로운',
    fr: 'Vaste et abondant',
    it: 'Vasto e abbondante',
    de: 'Weit und reichlich',
    pt: 'Vasto e abundante',
    es: 'Vasto y abundante',
    ja: '広大で豊かな',
    th: 'กว้างใหญ่และอุดมสมบูรณ์',
    id: 'Luas dan berkelimpahan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to enrich, moisten, benefit',
          ko: '윤택하게 하다, 적시다, 이롭게 하다',
          fr: 'enrichir, humecter, bénéficier',
          it: 'arricchire, inumidire, beneficiare',
          de: 'bereichern, befeuchten, zugutekommen',
          pt: 'enriquecer, umedecer, beneficiar',
          es: 'enriquecer, humedecer, beneficiar',
          ja: '潤す、豊かにする、恩恵を与える',
          th: 'ทำให้สมบูรณ์, ทำให้ชุ่มชื้น, เป็นประโยชน์',
          id: 'memperkaya, melembabkan, memberi manfaat'
        }
      },
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast, grand',
          ko: '큰, 넓은, 웅장한',
          fr: 'grand, vaste, magnifique',
          it: 'grande, vasto, magnifico',
          de: 'groß, weit, prächtig',
          pt: 'grande, vasto, grandioso',
          es: 'grande, vasto, grandioso',
          ja: '大きい、広大な、雄大な',
          th: 'ยิ่งใหญ่, กว้างใหญ่, โอ่อ่า',
          id: 'besar, luas, agung'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a great, open heart and an abundant, prosperous life',
      ko: '호수처럼 넓고 큰 마음을 갖고, 풍요롭고 윤택한 삶을 살기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait un grand cœur ouvert et une vie abondante et prospère',
      it: 'Un nome che augura a una persona di avere un grande cuore aperto e una vita abbondante e prospera',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein großes, offenes Herz und ein reiches, erfolgreiches Leben hat',
      pt: 'Um nome que deseja que uma pessoa tenha um grande coração aberto e uma vida abundante e próspera',
      es: 'Un nombre que desea que una persona tenga un gran corazón abierto y una vida abundante y próspera',
      ja: '湖のように広く大きな心を持ち、豊かで潤いのある人生を送ることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีหัวใจที่ยิ่งใหญ่และเปิดกว้าง และมีชีวิตที่อุดมสมบูรณ์และเจริญรุ่งเรือง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki hati yang besar dan terbuka serta kehidupan yang berkelimpahan dan makmur'
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
    en: 'A helpful and clever friend',
    ko: '서로 돕는 영리한 친구',
    fr: 'Un ami serviable et intelligent',
    it: 'Un amico disponibile e intelligente',
    de: 'Ein hilfsbereiter und kluger Freund',
    pt: 'Um amigo prestativo e inteligente',
    es: 'Un amigo servicial e inteligente',
    ja: '互いに助け合う賢い友人',
    th: 'เพื่อนผู้เฉลียวฉลาดและช่วยเหลือซึ่งกันและกัน',
    id: 'Teman yang suka menolong dan pintar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '상',
        hanja: '相',
        meaning: {
          en: 'mutual, reciprocal, to help',
          ko: '상호, 서로, 돕다',
          fr: 'mutuel, réciproque, aider',
          it: 'reciproco, aiutare',
          de: 'gegenseitig, helfen',
          pt: 'mútuo, recíproco, ajudar',
          es: 'mutuo, recíproco, ayudar',
          ja: '相互、互いに、助ける',
          th: 'ซึ่งกันและกัน, ช่วยเหลือ',
          id: 'saling, timbal balik, membantu'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who uses their cleverness to help others and build strong, cooperative relationships',
      ko: '자신의 영리함을 사용하여 다른 사람을 돕고, 굳건하고 협력적인 관계를 구축하는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui utilise son intelligence pour aider les autres et construire des relations solides et coopératives',
      it: 'Un nome per una persona che usa la sua intelligenza per aiutare gli altri e costruire relazioni forti e collaborative',
      de: 'Ein Name für eine Person, die ihre Klugheit einsetzt, um anderen zu helfen und starke, kooperative Beziehungen aufzubauen',
      pt: 'Um nome para uma pessoa que usa sua inteligência para ajudar os outros e construir relacionamentos fortes e cooperativos',
      es: 'Un nombre para una persona que utiliza su inteligencia para ayudar a los demás y construir relaciones sólidas y cooperativas',
      ja: 'その賢さを使って他人を助け、強固で協力的な関係を築く人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่ใช้ความเฉลียวฉลาดของตนเพื่อช่วยเหลือผู้อื่นและสร้างความสัมพันธ์ที่แข็งแกร่งและร่วมมือกัน',
      id: 'Sebuah nama untuk seseorang yang menggunakan kepintarannya untuk membantu orang lain dan membangun hubungan yang kuat dan kooperatif'
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
    en: 'Sacred excellence',
    ko: '성스러운 빼어남',
    fr: 'Excellence sacrée',
    it: 'Eccellenza sacra',
    de: 'Heilige Exzellenz',
    pt: 'Excelência sagrada',
    es: 'Excelencia sagrada',
    ja: '聖なる卓越',
    th: 'ความเป็นเลิศอันศักดิ์สิทธิ์',
    id: 'Keunggulan yang suci'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '성',
        hanja: '聖',
        meaning: {
          en: 'holy, sacred, saint',
          ko: '거룩한, 신성한, 성인',
          fr: 'saint, sacré',
          it: 'santo, sacro',
          de: 'heilig',
          pt: 'santo, sagrado',
          es: 'santo, sagrado',
          ja: '聖なる、神聖な',
          th: 'ศักดิ์สิทธิ์, นักบุญ',
          id: 'suci, keramat, orang suci'
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a noble character and an excellence that is almost sacred in its beauty',
      ko: '성스러울 정도로 아름다운 빼어남과 고귀한 품성을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède un caractère noble et une excellence d\'une beauté presque sacrée',
      it: 'Un nome per una persona che possiede un carattere nobile e un\'eccellenza che è quasi sacra nella sua bellezza',
      de: 'Ein Name für eine Person, die einen edlen Charakter und eine Exzellenz besitzt, die in ihrer Schönheit fast heilig ist',
      pt: 'Um nome para uma pessoa que possui um caráter nobre e uma excelência que é quase sagrada em sua beleza',
      es: 'Un nombre para una persona que posee un carácter noble y una excelencia que es casi sagrada en su belleza',
      ja: 'その美しさがほとんど神聖であるほどの卓越性と高貴な人格を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีอุปนิสัยสูงส่งและความเป็นเลิศที่งดงามจนเกือบจะศักดิ์สิทธิ์',
      id: 'Sebuah nama untuk seseorang yang memiliki karakter mulia dan keunggulan yang hampir suci dalam keindahannya'
    }
  }
}),
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
    en: 'A clever victory',
    ko: '영리한 승리',
    fr: 'Une victoire intelligente',
    it: 'Una vittoria intelligente',
    de: 'Ein kluger Sieg',
    pt: 'Uma vitória inteligente',
    es: 'Una victoria inteligente',
    ja: '賢い勝利',
    th: 'ชัยชนะอันชาญฉลาด',
    id: 'Kemenangan yang cerdas'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '승',
        hanja: '勝',
        meaning: {
          en: 'victory, win, superior',
          ko: '승리, 이기다, 뛰어나다',
          fr: 'victoire, gagner, supérieur',
          it: 'vittoria, vincere, superiore',
          de: 'Sieg, gewinnen, überlegen',
          pt: 'vitória, vencer, superior',
          es: 'victoria, ganar, superior',
          ja: '勝利、勝つ、優れる',
          th: 'ชัยชนะ, ชนะ, เหนือกว่า',
          id: 'kemenangan, menang, unggul'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to achieve victory through cleverness and quick, agile thinking',
      ko: '영리하고 민첩한 사고를 통해 승리를 쟁취하는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne remporte la victoire grâce à son intelligence et à sa pensée rapide et agile',
      it: 'Un nome che augura a una persona di ottenere la vittoria attraverso l\'intelligenza e un pensiero rapido e agile',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person durch Klugheit und schnelles, agiles Denken den Sieg erringt',
      pt: 'Um nome que deseja que uma pessoa alcance a vitória através da inteligência e do pensamento rápido e ágil',
      es: 'Un nombre que desea que una persona logre la victoria a través de la inteligencia y un pensamiento rápido y ágil',
      ja: '賢さと素早い思考を通じて勝利を収める人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลได้รับชัยชนะผ่านความเฉลียวฉลาดและการคิดที่รวดเร็วและว่องไว',
      id: 'Sebuah nama yang mengharapkan seseorang untuk meraih kemenangan melalui kecerdasan dan pemikiran yang cepat dan tangkas'
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
    en: 'A virtuous treasure',
    ko: '어진 보물',
    fr: 'Un trésor vertueux',
    it: 'Un tesoro virtuoso',
    de: 'Ein tugendhafter Schatz',
    pt: 'Um tesouro virtuoso',
    es: 'Un tesoro virtuoso',
    ja: '賢い宝物',
    th: 'สมบัติอันทรงคุณธรรม',
    id: 'Harta karun yang berbudi luhur'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who is as precious as a rare gem and possesses a wise and virtuous character',
      ko: '귀한 보석처럼 소중하고, 현명하고 어진 성품을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui est aussi précieuse qu\'une gemme rare et possède un caractère sage et vertueux',
      it: 'Un nome per una persona che è preziosa come una gemma rara e possiede un carattere saggio e virtuoso',
      de: 'Ein Name für eine Person, die so kostbar ist wie ein seltener Edelstein und einen weisen und tugendhaften Charakter besitzt',
      pt: 'Um nome para uma pessoa que é tão preciosa como uma joia rara e possui um caráter sábio e virtuoso',
      es: 'Un nombre para una persona que es tan preciosa como una gema rara y posee un carácter sabio y virtuoso',
      ja: '希少な宝石のように貴重で、賢明で徳のある人格を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้ล้ำค่าดั่งอัญมณีหายากและมีอุปนิสัยที่ฉลาดและมีคุณธรรม',
      id: 'Sebuah nama untuk seseorang yang berharga seperti permata langka dan memiliki karakter yang bijaksana dan berbudi luhur'
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
    en: 'A great leader of a nation',
    ko: '나라의 큰 인물',
    fr: 'Un grand leader d\'une nation',
    it: 'Un grande leader di una nazione',
    de: 'Ein großer Führer einer Nation',
    pt: 'Um grande líder de uma nação',
    es: 'Un gran líder de una nación',
    ja: '国の大物',
    th: 'ผู้นำที่ยิ่งใหญ่ของชาติ',
    id: 'Seorang pemimpin besar bangsa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '한',
        hanja: '韓',
        meaning: {
          en: 'Korea; a leader, a fence',
          ko: '한국; 우두머리, 울타리',
          fr: 'Corée ; un leader, une clôture',
          it: 'Corea; un leader, una recinzione',
          de: 'Korea; ein Anführer, ein Zaun',
          pt: 'Coreia; um líder, uma cerca',
          es: 'Corea; un líder, una valla',
          ja: '韓国; 指導者、垣根',
          th: 'เกาหลี; ผู้นำ, รั้ว',
          id: 'Korea; seorang pemimpin, sebuah pagar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to become a great leader who protects their people like a sturdy fence, representing the nation',
      ko: '나라를 대표하여 튼튼한 울타리처럼 국민을 보호하는 위대한 지도자가 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne devienne un grand leader qui protège son peuple comme une clôture solide, représentant la nation',
      it: 'Un nome che augura a una persona di diventare un grande leader che protegge il suo popolo come una solida recinzione, rappresentando la nazione',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person zu einem großen Führer wird, der sein Volk wie ein stabiler Zaun schützt und die Nation repräsentiert',
      pt: 'Um nome que deseja que uma pessoa se torne um grande líder que protege seu povo como uma cerca resistente, representando a nação',
      es: 'Un nombre que desea que una persona se convierta en un gran líder que proteja a su pueblo como una valla resistente, representando a la nación',
      ja: '国を代表し、頑丈な垣根のように人々を守る偉大な指導者になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลกลายเป็นผู้นำที่ยิ่งใหญ่ผู้ปกป้องประชาชนของตนเหมือนรั้วที่แข็งแรง เป็นตัวแทนของชาติ',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi pemimpin besar yang melindungi rakyatnya seperti pagar yang kokoh, mewakili bangsa'
    }
  },
  kpopMember: { group: 'Stray Kids', memberName: 'Han' }
}),
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
    en: 'That auspicious person',
    ko: '저 상서로운 사람',
    fr: 'Cette personne de bon augure',
    it: 'Quella persona di buon auspicio',
    de: 'Diese glückverheißende Person',
    pt: 'Aquela pessoa auspiciosa',
    es: 'Esa persona auspiciosa',
    ja: 'あの縁起の良い人',
    th: 'บุคคลผู้เป็นมงคลคนนั้น',
    id: 'Orang yang membawa pertanda baik itu'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '이',
        hanja: '伊',
        meaning: {
          en: 'that person, he/she',
          ko: '저 사람, 그/그녀',
          fr: 'cette personne, il/elle',
          it: 'quella persona, lui/lei',
          de: 'diese Person, er/sie',
          pt: 'aquela pessoa, ele/ela',
          es: 'esa persona, él/ella',
          ja: 'あの人、彼・彼女',
          th: 'คนนั้น, เขา/เธอ',
          id: 'orang itu, dia'
        }
      },
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a special, noticeable individual who brings good fortune to everyone',
      ko: '모두에게 행운을 가져다주는, 눈에 띄는 특별하고 상서로운 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un individu spécial et remarquable qui porte bonheur à tout le monde',
      it: 'Un nome che augura a una persona di essere un individuo speciale e notevole che porta fortuna a tutti',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine besondere, auffällige Persönlichkeit wird, die allen Glück bringt',
      pt: 'Um nome que deseja que uma pessoa seja um indivíduo especial e notável que traz boa sorte a todos',
      es: 'Un nombre que desea que una persona sea un individuo especial y notable que traiga buena fortuna a todos',
      ja: 'すべての人に幸運をもたらす、際立って特別で縁起の良い人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ที่พิเศษและโดดเด่นซึ่งนำความโชคดีมาสู่ทุกคน',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang istimewa dan menonjol yang membawa keberuntungan bagi semua orang'
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
    en: 'Outstanding elegance',
    ko: '빼어난 우아함',
    fr: 'Élégance exceptionnelle',
    it: 'Eleganza eccezionale',
    de: 'Herausragende Eleganz',
    pt: 'Elegância excepcional',
    es: 'Elegancia excepcional',
    ja: '秀でた優雅さ',
    th: 'ความสง่างามอันโดดเด่น',
    id: 'Keanggunan yang luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      },
      {
        korean: '아',
        hanja: '雅',
        meaning: {
          en: 'elegant, graceful, refined',
          ko: '우아한, 고상한, 세련된',
          fr: 'élégant, gracieux, raffiné',
          it: 'elegante, grazioso, raffinato',
          de: 'elegant, anmutig, raffiniert',
          pt: 'elegante, gracioso, refinado',
          es: 'elegante, garboso, refinado',
          ja: '優雅な、上品な、洗練された',
          th: 'สง่างาม, นุ่มนวล, ประณีต',
          id: 'anggun, elok, halus'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name representing someone who embodies both natural beauty and cultivated, outstanding elegance',
      ko: '타고난 아름다움과 갈고닦은 빼어난 우아함을 모두 갖춘 사람이 되기를 바라는 이름',
      fr: 'Un nom représentant quelqu\'un qui incarne à la fois la beauté naturelle et une élégance cultivée et exceptionnelle',
      it: 'Un nome che rappresenta una persona che incarna sia la bellezza naturale che un\'eleganza coltivata ed eccezionale',
      de: 'Ein Name, der jemanden repräsentiert, der sowohl natürliche Schönheit als auch kultivierte, herausragende Eleganz verkörpert',
      pt: 'Um nome que representa alguém que personifica tanto a beleza natural quanto uma elegância cultivada e excepcional',
      es: 'Un nombre que representa a alguien que encarna tanto la belleza natural como una elegancia cultivada y excepcional',
      ja: '生まれ持った美しさと磨き上げられた卓越した優雅さを兼ね備えた人になることを願う名前',
      th: 'ชื่อที่เป็นตัวแทนของผู้ที่รวบรวมทั้งความงามตามธรรมชาติและความสง่างามที่โดดเด่นและผ่านการฝึกฝน',
      id: 'Sebuah nama yang mewakili seseorang yang mewujudkan keindahan alami dan keanggunan yang luar biasa dan terasah'
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
    en: 'Gentle harmony',
    ko: '부드러운 조화',
    fr: 'Harmonie douce',
    it: 'Armonia gentile',
    de: 'Sanfte Harmonie',
    pt: 'Harmonia gentil',
    es: 'Armonía suave',
    ja: '穏やかな調和',
    th: 'ความสามัคคีอันอ่อนโยน',
    id: 'Harmoni yang lembut'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '소',
        hanja: '小',
        meaning: {
          en: 'small, little',
          ko: '작은',
          fr: 'petit',
          it: 'piccolo',
          de: 'klein',
          pt: 'pequeno',
          es: 'pequeño',
          ja: '小さい',
          th: 'เล็ก',
          id: 'kecil'
        }
      },
      {
        korean: '율',
        hanja: '律',
        meaning: {
          en: 'rhythm, law, rule',
          ko: '운율, 법, 규칙',
          fr: 'rythme, loi, règle',
          it: 'ritmo, legge, regola',
          de: 'Rhythmus, Gesetz, Regel',
          pt: 'ritmo, lei, regra',
          es: 'ritmo, ley, regla',
          ja: '律、法則、規則',
          th: 'จังหวะ, กฎ, ระเบียบ',
          id: 'ritme, hukum, aturan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for someone who brings subtle but important order and gentle rhythm to the world around them',
      ko: '주변 세상에 미묘하지만 중요하고 부드러운 질서와 리듬을 가져다주는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour quelqu\'un qui apporte un ordre subtil mais important et un rythme doux au monde qui l\'entoure',
      it: 'Un nome per qualcuno che porta un ordine sottile ma importante e un ritmo gentile al mondo che la circonda',
      de: 'Ein Name für jemanden, der eine subtile, aber wichtige Ordnung und einen sanften Rhythmus in die Welt um sich herum bringt',
      pt: 'Um nome para alguém que traz uma ordem sutil, mas importante, e um ritmo gentil ao mundo ao seu redor',
      es: 'Un nombre para alguien que aporta un orden sutil pero importante y un ritmo suave al mundo que le rodea',
      ja: '周囲の世界に微妙だが重要で穏やかな秩序とリズムをもたらす人になることを願う名前',
      th: 'ชื่อสำหรับผู้ที่นำระเบียบที่ละเอียดอ่อนแต่สำคัญและจังหวะที่อ่อนโยนมาสู่โลกรอบตัว',
      id: 'Sebuah nama untuk seseorang yang membawa keteraturan yang halus namun penting dan ritme yang lembut ke dunia di sekitar mereka'
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
    en: 'Auspicious and elegant',
    ko: '상서롭고 우아한',
    fr: 'De bon augure et élégante',
    it: 'Di buon auspicio ed elegante',
    de: 'Glückverheißend und elegant',
    pt: 'Auspiciosa e elegante',
    es: 'Auspiciosa y elegante',
    ja: '縁起が良く優雅な',
    th: 'เป็นมงคลและสง่างาม',
    id: 'Membawa pertanda baik dan anggun'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      },
      {
        korean: '아',
        hanja: '雅',
        meaning: {
          en: 'elegant, graceful, refined',
          ko: '우아한, 고상한, 세련된',
          fr: 'élégant, gracieux, raffiné',
          it: 'elegante, grazioso, raffinato',
          de: 'elegant, anmutig, raffiniert',
          pt: 'elegante, gracioso, refinado',
          es: 'elegante, garboso, refinado',
          ja: '優雅な、上品な、洗練された',
          th: 'สง่างาม, นุ่มนวล, ประณีต',
          id: 'anggun, elok, halus'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have an elegant grace that brings good fortune and happiness to others',
      ko: '다른 사람에게 행운과 행복을 가져다주는, 우아하고 상서로운 기품을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait une grâce élégante qui apporte bonne fortune et bonheur aux autres',
      it: 'Un nome che augura a una persona di avere una grazia elegante che porti fortuna e felicità agli altri',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine elegante Anmut besitzt, die anderen Glück und Freude bringt',
      pt: 'Um nome que deseja que uma pessoa tenha uma graça elegante que traga boa sorte e felicidade aos outros',
      es: 'Un nombre que desea que una persona tenga una gracia elegante que traiga buena fortuna y felicidad a los demás',
      ja: '他者に幸運と幸福をもたらす、優雅で縁起の良い気品を持つ人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีความสง่างามที่เป็นมงคลซึ่งนำความโชคดีและความสุขมาสู่ผู้อื่น',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki keanggunan yang membawa keberuntungan dan kebahagiaan bagi orang lain'
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
    en: 'Abundant elegance',
    ko: '풍요롭고 아리따운',
    fr: 'Élégance abondante',
    it: 'Eleganza abbondante',
    de: 'Reichliche Eleganz',
    pt: 'Elegância abundante',
    es: 'Elegancia abundante',
    ja: '豊かで優雅な',
    th: 'ความสง่างามอันเปี่ยมล้น',
    id: 'Keanggunan yang melimpah'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '유',
        hanja: '裕',
        meaning: {
          en: 'abundant, rich, plentiful',
          ko: '풍부한, 부유한, 넉넉한',
          fr: 'abondant, riche, copieux',
          it: 'abbondante, ricco, copioso',
          de: 'reichlich, wohlhabend, üppig',
          pt: 'abundante, rico, farto',
          es: 'abundante, rico, copioso',
          ja: '豊かな、裕福な',
          th: 'อุดมสมบูรณ์, ร่ำรวย, มากมาย',
          id: 'berlimpah, kaya, banyak'
        }
      },
      {
        korean: '나',
        hanja: '娜',
        meaning: {
          en: 'elegant, graceful, beautiful',
          ko: '우아한, 아리따운, 아름다운',
          fr: 'élégant, gracieux, beau',
          it: 'elegante, grazioso, bello',
          de: 'elegant, anmutig, schön',
          pt: 'elegante, gracioso, belo',
          es: 'elegante, garboso, hermoso',
          ja: '優雅な、しなやかな、美しい',
          th: 'สง่างาม, อ่อนช้อย, สวยงาม',
          id: 'anggun, elok, cantik'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a rich and elegant charm, with an abundance of grace',
      ko: '넉넉하고 우아한 매력과 풍요로운 기품을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède un charme riche et élégant, avec une abondance de grâce',
      it: 'Un nome per una persona che possiede un fascino ricco ed elegante, con un\'abbondanza di grazia',
      de: 'Ein Name für eine Person, die einen reichen und eleganten Charme besitzt, mit einer Fülle von Anmut',
      pt: 'Um nome para uma pessoa que possui um charme rico e elegante, com uma abundância de graça',
      es: 'Un nombre para una persona que posee un encanto rico y elegante, con una abundancia de gracia',
      ja: '豊かで優雅な魅力と豊かな気品を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีเสน่ห์ที่ร่ำรวยและสง่างาม พร้อมด้วยความสง่างามอย่างเปี่ยมล้น',
      id: 'Sebuah nama untuk seseorang yang memiliki pesona yang kaya dan elegan, dengan keanggunan yang melimpah'
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
    en: 'Colorful glory',
    ko: '다채로운 영광',
    fr: 'Gloire colorée',
    it: 'Gloria colorata',
    de: 'Farbenfroher Ruhm',
    pt: 'Glória colorida',
    es: 'Gloria colorida',
    ja: '彩り豊かな栄光',
    th: 'ความรุ่งโรจน์อันมีสีสัน',
    id: 'Kemuliaan yang penuh warna'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '채',
        hanja: '彩',
        meaning: {
          en: 'color, brilliance, beauty',
          ko: '색채, 빛, 아름다움',
          fr: 'couleur, brillance, beauté',
          it: 'colore, brillantezza, bellezza',
          de: 'Farbe, Glanz, Schönheit',
          pt: 'cor, brilho, beleza',
          es: 'color, brillo, belleza',
          ja: '彩り、輝き、美しさ',
          th: 'สีสัน, ความสดใส, ความงาม',
          id: 'warna, kecemerlangan, keindahan'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to live a glorious and prosperous life, filled with diverse and brilliant achievements',
      ko: '다채롭고 찬란한 성취로 가득한, 영광스럽고 번영하는 삶을 살기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne vive une vie glorieuse et prospère, remplie de réalisations diverses et brillantes',
      it: 'Un nome che augura a una persona di vivere una vita gloriosa e prospera, piena di successi diversi e brillanti',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein ruhmreiches und erfolgreiches Leben führt, erfüllt von vielfältigen und brillanten Leistungen',
      pt: 'Um nome que deseja que uma pessoa viva uma vida gloriosa e próspera, cheia de conquistas diversas e brilhantes',
      es: 'Un nombre que desea que una persona viva una vida gloriosa y próspera, llena de logros diversos y brillantes',
      ja: '多様で輝かしい成果に満ちた、栄光ある繁栄した人生を送ることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีชีวิตที่รุ่งโรจน์และเจริญรุ่งเรือง เต็มไปด้วยความสำเร็จที่หลากหลายและสดใส',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjalani kehidupan yang mulia dan makmur, dipenuhi dengan pencapaian yang beragam dan cemerlang'
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
    en: 'An outstanding, fateful connection',
    ko: '빼어난 인연',
    fr: 'Une connexion exceptionnelle et prédestinée',
    it: 'Una connessione eccezionale e fatale',
    de: 'Eine herausragende, schicksalhafte Verbindung',
    pt: 'Uma conexão excepcional e predestinada',
    es: 'Una conexión excepcional y predestinada',
    ja: '秀でた縁',
    th: 'ความผูกพันอันโดดเด่น',
    id: 'Hubungan takdir yang luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      },
      {
        korean: '연',
        hanja: '緣',
        meaning: {
          en: 'connection, fate, destiny',
          ko: '인연, 운명',
          fr: 'connexion, destin, destinée',
          it: 'connessione, fato, destino',
          de: 'Verbindung, Schicksal',
          pt: 'conexão, destino',
          es: 'conexión, destino',
          ja: '縁、運命',
          th: 'ความผูกพัน, โชคชะตา, พรหมลิขิต',
          id: 'hubungan, takdir, nasib'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be destined to form excellent and beautiful relationships throughout their life',
      ko: '일생에 걸쳐 뛰어나고 아름다운 인연을 맺을 운명을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit destinée à nouer des relations excellentes et belles tout au long de sa vie',
      it: 'Un nome che augura a una persona di essere destinata a formare relazioni eccellenti e belle per tutta la vita',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person dazu bestimmt ist, im Laufe ihres Lebens ausgezeichnete und schöne Beziehungen zu knüpfen',
      pt: 'Um nome que deseja que uma pessoa seja destinada a formar excelentes e belas relações ao longo de sua vida',
      es: 'Un nombre que desea que una persona esté destinada a formar relaciones excelentes y hermosas a lo largo de su vida',
      ja: '生涯を通じて優れた美しい縁を結ぶ運命にある人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลถูกลิขิตให้สร้างความสัมพันธ์ที่ยอดเยี่ยมและสวยงามตลอดชีวิต',
      id: 'Sebuah nama yang mengharapkan seseorang ditakdirkan untuk membentuk hubungan yang sangat baik dan indah sepanjang hidup mereka'
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
    en: 'Gracious and auspicious',
    ko: '은혜롭고 상서로운',
    fr: 'Gracieuse et de bon augure',
    it: 'Graziosa e di buon auspicio',
    de: 'Gnädig und glückverheißend',
    pt: ' graciosa e auspiciosa',
    es: 'Cortés y auspiciosa',
    ja: '恵み深く縁起の良い',
    th: 'เปี่ยมด้วยพระคุณและเป็นมงคล',
    id: 'Baik hati dan membawa pertanda baik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor, kindness',
          ko: '은혜, 호의, 친절',
          fr: 'grâce, faveur, gentillesse',
          it: 'grazia, favore, gentilezza',
          de: 'Gnade, Gunst, Freundlichkeit',
          pt: 'graça, favor, bondade',
          es: 'gracia, favor, amabilidad',
          ja: '恩恵、好意、親切',
          th: 'พระคุณ, ความโปรดปราน, ความเมตตา',
          id: 'anugerah, kebaikan, kemurahan hati'
        }
      },
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person whose kind and gracious nature itself is an auspicious sign that brings happiness to all',
      ko: '친절하고 은혜로운 본성 자체가 모든 이에게 행복을 가져다주는 상서로운 징조가 되기를 바라는 이름',
      fr: 'Un nom pour une personne dont la nature aimable et gracieuse est en soi un signe de bon augure qui apporte le bonheur à tous',
      it: 'Un nome per una persona la cui natura gentile e graziosa è essa stessa un segno di buon auspicio che porta felicità a tutti',
      de: 'Ein Name für eine Person, deren freundliche und gütige Natur selbst ein glückverheißendes Zeichen ist, das allen Glück bringt',
      pt: 'Um nome para uma pessoa cuja natureza gentil e graciosa é em si um sinal auspicioso que traz felicidade a todos',
      es: 'Un nombre para una persona cuya naturaleza amable y cortés es en sí misma una señal auspiciosa que trae felicidad a todos',
      ja: '親切で恵み深い性質そのものが、すべての人に幸福をもたらす縁起の良い兆候となることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่ธรรมชาติที่ใจดีและมีเมตตาของเขาเป็นสัญญาณมงคลที่นำความสุขมาสู่ทุกคน',
      id: 'Sebuah nama untuk seseorang yang sifatnya yang baik dan ramah itu sendiri merupakan pertanda baik yang membawa kebahagiaan bagi semua'
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
    en: 'Artistic and auspicious',
    ko: '예술적이고 상서로운',
    fr: 'Artistiquet de bon augure',
    it: 'Artistica e di buon auspicio',
    de: 'Künstlerisch und glückverheißend',
    pt: 'Artística e auspiciosa',
    es: 'Artística y auspiciosa',
    ja: '芸術的で縁起の良い',
    th: 'มีศิลปะและเป็นมงคล',
    id: 'Artistik dan membawa pertanda baik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '藝',
        meaning: {
          en: 'art, skill, talent',
          ko: '예술, 기술, 재주',
          fr: 'art, compétence, talent',
          it: 'arte, abilità, talento',
          de: 'Kunst, Fähigkeit, Talent',
          pt: 'arte, habilidade, talento',
          es: 'arte, habilidad, talento',
          ja: '芸術、技術、才能',
          th: 'ศิลปะ, ทักษะ, พรสวรรค์',
          id: 'seni, keterampilan, bakat'
        }
      },
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person\'s artistic talents to bring good fortune and become a blessing to the world',
      ko: '예술적 재능이 세상에 행운과 축복을 가져다주기를 기원하는 이름',
      fr: 'Un nom qui souhaite que les talents artistiques d\'une personne apportent la bonne fortune et deviennent une bénédiction pour le monde',
      it: 'Un nome che augura che i talenti artistici di una persona portino fortuna e diventino una benedizione per il mondo',
      de: 'Ein Name, der den Wunsch ausdrückt, dass die künstlerischen Talente einer Person Glück bringen und zu einem Segen für die Welt werden',
      pt: 'Um nome que deseja que os talentos artísticos de uma pessoa tragam boa sorte e se tornem uma bênção para o mundo',
      es: 'Un nombre que desea que los talentos artísticos de una persona traigan buena fortuna y se conviertan en una bendición para el mundo',
      ja: 'その芸術的才能が世界に幸運と祝福をもたらすことを願う名前',
      th: 'ชื่อที่ปรารถนาให้พรสวรรค์ทางศิลปะของบุคคลนำความโชคดีมาและกลายเป็นพรแก่โลก',
      id: 'Sebuah nama yang mengharapkan bakat artistik seseorang membawa keberuntungan dan menjadi berkat bagi dunia'
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
    en: 'Outstandingly clever',
    ko: '빼어나게 영리한',
    fr: 'Exceptionnellement intelligente',
    it: 'Eccezionalmente intelligente',
    de: 'Herausragend klug',
    pt: 'Excepcionalmente inteligente',
    es: 'Excepcionalmente inteligente',
    ja: '秀でて賢い',
    th: 'ฉลาดหลักแหลมอย่างโดดเด่น',
    id: 'Sangat pintar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses both outstanding beauty and sharp, clever intelligence',
      ko: '빼어난 아름다움과 예리하고 영리한 지성을 모두 갖춘 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède à la fois une beauté exceptionnelle et une intelligence vive et perspicace',
      it: 'Un nome per una persona che possiede sia una bellezza eccezionale che un\'intelligenza acuta e brillante',
      de: 'Ein Name für eine Person, die sowohl herausragende Schönheit als auch scharfe, kluge Intelligenz besitzt',
      pt: 'Um nome para uma pessoa que possui tanto uma beleza excepcional quanto uma inteligência aguçada e perspicaz',
      es: 'Un nombre para una persona que posee tanto una belleza excepcional como una inteligencia aguda y brillante',
      ja: '卓越した美しさと鋭く賢い知性を兼ね備えた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีความงามที่โดดเด่นและสติปัญญาที่เฉียบแหลมและเฉลียวฉลาด',
      id: 'Sebuah nama untuk seseorang yang memiliki kecantikan yang luar biasa dan kecerdasan yang tajam dan pintar'
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
    en: 'A wise and fateful connection',
    ko: '지혜로운 인연',
    fr: 'Une connexion sage et prédestinée',
    it: 'Una connessione saggia e fatale',
    de: 'Eine weise und schicksalhafte Verbindung',
    pt: 'Uma conexão sábia e predestinada',
    es: 'Una conexión sabia y predestinada',
    ja: '賢い縁',
    th: 'ความผูกพันอันชาญฉลาด',
    id: 'Hubungan takdir yang bijaksana'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '연',
        hanja: '緣',
        meaning: {
          en: 'connection, fate, destiny',
          ko: '인연, 운명',
          fr: 'connexion, destin, destinée',
          it: 'connessione, fato, destino',
          de: 'Verbindung, Schicksal',
          pt: 'conexão, destino',
          es: 'conexión, destino',
          ja: '縁、運命',
          th: 'ความผูกพัน, โชคชะตา, พรหมลิขิต',
          id: 'hubungan, takdir, nasib'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be led by destiny to form precious relationships based on wisdom and understanding',
      ko: '지혜와 이해를 바탕으로 한 소중한 인연들을 운명처럼 만나기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit amenée par le destin à nouer de précieuses relations basées sur la sagesse et la compréhension',
      it: 'Un nome che augura a una persona di essere portata dal destino a formare preziose relazioni basate sulla saggezza e sulla comprensione',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person vom Schicksal dazu geführt wird, wertvolle Beziehungen auf der Grundlage von Weisheit und Verständnis zu knüpfen',
      pt: 'Um nome que deseja que uma pessoa seja levada pelo destino a formar relações preciosas baseadas na sabedoria e na compreensão',
      es: 'Un nombre que desea que una persona sea llevada por el destino a formar relaciones preciosas basadas en la sabiduría y el entendimiento',
      ja: '知恵と理解に基づいた貴重な縁を運命によって結ぶことを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลถูกนำพาโดยโชคชะตาเพื่อสร้างความสัมพันธ์อันล้ำค่าบนพื้นฐานของปัญญาและความเข้าใจ',
      id: 'Sebuah nama yang mengharapkan seseorang untuk dituntun oleh takdir untuk membentuk hubungan berharga berdasarkan kebijaksanaan dan pengertian'
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
    en: 'An abundant treasure',
    ko: '풍요로운 보물',
    fr: 'Un trésor abondant',
    it: 'Un tesoro abbondante',
    de: 'Ein reichlicher Schatz',
    pt: 'Um tesouro abundante',
    es: 'Un tesoro abundante',
    ja: '豊かな宝物',
    th: 'สมบัติอันอุดมสมบูรณ์',
    id: 'Harta karun yang melimpah'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '유',
        hanja: '裕',
        meaning: {
          en: 'abundant, rich, plentiful',
          ko: '풍부한, 부유한, 넉넉한',
          fr: 'abondant, riche, copieux',
          it: 'abbondante, ricco, copioso',
          de: 'reichlich, wohlhabend, üppig',
          pt: 'abundante, rico, farto',
          es: 'abundante, rico, copioso',
          ja: '豊かな、裕福な',
          th: 'อุดมสมบูรณ์, ร่ำรวย, มากมาย',
          id: 'berlimpah, kaya, banyak'
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who is a precious treasure and is wished an abundant and prosperous life',
      ko: '보물처럼 귀한 사람이 풍요롭고 넉넉한 삶을 살기를 기원하는 이름',
      fr: 'Un nom pour une personne qui est un trésor précieux et à qui l\'on souhaite une vie abondante et prospère',
      it: 'Un nome per una persona che è un tesoro prezioso e a cui si augura una vita abbondante e prospera',
      de: 'Ein Name für eine Person, die ein kostbarer Schatz ist und der ein reiches und erfolgreiches Leben gewünscht wird',
      pt: 'Um nome para uma pessoa que é um tesouro precioso e a quem se deseja uma vida abundante e próspera',
      es: 'Un nombre para una persona que es un tesoro precioso y a la que se le desea una vida abundante y próspera',
      ja: '宝物のように貴重な人が、豊かで豊かな人生を送ることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้เป็นสมบัติล้ำค่าและปรารถนาให้มีชีวิตที่อุดมสมบูรณ์และเจริญรุ่งเรือง',
      id: 'Sebuah nama untuk seseorang yang merupakan harta berharga dan diharapkan memiliki kehidupan yang berkelimpahan dan makmur'
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
    fr: 'Grâce colorée',
    it: 'Grazia colorata',
    de: 'Farbenfrohe Gnade',
    pt: 'Graça colorida',
    es: 'Gracia colorida',
    ja: '彩り豊かな恵み',
    th: 'พระคุณอันมีสีสัน',
    id: 'Anugerah yang penuh warna'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '채',
        hanja: '彩',
        meaning: {
          en: 'color, brilliance, beauty',
          ko: '색채, 빛, 아름다움',
          fr: 'couleur, brillance, beauté',
          it: 'colore, brillantezza, bellezza',
          de: 'Farbe, Glanz, Schönheit',
          pt: 'cor, brilho, beleza',
          es: 'color, brillo, belleza',
          ja: '彩り、輝き、美しさ',
          th: 'สีสัน, ความสดใส, ความงาม',
          id: 'warna, kecemerlangan, keindahan'
        }
      },
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor, kindness',
          ko: '은혜, 호의, 친절',
          fr: 'grâce, faveur, gentillesse',
          it: 'grazia, favore, gentilezza',
          de: 'Gnade, Gunst, Freundlichkeit',
          pt: 'graça, favor, bondade',
          es: 'gracia, favor, amabilidad',
          ja: '恩恵、好意、親切',
          th: 'พระคุณ, ความโปรดปราน, ความเมตตา',
          id: 'anugerah, kebaikan, kemurahan hati'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to receive and share diverse, brilliant blessings and kindness in their life',
      ko: '삶에서 다채롭고 찬란한 축복과 친절을 받고 또 나누는 사람이 되기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne reçoive et partage des bénédictions et une gentillesse diverses et brillantes dans sa vie',
      it: 'Un nome che augura a una persona di ricevere e condividere benedizioni e gentilezze diverse e brillanti nella sua vita',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person in ihrem Leben vielfältige, glänzende Segnungen und Freundlichkeit empfängt und teilt',
      pt: 'Um nome que deseja que uma pessoa receba e compartilhe bênçãos e bondades diversas e brilhantes em sua vida',
      es: 'Un nombre que desea que una persona reciba y comparta bendiciones y bondad diversas y brillantes en su vida',
      ja: '人生で多様で輝かしい祝福と親切を受け、分かち合う人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลได้รับและแบ่งปันพรและความเมตตาที่หลากหลายและสดใสในชีวิตของพวกเขา',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menerima dan berbagi berkah dan kebaikan yang beragam dan cemerlang dalam hidup mereka'
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
    en: 'An outstanding and wise person',
    ko: '빼어나고 현명한 사람',
    fr: 'Une personne exceptionnelle et sage',
    it: 'Una persona eccezionale e saggia',
    de: 'Eine herausragende und weise Person',
    pt: 'Uma pessoa excepcional e sábia',
    es: 'Una persona excepcional y sabia',
    ja: '秀でて賢い人',
    th: 'บุคคลผู้โดดเด่นและฉลาด',
    id: 'Orang yang luar biasa dan bijaksana'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be respected for both their outstanding abilities and their wise, virtuous character',
      ko: '빼어난 능력과 현명하고 어진 성품을 모두 갖추어 존경받는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit respectée à la fois pour ses capacités exceptionnelles et son caractère sage et vertueux',
      it: 'Un nome che augura a una persona di essere rispettata sia per le sue eccezionali capacità che per il suo carattere saggio e virtuoso',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person sowohl für ihre herausragenden Fähigkeiten als auch für ihren weisen, tugendhaften Charakter respektiert wird',
      pt: 'Um nome que deseja que uma pessoa seja respeitada tanto por suas habilidades excepcionais quanto por seu caráter sábio e virtuoso',
      es: 'Un nombre que desea que una persona sea respetada tanto por sus capacidades excepcionales como por su carácter sabio y virtuoso',
      ja: 'その卓越した能力と賢明で徳のある人格の両方で尊敬される人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นที่เคารพทั้งในด้านความสามารถที่โดดเด่นและอุปนิสัยที่ฉลาดและมีคุณธรรม',
      id: 'Sebuah nama yang mengharapkan seseorang untuk dihormati karena kemampuannya yang luar biasa dan karakternya yang bijaksana dan berbudi luhur'
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
    en: 'Gracious wisdom',
    ko: '은혜로운 지혜',
    fr: 'Sagesse gracieuse',
    it: 'Saggezza graziosa',
    de: 'Gnädige Weisheit',
    pt: 'Sabedoria graciosa',
    es: 'Sabiduría cortés',
    ja: '恵み深い知恵',
    th: 'ปัญญาอันเปี่ยมด้วยพระคุณ',
    id: 'Kebijaksanaan yang murah hati'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor, kindness',
          ko: '은혜, 호의, 친절',
          fr: 'grâce, faveur, gentillesse',
          it: 'grazia, favore, gentilezza',
          de: 'Gnade, Gunst, Freundlichkeit',
          pt: 'graça, favor, bondade',
          es: 'gracia, favor, amabilidad',
          ja: '恩恵、好意、親切',
          th: 'พระคุณ, ความโปรดปราน, ความเมตตา',
          id: 'anugerah, kebaikan, kemurahan hati'
        }
      },
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a kind wisdom, using their intelligence to bestow grace and help upon others',
      ko: '자신의 지혜를 사용하여 다른 사람에게 은혜와 도움을 베푸는, 친절한 지혜를 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède une sagesse bienveillante, utilisant son intelligence pour accorder la grâce et l\'aide aux autres',
      it: 'Un nome per una persona che possiede una saggezza benevola, usando la propria intelligenza per concedere grazia e aiuto agli altri',
      de: 'Ein Name für eine Person, die eine gütige Weisheit besitzt und ihre Intelligenz einsetzt, um anderen Gnade und Hilfe zu gewähren',
      pt: 'Um nome para uma pessoa que possui uma sabedoria bondosa, usando sua inteligência para conceder graça e ajuda aos outros',
      es: 'Un nombre para una persona que posee una sabiduría bondadosa, que utiliza su inteligencia para otorgar gracia y ayuda a los demás',
      ja: 'その知恵を用いて他者に恵みと助けを与える、親切な知恵を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีปัญญาอันเมตตา ใช้สติปัญญาของตนเพื่อมอบพระคุณและความช่วยเหลือแก่ผู้อื่น',
      id: 'Sebuah nama untuk seseorang yang memiliki kebijaksanaan yang baik hati, menggunakan kecerdasannya untuk memberikan anugerah dan bantuan kepada orang lain'
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
    en: 'Artistic grace',
    ko: '예술적인 은혜',
    fr: 'Grâce artistique',
    it: 'Grazia artistica',
    de: 'Künstlerische Anmut',
    pt: 'Graça artística',
    es: 'Gracia artística',
    ja: '芸術的な恵み',
    th: 'พระคุณแห่งศิลปะ',
    id: 'Anugerah artistik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '예',
        hanja: '藝',
        meaning: {
          en: 'art, skill, talent',
          ko: '예술, 기술, 재주',
          fr: 'art, compétence, talent',
          it: 'arte, abilità, talento',
          de: 'Kunst, Fähigkeit, Talent',
          pt: 'arte, habilidade, talento',
          es: 'arte, habilidad, talento',
          ja: '芸術、技術、才能',
          th: 'ศิลปะ, ทักษะ, พรสวรรค์',
          id: 'seni, keterampilan, bakat'
        }
      },
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor, kindness',
          ko: '은혜, 호의, 친절',
          fr: 'grâce, faveur, gentillesse',
          it: 'grazia, favore, gentilezza',
          de: 'Gnade, Gunst, Freundlichkeit',
          pt: 'graça, favor, bondade',
          es: 'gracia, favor, amabilidad',
          ja: '恩恵、好意、親切',
          th: 'พระคุณ, ความโปรดปราน, ความเมตตา',
          id: 'anugerah, kebaikan, kemurahan hati'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a life blessed with artistic talent and gracious kindness',
      ko: '예술적 재능과 은혜로운 친절함으로 축복받는 삶을 살기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait une vie bénie par le talent artistique et la bonté gracieuse',
      it: 'Un nome che augura a una persona di avere una vita benedetta dal talento artistico e dalla gentilezza graziosa',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein Leben führt, das mit künstlerischem Talent und gütiger Freundlichkeit gesegnet ist',
      pt: 'Um nome que deseja que uma pessoa tenha uma vida abençoada com talento artístico e bondade graciosa',
      es: 'Un nombre que desea que una persona tenga una vida bendecida con talento artístico y bondad amable',
      ja: '芸術的な才能と恵み深い親切に恵まれた人生を送ることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีชีวิตที่ได้รับพรด้วยพรสวรรค์ทางศิลปะและความเมตตาอันงดงาม',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki kehidupan yang diberkati dengan bakat artistik dan kebaikan yang ramah'
    }
  }
}),
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
    en: 'Beautiful and elegant',
    ko: '아름답고 아리따운',
    fr: 'Belle et élégante',
    it: 'Bella ed elegante',
    de: 'Schön und elegant',
    pt: 'Bela e elegante',
    es: 'Bella y elegante',
    ja: '美しく優雅な',
    th: 'สวยงามและสง่างาม',
    id: 'Cantik dan anggun'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '미',
        hanja: '美',
        meaning: {
          en: 'beautiful, pretty',
          ko: '아름다운, 예쁜',
          fr: 'beau, joli',
          it: 'bello, carino',
          de: 'schön, hübsch',
          pt: 'belo, bonito',
          es: 'hermoso, bonito',
          ja: '美しい、きれいな',
          th: 'สวยงาม, น่ารัก',
          id: 'cantik, indah'
        }
      },
      {
        korean: '나',
        hanja: '娜',
        meaning: {
          en: 'elegant, graceful, beautiful',
          ko: '우아한, 아리따운, 아름다운',
          fr: 'élégant, gracieux, beau',
          it: 'elegante, grazioso, bello',
          de: 'elegant, anmutig, schön',
          pt: 'elegante, gracioso, belo',
          es: 'elegante, garboso, hermoso',
          ja: '優雅な、しなやかな、美しい',
          th: 'สง่างาม, อ่อนช้อย, สวยงาม',
          id: 'anggun, elok, cantik'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to possess both striking beauty and an elegant, graceful character',
      ko: '눈에 띄는 아름다움과 우아하고 기품 있는 성품을 모두 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne possède à la fois une beauté saisissante et un caractère élégant et gracieux',
      it: 'Un nome che augura a una persona di possedere sia una bellezza straordinaria che un carattere elegante e grazioso',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person sowohl auffällige Schönheit als auch einen eleganten, anmutigen Charakter besitzt',
      pt: 'Um nome que deseja que uma pessoa possua tanto uma beleza marcante quanto um caráter elegante e gracioso',
      es: 'Un nombre que desea que una persona posea tanto una belleza llamativa como un carácter elegante y garboso',
      ja: '際立った美しさと優雅で気品のある人格を兼ね備えた人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีความงามที่โดดเด่นและอุปนิสัยที่สง่างามและนุ่มนวล',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki kecantikan yang mencolok dan karakter yang anggun dan elok'
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
    en: 'Wise and filial',
    ko: '지혜롭고 효심 깊은',
    fr: 'Sage et filiale',
    it: 'Saggia e filiale',
    de: 'Weise und kindlich pflichtbewusst',
    pt: 'Sábia e filial',
    es: 'Sabia y filial',
    ja: '賢くて親孝行な',
    th: 'ฉลาดและกตัญญู',
    id: 'Bijaksana dan berbakti'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '효',
        hanja: '孝',
        meaning: {
          en: 'filial piety, obedience',
          ko: '효도, 순종',
          fr: 'piété filiale, obéissance',
          it: 'pietà filiale, obbedienza',
          de: 'kindliche Pietät, Gehorsam',
          pt: 'piedade filial, obediência',
          es: 'piedad filial, obediencia',
          ja: '親孝行、従順',
          th: 'ความกตัญญู, การเชื่อฟัง',
          id: 'bakti, ketaatan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses the wisdom to properly honor and serve their parents and elders',
      ko: '부모님과 어른을 공경하고 섬길 줄 아는 지혜와 효심을 모두 갖춘 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède la sagesse d\'honorer et de servir correctement ses parents et aînés',
      it: 'Un nome per una persona che possiede la saggezza di onorare e servire adeguatamente i propri genitori e anziani',
      de: 'Ein Name für eine Person, die die Weisheit besitzt, ihre Eltern und Älteren gebührend zu ehren und ihnen zu dienen',
      pt: 'Um nome para uma pessoa que possui a sabedoria para honrar e servir adequadamente seus pais e mais velhos',
      es: 'Un nombre para una persona que posee la sabiduría para honrar y servir adecuadamente a sus padres y mayores',
      ja: '両親や年長者を敬い仕える知恵と親孝行の心を兼ね備えた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีปัญญาในการให้เกียรติและรับใช้บิดามารดาและผู้ใหญ่ของตนอย่างเหมาะสม',
      id: 'Sebuah nama untuk seseorang yang memiliki kebijaksanaan untuk menghormati dan melayani orang tua dan sesepuh mereka dengan benar'
    }
  },
  kpopMember: { group: 'TWICE', memberName: 'Jihyo' }
}),
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
    en: 'Auspicious and talented',
    ko: '상서롭고 뛰어난 인재',
    fr: 'Talentueux et de bon augure',
    it: 'Talentuoso e di buon auspicio',
    de: 'Talentiert und glückverheißend',
    pt: 'Talentoso e auspicioso',
    es: 'Talentoso y auspicioso',
    ja: '縁起が良く優れた才能',
    th: 'ผู้มีพรสวรรค์อันเป็นมงคล',
    id: 'Berbakat dan membawa pertanda baik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that signifies a person with blessed talent, whose abilities bring good fortune and success',
      ko: '자신의 능력이 행운과 성공을 가져다주는, 축복받은 재능을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui désigne une personne dotée d\'un talent béni, dont les capacités apportent chance et succès',
      it: 'Un nome che significa una persona con un talento benedetto, le cui abilità portano fortuna e successo',
      de: 'Ein Name, der eine Person mit gesegnetem Talent bezeichnet, deren Fähigkeiten Glück und Erfolg bringen',
      pt: 'Um nome que significa uma pessoa com talento abençoado, cujas habilidades trazem boa sorte e sucesso',
      es: 'Un nombre que significa una persona con un talento bendecido, cuyas habilidades traen buena fortuna y éxito',
      ja: 'その才能が幸運と成功をもたらす、祝福された才能を持つ人になることを願う名前',
      th: 'ชื่อที่หมายถึงบุคคลที่มีพรสวรรค์ที่ได้รับพร ซึ่งความสามารถของเขานำมาซึ่งความโชคดีและความสำเร็จ',
      id: 'Sebuah nama yang menandakan seseorang dengan bakat yang diberkati, yang kemampuannya membawa nasib baik dan kesuksesan'
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
    en: 'Great abundance',
    ko: '크나큰 풍요',
    fr: 'Grande abondance',
    it: 'Grande abbondanza',
    de: 'Großer Überfluss',
    pt: 'Grande abundância',
    es: 'Gran abundancia',
    ja: '大きな豊かさ',
    th: 'ความอุดมสมบูรณ์อันยิ่งใหญ่',
    id: 'Kelimpahan yang luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '태',
        hanja: '泰',
        meaning: {
          en: 'great, superior, peaceful',
          ko: '큰, 뛰어난, 평안한',
          fr: 'grand, supérieur, paisible',
          it: 'grande, superiore, pacifico',
          de: 'groß, überlegen, friedlich',
          pt: 'grande, superior, pacífico',
          es: 'grande, superior, pacífico',
          ja: '大きい、優れた、安らかな',
          th: 'ยิ่งใหญ่, เหนือกว่า, สงบสุข',
          id: 'hebat, unggul, damai'
        }
      },
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to enrich, moisten, benefit',
          ko: '윤택하게 하다, 적시다, 이롭게 하다',
          fr: 'enrichir, humecter, bénéficier',
          it: 'arricchire, inumidire, beneficiare',
          de: 'bereichern, befeuchten, zugutekommen',
          pt: 'enriquecer, umedecer, beneficiar',
          es: 'enriquecer, humedecer, beneficiar',
          ja: '潤す、豊かにする、恩恵を与える',
          th: 'ทำให้สมบูรณ์, ทำให้ชุ่มชื้น, เป็นประโยชน์',
          id: 'memperkaya, melembabkan, memberi manfaat'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to live a peaceful, greatly prosperous life that benefits all',
      ko: '모두를 이롭게 하는, 태평하고 크게 번영하는 삶을 살기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne vive une vie paisible et très prospère qui profite à tous',
      it: 'Un nome che augura a una persona di vivere una vita pacifica e molto prospera a beneficio di tutti',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein friedliches, sehr wohlhabendes Leben führt, das allen zugutekommt',
      pt: 'Um nome que deseja que uma pessoa viva uma vida pacífica e grandemente próspera que beneficie a todos',
      es: 'Un nombre que desea que una persona viva una vida pacífica y muy próspera que beneficie a todos',
      ja: 'すべての人に利益をもたらす、平和で大いに繁栄した人生を送ることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีชีวิตที่สงบสุขและเจริญรุ่งเรืองอย่างยิ่งซึ่งเป็นประโยชน์ต่อทุกคน',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjalani kehidupan yang damai dan sangat makmur yang bermanfaat bagi semua'
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
    en: 'A wise helper',
    ko: '지혜로운 조력자',
    fr: 'Un aide sage',
    it: 'Un aiutante saggio',
    de: 'Ein weiser Helfer',
    pt: 'Um ajudante sábio',
    es: 'Un ayudante sabio',
    ja: '賢い助け手',
    th: 'ผู้ช่วยเหลือที่ฉลาด',
    id: 'Penolong yang bijaksana'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      },
      {
        korean: '우',
        hanja: '佑',
        meaning: {
          en: 'to help, assist, protect',
          ko: '돕다, 보좌하다, 보호하다',
          fr: 'aider, assister, protéger',
          it: 'aiutare, assistere, proteggere',
          de: 'helfen, unterstützen, schützen',
          pt: 'ajudar, assistir, proteger',
          es: 'ayudar, asistir, proteger',
          ja: '助ける、補佐する、保護する',
          th: 'ช่วยเหลือ, สนับสนุน, ปกป้อง',
          id: 'membantu, mendampingi, melindungi'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name representing a wise protector, someone who uses their wisdom to help and guide others',
      ko: '지혜를 사용하여 다른 사람들을 돕고 인도하는 지혜로운 보호자가 되기를 바라는 이름',
      fr: 'Un nom représentant un protecteur sage, quelqu\'un qui utilise sa sagesse pour aider et guider les autres',
      it: 'Un nome che rappresenta un saggio protettore, qualcuno che usa la propria saggezza per aiutare e guidare gli altri',
      de: 'Ein Name, der einen weisen Beschützer darstellt, jemanden, der seine Weisheit einsetzt, um anderen zu helfen und sie zu leiten',
      pt: 'Um nome que representa um protetor sábio, alguém que usa sua sabedoria para ajudar e guiar os outros',
      es: 'Un nombre que representa a un sabio protector, alguien que utiliza su sabiduría para ayudar y guiar a los demás',
      ja: 'その知恵を用いて他者を助け、導く賢明な保護者になることを願う名前',
      th: 'ชื่อที่เป็นตัวแทนของผู้พิทักษ์ที่ฉลาด ผู้ที่ใช้สติปัญญาของตนเพื่อช่วยเหลือและนำทางผู้อื่น',
      id: 'Sebuah nama yang mewakili seorang pelindung yang bijaksana, seseorang yang menggunakan kebijaksanaannya untuk membantu dan membimbing orang lain'
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
    en: 'Righteous and great',
    ko: '올바르고 위대한',
    fr: 'Juste et grand',
    it: 'Giusto e grande',
    de: 'Rechtschaffen und groß',
    pt: 'Justo e grande',
    es: 'Justo y grande',
    ja: '正しくて偉大な',
    th: 'เที่ยงธรรมและยิ่งใหญ่',
    id: 'Benar dan hebat'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          fr: 'droit, correct, juste',
          it: 'giusto, corretto, appropriato',
          de: 'richtig, korrekt, ordnungsgemäß',
          pt: 'certo, correto, adequado',
          es: 'correcto, justo, debido',
          ja: '正しい、適切な、正確な',
          th: 'ถูกต้อง, เหมาะสม, แม่นยำ',
          id: 'benar, tepat, sesuai'
        }
      },
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast, grand',
          ko: '큰, 넓은, 웅장한',
          fr: 'grand, vaste, magnifique',
          it: 'grande, vasto, magnifico',
          de: 'groß, weit, prächtig',
          pt: 'grande, vasto, grandioso',
          es: 'grande, vasto, grandioso',
          ja: '大きい、広大な、雄大な',
          th: 'ยิ่งใหญ่, กว้างใหญ่, โอ่อ่า',
          id: 'besar, luas, agung'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will become a great leader with a righteous heart and vast influence',
      ko: '올바른 마음과 넓은 영향력을 지닌 위대한 지도자가 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui deviendra un grand leader avec un cœur juste et une vaste influence',
      it: 'Un nome per una persona che diventerà un grande leader con un cuore giusto e una vasta influenza',
      de: 'Ein Name für eine Person, die zu einer großen Führungspersönlichkeit mit einem rechtschaffenen Herzen und weitreichendem Einfluss wird',
      pt: 'Um nome para uma pessoa que se tornará um grande líder com um coração justo e vasta influência',
      es: 'Un nombre para una persona que se convertirá en un gran líder con un corazón justo y una vasta influencia',
      ja: '正しい心と広大な影響力を持つ偉大な指導者になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะเป็นผู้นำที่ยิ่งใหญ่ด้วยหัวใจที่เที่ยงธรรมและมีอิทธิพลกว้างขวาง',
      id: 'Sebuah nama untuk seseorang yang akan menjadi pemimpin besar dengan hati yang benar dan pengaruh yang luas'
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
    en: 'Clever with a will of iron',
    ko: '강철 같은 의지를 지닌 영민함',
    fr: 'Intelligent avec une volonté de fer',
    it: 'Intelligente con una volontà di ferro',
    de: 'Klug mit eisernem Willen',
    pt: 'Inteligente com uma vontade de ferro',
    es: 'Inteligente con una voluntad de hierro',
    ja: '鋼の意志を持つ賢さ',
    th: 'ฉลาดหลักแหลมและมีเจตจำนงดุจเหล็กกล้า',
    id: 'Cerdas dengan kemauan sekuat baja'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '철',
        hanja: '鐵',
        meaning: {
          en: 'iron; firm, strong',
          ko: '철, 쇠; 굳은, 강한',
          fr: 'fer ; ferme, fort',
          it: 'ferro; fermo, forte',
          de: 'Eisen; fest, stark',
          pt: 'ferro; firme, forte',
          es: 'hierro; firme, fuerte',
          ja: '鉄; 固い、強い',
          th: 'เหล็ก; มั่นคง, แข็งแกร่ง',
          id: 'besi; kokoh, kuat'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses both sharp, clever thinking and an unbreakable, iron-like will',
      ko: '예리하고 영민한 사고력과 절대 꺾이지 않는 강철 같은 의지를 겸비한 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède à la fois une pensée vive et intelligente et une volonté de fer inébranlable',
      it: 'Un nome per una persona che possiede sia un pensiero acuto e intelligente che una volontà di ferro incrollabile',
      de: 'Ein Name für eine Person, die sowohl scharfes, kluges Denken als auch einen unzerbrechlichen, eisernen Willen besitzt',
      pt: 'Um nome para uma pessoa que possui tanto um pensamento afiado e inteligente quanto uma vontade de ferro inquebrável',
      es: 'Un nombre para una persona que posee tanto un pensamiento agudo e inteligente como una voluntad de hierro inquebrantable',
      ja: '鋭く賢い思考力と決して折れない鋼のような意志を兼ね備えた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีความคิดที่เฉียบแหลมและเฉลียวฉลาด และมีเจตจำนงที่แน่วแน่ดุจเหล็กกล้า',
      id: 'Sebuah nama untuk seseorang yang memiliki pemikiran yang tajam dan cerdas serta kemauan sekuat baja yang tidak dapat dipatahkan'
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
    en: 'A talented man with a will of iron',
    ko: '강철 같은 의지를 지닌 인재',
    fr: 'Un homme de talent avec une volonté de fer',
    it: 'Un uomo di talento con una volontà di ferro',
    de: 'Ein talentierter Mann mit eisernem Willen',
    pt: 'Um homem talentoso com uma vontade de ferro',
    es: 'Un hombre de talento con una voluntad de hierro',
    ja: '鋼の意志を持つ才能ある男',
    th: 'ผู้มีพรสวรรค์และเจตจำนงดุจเหล็กกล้า',
    id: 'Pria berbakat dengan kemauan sekuat baja'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      },
      {
        korean: '철',
        hanja: '鐵',
        meaning: {
          en: 'iron; firm, strong',
          ko: '철, 쇠; 굳은, 강한',
          fr: 'fer ; ferme, fort',
          it: 'ferro; fermo, forte',
          de: 'Eisen; fest, stark',
          pt: 'ferro; firme, forte',
          es: 'hierro; firme, fuerte',
          ja: '鉄; 固い、強い',
          th: 'เหล็ก; มั่นคง, แข็งแกร่ง',
          id: 'besi; kokoh, kuat'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will become a remarkable figure, using their talents with a firm and unwavering will',
      ko: '굳건하고 흔들림 없는 의지로 자신의 재능을 펼쳐, 뛰어난 인물이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui deviendra une figure remarquable, utilisant ses talents avec une volonté ferme et inébranlable',
      it: 'Un nome per una persona che diventerà una figura notevole, usando i suoi talenti con una volontà ferma e incrollabile',
      de: 'Ein Name für eine Person, die zu einer bemerkenswerten Persönlichkeit wird, die ihre Talente mit einem festen und unerschütterlichen Willen einsetzt',
      pt: 'Um nome para uma pessoa que se tornará uma figura notável, usando seus talentos com uma vontade firme e inabalável',
      es: 'Un nombre para una persona que se convertirá en una figura notable, utilizando sus talentos con una voluntad firme e inquebrantable',
      ja: '固く揺るぎない意志で才能を発揮し、優れた人物になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะกลายเป็นบุคคลที่โดดเด่น ใช้พรสวรรค์ของตนด้วยเจตจำนงที่แน่วแน่และไม่เปลี่ยนแปลง',
      id: 'Sebuah nama untuk seseorang yang akan menjadi tokoh yang luar biasa, menggunakan bakatnya dengan kemauan yang teguh dan tak tergoyahkan'
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
    en: 'Sacred and vast',
    ko: '성스럽고 넓은',
    fr: 'Sacré et vaste',
    it: 'Sacro e vasto',
    de: 'Heilig und weit',
    pt: 'Sagrado e vasto',
    es: 'Sagrado y vasto',
    ja: '聖にして広大な',
    th: 'ศักดิ์สิทธิ์และกว้างใหญ่',
    id: 'Suci dan luas'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '성',
        hanja: '聖',
        meaning: {
          en: 'holy, sacred, saint',
          ko: '거룩한, 신성한, 성인',
          fr: 'saint, sacré',
          it: 'santo, sacro',
          de: 'heilig',
          pt: 'santo, sagrado',
          es: 'santo, sagrado',
          ja: '聖なる、神聖な',
          th: 'ศักดิ์สิทธิ์, นักบุญ',
          id: 'suci, keramat, orang suci'
        }
      },
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast, grand',
          ko: '큰, 넓은, 웅장한',
          fr: 'grand, vaste, magnifique',
          it: 'grande, vasto, magnifico',
          de: 'groß, weit, prächtig',
          pt: 'grande, vasto, grandioso',
          es: 'grande, vasto, grandioso',
          ja: '大きい、広大な、雄大な',
          th: 'ยิ่งใหญ่, กว้างใหญ่, โอ่อ่า',
          id: 'besar, luas, agung'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a vast, open heart and a noble, sacred character',
      ko: '넓고 큰 마음과 성스럽고 고귀한 품성을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait un cœur vaste et ouvert et un caractère noble et sacré',
      it: 'Un nome che augura a una persona di avere un cuore vasto e aperto e un carattere nobile e sacro',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein weites, offenes Herz und einen edlen, heiligen Charakter hat',
      pt: 'Um nome que deseja que uma pessoa tenha um coração vasto e aberto e um caráter nobre e sagrado',
      es: 'Un nombre que desea que una persona tenga un corazón vasto y abierto y un carácter noble y sagrado',
      ja: '広く大きな心と、聖く高貴な品格を持つ人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีหัวใจที่กว้างใหญ่และเปิดกว้าง และมีอุปนิสัยอันสูงส่งและศักดิ์สิทธิ์',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki hati yang luas dan terbuka serta karakter yang mulia dan suci'
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
    en: 'A precious stone',
    ko: '귀한 돌',
    fr: 'Une pierre précieuse',
    it: 'Una pietra preziosa',
    de: 'Ein Edelstein',
    pt: 'Uma pedra preciosa',
    es: 'Una piedra preciosa',
    ja: '貴重な石',
    th: 'ศิลาล้ำค่า',
    id: 'Batu yang berharga'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      },
      {
        korean: '석',
        hanja: '石',
        meaning: {
          en: 'stone, rock',
          ko: '돌, 바위',
          fr: 'pierre, rocher',
          it: 'pietra, roccia',
          de: 'Stein, Fels',
          pt: 'pedra, rocha',
          es: 'piedra, roca',
          ja: '石、岩',
          th: 'หิน, ศิลา',
          id: 'batu, karang'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a precious and solid individual, like a rare and valuable gemstone',
      ko: '희귀하고 가치 있는 보석처럼, 귀하고 단단한 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un individu précieux et solide, comme une pierre précieuse rare et de valeur',
      it: 'Un nome che augura a una persona di essere un individuo prezioso e solido, come una gemma rara e di valore',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine kostbare und solide Persönlichkeit wird, wie ein seltener und wertvoller Edelstein',
      pt: 'Um nome que deseja que uma pessoa seja um indivíduo precioso e sólido, como uma pedra preciosa rara e valiosa',
      es: 'Un nombre que desea que una persona sea un individuo precioso y sólido, como una gema rara y valiosa',
      ja: '希少で価値のある宝石のように、貴重で堅実な人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ที่ล้ำค่าและมั่นคงดั่งอัญมณีที่หายากและมีค่า',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang berharga dan kokoh, seperti batu permata yang langka dan bernilai'
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
    en: 'Iron-willed and clever',
    ko: '강철 같은 의지와 영민함',
    fr: 'Volonté de fer et intelligence',
    it: 'Volontà di ferro e intelligenza',
    de: 'Eisenharter Wille und Klugheit',
    pt: 'Vontade de ferro e inteligência',
    es: 'Voluntad de hierro e inteligencia',
    ja: '鉄の意志と賢さ',
    th: 'เจตจำนงดุจเหล็กกล้าและความเฉลียวฉลาด',
    id: 'Berkemauan baja dan pintar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '철',
        hanja: '鐵',
        meaning: {
          en: 'iron; firm, strong',
          ko: '철, 쇠; 굳은, 강한',
          fr: 'fer ; ferme, fort',
          it: 'ferro; fermo, forte',
          de: 'Eisen; fest, stark',
          pt: 'ferro; firme, forte',
          es: 'hierro; firme, fuerte',
          ja: '鉄; 固い、強い',
          th: 'เหล็ก; มั่นคง, แข็งแกร่ง',
          id: 'besi; kokoh, kuat'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a strong, unyielding will and the cleverness to use it wisely',
      ko: '강하고 꺾이지 않는 의지와 그것을 현명하게 사용할 영리함을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait une volonté forte et inflexible et l\'intelligence de l\'utiliser sagement',
      it: 'Un nome che augura a una persona di avere una volontà forte e inflessibile e l\'intelligenza di usarla saggiamente',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person einen starken, unbeugsamen Willen und die Klugheit hat, ihn weise einzusetzen',
      pt: 'Um nome que deseja que uma pessoa tenha uma vontade forte e inabalável e a inteligência para usá-la com sabedoria',
      es: 'Un nombre que desea que una persona tenga una voluntad fuerte e inquebrantable y la inteligencia para usarla sabiamente',
      ja: '強く揺るぎない意志と、それを賢く使う賢さを持つ人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีเจตจำนงที่แข็งแกร่งและไม่ย่อท้อ และมีความเฉลียวฉลาดที่จะใช้มันอย่างชาญฉลาด',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki kemauan yang kuat dan pantang menyerah serta kepintaran untuk menggunakannya dengan bijaksana'
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
    en: 'A talent for victory',
    ko: '승리를 이끄는 재능',
    fr: 'Un talent pour la victoire',
    it: 'Un talento per la vittoria',
    de: 'Ein Talent für den Sieg',
    pt: 'Um talento para a vitória',
    es: 'Un talento para la victoria',
    ja: '勝利への才能',
    th: 'พรสวรรค์แห่งชัยชนะ',
    id: 'Bakat untuk kemenangan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '승',
        hanja: '勝',
        meaning: {
          en: 'victory, win, superior',
          ko: '승리, 이기다, 뛰어나다',
          fr: 'victoire, gagner, supérieur',
          it: 'vittoria, vincere, superiore',
          de: 'Sieg, gewinnen, überlegen',
          pt: 'vitória, vencer, superior',
          es: 'victoria, ganar, superior',
          ja: '勝利、勝つ、優れる',
          th: 'ชัยชนะ, ชนะ, เหนือกว่า',
          id: 'kemenangan, menang, unggul'
        }
      },
      {
        korean: '재',
        hanja: '才',
        meaning: {
          en: 'talent, ability',
          ko: '재주, 재능',
          fr: 'talent, capacité',
          it: 'talento, abilità',
          de: 'Talent, Fähigkeit',
          pt: 'talento, habilidade',
          es: 'talento, habilidad',
          ja: '才能、能力',
          th: 'พรสวรรค์, ความสามารถ',
          id: 'bakat, kemampuan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses the innate talent and ability to achieve victory in all endeavors',
      ko: '모든 노력에서 승리를 쟁취할 타고난 재능과 능력을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède le talent et la capacité innés de remporter la victoire dans toutes ses entreprises',
      it: 'Un nome per una persona che possiede il talento e la capacità innati di ottenere la vittoria in ogni impresa',
      de: 'Ein Name für eine Person, die das angeborene Talent und die Fähigkeit besitzt, in allen Unternehmungen den Sieg zu erringen',
      pt: 'Um nome para uma pessoa que possui o talento e a habilidade inatos para alcançar a vitória em todos os empreendimentos',
      es: 'Un nombre para una persona que posee el talento y la habilidad innatos para lograr la victoria en todos sus empeños',
      ja: 'あらゆる試みで勝利を収める天賦の才を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีพรสวรรค์และความสามารถโดยกำเนิดในการได้รับชัยชนะในทุกความพยายาม',
      id: 'Sebuah nama untuk seseorang yang memiliki bakat dan kemampuan bawaan untuk mencapai kemenangan dalam semua usaha'
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
    en: 'Righteous and clever',
    ko: '올바르고 영민한',
    fr: 'Juste et intelligent',
    it: 'Giusto e intelligente',
    de: 'Rechtschaffen und klug',
    pt: 'Justo e inteligente',
    es: 'Justo e inteligente',
    ja: '正しくて賢い',
    th: 'เที่ยงธรรมและหลักแหลม',
    id: 'Benar dan pintar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          fr: 'droit, correct, juste',
          it: 'giusto, corretto, appropriato',
          de: 'richtig, korrekt, ordnungsgemäß',
          pt: 'certo, correto, adequado',
          es: 'correcto, justo, debido',
          ja: '正しい、適切な、正確な',
          th: 'ถูกต้อง, เหมาะสม, แม่นยำ',
          id: 'benar, tepat, sesuai'
        }
      },
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have the cleverness to make quick judgments and the integrity to ensure they are always righteous',
      ko: '빠른 판단을 내리는 영민함과 그 판단이 언제나 올바르도록 하는 정직함을 겸비하기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait l\'intelligence de porter des jugements rapides et l\'intégrité de s\'assurer qu\'ils sont toujours justes',
      it: 'Un nome che augura a una persona di avere l\'intelligenza di dare giudizi rapidi e l\'integrità di assicurarsi che siano sempre giusti',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person die Klugheit besitzt, schnelle Urteile zu fällen, und die Integrität, sicherzustellen, dass diese immer rechtschaffen sind',
      pt: 'Um nome que deseja que uma pessoa tenha a inteligência para fazer julgamentos rápidos e a integridade para garantir que eles sejam sempre justos',
      es: 'Un nombre que desea que una persona tenga la inteligencia para emitir juicios rápidos y la integridad para asegurarse de que siempre sean justos',
      ja: '迅速な判断を下す賢さと、その判断が常に正しいことを保証する誠実さを兼ね備えることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีความเฉลียวฉลาดในการตัดสินใจอย่างรวดเร็วและความซื่อสัตย์เพื่อให้แน่ใจว่าการตัดสินใจนั้นถูกต้องเสมอ',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki kepintaran untuk membuat penilaian cepat dan integritas untuk memastikan penilaian itu selalu benar'
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
    en: 'A wise man with a will of iron',
    ko: '강철 같은 의지를 지닌 현자',
    fr: 'Un sage à la volonté de fer',
    it: 'Un saggio dalla volontà di ferro',
    de: 'Ein Weiser mit eisernem Willen',
    pt: 'Um sábio com uma vontade de ferro',
    es: 'Un sabio con voluntad de hierro',
    ja: '鋼の意志を持つ賢者',
    th: 'นักปราชญ์ผู้มีเจตจำนงดุจเหล็กกล้า',
    id: 'Orang bijak dengan kemauan sekuat baja'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      },
      {
        korean: '철',
        hanja: '鐵',
        meaning: {
          en: 'iron; firm, strong',
          ko: '철, 쇠; 굳은, 강한',
          fr: 'fer ; ferme, fort',
          it: 'ferro; fermo, forte',
          de: 'Eisen; fest, stark',
          pt: 'ferro; firme, forte',
          es: 'hierro; firme, fuerte',
          ja: '鉄; 固い、強い',
          th: 'เหล็ก; มั่นคง, แข็งแกร่ง',
          id: 'besi; kokoh, kuat'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have the wisdom to know the right path and the iron will to follow it without wavering',
      ko: '올바른 길을 아는 지혜와 그 길을 흔들림 없이 따르는 강철 같은 의지를 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait la sagesse de connaître le droit chemin et la volonté de fer de le suivre sans faillir',
      it: 'Un nome che augura a una persona di avere la saggezza di conoscere la retta via e la volontà di ferro di seguirla senza vacillare',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person die Weisheit besitzt, den richtigen Weg zu kennen, und den eisernen Willen, ihm ohne Wanken zu folgen',
      pt: 'Um nome que deseja que uma pessoa tenha a sabedoria para conhecer o caminho certo e a vontade de ferro para segui-lo sem vacilar',
      es: 'Un nombre que desea que una persona tenga la sabiduría para conocer el camino correcto y la voluntad de hierro para seguirlo sin vacilar',
      ja: '正しい道を知る知恵と、その道を揺るぎなく歩む鋼の意志を持つ人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีปัญญาที่จะรู้เส้นทางที่ถูกต้องและมีเจตจำนงที่แน่วแน่ดุจเหล็กกล้าที่จะปฏิบัติตามโดยไม่หวั่นไหว',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki kebijaksanaan untuk mengetahui jalan yang benar dan kemauan sekuat baja untuk mengikutinya tanpa goyah'
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
    en: 'A will of iron for victory',
    ko: '승리를 위한 강철 의지',
    fr: 'Une volonté de fer pour la victoire',
    it: 'Una volontà di ferro per la vittoria',
    de: 'Ein eiserner Wille zum Sieg',
    pt: 'Uma vontade de ferro para a vitória',
    es: 'Una voluntad de hierro para la victoria',
    ja: '勝利への鉄の意志',
    th: 'เจตจำนงเหล็กกล้าเพื่อชัยชนะ',
    id: 'Kemauan baja untuk kemenangan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '승',
        hanja: '勝',
        meaning: {
          en: 'victory, win, superior',
          ko: '승리, 이기다, 뛰어나다',
          fr: 'victoire, gagner, supérieur',
          it: 'vittoria, vincere, superiore',
          de: 'Sieg, gewinnen, überlegen',
          pt: 'vitória, vencer, superior',
          es: 'victoria, ganar, superior',
          ja: '勝利、勝つ、優れる',
          th: 'ชัยชนะ, ชนะ, เหนือกว่า',
          id: 'kemenangan, menang, unggul'
        }
      },
      {
        korean: '철',
        hanja: '鐵',
        meaning: {
          en: 'iron; firm, strong',
          ko: '철, 쇠; 굳은, 강한',
          fr: 'fer ; ferme, fort',
          it: 'ferro; fermo, forte',
          de: 'Eisen; fest, stark',
          pt: 'ferro; firme, forte',
          es: 'hierro; firme, fuerte',
          ja: '鉄; 固い、強い',
          th: 'เหล็ก; มั่นคง, แข็งแกร่ง',
          id: 'besi; kokoh, kuat'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses an unbreakable, iron-like will to achieve victory against all odds',
      ko: '어떤 역경에도 굴하지 않고 승리를 쟁취하는, 꺾이지 않는 강철 같은 의지를 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède une volonté de fer inébranlable pour remporter la victoire contre vents et marées',
      it: 'Un nome per una persona che possiede una volontà di ferro incrollabile per ottenere la vittoria contro ogni probabilità',
      de: 'Ein Name für eine Person, die einen unzerbrechlichen, eisernen Willen besitzt, um allen Widrigkeiten zum Trotz den Sieg zu erringen',
      pt: 'Um nome para uma pessoa que possui uma vontade de ferro inquebrável para alcançar a vitória contra todas as probabilidades',
      es: 'Un nombre para una persona que posee una voluntad de hierro inquebrantable para lograr la victoria contra viento y marea',
      ja: 'あらゆる逆境に打ち勝つ、不屈の鋼の意志を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีเจตจำนงที่แน่วแน่ดุจเหล็กกล้าเพื่อชัยชนะต่อทุกอุปสรรค',
      id: 'Sebuah nama untuk seseorang yang memiliki kemauan sekuat baja yang tidak dapat dipatahkan untuk meraih kemenangan melawan segala rintangan'
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
    en: 'A righteous cornerstone',
    ko: '올바른 주춧돌',
    fr: 'Une pierre angulaire juste',
    it: 'Una pietra angolare giusta',
    de: 'Ein rechtschaffener Eckstein',
    pt: 'Uma pedra angular justa',
    es: 'Una piedra angular justa',
    ja: '正しい礎石',
    th: 'ศิลาฤกษ์อันเที่ยงธรรม',
    id: 'Batu penjuru yang benar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          fr: 'droit, correct, juste',
          it: 'giusto, corretto, appropriato',
          de: 'richtig, korrekt, ordnungsgemäß',
          pt: 'certo, correto, adequado',
          es: 'correcto, justo, debido',
          ja: '正しい、適切な、正確な',
          th: 'ถูกต้อง, เหมาะสม, แม่นยำ',
          id: 'benar, tepat, sesuai'
        }
      },
      {
        korean: '석',
        hanja: '石',
        meaning: {
          en: 'stone, rock',
          ko: '돌, 바위',
          fr: 'pierre, rocher',
          it: 'pietra, roccia',
          de: 'Stein, Fels',
          pt: 'pedra, rocha',
          es: 'piedra, roca',
          ja: '石、岩',
          th: 'หิน, ศิลา',
          id: 'batu, karang'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will become a solid and upright foundation for their family and community',
      ko: '가족과 공동체를 위한 굳건하고 올바른 주춧돌 같은 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui deviendra une fondation solide et droite pour sa famille et sa communauté',
      it: 'Un nome per una persona che diventerà una solida e retta base per la propria famiglia e comunità',
      de: 'Ein Name für eine Person, die zu einem soliden und aufrechten Fundament für ihre Familie und Gemeinschaft wird',
      pt: 'Um nome para uma pessoa que se tornará uma base sólida e reta para sua família e comunidade',
      es: 'Un nombre para una persona que se convertirá en un cimiento sólido y recto para su familia y comunidad',
      ja: '家族や地域社会の堅固で正しい礎となる人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะเป็นรากฐานที่มั่นคงและเที่ยงตรงสำหรับครอบครัวและชุมชนของพวกเขา',
      id: 'Sebuah nama untuk seseorang yang akan menjadi fondasi yang kokoh dan lurus bagi keluarga dan komunitas mereka'
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
    en: 'A great treasure',
    ko: '위대한 보물',
    fr: 'Un grand trésor',
    it: 'Un grande tesoro',
    de: 'Ein großer Schatz',
    pt: 'Um grande tesouro',
    es: 'Un gran tesoro',
    ja: '偉大な宝物',
    th: 'สมบัติอันยิ่งใหญ่',
    id: 'Harta karun yang luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      },
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast, grand',
          ko: '큰, 넓은, 웅장한',
          fr: 'grand, vaste, magnifique',
          it: 'grande, vasto, magnifico',
          de: 'groß, weit, prächtig',
          pt: 'grande, vasto, grandioso',
          es: 'grande, vasto, grandioso',
          ja: '大きい、広大な、雄大な',
          th: 'ยิ่งใหญ่, กว้างใหญ่, โอ่อ่า',
          id: 'besar, luas, agung'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a great and precious being with a vast, open heart',
      ko: '넓고 큰 마음을 지닌, 위대하고 소중한 존재가 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un être grand et précieux doté d\'un cœur vaste et ouvert',
      it: 'Un nome che augura a una persona di essere un essere grande e prezioso con un cuore vasto e aperto',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein großes und kostbares Wesen mit einem weiten, offenen Herzen wird',
      pt: 'Um nome que deseja que uma pessoa seja um ser grande e precioso com um coração vasto e aberto',
      es: 'Un nombre que desea que una persona sea un ser grande y precioso con un corazón vasto y abierto',
      ja: '広く大きな心を持つ、偉大で貴重な存在になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ที่ยิ่งใหญ่และล้ำค่าด้วยหัวใจที่กว้างใหญ่และเปิดกว้าง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi makhluk yang agung dan berharga dengan hati yang luas dan terbuka'
    }
  }
}),
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
    en: 'A brightly shining room',
    ko: '밝게 빛나는 방',
    fr: 'Une chambre qui brille de mille feux',
    it: 'Una stanza che brilla luminosamente',
    de: 'Ein hell leuchtendes Zimmer',
    pt: 'Um quarto que brilha intensamente',
    es: 'Una habitación que brilla intensamente',
    ja: '明るく輝く部屋',
    th: 'ห้องที่ส่องสว่างสดใส',
    id: 'Ruangan yang bersinar terang'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '방',
        hanja: '房',
        meaning: {
          en: 'room, house; a family name',
          ko: '방, 집; 성씨',
          fr: 'chambre, maison ; un nom de famille',
          it: 'stanza, casa; un cognome',
          de: 'Zimmer, Haus; ein Familienname',
          pt: 'quarto, casa; um sobrenome',
          es: 'habitación, casa; un apellido',
          ja: '部屋、家; 姓',
          th: 'ห้อง, บ้าน; นามสกุล',
          id: 'kamar, rumah; sebuah nama keluarga'
        }
      },
      {
        korean: '찬',
        hanja: '燦',
        meaning: {
          en: 'brilliant, shining, splendid',
          ko: '찬란한, 빛나는',
          fr: 'brillant, éclatant, splendide',
          it: 'brillante, splendente, splendido',
          de: 'brillant, leuchtend, prächtig',
          pt: 'brilhante, resplandecente, esplêndido',
          es: 'brillante, resplandeciente, espléndido',
          ja: 'きらびやかな、輝く',
          th: 'สุกใส, ส่องแสง, งดงาม',
          id: 'cemerlang, bersinar, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will brighten any room they enter, filling their surroundings and the world with a splendid light',
      ko: '어떤 공간에 들어가든 그곳을 환하게 밝히고, 주변과 세상을 찬란한 빛으로 가득 채우는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui illuminera n\'importe quelle pièce où elle entrera, remplissant son entourage et le monde d\'une lumière splendide',
      it: 'Un nome per una persona che illuminerà qualsiasi stanza in cui entrerà, riempiendo l\'ambiente circostante e il mondo di una luce splendida',
      de: 'Ein Name für eine Person, die jeden Raum, den sie betritt, erhellen und ihre Umgebung und die Welt mit einem prächtigen Licht erfüllen wird',
      pt: 'Um nome para uma pessoa que iluminará qualquer cômodo em que entrar, preenchendo seu ambiente e o mundo com uma luz esplêndida',
      es: 'Un nombre para una persona que iluminará cualquier habitación en la que entre, llenando su entorno y el mundo con una luz espléndida',
      ja: 'どの部屋に入ってもそこを明るく照らし、周囲と世界を輝かしい光で満たす人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะทำให้ห้องใดก็ตามที่พวกเขาเข้าไปสว่างไสว เติมเต็มสภาพแวดล้อมและโลกด้วยแสงอันงดงาม',
      id: 'Sebuah nama untuk seseorang yang akan mencerahkan setiap ruangan yang mereka masuki, mengisi lingkungan sekitar dan dunia dengan cahaya yang indah'
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
    en: 'A spear that shines with refinement',
    ko: '빛나고 세련된 창',
    fr: 'Une lance qui brille de raffinement',
    it: 'Una lancia che brilla di raffinatezza',
    de: 'Ein Speer, der vor Raffinesse glänzt',
    pt: 'Uma lança que brilha com requinte',
    es: 'Una lanza que brilla con refinamiento',
    ja: '輝き洗練された槍',
    th: 'หอกที่ส่องประกายด้วยความงดงาม',
    id: 'Tombak yang bersinar dengan kehalusan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '창',
        hanja: '槍',
        meaning: {
          en: 'spear, lance',
          ko: '창',
          fr: 'lance',
          it: 'lancia',
          de: 'Speer, Lanze',
          pt: 'lança',
          es: 'lanza',
          ja: '槍',
          th: 'หอก',
          id: 'tombak'
        }
      },
      {
        korean: '빈',
        hanja: '彬',
        meaning: {
          en: 'refined, cultivated, shining',
          ko: '세련된, 교양있는, 빛나는',
          fr: 'raffiné, cultivé, brillant',
          it: 'raffinato, colto, brillante',
          de: 'raffiniert, kultiviert, leuchtend',
          pt: 'refinado, cultivado, brilhante',
          es: 'refinado, cultivado, brillante',
          ja: '洗練された、教養のある、輝く',
          th: 'ขัดเกลา, มีวัฒนธรรม, ส่องแสง',
          id: 'halus, berbudaya, bersinar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a sharp, piercing insight like a spear, and a brilliantly refined character',
      ko: '창처럼 날카롭고 꿰뚫는 통찰력과, 빛나고 세련된 품성을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède une perspicacité aiguë et perçante comme une lance, et un caractère brillamment raffiné',
      it: 'Un nome per una persona che possiede un\'intuizione acuta e penetrante come una lancia, e un carattere brillantemente raffinato',
      de: 'Ein Name für eine Person, die eine scharfe, durchdringende Einsicht wie ein Speer und einen brillant verfeinerten Charakter besitzt',
      pt: 'Um nome para uma pessoa que possui uma visão afiada e penetrante como uma lança, e um caráter brilhantemente refinado',
      es: 'Un nombre para una persona que posee una perspicacia aguda y penetrante como una lanza, y un carácter brillantemente refinado',
      ja: '槍のように鋭く突き刺す洞察力と、輝かしく洗練された人格を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีสายตาที่เฉียบคมและแหลมคมดุจหอก และมีอุปนิสัยที่งดงามและขัดเกลา',
      id: 'Sebuah nama untuk seseorang yang memiliki wawasan yang tajam dan menusuk seperti tombak, dan karakter yang sangat halus'
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
    en: 'Good and excellent',
    ko: '선하고 뛰어난',
    fr: 'Bon et excellent',
    it: 'Buono ed eccellente',
    de: 'Gut und ausgezeichnet',
    pt: 'Bom e excelente',
    es: 'Bueno y excelente',
    ja: '善良で優れた',
    th: 'ดีงามและยอดเยี่ยม',
    id: 'Baik dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '선',
        hanja: '善',
        meaning: {
          en: 'good, virtuous, kind',
          ko: '착한, 선량한, 친절한',
          fr: 'bon, vertueux, gentil',
          it: 'buono, virtuoso, gentile',
          de: 'gut, tugendhaft, freundlich',
          pt: 'bom, virtuoso, gentil',
          es: 'bueno, virtuoso, amable',
          ja: '良い、善良な、親切な',
          th: 'ดี, มีคุณธรรม, ใจดี',
          id: 'baik, berbudi luhur, ramah'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be an outstanding individual with a kind and gentle heart',
      ko: '선하고 부드러운 마음씨와 함께, 뛰어난 능력을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un individu exceptionnel doté d\'un cœur bon et doux',
      it: 'Un nome che augura a una persona di essere un individuo eccezionale con un cuore gentile e buono',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine herausragende Persönlichkeit mit einem gütigen und sanften Herzen wird',
      pt: 'Um nome que deseja que uma pessoa seja um indivíduo excepcional com um coração bom e gentil',
      es: 'Un nombre que desea que una persona sea un individuo excepcional con un corazón bueno y gentil',
      ja: '善良で優しい心を持ち、優れた能力を持つ人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ที่โดดเด่นและมีหัวใจที่ใจดีและอ่อนโยน',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang luar biasa dengan hati yang baik dan lembut'
    }
  },
  kpopMember: { group: 'THE BOYZ', memberName: 'Sunwoo' }
}),
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
    en: 'The Summer Kirin',
    ko: '여름의 기린',
    fr: 'Le Kirin d\'été',
    it: 'Il Kirin estivo',
    de: 'Der Sommer-Kirin',
    pt: 'O Kirin de verão',
    es: 'El Kirin de verano',
    ja: '夏の麒麟',
    th: 'กิเลนแห่งฤดูร้อน',
    id: 'Kirin musim panas'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '하',
        hanja: '夏',
        meaning: {
          en: 'summer',
          ko: '여름',
          fr: 'été',
          it: 'estate',
          de: 'Sommer',
          pt: 'verão',
          es: 'verano',
          ja: '夏',
          th: 'ฤดูร้อน',
          id: 'musim panas'
        }
      },
      {
        korean: '린',
        hanja: '麟',
        meaning: {
          en: 'Kirin (mythical creature), genius',
          ko: '기린 (상상의 동물), 천재',
          fr: 'Kirin (créature mythique), génie',
          it: 'Kirin (creatura mitica), genio',
          de: 'Kirin (mythisches Wesen), Genie',
          pt: 'Kirin (criatura mítica), gênio',
          es: 'Kirin (criatura mítica), genio',
          ja: '麒麟（神話の生き物）、天才',
          th: 'กิเลน (สัตว์ในตำนาน), อัจฉริยะ',
          id: 'Kirin (makhluk mitos), jenius'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a rare and auspicious person, possessing the brilliant energy of summer and the noble spirit of a Kirin',
      ko: '여름의 찬란한 기운과 기린의 고귀한 영혼을 지닌, 희귀하고 상서로운 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne rare et de bon augure, possédant l\'énergie brillante de l\'été et l\'esprit noble d\'un Kirin',
      it: 'Un nome per una persona rara e di buon auspicio, che possiede l\'energia brillante dell\'estate e lo spirito nobile di un Kirin',
      de: 'Ein Name für eine seltene und glückverheißende Person, die die brillante Energie des Sommers und den edlen Geist eines Kirin besitzt',
      pt: 'Um nome para uma pessoa rara e auspiciosa, possuindo a energia brilhante do verão e o espírito nobre de um Kirin',
      es: 'Un nombre para una persona rara y auspiciosa, que posee la energía brillante del verano y el espíritu noble de un Kirin',
      ja: '夏の輝かしいエネルギーと麒麟の高貴な精神を持つ、希少で縁起の良い人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่หายากและเป็นมงคล ผู้มีพลังอันเจิดจ้าของฤดูร้อนและจิตวิญญาณอันสูงส่งของกิเลน',
      id: 'Sebuah nama untuk orang yang langka dan membawa pertanda baik, yang memiliki energi cemerlang musim panas dan semangat mulia seekor Kirin'
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
    en: 'Small glory',
    ko: '작은 영광',
    fr: 'Petite gloire',
    it: 'Piccola gloria',
    de: 'Kleiner Ruhm',
    pt: 'Pequena glória',
    es: 'Pequeña gloria',
    ja: '小さな栄光',
    th: 'ความรุ่งโรจน์เล็กๆ',
    id: 'Kemuliaan kecil'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '소',
        hanja: '小',
        meaning: {
          en: 'small, little',
          ko: '작은',
          fr: 'petit',
          it: 'piccolo',
          de: 'klein',
          pt: 'pequeno',
          es: 'pequeño',
          ja: '小さい',
          th: 'เล็ก',
          id: 'kecil'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to find precious glory and happiness in the small, everyday moments of life',
      ko: '삶의 작고 소소한 순간들 속에서 소중한 영광과 행복을 찾기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne trouve une gloire et un bonheur précieux dans les petits moments du quotidien',
      it: 'Un nome che augura a una persona di trovare gloria e felicità preziose nei piccoli momenti di ogni giorno',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person in den kleinen, alltäglichen Momenten des Lebens kostbaren Ruhm und Glück findet',
      pt: 'Um nome que deseja que uma pessoa encontre glória e felicidade preciosas nos pequenos momentos do dia a dia',
      es: 'Un nombre que desea que una persona encuentre una gloria y felicidad preciosas en los pequeños momentos de la vida cotidiana',
      ja: '日々の小さな瞬間に貴重な栄光と幸福を見出すことを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลค้นพบความรุ่งโรจน์และความสุขอันล้ำค่าในช่วงเวลาเล็กๆ ในชีวิตประจำวัน',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menemukan kemuliaan dan kebahagiaan yang berharga dalam momen-momen kecil sehari-hari'
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
    en: 'Righteous grace',
    ko: '올바른 은혜',
    fr: 'Grâce juste',
    it: 'Grazia giusta',
    de: 'Rechtschaffene Gnade',
    pt: 'Graça justa',
    es: 'Gracia justa',
    ja: '正しい恩恵',
    th: 'พระคุณอันเที่ยงธรรม',
    id: 'Anugerah yang benar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          fr: 'droit, correct, juste',
          it: 'giusto, corretto, appropriato',
          de: 'richtig, korrekt, ordnungsgemäß',
          pt: 'certo, correto, adequado',
          es: 'correcto, justo, debido',
          ja: '正しい、適切な、正確な',
          th: 'ถูกต้อง, เหมาะสม, แม่นยำ',
          id: 'benar, tepat, sesuai'
        }
      },
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor, kindness',
          ko: '은혜, 호의, 친절',
          fr: 'grâce, faveur, gentillesse',
          it: 'grazia, favore, gentilezza',
          de: 'Gnade, Gunst, Freundlichkeit',
          pt: 'graça, favor, bondade',
          es: 'gracia, favor, amabilidad',
          ja: '恩恵、好意、親切',
          th: 'พระคุณ, ความโปรดปราน, ความเมตตา',
          id: 'anugerah, kebaikan, kemurahan hati'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who gives and receives kindness and grace in a just and upright manner',
      ko: '정의롭고 올바른 방식으로 친절과 은혜를 베풀고 또 받는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui donne et reçoit la gentillesse et la grâce d\'une manière juste et droite',
      it: 'Un nome per una persona che dà e riceve gentilezza e grazia in modo giusto e retto',
      de: 'Ein Name für eine Person, die auf gerechte und aufrechte Weise Freundlichkeit und Gnade gibt und empfängt',
      pt: 'Um nome para uma pessoa que dá e recebe bondade e graça de maneira justa e reta',
      es: 'Un nombre para una persona que da y recibe bondad y gracia de una manera justa y recta',
      ja: '正しく公正な方法で親切と恵みを与え、受け取る人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่ให้และรับความเมตตาและพระคุณในลักษณะที่ยุติธรรมและเที่ยงตรง',
      id: 'Sebuah nama untuk seseorang yang memberi dan menerima kebaikan dan anugerah dengan cara yang adil dan benar'
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
    en: 'Wisdom as clear as water',
    ko: '물처럼 맑은 지혜',
    fr: 'Une sagesse claire comme de l\'eau',
    it: 'Saggezza chiara come l\'acqua',
    de: 'Weisheit, klar wie Wasser',
    pt: 'Sabedoria clara como a água',
    es: 'Sabiduría clara como el agua',
    ja: '水のように澄んだ知恵',
    th: 'ปัญญาที่ใสดุจน้ำ',
    id: 'Kebijaksanaan yang jernih seperti air'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '혜',
        hanja: '慧',
        meaning: {
          en: 'wise, intelligent, bright',
          ko: '지혜로운, 총명한, 밝은',
          fr: 'sage, intelligent, brillant',
          it: 'saggio, intelligente, brillante',
          de: 'weise, intelligent, hell',
          pt: 'sábio, inteligente, brilhante',
          es: 'sabio, inteligente, brillante',
          ja: '賢い、聡明な',
          th: 'ฉลาด, หลักแหลม, สดใส',
          id: 'bijaksana, cerdas, cerah'
        }
      },
      {
        korean: '린',
        hanja: '潾',
        meaning: {
          en: 'clear water, limpid',
          ko: '맑은 물, 투명한',
          fr: 'eau claire, limpide',
          it: 'acqua limpida, trasparente',
          de: 'klares Wasser, durchsichtig',
          pt: 'água clara, límpida',
          es: 'agua clara, límpida',
          ja: '澄んだ水、清らかな',
          th: 'น้ำใส, กระจ่าง',
          id: 'air jernih, bening'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a bright and clear wisdom that purifies and clarifies the world around them',
      ko: '주변 세상을 정화하고 명료하게 만드는, 물처럼 맑고 밝은 지혜를 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède une sagesse vive et claire qui purifie et clarifie le monde qui l\'entoure',
      it: 'Un nome per una persona che possiede una saggezza brillante e chiara che purifica e chiarisce il mondo che la circonda',
      de: 'Ein Name für eine Person, die eine helle und klare Weisheit besitzt, die die Welt um sie herum reinigt und klärt',
      pt: 'Um nome para uma pessoa que possui uma sabedoria brilhante e clara que purifica e clarifica o mundo ao seu redor',
      es: 'Un nombre para una persona que posee una sabiduría brillante y clara que purifica y clarifica el mundo que la rodea',
      ja: '周りの世界を浄化し、明確にする、水のように澄んで明るい知恵を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีปัญญาอันสดใสและชัดเจนซึ่งชำระล้างและทำให้โลกรอบตัวกระจ่างใส',
      id: 'Sebuah nama untuk seseorang yang memiliki kebijaksanaan yang cerah dan jernih yang memurnikan dan memperjelas dunia di sekitar mereka'
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
    en: 'An outstanding crystal',
    ko: '빼어난 수정',
    fr: 'Un cristal exceptionnel',
    it: 'Un cristallo eccezionale',
    de: 'Ein herausragender Kristall',
    pt: 'Um cristal excepcional',
    es: 'Un cristal excepcional',
    ja: '秀でた水晶',
    th: 'คริสตัลอันโดดเด่น',
    id: 'Kristal yang luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      },
      {
        korean: '정',
        hanja: '晶',
        meaning: {
          en: 'crystal, clear, brilliant',
          ko: '수정, 맑은, 빛나는',
          fr: 'cristal, clair, brillant',
          it: 'cristallo, chiaro, brillante',
          de: 'Kristall, klar, brillant',
          pt: 'cristal, claro, brilhante',
          es: 'cristal, claro, brillante',
          ja: '水晶、澄んだ、輝く',
          th: 'คริสตัล, ใส, สว่างไสว',
          id: 'kristal, jernih, cemerlang'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses an outstanding talent and a clear, brilliant soul like a crystal',
      ko: '수정처럼 맑고 빛나는 영혼과 빼어난 재능을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède un talent exceptionnel et une âme claire et brillante comme un cristal',
      it: 'Un nome per una persona che possiede un talento eccezionale e un\'anima chiara e brillante come un cristallo',
      de: 'Ein Name für eine Person, die ein herausragendes Talent und eine klare, brillante Seele wie ein Kristall besitzt',
      pt: 'Um nome para uma pessoa que possui um talento excepcional e uma alma clara e brilhante como um cristal',
      es: 'Un nombre para una persona que posee un talento excepcional y un alma clara y brillante como un cristal',
      ja: '水晶のように澄んで輝く魂と、優れた才能を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีพรสวรรค์อันโดดเด่นและจิตวิญญาณที่ใสกระจ่างและสดใสดุจคริสตัล',
      id: 'Sebuah nama untuk seseorang yang memiliki bakat luar biasa dan jiwa yang jernih dan cemerlang seperti kristal'
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
    en: 'Precious glory',
    ko: '귀한 영광',
    fr: 'Gloire précieuse',
    it: 'Gloria preziosa',
    de: 'Kostbarer Ruhm',
    pt: 'Glória preciosa',
    es: 'Gloria preciosa',
    ja: '貴重な栄光',
    th: 'เกียรติยศอันล้ำค่า',
    id: 'Kemuliaan yang berharga'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a treasured being who achieves precious honor and prosperity',
      ko: '귀한 명예와 번영을 이루어내는 소중한 존재가 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un être chéri qui atteint un honneur et une prospérité précieux',
      it: 'Un nome che augura a una persona di essere un essere prezioso che raggiunge onore e prosperità preziosi',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein geschätztes Wesen wird, das kostbare Ehre und Wohlstand erlangt',
      pt: 'Um nome que deseja que uma pessoa seja um ser querido que alcança honra e prosperidade preciosas',
      es: 'Un nombre que desea que una persona sea un ser atesorado que alcance un honor y una prosperidad preciosos',
      ja: '貴重な名誉と繁栄を達成する大切な存在になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ล้ำค่าที่บรรลุเกียรติยศและความเจริญรุ่งเรืองอันล้ำค่า',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi makhluk berharga yang mencapai kehormatan dan kemakmuran yang berharga'
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
    en: 'Righteous and elegant',
    ko: '올바르고 우아한',
    fr: 'Juste et élégante',
    it: 'Giusta ed elegante',
    de: 'Rechtschaffen und elegant',
    pt: 'Justa e elegante',
    es: 'Justa y elegante',
    ja: '正しくて優雅な',
    th: 'เที่ยงธรรมและสง่างาม',
    id: 'Benar dan anggun'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          fr: 'droit, correct, juste',
          it: 'giusto, corretto, appropriato',
          de: 'richtig, korrekt, ordnungsgemäß',
          pt: 'certo, correto, adequado',
          es: 'correcto, justo, debido',
          ja: '正しい、適切な、正確な',
          th: 'ถูกต้อง, เหมาะสม, แม่นยำ',
          id: 'benar, tepat, sesuai'
        }
      },
      {
        korean: '아',
        hanja: '雅',
        meaning: {
          en: 'elegant, graceful, refined',
          ko: '우아한, 고상한, 세련된',
          fr: 'élégant, gracieux, raffiné',
          it: 'elegante, grazioso, raffinato',
          de: 'elegant, anmutig, raffiniert',
          pt: 'elegante, gracioso, refinado',
          es: 'elegante, garboso, refinado',
          ja: '優雅な、上品な、洗練された',
          th: 'สง่างาม, นุ่มนวล, ประณีต',
          id: 'anggun, elok, halus'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses both an upright, righteous character and a refined, elegant grace',
      ko: '올곧고 바른 성품과 세련되고 우아한 기품을 모두 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède à la fois un caractère droit et juste et une grâce raffinée et élégante',
      it: 'Un nome per una persona che possiede sia un carattere retto e giusto sia una grazia raffinata ed elegante',
      de: 'Ein Name für eine Person, die sowohl einen aufrechten, rechtschaffenen Charakter als auch eine verfeinerte, elegante Anmut besitzt',
      pt: 'Um nome para uma pessoa que possui tanto um caráter reto e justo quanto uma graça refinada e elegante',
      es: 'Un nombre para una persona que posee tanto un carácter recto y justo como una gracia refinada y elegante',
      ja: '真っ直ぐで正しい人格と、洗練された優雅な気品を兼ね備えた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีทั้งอุปนิสัยที่เที่ยงตรงและสง่างามและขัดเกลา',
      id: 'Sebuah nama untuk seseorang yang memiliki karakter yang lurus dan benar serta keanggunan yang halus dan elegan'
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
    en: 'A small, brilliant crystal',
    ko: '작고 빛나는 수정',
    fr: 'Un petit cristal brillant',
    it: 'Un piccolo cristallo brillante',
    de: 'Ein kleiner, brillanter Kristall',
    pt: 'Um pequeno cristal brilhante',
    es: 'Un pequeño cristal brillante',
    ja: '小さく輝く水晶',
    th: 'คริสตัลเล็กๆ ที่ส่องประกาย',
    id: 'Kristal kecil yang cemerlang'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '소',
        hanja: '小',
        meaning: {
          en: 'small, little',
          ko: '작은',
          fr: 'petit',
          it: 'piccolo',
          de: 'klein',
          pt: 'pequeno',
          es: 'pequeño',
          ja: '小さい',
          th: 'เล็ก',
          id: 'kecil'
        }
      },
      {
        korean: '정',
        hanja: '晶',
        meaning: {
          en: 'crystal, clear, brilliant',
          ko: '수정, 맑은, 빛나는',
          fr: 'cristal, clair, brillant',
          it: 'cristallo, chiaro, brillante',
          de: 'Kristall, klar, brillant',
          pt: 'cristal, claro, brilhante',
          es: 'cristal, claro, brillante',
          ja: '水晶、澄んだ、輝く',
          th: 'คริสตัล, ใส, สว่างไสว',
          id: 'kristal, jernih, cemerlang'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a precious being who shines with a clear and brilliant light, like a small but perfectly formed crystal',
      ko: '작지만 완벽한 수정처럼, 맑고 찬란한 빛으로 빛나는 소중한 존재가 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un être précieux qui brille d\'une lumière claire et brillante, comme un petit cristal parfaitement formé',
      it: 'Un nome che augura a una persona di essere un essere prezioso che brilla di una luce chiara e brillante, come un piccolo cristallo perfettamente formato',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein kostbares Wesen wird, das mit einem klaren und brillanten Licht scheint, wie ein kleiner, aber perfekt geformter Kristall',
      pt: 'Um nome que deseja que uma pessoa seja um ser precioso que brilha com uma luz clara e brilhante, como um pequeno cristal perfeitamente formado',
      es: 'Un nombre que desea que una persona sea un ser precioso que brille con una luz clara y brillante, como un pequeño cristal perfectamente formado',
      ja: '小さいながらも完璧に形成された水晶のように、澄んで輝く光で輝く貴重な存在になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ล้ำค่าที่ส่องแสงด้วยแสงที่ใสและสว่างไสวดุจคริสตัลเล็กๆ ที่ก่อตัวขึ้นอย่างสมบูรณ์แบบ',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi makhluk berharga yang bersinar dengan cahaya yang jernih dan cemerlang, seperti kristal kecil yang terbentuk sempurna'
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
    en: 'A precious wisdom',
    ko: '귀한 지혜',
    fr: 'Une sagesse précieuse',
    it: 'Una saggezza preziosa',
    de: 'Eine kostbare Weisheit',
    pt: 'Uma sabedoria preciosa',
    es: 'Una sabiduría preciosa',
    ja: '貴重な知恵',
    th: 'ปัญญาอันล้ำค่า',
    id: 'Kebijaksanaan yang berharga'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '혜',
        hanja: '慧',
        meaning: {
          en: 'wise, intelligent, bright',
          ko: '지혜로운, 총명한, 밝은',
          fr: 'sage, intelligent, brillant',
          it: 'saggio, intelligente, brillante',
          de: 'weise, intelligent, hell',
          pt: 'sábio, inteligente, brilhante',
          es: 'sabio, inteligente, brillante',
          ja: '賢い、聡明な',
          th: 'ฉลาด, หลักแหลม, สดใส',
          id: 'bijaksana, cerdas, cerah'
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who is a treasured being, possessing a bright and precious wisdom',
      ko: '밝고 귀한 지혜를 지닌, 보물처럼 소중한 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui est un être chéri, possédant une sagesse vive et précieuse',
      it: 'Un nome per una persona che è un essere prezioso, che possiede una saggezza brillante e preziosa',
      de: 'Ein Name für eine Person, die ein geschätztes Wesen ist und eine helle und kostbare Weisheit besitzt',
      pt: 'Um nome para uma pessoa que é um ser querido, possuindo uma sabedoria brilhante e preciosa',
      es: 'Un nombre para una persona que es un ser atesorado, que posee una sabiduría brillante y preciosa',
      ja: '明るく貴重な知恵を持つ、宝物のような大切な人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้เป็นที่รัก ผู้มีปัญญาอันสดใสและล้ำค่า',
      id: 'Sebuah nama untuk seseorang yang merupakan makhluk yang berharga, yang memiliki kebijaksanaan yang cerah dan berharga'
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
    en: 'An outstanding treasure',
    ko: '빼어난 보물',
    fr: 'Un trésor exceptionnel',
    it: 'Un tesoro eccezionale',
    de: 'Ein herausragender Schatz',
    pt: 'Um tesouro excepcional',
    es: 'Un tesoro excepcional',
    ja: '秀でた宝物',
    th: 'สมบัติอันโดดเด่น',
    id: 'Harta karun yang luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a precious and outstanding individual, as valuable as a rare treasure',
      ko: '희귀한 보물처럼 가치 있는, 귀하고 뛰어난 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un individu précieux et exceptionnel, aussi précieux qu\'un trésor rare',
      it: 'Un nome che augura a una persona di essere un individuo prezioso ed eccezionale, prezioso come un tesoro raro',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine kostbare und herausragende Persönlichkeit wird, so wertvoll wie ein seltener Schatz',
      pt: 'Um nome que deseja que uma pessoa seja um indivíduo precioso e excepcional, tão valioso quanto um tesouro raro',
      es: 'Un nombre que desea que una persona sea un individuo precioso y excepcional, tan valioso como un tesoro raro',
      ja: '希少な宝物のように価値のある、貴重で優れた人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ที่ล้ำค่าและโดดเด่น มีค่าดั่งสมบัติหายาก',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang berharga dan luar biasa, sama berharganya dengan harta karun yang langka'
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
    en: 'Silver glory',
    ko: '은빛 영광',
    fr: 'Gloire d\'argent',
    it: 'Gloria d\'argento',
    de: 'Silberner Ruhm',
    pt: 'Glória de prata',
    es: 'Gloria de plata',
    ja: '銀の栄光',
    th: 'เกียรติยศสีเงิน',
    id: 'Kemuliaan perak'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '은',
        hanja: '銀',
        meaning: {
          en: 'silver; money',
          ko: '은; 돈',
          fr: 'argent ; monnaie',
          it: 'argento; denaro',
          de: 'Silber; Geld',
          pt: 'prata; dinheiro',
          es: 'plata; dinero',
          ja: '銀; お金',
          th: 'เงิน; เงินตรา',
          id: 'perak; uang'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a prosperous and honorable life that shines with a gentle, beautiful light like silver',
      ko: '은처럼 은은하고 아름다운 빛으로 빛나는, 번영하고 명예로운 삶을 살기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait une vie prospère et honorable qui brille d\'une lumière douce et belle comme l\'argent',
      it: 'Un nome che augura a una persona di avere una vita prospera e onorevole che brilli di una luce gentile e bella come l\'argento',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein erfolgreiches und ehrenhaftes Leben führt, das mit einem sanften, schönen Licht wie Silber scheint',
      pt: 'Um nome que deseja que uma pessoa tenha uma vida próspera e honrosa que brilhe com uma luz suave e bela como a prata',
      es: 'Un nombre que desea que una persona tenga una vida próspera y honorable que brille con una luz suave y hermosa como la plata',
      ja: '銀のように優しく美しい光で輝く、繁栄した名誉ある人生を送ることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีชีวิตที่เจริญรุ่งเรืองและมีเกียรติซึ่งส่องประกายด้วยแสงที่อ่อนโยนและสวยงามดุจเงิน',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki kehidupan yang makmur dan terhormat yang bersinar dengan cahaya yang lembut dan indah seperti perak'
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
    en: 'Righteous and wise',
    ko: '올바르고 현명한',
    fr: 'Juste et sage',
    it: 'Giusta e saggia',
    de: 'Rechtschaffen und weise',
    pt: 'Justa e sábia',
    es: 'Justa y sabia',
    ja: '正しくて賢い',
    th: 'เที่ยงธรรมและฉลาด',
    id: 'Benar dan bijaksana'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          fr: 'droit, correct, juste',
          it: 'giusto, corretto, appropriato',
          de: 'richtig, korrekt, ordnungsgemäß',
          pt: 'certo, correto, adequado',
          es: 'correcto, justo, debido',
          ja: '正しい、適切な、正確な',
          th: 'ถูกต้อง, เหมาะสม, แม่นยำ',
          id: 'benar, tepat, sesuai'
        }
      },
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses both an upright, righteous character and the wisdom to act upon it',
      ko: '올곧은 성품과 그것을 실천할 현명함을 모두 갖춘 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède à la fois un caractère droit et juste et la sagesse d\'agir en conséquence',
      it: 'Un nome per una persona che possiede sia un carattere retto e giusto sia la saggezza di agire di conseguenza',
      de: 'Ein Name für eine Person, die sowohl einen aufrechten, rechtschaffenen Charakter als auch die Weisheit besitzt, danach zu handeln',
      pt: 'Um nome para uma pessoa que possui tanto um caráter reto e justo quanto a sabedoria para agir de acordo com ele',
      es: 'Un nombre para una persona que posee tanto un carácter recto y justo como la sabiduría para actuar en consecuencia',
      ja: '正しい人格とそれに基づいて行動する賢明さを兼ね備えた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีทั้งอุปนิสัยที่เที่ยงตรงและปัญญาที่จะปฏิบัติตาม',
      id: 'Sebuah nama untuk seseorang yang memiliki karakter yang lurus dan benar serta kebijaksanaan untuk menindaklanjutinya'
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
    en: 'A small treasure',
    ko: '작은 보물',
    fr: 'Un petit trésor',
    it: 'Un piccolo tesoro',
    de: 'Ein kleiner Schatz',
    pt: 'Um pequeno tesouro',
    es: 'Un pequeño tesoro',
    ja: '小さな宝物',
    th: 'สมบัติชิ้นเล็ก',
    id: 'Harta karun kecil'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '소',
        hanja: '小',
        meaning: {
          en: 'small, little',
          ko: '작은',
          fr: 'petit',
          it: 'piccolo',
          de: 'klein',
          pt: 'pequeno',
          es: 'pequeño',
          ja: '小さい',
          th: 'เล็ก',
          id: 'kecil'
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a cherished being, a small but infinitely precious treasure to their loved ones',
      ko: '사랑하는 사람들에게 작지만 무한히 소중한 보물, 즉 사랑받는 존재가 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un être chéri, un petit trésor infiniment précieux pour ses proches',
      it: 'Un nome che augura a una persona di essere un essere amato, un piccolo ma infinitamente prezioso tesoro per i suoi cari',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein geschätztes Wesen wird, ein kleiner, aber unendlich kostbarer Schatz für ihre Lieben',
      pt: 'Um nome que deseja que uma pessoa seja um ser querido, um tesouro pequeno mas infinitamente precioso para seus entes queridos',
      es: 'Un nombre que desea que una persona sea un ser querido, un tesoro pequeño pero infinitamente precioso para sus seres queridos',
      ja: '愛する人にとって、小さいけれど無限に貴重な宝物、愛される存在になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้เป็นที่รัก สมบัติชิ้นเล็กๆ แต่ล้ำค่าอย่างไม่มีที่สิ้นสุดสำหรับคนที่รัก',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi makhluk yang disayangi, harta karun kecil namun tak terhingga berharganya bagi orang yang mereka cintai'
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
    en: 'Wise glory',
    ko: '지혜로운 영광',
    fr: 'Gloire sage',
    it: 'Gloria saggia',
    de: 'Weiser Ruhm',
    pt: 'Glória sábia',
    es: 'Gloria sabia',
    ja: '賢い栄光',
    th: 'เกียรติยศอันชาญฉลาด',
    id: 'Kemuliaan yang bijaksana'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '혜',
        hanja: '慧',
        meaning: {
          en: 'wise, intelligent, bright',
          ko: '지혜로운, 총명한, 밝은',
          fr: 'sage, intelligent, brillant',
          it: 'saggio, intelligente, brillante',
          de: 'weise, intelligent, hell',
          pt: 'sábio, inteligente, brilhante',
          es: 'sabio, inteligente, brillante',
          ja: '賢い、聡明な',
          th: 'ฉลาด, หลักแหลม, สดใส',
          id: 'bijaksana, cerdas, cerah'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will achieve glory and prosperity through their bright wisdom and intelligence',
      ko: '밝은 지혜와 총명함으로 영광과 번영을 이루는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui atteindra la gloire et la prospérité grâce à sa vive sagesse et son intelligence',
      it: 'Un nome per una persona che raggiungerà la gloria e la prosperità attraverso la sua brillante saggezza e intelligenza',
      de: 'Ein Name für eine Person, die durch ihre helle Weisheit und Intelligenz Ruhm und Wohlstand erlangen wird',
      pt: 'Um nome para uma pessoa que alcançará glória e prosperidade através de sua brilhante sabedoria e inteligência',
      es: 'Un nombre para una persona que alcanzará la gloria y la prosperidad a través de su brillante sabiduría e inteligencia',
      ja: '明るい知恵と聡明さによって栄光と繁栄を達成する人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะบรรลุถึงเกียรติยศและความเจริญรุ่งเรืองผ่านทางปัญญาและความฉลาดหลักแหลมของตน',
      id: 'Sebuah nama untuk seseorang yang akan mencapai kemuliaan dan kemakmuran melalui kebijaksanaan dan kecerdasan mereka yang cemerlang'
    }
  }
}),
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
    en: 'A precious dragon',
    ko: '귀한 용',
    fr: 'Un dragon précieux',
    it: 'Un drago prezioso',
    de: 'Ein kostbarer Drache',
    pt: 'Um dragão precioso',
    es: 'Un dragón precioso',
    ja: '貴重な龍',
    th: 'มังกรล้ำค่า',
    id: 'Naga yang berharga'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '류',
        hanja: '龍',
        meaning: {
          en: 'dragon',
          ko: '용',
          fr: 'dragon',
          it: 'drago',
          de: 'Drache',
          pt: 'dragão',
          es: 'dragón',
          ja: '龍',
          th: 'มังกร',
          id: 'naga'
        }
      },
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a powerful and precious being, possessing the noble and mighty spirit of a dragon',
      ko: '용의 고귀하고 강대한 기상을 지닌, 강력하고 소중한 존재가 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un être puissant et précieux, possédant l\'esprit noble et puissant d\'un dragon',
      it: 'Un nome che augura a una persona di essere un essere potente e prezioso, che possiede lo spirito nobile e possente di un drago',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein mächtiges und kostbares Wesen wird, das den edlen und mächtigen Geist eines Drachen besitzt',
      pt: 'Um nome que deseja que uma pessoa seja um ser poderoso e precioso, possuindo o espírito nobre e poderoso de um dragão',
      es: 'Un nombre que desea que una persona sea un ser poderoso y precioso, que posea el espíritu noble y poderoso de un dragón',
      ja: '龍の高貴で強力な精神を持つ、強力で貴重な存在になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ทรงพลังและล้ำค่า ผู้มีจิตวิญญาณอันสูงส่งและยิ่งใหญ่ของมังกร',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi makhluk yang kuat dan berharga, yang memiliki semangat naga yang mulia dan perkasa'
    }
  },
  kpopMember: { group: 'ITZY', memberName: 'Ryujin' }
}),
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
    en: 'Gracious excellence',
    ko: '은혜롭고 뛰어난',
    fr: 'Excellence gracieuse',
    it: 'Eccellenza graziosa',
    de: 'Gnädige Exzellenz',
    pt: 'Excelência graciosa',
    es: 'Excelencia cortés',
    ja: '恵み深く優れた',
    th: 'ความเป็นเลิศอันเปี่ยมด้วยพระคุณ',
    id: 'Keunggulan yang murah hati'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '은',
        hanja: '恩',
        meaning: {
          en: 'grace, favor, kindness',
          ko: '은혜, 호의, 친절',
          fr: 'grâce, faveur, gentillesse',
          it: 'grazia, favore, gentilezza',
          de: 'Gnade, Gunst, Freundlichkeit',
          pt: 'graça, favor, bondade',
          es: 'gracia, favor, amabilidad',
          ja: '恩恵、好意、親切',
          th: 'พระคุณ, ความโปรดปราน, ความเมตตา',
          id: 'anugerah, kebaikan, kemurahan hati'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who has outstanding abilities and a gracious character that is a blessing to others',
      ko: '다른 사람에게 축복이 되는 은혜로운 성품과 뛰어난 능력을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui a des capacités exceptionnelles et un caractère bienveillant qui est une bénédiction pour les autres',
      it: 'Un nome per una persona che ha capacità eccezionali e un carattere grazioso che è una benedizione per gli altri',
      de: 'Ein Name für eine Person, die über herausragende Fähigkeiten und einen gütigen Charakter verfügt, der für andere ein Segen ist',
      pt: 'Um nome para uma pessoa que tem habilidades excepcionais e um caráter gracioso que é uma bênção para os outros',
      es: 'Un nombre para una persona que tiene habilidades excepcionales y un carácter cortés que es una bendición para los demás',
      ja: '他者への祝福となる恵み深い人格と優れた能力を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีความสามารถที่โดดเด่นและมีอุปนิสัยอันดีงามซึ่งเป็นพรแก่ผู้อื่น',
      id: 'Sebuah nama untuk seseorang yang memiliki kemampuan luar biasa dan karakter ramah yang menjadi berkat bagi orang lain'
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
    en: 'A great and remarkable talent',
    ko: '위대하고 뛰어난 인재',
    fr: 'Un talent grand et remarquable',
    it: 'Un talento grande e notevole',
    de: 'Ein großes und bemerkenswertes Talent',
    pt: 'Um grande e notável talento',
    es: 'Un gran y notable talento',
    ja: '偉大で優れた才能',
    th: 'ผู้มีพรสวรรค์อันยิ่งใหญ่และโดดเด่น',
    id: 'Bakat yang hebat dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      },
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast, grand',
          ko: '큰, 넓은, 웅장한',
          fr: 'grand, vaste, magnifique',
          it: 'grande, vasto, magnifico',
          de: 'groß, weit, prächtig',
          pt: 'grande, vasto, grandioso',
          es: 'grande, vasto, grandioso',
          ja: '大きい、広大な、雄大な',
          th: 'ยิ่งใหญ่, กว้างใหญ่, โอ่อ่า',
          id: 'besar, luas, agung'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will become a great figure, with a vast heart and outstanding talents',
      ko: '호수처럼 넓은 마음과 뛰어난 재능을 지닌 위대한 인물이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui deviendra une grande figure, avec un cœur vaste et des talents exceptionnels',
      it: 'Un nome per una persona che diventerà una grande figura, con un cuore vasto e talenti eccezionali',
      de: 'Ein Name für eine Person, die zu einer großen Persönlichkeit heranwachsen wird, mit einem weiten Herzen und herausragenden Talenten',
      pt: 'Um nome para uma pessoa que se tornará uma grande figura, com um coração vasto e talentos excepcionais',
      es: 'Un nombre para una persona que se convertirá en una gran figura, con un corazón vasto y talentos excepcionales',
      ja: '湖のように広い心と優れた才能を持つ偉大な人物になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะกลายเป็นบุคคลสำคัญผู้มีหัวใจที่กว้างใหญ่และมีความสามารถที่โดดเด่น',
      id: 'Sebuah nama untuk seseorang yang akan menjadi tokoh besar, dengan hati yang luas dan bakat yang luar biasa'
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
    en: 'Great and clever',
    ko: '위대하고 영민한',
    fr: 'Grand et intelligent',
    it: 'Grande e intelligente',
    de: 'Groß und klug',
    pt: 'Grande e inteligente',
    es: 'Grande e inteligente',
    ja: '偉大で賢い',
    th: 'ยิ่งใหญ่และหลักแหลม',
    id: 'Hebat dan pintar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast, grand',
          ko: '큰, 넓은, 웅장한',
          fr: 'grand, vaste, magnifique',
          it: 'grande, vasto, magnifico',
          de: 'groß, weit, prächtig',
          pt: 'grande, vasto, grandioso',
          es: 'grande, vasto, grandioso',
          ja: '大きい、広大な、雄大な',
          th: 'ยิ่งใหญ่, กว้างใหญ่, โอ่อ่า',
          id: 'besar, luas, agung'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a vast, open mind and the cleverness to achieve great things',
      ko: '위대한 일을 성취할 수 있는 영민함과, 바다처럼 넓고 열린 마음을 지니기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait un esprit vaste et ouvert et l\'intelligence de réaliser de grandes choses',
      it: 'Un nome che augura a una persona di avere una mente vasta e aperta e l\'intelligenza per realizzare grandi cose',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person einen weiten, offenen Geist und die Klugheit besitzt, große Dinge zu vollbringen',
      pt: 'Um nome que deseja que uma pessoa tenha uma mente vasta e aberta e a inteligência para alcançar grandes coisas',
      es: 'Un nombre que desea que una persona tenga una mente vasta y abierta y la inteligencia para lograr grandes cosas',
      ja: '偉大なことを成し遂げるための賢さと、海のように広く開かれた心を持つことを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีจิตใจที่กว้างขวางและเปิดกว้าง และมีความเฉลียวฉลาดที่จะบรรลุสิ่งที่ยิ่งใหญ่',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki pikiran yang luas dan terbuka serta kepintaran untuk mencapai hal-hal besar'
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
    en: 'Clever and outstanding',
    ko: '영리하고 빼어난',
    fr: 'Intelligent et exceptionnel',
    it: 'Intelligente ed eccezionale',
    de: 'Klug und herausragend',
    pt: 'Inteligente e excepcional',
    es: 'Inteligente y excepcional',
    ja: '賢くて秀でた',
    th: 'ฉลาดและโดดเด่น',
    id: 'Cerdas dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses both outstanding, beautiful qualities and a quick, clever mind',
      ko: '빼어나고 아름다운 자질과 빠르고 영리한 두뇌를 모두 갖춘 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède à la fois des qualités exceptionnelles et belles et un esprit vif et intelligent',
      it: 'Un nome per una persona che possiede sia qualità eccezionali e belle sia una mente pronta e intelligente',
      de: 'Ein Name für eine Person, die sowohl herausragende, schöne Eigenschaften als auch einen schnellen, klugen Verstand besitzt',
      pt: 'Um nome para uma pessoa que possui tanto qualidades excepcionais e belas quanto uma mente rápida e inteligente',
      es: 'Un nombre para una persona que posee tanto cualidades excepcionales y hermosas como una mente rápida e inteligente',
      ja: '優れた美しい資質と、素早く賢い頭脳を兼ね備えた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีทั้งคุณสมบัติที่โดดเด่นและสวยงาม และมีจิตใจที่ว่องไวและเฉลียวฉลาด',
      id: 'Sebuah nama untuk seseorang yang memiliki kualitas luar biasa dan indah serta pikiran yang cepat dan cerdas'
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
    en: 'Talented and outstanding',
    ko: '재능있고 빼어난',
    fr: 'Talentueux et exceptionnel',
    it: 'Talentuoso ed eccezionale',
    de: 'Talentiert und herausragend',
    pt: 'Talentoso e excepcional',
    es: 'Talentoso y excepcional',
    ja: '才能豊かで秀でた',
    th: 'มีพรสวรรค์และโดดเด่น',
    id: 'Berbakat dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who is remarkable for their outstanding talents and handsome, beautiful appearance',
      ko: '빼어난 재능과 준수하고 아름다운 외모로 주목받는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui est remarquable par ses talents exceptionnels et son apparence belle et séduisante',
      it: 'Un nome per una persona che si distingue per i suoi talenti eccezionali e il suo aspetto bello e affascinante',
      de: 'Ein Name für eine Person, die sich durch ihre herausragenden Talente und ihr stattliches, schönes Aussehen auszeichnet',
      pt: 'Um nome para uma pessoa que é notável por seus talentos excepcionais e sua aparência bonita e atraente',
      es: 'Un nombre para una persona que es notable por sus talentos excepcionales y su apariencia hermosa y atractiva',
      ja: '優れた才能とハンサムで美しい容姿で注目される人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่โดดเด่นในด้านความสามารถที่โดดเด่นและรูปลักษณ์ที่หล่อเหลาและสวยงาม',
      id: 'Sebuah nama untuk seseorang yang luar biasa karena bakatnya yang luar biasa dan penampilannya yang tampan dan indah'
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
    ko: '올바르고 뛰어난',
    fr: 'Excellence juste',
    it: 'Eccellenza giusta',
    de: 'Rechtschaffene Exzellenz',
    pt: 'Excelência justa',
    es: 'Excelencia justa',
    ja: '正しく秀でた',
    th: 'ความเป็นเลิศอันเที่ยงธรรม',
    id: 'Keunggulan yang benar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '정',
        hanja: '正',
        meaning: {
          en: 'right, proper, correct',
          ko: '바른, 올바른, 정확한',
          fr: 'droit, correct, juste',
          it: 'giusto, corretto, appropriato',
          de: 'richtig, korrekt, ordnungsgemäß',
          pt: 'certo, correto, adequado',
          es: 'correcto, justo, debido',
          ja: '正しい、適切な、正確な',
          th: 'ถูกต้อง, เหมาะสม, แม่นยำ',
          id: 'benar, tepat, sesuai'
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be an outstanding individual who always follows the right and proper path',
      ko: '언제나 바르고 올바른 길을 따르는, 뛰어난 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un individu exceptionnel qui suit toujours le chemin droit et juste',
      it: 'Un nome che augura a una persona di essere un individuo eccezionale che segue sempre il sentiero giusto e corretto',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine herausragende Persönlichkeit wird, die immer den richtigen und angemessenen Weg geht',
      pt: 'Um nome que deseja que uma pessoa seja um indivíduo excepcional que sempre segue o caminho certo e adequado',
      es: 'Un nombre que desea que una persona sea un individuo excepcional que siempre siga el camino correcto y adecuado',
      ja: '常に正しく適切な道を歩む、優れた人物になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ที่โดดเด่นซึ่งปฏิบัติตามเส้นทางที่ถูกต้องและเหมาะสมเสมอ',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang luar biasa yang selalu mengikuti jalan yang benar dan pantas'
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
    en: 'Wise and great',
    ko: '현명하고 위대한',
    fr: 'Sage et grand',
    it: 'Saggio e grande',
    de: 'Weise und groß',
    pt: 'Sábio e grande',
    es: 'Sabio y grande',
    ja: '賢くて偉大な',
    th: 'ฉลาดและยิ่งใหญ่',
    id: 'Bijaksana dan hebat'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      },
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast, grand',
          ko: '큰, 넓은, 웅장한',
          fr: 'grand, vaste, magnifique',
          it: 'grande, vasto, magnifico',
          de: 'groß, weit, prächtig',
          pt: 'grande, vasto, grandioso',
          es: 'grande, vasto, grandioso',
          ja: '大きい、広大な、雄大な',
          th: 'ยิ่งใหญ่, กว้างใหญ่, โอ่อ่า',
          id: 'besar, luas, agung'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to become a great individual with a vast heart and profound wisdom',
      ko: '넓은 마음과 깊은 현명함을 지닌 위대한 인물이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne devienne un grand individu doté d\'un cœur vaste et d\'une profonde sagesse',
      it: 'Un nome che augura a una persona di diventare un grande individuo con un cuore vasto e una profonda saggezza',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine große Persönlichkeit mit einem weiten Herzen und tiefer Weisheit wird',
      pt: 'Um nome que deseja que uma pessoa se torne um grande indivíduo com um coração vasto e uma sabedoria profunda',
      es: 'Un nombre que desea que una persona se convierta en un gran individuo con un corazón vasto y una profunda sabiduría',
      ja: '広い心と深い賢明さを備えた偉大な人物になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลกลายเป็นบุคคลที่ยิ่งใหญ่ด้วยหัวใจที่กว้างใหญ่และปัญญาอันลึกซึ้ง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang hebat dengan hati yang luas dan kebijaksanaan yang mendalam'
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
    en: 'A victorious excellence',
    ko: '승리하는 빼어남',
    fr: 'Une excellence victorieuse',
    it: 'Un\'eccellenza vittoriosa',
    de: 'Eine siegreiche Exzellenz',
    pt: 'Uma excelência vitoriosa',
    es: 'Una excelencia victoriosa',
    ja: '勝利する卓越',
    th: 'ความเป็นเลิศแห่งชัยชนะ',
    id: 'Keunggulan yang berjaya'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '승',
        hanja: '勝',
        meaning: {
          en: 'victory, win, superior',
          ko: '승리, 이기다, 뛰어나다',
          fr: 'victoire, gagner, supérieur',
          it: 'vittoria, vincere, superiore',
          de: 'Sieg, gewinnen, überlegen',
          pt: 'vitória, vencer, superior',
          es: 'victoria, ganar, superior',
          ja: '勝利、勝つ、優れる',
          th: 'ชัยชนะ, ชนะ, เหนือกว่า',
          id: 'kemenangan, menang, unggul'
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person whose outstanding qualities and excellence will always lead them to victory',
      ko: '자신의 빼어난 자질과 탁월함으로 언제나 승리를 이끌어내기를 바라는 이름',
      fr: 'Un nom pour une personne dont les qualités exceptionnelles et l\'excellence la mèneront toujours à la victoire',
      it: 'Un nome per una persona le cui eccezionali qualità ed eccellenza la porteranno sempre alla vittoria',
      de: 'Ein Name für eine Person, deren herausragende Qualitäten und Exzellenz sie immer zum Sieg führen werden',
      pt: 'Um nome para uma pessoa cujas qualidades excepcionais e excelência sempre a levarão à vitória',
      es: 'Un nombre para una persona cuyas cualidades excepcionales y excelencia siempre la llevarán a la victoria',
      ja: 'その卓越した資質と卓越性が常に勝利に導くことを願う名前',
      th: 'ชื่อสำหรับบุคคลที่มีคุณสมบัติและความเป็นเลิศที่โดดเด่นซึ่งจะนำทางพวกเขาไปสู่ชัยชนะเสมอ',
      id: 'Sebuah nama untuk seseorang yang kualitas dan keunggulannya yang luar biasa akan selalu membawa mereka menuju kemenangan'
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
    en: 'A precious and outstanding person',
    ko: '귀하고 빼어난 사람',
    fr: 'Une personne précieuse et exceptionnelle',
    it: 'Una persona preziosa ed eccezionale',
    de: 'Eine kostbare und herausragende Person',
    pt: 'Uma pessoa preciosa e excepcional',
    es: 'Una persona preciosa y excepcional',
    ja: '貴重で秀でた人',
    th: 'บุคคลผู้ล้ำค่าและโดดเด่น',
    id: 'Orang yang berharga dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '진',
        hanja: '珍',
        meaning: {
          en: 'precious, rare, treasure',
          ko: '귀중한, 희귀한, 보물',
          fr: 'précieux, rare, trésor',
          it: 'prezioso, raro, tesoro',
          de: 'kostbar, selten, Schatz',
          pt: 'precioso, raro, tesouro',
          es: 'precioso, raro, tesoro',
          ja: '貴重な、珍しい、宝物',
          th: 'ล้ำค่า, หายาก, สมบัติ',
          id: 'berharga, langka, harta karun'
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who is as precious as a treasure and possesses outstanding, beautiful qualities',
      ko: '보물처럼 귀하고, 빼어나게 아름다운 자질을 갖춘 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui est aussi précieuse qu\'un trésor et possède des qualités exceptionnelles et magnifiques',
      it: 'Un nome per una persona che è preziosa come un tesoro e possiede qualità eccezionali e bellissime',
      de: 'Ein Name für eine Person, die so kostbar ist wie ein Schatz und herausragende, schöne Eigenschaften besitzt',
      pt: 'Um nome para uma pessoa que é tão preciosa como um tesouro e possui qualidades excepcionais e belas',
      es: 'Un nombre para una persona que es tan preciosa como un tesoro y posee cualidades excepcionales y hermosas',
      ja: '宝物のように貴重で、優れた美しい資質を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้ล้ำค่าดั่งสมบัติและมีคุณสมบัติที่โดดเด่นและสวยงาม',
      id: 'Sebuah nama untuk seseorang yang berharga seperti harta karun dan memiliki kualitas yang luar biasa dan indah'
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
    en: 'Excellence of the East',
    ko: '동쪽의 빼어남',
    fr: 'L\'excellence de l\'Est',
    it: 'L\'eccellenza dell\'Est',
    de: 'Die Exzellenz des Ostens',
    pt: 'A excelência do Leste',
    es: 'La excelencia del Este',
    ja: '東方の卓越',
    th: 'ความเป็นเลิศแห่งตะวันออก',
    id: 'Keunggulan dari Timur'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '동',
        hanja: '東',
        meaning: {
          en: 'east',
          ko: '동쪽',
          fr: 'est',
          it: 'est',
          de: 'Osten',
          pt: 'leste',
          es: 'este',
          ja: '東',
          th: 'ทิศตะวันออก',
          id: 'timur'
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be an outstanding individual who shines brightly, like the sun rising in the East',
      ko: '동쪽에서 떠오르는 태양처럼, 밝게 빛나는 빼어난 인물이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un individu exceptionnel qui brille de mille feux, comme le soleil se levant à l\'Est',
      it: 'Un nome che augura a una persona di essere un individuo eccezionale che brilla luminosamente, come il sole che sorge a Est',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine herausragende Persönlichkeit wird, die hell leuchtet wie die Sonne, die im Osten aufgeht',
      pt: 'Um nome que deseja que uma pessoa seja um indivíduo excepcional que brilha intensamente, como o sol que nasce no Leste',
      es: 'Un nombre que desea que una persona sea un individuo excepcional que brille intensamente, como el sol que sale por el Este',
      ja: '東から昇る太陽のように明るく輝く優れた人物になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ที่โดดเด่นซึ่งส่องแสงเจิดจ้าดุจดวงอาทิตย์ขึ้นทางทิศตะวันออก',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang luar biasa yang bersinar terang, seperti matahari terbit di Timur'
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
    en: 'Brilliantly clever',
    ko: '찬란하게 영민한',
    fr: 'Brillamment intelligent',
    it: 'Brillantemente intelligente',
    de: 'Brillant klug',
    pt: 'Brilhantemente inteligente',
    es: 'Brillantemente inteligente',
    ja: '輝かしく賢い',
    th: 'ฉลาดหลักแหลมอย่างสุกใส',
    id: 'Cerdas cemerlang'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '혁',
        hanja: '赫',
        meaning: {
          en: 'radiant, bright, brilliant',
          ko: '빛나는, 밝은, 찬란한',
          fr: 'radieux, brillant, éclatant',
          it: 'radioso, brillante, splendente',
          de: 'strahlend, hell, brillant',
          pt: 'radiante, brilhante, esplêndido',
          es: 'radiante, brillante, espléndido',
          ja: '輝かしい、明るい',
          th: 'ส่องสว่าง, สดใส, สุกใส',
          id: 'berseri, cerah, cemerlang'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a radiant intelligence that shines brightly and thinks with remarkable cleverness',
      ko: '찬란하게 빛나는 지성과 뛰어난 영민함으로 생각하는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède une intelligence rayonnante qui brille de mille feux et pense avec une remarquable intelligence',
      it: 'Un nome per una persona che possiede un\'intelligenza radiosa che brilla luminosamente e pensa con notevole intelligenza',
      de: 'Ein Name für eine Person, die eine strahlende Intelligenz besitzt, die hell leuchtet, und mit bemerkenswerter Klugheit denkt',
      pt: 'Um nome para uma pessoa que possui uma inteligência radiante que brilha intensamente e pensa com notável inteligência',
      es: 'Un nombre para una persona que posee una inteligencia radiante que brilla intensamente y piensa con notable inteligencia',
      ja: '輝く知性と卓越した賢さで考える人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีสติปัญญาอันเจิดจ้าที่ส่องแสงเจิดจ้าและคิดด้วยความเฉลียวฉลาดอย่างน่าทึ่ง',
      id: 'Sebuah nama untuk seseorang yang memiliki kecerdasan cemerlang yang bersinar terang dan berpikir dengan kepintaran yang luar biasa'
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
    en: 'A radiant talent',
    ko: '빛나는 재능',
    fr: 'Un talent rayonnant',
    it: 'Un talento radioso',
    de: 'Ein strahlendes Talent',
    pt: 'Um talento radiante',
    es: 'Un talento radiante',
    ja: '輝かしい才能',
    th: 'พรสวรรค์อันเจิดจ้า',
    id: 'Bakat yang cemerlang'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      },
      {
        korean: '혁',
        hanja: '赫',
        meaning: {
          en: 'radiant, bright, brilliant',
          ko: '빛나는, 밝은, 찬란한',
          fr: 'radieux, brillant, éclatant',
          it: 'radioso, brillante, splendente',
          de: 'strahlend, hell, brillant',
          pt: 'radiante, brilhante, esplêndido',
          es: 'radiante, brillante, espléndido',
          ja: '輝かしい、明るい',
          th: 'ส่องสว่าง, สดใส, สุกใส',
          id: 'berseri, cerah, cemerlang'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a remarkable figure whose outstanding talents shine brilliantly for all to see',
      ko: '모두가 볼 수 있도록 자신의 뛰어난 재능을 찬란하게 빛내는, 주목받는 인물이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit une figure remarquable dont les talents exceptionnels brillent de mille feux aux yeux de tous',
      it: 'Un nome che augura a una persona di essere una figura notevole i cui talenti eccezionali brillano brillantemente affinché tutti li vedano',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine bemerkenswerte Persönlichkeit wird, deren herausragende Talente für alle sichtbar hell leuchten',
      pt: 'Um nome que deseja que uma pessoa seja uma figura notável cujos talentos excepcionais brilham intensamente para todos verem',
      es: 'Un nombre que desea que una persona sea una figura notable cuyos talentos excepcionales brillen intensamente a la vista de todos',
      ja: 'その卓越した才能が誰の目にも輝かしく映る、注目される人物になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นบุคคลสำคัญซึ่งความสามารถที่โดดเด่นของเขาส่องประกายเจิดจ้าให้ทุกคนได้เห็น',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi tokoh yang luar biasa yang bakatnya yang luar biasa bersinar cemerlang untuk dilihat semua orang'
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
    en: 'A wise and talented person',
    ko: '현명하고 재능있는 사람',
    fr: 'Une personne sage et talentueuse',
    it: 'Una persona saggia e di talento',
    de: 'Eine weise und talentierte Person',
    pt: 'Uma pessoa sábia e talentosa',
    es: 'Una persona sabia y talentosa',
    ja: '賢くて才能のある人',
    th: 'ผู้มีปัญญาและพรสวรรค์',
    id: 'Orang yang bijaksana dan berbakat'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      },
      {
        korean: '준',
        hanja: '俊',
        meaning: {
          en: 'talented, handsome, remarkable',
          ko: '재능있는, 잘생긴, 뛰어난',
          fr: 'talentueux, beau, remarquable',
          it: 'talentoso, bello, notevole',
          de: 'talentiert, gutaussehend, bemerkenswert',
          pt: 'talentoso, bonito, notável',
          es: 'talentoso, guapo, notable',
          ja: '才能のある、ハンサムな、優れた',
          th: 'มีพรสวรรค์, หล่อเหลา, โดดเด่น',
          id: 'berbakat, tampan, luar biasa'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be respected for their remarkable talents which are guided by profound wisdom',
      ko: '깊은 현명함으로 자신의 뛰어난 재능을 이끌어 존경받는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit respectée pour ses talents remarquables qui sont guidés par une profonde sagesse',
      it: 'Un nome che augura a una persona di essere rispettata per i suoi notevoli talenti guidati da una profonda saggezza',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person für ihre bemerkenswerten Talente respektiert wird, die von tiefer Weisheit geleitet werden',
      pt: 'Um nome que deseja que uma pessoa seja respeitada por seus talentos notáveis que são guiados por uma profunda sabedoria',
      es: 'Un nombre que desea que una persona sea respetada por sus notables talentos que son guiados por una profunda sabiduría',
      ja: '深い賢明さに導かれたその卓越した才能で尊敬される人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นที่เคารพในความสามารถอันโดดเด่นซึ่งนำทางโดยปัญญาอันลึกซึ้ง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk dihormati karena bakatnya yang luar biasa yang dibimbing oleh kebijaksanaan yang mendalam'
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
    en: 'A great victory',
    ko: '위대한 승리',
    fr: 'Une grande victoire',
    it: 'Una grande vittoria',
    de: 'Ein großer Sieg',
    pt: 'Uma grande vitória',
    es: 'Una gran victoria',
    ja: '偉大な勝利',
    th: 'ชัยชนะอันยิ่งใหญ่',
    id: 'Kemenangan yang hebat'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '승',
        hanja: '勝',
        meaning: {
          en: 'victory, win, superior',
          ko: '승리, 이기다, 뛰어나다',
          fr: 'victoire, gagner, supérieur',
          it: 'vittoria, vincere, superiore',
          de: 'Sieg, gewinnen, überlegen',
          pt: 'vitória, vencer, superior',
          es: 'victoria, ganar, superior',
          ja: '勝利、勝つ、優れる',
          th: 'ชัยชนะ, ชนะ, เหนือกว่า',
          id: 'kemenangan, menang, unggul'
        }
      },
      {
        korean: '호',
        hanja: '浩',
        meaning: {
          en: 'great, vast, grand',
          ko: '큰, 넓은, 웅장한',
          fr: 'grand, vaste, magnifique',
          it: 'grande, vasto, magnifico',
          de: 'groß, weit, prächtig',
          pt: 'grande, vasto, grandioso',
          es: 'grande, vasto, grandioso',
          ja: '大きい、広大な、雄大な',
          th: 'ยิ่งใหญ่, กว้างใหญ่, โอ่อ่า',
          id: 'besar, luas, agung'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a vast heart and the strength to achieve great, resounding victories',
      ko: '넓은 마음과 강인함으로 위대하고 드높은 승리를 쟁취하기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait un cœur vaste et la force de remporter de grandes victoires retentissantes',
      it: 'Un nome che augura a una persona di avere un cuore vasto e la forza di ottenere grandi e clamorose vittorie',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein weites Herz und die Kraft hat, große, durchschlagende Siege zu erringen',
      pt: 'Um nome que deseja que uma pessoa tenha um coração vasto e a força para alcançar grandes e retumbantes vitórias',
      es: 'Un nombre que desea que una persona tenga un corazón vasto y la fuerza para lograr grandes y resonantes victorias',
      ja: '広い心と力で、偉大で響き渡る勝利を収めることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีหัวใจที่กว้างใหญ่และความแข็งแกร่งที่จะได้รับชัยชนะอันยิ่งใหญ่และกึกก้อง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki hati yang luas dan kekuatan untuk mencapai kemenangan yang hebat dan gemilang'
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
    en: 'True, genuine',
    ko: '참된, 진실한',
    fr: 'Vrai, authentique',
    it: 'Vero, genuino',
    de: 'Wahr, echt',
    pt: 'Verdadeiro, genuíno',
    es: 'Verdadero, genuino',
    ja: '真実の、本物の',
    th: 'แท้จริง, จริงใจ',
    id: 'Sejati, asli'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '진',
        hanja: '眞',
        meaning: {
          en: 'true, real, genuine',
          ko: '참, 진짜, 진실',
          fr: 'vrai, réel, authentique',
          it: 'vero, reale, genuino',
          de: 'wahr, echt, aufrichtig',
          pt: 'verdadeiro, real, genuíno',
          es: 'verdadero, real, genuino',
          ja: '真の、真実の',
          th: 'แท้จริง, จริงใจ',
          id: 'benar, nyata, asli'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to live a life of truth and sincerity, becoming a genuinely good person',
      ko: '진실하고 성실한 삶을 살며, 참되고 좋은 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne vive une vie de vérité et de sincérité, devenant une personne authentiquement bonne',
      it: 'Un nome che augura a una persona di vivere una vita di verità e sincerità, diventando una persona genuinamente buona',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein Leben in Wahrheit und Aufrichtigkeit führt und zu einem wahrhaft guten Menschen wird',
      pt: 'Um nome que deseja que uma pessoa viva uma vida de verdade e sinceridade, tornando-se uma pessoa genuinamente boa',
      es: 'Un nombre que desea que una persona viva una vida de verdad y sinceridad, convirtiéndose en una persona genuinamente buena',
      ja: '真実と誠実の人生を送り、真に善良な人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลดำเนินชีวิตด้วยความจริงและความจริงใจ กลายเป็นคนดีอย่างแท้จริง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjalani kehidupan yang benar dan tulus, menjadi orang yang benar-benar baik'
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
    en: 'Brilliantly clever',
    ko: '찬란하게 영민한',
    fr: 'Brillamment intelligent',
    it: 'Brillantemente intelligente',
    de: 'Brillant klug',
    pt: 'Brilhantemente inteligente',
    es: 'Brillantemente inteligente',
    ja: '輝かしく賢い',
    th: 'ฉลาดหลักแหลมอย่างสุกใส',
    id: 'Cerdas cemerlang'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '혁',
        hanja: '赫',
        meaning: {
          en: 'radiant, bright, brilliant',
          ko: '빛나는, 밝은, 찬란한',
          fr: 'radieux, brillant, éclatant',
          it: 'radioso, brillante, splendente',
          de: 'strahlend, hell, brillant',
          pt: 'radiante, brilhante, esplêndido',
          es: 'radiante, brillante, espléndido',
          ja: '輝かしい、明るい',
          th: 'ส่องสว่าง, สดใส, สุกใส',
          id: 'berseri, cerah, cemerlang'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a radiant intelligence that shines brightly and thinks with remarkable cleverness',
      ko: '찬란하게 빛나는 지성과 뛰어난 영민함으로 생각하는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède une intelligence rayonnante qui brille de mille feux et pense avec une remarquable intelligence',
      it: 'Un nome per una persona che possiede un\'intelligenza radiosa che brilla luminosamente e pensa con notevole intelligenza',
      de: 'Ein Name für eine Person, die eine strahlende Intelligenz besitzt, die hell leuchtet, und mit bemerkenswerter Klugheit denkt',
      pt: 'Um nome para uma pessoa que possui uma inteligência radiante que brilha intensamente e pensa com notável inteligência',
      es: 'Un nombre para una persona que posee una inteligencia radiante que brilla intensamente y piensa con notable inteligencia',
      ja: '輝く知性と卓越した賢さで考える人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีสติปัญญาอันเจิดจ้าที่ส่องแสงเจิดจ้าและคิดด้วยความเฉลียวฉลาดอย่างน่าทึ่ง',
      id: 'Sebuah nama untuk seseorang yang memiliki kecerdasan cemerlang yang bersinar terang dan berpikir dengan kepintaran yang luar biasa'
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
    en: 'A source of excellence',
    ko: '뛰어남의 근원',
    fr: 'Une source d\'excellence',
    it: 'Una fonte di eccellenza',
    de: 'Eine Quelle der Exzellenz',
    pt: 'Uma fonte de excelência',
    es: 'Una fuente de excelencia',
    ja: '卓越の源',
    th: 'แหล่งกำเนิดแห่งความเป็นเลิศ',
    id: 'Sumber keunggulan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '원',
        hanja: '源',
        meaning: {
          en: 'source, origin, root',
          ko: '근원, 기원, 뿌리',
          fr: 'source, origine, racine',
          it: 'fonte, origine, radice',
          de: 'Quelle, Ursprung, Wurzel',
          pt: 'fonte, origem, raiz',
          es: 'fuente, origen, raíz',
          ja: '源、起源、根源',
          th: 'แหล่งกำเนิด, ต้นกำเนิด, รากฐาน',
          id: 'sumber, asal, akar'
        }
      },
      {
        korean: '우',
        hanja: '優',
        meaning: {
          en: 'excellent, superior, gentle',
          ko: '뛰어난, 우수한, 부드러운',
          fr: 'excellent, supérieur, doux',
          it: 'eccellente, superiore, gentile',
          de: 'ausgezeichnet, überlegen, sanft',
          pt: 'excelente, superior, gentil',
          es: 'excelente, superior, gentil',
          ja: '優れた、上位の、優しい',
          th: 'ยอดเยี่ยม, เหนือกว่า, อ่อนโยน',
          id: 'unggul, superior, lembut'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who will be a fundamental source of gentle excellence and positive influence for others',
      ko: '다른 사람들에게 부드러운 뛰어남과 긍정적 영향력의 근원이 되는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui sera une source fondamentale d\'excellence douce et d\'influence positive pour les autres',
      it: 'Un nome per una persona che sarà una fonte fondamentale di gentile eccellenza e influenza positiva per gli altri',
      de: 'Ein Name für eine Person, die eine grundlegende Quelle sanfter Exzellenz und positiven Einflusses für andere sein wird',
      pt: 'Um nome para uma pessoa que será uma fonte fundamental de excelência gentil e influência positiva para os outros',
      es: 'Un nombre para una persona que será una fuente fundamental de excelencia gentil e influencia positiva para los demás',
      ja: '他者にとって優しい卓越性と良い影響の根源となる人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลที่จะเป็นแหล่งกำเนิดพื้นฐานของความเป็นเลิศที่อ่อนโยนและอิทธิพลเชิงบวกต่อผู้อื่น',
      id: 'Sebuah nama untuk seseorang yang akan menjadi sumber fundamental keunggulan yang lembut dan pengaruh positif bagi orang lain'
    }
  },
  kpopMember: { group: 'SEVENTEEN', memberName: 'Wonwoo' }
}),
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
    en: 'An auspicious abundance',
    ko: '상서로운 풍요',
    fr: 'Une abondance de bon augure',
    it: 'Un\'abbondanza di buon auspicio',
    de: 'Ein glückverheißender Überfluss',
    pt: 'Uma abundância auspiciosa',
    es: 'Una abundancia auspiciosa',
    ja: '縁起の良い豊かさ',
    th: 'ความอุดมสมบูรณ์อันเป็นมงคล',
    id: 'Kelimpahan yang membawa pertanda baik'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '윤',
        hanja: '潤',
        meaning: {
          en: 'to enrich, moisten, benefit',
          ko: '윤택하게 하다, 적시다, 이롭게 하다',
          fr: 'enrichir, humecter, bénéficier',
          it: 'arricchire, inumidire, beneficiare',
          de: 'bereichern, befeuchten, zugutekommen',
          pt: 'enriquecer, umedecer, beneficiar',
          es: 'enriquecer, humedecer, beneficiar',
          ja: '潤す、豊かにする、恩恵を与える',
          th: 'ทำให้สมบูรณ์, ทำให้ชุ่มชื้น, เป็นประโยชน์',
          id: 'memperkaya, melembabkan, memberi manfaat'
        }
      },
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a bringer of good fortune, enriching the world and filling it with abundance',
      ko: '세상을 윤택하게 하고 풍요로움으로 가득 채우는, 상서로운 기운을 가져오는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit porteuse de bonne fortune, enrichissant le monde et le remplissant d\'abondance',
      it: 'Un nome che augura a una persona di essere portatrice di buona fortuna, arricchendo il mondo e riempiendolo di abbondanza',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person Glück bringt, die Welt bereichert und sie mit Überfluss füllt',
      pt: 'Um nome que deseja que uma pessoa seja portadora de boa sorte, enriquecendo o mundo e enchendo-o de abundância',
      es: 'Un nombre que desea que una persona sea portadora de buena fortuna, enriqueciendo el mundo y llenándolo de abundancia',
      ja: '世界を豊かにし、豊かさで満たす幸運をもたらす人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้นำโชคดีมาให้ ทำให้โลกสมบูรณ์และเปี่ยมด้วยความอุดมสมบูรณ์',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi pembawa nasib baik, memperkaya dunia dan mengisinya dengan kelimpahan'
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
    en: 'Outstandingly refined',
    ko: '빼어나게 빛나는',
    fr: 'Exceptionnellement raffinée',
    it: 'Eccezionalmente raffinata',
    de: 'Herausragend kultiviert',
    pt: 'Excepcionalmente refinada',
    es: 'Excepcionalmente refinada',
    ja: '秀でて輝く',
    th: 'งดงามโดดเด่น',
    id: 'Sangat halus'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      },
      {
        korean: '빈',
        hanja: '彬',
        meaning: {
          en: 'refined, cultivated, shining',
          ko: '세련된, 교양있는, 빛나는',
          fr: 'raffiné, cultivé, brillant',
          it: 'raffinato, colto, brillante',
          de: 'raffiniert, kultiviert, leuchtend',
          pt: 'refinado, cultivado, brilhante',
          es: 'refinado, cultivado, brillante',
          ja: '洗練された、教養のある、輝く',
          th: 'ขัดเกลา, มีวัฒนธรรม, ส่องแสง',
          id: 'halus, berbudaya, bersinar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses an outstanding beauty that shines brightly with refined grace',
      ko: '세련된 기품으로 밝게 빛나는, 빼어난 아름다움을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède une beauté exceptionnelle qui brille d\'une grâce raffinée',
      it: 'Un nome per una persona che possiede una bellezza eccezionale che brilla di una grazia raffinata',
      de: 'Ein Name für eine Person, die eine herausragende Schönheit besitzt, die mit verfeinerter Anmut hell erstrahlt',
      pt: 'Um nome para uma pessoa que possui uma beleza excepcional que brilha intensamente com uma graça refinada',
      es: 'Un nombre para una persona que posee una belleza excepcional que brilla con una gracia refinada',
      ja: '洗練された優雅さで明るく輝く、優れた美しさを持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีความงามอันโดดเด่นที่ส่องประกายเจิดจ้าด้วยความสง่างามที่ขัดเกลา',
      id: 'Sebuah nama untuk seseorang yang memiliki kecantikan luar biasa yang bersinar terang dengan keanggunan yang halus'
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
    en: 'Refined and shining',
    ko: '세련되고 빛나는',
    fr: 'Raffinée et brillante',
    it: 'Raffinata e brillante',
    de: 'Kultiviert und leuchtend',
    pt: 'Refinada e brilhante',
    es: 'Refinada y brillante',
    ja: '洗練されて輝く',
    th: 'งดงามและส่องสว่าง',
    id: 'Halus dan bersinar'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '빈',
        hanja: '彬',
        meaning: {
          en: 'refined, cultivated, shining',
          ko: '세련된, 교양있는, 빛나는',
          fr: 'raffiné, cultivé, brillant',
          it: 'raffinato, colto, brillante',
          de: 'raffiniert, kultiviert, leuchtend',
          pt: 'refinado, cultivado, brilhante',
          es: 'refinado, cultivado, brillante',
          ja: '洗練された、教養のある、輝く',
          th: 'ขัดเกลา, มีวัฒนธรรม, ส่องแสง',
          id: 'halus, berbudaya, bersinar'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to have a character that shines brightly with culture and refinement',
      ko: '교양과 세련미로 밝게 빛나는 품성을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne ait un caractère qui brille de culture et de raffinement',
      it: 'Un nome che augura a una persona di avere un carattere che brilla di cultura e raffinatezza',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person einen Charakter hat, der vor Kultur und Raffinesse strahlt',
      pt: 'Um nome que deseja que uma pessoa tenha um caráter que brilhe com cultura e refinamento',
      es: 'Un nombre que desea que una persona tenga un carácter que brille con cultura y refinamiento',
      ja: '教養と洗練さで明るく輝く人格を持つ人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลมีอุปนิสัยที่ส่องประกายเจิดจ้าด้วยวัฒนธรรมและความงดงาม',
      id: 'Sebuah nama yang mengharapkan seseorang untuk memiliki karakter yang bersinar terang dengan budaya dan kehalusan'
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
    en: 'Auspicious and wise',
    ko: '상서롭고 현명한',
    fr: 'De bon augure et sage',
    it: 'Di buon auspicio e saggia',
    de: 'Glückverheißend und weise',
    pt: 'Auspiciosa e sábia',
    es: 'Auspiciosa y sabia',
    ja: '縁起が良く賢い',
    th: 'เป็นมงคลและฉลาด',
    id: 'Membawa pertanda baik dan bijaksana'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      },
      {
        korean: '서',
        hanja: '瑞',
        meaning: {
          en: 'auspicious, fortunate sign',
          ko: '상서로운, 길조',
          fr: 'auspicieux, signe de chance',
          it: 'di buon auspicio, segno fortunato',
          de: 'glückverheißend, Glückszeichen',
          pt: 'auspicioso, sinal de sorte',
          es: 'auspicioso, señal de fortuna',
          ja: '縁起の良い、吉兆',
          th: 'เป็นมงคล, นิมิตหมายอันดี',
          id: 'membawa pertanda baik, tanda keberuntungan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to become a wise and virtuous individual who brings good fortune to those around them',
      ko: '주변에 상서로운 기운을 가져다주는 현명하고 어진 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne devienne un individu sage et vertueux qui porte bonheur à son entourage',
      it: 'Un nome che augura a una persona di diventare un individuo saggio e virtuoso che porta fortuna a coloro che la circondano',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine weise und tugendhafte Person wird, die ihren Mitmenschen Glück bringt',
      pt: 'Um nome que deseja que uma pessoa se torne um indivíduo sábio e virtuoso que traz boa sorte para aqueles ao seu redor',
      es: 'Un nombre que desea que una persona se convierta en un individuo sabio y virtuoso que traiga buena fortuna a quienes la rodean',
      ja: '周りに幸運をもたらす、賢明で徳のある人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลกลายเป็นผู้มีปัญญาและคุณธรรมซึ่งนำความโชคดีมาสู่คนรอบข้าง',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi individu yang bijaksana dan berbudi luhur yang membawa keberuntungan bagi orang di sekitarnya'
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
    en: 'Clever with pure integrity',
    ko: '영민하고 곧은 절개',
    fr: 'Intelligente avec une intégrité pure',
    it: 'Intelligente con pura integrità',
    de: 'Klug mit reiner Integrität',
    pt: 'Inteligente com pura integridade',
    es: 'Inteligente con pura integridad',
    ja: '賢明で純粋な誠実さ',
    th: 'ฉลาดหลักแหลมและมีความซื่อตรงอันบริสุทธิ์',
    id: 'Cerdas dengan integritas murni'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '정',
        hanja: '貞',
        meaning: {
          en: 'chaste, pure, virtuous',
          ko: '정조, 순결한, 곧은',
          fr: 'chaste, pur, vertueux',
          it: 'casto, puro, virtuoso',
          de: 'keusch, rein, tugendhaft',
          pt: 'casto, puro, virtuoso',
          es: 'casto, puro, virtuoso',
          ja: '貞淑な、純粋な',
          th: 'บริสุทธิ์, พรหมจรรย์, มีคุณธรรม',
          id: 'suci, murni, berbudi luhur'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses both a clever, quick-witted mind and a pure, unwavering virtuous character',
      ko: '영민하고 재치 있는 두뇌와 순수하고 흔들림 없는 곧은 성품을 모두 갖춘 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède à la fois un esprit vif et intelligent et un caractère pur, inébranlable et vertueux',
      it: 'Un nome per una persona che possiede sia una mente arguta e intelligente sia un carattere puro, incrollabile e virtuoso',
      de: 'Ein Name für eine Person, die sowohl einen klugen, schlagfertigen Verstand als auch einen reinen, unerschütterlichen, tugendhaften Charakter besitzt',
      pt: 'Um nome para uma pessoa que possui tanto uma mente perspicaz e inteligente quanto um caráter puro, inabalável e virtuoso',
      es: 'Un nombre para una persona que posee tanto una mente aguda e inteligente como un carácter puro, inquebrantable y virtuoso',
      ja: '賢く機知に富んだ頭脳と、純粋で揺るぎない徳高い人格を兼ね備えた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีทั้งจิตใจที่เฉียบแหลมและมีไหวพริบ และมีอุปนิสัยที่บริสุทธิ์ มั่นคง และมีคุณธรรม',
      id: 'Sebuah nama untuk seseorang yang memiliki pikiran yang cerdas dan cerdas serta karakter yang murni, tak tergoyahkan, dan berbudi luhur'
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
    en: 'Virtuous with pure integrity',
    ko: '현명하고 곧은 절개',
    fr: 'Vertueuse avec une intégrité pure',
    it: 'Virtuosa con pura integrità',
    de: 'Tugendhaft mit reiner Integrität',
    pt: 'Virtuosa com pura integridade',
    es: 'Virtuosa con pura integridad',
    ja: '賢明で純粋な誠実さ',
    th: 'มีคุณธรรมและซื่อตรงบริสุทธิ์',
    id: 'Berbudi luhur dengan integritas murni'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      },
      {
        korean: '정',
        hanja: '貞',
        meaning: {
          en: 'chaste, pure, virtuous',
          ko: '정조, 순결한, 곧은',
          fr: 'chaste, pur, vertueux',
          it: 'casto, puro, virtuoso',
          de: 'keusch, rein, tugendhaft',
          pt: 'casto, puro, virtuoso',
          es: 'casto, puro, virtuoso',
          ja: '貞淑な、純粋な',
          th: 'บริสุทธิ์, พรหมจรรย์, มีคุณธรรม',
          id: 'suci, murni, berbudi luhur'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a wise heart and a pure, unwavering virtuous character',
      ko: '현명한 마음과 순수하고 흔들림 없는 곧은 성품을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède un cœur sage et un caractère pur, inébranlable et vertueux',
      it: 'Un nome per una persona che possiede un cuore saggio e un carattere puro, incrollabile e virtuoso',
      de: 'Ein Name für eine Person, die ein weises Herz und einen reinen, unerschütterlichen, tugendhaften Charakter besitzt',
      pt: 'Um nome para uma pessoa que possui um coração sábio e um caráter puro, inabalável e virtuoso',
      es: 'Un nombre para una persona que posee un corazón sabio y un carácter puro, inquebrantable y virtuoso',
      ja: '賢明な心と、純粋で揺るぎない徳高い人格を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีหัวใจที่ฉลาดและมีอุปนิสัยที่บริสุทธิ์ มั่นคง และมีคุณธรรม',
      id: 'Sebuah nama untuk seseorang yang memiliki hati yang bijaksana dan karakter yang murni, tak tergoyahkan, dan berbudi luhur'
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
    en: 'Wise and outstanding',
    ko: '지혜롭고 빼어난',
    fr: 'Sage et exceptionnelle',
    it: 'Saggia ed eccezionale',
    de: 'Weise und herausragend',
    pt: 'Sábia e excepcional',
    es: 'Sabia y excepcional',
    ja: '賢くて秀でた',
    th: 'ฉลาดและโดดเด่น',
    id: 'Bijaksana dan luar biasa'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '혜',
        hanja: '慧',
        meaning: {
          en: 'wise, intelligent, bright',
          ko: '지혜로운, 총명한, 밝은',
          fr: 'sage, intelligent, brillant',
          it: 'saggio, intelligente, brillante',
          de: 'weise, intelligent, hell',
          pt: 'sábio, inteligente, brilhante',
          es: 'sabio, inteligente, brillante',
          ja: '賢い、聡明な',
          th: 'ฉลาด, หลักแหลม, สดใส',
          id: 'bijaksana, cerdas, cerah'
        }
      },
      {
        korean: '수',
        hanja: '秀',
        meaning: {
          en: 'excellent, outstanding, beautiful',
          ko: '뛰어난, 우수한, 아름다운',
          fr: 'excellent, exceptionnel, beau',
          it: 'eccellente, eccezionale, bello',
          de: 'ausgezeichnet, hervorragend, schön',
          pt: 'excelente, excepcional, belo',
          es: 'excelente, sobresaliente, hermoso',
          ja: '優れた、秀でた、美しい',
          th: 'ยอดเยี่ยม, โดดเด่น, สวยงาม',
          id: 'unggul, luar biasa, indah'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses both bright wisdom and outstanding, beautiful talents',
      ko: '밝은 지혜와 빼어나게 아름다운 재능을 모두 갖춘 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède à la fois une vive sagesse et des talents exceptionnels et magnifiques',
      it: 'Un nome per una persona che possiede sia una brillante saggezza che talenti eccezionali e bellissimi',
      de: 'Ein Name für eine Person, die sowohl helle Weisheit als auch herausragende, schöne Talente besitzt',
      pt: 'Um nome para uma pessoa que possui tanto uma sabedoria brilhante quanto talentos excepcionais e belos',
      es: 'Un nombre para una persona que posee tanto una brillante sabiduría como talentos excepcionales y hermosos',
      ja: '明るい知恵と優れた美しい才能を兼ね備えた人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีทั้งปัญญาอันสดใสและความสามารถอันโดดเด่นและสวยงาม',
      id: 'Sebuah nama untuk seseorang yang memiliki kebijaksanaan yang cemerlang dan bakat yang luar biasa dan indah'
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
    en: 'A virtuous pearl',
    ko: '어진 구슬',
    fr: 'Une perle vertueuse',
    it: 'Una perla virtuosa',
    de: 'Eine tugendhafte Perle',
    pt: 'Uma pérola virtuosa',
    es: 'Una perla virtuosa',
    ja: '賢い真珠',
    th: 'ไข่มุกผู้ทรงคุณธรรม',
    id: 'Mutiara yang berbudi luhur'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '현',
        hanja: '賢',
        meaning: {
          en: 'virtuous, worthy, wise',
          ko: '어진, 현명한, 덕이 있는',
          fr: 'vertueux, digne, sage',
          it: 'virtuoso, degno, saggio',
          de: 'tugendhaft, würdig, weise',
          pt: 'virtuoso, digno, sábio',
          es: 'virtuoso, digno, sabio',
          ja: '賢い、徳のある、価値のある',
          th: 'มีคุณธรรม, คู่ควร, ฉลาด',
          id: 'berbudi luhur, layak, bijaksana'
        }
      },
      {
        korean: '주',
        hanja: '珠',
        meaning: {
          en: 'jewel, pearl, bead',
          ko: '구슬, 진주, 보석',
          fr: 'bijou, perle',
          it: 'gioiello, perla',
          de: 'Juwel, Perle',
          pt: 'joia, pérola',
          es: 'joya, perla',
          ja: '珠、真珠',
          th: 'อัญมณี, ไข่มุก',
          id: 'permata, mutiara'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a precious and wise being, shining with virtue like a polished pearl',
      ko: '잘 닦인 진주처럼 덕으로 빛나는, 귀하고 현명한 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit un être précieux et sage, brillant de vertu comme une perle polie',
      it: 'Un nome che augura a una persona di essere un essere prezioso e saggio, che brilla di virtù come una perla levigata',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person ein kostbares und weises Wesen wird, das wie eine polierte Perle vor Tugend strahlt',
      pt: 'Um nome que deseja que uma pessoa seja um ser precioso e sábio, brilhando com virtude como uma pérola polida',
      es: 'Un nombre que desea que una persona sea un ser precioso y sabio, que brille con virtud como una perla pulida',
      ja: '磨かれた真珠のように徳で輝く、貴重で賢明な人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นผู้ล้ำค่าและฉลาดเฉลียว ส่องประกายด้วยคุณธรรมดุจไข่มุกขัดเงา',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi makhluk yang berharga dan bijaksana, bersinar dengan kebajikan seperti mutiara yang dipoles'
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
    en: 'A pearl of cleverness',
    ko: '영민한 구슬',
    fr: 'Une perle d\'intelligence',
    it: 'Una perla di intelligenza',
    de: 'Eine Perle der Klugheit',
    pt: 'Uma pérola de inteligência',
    es: 'Una perla de inteligencia',
    ja: '賢さの珠',
    th: 'ไข่มุกแห่งความเฉลียวฉลาด',
    id: 'Mutiara kepintaran'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '주',
        hanja: '珠',
        meaning: {
          en: 'jewel, pearl, bead',
          ko: '구슬, 진주, 보석',
          fr: 'bijou, perle',
          it: 'gioiello, perla',
          de: 'Juwel, Perle',
          pt: 'joia, pérola',
          es: 'joya, perla',
          ja: '珠、真珠',
          th: 'อัญมณี, ไข่มุก',
          id: 'permata, mutiara'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who is a precious being, possessing a quick and clever mind that shines like a pearl',
      ko: '진주처럼 빛나는 빠르고 영리한 마음을 지닌, 소중한 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui est un être précieux, possédant un esprit vif et intelligent qui brille comme une perle',
      it: 'Un nome per una persona che è un essere prezioso, che possiede una mente pronta e intelligente che brilla come una perla',
      de: 'Ein Name für eine Person, die ein kostbares Wesen ist und einen schnellen und klugen Verstand besitzt, der wie eine Perle glänzt',
      pt: 'Um nome para uma pessoa que é um ser precioso, possuindo uma mente rápida e inteligente que brilha como uma pérola',
      es: 'Un nombre para una persona que es un ser precioso, que posee una mente rápida e inteligente que brilla como una perla',
      ja: '真珠のように輝く、素早く賢い心を持つ大切な人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้เป็นที่รัก ผู้มีจิตใจที่ว่องไวและเฉลียวฉลาดที่ส่องประกายดุจไข่มุก',
      id: 'Sebuah nama untuk seseorang yang merupakan makhluk berharga, yang memiliki pikiran yang cepat dan cerdas yang bersinar seperti mutiara'
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
    en: 'Wise glory',
    ko: '지혜로운 영광',
    fr: 'Gloire sage',
    it: 'Gloria saggia',
    de: 'Weiser Ruhm',
    pt: 'Glória sábia',
    es: 'Gloria sabia',
    ja: '賢い栄光',
    th: 'เกียรติยศอันชาญฉลาด',
    id: 'Kemuliaan yang bijaksana'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to achieve glorious prosperity and honor through their wisdom',
      ko: '자신의 지혜를 통해 영광스러운 번영과 명예를 얻기를 기원하는 이름',
      fr: 'Un nom qui souhaite qu\'une personne atteigne une prospérité et un honneur glorieux grâce à sa sagesse',
      it: 'Un nome che augura a una persona di raggiungere una prosperità e un onore gloriosi attraverso la propria saggezza',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person durch ihre Weisheit zu ruhmreichem Wohlstand und Ehre gelangt',
      pt: 'Um nome que deseja que uma pessoa alcance uma prosperidade e honra gloriosas através de sua sabedoria',
      es: 'Un nombre que desea que una persona alcance una prosperidad y un honor gloriosos a través de su sabiduría',
      ja: 'その知恵によって輝かしい繁栄と名誉を達成することを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลบรรลุถึงความเจริญรุ่งเรืองและเกียรติยศอันรุ่งโรจน์ผ่านทางสติปัญญาของตน',
      id: 'Sebuah nama yang mengharapkan seseorang untuk mencapai kemakmuran dan kehormatan yang mulia melalui kebijaksanaan mereka'
    }
  }
}),
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
    en: 'Clear as the sea',
    ko: '바다처럼 맑은',
    fr: 'Claire comme la mer',
    it: 'Chiara come il mare',
    de: 'Klar wie das Meer',
    pt: 'Clara como o mar',
    es: 'Clara como el mar',
    ja: '海のように澄んだ',
    th: 'ใสดุจทะเล',
    id: 'Jernih seperti laut'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '해',
        hanja: '海',
        meaning: {
          en: 'sea, ocean',
          ko: '바다',
          fr: 'mer, océan',
          it: 'mare, oceano',
          de: 'Meer, Ozean',
          pt: 'mar, oceano',
          es: 'mar, océano',
          ja: '海',
          th: 'ทะเล, มหาสมุทร',
          id: 'laut, samudra'
        }
      },
      {
        korean: '린',
        hanja: '潾',
        meaning: {
          en: 'clear water, limpid',
          ko: '맑은 물, 투명한',
          fr: 'eau claire, limpide',
          it: 'acqua limpida, trasparente',
          de: 'klares Wasser, durchsichtig',
          pt: 'água clara, límpida',
          es: 'agua clara, límpida',
          ja: '澄んだ水、清らかな',
          th: 'น้ำใส, กระจ่าง',
          id: 'air jernih, bening'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a heart as vast as the ocean and a spirit as clear and pure as water',
      ko: '바다처럼 넓은 마음과 물처럼 맑고 순수한 영혼을 지닌 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède un cœur aussi vaste que l\'océan et un esprit aussi clair et pur que l\'eau',
      it: 'Un nome per una persona che possiede un cuore vasto come l\'oceano e uno spirito limpido e puro come l\'acqua',
      de: 'Ein Name für eine Person, die ein Herz so weit wie der Ozean und einen Geist so klar und rein wie Wasser besitzt',
      pt: 'Um nome para uma pessoa que possui um coração tão vasto quanto o oceano e um espírito tão claro e puro como a água',
      es: 'Un nombre para una persona que posee un corazón tan vasto como el océano y un espíritu tan claro y puro como el agua',
      ja: '海のように広い心と水のように澄んで純粋な魂を持つ人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีหัวใจกว้างไกลดั่งมหาสมุทรและจิตวิญญาณที่ใสสะอาดบริสุทธิ์ดั่งน้ำ',
      id: 'Sebuah nama untuk seseorang yang memiliki hati seluas lautan dan jiwa yang jernih dan murni seperti air'
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
    en: 'Clever wisdom',
    ko: '영민한 지혜',
    fr: 'Sagesse astucieuse',
    it: 'Saggezza astuta',
    de: 'Kluge Weisheit',
    pt: 'Sabedoria inteligente',
    es: 'Sabiduría inteligente',
    ja: '賢い知恵',
    th: 'ปัญญาอันหลักแหลม',
    id: 'Kebijaksanaan yang cerdas'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '민',
        hanja: '敏',
        meaning: {
          en: 'quick, agile, clever',
          ko: '빠른, 민첩한, 영리한',
          fr: 'rapide, agile, intelligent',
          it: 'veloce, agile, intelligente',
          de: 'schnell, wendig, klug',
          pt: 'rápido, ágil, inteligente',
          es: 'rápido, ágil, inteligente',
          ja: '素早い、敏捷な、賢い',
          th: 'รวดเร็ว, ว่องไว, ฉลาด',
          id: 'cepat, tangkas, pintar'
        }
      },
      {
        korean: '지',
        hanja: '智',
        meaning: {
          en: 'wisdom, intelligence',
          ko: '지혜, 지능',
          fr: 'sagesse, intelligence',
          it: 'saggezza, intelligenza',
          de: 'Weisheit, Intelligenz',
          pt: 'sabedoria, inteligência',
          es: 'sabiduría, inteligencia',
          ja: '知恵、知性',
          th: 'ปัญญา, สติปัญญา',
          id: 'kebijaksanaan, kecerdasan'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name for a person who possesses a sharp and quick-witted wisdom, able to make clever judgments',
      ko: '예리하고 재치 있는 지혜를 가지고 영리한 판단을 내릴 수 있는 사람이 되기를 바라는 이름',
      fr: 'Un nom pour une personne qui possède une sagesse vive et perspicace, capable de porter des jugements intelligents',
      it: 'Un nome per una persona che possiede una saggezza acuta e arguta, in grado di dare giudizi intelligenti',
      de: 'Ein Name für eine Person, die eine scharfe und schlagfertige Weisheit besitzt und in der Lage ist, kluge Urteile zu fällen',
      pt: 'Um nome para uma pessoa que possui uma sabedoria aguçada e perspicaz, capaz de fazer julgamentos inteligentes',
      es: 'Un nombre para una persona que posee una sabiduría aguda y perspicaz, capaz de emitir juicios inteligentes',
      ja: '鋭く機知に富んだ知恵を持ち、賢明な判断を下せる人になることを願う名前',
      th: 'ชื่อสำหรับบุคคลผู้มีปัญญาอันเฉียบแหลมและมีไหวพริบ สามารถตัดสินใจได้อย่างชาญฉลาด',
      id: 'Sebuah nama untuk seseorang yang memiliki kebijaksanaan yang tajam dan cerdas, mampu membuat penilaian yang cerdas'
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
    en: 'A source of glory',
    ko: '영광의 근원',
    fr: 'Une source de gloire',
    it: 'Una fonte di gloria',
    de: 'Eine Quelle des Ruhms',
    pt: 'Uma fonte de glória',
    es: 'Una fuente de gloria',
    ja: '栄光の源',
    th: 'แหล่งแห่งเกียรติยศ',
    id: 'Sumber kemuliaan'
  },
  hanjaBreakdown: {
    characters: [
      {
        korean: '원',
        hanja: '源',
        meaning: {
          en: 'source, origin, root',
          ko: '근원, 기원, 뿌리',
          fr: 'source, origine, racine',
          it: 'fonte, origine, radice',
          de: 'Quelle, Ursprung, Wurzel',
          pt: 'fonte, origem, raiz',
          es: 'fuente, origen, raíz',
          ja: '源、起源、根源',
          th: 'แหล่งกำเนิด, ต้นกำเนิด, รากฐาน',
          id: 'sumber, asal, akar'
        }
      },
      {
        korean: '영',
        hanja: '榮',
        meaning: {
          en: 'glory, honor, prosperity',
          ko: '영광, 명예, 번영',
          fr: 'gloire, honneur, prospérité',
          it: 'gloria, onore, prosperità',
          de: 'Ruhm, Ehre, Wohlstand',
          pt: 'glória, honra, prosperidade',
          es: 'gloria, honor, prosperidad',
          ja: '栄光、名誉、繁栄',
          th: 'เกียรติยศ, ศักดิ์ศรี, ความเจริญรุ่งเรือง',
          id: 'kemuliaan, kehormatan, kemakmuran'
        }
      }
    ],
    traditionalMeaning: {
      en: 'A name that wishes for a person to be a fundamental source of honor and glorious prosperity for their family and community',
      ko: '가족과 공동체에 명예와 영광스러운 번영의 근원이 되는 사람이 되기를 바라는 이름',
      fr: 'Un nom qui souhaite qu\'une personne soit une source fondamentale d\'honneur et de prospérité glorieuse pour sa famille et sa communauté',
      it: 'Un nome che augura a una persona di essere una fonte fondamentale di onore e gloriosa prosperità per la propria famiglia e comunità',
      de: 'Ein Name, der den Wunsch ausdrückt, dass eine Person eine grundlegende Quelle der Ehre und des ruhmreichen Wohlstands für ihre Familie und Gemeinschaft wird',
      pt: 'Um nome que deseja que uma pessoa seja uma fonte fundamental de honra e prosperidade gloriosa para sua família e comunidade',
      es: 'Un nombre que desea que una persona sea una fuente fundamental de honor y prosperidad gloriosa para su familia y comunidad',
      ja: '家族や地域社会にとって名誉と輝かしい繁栄の根源となる人になることを願う名前',
      th: 'ชื่อที่ปรารถนาให้บุคคลเป็นแหล่งกำเนิดพื้นฐานของเกียรติยศและความเจริญรุ่งเรืองอันรุ่งโรจน์สำหรับครอบครัวและชุมชนของตน',
      id: 'Sebuah nama yang mengharapkan seseorang untuk menjadi sumber fundamental kehormatan dan kemakmuran yang mulia bagi keluarga dan komunitas mereka'
    }
  },
  kpopMember: { group: 'IVE', memberName: 'Wonyoung' }
}),
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
