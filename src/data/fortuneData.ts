// Fortune Data Structure for Korean Name Studio
// 사주 기반 개인화된 운세 데이터

export type Locale = 'en' | 'ko' | 'de' | 'es' | 'fr' | 'id' | 'it' | 'ja' | 'pt' | 'ru' | 'th' | 'zh-CN' | 'zh-TW';
export type FortuneText = Partial<Record<Locale, string>>;

export interface ElementCharacteristics {
  personality: FortuneText;
  strengths: FortuneText;
  weaknesses: FortuneText;
  career: FortuneText;
  love: FortuneText;
  health: FortuneText;
  wealth: FortuneText;
  advice: FortuneText;
}

export interface StrengthModifiers {
  overall: FortuneText;
  career: FortuneText;
  love: FortuneText;
  health: FortuneText;
  wealth: FortuneText;
  advice: FortuneText;
}

export interface SeasonalInfluence {
  characteristics: FortuneText;
  favorableAspects: FortuneText;
  challenges: FortuneText;
  advice: FortuneText;
}

export interface ElementBalance {
  dominant: FortuneText;
  lacking: FortuneText;
  balanced: FortuneText;
}

export interface FortuneData {
  // 오행별 기본 특성 (木火土金水)
  elementCharacteristics: {
    wood: ElementCharacteristics;
    fire: ElementCharacteristics;
    earth: ElementCharacteristics;
    metal: ElementCharacteristics;
    water: ElementCharacteristics;
  };

  // 강약별 운세 조정
  strengthModifiers: {
    'very-strong': StrengthModifiers;
    'strong': StrengthModifiers;
    'moderate': StrengthModifiers;
    'weak': StrengthModifiers;
    'very-weak': StrengthModifiers;
  };

  // 계절별 영향 (출생월 기준)
  seasonalInfluence: {
    spring: SeasonalInfluence;  // 3,4,5월
    summer: SeasonalInfluence;  // 6,7,8월
    autumn: SeasonalInfluence;  // 9,10,11월
    winter: SeasonalInfluence;  // 12,1,2월
  };

  // 오행 균형 상태별 메시지
  elementBalanceMessages: {
    wood: ElementBalance;
    fire: ElementBalance;
    earth: ElementBalance;
    metal: ElementBalance;
    water: ElementBalance;
  };

  // 기본 템플릿 (fallback용)
  defaultTemplates: {
    overall: FortuneText;
    career: FortuneText;
    love: FortuneText;
    health: FortuneText;
    wealth: FortuneText;
    advice: FortuneText;
  };
}

