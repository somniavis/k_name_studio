// Fortune Data Structure for Korean Name Studio
// 사주 기반 개인화된 운세 데이터

export type Locale = 'en' | 'ko' | 'fr' | 'it' | 'de' | 'pt' | 'es' | 'ja' | 'th' | 'id';
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
export const fortuneData = {
  elementCharacteristics: {
    wood: {
    personality: {
      en: "Like a growing tree, you possess natural creativity and adaptability that allows you to flourish in various environments.",
      ko: "자라나는 나무처럼 자연스러운 창의성과 적응력을 지니고 있어 다양한 환경에서 번영할 수 있습니다.",
      fr: "Tel un arbre en pleine croissance, vous possédez une créativité et une adaptabilité naturelles qui vous permettent de vous épanouir dans divers environnements.",
      it: "Come un albero che cresce, possiedi una creatività e un'adattabilità naturali che ti permettono di prosperare in vari ambienti.",
      de: "Wie ein wachsender Baum besitzen Sie natürliche Kreativität und Anpassungsfähigkeit, die es Ihnen ermöglichen, in verschiedenen Umgebungen zu gedeihen.",
      pt: "Como uma árvore em crescimento, você possui criatividade e adaptabilidade naturais que lhe permitem florescer em vários ambientes.",
      es: "Como un árbol en crecimiento, posees una creatividad y adaptabilidad naturales que te permiten prosperar en diversos entornos.",
      ja: "成長する木のように、あなたは自然な創造性と適応性を備えており、さまざまな環境で繁栄することができます。",
      th: "เหมือนต้นไม้ที่กำลังเติบโต คุณมีความคิดสร้างสรรค์และความสามารถในการปรับตัวตามธรรมชาติที่ช่วยให้คุณเจริญรุ่งเรืองในสภาพแวดล้อมที่หลากหลาย",
      id: "Seperti pohon yang tumbuh, Anda memiliki kreativitas dan kemampuan beradaptasi alami yang memungkinkan Anda berkembang di berbagai lingkungan."
    },
    strengths: {
      en: "Your innovative thinking and leadership qualities make you excel in creative fields and management positions.",
      ko: "혁신적인 사고와 리더십 자질로 창조적 분야와 관리직에서 뛰어난 능력을 발휘합니다.",
      fr: "Votre pensée innovante et vos qualités de leadership vous font exceller dans les domaines créatifs et les postes de direction.",
      it: "Il tuo pensiero innovativo e le tue qualità di leadership ti fanno eccellere nei campi creativi e nelle posizioni manageriali.",
      de: "Ihr innovatives Denken und Ihre Führungsqualitäten lassen Sie in kreativen Bereichen und Führungspositionen herausragen.",
      pt: "Seu pensamento inovador e qualidades de liderança fazem você se destacar em campos criativos e cargos de gestão.",
      es: "Tu pensamiento innovador y tus cualidades de liderazgo te hacen destacar en campos creativos y puestos de dirección.",
      ja: "あなたの革新的な思考とリーダーシップの質は、創造的な分野や管理職であなたを際立たせます。",
      th: "ความคิดสร้างสรรค์และคุณสมบัติความเป็นผู้นำของคุณทำให้คุณโดดเด่นในสายงานสร้างสรรค์และตำแหน่งผู้บริหาร",
      id: "Pemikiran inovatif dan kualitas kepemimpinan Anda membuat Anda unggul di bidang kreatif dan posisi manajemen."
    },
    weaknesses: {
      en: "You can sometimes be too assertive or impatient. It's important to learn to be more flexible and listen to others.",
      ko: "때로는 지나치게 독단적이거나 참을성이 부족할 수 있습니다. 유연성을 배우고 다른 사람의 의견에 귀 기울이는 것이 중요합니다.",
      fr: "Vous pouvez parfois être trop autoritaire ou impatient. Il est important d'apprendre à être plus flexible et à écouter les autres.",
      it: "A volte puoi essere troppo autoritario o impaziente. È importante imparare ad essere più flessibile e ad ascoltare gli altri.",
      de: "Sie können manchmal zu durchsetzungsfähig oder ungeduldig sein. Es ist wichtig zu lernen, flexibler zu sein und anderen zuzuhören.",
      pt: "Às vezes, você pode ser muito assertivo ou impaciente. É importante aprender a ser mais flexível e a ouvir os outros.",
      es: "A veces puedes ser demasiado asertivo o impaciente. Es importante aprender a ser más flexible y a escuchar a los demás.",
      ja: "あなたは時々、自己主張が強すぎたり、せっかちになったりすることがあります。もっと柔軟になり、他の人の意見に耳を傾けることを学ぶことが重要です。",
      th: "บางครั้งคุณอาจจะยืนกรานในความคิดของตัวเองหรือใจร้อนเกินไป สิ่งสำคัญคือต้องเรียนรู้ที่จะยืดหยุ่นและรับฟังผู้อื่นมากขึ้น",
      id: "Anda terkadang bisa terlalu tegas atau tidak sabar. Penting untuk belajar menjadi lebih fleksibel dan mendengarkan orang lain."
    },
    career: {
      en: "You are well-suited for careers in planning, education, and creative industries where your forward-thinking nature can shine.",
      ko: "당신의 미래 지향적인 성격이 빛을 발할 수 있는 기획, 교육, 창조 산업 분야의 직업에 잘 어울립니다.",
      fr: "Vous êtes bien adapté aux carrières dans la planification, l'éducation et les industries créatives où votre nature avant-gardiste peut briller.",
      it: "Sei adatto a carriere nella pianificazione, nell'istruzione e nelle industrie creative in cui la tua natura lungimirante può brillare.",
      de: "Sie eignen sich gut für Karrieren in den Bereichen Planung, Bildung und Kreativwirtschaft, in denen Ihre zukunftsorientierte Natur glänzen kann.",
      pt: "Você é adequado para carreiras em planejamento, educação e indústrias criativas, onde sua natureza progressista pode brilhar.",
      es: "Eres muy adecuado para carreras en planificación, educación e industrias creativas donde tu naturaleza progresista puede brillar.",
      ja: "あなたの先進的な性質が輝くことができる、企画、教育、創造的な産業でのキャリアに適しています。",
      th: "คุณเหมาะกับอาชีพในสายงานการวางแผน การศึกษา และอุตสาหกรรมสร้างสรรค์ ซึ่งธรรมชาติที่มองการณ์ไกลของคุณจะโดดเด่น",
      id: "Anda sangat cocok untuk karir di bidang perencanaan, pendidikan, dan industri kreatif di mana sifat berpikiran maju Anda dapat bersinar."
    },
    love: {
      en: "In relationships, you are active and sincere, but be careful not to impose your own way too much.",
      ko: "연애에 있어 적극적이고 진솔하지만, 자신의 방식을 너무 강요하지 않도록 주의해야 합니다.",
      fr: "Dans les relations, vous êtes actif et sincère, mais veillez à ne pas trop imposer votre propre façon de faire.",
      it: "Nelle relazioni, sei attivo e sincero, ma fai attenzione a non imporre troppo il tuo modo di fare.",
      de: "In Beziehungen sind Sie aktiv und aufrichtig, aber achten Sie darauf, Ihren eigenen Weg nicht zu sehr aufzuzwingen.",
      pt: "Nos relacionamentos, você é ativo e sincero, mas tome cuidado para não impor demais o seu próprio jeito.",
      es: "En las relaciones, eres activo y sincero, pero ten cuidado de no imponer demasiado tu propia forma de ser.",
      ja: "恋愛関係においては、あなたは積極的で誠実ですが、自分のやり方をあまり押し付けすぎないように注意してください。",
      th: "ในความสัมพันธ์ คุณเป็นคนกระตือรือร้นและจริงใจ แต่ระวังอย่าบังคับใจตัวเองมากเกินไป",
      id: "Dalam hubungan, Anda aktif dan tulus, tetapi berhati-hatilah untuk tidak terlalu memaksakan cara Anda sendiri."
    },
    health: {
      en: "Pay attention to the health of your liver and gallbladder. It is good to relieve stress through activities in nature.",
      ko: "간과 담낭 건강에 주의를 기울이세요. 자연 속에서의 활동으로 스트레스를 해소하는 것이 좋습니다.",
      fr: "Faites attention à la santé de votre foie et de votre vésicule biliaire. Il est bon de soulager le stress par des activités dans la nature.",
      it: "Presta attenzione alla salute del fegato e della cistifellea. È bene alleviare lo stress attraverso attività nella natura.",
      de: "Achten Sie auf die Gesundheit Ihrer Leber und Gallenblase. Es ist gut, Stress durch Aktivitäten in der Natur abzubauen.",
      pt: "Preste atenção à saúde do seu fígado e vesícula biliar. É bom aliviar o estresse através de atividades na natureza.",
      es: "Presta atención a la salud de tu hígado y vesícula biliar. Es bueno aliviar el estrés a través de actividades en la naturaleza.",
      ja: "肝臓と胆嚢の健康に注意してください。自然の中での活動を通じてストレスを解消するのが良いでしょう。",
      th: "ใส่ใจสุขภาพตับและถุงน้ำดีของคุณ การทำกิจกรรมในธรรมชาติจะช่วยคลายความเครียดได้ดี",
      id: "Perhatikan kesehatan hati dan kantong empedu Anda. Baik untuk menghilangkan stres melalui aktivitas di alam."
    },
    wealth: {
      en: "Your wealth grows through continuous challenges and new ventures. Avoid hasty decisions and manage your assets with a long-term perspective.",
      ko: "재물은 끊임없는 도전과 새로운 시도를 통해 성장합니다. 성급한 결정을 피하고 장기적인 안목으로 자산을 관리하세요.",
      fr: "Votre richesse croît grâce à des défis continus et à de nouvelles entreprises. Évitez les décisions hâtives et gérez vos actifs dans une perspective à long terme.",
      it: "La tua ricchezza cresce attraverso sfide continue e nuove iniziative. Evita decisioni affrettate e gestisci i tuoi beni con una prospettiva a lungo termine.",
      de: "Ihr Vermögen wächst durch kontinuierliche Herausforderungen und neue Unternehmungen. Vermeiden Sie überstürzte Entscheidungen und verwalten Sie Ihr Vermögen mit einer langfristigen Perspektive.",
      pt: "Sua riqueza cresce através de desafios contínuos e novos empreendimentos. Evite decisões precipitadas e gerencie seus ativos com uma perspectiva de longo prazo.",
      es: "Tu riqueza crece a través de desafíos continuos y nuevas empresas. Evita las decisiones precipitadas y gestiona tus activos con una perspectiva a largo plazo.",
      ja: "あなたの富は、継続的な挑戦と新しいベンチャーを通じて成長します。性急な決定を避け、長期的な視点で資産を管理してください。",
      th: "ความมั่งคั่งของคุณเติบโตผ่านความท้าทายอย่างต่อเนื่องและการลงทุนใหม่ๆ หลีกเลี่ยงการตัดสินใจที่เร่งรีบและจัดการทรัพย์สินของคุณด้วยมุมมองระยะยาว",
      id: "Kekayaan Anda tumbuh melalui tantangan berkelanjutan dan usaha baru. Hindari keputusan yang tergesa-gesa dan kelola aset Anda dengan perspektif jangka panjang."
    },
    advice: {
      en: "Embrace flexibility and cooperation. Your potential will be fully realized when your creativity meets harmony.",
      ko: "유연함과 협력의 자세를 받아들이세요. 당신의 창의성이 조화를 만날 때 잠재력이 온전히 발휘될 것입니다.",
      fr: "Adoptez la flexibilité et la coopération. Votre potentiel sera pleinement réalisé lorsque votre créativité rencontrera l'harmonie.",
      it: "Abbraccia la flessibilità e la cooperazione. Il tuo potenziale sarà pienamente realizzato quando la tua creatività incontrerà l'armonia.",
      de: "Umfassen Sie Flexibilität und Zusammenarbeit. Ihr Potenzial wird voll ausgeschöpft, wenn Ihre Kreativität auf Harmonie trifft.",
      pt: "Abrace a flexibilidade e a cooperação. Seu potencial será totalmente realizado quando sua criatividade encontrar a harmonia.",
      es: "Abraza la flexibilidad y la cooperación. Tu potencial se realizará plenamente cuando tu creatividad se encuentre con la armonía.",
      ja: "柔軟性と協力を受け入れてください。あなたの創造性が調和と出会うとき、あなたの可能性は完全に実現されます。",
      th: "ยอมรับความยืดหยุ่นและความร่วมมือ ศักยภาพของคุณจะถูกปลดปล่อยออกมาอย่างเต็มที่เมื่อความคิดสร้างสรรค์ของคุณมาบรรจบกับความสามัคคี",
      id: "Rangkullah fleksibilitas dan kerja sama. Potensi Anda akan terwujud sepenuhnya ketika kreativitas Anda bertemu dengan harmoni."
    }
  },
  fire: {
    personality: {
      en: "Full of passion and energy, you have a cheerful and sociable personality that brightens your surroundings.",
      ko: "열정과 에너지가 넘치며, 명랑하고 사교적인 성격으로 주변을 밝게 만드는 사람입니다.",
      fr: "Plein de passion et d'énergie, vous avez une personnalité joyeuse et sociable qui illumine votre entourage.",
      it: "Pieno di passione ed energia, hai una personalità allegra e socievole che illumina l'ambiente circostante.",
      de: "Voller Leidenschaft und Energie haben Sie eine fröhliche und gesellige Persönlichkeit, die Ihre Umgebung erhellt.",
      pt: "Cheio de paixão e energia, você tem uma personalidade alegre e sociável que ilumina o ambiente ao seu redor.",
      es: "Lleno de pasión y energía, tienes una personalidad alegre y sociable que ilumina tu entorno.",
      ja: "情熱とエネルギーに満ち、陽気で社交的な性格で、周囲を明るくします。",
      th: "เต็มไปด้วยความหลงใหลและพลังงาน คุณมีบุคลิกที่ร่าเริงและเข้ากับคนง่ายซึ่งทำให้สภาพแวดล้อมของคุณสดใสขึ้น",
      id: "Penuh gairah dan energi, Anda memiliki kepribadian yang ceria dan mudah bergaul yang mencerahkan lingkungan Anda."
    },
    strengths: {
      en: "Your greatest strengths are your strong drive, sociability, and artistic sense. You are good at leading others and creating a positive atmosphere.",
      ko: "강한 추진력과 사교성, 예술적 감각이 가장 큰 장점입니다. 다른 사람을 이끌고 긍정적인 분위기를 만드는 데 능숙합니다.",
      fr: "Vos plus grandes forces sont votre forte motivation, votre sociabilité et votre sens artistique. Vous êtes doué pour diriger les autres et créer une atmosphère positive.",
      it: "I tuoi più grandi punti di forza sono la tua forte spinta, la socievolezza e il senso artistico. Sei bravo a guidare gli altri e a creare un'atmosfera positiva.",
      de: "Ihre größten Stärken sind Ihr starker Antrieb, Ihre Geselligkeit und Ihr künstlerischer Sinn. Sie sind gut darin, andere zu führen und eine positive Atmosphäre zu schaffen.",
      pt: "Suas maiores forças são seu forte impulso, sociabilidade e senso artístico. Você é bom em liderar os outros e criar uma atmosfera positiva.",
      es: "Tus mayores fortalezas son tu fuerte impulso, sociabilidad y sentido artístico. Eres bueno para liderar a otros y crear una atmósfera positiva.",
      ja: "あなたの最大の強みは、強い意欲、社交性、そして芸術的センスです。あなたは他人を導き、前向きな雰囲気を作り出すのが得意です。",
      th: "จุดแข็งที่ยิ่งใหญ่ที่สุดของคุณคือแรงผลักดันที่แข็งแกร่ง การเข้าสังคม และรสนิยมทางศิลปะ คุณเก่งในการเป็นผู้นำผู้อื่นและสร้างบรรยากาศเชิงบวก",
      id: "Kekuatan terbesar Anda adalah dorongan kuat, kemampuan bersosialisasi, dan selera artistik Anda. Anda pandai memimpin orang lain dan menciptakan suasana positif."
    },
    weaknesses: {
      en: "You can be impulsive and easily get tired of things. It is necessary to cultivate patience and take responsibility for your words and actions.",
      ko: "다소 충동적이고 쉽게 싫증을 느낄 수 있습니다. 인내심을 기르고 자신의 말과 행동에 책임을 지는 자세가 필요합니다.",
      fr: "Vous pouvez être impulsif et vous lasser facilement des choses. Il est nécessaire de cultiver la patience et de prendre la responsabilité de vos paroles et de vos actes.",
      it: "Puoi essere impulsivo e stancarti facilmente delle cose. È necessario coltivare la pazienza e assumersi la responsabilità delle proprie parole e azioni.",
      de: "Sie können impulsiv sein und sich leicht langweilen. Es ist notwendig, Geduld zu kultivieren und Verantwortung für Ihre Worte und Taten zu übernehmen.",
      pt: "Você pode ser impulsivo e se cansar facilmente das coisas. É necessário cultivar a paciência e assumir a responsabilidade por suas palavras e ações.",
      es: "Puedes ser impulsivo y cansarte fácilmente de las cosas. Es necesario cultivar la paciencia y asumir la responsabilidad de tus palabras y acciones.",
      ja: "あなたは衝動的で、物事に飽きやすいことがあります。忍耐力を養い、自分の言動に責任を持つことが必要です。",
      th: "คุณอาจเป็นคนหุนหันพลันแล่นและเบื่อง่าย จำเป็นต้องฝึกฝนความอดทนและรับผิดชอบต่อคำพูดและการกระทำของคุณ",
      id: "Anda bisa menjadi impulsif dan mudah bosan dengan banyak hal. Penting untuk menumbuhkan kesabaran dan bertanggung jawab atas perkataan dan tindakan Anda."
    },
    career: {
      en: "You are suited for careers in broadcasting, entertainment, and design, where you can fully express your passion and creativity.",
      ko: "자신의 열정과 창의성을 마음껏 발휘할 수 있는 방송, 연예, 디자인 분야의 직업이 잘 어울립니다.",
      fr: "Vous êtes apte à des carrières dans la radiodiffusion, le divertissement et le design, où vous pouvez exprimer pleinement votre passion et votre créativité.",
      it: "Sei adatto a carriere nel settore radiotelevisivo, dell'intrattenimento e del design, dove puoi esprimere appieno la tua passione e creatività.",
      de: "Sie eignen sich für Karrieren in den Bereichen Rundfunk, Unterhaltung und Design, in denen Sie Ihre Leidenschaft und Kreativität voll zum Ausdruck bringen können.",
      pt: "Você é adequado para carreiras em radiodifusão, entretenimento e design, onde pode expressar plenamente sua paixão e criatividade.",
      es: "Eres adecuado para carreras en radiodifusión, entretenimiento y diseño, donde puedes expresar plenamente tu pasión y creatividad.",
      ja: "あなたは、放送、エンターテイメント、デザインなどのキャリアに向いており、情熱と創造性を存分に発揮できます。",
      th: "คุณเหมาะกับอาชีพในสายงานการกระจายเสียง ความบันเทิง และการออกแบบ ซึ่งคุณสามารถแสดงความหลงใหลและความคิดสร้างสรรค์ของคุณได้อย่างเต็มที่",
      id: "Anda cocok untuk karir di bidang penyiaran, hiburan, dan desain, di mana Anda dapat sepenuhnya mengekspresikan hasrat dan kreativitas Anda."
    },
    love: {
      en: "You are passionate and romantic in love. However, be careful as your fluctuating emotions can sometimes make your partner feel tired.",
      ko: "사랑에 있어 화려하고 낭만적인 모습을 보입니다. 다만, 감정 기복이 때로 상대방을 지치게 할 수 있으니 주의가 필요합니다.",
      fr: "Vous êtes passionné et romantique en amour. Cependant, soyez prudent car vos émotions fluctuantes peuvent parfois fatiguer votre partenaire.",
      it: "Sei passionale e romantico in amore. Tuttavia, fai attenzione perché le tue emozioni fluttuanti a volte possono far sentire il tuo partner stanco.",
      de: "Sie sind leidenschaftlich und romantisch in der Liebe. Seien Sie jedoch vorsichtig, da Ihre schwankenden Emotionen Ihren Partner manchmal müde machen können.",
      pt: "Você é apaixonado e romântico no amor. No entanto, tenha cuidado, pois suas emoções flutuantes às vezes podem deixar seu parceiro cansado.",
      es: "Eres apasionado y romántico en el amor. Sin embargo, ten cuidado, ya que tus emociones fluctuantes a veces pueden hacer que tu pareja se sienta cansada.",
      ja: "あなたは恋に情熱的でロマンチックです。しかし、あなたの感情の起伏がパートナーを疲れさせてしまうことがあるので注意が必要です。",
      th: "คุณเป็นคนโรแมนติกและหลงใหลในความรัก อย่างไรก็ตาม ระวังว่าอารมณ์ที่แปรปรวนของคุณอาจทำให้คนรักของคุณรู้สึกเหนื่อยได้ในบางครั้ง",
      id: "Anda bergairah dan romantis dalam cinta. Namun, berhati-hatilah karena emosi Anda yang berfluktuasi terkadang dapat membuat pasangan Anda merasa lelah."
    },
    health: {
      en: "Be mindful of your heart and small intestine health. It is important to manage your energy well and get enough rest.",
      ko: "심장과 소장 건강에 유의해야 합니다. 에너지를 잘 관리하고 충분한 휴식을 취하는 것이 중요합니다.",
      fr: "Soyez attentif à la santé de votre cœur et de votre intestin grêle. Il est important de bien gérer votre énergie et de vous reposer suffisamment.",
      it: "Sii consapevole della salute del tuo cuore e del tuo intestino tenue. È importante gestire bene la tua energia e riposare a sufficienza.",
      de: "Achten Sie auf die Gesundheit Ihres Herzens und Dünndarms. Es ist wichtig, Ihre Energie gut zu verwalten und sich ausreichend auszuruhen.",
      pt: "Esteja atento à saúde do seu coração e intestino delgado. É importante gerenciar bem sua energia e descansar o suficiente.",
      es: "Ten en cuenta la salud de tu corazón e intestino delgado. Es importante gestionar bien tu energía y descansar lo suficiente.",
      ja: "心臓と小腸の健康に注意してください。エネルギーをうまく管理し、十分な休息をとることが重要です。",
      th: "ใส่ใจสุขภาพหัวใจและลำไส้เล็กของคุณ สิ่งสำคัญคือต้องจัดการพลังงานของคุณให้ดีและพักผ่อนให้เพียงพอ",
      id: "Perhatikan kesehatan jantung dan usus kecil Anda. Penting untuk mengelola energi Anda dengan baik dan cukup istirahat."
    },
    wealth: {
      en: "Wealth can be achieved in a short period with your unique ideas, but your spending is also significant, so you need a systematic financial plan.",
      ko: "독창적인 아이디어로 단기간에 재물을 이룰 수 있지만, 씀씀이가 커서 체계적인 재물 계획이 필요합니다.",
      fr: "La richesse peut être atteinte en peu de temps avec vos idées uniques, mais vos dépenses sont également importantes, vous avez donc besoin d'un plan financier systématique.",
      it: "La ricchezza può essere raggiunta in un breve periodo con le tue idee uniche, ma anche le tue spese sono significative, quindi hai bisogno di un piano finanziario sistematico.",
      de: "Mit Ihren einzigartigen Ideen kann in kurzer Zeit Wohlstand erreicht werden, aber Ihre Ausgaben sind auch erheblich, daher benötigen Sie einen systematischen Finanzplan.",
      pt: "A riqueza pode ser alcançada em um curto período com suas ideias únicas, mas seus gastos também são significativos, então você precisa de um plano financeiro sistemático.",
      es: "La riqueza se puede lograr en un corto período con tus ideas únicas, pero tus gastos también son significativos, por lo que necesitas un plan financiero sistemático.",
      ja: "あなたのユニークなアイデアで短期間で富を築くことができますが、支出も多いため、体系的な財務計画が必要です。",
      th: "ความมั่งคั่งสามารถเกิดขึ้นได้ในระยะเวลาอันสั้นด้วยความคิดที่ไม่เหมือนใครของคุณ แต่การใช้จ่ายของคุณก็มีความสำคัญเช่นกัน ดังนั้นคุณจึงต้องมีแผนทางการเงินที่เป็นระบบ",
      id: "Kekayaan dapat dicapai dalam waktu singkat dengan ide-ide unik Anda, tetapi pengeluaran Anda juga signifikan, jadi Anda memerlukan rencana keuangan yang sistematis."
    },
    advice: {
      en: "Learn to control your passion and cultivate inner stability. True success comes when passion is accompanied by responsibility.",
      ko: "뜨거운 열정을 조절하고 내면의 안정감을 기르는 법을 배우세요. 책임감이 동반될 때 진정한 성공이 찾아옵니다.",
      fr: "Apprenez à contrôler votre passion et à cultiver la stabilité intérieure. Le vrai succès vient lorsque la passion s'accompagne de responsabilité.",
      it: "Impara a controllare la tua passione e a coltivare la stabilità interiore. Il vero successo arriva quando la passione è accompagnata dalla responsabilità.",
      de: "Lernen Sie, Ihre Leidenschaft zu kontrollieren und innere Stabilität zu kultivieren. Wahrer Erfolg stellt sich ein, wenn Leidenschaft von Verantwortung begleitet wird.",
      pt: "Aprenda a controlar sua paixão e a cultivar a estabilidade interior. O verdadeiro sucesso vem quando a paixão é acompanhada de responsabilidade.",
      es: "Aprende a controlar tu pasión y a cultivar la estabilidad interior. El verdadero éxito llega cuando la pasión va acompañada de responsabilidad.",
      ja: "あなたの情熱をコントロールし、内なる安定を育むことを学びましょう。情熱に責任が伴うとき、真の成功が訪れます。",
      th: "เรียนรู้ที่จะควบคุมความหลงใหลของคุณและปลูกฝังความมั่นคงภายใน ความสำเร็จที่แท้จริงจะเกิดขึ้นเมื่อความหลงใหลมาพร้อมกับความรับผิดชอบ",
      id: "Belajarlah untuk mengendalikan hasrat Anda dan memupuk stabilitas batin. Kesuksesan sejati datang ketika hasrat diiringi dengan tanggung jawab."
    }
  },
  earth: {
    personality: {
      en: "With a sincere and calm personality, you are trustworthy and give a sense of stability to those around you.",
      ko: "성실하고 차분한 성품으로, 신뢰감이 깊고 주변 사람들에게 안정감을 주는 사람입니다.",
      fr: "Avec une personnalité sincère et calme, vous êtes digne de confiance et donnez un sentiment de stabilité à votre entourage.",
      it: "Con una personalità sincera e calma, sei affidabile e dai un senso di stabilità a chi ti circonda.",
      de: "Mit einer aufrichtigen und ruhigen Persönlichkeit sind Sie vertrauenswürdig und geben Ihren Mitmenschen ein Gefühl der Stabilität.",
      pt: "Com uma personalidade sincera e calma, você é confiável e dá uma sensação de estabilidade às pessoas ao seu redor.",
      es: "Con una personalidad sincera y tranquila, eres digno de confianza y das una sensación de estabilidad a quienes te rodean.",
      ja: "誠実で穏やかな性格で、信頼でき、周りの人々に安定感を与えます。",
      th: "ด้วยบุคลิกที่จริงใจและสงบ คุณเป็นคนที่น่าเชื่อถือและให้ความรู้สึกมั่นคงแก่คนรอบข้าง",
      id: "Dengan kepribadian yang tulus dan tenang, Anda dapat dipercaya dan memberikan rasa stabilitas bagi orang-orang di sekitar Anda."
    },
    strengths: {
      en: "Your diligence, sense of responsibility, and tolerance are your greatest strengths. You mediate between people and create a harmonious environment.",
      ko: "부지런함과 책임감, 그리고 포용력이 가장 큰 장점입니다. 사람들 사이를 중재하고 조화로운 환경을 만드는 역할을 합니다.",
      fr: "Votre diligence, votre sens des responsabilités et votre tolérance sont vos plus grandes forces. Vous servez de médiateur entre les gens et créez un environnement harmonieux.",
      it: "La tua diligenza, il tuo senso di responsabilità e la tua tolleranza sono i tuoi maggiori punti di forza. Fai da mediatore tra le persone e crei un ambiente armonioso.",
      de: "Ihre Sorgfalt, Ihr Verantwortungsbewusstsein und Ihre Toleranz sind Ihre größten Stärken. Sie vermitteln zwischen Menschen und schaffen ein harmonisches Umfeld.",
      pt: "Sua diligência, senso de responsabilidade e tolerância são suas maiores forças. Você medeia entre as pessoas e cria um ambiente harmonioso.",
      es: "Tu diligencia, sentido de la responsabilidad y tolerancia son tus mayores fortalezas. Medias entre las personas y creas un ambiente armonioso.",
      ja: "あなたの勤勉さ、責任感、そして寛容さが最大の強みです。あなたは人々の間を取り持ち、調和のとれた環境を作り出します。",
      th: "ความขยันหมั่นเพียร ความรับผิดชอบ และความอดทนเป็นจุดแข็งที่ยิ่งใหญ่ที่สุดของคุณ คุณเป็นสื่อกลางระหว่างผู้คนและสร้างสภาพแวดล้อมที่กลมกลืนกัน",
      id: "Ketekunan, rasa tanggung jawab, dan toleransi Anda adalah kekuatan terbesar Anda. Anda menengahi antara orang-orang dan menciptakan lingkungan yang harmonis."
    },
    weaknesses: {
      en: "You can be seen as inflexible and stubborn because you are cautious and conservative. Sometimes you need the courage to embrace change.",
      ko: "신중하고 보수적인 성향 때문에 융통성이 없거나 고집이 세다는 인상을 줄 수 있습니다. 때로는 변화를 수용하는 용기가 필요합니다.",
      fr: "Vous pouvez être perçu comme inflexible et têtu parce que vous êtes prudent et conservateur. Parfois, il faut du courage pour accepter le changement.",
      it: "Puoi essere visto come inflessibile e testardo perché sei cauto e conservatore. A volte hai bisogno del coraggio di abbracciare il cambiamento.",
      de: "Sie können als unflexibel und stur angesehen werden, weil Sie vorsichtig und konservativ sind. Manchmal braucht man den Mut, Veränderungen anzunehmen.",
      pt: "Você pode ser visto como inflexível e teimoso porque é cauteloso e conservador. Às vezes, você precisa da coragem para abraçar a mudança.",
      es: "Puedes ser visto como inflexible y terco porque eres cauteloso y conservador. A veces necesitas el coraje para aceptar el cambio.",
      ja: "あなたは慎重で保守的であるため、柔軟性がなく頑固だと見なされることがあります。時には変化を受け入れる勇気が必要です。",
      th: "คุณอาจถูกมองว่าไม่ยืดหยุ่นและดื้อรั้นเพราะคุณเป็นคนระมัดระวังและอนุรักษ์นิยม บางครั้งคุณต้องมีความกล้าที่จะยอมรับการเปลี่ยนแปลง",
      id: "Anda bisa dianggap tidak fleksibel dan keras kepala karena Anda berhati-hati dan konservatif. Terkadang Anda membutuhkan keberanian untuk menerima perubahan."
    },
    career: {
      en: "You are suitable for stable professions such as real estate, agriculture, and public service, where your sincerity can shine.",
      ko: "당신의 성실함이 빛을 발할 수 있는 부동산, 농업, 공직 등 안정적인 직업이 적합합니다.",
      fr: "Vous êtes apte à des professions stables telles que l'immobilier, l'agriculture et la fonction publique, où votre sincérité peut briller.",
      it: "Sei adatto a professioni stabili come il settore immobiliare, l'agricoltura e il servizio pubblico, dove la tua sincerità può brillare.",
      de: "Sie eignen sich für stabile Berufe wie Immobilien, Landwirtschaft und den öffentlichen Dienst, in denen Ihre Aufrichtigkeit glänzen kann.",
      pt: "Você é adequado para profissões estáveis, como imóveis, agricultura e serviço público, onde sua sinceridade pode brilhar.",
      es: "Eres adecuado para profesiones estables como bienes raíces, agricultura y servicio público, donde tu sinceridad puede brillar.",
      ja: "あなたの誠実さが輝く不動産、農業、公務員などの安定した職業に適しています。",
      th: "คุณเหมาะกับอาชีพที่มั่นคง เช่น อสังหาริมทรัพย์ เกษตรกรรม และบริการสาธารณะ ซึ่งความจริงใจของคุณจะโดดเด่น",
      id: "Anda cocok untuk profesi yang stabil seperti real estat, pertanian, dan layanan publik, di mana ketulusan Anda dapat bersinar."
    },
    love: {
      en: "You pursue a stable and sincere relationship. You are a person who can give deep trust to your partner, but you may seem less expressive.",
      ko: "안정적이고 진실한 관계를 추구합니다. 연인에게 깊은 신뢰를 줄 수 있는 사람이지만, 다소 표현이 부족해 보일 수 있습니다.",
      fr: "Vous recherchez une relation stable et sincère. Vous êtes une personne qui peut donner une profonde confiance à votre partenaire, mais vous pouvez paraître moins expressif.",
      it: "Persegui una relazione stabile e sincera. Sei una persona che può dare profonda fiducia al tuo partner, ma potresti sembrare meno espressivo.",
      de: "Sie streben eine stabile und aufrichtige Beziehung an. Sie sind eine Person, die Ihrem Partner tiefes Vertrauen schenken kann, aber Sie scheinen möglicherweise weniger ausdrucksstark zu sein.",
      pt: "Você busca um relacionamento estável e sincero. Você é uma pessoa que pode dar profunda confiança ao seu parceiro, mas pode parecer menos expressivo.",
      es: "Buscas una relación estable y sincera. Eres una persona que puede dar una profunda confianza a tu pareja, pero puedes parecer menos expresivo.",
      ja: "あなたは安定した誠実な関係を追求します。あなたはパートナーに深い信頼を与えることができる人ですが、表現力に乏しいように見えるかもしれません。",
      th: "คุณแสวงหาความสัมพันธ์ที่มั่นคงและจริงใจ คุณเป็นคนที่สามารถให้ความไว้วางใจอย่างลึกซึ้งแก่คนรักของคุณได้ แต่คุณอาจดูเหมือนไม่ค่อยแสดงออก",
      id: "Anda mengejar hubungan yang stabil dan tulus. Anda adalah orang yang dapat memberikan kepercayaan yang dalam kepada pasangan Anda, tetapi Anda mungkin tampak kurang ekspresif."
    },
    health: {
      en: "Pay attention to your digestive system, especially the stomach and spleen. A regular diet and stress management are important.",
      ko: "소화기 계통, 특히 위와 비장 건강에 주의하세요. 규칙적인 식습관과 스트레스 관리가 중요합니다.",
      fr: "Faites attention à votre système digestif, en particulier à l'estomac et à la rate. Une alimentation régulière et la gestion du stress sont importantes.",
      it: "Presta attenzione al tuo sistema digestivo, in particolare allo stomaco e alla milza. Una dieta regolare e la gestione dello stress sono importanti.",
      de: "Achten Sie auf Ihr Verdauungssystem, insbesondere auf Magen und Milz. Eine regelmäßige Ernährung und Stressbewältigung sind wichtig.",
      pt: "Preste atenção ao seu sistema digestivo, especialmente ao estômago e ao baço. Uma dieta regular e o gerenciamento do estresse são importantes.",
      es: "Presta atención a tu sistema digestivo, especialmente al estómago y al bazo. Una dieta regular y el manejo del estrés son importantes.",
      ja: "消化器系、特に胃と脾臓に注意してください。規則正しい食事とストレス管理が重要です。",
      th: "ใส่ใจระบบย่อยอาหารของคุณ โดยเฉพาะกระเพาะอาหารและม้าม การรับประทานอาหารอย่างสม่ำเสมอและการจัดการความเครียดเป็นสิ่งสำคัญ",
      id: "Perhatikan sistem pencernaan Anda, terutama lambung dan limpa. Diet teratur dan manajemen stres itu penting."
    },
    wealth: {
      en: "You build wealth step by step through diligence and savings. You are more suited to long-term, stable investments than to speculation.",
      ko: "성실함과 저축을 통해 차근차근 재물을 쌓아가는 타입입니다. 투기보다는 장기적이고 안정적인 투자에 더 적합합니다.",
      fr: "Vous construisez votre patrimoine pas à pas grâce à la diligence et à l'épargne. Vous êtes plus apte aux investissements stables à long terme qu'à la spéculation.",
      it: "Costruisci ricchezza passo dopo passo attraverso la diligenza e il risparmio. Sei più adatto a investimenti stabili a lungo termine che alla speculazione.",
      de: "Sie bauen Schritt für Schritt durch Fleiß und Sparen Wohlstand auf. Sie eignen sich eher für langfristige, stabile Investitionen als für Spekulationen.",
      pt: "Você constrói riqueza passo a passo através da diligência e da poupança. Você é mais adequado para investimentos estáveis e de longo prazo do que para especulação.",
      es: "Construyes riqueza paso a paso a través de la diligencia y el ahorro. Eres más adecuado para inversiones estables a largo plazo que para la especulación.",
      ja: "あなたは勤勉と貯蓄を通じて一歩一歩富を築きます。あなたは投機よりも長期的で安定した投資に適しています。",
      th: "คุณสร้างความมั่งคั่งทีละขั้นตอนผ่านความขยันหมั่นเพียรและการออม คุณเหมาะกับการลงทุนระยะยาวที่มั่นคงมากกว่าการเก็งกำไร",
      id: "Anda membangun kekayaan selangkah demi selangkah melalui ketekunan dan tabungan. Anda lebih cocok untuk investasi jangka panjang yang stabil daripada spekulasi."
    },
    advice: {
      en: "Sometimes, you need to step out of your comfort zone and take on new challenges. Your potential is limitless when your stability meets new possibilities.",
      ko: "가끔은 안전지대에서 벗어나 새로운 도전을 해보는 용기가 필요합니다. 당신의 안정감이 새로운 가능성을 만날 때 잠재력은 무한해집니다.",
      fr: "Parfois, vous devez sortir de votre zone de confort et relever de nouveaux défis. Votre potentiel est illimité lorsque votre stabilité rencontre de nouvelles possibilités.",
      it: "A volte, devi uscire dalla tua zona di comfort e affrontare nuove sfide. Il tuo potenziale è illimitato quando la tua stabilità incontra nuove possibilità.",
      de: "Manchmal müssen Sie Ihre Komfortzone verlassen und neue Herausforderungen annehmen. Ihr Potenzial ist grenzenlos, wenn Ihre Stabilität auf neue Möglichkeiten trifft.",
      pt: "Às vezes, você precisa sair da sua zona de conforto e assumir novos desafios. Seu potencial é ilimitado quando sua estabilidade encontra novas possibilidades.",
      es: "A veces, necesitas salir de tu zona de confort y asumir nuevos desafíos. Tu potencial es ilimitado cuando tu estabilidad se encuentra con nuevas posibilidades.",
      ja: "時には、快適ゾーンから出て新しい挑戦をすることが必要です。あなたの安定性が新しい可能性と出会うとき、あなたの可能性は無限大になります。",
      th: "บางครั้งคุณต้องก้าวออกจากเขตสบายของคุณและรับความท้าทายใหม่ๆ ศักยภาพของคุณไร้ขีดจำกัดเมื่อความมั่นคงของคุณมาพบกับความเป็นไปได้ใหม่ๆ",
      id: "Terkadang, Anda perlu keluar dari zona nyaman Anda dan menghadapi tantangan baru. Potensi Anda tidak terbatas ketika stabilitas Anda bertemu dengan kemungkinan-kemungkinan baru."
    }
  },
  metal: {
    personality: {
      en: "You have a strong sense of justice and principles, and you have a clear and decisive personality.",
      ko: "정의감과 원칙이 뚜렷하며, 명확하고 결단력 있는 성격을 가지고 있습니다.",
      fr: "Vous avez un sens aigu de la justice et des principes, et vous avez une personnalité claire et décisive.",
      it: "Hai un forte senso della giustizia e dei principi e hai una personalità chiara e decisa.",
      de: "Sie haben einen starken Sinn für Gerechtigkeit und Prinzipien und eine klare und entscheidungsfreudige Persönlichkeit.",
      pt: "Você tem um forte senso de justiça e princípios, e tem uma personalidade clara e decidida.",
      es: "Tienes un fuerte sentido de la justicia y los principios, y tienes una personalidad clara y decidida.",
      ja: "あなたは正義感と原則が強く、明確で決断力のある性格をしています。",
      th: "คุณมีความยุติธรรมและหลักการที่แข็งแกร่ง และคุณมีบุคลิกที่ชัดเจนและเด็ดขาด",
      id: "Anda memiliki rasa keadilan dan prinsip yang kuat, dan Anda memiliki kepribadian yang jelas dan tegas."
    },
    strengths: {
      en: "Your strong willpower, sense of responsibility, and systematic thinking are your strengths. You have the ability to see things through to the end with precision.",
      ko: "강한 의지력과 책임감, 체계적인 사고가 장점입니다. 맡은 일을 정확하게 끝까지 해내는 능력이 있습니다.",
      fr: "Votre forte volonté, votre sens des responsabilités et votre pensée systématique sont vos points forts. Vous avez la capacité de mener les choses à bien avec précision.",
      it: "La tua forte forza di volontà, il senso di responsabilità e il pensiero sistematico sono i tuoi punti di forza. Hai la capacità di portare a termine le cose con precisione.",
      de: "Ihre starke Willenskraft, Ihr Verantwortungsbewusstsein und Ihr systematisches Denken sind Ihre Stärken. Sie haben die Fähigkeit, Dinge mit Präzision zu Ende zu bringen.",
      pt: "Sua forte força de vontade, senso de responsabilidade e pensamento sistemático são seus pontos fortes. Você tem a capacidade de levar as coisas até o fim com precisão.",
      es: "Tu fuerte fuerza de voluntad, sentido de la responsabilidad y pensamiento sistemático son tus fortalezas. Tienes la capacidad de llevar las cosas hasta el final con precisión.",
      ja: "あなたの強い意志力、責任感、そして体系的な思考があなたの強みです。あなたは物事を正確に最後までやり遂げる能力を持っています。",
      th: "ความมุ่งมั่นที่แข็งแกร่ง ความรับผิดชอบ และการคิดอย่างเป็นระบบคือจุดแข็งของคุณ คุณมีความสามารถในการทำงานให้สำเร็จลุล่วงอย่างแม่นยำ",
      id: "Tekad kuat, rasa tanggung jawab, dan pemikiran sistematis Anda adalah kekuatan Anda. Anda memiliki kemampuan untuk menyelesaikan berbagai hal hingga tuntas dengan presisi."
    },
    weaknesses: {
      en: "You can be perceived as cold and overly critical because you are a perfectionist. You need to cultivate the flexibility to embrace others' mistakes.",
      ko: "완벽주의적인 성향 때문에 냉정하고 비판적이라는 인상을 줄 수 있습니다. 타인의 실수를 너그럽게 포용하는 유연함을 기를 필요가 있습니다.",
      fr: "Vous pouvez être perçu comme froid et trop critique parce que vous êtes perfectionniste. Vous devez cultiver la flexibilité pour accepter les erreurs des autres.",
      it: "Puoi essere percepito come freddo ed eccessivamente critico perché sei un perfezionista. Devi coltivare la flessibilità per abbracciare gli errori degli altri.",
      de: "Sie können als kalt und überkritisch wahrgenommen werden, weil Sie ein Perfektionist sind. Sie müssen die Flexibilität kultivieren, die Fehler anderer zu akzeptieren.",
      pt: "Você pode ser percebido como frio e excessivamente crítico porque é um perfeccionista. Você precisa cultivar a flexibilidade para aceitar os erros dos outros.",
      es: "Puedes ser percibido como frío y demasiado crítico porque eres un perfeccionista. Necesitas cultivar la flexibilidad para aceptar los errores de los demás.",
      ja: "あなたは完璧主義者であるため、冷たく過度に批判的だと認識されることがあります。他人の過ちを受け入れる柔軟性を養う必要があります。",
      th: "คุณอาจถูกมองว่าเย็นชาและวิจารณ์มากเกินไปเพราะคุณเป็นคนสมบูรณ์แบบ คุณต้องปลูกฝังความยืดหยุ่นเพื่อยอมรับความผิดพลาดของผู้อื่น",
      id: "Anda bisa dianggap dingin dan terlalu kritis karena Anda seorang perfeksionis. Anda perlu menumbuhkan fleksibilitas untuk menerima kesalahan orang lain."
    },
    career: {
      en: "You are well-suited for professional fields such as finance, law, and the military, which require precision and a sense of responsibility.",
      ko: "정확성과 책임감이 요구되는 금융, 법률, 군인 등 전문 분야에 잘 어울립니다.",
      fr: "Vous êtes bien adapté aux domaines professionnels tels que la finance, le droit et l'armée, qui exigent de la précision et un sens des responsabilités.",
      it: "Sei adatto a campi professionali come la finanza, la legge e l'esercito, che richiedono precisione e senso di responsabilità.",
      de: "Sie eignen sich gut für Berufsfelder wie Finanzen, Recht und Militär, die Präzision und Verantwortungsbewusstsein erfordern.",
      pt: "Você é adequado para campos profissionais como finanças, direito e militar, que exigem precisão e senso de responsabilidade.",
      es: "Eres muy adecuado para campos profesionales como las finanzas, el derecho y el ejército, que requieren precisión y sentido de la responsabilidad.",
      ja: "あなたは、正確さと責任感が求められる金融、法律、軍事などの専門分野に適しています。",
      th: "คุณเหมาะกับสายงานอาชีพ เช่น การเงิน กฎหมาย และการทหาร ซึ่งต้องการความแม่นยำและความรับผิดชอบ",
      id: "Anda sangat cocok untuk bidang profesional seperti keuangan, hukum, dan militer, yang membutuhkan ketelitian dan rasa tanggung jawab."
    },
    love: {
      en: "You are a person who keeps promises and shows a consistent appearance in relationships. However, you need to be careful not to hurt your partner with sharp words.",
      ko: "연인 관계에 있어 약속을 잘 지키고 일관된 모습을 보여주는 사람입니다. 다만, 예리한 말로 상대방에게 상처를 주지 않도록 주의해야 합니다.",
      fr: "Vous êtes une personne qui tient ses promesses et montre une apparence cohérente dans les relations. Cependant, vous devez faire attention à ne pas blesser votre partenaire avec des mots tranchants.",
      it: "Sei una persona che mantiene le promesse e mostra un aspetto coerente nelle relazioni. Tuttavia, devi stare attento a non ferire il tuo partner con parole taglienti.",
      de: "Sie sind eine Person, die Versprechen hält und in Beziehungen ein beständiges Erscheinungsbild zeigt. Sie müssen jedoch aufpassen, dass Sie Ihren Partner nicht mit scharfen Worten verletzen.",
      pt: "Você é uma pessoa que cumpre promessas e mostra uma aparência consistente nos relacionamentos. No entanto, você precisa ter cuidado para não machucar seu parceiro com palavras afiadas.",
      es: "Eres una persona que cumple las promesas y muestra una apariencia consistente en las relaciones. Sin embargo, debes tener cuidado de no herir a tu pareja con palabras afiladas.",
      ja: "あなたは約束を守り、人間関係において一貫した姿を見せる人です。ただし、鋭い言葉でパートナーを傷つけないように注意する必要があります。",
      th: "คุณเป็นคนที่รักษาสัญญาและแสดงออกอย่างสม่ำเสมอในความสัมพันธ์ อย่างไรก็ตาม คุณต้องระวังอย่าทำร้ายคนรักของคุณด้วยคำพูดที่คมคาย",
      id: "Anda adalah orang yang menepati janji dan menunjukkan penampilan yang konsisten dalam hubungan. Namun, Anda harus berhati-hati agar tidak menyakiti pasangan Anda dengan kata-kata tajam."
    },
    health: {
      en: "Be careful with your respiratory system, including the lungs and large intestine. Maintaining a clean environment and a positive mindset is important.",
      ko: "폐와 대장을 포함한 호흡기 계통에 주의가 필요합니다. 맑은 환경을 유지하고 긍정적인 마음을 갖는 것이 중요합니다.",
      fr: "Faites attention à votre système respiratoire, y compris les poumons et le gros intestin. Maintenir un environnement propre et un état d'esprit positif est important.",
      it: "Fai attenzione al tuo sistema respiratorio, compresi i polmoni e l'intestino crasso. Mantenere un ambiente pulito e una mentalità positiva è importante.",
      de: "Seien Sie vorsichtig mit Ihrem Atmungssystem, einschließlich der Lunge und des Dickdarms. Die Aufrechterhaltung einer sauberen Umwelt und einer positiven Einstellung ist wichtig.",
      pt: "Tenha cuidado com o seu sistema respiratório, incluindo os pulmões e o intestino grosso. Manter um ambiente limpo e uma mentalidade positiva é importante.",
      es: "Ten cuidado con tu sistema respiratorio, incluidos los pulmones y el intestino grueso. Mantener un ambiente limpio y una mentalidad positiva es importante.",
      ja: "肺や大腸を含む呼吸器系に注意してください。清潔な環境を維持し、前向きな考え方を持つことが重要です。",
      th: "ระวังระบบทางเดินหายใจของคุณ รวมถึงปอดและลำไส้ใหญ่ การรักษาสภาพแวดล้อมที่สะอาดและทัศนคติเชิงบวกเป็นสิ่งสำคัญ",
      id: "Berhati-hatilah dengan sistem pernapasan Anda, termasuk paru-paru dan usus besar. Menjaga lingkungan yang bersih dan pola pikir positif itu penting."
    },
    wealth: {
      en: "You manage your wealth with precision and principles. You have the ability to achieve great wealth through rational judgment and strong drive.",
      ko: "정확하고 원칙적으로 재물을 관리합니다. 합리적인 판단과 강한 추진력으로 큰 재물을 이룰 수 있는 능력이 있습니다.",
      fr: "Vous gérez votre patrimoine avec précision et principes. Vous avez la capacité d'atteindre une grande richesse grâce à un jugement rationnel et à une forte motivation.",
      it: "Gestisci la tua ricchezza con precisione e principi. Hai la capacità di raggiungere una grande ricchezza attraverso un giudizio razionale e una forte spinta.",
      de: "Sie verwalten Ihr Vermögen mit Präzision und Prinzipien. Sie haben die Fähigkeit, durch rationales Urteilsvermögen und starken Antrieb großen Reichtum zu erlangen.",
      pt: "Você gerencia sua riqueza com precisão e princípios. Você tem a capacidade de alcançar grande riqueza através de julgamento racional e forte impulso.",
      es: "Gestionas tu patrimonio con precisión y principios. Tienes la capacidad de alcanzar una gran riqueza a través de un juicio racional y un fuerte impulso.",
      ja: "あなたは正確さと原則をもって富を管理します。あなたは合理的な判断と強い意欲によって大きな富を築く能力を持っています。",
      th: "คุณจัดการความมั่งคั่งของคุณด้วยความแม่นยำและหลักการ คุณมีความสามารถในการบรรลุความมั่งคั่งอันยิ่งใหญ่ผ่านการตัดสินอย่างมีเหตุผลและแรงผลักดันที่แข็งแกร่ง",
      id: "Anda mengelola kekayaan Anda dengan presisi dan prinsip. Anda memiliki kemampuan untuk mencapai kekayaan besar melalui penilaian rasional dan dorongan yang kuat."
    },
    advice: {
      en: "Cultivate a warm heart and flexible thinking. Your justice will shine even brighter when it is based on empathy and understanding.",
      ko: "따뜻한 마음과 유연한 사고를 기르세요. 당신의 정의로움이 공감과 이해를 바탕으로 할 때 더욱 빛을 발할 것입니다.",
      fr: "Cultivez un cœur chaleureux et une pensée flexible. Votre justice brillera encore plus lorsqu'elle sera basée sur l'empathie et la compréhension.",
      it: "Coltiva un cuore caldo e un pensiero flessibile. La tua giustizia brillerà ancora di più quando si baserà sull'empatia e sulla comprensione.",
      de: "Kultivieren Sie ein warmes Herz und flexibles Denken. Ihre Gerechtigkeit wird noch heller leuchten, wenn sie auf Empathie und Verständnis basiert.",
      pt: "Cultive um coração caloroso e um pensamento flexível. Sua justiça brilhará ainda mais quando for baseada na empatia e na compreensão.",
      es: "Cultiva un corazón cálido y un pensamiento flexible. Tu justicia brillará aún más cuando se base en la empatía y la comprensión.",
      ja: "温かい心と柔軟な思考を養いましょう。あなたの正義は、共感と理解に基づいているときにさらに輝きます。",
      th: "ปลูกฝังหัวใจที่อบอุ่นและความคิดที่ยืดหยุ่น ความยุติธรรมของคุณจะเปล่งประกายยิ่งขึ้นเมื่อตั้งอยู่บนพื้นฐานของความเห็นอกเห็นใจและความเข้าใจ",
      id: "Kembangkan hati yang hangat dan pemikiran yang fleksibel. Keadilan Anda akan bersinar lebih terang jika didasarkan pada empati dan pengertian."
    }
  },
  water: {
    personality: {
      en: "You are wise and intuitive, with a gentle and adaptable personality. You have a deep inner world and are good at understanding others' feelings.",
      ko: "지혜롭고 직관력이 뛰어나며, 부드럽고 적응력이 강한 성격입니다. 깊은 내면세계를 가지고 있으며, 타인의 마음을 잘 헤아립니다.",
      fr: "Vous êtes sage et intuitif, avec une personnalité douce et adaptable. Vous avez un monde intérieur profond et êtes doué pour comprendre les sentiments des autres.",
      it: "Sei saggio e intuitivo, con una personalità gentile e adattabile. Hai un profondo mondo interiore e sei bravo a capire i sentimenti degli altri.",
      de: "Sie sind weise und intuitiv, mit einer sanften und anpassungsfähigen Persönlichkeit. Sie haben eine tiefe innere Welt und sind gut darin, die Gefühle anderer zu verstehen.",
      pt: "Você é sábio e intuitivo, com uma personalidade gentil e adaptável. Você tem um mundo interior profundo e é bom em entender os sentimentos dos outros.",
      es: "Eres sabio e intuitivo, con una personalidad gentil y adaptable. Tienes un mundo interior profundo y eres bueno para comprender los sentimientos de los demás.",
      ja: "あなたは賢く直感的で、優しく順応性のある性格です。あなたは深い内なる世界を持っており、他人の気持ちを理解するのが得意です。",
      th: "คุณเป็นคนฉลาดและมีสัญชาตญาณ มีบุคลิกที่อ่อนโยนและปรับตัวได้ คุณมีโลกภายในที่ลึกซึ้งและเก่งในการเข้าใจความรู้สึกของผู้อื่น",
      id: "Anda bijaksana dan intuitif, dengan kepribadian yang lembut dan mudah beradaptasi. Anda memiliki dunia batin yang dalam dan pandai memahami perasaan orang lain."
    },
    strengths: {
      en: "Your adaptability, insight, and communication skills are your strengths. You are flexible in your thinking and have the ability to solve problems wisely.",
      ko: "상황 대처 능력과 통찰력, 그리고 소통 능력이 장점입니다. 생각이 유연하고 문제를 지혜롭게 해결하는 능력이 있습니다.",
      fr: "Votre adaptabilité, votre perspicacité et vos compétences en communication sont vos points forts. Vous êtes flexible dans votre pensée et avez la capacité de résoudre les problèmes avec sagesse.",
      it: "La tua adattabilità, intuizione e capacità di comunicazione sono i tuoi punti di forza. Sei flessibile nel tuo pensiero e hai la capacità di risolvere i problemi con saggezza.",
      de: "Ihre Anpassungsfähigkeit, Einsicht und Kommunikationsfähigkeiten sind Ihre Stärken. Sie sind flexibel im Denken und haben die Fähigkeit, Probleme weise zu lösen.",
      pt: "Sua adaptabilidade, percepção e habilidades de comunicação são seus pontos fortes. Você é flexível em seu pensamento e tem a capacidade de resolver problemas com sabedoria.",
      es: "Tu adaptabilidad, perspicacia y habilidades de comunicación son tus fortalezas. Eres flexible en tu pensamiento y tienes la capacidad de resolver problemas sabiamente.",
      ja: "あなたの適応性、洞察力、そしてコミュニケーション能力があなたの強みです。あなたは思考が柔軟で、問題を賢く解決する能力を持っています。",
      th: "ความสามารถในการปรับตัว ความเข้าใจ และทักษะการสื่อสารคือจุดแข็งของคุณ คุณมีความคิดที่ยืดหยุ่นและมีความสามารถในการแก้ปัญหาอย่างชาญฉลาด",
      id: "Kemampuan beradaptasi, wawasan, dan keterampilan komunikasi Anda adalah kekuatan Anda. Anda fleksibel dalam berpikir dan memiliki kemampuan untuk memecahkan masalah dengan bijak."
    },
    weaknesses: {
      en: "You can easily fall into indecisiveness or depression. You need the determination to put your thoughts into action and a positive mindset.",
      ko: "결단력이 부족하거나 우울감에 쉽게 빠질 수 있습니다. 생각을 행동으로 옮기는 결단력과 긍정적인 마음가짐이 필요합니다.",
      fr: "Vous pouvez facilement tomber dans l'indécision ou la dépression. Vous avez besoin de la détermination pour mettre vos pensées en action et d'un état d'esprit positif.",
      it: "Puoi facilmente cadere nell'indecisione o nella depressione. Hai bisogno della determinazione per trasformare i tuoi pensieri in azioni e di una mentalità positiva.",
      de: "Sie können leicht in Unentschlossenheit oder Depression verfallen. Sie brauchen die Entschlossenheit, Ihre Gedanken in die Tat umzusetzen, und eine positive Einstellung.",
      pt: "Você pode facilmente cair na indecisão ou na depressão. Você precisa da determinação para colocar seus pensamentos em ação e de uma mentalidade positiva.",
      es: "Puedes caer fácilmente en la indecisión o la depresión. Necesitas la determinación para poner tus pensamientos en acción y una mentalidad positiva.",
      ja: "あなたは優柔不断や憂鬱に陥りやすいです。あなたの考えを行動に移す決意と前向きな考え方が必要です。",
      th: "คุณสามารถตกอยู่ในความไม่แน่ใจหรือภาวะซึมเศร้าได้ง่าย คุณต้องมีความมุ่งมั่นที่จะนำความคิดของคุณไปสู่การปฏิบัติและมีทัศนคติเชิงบวก",
      id: "Anda bisa dengan mudah jatuh ke dalam keraguan atau depresi. Anda membutuhkan tekad untuk mewujudkan pikiran Anda menjadi tindakan dan pola pikir yang positif."
    },
    career: {
      en: "You are suited for fields such as diplomacy, counseling, and the arts, where you can utilize your wisdom and communication skills.",
      ko: "지혜와 소통 능력을 활용할 수 있는 외교, 상담, 예술 분야 등이 잘 어울립니다.",
      fr: "Vous êtes apte à des domaines tels que la diplomatie, le conseil et les arts, où vous pouvez utiliser votre sagesse et vos compétences en communication.",
      it: "Sei adatto a campi come la diplomazia, la consulenza e le arti, dove puoi utilizzare la tua saggezza e le tue capacità di comunicazione.",
      de: "Sie eignen sich für Bereiche wie Diplomatie, Beratung und Kunst, in denen Sie Ihre Weisheit und Kommunikationsfähigkeiten einsetzen können.",
      pt: "Você é adequado para áreas como diplomacia, aconselhamento e artes, onde pode utilizar sua sabedoria e habilidades de comunicação.",
      es: "Eres adecuado para campos como la diplomacia, la consejería y las artes, donde puedes utilizar tu sabiduría y tus habilidades de comunicación.",
      ja: "あなたは、知恵とコミュニケーション能力を活かせる外交、カウンセリング、芸術などの分野に適しています。",
      th: "คุณเหมาะกับสาขาต่างๆ เช่น การทูต การให้คำปรึกษา และศิลปะ ซึ่งคุณสามารถใช้สติปัญญาและทักษะการสื่อสารของคุณได้",
      id: "Anda cocok untuk bidang-bidang seperti diplomasi, konseling, dan seni, di mana Anda dapat memanfaatkan kebijaksanaan dan keterampilan komunikasi Anda."
    },
    love: {
      en: "You have a deep and understanding heart in relationships. You form a deep bond with your partner, but you need to be careful not to fall into excessive worry or suspicion.",
      ko: "연인에게 이해심이 깊고 헌신적인 마음을 가집니다. 상대방과 깊은 유대감을 형성하지만, 지나친 걱정이나 의심에 빠지지 않도록 주의해야 합니다.",
      fr: "Vous avez un cœur profond et compréhensif dans les relations. Vous formez un lien profond avec votre partenaire, mais vous devez faire attention à ne pas tomber dans une inquiétude ou une suspicion excessive.",
      it: "Hai un cuore profondo e comprensivo nelle relazioni. Formi un legame profondo con il tuo partner, ma devi stare attento a non cadere in eccessiva preoccupazione o sospetto.",
      de: "Sie haben ein tiefes und verständnisvolles Herz in Beziehungen. Sie bilden eine tiefe Bindung zu Ihrem Partner, aber Sie müssen aufpassen, dass Sie nicht in übermäßige Sorgen oder Misstrauen verfallen.",
      pt: "Você tem um coração profundo e compreensivo nos relacionamentos. Você forma um vínculo profundo com seu parceiro, mas precisa ter cuidado para não cair em preocupação ou suspeita excessiva.",
      es: "Tienes un corazón profundo y comprensivo en las relaciones. Formas un vínculo profundo con tu pareja, pero debes tener cuidado de no caer en una preocupación o sospecha excesiva.",
      ja: "あなたは人間関係において深く理解のある心を持っています。あなたはパートナーと深い絆を築きますが、過度の心配や疑念に陥らないように注意する必要があります。",
      th: "คุณมีหัวใจที่ลึกซึ้งและเข้าใจในความสัมพันธ์ คุณสร้างความผูกพันอย่างลึกซึ้งกับคนรักของคุณ แต่คุณต้องระวังอย่าตกอยู่ในความกังวลหรือความสงสัยมากเกินไป",
      id: "Anda memiliki hati yang dalam dan pengertian dalam hubungan. Anda membentuk ikatan yang dalam dengan pasangan Anda, tetapi Anda harus berhati-hati agar tidak jatuh ke dalam kekhawatiran atau kecurigaan yang berlebihan."
    },
    health: {
      en: "Pay attention to your kidney and bladder health. It is important to get enough rest and maintain emotional stability.",
      ko: "신장과 방광 건강에 주의를 기울여야 합니다. 충분한 휴식과 정서적 안정을 유지하는 것이 중요합니다.",
      fr: "Faites attention à la santé de vos reins et de votre vessie. Il est important de se reposer suffisamment et de maintenir une stabilité émotionnelle.",
      it: "Presta attenzione alla salute dei reni e della vescica. È importante riposare a sufficienza e mantenere la stabilità emotiva.",
      de: "Achten Sie auf die Gesundheit Ihrer Nieren und Ihrer Blase. Es ist wichtig, sich ausreichend auszuruhen und die emotionale Stabilität zu wahren.",
      pt: "Preste atenção à saúde dos seus rins e bexiga. É importante descansar o suficiente e manter a estabilidade emocional.",
      es: "Presta atención a la salud de tus riñones y vejiga. Es importante descansar lo suficiente y mantener la estabilidad emocional.",
      ja: "腎臓と膀胱の健康に注意を払う必要があります。十分な休息を取り、精神的な安定を保つことが重要です。",
      th: "ใส่ใจสุขภาพไตและกระเพาะปัสสาวะของคุณ สิ่งสำคัญคือต้องพักผ่อนให้เพียงพอและรักษาสภาพอารมณ์ให้คงที่",
      id: "Perhatikan kesehatan ginjal dan kandung kemih Anda. Penting untuk cukup istirahat dan menjaga stabilitas emosi."
    },
    wealth: {
      en: "Wealth flows naturally when you go with the flow rather than being greedy. Your adaptability will help you seize various financial opportunities.",
      ko: "재물에 대한 욕심을 부리기보다 순리대로 따를 때 재물이 자연스럽게 흘러 들어옵니다. 당신의 적응력이 다양한 재정적 기회를 잡는 데 도움이 될 것입니다.",
      fr: "La richesse coule naturally lorsque vous suivez le courant plutôt que d'être avide. Votre adaptabilité vous aidera à saisir diverses opportunités financières.",
      it: "La ricchezza fluisce naturalmente quando segui la corrente piuttosto che essere avido. La tua adattabilità ti aiuterà a cogliere varie opportunità finanziarie.",
      de: "Reichtum fließt auf natürliche Weise, wenn Sie mit dem Strom schwimmen, anstatt gierig zu sein. Ihre Anpassungsfähigkeit wird Ihnen helfen, verschiedene finanzielle Möglichkeiten zu ergreifen.",
      pt: "A riqueza flui naturalmente quando você segue o fluxo em vez de ser ganancioso. Sua adaptabilidade o ajudará a aproveitar várias oportunidades financeiras.",
      es: "La riqueza fluye naturalmente cuando te dejas llevar por la corriente en lugar de ser codicioso. Tu adaptabilidad te ayudará a aprovechar diversas oportunidades financieras.",
      ja: "富は、貪欲になるのではなく、流れに乗ることで自然に流れ込みます。あなたの適応性は、さまざまな金融機会をつかむのに役立ちます。",
      th: "ความมั่งคั่งจะไหลมาโดยธรรมชาติเมื่อคุณปล่อยไปตามกระแสมากกว่าที่จะโลภ ความสามารถในการปรับตัวของคุณจะช่วยให้คุณคว้าโอกาสทางการเงินต่างๆ ได้",
      id: "Kekayaan mengalir secara alami ketika Anda mengikuti arus daripada menjadi serakah. Kemampuan beradaptasi Anda akan membantu Anda memanfaatkan berbagai peluang keuangan."
    },
    advice: {
      en: "Trust your intuition and have the courage to express your thoughts. Your wisdom will become a great strength when you have confidence in yourself.",
      ko: "자신의 직관을 믿고, 생각을 표현하는 용기를 가지세요. 스스로에 대한 확신을 가질 때 당신의 지혜는 큰 힘이 될 것입니다.",
      fr: "Faites confiance à votre intuition et ayez le courage d'exprimer vos pensées. Votre sagesse deviendra une grande force lorsque vous aurez confiance en vous.",
      it: "Fidati del tuo intuito e abbi il coraggio di esprimere i tuoi pensieri. La tua saggezza diventerà una grande forza quando avrai fiducia in te stesso.",
      de: "Vertrauen Sie Ihrer Intuition und haben Sie den Mut, Ihre Gedanken auszudrücken. Ihre Weisheit wird zu einer großen Stärke, wenn Sie Vertrauen in sich selbst haben.",
      pt: "Confie na sua intuição e tenha a coragem de expressar seus pensamentos. Sua sabedoria se tornará uma grande força quando você tiver confiança em si mesmo.",
      es: "Confía en tu intuición y ten el coraje de expresar tus pensamientos. Tu sabiduría se convertirá en una gran fortaleza cuando tengas confianza en ti mismo.",
      ja: "自分の直感を信じ、自分の考えを表現する勇気を持ってください。自分に自信を持つとき、あなたの知恵は大きな力になります。",
      th: "เชื่อในสัญชาตญาณของคุณและมีความกล้าที่จะแสดงความคิดของคุณ สติปัญญาของคุณจะกลายเป็นความแข็งแกร่งที่ยิ่งใหญ่เมื่อคุณมีความมั่นใจในตัวเอง",
      id: "Percayai intuisi Anda dan beranilah untuk mengungkapkan pikiran Anda. Kebijaksanaan Anda akan menjadi kekuatan besar ketika Anda memiliki kepercayaan pada diri sendiri."
    }
  },

  strengthModifiers: {
        'very-strong': {
        overall: {
          en: "Your inherent strength is exceptionally potent, allowing you to overcome significant obstacles and achieve remarkable success. Embrace your power, but wield it with wisdom and compassion.",
          ko: "당신의 내재된 힘은 탁월하게 강력하여, 중대한 장애물을 극복하고 놀라운 성공을 이룰 수 있게 합니다. 당신의 힘을 받아들이되, 지혜와 연민으로 사용하세요.",
          fr: "Votre force inhérente est exceptionnellement puissante, vous permettant de surmonter des obstacles importants et d'obtenir un succès remarquable. Embrassez votre pouvoir, mais maniez-le avec sagesse et compassion.",
          it: "La tua forza intrinseca è eccezionalmente potente, permettendoti di superare ostacoli significativi e raggiungere un successo notevole. Abbraccia il tuo potere, ma esercitalo con saggezza e compassione.",
          de: "Ihre angeborene Stärke ist außergewöhnlich stark und ermöglicht es Ihnen, erhebliche Hindernisse zu überwinden und bemerkenswerte Erfolge zu erzielen. Umfassen Sie Ihre Macht, aber setzen Sie sie mit Weisheit und Mitgefühl ein.",
          pt: "Sua força inerente é excepcionalmente potente, permitindo que você supere obstáculos significativos e alcance um sucesso notável. Abrace seu poder, mas use-o com sabedoria e compaixão.",
          es: "Tu fuerza inherente es excepcionalmente potente, lo que te permite superar obstáculos significativos y lograr un éxito notable. Abraza tu poder, pero ejércelo con sabiduría y compasión.",
          ja: "あなたの固有の強さは非常に強力で、重大な障害を克服し、目覚ましい成功を収めることができます。あなたの力受け入れ、しかし、知恵と思いやりの心を持ってそれを行使してください。",
          th: "ความแข็งแกร่งโดยกำเนิดของคุณมีศักยภาพเป็นพิเศษ ช่วยให้คุณเอาชนะอุปสรรคสำคัญและประสบความสำเร็จอย่างน่าทึ่ง โอบกอดพลังของคุณ แต่ใช้มันด้วยสติปัญญาและความเห็นอกเห็นใจ",
          id: "Kekuatan bawaan Anda luar biasa kuat, memungkinkan Anda mengatasi rintangan signifikan dan mencapai kesuksesan luar biasa. Rangkullah kekuatan Anda, tetapi gunakan dengan kebijaksanaan dan kasih sayang."
        },
        career: {
          en: "In your career, your very strong nature translates into unparalleled drive and resilience. You are destined for leadership roles where your decisive actions and unwavering resolve can inspire and guide others to achieve ambitious goals.",
          ko: "직업에서 당신의 매우 강한 본성은 비할 데 없는 추진력과 회복력으로 나타납니다. 당신은 단호한 행동과 흔들리지 않는 결단력이 다른 사람들에게 영감을 주고 야심찬 목표를 달성하도록 이끌 수 있는 리더십 역할에 적합합니다.",
          fr: "Dans votre carrière, votre nature très forte se traduit par une motivation et une résilience inégalées. Vous êtes destiné à des rôles de leadership où vos actions décisives et votre détermination inébranlable peuvent inspirer et guider les autres à atteindre des objectifs ambitieux.",
          it: "Nella tua carriera, la tua natura molto forte si traduce in una spinta e una resilienza senza pari. Sei destinato a ruoli di leadership in cui le tue azioni decisive e la tua determinazione incrollabile possono ispirare e guidare gli altri a raggiungere obiettivi ambiziosi.",
          de: "In Ihrer Karriere führt Ihre sehr starke Natur zu einem beispiellosen Antrieb und einer beispiellosen Widerstandsfähigkeit. Sie sind für Führungsrollen bestimmt, in denen Ihre entschlossenen Handlungen und Ihre unerschütterliche Entschlossenheit andere inspirieren und anleiten können, ehrgeizige Ziele zu erreichen.",
          pt: "Em sua carreira, sua natureza muito forte se traduz em um impulso e resiliência incomparáveis. Você está destinado a papéis de liderança onde suas ações decisivas e sua determinação inabalável podem inspirar e guiar outros a alcançar metas ambiciosas.",
          es: "En tu carrera, tu naturaleza muy fuerte se traduce en un impulso y una resiliencia incomparables. Estás destinado a roles de liderazgo donde tus acciones decisivas y tu resolución inquebrantable pueden inspirar y guiar a otros para lograr metas ambiciosas.",
          ja: "あなたのキャリアにおいて、あなたの非常に強い性質は、比類のない意欲と回復力に変換されます。あなたは、あなたの決定的な行動と揺るぎない決意が、野心的な目標を達成するために他の人々を鼓舞し、導くことができるリーダーシップの役割に運命づけられています。",
          th: "ในอาชีพการงานของคุณ ธรรมชาติที่แข็งแกร่งของคุณแปรเปลี่ยนเป็นแรงผลักดันและความยืดหยุ่นที่ไม่มีใครเทียบได้ คุณถูกกำหนดให้รับบทบาทผู้นำซึ่งการกระทำที่เด็ดขาดและความมุ่งมั่นที่ไม่เปลี่ยนแปลงของคุณสามารถสร้างแรงบันดาลใจและชี้นำผู้อื่นให้บรรลุเป้าหมายที่ทะเยอทะยานได้",
          id: "Dalam karir Anda, sifat Anda yang sangat kuat diterjemahkan menjadi dorongan dan ketahanan yang tak tertandingi. Anda ditakdirkan untuk peran kepemimpinan di mana tindakan tegas dan tekad Anda yang tak tergoyahkan dapat menginspirasi dan membimbing orang lain untuk mencapai tujuan yang ambisius."
        },
        love: {
          en: "Your strong presence in relationships is a source of great stability and protection. Seek a partner who appreciates your powerful commitment and can stand as an equal, fostering a bond built on mutual respect and deep understanding.",
          ko: "관계에서 당신의 강한 존재감은 큰 안정과 보호의 원천입니다. 당신의 강력한 헌신을 이해하고 동등하게 설 수 있는 파트너를 찾으세요. 상호 존중과 깊은 이해를 바탕으로 유대를 형성할 것입니다.",
          fr: "Votre forte présence dans les relations est une source de grande stabilité et de protection. Cherchez un partenaire qui apprécie votre engagement puissant et qui peut se tenir sur un pied d'égalité, favorisant un lien fondé sur le respect mutuel et une profonde compréhension.",
          it: "La tua forte presenza nelle relazioni è una fonte di grande stabilità e protezione. Cerca un partner che apprezzi il tuo forte impegno e possa stare alla pari, favorendo un legame basato sul rispetto reciproco e sulla profonda comprensione.",
          de: "Ihre starke Präsenz in Beziehungen ist eine Quelle großer Stabilität und des Schutzes. Suchen Sie einen Partner, der Ihr starkes Engagement zu schätzen weiß und als gleichberechtigt dastehen kann, um eine auf gegenseitigem Respekt und tiefem Verständnis beruhende Bindung zu fördern.",
          pt: "Sua forte presença nos relacionamentos é uma fonte de grande estabilidade e proteção. Procure um parceiro que aprecie seu poderoso compromisso e possa se igualar a você, promovendo um vínculo construído com base no respeito mútuo e na profunda compreensão.",
          es: "Tu fuerte presencia en las relaciones es una fuente de gran estabilidad y protección. Busca una pareja que aprecie tu poderoso compromiso y pueda estar a tu altura, fomentando un vínculo basado en el respeto mutuo y la comprensión profunda.",
          ja: "人間関係におけるあなたの強い存在感は、大きな安定と保護の源です。あなたの強力なコミットメントを高く評価し、対等な立場でいられるパートナーを探し、相互の尊重と深い理解に基づいて絆を育んでください。",
          th: "การมีอยู่ของคุณที่แข็งแกร่งในความสัมพันธ์เป็นแหล่งของความมั่นคงและการปกป้องที่ดีเยี่ยม มองหาคู่ครองที่ชื่นชมความมุ่งมั่นอันทรงพลังของคุณและสามารถยืนหยัดได้อย่างเท่าเทียมกัน ส่งเสริมความผูกพันที่สร้างขึ้นบนความเคารพซึ่งกันและกันและความเข้าใจอย่างลึกซึ้ง",
          id: "Kehadiran Anda yang kuat dalam hubungan adalah sumber stabilitas dan perlindungan yang hebat. Carilah pasangan yang menghargai komitmen kuat Anda dan dapat berdiri sejajar, membina ikatan yang dibangun di atas rasa saling menghormati dan pengertian yang mendalam."
        },
        health: {
          en: "Your robust constitution supports a vibrant and active life. Maintain this vitality through consistent self-care, including regular exercise and a balanced diet, to sustain your powerful energy.",
          ko: "당신의 강건한 체질은 활기차고 활동적인 삶을 지탱합니다. 규칙적인 운동과 균형 잡힌 식단을 포함한 꾸준한 자기 관리를 통해 이 활력을 유지하여 강력한 에너지를 지속하세요.",
          fr: "Votre constitution robuste favorise une vie dynamique et active. Maintenez cette vitalité par des soins personnels constants, notamment une activité physique régulière et une alimentation équilibrée, afin de conserver votre puissante énergie.",
          it: "La tua costituzione robusta supporta una vita vibrante e attiva. Mantieni questa vitalità attraverso una cura di sé costante, che include esercizio fisico regolare e una dieta equilibrata, per sostenere la tua potente energia.",
          de: "Ihre robuste Konstitution unterstützt ein pulsierendes und aktives Leben. Erhalten Sie diese Vitalität durch konsequente Selbstpflege, einschließlich regelmäßiger Bewegung und einer ausgewogenen Ernährung, um Ihre kraftvolle Energie zu erhalten.",
          pt: "Sua constituição robusta sustenta uma vida vibrante e ativa. Mantenha essa vitalidade através do autocuidado consistente, incluindo exercícios regulares e uma dieta equilibrada, para sustentar sua energia poderosa.",
          es: "Tu constitución robusta apoya una vida vibrante y activa. Mantén esta vitalidad a través del autocuidado constante, que incluye ejercicio regular y una dieta equilibrada, para mantener tu poderosa energía.",
          ja: "あなたの頑健な体質は、活気に満ちた活動的な生活を支えます。定期的な運動とバランスの取れた食事を含む一貫したセルフケアを通じてこの活力を維持し、強力なエネルギーを維持してください。",
          th: "ร่างกายที่แข็งแรงของคุณสนับสนุนชีวิตที่สดใสและกระฉับกระเฉง รักษาความมีชีวิตชีวานี้ไว้ด้วยการดูแลตนเองอย่างสม่ำเสมอ รวมถึงการออกกำลังกายเป็นประจำและรับประทานอาหารที่สมดุล เพื่อรักษาพลังอันทรงพลังของคุณ",
          id: "Konstitusi Anda yang kuat mendukung kehidupan yang bersemangat dan aktif. Pertahankan vitalitas ini melalui perawatan diri yang konsisten, termasuk olahraga teratur dan diet seimbang, untuk mempertahankan energi kuat Anda."
        },
        wealth: {
          en: "Your financial destiny is marked by significant potential for accumulation and influence. Your strong will and strategic mind can lead to substantial wealth, especially when focused on long-term, impactful ventures.",
          ko: "당신의 재정적 운명은 상당한 축적과 영향력의 잠재력으로 특징지어집니다. 당신의 강한 의지와 전략적인 사고는 특히 장기적이고 영향력 있는 사업에 집중할 때 상당한 부를 가져올 수 있습니다.",
          fr: "Votre destin financier est marqué par un potentiel important d'accumulation et d'influence. Votre forte volonté et votre esprit stratégique peuvent mener à une richesse substantielle, surtout si vous vous concentrez sur des entreprises percutantes à long terme.",
          it: "Il tuo destino finanziario è segnato da un notevole potenziale di accumulazione e influenza. La tua forte volontà e la tua mente strategica possono portare a una ricchezza sostanziale, soprattutto se concentrate su iniziative di grande impatto a lungo termine.",
          de: "Ihr finanzielles Schicksal ist von erheblichem Potenzial für Akkumulation und Einfluss geprägt. Ihr starker Wille und Ihr strategischer Verstand können zu erheblichem Reichtum führen, insbesondere wenn Sie sich auf langfristige, wirkungsvolle Unternehmungen konzentrieren.",
          pt: "Seu destino financeiro é marcado por um potencial significativo de acumulação e influência. Sua força de vontade e mente estratégica podem levar a uma riqueza substancial, especialmente quando focadas em empreendimentos de longo prazo e impactantes.",
          es: "Tu destino financiero está marcado por un potencial significativo de acumulación e influencia. Tu fuerte voluntad y tu mente estratégica pueden llevarte a una riqueza sustancial, especialmente cuando te enfocas en empresas impactantes a largo plazo.",
          ja: "あなたの経済的な運命は、蓄積と影響力の大きな可能性によって特徴づけられます。あなたの強い意志と戦略的な心は、特に長期的で影響力のあるベンチャーに焦点を当てた場合、かなりの富につながる可能性があります。",
          th: "โชคชะตาทางการเงินของคุณโดดเด่นด้วยศักยภาพในการสะสมและอิทธิพลอย่างมีนัยสำคัญ ความมุ่งมั่นที่แข็งแกร่งและจิตใจเชิงกลยุทธ์ของคุณสามารถนำไปสู่ความมั่งคั่งจำนวนมาก โดยเฉพาะอย่างยิ่งเมื่อมุ่งเน้นไปที่การลงทุนระยะยาวที่สร้างผลกระทบ",
          id: "Takdir keuangan Anda ditandai oleh potensi signifikan untuk akumulasi dan pengaruh. Kemauan kuat dan pikiran strategis Anda dapat menghasilkan kekayaan besar, terutama bila difokuskan pada usaha jangka panjang yang berdampak."
        },
        advice: {
          en: "Recognize the impact of your strength on others. Practice humility and collaboration, allowing your power to uplift rather than overshadow those around you.",
          ko: "당신의 힘이 다른 사람들에게 미치는 영향을 인식하세요. 겸손과 협력을 실천하여 당신의 힘이 주변 사람들을 압도하기보다는 고양시키도록 하세요.",
          fr: "Reconnaissez l'impact de votre force sur les autres. Pratiquez l'humilité et la collaboration, permettant à votre pouvoir d'élever plutôt que d'éclipser ceux qui vous entourent.",
          it: "Riconosci l'impatto della tua forza sugli altri. Pratica l'umiltà e la collaborazione, permettendo al tuo potere di elevare piuttosto che mettere in ombra chi ti circonda.",
          de: "Erkennen Sie die Auswirkungen Ihrer Stärke auf andere. Üben Sie Demut und Zusammenarbeit und lassen Sie Ihre Kraft die Menschen um Sie herum erheben, anstatt sie in den Schatten zu stellen.",
          pt: "Reconheça o impacto de sua força nos outros. Pratique a humildade e a colaboração, permitindo que seu poder eleve em vez de ofuscar as pessoas ao seu redor.",
          es: "Reconoce el impacto de tu fuerza en los demás. Practica la humildad y la colaboración, permitiendo que tu poder eleve en lugar de eclipsar a quienes te rodean.",
          ja: "あなたの強さが他人に与える影響を認識してください。謙虚さと協力を実践し、あなたの力が周りの人々を圧倒するのではなく、高めるようにしてください。",
          th: "ตระหนักถึงผลกระทบของความแข็งแกร่งของคุณที่มีต่อผู้อื่น ฝึกฝนความอ่อนน้อมถ่อมตนและการทำงานร่วมกัน ปล่อยให้พลังของคุณยกระดับแทนที่จะบดบังคนรอบข้าง",
          id: "Kenali dampak kekuatan Anda pada orang lain. Latihlah kerendahan hati dan kolaborasi, biarkan kekuatan Anda mengangkat daripada membayangi orang-orang di sekitar Anda."
        }
      },
      'strong': {
        overall: {
          en: "You possess significant inner strength, enabling you to face challenges with confidence and achieve your goals through consistent effort. Your resilience is a key to your success.",
          ko: "당신은 상당한 내면의 힘을 가지고 있어, 자신감 있게 도전에 맞서고 꾸준한 노력을 통해 목표를 달성할 수 있습니다. 당신의 회복력은 성공의 핵심입니다.",
          fr: "Vous possédez une force intérieure importante, vous permettant de faire face aux défis avec confiance et d'atteindre vos objectifs grâce à des efforts constants. Votre résilience est une clé de votre succès.",
          it: "Possiedi una notevole forza interiore, che ti consente di affrontare le sfide con fiducia e di raggiungere i tuoi obiettivi attraverso uno sforzo costante. La tua resilienza è una chiave per il tuo successo.",
          de: "Sie besitzen eine beträchtliche innere Stärke, die es Ihnen ermöglicht, Herausforderungen mit Zuversicht zu begegnen und Ihre Ziele durch konsequente Anstrengung zu erreichen. Ihre Widerstandsfähigkeit ist ein Schlüssel zu Ihrem Erfolg.",
          pt: "Você possui uma força interior significativa, permitindo que você enfrente desafios com confiança e alcance seus objetivos através de um esforço consistente. Sua resiliência é a chave para o seu sucesso.",
          es: "Posees una fuerza interior significativa, lo que te permite enfrentar los desafíos con confianza y alcanzar tus metas a través de un esfuerzo constante. Tu resiliencia es una clave para tu éxito.",
          ja: "あなたは大きな内なる強さを持っており、自信を持って課題に立ち向かい、一貫した努力を通じて目標を達成することができます。あなたの回復力は成功の鍵です。",
          th: "คุณมีความแข็งแกร่งภายในอย่างมาก ทำให้คุณสามารถเผชิญกับความท้าทายด้วยความมั่นใจและบรรลุเป้าหมายของคุณผ่านความพยายามอย่างสม่ำเสมอ ความยืดหยุ่นของคุณเป็นกุญแจสู่ความสำเร็จของคุณ",
          id: "Anda memiliki kekuatan batin yang signifikan, memungkinkan Anda menghadapi tantangan dengan percaya diri dan mencapai tujuan Anda melalui usaha yang konsisten. Ketahanan Anda adalah kunci kesuksesan Anda."
        },
        career: {
          en: "In your career, your strong nature makes you a reliable and effective professional. You excel in roles that require perseverance and the ability to lead by example, inspiring trust and dedication in your team.",
          ko: "직업에서 당신의 강한 본성은 당신을 신뢰할 수 있고 효과적인 전문가로 만듭니다. 인내심과 모범을 통해 이끄는 능력이 필요한 역할에서 탁월하며, 팀에 신뢰와 헌신을 불어넣습니다.",
          fr: "Dans votre carrière, votre nature forte fait de vous un professionnel fiable et efficace. Vous excellez dans les rôles qui exigent de la persévérance et la capacité de montrer l'exemple, inspirant la confiance et le dévouement de votre équipe.",
          it: "Nella tua carriera, la tua natura forte ti rende un professionista affidabile ed efficace. Eccelli in ruoli che richiedono perseveranza e la capacità di dare l'esempio, ispirando fiducia e dedizione nel tuo team.",
          de: "In Ihrer Karriere macht Sie Ihre starke Natur zu einem zuverlässigen und effektiven Fachmann. Sie zeichnen sich in Rollen aus, die Ausdauer und die Fähigkeit erfordern, mit gutem Beispiel voranzugehen und Vertrauen und Engagement in Ihrem Team zu wecken.",
          pt: "Em sua carreira, sua natureza forte o torna um profissional confiável e eficaz. Você se destaca em funções que exigem perseverança e a capacidade de liderar pelo exemplo, inspirando confiança e dedicação em sua equipe.",
          es: "En tu carrera, tu naturaleza fuerte te convierte en un profesional confiable y eficaz. Sobresales en roles que requieren perseverancia y la capacidad de liderar con el ejemplo, inspirando confianza y dedicación en tu equipo.",
          ja: "あなたのキャリアにおいて、あなたの強い性質はあなたを信頼できる有能な専門家にします。あなたは忍耐力と模範を示す能力を必要とする役割で優れており、チームに信頼と献身を鼓舞します。",
          th: "ในอาชีพการงานของคุณ ธรรมชาติที่แข็งแกร่งของคุณทำให้คุณเป็นมืออาชีพที่น่าเชื่อถือและมีประสิทธิภาพ คุณเก่งในบทบาทที่ต้องใช้ความพากเพียรและความสามารถในการเป็นผู้นำโดยเป็นแบบอย่าง สร้างแรงบันดาลใจให้เกิดความไว้วางใจและความทุ่มเทในทีมของคุณ",
          id: "Dalam karir Anda, sifat kuat Anda membuat Anda menjadi seorang profesional yang andal dan efektif. Anda unggul dalam peran yang membutuhkan ketekunan dan kemampuan untuk memimpin dengan memberi contoh, menginspirasi kepercayaan dan dedikasi dalam tim Anda."
        },
        love: {
          en: "In relationships, your strength provides a stable and secure foundation. You are a devoted partner, offering unwavering support and protection. Seek someone who values your steadfastness and reciprocates your deep commitment.",
          ko: "관계에서 당신의 강점은 안정적이고 견고한 기반을 제공합니다. 당신은 변함없는 지지와 보호를 제공하는 헌신적인 파트너입니다. 당신의 굳건함을 소중히 여기고 깊은 헌신에 보답할 사람을 찾으세요.",
          fr: "Dans les relations, votre force fournit une base stable et sûre. Vous êtes un partenaire dévoué, offrant un soutien et une protection indéfectibles. Cherchez quelqu'un qui apprécie votre constance et qui rend la pareille à votre profond engagement.",
          it: "Nelle relazioni, la tua forza fornisce una base stabile e sicura. Sei un partner devoto, che offre supporto e protezione incrollabili. Cerca qualcuno che apprezzi la tua fermezza e ricambi il tuo profondo impegno.",
          de: "In Beziehungen bietet Ihre Stärke eine stabile und sichere Grundlage. Sie sind ein hingebungsvoller Partner, der unerschütterliche Unterstützung und Schutz bietet. Suchen Sie jemanden, der Ihre Standhaftigkeit schätzt und Ihr tiefes Engagement erwidert.",
          pt: "Nos relacionamentos, sua força fornece uma base estável e segura. Você é um parceiro dedicado, oferecendo apoio e proteção inabaláveis. Procure alguém que valorize sua firmeza e retribua seu profundo compromisso.",
          es: "En las relaciones, tu fuerza proporciona una base estable y segura. Eres una pareja devota, que ofrece un apoyo y una protección inquebrantables. Busca a alguien que valore tu firmeza y corresponda a tu profundo compromiso.",
          ja: "人間関係において、あなたの強さは安定した安全な基盤を提供します。あなたは献身的なパートナーであり、揺るぎないサポートと保護を提供します。あなたの不動の心を大切にし、あなたの深い献身に応えてくれる人を探してください。",
          th: "ในความสัมพันธ์ ความแข็งแกร่งของคุณเป็นรากฐานที่มั่นคงและปลอดภัย คุณเป็นคู่ครองที่อุทิศตน ให้การสนับสนุนและการปกป้องอย่างไม่เปลี่ยนแปลง มองหาคนที่เห็นคุณค่าในความแน่วแน่ของคุณและตอบสนองต่อความมุ่งมั่นอันลึกซึ้งของคุณ",
          id: "Dalam hubungan, kekuatan Anda memberikan fondasi yang stabil dan aman. Anda adalah pasangan yang setia, menawarkan dukungan dan perlindungan yang tak tergoyahkan. Carilah seseorang yang menghargai keteguhan Anda dan membalas komitmen mendalam Anda."
        },
        health: {
          en: "Your robust health is a testament to your strong constitution. Maintain this by listening to your body's needs, engaging in regular physical activity, and nurturing your mental well-being to sustain your vitality.",
          ko: "당신의 강건한 건강은 강한 체질의 증거입니다. 신체의 요구에 귀 기울이고, 규칙적인 신체 활동에 참여하며, 정신 건강을 돌보아 활력을 유지하세요.",
          fr: "Votre santé robuste témoigne de votre forte constitution. Maintenez-la en écoutant les besoins de votre corps, en pratiquant une activité physique régulière et en nourrissant votre bien-être mental pour conserver votre vitalité.",
          it: "La tua salute robusta è una testimonianza della tua forte costituzione. Mantienila ascoltando le esigenze del tuo corpo, praticando un'attività fisica regolare e coltivando il tuo benessere mentale per sostenere la tua vitalità.",
          de: "Ihre robuste Gesundheit ist ein Beweis für Ihre starke Konstitution. Erhalten Sie diese, indem Sie auf die Bedürfnisse Ihres Körpers hören, sich regelmäßig körperlich betätigen und Ihr geistiges Wohlbefinden pflegen, um Ihre Vitalität zu erhalten.",
          pt: "Sua saúde robusta é um testemunho de sua constituição forte. Mantenha-a ouvindo as necessidades do seu corpo, praticando atividade física regular e nutrindo seu bem-estar mental para sustentar sua vitalidade.",
          es: "Tu salud robusta es un testimonio de tu fuerte constitución. Mantenla escuchando las necesidades de tu cuerpo, realizando actividad física regular y cuidando tu bienestar mental para mantener tu vitalidad.",
          ja: "あなたの頑健な健康は、あなたの強い体質の証です。体のニーズに耳を傾け、定期的な身体活動に従事し、精神的な幸福を育むことによってこれを維持し、活力を維持してください。",
          th: "สุขภาพที่แข็งแรงของคุณเป็นเครื่องพิสูจน์ถึงร่างกายที่แข็งแรงของคุณ รักษาสิ่งนี้ไว้โดยการฟังความต้องการของร่างกาย การออกกำลังกายอย่างสม่ำเสมอ และการบำรุงสุขภาพจิตของคุณเพื่อรักษาความมีชีวิตชีวาของคุณ",
          id: "Kesehatan Anda yang kuat adalah bukti konstitusi Anda yang kuat. Pertahankan ini dengan mendengarkan kebutuhan tubuh Anda, melakukan aktivitas fisik secara teratur, dan memelihara kesehatan mental Anda untuk mempertahankan vitalitas Anda."
        },
        wealth: {
          en: "Your financial path is built on solid ground, with success stemming from diligent work and prudent decisions. Your strong will ensures you overcome financial hurdles and build lasting security through consistent, well-planned efforts.",
          ko: "당신의 재정적 길은 견고한 기반 위에 세워져 있으며, 근면한 노력과 신중한 결정에서 성공이 비롯됩니다. 당신의 강한 의지는 재정적 장애물을 극복하고 꾸준하고 잘 계획된 노력을 통해 지속적인 안정을 구축하도록 합니다.",
          fr: "Votre parcours financier est bâti sur un terrain solide, le succès découlant d'un travail diligent et de décisions prudentes. Votre forte volonté vous assure de surmonter les obstacles financiers et de bâtir une sécurité durable grâce à des efforts constants et bien planifiés.",
          it: "Il tuo percorso finanziario è costruito su un terreno solido, con il successo che deriva da un lavoro diligente e da decisioni prudenti. La tua forte volontà ti assicura di superare gli ostacoli finanziari e di costruire una sicurezza duratura attraverso sforzi costanti e ben pianificati.",
          de: "Ihr finanzieller Weg ist auf solidem Boden gebaut, wobei der Erfolg auf sorgfältiger Arbeit und klugen Entscheidungen beruht. Ihr starker Wille stellt sicher, dass Sie finanzielle Hürden überwinden und durch konsequente, gut geplante Anstrengungen dauerhafte Sicherheit aufbauen.",
          pt: "Seu caminho financeiro é construído em terreno sólido, com o sucesso decorrente do trabalho diligente e de decisões prudentes. Sua forte vontade garante que você supere os obstáculos financeiros e construa uma segurança duradoura por meio de esforços consistentes e bem planejados.",
          es: "Tu camino financiero se construye sobre un terreno sólido, con el éxito derivado del trabajo diligente y las decisiones prudentes. Tu fuerte voluntad te asegura superar los obstáculos financieros y construir una seguridad duradera a través de esfuerzos consistentes y bien planificados.",
          ja: "あなたの経済的な道は堅固な基盤の上に築かれており、成功は勤勉な仕事と賢明な決定から生まれます。あなたの強い意志は、あなたが経済的なハードルを克服し、一貫した、よく計画された努力を通じて永続的な安全を築くことを保証します。",
          th: "เส้นทางทางการเงินของคุณสร้างขึ้นบนพื้นฐานที่มั่นคง โดยความสำเร็จเกิดจากการทำงานอย่างขยันหมั่นเพียรและการตัดสินใจที่รอบคอบ ความมุ่งมั่นที่แข็งแกร่งของคุณช่วยให้คุณเอาชนะอุปสรรคทางการเงินและสร้างความมั่นคงที่ยั่งยืนผ่านความพยายามที่สม่ำเสมอและมีการวางแผนมาอย่างดี",
          id: "Jalur keuangan Anda dibangun di atas landasan yang kokoh, dengan kesuksesan berasal dari kerja keras dan keputusan yang bijaksana. Kemauan kuat Anda memastikan Anda mengatasi rintangan keuangan dan membangun keamanan abadi melalui upaya yang konsisten dan terencana dengan baik."
        },
        advice: {
          en: "While your strength is admirable, remember to also embrace vulnerability and seek support when needed. Collaboration and openness can unlock new dimensions of your power.",
          ko: "당신의 강점은 칭찬할 만하지만, 취약성을 받아들이고 필요할 때 도움을 구하는 것을 기억하세요. 협력과 개방성은 당신의 힘의 새로운 차원을 열어줄 수 있습니다.",
          fr: "Bien que votre force soit admirable, n'oubliez pas d'accepter également la vulnérabilité et de chercher du soutien en cas de besoin. La collaboration et l'ouverture d'esprit peuvent débloquer de nouvelles dimensions de votre pouvoir.",
          it: "Sebbene la tua forza sia ammirevole, ricorda di abbracciare anche la vulnerabilità e di cercare supporto quando necessario. La collaborazione e l'apertura possono sbloccare nuove dimensioni del tuo potere.",
          de: "Obwohl Ihre Stärke bewundernswert ist, denken Sie daran, auch Verletzlichkeit anzunehmen und bei Bedarf Unterstützung zu suchen. Zusammenarbeit und Offenheit können neue Dimensionen Ihrer Kraft freisetzen.",
          pt: "Embora sua força seja admirável, lembre-se de também abraçar a vulnerabilidade e procurar apoio quando necessário. A colaboração e a abertura podem desbloquear novas dimensões do seu poder.",
          es: "Si bien tu fuerza es admirable, recuerda también aceptar la vulnerabilidad y buscar apoyo cuando sea necesario. La colaboración y la apertura pueden desbloquear nuevas dimensiones de tu poder.",
          ja: "あなたの強さは賞賛に値しますが、必要に応じて脆弱性を受け入れ、サポートを求めることも忘れないでください。コラボレーションとオープンさは、あなたの力の新しい側面を解き放つことができます。",
          th: "ในขณะที่ความแข็งแกร่งของคุณน่าชื่นชม อย่าลืมยอมรับความเปราะบางและขอความช่วยเหลือเมื่อจำเป็น การทำงานร่วมกันและการเปิดกว้างสามารถปลดล็อกมิติใหม่ของพลังของคุณได้",
          id: "Meskipun kekuatan Anda mengagumkan, ingatlah untuk juga merangkul kerentanan dan mencari dukungan saat dibutuhkan. Kolaborasi dan keterbukaan dapat membuka dimensi baru dari kekuatan Anda."
        }
      },
      'moderate': {
        overall: {
          en: "Your balanced and stable energy allows for steady and harmonious development. You can achieve your goals by consistently moving forward without being swayed by your surroundings.",
          ko: "당신의 균형 잡힌 안정적인 기운은 꾸준하고 조화로운 발전을 가능하게 합니다. 주변에 흔들리지 않고 꾸준히 나아감으로써 목표를 달성할 수 있습니다.",
          fr: "Votre énergie équilibrée et stable permet un développement constant et harmonieux. Vous pouvez atteindre vos objectifs en avançant constamment sans vous laisser influencer par votre environnement.",
          it: "La tua energia equilibrata e stabile consente uno sviluppo costante e armonioso. Puoi raggiungere i tuoi obiettivi andando avanti costantemente senza lasciarti influenzare dall'ambiente circostante.",
          de: "Ihre ausgeglichene und stabile Energie ermöglicht eine stetige und harmonische Entwicklung. Sie können Ihre Ziele erreichen, indem Sie konsequent voranschreiten, ohne sich von Ihrer Umgebung beeinflussen zu lassen.",
          pt: "Sua energia equilibrada e estável permite um desenvolvimento constante e harmonioso. Você pode alcançar seus objetivos avançando consistentemente sem ser influenciado pelo ambiente ao seu redor.",
          es: "Tu energía equilibrada y estable permite un desarrollo constante y armonioso. Puedes alcanzar tus metas avanzando constantemente sin dejarte influenciar por tu entorno.",
          ja: "あなたのバランスの取れた安定したエネルギーは、着実で調和のとれた発展を可能にします。あなたは周りに流されることなく、着実に前進することで目標を達成することができます。",
          th: "พลังงานที่สมดุลและมั่นคงของคุณช่วยให้เกิดการพัฒนาที่มั่นคงและกลมกลืน คุณสามารถบรรลุเป้าหมายของคุณได้โดยการก้าวไปข้างหน้าอย่างสม่ำเสมอโดยไม่หวั่นไหวต่อสิ่งรอบข้าง",
          id: "Energi Anda yang seimbang dan stabil memungkinkan perkembangan yang stabil dan harmonis. Anda dapat mencapai tujuan Anda dengan terus bergerak maju tanpa terpengaruh oleh lingkungan sekitar Anda."
        },
        career: {
          en: "You can expect stable growth in your career. Your rational judgment and harmonious interpersonal skills will be highly regarded in any organization.",
          ko: "직업적으로 안정적인 성장을 기대할 수 있습니다. 당신의 합리적인 판단력과 원만한 대인관계는 어떤 조직에서든 좋은 평가를 받을 것입니다.",
          fr: "Vous pouvez vous attendre à une croissance stable dans votre carrière. Votre jugement rationnel et vos compétences interpersonnelles harmonieuses seront très appréciés dans toute organisation.",
          it: "Puoi aspettarti una crescita stabile nella tua carriera. Il tuo giudizio razionale e le tue armoniose capacità interpersonali saranno molto apprezzate in qualsiasi organizzazione.",
          de: "Sie können ein stabiles Wachstum in Ihrer Karriere erwarten. Ihr rationales Urteilsvermögen und Ihre harmonischen zwischenmenschlichen Fähigkeiten werden in jeder Organisation hoch geschätzt.",
          pt: "Você pode esperar um crescimento estável em sua carreira. Seu julgamento racional e suas habilidades interpessoais harmoniosas serão muito valorizados em qualquer organização.",
          es: "Puedes esperar un crecimiento estable en tu carrera. Tu juicio racional y tus habilidades interpersonales armoniosas serán muy valoradas en cualquier organización.",
          ja: "あなたはキャリアにおいて安定した成長を期待できます。あなたの合理的な判断力と調和のとれた対人関係スキルは、どの組織でも高く評価されます。",
          th: "คุณสามารถคาดหวังการเติบโตที่มั่นคงในอาชีพการงานของคุณ การตัดสินอย่างมีเหตุผลและทักษะความสัมพันธ์ระหว่างบุคคลที่กลมกลืนกันของคุณจะได้รับการยอมรับอย่างสูงในทุกองค์กร",
          id: "Anda dapat mengharapkan pertumbuhan yang stabil dalam karir Anda. Penilaian rasional dan keterampilan interpersonal Anda yang harmonis akan sangat dihargai di organisasi mana pun."
        },
        love: {
          en: "You are able to have a comfortable and stable relationship. You will form a deep and trusting relationship by respecting and understanding each other.",
          ko: "편안하고 안정적인 연애를 할 수 있는 기운입니다. 서로를 존중하고 이해하며 깊은 신뢰 관계를 형성할 것입니다.",
          fr: "Vous êtes capable d'avoir une relation confortable et stable. Vous formerez une relation profonde et de confiance en vous respectant et en vous comprenant mutuellement.",
          it: "Sei in grado di avere una relazione comoda e stabile. Formerai una relazione profonda e fiduciosa rispettandovi e comprendendovi a vicenda.",
          de: "Sie sind in der Lage, eine angenehme und stabile Beziehung zu führen. Sie werden eine tiefe und vertrauensvolle Beziehung aufbauen, indem Sie sich gegenseitig respektieren und verstehen.",
          pt: "Você é capaz de ter um relacionamento confortável e estável. Você formará um relacionamento profundo e de confiança, respeitando e compreendendo um ao outro.",
          es: "Eres capaz de tener una relación cómoda y estable. Formarás una relación profunda y de confianza respetándoos y entendiéndoos mutuamente.",
          ja: "あなたは快適で安定した関係を築くことができます。お互いを尊重し理解することで、深く信頼できる関係を築くことができます。",
          th: "คุณสามารถมีความสัมพันธ์ที่สบายและมั่นคงได้ คุณจะสร้างความสัมพันธ์ที่ลึกซึ้งและไว้วางใจได้โดยการเคารพและเข้าใจซึ่งกันและกัน",
          id: "Anda mampu memiliki hubungan yang nyaman dan stabil. Anda akan membentuk hubungan yang dalam dan saling percaya dengan saling menghormati dan memahami."
        },
        health: {
          en: "You have a balanced state of mind and body, allowing you to maintain good health. A regular lifestyle and moderate exercise will be of great help.",
          ko: "몸과 마음이 균형 잡힌 상태로, 건강을 잘 유지할 수 있습니다. 규칙적인 생활과 적당한 운동이 큰 도움이 될 것입니다.",
          fr: "Vous avez un état d'esprit et de corps équilibré, ce qui vous permet de maintenir une bonne santé. Un mode de vie régulier et une activité physique modérée vous seront d'une grande aide.",
          it: "Hai uno stato equilibrato di mente e corpo, che ti consente di mantenere una buona salute. Uno stile di vita regolare e un moderato esercizio fisico saranno di grande aiuto.",
          de: "Sie haben einen ausgeglichenen Zustand von Geist und Körper, der es Ihnen ermöglicht, eine gute Gesundheit zu erhalten. Ein regelmäßiger Lebensstil und moderate Bewegung werden eine große Hilfe sein.",
          pt: "Você tem um estado equilibrado de mente e corpo, permitindo que você mantenha uma boa saúde. Um estilo de vida regular e exercícios moderados serão de grande ajuda.",
          es: "Tienes un estado equilibrado de mente y cuerpo, lo que te permite mantener una buena salud. Un estilo de vida regular y ejercicio moderado serán de gran ayuda.",
          ja: "あなたは心と体のバランスが取れており、健康を維持することができます。規則正しい生活と適度な運動が大きな助けになります。",
          th: "คุณมีสภาวะของจิตใจและร่างกายที่สมดุล ทำให้คุณสามารถรักษาสุขภาพที่ดีได้ การใช้ชีวิตอย่างสม่ำเสมอและการออกกำลังกายในระดับปานกลางจะช่วยได้มาก",
          id: "Anda memiliki kondisi pikiran dan tubuh yang seimbang, memungkinkan Anda untuk menjaga kesehatan yang baik. Gaya hidup teratur dan olahraga sedang akan sangat membantu."
        },
        wealth: {
          en: "You can build wealth in a stable manner. You will achieve financial stability through systematic financial management rather than risky investments.",
          ko: "안정적으로 재물을 쌓아갈 수 있습니다. 위험한 투자보다는 체계적인 재무 관리를 통해 재정적 안정을 이룰 것입니다.",
          fr: "Vous pouvez accumuler de la richesse de manière stable. Vous atteindrez la stabilité financière grâce à une gestion financière systématique plutôt qu'à des investissements risqués.",
          it: "Puoi costruire ricchezza in modo stabile. Raggiungerai la stabilità finanziaria attraverso una gestione finanziaria sistematica piuttosto che investimenti rischiosi.",
          de: "Sie können auf stabile Weise Wohlstand aufbauen. Sie werden finanzielle Stabilität durch systematisches Finanzmanagement und nicht durch riskante Investitionen erreichen.",
          pt: "Você pode construir riqueza de maneira estável. Você alcançará a estabilidade financeira por meio de uma gestão financeira sistemática, em vez de investimentos arriscados.",
          es: "Puedes acumular riqueza de manera estable. Lograrás la estabilidad financiera a través de una gestión financiera sistemática en lugar de inversiones arriesgadas.",
          ja: "あなたは安定した方法で富を築くことができます。危険な投資ではなく、体系的な財務管理を通じて経済的安定を達成します。",
          th: "คุณสามารถสร้างความมั่งคั่งได้อย่างมั่นคง คุณจะบรรลุความมั่นคงทางการเงินผ่านการจัดการทางการเงินอย่างเป็นระบบมากกว่าการลงทุนที่มีความเสี่ยง",
          id: "Anda dapat membangun kekayaan dengan cara yang stabil. Anda akan mencapai stabilitas keuangan melalui manajemen keuangan yang sistematis daripada investasi yang berisiko."
        },
        advice: {
          en: "Maintain your current balance and continue to move forward. Your steady efforts will surely lead to great results.",
          ko: "지금의 균형을 잘 유지하며 꾸준히 나아가세요. 당신의 꾸준한 노력은 반드시 큰 결실로 이어질 것입니다.",
          fr: "Maintenez votre équilibre actuel et continuez à avancer. Vos efforts constants mèneront sûrement à d'excellents résultats.",
          it: "Mantieni il tuo equilibrio attuale e continua ad andare avanti. I tuoi sforzi costanti porteranno sicuramente a grandi risultati.",
          de: "Halten Sie Ihr aktuelles Gleichgewicht und bewegen Sie sich weiter vorwärts. Ihre stetigen Bemühungen werden mit Sicherheit zu großartigen Ergebnissen führen.",
          pt: "Mantenha seu equilíbrio atual e continue avançando. Seus esforços constantes certamente levarão a ótimos resultados.",
          es: "Mantén tu equilibrio actual y sigue avanzando. Tus esfuerzos constantes seguramente te llevarán a grandes resultados.",
          ja: "現在のバランスを維持し、前進し続けてください。あなたの着実な努力は、必ずや素晴らしい結果につながるでしょう。",
          th: "รักษาสมดุลในปัจจุบันของคุณและก้าวไปข้างหน้าต่อไป ความพยายามอย่างสม่ำเสมอของคุณจะนำไปสู่ผลลัพธ์ที่ยอดเยี่ยมอย่างแน่นอน",
          id: "Pertahankan keseimbangan Anda saat ini dan terus maju. Upaya Anda yang mantap pasti akan membuahkan hasil yang luar biasa."
        }
      },
      'weak': {
        overall: {
          en: "You have a delicate and sensitive nature, so you need to protect and nurture your energy. It is important to have people around you who can support you.",
          ko: "섬세하고 예민한 기운을 가지고 있으므로, 자신의 에너지를 보호하고 가꾸는 노력이 필요합니다. 주변에 당신을 지지해주는 사람들을 두는 것이 중요합니다.",
          fr: "Vous avez une nature délicate et sensible, vous devez donc protéger et nourrir votre énergie. Il est important d'avoir des gens autour de vous qui peuvent vous soutenir.",
          it: "Hai una natura delicata e sensibile, quindi devi proteggere e nutrire la tua energia. È importante avere persone intorno a te che possano supportarti.",
          de: "Sie haben eine zarte und empfindliche Natur, daher müssen Sie Ihre Energie schützen und pflegen. Es ist wichtig, Menschen um sich zu haben, die Sie unterstützen können.",
          pt: "Você tem uma natureza delicada e sensível, então precisa proteger e nutrir sua energia. É importante ter pessoas ao seu redor que possam apoiá-lo.",
          es: "Tienes una naturaleza delicada y sensible, por lo que necesitas proteger y nutrir tu energía. Es importante tener personas a tu alrededor que puedan apoyarte.",
          ja: "あなたは繊細で敏感な性質を持っているので、あなたのエネルギーを保護し、育む必要があります。あなたをサポートしてくれる人が周りにいることが重要です。",
          th: "คุณมีธรรมชาติที่ละเอียดอ่อนและอ่อนไหว ดังนั้นคุณต้องปกป้องและบำรุงพลังงานของคุณ สิ่งสำคัญคือต้องมีคนรอบข้างที่สามารถสนับสนุนคุณได้",
          id: "Anda memiliki sifat yang lembut dan sensitif, jadi Anda perlu melindungi dan memelihara energi Anda. Penting untuk memiliki orang-orang di sekitar Anda yang dapat mendukung Anda."
        },
        career: {
          en: "It is better to work as part of a team than to take the lead. Your consideration for others and your ability to cooperate will shine in a stable organization.",
          ko: "전면에 나서기보다는 팀의 일원으로서 협력하는 것이 좋습니다. 안정적인 조직 안에서 당신의 배려심과 협동심이 빛을 발할 것입니다.",
          fr: "Il est préférable de travailler en équipe plutôt que de prendre les devants. Votre considération pour les autres et votre capacité à coopérer brilleront dans une organisation stable.",
          it: "È meglio lavorare come parte di un team piuttosto che prendere il comando. La tua considerazione per gli altri e la tua capacità di cooperare brilleranno in un'organizzazione stabile.",
          de: "Es ist besser, als Teil eines Teams zu arbeiten, als die Führung zu übernehmen. Ihre Rücksichtnahme auf andere und Ihre Fähigkeit zur Zusammenarbeit werden in einer stabilen Organisation glänzen.",
          pt: "É melhor trabalhar como parte de uma equipe do que assumir a liderança. Sua consideração pelos outros e sua capacidade de cooperar brilharão em uma organização estável.",
          es: "Es mejor trabajar como parte de un equipo que tomar la iniciativa. Tu consideración por los demás y tu capacidad para cooperar brillarán en una organización estable.",
          ja: "主導権を握るよりも、チームの一員として働く方が良いでしょう。他者への配慮と協力する能力は、安定した組織で輝きます。",
          th: "การทำงานเป็นส่วนหนึ่งของทีมดีกว่าการเป็นผู้นำ ความเห็นอกเห็นใจผู้อื่นและความสามารถในการร่วมมือของคุณจะเปล่งประกายในองค์กรที่มั่นคง",
          id: "Lebih baik bekerja sebagai bagian dari tim daripada memimpin. Pertimbangan Anda terhadap orang lain dan kemampuan Anda untuk bekerja sama akan bersinar dalam organisasi yang stabil."
        },
        love: {
          en: "You may feel insecure in relationships, so you need a partner who is understanding and supportive. Express your feelings honestly and build trust.",
          ko: "관계에 있어 불안감을 느낄 수 있으므로, 이해심 많고 지지적인 파트너가 필요합니다. 자신의 감정을 솔직하게 표현하고 신뢰를 쌓아가세요.",
          fr: "Vous pouvez vous sentir en insécurité dans les relations, vous avez donc besoin d'un partenaire compréhensif et qui vous soutient. Exprimez vos sentiments honnêtement et établissez la confiance.",
          it: "Potresti sentirti insicuro nelle relazioni, quindi hai bisogno di un partner che sia comprensivo e di supporto. Esprimi i tuoi sentimenti onestamente e costruisci la fiducia.",
          de: "Sie fühlen sich in Beziehungen möglicherweise unsicher, daher brauchen Sie einen verständnisvollen und unterstützenden Partner. Drücken Sie Ihre Gefühle ehrlich aus und bauen Sie Vertrauen auf.",
          pt: "Você pode se sentir inseguro nos relacionamentos, então precisa de um parceiro que seja compreensivo e solidário. Expresse seus sentimentos honestamente e construa confiança.",
          es: "Puedes sentirte inseguro en las relaciones, por lo que necesitas una pareja que sea comprensiva y te apoye. Expresa tus sentimientos con honestidad y genera confianza.",
          ja: "あなたは人間関係に不安を感じるかもしれないので、理解があり協力的なパートナーが必要です。自分の気持ちを正直に表現し、信頼を築きましょう。",
          th: "คุณอาจรู้สึกไม่ปลอดภัยในความสัมพันธ์ ดังนั้นคุณจึงต้องการคู่ครองที่เข้าใจและให้การสนับสนุน แสดงความรู้สึกของคุณอย่างตรงไปตรงมาและสร้างความไว้วางใจ",
          id: "Anda mungkin merasa tidak aman dalam hubungan, jadi Anda membutuhkan pasangan yang pengertian dan suportif. Ungkapkan perasaan Anda dengan jujur ​​dan bangun kepercayaan."
        },
        health: {
          en: "Your energy can be easily depleted, so you need enough rest and stress management. It is good to find your own way to relax your mind and body.",
          ko: "에너지가 쉽게 소진될 수 있으므로 충분한 휴식과 스트레스 관리가 필수적입니다. 몸과 마음을 이완시키는 자신만의 방법을 찾는 것이 좋습니다.",
          fr: "Votre énergie peut être facilement épuisée, vous avez donc besoin de suffisamment de repos et de gestion du stress. Il est bon de trouver votre propre façon de détendre votre esprit et votre corps.",
          it: "La tua energia può essere facilmente esaurita, quindi hai bisogno di riposo sufficiente e di gestione dello stress. È bene trovare il proprio modo per rilassare la mente e il corpo.",
          de: "Ihre Energie kann leicht erschöpft sein, daher brauchen Sie ausreichend Ruhe und Stressbewältigung. Es ist gut, einen eigenen Weg zu finden, um Körper und Geist zu entspannen.",
          pt: "Sua energia pode se esgotar facilmente, então você precisa de descanso suficiente e gerenciamento do estresse. É bom encontrar sua própria maneira de relaxar sua mente e corpo.",
          es: "Tu energía se puede agotar fácilmente, por lo que necesitas suficiente descanso y manejo del estrés. Es bueno encontrar tu propia manera de relajar tu mente y tu cuerpo.",
          ja: "あなたのエネルギーは簡単に枯渇する可能性があるので、十分な休息とストレス管理が必要です。心と体をリラックスさせる独自の方法を見つけるのが良いでしょう。",
          th: "พลังงานของคุณสามารถหมดลงได้ง่าย ดังนั้นคุณต้องพักผ่อนให้เพียงพอและจัดการความเครียด เป็นการดีที่จะหาวิธีผ่อนคลายจิตใจและร่างกายของคุณเอง",
          id: "Energi Anda dapat dengan mudah terkuras, jadi Anda perlu cukup istirahat dan manajemen stres. Baik untuk menemukan cara Anda sendiri untuk merilekskan pikiran dan tubuh Anda."
        },
        wealth: {
          en: "It is more important to manage your assets stably than to pursue large wealth. Avoid risky investments and focus on saving and long-term planning.",
          ko: "큰 재물을 좇기보다는 안정적으로 자산을 관리하는 것이 중요합니다. 위험한 투자는 피하고, 저축과 장기적인 계획에 집중하세요.",
          fr: "Il est plus important de gérer vos actifs de manière stable que de rechercher une grande richesse. Évitez les investissements risqués et concentrez-vous sur l'épargne et la planification à long terme.",
          it: "È più importante gestire i tuoi beni in modo stabile piuttosto che perseguire una grande ricchezza. Evita investimenti rischiosi e concentrati sul risparmio e sulla pianificazione a lungo termine.",
          de: "Es ist wichtiger, Ihr Vermögen stabil zu verwalten, als großen Reichtum anzustreben. Vermeiden Sie riskante Investitionen und konzentrieren Sie sich auf Sparen und langfristige Planung.",
          pt: "É mais importante gerenciar seus ativos de forma estável do que buscar grandes riquezas. Evite investimentos arriscados e concentre-se na poupança e no planejamento de longo prazo.",
          es: "Es más importante administrar tus activos de manera estable que perseguir una gran riqueza. Evita las inversiones arriesgadas y céntrate en el ahorro y la planificación a largo plazo.",
          ja: "大きな富を追求するよりも、安定して資産を管理することがより重要です。危険な投資を避け、貯蓄と長期計画に集中してください。",
          th: "การจัดการทรัพย์สินของคุณอย่างมั่นคงสำคัญกว่าการแสวงหาความมั่งคั่งจำนวนมาก หลีกเลี่ยงการลงทุนที่มีความเสี่ยงและมุ่งเน้นไปที่การออมและการวางแผนระยะยาว",
          id: "Lebih penting mengelola aset Anda secara stabil daripada mengejar kekayaan besar. Hindari investasi berisiko dan fokus pada tabungan dan perencanaan jangka panjang."
        },
        advice: {
          en: "Don't be afraid to ask for help from those around you. Recognizing and supplementing your weaknesses is true wisdom.",
          ko: "주변에 도움을 청하는 것을 두려워하지 마세요. 자신의 약점을 인정하고 보완해나가는 것이 진정한 지혜입니다.",
          fr: "N'ayez pas peur de demander de l'aide à votre entourage. Reconnaître et compléter ses faiblesses est la vraie sagesse.",
          it: "Non aver paura di chiedere aiuto a chi ti circonda. Riconoscere e integrare le proprie debolezze è vera saggezza.",
          de: "Haben Sie keine Angst, die Menschen um Sie herum um Hilfe zu bitten. Ihre Schwächen zu erkennen und zu ergänzen, ist wahre Weisheit.",
          pt: "Não tenha medo de pedir ajuda às pessoas ao seu redor. Reconhecer e complementar suas fraquezas é a verdadeira sabedoria.",
          es: "No tengas miedo de pedir ayuda a quienes te rodean. Reconocer y complementar tus debilidades es la verdadera sabiduría.",
          ja: "周りの人に助けを求めることを恐れないでください。自分の弱点を認識し、補うことが真の知恵です。",
          th: "อย่ากลัวที่จะขอความช่วยเหลือจากคนรอบข้าง การตระหนักและเสริมจุดอ่อนของคุณคือปัญญาที่แท้จริง",
          id: "Jangan takut untuk meminta bantuan dari orang-orang di sekitar Anda. Mengenali dan melengkapi kelemahan Anda adalah kebijaksanaan sejati."
        }
      },
      'very-weak': {
        overall: {
          en: "Your energy is very delicate, so you need active effort to strengthen it. It is most important to create a stable environment and take care of your health.",
          ko: "기운이 매우 섬세하므로, 이를 강화하기 위한 적극적인 노력이 필요합니다. 안정적인 환경을 조성하고 건강을 돌보는 것이 가장 중요합니다.",
          fr: "Votre énergie est très délicate, vous avez donc besoin d'efforts actifs pour la renforcer. Le plus important est de créer un environnement stable et de prendre soin de votre santé.",
          it: "La tua energia è molto delicata, quindi hai bisogno di uno sforzo attivo per rafforzarla. La cosa più importante è creare un ambiente stabile e prendersi cura della propria salute.",
          de: "Ihre Energie ist sehr empfindlich, daher benötigen Sie aktive Anstrengungen, um sie zu stärken. Es ist am wichtigsten, eine stabile Umgebung zu schaffen und auf Ihre Gesundheit zu achten.",
          pt: "Sua energia é muito delicata, então você precisa de um esforço ativo para fortalecê-la. O mais importante é criar um ambiente estável e cuidar da sua saúde.",
          es: "Tu energía es muy delicada, por lo que necesitas un esfuerzo activo para fortalecerla. Lo más importante es crear un ambiente estable y cuidar tu salud.",
          ja: "あなたのエネルギーは非常にデリケートなので、それを強化するための積極的な努力が必要です。安定した環境を作り、健康に気をつけることが最も重要です。",
          th: "พลังงานของคุณละเอียดอ่อนมาก ดังนั้นคุณต้องใช้ความพยายามอย่างแข็งขันเพื่อเสริมสร้างมัน สิ่งสำคัญที่สุดคือการสร้างสภาพแวดล้อมที่มั่นคงและดูแลสุขภาพของคุณ",
          id: "Energi Anda sangat halus, jadi Anda perlu upaya aktif untuk memperkuatnya. Yang paling penting adalah menciptakan lingkungan yang stabil dan menjaga kesehatan Anda."
        },
        career: {
          en: "It is wise to choose a profession that is not overly stressful and where you can work at your own pace. Your meticulousness and sincerity will be your greatest strengths.",
          ko: "스트레스가 과도하지 않고 자신의 속도에 맞춰 일할 수 있는 직업을 선택하는 것이 현명합니다. 당신의 꼼꼼함과 성실함이 가장 큰 무기가 될 것입니다.",
          fr: "Il est sage de choisir une profession qui n'est pas trop stressante et où vous pouvez travailler à votre propre rythme. Votre méticulosité et votre sincérité seront vos plus grandes forces.",
          it: "È saggio scegliere una professione che non sia eccessivamente stressante e in cui si possa lavorare al proprio ritmo. La tua meticolosità e sincerità saranno i tuoi maggiori punti di forza.",
          de: "Es ist klug, einen Beruf zu wählen, der nicht übermäßig stressig ist und in dem Sie in Ihrem eigenen Tempo arbeiten können. Ihre Akribie und Aufrichtigkeit werden Ihre größten Stärken sein.",
          pt: "É sábio escolher uma profissão que não seja excessivamente estressante e onde você possa trabalhar no seu próprio ritmo. Sua meticulosidade e sinceridade serão seus maiores pontos fortes.",
          es: "Es aconsejable elegir una profesión que no sea demasiado estresante y en la que puedas trabajar a tu propio ritmo. Tu meticulosidad y sinceridad serán tus mayores fortalezas.",
          ja: "過度にストレスがなく、自分のペースで仕事ができる職業を選ぶのが賢明です。あなたの細心さと誠実さが最大の武器になります。",
          th: "เป็นการฉลาดที่จะเลือกอาชีพที่ไม่เครียดจนเกินไปและที่คุณสามารถทำงานได้ตามจังหวะของคุณเอง ความพิถีพิถันและความจริงใจของคุณจะเป็นจุดแข็งที่ยิ่งใหญ่ที่สุดของคุณ",
          id: "Adalah bijaksana untuk memilih profesi yang tidak terlalu membuat stres dan di mana Anda dapat bekerja dengan kecepatan Anda sendiri. Ketelitian dan ketulusan Anda akan menjadi kekuatan terbesar Anda."
        },
        love: {
          en: "You need a partner who can provide unconditional support and a sense of security. A relationship where you can be a source of strength for each other will bring stability.",
          ko: "절대적인 지지와 안정감을 줄 수 있는 파트너가 필요합니다. 서로에게 힘이 되어주는 관계를 통해 안정을 찾을 수 있습니다.",
          fr: "Vous avez besoin d'un partenaire qui peut vous apporter un soutien inconditionnel et un sentiment de sécurité. Une relation où vous pouvez être une source de force l'un pour l'autre apportera la stabilité.",
          it: "Hai bisogno di un partner che possa fornire un supporto incondizionato e un senso di sicurezza. Una relazione in cui potete essere una fonte di forza l'uno per l'altro porterà stabilità.",
          de: "Sie brauchen einen Partner, der bedingungslose Unterstützung und ein Gefühl der Sicherheit geben kann. Eine Beziehung, in der Sie füreinander eine Kraftquelle sein können, wird Stabilität bringen.",
          pt: "Você precisa de um parceiro que possa fornecer apoio incondicional e uma sensação de segurança. Um relacionamento onde vocês possam ser uma fonte de força um para o outro trará estabilidade.",
          es: "Necesitas una pareja que pueda brindarte un apoyo incondicional y una sensación de seguridad. Una relación en la que puedan ser una fuente de fortaleza el uno para el otro traerá estabilidad.",
          ja: "あなたは無条件のサポートと安心感を提供できるパートナーが必要です。お互いの力の源になれる関係は、安定をもたらします。",
          th: "คุณต้องการคู่ครองที่สามารถให้การสนับสนุนอย่างไม่มีเงื่อนไขและความรู้สึกปลอดภัยได้ ความสัมพันธ์ที่คุณสามารถเป็นแหล่งพลังให้กันและกันได้จะนำมาซึ่งความมั่นคง",
          id: "Anda membutuhkan pasangan yang dapat memberikan dukungan tanpa syarat dan rasa aman. Hubungan di mana Anda bisa menjadi sumber kekuatan bagi satu sama lain akan membawa stabilitas."
        },
        health: {
          en: "Your immunity can be weak, so you need special attention to your health. A nutritious diet, regular exercise, and sufficient sleep are essential.",
          ko: "면역력이 약할 수 있으므로 건강에 각별한 주의가 필요합니다. 영양가 있는 식단과 규칙적인 운동, 충분한 수면은 필수적입니다.",
          fr: "Votre immunité peut être faible, vous devez donc porter une attention particulière à votre santé. Une alimentation nutritive, une activité physique régulière et un sommeil suffisant sont essentiels.",
          it: "La tua immunità può essere debole, quindi devi prestare particolare attenzione alla tua salute. Una dieta nutriente, un regolare esercizio fisico e un sonno sufficiente sono essenziali.",
          de: "Ihre Immunität kann schwach sein, daher müssen Sie besonders auf Ihre Gesundheit achten. Eine nahrhafte Ernährung, regelmäßige Bewegung und ausreichend Schlaf sind unerlässlich.",
          pt: "Sua imunidade pode estar fraca, então você precisa de atenção especial à sua saúde. Uma dieta nutritiva, exercícios regulares e sono suficiente são essenciais.",
          es: "Tu inmunidad puede ser débil, por lo que necesitas prestar especial atención a tu salud. Una dieta nutritiva, ejercicio regular y un sueño suficiente son esenciales.",
          ja: "あなたの免疫力は弱い可能性があるので、健康に特別な注意を払う必要があります。栄養価の高い食事、定期的な運動、十分な睡眠が不可欠です。",
          th: "ภูมิคุ้มกันของคุณอาจอ่อนแอ ดังนั้นคุณต้องให้ความสนใจเป็นพิเศษกับสุขภาพของคุณ อาหารที่มีคุณค่าทางโภชนาการ การออกกำลังกายอย่างสม่ำเสมอ และการนอนหลับที่เพียงพอเป็นสิ่งสำคัญ",
          id: "Kekebalan tubuh Anda bisa lemah, jadi Anda perlu perhatian khusus pada kesehatan Anda. Diet bergizi, olahraga teratur, dan tidur yang cukup sangat penting."
        },
        wealth: {
          en: "Your primary goal should be financial stability rather than increasing wealth. Focus on risk management and avoid any speculative investments.",
          ko: "재물을 늘리는 것보다 재정적 안정을 최우선 목표로 삼아야 합니다. 위험 관리에 집중하고, 어떠한 투기성 투자도 피하는 것이 좋습니다.",
          fr: "Votre objectif principal devrait être la stabilité financière plutôt que l'augmentation de la richesse. Concentrez-vous sur la gestion des risques et évitez tout investissement spéculatif.",
          it: "Il tuo obiettivo primario dovrebbe essere la stabilità finanziaria piuttosto che l'aumento della ricchezza. Concentrati sulla gestione del rischio ed evita qualsiasi investimento speculativo.",
          de: "Ihr Hauptziel sollte die finanzielle Stabilität sein und nicht die Vermehrung des Vermögens. Konzentrieren Sie sich auf das Risikomanagement und vermeiden Sie spekulative Anlagen.",
          pt: "Seu objetivo principal deve ser a estabilidade financeira em vez de aumentar a riqueza. Concentre-se na gestão de riscos e evite quaisquer investimentos especulativos.",
          es: "Tu objetivo principal debe ser la estabilidad financiera en lugar de aumentar la riqueza. Concéntrate en la gestión de riesgos y evita cualquier inversión especulativa.",
          ja: "あなたの主な目標は、富を増やすことよりも経済的な安定であるべきです。リスク管理に集中し、投機的な投資は避けてください。",
          th: "เป้าหมายหลักของคุณควรเป็นความมั่นคงทางการเงินมากกว่าการเพิ่มความมั่งคั่ง มุ่งเน้นไปที่การบริหารความเสี่ยงและหลีกเลี่ยงการลงทุนเก็งกำไรใดๆ",
          id: "Tujuan utama Anda haruslah stabilitas keuangan daripada meningkatkan kekayaan. Fokus pada manajemen risiko dan hindari investasi spekulatif apa pun."
        },
        advice: {
          en: "First, focus on taking care of yourself. When your inner strength is built up, you will have the opportunity to slowly expand your activities.",
          ko: "먼저 자기 자신을 돌보는 것에 집중하세요. 내면의 힘이 길러지면, 점차 활동 범위를 넓혀갈 기회가 찾아올 것입니다.",
          fr: "Tout d'abord, concentrez-vous sur le fait de prendre soin de vous. Lorsque votre force intérieure sera développée, vous aurez l'occasion d'étendre lentement vos activités.",
          it: "Innanzitutto, concentrati sulla cura di te stesso. Quando la tua forza interiore sarà cresciuta, avrai l'opportunità di espandere lentamente le tue attività.",
          de: "Konzentrieren Sie sich zuerst darauf, auf sich selbst aufzupassen. Wenn Ihre innere Stärke aufgebaut ist, haben Sie die Möglichkeit, Ihre Aktivitäten langsam zu erweitern.",
          pt: "Primeiro, concentre-se em cuidar de si mesmo. Quando sua força interior for construída, você terá a oportunidade de expandir lentamente suas atividades.",
          es: "Primero, concéntrate en cuidarte a ti mismo. Cuando tu fuerza interior se desarrolle, tendrás la oportunidad de expandir lentamente tus actividades.",
          ja: "まず、自分自身の世話をすることに集中してください。内なる強さが身につくと、ゆっくりと活動を拡大する機会が得られます。",
          th: "ก่อนอื่นให้มุ่งเน้นไปที่การดูแลตัวเอง เมื่อความแข็งแกร่งภายในของคุณถูกสร้างขึ้น คุณจะมีโอกาสขยายกิจกรรมของคุณอย่างช้าๆ",
          id: "Pertama, fokuslah untuk merawat diri sendiri. Ketika kekuatan batin Anda terbangun, Anda akan memiliki kesempatan untuk perlahan-lahan memperluas aktivitas Anda."
        }
      }
    }
  },

  // TODO: Add remaining required fields
  seasonalInfluence: {
    spring: { characteristics: {}, favorableAspects: {}, challenges: {}, advice: {} },
    summer: { characteristics: {}, favorableAspects: {}, challenges: {}, advice: {} },
    autumn: { characteristics: {}, favorableAspects: {}, challenges: {}, advice: {} },
    winter: { characteristics: {}, favorableAspects: {}, challenges: {}, advice: {} }
  } as any,
  elementBalanceMessages: {
    wood: { dominant: {}, lacking: {}, balanced: {} },
    fire: { dominant: {}, lacking: {}, balanced: {} },
    earth: { dominant: {}, lacking: {}, balanced: {} },
    metal: { dominant: {}, lacking: {}, balanced: {} },
    water: { dominant: {}, lacking: {}, balanced: {} }
  } as any,
  defaultTemplates: {
    overall: {},
    career: {},
    love: {},
    health: {},
    wealth: {},
    advice: {}
  } as any
};
