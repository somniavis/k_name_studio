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
}

// Function to create standardized translations for all locales
const createTranslations = (en: string, ko: string): { [locale: string]: string } => ({
  en,
  ko,
  ja: en, // Will be replaced with proper translations
  fr: en, // Will be replaced with proper translations
  de: en, // Will be replaced with proper translations
  es: en, // Will be replaced with proper translations
  it: en, // Will be replaced with proper translations
  pt: en, // Will be replaced with proper translations
  th: en, // Will be replaced with proper translations
  id: en  // Will be replaced with proper translations
});

export const KOREAN_NAMES: KoreanName[] = [
  // Wood Element - Male Names (20 total)
  {
    korean: '민준',
    hanja: '敏俊',
    romanization: 'Min-jun',
    pronunciation: 'min-joon',
    meaning: createTranslations('Quick to learn and handsome', '민첩하고 준수한'),
    story: createTranslations('This name combines the wisdom of a scholar with natural charm, perfect for someone who grows like a strong tree.', '학자의 지혜와 자연스러운 매력을 결합한 이름으로, 강한 나무처럼 자라는 사람에게 완벽합니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 95,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '민',
          hanja: '敏',
          meaning: createTranslations('quick, agile, clever', '빠른, 민첩한, 영리한')
        },
        {
          korean: '준',
          hanja: '俊',
          meaning: createTranslations('handsome, talented', '준수한, 재능있는')
        }
      ],
      traditionalMeaning: createTranslations('"quick, agile" combined with "handsome, talented" creates harmonious meaning that flows with natural intelligence and attractive qualities, like a scholar who learns quickly and inspires others', '"빠르고 민첩한"과 "준수하고 재능있는"이 결합되어 빠르게 배우고 다른 사람에게 영감을 주는 학자처럼 자연스러운 지능과 매력적인 자질이 흐르는 조화로운 의미를 만듭니다')
    },
    pronunciationMatch: 72
  },
  {
    korean: '건우',
    hanja: '健友',
    romanization: 'Gun-woo',
    pronunciation: 'gun-woo',
    meaning: createTranslations('Strong and excellent', '강하고 뛰어난'),
    story: createTranslations('Like a mighty oak that provides shelter, this name represents strength rooted in kindness and protection of others.', '거대한 참나무가 피난처를 제공하듯, 이 이름은 친절과 타인 보호에 뿌리를 둔 힘을 나타냅니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 88,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '건',
          hanja: '健',
          meaning: createTranslations('healthy, strong, robust', '건강한, 강한, 튼튼한')
        },
        {
          korean: '우',
          hanja: '友',
          meaning: createTranslations('friend, friendship', '친구, 우정')
        }
      ],
      traditionalMeaning: createTranslations('"healthy, strong" combined with "friend" creates a meaning of strong friendship and reliable companionship, representing someone who is both physically and emotionally strong for others', '"건강하고 강한"과 "친구"가 결합되어 강한 우정과 믿을 수 있는 동반자의 의미를 만들며, 타인을 위해 신체적으로나 감정적으로 강한 사람을 나타냅니다')
    },
    pronunciationMatch: 65
  },
  {
    korean: '지호',
    hanja: '智豪',
    romanization: 'Ji-ho',
    pronunciation: 'jee-ho',
    meaning: createTranslations('Wise and great', '지혜롭고 위대한'),
    story: createTranslations('This name carries the essence of ancient wisdom combined with modern greatness, like a sage who guides with gentle strength.', '고대의 지혜와 현대적 위대함의 본질을 담고 있으며, 부드러운 힘으로 인도하는 현자와 같습니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 85,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '지',
          hanja: '智',
          meaning: createTranslations('wisdom, intelligence', '지혜, 지능')
        },
        {
          korean: '호',
          hanja: '豪',
          meaning: createTranslations('heroic, great', '영웅적인, 위대한')
        }
      ],
      traditionalMeaning: createTranslations('"wisdom" combined with "heroic, great" creates harmonious meaning that flows with adaptive wisdom and great leadership, like a wise leader who inspires others', '"지혜"와 "영웅적인, 위대한"이 결합되어 다른 사람에게 영감을 주는 현명한 지도자처럼 적응적 지혜와 위대한 리더십이 흐르는 조화로운 의미를 만듭니다')
    },
    pronunciationMatch: 45
  },
  {
    korean: '재민',
    romanization: 'Jae-min',
    pronunciation: 'jay-min',
    meaning: createTranslations('Talented and quick', '재능있고 민첩한'),
    story: createTranslations('Like bamboo that bends but never breaks, this name represents resilient talent that adapts and grows.', '구부러지지만 결코 부러지지 않는 대나무처럼, 이 이름은 적응하고 성장하는 회복력 있는 재능을 나타냅니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 82,
    style: 'modern'
  },
  {
    korean: '현준',
    romanization: 'Hyun-jun',
    pronunciation: 'hyun-joon',
    meaning: createTranslations('Virtuous and talented', '덕이 있고 재능있는'),
    story: createTranslations('This name embodies the virtue of ancient scholars combined with natural talent, growing like a wise old tree.', '고대 학자의 덕과 타고난 재능을 결합하여, 지혜로운 고목처럼 자라는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 80,
    style: 'traditional'
  },
  {
    korean: '민성',
    romanization: 'Min-seong',
    pronunciation: 'min-sung',
    meaning: createTranslations('Quick and sincere', '민첩하고 성실한'),
    story: createTranslations('Like morning dew that nourishes new growth, this name represents sincere effort that leads to natural success.', '새로운 성장을 기르는 아침 이슬처럼, 자연스러운 성공으로 이어지는 성실한 노력을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 78,
    style: 'modern'
  },
  {
    korean: '지민',
    romanization: 'Ji-min',
    pronunciation: 'jee-min',
    meaning: createTranslations('Wise and quick', '지혜롭고 민첩한'),
    story: createTranslations('This name flows like a spring breeze through forest leaves, representing wisdom that moves with natural grace.', '숲잎 사이로 흐르는 봄바람처럼, 자연스러운 우아함으로 움직이는 지혜를 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 76,
    style: 'modern'
  },
  {
    korean: '성민',
    romanization: 'Seong-min',
    pronunciation: 'sung-min',
    meaning: createTranslations('Sincere and quick', '성실하고 민첩한'),
    story: createTranslations('Like a tree that grows straight toward the light, this name represents honest growth and natural integrity.', '빛을 향해 곧게 자라는 나무처럼, 정직한 성장과 자연스러운 성실함을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 74,
    style: 'modern'
  },
  {
    korean: '준영',
    romanization: 'Jun-yeong',
    pronunciation: 'joon-young',
    meaning: createTranslations('Talented and prosperous', '재능있고 번영하는'),
    story: createTranslations('This name represents the prosperity that comes from nurturing talent, like a garden that flourishes with care.', '재능을 기르는 것에서 오는 번영을 나타내며, 보살핌으로 번성하는 정원과 같은 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 72,
    style: 'modern'
  },
  {
    korean: '민우',
    romanization: 'Min-woo',
    pronunciation: 'min-woo',
    meaning: createTranslations('Quick and excellent', '민첩하고 뛰어난'),
    story: createTranslations('Like a young pine that reaches boldly toward the sky, this name embodies quick excellence and natural ambition.', '하늘을 향해 대담하게 뻗어나가는 어린 소나무처럼, 빠른 탁월함과 자연스러운 야망을 구현한 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 70,
    style: 'modern'
  },
  {
    korean: '재현',
    romanization: 'Jae-hyun',
    pronunciation: 'jay-hyun',
    meaning: createTranslations('Talented and virtuous', '재능있고 덕이 있는'),
    story: createTranslations('This name combines artistic talent with moral virtue, like a master craftsman who creates beauty with integrity.', '예술적 재능과 도덕적 덕을 결합하여, 성실함으로 아름다움을 창조하는 대장장이와 같은 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 68,
    style: 'mixed'
  },
  {
    korean: '지우',
    romanization: 'Ji-woo',
    pronunciation: 'jee-woo',
    meaning: createTranslations('Wise and gentle rain', '지혜롭고 부드러운 비'),
    story: createTranslations('Like gentle rain that awakens sleeping seeds, this name represents wisdom that nurtures growth in others.', '잠자는 씨앗을 깨우는 부드러운 비처럼, 다른 사람의 성장을 기르는 지혜를 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 66,
    style: 'modern'
  },
  {
    korean: '건희',
    romanization: 'Gun-hui',
    pronunciation: 'gun-hee',
    meaning: createTranslations('Strong and bright', '강하고 밝은'),
    story: createTranslations('This name shines like sunlight through forest canopy, representing strength that illuminates and guides others.', '숲의 캐노피를 통한 햇빛처럼 빛나며, 다른 사람을 비추고 안내하는 힘을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 64,
    style: 'modern'
  },
  {
    korean: '민제',
    romanization: 'Min-je',
    pronunciation: 'min-jay',
    meaning: createTranslations('Quick and talented', '민첩하고 재능있는'),
    story: createTranslations('Like a swift stream that carves its path through rock, this name represents talent that finds its way naturally.', '바위를 뚫고 길을 만드는 빠른 개울처럼, 자연스럽게 길을 찾는 재능을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 62,
    style: 'modern'
  },
  {
    korean: '준수',
    romanization: 'Jun-soo',
    pronunciation: 'joon-soo',
    meaning: createTranslations('Talented and excellent', '재능있고 뛰어난'),
    story: createTranslations('This name embodies the excellence that comes from cultivating natural talent, like a master gardener tends his trees.', '자연스러운 재능을 기르는 것에서 오는 탁월함을 구현하며, 마스터 정원사가 나무를 돌보는 것과 같은 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 60,
    style: 'modern'
  },
  {
    korean: '현민',
    romanization: 'Hyun-min',
    pronunciation: 'hyun-min',
    meaning: createTranslations('Virtuous and quick', '덕이 있고 민첩한'),
    story: createTranslations('Like a bamboo shoot that grows with righteous purpose, this name represents virtue expressed through swift action.', '의로운 목적으로 자라는 대나무 새싹처럼, 신속한 행동을 통해 표현되는 덕을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 58,
    style: 'traditional'
  },
  {
    korean: '지성',
    romanization: 'Ji-seong',
    pronunciation: 'jee-sung',
    meaning: createTranslations('Wise and sincere', '지혜롭고 성실한'),
    story: createTranslations('This name grows like ancient wisdom rooted in sincere practice, representing knowledge that comes from honest effort.', '성실한 수행에 뿌리를 둔 고대 지혜처럼 자라며, 정직한 노력에서 오는 지식을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 56,
    style: 'traditional'
  },
  {
    korean: '민기',
    romanization: 'Min-gi',
    pronunciation: 'min-gee',
    meaning: createTranslations('Quick and energetic', '민첩하고 활기찬'),
    story: createTranslations('Like wind through spring leaves, this name represents energetic intelligence that brings life and movement to everything it touches.', '봄잎 사이로 부는 바람처럼, 손대는 모든 것에 생명과 움직임을 가져다주는 활기찬 지성을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 54,
    style: 'modern'
  },
  {
    korean: '재우',
    romanization: 'Jae-woo',
    pronunciation: 'jay-woo',
    meaning: createTranslations('Talented and excellent', '재능있고 뛰어난'),
    story: createTranslations('This name embodies excellence that grows from natural talent, like a tree that bears beautiful fruit season after season.', '자연스러운 재능에서 자라나는 탁월함을 구현하며, 계절마다 아름다운 열매를 맺는 나무와 같은 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 52,
    style: 'modern'
  },
  {
    korean: '준호',
    romanization: 'Jun-ho',
    pronunciation: 'joon-ho',
    meaning: createTranslations('Talented and great', '재능있고 위대한'),
    story: createTranslations('Like a magnificent tree that provides shade for generations, this name represents talent that creates lasting greatness.', '여러 세대에 걸쳐 그늘을 제공하는 웅장한 나무처럼, 지속적인 위대함을 창조하는 재능을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 50,
    style: 'modern'
  },
  // K-pop Wood Male Names
  {
    korean: '태형',
    hanja: '泰亨',
    romanization: 'Tae-hyung',
    pronunciation: 'tay-hyung',
    meaning: createTranslations('Great virtue', '큰 덕'),
    story: createTranslations('Like a strong tree that grows with great virtue, this name represents someone who stands tall with moral strength and natural charisma.', '큰 덕을 가지고 자라는 강한 나무처럼, 도덕적 힘과 자연스러운 카리스마로 우뚝 서는 사람을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 85,
    kpopMember: { group: 'BTS', memberName: 'V' },
    style: 'kpop'
  },
  {
    korean: '남준',
    romanization: 'Nam-jun',
    pronunciation: 'nam-joon',
    meaning: createTranslations('South talented', '남쪽의 재능'),
    story: createTranslations('This name embodies talent that flows like a river from the south, bringing wisdom and leadership like ancient scholars.', '남쪽에서 흘러오는 강처럼 재능을 구현하며, 고대 학자들처럼 지혜와 리더십을 가져다주는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 82,
    kpopMember: { group: 'BTS', memberName: 'RM' },
    style: 'kpop'
  },
  {
    korean: '윤기',
    romanization: 'Yoon-gi',
    pronunciation: 'yoon-gee',
    meaning: createTranslations('Prosperous foundation', '번영하는 기초'),
    story: createTranslations('Like bamboo that grows from a prosperous foundation, this name represents success built on solid roots and creative expression.', '번영하는 기초에서 자라는 대나무처럼, 탄탄한 뿌리와 창조적 표현 위에 세워진 성공을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'male',
    popularity: 78,
    kpopMember: { group: 'BTS', memberName: 'Suga' },
    style: 'kpop'
  },

  // Wood Element - Female Names (20 total)
  {
    korean: '서연',
    hanja: '瑞蓮',
    romanization: 'Seo-yeon',
    pronunciation: 'suh-yun',
    meaning: createTranslations('Beautiful lotus from the west', '서쪽의 아름다운 연꽃'),
    story: createTranslations('Like a lotus that blooms pure and beautiful from muddy waters, this name represents grace that emerges from challenges.', '진흙 속에서 순수하고 아름답게 피는 연꽃처럼, 도전에서 나타나는 우아함을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 95,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '서',
          hanja: '瑞',
          meaning: createTranslations('auspicious, propitious', '상서로운, 길조의')
        },
        {
          korean: '연',
          hanja: '蓮',
          meaning: createTranslations('lotus flower, pure', '연꽃, 순수한')
        }
      ],
      traditionalMeaning: createTranslations('"auspicious" combined with "lotus flower" creates a meaning of blessed purity, representing someone who maintains grace and purity while bringing good fortune to others', '"상서로운"과 "연꽃"이 결합되어 축복받은 순수함의 의미를 만들며, 타인에게 행운을 가져다주면서 우아함과 순수함을 유지하는 사람을 나타냅니다')
    },
    pronunciationMatch: 69
  },
  {
    korean: '지우',
    romanization: 'Ji-woo',
    pronunciation: 'jee-woo',
    meaning: createTranslations('Wise and gentle rain', '지혜롭고 부드러운 비'),
    story: createTranslations('This name embodies the gentle wisdom that nourishes growth, like spring rain that brings life to sleeping gardens.', '성장을 기르는 부드러운 지혜를 구현하며, 잠자는 정원에 생명을 가져다주는 봄비와 같은 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 92,
    style: 'modern'
  },
  {
    korean: '채원',
    hanja: '彩園',
    romanization: 'Chae-won',
    pronunciation: 'chay-won',
    meaning: createTranslations('Colorful garden', '다채로운 정원'),
    story: createTranslations('Like a garden in full bloom, this name represents someone who brings beauty and variety to the world around them.', '만개한 정원처럼, 주변 세계에 아름다움과 다양성을 가져다주는 사람을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 89,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '채',
          hanja: '彩',
          meaning: createTranslations('color, brilliance, beauty', '색깔, 빛남, 아름다움')
        },
        {
          korean: '원',
          hanja: '園',
          meaning: createTranslations('garden, park, orchard', '정원, 공원, 과수원')
        }
      ],
      traditionalMeaning: createTranslations('"color, brilliance" combined with "garden" creates a meaning of beautiful garden, representing someone who creates colorful and vibrant spaces filled with beauty and life', '"색깔, 빛남"과 "정원"이 결합되어 아름다운 정원의 의미를 만들며, 아름다움과 생명으로 가득한 다채롭고 활기찬 공간을 창조하는 사람을 나타냅니다')
    },
    pronunciationMatch: 77
  },
  {
    korean: '지유',
    hanja: '智柔',
    romanization: 'Ji-yoo',
    pronunciation: 'jee-yoo',
    meaning: createTranslations('Wise and abundant', '지혜롭고 풍부한'),
    story: createTranslations('Like rich earth that nurtures seeds into flowers, this name embodies wisdom that brings abundance through patient nurturing.', '씨앗을 꽃으로 기르는 풍부한 흙처럼, 인내심 있는 양육을 통해 풍요로움을 가져다주는 지혜를 구현한 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 86,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '지',
          hanja: '智',
          meaning: createTranslations('wisdom, intelligence, knowledge', '지혜, 지능, 지식')
        },
        {
          korean: '유',
          hanja: '柔',
          meaning: createTranslations('gentle, soft, flexible', '부드러운, 온화한, 유연한')
        }
      ],
      traditionalMeaning: createTranslations('"wisdom, intelligence" combined with "gentle, soft" creates a meaning of gentle wisdom, representing someone who possesses wise understanding with a kind and nurturing approach', '"지혜, 지능"과 "부드럽고 온화한"이 결합되어 온화한 지혜의 의미를 만들며, 친절하고 배려하는 접근 방식으로 현명한 이해력을 가진 사람을 나타냅니다')
    },
    pronunciationMatch: 84
  },
  {
    korean: '서우',
    romanization: 'Seo-woo',
    pronunciation: 'suh-woo',
    meaning: createTranslations('Auspicious rain', '길조의 비'),
    story: createTranslations('This name flows like blessed rain that brings prosperity, representing good fortune that nurtures growth in all areas of life.', '번영을 가져다주는 축복받은 비처럼 흐르며, 삶의 모든 영역에서 성장을 기르는 행운을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 83,
    style: 'modern'
  },
  {
    korean: '지민',
    hanja: '智敏',
    romanization: 'Ji-min',
    pronunciation: 'jee-min',
    meaning: createTranslations('Wise and quick', '지혜롭고 민첩한'),
    story: createTranslations('Like a mountain stream that knows exactly where to flow, this name embodies quick wisdom that finds the most beautiful path forward.', '정확히 어디로 흘러야 할지 아는 산골 개울처럼, 가장 아름다운 길을 찾는 빠른 지혜를 구현한 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 80,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '지',
          hanja: '智',
          meaning: createTranslations('wisdom, intelligence, knowledge', '지혜, 지능, 지식')
        },
        {
          korean: '민',
          hanja: '敏',
          meaning: createTranslations('quick, agile, sharp', '빠른, 민첩한, 예리한')
        }
      ],
      traditionalMeaning: createTranslations('"wisdom, intelligence" combined with "quick, agile" creates a meaning of quick wisdom, representing someone who has sharp intelligence and wise decision-making abilities', '"지혜, 지능"과 "빠르고 민첩한"이 결합되어 빠른 지혜의 의미를 만들며, 예리한 지능과 지혜로운 판단력을 가진 사람을 나타냅니다')
    },
    pronunciationMatch: 82
  },
  {
    korean: '예린',
    romanization: 'Ye-rin',
    pronunciation: 'yeh-rin',
    meaning: createTranslations('Beautiful and wise', '아름답고 지혜로운'),
    story: createTranslations('This name grows like a wise tree that bears beautiful flowers, representing beauty that comes from inner wisdom and grace.', '아름다운 꽃을 피우는 지혜로운 나무처럼 자라며, 내면의 지혜와 우아함에서 오는 아름다움을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 77,
    style: 'modern'
  },
  {
    korean: '하린',
    romanization: 'Ha-rin',
    pronunciation: 'ha-rin',
    meaning: createTranslations('Beautiful sky', '아름다운 하늘'),
    story: createTranslations('Like the vast sky that nurtures all growth below, this name represents beauty that provides space for others to flourish.', '아래의 모든 성장을 기르는 광활한 하늘처럼, 다른 사람들이 번영할 수 있는 공간을 제공하는 아름다움을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 74,
    style: 'modern'
  },
  {
    korean: '지원',
    romanization: 'Ji-won',
    pronunciation: 'jee-won',
    meaning: createTranslations('Wise source', '지혜로운 근원'),
    story: createTranslations('This name flows like a pure spring that feeds a forest, representing wisdom that becomes a source of life for others.', '숲을 기르는 순수한 샘처럼 흐르며, 다른 사람들에게 생명의 근원이 되는 지혜를 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 71,
    style: 'modern'
  },
  {
    korean: '서진',
    romanization: 'Seo-jin',
    pronunciation: 'suh-jin',
    meaning: createTranslations('Auspicious and precious', '길조롭고 소중한'),
    story: createTranslations('Like a precious flower that blooms in the most auspicious season, this name represents value that grows naturally over time.', '가장 길조로운 계절에 피는 소중한 꽃처럼, 시간이 지나면서 자연스럽게 자라나는 가치를 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 68,
    style: 'modern'
  },
  {
    korean: '예은',
    romanization: 'Ye-eun',
    pronunciation: 'yeh-eun',
    meaning: createTranslations('Beautiful grace', '아름다운 은혜'),
    story: createTranslations('This name embodies the grace of a willow tree that dances beautifully with every breeze, representing elegant strength.', '모든 산들바람과 함께 아름답게 춤추는 버드나무의 우아함을 구현하며, 우아한 힘을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 65,
    style: 'modern'
  },
  {
    korean: '지현',
    romanization: 'Ji-hyun',
    pronunciation: 'jee-hyun',
    meaning: createTranslations('Wise and virtuous', '지혜롭고 덕이 있는'),
    story: createTranslations('Like an ancient tree that has grown wise through seasons, this name represents virtue that deepens with understanding.', '계절을 거쳐 지혜로워진 고목처럼, 이해와 함께 깊어지는 덕을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 62,
    style: 'traditional'
  },
  {
    korean: '채은',
    romanization: 'Chae-eun',
    pronunciation: 'chay-eun',
    meaning: createTranslations('Colorful grace', '다채로운 은혜'),
    story: createTranslations('This name blooms like a garden where every flower has its own grace, representing diverse talents unified in beauty.', '모든 꽃이 고유한 우아함을 가진 정원처럼 피며, 아름다움으로 통합된 다양한 재능을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 59,
    style: 'modern'
  },
  {
    korean: '서영',
    romanization: 'Seo-yeong',
    pronunciation: 'suh-young',
    meaning: createTranslations('Auspicious and prosperous', '길조롭고 번영하는'),
    story: createTranslations('Like a tree that prospers in the most favorable conditions, this name represents fortune that grows with proper nurturing.', '가장 유리한 조건에서 번영하는 나무처럼, 적절한 양육과 함께 자라나는 운을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 56,
    style: 'modern'
  },
  {
    korean: '민서',
    romanization: 'Min-seo',
    pronunciation: 'min-suh',
    meaning: createTranslations('Quick and auspicious', '민첩하고 길조로운'),
    story: createTranslations('This name grows like fast bamboo under auspicious stars, representing rapid growth blessed by favorable circumstances.', '길조로운 별 아래에서 빠르게 자라는 대나무처럼, 유리한 환경의 축복을 받은 빠른 성장을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 53,
    style: 'modern'
  },
  {
    korean: '예지',
    romanization: 'Ye-ji',
    pronunciation: 'yeh-jee',
    meaning: createTranslations('Beautiful wisdom', '아름다운 지혜'),
    story: createTranslations('Like the beautiful wisdom of ancient trees, this name represents knowledge that grows more beautiful with age and experience.', '고목의 아름다운 지혜처럼, 나이와 경험과 함께 더욱 아름다워지는 지식을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 50,
    style: 'traditional'
  },
  {
    korean: '지은',
    romanization: 'Ji-eun',
    pronunciation: 'jee-eun',
    meaning: createTranslations('Wise grace', '지혜로운 은혜'),
    story: createTranslations('This name flows like graceful wisdom through generations, representing knowledge that is passed down with love and care.', '세대를 거쳐 흘러내리는 우아한 지혜처럼, 사랑과 보살핌으로 전해지는 지식을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 47,
    style: 'modern'
  },
  {
    korean: '하은',
    romanization: 'Ha-eun',
    pronunciation: 'ha-eun',
    meaning: createTranslations('Great grace', '큰 은혜'),
    story: createTranslations('Like a great tree that provides graceful shelter, this name represents generous beauty that protects and nurtures others.', '우아한 피난처를 제공하는 큰 나무처럼, 다른 사람을 보호하고 기르는 관대한 아름다움을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 44,
    style: 'modern'
  },
  {
    korean: '채린',
    romanization: 'Chae-rin',
    pronunciation: 'chay-rin',
    meaning: createTranslations('Colorful wisdom', '다채로운 지혜'),
    story: createTranslations('Like a forest where each tree contributes its own color, this name represents wisdom that comes from embracing diversity.', '각 나무가 고유한 색깔을 기여하는 숲처럼, 다양성을 포용하는 것에서 오는 지혜를 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 38,
    style: 'modern'
  },
  // K-pop Wood Female Names
  {
    korean: '다현',
    romanization: 'Da-hyun',
    pronunciation: 'da-hyun',
    meaning: createTranslations('Many virtues', '많은 덕'),
    story: createTranslations('Like a garden with many different virtues blooming together, this name represents someone with diverse talents and moral qualities.', '다양한 덕이 함께 피는 정원처럼, 다양한 재능과 도덕적 자질을 가진 사람을 나타내는 이름입니다.'),
    element: 'wood',
    gender: 'female',
    popularity: 88,
    kpopMember: { group: 'TWICE', memberName: 'Dahyun' },
    style: 'kpop'
  },

  // Fire Element - Male Names (20 total)
  {
    korean: '하준',
    romanization: 'Ha-jun',
    pronunciation: 'ha-joon',
    meaning: createTranslations('Summer and talented', '여름과 재능'),
    story: createTranslations('This name captures the peak of summer\'s warmth and energy, representing someone who shines brightest when helping others.', '여름의 따뜻함과 에너지의 절정을 담고 있으며, 다른 사람을 도울 때 가장 밝게 빛나는 사람을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 98,
    style: 'modern'
  },
  {
    korean: '시우',
    hanja: '始雨',
    romanization: 'Si-woo',
    pronunciation: 'see-woo',
    meaning: createTranslations('Beginning rain', '처음 비'),
    story: createTranslations('This name represents the first rain that breaks a drought, bringing hope and renewal with passionate energy.', '가뭄을 깨뜨리는 첫 비를 나타내며, 열정적인 에너지로 희망과 새로운 시작을 가져다주는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 94,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '시',
          hanja: '始',
          meaning: createTranslations('begin, start, beginning', '시작하다, 시작, 처음')
        },
        {
          korean: '우',
          hanja: '雨',
          meaning: createTranslations('rain, rainfall', '비, 강우')
        }
      ],
      traditionalMeaning: createTranslations('"begin" combined with "rain" creates a meaning of first rain or new beginning, representing someone who brings fresh starts and renewal like the first rain after drought', '"시작"과 "비"가 결합되어 첫 비나 새로운 시작의 의미를 만들며, 가뭄 후 첫 비처럼 새로운 시작과 새로움을 가져다주는 사람을 나타냅니다')
    },
    pronunciationMatch: 81
  },
  {
    korean: '도윤',
    hanja: '道潤',
    romanization: 'Do-yoon',
    pronunciation: 'do-yoon',
    meaning: createTranslations('Moral and prosperous', '도덕적이고 번영하는'),
    story: createTranslations('Like a flame that burns bright and clean, this name embodies ethical leadership and success through integrity.', '밝고 깨끗하게 타는 불꽃처럼, 윤리적 리더십과 성실함을 통한 성공을 구현하는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 90,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '도',
          hanja: '道',
          meaning: createTranslations('path, way, moral principle', '길, 도, 도덕적 원칙')
        },
        {
          korean: '윤',
          hanja: '潤',
          meaning: createTranslations('moist, rich, glossy', '촉촉한, 풍부한, 윤기나는')
        }
      ],
      traditionalMeaning: createTranslations('"path, way" combined with "moist, rich" creates a meaning of enriching moral path, representing someone who brings prosperity through ethical leadership', '"길, 도"와 "촉촉하고 풍부한"이 결합되어 도덕적 길을 풍요롭게 하는 의미를 만들며, 윤리적 리더십을 통해 번영을 가져다주는 사람을 나타냅니다')
    },
    pronunciationMatch: 78
  },
  {
    korean: '지훈',
    hanja: '智勳',
    romanization: 'Ji-hoon',
    pronunciation: 'jee-hoon',
    meaning: createTranslations('Wise and meritorious', '지혜롭고 공로가 있는'),
    story: createTranslations('Like a lighthouse that guides ships safely to shore, this name represents wisdom that illuminates the path for others.', '배를 안전하게 항구로 안내하는 등대처럼, 다른 사람들의 길을 밝혀주는 지혜를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 86,
    style: 'traditional',
    hanjaBreakdown: {
      characters: [
        {
          korean: '지',
          hanja: '智',
          meaning: createTranslations('wisdom, intelligence, knowledge', '지혜, 지능, 지식')
        },
        {
          korean: '훈',
          hanja: '勳',
          meaning: createTranslations('meritorious deed, achievement', '공로, 훈공, 업적')
        }
      ],
      traditionalMeaning: createTranslations('"wisdom, intelligence" combined with "meritorious deed" creates a meaning of wise achievement, representing someone who accomplishes great things through wisdom and intelligence', '"지혜, 지능"과 "공로, 업적"이 결합되어 지혜로운 성취의 의미를 만들며, 지혜와 지능을 통해 위대한 일을 성취하는 사람을 나타냅니다')
    },
    pronunciationMatch: 73
  },
  {
    korean: '태민',
    romanization: 'Tae-min',
    pronunciation: 'tay-min',
    meaning: createTranslations('Great and quick', '크고 민첩한'),
    story: createTranslations('This name burns like a bright flame that moves swiftly, representing greatness achieved through passionate dedication.', '빠르게 움직이는 밝은 불꽃처럼 타며, 열정적인 헌신을 통해 달성된 위대함을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 82,
    style: 'modern'
  },
  {
    korean: '현수',
    romanization: 'Hyun-soo',
    pronunciation: 'hyun-soo',
    meaning: createTranslations('Virtuous and excellent', '덕이 있고 뛰어난'),
    story: createTranslations('Like a flame that burns with moral purpose, this name represents excellence that lights the way for ethical action.', '도덕적 목적으로 타는 불꽃처럼, 윤리적 행동의 길을 밝히는 탁월함을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 78,
    style: 'traditional'
  },
  {
    korean: '정우',
    romanization: 'Jeong-woo',
    pronunciation: 'jung-woo',
    meaning: createTranslations('Righteous and excellent', '올바르고 뛰어난'),
    story: createTranslations('This name blazes like righteous fire that purifies and protects, representing strength used for noble purposes.', '정화하고 보호하는 의로운 불처럼 타오르며, 고귀한 목적을 위해 사용되는 힘을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 74,
    style: 'traditional'
  },
  {
    korean: '승민',
    romanization: 'Seung-min',
    pronunciation: 'seung-min',
    meaning: createTranslations('Victory and quick', '승리와 민첩함'),
    story: createTranslations('Like lightning that strikes with perfect timing, this name represents quick victories achieved through inner fire.', '완벽한 타이밍으로 치는 번개처럼, 내적 불꽃을 통해 달성되는 빠른 승리를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 70,
    style: 'modern'
  },
  {
    korean: '동현',
    romanization: 'Dong-hyun',
    pronunciation: 'dong-hyun',
    meaning: createTranslations('Eastern virtue', '동방의 덕'),
    story: createTranslations('This name rises like the sun from the east, representing virtue that brings new light to each day.', '동쪽에서 떠오르는 태양처럼 솟아오르며, 매일 새로운 빛을 가져다주는 덕을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 66,
    style: 'traditional'
  },
  {
    korean: '민수',
    romanization: 'Min-soo',
    pronunciation: 'min-soo',
    meaning: createTranslations('Quick and excellent', '민첩하고 뛰어난'),
    story: createTranslations('Like a flame that dances with swift excellence, this name represents agility combined with passionate mastery.', '신속한 탁월함으로 춤추는 불꽃처럼, 열정적 숙달과 결합된 민첩성을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 62,
    style: 'modern'
  },
  {
    korean: '지환',
    romanization: 'Ji-hwan',
    pronunciation: 'jee-hwan',
    meaning: createTranslations('Wise and bright', '지혜롭고 밝은'),
    story: createTranslations('This name shines like wise fire that illuminates without burning, representing intelligence that warms and enlightens.', '타지 않고 밝히는 지혜로운 불처럼 빛나며, 따뜻하게 하고 깨우치는 지성을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 58,
    style: 'modern'
  },
  {
    korean: '태준',
    romanization: 'Tae-jun',
    pronunciation: 'tay-joon',
    meaning: createTranslations('Great and talented', '크고 재능있는'),
    story: createTranslations('Like a great bonfire that draws people together, this name represents talent that creates community and warmth.', '사람들을 하나로 모으는 큰 모닥불처럼, 공동체와 따뜻함을 창조하는 재능을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 54,
    style: 'modern'
  },
  {
    korean: '정민',
    romanization: 'Jeong-min',
    pronunciation: 'jung-min',
    meaning: createTranslations('Righteous and quick', '의롭고 민첩한'),
    story: createTranslations('This name burns like righteous flame that acts swiftly for justice, representing quick moral action.', '정의를 위해 신속히 행동하는 의로운 불꽃처럼 타오르며, 빠른 도덕적 행동을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 50,
    style: 'traditional'
  },
  {
    korean: '승우',
    romanization: 'Seung-woo',
    pronunciation: 'seung-woo',
    meaning: createTranslations('Victory and excellent', '승리와 탁월함'),
    story: createTranslations('Like a triumphant flame that never dims, this name represents excellent victories that inspire others to achieve.', '결코 꺼지지 않는 승리의 불꽃처럼, 다른 사람들이 성취하도록 영감을 주는 훌륭한 승리를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 46,
    style: 'modern'
  },
  {
    korean: '현진',
    romanization: 'Hyun-jin',
    pronunciation: 'hyun-jin',
    meaning: createTranslations('Virtuous and precious', '덕이 있고 소중한'),
    story: createTranslations('This name glows like precious fire that burns with virtue, representing value that comes from moral character.', '덕으로 타는 소중한 불처럼 빛나며, 도덕적 성품에서 오는 가치를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 42,
    style: 'traditional'
  },
  {
    korean: '동민',
    romanization: 'Dong-min',
    pronunciation: 'dong-min',
    meaning: createTranslations('Eastern quick', '동방의 민첩함'),
    story: createTranslations('Like the swift sunrise that brings hope each morning, this name represents quick action that brings renewal and energy.', '매일 아침 희망을 가져다주는 빠른 일출처럼, 새로움과 활력을 가져다주는 신속한 행동을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 38,
    style: 'modern'
  },
  {
    korean: '태우',
    romanization: 'Tae-woo',
    pronunciation: 'tay-woo',
    meaning: createTranslations('Great and excellent', '크고 뛰어난'),
    story: createTranslations('This name burns like a great flame that achieves excellence, representing passionate pursuit of worthy goals.', '탁월함을 달성하는 큰 불꽃처럼 타오르며, 가치있는 목표를 향한 열정적 추구를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 34,
    style: 'modern'
  },
  // K-pop Fire Male Names
  {
    korean: '지민',
    romanization: 'Ji-min',
    pronunciation: 'jee-min',
    meaning: createTranslations('Wise and quick', '지혜롭고 민첩한'),
    story: createTranslations('Like quick fire that burns with wisdom, this name represents intelligent passion and the ability to inspire others with bright energy.', '지혜로 타는 빠른 불처럼, 지적인 열정과 밝은 에너지로 다른 사람들에게 영감을 주는 능력을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 95,
    kpopMember: { group: 'BTS', memberName: 'Jimin' },
    style: 'kpop'
  },
  {
    korean: '정국',
    romanization: 'Jeong-guk',
    pronunciation: 'jung-gook',
    meaning: createTranslations('Righteous country', '의로운 나라'),
    story: createTranslations('This name burns like righteous fire that protects the country, representing patriotic passion and strength that defends what is precious.', '나라를 보호하는 의로운 불처럼 타오르며, 소중한 것을 지키는 애국적 열정과 힘을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 92,
    kpopMember: { group: 'BTS', memberName: 'Jungkook' },
    style: 'kpop'
  },
  {
    korean: '호석',
    romanization: 'Ho-seok',
    pronunciation: 'ho-suk',
    meaning: createTranslations('Great stone', '큰 돌'),
    story: createTranslations('Like a great stone heated by fire, this name represents solid strength combined with passionate energy and joyful spirit.', '불로 달궈진 큰 돌처럼, 열정적 에너지와 기쁜 정신이 결합된 견고한 힘을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'male',
    popularity: 89,
    kpopMember: { group: 'BTS', memberName: 'J-Hope' },
    style: 'kpop'
  },

  // Fire Element - Female Names (20 total)
  {
    korean: '하은',
    hanja: '夏恩',
    romanization: 'Ha-eun',
    pronunciation: 'ha-eun',
    meaning: createTranslations('Grace from above', '위에서 내린 은혜'),
    story: createTranslations('Like sunlight breaking through clouds, this name represents divine grace that illuminates and warms everything it touches.', '구름 사이로 비치는 햇빛처럼, 닿는 모든 것을 밝히고 따뜻하게 하는 신의 은혜를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 96,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '하',
          hanja: '夏',
          meaning: createTranslations('summer, great, grand', '여름, 큰, 위대한')
        },
        {
          korean: '은',
          hanja: '恩',
          meaning: createTranslations('grace, favor, kindness', '은혜, 호의, 친절')
        }
      ],
      traditionalMeaning: createTranslations('"summer, great" combined with "grace, kindness" creates a meaning of abundant grace, representing someone who brings warmth and generous kindness like summer sunshine', '"여름, 위대한"과 "은혜, 친절"이 결합되어 풍부한 은혜의 의미를 만들며, 여름 햇살처럼 따뜻함과 관대한 친절함을 가져다주는 사람을 나타냅니다')
    },
    pronunciationMatch: 79
  },
  {
    korean: '서윤',
    romanization: 'Seo-yoon',
    pronunciation: 'suh-yoon',
    meaning: createTranslations('Western prosperity', '서쪽의 번영'),
    story: createTranslations('This name embodies the warmth of a sunset that promises a bright tomorrow, bringing abundance and joy.', '밝은 내일을 약속하는 석양의 따뜻함을 담고 있으며, 풍요와 기쁨을 가져다주는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 92,
    style: 'modern'
  },
  {
    korean: '예린',
    romanization: 'Ye-rin',
    pronunciation: 'yeh-rin',
    meaning: createTranslations('Beautiful and wise', '아름답고 지혜로운'),
    story: createTranslations('Like a campfire that draws people together, this name represents beauty that comes from inner wisdom and warmth.', '사람들을 하나로 모으는 모닥불처럼, 내면의 지혜와 따뜻함에서 오는 아름다움을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 88,
    style: 'modern'
  },
  {
    korean: '지아',
    romanization: 'Ji-ah',
    pronunciation: 'jee-ah',
    meaning: createTranslations('Wise and beautiful', '지혜롭고 아름다운'),
    story: createTranslations('This name glows like wise flame that beautifies everything around it, representing intelligence that creates harmony.', '주변의 모든 것을 아름답게 하는 지혜로운 불꽃처럼 빛나며, 조화를 창조하는 지성을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 84,
    style: 'modern'
  },
  {
    korean: '소연',
    romanization: 'So-yeon',
    pronunciation: 'so-yun',
    meaning: createTranslations('Small lotus', '작은 연꽃'),
    story: createTranslations('Like a delicate flame that burns steadily, this name represents gentle strength that endures through all seasons.', '꾸준히 타는 섬세한 불꽃처럼, 모든 계절을 견뎌내는 부드러운 힘을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 80,
    style: 'traditional'
  },
  {
    korean: '예나',
    romanization: 'Ye-na',
    pronunciation: 'yeh-na',
    meaning: createTranslations('Beautiful me', '아름다운 나'),
    story: createTranslations('This name shines like confident fire that celebrates inner beauty, representing self-acceptance that inspires others.', '내면의 아름다움을 찬양하는 자신감 있는 불처럼 빛나며, 다른 사람들에게 영감을 주는 자아수용을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 76,
    style: 'modern'
  },
  {
    korean: '지연',
    romanization: 'Ji-yeon',
    pronunciation: 'jee-yun',
    meaning: createTranslations('Wise connection', '지혜로운 연결'),
    story: createTranslations('Like fire that connects hearts across distances, this name represents wisdom that builds meaningful relationships.', '거리를 초월해 마음을 연결하는 불처럼, 의미있는 관계를 구축하는 지혜를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 72,
    style: 'modern'
  },
  {
    korean: '하린',
    romanization: 'Ha-rin',
    pronunciation: 'ha-rin',
    meaning: createTranslations('Beautiful sky', '아름다운 하늘'),
    story: createTranslations('This name blazes like the beautiful fire of dawn, representing hope that lights up the entire horizon.', '새벽의 아름다운 불처럼 타오르며, 전체 지평선을 밝히는 희망을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 68,
    style: 'modern'
  },
  {
    korean: '다은',
    hanja: '多恩',
    romanization: 'Da-eun',
    pronunciation: 'da-eun',
    meaning: createTranslations('Many graces', '많은 은혜'),
    story: createTranslations('Like a flame that has many beautiful colors, this name represents abundant grace expressed in countless ways.', '여러 아름다운 색을 가진 불꽃처럼, 무수한 방법으로 표현되는 풍부한 은혜를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 64,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '다',
          hanja: '多',
          meaning: createTranslations('many, much, abundant', '많은, 다량의, 풍부한')
        },
        {
          korean: '은',
          hanja: '恩',
          meaning: createTranslations('grace, favor, kindness', '은혜, 호의, 친절')
        }
      ],
      traditionalMeaning: createTranslations('"many, abundant" combined with "grace, kindness" creates a meaning of abundant grace, representing someone who possesses and shares numerous blessings and acts of kindness', '"많은, 풍부한"과 "은혜, 친절"이 결합되어 풍부한 은혜의 의미를 만들며, 수많은 축복과 친절한 행동을 소유하고 나누는 사람을 나타냅니다')
    },
    pronunciationMatch: 74
  },
  {
    korean: '서현',
    hanja: '瑞賢',
    romanization: 'Seo-hyun',
    pronunciation: 'suh-hyun',
    meaning: createTranslations('Auspicious virtue', '길조의 덕'),
    story: createTranslations('This name burns like virtuous fire under auspicious stars, representing moral character blessed with good fortune.', '길조의 별 아래에서 타는 덕스러운 불처럼, 좋은 운으로 축복받은 도덕적 성품을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 60,
    style: 'traditional',
    hanjaBreakdown: {
      characters: [
        {
          korean: '서',
          hanja: '瑞',
          meaning: createTranslations('auspicious, propitious', '상서로운, 길조의')
        },
        {
          korean: '현',
          hanja: '賢',
          meaning: createTranslations('wise, virtuous, worthy', '지혜로운, 덕이 있는, 현명한')
        }
      ],
      traditionalMeaning: createTranslations('"auspicious" combined with "wise, virtuous" creates a meaning of blessed wisdom, representing someone who possesses virtuous character blessed with good fortune and divine favor', '"상서로운"과 "지혜롭고 덕이 있는"이 결합되어 축복받은 지혜의 의미를 만들며, 좋은 운과 신의 호의로 축복받은 덕스러운 성품을 가진 사람을 나타냅니다')
    },
    pronunciationMatch: 73
  },
  {
    korean: '지현',
    romanization: 'Ji-hyun',
    pronunciation: 'jee-hyun',
    meaning: createTranslations('Wise and virtuous', '지혜롭고 덕이 있는'),
    story: createTranslations('Like sacred fire that burns with wise virtue, this name represents moral wisdom that lights the way forward.', '지혜로운 덕으로 타는 신성한 불처럼, 앞으로의 길을 밝히는 도덕적 지혜를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 56,
    style: 'traditional'
  },
  {
    korean: '예원',
    romanization: 'Ye-won',
    pronunciation: 'yeh-won',
    meaning: createTranslations('Beautiful source', '아름다운 근원'),
    story: createTranslations('This name flows like beautiful fire from its source, representing inner beauty that radiates outward naturally.', '근원에서 흘러나오는 아름다운 불처럼, 자연스럽게 바깥으로 발산되는 내적 아름다움을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 52,
    style: 'modern'
  },
  {
    korean: '소희',
    romanization: 'So-hui',
    pronunciation: 'so-hee',
    meaning: createTranslations('Pure and bright joy', '순수하고 밝은 기쁨'),
    story: createTranslations('Like a cheerful flame that brings joy to small moments, this name represents happiness found in life\'s simple pleasures.', '작은 순간들에 기쁨을 가져다주는 쾌활한 불꽃처럼, 삶의 단순한 즐거움에서 찾는 행복을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 48,
    style: 'modern'
  },
  {
    korean: '다현',
    romanization: 'Da-hyun',
    pronunciation: 'da-hyun',
    meaning: createTranslations('Many virtues', '많은 덕'),
    story: createTranslations('This name burns like fire that displays many virtuous colors, representing character rich in moral qualities.', '많은 덕스러운 색을 드러내는 불처럼 타오르며, 도덕적 자질이 풍부한 성격을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 44,
    style: 'modern'
  },
  {
    korean: '지원',
    romanization: 'Ji-won',
    pronunciation: 'jee-won',
    meaning: createTranslations('Wise source', '지혜로운 근원'),
    story: createTranslations('Like the wise fire that becomes a source of warmth for others, this name represents knowledge that nurtures community.', '다른 사람들의 따뜻함의 원천이 되는 지혜로운 불처럼, 공동체를 기르는 지식을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 40,
    style: 'modern'
  },
  {
    korean: '예진',
    romanization: 'Ye-jin',
    pronunciation: 'yeh-jin',
    meaning: createTranslations('Beautiful precious', '아름답고 소중한'),
    story: createTranslations('This name glows like precious fire that reveals inner beauty, representing value that comes from authentic self-expression.', '내면의 아름다움을 드러내는 소중한 불처럼 빛나며, 진정한 자기표현에서 오는 가치를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 36,
    style: 'modern'
  },
  {
    korean: '하영',
    romanization: 'Ha-yeong',
    pronunciation: 'ha-young',
    meaning: createTranslations('Great prosperity', '큰 번영'),
    story: createTranslations('Like prosperous fire that brings abundance, this name represents success that lights the way for others to follow.', '풍요를 가져다주는 번영의 불처럼, 다른 사람들이 따를 길을 밝히는 성공을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 32,
    style: 'modern'
  },
  // K-pop Fire Female Names
  {
    korean: '지수',
    romanization: 'Ji-soo',
    pronunciation: 'jee-soo',
    meaning: createTranslations('Wise beautiful', '지혜롭고 아름다운'),
    story: createTranslations('Like wise fire that creates beauty, this name represents intelligence that shines with natural elegance and warm charisma.', '아름다움을 창조하는 지혜로운 불처럼, 자연스러운 우아함과 따뜻한 카리스마로 빛나는 지성을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 93,
    kpopMember: { group: 'BLACKPINK', memberName: 'Jisoo' },
    style: 'kpop'
  },
  {
    korean: '나연',
    romanization: 'Na-yeon',
    pronunciation: 'na-yun',
    meaning: createTranslations('My connection', '나의 연결'),
    story: createTranslations('Like warm fire that creates meaningful connections, this name represents someone who brings people together with natural charm and bright energy.', '의미있는 연결을 만드는 따뜻한 불처럼, 자연스러운 매력과 밝은 에너지로 사람들을 하나로 모으는 사람을 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 90,
    kpopMember: { group: 'TWICE', memberName: 'Nayeon' },
    style: 'kpop'
  },
  {
    korean: '정연',
    romanization: 'Jeong-yeon',
    pronunciation: 'jung-yun',
    meaning: createTranslations('Righteous connection', '의로운 연결'),
    story: createTranslations('This name burns like righteous fire that forms pure connections, representing honest relationships built on moral strength and warm sincerity.', '순수한 연결을 만드는 의로운 불처럼 타오르며, 도덕적 힘과 따뜻한 진실성 위에 세워진 정직한 관계를 나타내는 이름입니다.'),
    element: 'fire',
    gender: 'female',
    popularity: 87,
    kpopMember: { group: 'TWICE', memberName: 'Jeongyeon' },
    style: 'kpop'
  },

  // Earth Element - Male Names (20 total)
  {
    korean: '이준',
    romanization: 'Yi-jun',
    pronunciation: 'ee-joon',
    meaning: createTranslations('Second talented', '둘째 재능'),
    story: createTranslations('Like a mountain spring that feeds countless streams, this name represents someone who provides for and nurtures others.', '수많은 개울을 기르는 산의 샘처럼, 다른 사람들을 돌보고 기르는 사람을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 100,
    style: 'modern'
  },
  {
    korean: '주원',
    romanization: 'Ju-won',
    pronunciation: 'joo-won',
    meaning: createTranslations('Main source', '주요 원천'),
    story: createTranslations('This name flows like the steady source that feeds a great river, representing reliable strength that supports entire communities.', '큰 강을 기르는 꾸준한 원천처럼 흘러, 전체 공동체를 지탱하는 신뢰할 수 있는 힘을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 96,
    style: 'modern'
  },
  {
    korean: '우진',
    hanja: '雨眞',
    romanization: 'Woo-jin',
    pronunciation: 'woo-jin',
    meaning: createTranslations('Rain and truth', '비와 진실'),
    story: createTranslations('Like fertile soil that receives rain and produces truth in the form of abundant harvest, this name represents honest productivity.', '비를 받아 풍성한 수확의 형태로 진실을 생산하는 비옥한 토양처럼, 정직한 생산성을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 92,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '우',
          hanja: '雨',
          meaning: createTranslations('rain, rainfall', '비, 강우')
        },
        {
          korean: '진',
          hanja: '眞',
          meaning: createTranslations('true, real, genuine', '참된, 진실한, 진짜의')
        }
      ],
      traditionalMeaning: createTranslations('"rain" combined with "true, genuine" creates a meaning of nourishing truth, representing someone who brings genuine growth and honesty like rain nourishes the earth', '"비"와 "참되고 진실한"이 결합되어 진실을 기르는 의미를 만들며, 비가 대지를 기르듯 진정한 성장과 정직함을 가져다주는 사람을 나타냅니다')
    },
    pronunciationMatch: 68
  },
  {
    korean: '예준',
    romanization: 'Ye-jun',
    pronunciation: 'yeh-joon',
    meaning: createTranslations('Polite and talented', '예의바르고 재능있는'),
    story: createTranslations('Like a master craftsman who creates with humble precision, this name represents refined talent grounded in respect.', '겸손한 정밀함으로 창조하는 숙련장인처럼, 존경에 뿌리를 둔 세련된 재능을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 88,
    style: 'traditional'
  },
  {
    korean: '성현',
    romanization: 'Seong-hyun',
    pronunciation: 'sung-hyun',
    meaning: createTranslations('Holy virtue', '거룩한 덕'),
    story: createTranslations('This name stands like a sacred mountain that embodies virtue, representing moral character that provides guidance and stability.', '덕을 구현하는 신성한 산처럼 서있으며, 인도와 안정을 제공하는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 84,
    style: 'traditional'
  },
  {
    korean: '민호',
    romanization: 'Min-ho',
    pronunciation: 'min-ho',
    meaning: createTranslations('Quick and great', '민첩하고 위대한'),
    story: createTranslations('Like rich earth that quickly responds to the seasons, this name represents greatness that grows from responsive wisdom.', '계절에 빠르게 반응하는 풍부한 대지처럼, 반응하는 지혜에서 자라나는 위대함을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 80,
    style: 'modern'
  },
  {
    korean: '준영',
    romanization: 'Jun-yeong',
    pronunciation: 'joon-young',
    meaning: createTranslations('Talented and prosperous', '재능있고 번영하는'),
    story: createTranslations('This name builds like prosperous earth that supports talented growth, representing success rooted in solid foundations.', '재능있는 성장을 지탱하는 번영하는 대지처럼 건설되며, 견고한 기초에 뿌리를 둔 성공을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 76,
    style: 'modern'
  },
  {
    korean: '윤수',
    romanization: 'Yoon-soo',
    pronunciation: 'yoon-soo',
    meaning: createTranslations('Prosperous excellence', '번영하는 탁월함'),
    story: createTranslations('Like fertile ground that produces excellent harvest, this name represents prosperity achieved through steady, quality effort.', '훌륭한 수확을 생산하는 비옥한 땅처럼, 꾸준한 품질 노력을 통해 달성된 번영을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 72,
    style: 'modern'
  },
  {
    korean: '상우',
    romanization: 'Sang-woo',
    pronunciation: 'sang-woo',
    meaning: createTranslations('Mutual excellence', '상호 탁월함'),
    story: createTranslations('This name connects like earth that supports all growth mutually, representing excellence that lifts everyone up together.', '모든 성장을 상호 지원하는 대지처럼 연결되며, 모든 사람을 함께 끌어올리는 탁월함을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 68,
    style: 'modern'
  },
  {
    korean: '진우',
    romanization: 'Jin-woo',
    pronunciation: 'jin-woo',
    meaning: createTranslations('Precious excellence', '소중한 탁월함'),
    story: createTranslations('Like precious earth that contains valuable minerals, this name represents excellence that becomes more valuable over time.', '귀중한 광물을 포함한 소중한 대지처럼, 시간이 지날수록 더욱 가치있게 되는 탁월함을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 64,
    style: 'modern'
  },
  {
    korean: '성진',
    romanization: 'Seong-jin',
    pronunciation: 'sung-jin',
    meaning: createTranslations('Holy precious', '거룩하고 소중한'),
    story: createTranslations('This name stands like sacred ground that holds precious treasures, representing character that treasures what is truly valuable.', '소중한 보물을 품은 신성한 땅처럼 서있으며, 진정으로 가치있는 것을 소중히 여기는 성품을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 60,
    style: 'traditional'
  },
  {
    korean: '준서',
    hanja: '俊瑞',
    romanization: 'Jun-seo',
    pronunciation: 'joon-suh',
    meaning: createTranslations('Talented auspicious', '재능있고 길조로운'),
    story: createTranslations('Like auspicious earth that nurtures talented growth, this name represents skill blessed with favorable conditions.', '재능있는 성장을 기르는 길조로운 대지처럼, 유리한 조건으로 축복받은 기술을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 56,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '준',
          hanja: '俊',
          meaning: createTranslations('talented, handsome, outstanding', '재능있는, 준수한, 뛰어난')
        },
        {
          korean: '서',
          hanja: '瑞',
          meaning: createTranslations('auspicious, propitious', '상서로운, 길조의')
        }
      ],
      traditionalMeaning: createTranslations('"talented, outstanding" combined with "auspicious" creates a meaning of blessed talent, representing someone whose abilities bring good fortune to themselves and others', '"재능있고 뛰어난"과 "상서로운"이 결합되어 축복받은 재능의 의미를 만들며, 자신과 타인에게 행운을 가져다주는 능력을 가진 사람을 나타냅니다')
    },
    pronunciationMatch: 74
  },
  {
    korean: '민재',
    romanization: 'Min-jae',
    pronunciation: 'min-jay',
    meaning: createTranslations('Quick talent', '민첩한 재능'),
    story: createTranslations('This name grows like quick earth that immediately supports new talent, representing responsive nurturing of emerging gifts.', '새로운 재능을 즉시 지원하는 빠른 대지처럼 자라며, 새롭게 떠오르는 재능의 반응적 양육을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 52,
    style: 'modern'
  },
  {
    korean: '윤호',
    romanization: 'Yoon-ho',
    pronunciation: 'yoon-ho',
    meaning: createTranslations('Prosperous great', '번영하고 위대한'),
    story: createTranslations('Like great earth that creates lasting prosperity, this name represents achievements that benefit many generations.', '지속적인 번영을 창조하는 위대한 대지처럼, 여러 세대에게 도움이 되는 성취를 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 48,
    style: 'modern'
  },
  {
    korean: '상민',
    romanization: 'Sang-min',
    pronunciation: 'sang-min',
    meaning: createTranslations('Mutual quick', '상호 민첩함'),
    story: createTranslations('This name connects like earth that quickly responds to mutual needs, representing swift cooperation and shared success.', '상호 필요에 빠르게 반응하는 대지처럼 연결되며, 신속한 협력과 공동 성공을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 44,
    style: 'modern'
  },
  {
    korean: '진호',
    romanization: 'Jin-ho',
    pronunciation: 'jin-ho',
    meaning: createTranslations('Precious great', '소중하고 위대한'),
    story: createTranslations('Like precious earth that supports great growth, this name represents value that creates lasting greatness for the community.', '위대한 성장을 지원하는 소중한 대지처럼, 공동체를 위한 지속적인 위대함을 창조하는 가치를 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 40,
    style: 'modern'
  },
  {
    korean: '성수',
    romanization: 'Seong-soo',
    pronunciation: 'sung-soo',
    meaning: createTranslations('Holy excellence', '거룩한 탁월함'),
    story: createTranslations('This name stands like holy ground that produces excellent fruit, representing character that achieves sacred excellence.', '훌륭한 열매를 맺는 거룩한 땅처럼 서있으며, 신성한 탁월함을 달성하는 성품을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 36,
    style: 'traditional'
  },
  // K-pop Earth Male Names
  {
    korean: '승민',
    romanization: 'Seung-min',
    pronunciation: 'seung-min',
    meaning: createTranslations('Victory and quick', '승리와 민첩함'),
    story: createTranslations('Like earth that achieves victory through steady persistence, this name represents success built on solid foundations and determined effort.', '꾸준한 끈기를 통해 승리를 달성하는 대지처럼, 견고한 기초와 확고한 노력 위에 세워진 성공을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 86,
    kpopMember: { group: 'Stray Kids', memberName: 'Seungmin' },
    style: 'kpop'
  },
  {
    korean: '현진',
    romanization: 'Hyun-jin',
    pronunciation: 'hyun-jin',
    meaning: createTranslations('Virtuous precious', '덕이 있고 소중한'),
    story: createTranslations('This name stands like precious earth that embodies virtue, representing moral character that becomes more valuable through time and trials.', '덕을 구현하는 소중한 대지처럼 서있으며, 시간과 시련을 통해 더욱 가치있게 되는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 83,
    kpopMember: { group: 'Stray Kids', memberName: 'Hyunjin' },
    style: 'kpop'
  },
  {
    korean: '한',
    romanization: 'Han',
    pronunciation: 'han',
    meaning: createTranslations('Great and vast', '크고 광대한'),
    story: createTranslations('Like the great earth that supports all life, this name represents someone with vast potential and the ability to provide stable foundation for others.', '모든 생명을 지탱하는 위대한 대지처럼, 광대한 잠재력과 다른 사람들에게 안정적인 기초를 제공하는 능력을 가진 사람을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'male',
    popularity: 80,
    kpopMember: { group: 'Stray Kids', memberName: 'Han' },
    style: 'kpop'
  },

  // Earth Element - Female Names (20 total)
  {
    korean: '이서',
    romanization: 'Yi-seo',
    pronunciation: 'ee-suh',
    meaning: createTranslations('Second auspicious', '둘째 길조'),
    story: createTranslations('Like gentle earth that brings auspicious growth, this name represents grace that creates favorable conditions for others to flourish.', '길조로운 성장을 가져다주는 부드러운 대지처럼, 다른 사람들이 번영할 수 있는 유리한 조건을 만드는 은혜를 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 100,
    style: 'modern'
  },
  {
    korean: '수아',
    hanja: '秀雅',
    romanization: 'Soo-ah',
    pronunciation: 'soo-ah',
    meaning: createTranslations('Beautiful like water', '물처럼 아름다운'),
    story: createTranslations('This name flows like a gentle stream that carves beautiful valleys, representing quiet strength that shapes the world.', '아름다운 계곡을 조각하는 부드러운 시냇물처럼 흐르며, 세상을 형성하는 조용한 힘을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 96,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '수',
          hanja: '秀',
          meaning: createTranslations('outstanding, beautiful, elegant', '뛰어난, 아름다운, 우아한')
        },
        {
          korean: '아',
          hanja: '雅',
          meaning: createTranslations('elegant, graceful, refined', '우아한, 품위 있는, 세련된')
        }
      ],
      traditionalMeaning: createTranslations('"outstanding, beautiful" combined with "elegant, graceful" creates a meaning of refined beauty, representing someone who embodies both natural beauty and cultivated elegance', '"뛰어나고 아름다운"과 "우아하고 품위 있는"이 결합되어 세련된 아름다움의 의미를 만들며, 자연스러운 아름다움과 교양 있는 우아함을 모두 구현하는 사람을 나타냅니다')
    },
    pronunciationMatch: 81
  },
  {
    korean: '지유',
    romanization: 'Ji-yoo',
    pronunciation: 'jee-yoo',
    meaning: createTranslations('Wise and gentle', '지혜롭고 부드러운'),
    story: createTranslations('Like rich earth that nurtures seeds with wise patience, this name embodies wisdom that comes from gentle nurturing.', '지혜로운 인내심으로 씨앗을 기르는 풍부한 대지처럼, 부드러운 양육에서 오는 지혜를 구현하는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 92,
    style: 'modern'
  },
  {
    korean: '소율',
    hanja: '小律',
    romanization: 'So-yul',
    pronunciation: 'so-yul',
    meaning: createTranslations('Small and rhythmic', '작고 운율적인'),
    story: createTranslations('Like the steady heartbeat of the earth itself, this name represents someone who brings harmony and natural rhythm to life.', '대지 자체의 꾸준한 심장박동처럼, 삶에 조화와 자연스러운 리듬을 가져다주는 사람을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 88,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '소',
          hanja: '小',
          meaning: createTranslations('small, little, young', '작은, 작은 것, 어린')
        },
        {
          korean: '율',
          hanja: '律',
          meaning: createTranslations('rhythm, law, rule', '운율, 법, 규칙')
        }
      ],
      traditionalMeaning: createTranslations('"small" combined with "rhythm, law" creates a meaning of gentle harmony, representing someone who brings subtle but important order and rhythm to life', '"작은"과 "운율, 법칙"이 결합되어 부드러운 조화의 의미를 만들며, 삶에 미묘하지만 중요한 질서와 리듬을 가져다주는 사람을 나타냅니다')
    },
    pronunciationMatch: 75
  },
  {
    korean: '서아',
    romanization: 'Seo-ah',
    pronunciation: 'suh-ah',
    meaning: createTranslations('Auspicious beautiful', '길조롭고 아름다운'),
    story: createTranslations('This name blooms like auspicious earth that produces beautiful flowers, representing beauty blessed with good fortune.', '아름다운 꽃을 피우는 길조로운 대지처럼 꽃피며, 좋은 운으로 축복받은 아름다움을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 84,
    style: 'modern'
  },
  {
    korean: '유나',
    romanization: 'Yu-na',
    pronunciation: 'yu-na',
    meaning: createTranslations('Abundant me', '풍부한 나'),
    story: createTranslations('Like abundant earth that generously supports all growth, this name represents self-confidence that nurtures abundance in others.', '모든 성장을 관대하게 지원하는 풍부한 대지처럼, 다른 사람들의 풍요로움을 기르는 자신감을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 80,
    style: 'modern'
  },
  {
    korean: '채영',
    romanization: 'Chae-yeong',
    pronunciation: 'chay-young',
    meaning: createTranslations('Colorful prosperity', '다채로운 번영'),
    story: createTranslations('This name flourishes like colorful earth that produces prosperous harvests, representing diverse talents that create abundance.', '번영하는 수확을 생산하는 다채로운 대지처럼 번성하며, 풍요로움을 창조하는 다양한 재능을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 76,
    style: 'modern'
  },
  {
    korean: '수연',
    romanization: 'Soo-yeon',
    pronunciation: 'soo-yun',
    meaning: createTranslations('Beautiful connection', '아름다운 연결'),
    story: createTranslations('Like earth that beautifully connects all living things, this name represents relationships that create harmony and mutual support.', '모든 생명체를 아름답게 연결하는 대지처럼, 조화와 상호 지원을 만드는 관계를 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 72,
    style: 'modern'
  },
  {
    korean: '은서',
    romanization: 'Eun-seo',
    pronunciation: 'eun-suh',
    meaning: createTranslations('Kindness auspicious', '친절하고 길조로운'),
    story: createTranslations('This name nurtures like kind earth blessed with auspicious seasons, representing generosity that brings good fortune to all.', '길조로운 계절로 축복받은 친절한 대지처럼 기르며, 모든 사람에게 행운을 가져다주는 관대함을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 68,
    style: 'modern'
  },
  {
    korean: '예서',
    romanization: 'Ye-seo',
    pronunciation: 'yeh-suh',
    meaning: createTranslations('Beautiful auspicious', '아름답고 길조로운'),
    story: createTranslations('Like beautiful earth under auspicious stars, this name represents grace that is blessed with favorable circumstances.', '길조로운 별 아래의 아름다운 대지처럼, 유리한 환경으로 축복받은 은혜를 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 64,
    style: 'modern'
  },
  {
    korean: '수민',
    romanization: 'Soo-min',
    pronunciation: 'soo-min',
    meaning: createTranslations('Beautiful quick', '아름답고 민첩한'),
    story: createTranslations('This name responds like beautiful earth that quickly adapts to changes, representing grace that flows smoothly through life\'s seasons.', '변화에 빠르게 적응하는 아름다운 대지처럼 반응하며, 삶의 계절을 부드럽게 흘러가는 은혜를 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 60,
    style: 'modern'
  },
  {
    korean: '지연',
    romanization: 'Ji-yeon',
    pronunciation: 'jee-yun',
    meaning: createTranslations('Wise connection', '지혜로운 연결'),
    story: createTranslations('Like wise earth that connects forest to meadow, this name represents intelligence that builds meaningful bridges between people.', '숲과 초원을 연결하는 지혜로운 대지처럼, 사람들 사이에 의미있는 다리를 건설하는 지성을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 56,
    style: 'modern'
  },
  {
    korean: '유진',
    romanization: 'Yu-jin',
    pronunciation: 'yu-jin',
    meaning: createTranslations('Abundant precious', '풍부하고 소중한'),
    story: createTranslations('This name treasures like abundant earth that holds precious minerals, representing generosity that recognizes true value.', '소중한 광물을 품은 풍부한 대지처럼 소중히 여기며, 진정한 가치를 인식하는 관대함을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 52,
    style: 'modern'
  },
  {
    korean: '채은',
    romanization: 'Chae-eun',
    pronunciation: 'chay-eun',
    meaning: createTranslations('Colorful grace', '다채로운 은혜'),
    story: createTranslations('Like colorful earth that shows grace in every season, this name represents diverse beauty that brings harmony to all situations.', '모든 계절에 은혜를 보여주는 다채로운 대지처럼, 모든 상황에 조화를 가져다주는 다양한 아름다움을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 48,
    style: 'modern'
  },
  {
    korean: '수현',
    romanization: 'Soo-hyun',
    pronunciation: 'soo-hyun',
    meaning: createTranslations('Beautiful virtue', '아름다운 덕'),
    story: createTranslations('This name stands like beautiful earth that embodies virtue, representing moral beauty that inspires and guides others.', '덕을 구현하는 아름다운 대지처럼 서있으며, 다른 사람들에게 영감을 주고 인도하는 도덕적 아름다움을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 44,
    style: 'traditional'
  },
  {
    korean: '은지',
    romanization: 'Eun-ji',
    pronunciation: 'eun-jee',
    meaning: createTranslations('Kindness wisdom', '친절함과 지혜'),
    story: createTranslations('Like kind earth that holds ancient wisdom, this name represents compassion that comes from deep understanding.', '고대의 지혜를 품은 친절한 대지처럼, 깊은 이해에서 오는 연민을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 40,
    style: 'traditional'
  },
  {
    korean: '예은',
    romanization: 'Ye-eun',
    pronunciation: 'yeh-eun',
    meaning: createTranslations('Beautiful grace', '아름다운 은혜'),
    story: createTranslations('This name flows like beautiful earth that shows grace in all its forms, representing elegance that comes from inner strength.', '모든 형태로 은혜를 보여주는 아름다운 대지처럼 흐르며, 내적 힘에서 오는 우아함을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 36,
    style: 'modern'
  },
  // K-pop Earth Female Names
  {
    korean: '미나',
    romanization: 'Mi-na',
    pronunciation: 'mee-na',
    meaning: createTranslations('Beautiful me', '아름다운 나'),
    story: createTranslations('Like beautiful earth that nurtures self-acceptance, this name represents inner beauty that grows from solid self-confidence and natural grace.', '자아수용을 기르는 아름다운 대지처럼, 견고한 자신감과 자연스러운 은혜에서 자라나는 내적 아름다움을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 87,
    kpopMember: { group: 'TWICE', memberName: 'Mina' },
    style: 'kpop'
  },
  {
    korean: '채영',
    romanization: 'Chae-yeong',
    pronunciation: 'chay-young',
    meaning: createTranslations('Colorful prosperity', '다채로운 번영'),
    story: createTranslations('This name flourishes like colorful earth that creates prosperity, representing diverse talents that build abundance through creative expression.', '번영을 창조하는 다채로운 대지처럼 번성하며, 창조적 표현을 통해 풍요로움을 건설하는 다양한 재능을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 84,
    kpopMember: { group: 'TWICE', memberName: 'Chaeyoung' },
    style: 'kpop'
  },
  {
    korean: '지효',
    romanization: 'Ji-hyo',
    pronunciation: 'jee-hyo',
    meaning: createTranslations('Wise filial piety', '지혜로운 효'),
    story: createTranslations('Like wise earth that honors family traditions, this name represents intelligence combined with respect for elders and cultural heritage.', '가족 전통을 존중하는 지혜로운 대지처럼, 어른에 대한 존경과 문화 유산과 결합된 지성을 나타내는 이름입니다.'),
    element: 'earth',
    gender: 'female',
    popularity: 81,
    kpopMember: { group: 'TWICE', memberName: 'Jihyo' },
    style: 'kpop'
  },

  // Metal Element - Male Names (20 total)
  {
    korean: '서준',
    hanja: '瑞俊',
    romanization: 'Seo-jun',
    pronunciation: 'suh-joon',
    meaning: createTranslations('Western talent', '서쪽의 재능'),
    story: createTranslations('Like a perfectly forged blade that reflects light, this name represents talent that cuts through challenges with precision and honor.', '빛을 반사하는 완벽하게 단조된 칼날처럼, 정밀함과 명예로 도전을 뚫고 나가는 재능을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 93,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '서',
          hanja: '瑞',
          meaning: createTranslations('auspicious, propitious', '상서로운, 길조의')
        },
        {
          korean: '준',
          hanja: '俊',
          meaning: createTranslations('talented, handsome, outstanding', '재능있는, 준수한, 뛰어난')
        }
      ],
      traditionalMeaning: createTranslations('"auspicious" combined with "talented, outstanding" creates a meaning of blessed talent, representing someone whose abilities bring good fortune and success', '"상서로운"과 "재능있고 뛰어난"이 결합되어 축복받은 재능의 의미를 만들며, 행운과 성공을 가져다주는 능력을 가진 사람을 나타냅니다')
    },
    pronunciationMatch: 70
  },
  {
    korean: '태윤',
    romanization: 'Tae-yoon',
    pronunciation: 'tay-yoon',
    meaning: createTranslations('Great prosperity', '큰 번영'),
    story: createTranslations('This name embodies the strength of precious metal that becomes more valuable under pressure, bringing lasting success.', '압력 하에서 더욱 가치있어지는 귀금속의 힘을 구현하여, 지속적인 성공을 가져다주는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 89,
    style: 'modern'
  },
  {
    korean: '현우',
    hanja: '賢佑',
    romanization: 'Hyun-woo',
    pronunciation: 'hyun-woo',
    meaning: createTranslations('Wise and excellent', '지혜롭고 뛰어난'),
    story: createTranslations('Like a master swordsmith who combines wisdom with skill, this name represents excellence achieved through disciplined practice.', '지혜와 기술을 결합하는 명검장인처럼, 규율 있는 연습을 통해 달성된 탁월함을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 85,
    style: 'traditional',
    hanjaBreakdown: {
      characters: [
        {
          korean: '현',
          hanja: '賢',
          meaning: createTranslations('wise, virtuous, worthy', '지혜로운, 덕이 있는, 현명한')
        },
        {
          korean: '우',
          hanja: '佑',
          meaning: createTranslations('help, assist, protect', '도움, 도움을 주다, 보호하다')
        }
      ],
      traditionalMeaning: createTranslations('"wise, virtuous" combined with "help, protect" creates a meaning of wise protector, representing someone who uses wisdom to help and guide others', '"지혜롭고 덕이 있는"과 "도움, 보호"가 결합되어 지혜로운 보호자의 의미를 만들며, 지혜를 사용하여 다른 사람들을 도우고 인도하는 사람을 나타냅니다')
    },
    pronunciationMatch: 76
  },
  {
    korean: '승호',
    romanization: 'Seung-ho',
    pronunciation: 'seung-ho',
    meaning: createTranslations('Victory and great', '승리와 위대함'),
    story: createTranslations('This name rings like victorious metal that achieves greatness, representing triumph earned through persistent effort and integrity.', '위대함을 달성하는 승리의 금속처럼 울려, 지속적인 노력과 성실함을 통해 얻은 승리를 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 81,
    style: 'modern'
  },
  {
    korean: '정호',
    romanization: 'Jeong-ho',
    pronunciation: 'jung-ho',
    meaning: createTranslations('Righteous great', '의롭고 위대한'),
    story: createTranslations('Like righteous metal that stands firm for justice, this name represents greatness built on moral principles and honest action.', '정의를 위해 굳건히 서는 의로운 금속처럼, 도덕적 원칙과 정직한 행동 위에 세워진 위대함을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 77,
    style: 'traditional'
  },
  {
    korean: '민철',
    romanization: 'Min-chul',
    pronunciation: 'min-chul',
    meaning: createTranslations('Quick iron', '빠른 철'),
    story: createTranslations('This name strikes like quick iron that shapes itself perfectly, representing adaptability combined with inner strength and determination.', '스스로를 완벽하게 형성하는 빠른 철처럼 치며, 내적 힘과 결단력이 결합된 적응력을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 73,
    style: 'modern'
  },
  {
    korean: '준철',
    romanization: 'Jun-chul',
    pronunciation: 'joon-chul',
    meaning: createTranslations('Talented iron', '재능있는 철'),
    story: createTranslations('Like talented metal that can be forged into any masterpiece, this name represents versatile skill guided by strong principles.', '어떤 걸작으로도 단조될 수 있는 재능있는 금속처럼, 강한 원칙에 의해 인도되는 다재다능한 기술을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 69,
    style: 'traditional'
  },
  {
    korean: '성호',
    romanization: 'Seong-ho',
    pronunciation: 'sung-ho',
    meaning: createTranslations('Holy great', '거룩하고 위대한'),
    story: createTranslations('This name stands like sacred metal that achieves true greatness, representing character that pursues excellence through righteous means.', '진정한 위대함을 달성하는 신성한 금속처럼 서있으며, 의로운 방법을 통해 탁월함을 추구하는 성품을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 65,
    style: 'traditional'
  },
  {
    korean: '진석',
    romanization: 'Jin-seok',
    pronunciation: 'jin-suk',
    meaning: createTranslations('Precious stone', '소중한 돌'),
    story: createTranslations('Like precious metal formed into a perfect stone, this name represents value that comes from pressure transformed into strength.', '완벽한 돌로 형성된 귀금속처럼, 압력이 힘으로 변환되어 오는 가치를 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 61,
    style: 'traditional'
  },
  {
    korean: '동현',
    romanization: 'Dong-hyun',
    pronunciation: 'dong-hyun',
    meaning: createTranslations('Eastern virtue', '동방의 덕'),
    story: createTranslations('This name shines like eastern metal that embodies virtue, representing moral character that brings new light to each situation.', '덕을 구현하는 동방의 금속처럼 빛나며, 각 상황에 새로운 빛을 가져다주는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 57,
    style: 'traditional'
  },
  {
    korean: '철민',
    romanization: 'Chul-min',
    pronunciation: 'chul-min',
    meaning: createTranslations('Iron quick', '철의 민첩함'),
    story: createTranslations('Like iron that responds quickly to the smith\'s hammer, this name represents strength that adapts swiftly to create something beautiful.', '대장장이의 망치에 빠르게 반응하는 철처럼, 아름다운 것을 창조하기 위해 신속히 적응하는 힘을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 53,
    style: 'traditional'
  },
  {
    korean: '승재',
    romanization: 'Seung-jae',
    pronunciation: 'seung-jay',
    meaning: createTranslations('Victory talent', '승리의 재능'),
    story: createTranslations('This name conquers like victorious metal that demonstrates talent, representing skill that achieves success through determined practice.', '재능을 입증하는 승리의 금속처럼 정복하며, 확고한 연습을 통해 성공을 달성하는 기술을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 49,
    style: 'modern'
  },
  {
    korean: '정민',
    romanization: 'Jeong-min',
    pronunciation: 'jung-min',
    meaning: createTranslations('Righteous quick', '의롭고 민첩한'),
    story: createTranslations('Like righteous metal that acts swiftly for justice, this name represents quick moral action guided by strong principles.', '정의를 위해 신속히 행동하는 의로운 금속처럼, 강한 원칙에 의해 인도되는 빠른 도덕적 행동을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 45,
    style: 'traditional'
  },
  {
    korean: '현철',
    romanization: 'Hyun-chul',
    pronunciation: 'hyun-chul',
    meaning: createTranslations('Virtuous iron', '덕이 있는 철'),
    story: createTranslations('This name forges like virtuous metal that creates lasting strength, representing character that builds excellence through ethical practice.', '지속적인 힘을 창조하는 덕스러운 금속처럼 단조되며, 윤리적 실천을 통해 탁월함을 구축하는 성품을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 41,
    style: 'traditional'
  },
  {
    korean: '승철',
    romanization: 'Seung-chul',
    pronunciation: 'seung-chul',
    meaning: createTranslations('Victory iron', '승리의 철'),
    story: createTranslations('Like victorious metal that wins through strength, this name represents triumph achieved through persistent effort and unwavering determination.', '힘을 통해 승리하는 승리의 금속처럼, 지속적인 노력과 흔들리지 않는 결단력을 통해 달성된 승리를 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 37,
    style: 'modern'
  },
  {
    korean: '정석',
    romanization: 'Jeong-seok',
    pronunciation: 'jung-suk',
    meaning: createTranslations('Righteous stone', '의로운 돌'),
    story: createTranslations('This name stands like righteous metal formed into enduring stone, representing moral character that creates lasting positive impact.', '지속적인 돌로 형성된 의로운 금속처럼 서있으며, 지속적인 긍정적 영향을 창조하는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 33,
    style: 'traditional'
  },
  {
    korean: '진호',
    romanization: 'Jin-ho',
    pronunciation: 'jin-ho',
    meaning: createTranslations('Precious great', '소중하고 위대한'),
    story: createTranslations('Like precious metal that achieves true greatness, this name represents value that increases through dedication to worthy purposes.', '진정한 위대함을 달성하는 귀금속처럼, 가치있는 목적에 대한 헌신을 통해 증가하는 가치를 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 29,
    style: 'modern'
  },
  // K-pop Metal Male Names
  {
    korean: '방찬',
    romanization: 'Bang-chan',
    pronunciation: 'bang-chan',
    meaning: createTranslations('Room bright', '방 밝은'),
    story: createTranslations('Like bright metal that illuminates every room, this name represents leadership that brings clarity and warmth to any environment.', '모든 방을 밝히는 빛나는 금속처럼, 어떤 환경에도 명료함과 따뜻함을 가져다주는 리더십을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 88,
    kpopMember: { group: 'Stray Kids', memberName: 'Bang Chan' },
    style: 'kpop'
  },
  {
    korean: '창빈',
    romanization: 'Chang-bin',
    pronunciation: 'chang-bin',
    meaning: createTranslations('Spear refined', '창 세련된'),
    story: createTranslations('Like refined metal forged into a perfect spear, this name represents focused strength and precision in achieving goals.', '완벽한 창으로 단조된 세련된 금속처럼, 목표 달성에서의 집중된 힘과 정밀함을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 82,
    kpopMember: { group: 'Stray Kids', memberName: 'Changbin' },
    style: 'kpop'
  },
  {
    korean: '선우',
    romanization: 'Seon-woo',
    pronunciation: 'sun-woo',
    meaning: createTranslations('Good excellent', '좋고 뛰어난'),
    story: createTranslations('Like excellent metal refined through goodness, this name represents someone who achieves excellence through moral character and kind strength.', '선함을 통해 정련된 뛰어난 금속처럼, 도덕적 성품과 친절한 힘을 통해 탁월함을 달성하는 사람을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'male',
    popularity: 84,
    kpopMember: { group: 'THE BOYZ', memberName: 'Sunwoo' },
    style: 'kpop'
  },

  // Metal Element - Female Names (20 total)
  {
    korean: '하린',
    hanja: '夏麟',
    romanization: 'Ha-rin',
    pronunciation: 'ha-rin',
    meaning: createTranslations('Beautiful sky', '아름다운 하늘'),
    story: createTranslations('Like silver stars that guide travelers through dark nights, this name represents beauty that provides direction and inspiration.', '어둠 속 여행자들을 인도하는 은빛 별들처럼, 방향과 영감을 제공하는 아름다움을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 91,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '하',
          hanja: '夏',
          meaning: createTranslations('summer, great, grand', '여름, 큰, 위대한')
        },
        {
          korean: '린',
          hanja: '麟',
          meaning: createTranslations('unicorn, auspicious creature', '기린, 상서로운 동물')
        }
      ],
      traditionalMeaning: createTranslations('"summer, great" combined with "unicorn, auspicious creature" creates a meaning of great fortune, representing someone who brings exceptional luck and rare beauty like a mythical creature', '"여름, 위대한"과 "기린, 상서로운 동물"이 결합되어 큰 행운의 의미를 만들며, 신화적 생물처럼 특별한 운과 희귀한 아름다움을 가져다주는 사람을 나타냅니다')
    },
    pronunciationMatch: 76
  },
  {
    korean: '은서',
    romanization: 'Eun-seo',
    pronunciation: 'eun-suh',
    meaning: createTranslations('Silver kindness', '은빛 친절함'),
    story: createTranslations('This name shines like polished silver, representing kindness that is both precious and enduring, refined through life\'s challenges.', '연마된 은처럼 빛나며, 인생의 도전을 통해 정련되어 소중하고 지속적인 친절함을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 87,
    style: 'modern'
  },
  {
    korean: '유진',
    romanization: 'Yoo-jin',
    pronunciation: 'yoo-jin',
    meaning: createTranslations('Gentle and precious', '부드럽고 소중한'),
    story: createTranslations('Like a delicate golden ornament that protects treasures, this name embodies gentle strength that guards what is valuable.', '보물을 보호하는 섬세한 금 장식품처럼, 소중한 것을 지키는 부드러운 힘을 구현하는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 83,
    style: 'modern'
  },
  {
    korean: '소영',
    romanization: 'So-yeong',
    pronunciation: 'so-young',
    meaning: createTranslations('Small prosperity', '작은 번영'),
    story: createTranslations('This name glows like small precious metal that creates prosperity, representing modest excellence that builds lasting abundance.', '번영을 창조하는 작은 귀금속처럼 빛나며, 지속적인 풍요로움을 구축하는 겸손한 탁월함을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 79,
    style: 'modern'
  },
  {
    korean: '정은',
    romanization: 'Jeong-eun',
    pronunciation: 'jung-eun',
    meaning: createTranslations('Righteous kindness', '의로운 친절함'),
    story: createTranslations('Like righteous metal that shows kindness through strength, this name represents compassion guided by moral principles.', '힘을 통해 친절함을 보여주는 의로운 금속처럼, 도덕적 원칙에 의해 인도되는 연민을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 75,
    style: 'traditional'
  },
  {
    korean: '혜린',
    romanization: 'Hye-rin',
    pronunciation: 'hye-rin',
    meaning: createTranslations('Wise beautiful', '지혜롭고 아름다운'),
    story: createTranslations('This name shines like wise metal that creates beauty, representing intelligence that manifests as elegant strength and grace.', '아름다움을 창조하는 지혜로운 금속처럼 빛나며, 우아한 힘과 품격으로 나타나는 지성을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 71,
    style: 'modern'
  },
  {
    korean: '수정',
    romanization: 'Soo-jeong',
    pronunciation: 'soo-jung',
    meaning: createTranslations('Beautiful crystal', '아름다운 수정'),
    story: createTranslations('Like pure crystal formed by patient pressure, this name represents beauty that comes from clarity achieved through perseverance.', '인내심 있는 압력으로 형성된 순수한 수정처럼, 끈기를 통해 달성된 명료함에서 오는 아름다움을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 67,
    style: 'traditional'
  },
  {
    korean: '진영',
    romanization: 'Jin-yeong',
    pronunciation: 'jin-young',
    meaning: createTranslations('Precious prosperity', '소중한 번영'),
    story: createTranslations('This name prospers like precious metal that creates abundance, representing value that multiplies when shared with others.', '풍요로움을 창조하는 귀금속처럼 번영하며, 다른 사람들과 나눌 때 배가 되는 가치를 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 63,
    style: 'modern'
  },
  {
    korean: '은지',
    romanization: 'Eun-ji',
    pronunciation: 'eun-jee',
    meaning: createTranslations('Silver wisdom', '은빛 지혜'),
    story: createTranslations('Like silver that holds ancient wisdom, this name represents knowledge that becomes more valuable with age and experience.', '고대의 지혜를 품은 은처럼, 나이와 경험과 함께 더욱 가치있게 되는 지식을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 59,
    style: 'traditional'
  },
  {
    korean: '정아',
    romanization: 'Jeong-ah',
    pronunciation: 'jung-ah',
    meaning: createTranslations('Righteous beautiful', '의롭고 아름다운'),
    story: createTranslations('This name beautifies like righteous metal that creates lasting elegance, representing beauty rooted in strong moral character.', '지속적인 우아함을 창조하는 의로운 금속처럼 아름답게 하며, 강한 도덕적 성품에 뿌리를 둔 아름다움을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 55,
    style: 'traditional'
  },
  {
    korean: '소정',
    romanization: 'So-jeong',
    pronunciation: 'so-jung',
    meaning: createTranslations('Small crystal', '작은 수정'),
    story: createTranslations('Like a small crystal that refracts pure light, this name represents modest perfection that illuminates everything around it.', '순수한 빛을 굴절시키는 작은 수정처럼, 주변의 모든 것을 밝히는 겸손한 완벽함을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 51,
    style: 'traditional'
  },
  {
    korean: '혜진',
    romanization: 'Hye-jin',
    pronunciation: 'hye-jin',
    meaning: createTranslations('Wise precious', '지혜롭고 소중한'),
    story: createTranslations('This name treasures like wise metal that recognizes true value, representing intelligence that appreciates what is genuinely precious.', '진정한 가치를 인식하는 지혜로운 금속처럼 소중히 여기며, 진실로 소중한 것을 감상하는 지성을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 47,
    style: 'traditional'
  },
  {
    korean: '수진',
    romanization: 'Soo-jin',
    pronunciation: 'soo-jin',
    meaning: createTranslations('Beautiful precious', '아름답고 소중한'),
    story: createTranslations('Like beautiful metal that holds precious meaning, this name represents elegance that comes from valuing inner beauty.', '소중한 의미를 품은 아름다운 금속처럼, 내적 아름다움을 가치있게 여기는 것에서 오는 우아함을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 43,
    style: 'modern'
  },
  {
    korean: '은영',
    romanization: 'Eun-yeong',
    pronunciation: 'eun-young',
    meaning: createTranslations('Silver prosperity', '은빛 번영'),
    story: createTranslations('This name prospers like silver that creates lasting abundance, representing success that comes through consistent excellence and integrity.', '지속적인 풍요로움을 창조하는 은처럼 번영하며, 일관된 탁월함과 성실성을 통해 오는 성공을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 39,
    style: 'modern'
  },
  {
    korean: '정현',
    romanization: 'Jeong-hyun',
    pronunciation: 'jung-hyun',
    meaning: createTranslations('Righteous virtue', '의로운 덕'),
    story: createTranslations('Like righteous metal that embodies virtue, this name represents moral character that shines through principled action.', '덕을 구현하는 의로운 금속처럼, 원칙에 입각한 행동을 통해 빛나는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 35,
    style: 'traditional'
  },
  {
    korean: '소진',
    romanization: 'So-jin',
    pronunciation: 'so-jin',
    meaning: createTranslations('Small precious', '작고 소중한'),
    story: createTranslations('This name values like small precious metal that holds great worth, representing the understanding that true value comes in many forms.', '큰 가치를 지닌 작은 귀금속처럼 가치 있게 여기며, 진정한 가치가 다양한 형태로 온다는 이해를 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 31,
    style: 'modern'
  },
  {
    korean: '혜영',
    romanization: 'Hye-yeong',
    pronunciation: 'hye-young',
    meaning: createTranslations('Wise prosperity', '지혜로운 번영'),
    story: createTranslations('Like wise metal that creates prosperity through intelligence, this name represents success achieved through thoughtful planning and action.', '지성을 통해 번영을 창조하는 지혜로운 금속처럼, 신중한 계획과 행동을 통해 달성된 성공을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 27,
    style: 'modern'
  },
  // K-pop Metal Female Names
  {
    korean: '예지',
    romanization: 'Ye-ji',
    pronunciation: 'yeh-jee',
    meaning: createTranslations('Beautiful wisdom', '아름다운 지혜'),
    story: createTranslations('Like precious metal that holds beautiful wisdom, this name represents intelligence that shines with elegant strength and refined character.', '아름다운 지혜를 품은 귀금속처럼, 우아한 힘과 세련된 성품으로 빛나는 지성을 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 89,
    kpopMember: { group: 'ITZY', memberName: 'Yeji' },
    style: 'kpop'
  },
  {
    korean: '류진',
    romanization: 'Ryu-jin',
    pronunciation: 'ryu-jin',
    meaning: createTranslations('Dragon precious', '용 소중한'),
    story: createTranslations('This name soars like a dragon made of precious metal, representing powerful charisma combined with valuable inner strength.', '귀금속으로 만들어진 용처럼 솟구치며, 가치있는 내적 힘과 결합된 강력한 카리스마를 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 86,
    kpopMember: { group: 'ITZY', memberName: 'Ryujin' },
    style: 'kpop'
  },
  {
    korean: '유나',
    romanization: 'Yu-na',
    pronunciation: 'yu-na',
    meaning: createTranslations('Abundant me', '풍부한 나'),
    story: createTranslations('Like abundant precious metal that shines with self-confidence, this name represents inner wealth and the courage to be authentically oneself.', '자신감으로 빛나는 풍부한 귀금속처럼, 내적 부와 진정한 자신이 될 용기를 나타내는 이름입니다.'),
    element: 'metal',
    gender: 'female',
    popularity: 80,
    kpopMember: { group: 'ITZY', memberName: 'Yuna' },
    style: 'kpop'
  },

  // Water Element - Male Names (20 total)
  {
    korean: '은우',
    romanization: 'Eun-woo',
    pronunciation: 'eun-woo',
    meaning: createTranslations('Kindness and excellence', '친절함과 탁월함'),
    story: createTranslations('Like a deep ocean that holds countless treasures, this name represents kindness that flows with excellent character and generosity.', '수많은 보물을 품은 깊은 바다처럼, 훌륭한 성품과 관대함으로 흘러나오는 친절함을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 97,
    style: 'modern'
  },
  {
    korean: '준호',
    romanization: 'Jun-ho',
    pronunciation: 'joon-ho',
    meaning: createTranslations('Talented and great', '재능있고 위대한'),
    story: createTranslations('This name flows like a mighty river that demonstrates both talent and greatness, representing ability that serves others with wisdom.', '재능과 위대함을 모두 보여주는 거대한 강처럼 흘러, 지혜로 다른 사람들을 섬기는 능력을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 93,
    style: 'modern'
  },
  {
    korean: '민호',
    romanization: 'Min-ho',
    pronunciation: 'min-ho',
    meaning: createTranslations('Quick and great', '민첩하고 위대한'),
    story: createTranslations('Like a swift river that carves canyons, this name represents intelligence that moves quickly and achieves greatness through adaptability.', '계곡을 조각하는 빠른 강처럼, 신속하게 움직이며 적응력을 통해 위대함을 달성하는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 89,
    style: 'modern'
  },
  {
    korean: '지훈',
    romanization: 'Ji-hoon',
    pronunciation: 'jee-hoon',
    meaning: createTranslations('Wise and meritorious', '지혜롭고 공로있는'),
    story: createTranslations('Like ancient wisdom flowing through generations, this name embodies knowledge that creates lasting positive change in the world.', '세대를 거쳐 흘러내리는 고대 지혜처럼, 세상에 지속적인 긍정적 변화를 만드는 지식을 구현하는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 85,
    style: 'traditional'
  },
  {
    korean: '현수',
    romanization: 'Hyun-soo',
    pronunciation: 'hyun-soo',
    meaning: createTranslations('Virtuous excellence', '덕이 있는 탁월함'),
    story: createTranslations('This name flows like virtuous water that achieves excellence, representing moral character that naturally creates outstanding results.', '탁월함을 달성하는 덕스러운 물처럼 흘러, 자연스럽게 뛰어난 결과를 만드는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 81,
    style: 'traditional'
  },
  {
    korean: '민수',
    romanization: 'Min-soo',
    pronunciation: 'min-soo',
    meaning: createTranslations('Quick excellence', '빠른 탁월함'),
    story: createTranslations('Like quick water that finds the most excellent path, this name represents intelligence that swiftly identifies the best solutions.', '가장 훌륭한 길을 찾는 빠른 물처럼, 최선의 해결책을 신속하게 찾아내는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 77,
    style: 'modern'
  },
  {
    korean: '준수',
    romanization: 'Jun-soo',
    pronunciation: 'joon-soo',
    meaning: createTranslations('Talented excellence', '재능있는 탁월함'),
    story: createTranslations('This name demonstrates like talented water that flows with excellence, representing ability that naturally creates beautiful outcomes.', '탁월함과 함께 흘러가는 재능있는 물처럼 증명하며, 자연스럽게 아름다운 결과를 만드는 능력을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 73,
    style: 'modern'
  },
  {
    korean: '정수',
    romanization: 'Jeong-soo',
    pronunciation: 'jung-soo',
    meaning: createTranslations('Righteous excellence', '의로운 탁월함'),
    story: createTranslations('Like righteous water that purifies while achieving excellence, this name represents integrity that creates truly outstanding character.', '탁월함을 달성하면서 정화하는 의로운 물처럼, 진정으로 뛰어난 성품을 만드는 성실함을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 69,
    style: 'traditional'
  },
  {
    korean: '현호',
    romanization: 'Hyun-ho',
    pronunciation: 'hyun-ho',
    meaning: createTranslations('Virtuous great', '덕이 있고 위대한'),
    story: createTranslations('This name expands like virtuous water that achieves greatness, representing moral character that naturally grows into significant influence.', '위대함을 달성하는 덕스러운 물처럼 확장되며, 자연스럽게 중요한 영향력으로 성장하는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 65,
    style: 'traditional'
  },
  {
    korean: '승수',
    romanization: 'Seung-soo',
    pronunciation: 'seung-soo',
    meaning: createTranslations('Victory excellence', '승리의 탁월함'),
    story: createTranslations('Like victorious water that wins through excellence, this name represents success achieved through superior character and persistent effort.', '탁월함을 통해 승리하는 승리의 물처럼, 뛰어난 성품과 끈질긴 노력을 통해 달성된 성공을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 61,
    style: 'modern'
  },
  {
    korean: '진수',
    romanization: 'Jin-soo',
    pronunciation: 'jin-soo',
    meaning: createTranslations('Precious excellence', '소중한 탁월함'),
    story: createTranslations('This name treasures like precious water that displays excellence, representing value that comes from consistently demonstrating quality.', '탁월함을 보여주는 소중한 물처럼 귀중히 여기며, 지속적으로 품질을 증명하는 것에서 오는 가치를 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 57,
    style: 'modern'
  },
  {
    korean: '동수',
    romanization: 'Dong-soo',
    pronunciation: 'dong-soo',
    meaning: createTranslations('Eastern excellence', '동방의 탁월함'),
    story: createTranslations('Like eastern water that brings excellence with the dawn, this name represents quality that arrives with new opportunities and hope.', '새벽과 함께 탁월함을 가져다주는 동방의 물처럼, 새로운 기회와 희망과 함께 도착하는 품질을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 53,
    style: 'traditional'
  },
  {
    korean: '민혁',
    romanization: 'Min-hyuk',
    pronunciation: 'min-hyuk',
    meaning: createTranslations('Quick innovation', '빠른 혁신'),
    story: createTranslations('This name innovates like quick water that finds new paths, representing intelligence that creates original solutions to complex challenges.', '새로운 길을 찾는 빠른 물처럼 혁신하며, 복잡한 도전에 대한 독창적인 해결책을 만드는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 49,
    style: 'modern'
  },
  {
    korean: '준혁',
    romanization: 'Jun-hyuk',
    pronunciation: 'joon-hyuk',
    meaning: createTranslations('Talented innovation', '재능있는 혁신'),
    story: createTranslations('Like talented water that carves innovative channels, this name represents ability that creates new possibilities and breakthrough solutions.', '혁신적인 수로를 조각하는 재능있는 물처럼, 새로운 가능성과 획기적인 해결책을 만드는 능력을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 45,
    style: 'modern'
  },
  {
    korean: '현준',
    romanization: 'Hyun-jun',
    pronunciation: 'hyun-joon',
    meaning: createTranslations('Virtuous talent', '덕이 있는 재능'),
    story: createTranslations('This name develops like virtuous water that nurtures talent, representing moral character that helps others discover their abilities.', '재능을 기르는 덕스러운 물처럼 발전하며, 다른 사람들이 자신의 능력을 발견하도록 돕는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 41,
    style: 'traditional'
  },
  {
    korean: '승호',
    romanization: 'Seung-ho',
    pronunciation: 'seung-ho',
    meaning: createTranslations('Victory great', '승리와 위대함'),
    story: createTranslations('Like victorious water that achieves greatness, this name represents triumph that comes through flowing around obstacles with persistent determination.', '위대함을 달성하는 승리의 물처럼, 끈질긴 결단력으로 장애물을 돌아서 흘러가는 것을 통해 오는 승리를 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 37,
    style: 'modern'
  },
  {
    korean: '정호',
    romanization: 'Jeong-ho',
    pronunciation: 'jung-ho',
    meaning: createTranslations('Righteous great', '의롭고 위대한'),
    story: createTranslations('This name expands like righteous water that naturally becomes great, representing integrity that grows into significant positive influence.', '자연스럽게 위대해지는 의로운 물처럼 확장되며, 중요한 긍정적 영향력으로 성장하는 성실함을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 33,
    style: 'traditional'
  },
  // K-pop Water Male Names
  {
    korean: '진',
    romanization: 'Jin',
    pronunciation: 'jin',
    meaning: createTranslations('Precious and genuine', '소중하고 진정한'),
    story: createTranslations('Like precious water that holds immense value, this name represents someone with rare qualities and the ability to bring beauty and worth to everything they touch.', '엄청난 가치를 지닌 소중한 물처럼, 희귀한 자질과 닿는 모든 것에 아름다움과 가치를 가져다주는 능력을 가진 사람을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 94,
    kpopMember: { group: 'BTS', memberName: 'Jin' },
    style: 'kpop'
  },
  {
    korean: '민혁',
    romanization: 'Min-hyuk',
    pronunciation: 'min-hyuk',
    meaning: createTranslations('Quick innovation', '빠른 혁신'),
    story: createTranslations('Like innovative water that quickly finds new paths, this name represents creative intelligence that breaks new ground with fluid adaptation.', '새로운 길을 빠르게 찾는 혁신적인 물처럼, 유연한 적응으로 새로운 지평을 여는 창조적 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 88,
    kpopMember: { group: 'BTOB', memberName: 'Minhyuk' },
    style: 'kpop'
  },
  {
    korean: '원우',
    romanization: 'Won-woo',
    pronunciation: 'won-woo',
    meaning: createTranslations('Source excellent', '근원의 탁월함'),
    story: createTranslations('Like excellent water that flows from its source, this name represents someone who maintains excellence while being a source of inspiration and renewal for others.', '근원에서 흘러나오는 훌륭한 물처럼, 다른 사람들에게 영감과 새로움의 근원이 되면서 탁월함을 유지하는 사람을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'male',
    popularity: 85,
    kpopMember: { group: 'SEVENTEEN', memberName: 'Wonwoo' },
    style: 'kpop'
  },

  // Water Element - Female Names (20 total)
  {
    korean: '윤서',
    romanization: 'Yoon-seo',
    pronunciation: 'yoon-suh',
    meaning: createTranslations('Prosperous kindness', '번영하는 친절함'),
    story: createTranslations('Like a spring that never runs dry, this name represents kindness that brings abundance and prosperity to all who encounter it.', '결코 마르지 않는 샘처럼, 만나는 모든 사람에게 풍요와 번영을 가져다주는 친절함을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 98,
    style: 'modern'
  },
  {
    korean: '수빈',
    hanja: '秀彬',
    romanization: 'Soo-bin',
    pronunciation: 'soo-bin',
    meaning: createTranslations('Water and refined', '물과 세련됨'),
    story: createTranslations('This name flows like crystal-clear water through precious stones, representing purity that has been refined through life\'s journey.', '귀한 돌을 통해 흘러가는 수정처럼 맑은 물처럼, 인생의 여정을 통해 정제된 순수함을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 94,
    style: 'modern',
    hanjaBreakdown: {
      characters: [
        {
          korean: '수',
          hanja: '秀',
          meaning: createTranslations('excellence, longevity', '우수함, 장수')
        },
        {
          korean: '빈',
          hanja: '彬',
          meaning: createTranslations('refined, elegant', '세련된, 우아한')
        }
      ],
      traditionalMeaning: createTranslations('"water" combined with "refined, elegant" creates harmonious meaning flows with adaptive wisdom and deep understanding, like a river that finds the most beneficial path forward', '"물"과 "세련되고 우아한"이 결합되어 가장 유익한 길을 찾는 강처럼 적응적 지혜와 깊은 이해가 흐르는 조화로운 의미를 만듭니다')
    },
    pronunciationMatch: 36
  },
  {
    korean: '지민',
    romanization: 'Ji-min',
    pronunciation: 'jee-min',
    meaning: createTranslations('Wise and quick', '지혜롭고 민첩한'),
    story: createTranslations('Like a mountain stream that knows exactly where to flow, this name embodies quick wisdom that finds the most beautiful path forward.', '정확히 어디로 흘러야 할지 아는 산골 시내처럼, 가장 아름다운 앞길을 찾는 빠른 지혜를 구현하는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 90,
    style: 'modern'
  },
  {
    korean: '현서',
    romanization: 'Hyun-seo',
    pronunciation: 'hyun-suh',
    meaning: createTranslations('Virtuous auspicious', '덕이 있고 길조로운'),
    story: createTranslations('This name flows like virtuous water under auspicious stars, representing moral character blessed with favorable circumstances.', '길조의 별 아래에서 흘러가는 덕스러운 물처럼, 유리한 환경으로 축복받은 도덕적 성품을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 86,
    style: 'traditional'
  },
  {
    korean: '수현',
    romanization: 'Soo-hyun',
    pronunciation: 'soo-hyun',
    meaning: createTranslations('Beautiful virtue', '아름다운 덕'),
    story: createTranslations('Like beautiful water that embodies virtue, this name represents inner beauty that flows naturally from strong moral character.', '덕을 구현하는 아름다운 물처럼, 강한 도덕적 성품에서 자연스럽게 흘러나오는 내적 아름다움을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 82,
    style: 'traditional'
  },
  {
    korean: '민정',
    romanization: 'Min-jeong',
    pronunciation: 'min-jung',
    meaning: createTranslations('Quick pure', '빠르고 순수한'),
    story: createTranslations('This name purifies like quick water that immediately cleanses, representing intelligence that swiftly recognizes and embraces what is true.', '즉시 정화하는 빠른 물처럼 정화하며, 진실한 것을 신속히 인식하고 받아들이는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 78,
    style: 'modern'
  },
  {
    korean: '지수',
    romanization: 'Ji-soo',
    pronunciation: 'jee-soo',
    meaning: createTranslations('Wise beautiful', '지혜롭고 아름다운'),
    story: createTranslations('Like wise water that creates beautiful landscapes, this name represents intelligence that naturally manifests as grace and elegance.', '아름다운 풍경을 만드는 지혜로운 물처럼, 자연스럽게 우아함과 우아함으로 나타나는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 74,
    style: 'modern'
  },
  {
    korean: '혜진',
    romanization: 'Hye-jin',
    pronunciation: 'hye-jin',
    meaning: createTranslations('Wise precious', '지혜롭고 소중한'),
    story: createTranslations('This name treasures like wise water that recognizes precious moments, representing intelligence that values what is truly meaningful in life.', '소중한 순간들을 인식하는 지혜로운 물처럼 귀중히 여기며, 삶에서 진정으로 의미있는 것을 가치있게 여기는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 70,
    style: 'traditional'
  },
  {
    korean: '수정',
    romanization: 'Soo-jeong',
    pronunciation: 'soo-jung',
    meaning: createTranslations('Beautiful pure', '아름답고 순수한'),
    story: createTranslations('Like pure water that creates crystal formations, this name represents beauty that comes from absolute clarity and authentic transparency.', '수정 결정체를 만드는 순수한 물처럼, 절대적 명료함과 진정한 투명함에서 오는 아름다움을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 66,
    style: 'traditional'
  },
  {
    korean: '현정',
    romanization: 'Hyun-jeong',
    pronunciation: 'hyun-jung',
    meaning: createTranslations('Virtuous pure', '덕이 있고 순수한'),
    story: createTranslations('This name purifies like virtuous water that cleanses naturally, representing moral character that brings clarity to complex situations.', '자연스럽게 정화하는 덕스러운 물처럼 정화하며, 복잡한 상황에 명료함을 가져다주는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 62,
    style: 'traditional'
  },
  {
    korean: '민서',
    romanization: 'Min-seo',
    pronunciation: 'min-suh',
    meaning: createTranslations('Quick auspicious', '민첩하고 길조로운'),
    story: createTranslations('Like quick water that flows toward auspicious destinations, this name represents intelligence that naturally moves toward positive outcomes.', '길조로운 목적지를 향해 흘러가는 빠른 물처럼, 자연스럽게 긍정적인 결과를 향해 움직이는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 58,
    style: 'modern'
  },
  {
    korean: '지현',
    romanization: 'Ji-hyun',
    pronunciation: 'jee-hyun',
    meaning: createTranslations('Wise virtue', '지혜로운 덕'),
    story: createTranslations('This name embodies like wise water that demonstrates virtue, representing knowledge that naturally expresses itself through moral action.', '덕을 보여주는 지혜로운 물처럼 구현하며, 자연스럽게 도덕적 행동을 통해 표현되는 지식을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 54,
    style: 'traditional'
  },
  {
    korean: '혜수',
    romanization: 'Hye-soo',
    pronunciation: 'hye-soo',
    meaning: createTranslations('Wise beautiful', '지혜롭고 아름다운'),
    story: createTranslations('Like wise water that flows with natural beauty, this name represents intelligence that creates elegance in everything it touches.', '자연스러운 아름다움으로 흘러가는 지혜로운 물처럼, 닿는 모든 것에 우아함을 만드는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 50,
    style: 'modern'
  },
  {
    korean: '수민',
    romanization: 'Soo-min',
    pronunciation: 'soo-min',
    meaning: createTranslations('Beautiful quick', '아름답고 민첩한'),
    story: createTranslations('This name responds like beautiful water that quickly adapts, representing grace that flows smoothly through all of life\'s changing seasons.', '빠르게 적응하는 아름다운 물처럼 반응하며, 삶의 변화하는 모든 계절을 부드럽게 흘러가는 은혜를 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 46,
    style: 'modern'
  },
  {
    korean: '현주',
    romanization: 'Hyun-ju',
    pronunciation: 'hyun-joo',
    meaning: createTranslations('Virtuous jewel', '덕이 있는 보석'),
    story: createTranslations('Like virtuous water that polishes jewels to perfection, this name represents moral character that brings out the best in everything.', '보석을 완벽하게 닦아내는 덕스러운 물처럼, 모든 것에서 최선을 끌어내는 도덕적 성품을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 42,
    style: 'traditional'
  },
  {
    korean: '민주',
    romanization: 'Min-ju',
    pronunciation: 'min-joo',
    meaning: createTranslations('Quick jewel', '빠른 보석'),
    story: createTranslations('This name sparkles like quick water that reveals hidden jewels, representing intelligence that swiftly discovers the treasure in every situation.', '숨겨진 보석을 드러내는 빠른 물처럼 반짝이며, 모든 상황에서 보물을 신속하게 발견하는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 38,
    style: 'modern'
  },
  {
    korean: '지영',
    romanization: 'Ji-yeong',
    pronunciation: 'jee-young',
    meaning: createTranslations('Wise prosperity', '지혜로운 번영'),
    story: createTranslations('Like wise water that creates prosperity wherever it flows, this name represents knowledge that naturally generates abundance for all.', '흘러가는 곳마다 번영을 만드는 지혜로운 물처럼, 자연스럽게 모든 사람을 위한 풍요를 생성하는 지식을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 34,
    style: 'modern'
  },
  // K-pop Water Female Names
  {
    korean: '해린',
    romanization: 'Hae-rin',
    pronunciation: 'hay-rin',
    meaning: createTranslations('Ocean beautiful', '바다 아름다운'),
    story: createTranslations('Like beautiful ocean water that holds infinite depths, this name represents someone with vast inner beauty and the wisdom of endless horizons.', '무한한 깊이를 품은 아름다운 바닷물처럼, 광대한 내적 아름다움과 끝없는 지평선의 지혜를 가진 사람을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 95,
    kpopMember: { group: 'NewJeans', memberName: 'Haerin' },
    style: 'kpop'
  },
  {
    korean: '민지',
    romanization: 'Min-ji',
    pronunciation: 'min-jee',
    meaning: createTranslations('Quick wisdom', '빠른 지혜'),
    story: createTranslations('This name flows like quick water that carries wisdom, representing intelligence that moves gracefully and brings insight to every situation.', '지혜를 싣고 흘러가는 빠른 물처럼, 우아하게 움직이며 모든 상황에 통찰을 가져다주는 지성을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 92,
    kpopMember: { group: 'NewJeans', memberName: 'Minji' },
    style: 'kpop'
  },
  {
    korean: '원영',
    romanization: 'Won-yeong',
    pronunciation: 'won-young',
    meaning: createTranslations('Source prosperity', '근원의 번영'),
    story: createTranslations('Like water that flows from a prosperous source, this name represents someone who becomes a source of abundance and success for others through natural grace.', '번영하는 근원에서 흘러나오는 물처럼, 자연스러운 은혜를 통해 다른 사람들에게 풍요와 성공의 근원이 되는 사람을 나타내는 이름입니다.'),
    element: 'water',
    gender: 'female',
    popularity: 89,
    kpopMember: { group: 'IVE', memberName: 'Wonyoung' },
    style: 'kpop'
  }

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