// 임시 데이터 구조 (Gemini가 채울 예정)
export const fortuneData: FortuneData = {
  elementCharacteristics: {
    wood: {
      personality: { 
        en: "Like a growing tree, you possess natural creativity and adaptability that allows you to flourish in various environments.", 
        ko: "자라나는 나무처럼 자연스러운 창의성과 적응력을 지니고 있어 다양한 환경에서 번영할 수 있습니다.",
        de: "Wie ein wachsender Baum besitzen Sie natürliche Kreativität und Anpassungsfähigkeit, die es Ihnen ermöglichen, in verschiedenen Umgebungen zu gedeihen.",
        es: "Como un árbol en crecimiento, posees una creatividad y adaptabilidad naturales que te permiten prosperar en diversos entornos.",
        fr: "Tel un arbre en pleine croissance, vous possédez une créativité et une adaptabilité naturelles qui vous permettent de vous épanouir dans divers environnements.",
        id: "Seperti pohon yang tumbuh, Anda memiliki kreativitas dan kemampuan beradaptasi alami yang memungkinkan Anda berkembang di berbagai lingkungan.",
        it: "Come un albero che cresce, possiedi una creatività e un'adattabilità naturali che ti permettono di prosperare in vari ambienti.",
        ja: "成長する木のように、あなたは自然な創造性と適応性を備えており、さまざまな環境で繁栄することができます。",
        pt: "Como uma árvore em crescimento, você possui criatividade e adaptabilidade naturais que lhe permitem florescer em vários ambientes.",
        ru: "Подобно растущему дереву, вы обладаете природным творчеством и приспособляемостью, которые позволяют вам процветать в различных средах.",
        th: "เหมือนต้นไม้ที่กำลังเติบโต คุณมีความคิดสร้างสรรค์และความสามารถในการปรับตัวตามธรรมชาติที่ช่วยให้คุณเจริญรุ่งเรืองในสภาพแวดล้อมที่หลากหลาย",
        'zh-CN': "像一棵生长中的树，你拥有天生的创造力和适应性，使你能够在各种环境中茁壮成长。",
        'zh-TW': "像一棵生長中的樹，你擁有天生的創造力和適應性，使你能夠在各種環境中茁壯成長。"
      },
      strengths: { 
        en: "Your innovative thinking and leadership qualities make you excel in creative fields and management positions.", 
        ko: "혁신적인 사고와 리더십 자질로 창조적 분야와 관리직에서 뛰어난 능력을 발휘합니다.",
        de: "Ihr innovatives Denken und Ihre Führungsqualitäten lassen Sie in kreativen Bereichen und Führungspositionen herausragen.",
        es: "Tu pensamiento innovador y tus cualidades de liderazgo te hacen destacar en campos creativos y puestos de dirección.",
        fr: "Votre pensée innovante et vos qualités de leadership vous font exceller dans les domaines créatifs et les postes de direction.",
        id: "Pemikiran inovatif dan kualitas kepemimpinan Anda membuat Anda unggul di bidang kreatif dan posisi manajemen.",
        it: "Il tuo pensiero innovativo e le tue qualità di leadership ti fanno eccellere nei campi creativi e nelle posizioni manageriali.",
        ja: "あなたの革新的な思考とリーダーシップの質は、創造的な分野や管理職であなたを際立たせます。",
        pt: "Seu pensamento inovador e qualidades de liderança fazem você se destacar em campos criativos e cargos de gestão.",
        ru: "Ваше инновационное мышление и лидерские качества позволяют вам преуспеть в творческих областях и на руководящих должностях.",
        th: "ความคิดสร้างสรรค์และคุณสมบัติความเป็นผู้นำของคุณทำให้คุณโดดเด่นในสายงานสร้างสรรค์และตำแหน่งผู้บริหาร",
        'zh-CN': "你的创新思维和领导才能使你在创意领域和管理职位上表现出色。",
        'zh-TW': "你的創意思維和領導才能使你在創意領域和管理職位上表現出色。"
      },
      weaknesses: { 
        en: "You can sometimes be too assertive or impatient. It's important to learn to be more flexible and listen to others.", 
        ko: "때로는 지나치게 독단적이거나 참을성이 부족할 수 있습니다. 유연성을 배우고 다른 사람의 의견에 귀 기울이는 것이 중요합니다.",
        de: "Sie können manchmal zu durchsetzungsfähig oder ungeduldig sein. Es ist wichtig zu lernen, flexibler zu sein und anderen zuzuhören.",
        es: "A veces puedes ser demasiado asertivo o impaciente. Es importante aprender a ser más flexible y a escuchar a los demás.",
        fr: "Vous pouvez parfois être trop autoritaire ou impatient. Il est important d'apprendre à être plus flexible et à écouter les autres.",
        id: "Anda terkadang bisa terlalu tegas atau tidak sabar. Penting untuk belajar menjadi lebih fleksibel dan mendengarkan orang lain.",
        it: "A volte puoi essere troppo autoritario o impaziente. È importante imparare ad essere più flessibile e ad ascoltare gli altri.",
        ja: "あなたは時々、自己主張が強すぎたり、せっかちになったりすることがあります。もっと柔軟になり、他の人の意見に耳を傾けることを学ぶことが重要です。",
        pt: "Às vezes, você pode ser muito assertivo ou impaciente. É importante aprender a ser mais flexível e a ouvir os outros.",
        ru: "Иногда вы можете быть слишком напористы или нетерпеливы. Важно научиться быть более гибким и прислушиваться к другим.",
        th: "บางครั้งคุณอาจจะยืนกรานในความคิดของตัวเองหรือใจร้อนเกินไป สิ่งสำคัญคือต้องเรียนรู้ที่จะยืดหยุ่นและรับฟังผู้อื่นมากขึ้น",
        'zh-CN': "你有时可能过于自信或不耐烦。学会更灵活、倾听他人是很重要的。",
        'zh-TW': "你有時可能過於自信或不耐煩。學會更靈活、傾聽他人是很重要的。"
      },
      career: { 
        en: "You are well-suited for careers in planning, education, and creative industries where your forward-thinking nature can shine.", 
        ko: "당신의 미래 지향적인 성격이 빛을 발할 수 있는 기획, 교육, 창조 산업 분야의 직업에 잘 어울립니다.",
        de: "Sie eignen sich gut für Karrieren in den Bereichen Planung, Bildung und Kreativwirtschaft, in denen Ihre zukunftsorientierte Natur glänzen kann.",
        es: "Eres muy adecuado para carreras en planificación, educación e industrias creativas donde tu naturaleza progresista puede brillar.",
        fr: "Vous êtes bien adapté aux carrières dans la planification, l'éducation et les industries créatives où votre nature avant-gardiste peut briller.",
        id: "Anda sangat cocok untuk karir di bidang perencanaan, pendidikan, dan industri kreatif di mana sifat berpikiran maju Anda dapat bersinar.",
        it: "Sei adatto a carriere nella pianificazione, nell'istruzione e nelle industrie creative in cui la tua natura lungimirante può brillare.",
        ja: "あなたの先進的な性質が輝くことができる、企画、教育、創造的な産業でのキャリアに適しています。",
        pt: "Você é adequado para carreiras em planejamento, educação e indústrias criativas, onde sua natureza progressista pode brilhar.",
        ru: "Вы хорошо подходите для карьеры в области планирования, образования и творческих отраслей, где ваша дальновидность может проявиться.",
        th: "คุณเหมาะกับอาชีพในสายงานการวางแผน การศึกษา และอุตสาหกรรมสร้างสรรค์ ซึ่งธรรมชาติที่มองการณ์ไกลของคุณจะโดดเด่น",
        'zh-CN': "你非常适合在规划、教育和创意产业等领域发展，在这些领域，你具有前瞻性的天性可以大放异彩。",
        'zh-TW': "你非常適合在規劃、教育和創意產業等領域發展，在這些領域，你具有前瞻性的天性可以大放異彩。"
      },
      love: { 
        en: "In relationships, you are active and sincere, but be careful not to impose your own way too much.", 
        ko: "연애에 있어 적극적이고 진솔하지만, 자신의 방식을 너무 강요하지 않도록 주의해야 합니다.",
        de: "In Beziehungen sind Sie aktiv und aufrichtig, aber achten Sie darauf, Ihren eigenen Weg nicht zu sehr aufzuzwingen.",
        es: "En las relaciones, eres activo y sincero, pero ten cuidado de no imponer demasiado tu propia forma de ser.",
        fr: "Dans les relations, vous êtes actif et sincère, mais veillez à ne pas trop imposer votre propre façon de faire.",
        id: "Dalam hubungan, Anda aktif dan tulus, tetapi berhati-hatilah untuk tidak terlalu memaksakan cara Anda sendiri.",
        it: "Nelle relazioni, sei attivo e sincero, ma fai attenzione a non imporre troppo il tuo modo di fare.",
        ja: "恋愛関係においては、あなたは積極的で誠実ですが、自分のやり方をあまり押し付けすぎないように注意してください。",
        pt: "Nos relacionamentos, você é ativo e sincero, mas tome cuidado para não impor demais o seu próprio jeito.",
        ru: "В отношениях вы активны и искренни, но будьте осторожны, чтобы не навязывать слишком сильно свой собственный путь.",
        th: "ในความสัมพันธ์ คุณเป็นคนกระตือรือร้นและจริงใจ แต่ระวังอย่าบังคับใจตัวเองมากเกินไป",
        'zh-CN': "在恋爱关系中，你积极而真诚，但要注意不要过多地强加自己的方式。",
        'zh-TW': "在戀愛關係中，你積極而真誠，但要注意不要過多地強加自己的方式。"
      },
      health: { 
        en: "Pay attention to the health of your liver and gallbladder. It is good to relieve stress through activities in nature.", 
        ko: "간과 담낭 건강에 주의를 기울이세요. 자연 속에서의 활동으로 스트레스를 해소하는 것이 좋습니다.",
        de: "Achten Sie auf die Gesundheit Ihrer Leber und Gallenblase. Es ist gut, Stress durch Aktivitäten in der Natur abzubauen.",
        es: "Presta atención a la salud de tu hígado y vesícula biliar. Es bueno aliviar el estrés a través de actividades en la naturaleza.",
        fr: "Faites attention à la santé de votre foie et de votre vésicule biliaire. Il est bon de soulager le stress par des activités dans la nature.",
        id: "Perhatikan kesehatan hati dan kantong empedu Anda. Baik untuk menghilangkan stres melalui aktivitas di alam.",
        it: "Presta attenzione alla salute del fegato e della cistifellea. È bene alleviare lo stress attraverso attività nella natura.",
        ja: "肝臓と胆嚢の健康に注意してください。自然の中での活動を通じてストレスを解消するのが良いでしょう。",
        pt: "Preste atenção à saúde do seu fígado e vesícula biliar. É bom aliviar o estresse através de atividades na natureza.",
        ru: "Обратите внимание на здоровье печени и желчного пузыря. Хорошо снимать стресс с помощью занятий на природе.",
        th: "ใส่ใจสุขภาพตับและถุงน้ำดีของคุณ การทำกิจกรรมในธรรมชาติจะช่วยคลายความเครียดได้ดี",
        'zh-CN': "注意肝脏和胆囊的健康。通过在大自然中活动来缓解压力是很好的。",
        'zh-TW': "注意肝臟和膽囊的健康。通過在大自然中活動來緩解壓力是很好的。"
      },
      wealth: { 
        en: "Your wealth grows through continuous challenges and new ventures. Avoid hasty decisions and manage your assets with a long-term perspective.", 
        ko: "재물은 끊임없는 도전과 새로운 시도를 통해 성장합니다. 성급한 결정을 피하고 장기적인 안목으로 자산을 관리하세요.",
        de: "Ihr Vermögen wächst durch kontinuierliche Herausforderungen und neue Unternehmungen. Vermeiden Sie überstürzte Entscheidungen und verwalten Sie Ihr Vermögen mit einer langfristigen Perspektive.",
        es: "Tu riqueza crece a través de desafíos continuos y nuevas empresas. Evita las decisiones precipitadas y gestiona tus activos con una perspectiva a largo plazo.",
        fr: "Votre richesse croît grâce à des défis continus et à de nouvelles entreprises. Évitez les décisions hâtives et gérez vos actifs dans une perspective à long terme.",
        id: "Kekayaan Anda tumbuh melalui tantangan berkelanjutan dan usaha baru. Hindari keputusan yang tergesa-gesa dan kelola aset Anda dengan perspektif jangka panjang.",
        it: "La tua ricchezza cresce attraverso sfide continue e nuove iniziative. Evita decisioni affrettate e gestisci i tuoi beni con una prospettiva a lungo termine.",
        ja: "あなたの富は、継続的な挑戦と新しいベンチャーを通じて成長します。性急な決定を避け、長期的な視点で資産を管理してください。",
        pt: "Sua riqueza cresce através de desafios contínuos e novos empreendimentos. Evite decisões precipitadas e gerencie seus ativos com uma perspectiva de longo prazo.",
        ru: "Ваше богатство растет благодаря постоянным вызовам и новым предприятиям. Избегайте поспешных решений и управляйте своими активами с долгосрочной перспективой.",
        th: "ความมั่งคั่งของคุณเติบโตผ่านความท้าทายอย่างต่อเนื่องและการลงทุนใหม่ๆ หลีกเลี่ยงการตัดสินใจที่เร่งรีบและจัดการทรัพย์สินของคุณด้วยมุมมองระยะยาว",
        'zh-CN': "你的财富通过不断的挑战和新的冒险而增长。避免草率的决定，并以长远的眼光管理你的资产。",
        'zh-TW': "你的財富通過不斷的挑戰和新的冒險而增長。避免草率的決定，並以長遠的眼光管理你的資產。"
      },
      advice: { 
        en: "Embrace flexibility and cooperation. Your potential will be fully realized when your creativity meets harmony.", 
        ko: "유연함과 협력의 자세를 받아들이세요. 당신의 창의성이 조화를 만날 때 잠재력이 온전히 발휘될 것입니다.",
        de: "Umfassen Sie Flexibilität und Zusammenarbeit. Ihr Potenzial wird voll ausgeschöpft, wenn Ihre Kreativität auf Harmonie trifft.",
        es: "Abraza la flexibilidad y la cooperación. Tu potencial se realizará plenamente cuando tu creatividad se encuentre con la armonía.",
        fr: "Adoptez la flexibilité et la coopération. Votre potentiel sera pleinement réalisé lorsque votre créativité rencontrera l'harmonie.",
        id: "Rangkullah fleksibilitas dan kerja sama. Potensi Anda akan terwujud sepenuhnya ketika kreativitas Anda bertemu dengan harmoni.",
        it: "Abbraccia la flessibilità e la cooperazione. Il tuo potenziale sarà pienamente realizzato quando la tua creatività incontrerà l'armonia.",
        ja: "柔軟性と協力を受け入れてください。あなたの創造性が調和と出会うとき、あなたの可能性は完全に実現されます。",
        pt: "Abrace a flexibilidade e a cooperação. Seu potencial será totalmente realizado quando sua criatividade encontrar a harmonia.",
        ru: "Примите гибкость и сотрудничество. Ваш потенциал будет полностью реализован, когда ваше творчество встретится с гармонией.",
        th: "ยอมรับความยืดหยุ่นและความร่วมมือ ศักยภาพของคุณจะถูกปลดปล่อยออกมาอย่างเต็มที่เมื่อความคิดสร้างสรรค์ของคุณมาบรรจบกับความสามัคคี",
        'zh-CN': "拥抱灵活性与合作。当你的创造力与和谐相遇时，你的潜力将得到充分实现。",
        'zh-TW': "擁抱靈活性與合作。當你的創造力與和諧相遇時，你的潛力將得到充分實現。"
      }
    },
    fire: {
      personality: { 
        en: "Full of passion and energy, you have a cheerful and sociable personality that brightens your surroundings.", 
        ko: "열정과 에너지가 넘치며, 명랑하고 사교적인 성격으로 주변을 밝게 만드는 사람입니다.",
        de: "Voller Leidenschaft und Energie haben Sie eine fröhliche und gesellige Persönlichkeit, die Ihre Umgebung erhellt.",
        es: "Lleno de pasión y energía, tienes una personalidad alegre y sociable que ilumina tu entorno.",
        fr: "Plein de passion et d'énergie, vous avez une personnalité joyeuse et sociable qui illumine votre entourage.",
        id: "Penuh gairah dan energi, Anda memiliki kepribadian yang ceria dan mudah bergaul yang mencerahkan lingkungan Anda.",
        it: "Pieno di passione ed energia, hai una personalità allegra e socievole che illumina l'ambiente circostante.",
        ja: "情熱とエネルギーに満ち、陽気で社交的な性格で、周囲を明るくします。",
        pt: "Cheio de paixão e energia, você tem uma personalidade alegre e sociável que ilumina o ambiente ao seu redor.",
        ru: "Полный страсти и энергии, у вас веселый и общительный характер, который освещает ваше окружение.",
        th: "เต็มไปด้วยความหลงใหลและพลังงาน คุณมีบุคลิกที่ร่าเริงและเข้ากับคนง่ายซึ่งทำให้สภาพแวดล้อมของคุณสดใสขึ้น",
        'zh-CN': "你充满激情和活力，性格开朗、善于交际，能照亮周围的环境。",
        'zh-TW': "你充滿激情和活力，性格開朗、善於交際，能照亮周圍的環境。"
      },
      strengths: { 
        en: "Your greatest strengths are your strong drive, sociability, and artistic sense. You are good at leading others and creating a positive atmosphere.", 
        ko: "강한 추진력과 사교성, 예술적 감각이 가장 큰 장점입니다. 다른 사람을 이끌고 긍정적인 분위기를 만드는 데 능숙합니다.",
        de: "Ihre größten Stärken sind Ihr starker Antrieb, Ihre Geselligkeit und Ihr künstlerischer Sinn. Sie sind gut darin, andere zu führen und eine positive Atmosphäre zu schaffen.",
        es: "Tus mayores fortalezas son tu fuerte impulso, sociabilidad y sentido artístico. Eres bueno para liderar a otros y crear una atmósfera positiva.",
        fr: "Vos plus grandes forces sont votre forte motivation, votre sociabilité et votre sens artistique. Vous êtes doué pour diriger les autres et créer une atmosphère positive.",
        id: "Kekuatan terbesar Anda adalah dorongan kuat, kemampuan bersosialisasi, dan selera artistik Anda. Anda pandai memimpin orang lain dan menciptakan suasana positif.",
        it: "I tuoi più grandi punti di forza sono la tua forte spinta, la socievolezza e il senso artistico. Sei bravo a guidare gli altri e a creare un'atmosfera positiva.",
        ja: "あなたの最大の強みは、強い意欲、社交性、そして芸術的センスです。あなたは他人を導き、前向きな雰囲気を作り出すのが得意です。",
        pt: "Suas maiores forças são seu forte impulso, sociabilidade e senso artístico. Você é bom em liderar os outros e criar uma atmosfera positiva.",
        ru: "Ваши самые большие сильные стороны - это ваша сильная воля, общительность и художественный вкус. Вы хорошо умеете вести за собой других и создавать позитивную атмосферу.",
        th: "จุดแข็งที่ยิ่งใหญ่ที่สุดของคุณคือแรงผลักดันที่แข็งแกร่ง การเข้าสังคม และรสนิยมทางศิลปะ คุณเก่งในการเป็นผู้นำผู้อื่นและสร้างบรรยากาศเชิงบวก",
        'zh-CN': "你最大的优点是强大的动力、社交能力和艺术感。你善于领导他人，营造积极的氛围。",
        'zh-TW': "你最大的優點是強大的動力、社交能力和藝術感。你善於領導他人，營造積極的氛圍。"
      },
      weaknesses: { 
        en: "You can be impulsive and easily get tired of things. It is necessary to cultivate patience and take responsibility for your words and actions.", 
        ko: "다소 충동적이고 쉽게 싫증을 느낄 수 있습니다. 인내심을 기르고 자신의 말과 행동에 책임을 지는 자세가 필요합니다.",
        de: "Sie können impulsiv sein und sich leicht langweilen. Es ist notwendig, Geduld zu kultivieren und Verantwortung für Ihre Worte und Taten zu übernehmen.",
        es: "Puedes ser impulsivo y cansarte fácilmente de las cosas. Es necesario cultivar la paciencia y asumir la responsabilidad de tus palabras y acciones.",
        fr: "Vous pouvez être impulsif et vous lasser facilement des choses. Il est nécessaire de cultiver la patience et de prendre la responsabilité de vos paroles et de vos actes.",
        id: "Anda bisa menjadi impulsif dan mudah bosan dengan banyak hal. Penting untuk menumbuhkan kesabaran dan bertanggung jawab atas perkataan dan tindakan Anda.",
        it: "Puoi essere impulsivo e stancarti facilmente delle cose. È necessario coltivare la pazienza e assumersi la responsabilità delle proprie parole e azioni.",
        ja: "あなたは衝動的で、物事に飽きやすいことがあります。忍耐力を養い、自分の言動に責任を持つことが必要です。",
        pt: "Você pode ser impulsivo e se cansar facilmente das coisas. É necessário cultivar a paciência e assumir a responsabilidade por suas palavras e ações.",
        ru: "Вы можете быть импульсивны и легко уставать от вещей. Необходимо развивать терпение и брать на себя ответственность за свои слова и поступки.",
        th: "คุณอาจเป็นคนหุนหันพลันแล่นและเบื่อง่าย จำเป็นต้องฝึกฝนความอดทนและรับผิดชอบต่อคำพูดและการกระทำของคุณ",
        'zh-CN': "你可能会冲动，容易对事物感到厌倦。有必要培养耐心，并对自己的言行负责。",
        'zh-TW': "你可能會衝動，容易對事物感到厭倦。有必要培養耐心，並對自己的言行負責。"
      },
      career: { 
        en: "You are suited for careers in broadcasting, entertainment, and design, where you can fully express your passion and creativity.", 
        ko: "자신의 열정과 창의성을 마음껏 발휘할 수 있는 방송, 연예, 디자인 분야의 직업이 잘 어울립니다.",
        de: "Sie eignen sich für Karrieren in den Bereichen Rundfunk, Unterhaltung und Design, in denen Sie Ihre Leidenschaft und Kreativität voll zum Ausdruck bringen können.",
        es: "Eres adecuado para carreras en radiodifusión, entretenimiento y diseño, donde puedes expresar plenamente tu pasión y creatividad.",
        fr: "Vous êtes apte à des carrières dans la radiodiffusion, le divertissement et le design, où vous pouvez exprimer pleinement votre passion et votre créativité.",
        id: "Anda cocok untuk karir di bidang penyiaran, hiburan, dan desain, di mana Anda dapat sepenuhnya mengekspresikan hasrat dan kreativitas Anda.",
        it: "Sei adatto a carriere nel settore radiotelevisivo, dell'intrattenimento e del design, dove puoi esprimere appieno la tua passione e creatività.",
        ja: "あなたは、放送、エンターテイメント、デザインなどのキャリアに向いており、情熱と創造性を存分に発揮できます。",
        pt: "Você é adequado para carreiras em radiodifusão, entretenimento e design, onde pode expressar plenamente sua paixão e criatividade.",
        ru: "Вы подходите для карьеры в сфере вещания, развлечений и дизайна, где вы можете полностью выразить свою страсть и творчество.",
        th: "คุณเหมาะกับอาชีพในสายงานการกระจายเสียง ความบันเทิง และการออกแบบ ซึ่งคุณสามารถแสดงความหลงใหลและความคิดสร้างสรรค์ของคุณได้อย่างเต็มที่",
        'zh-CN': "你适合从事广播、娱乐和设计等职业，在这些领域你可以充分表达你的热情和创造力。",
        'zh-TW': "你適合從事廣播、娛樂和設計等職業，在這些領域你可以充分表達你的熱情和創造力。"
      },
      love: { 
        en: "You are passionate and romantic in love. However, be careful as your fluctuating emotions can sometimes make your partner feel tired.", 
        ko: "사랑에 있어 화려하고 낭만적인 모습을 보입니다. 다만, 감정 기복이 때로 상대방을 지치게 할 수 있으니 주의가 필요합니다.",
        de: "Sie sind leidenschaftlich und romantisch in der Liebe. Seien Sie jedoch vorsichtig, da Ihre schwankenden Emotionen Ihren Partner manchmal müde machen können.",
        es: "Eres apasionado y romántico en el amor. Sin embargo, ten cuidado, ya que tus emociones fluctuantes a veces pueden hacer que tu pareja se sienta cansada.",
        fr: "Vous êtes passionné et romantique en amour. Cependant, soyez prudent car vos émotions fluctuantes peuvent parfois fatiguer votre partenaire.",
        id: "Anda bergairah dan romantis dalam cinta. Namun, berhati-hatilah karena emosi Anda yang berfluktuasi terkadang dapat membuat pasangan Anda merasa lelah.",
        it: "Sei passionale e romantico in amore. Tuttavia, fai attenzione perché le tue emozioni fluttuanti a volte possono far sentire il tuo partner stanco.",
        ja: "あなたは恋に情熱的でロマンチックです。しかし、あなたの感情の起伏がパートナーを疲れさせてしまうことがあるので注意が必要です。",
        pt: "Você é apaixonado e romântico no amor. No entanto, tenha cuidado, pois suas emoções flutuantes às vezes podem deixar seu parceiro cansado.",
        ru: "Вы страстны и романтичны в любви. Однако будьте осторожны, так как ваши колеблющиеся эмоции иногда могут утомлять вашего партнера.",
        th: "คุณเป็นคนโรแมนติกและหลงใหลในความรัก อย่างไรก็ตาม ระวังว่าอารมณ์ที่แปรปรวนของคุณอาจทำให้คนรักของคุณรู้สึกเหนื่อยได้ในบางครั้ง",
        'zh-CN': "你在爱情中充满激情和浪漫。但要小心，因为你波动的情绪有时会让你的伴侣感到疲惫。",
        'zh-TW': "你在愛情中充滿激情和浪漫。但要小心，因為你波動的情緒有時會讓你的伴侶感到疲憊。"
      },
      health: { 
        en: "Be mindful of your heart and small intestine health. It is important to manage your energy well and get enough rest.", 
        ko: "심장과 소장 건강에 유의해야 합니다. 에너지를 잘 관리하고 충분한 휴식을 취하는 것이 중요합니다.",
        de: "Achten Sie auf die Gesundheit Ihres Herzens und Dünndarms. Es ist wichtig, Ihre Energie gut zu verwalten und sich ausreichend auszuruhen.",
        es: "Ten en cuenta la salud de tu corazón e intestino delgado. Es importante gestionar bien tu energía y descansar lo suficiente.",
        fr: "Soyez attentif à la santé de votre cœur et de votre intestin grêle. Il est important de bien gérer votre énergie et de vous reposer suffisamment.",
        id: "Perhatikan kesehatan jantung dan usus kecil Anda. Penting untuk mengelola energi Anda dengan baik dan cukup istirahat.",
        it: "Sii consapevole della salute del tuo cuore e del tuo intestino tenue. È importante gestire bene la tua energia e riposare a sufficienza.",
        ja: "心臓と小腸の健康に注意してください。エネルギーをうまく管理し、十分な休息をとることが重要です。",
        pt: "Esteja atento à saúde do seu coração e intestino delgado. É importante gerenciar bem sua energia e descansar o suficiente.",
        ru: "Следите за здоровьем сердца и тонкого кишечника. Важно хорошо управлять своей энергией и достаточно отдыхать.",
        th: "ใส่ใจสุขภาพหัวใจและลำไส้เล็กของคุณ สิ่งสำคัญคือต้องจัดการพลังงานของคุณให้ดีและพักผ่อนให้เพียงพอ",
        'zh-CN': "注意心脏和小肠的健康。管理好精力并获得充足的休息非常重要。",
        'zh-TW': "注意心臟和小腸的健康。管理好精力並獲得充足的休息非常重要。"
      },
      wealth: { 
        en: "Wealth can be achieved in a short period with your unique ideas, but your spending is also significant, so you need a systematic financial plan.", 
        ko: "독창적인 아이디어로 단기간에 재물을 이룰 수 있지만, 씀씀이가 커서 체계적인 재물 계획이 필요합니다.",
        de: "Mit Ihren einzigartigen Ideen kann in kurzer Zeit Wohlstand erreicht werden, aber Ihre Ausgaben sind auch erheblich, daher benötigen Sie einen systematischen Finanzplan.",
        es: "La riqueza se puede lograr en un corto período con tus ideas únicas, pero tus gastos también son significativos, por lo que necesitas un plan financiero sistemático.",
        fr: "La richesse peut être atteinte en peu de temps avec vos idées uniques, mais vos dépenses sont également importantes, vous avez donc besoin d'un plan financier systématique.",
        id: "Kekayaan dapat dicapai dalam waktu singkat dengan ide-ide unik Anda, tetapi pengeluaran Anda juga signifikan, jadi Anda memerlukan rencana keuangan yang sistematis.",
        it: "La ricchezza può essere raggiunta in un breve periodo con le tue idee uniche, ma anche le tue spese sono significative, quindi hai bisogno di un piano finanziario sistematico.",
        ja: "あなたのユニークなアイデアで短期間で富を築くことができますが、支出も多いため、体系的な財務計画が必要です。",
        pt: "A riqueza pode ser alcançada em um curto período com suas ideias únicas, mas seus gastos também são significativos, então você precisa de um plano financeiro sistemático.",
        ru: "Богатство можно достичь за короткий период с вашими уникальными идеями, но ваши расходы также значительны, поэтому вам нужен систематический финансовый план.",
        th: "ความมั่งคั่งสามารถเกิดขึ้นได้ในระยะเวลาอันสั้นด้วยความคิดที่ไม่เหมือนใครของคุณ แต่การใช้จ่ายของคุณก็มีความสำคัญเช่นกัน ดังนั้นคุณจึงต้องมีแผนทางการเงินที่เป็นระบบ",
        'zh-CN': "凭借你独特的想法，可以在短时间内实现财富，但你的支出也很可观，因此你需要一个系统的财务计划。",
        'zh-TW': "憑藉你獨特的想法，可以在短時間內實現財富，但你的支出也很可觀，因此你需要一個系統的財務計劃。"
      },
      advice: { 
        en: "Learn to control your passion and cultivate inner stability. True success comes when passion is accompanied by responsibility.", 
        ko: "뜨거운 열정을 조절하고 내면의 안정감을 기르는 법을 배우세요. 책임감이 동반될 때 진정한 성공이 찾아옵니다.",
        de: "Lernen Sie, Ihre Leidenschaft zu kontrollieren und innere Stabilität zu kultivieren. Wahrer Erfolg stellt sich ein, wenn Leidenschaft von Verantwortung begleitet wird.",
        es: "Aprende a controlar tu pasión y a cultivar la estabilidad interior. El verdadero éxito llega cuando la pasión va acompañada de responsabilidad.",
        fr: "Apprenez à contrôler votre passion et à cultiver la stabilité intérieure. Le vrai succès vient lorsque la passion s'accompagne de responsabilité.",
        id: "Belajarlah untuk mengendalikan hasrat Anda dan memupuk stabilitas batin. Kesuksesan sejati datang ketika hasrat diiringi dengan tanggung jawab.",
        it: "Impara a controllare la tua passione e a coltivare la stabilità interiore. Il vero successo arriva quando la passione è accompagnata dalla responsabilità.",
        ja: "あなたの情熱をコントロールし、内なる安定を育むことを学びましょう。情熱に責任が伴うとき、真の成功が訪れます。",
        pt: "Aprenda a controlar sua paixão e a cultivar a estabilidade interior. O verdadeiro sucesso vem quando a paixão é acompanhada de responsabilidade.",
        ru: "Научитесь контролировать свою страсть и развивать внутреннюю стабильность. Настоящий успех приходит, когда страсть сопровождается ответственностью.",
        th: "เรียนรู้ที่จะควบคุมความหลงใหลของคุณและปลูกฝังความมั่นคงภายใน ความสำเร็จที่แท้จริงจะเกิดขึ้นเมื่อความหลงใหลมาพร้อมกับความรับผิดชอบ",
        'zh-CN': "学会控制你的激情，培养内心的稳定。当激情与责任相伴时，真正的成功才会到来。",
        'zh-TW': "學會控制你的激情，培養內心的穩定。當激情與責任相伴時，真正的成功才會到來。"
      }
    },
    earth: {
      personality: { 
        en: "With a sincere and calm personality, you are trustworthy and give a sense of stability to those around you.", 
        ko: "성실하고 차분한 성품으로, 신뢰감이 깊고 주변 사람들에게 안정감을 주는 사람입니다.",
        de: "Mit einer aufrichtigen und ruhigen Persönlichkeit sind Sie vertrauenswürdig und geben Ihren Mitmenschen ein Gefühl der Stabilität.",
        es: "Con una personalidad sincera y tranquila, eres digno de confianza y das una sensación de estabilidad a quienes te rodean.",
        fr: "Avec une personnalité sincère et calme, vous êtes digne de confiance et donnez un sentiment de stabilité à votre entourage.",
        id: "Dengan kepribadian yang tulus dan tenang, Anda dapat dipercaya dan memberikan rasa stabilitas bagi orang-orang di sekitar Anda.",
        it: "Con una personalità sincera e calma, sei affidabile e dai un senso di stabilità a chi ti circonda.",
        ja: "誠実で穏やかな性格で、信頼でき、周りの人々に安定感を与えます。",
        pt: "Com uma personalidade sincera e calma, você é confiável e dá uma sensação de estabilidade às pessoas ao seu redor.",
        ru: "С искренним и спокойным характером вы заслуживаете доверия и даете ощущение стабильности окружающим.",
        th: "ด้วยบุคลิกที่จริงใจและสงบ คุณเป็นคนที่น่าเชื่อถือและให้ความรู้สึกมั่นคงแก่คนรอบข้าง",
        'zh-CN': "你性格真诚、沉稳，值得信赖，能给周围的人带来稳定感。",
        'zh-TW': "你性格真誠、沉穩，值得信賴，能給周圍的人帶來穩定感。"
      },
      strengths: { 
        en: "Your diligence, sense of responsibility, and tolerance are your greatest strengths. You mediate between people and create a harmonious environment.", 
        ko: "부지런함과 책임감, 그리고 포용력이 가장 큰 장점입니다. 사람들 사이를 중재하고 조화로운 환경을 만드는 역할을 합니다.",
        de: "Ihre Sorgfalt, Ihr Verantwortungsbewusstsein und Ihre Toleranz sind Ihre größten Stärken. Sie vermitteln zwischen Menschen und schaffen ein harmonisches Umfeld.",
        es: "Tu diligencia, sentido de la responsabilidad y tolerancia son tus mayores fortalezas. Medias entre las personas y creas un ambiente armonioso.",
        fr: "Votre diligence, votre sens des responsabilités et votre tolérance sont vos plus grandes forces. Vous servez de médiateur entre les gens et créez un environnement harmonieux.",
        id: "Ketekunan, rasa tanggung jawab, dan toleransi Anda adalah kekuatan terbesar Anda. Anda menengahi antara orang-orang dan menciptakan lingkungan yang harmonis.",
        it: "La tua diligenza, il tuo senso di responsabilità e la tua tolleranza sono i tuoi maggiori punti di forza. Fai da mediatore tra le persone e crei un ambiente armonioso.",
        ja: "あなたの勤勉さ、責任感、そして寛容さが最大の強みです。あなたは人々の間を取り持ち、調和のとれた環境を作り出します。",
        pt: "Sua diligência, senso de responsabilidade e tolerância são suas maiores forças. Você medeia entre as pessoas e cria um ambiente harmonioso.",
        ru: "Ваше усердие, чувство ответственности и терпимость - ваши самые большие сильные стороны. Вы выступаете посредником между людьми и создаете гармоничную обстановку.",
        th: "ความขยันหมั่นเพียร ความรับผิดชอบ และความอดทนเป็นจุดแข็งที่ยิ่งใหญ่ที่สุดของคุณ คุณเป็นสื่อกลางระหว่างผู้คนและสร้างสภาพแวดล้อมที่กลมกลืนกัน",
        'zh-CN': "你的勤奋、责任感和宽容是你最大的优点。你在人与人之间进行调解，营造和谐的环境。",
        'zh-TW': "你的勤奮、責任感和寬容是你最大的優點。你在人與人之間進行調解，營造和諧的環境。"
      },
      weaknesses: { 
        en: "You can be seen as inflexible and stubborn because you are cautious and conservative. Sometimes you need the courage to embrace change.", 
        ko: "신중하고 보수적인 성향 때문에 융통성이 없거나 고집이 세다는 인상을 줄 수 있습니다. 때로는 변화를 수용하는 용기가 필요합니다.",
        de: "Sie können als unflexibel und stur angesehen werden, weil Sie vorsichtig und konservativ sind. Manchmal braucht man den Mut, Veränderungen anzunehmen.",
        es: "Puedes ser visto como inflexible y terco porque eres cauteloso y conservador. A veces necesitas el coraje para aceptar el cambio.",
        fr: "Vous pouvez être perçu comme inflexible et têtu parce que vous êtes prudent et conservateur. Parfois, il faut du courage pour accepter le changement.",
        id: "Anda bisa dianggap tidak fleksibel dan keras kepala karena Anda berhati-hati dan konservatif. Terkadang Anda membutuhkan keberanian untuk menerima perubahan.",
        it: "Puoi essere visto come inflessibile e testardo perché sei cauto e conservatore. A volte hai bisogno del coraggio di abbracciare il cambiamento.",
        ja: "あなたは慎重で保守的であるため、柔軟性がなく頑固だと見なされることがあります。時には変化を受け入れる勇気が必要です。",
        pt: "Você pode ser visto como inflexível e teimoso porque é cauteloso e conservador. Às vezes, você precisa da coragem para abraçar a mudança.",
        ru: "Вас могут считать негибким и упрямым, потому что вы осторожны и консервативны. Иногда вам нужна смелость, чтобы принять перемены.",
        th: "คุณอาจถูกมองว่าไม่ยืดหยุ่นและดื้อรั้นเพราะคุณเป็นคนระมัดระวังและอนุรักษ์นิยม บางครั้งคุณต้องมีความกล้าที่จะยอมรับการเปลี่ยนแปลง",
        'zh-CN': "因为你谨慎保守，所以可能会被视为不灵活和固执。有时你需要勇气去拥抱变化。",
        'zh-TW': "因為你謹慎保守，所以可能會被視為不靈活和固執。有時你需要勇氣去擁抱變化。"
      },
      career: { 
        en: "You are suitable for stable professions such as real estate, agriculture, and public service, where your sincerity can shine.", 
        ko: "당신의 성실함이 빛을 발할 수 있는 부동산, 농업, 공직 등 안정적인 직업이 적합합니다.",
        de: "Sie eignen sich für stabile Berufe wie Immobilien, Landwirtschaft und den öffentlichen Dienst, in denen Ihre Aufrichtigkeit glänzen kann.",
        es: "Eres adecuado para profesiones estables como bienes raíces, agricultura y servicio público, donde tu sinceridad puede brillar.",
        fr: "Vous êtes apte à des professions stables telles que l'immobilier, l'agriculture et la fonction publique, où votre sincérité peut briller.",
        id: "Anda cocok untuk profesi yang stabil seperti real estat, pertanian, dan layanan publik, di mana ketulusan Anda dapat bersinar.",
        it: "Sei adatto a professioni stabili come il settore immobiliare, l'agricoltura e il servizio pubblico, dove la tua sincerità può brillare.",
        ja: "あなたの誠実さが輝く不動産、農業、公務員などの安定した職業に適しています。",
        pt: "Você é adequado para profissões estáveis, como imóveis, agricultura e serviço público, onde sua sinceridade pode brilhar.",
        ru: "Вы подходите для стабильных профессий, таких как недвижимость, сельское хозяйство и государственная служба, где ваша искренность может проявиться.",
        th: "คุณเหมาะกับอาชีพที่มั่นคง เช่น อสังหาริมทรัพย์ เกษตรกรรม และบริการสาธารณะ ซึ่งความจริงใจของคุณจะโดดเด่น",
        'zh-CN': "你适合从事房地产、农业和公共服务等稳定职业，在这些领域你的真诚可以大放异彩。",
        'zh-TW': "你適合從事房地產、農業和公共服務等穩定職業，在這些領域你的真誠可以大放異彩。"
      },
      love: { 
        en: "You pursue a stable and sincere relationship. You are a person who can give deep trust to your partner, but you may seem less expressive.", 
        ko: "안정적이고 진실한 관계를 추구합니다. 연인에게 깊은 신뢰를 줄 수 있는 사람이지만, 다소 표현이 부족해 보일 수 있습니다.",
        de: "Sie streben eine stabile und aufrichtige Beziehung an. Sie sind eine Person, die Ihrem Partner tiefes Vertrauen schenken kann, aber Sie scheinen möglicherweise weniger ausdrucksstark zu sein.",
        es: "Buscas una relación estable y sincera. Eres una persona que puede dar una profunda confianza a tu pareja, pero puedes parecer menos expresivo.",
        fr: "Vous recherchez une relation stable et sincère. Vous êtes une personne qui peut donner une profonde confiance à votre partenaire, mais vous pouvez paraître moins expressif.",
        id: "Anda mengejar hubungan yang stabil dan tulus. Anda adalah orang yang dapat memberikan kepercayaan yang dalam kepada pasangan Anda, tetapi Anda mungkin tampak kurang ekspresif.",
        it: "Persegui una relazione stabile e sincera. Sei una persona che può dare profonda fiducia al tuo partner, ma potresti sembrare meno espressivo.",
        ja: "あなたは安定した誠実な関係を追求します。あなたはパートナーに深い信頼を与えることができる人ですが、表現力に乏しいように見えるかもしれません。",
        pt: "Você busca um relacionamento estável e sincero. Você é uma pessoa que pode dar profunda confiança ao seu parceiro, mas pode parecer menos expressivo.",
        ru: "Вы стремитесь к стабильным и искренним отношениям. Вы человек, который может оказать глубокое доверие своему партнеру, но вы можете показаться менее выразительным.",
        th: "คุณแสวงหาความสัมพันธ์ที่มั่นคงและจริงใจ คุณเป็นคนที่สามารถให้ความไว้วางใจอย่างลึกซึ้งแก่คนรักของคุณได้ แต่คุณอาจดูเหมือนไม่ค่อยแสดงออก",
        'zh-CN': "你追求稳定而真诚的关系。你是一个能给伴侣带来深深信任的人，但你可能看起来不那么善于表达。",
        'zh-TW': "你追求穩定而真誠的關係。你是一個能給伴侶帶來深深信任的人，但你可能看起來不那麼善於表達。"
      },
      health: { 
        en: "Pay attention to your digestive system, especially the stomach and spleen. A regular diet and stress management are important.", 
        ko: "소화기 계통, 특히 위와 비장 건강에 주의하세요. 규칙적인 식습관과 스트레스 관리가 중요합니다.",
        de: "Achten Sie auf Ihr Verdauungssystem, insbesondere auf Magen und Milz. Eine regelmäßige Ernährung und Stressbewältigung sind wichtig.",
        es: "Presta atención a tu sistema digestivo, especialmente al estómago y al bazo. Una dieta regular y el manejo del estrés son importantes.",
        fr: "Faites attention à votre système digestif, en particulier à l'estomac et à la rate. Une alimentation régulière et la gestion du stress sont importantes.",
        id: "Perhatikan sistem pencernaan Anda, terutama lambung dan limpa. Diet teratur dan manajemen stres itu penting.",
        it: "Presta attenzione al tuo sistema digestivo, in particolare allo stomaco e alla milza. Una dieta regolare e la gestione dello stress sono importanti.",
        ja: "消化器系、特に胃と脾臓に注意してください。規則正しい食事とストレス管理が重要です。",
        pt: "Preste atenção ao seu sistema digestivo, especialmente ao estômago e ao baço. Uma dieta regular e o gerenciamento do estresse são importantes.",
        ru: "Обратите внимание на пищеварительную систему, особенно на желудок и селезенку. Важны регулярное питание и управление стрессом.",
        th: "ใส่ใจระบบย่อยอาหารของคุณ โดยเฉพาะกระเพาะอาหารและม้าม การรับประทานอาหารอย่างสม่ำเสมอและการจัดการความเครียดเป็นสิ่งสำคัญ",
        'zh-CN': "注意你的消化系统，尤其是胃和脾脏。规律的饮食和压力管理很重要。",
        'zh-TW': "注意你的消化系統，尤其是胃和脾臟。規律的飲食和壓力管理很重要。"
      },
      wealth: { 
        en: "You build wealth step by step through diligence and savings. You are more suited to long-term, stable investments than to speculation.", 
        ko: "성실함과 저축을 통해 차근차근 재물을 쌓아가는 타입입니다. 투기보다는 장기적이고 안정적인 투자에 더 적합합니다.",
        de: "Sie bauen Schritt für Schritt durch Fleiß und Sparen Wohlstand auf. Sie eignen sich eher für langfristige, stabile Investitionen als für Spekulationen.",
        es: "Construyes riqueza paso a paso a través de la diligencia y el ahorro. Eres más adecuado para inversiones estables a largo plazo que para la especulación.",
        fr: "Vous construisez votre patrimoine pas à pas grâce à la diligence et à l'épargne. Vous êtes plus apte aux investissements stables à long terme qu'à la spéculation.",
        id: "Anda membangun kekayaan selangkah demi selangkah melalui ketekunan dan tabungan. Anda lebih cocok untuk investasi jangka panjang yang stabil daripada spekulasi.",
        it: "Costruisci ricchezza passo dopo passo attraverso la diligenza e il risparmio. Sei più adatto a investimenti stabili a lungo termine che alla speculazione.",
        ja: "あなたは勤勉と貯蓄を通じて一歩一歩富を築きます。あなたは投機よりも長期的で安定した投資に適しています。",
        pt: "Você constrói riqueza passo a passo através da diligência e da poupança. Você é mais adequado para investimentos estáveis e de longo prazo do que para especulação.",
        ru: "Вы создаете богатство шаг за шагом благодаря усердию и сбережениям. Вы больше подходите для долгосрочных, стабильных инвестиций, чем для спекуляций.",
        th: "คุณสร้างความมั่งคั่งทีละขั้นตอนผ่านความขยันหมั่นเพียรและการออม คุณเหมาะกับการลงทุนระยะยาวที่มั่นคงมากกว่าการเก็งกำไร",
        'zh-CN': "你通过勤奋和储蓄一步步积累财富。你更适合长期、稳定的投资，而不是投机。",
        'zh-TW': "你通過勤奮和儲蓄一步步積累財富。你更適合長期、穩定的投資，而不是投機。"
      },
      advice: { 
        en: "Sometimes, you need to step out of your comfort zone and take on new challenges. Your potential is limitless when your stability meets new possibilities.", 
        ko: "가끔은 안전지대에서 벗어나 새로운 도전을 해보는 용기가 필요합니다. 당신의 안정감이 새로운 가능성을 만날 때 잠재력은 무한해집니다.",
        de: "Manchmal müssen Sie Ihre Komfortzone verlassen und neue Herausforderungen annehmen. Ihr Potenzial ist grenzenlos, wenn Ihre Stabilität auf neue Möglichkeiten trifft.",
        es: "A veces, necesitas salir de tu zona de confort y asumir nuevos desafíos. Tu potencial es ilimitado cuando tu estabilidad se encuentra con nuevas posibilidades.",
        fr: "Parfois, vous devez sortir de votre zone de confort et relever de nouveaux défis. Votre potentiel est illimité lorsque votre stabilité rencontre de nouvelles possibilités.",
        id: "Terkadang, Anda perlu keluar dari zona nyaman Anda dan menghadapi tantangan baru. Potensi Anda tidak terbatas ketika stabilitas Anda bertemu dengan kemungkinan-kemungkinan baru.",
        it: "A volte, devi uscire dalla tua zona di comfort e affrontare nuove sfide. Il tuo potenziale è illimitato quando la tua stabilità incontra nuove possibilità.",
        ja: "時には、快適ゾーンから出て新しい挑戦をすることが必要です。あなたの安定性が新しい可能性と出会うとき、あなたの可能性は無限大になります。",
        pt: "Às vezes, você precisa sair da sua zona de conforto e assumir novos desafios. Seu potencial é ilimitado quando sua estabilidade encontra novas possibilidades.",
        ru: "Иногда вам нужно выйти из своей зоны комфорта и принять новые вызовы. Ваш потенциал безграничен, когда ваша стабильность встречается с новыми возможностями.",
        th: "บางครั้งคุณต้องก้าวออกจากเขตสบายของคุณและรับความท้าทายใหม่ๆ ศักยภาพของคุณไร้ขีดจำกัดเมื่อความมั่นคงของคุณมาพบกับความเป็นไปได้ใหม่ๆ",
        'zh-CN': "有时，你需要走出舒适区，接受新的挑战。当你的稳定性与新的可能性相遇时，你的潜力是无限的。",
        'zh-TW': "有時，你需要走出舒適區，接受新的挑戰。當你的穩定性與新的可能性相遇時，你的潛力是無限的。"
      }
    },
    metal: {
      personality: { 
        en: "You have a strong sense of justice and principles, and you have a clear and decisive personality.", 
        ko: "정의감과 원칙이 뚜렷하며, 명확하고 결단력 있는 성격을 가지고 있습니다.",
        de: "Sie haben einen starken Sinn für Gerechtigkeit und Prinzipien und eine klare und entscheidungsfreudige Persönlichkeit.",
        es: "Tienes un fuerte sentido de la justicia y los principios, y tienes una personalidad clara y decidida.",
        fr: "Vous avez un sens aigu de la justice et des principes, et vous avez une personnalité claire et décisive.",
        id: "Anda memiliki rasa keadilan dan prinsip yang kuat, dan Anda memiliki kepribadian yang jelas dan tegas.",
        it: "Hai un forte senso della giustizia e dei principi e hai una personalità chiara e decisa.",
        ja: "あなたは正義感と原則が強く、明確で決断力のある性格をしています。",
        pt: "Você tem um forte senso de justiça e princípios, e tem uma personalidade clara e decidida.",
        ru: "У вас сильное чувство справедливости и принципов, и у вас ясный и решительный характер.",
        th: "คุณมีความยุติธรรมและหลักการที่แข็งแกร่ง และคุณมีบุคลิกที่ชัดเจนและเด็ดขาด",
        'zh-CN': "你具有强烈的正义感和原则性，性格清晰果断。",
        'zh-TW': "你具有強烈的正義感和原則性，性格清晰果斷。"
      },
      strengths: { 
        en: "Your strong willpower, sense of responsibility, and systematic thinking are your strengths. You have the ability to see things through to the end with precision.", 
        ko: "강한 의지력과 책임감, 체계적인 사고가 장점입니다. 맡은 일을 정확하게 끝까지 해내는 능력이 있습니다.",
        de: "Ihre starke Willenskraft, Ihr Verantwortungsbewusstsein und Ihr systematisches Denken sind Ihre Stärken. Sie haben die Fähigkeit, Dinge mit Präzision zu Ende zu bringen.",
        es: "Tu fuerte fuerza de voluntad, sentido de la responsabilidad y pensamiento sistemático son tus fortalezas. Tienes la capacidad de llevar las cosas hasta el final con precisión.",
        fr: "Votre forte volonté, votre sens des responsabilités et votre pensée systématique sont vos points forts. Vous avez la capacité de mener les choses à bien avec précision.",
        id: "Tekad kuat, rasa tanggung jawab, dan pemikiran sistematis Anda adalah kekuatan Anda. Anda memiliki kemampuan untuk menyelesaikan berbagai hal hingga tuntas dengan presisi.",
        it: "La tua forte forza di volontà, il senso di responsabilità e il pensiero sistematico sono i tuoi punti di forza. Hai la capacità di portare a termine le cose con precisione.",
        ja: "あなたの強い意志力、責任感、そして体系的な思考があなたの強みです。あなたは物事を正確に最後までやり遂げる能力を持っています。",
        pt: "Sua forte força de vontade, senso de responsabilidade e pensamento sistemático são seus pontos fortes. Você tem a capacidade de levar as coisas até o fim com precisão.",
        ru: "Ваша сильная сила воли, чувство ответственности и системное мышление - ваши сильные стороны. У вас есть способность доводить дело до конца с точностью.",
        th: "ความมุ่งมั่นที่แข็งแกร่ง ความรับผิดชอบ และการคิดอย่างเป็นระบบคือจุดแข็งของคุณ คุณมีความสามารถในการทำงานให้สำเร็จลุล่วงอย่างแม่นยำ",
        'zh-CN': "你强大的意志力、责任感和系统性思维是你的优势。你有能力精确地将事情进行到底。",
        'zh-TW': "你強大的意志力、責任感和系統性思維是你的優勢。你有能力精確地將事情進行到底。"
      },
      weaknesses: { 
        en: "You can be perceived as cold and overly critical because you are a perfectionist. You need to cultivate the flexibility to embrace others' mistakes.", 
        ko: "완벽주의적인 성향 때문에 냉정하고 비판적이라는 인상을 줄 수 있습니다. 타인의 실수를 너그럽게 포용하는 유연함을 기를 필요가 있습니다.",
        de: "Sie können als kalt und überkritisch wahrgenommen werden, weil Sie ein Perfektionist sind. Sie müssen die Flexibilität kultivieren, die Fehler anderer zu akzeptieren.",
        es: "Puedes ser percibido como frío y demasiado crítico porque eres un perfeccionista. Necesitas cultivar la flexibilidad para aceptar los errores de los demás.",
        fr: "Vous pouvez être perçu comme froid et trop critique parce que vous êtes perfectionniste. Vous devez cultiver la flexibilité pour accepter les erreurs des autres.",
        id: "Anda bisa dianggap dingin dan terlalu kritis karena Anda seorang perfeksionis. Anda perlu menumbuhkan fleksibilitas untuk menerima kesalahan orang lain.",
        it: "Puoi essere percepito come freddo ed eccessivamente critico perché sei un perfezionista. Devi coltivare la flessibilità per abbracciare gli errori degli altri.",
        ja: "あなたは完璧主義者であるため、冷たく過度に批判的だと認識されることがあります。他人の過ちを受け入れる柔軟性を養う必要があります。",
        pt: "Você pode ser percebido como frio e excessivamente crítico porque é um perfeccionista. Você precisa cultivar a flexibilidade para aceitar os erros dos outros.",
        ru: "Вас могут воспринимать как холодного и чрезмерно критичного, потому что вы перфекционист. Вам нужно развивать гибкость, чтобы принимать ошибки других.",
        th: "คุณอาจถูกมองว่าเย็นชาและวิจารณ์มากเกินไปเพราะคุณเป็นคนสมบูรณ์แบบ คุณต้องปลูกฝังความยืดหยุ่นเพื่อยอมรับความผิดพลาดของผู้อื่น",
        'zh-CN': "因为你是完美主义者，所以可能会被认为是冷漠和过于挑剔。你需要培养接受他人错误的灵活性。",
        'zh-TW': "因為你是完美主義者，所以可能會被認為是冷漠和過於挑剔。你需要培養接受他人錯誤的靈活性。"
      },
      career: { 
        en: "You are well-suited for professional fields such as finance, law, and the military, which require precision and a sense of responsibility.", 
        ko: "정확성과 책임감이 요구되는 금융, 법률, 군인 등 전문 분야에 잘 어울립니다.",
        de: "Sie eignen sich gut für Berufsfelder wie Finanzen, Recht und Militär, die Präzision und Verantwortungsbewusstsein erfordern.",
        es: "Eres muy adecuado para campos profesionales como las finanzas, el derecho y el ejército, que requieren precisión y sentido de la responsabilidad.",
        fr: "Vous êtes bien adapté aux domaines professionnels tels que la finance, le droit et l'armée, qui exigent de la précision et un sens des responsabilités.",
        id: "Anda sangat cocok untuk bidang profesional seperti keuangan, hukum, dan militer, yang membutuhkan ketelitian dan rasa tanggung jawab.",
        it: "Sei adatto a campi professionali come la finanza, la legge e l'esercito, che richiedono precisione e senso di responsabilità.",
        ja: "あなたは、正確さと責任感が求められる金融、法律、軍事などの専門分野に適しています。",
        pt: "Você é adequado para campos profissionais como finanças, direito e militar, que exigem precisão e senso de responsabilidade.",
        ru: "Вы хорошо подходите для профессиональных областей, таких как финансы, юриспруденция и военное дело, которые требуют точности и чувства ответственности.",
        th: "คุณเหมาะกับสายงานอาชีพ เช่น การเงิน กฎหมาย และการทหาร ซึ่งต้องการความแม่นยำและความรับผิดชอบ",
        'zh-CN': "你非常适合从事金融、法律和军事等专业领域，这些领域需要精确性和责任感。",
        'zh-TW': "你非常適合從事金融、法律和軍事等專業領域，這些領域需要精確性和責任感。"
      },
      love: { 
        en: "You are a person who keeps promises and shows a consistent appearance in relationships. However, you need to be careful not to hurt your partner with sharp words.", 
        ko: "연인 관계에 있어 약속을 잘 지키고 일관된 모습을 보여주는 사람입니다. 다만, 예리한 말로 상대방에게 상처를 주지 않도록 주의해야 합니다.",
        de: "Sie sind eine Person, die Versprechen hält und in Beziehungen ein beständiges Erscheinungsbild zeigt. Sie müssen jedoch aufpassen, dass Sie Ihren Partner nicht mit scharfen Worten verletzen.",
        es: "Eres una persona que cumple las promesas y muestra una apariencia consistente en las relaciones. Sin embargo, debes tener cuidado de no herir a tu pareja con palabras afiladas.",
        fr: "Vous êtes une personne qui tient ses promesses et montre une apparence cohérente dans les relations. Cependant, vous devez faire attention à ne pas blesser votre partenaire avec des mots tranchants.",
        id: "Anda adalah orang yang menepati janji dan menunjukkan penampilan yang konsisten dalam hubungan. Namun, Anda harus berhati-hati agar tidak menyakiti pasangan Anda dengan kata-kata tajam.",
        it: "Sei una persona che mantiene le promesse e mostra un aspetto coerente nelle relazioni. Tuttavia, devi stare attento a non ferire il tuo partner con parole taglienti.",
        ja: "あなたは約束を守り、人間関係において一貫した姿を見せる人です。ただし、鋭い言葉でパートナーを傷つけないように注意する必要があります。",
        pt: "Você é uma pessoa que cumpre promessas e mostra uma aparência consistente nos relacionamentos. No entanto, você precisa ter cuidado para não machucar seu parceiro com palavras afiadas.",
        ru: "Вы человек, который держит обещания и демонстрирует последовательность в отношениях. Однако вам нужно быть осторожным, чтобы не ранить своего партнера резкими словами.",
        th: "คุณเป็นคนที่รักษาสัญญาและแสดงออกอย่างสม่ำเสมอในความสัมพันธ์ อย่างไรก็ตาม คุณต้องระวังอย่าทำร้ายคนรักของคุณด้วยคำพูดที่คมคาย",
        'zh-CN': "你是一个信守承诺、在恋爱关系中表现始终如一的人。但你需要小心，不要用尖锐的言语伤害你的伴侣。",
        'zh-TW': "你是一個信守承諾、在戀愛關係中表現始終如一的人。但你需要小心，不要用尖銳的言語傷害你的伴侶。"
      },
      health: { 
        en: "Be careful with your respiratory system, including the lungs and large intestine. Maintaining a clean environment and a positive mindset is important.", 
        ko: "폐와 대장을 포함한 호흡기 계통에 주의가 필요합니다. 맑은 환경을 유지하고 긍정적인 마음을 갖는 것이 중요합니다.",
        de: "Seien Sie vorsichtig mit Ihrem Atmungssystem, einschließlich der Lunge und des Dickdarms. Die Aufrechterhaltung einer sauberen Umwelt und einer positiven Einstellung ist wichtig.",
        es: "Ten cuidado con tu sistema respiratorio, incluidos los pulmones y el intestino grueso. Mantener un ambiente limpio y una mentalidad positiva es importante.",
        fr: "Faites attention à votre système respiratoire, y compris les poumons et le gros intestin. Maintenir un environnement propre et un état d'esprit positif est important.",
        id: "Berhati-hatilah dengan sistem pernapasan Anda, termasuk paru-paru dan usus besar. Menjaga lingkungan yang bersih dan pola pikir positif itu penting.",
        it: "Fai attenzione al tuo sistema respiratorio, compresi i polmoni e l'intestino crasso. Mantenere un ambiente pulito e una mentalità positiva è importante.",
        ja: "肺や大腸を含む呼吸器系に注意してください。清潔な環境を維持し、前向きな考え方を持つことが重要です。",
        pt: "Tenha cuidado com o seu sistema respiratório, incluindo os pulmões e o intestino grosso. Manter um ambiente limpo e uma mentalidade positiva é importante.",
        ru: "Будьте осторожны с дыхательной системой, включая легкие и толстый кишечник. Важно поддерживать чистоту окружающей среды и позитивный настрой.",
        th: "ระวังระบบทางเดินหายใจของคุณ รวมถึงปอดและลำไส้ใหญ่ การรักษาสภาพแวดล้อมที่สะอาดและทัศนคติเชิงบวกเป็นสิ่งสำคัญ",
        'zh-CN': "注意你的呼吸系统，包括肺部和大小肠。保持清洁的环境和积极的心态很重要。",
        'zh-TW': "注意你的呼吸系統，包括肺部和大小腸。保持清潔的環境和積極的心態很重要。"
      },
      wealth: { 
        en: "You manage your wealth with precision and principles. You have the ability to achieve great wealth through rational judgment and strong drive.", 
        ko: "정확하고 원칙적으로 재물을 관리합니다. 합리적인 판단과 강한 추진력으로 큰 재물을 이룰 수 있는 능력이 있습니다.",
        de: "Sie verwalten Ihr Vermögen mit Präzision und Prinzipien. Sie haben die Fähigkeit, durch rationales Urteilsvermögen und starken Antrieb großen Reichtum zu erlangen.",
        es: "Gestionas tu patrimonio con precisión y principios. Tienes la capacidad de alcanzar una gran riqueza a través de un juicio racional y un fuerte impulso.",
        fr: "Vous gérez votre patrimoine avec précision et principes. Vous avez la capacité d'atteindre une grande richesse grâce à un jugement rationnel et à une forte motivation.",
        id: "Anda mengelola kekayaan Anda dengan presisi dan prinsip. Anda memiliki kemampuan untuk mencapai kekayaan besar melalui penilaian rasional dan dorongan yang kuat.",
        it: "Gestisci la tua ricchezza con precisione e principi. Hai la capacità di raggiungere una grande ricchezza attraverso un giudizio razionale e una forte spinta.",
        ja: "あなたは正確さと原則をもって富を管理します。あなたは合理的な判断と強い意欲によって大きな富を築く能力を持っています。",
        pt: "Você gerencia sua riqueza com precisão e princípios. Você tem a capacidade de alcançar grande riqueza através de julgamento racional e forte impulso.",
        ru: "Вы управляете своим богатством с точностью и принципами. У вас есть способность достичь большого богатства благодаря рациональному суждению и сильной воле.",
        th: "คุณจัดการความมั่งคั่งของคุณด้วยความแม่นยำและหลักการ คุณมีความสามารถในการบรรลุความมั่งคั่งอันยิ่งใหญ่ผ่านการตัดสินอย่างมีเหตุผลและแรงผลักดันที่แข็งแกร่ง",
        'zh-CN': "你以精确和原则来管理你的财富。你有能力通过理性的判断和强大的动力获得巨大的财富。",
        'zh-TW': "你以精確和原則來管理你的財富。你有能力通過理性的判斷和強大的動力獲得巨大的財富。"
      },
      advice: { 
        en: "Cultivate a warm heart and flexible thinking. Your justice will shine even brighter when it is based on empathy and understanding.", 
        ko: "따뜻한 마음과 유연한 사고를 기르세요. 당신의 정의로움이 공감과 이해를 바탕으로 할 때 더욱 빛을 발할 것입니다.",
        de: "Kultivieren Sie ein warmes Herz und flexibles Denken. Ihre Gerechtigkeit wird noch heller leuchten, wenn sie auf Empathie und Verständnis basiert.",
        es: "Cultiva un corazón cálido y un pensamiento flexible. Tu justicia brillará aún más cuando se base en la empatía y la comprensión.",
        fr: "Cultivez un cœur chaleureux et une pensée flexible. Votre justice brillera encore plus lorsqu'elle sera basée sur l'empathie et la compréhension.",
        id: "Kembangkan hati yang hangat dan pemikiran yang fleksibel. Keadilan Anda akan bersinar lebih terang jika didasarkan pada empati dan pengertian.",
        it: "Coltiva un cuore caldo e un pensiero flessibile. La tua giustizia brillerà ancora di più quando si baserà sull'empatia e sulla comprensione.",
        ja: "温かい心と柔軟な思考を養いましょう。あなたの正義は、共感と理解に基づいているときにさらに輝きます。",
        pt: "Cultive um coração caloroso e um pensamento flexível. Sua justiça brilhará ainda mais quando for baseada na empatia e na compreensão.",
        ru: "Развивайте теплое сердце и гибкое мышление. Ваша справедливость будет сиять еще ярче, когда она будет основана на сочувствии и понимании.",
        th: "ปลูกฝังหัวใจที่อบอุ่นและความคิดที่ยืดหยุ่น ความยุติธรรมของคุณจะเปล่งประกายยิ่งขึ้นเมื่อตั้งอยู่บนพื้นฐานของความเห็นอกเห็นใจและความเข้าใจ",
        'zh-CN': "培养一颗温暖的心和灵活的思维。当你的正义建立在同理心和理解之上时，它会更加闪耀。",
        'zh-TW': "培養一顆溫暖的心和靈活的思維。當你的正義建立在同理心和理解之上時，它會更加閃耀。"
      }
    },
    water: {
      personality: { 
        en: "You are wise and intuitive, with a gentle and adaptable personality. You have a deep inner world and are good at understanding others' feelings.", 
        ko: "지혜롭고 직관력이 뛰어나며, 부드럽고 적응력이 강한 성격입니다. 깊은 내면세계를 가지고 있으며, 타인의 마음을 잘 헤아립니다.",
        de: "Sie sind weise und intuitiv, mit einer sanften und anpassungsfähigen Persönlichkeit. Sie haben eine tiefe innere Welt und sind gut darin, die Gefühle anderer zu verstehen.",
        es: "Eres sabio e intuitivo, con una personalidad gentil y adaptable. Tienes un mundo interior profundo y eres bueno para comprender los sentimientos de los demás.",
        fr: "Vous êtes sage et intuitif, avec une personnalité douce et adaptable. Vous avez un monde intérieur profond et êtes doué pour comprendre les sentiments des autres.",
        id: "Anda bijaksana dan intuitif, dengan kepribadian yang lembut dan mudah beradaptasi. Anda memiliki dunia batin yang dalam dan pandai memahami perasaan orang lain.",
        it: "Sei saggio e intuitivo, con una personalità gentile e adattabile. Hai un profondo mondo interiore e sei bravo a capire i sentimenti degli altri.",
        ja: "あなたは賢く直感的で、優しく順応性のある性格です。あなたは深い内なる世界を持っており、他人の気持ちを理解するのが得意です。",
        pt: "Você é sábio e intuitivo, com uma personalidade gentil e adaptável. Você tem um mundo interior profundo e é bom em entender os sentimentos dos outros.",
        ru: "Вы мудры и интуитивны, с нежным и адаптивным характером. У вас глубокий внутренний мир, и вы хорошо понимаете чувства других.",
        th: "คุณเป็นคนฉลาดและมีสัญชาตญาณ มีบุคลิกที่อ่อนโยนและปรับตัวได้ คุณมีโลกภายในที่ลึกซึ้งและเก่งในการเข้าใจความรู้สึกของผู้อื่น",
        'zh-CN': "你聪明、直觉敏锐，性格温和、适应能力强。你内心世界深邃，善于理解他人的感受。",
        'zh-TW': "你聰明、直覺敏銳，性格溫和、適應能力強。你內心世界深邃，善於理解他人的感受。"
      },
      strengths: { 
        en: "Your adaptability, insight, and communication skills are your strengths. You are flexible in your thinking and have the ability to solve problems wisely.", 
        ko: "상황 대처 능력과 통찰력, 그리고 소통 능력이 장점입니다. 생각이 유연하고 문제를 지혜롭게 해결하는 능력이 있습니다.",
        de: "Ihre Anpassungsfähigkeit, Einsicht und Kommunikationsfähigkeiten sind Ihre Stärken. Sie sind flexibel im Denken und haben die Fähigkeit, Probleme weise zu lösen.",
        es: "Tu adaptabilidad, perspicacia y habilidades de comunicación son tus fortalezas. Eres flexible en tu pensamiento y tienes la capacidad de resolver problemas sabiamente.",
        fr: "Votre adaptabilité, votre perspicacité et vos compétences en communication sont vos points forts. Vous êtes flexible dans votre pensée et avez la capacité de résoudre les problèmes avec sagesse.",
        id: "Kemampuan beradaptasi, wawasan, dan keterampilan komunikasi Anda adalah kekuatan Anda. Anda fleksibel dalam berpikir dan memiliki kemampuan untuk memecahkan masalah dengan bijak.",
        it: "La tua adattabilità, intuizione e capacità di comunicazione sono i tuoi punti di forza. Sei flessibile nel tuo pensiero e hai la capacità di risolvere i problemi con saggezza.",
        ja: "あなたの適応性、洞察力、そしてコミュニケーション能力があなたの強みです。あなたは思考が柔軟で、問題を賢く解決する能力を持っています。",
        pt: "Sua adaptabilidade, percepção e habilidades de comunicação são seus pontos fortes. Você é flexível em seu pensamento e tem a capacidade de resolver problemas com sabedoria.",
        ru: "Ваша приспособляемость, проницательность и коммуникативные навыки - ваши сильные стороны. Вы гибки в мышлении и обладаете способностью мудро решать проблемы.",
        th: "ความสามารถในการปรับตัว ความเข้าใจ และทักษะการสื่อสารคือจุดแข็งของคุณ คุณมีความคิดที่ยืดหยุ่นและมีความสามารถในการแก้ปัญหาอย่างชาญฉลาด",
        'zh-CN': "你的适应能力、洞察力和沟通能力是你的优势。你思维灵活，有能力明智地解决问题。",
        'zh-TW': "你的適應能力、洞察力和溝通能力是你的優勢。你思維靈活，有能力明智地解決問題。"
      },
      weaknesses: { 
        en: "You can easily fall into indecisiveness or depression. You need the determination to put your thoughts into action and a positive mindset.", 
        ko: "결단력이 부족하거나 우울감에 쉽게 빠질 수 있습니다. 생각을 행동으로 옮기는 결단력과 긍정적인 마음가짐이 필요합니다.",
        de: "Sie können leicht in Unentschlossenheit oder Depression verfallen. Sie brauchen die Entschlossenheit, Ihre Gedanken in die Tat umzusetzen, und eine positive Einstellung.",
        es: "Puedes caer fácilmente en la indecisión o la depresión. Necesitas la determinación para poner tus pensamientos en acción y una mentalidad positiva.",
        fr: "Vous pouvez facilement tomber dans l'indécision ou la dépression. Vous avez besoin de la détermination pour mettre vos pensées en action et d'un état d'esprit positif.",
        id: "Anda bisa dengan mudah jatuh ke dalam keraguan atau depresi. Anda membutuhkan tekad untuk mewujudkan pikiran Anda menjadi tindakan dan pola pikir yang positif.",
        it: "Puoi facilmente cadere nell'indecisione o nella depressione. Hai bisogno della determinazione per trasformare i tuoi pensieri in azioni e di una mentalità positiva.",
        ja: "あなたは優柔不断や憂鬱に陥りやすいです。あなたの考えを行動に移す決意と前向きな考え方が必要です。",
        pt: "Você pode facilmente cair na indecisão ou na depressão. Você precisa da determinação para colocar seus pensamentos em ação e de uma mentalidade positiva.",
        ru: "Вы можете легко впасть в нерешительность или депрессию. Вам нужна решимость, чтобы претворить свои мысли в жизнь, и позитивный настрой.",
        th: "คุณสามารถตกอยู่ในความไม่แน่ใจหรือภาวะซึมเศร้าได้ง่าย คุณต้องมีความมุ่งมั่นที่จะนำความคิดของคุณไปสู่การปฏิบัติและมีทัศนคติเชิงบวก",
        'zh-CN': "你很容易陷入优柔寡断或抑郁之中。你需要将想法付诸行动的决心和积极的心态。",
        'zh-TW': "你很容易陷入優柔寡斷或抑鬱之中。你需要將想法付諸行動的決心和積極的心態。"
      },
      career: { 
        en: "You are suited for fields such as diplomacy, counseling, and the arts, where you can utilize your wisdom and communication skills.", 
        ko: "지혜와 소통 능력을 활용할 수 있는 외교, 상담, 예술 분야 등이 잘 어울립니다.",
        de: "Sie eignen sich für Bereiche wie Diplomatie, Beratung und Kunst, in denen Sie Ihre Weisheit und Kommunikationsfähigkeiten einsetzen können.",
        es: "Eres adecuado para campos como la diplomacia, la consejería y las artes, donde puedes utilizar tu sabiduría y tus habilidades de comunicación.",
        fr: "Vous êtes apte à des domaines tels que la diplomatie, le conseil et les arts, où vous pouvez utiliser votre sagesse et vos compétences en communication.",
        id: "Anda cocok untuk bidang-bidang seperti diplomasi, konseling, dan seni, di mana Anda dapat memanfaatkan kebijaksanaan dan keterampilan komunikasi Anda.",
        it: "Sei adatto a campi come la diplomazia, la consulenza e le arti, dove puoi utilizzare la tua saggezza e le tue capacità di comunicazione.",
        ja: "あなたは、知恵とコミュニケーション能力を活かせる外交、カウンセリング、芸術などの分野に適しています。",
        pt: "Você é adequado para áreas como diplomacia, aconselhamento e artes, onde pode utilizar sua sabedoria e habilidades de comunicação.",
        ru: "Вы подходите для таких областей, как дипломатия, консультирование и искусство, где вы можете использовать свою мудрость и коммуникативные навыки.",
        th: "คุณเหมาะกับสาขาต่างๆ เช่น การทูต การให้คำปรึกษา และศิลปะ ซึ่งคุณสามารถใช้สติปัญญาและทักษะการสื่อสารของคุณได้",
        'zh-CN': "你适合从事外交、咨询和艺术等领域，在这些领域你可以利用你的智慧和沟通技巧。",
        'zh-TW': "你適合從事外交、諮詢和藝術等領域，在這些領域你可以利用你的智慧和溝通技巧。"
      },
      love: { 
        en: "You have a deep and understanding heart in relationships. You form a deep bond with your partner, but you need to be careful not to fall into excessive worry or suspicion.", 
        ko: "연인에게 이해심이 깊고 헌신적인 마음을 가집니다. 상대방과 깊은 유대감을 형성하지만, 지나친 걱정이나 의심에 빠지지 않도록 주의해야 합니다.",
        de: "Sie haben ein tiefes und verständnisvolles Herz in Beziehungen. Sie bilden eine tiefe Bindung zu Ihrem Partner, aber Sie müssen aufpassen, dass Sie nicht in übermäßige Sorgen oder Misstrauen verfallen.",
        es: "Tienes un corazón profundo y comprensivo en las relaciones. Formas un vínculo profundo con tu pareja, pero debes tener cuidado de no caer en una preocupación o sospecha excesiva.",
        fr: "Vous avez un cœur profond et compréhensif dans les relations. Vous formez un lien profond avec votre partenaire, mais vous devez faire attention à ne pas tomber dans une inquiétude ou une suspicion excessive.",
        id: "Anda memiliki hati yang dalam dan pengertian dalam hubungan. Anda membentuk ikatan yang dalam dengan pasangan Anda, tetapi Anda harus berhati-hati agar tidak jatuh ke dalam kekhawatiran atau kecurigaan yang berlebihan.",
        it: "Hai un cuore profondo e comprensivo nelle relazioni. Formi un legame profondo con il tuo partner, ma devi stare attento a non cadere in eccessiva preoccupazione o sospetto.",
        ja: "あなたは人間関係において深く理解のある心を持っています。あなたはパートナーと深い絆を築きますが、過度の心配や疑念に陥らないように注意する必要があります。",
        pt: "Você tem um coração profundo e compreensivo nos relacionamentos. Você forma um vínculo profundo com seu parceiro, mas precisa ter cuidado para não cair em preocupação ou suspeita excessiva.",
        ru: "У вас глубокое и понимающее сердце в отношениях. Вы формируете глубокую связь со своим партнером, но вам нужно быть осторожным, чтобы не впасть в чрезмерное беспокойство или подозрение.",
        th: "คุณมีหัวใจที่ลึกซึ้งและเข้าใจในความสัมพันธ์ คุณสร้างความผูกพันอย่างลึกซึ้งกับคนรักของคุณ แต่คุณต้องระวังอย่าตกอยู่ในความกังวลหรือความสงสัยมากเกินไป",
        'zh-CN': "你在恋爱关系中有一颗深沉而善解人意的心。你与伴侣建立了深厚的联系，但你需要小心，不要陷入过度的担忧或怀疑。",
        'zh-TW': "你在戀愛關係中有一顆深沉而善解人意的心。你與伴侶建立了深厚的聯繫，但你需要小心，不要陷入過度的擔憂或懷疑。"
      },
      health: { 
        en: "Pay attention to your kidney and bladder health. It is important to get enough rest and maintain emotional stability.", 
        ko: "신장과 방광 건강에 주의를 기울여야 합니다. 충분한 휴식과 정서적 안정을 유지하는 것이 중요합니다.",
        de: "Achten Sie auf die Gesundheit Ihrer Nieren und Ihrer Blase. Es ist wichtig, sich ausreichend auszuruhen und die emotionale Stabilität zu wahren.",
        es: "Presta atención a la salud de tus riñones y vejiga. Es importante descansar lo suficiente y mantener la estabilidad emocional.",
        fr: "Faites attention à la santé de vos reins et de votre vessie. Il est important de se reposer suffisamment et de maintenir une stabilité émotionnelle.",
        id: "Perhatikan kesehatan ginjal dan kandung kemih Anda. Penting untuk cukup istirahat dan menjaga stabilitas emosi.",
        it: "Presta attenzione alla salute dei reni e della vescica. È importante riposare a sufficienza e mantenere la stabilità emotiva.",
        ja: "腎臓と膀胱の健康に注意を払う必要があります。十分な休息を取り、精神的な安定を保つことが重要です。",
        pt: "Preste atenção à saúde dos seus rins e bexiga. É importante descansar o suficiente e manter a estabilidade emocional.",
        ru: "Обратите внимание на здоровье почек и мочевого пузыря. Важно достаточно отдыхать и поддерживать эмоциональную стабильность.",
        th: "ใส่ใจสุขภาพไตและกระเพาะปัสสาวะของคุณ สิ่งสำคัญคือต้องพักผ่อนให้เพียงพอและรักษาสภาพอารมณ์ให้คงที่",
        'zh-CN': "注意肾脏和膀胱的健康。获得充足的休息并保持情绪稳定非常重要。",
        'zh-TW': "注意腎臟和膀胱的健康。獲得充足的休息並保持情緒穩定非常重要。"
      },
      wealth: { 
        en: "Wealth flows naturally when you go with the flow rather than being greedy. Your adaptability will help you seize various financial opportunities.", 
        ko: "재물에 대한 욕심을 부리기보다 순리대로 따를 때 재물이 자연스럽게 흘러 들어옵니다. 당신의 적응력이 다양한 재정적 기회를 잡는 데 도움이 될 것입니다.",
        de: "Reichtum fließt auf natürliche Weise, wenn Sie mit dem Strom schwimmen, anstatt gierig zu sein. Ihre Anpassungsfähigkeit wird Ihnen helfen, verschiedene finanzielle Möglichkeiten zu ergreifen.",
        es: "La riqueza fluye naturalmente cuando te dejas llevar por la corriente en lugar de ser codicioso. Tu adaptabilidad te ayudará a aprovechar diversas oportunidades financieras.",
        fr: "La richesse coule naturellement lorsque vous suivez le courant plutôt que d'être avide. Votre adaptabilité vous aidera à saisir diverses opportunités financières.",
        id: "Kekayaan mengalir secara alami ketika Anda mengikuti arus daripada menjadi serakah. Kemampuan beradaptasi Anda akan membantu Anda memanfaatkan berbagai peluang keuangan.",
        it: "La ricchezza fluisce naturalmente quando segui la corrente piuttosto che essere avido. La tua adattabilità ti aiuterà a cogliere varie opportunità finanziarie.",
        ja: "富は、貪欲になるのではなく、流れに乗ることで自然に流れ込みます。あなたの適応性は、さまざまな金融機会をつかむのに役立ちます。",
        pt: "A riqueza flui naturalmente quando você segue o fluxo em vez de ser ganancioso. Sua adaptabilidade o ajudará a aproveitar várias oportunidades financeiras.",
        ru: "Богатство течет естественным образом, когда вы плывете по течению, а не жадничаете. Ваша приспособляемость поможет вам использовать различные финансовые возможности.",
        th: "ความมั่งคั่งจะไหลมาโดยธรรมชาติเมื่อคุณปล่อยไปตามกระแสมากกว่าที่จะโลภ ความสามารถในการปรับตัวของคุณจะช่วยให้คุณคว้าโอกาสทางการเงินต่างๆ ได้",
        'zh-CN': "当你顺其自然而不是贪婪时，财富就会自然而来。你的适应能力将帮助你抓住各种金融机会。",
        'zh-TW': "當你順其自然而不是貪婪時，財富就會自然而來。你的適應能力將幫助你抓住各種金融機會。"
      },
      advice: { 
        en: "Trust your intuition and have the courage to express your thoughts. Your wisdom will become a great strength when you have confidence in yourself.", 
        ko: "자신의 직관을 믿고, 생각을 표현하는 용기를 가지세요. 스스로에 대한 확신을 가질 때 당신의 지혜는 큰 힘이 될 것입니다.",
        de: "Vertrauen Sie Ihrer Intuition und haben Sie den Mut, Ihre Gedanken auszudrücken. Ihre Weisheit wird zu einer großen Stärke, wenn Sie Vertrauen in sich selbst haben.",
        es: "Confía en tu intuición y ten el coraje de expresar tus pensamientos. Tu sabiduría se convertirá en una gran fortaleza cuando tengas confianza en ti mismo.",
        fr: "Faites confiance à votre intuition et ayez le courage d'exprimer vos pensées. Votre sagesse deviendra une grande force lorsque vous aurez confiance en vous.",
        id: "Percayai intuisi Anda dan beranilah untuk mengungkapkan pikiran Anda. Kebijaksanaan Anda akan menjadi kekuatan besar ketika Anda memiliki kepercayaan pada diri sendiri.",
        it: "Fidati del tuo intuito e abbi il coraggio di esprimere i tuoi pensieri. La tua saggezza diventerà una grande forza quando avrai fiducia in te stesso.",
        ja: "自分の直感を信じ、自分の考えを表現する勇気を持ってください。自分に自信を持つとき、あなたの知恵は大きな力になります。",
        pt: "Confie na sua intuição e tenha a coragem de expressar seus pensamentos. Sua sabedoria se tornará uma grande força quando você tiver confiança em si mesmo.",
        ru: "Доверяйте своей интуиции и имейте смелость выражать свои мысли. Ваша мудрость станет великой силой, когда вы будете уверены в себе.",
        th: "เชื่อในสัญชาตญาณของคุณและมีความกล้าที่จะแสดงความคิดของคุณ สติปัญญาของคุณจะกลายเป็นความแข็งแกร่งที่ยิ่งใหญ่เมื่อคุณมีความมั่นใจในตัวเอง",
        'zh-CN': "相信你的直觉，有勇气表达你的想法。当对自己有信心时，你的智慧将成为巨大的力量。",
        'zh-TW': "相信你的直覺，有勇氣表達你的想法。當對自己有信心時，你的智慧將成為巨大的力量。"
      }
    }
  },

  strengthModifiers: {
    'very-strong': {
      overall: { 
        en: "Your inherent strength is exceptionally potent, allowing you to overcome significant obstacles and achieve remarkable success. Embrace your power, but wield it with wisdom and compassion.", 
        ko: "당신의 내재된 힘은 탁월하게 강력하여, 중대한 장애물을 극복하고 놀라운 성공을 이룰 수 있게 합니다. 당신의 힘을 받아들이되, 지혜와 연민으로 사용하세요.",
        de: "Ihre angeborene Stärke ist außergewöhnlich stark und ermöglicht es Ihnen, erhebliche Hindernisse zu überwinden und bemerkenswerte Erfolge zu erzielen. Umfassen Sie Ihre Macht, aber setzen Sie sie mit Weisheit und Mitgefühl ein.",
        es: "Tu fuerza inherente es excepcionalmente potente, lo que te permite superar obstáculos significativos y lograr un éxito notable. Abraza tu poder, pero ejércelo con sabiduría y compasión.",
        fr: "Votre force inhérente est exceptionnellement puissante, vous permettant de surmonter des obstacles importants et d'obtenir un succès remarquable. Embrassez votre pouvoir, mais maniez-le avec sagesse et compassion.",
        id: "Kekuatan bawaan Anda luar biasa kuat, memungkinkan Anda mengatasi rintangan signifikan dan mencapai kesuksesan luar biasa. Rangkullah kekuatan Anda, tetapi gunakan dengan kebijaksanaan dan kasih sayang.",
        it: "La tua forza intrinseca è eccezionalmente potente, permettendoti di superare ostacoli significativi e raggiungere un successo notevole. Abbraccia il tuo potere, ma esercitalo con saggezza e compassione.",
        ja: "あなたの固有の強さは非常に強力で、重大な障害を克服し、目覚ましい成功を収めることができます。あなたの力受け入れ、しかし、知恵と思いやりの心を持ってそれを行使してください。",
        pt: "Sua força inerente é excepcionalmente potente, permitindo que você supere obstáculos significativos e alcance um sucesso notável. Abrace seu poder, mas use-o com sabedoria e compaixão.",
        ru: "Ваша врожденная сила исключительно мощна, что позволяет вам преодолевать значительные препятствия и добиваться выдающихся успехов. Примите свою силу, но владейте ею с мудростью и состраданием.",
        th: "ความแข็งแกร่งโดยกำเนิดของคุณมีศักยภาพเป็นพิเศษ ช่วยให้คุณเอาชนะอุปสรรคสำคัญและประสบความสำเร็จอย่างน่าทึ่ง โอบกอดพลังของคุณ แต่ใช้มันด้วยสติปัญญาและความเห็นอกเห็นใจ",
        'zh-CN': "你内在的力量异常强大，使你能够克服重大障碍，取得非凡的成功。拥抱你的力量，但要用智慧和同情心来运用它。",
        'zh-TW': "你內在的力量異常強大，使你能夠克服重大障礙，取得非凡的成功。擁抱你的力量，但要用智慧和同情心來運用它。"
      },
      career: { 
        en: "In your career, your very strong nature translates into unparalleled drive and resilience. You are destined for leadership roles where your decisive actions and unwavering resolve can inspire and guide others to achieve ambitious goals.", 
        ko: "직업에서 당신의 매우 강한 본성은 비할 데 없는 추진력과 회복력으로 나타납니다. 당신은 단호한 행동과 흔들리지 않는 결단력이 다른 사람들에게 영감을 주고 야심찬 목표를 달성하도록 이끌 수 있는 리더십 역할에 적합합니다.",
        de: "In Ihrer Karriere führt Ihre sehr starke Natur zu einem beispiellosen Antrieb und einer beispiellosen Widerstandsfähigkeit. Sie sind für Führungsrollen bestimmt, in denen Ihre entschlossenen Handlungen und Ihre unerschütterliche Entschlossenheit andere inspirieren und anleiten können, ehrgeizige Ziele zu erreichen.",
        es: "En tu carrera, tu naturaleza muy fuerte se traduce en un impulso y una resiliencia incomparables. Estás destinado a roles de liderazgo donde tus acciones decisivas y tu resolución inquebrantable pueden inspirar y guiar a otros para lograr metas ambiciosas.",
        fr: "Dans votre carrière, votre nature très forte se traduit par une motivation et une résilience inégalées. Vous êtes destiné à des rôles de leadership où vos actions décisives et votre détermination inébranlable peuvent inspirer et guider les autres à atteindre des objectifs ambitieux.",
        id: "Dalam karir Anda, sifat Anda yang sangat kuat diterjemahkan menjadi dorongan dan ketahanan yang tak tertandingi. Anda ditakdirkan untuk peran kepemimpinan di mana tindakan tegas dan tekad Anda yang tak tergoyahkan dapat menginspirasi dan membimbing orang lain untuk mencapai tujuan yang ambisius.",
        it: "Nella tua carriera, la tua natura molto forte si traduce in una spinta e una resilienza senza pari. Sei destinato a ruoli di leadership in cui le tue azioni decisive e la tua determinazione incrollabile possono ispirare e guidare gli altri a raggiungere obiettivi ambiziosi.",
        ja: "あなたのキャリアにおいて、あなたの非常に強い性質は、比類のない意欲と回復力に変換されます。あなたは、あなたの決定的な行動と揺るぎない決意が、野心的な目標を達成するために他の人々を鼓舞し、導くことができるリーダーシップの役割に運命づけられています。",
        pt: "Em sua carreira, sua natureza muito forte se traduz em um impulso e resiliência incomparáveis. Você está destinado a papéis de liderança onde suas ações decisivas e sua determinação inabalável podem inspirar e guiar outros a alcançar metas ambiciosas.",
        ru: "В вашей карьере ваша очень сильная натура превращается в беспрецедентную целеустремленность и стойкость. Вам суждено занимать руководящие роли, где ваши решительные действия и непоколебимая решимость могут вдохновлять и направлять других на достижение амбициозных целей.",
        th: "ในอาชีพการงานของคุณ ธรรมชาติที่แข็งแกร่งของคุณแปรเปลี่ยนเป็นแรงผลักดันและความยืดหยุ่นที่ไม่มีใครเทียบได้ คุณถูกกำหนดให้รับบทบาทผู้นำซึ่งการกระทำที่เด็ดขาดและความมุ่งมั่นที่ไม่เปลี่ยนแปลงของคุณสามารถสร้างแรงบันดาลใจและชี้นำผู้อื่นให้บรรลุเป้าหมายที่ทะเยอทะยานได้",
        'zh-CN': "在你的职业生涯中，你非常坚强的天性转化为无与伦比的动力和韧性。你注定要担任领导角色，你的果断行动和坚定不移的决心可以激励和引导他人实现宏伟的目标。",
        'zh-TW': "在你的職業生涯中，你非常堅強的天性轉化為無與倫比的動力和韌性。你注定要擔任領導角色，你的果斷行動和堅定不移的決心可以激勵和引導他人實現宏偉的目標。"
      },
      love: { 
        en: "Your strong presence in relationships is a source of great stability and protection. Seek a partner who appreciates your powerful commitment and can stand as an equal, fostering a bond built on mutual respect and deep understanding.", 
        ko: "관계에서 당신의 강한 존재감은 큰 안정과 보호의 원천입니다. 당신의 강력한 헌신을 이해하고 동등하게 설 수 있는 파트너를 찾으세요. 상호 존중과 깊은 이해를 바탕으로 유대를 형성할 것입니다.",
        de: "Ihre starke Präsenz in Beziehungen ist eine Quelle großer Stabilität und des Schutzes. Suchen Sie einen Partner, der Ihr starkes Engagement zu schätzen weiß und als gleichberechtigt dastehen kann, um eine auf gegenseitigem Respekt und tiefem Verständnis beruhende Bindung zu fördern.",
        es: "Tu fuerte presencia en las relaciones es una fuente de gran estabilidad y protección. Busca una pareja que aprecie tu poderoso compromiso y pueda estar a tu altura, fomentando un vínculo basado en el respeto mutuo y la comprensión profunda.",
        fr: "Votre forte présence dans les relations est une source de grande stabilité et de protection. Cherchez un partenaire qui apprécie votre engagement puissant et qui peut se tenir sur un pied d'égalité, favorisant un lien fondé sur le respect mutuel et une profonde compréhension.",
        id: "Kehadiran Anda yang kuat dalam hubungan adalah sumber stabilitas dan perlindungan yang hebat. Carilah pasangan yang menghargai komitmen kuat Anda dan dapat berdiri sejajar, membina ikatan yang dibangun di atas rasa saling menghormati dan pengertian yang mendalam.",
        it: "La tua forte presenza nelle relazioni è una fonte di grande stabilità e protezione. Cerca un partner che apprezzi il tuo forte impegno e possa stare alla pari, favorendo un legame basato sul rispetto reciproco e sulla profonda comprensione.",
        ja: "人間関係におけるあなたの強い存在感は、大きな安定と保護の源です。あなたの強力なコミットメントを高く評価し、対等な立場でいられるパートナーを探し、相互の尊重と深い理解に基づいて絆を育んでください。",
        pt: "Sua forte presença nos relacionamentos é uma fonte de grande estabilidade e proteção. Procure um parceiro que aprecie seu poderoso compromisso e possa se igualar a você, promovendo um vínculo construído com base no respeito mútuo e na profunda compreensão.",
        ru: "Ваше сильное присутствие в отношениях является источником большой стабильности и защиты. Ищите партнера, который ценит вашу сильную приверженность и может стоять наравне с вами, способствуя созданию связи, основанной на взаимном уважении и глубоком понимании.",
        th: "การมีอยู่ของคุณที่แข็งแกร่งในความสัมพันธ์เป็นแหล่งของความมั่นคงและการปกป้องที่ดีเยี่ยม มองหาคู่ครองที่ชื่นชมความมุ่งมั่นอันทรงพลังของคุณและสามารถยืนหยัดได้อย่างเท่าเทียมกัน ส่งเสริมความผูกพันที่สร้างขึ้นบนความเคารพซึ่งกันและกันและความเข้าใจอย่างลึกซึ้ง",
        'zh-CN': "你在恋爱关系中的强大存在是巨大稳定和保护的源泉。寻找一个欣赏你强大承诺并能与你平等相待的伴侣，培养建立在相互尊重和深刻理解基础上的纽带。",
        'zh-TW': "你在戀愛關係中的強大存在是巨大穩定和保護的源泉。尋找一個欣賞你強大承諾並能與你平等相待的伴侶，培養建立在相互尊重和深刻理解基礎上的紐帶。"
      },
      health: { 
        en: "Your robust constitution supports a vibrant and active life. Maintain this vitality through consistent self-care, including regular exercise and a balanced diet, to sustain your powerful energy.", 
        ko: "당신의 강건한 체질은 활기차고 활동적인 삶을 지탱합니다. 규칙적인 운동과 균형 잡힌 식단을 포함한 꾸준한 자기 관리를 통해 이 활력을 유지하여 강력한 에너지를 지속하세요.",
        de: "Ihre robuste Konstitution unterstützt ein pulsierendes und aktives Leben. Erhalten Sie diese Vitalität durch konsequente Selbstpflege, einschließlich regelmäßiger Bewegung und einer ausgewogenen Ernährung, um Ihre kraftvolle Energie zu erhalten.",
        es: "Tu constitución robusta apoya una vida vibrante y activa. Mantén esta vitalidad a través del autocuidado constante, que incluye ejercicio regular y una dieta equilibrada, para mantener tu poderosa energía.",
        fr: "Votre constitution robuste favorise une vie dynamique et active. Maintenez cette vitalité par des soins personnels constants, notamment une activité physique régulière et une alimentation équilibrée, afin de conserver votre puissante énergie.",
        id: "Konstitusi Anda yang kuat mendukung kehidupan yang bersemangat dan aktif. Pertahankan vitalitas ini melalui perawatan diri yang konsisten, termasuk olahraga teratur dan diet seimbang, untuk mempertahankan energi kuat Anda.",
        it: "La tua costituzione robusta supporta una vita vibrante e attiva. Mantieni questa vitalità attraverso una cura di sé costante, che include esercizio fisico regolare e una dieta equilibrata, per sostenere la tua potente energia.",
        ja: "あなたの頑健な体質は、活気に満ちた活動的な生活を支えます。定期的な運動とバランスの取れた食事を含む一貫したセルフケアを通じてこの活力を維持し、強力なエネルギーを維持してください。",
        pt: "Sua constituição robusta sustenta uma vida vibrante e ativa. Mantenha essa vitalidade através do autocuidado consistente, incluindo exercícios regulares e uma dieta equilibrada, para sustentar sua energia poderosa.",
        ru: "Ваша крепкая конституция поддерживает яркую и активную жизнь. Поддерживайте эту жизненную силу с помощью постоянного ухода за собой, включая регулярные физические упражнения и сбалансированную диету, чтобы поддерживать свою мощную энергию.",
        th: "ร่างกายที่แข็งแรงของคุณสนับสนุนชีวิตที่สดใสและกระฉับกระเฉง รักษาความมีชีวิตชีวานี้ไว้ด้วยการดูแลตนเองอย่างสม่ำเสมอ รวมถึงการออกกำลังกายเป็นประจำและรับประทานอาหารที่สมดุล เพื่อรักษาพลังอันทรงพลังของคุณ",
        'zh-CN': "你强健的体魄支持着充满活力和积极的生活。通过持续的自我保健，包括定期锻炼和均衡饮食，来保持这种活力，以维持你强大的能量。",
        'zh-TW': "你強健的體魄支持著充滿活力和積極的生活。通過持續的自我保健，包括定期鍛煉和均衡飲食，來保持這種活力，以維持你強大的能量。"
      },
      wealth: { 
        en: "Your financial destiny is marked by significant potential for accumulation and influence. Your strong will and strategic mind can lead to substantial wealth, especially when focused on long-term, impactful ventures.", 
        ko: "당신의 재정적 운명은 상당한 축적과 영향력의 잠재력으로 특징지어집니다. 당신의 강한 의지와 전략적인 사고는 특히 장기적이고 영향력 있는 사업에 집중할 때 상당한 부를 가져올 수 있습니다.",
        de: "Ihr finanzielles Schicksal ist von erheblichem Potenzial für Akkumulation und Einfluss geprägt. Ihr starker Wille und Ihr strategischer Verstand können zu erheblichem Reichtum führen, insbesondere wenn Sie sich auf langfristige, wirkungsvolle Unternehmungen konzentrieren.",
        es: "Tu destino financiero está marcado por un potencial significativo de acumulación e influencia. Tu fuerte voluntad y tu mente estratégica pueden llevarte a una riqueza sustancial, especialmente cuando te enfocas en empresas impactantes a largo plazo.",
        fr: "Votre destin financier est marqué par un potentiel important d'accumulation et d'influence. Votre forte volonté et votre esprit stratégique peuvent mener à une richesse substantielle, surtout si vous vous concentrez sur des entreprises percutantes à long terme.",
        id: "Takdir keuangan Anda ditandai oleh potensi signifikan untuk akumulasi dan pengaruh. Kemauan kuat dan pikiran strategis Anda dapat menghasilkan kekayaan besar, terutama bila difokuskan pada usaha jangka panjang yang berdampak.",
        it: "Il tuo destino finanziario è segnato da un notevole potenziale di accumulazione e influenza. La tua forte volontà e la tua mente strategica possono portare a una ricchezza sostanziale, soprattutto se concentrate su iniziative di grande impatto a lungo termine.",
        ja: "あなたの経済的な運命は、蓄積と影響力の大きな可能性によって特徴づけられます。あなたの強い意志と戦略的な心は、特に長期的で影響力のあるベンチャーに焦点を当てた場合、かなりの富につながる可能性があります。",
        pt: "Seu destino financeiro é marcado por um potencial significativo de acumulação e influência. Sua força de vontade e mente estratégica podem levar a uma riqueza substancial, especialmente quando focadas em empreendimentos de longo prazo e impactantes.",
        ru: "Ваша финансовая судьба отмечена значительным потенциалом для накопления и влияния. Ваша сильная воля и стратегический ум могут привести к значительному богатству, особенно если вы сосредоточитесь на долгосрочных и эффективных предприятиях.",
        th: "โชคชะตาทางการเงินของคุณโดดเด่นด้วยศักยภาพในการสะสมและอิทธิพลอย่างมีนัยสำคัญ ความมุ่งมั่นที่แข็งแกร่งและจิตใจเชิงกลยุทธ์ของคุณสามารถนำไปสู่ความมั่งคั่งจำนวนมาก โดยเฉพาะอย่างยิ่งเมื่อมุ่งเน้นไปที่การลงทุนระยะยาวที่สร้างผลกระทบ",
        'zh-CN': "你的财务命运以巨大的积累和影响力潜力为标志。你坚强的意志和战略头脑可以带来可观的财富，尤其是在专注于长期、有影响力的风险投资时。",
        'zh-TW': "你的財務命運以巨大的積累和影響力潛力為標誌。你堅強的意志和戰略頭腦可以帶來可觀的財富，尤其是在專注於長期、有影響力的風險投資時。"
      },
      advice: { 
        en: "Recognize the impact of your strength on others. Practice humility and collaboration, allowing your power to uplift rather than overshadow those around you.", 
        ko: "당신의 힘이 다른 사람들에게 미치는 영향을 인식하세요. 겸손과 협력을 실천하여 당신의 힘이 주변 사람들을 압도하기보다는 고양시키도록 하세요.",
        de: "Erkennen Sie die Auswirkungen Ihrer Stärke auf andere. Üben Sie Demut und Zusammenarbeit und lassen Sie Ihre Kraft die Menschen um Sie herum erheben, anstatt sie in den Schatten zu stellen.",
        es: "Reconoce el impacto de tu fuerza en los demás. Practica la humildad y la colaboración, permitiendo que tu poder eleve en lugar de eclipsar a quienes te rodean.",
        fr: "Reconnaissez l'impact de votre force sur les autres. Pratiquez l'humilité et la collaboration, permettant à votre pouvoir d'élever plutôt que d'éclipser ceux qui vous entourent.",
        id: "Kenali dampak kekuatan Anda pada orang lain. Latihlah kerendahan hati dan kolaborasi, biarkan kekuatan Anda mengangkat daripada membayangi orang-orang di sekitar Anda.",
        it: "Riconosci l'impatto della tua forza sugli altri. Pratica l'umiltà e la collaborazione, permettendo al tuo potere di elevare piuttosto che mettere in ombra chi ti circonda.",
        ja: "あなたの強さが他人に与える影響を認識してください。謙虚さと協力を実践し、あなたの力が周りの人々を圧倒するのではなく、高めるようにしてください。",
        pt: "Reconheça o impacto de sua força nos outros. Pratique a humildade e a colaboração, permitindo que seu poder eleve em vez de ofuscar as pessoas ao seu redor.",
        ru: "Признайте влияние своей силы на других. Практикуйте смирение и сотрудничество, позволяя своей силе возвышать, а не затмевать окружающих.",
        th: "ตระหนักถึงผลกระทบของความแข็งแกร่งของคุณที่มีต่อผู้อื่น ฝึกฝนความอ่อนน้อมถ่อมตนและการทำงานร่วมกัน ปล่อยให้พลังของคุณยกระดับแทนที่จะบดบังคนรอบข้าง",
        'zh-CN': "认识到你的力量对他人产生的影响。练习谦逊和协作，让你的力量提升而不是压倒周围的人。",
        'zh-TW': "認識到你的力量對他人產生的影響。練習謙遜和協作，讓你的力量提升而不是壓倒周圍的人。"
      }
    },
    'strong': {
      overall: { 
        en: "You possess significant inner strength, enabling you to face challenges with confidence and achieve your goals through consistent effort. Your resilience is a key to your success.", 
        ko: "당신은 상당한 내면의 힘을 가지고 있어, 자신감 있게 도전에 맞서고 꾸준한 노력을 통해 목표를 달성할 수 있습니다. 당신의 회복력은 성공의 핵심입니다.",
        de: "Sie besitzen eine beträchtliche innere Stärke, die es Ihnen ermöglicht, Herausforderungen mit Zuversicht zu begegnen und Ihre Ziele durch konsequente Anstrengung zu erreichen. Ihre Widerstandsfähigkeit ist ein Schlüssel zu Ihrem Erfolg.",
        es: "Posees una fuerza interior significativa, lo que te permite enfrentar los desafíos con confianza y alcanzar tus metas a través de un esfuerzo constante. Tu resiliencia es una clave para tu éxito.",
        fr: "Vous possédez une force intérieure importante, vous permettant de faire face aux défis avec confiance et d'atteindre vos objectifs grâce à des efforts constants. Votre résilience est une clé de votre succès.",
        id: "Anda memiliki kekuatan batin yang signifikan, memungkinkan Anda menghadapi tantangan dengan percaya diri dan mencapai tujuan Anda melalui usaha yang konsisten. Ketahanan Anda adalah kunci kesuksesan Anda.",
        it: "Possiedi una notevole forza interiore, che ti consente di affrontare le sfide con fiducia e di raggiungere i tuoi obiettivi attraverso uno sforzo costante. La tua resilienza è una chiave per il tuo successo.",
        ja: "あなたは大きな内なる強さを持っており、自信を持って課題に立ち向かい、一貫した努力を通じて目標を達成することができます。あなたの回復力は成功の鍵です。",
        pt: "Você possui uma força interior significativa, permitindo que você enfrente desafios com confiança e alcance seus objetivos através de um esforço consistente. Sua resiliência é a chave para o seu sucesso.",
        ru: "Вы обладаете значительной внутренней силой, позволяющей вам уверенно противостоять вызовам и достигать своих целей благодаря постоянным усилиям. Ваша стойкость - ключ к вашему успеху.",
        th: "คุณมีความแข็งแกร่งภายในอย่างมาก ทำให้คุณสามารถเผชิญกับความท้าทายด้วยความมั่นใจและบรรลุเป้าหมายของคุณผ่านความพยายามอย่างสม่ำเสมอ ความยืดหยุ่นของคุณเป็นกุญแจสู่ความสำเร็จของคุณ",
        'zh-CN': "你拥有强大的内在力量，使你能够自信地面对挑战，并通过不懈的努力实现目标。你的韧性是你成功的关键。",
        'zh-TW': "你擁有強大的內在力量，使你能夠自信地應對挑戰，並通過不懈的努力實現目標。你的韌性是你成功的關鍵。"
      },
      career: { 
        en: "In your career, your strong nature makes you a reliable and effective professional. You excel in roles that require perseverance and the ability to lead by example, inspiring trust and dedication in your team.", 
        ko: "직업에서 당신의 강한 본성은 당신을 신뢰할 수 있고 효과적인 전문가로 만듭니다. 인내심과 모범을 통해 이끄는 능력이 필요한 역할에서 탁월하며, 팀에 신뢰와 헌신을 불어넣습니다.",
        de: "In Ihrer Karriere macht Sie Ihre starke Natur zu einem zuverlässigen und effektiven Fachmann. Sie zeichnen sich in Rollen aus, die Ausdauer und die Fähigkeit erfordern, mit gutem Beispiel voranzugehen und Vertrauen und Engagement in Ihrem Team zu wecken.",
        es: "En tu carrera, tu naturaleza fuerte te convierte en un profesional confiable y eficaz. Sobresales en roles que requieren perseverancia y la capacidad de liderar con el ejemplo, inspirando confianza y dedicación en tu equipo.",
        fr: "Dans votre carrière, votre nature forte fait de vous un professionnel fiable et efficace. Vous excellez dans les rôles qui exigent de la persévérance et la capacité de montrer l'exemple, inspirant la confiance et le dévouement de votre équipe.",
        id: "Dalam karir Anda, sifat kuat Anda membuat Anda menjadi seorang profesional yang andal dan efektif. Anda unggul dalam peran yang membutuhkan ketekunan dan kemampuan untuk memimpin dengan memberi contoh, menginspirasi kepercayaan dan dedikasi dalam tim Anda.",
        it: "Nella tua carriera, la tua natura forte ti rende un professionista affidabile ed efficace. Eccelli in ruoli che richiedono perseveranza e la capacità di dare l'esempio, ispirando fiducia e dedizione nel tuo team.",
        ja: "あなたのキャリアにおいて、あなたの強い性質はあなたを信頼できる有能な専門家にします。あなたは忍耐力と模範を示す能力を必要とする役割で優れており、チームに信頼と献身を鼓舞します。",
        pt: "Em sua carreira, sua natureza forte o torna um profissional confiável e eficaz. Você se destaca em funções que exigem perseverança e a capacidade de liderar pelo exemplo, inspirando confiança e dedicação em sua equipe.",
        ru: "В вашей карьере ваша сильная натура делает вас надежным и эффективным профессионалом. Вы преуспеваете в ролях, требующих настойчивости и способности вести за собой примером, внушая доверие и преданность в вашей команде.",
        th: "ในอาชีพการงานของคุณ ธรรมชาติที่แข็งแกร่งของคุณทำให้คุณเป็นมืออาชีพที่น่าเชื่อถือและมีประสิทธิภาพ คุณเก่งในบทบาทที่ต้องใช้ความพากเพียรและความสามารถในการเป็นผู้นำโดยเป็นแบบอย่าง สร้างแรงบันดาลใจให้เกิดความไว้วางใจและความทุ่มเทในทีมของคุณ",
        'zh-CN': "在你的职业生涯中，你坚强的天性使你成为一个可靠而高效的专业人士。你在需要毅力和以身作则的能力的角色中表现出色，在团队中激发信任和奉献精神。",
        'zh-TW': "在你的職業生涯中，你堅強的天性使你成為一個可靠而高效的專業人士。你在需要毅力和以身作則的能力的角色中表現出色，在團隊中激發信任和奉獻精神。"
      },
      love: { 
        en: "In relationships, your strength provides a stable and secure foundation. You are a devoted partner, offering unwavering support and protection. Seek someone who values your steadfastness and reciprocates your deep commitment.", 
        ko: "관계에서 당신의 강점은 안정적이고 견고한 기반을 제공합니다. 당신은 변함없는 지지와 보호를 제공하는 헌신적인 파트너입니다. 당신의 굳건함을 소중히 여기고 깊은 헌신에 보답할 사람을 찾으세요.",
        de: "In Beziehungen bietet Ihre Stärke eine stabile und sichere Grundlage. Sie sind ein hingebungsvoller Partner, der unerschütterliche Unterstützung und Schutz bietet. Suchen Sie jemanden, der Ihre Standhaftigkeit schätzt und Ihr tiefes Engagement erwidert.",
        es: "En las relaciones, tu fuerza proporciona una base estable y segura. Eres una pareja devota, que ofrece un apoyo y una protección inquebrantables. Busca a alguien que valore tu firmeza y corresponda a tu profundo compromiso.",
        fr: "Dans les relations, votre force fournit une base stable et sûre. Vous êtes un partenaire dévoué, offrant un soutien et une protection indéfectibles. Cherchez quelqu'un qui apprécie votre constance et qui rend la pareille à votre profond engagement.",
        id: "Dalam hubungan, kekuatan Anda memberikan fondasi yang stabil dan aman. Anda adalah pasangan yang setia, menawarkan dukungan dan perlindungan yang tak tergoyahkan. Carilah seseorang yang menghargai keteguhan Anda dan membalas komitmen mendalam Anda.",
        it: "Nelle relazioni, la tua forza fornisce una base stabile e sicura. Sei un partner devoto, che offre supporto e protezione incrollabili. Cerca qualcuno che apprezzi la tua fermezza e ricambi il tuo profondo impegno.",
        ja: "人間関係において、あなたの強さは安定した安全な基盤を提供します。あなたは献身的なパートナーであり、揺るぎないサポートと保護を提供します。あなたの不動の心を大切にし、あなたの深い献身に応えてくれる人を探してください。",
        pt: "Nos relacionamentos, sua força fornece uma base estável e segura. Você é um parceiro dedicado, oferecendo apoio e proteção inabaláveis. Procure alguém que valorize sua firmeza e retribua seu profundo compromisso.",
        ru: "В отношениях ваша сила обеспечивает стабильную и надежную основу. Вы преданный партнер, предлагающий непоколебимую поддержку и защиту. Ищите того, кто ценит вашу стойкость и отвечает взаимностью на вашу глубокую приверженность.",
        th: "ในความสัมพันธ์ ความแข็งแกร่งของคุณเป็นรากฐานที่มั่นคงและปลอดภัย คุณเป็นคู่ครองที่อุทิศตน ให้การสนับสนุนและการปกป้องอย่างไม่เปลี่ยนแปลง มองหาคนที่เห็นคุณค่าในความแน่วแน่ของคุณและตอบสนองต่อความมุ่งมั่นอันลึกซึ้งของคุณ",
        'zh-CN': "在恋爱关系中，你的力量提供了稳定和安全的基础。你是一个忠诚的伴侣，提供坚定不移的支持和保护。寻找一个重视你的坚定并回报你深刻承诺的人。",
        'zh-TW': "在戀愛關係中，你的力量提供了穩定和安全的基礎。你是一個忠誠的伴侶，提供堅定不移的支持和保護。尋找一個重視你的堅定並回報你深刻承諾的人。"
      },
      health: { 
        en: "Your robust health is a testament to your strong constitution. Maintain this by listening to your body's needs, engaging in regular physical activity, and nurturing your mental well-being to sustain your vitality.", 
        ko: "당신의 강건한 건강은 강한 체질의 증거입니다. 신체의 요구에 귀 기울이고, 규칙적인 신체 활동에 참여하며, 정신 건강을 돌보아 활력을 유지하세요.",
        de: "Ihre robuste Gesundheit ist ein Beweis für Ihre starke Konstitution. Erhalten Sie diese, indem Sie auf die Bedürfnisse Ihres Körpers hören, sich regelmäßig körperlich betätigen und Ihr geistiges Wohlbefinden pflegen, um Ihre Vitalität zu erhalten.",
        es: "Tu salud robusta es un testimonio de tu fuerte constitución. Mantenla escuchando las necesidades de tu cuerpo, realizando actividad física regular y cuidando tu bienestar mental para mantener tu vitalidad.",
        fr: "Votre santé robuste témoigne de votre forte constitution. Maintenez-la en écoutant les besoins de votre corps, en pratiquant une activité physique régulière et en nourrissant votre bien-être mental pour conserver votre vitalité.",
        id: "Kesehatan Anda yang kuat adalah bukti konstitusi Anda yang kuat. Pertahankan ini dengan mendengarkan kebutuhan tubuh Anda, melakukan aktivitas fisik secara teratur, dan memelihara kesehatan mental Anda untuk mempertahankan vitalitas Anda.",
        it: "La tua salute robusta è una testimonianza della tua forte costituzione. Mantienila ascoltando le esigenze del tuo corpo, praticando un'attività fisica regolare e coltivando il tuo benessere mentale per sostenere la tua vitalità.",
        ja: "あなたの頑健な健康は、あなたの強い体質の証です。体のニーズに耳を傾け、定期的な身体活動に従事し、精神的な幸福を育むことによってこれを維持し、活力を維持してください。",
        pt: "Sua saúde robusta é um testemunho de sua constituição forte. Mantenha-a ouvindo as necessidades do seu corpo, praticando atividade física regular e nutrindo seu bem-estar mental para sustentar sua vitalidade.",
        ru: "Ваше крепкое здоровье - свидетельство вашей сильной конституции. Поддерживайте его, прислушиваясь к потребностям своего тела, занимаясь регулярной физической активностью и заботясь о своем психическом благополучии, чтобы поддерживать свою жизненную силу.",
        th: "สุขภาพที่แข็งแรงของคุณเป็นเครื่องพิสูจน์ถึงร่างกายที่แข็งแรงของคุณ รักษาสิ่งนี้ไว้โดยการฟังความต้องการของร่างกาย การออกกำลังกายอย่างสม่ำเสมอ และการบำรุงสุขภาพจิตของคุณเพื่อรักษาความมีชีวิตชีวาของคุณ",
        'zh-CN': "你强健的身体是你坚强体质的证明。通过倾听身体的需求、定期进行体育锻炼和培养心理健康来保持这种状态，以维持你的活力。",
        'zh-TW': "你強健的身體是你堅強體質的證明。通過傾聽身體的需求、定期進行體育鍛煉和培養心理健康來保持這種狀態，以維持你的活力。"
      },
      wealth: { 
        en: "Your financial path is built on solid ground, with success stemming from diligent work and prudent decisions. Your strong will ensures you overcome financial hurdles and build lasting security through consistent, well-planned efforts.", 
        ko: "당신의 재정적 길은 견고한 기반 위에 세워져 있으며, 근면한 노력과 신중한 결정에서 성공이 비롯됩니다. 당신의 강한 의지는 재정적 장애물을 극복하고 꾸준하고 잘 계획된 노력을 통해 지속적인 안정을 구축하도록 합니다.",
        de: "Ihr finanzieller Weg ist auf solidem Boden gebaut, wobei der Erfolg auf sorgfältiger Arbeit und klugen Entscheidungen beruht. Ihr starker Wille stellt sicher, dass Sie finanzielle Hürden überwinden und durch konsequente, gut geplante Anstrengungen dauerhafte Sicherheit aufbauen.",
        es: "Tu camino financiero se construye sobre un terreno sólido, con el éxito derivado del trabajo diligente y las decisiones prudentes. Tu fuerte voluntad te asegura superar los obstáculos financieros y construir una seguridad duradera a través de esfuerzos consistentes y bien planificados.",
        fr: "Votre parcours financier est bâti sur un terrain solide, le succès découlant d'un travail diligent et de décisions prudentes. Votre forte volonté vous assure de surmonter les obstacles financiers et de bâtir une sécurité durable grâce à des efforts constants et bien planifiés.",
        id: "Jalur keuangan Anda dibangun di atas landasan yang kokoh, dengan kesuksesan berasal dari kerja keras dan keputusan yang bijaksana. Kemauan kuat Anda memastikan Anda mengatasi rintangan keuangan dan membangun keamanan abadi melalui upaya yang konsisten dan terencana dengan baik.",
        it: "Il tuo percorso finanziario è costruito su un terreno solido, con il successo che deriva da un lavoro diligente e da decisioni prudenti. La tua forte volontà ti assicura di superare gli ostacoli finanziari e di costruire una sicurezza duratura attraverso sforzi costanti e ben pianificati.",
        ja: "あなたの経済的な道は堅固な基盤の上に築かれており、成功は勤勉な仕事と賢明な決定から生まれます。あなたの強い意志は、あなたが経済的なハードルを克服し、一貫した、よく計画された努力を通じて永続的な安全を築くことを保証します。",
        pt: "Seu caminho financeiro é construído em terreno sólido, com o sucesso decorrente do trabalho diligente e de decisões prudentes. Sua forte vontade garante que você supere os obstáculos financeiros e construa uma segurança duradoura por meio de esforços consistentes e bem planejados.",
        ru: "Ваш финансовый путь построен на прочной основе, а успех зависит от усердной работы и разумных решений. Ваша сильная воля гарантирует, что вы преодолеете финансовые препятствия и создадите прочную безопасность благодаря последовательным, хорошо спланированным усилиям.",
        th: "เส้นทางทางการเงินของคุณสร้างขึ้นบนพื้นฐานที่มั่นคง โดยความสำเร็จเกิดจากการทำงานอย่างขยันหมั่นเพียรและการตัดสินใจที่รอบคอบ ความมุ่งมั่นที่แข็งแกร่งของคุณช่วยให้คุณเอาชนะอุปสรรคทางการเงินและสร้างความมั่นคงที่ยั่งยืนผ่านความพยายามที่สม่ำเสมอและมีการวางแผนมาอย่างดี",
        'zh-CN': "你的财务之路建立在坚实的基础上，成功源于勤奋的工作和审慎的决策。你坚强的意志确保你克服财务障碍，通过持续、精心策划的努力建立持久的保障。",
        'zh-TW': "你的財務之路建立在堅實的基礎上，成功源於勤奮的工作和審慎的決策。你堅強的意志確保你克服財務障礙，通過持續、精心策劃的努力建立持久的保障。"
      },
      advice: { 
        en: "While your strength is admirable, remember to also embrace vulnerability and seek support when needed. Collaboration and openness can unlock new dimensions of your power.", 
        ko: "당신의 강점은 칭찬할 만하지만, 취약성을 받아들이고 필요할 때 도움을 구하는 것을 기억하세요. 협력과 개방성은 당신의 힘의 새로운 차원을 열어줄 수 있습니다.",
        de: "Obwohl Ihre Stärke bewundernswert ist, denken Sie daran, auch Verletzlichkeit anzunehmen und bei Bedarf Unterstützung zu suchen. Zusammenarbeit und Offenheit können neue Dimensionen Ihrer Kraft freisetzen.",
        es: "Si bien tu fuerza es admirable, recuerda también aceptar la vulnerabilidad y buscar apoyo cuando sea necesario. La colaboración y la apertura pueden desbloquear nuevas dimensiones de tu poder.",
        fr: "Bien que votre force soit admirable, n'oubliez pas d'accepter également la vulnérabilité et de chercher du soutien en cas de besoin. La collaboration et l'ouverture d'esprit peuvent débloquer de nouvelles dimensions de votre pouvoir.",
        id: "Meskipun kekuatan Anda mengagumkan, ingatlah untuk juga merangkul kerentanan dan mencari dukungan saat dibutuhkan. Kolaborasi dan keterbukaan dapat membuka dimensi baru dari kekuatan Anda.",
        it: "Sebbene la tua forza sia ammirevole, ricorda di abbracciare anche la vulnerabilità e di cercare supporto quando necessario. La collaborazione e l'apertura possono sbloccare nuove dimensioni del tuo potere.",
        ja: "あなたの強さは賞賛に値しますが、必要に応じて脆弱性を受け入れ、サポートを求めることも忘れないでください。コラボレーションとオープンさは、あなたの力の新しい側面を解き放つことができます。",
        pt: "Embora sua força seja admirável, lembre-se de também abraçar a vulnerabilidade e procurar apoio quando necessário. A colaboração e a abertura podem desbloquear novas dimensões do seu poder.",
        ru: "Хотя ваша сила восхитительна, не забывайте также принимать уязвимость и обращаться за поддержкой, когда это необходимо. Сотрудничество и открытость могут открыть новые измерения вашей силы.",
        th: "ในขณะที่ความแข็งแกร่งของคุณน่าชื่นชม อย่าลืมยอมรับความเปราะบางและขอความช่วยเหลือเมื่อจำเป็น การทำงานร่วมกันและการเปิดกว้างสามารถปลดล็อกมิติใหม่ของพลังของคุณได้",
        'zh-CN': "虽然你的力量令人钦佩，但请记住，在需要时也要拥抱脆弱并寻求支持。协作和开放可以开启你力量的新维度。",
        'zh-TW': "雖然你的力量令人欽佩，但請記住，在需要時也要擁抱脆弱並尋求支持。協作和開放可以開啟你力量的新維度。"
      }
    },
    'moderate': {
      overall: { 
        en: "Your balanced and stable energy allows for steady and harmonious development. You can achieve your goals by consistently moving forward without being swayed by your surroundings.", 
        ko: "당신의 균형 잡힌 안정적인 기운은 꾸준하고 조화로운 발전을 가능하게 합니다. 주변에 흔들리지 않고 꾸준히 나아감으로써 목표를 달성할 수 있습니다.",
        de: "Ihre ausgeglichene und stabile Energie ermöglicht eine stetige und harmonische Entwicklung. Sie können Ihre Ziele erreichen, indem Sie konsequent voranschreiten, ohne sich von Ihrer Umgebung beeinflussen zu lassen.",
        es: "Tu energía equilibrada y estable permite un desarrollo constante y armonioso. Puedes alcanzar tus metas avanzando constantemente sin dejarte influenciar por tu entorno.",
        fr: "Votre énergie équilibrée et stable permet un développement constant et harmonieux. Vous pouvez atteindre vos objectifs en avançant constamment sans vous laisser influencer par votre environnement.",
        id: "Energi Anda yang seimbang dan stabil memungkinkan perkembangan yang stabil dan harmonis. Anda dapat mencapai tujuan Anda dengan terus bergerak maju tanpa terpengaruh oleh lingkungan sekitar Anda.",
        it: "La tua energia equilibrata e stabile consente uno sviluppo costante e armonioso. Puoi raggiungere i tuoi obiettivi andando avanti costantemente senza lasciarti influenzare dall'ambiente circostante.",
        ja: "あなたのバランスの取れた安定したエネルギーは、着実で調和のとれた発展を可能にします。あなたは周りに流されることなく、着実に前進することで目標を達成することができます。",
        pt: "Sua energia equilibrada e estável permite um desenvolvimento constante e harmonioso. Você pode alcançar seus objetivos avançando consistentemente sem ser influenciado pelo ambiente ao seu redor.",
        ru: "Ваша сбалансированная и стабильная энергия обеспечивает устойчивое и гармоничное развитие. Вы можете достичь своих целей, последовательно двигаясь вперед, не поддаваясь влиянию окружающих.",
        th: "พลังงานที่สมดุลและมั่นคงของคุณช่วยให้เกิดการพัฒนาที่มั่นคงและกลมกลืน คุณสามารถบรรลุเป้าหมายของคุณได้โดยการก้าวไปข้างหน้าอย่างสม่ำเสมอโดยไม่หวั่นไหวต่อสิ่งรอบข้าง",
        'zh-CN': "你平衡稳定的能量有助于稳定和谐的发展。你可以通过不受周围环境影响、持续前进的方式实现目标。",
        'zh-TW': "你平衡穩定的能量有助於穩定和諧的發展。你可以通過不受周圍環境影響、持續前進的方式實現目標。"
      },
      career: { 
        en: "You can expect stable growth in your career. Your rational judgment and harmonious interpersonal skills will be highly regarded in any organization.", 
        ko: "직업적으로 안정적인 성장을 기대할 수 있습니다. 당신의 합리적인 판단력과 원만한 대인관계는 어떤 조직에서든 좋은 평가를 받을 것입니다.",
        de: "Sie können ein stabiles Wachstum in Ihrer Karriere erwarten. Ihr rationales Urteilsvermögen und Ihre harmonischen zwischenmenschlichen Fähigkeiten werden in jeder Organisation hoch geschätzt.",
        es: "Puedes esperar un crecimiento estable en tu carrera. Tu juicio racional y tus habilidades interpersonales armoniosas serán muy valoradas en cualquier organización.",
        fr: "Vous pouvez vous attendre à une croissance stable dans votre carrière. Votre jugement rationnel et vos compétences interpersonnelles harmonieuses seront très appréciés dans toute organisation.",
        id: "Anda dapat mengharapkan pertumbuhan yang stabil dalam karir Anda. Penilaian rasional dan keterampilan interpersonal Anda yang harmonis akan sangat dihargai di organisasi mana pun.",
        it: "Puoi aspettarti una crescita stabile nella tua carriera. Il tuo giudizio razionale e le tue armoniose capacità interpersonali saranno molto apprezzate in qualsiasi organizzazione.",
        ja: "あなたはキャリアにおいて安定した成長を期待できます。あなたの合理的な判断力と調和のとれた対人関係スキルは、どの組織でも高く評価されます。",
        pt: "Você pode esperar um crescimento estável em sua carreira. Seu julgamento racional e suas habilidades interpessoais harmoniosas serão muito valorizados em qualquer organização.",
        ru: "Вы можете ожидать стабильного роста в своей карьере. Ваше рациональное суждение и гармоничные навыки межличностного общения будут высоко оценены в любой организации.",
        th: "คุณสามารถคาดหวังการเติบโตที่มั่นคงในอาชีพการงานของคุณ การตัดสินอย่างมีเหตุผลและทักษะความสัมพันธ์ระหว่างบุคคลที่กลมกลืนกันของคุณจะได้รับการยอมรับอย่างสูงในทุกองค์กร",
        'zh-CN': "你的职业生涯有望稳定发展。你的理性判断与和谐的人际交往能力在任何组织中都会受到高度评价。",
        'zh-TW': "你的職業生涯有望穩定發展。你的理性判斷與和諧的人際交往能力在任何組織中都會受到高度評價。"
      },
      love: { 
        en: "You are able to have a comfortable and stable relationship. You will form a deep and trusting relationship by respecting and understanding each other.", 
        ko: "편안하고 안정적인 연애를 할 수 있는 기운입니다. 서로를 존중하고 이해하며 깊은 신뢰 관계를 형성할 것입니다.",
        de: "Sie sind in der Lage, eine angenehme und stabile Beziehung zu führen. Sie werden eine tiefe und vertrauensvolle Beziehung aufbauen, indem Sie sich gegenseitig respektieren und verstehen.",
        es: "Eres capaz de tener una relación cómoda y estable. Formarás una relación profunda y de confianza respetándoos y entendiéndoos mutuamente.",
        fr: "Vous êtes capable d'avoir une relation confortable et stable. Vous formerez une relation profonde et de confiance en vous respectant et en vous comprenant mutuellement.",
        id: "Anda mampu memiliki hubungan yang nyaman dan stabil. Anda akan membentuk hubungan yang dalam dan saling percaya dengan saling menghormati dan memahami.",
        it: "Sei in grado di avere una relazione comoda e stabile. Formerai una relazione profonda e fiduciosa rispettandovi e comprendendovi a vicenda.",
        ja: "あなたは快適で安定した関係を築くことができます。お互いを尊重し理解することで、深く信頼できる関係を築くことができます。",
        pt: "Você é capaz de ter um relacionamento confortável e estável. Você formará um relacionamento profundo e de confiança, respeitando e compreendendo um ao outro.",
        ru: "Вы способны иметь комфортные и стабильные отношения. Вы создадите глубокие и доверительные отношения, уважая и понимая друг друга.",
        th: "คุณสามารถมีความสัมพันธ์ที่สบายและมั่นคงได้ คุณจะสร้างความสัมพันธ์ที่ลึกซึ้งและไว้วางใจได้โดยการเคารพและเข้าใจซึ่งกันและกัน",
        'zh-CN': "你能够拥有一段舒适稳定的关系。你们会通过相互尊重和理解，建立起深厚而信任的关系。",
        'zh-TW': "你能夠擁有一段舒適穩定的關係。你們會通過相互尊重和理解，建立起深厚而信任的關係。"
      },
      health: { 
        en: "You have a balanced state of mind and body, allowing you to maintain good health. A regular lifestyle and moderate exercise will be of great help.", 
        ko: "몸과 마음이 균형 잡힌 상태로, 건강을 잘 유지할 수 있습니다. 규칙적인 생활과 적당한 운동이 큰 도움이 될 것입니다.",
        de: "Sie haben einen ausgeglichenen Zustand von Geist und Körper, der es Ihnen ermöglicht, eine gute Gesundheit zu erhalten. Ein regelmäßiger Lebensstil und moderate Bewegung werden eine große Hilfe sein.",
        es: "Tienes un estado equilibrado de mente y cuerpo, lo que te permite mantener una buena salud. Un estilo de vida regular y ejercicio moderado serán de gran ayuda.",
        fr: "Vous avez un état d'esprit et de corps équilibré, ce qui vous permet de maintenir une bonne santé. Un mode de vie régulier et une activité physique modérée vous seront d'une grande aide.",
        id: "Anda memiliki kondisi pikiran dan tubuh yang seimbang, memungkinkan Anda untuk menjaga kesehatan yang baik. Gaya hidup teratur dan olahraga sedang akan sangat membantu.",
        it: "Hai uno stato equilibrato di mente e corpo, che ti consente di mantenere una buona salute. Uno stile di vita regolare e un moderato esercizio fisico saranno di grande aiuto.",
        ja: "あなたは心と体のバランスが取れており、健康を維持することができます。規則正しい生活と適度な運動が大きな助けになります。",
        pt: "Você tem um estado equilibrado de mente e corpo, permitindo que você mantenha uma boa saúde. Um estilo de vida regular e exercícios moderados serão de grande ajuda.",
        ru: "У вас сбалансированное состояние ума и тела, что позволяет вам поддерживать хорошее здоровье. Регулярный образ жизни и умеренные физические нагрузки окажут большую помощь.",
        th: "คุณมีสภาวะของจิตใจและร่างกายที่สมดุล ทำให้คุณสามารถรักษาสุขภาพที่ดีได้ การใช้ชีวิตอย่างสม่ำเสมอและการออกกำลังกายในระดับปานกลางจะช่วยได้มาก",
        'zh-CN': "你身心状态均衡，有助于保持身体健康。规律的生活方式和适度的锻炼将大有裨益。",
        'zh-TW': "你身心狀態均衡，有助於保持身體健康。規律的生活方式和適度的鍛煉將大有裨益。"
      },
      wealth: { 
        en: "You can build wealth in a stable manner. You will achieve financial stability through systematic financial management rather than risky investments.", 
        ko: "안정적으로 재물을 쌓아갈 수 있습니다. 위험한 투자보다는 체계적인 재무 관리를 통해 재정적 안정을 이룰 것입니다.",
        de: "Sie können auf stabile Weise Wohlstand aufbauen. Sie werden finanzielle Stabilität durch systematisches Finanzmanagement und nicht durch riskante Investitionen erreichen.",
        es: "Puedes acumular riqueza de manera estable. Lograrás la estabilidad financiera a través de una gestión financiera sistemática en lugar de inversiones arriesgadas.",
        fr: "Vous pouvez accumuler de la richesse de manière stable. Vous atteindrez la stabilité financière grâce à une gestion financière systématique plutôt qu'à des investissements risqués.",
        id: "Anda dapat membangun kekayaan dengan cara yang stabil. Anda akan mencapai stabilitas keuangan melalui manajemen keuangan yang sistematis daripada investasi yang berisiko.",
        it: "Puoi costruire ricchezza in modo stabile. Raggiungerai la stabilità finanziaria attraverso una gestione finanziaria sistematica piuttosto che investimenti rischiosi.",
        ja: "あなたは安定した方法で富を築くことができます。危険な投資ではなく、体系的な財務管理を通じて経済的安定を達成します。",
        pt: "Você pode construir riqueza de maneira estável. Você alcançará a estabilidade financeira por meio de uma gestão financeira sistemática, em vez de investimentos arriscados.",
        ru: "Вы можете стабильно накапливать богатство. Вы достигнете финансовой стабильности за счет систематического финансового управления, а не рискованных инвестиций.",
        th: "คุณสามารถสร้างความมั่งคั่งได้อย่างมั่นคง คุณจะบรรลุความมั่นคงทางการเงินผ่านการจัดการทางการเงินอย่างเป็นระบบมากกว่าการลงทุนที่มีความเสี่ยง",
        'zh-CN': "你可以稳定地积累财富。你将通过系统的财务管理而非风险投资来实现财务稳定。",
        'zh-TW': "你可以穩定地積累財富。你將通過系統的財務管理而非風險投資來實現財務穩定。"
      },
      advice: { 
        en: "Maintain your current balance and continue to move forward. Your steady efforts will surely lead to great results.", 
        ko: "지금의 균형을 잘 유지하며 꾸준히 나아가세요. 당신의 꾸준한 노력은 반드시 큰 결실로 이어질 것입니다.",
        de: "Halten Sie Ihr aktuelles Gleichgewicht und bewegen Sie sich weiter vorwärts. Ihre stetigen Bemühungen werden mit Sicherheit zu großartigen Ergebnissen führen.",
        es: "Mantén tu equilibrio actual y sigue avanzando. Tus esfuerzos constantes seguramente te llevarán a grandes resultados.",
        fr: "Maintenez votre équilibre actuel et continuez à avancer. Vos efforts constants mèneront sûrement à d'excellents résultats.",
        id: "Pertahankan keseimbangan Anda saat ini dan terus maju. Upaya Anda yang mantap pasti akan membuahkan hasil yang luar biasa.",
        it: "Mantieni il tuo equilibrio attuale e continua ad andare avanti. I tuoi sforzi costanti porteranno sicuramente a grandi risultati.",
        ja: "現在のバランスを維持し、前進し続けてください。あなたの着実な努力は、必ずや素晴らしい結果につながるでしょう。",
        pt: "Mantenha seu equilíbrio atual e continue avançando. Seus esforços constantes certamente levarão a ótimos resultados.",
        ru: "Поддерживайте свой текущий баланс и продолжайте двигаться вперед. Ваши постоянные усилия обязательно приведут к отличным результатам.",
        th: "รักษาสมดุลในปัจจุบันของคุณและก้าวไปข้างหน้าต่อไป ความพยายามอย่างสม่ำเสมอของคุณจะนำไปสู่ผลลัพธ์ที่ยอดเยี่ยมอย่างแน่นอน",
        'zh-CN': "保持你目前的平衡，继续前进。你稳健的努力必将带来丰硕的成果。",
        'zh-TW': "保持你目前的平衡，繼續前進。你穩健的努力必將帶來豐碩的成果。"
      }
    },
    'weak': {
      overall: { 
        en: "You have a delicate and sensitive nature, so you need to protect and nurture your energy. It is important to have people around you who can support you.", 
        ko: "섬세하고 예민한 기운을 가지고 있으므로, 자신의 에너지를 보호하고 가꾸는 노력이 필요합니다. 주변에 당신을 지지해주는 사람들을 두는 것이 중요합니다.",
        de: "Sie haben eine zarte und empfindliche Natur, daher müssen Sie Ihre Energie schützen und pflegen. Es ist wichtig, Menschen um sich zu haben, die Sie unterstützen können.",
        es: "Tienes una naturaleza delicada y sensible, por lo que necesitas proteger y nutrir tu energía. Es importante tener personas a tu alrededor que puedan apoyarte.",
        fr: "Vous avez une nature délicate et sensible, vous devez donc protéger et nourrir votre énergie. Il est important d'avoir des gens autour de vous qui peuvent vous soutenir.",
        id: "Anda memiliki sifat yang lembut dan sensitif, jadi Anda perlu melindungi dan memelihara energi Anda. Penting untuk memiliki orang-orang di sekitar Anda yang dapat mendukung Anda.",
        it: "Hai una natura delicata e sensibile, quindi devi proteggere e nutrire la tua energia. È importante avere persone intorno a te che possano supportarti.",
        ja: "あなたは繊細で敏感な性質を持っているので、あなたのエネルギーを保護し、育む必要があります。あなたをサポートしてくれる人が周りにいることが重要です。",
        pt: "Você tem uma natureza delicada e sensível, então precisa proteger e nutrir sua energia. É importante ter pessoas ao seu redor que possam apoiá-lo.",
        ru: "У вас нежная и чувствительная натура, поэтому вам нужно защищать и питать свою энергию. Важно, чтобы вас окружали люди, которые могут вас поддержать.",
        th: "คุณมีธรรมชาติที่ละเอียดอ่อนและอ่อนไหว ดังนั้นคุณต้องปกป้องและบำรุงพลังงานของคุณ สิ่งสำคัญคือต้องมีคนรอบข้างที่สามารถสนับสนุนคุณได้",
        'zh-CN': "你天性细腻敏感，所以你需要保护和培养你的能量。身边有能支持你的人很重要。",
        'zh-TW': "你天性細膩敏感，所以你需要保護和培養你的能量。身邊有能支持你的人很重要。"
      },
      career: { 
        en: "It is better to work as part of a team than to take the lead. Your consideration for others and your ability to cooperate will shine in a stable organization.", 
        ko: "전면에 나서기보다는 팀의 일원으로서 협력하는 것이 좋습니다. 안정적인 조직 안에서 당신의 배려심과 협동심이 빛을 발할 것입니다.",
        de: "Es ist besser, als Teil eines Teams zu arbeiten, als die Führung zu übernehmen. Ihre Rücksichtnahme auf andere und Ihre Fähigkeit zur Zusammenarbeit werden in einer stabilen Organisation glänzen.",
        es: "Es mejor trabajar como parte de un equipo que tomar la iniciativa. Tu consideración por los demás y tu capacidad para cooperar brillarán en una organización estable.",
        fr: "Il est préférable de travailler en équipe plutôt que de prendre les devants. Votre considération pour les autres et votre capacité à coopérer brilleront dans une organisation stable.",
        id: "Lebih baik bekerja sebagai bagian dari tim daripada memimpin. Pertimbangan Anda terhadap orang lain dan kemampuan Anda untuk bekerja sama akan bersinar dalam organisasi yang stabil.",
        it: "È meglio lavorare come parte di un team piuttosto che prendere il comando. La tua considerazione per gli altri e la tua capacità di cooperare brilleranno in un'organizzazione stabile.",
        ja: "主導権を握るよりも、チームの一員として働く方が良いでしょう。他者への配慮と協力する能力は、安定した組織で輝きます。",
        pt: "É melhor trabalhar como parte de uma equipe do que assumir a liderança. Sua consideração pelos outros e sua capacidade de cooperar brilharão em uma organização estável.",
        ru: "Лучше работать в команде, чем брать на себя инициативу. Ваша внимательность к другим и ваша способность к сотрудничеству проявятся в стабильной организации.",
        th: "การทำงานเป็นส่วนหนึ่งของทีมดีกว่าการเป็นผู้นำ ความเห็นอกเห็นใจผู้อื่นและความสามารถในการร่วมมือของคุณจะเปล่งประกายในองค์กรที่มั่นคง",
        'zh-CN': "作为团队的一员工作比带头要好。你对他人的体谅和合作能力将在一个稳定的组织中大放异彩。",
        'zh-TW': "作為團隊的一員工作比帶頭要好。你對他人的體諒和合作能力將在一個穩定的組織中大放異彩。"
      },
      love: { 
        en: "You may feel insecure in relationships, so you need a partner who is understanding and supportive. Express your feelings honestly and build trust.", 
        ko: "관계에 있어 불안감을 느낄 수 있으므로, 이해심 많고 지지적인 파트너가 필요합니다. 자신의 감정을 솔직하게 표현하고 신뢰를 쌓아가세요.",
        de: "Sie fühlen sich in Beziehungen möglicherweise unsicher, daher brauchen Sie einen verständnisvollen und unterstützenden Partner. Drücken Sie Ihre Gefühle ehrlich aus und bauen Sie Vertrauen auf.",
        es: "Puedes sentirte inseguro en las relaciones, por lo que necesitas una pareja que sea comprensiva y te apoye. Expresa tus sentimientos con honestidad y genera confianza.",
        fr: "Vous pouvez vous sentir en insécurité dans les relations, vous avez donc besoin d'un partenaire compréhensif et qui vous soutient. Exprimez vos sentiments honnêtement et établissez la confiance.",
        id: "Anda mungkin merasa tidak aman dalam hubungan, jadi Anda membutuhkan pasangan yang pengertian dan suportif. Ungkapkan perasaan Anda dengan jujur ​​dan bangun kepercayaan.",
        it: "Potresti sentirti insicuro nelle relazioni, quindi hai bisogno di un partner che sia comprensivo e di supporto. Esprimi i tuoi sentimenti onestamente e costruisci la fiducia.",
        ja: "あなたは人間関係に不安を感じるかもしれないので、理解があり協力的なパートナーが必要です。自分の気持ちを正直に表現し、信頼を築きましょう。",
        pt: "Você pode se sentir inseguro nos relacionamentos, então precisa de um parceiro que seja compreensivo e solidário. Expresse seus sentimentos honestamente e construa confiança.",
        ru: "Вы можете чувствовать себя неуверенно в отношениях, поэтому вам нужен понимающий и поддерживающий партнер. Честно выражайте свои чувства и укрепляйте доверие.",
        th: "คุณอาจรู้สึกไม่ปลอดภัยในความสัมพันธ์ ดังนั้นคุณจึงต้องการคู่ครองที่เข้าใจและให้การสนับสนุน แสดงความรู้สึกของคุณอย่างตรงไปตรงมาและสร้างความไว้วางใจ",
        'zh-CN': "你在恋爱关系中可能会感到不安全，所以你需要一个善解人意、支持你的伴侣。诚实地表达你的感受，建立信任。",
        'zh-TW': "你在戀愛關係中可能會感到不安全，所以你需要一個善解人意、支持你的伴侶。誠實地表達你的感受，建立信任。"
      },
      health: { 
        en: "Your energy can be easily depleted, so you need enough rest and stress management. It is good to find your own way to relax your mind and body.", 
        ko: "에너지가 쉽게 소진될 수 있으므로 충분한 휴식과 스트레스 관리가 필수적입니다. 몸과 마음을 이완시키는 자신만의 방법을 찾는 것이 좋습니다.",
        de: "Ihre Energie kann leicht erschöpft sein, daher brauchen Sie ausreichend Ruhe und Stressbewältigung. Es ist gut, einen eigenen Weg zu finden, um Körper und Geist zu entspannen.",
        es: "Tu energía se puede agotar fácilmente, por lo que necesitas suficiente descanso y manejo del estrés. Es bueno encontrar tu propia manera de relajar tu mente y tu cuerpo.",
        fr: "Votre énergie peut être facilement épuisée, vous avez donc besoin de suffisamment de repos et de gestion du stress. Il est bon de trouver votre propre façon de détendre votre esprit et votre corps.",
        id: "Energi Anda dapat dengan mudah terkuras, jadi Anda perlu cukup istirahat dan manajemen stres. Baik untuk menemukan cara Anda sendiri untuk merilekskan pikiran dan tubuh Anda.",
        it: "La tua energia può essere facilmente esaurita, quindi hai bisogno di riposo sufficiente e di gestione dello stress. È bene trovare il proprio modo per rilassare la mente e il corpo.",
        ja: "あなたのエネルギーは簡単に枯渇する可能性があるので、十分な休息とストレス管理が必要です。心と体をリラックスさせる独自の方法を見つけるのが良いでしょう。",
        pt: "Sua energia pode se esgotar facilmente, então você precisa de descanso suficiente e gerenciamento do estresse. É bom encontrar sua própria maneira de relaxar sua mente e corpo.",
        ru: "Ваша энергия может легко истощиться, поэтому вам нужен достаточный отдых и управление стрессом. Хорошо найти свой собственный способ расслабить свой разум и тело.",
        th: "พลังงานของคุณสามารถหมดลงได้ง่าย ดังนั้นคุณต้องพักผ่อนให้เพียงพอและจัดการความเครียด เป็นการดีที่จะหาวิธีผ่อนคลายจิตใจและร่างกายของคุณเอง",
        'zh-CN': "你的精力很容易耗尽，所以你需要充足的休息和压力管理。找到自己放松身心的方式是很好的。",
        'zh-TW': "你的精力很容易耗盡，所以你需要充足的休息和壓力管理。找到自己放鬆身心的方式是很好的。"
      },
      wealth: { 
        en: "It is more important to manage your assets stably than to pursue large wealth. Avoid risky investments and focus on saving and long-term planning.", 
        ko: "큰 재물을 좇기보다는 안정적으로 자산을 관리하는 것이 중요합니다. 위험한 투자는 피하고, 저축과 장기적인 계획에 집중하세요.",
        de: "Es ist wichtiger, Ihr Vermögen stabil zu verwalten, als großen Reichtum anzustreben. Vermeiden Sie riskante Investitionen und konzentrieren Sie sich auf Sparen und langfristige Planung.",
        es: "Es más importante administrar tus activos de manera estable que perseguir una gran riqueza. Evita las inversiones arriesgadas y céntrate en el ahorro y la planificación a largo plazo.",
        fr: "Il est plus important de gérer vos actifs de manière stable que de rechercher une grande richesse. Évitez les investissements risqués et concentrez-vous sur l'épargne et la planification à long terme.",
        id: "Lebih penting mengelola aset Anda secara stabil daripada mengejar kekayaan besar. Hindari investasi berisiko dan fokus pada tabungan dan perencanaan jangka panjang.",
        it: "È più importante gestire i tuoi beni in modo stabile piuttosto che perseguire una grande ricchezza. Evita investimenti rischiosi e concentrati sul risparmio e sulla pianificazione a lungo termine.",
        ja: "大きな富を追求するよりも、安定して資産を管理することがより重要です。危険な投資を避け、貯蓄と長期計画に集中してください。",
        pt: "É mais importante gerenciar seus ativos de forma estável do que buscar grandes riquezas. Evite investimentos arriscados e concentre-se na poupança e no planejamento de longo prazo.",
        ru: "Важнее стабильно управлять своими активами, чем гнаться за большим богатством. Избегайте рискованных инвестиций и сосредоточьтесь на сбережениях и долгосрочном планировании.",
        th: "การจัดการทรัพย์สินของคุณอย่างมั่นคงสำคัญกว่าการแสวงหาความมั่งคั่งจำนวนมาก หลีกเลี่ยงการลงทุนที่มีความเสี่ยงและมุ่งเน้นไปที่การออมและการวางแผนระยะยาว",
        'zh-CN': "稳定地管理你的资产比追求巨额财富更重要。避免风险投资，专注于储蓄和长期规划。",
        'zh-TW': "穩定地管理你的資產比追求巨額財富更重要。避免風險投資，專注於儲蓄和長期規劃。"
      },
      advice: { 
        en: "Don't be afraid to ask for help from those around you. Recognizing and supplementing your weaknesses is true wisdom.", 
        ko: "주변에 도움을 청하는 것을 두려워하지 마세요. 자신의 약점을 인정하고 보완해나가는 것이 진정한 지혜입니다.",
        de: "Haben Sie keine Angst, die Menschen um Sie herum um Hilfe zu bitten. Ihre Schwächen zu erkennen und zu ergänzen, ist wahre Weisheit.",
        es: "No tengas miedo de pedir ayuda a quienes te rodean. Reconocer y complementar tus debilidades es la verdadera sabiduría.",
        fr: "N'ayez pas peur de demander de l'aide à votre entourage. Reconnaître et compléter ses faiblesses est la vraie sagesse.",
        id: "Jangan takut untuk meminta bantuan dari orang-orang di sekitar Anda. Mengenali dan melengkapi kelemahan Anda adalah kebijaksanaan sejati.",
        it: "Non aver paura di chiedere aiuto a chi ti circonda. Riconoscere e integrare le proprie debolezze è vera saggezza.",
        ja: "周りの人に助けを求めることを恐れないでください。自分の弱点を認識し、補うことが真の知恵です。",
        pt: "Não tenha medo de pedir ajuda às pessoas ao seu redor. Reconhecer e complementar suas fraquezas é a verdadeira sabedoria.",
        ru: "Не бойтесь просить помощи у окружающих. Признание и восполнение своих слабостей - истинная мудрость.",
        th: "อย่ากลัวที่จะขอความช่วยเหลือจากคนรอบข้าง การตระหนักและเสริมจุดอ่อนของคุณคือปัญญาที่แท้จริง",
        'zh-CN': "不要害怕向周围的人寻求帮助。认识到并弥补自己的弱点是真正的智慧。",
        'zh-TW': "不要害怕向周圍的人尋求幫助。認識到並彌補自己的弱點是真正的智慧。"
      }
    },
    'very-weak': {
      overall: { 
        en: "Your energy is very delicate, so you need active effort to strengthen it. It is most important to create a stable environment and take care of your health.", 
        ko: "기운이 매우 섬세하므로, 이를 강화하기 위한 적극적인 노력이 필요합니다. 안정적인 환경을 조성하고 건강을 돌보는 것이 가장 중요합니다.",
        de: "Ihre Energie ist sehr empfindlich, daher benötigen Sie aktive Anstrengungen, um sie zu stärken. Es ist am wichtigsten, eine stabile Umgebung zu schaffen und auf Ihre Gesundheit zu achten.",
        es: "Tu energía es muy delicada, por lo que necesitas un esfuerzo activo para fortalecerla. Lo más importante es crear un ambiente estable y cuidar tu salud.",
        fr: "Votre énergie est très délicate, vous avez donc besoin d'efforts actifs pour la renforcer. Le plus important est de créer un environnement stable et de prendre soin de votre santé.",
        id: "Energi Anda sangat halus, jadi Anda perlu upaya aktif untuk memperkuatnya. Yang paling penting adalah menciptakan lingkungan yang stabil dan menjaga kesehatan Anda.",
        it: "La tua energia è molto delicata, quindi hai bisogno di uno sforzo attivo per rafforzarla. La cosa più importante è creare un ambiente stabile e prendersi cura della propria salute.",
        ja: "あなたのエネルギーは非常にデリケートなので、それを強化するための積極的な努力が必要です。安定した環境を作り、健康に気をつけることが最も重要です。",
        pt: "Sua energia é muito delicada, então você precisa de um esforço ativo para fortalecê-la. O mais importante é criar um ambiente estável e cuidar da sua saúde.",
        ru: "Ваша энергия очень нежна, поэтому вам нужны активные усилия, чтобы ее укрепить. Самое главное - создать стабильную обстановку и заботиться о своем здоровье.",
        th: "พลังงานของคุณละเอียดอ่อนมาก ดังนั้นคุณต้องใช้ความพยายามอย่างแข็งขันเพื่อเสริมสร้างมัน สิ่งสำคัญที่สุดคือการสร้างสภาพแวดล้อมที่มั่นคงและดูแลสุขภาพของคุณ",
        'zh-CN': "你的能量非常微妙，所以你需要积极努力来加强它。最重要的是创造一个稳定的环境并照顾好你的健康。",
        'zh-TW': "你的能量非常微妙，所以你需要積極努力來加強它。最重要的是創造一個穩定的環境並照顧好你的健康。"
      },
      career: { 
        en: "It is wise to choose a profession that is not overly stressful and where you can work at your own pace. Your meticulousness and sincerity will be your greatest strengths.", 
        ko: "스트레스가 과도하지 않고 자신의 속도에 맞춰 일할 수 있는 직업을 선택하는 것이 현명합니다. 당신의 꼼꼼함과 성실함이 가장 큰 무기가 될 것입니다.",
        de: "Es ist klug, einen Beruf zu wählen, der nicht übermäßig stressig ist und in dem Sie in Ihrem eigenen Tempo arbeiten können. Ihre Akribie und Aufrichtigkeit werden Ihre größten Stärken sein.",
        es: "Es aconsejable elegir una profesión que no sea demasiado estresante y en la que puedas trabajar a tu propio ritmo. Tu meticulosidad y sinceridad serán tus mayores fortalezas.",
        fr: "Il est sage de choisir une profession qui n'est pas trop stressante et où vous pouvez travailler à votre propre rythme. Votre méticulosité et votre sincérité seront vos plus grandes forces.",
        id: "Adalah bijaksana untuk memilih profesi yang tidak terlalu membuat stres dan di mana Anda dapat bekerja dengan kecepatan Anda sendiri. Ketelitian dan ketulusan Anda akan menjadi kekuatan terbesar Anda.",
        it: "È saggio scegliere una professione che non sia eccessivamente stressante e in cui si possa lavorare al proprio ritmo. La tua meticolosità e sincerità saranno i tuoi maggiori punti di forza.",
        ja: "過度にストレスがなく、自分のペースで仕事ができる職業を選ぶのが賢明です。あなたの細心さと誠実さが最大の武器になります。",
        pt: "É sábio escolher uma profissão que não seja excessivamente estressante e onde você possa trabalhar no seu próprio ritmo. Sua meticulosidade e sinceridade serão seus maiores pontos fortes.",
        ru: "Разумно выбирать профессию, которая не является чрезмерно напряженной и где вы можете работать в своем собственном темпе. Ваша дотошность и искренность будут вашими самыми большими сильными сторонами.",
        th: "เป็นการฉลาดที่จะเลือกอาชีพที่ไม่เครียดจนเกินไปและที่คุณสามารถทำงานได้ตามจังหวะของคุณเอง ความพิถีพิถันและความจริงใจของคุณจะเป็นจุดแข็งที่ยิ่งใหญ่ที่สุดของคุณ",
        'zh-CN': "明智的做法是选择一个压力不要太大、可以按照自己的节奏工作的职业。你的细致和真诚将是你最大的优势。",
        'zh-TW': "明智的做法是選擇一個壓力不要太大、可以按照自己的節奏工作的職業。你的細緻和真誠將是你最大的優勢。"
      },
      love: { 
        en: "You need a partner who can provide unconditional support and a sense of security. A relationship where you can be a source of strength for each other will bring stability.", 
        ko: "절대적인 지지와 안정감을 줄 수 있는 파트너가 필요합니다. 서로에게 힘이 되어주는 관계를 통해 안정을 찾을 수 있습니다.",
        de: "Sie brauchen einen Partner, der bedingungslose Unterstützung und ein Gefühl der Sicherheit geben kann. Eine Beziehung, in der Sie füreinander eine Kraftquelle sein können, wird Stabilität bringen.",
        es: "Necesitas una pareja que pueda brindarte un apoyo incondicional y una sensación de seguridad. Una relación en la que puedan ser una fuente de fortaleza el uno para el otro traerá estabilidad.",
        fr: "Vous avez besoin d'un partenaire qui peut vous apporter un soutien inconditionnel et un sentiment de sécurité. Une relation où vous pouvez être une source de force l'un pour l'autre apportera la stabilité.",
        id: "Anda membutuhkan pasangan yang dapat memberikan dukungan tanpa syarat dan rasa aman. Hubungan di mana Anda bisa menjadi sumber kekuatan bagi satu sama lain akan membawa stabilitas.",
        it: "Hai bisogno di un partner che possa fornire un supporto incondizionato e un senso di sicurezza. Una relazione in cui potete essere una fonte di forza l'uno per l'altro porterà stabilità.",
        ja: "あなたは無条件のサポートと安心感を提供できるパートナーが必要です。お互いの力の源になれる関係は、安定をもたらします。",
        pt: "Você precisa de um parceiro que possa fornecer apoio incondicional e uma sensação de segurança. Um relacionamento onde vocês possam ser uma fonte de força um para o outro trará estabilidade.",
        ru: "Вам нужен партнер, который может оказать безоговорочную поддержку и дать чувство безопасности. Отношения, в которых вы можете быть источником силы друг для друга, принесут стабильность.",
        th: "คุณต้องการคู่ครองที่สามารถให้การสนับสนุนอย่างไม่มีเงื่อนไขและความรู้สึกปลอดภัยได้ ความสัมพันธ์ที่คุณสามารถเป็นแหล่งพลังให้กันและกันได้จะนำมาซึ่งความมั่นคง",
        'zh-CN': "你需要一个能提供无条件支持和安全感的伴侣。一段可以互相成为力量源泉的关系会带来稳定。",
        'zh-TW': "你需要一個能提供無條件支持和安全感的伴侶。一段可以互相成為力量源泉的關係會帶來穩定。"
      },
      health: { 
        en: "Your immunity can be weak, so you need special attention to your health. A nutritious diet, regular exercise, and sufficient sleep are essential.", 
        ko: "면역력이 약할 수 있으므로 건강에 각별한 주의가 필요합니다. 영양가 있는 식단과 규칙적인 운동, 충분한 수면은 필수적입니다.",
        de: "Ihre Immunität kann schwach sein, daher müssen Sie besonders auf Ihre Gesundheit achten. Eine nahrhafte Ernährung, regelmäßige Bewegung und ausreichend Schlaf sind unerlässlich.",
        es: "Tu inmunidad puede ser débil, por lo que necesitas prestar especial atención a tu salud. Una dieta nutritiva, ejercicio regular y un sueño suficiente son esenciales.",
        fr: "Votre immunité peut être faible, vous devez donc porter une attention particulière à votre santé. Une alimentation nutritive, une activité physique régulière et un sommeil suffisant sont essentiels.",
        id: "Kekebalan tubuh Anda bisa lemah, jadi Anda perlu perhatian khusus pada kesehatan Anda. Diet bergizi, olahraga teratur, dan tidur yang cukup sangat penting.",
        it: "La tua immunità può essere debole, quindi devi prestare particolare attenzione alla tua salute. Una dieta nutriente, un regolare esercizio fisico e un sonno sufficiente sono essenziali.",
        ja: "あなたの免疫力は弱い可能性があるので、健康に特別な注意を払う必要があります。栄養価の高い食事、定期的な運動、十分な睡眠が不可欠です。",
        pt: "Sua imunidade pode estar fraca, então você precisa de atenção especial à sua saúde. Uma dieta nutritiva, exercícios regulares e sono suficiente são essenciais.",
        ru: "Ваш иммунитет может быть ослаблен, поэтому вам нужно уделять особое внимание своему здоровью. Питательная диета, регулярные физические упражнения и достаточный сон необходимы.",
        th: "ภูมิคุ้มกันของคุณอาจอ่อนแอ ดังนั้นคุณต้องให้ความสนใจเป็นพิเศษกับสุขภาพของคุณ อาหารที่มีคุณค่าทางโภชนาการ การออกกำลังกายอย่างสม่ำเสมอ และการนอนหลับที่เพียงพอเป็นสิ่งสำคัญ",
        'zh-CN': "你的免疫力可能较弱，所以你需要特别注意你的健康。营养丰富的饮食、定期锻炼和充足的睡眠至关重要。",
        'zh-TW': "你的免疫力可能較弱，所以你需要特別注意你的健康。營養豐富的飲食、定期鍛煉和充足的睡眠至關重要。"
      },
      wealth: { 
        en: "Your primary goal should be financial stability rather than increasing wealth. Focus on risk management and avoid any speculative investments.", 
        ko: "재물을 늘리는 것보다 재정적 안정을 최우선 목표로 삼아야 합니다. 위험 관리에 집중하고, 어떠한 투기성 투자도 피하는 것이 좋습니다.",
        de: "Ihr Hauptziel sollte die finanzielle Stabilität sein und nicht die Vermehrung des Vermögens. Konzentrieren Sie sich auf das Risikomanagement und vermeiden Sie spekulative Anlagen.",
        es: "Tu objetivo principal debe ser la estabilidad financiera en lugar de aumentar la riqueza. Concéntrate en la gestión de riesgos y evita cualquier inversión especulativa.",
        fr: "Votre objectif principal devrait être la stabilité financière plutôt que l'augmentation de la richesse. Concentrez-vous sur la gestion des risques et évitez tout investissement spéculatif.",
        id: "Tujuan utama Anda haruslah stabilitas keuangan daripada meningkatkan kekayaan. Fokus pada manajemen risiko dan hindari investasi spekulatif apa pun.",
        it: "Il tuo obiettivo primario dovrebbe essere la stabilità finanziaria piuttosto che l'aumento della ricchezza. Concentrati sulla gestione del rischio ed evita qualsiasi investimento speculativo.",
        ja: "あなたの主な目標は、富を増やすことよりも経済的な安定であるべきです。リスク管理に集中し、投機的な投資は避けてください。",
        pt: "Seu objetivo principal deve ser a estabilidade financeira em vez de aumentar a riqueza. Concentre-se na gestão de riscos e evite quaisquer investimentos especulativos.",
        ru: "Вашей основной целью должна быть финансовая стабильность, а не увеличение богатства. Сосредоточьтесь на управлении рисками и избегайте любых спекулятивных инвестиций.",
        th: "เป้าหมายหลักของคุณควรเป็นความมั่นคงทางการเงินมากกว่าการเพิ่มความมั่งคั่ง มุ่งเน้นไปที่การบริหารความเสี่ยงและหลีกเลี่ยงการลงทุนเก็งกำไรใดๆ",
        'zh-CN': "你的主要目标应该是财务稳定，而不是增加财富。专注于风险管理，避免任何投机性投资。",
        'zh-TW': "你的主要目標應該是財務穩定，而不是增加財富。專注於風險管理，避免任何投機性投資。"
      },
      advice: { 
        en: "First, focus on taking care of yourself. When your inner strength is built up, you will have the opportunity to slowly expand your activities.", 
        ko: "먼저 자기 자신을 돌보는 것에 집중하세요. 내면의 힘이 길러지면, 점차 활동 범위를 넓혀갈 기회가 찾아올 것입니다.",
        de: "Konzentrieren Sie sich zuerst darauf, auf sich selbst aufzupassen. Wenn Ihre innere Stärke aufgebaut ist, haben Sie die Möglichkeit, Ihre Aktivitäten langsam zu erweitern.",
        es: "Primero, concéntrate en cuidarte a ti mismo. Cuando tu fuerza interior se desarrolle, tendrás la oportunidad de expandir lentamente tus actividades.",
        fr: "Tout d'abord, concentrez-vous sur le fait de prendre soin de vous. Lorsque votre force intérieure sera développée, vous aurez l'occasion d'étendre lentement vos activités.",
        id: "Pertama, fokuslah untuk merawat diri sendiri. Ketika kekuatan batin Anda terbangun, Anda akan memiliki kesempatan untuk perlahan-lahan memperluas aktivitas Anda.",
        it: "Innanzitutto, concentrati sulla cura di te stesso. Quando la tua forza interiore sarà cresciuta, avrai l'opportunità di espandere lentamente le tue attività.",
        ja: "まず、自分自身の世話をすることに集中してください。内なる強さが身につくと、ゆっくりと活動を拡大する機会が得られます。",
        pt: "Primeiro, concentre-se em cuidar de si mesmo. Quando sua força interior for construída, você terá a oportunidade de expandir lentamente suas atividades.",
        ru: "Во-первых, сосредоточьтесь на заботе о себе. Когда ваша внутренняя сила укрепится, у вас появится возможность постепенно расширять свою деятельность.",
        th: "ก่อนอื่นให้มุ่งเน้นไปที่การดูแลตัวเอง เมื่อความแข็งแกร่งภายในของคุณถูกสร้างขึ้น คุณจะมีโอกาสขยายกิจกรรมของคุณอย่างช้าๆ",
        'zh-CN': "首先，专注于照顾好自己。当你的内在力量增强后，你将有机会慢慢扩大你的活动范围。",
        'zh-TW': "首先，專注於照顧好自己。當你的內在力量增強後，你將有機會慢慢擴大你的活動範圍。"
      }
    }
  },

  seasonalInfluence: {
    spring: {
      characteristics: { 
        en: "Born in spring, you are full of life and the energy of new beginnings. You have a positive and hopeful personality.", 
        ko: "봄에 태어난 당신은 생명력과 새로운 시작의 기운으로 가득합니다. 긍정적이고 희망에 찬 성격을 가지고 있습니다.",
        de: "Im Frühling geboren, sind Sie voller Leben und der Energie neuer Anfänge. Sie haben eine positive und hoffnungsvolle Persönlichkeit.",
        es: "Nacido en primavera, estás lleno de vida y de la energía de los nuevos comienzos. Tienes una personalidad positiva y esperanzada.",
        fr: "Né au printemps, vous êtes plein de vie et de l'énergie des nouveaux départs. Vous avez une personnalité positive et pleine d'espoir.",
        id: "Lahir di musim semi, Anda penuh dengan kehidupan dan energi awal yang baru. Anda memiliki kepribadian yang positif dan penuh harapan.",
        it: "Nato in primavera, sei pieno di vita e dell'energia di nuovi inizi. Hai una personalità positiva e speranzosa.",
        ja: "春に生まれたあなたは、生命力と新しい始まりのエネルギーに満ちています。あなたは前向きで希望に満ちた性格をしています。",
        pt: "Nascido na primavera, você está cheio de vida e da energia de novos começos. Você tem uma personalidade positiva e esperançosa.",
        ru: "Рожденный весной, вы полны жизни и энергии новых начинаний. У вас позитивный и обнадеживающий характер.",
        th: "เกิดในฤดูใบไม้ผลิ คุณเต็มไปด้วยชีวิตและพลังแห่งการเริ่มต้นใหม่ คุณมีบุคลิกที่เป็นบวกและมีความหวัง",
        'zh-CN': "春天出生的你，充满生机和新开始的能量。你性格积极，充满希望。",
        'zh-TW': "春天出生的你，充滿生機和新開始的能量。你性格積極，充滿希望。"
      },
      favorableAspects: { 
        en: "You have excellent planning skills and a strong drive, which helps you to start new things well.", 
        ko: "기획력과 추진력이 뛰어나 새로운 일을 시작하는 데 능숙합니다.",
        de: "Sie haben ausgezeichnete Planungsfähigkeiten und einen starken Antrieb, was Ihnen hilft, neue Dinge gut zu beginnen.",
        es: "Tienes excelentes habilidades de planificación y un fuerte impulso, lo que te ayuda a empezar bien las cosas nuevas.",
        fr: "Vous avez d'excellentes compétences en planification et une forte motivation, ce qui vous aide à bien démarrer de nouvelles choses.",
        id: "Anda memiliki keterampilan perencanaan yang sangat baik dan dorongan yang kuat, yang membantu Anda untuk memulai hal-hal baru dengan baik.",
        it: "Hai eccellenti capacità di pianificazione e una forte spinta, che ti aiuta a iniziare bene le cose nuove.",
        ja: "あなたは優れた計画能力と強い意欲を持っており、新しいことをうまく始めるのに役立ちます。",
        pt: "Você tem excelentes habilidades de planejamento e um forte impulso, o que o ajuda a começar bem as coisas novas.",
        ru: "У вас отличные навыки планирования и сильная воля, что помогает вам хорошо начинать новые дела.",
        th: "คุณมีทักษะการวางแผนที่ยอดเยี่ยมและแรงผลักดันที่แข็งแกร่ง ซึ่งช่วยให้คุณเริ่มต้นสิ่งใหม่ๆ ได้ดี",
        'zh-CN': "你具有出色的规划能力和强大的动力，这有助于你很好地开始新事物。",
        'zh-TW': "你具有出色的規劃能力和強大的動力，這有助於你很好地開始新事物。"
      },
      challenges: { 
        en: "You can be impatient and your plans may be weak, so you need to be thorough.", 
        ko: "다소 성급하고 계획이 부실할 수 있으니, 꼼꼼하게 마무리하는 습관이 필요합니다.",
        de: "Sie können ungeduldig sein und Ihre Pläne können schwach sein, daher müssen Sie gründlich sein.",
        es: "Puedes ser impaciente y tus planes pueden ser débiles, por lo que necesitas ser minucioso.",
        fr: "Vous pouvez être impatient et vos plans peuvent être faibles, vous devez donc être minutieux.",
        id: "Anda bisa tidak sabar dan rencana Anda mungkin lemah, jadi Anda harus teliti.",
        it: "Puoi essere impaziente e i tuoi piani possono essere deboli, quindi devi essere meticoloso.",
        ja: "あなたはせっかちで、計画が弱いかもしれないので、徹底的である必要があります。",
        pt: "Você pode ser impaciente e seus planos podem ser fracos, então você precisa ser minucioso.",
        ru: "Вы можете быть нетерпеливы, и ваши планы могут быть слабыми, поэтому вам нужно быть основательным.",
        th: "คุณอาจใจร้อนและแผนของคุณอาจอ่อนแอ ดังนั้นคุณต้องรอบคอบ",
        'zh-CN': "你可能会不耐烦，你的计划可能很薄弱，所以你需要周密。",
        'zh-TW': "你可能會不耐煩，你的計劃可能很薄弱，所以你需要周密。"
      },
      advice: { 
        en: "Channel the vibrant energy of spring into steady action. Your dreams will come true when your plans meet practice.", 
        ko: "봄의 생동감 넘치는 에너지를 꾸준한 실천으로 연결하세요. 계획이 실천을 만날 때 당신의 꿈은 현실이 됩니다.",
        de: "Kanalisieren Sie die pulsierende Energie des Frühlings in stetige Aktion. Ihre Träume werden wahr, wenn Ihre Pläne auf die Praxis treffen.",
        es: "Canaliza la vibrante energía de la primavera en una acción constante. Tus sueños se harán realidad cuando tus planes se encuentren con la práctica.",
        fr: "Canalisez l'énergie vibrante du printemps en une action constante. Vos rêves deviendront réalité lorsque vos plans rencontreront la pratique.",
        id: "Salurkan energi musim semi yang semarak ke dalam tindakan yang mantap. Impian Anda akan menjadi kenyataan ketika rencana Anda bertemu dengan praktik.",
        it: "Incanala la vibrante energia della primavera in un'azione costante. I tuoi sogni diventeranno realtà quando i tuoi piani incontreranno la pratica.",
        ja: "春の活気に満ちたエネルギーを着実な行動に向けましょう。あなたの計画が実践と出会うとき、あなたの夢は実現します。",
        pt: "Canalize a energia vibrante da primavera em uma ação constante. Seus sonhos se tornarão realidade quando seus planos encontrarem a prática.",
        ru: "Направьте яркую энергию весны в постоянное действие. Ваши мечты сбудутся, когда ваши планы встретятся с практикой.",
        th: "ส่งพลังอันสดใสของฤดูใบไม้ผลิไปสู่การกระทำที่มั่นคง ความฝันของคุณจะเป็นจริงเมื่อแผนของคุณมาพบกับการปฏิบัติ",
        'zh-CN': "将春天的活力转化为稳定的行动。当你的计划与实践相结合时，你的梦想就会成真。",
        'zh-TW': "將春天的活力轉化為穩定的行動。當你的計劃與實踐相結合時，你的夢想就會成真。"
      }
    },
    summer: {
      characteristics: { 
        en: "Born in summer, you are passionate and energetic like the scorching sun. You are sociable and good at expressing yourself.", 
        ko: "여름에 태어난 당신은 작열하는 태양처럼 열정적이고 에너지가 넘칩니다. 사교적이며 자기표현에 능숙합니다.",
        de: "Im Sommer geboren, sind Sie leidenschaftlich und energiegeladen wie die sengende Sonne. Sie sind gesellig und können sich gut ausdrücken.",
        es: "Nacido en verano, eres apasionado y enérgico como el sol abrasador. Eres sociable y bueno para expresarte.",
        fr: "Né en été, vous êtes passionné et énergique comme le soleil brûlant. Vous êtes sociable et doué pour vous exprimer.",
        id: "Lahir di musim panas, Anda bersemangat dan energik seperti matahari yang terik. Anda mudah bergaul dan pandai mengekspresikan diri.",
        it: "Nato in estate, sei passionale ed energico come il sole cocente. Sei socievole e bravo ad esprimerti.",
        ja: "夏に生まれたあなたは、灼熱の太陽のように情熱的でエネルギッシュです。あなたは社交的で、自己表現が得意です。",
        pt: "Nascido no verão, você é apaixonado e enérgico como o sol escaldante. Você é sociável e bom em se expressar.",
        ru: "Рожденный летом, вы страстны и энергичны, как палящее солнце. Вы общительны и хорошо выражаете себя.",
        th: "เกิดในฤดูร้อน คุณเป็นคนกระตือรือร้นและมีพลังเหมือนดวงอาทิตย์ที่แผดเผา คุณเป็นคนเข้าสังคมและแสดงออกได้ดี",
        'zh-CN': "夏天出生的你，像炎炎烈日一样热情奔放。你善于交际，善于表达自己。",
        'zh-TW': "夏天出生的你，像炎炎烈日一樣熱情奔放。你善於交際，善於表達自己。"
      },
      favorableAspects: { 
        en: "Your bright and positive energy makes you popular among people and helps you to achieve your goals with a strong drive.", 
        ko: "밝고 긍정적인 에너지로 주변 사람들에게 인기가 많으며, 강한 추진력으로 목표를 달성합니다.",
        de: "Ihre helle und positive Energie macht Sie bei den Menschen beliebt und hilft Ihnen, Ihre Ziele mit einem starken Antrieb zu erreichen.",
        es: "Tu energía brillante y positiva te hace popular entre la gente y te ayuda a alcanzar tus metas con un fuerte impulso.",
        fr: "Votre énergie vive et positive vous rend populaire auprès des gens et vous aide à atteindre vos objectifs avec une forte motivation.",
        id: "Energi Anda yang cerah dan positif membuat Anda populer di antara orang-orang dan membantu Anda mencapai tujuan Anda dengan dorongan yang kuat.",
        it: "La tua energia brillante e positiva ti rende popolare tra le persone e ti aiuta a raggiungere i tuoi obiettivi con una forte spinta.",
        ja: "あなたの明るく前向きなエネルギーは、人々の間であなたを人気者し、強い意欲で目標を達成するのに役立ちます。",
        pt: "Sua energia brilhante e positiva o torna popular entre as pessoas e o ajuda a alcançar seus objetivos com um forte impulso.",
        ru: "Ваша яркая и позитивная энергия делает вас популярным среди людей и помогает вам достигать своих целей с сильной волей.",
        th: "พลังงานที่สดใสและเป็นบวกของคุณทำให้คุณเป็นที่นิยมในหมู่ผู้คนและช่วยให้คุณบรรลุเป้าหมายด้วยแรงผลักดันที่แข็งแกร่ง",
        'zh-CN': "你光明积极的能量使你在人群中很受欢迎，并帮助你以强大的动力实现目标。",
        'zh-TW': "你光明積極的能量使你在人群中很受歡迎，並幫助你以強大的動力實現目標。"
      },
      challenges: { 
        en: "You can be impulsive and your emotions can be volatile, so you need to cultivate inner peace.", 
        ko: "충동적이고 감정 기복이 심할 수 있으니, 내면의 평온함을 기르는 노력이 필요합니다.",
        de: "Sie können impulsiv sein und Ihre Emotionen können unbeständig sein, daher müssen Sie inneren Frieden kultivieren.",
        es: "Puedes ser impulsivo y tus emociones pueden ser volátiles, por lo que necesitas cultivar la paz interior.",
        fr: "Vous pouvez être impulsif et vos émotions peuvent être volatiles, vous devez donc cultiver la paix intérieure.",
        id: "Anda bisa menjadi impulsif dan emosi Anda bisa tidak stabil, jadi Anda perlu menumbuhkan kedamaian batin.",
        it: "Puoi essere impulsivo e le tue emozioni possono essere volatili, quindi devi coltivare la pace interiore.",
        ja: "あなたは衝動的で感情が不安定になることがあるので、内なる平和を育む必要があります。",
        pt: "Você pode ser impulsivo e suas emoções podem ser voláteis, então você precisa cultivar a paz interior.",
        ru: "Вы можете быть импульсивны, и ваши эмоции могут быть нестабильными, поэтому вам нужно развивать внутренний покой.",
        th: "คุณอาจหุนหันพลันแล่นและอารมณ์ของคุณอาจแปรปรวนได้ ดังนั้นคุณต้องปลูกฝังความสงบภายใน",
        'zh-CN': "你可能会冲动，情绪也可能不稳定，所以你需要培养内心的平静。",
        'zh-TW': "你可能會衝動，情緒也可能不穩定，所以你需要培養內心的平靜。"
      },
      advice: { 
        en: "Use your passionate energy to enrich the lives of yourself and others. Learn to control your energy and you will become a more mature leader.", 
        ko: "당신의 뜨거운 에너지를 자신과 타인의 삶을 풍요롭게 하는 데 사용하세요. 에너지를 조절하는 법을 배우면 더 성숙한 리더가 될 것입니다.",
        de: "Nutzen Sie Ihre leidenschaftliche Energie, um das Leben von Ihnen und anderen zu bereichern. Lernen Sie, Ihre Energie zu kontrollieren, und Sie werden ein reiferer Anführer werden.",
        es: "Usa tu energía apasionada para enriquecer tu vida y la de los demás. Aprende a controlar tu energía y te convertirás en un líder más maduro.",
        fr: "Utilisez votre énergie passionnée pour enrichir votre vie et celle des autres. Apprenez à contrôler votre énergie et vous deviendrez un leader plus mature.",
        id: "Gunakan energi penuh gairah Anda untuk memperkaya kehidupan diri sendiri dan orang lain. Belajarlah untuk mengendalikan energi Anda dan Anda akan menjadi pemimpin yang lebih dewasa.",
        it: "Usa la tua energia appassionata per arricchire la vita di te stesso e degli altri. Impara a controllare la tua energia e diventerai un leader più maturo.",
        ja: "あなたの情熱的なエネルギーを自分自身と他の人の生活を豊かにするために使ってください。あなたのエネルギーをコントロールすることを学ぶと、あなたはより成熟したリーダーになるでしょう。",
        pt: "Use sua energia apaixonada para enriquecer a sua vida e a dos outros. Aprenda a controlar sua energia e você se tornará um líder mais maduro.",
        ru: "Используйте свою страстную энергию, чтобы обогатить свою жизнь и жизнь других. Научитесь контролировать свою энергию, и вы станете более зрелым лидером.",
        th: "ใช้พลังอันเปี่ยมล้นของคุณเพื่อยกระดับชีวิตของตัวคุณเองและผู้อื่น เรียนรู้ที่จะควบคุมพลังงานของคุณแล้วคุณจะกลายเป็นผู้นำที่เติบโตเต็มที่มากขึ้น",
        'zh-CN': "用你充满激情的能量来丰富自己和他人的生活。学会控制你的能量，你将成为一个更成熟的领导者。",
        'zh-TW': "用你充滿激情的能量來豐富自己和他人的生活。學會控制你的能量，你將成為一個更成熟的領導者。"
      }
    },
    autumn: {
      characteristics: { 
        en: "Born in autumn, the season of harvest, you are rational and have a strong sense of 결실. You value principles and have a sharp analytical mind.", 
        ko: "결실의 계절인 가을에 태어난 당신은 이성적이고 결실을 중시하는 성향이 강합니다. 원칙을 중시하며, 날카로운 분석력을 지녔습니다.",
        de: "Im Herbst, der Erntezeit, geboren, sind Sie rational und haben einen starken Sinn für 결실. Sie legen Wert auf Prinzipien und haben einen scharfen analytischen Verstand.",
        es: "Nacido en otoño, la estación de la cosecha, eres racional y tienes un fuerte sentido de 결실. Valoras los principios y tienes una mente analítica aguda.",
        fr: "Né en automne, la saison des récoltes, vous êtes rationnel et avez un fort sens de 결실. Vous appréciez les principes et avez un esprit analytique aiguisé.",
        id: "Lahir di musim gugur, musim panen, Anda rasional dan memiliki rasa 결실 yang kuat. Anda menghargai prinsip dan memiliki pikiran analitis yang tajam.",
        it: "Nato in autunno, la stagione del raccolto, sei razionale e hai un forte senso di 결실. Apprezzi i principi e hai una mente analitica acuta.",
        ja: "収穫の季節である秋に生まれたあなたは、合理的で、결실（結実）の感覚が強いです。あなたは原則を重んじ、鋭い分析力を持っています。",
        pt: "Nascido no outono, a estação da colheita, você é racional e tem um forte senso de 결실. Você valoriza os princípios e tem uma mente analítica afiada.",
        ru: "Рожденный осенью, в сезон сбора урожая, вы рациональны и обладаете сильным чувством 결실. Вы цените принципы и обладаете острым аналитическим умом.",
        th: "เกิดในฤดูใบไม้ร่วง ฤดูแห่งการเก็บเกี่ยว คุณเป็นคนมีเหตุผลและมีความรู้สึกที่แข็งแกร่งของ 결실 คุณให้ความสำคัญกับหลักการและมีจิตใจที่วิเคราะห์เฉียบแหลม",
        'zh-CN': "出生在收获的季节——秋天，你理性，有强烈的“결실”（结果）意识。你重视原则，有敏锐的分析头脑。",
        'zh-TW': "出生在收穫的季節——秋天，你理性，有強烈的“결실”（結果）意識。你重視原則，有敏銳的分析頭腦。"
      },
      favorableAspects: { 
        en: "You have a strong sense of responsibility and are good at finishing what you start, so you can achieve tangible results.", 
        ko: "책임감이 강하고 마무리를 잘하여, 가시적인 성과를 내는 데 능숙합니다.",
        de: "Sie haben ein starkes Verantwortungsbewusstsein und sind gut darin, das zu beenden, was Sie beginnen, sodass Sie greifbare Ergebnisse erzielen können.",
        es: "Tienes un fuerte sentido de la responsabilidad y eres bueno para terminar lo que empiezas, por lo que puedes lograr resultados tangibles.",
        fr: "Vous avez un sens aigu des responsabilités et êtes doué pour terminer ce que vous commencez, ce qui vous permet d'obtenir des résultats tangibles.",
        id: "Anda memiliki rasa tanggung jawab yang kuat dan pandai menyelesaikan apa yang Anda mulai, sehingga Anda dapat mencapai hasil yang nyata.",
        it: "Hai un forte senso di responsabilità e sei bravo a finire ciò che inizi, quindi puoi ottenere risultati tangibili.",
        ja: "あなたは責任感が強く、始めたことをやり遂げるのが得意なので、目に見える結果を出すことができます。",
        pt: "Você tem um forte senso de responsabilidade e é bom em terminar o que começa, para que possa alcançar resultados tangíveis.",
        ru: "У вас сильное чувство ответственности, и вы хорошо умеете доводить начатое до конца, поэтому вы можете достичь ощутимых результатов.",
        th: "คุณมีความรับผิดชอบสูงและเก่งในการทำงานให้สำเร็จลุล่วง ดังนั้นคุณจึงสามารถบรรลุผลลัพธ์ที่เป็นรูปธรรมได้",
        'zh-CN': "你有强烈的责任感，善于完成你开始的事情，所以你能取得切实的成果。",
        'zh-TW': "你有強烈的責任感，善於完成你開始的事情，所以你能取得切實的成果。"
      },
      challenges: { 
        en: "You can be overly critical and rigid, which can lead to loneliness.", 
        ko: "지나치게 비판적이거나 고지식하여 외로움을 느낄 수 있습니다.",
        de: "Sie können überkritisch und starr sein, was zu Einsamkeit führen kann.",
        es: "Puedes ser demasiado crítico y rígido, lo que puede llevar a la soledad.",
        fr: "Vous pouvez être trop critique et rigide, ce qui peut conduire à la solitude.",
        id: "Anda bisa terlalu kritis dan kaku, yang bisa menyebabkan kesepian.",
        it: "Puoi essere eccessivamente critico e rigido, il che può portare alla solitudine.",
        ja: "あなたは過度に批判的で厳格になり、孤独につながる可能性があります。",
        pt: "Você pode ser excessivamente crítico e rígido, o que pode levar à solidão.",
        ru: "Вы можете быть чрезмерно критичны и жестки, что может привести к одиночеству.",
        th: "คุณอาจวิจารณ์และเข้มงวดเกินไป ซึ่งอาจนำไปสู่ความเหงาได้",
        'zh-CN': "你可能过于挑剔和刻板，这会导致孤独。",
        'zh-TW': "你可能過於挑剔和刻板，這會導致孤獨。"
      },
      advice: { 
        en: "Harvest the fruits of your labor and learn to share them with others. Your sharp judgment will shine when combined with a warm heart.", 
        ko: "노력의 결실을 거두고, 그 결실을 주변과 나누는 법을 배우세요. 당신의 날카로운 판단력이 따뜻한 마음과 결합될 때 더욱 빛날 것입니다.",
        de: "Ernten Sie die Früchte Ihrer Arbeit und lernen Sie, sie mit anderen zu teilen. Ihr scharfes Urteilsvermögen wird glänzen, wenn es mit einem warmen Herzen kombiniert wird.",
        es: "Cosecha los frutos de tu trabajo y aprende a compartirlos con los demás. Tu agudo juicio brillará cuando se combine con un corazón cálido.",
        fr: "Récoltez les fruits de votre travail et apprenez à les partager avec les autres. Votre jugement aiguisé brillera lorsqu'il sera combiné à un cœur chaleureux.",
        id: "Petik buah dari kerja keras Anda dan belajarlah untuk membaginya dengan orang lain. Penilaian tajam Anda akan bersinar jika dipadukan dengan hati yang hangat.",
        it: "Raccogli i frutti del tuo lavoro e impara a condividerli con gli altri. Il tuo acuto giudizio brillerà se combinato con un cuore caldo.",
        ja: "あなたの労働の成果を収穫し、他の人と分かち合うことを学びましょう。あなたの鋭い判断力は、温かい心と組み合わされると輝きます。",
        pt: "Colha os frutos do seu trabalho e aprenda a compartilhá-los com os outros. Seu julgamento aguçado brilhará quando combinado com um coração caloroso.",
        ru: "Собирайте плоды своего труда и учитесь делиться ими с другими. Ваше острое суждение будет сиять в сочетании с теплым сердцем.",
        th: "เก็บเกี่ยวผลจากแรงงานของคุณและเรียนรู้ที่จะแบ่งปันกับผู้อื่น การตัดสินที่เฉียบแหลมของคุณจะเปล่งประกายเมื่อรวมกับหัวใจที่อบอุ่น",
        'zh-CN': "收获你的劳动果实，并学会与他人分享。当你敏锐的判断力与温暖的心相结合时，它会更加闪耀。",
        'zh-TW': "收穫你的勞動果實，並學會與他人分享。當你敏銳的判斷力與溫暖的心相結合時，它會更加閃耀。"
      }
    },
    winter: {
      characteristics: { 
        en: "Born in winter, you are patient and have deep insight. You are a thoughtful person who is not easily swayed by your surroundings.", 
        ko: "겨울에 태어난 당신은 인내심이 강하고 깊은 통찰력을 지녔습니다. 주변에 쉽게 휩쓸리지 않는 사려 깊은 사람입니다.",
        de: "Im Winter geboren, sind Sie geduldig und haben tiefe Einsichten. Sie sind eine nachdenkliche Person, die sich nicht leicht von ihrer Umgebung beeinflussen lässt.",
        es: "Nacido en invierno, eres paciente y tienes una profunda perspicacia. Eres una persona reflexiva que no se deja influir fácilmente por su entorno.",
        fr: "Né en hiver, vous êtes patient et avez une profonde perspicacité. Vous êtes une personne réfléchie qui n'est pas facilement influencée par son environnement.",
        id: "Lahir di musim dingin, Anda sabar dan memiliki wawasan yang dalam. Anda adalah orang yang bijaksana yang tidak mudah terpengaruh oleh lingkungan sekitar Anda.",
        it: "Nato in inverno, sei paziente e hai una profonda intuizione. Sei una persona premurosa che non si lascia facilmente influenzare dall'ambiente circostante.",
        ja: "冬に生まれたあなたは、忍耐強く、深い洞察力を持っています。あなたは周りに簡単に流されない思慮深い人です。",
        pt: "Nascido no inverno, você é paciente e tem uma visão profunda. Você é uma pessoa atenciosa que não se deixa influenciar facilmente pelo ambiente ao seu redor.",
        ru: "Рожденный зимой, вы терпеливы и обладаете глубокой проницательностью. Вы вдумчивый человек, которого нелегко поколебать окружающим.",
        th: "เกิดในฤดูหนาว คุณเป็นคนอดทนและมีความเข้าใจอย่างลึกซึ้ง คุณเป็นคนรอบคอบที่ไม่หวั่นไหวต่อสิ่งรอบข้างได้ง่าย",
        'zh-CN': "冬天出生的你，有耐心，有深刻的洞察力。你是一个体贴的人，不容易被周围的环境所左右。",
        'zh-TW': "冬天出生的你，有耐心，有深刻的洞察力。你是一個體貼的人，不容易被周圍的環境所左右。"
      },
      favorableAspects: { 
        en: "You have the wisdom to wait for the right time and the ability to look at problems from a long-term perspective.", 
        ko: "때를 기다릴 줄 아는 지혜와, 장기적인 안목으로 문제를 바라보는 능력이 있습니다.",
        de: "Sie haben die Weisheit, auf den richtigen Zeitpunkt zu warten, und die Fähigkeit, Probleme aus einer langfristigen Perspektive zu betrachten.",
        es: "Tienes la sabiduría para esperar el momento adecuado y la capacidad de ver los problemas desde una perspectiva a largo plazo.",
        fr: "Vous avez la sagesse d'attendre le bon moment et la capacité de voir les problèmes dans une perspective à long terme.",
        id: "Anda memiliki kebijaksanaan untuk menunggu waktu yang tepat dan kemampuan untuk melihat masalah dari perspektif jangka panjang.",
        it: "Hai la saggezza di aspettare il momento giusto e la capacità di guardare i problemi da una prospettiva a lungo termine.",
        ja: "あなたは適切な時期を待つ知恵と、長期的な視点から問題を見る能力を持っています。",
        pt: "Você tem a sabedoria de esperar o momento certo e a capacidade de olhar os problemas de uma perspectiva de longo prazo.",
        ru: "У вас есть мудрость ждать подходящего времени и способность смотреть на проблемы с долгосрочной перспективой.",
        th: "คุณมีสติปัญญาที่จะรอเวลาที่เหมาะสมและความสามารถในการมองปัญหาจากมุมมองระยะยาว",
        'zh-CN': "你有智慧等待合适的时机，并有能力从长远的角度看待问题。",
        'zh-TW': "你有智慧等待合適的時機，並有能力從長遠的角度看待問題。"
      },
      challenges: { 
        en: "You can be passive and miss opportunities, so you need the courage to take action when the time comes.", 
        ko: "다소 수동적이어서 기회를 놓칠 수 있으니, 때가 왔을 때 행동하는 용기가 필요합니다.",
        de: "Sie können passiv sein und Gelegenheiten verpassen, daher brauchen Sie den Mut, zu handeln, wenn die Zeit gekommen ist.",
        es: "Puedes ser pasivo y perder oportunidades, por lo que necesitas el coraje para actuar cuando llegue el momento.",
        fr: "Vous pouvez être passif et manquer des opportunités, vous avez donc besoin du courage d'agir le moment venu.",
        id: "Anda bisa menjadi pasif dan kehilangan kesempatan, jadi Anda perlu keberanian untuk mengambil tindakan ketika saatnya tiba.",
        it: "Puoi essere passivo e perdere opportunità, quindi hai bisogno del coraggio di agire quando arriva il momento.",
        ja: "あなたは受動的で機会を逃すことがあるので、時が来たら行動する勇気が必要です。",
        pt: "Você pode ser passivo e perder oportunidades, então precisa da coragem para agir quando chegar a hora.",
        ru: "Вы можете быть пассивны и упускать возможности, поэтому вам нужна смелость, чтобы действовать, когда придет время.",
        th: "คุณอาจเฉื่อยชาและพลาดโอกาส ดังนั้นคุณต้องมีความกล้าที่จะลงมือทำเมื่อถึงเวลา",
        'zh-CN': "你可能会被动而错失良机，所以你需要勇气在时机成熟时采取行动。",
        'zh-TW': "你可能會被動而錯失良機，所以你需要勇氣在時機成熟時採取行動。"
      },
      advice: { 
        en: "After a period of deep thought, put your plans into action. The wisdom of winter will become a solid foundation for the new beginnings of spring.", 
        ko: "깊은 사색의 시간을 거친 후에는 계획을 행동으로 옮기세요. 겨울의 지혜는 봄의 새로운 시작을 위한 튼튼한 발판이 될 것입니다.",
        de: "Setzen Sie nach einer Zeit des tiefen Nachdenkens Ihre Pläne in die Tat um. Die Weisheit des Winters wird eine solide Grundlage für die neuen Anfänge des Frühlings werden.",
        es: "Después de un período de profunda reflexión, pon tus planes en acción. La sabiduría del invierno se convertirá en una base sólida para los nuevos comienzos de la primavera.",
        fr: "Après une période de profonde réflexion, mettez vos plans en action. La sagesse de l'hiver deviendra une base solide pour les nouveaux départs du printemps.",
        id: "Setelah periode pemikiran yang mendalam, wujudkan rencana Anda menjadi tindakan. Kebijaksanaan musim dingin akan menjadi fondasi yang kokoh untuk awal yang baru di musim semi.",
        it: "Dopo un periodo di profonda riflessione, metti in atto i tuoi piani. La saggezza dell'inverno diventerà una solida base per i nuovi inizi della primavera.",
        ja: "深く考えた後、計画を実行に移してください。冬の知恵は、春の新しい始まりのための強固な基盤になります。",
        pt: "Após um período de profunda reflexão, coloque seus planos em ação. A sabedoria do inverno se tornará uma base sólida para os novos começos da primavera.",
        ru: "После периода глубоких размышлений претворите свои планы в жизнь. Мудрость зимы станет прочным фундаментом для новых начинаний весны.",
        th: "หลังจากช่วงเวลาแห่งการครุ่นคิดอย่างลึกซึ้งแล้ว ให้ลงมือทำตามแผนของคุณ สติปัญญาของฤดูหนาวจะกลายเป็นรากฐานที่มั่นคงสำหรับการเริ่มต้นใหม่ของฤดูใบไม้ผลิ",
        'zh-CN': "经过一段时间的深思熟虑后，将你的计划付诸行动。冬天的智慧将成为春天新开始的坚实基础。",
        'zh-TW': "經過一段時間的深思熟慮後，將你的計劃付諸行動。冬天的智慧將成為春天新開始的堅實基礎。"
      }
    }
  },

  elementBalanceMessages: {
    wood: {
      dominant: { 
        en: "With an excess of Wood energy, you may be too assertive and competitive. It is important to learn to cooperate with others.", 
        ko: "목(木)의 기운이 과도하면, 지나치게 자기주장이 강하고 경쟁적이 될 수 있습니다. 주변과 협력하는 자세를 배우는 것이 중요합니다.",
        de: "Mit einem Übermaß an Holzenergie können Sie zu durchsetzungsfähig und wettbewerbsorientiert sein. Es ist wichtig zu lernen, mit anderen zusammenzuarbeiten.",
        es: "Con un exceso de energía de la Madera, puedes ser demasiado asertivo y competitivo. Es importante aprender a cooperar con los demás.",
        fr: "Avec un excès d'énergie Bois, vous pouvez être trop autoritaire et compétitif. Il est important d'apprendre à coopérer avec les autres.",
        id: "Dengan kelebihan energi Kayu, Anda mungkin terlalu tegas dan kompetitif. Penting untuk belajar bekerja sama dengan orang lain.",
        it: "Con un eccesso di energia del Legno, potresti essere troppo assertivo e competitivo. È importante imparare a cooperare con gli altri.",
        ja: "木のエネルギーが過剰になると、自己主張が強すぎたり、競争心が強すぎたりすることがあります。他の人と協力することを学ぶことが重要です。",
        pt: "Com um excesso de energia da Madeira, você pode ser muito assertivo e competitivo. É importante aprender a cooperar com os outros.",
        ru: "При избытке энергии Дерева вы можете быть слишком напористы и конкурентоспособны. Важно научиться сотрудничать с другими.",
        th: "ด้วยพลังงานธาตุไม้ที่มากเกินไป คุณอาจจะยืนกรานในความคิดของตัวเองและแข่งขันสูงเกินไป สิ่งสำคัญคือต้องเรียนรู้ที่จะร่วมมือกับผู้อื่น",
        'zh-CN': "木能量过剩，你可能会过于自信和好胜。学会与他人合作很重要。",
        'zh-TW': "木能量過剩，你可能會過於自信和好勝。學會與他人合作很重要。"
      },
      lacking: { 
        en: "A lack of Wood energy can lead to indecisiveness and a lack of drive. You need to cultivate the courage to start new things.", 
        ko: "목(木)의 기운이 부족하면, 결단력이 부족하고 추진력이 약해질 수 있습니다. 새로운 일을 시작하는 용기를 기를 필요가 있습니다.",
        de: "Ein Mangel an Holzenergie kann zu Unentschlossenheit und mangelndem Antrieb führen. Sie müssen den Mut aufbringen, neue Dinge zu beginnen.",
        es: "La falta de energía de la Madera puede llevar a la indecisión y a la falta de impulso. Necesitas cultivar el coraje para empezar cosas nuevas.",
        fr: "Un manque d'énergie Bois peut entraîner une indécision et un manque de dynamisme. Vous devez cultiver le courage de commencer de nouvelles choses.",
        id: "Kekurangan energi Kayu dapat menyebabkan keraguan dan kurangnya dorongan. Anda perlu menumbuhkan keberanian untuk memulai hal-hal baru.",
        it: "Una mancanza di energia del Legno può portare a indecisione e mancanza di spinta. Devi coltivare il coraggio di iniziare cose nuove.",
        ja: "木のエネルギーが不足すると、優柔不断になり、意欲がなくなる可能性があります。新しいことを始める勇気を養う必要があります。",
        pt: "A falta de energia da Madeira pode levar à indecisão e à falta de impulso. Você precisa cultivar a coragem para começar coisas novas.",
        ru: "Недостаток энергии Дерева может привести к нерешительности и отсутствию драйва. Вам нужно развивать в себе смелость начинать новые дела.",
        th: "การขาดพลังงานธาตุไม้อาจนำไปสู่ความไม่แน่ใจและการขาดแรงผลักดัน คุณต้องปลูกฝังความกล้าที่จะเริ่มต้นสิ่งใหม่ๆ",
        'zh-CN': "木能量的缺乏会导致优柔寡断和缺乏动力。你需要培养开始新事物的勇气。",
        'zh-TW': "木能量的缺乏會導致優柔寡斷和缺乏動力。你需要培養開始新事物的勇氣。"
      },
      balanced: { 
        en: "With a balanced Wood energy, you can achieve your goals with creativity and a positive attitude. You are a harmonious leader.", 
        ko: "목(木)의 기운이 균형을 이루면, 창의성과 긍정적인 자세로 목표를 달성할 수 있습니다. 당신은 조화로운 리더입니다.",
        de: "Mit einer ausgewogenen Holzenergie können Sie Ihre Ziele mit Kreativität und einer positiven Einstellung erreichen. Sie sind ein harmonischer Anführer.",
        es: "Con una energía de Madera equilibrada, puedes alcanzar tus metas con creatividad y una actitud positiva. Eres un líder armonioso.",
        fr: "Avec une énergie Bois équilibrée, vous pouvez atteindre vos objectifs avec créativité et une attitude positive. Vous êtes un leader harmonieux.",
        id: "Dengan energi Kayu yang seimbang, Anda dapat mencapai tujuan Anda dengan kreativitas dan sikap positif. Anda adalah pemimpin yang harmonis.",
        it: "Con un'energia del Legno equilibrata, puoi raggiungere i tuoi obiettivi con creatività e un atteggiamento positivo. Sei un leader armonioso.",
        ja: "バランスの取れた木のエネルギーがあれば、創造性と前向きな姿勢で目標を達成できます。あなたは調和のとれたリーダーです。",
        pt: "Com uma energia de Madeira equilibrada, você pode alcançar seus objetivos com criatividade e uma atitude positiva. Você é um líder harmonioso.",
        ru: "Сбалансированная энергия Дерева позволяет вам достигать своих целей с помощью творчества и позитивного настроя. Вы гармоничный лидер.",
        th: "ด้วยพลังงานธาตุไม้ที่สมดุล คุณสามารถบรรลุเป้าหมายของคุณด้วยความคิดสร้างสรรค์และทัศนคติเชิงบวก คุณเป็นผู้นำที่กลมกลืนกัน",
        'zh-CN': "木能量均衡，你可以凭借创造力和积极的态度实现目标。你是一个和谐的领导者。",
        'zh-TW': "木能量均衡，你可以憑藉創造力和積極的態度實現目標。你是一個和諧的領導者。"
      }
    },
    fire: {
      dominant: { 
        en: "With an excess of Fire energy, you can be impulsive and emotionally volatile. It is necessary to cultivate inner peace and patience.", 
        ko: "화(火)의 기운이 과도하면, 충동적이고 감정 기복이 심해질 수 있습니다. 내면의 평온과 인내심을 기르는 노력이 필요합니다.",
        de: "Mit einem Übermaß an Feuerenergie können Sie impulsiv und emotional unbeständig sein. Es ist notwendig, inneren Frieden und Geduld zu kultivieren.",
        es: "Con un exceso de energía del Fuego, puedes ser impulsivo y emocionalmente volátil. Es necesario cultivar la paz interior y la paciencia.",
        fr: "Avec un excès d'énergie Feu, vous pouvez être impulsif et émotionnellement instable. Il est nécessaire de cultiver la paix intérieure et la patience.",
        id: "Dengan kelebihan energi Api, Anda bisa menjadi impulsif dan emosional. Penting untuk menumbuhkan kedamaian dan kesabaran batin.",
        it: "Con un eccesso di energia del Fuoco, puoi essere impulsivo ed emotivamente instabile. È necessario coltivare la pace interiore e la pazienza.",
        ja: "火のエネルギーが過剰になると、衝動的で感情的に不安定になることがあります。内なる平和と忍耐力を養うことが必要です。",
        pt: "Com um excesso de energia do Fogo, você pode ser impulsivo e emocionalmente volátil. É necessário cultivar a paz interior e a paciência.",
        ru: "При избытке энергии Огня вы можете быть импульсивны и эмоционально неустойчивы. Необходимо развивать внутренний покой и терпение.",
        th: "ด้วยพลังงานธาตุไฟที่มากเกินไป คุณอาจหุนหันพลันแล่นและอารมณ์แปรปรวนได้ จำเป็นต้องปลูกฝังความสงบภายในและความอดทน",
        'zh-CN': "火能量过剩，你可能会冲动，情绪不稳定。有必要培养内心的平静和耐心。",
        'zh-TW': "火能量過剩，你可能會衝動，情緒不穩定。有必要培養內心的平靜和耐心。"
      },
      lacking: { 
        en: "A lack of Fire energy can make you passive and lack vitality. You need to find joy in your life and express your emotions more actively.", 
        ko: "화(火)의 기운이 부족하면, 수동적이고 활력이 부족해질 수 있습니다. 삶의 즐거움을 찾고, 자신의 감정을 더 적극적으로 표현할 필요가 있습니다.",
        de: "Ein Mangel an Feuerenergie kann Sie passiv und vitalitätslos machen. Sie müssen Freude in Ihrem Leben finden und Ihre Emotionen aktiver ausdrücken.",
        es: "La falta de energía del Fuego puede volverte pasivo y falto de vitalidad. Necesitas encontrar alegría en tu vida y expresar tus emociones más activamente.",
        fr: "Un manque d'énergie Feu peut vous rendre passif et manquer de vitalité. Vous devez trouver de la joie dans votre vie et exprimer vos émotions plus activement.",
        id: "Kekurangan energi Api dapat membuat Anda pasif dan kurang vitalitas. Anda perlu menemukan kegembiraan dalam hidup Anda dan mengekspresikan emosi Anda lebih aktif.",
        it: "Una mancanza di energia del Fuoco può renderti passivo e privo di vitalità. Devi trovare la gioia nella tua vita ed esprimere le tue emozioni in modo più attivo.",
        ja: "火のエネルギーが不足すると、受動的になり、活力がなくなる可能性があります。人生に喜びを見いだし、感情をより積極的に表現する必要があります。",
        pt: "A falta de energia do Fogo pode torná-lo passivo e sem vitalidade. Você precisa encontrar alegria em sua vida e expressar suas emoções mais ativamente.",
        ru: "Недостаток энергии Огня может сделать вас пассивным и лишенным жизненной силы. Вам нужно найти радость в своей жизни и более активно выражать свои эмоции.",
        th: "การขาดพลังงานธาตุไฟอาจทำให้คุณเฉื่อยชาและขาดความมีชีวิตชีวา คุณต้องค้นหาความสุขในชีวิตและแสดงอารมณ์ของคุณอย่างกระตือรือร้นมากขึ้น",
        'zh-CN': "火能量的缺乏会让你变得被动，缺乏活力。你需要在生活中寻找快乐，更积极地表达你的情感。",
        'zh-TW': "火能量的缺乏會讓你變得被動，缺乏活力。你需要在生活中尋找快樂，更積極地表達你的情感。"
      },
      balanced: { 
        en: "With a balanced Fire energy, you can create a positive impact with your bright and warm energy. You are a source of inspiration to others.", 
        ko: "화(火)의 기운이 균형을 이루면, 밝고 따뜻한 에너지로 긍정적인 영향력을 만들어냅니다. 당신은 다른 사람들에게 영감을 주는 존재입니다.",
        de: "Mit einer ausgewogenen Feuerenergie können Sie mit Ihrer hellen und warmen Energie eine positive Wirkung erzielen. Sie sind eine Inspirationsquelle für andere.",
        es: "Con una energía de Fuego equilibrada, puedes crear un impacto positivo con tu energía brillante y cálida. Eres una fuente de inspiración para los demás.",
        fr: "Avec une énergie Feu équilibrée, vous pouvez créer un impact positif avec votre énergie vive et chaleureuse. Vous êtes une source d'inspiration pour les autres.",
        id: "Dengan energi Api yang seimbang, Anda dapat menciptakan dampak positif dengan energi Anda yang cerah dan hangat. Anda adalah sumber inspirasi bagi orang lain.",
        it: "Con un'energia del Fuoco equilibrata, puoi creare un impatto positivo con la tua energia brillante e calda. Sei una fonte di ispirazione per gli altri.",
        ja: "バランスの取れた火のエネルギーがあれば、明るく暖かいエネルギーでポジティブな影響を与えることができます。あなたは他の人にとってインスピレーションの源です。",
        pt: "Com uma energia de Fogo equilibrada, você pode criar um impacto positivo com sua energia brilhante e calorosa. Você é uma fonte de inspiração para os outros.",
        ru: "Сбалансированная энергия Огня позволяет вам оказывать положительное влияние своей яркой и теплой энергией. Вы являетесь источником вдохновения для других.",
        th: "ด้วยพลังงานธาตุไฟที่สมดุล คุณสามารถสร้างผลกระทบเชิงบวกด้วยพลังงานที่สดใสและอบอุ่นของคุณ คุณเป็นแหล่งของแรงบันดาลใจให้ผู้อื่น",
        'zh-CN': "火能量均衡，你可以用你明亮温暖的能量创造积极的影响。你是他人的灵感来源。",
        'zh-TW': "火能量均衡，你可以用你明亮溫暖的能量創造積極的影響。你是他人的靈感來源。"
      }
    },
    earth: {
      dominant: { 
        en: "With an excess of Earth energy, you can be stubborn and resistant to change. It is important to have a flexible and open mind.", 
        ko: "토(土)의 기운이 과도하면, 고집이 세고 변화를 꺼릴 수 있습니다. 유연하고 열린 마음을 갖는 것이 중요합니다.",
        de: "Mit einem Übermaß an Erdenergie können Sie stur und veränderungsresistent sein. Es ist wichtig, einen flexiblen und offenen Geist zu haben.",
        es: "Con un exceso de energía de la Tierra, puedes ser terco y resistente al cambio. Es importante tener una mente flexible y abierta.",
        fr: "Avec un excès d'énergie Terre, vous pouvez être têtu et résistant au changement. Il est important d'avoir un esprit flexible et ouvert.",
        id: "Dengan kelebihan energi Bumi, Anda bisa menjadi keras kepala dan menolak perubahan. Penting untuk memiliki pikiran yang fleksibel dan terbuka.",
        it: "Con un eccesso di energia della Terra, puoi essere testardo e resistente al cambiamento. È importante avere una mente flessibile e aperta.",
        ja: "土のエネルギーが過剰になると、頑固になり、変化に抵抗することがあります。柔軟でオープンな心を持つことが重要です。",
        pt: "Com um excesso de energia da Terra, você pode ser teimoso e resistente à mudança. É importante ter uma mente flexível e aberta.",
        ru: "При избытке энергии Земли вы можете быть упрямы и сопротивляться переменам. Важно иметь гибкий и открытый ум.",
        th: "ด้วยพลังงานธาตุดินที่มากเกินไป คุณอาจดื้อรั้นและต่อต้านการเปลี่ยนแปลง สิ่งสำคัญคือต้องมีจิตใจที่ยืดหยุ่นและเปิดกว้าง",
        'zh-CN': "土能量过剩，你可能会固执，抗拒改变。拥有灵活开放的心态很重要。",
        'zh-TW': "土能量過剩，你可能會固執，抗拒改變。擁有靈活開放的心態很重要。"
      },
      lacking: { 
        en: "A lack of Earth energy can lead to a lack of perseverance and a sense of instability. You need to cultivate diligence and a sense of responsibility.", 
        ko: "토(土)의 기운이 부족하면, 인내심이 부족하고 불안정감을 느낄 수 있습니다. 꾸준함과 책임감을 기르는 노력이 필요합니다.",
        de: "Ein Mangel an Erdenergie kann zu mangelnder Ausdauer und einem Gefühl der Instabilität führen. Sie müssen Fleiß und Verantwortungsbewusstsein kultivieren.",
        es: "La falta de energía de la Tierra puede llevar a una falta de perseverancia y a una sensación de inestabilidad. Necesitas cultivar la diligencia y el sentido de la responsabilidad.",
        fr: "Un manque d'énergie Terre peut entraîner un manque de persévérance et un sentiment d'instabilité. Vous devez cultiver la diligence et le sens des responsabilités.",
        id: "Kekurangan energi Bumi dapat menyebabkan kurangnya ketekunan dan rasa ketidakstabilan. Anda perlu menumbuhkan ketekunan dan rasa tanggung jawab.",
        it: "Una mancanza di energia della Terra può portare a una mancanza di perseveranza e a un senso di instabilità. Devi coltivare la diligenza e il senso di responsabilità.",
        ja: "土のエネルギーが不足すると、忍耐力がなくなり、不安定感を感じることがあります。勤勉さと責任感を養う必要があります。",
        pt: "A falta de energia da Terra pode levar à falta de perseverança e a uma sensação de instabilidade. Você precisa cultivar a diligência e o senso de responsabilidade.",
        ru: "Недостаток энергии Земли может привести к недостатку настойчивости и чувству нестабильности. Вам нужно развивать усердие и чувство ответственности.",
        th: "การขาดพลังงานธาตุดินอาจนำไปสู่การขาดความพากเพียรและความรู้สึกไม่มั่นคง คุณต้องปลูกฝังความขยันหมั่นเพียรและความรับผิดชอบ",
        'zh-CN': "土能量的缺乏会导致缺乏毅力和不稳定感。你需要培养勤奋和责任感。",
        'zh-TW': "土能量的缺乏會導致缺乏毅力和不穩定感。你需要培養勤奮和責任感。"
      },
      balanced: { 
        en: "With a balanced Earth energy, you can achieve your goals with sincerity and stability. You are a reliable and trustworthy person.", 
        ko: "토(土)의 기운이 균형을 이루면, 성실함과 안정감으로 목표를 달성합니다. 당신은 신뢰할 수 있는 든든한 사람입니다.",
        de: "Mit einer ausgewogenen Erdenergie können Sie Ihre Ziele mit Aufrichtigkeit und Stabilität erreichen. Sie sind eine zuverlässige und vertrauenswürdige Person.",
        es: "Con una energía de la Tierra equilibrada, puedes alcanzar tus metas con sinceridad y estabilidad. Eres una persona confiable y digna de confianza.",
        fr: "Avec une énergie Terre équilibrée, vous pouvez atteindre vos objectifs avec sincérité et stabilité. Vous êtes une personne fiable et digne de confiance.",
        id: "Dengan energi Bumi yang seimbang, Anda dapat mencapai tujuan Anda dengan ketulusan dan stabilitas. Anda adalah orang yang dapat diandalkan dan dapat dipercaya.",
        it: "Con un'energia della Terra equilibrata, puoi raggiungere i tuoi obiettivi con sincerità e stabilità. Sei una persona affidabile e degna di fiducia.",
        ja: "バランスの取れた土のエネルギーがあれば、誠実さと安定性で目標を達成できます。あなたは信頼できる信頼できる人です。",
        pt: "Com uma energia da Terra equilibrada, você pode alcançar seus objetivos com sinceridade e estabilidade. Você é uma pessoa confiável e digna de confiança.",
        ru: "Сбалансированная энергия Земли позволяет вам достигать своих целей с искренностью и стабильностью. Вы надежный и заслуживающий доверия человек.",
        th: "ด้วยพลังงานธาตุดินที่สมดุล คุณสามารถบรรลุเป้าหมายของคุณด้วยความจริงใจและความมั่นคง คุณเป็นคนที่น่าเชื่อถือและไว้วางใจได้",
        'zh-CN': "土能量均衡，你可以真诚稳定地实现目标。你是一个可靠、值得信赖的人。",
        'zh-TW': "土能量均衡，你可以真誠穩定地實現目標。你是一個可靠、值得信賴的人。"
      }
    },
    metal: {
      dominant: { 
        en: "With an excess of Metal energy, you can be overly critical and rigid. You need to cultivate a warm heart that can embrace others.", 
        ko: "금(金)의 기운이 과도하면, 지나치게 비판적이고 경직될 수 있습니다. 타인을 포용할 수 있는 따뜻한 마음을 기를 필요가 있습니다.",
        de: "Mit einem Übermaß an Metallenergie können Sie überkritisch und starr sein. Sie müssen ein warmes Herz kultivieren, das andere umarmen kann.",
        es: "Con un exceso de energía del Metal, puedes ser demasiado crítico y rígido. Necesitas cultivar un corazón cálido que pueda abrazar a los demás.",
        fr: "Avec un excès d'énergie Métal, vous pouvez être trop critique et rigide. Vous devez cultiver un cœur chaleureux qui peut embrasser les autres.",
        id: "Dengan kelebihan energi Logam, Anda bisa menjadi terlalu kritis dan kaku. Anda perlu memupuk hati yang hangat yang dapat merangkul orang lain.",
        it: "Con un eccesso di energia del Metallo, puoi essere eccessivamente critico e rigido. Devi coltivare un cuore caldo che possa abbracciare gli altri.",
        ja: "金のエネルギーが過剰になると、過度に批判的で厳格になることがあります。他人を受け入れることができる温かい心を育む必要があります。",
        pt: "Com um excesso de energia do Metal, você pode ser excessivamente crítico e rígido. Você precisa cultivar um coração caloroso que possa abraçar os outros.",
        ru: "При избытке энергии Металла вы можете быть чрезмерно критичны и жестки. Вам нужно развивать теплое сердце, которое может обнять других.",
        th: "ด้วยพลังงานธาตุโลหะที่มากเกินไป คุณอาจวิจารณ์และเข้มงวดเกินไป คุณต้องปลูกฝังหัวใจที่อบอุ่นที่สามารถโอบกอดผู้อื่นได้",
        'zh-CN': "金能量过剩，你可能会过于挑剔和刻板。你需要培养一颗能包容他人的温暖的心。",
        'zh-TW': "金能量過剩，你可能會過於挑剔和刻板。你需要培養一顆能包容他人的溫暖的心。"
      },
      lacking: { 
        en: "A lack of Metal energy can lead to a lack of decisiveness and a weak sense of principle. You need to establish your own standards and act on them.", 
        ko: "금(金)의 기운이 부족하면, 결단력이 부족하고 원칙이 약해질 수 있습니다. 자신만의 기준을 세우고 실천하는 힘을 길러야 합니다.",
        de: "Ein Mangel an Metallenergie kann zu mangelnder Entschlossenheit und einem schwachen Prinzipienbewusstsein führen. Sie müssen Ihre eigenen Standards festlegen und danach handeln.",
        es: "La falta de energía del Metal puede llevar a una falta de decisión y a un débil sentido de los principios. Necesitas establecer tus propios estándares y actuar en consecuencia.",
        fr: "Un manque d'énergie Métal peut entraîner un manque de décision et un faible sens des principes. Vous devez établir vos propres normes et agir en conséquence.",
        id: "Kekurangan energi Logam dapat menyebabkan kurangnya ketegasan dan lemahnya rasa prinsip. Anda perlu menetapkan standar Anda sendiri dan menindaklanjutinya.",
        it: "Una mancanza di energia del Metallo può portare a una mancanza di decisione e a un debole senso dei principi. Devi stabilire i tuoi standard e agire di conseguenza.",
        ja: "金のエネルギーが不足すると、決断力がなくなり、原則感が弱くなる可能性があります。独自の基準を確立し、それに基づいて行動する必要があります。",
        pt: "A falta de energia do Metal pode levar à falta de decisão e a um fraco senso de princípios. Você precisa estabelecer seus próprios padrões e agir de acordo com eles.",
        ru: "Недостаток энергии Металла может привести к недостатку решительности и слабому чувству принципов. Вам нужно установить свои собственные стандарты и действовать в соответствии с ними.",
        th: "การขาดพลังงานธาตุโลหะอาจนำไปสู่การขาดความเด็ดขาดและความรู้สึกอ่อนแอในหลักการ คุณต้องสร้างมาตรฐานของคุณเองและปฏิบัติตาม",
        'zh-CN': "金能量的缺乏会导致缺乏果断和原则性不强。你需要建立自己的标准并付诸行动。",
        'zh-TW': "金能量的缺乏會導致缺乏果斷和原則性不強。你需要建立自己的標準並付諸行動。"
      },
      balanced: { 
        en: "With a balanced Metal energy, you can achieve your goals with rational judgment and a strong drive. You are a just and principled leader.", 
        ko: "금(金)의 기운이 균형을 이루면, 합리적인 판단과 강한 추진력으로 목표를 달성합니다. 당신은 정의롭고 원칙을 지키는 리더입니다.",
        de: "Mit einer ausgewogenen Metallenergie können Sie Ihre Ziele mit rationalem Urteilsvermögen und einem starken Antrieb erreichen. Sie sind ein gerechter und prinzipientreuer Anführer.",
        es: "Con una energía del Metal equilibrada, puedes alcanzar tus metas con un juicio racional y un fuerte impulso. Eres un líder justo y de principios.",
        fr: "Avec une énergie Métal équilibrée, vous pouvez atteindre vos objectifs avec un jugement rationnel et une forte motivation. Vous êtes un leader juste et de principe.",
        id: "Dengan energi Logam yang seimbang, Anda dapat mencapai tujuan Anda dengan penilaian rasional dan dorongan yang kuat. Anda adalah pemimpin yang adil dan berprinsip.",
        it: "Con un'energia del Metallo equilibrata, puoi raggiungere i tuoi obiettivi con un giudizio razionale e una forte spinta. Sei un leader giusto e di principio.",
        ja: "バランスの取れた金のエネルギーがあれば、合理的な判断と強い意欲で目標を達成できます。あなたは公正で原則に基づいたリーダーです。",
        pt: "Com uma energia de Metal equilibrada, você pode alcançar seus objetivos com julgamento racional e um forte impulso. Você é um líder justo e de princípios.",
        ru: "Сбалансированная энергия Металла позволяет вам достигать своих целей с помощью рационального суждения и сильной воли. Вы справедливый и принципиальный лидер.",
        th: "ด้วยพลังงานธาตุโลหะที่สมดุล คุณสามารถบรรลุเป้าหมายของคุณด้วยการตัดสินอย่างมีเหตุผลและแรงผลักดันที่แข็งแกร่ง คุณเป็นผู้นำที่ยุติธรรมและมีหลักการ",
        'zh-CN': "金能量均衡，你可以凭借理性的判断和强大的动力实现目标。你是一个公正、有原则的领导者。",
        'zh-TW': "金能量均衡，你可以憑藉理性的判斷和強大的動力實現目標。你是一個公正、有原則的領導者。"
      }
    },
    water: {
      dominant: { 
        en: "With an excess of Water energy, you can easily fall into negative thoughts and be indecisive. You need a positive mindset and the courage to take action.", 
        ko: "수(水)의 기운이 과도하면, 부정적인 생각에 빠지기 쉽고 우유부단해질 수 있습니다. 긍정적인 마음과 행동하는 용기가 필요합니다.",
        de: "Mit einem Übermaß an Wasserenergie können Sie leicht in negative Gedanken verfallen und unentschlossen sein. Sie brauchen eine positive Einstellung und den Mut, zu handeln.",
        es: "Con un exceso de energía del Agua, puedes caer fácilmente en pensamientos negativos y ser indeciso. Necesitas una mentalidad positiva y el coraje para actuar.",
        fr: "Avec un excès d'énergie Eau, vous pouvez facilement tomber dans des pensées négatives et être indécis. Vous avez besoin d'un état d'esprit positif et du courage d'agir.",
        id: "Dengan kelebihan energi Air, Anda bisa dengan mudah jatuh ke dalam pikiran negatif dan menjadi ragu-ragu. Anda membutuhkan pola pikir positif dan keberanian untuk mengambil tindakan.",
        it: "Con un eccesso di energia dell'Acqua, puoi facilmente cadere in pensieri negativi ed essere indeciso. Hai bisogno di una mentalità positiva e del coraggio di agire.",
        ja: "水のエネルギーが過剰になると、否定的な考えに陥りやすく、優柔不断になることがあります。前向きな考え方と行動する勇気が必要です。",
        pt: "Com um excesso de energia da Água, você pode facilmente cair em pensamentos negativos e ser indeciso. Você precisa de uma mentalidade positiva e da coragem para agir.",
        ru: "При избытке энергии Воды вы можете легко впадать в негативные мысли и быть нерешительным. Вам нужен позитивный настрой и смелость действовать.",
        th: "ด้วยพลังงานธาตุน้ำที่มากเกินไป คุณอาจตกอยู่ในความคิดเชิงลบและไม่แน่ใจได้ง่าย คุณต้องมีทัศนคติเชิงบวกและความกล้าที่จะลงมือทำ",
        'zh-CN': "水能量过剩，你很容易陷入消极的想法，变得优柔寡断。你需要积极的心态和采取行动的勇气。",
        'zh-TW': "水能量過剩，你很容易陷入消極的想法，變得優柔寡斷。你需要積極的心態和採取行動的勇氣。"
      },
      lacking: { 
        en: "A lack of Water energy can make you inflexible and lack adaptability. It is important to cultivate a flexible mind that can adapt to situations.", 
        ko: "수(水)의 기운이 부족하면, 융통성이 없고 적응력이 떨어질 수 있습니다. 상황에 맞춰 변화할 줄 아는 유연한 마음을 기르는 것이 중요합니다.",
        de: "Ein Mangel an Wasserenergie kann Sie unflexibel machen und Ihre Anpassungsfähigkeit beeinträchtigen. Es ist wichtig, einen flexiblen Geist zu kultivieren, der sich an Situationen anpassen kann.",
        es: "La falta de energía del Agua puede volverte inflexible y falto de adaptabilidad. Es importante cultivar una mente flexible que pueda adaptarse a las situaciones.",
        fr: "Un manque d'énergie Eau peut vous rendre inflexible et manquer d'adaptabilité. Il est important de cultiver un esprit flexible qui peut s'adapter aux situations.",
        id: "Kekurangan energi Air dapat membuat Anda tidak fleksibel dan kurang mudah beradaptasi. Penting untuk menumbuhkan pikiran yang fleksibel yang dapat beradaptasi dengan situasi.",
        it: "Una mancanza di energia dell'Acqua può renderti inflessibile e privo di adattabilità. È importante coltivare una mente flessibile che possa adattarsi alle situazioni.",
        ja: "水のエネルギーが不足すると、柔軟性がなくなり、適応能力が低下する可能性があります。状況に適応できる柔軟な心を養うことが重要です。",
        pt: "A falta de energia da Água pode torná-lo inflexível e sem adaptabilidade. É importante cultivar uma mente flexível que possa se adaptar às situações.",
        ru: "Недостаток энергии Воды может сделать вас негибким и лишенным приспособляемости. Важно развивать гибкий ум, который может приспосабливаться к ситуациям.",
        th: "การขาดพลังงานธาตุน้ำอาจทำให้คุณไม่ยืดหยุ่นและขาดความสามารถในการปรับตัว สิ่งสำคัญคือต้องปลูกฝังจิตใจที่ยืดหยุ่นซึ่งสามารถปรับให้เข้ากับสถานการณ์ได้",
        'zh-CN': "水能量的缺乏会让你变得不灵活，缺乏适应能力。培养能够适应情况的灵活头脑很重要。",
        'zh-TW': "水能量的缺乏會讓你變得不靈活，缺乏適應能力。培養能夠適應情況的靈活頭腦很重要。"
      },
      balanced: { 
        en: "With a balanced Water energy, you can solve problems with wisdom and insight. You are a wise and adaptable person.", 
        ko: "수(水)의 기운이 균형을 이루면, 지혜와 통찰력으로 문제를 해결합니다. 당신은 현명하고 적응력이 뛰어난 사람입니다.",
        de: "Mit einer ausgewogenen Wasserenergie können Sie Probleme mit Weisheit und Einsicht lösen. Sie sind eine weise und anpassungsfähige Person.",
        es: "Con una energía del Agua equilibrada, puedes resolver problemas con sabiduría y perspicacia. Eres una persona sabia y adaptable.",
        fr: "Avec une énergie Eau équilibrée, vous pouvez résoudre les problèmes avec sagesse et perspicacité. Vous êtes une personne sage et adaptable.",
        id: "Dengan energi Air yang seimbang, Anda dapat memecahkan masalah dengan kebijaksanaan dan wawasan. Anda adalah orang yang bijaksana dan mudah beradaptasi.",
        it: "Con un'energia dell'Acqua equilibrata, puoi risolvere i problemi con saggezza e intuizione. Sei una persona saggia e adattabile.",
        ja: "バランスの取れた水のエネルギーがあれば、知恵と洞察力で問題を解決できます。あなたは賢く、順応性のある人です。",
        pt: "Com uma energia da Água equilibrada, você pode resolver problemas com sabedoria e percepção. Você é uma pessoa sábia e adaptável.",
        ru: "Сбалансированная энергия Воды позволяет вам решать проблемы с мудростью и проницательностью. Вы мудрый и легко приспосабливающийся человек.",
        th: "ด้วยพลังงานธาตุน้ำที่สมดุล คุณสามารถแก้ปัญหาด้วยสติปัญญาและความเข้าใจ คุณเป็นคนฉลาดและปรับตัวได้",
        'zh-CN': "水能量均衡，你可以用智慧和洞察力解决问题。你是一个聪明、适应能力强的人。",
        'zh-TW': "水能量均衡，你可以用智慧和洞察力解決問題。你是一個聰明、適應能力強的人。"
      }
    }
  },

  defaultTemplates: {
    overall: {
      en: "Your destiny shows a harmonious balance that brings success through perseverance and wisdom.",
      ko: "당신의 운명은 인내와 지혜를 통해 성공을 가져다주는 조화로운 균형을 보여줍니다.",
      de: "Ihr Schicksal zeigt ein harmonisches Gleichgewicht, das durch Ausdauer und Weisheit zum Erfolg führt.",
      es: "Tu destino muestra un equilibrio armonioso que trae el éxito a través de la perseverancia y la sabiduría.",
      fr: "Votre destin montre un équilibre harmonieux qui apporte le succès par la persévérance et la sagesse.",
      id: "Takdir Anda menunjukkan keseimbangan yang harmonis yang membawa kesuksesan melalui ketekunan dan kebijaksanaan.",
      it: "Il tuo destino mostra un equilibrio armonioso che porta al successo attraverso la perseveranza e la saggezza.",
      ja: "あなたの運命は、忍耐と知恵を通じて成功をもたらす調和のとれたバランスを示しています。",
      pt: "Seu destino mostra um equilíbrio harmonioso que traz sucesso através da perseverança e da sabedoria.",
      ru: "Ваша судьба показывает гармоничный баланс, который приносит успех благодаря настойчивости и мудрости.",
      th: "โชคชะตาของคุณแสดงให้เห็นถึงความสมดุลที่กลมกลืนซึ่งนำมาซึ่งความสำเร็จผ่านความพากเพียรและสติปัญญา",
      'zh-CN': "你的命运呈现出和谐的平衡，通过毅力和智慧带来成功。",
      'zh-TW': "你的命運呈現出和諧的平衡，通過毅力和智慧帶來成功。"
    },
    career: {
      en: "Professional growth will come through leveraging your natural talents and building strong relationships.",
      ko: "직업적 성장은 타고난 재능을 활용하고 강한 관계를 구축함으로써 올 것입니다.",
      de: "Berufliches Wachstum wird durch die Nutzung Ihrer natürlichen Talente und den Aufbau starker Beziehungen erzielt.",
      es: "El crecimiento profesional vendrá a través del aprovechamiento de tus talentos naturales y la construcción de relaciones sólidas.",
      fr: "La croissance professionnelle viendra en tirant parti de vos talents naturels et en établissant des relations solides.",
      id: "Pertumbuhan profesional akan datang melalui pemanfaatan bakat alami Anda dan membangun hubungan yang kuat.",
      it: "La crescita professionale arriverà sfruttando i tuoi talenti naturali e costruendo relazioni forti.",
      ja: "専門的な成長は、あなたの生まれ持った才能を活用し、強い人間関係を築くことによってもたらされます。",
      pt: "O crescimento profissional virá através do aproveitamento de seus talentos naturais e da construção de relacionamentos fortes.",
      ru: "Профессиональный рост придет благодаря использованию ваших природных талантов и построению прочных отношений.",
      th: "การเติบโตทางอาชีพจะมาจากการใช้ประโยชน์จากความสามารถตามธรรมชาติของคุณและการสร้างความสัมพันธ์ที่แข็งแกร่ง",
      'zh-CN': "职业发展将通过利用你的天赋和建立牢固的关系来实现。",
      'zh-TW': "職業發展將通過利用你的天賦和建立牢固的關係來實現。"
    },
    love: {
      en: "Emotional fulfillment awaits those who approach relationships with patience and understanding.",
      ko: "감정적 만족은 인내와 이해로 관계에 접근하는 사람들을 기다립니다.",
      de: "Emotionale Erfüllung erwartet diejenigen, die Beziehungen mit Geduld und Verständnis angehen.",
      es: "La plenitud emocional espera a aquellos que abordan las relaciones con paciencia y comprensión.",
      fr: "L'épanouissement émotionnel attend ceux qui abordent les relations avec patience et compréhension.",
      id: "Pemenuhan emosional menanti mereka yang mendekati hubungan dengan kesabaran dan pengertian.",
      it: "La realizzazione emotiva attende coloro che si avvicinano alle relazioni con pazienza e comprensione.",
      ja: "感情的な充足感は、忍耐と理解をもって人間関係に取り組む人々を待っています。",
      pt: "A realização emocional aguarda aqueles que abordam os relacionamentos com paciência e compreensão.",
      ru: "Эмоциональное удовлетворение ожидает тех, кто подходит к отношениям с терпением и пониманием.",
      th: "ความสมหวังทางอารมณ์รอคอยผู้ที่เข้าหาความสัมพันธ์ด้วยความอดทนและความเข้าใจ",
      'zh-CN': "情感上的满足等待着那些以耐心和理解来处理关系的人。",
      'zh-TW': "情感上的滿足等待著那些以耐心和理解來處理關係的人。"
    },
    health: {
      en: "Maintaining balance in all aspects of life will ensure long-term vitality and well-being.",
      ko: "삶의 모든 면에서 균형을 유지하는 것이 장기적인 활력과 웰빙을 보장할 것입니다.",
      de: "Die Aufrechterhaltung des Gleichgewichts in allen Lebensbereichen gewährleistet langfristige Vitalität und Wohlbefinden.",
      es: "Mantener el equilibrio en todos los aspectos de la vida garantizará la vitalidad y el bienestar a largo plazo.",
      fr: "Maintenir un équilibre dans tous les aspects de la vie assurera une vitalité et un bien-être à long terme.",
      id: "Menjaga keseimbangan dalam semua aspek kehidupan akan memastikan vitalitas dan kesejahteraan jangka panjang.",
      it: "Mantenere l'equilibrio in tutti gli aspetti della vita garantirà vitalità e benessere a lungo termine.",
      ja: "人生のあらゆる側面でバランスを維持することが、長期的な活力と幸福を保証します。",
      pt: "Manter o equilíbrio em todos os aspectos da vida garantirá vitalidade e bem-estar a longo prazo.",
      ru: "Поддержание баланса во всех аспектах жизни обеспечит долгосрочную жизнеспособность и благополучие.",
      th: "การรักษาสมดุลในทุกด้านของชีวิตจะช่วยให้มั่นใจได้ถึงความมีชีวิตชีวาและความเป็นอยู่ที่ดีในระยะยาว",
      'zh-CN': "在生活的各个方面保持平衡将确保长期的活力和幸福。",
      'zh-TW': "在生活的各個方面保持平衡將確保長期的活力和幸福。"
    },
    wealth: {
      en: "Financial prosperity comes through consistent effort and wise decision-making.",
      ko: "재정적 번영은 꾸준한 노력과 현명한 의사결정을 통해 옵니다.",
      de: "Finanzieller Wohlstand kommt durch konsequente Anstrengung und kluge Entscheidungen.",
      es: "La prosperidad financiera se logra a través de un esfuerzo constante y una toma de decisiones acertada.",
      fr: "La prospérité financière passe par des efforts constants et des décisions judicieuses.",
      id: "Kemakmuran finansial datang melalui usaha yang konsisten dan pengambilan keputusan yang bijaksana.",
      it: "La prosperità finanziaria si ottiene attraverso uno sforzo costante e decisioni sagge.",
      ja: "経済的な繁栄は、一貫した努力と賢明な意思決定によってもたらされます。",
      pt: "A prosperidade financeira vem através de esforço consistente e tomada de decisão sábia.",
      ru: "Финансовое процветание приходит благодаря постоянным усилиям и мудрым решениям.",
      th: "ความเจริญรุ่งเรืองทางการเงินมาจากการใช้ความพยายามอย่างสม่ำเสมอและการตัดสินใจที่ชาญฉลาด",
      'zh-CN': "财务上的繁荣来自于不懈的努力和明智的决策。",
      'zh-TW': "財務上的繁榮來自於不懈的努力和明智的決策。"
    },
    advice: {
      en: "Trust in your inner wisdom and stay true to your authentic self.",
      ko: "내면의 지혜를 믿고 진정한 자신에게 충실하세요.",
      de: "Vertrauen Sie auf Ihre innere Weisheit und bleiben Sie Ihrem authentischen Selbst treu.",
      es: "Confía en tu sabiduría interior y mantente fiel a tu auténtico yo.",
      fr: "Faites confiance à votre sagesse intérieure et restez fidèle à votre moi authentique.",
      id: "Percayalah pada kebijaksanaan batin Anda dan tetaplah setia pada diri Anda yang sebenarnya.",
      it: "Fidati della tua saggezza interiore e rimani fedele al tuo io autentico.",
      ja: "あなたの内なる知恵を信じ、本当の自分に忠実であり続けてください。",
      pt: "Confie na sua sabedoria interior e mantenha-se fiel ao seu eu autêntico.",
      ru: "Доверяйте своей внутренней мудрости и оставайтесь верны своему подлинному «я».",
      th: "จงเชื่อในสติปัญญาภายในของคุณและจงซื่อสัตย์ต่อตัวตนที่แท้จริงของคุณ",
      'zh-CN': "相信你内心的智慧，忠于真实的自我。",
      'zh-TW': "相信你內心的智慧，忠於真實的自我。"
    }
  }
};