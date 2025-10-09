export type Locale = 'en' | 'ko' | 'fr' | 'it' | 'de' | 'pt' | 'es' | 'ja' | 'th' | 'id';
export type Element = 'wood' | 'fire' | 'earth' | 'metal' | 'water';
export type Strength = 'strong' | 'moderate' | 'weak';
export type SajuStrength = 'very-strong' | 'strong' | 'moderate' | 'weak' | 'very-weak';

export type FortuneText = Partial<Record<Locale, string>>;

// Helper function to map 5-level strength to 3-level strength for fortuneMatrix
export function mapStrengthToMatrix(sajuStrength: SajuStrength): Strength {
  switch (sajuStrength) {
    case 'very-strong':
    case 'strong':
      return 'strong';
    case 'moderate':
      return 'moderate';
    case 'weak':
    case 'very-weak':
      return 'weak';
  }
}

interface FortuneCombination {
  strong: FortuneText;
  moderate: FortuneText;
  weak: FortuneText;
}

interface FortuneTopic {
  wood: FortuneCombination;
  fire: FortuneCombination;
  earth: FortuneCombination;
  metal: FortuneCombination;
  water: FortuneCombination;
}

export interface FortuneMatrix {
  career: FortuneTopic;
  love: FortuneTopic;
  health: FortuneTopic;
  wealth: FortuneTopic;
}

export const fortuneMatrix: FortuneMatrix = {
  // =================================
  // 1. 직업 (Career)
  // =================================
  career: {
    wood: {
      strong: {
        ko: "리더십과 창의력을 바탕으로 프로젝트를 이끄는 역할에서 큰 성공을 거둡니다. 스타트업, 기획, 관리직에 특히 강점을 보입니다.",
        en: "You'll find great success in leadership roles that drive projects forward with creativity. You show particular strength in startups, planning, and management.",
        ja: "創造性を活かしてプロジェクトを推進するリーダーシップの役割で大きな成功を収めるでしょう。特にスタートアップ、企画、管理職で強みを発揮します。",
        fr: "Vous connaîtrez un grand succès dans des rôles de direction qui font avancer les projets avec créativité. Vous montrez une force particulière dans les startups, la planification et la gestion.",
        de: "Sie werden großen Erfolg in Führungspositionen haben, die Projekte mit Kreativität vorantreiben. Sie zeigen besondere Stärke in Start-ups, Planung und Management.",
        it: "Troverai grande successo in ruoli di leadership che portano avanti i progetti con creatività. Mostri una forza particolare in startup, pianificazione e gestione.",
        pt: "Você encontrará grande sucesso em papéis de liderança que impulsionam projetos com criatividade. Você demonstra força especial em startups, planejamento e gestão.",
        es: "Encontrarás un gran éxito en roles de liderazgo que impulsan proyectos con creatividad. Muestras una fortaleza particular en startups, planificación y gestión.",
        th: "คุณจะประสบความสำเร็จอย่างยิ่งใหญ่ในบทบาทผู้นำที่ขับเคลื่อนโครงการไปข้างหน้าด้วยความคิดสร้างสรรค์ คุณแสดงให้เห็นถึงความแข็งแกร่งเป็นพิเศษในสตาร์ทอัพ การวางแผน และการจัดการ",
        id: "Anda akan menemukan kesuksesan besar dalam peran kepemimpinan yang mendorong proyek maju dengan kreativitas. Anda menunjukkan kekuatan khusus dalam startup, perencanaan, dan manajemen."
      },
      moderate: {
        ko: "협업을 통해 아이디어를 실현시키는 기획 및 교육 분야에서 꾸준히 성장합니다. 안정적인 조직 내에서 능력을 발휘하는 것이 좋습니다.",
        en: "You will grow steadily in planning and education, realizing ideas through collaboration. It's best to exercise your abilities within a stable organization.",
        ja: "協力を通じてアイデアを実現する企画や教育の分野で着実に成長します。安定した組織内で能力を発揮するのが最善です。",
        fr: "Vous vous développerez de manière constante dans la planification et l'éducation, en réalisant des idées grâce à la collaboration. Il est préférable d'exercer vos capacités au sein d'une organisation stable.",
        de: "Sie werden in den Bereichen Planung und Bildung stetig wachsen und Ideen durch Zusammenarbeit verwirklichen. Es ist am besten, Ihre Fähigkeiten innerhalb einer stabilen Organisation auszuüben.",
        it: "Crescerai costantemente nella pianificazione e nell'istruzione, realizzando idee attraverso la collaborazione. È meglio esercitare le tue abilità all'interno di un'organizzazione stabile.",
        pt: "Você crescerá de forma constante em planejamento e educação, realizando ideias através da colaboração. É melhor exercer suas habilidades dentro de uma organização estável.",
        es: "Crecerás de manera constante en planificación y educación, realizando ideas a través de la colaboración. Es mejor ejercer tus habilidades dentro de una organización estable.",
        th: "คุณจะเติบโตอย่างต่อเนื่องในด้านการวางแผนและการศึกษา สร้างสรรค์แนวคิดผ่านการทำงานร่วมกัน เป็นการดีที่สุดที่จะใช้ความสามารถของคุณภายในองค์กรที่มั่นคง",
        id: "Anda akan tumbuh secara stabil dalam perencanaan dan pendidikan, mewujudkan ide melalui kolaborasi. Sebaiknya manfaatkan kemampuan Anda dalam organisasi yang stabil."
      },
      weak: {
        ko: "혼자서 모든 것을 책임지기보다, 팀의 일원으로서 기획력과 성실함을 발휘할 때 안정적으로 성장할 수 있습니다.",
        en: "Rather than taking on everything alone, you can achieve stable growth by demonstrating your planning skills and sincerity as part of a team.",
        ja: "一人ですべてを背負うのではなく、チームの一員として計画能力と誠実さを発揮することで、安定した成長を遂げることができます。",
        fr: "Plutôt que de tout prendre en charge seul, vous pouvez atteindre une croissance stable en démontrant vos compétences en planification et votre sincérité en tant que membre d'une équipe.",
        de: "Anstatt alles allein zu übernehmen, können Sie stabiles Wachstum erzielen, indem Sie Ihre Planungsfähigkeiten und Ihre Aufrichtigkeit als Teil eines Teams unter Beweis stellen.",
        it: "Invece di affrontare tutto da solo, puoi ottenere una crescita stabile dimostrando le tue capacità di pianificazione e la tua sincerità come parte di un team.",
        pt: "Em vez de assumir tudo sozinho, você pode alcançar um crescimento estável demonstrando suas habilidades de planejamento e sinceridade como parte de uma equipe.",
        es: "En lugar de asumir todo solo, puedes lograr un crecimiento estable demostrando tus habilidades de planificación y sinceridad como parte de un equipo.",
        th: "แทนที่จะรับผิดชอบทุกอย่างคนเดียว คุณสามารถเติบโตได้อย่างมั่นคงโดยการแสดงทักษะการวางแผนและความจริงใจของคุณในฐานะส่วนหนึ่งของทีม",
        id: "Daripada menanggung semuanya sendirian, Anda dapat mencapai pertumbuhan yang stabil dengan menunjukkan keterampilan perencanaan dan ketulusan Anda sebagai bagian dari tim."
      }
    },
    fire: {
      strong: {
        ko: "자신의 열정과 표현력을 마음껏 활용할 수 있는 방송, 예술, 디자인 분야에서 스타가 될 자질이 충분합니다.",
        en: "You have the qualities to become a star in broadcasting, arts, and design, where you can fully utilize your passion and expressiveness.",
        ja: "情熱と表現力を存分に活かせる放送、芸術、デザインの分野でスターになる資質があります。",
        fr: "Vous avez les qualités pour devenir une star dans les domaines de la radiodiffusion, des arts et du design, où vous pouvez pleinement utiliser votre passion et votre expressivité.",
        de: "Sie haben die Qualitäten, ein Star in den Bereichen Rundfunk, Kunst und Design zu werden, wo Sie Ihre Leidenschaft und Ausdruckskraft voll ausleben können.",
        it: "Hai le qualità per diventare una stella nel campo della radiodiffusione, delle arti e del design, dove puoi utilizzare appieno la tua passione ed espressività.",
        pt: "Você tem as qualidades para se tornar uma estrela em radiodifusão, artes e design, onde pode utilizar plenamente sua paixão e expressividade.",
        es: "Tienes las cualidades para convertirte en una estrella en la radiodifusión, las artes y el diseño, donde puedes utilizar plenamente tu pasión y expresividad.",
        th: "คุณมีคุณสมบัติที่จะเป็นดาวเด่นในวงการกระจายเสียง ศิลปะ และการออกแบบ ซึ่งคุณสามารถใช้ความหลงใหลและการแสดงออกของคุณได้อย่างเต็มที่",
        id: "Anda memiliki kualitas untuk menjadi bintang di bidang penyiaran, seni, dan desain, di mana Anda dapat sepenuhnya memanfaatkan gairah dan ekspresivitas Anda."
      },
      moderate: {
        ko: "사람들을 끄는 매력과 사교성을 바탕으로 영업, 서비스, 마케팅 분야에서 높은 성과를 낼 수 있습니다.",
        en: "With your charm and sociability, you can achieve high performance in sales, service, and marketing.",
        ja: "あなたの魅力と社交性で、営業、サービス、マーケティングの分野で高いパフォーマンスを達成できます。",
        fr: "Avec votre charme et votre sociabilité, vous pouvez atteindre de hautes performances dans les domaines de la vente, du service et du marketing.",
        de: "Mit Ihrem Charme und Ihrer Geselligkeit können Sie hohe Leistungen in den Bereichen Vertrieb, Service und Marketing erzielen.",
        it: "Con il tuo fascino e la tua socievolezza, puoi raggiungere alte prestazioni nelle vendite, nei servizi e nel marketing.",
        pt: "Com seu charme e sociabilidade, você pode alcançar alto desempenho em vendas, serviços e marketing.",
        es: "Con tu encanto y sociabilidad, puedes lograr un alto rendimiento en ventas, servicios y marketing.",
        th: "ด้วยเสน่ห์และการเข้าสังคมของคุณ คุณสามารถบรรลุผลการปฏิบัติงานที่สูงในด้านการขาย การบริการ และการตลาด",
        id: "Dengan pesona dan kemampuan bersosialisasi Anda, Anda dapat mencapai kinerja tinggi di bidang penjualan, layanan, dan pemasaran."
      },
      weak: {
        ko: "팀에 활력을 불어넣는 지원 역할이나, 따뜻한 마음을 필요로 하는 상담, 교육 분야에서 꾸준한 인정을 받습니다.",
        en: "You will receive steady recognition in support roles that energize a team or in counseling and education fields that require a warm heart.",
        ja: "チームを活性化させるサポート役や、温かい心を必要とするカウンセリングや教育の分野で、着実な評価を得られます。",
        fr: "Vous recevrez une reconnaissance constante dans des rôles de soutien qui dynamisent une équipe ou dans les domaines du conseil et de l'éducation qui nécessitent un cœur chaleureux.",
        de: "Sie werden stetige Anerkennung in unterstützenden Rollen finden, die ein Team beleben, oder in Beratungs- und Bildungsbereichen, die ein warmes Herz erfordern.",
        it: "Riceverai un riconoscimento costante in ruoli di supporto che danno energia a un team o nei settori della consulenza e dell'istruzione che richiedono un cuore caldo.",
        pt: "Você receberá reconhecimento constante em funções de apoio que energizam uma equipe ou em campos de aconselhamento e educação que exigem um coração caloroso.",
        es: "Recibirás un reconocimiento constante en roles de apoyo que energizan a un equipo o en campos de consejería y educación que requieren un corazón cálido.",
        th: "คุณจะได้รับการยอมรับอย่างสม่ำเสมอในบทบาทสนับสนุนที่ช่วยเติมพลังให้กับทีม หรือในสายงานการให้คำปรึกษาและการศึกษาที่ต้องใช้หัวใจที่อบอุ่น",
        id: "Anda akan menerima pengakuan yang stabil dalam peran pendukung yang memberi energi pada tim atau di bidang konseling dan pendidikan yang membutuhkan hati yang hangat."
      }
    },
    earth: {
      strong: {
        ko: "성실함과 책임감을 바탕으로 하는 금융, 부동산, 공공기관 등 안정적인 분야에서 신뢰를 얻고 높은 자리에 오를 수 있습니다.",
        en: "Based on your sincerity and responsibility, you can gain trust and rise to high positions in stable fields like finance, real estate, and public institutions.",
        ja: "誠実さと責任感に基づき、金融、不動産、公的機関などの安定した分野で信頼を得て、高い地位に就くことができます。",
        fr: "Basé sur votre sincérité et votre responsabilité, vous pouvez gagner la confiance et accéder à des postes élevés dans des domaines stables comme la finance, l'immobilier et les institutions publiques.",
        de: "Aufgrund Ihrer Aufrichtigkeit und Verantwortung können Sie Vertrauen gewinnen und in stabilen Bereichen wie Finanzen, Immobilien und öffentlichen Einrichtungen hohe Positionen erreichen.",
        it: "In base alla tua sincerità e responsabilità, puoi guadagnare fiducia e raggiungere posizioni elevate in settori stabili come finanza, immobiliare e istituzioni pubbliche.",
        pt: "Com base em sua sinceridade e responsabilidade, você pode ganhar confiança e alcançar posições elevadas em áreas estáveis como finanças, imóveis e instituições públicas.",
        es: "Basado en tu sinceridad y responsabilidad, puedes ganar confianza y ascender a altos cargos en campos estables como las finanzas, los bienes raíces y las instituciones públicas.",
        th: "จากความจริงใจและความรับผิดชอบของคุณ คุณสามารถได้รับความไว้วางใจและขึ้นสู่ตำแหน่งสูงในสายงานที่มั่นคง เช่น การเงิน อสังหาริมทรัพย์ และสถาบันของรัฐ",
        id: "Berdasarkan ketulusan dan tanggung jawab Anda, Anda dapat memperoleh kepercayaan dan naik ke posisi tinggi di bidang yang stabil seperti keuangan, real estat, dan institusi publik."
      },
      moderate: {
        ko: "사람과 사람을 연결하는 중재자나 관리자 역할에 재능이 있습니다. 신뢰를 바탕으로 점진적으로 성공을 쌓아갑니다.",
        en: "You have a talent for roles as a mediator or manager, connecting people. You build success gradually based on trust.",
        ja: "人々をつなぐ調停者や管理者としての役割に才能があります。信頼に基づいて徐々に成功を築きます。",
        fr: "Vous avez un talent pour les rôles de médiateur ou de gestionnaire, en connectant les gens. Vous construisez le succès progressivement sur la base de la confiance.",
        de: "Sie haben ein Talent für Rollen als Vermittler oder Manager, der Menschen verbindet. Sie bauen den Erfolg schrittweise auf der Grundlage von Vertrauen auf.",
        it: "Hai un talento per i ruoli di mediatore o manager, nel connettere le persone. Costruisci il successo gradualmente sulla base della fiducia.",
        pt: "Você tem talento para papéis como mediador ou gerente, conectando pessoas. Você constrói o sucesso gradualmente com base na confiança.",
        es: "Tienes talento para roles como mediador o gerente, conectando a las personas. Construyes el éxito gradualmente basándote en la confianza.",
        th: "คุณมีความสามารถพิเศษในบทบาทผู้ไกล่เกลี่ยหรือผู้จัดการในการเชื่อมโยงผู้คน คุณสร้างความสำเร็จอย่างค่อยเป็นค่อยไปโดยอาศัยความไว้วางใจ",
        id: "Anda memiliki bakat untuk peran sebagai mediator atau manajer, menghubungkan orang-orang. Anda membangun kesuksesan secara bertahap berdasarkan kepercayaan."
      },
      weak: {
        ko: "변화가 적고 꾸준함이 요구되는 전문 기술직이나 연구직에서 당신의 성실함이 빛을 발하며 안정적인 성과를 냅니다.",
        en: "Your sincerity shines in specialized technical or research positions that require consistency with little change, leading to stable achievements.",
        ja: "変化が少なく、一貫性が求められる専門技術職や研究職で、あなたの誠実さが輝き、安定した成果につながります。",
        fr: "Votre sincérité brille dans des postes techniques spécialisés ou de recherche qui exigent de la constance avec peu de changement, menant à des réalisations stables.",
        de: "Ihre Aufrichtigkeit glänzt in spezialisierten technischen oder Forschungspositionen, die Beständigkeit mit wenig Veränderung erfordern, was zu stabilen Leistungen führt.",
        it: "La tua sincerità brilla in posizioni tecniche specializzate o di ricerca che richiedono coerenza con pochi cambiamenti, portando a risultati stabili.",
        pt: "Sua sinceridade brilha em cargos técnicos especializados ou de pesquisa que exigem consistência com pouca mudança, levando a conquistas estáveis.",
        es: "Tu sinceridad brilla en puestos técnicos especializados o de investigación que requieren constancia con pocos cambios, lo que conduce a logros estables.",
        th: "ความจริงใจของคุณโดดเด่นในตำแหน่งทางเทคนิคเฉพาะทางหรืองานวิจัยที่ต้องการความสม่ำเสมอและมีการเปลี่ยนแปลงน้อย ซึ่งนำไปสู่ความสำเร็จที่มั่นคง",
        id: "Ketulusan Anda bersinar dalam posisi teknis khusus atau penelitian yang membutuhkan konsistensi dengan sedikit perubahan, yang mengarah pada pencapaian yang stabil."
      }
    },
    metal: {
      strong: {
        ko: "강한 의지와 분석력을 바탕으로 금융, 법률, IT 등 전문 분야에서 원칙을 지키며 최고의 전문가가 될 수 있습니다.",
        en: "With strong will and analytical skills, you can become a top expert in professional fields like finance, law, and IT while adhering to principles.",
        ja: "強い意志と分析能力があれば、原則を守りながら、金融、法律、ITなどの専門分野でトップのエキスパートになることができます。",
        fr: "Avec une forte volonté et des compétences analytiques, vous pouvez devenir un expert de premier plan dans des domaines professionnels comme la finance, le droit et l'informatique tout en respectant les principes.",
        de: "Mit starkem Willen und analytischen Fähigkeiten können Sie ein Top-Experte in Berufsfeldern wie Finanzen, Recht und IT werden und dabei an Grundsätzen festhalten.",
        it: "Con una forte volontà e capacità analitiche, puoi diventare un esperto di punta in campi professionali come finanza, legge e IT, rispettando i principi.",
        pt: "Com forte vontade e habilidades analíticas, você pode se tornar um especialista de ponta em campos profissionais como finanças, direito e TI, aderindo aos princípios.",
        es: "Con una fuerte voluntad y habilidades analíticas, puedes convertirte en un experto de primer nivel en campos profesionales como las finanzas, el derecho y la informática, respetando los principios.",
        th: "ด้วยเจตจำนงที่แข็งแกร่งและทักษะการวิเคราะห์ คุณสามารถเป็นผู้เชี่ยวชาญชั้นนำในสาขาวิชาชีพ เช่น การเงิน กฎหมาย และไอที ในขณะที่ยึดมั่นในหลักการ",
        id: "Dengan kemauan yang kuat dan keterampilan analitis, Anda bisa menjadi ahli terkemuka di bidang profesional seperti keuangan, hukum, dan TI sambil berpegang pada prinsip-prinsip."
      },
      moderate: {
        ko: "체계적인 사고와 정확성이 요구되는 회계, 엔지니어링, 데이터 분석 분야에서 능력을 발휘하며 인정을 받습니다.",
        en: "You will be recognized for your abilities in accounting, engineering, and data analysis, which require systematic thinking and accuracy.",
        ja: "体系的な思考と正確さが求められる会計、エンジニアリング、データ分析の分野で、あなたの能力が認められます。",
        fr: "Vous serez reconnu pour vos capacités en comptabilité, en ingénierie et en analyse de données, qui exigent une pensée systématique et de la précision.",
        de: "Sie werden für Ihre Fähigkeiten in den Bereichen Buchhaltung, Ingenieurwesen und Datenanalyse anerkannt, die systematisches Denken und Genauigkeit erfordern.",
        it: "Sarai riconosciuto per le tue abilità in contabilità, ingegneria e analisi dei dati, che richiedono pensiero sistematico e precisione.",
        pt: "Você será reconhecido por suas habilidades em contabilidade, engenharia e análise de dados, que exigem pensamento sistemático e precisão.",
        es: "Serás reconocido por tus habilidades en contabilidad, ingeniería y análisis de datos, que requieren un pensamiento sistemático y precisión.",
        th: "คุณจะได้รับการยอมรับในความสามารถของคุณในด้านการบัญชี วิศวกรรม และการวิเคราะห์ข้อมูล ซึ่งต้องใช้การคิดอย่างเป็นระบบและความแม่นยำ",
        id: "Anda akan diakui atas kemampuan Anda di bidang akuntansi, teknik, dan analisis data, yang membutuhkan pemikiran sistematis dan akurasi."
      },
      weak: {
        ko: "조직의 규칙과 시스템을 잘 따르는 행정직이나 품질 관리 분야에서 안정감을 느끼며 꾸준히 성과를 낼 수 있습니다.",
        en: "You can feel a sense of stability and consistently produce results in administrative or quality control roles that follow organizational rules and systems.",
        ja: "組織のルールやシステムに従う管理職や品質管理の役割で、安定感を感じ、一貫して成果を上げることができます。",
        fr: "Vous pouvez ressentir un sentiment de stabilité et produire des résultats de manière cohérente dans des rôles administratifs ou de contrôle de la qualité qui suivent les règles et les systèmes de l'organisation.",
        de: "Sie können ein Gefühl der Stabilität empfinden und in Verwaltungs- oder Qualitätskontrollrollen, die den organisatorischen Regeln und Systemen folgen, beständig Ergebnisse erzielen.",
        it: "Puoi provare un senso di stabilità e produrre costantemente risultati in ruoli amministrativi o di controllo qualità che seguono le regole e i sistemi organizzativi.",
        pt: "Você pode sentir uma sensação de estabilidade e produzir resultados de forma consistente em funções administrativas ou de controle de qualidade que seguem as regras e os sistemas organizacionais.",
        es: "Puedes sentir una sensación de estabilidad y producir resultados de manera consistente en roles administrativos o de control de calidad que siguen las reglas y sistemas organizacionales.",
        th: "คุณจะรู้สึกถึงความมั่นคงและสร้างผลงานได้อย่างสม่ำเสมอในตำแหน่งธุรการหรือควบคุมคุณภาพที่ปฏิบัติตามกฎและระบบขององค์กร",
        id: "Anda dapat merasakan stabilitas dan secara konsisten menghasilkan hasil dalam peran administratif atau kontrol kualitas yang mengikuti aturan dan sistem organisasi."
      }
    },
    water: {
      strong: {
        ko: "지혜와 통찰력을 활용하는 컨설팅, 전략 기획, 작가 등의 분야에서 자신만의 독창적인 세계를 구축합니다.",
        en: "You will build your own unique world in fields like consulting, strategic planning, and writing, utilizing your wisdom and insight.",
        ja: "コンサルティング、戦略企画、執筆などの分野で、あなたの知恵と洞察力を活かして、独自のユニークな世界を築きます。",
        fr: "Vous construirez votre propre monde unique dans des domaines comme le conseil, la planification stratégique et l'écriture, en utilisant votre sagesse et votre perspicacité.",
        de: "Sie werden Ihre eigene einzigartige Welt in Bereichen wie Beratung, strategische Planung und Schreiben aufbauen und dabei Ihre Weisheit und Einsicht nutzen.",
        it: "Costruirai il tuo mondo unico in campi come la consulenza, la pianificazione strategica e la scrittura, utilizzando la tua saggezza e la tua intuizione.",
        pt: "Você construirá seu próprio mundo único em áreas como consultoria, planejamento estratégico e escrita, utilizando sua sabedoria e percepção.",
        es: "Construirás tu propio mundo único en campos como la consultoría, la planificación estratégica y la escritura, utilizando tu sabiduría y tu perspicacia.",
        th: "คุณจะสร้างโลกที่ไม่เหมือนใครของคุณเองในสาขาต่างๆ เช่น การให้คำปรึกษา การวางแผนเชิงกลยุทธ์ และการเขียน โดยใช้สติปัญญาและข้อมูลเชิงลึกของคุณ",
        id: "Anda akan membangun dunia unik Anda sendiri di bidang-bidang seperti konsultasi, perencanaan strategis, dan penulisan, dengan memanfaatkan kebijaksanaan dan wawasan Anda."
      },
      moderate: {
        ko: "유연한 사고와 뛰어난 소통 능력으로 외교, 무역, HR 등 사람을 상대하는 직업에서 성공할 수 있습니다.",
        en: "With flexible thinking and excellent communication skills, you can succeed in people-oriented professions like diplomacy, trade, and HR.",
        ja: "柔軟な思考と優れたコミュニケーション能力により、外交、貿易、人事など、人と接する職業で成功することができます。",
        fr: "Avec une pensée flexible et d'excellentes compétences en communication, vous pouvez réussir dans des professions axées sur les personnes comme la diplomatie, le commerce et les RH.",
        de: "Mit flexiblem Denken und ausgezeichneten Kommunikationsfähigkeiten können Sie in menschenorientierten Berufen wie Diplomatie, Handel und Personalwesen erfolgreich sein.",
        it: "Con un pensiero flessibile e ottime capacità di comunicazione, puoi avere successo in professioni orientate alle persone come la diplomazia, il commercio e le risorse umane.",
        pt: "Com pensamento flexível e excelentes habilidades de comunicação, você pode ter sucesso em profissões voltadas para pessoas como diplomacia, comércio e RH.",
        es: "Con un pensamiento flexible y excelentes habilidades de comunicación, puedes tener éxito en profesiones orientadas a las personas como la diplomacia, el comercio y los recursos humanos.",
        th: "ด้วยการคิดที่ยืดหยุ่นและทักษะการสื่อสารที่ยอดเยี่ยม คุณสามารถประสบความสำเร็จในอาชีพที่ต้องติดต่อกับผู้คน เช่น การทูต การค้า และทรัพยากรบุคคล",
        id: "Dengan pemikiran yang fleksibel dan keterampilan komunikasi yang sangat baik, Anda dapat berhasil dalam profesi yang berorientasi pada orang seperti diplomasi, perdagangan, dan SDM."
      },
      weak: {
        ko: "자유로운 환경에서 아이디어를 내는 프리랜서나 예술 분야, 혹은 남을 돕는 사회복지 분야에서 만족을 얻습니다.",
        en: "You will find satisfaction in freelance or artistic fields where you can generate ideas in a free environment, or in social work helping others.",
        ja: "自由な環境でアイデアを生み出すフリーランスや芸術分野、あるいは他人を助ける社会福祉の分野で満足感を得られます。",
        fr: "Vous trouverez satisfaction dans des domaines indépendants ou artistiques où vous pouvez générer des idées dans un environnement libre, ou dans le travail social en aidant les autres.",
        de: "Sie werden Zufriedenheit in freiberuflichen oder künstlerischen Bereichen finden, in denen Sie Ideen in einer freien Umgebung entwickeln können, oder in der Sozialarbeit, indem Sie anderen helfen.",
        it: "Troverai soddisfazione in campi freelance o artistici dove puoi generare idee in un ambiente libero, o nel lavoro sociale aiutando gli altri.",
        pt: "Você encontrará satisfação em áreas freelance ou artísticas onde pode gerar ideias em um ambiente livre, ou em trabalho social ajudando os outros.",
        es: "Encontrarás satisfacción en campos freelance o artísticos donde puedes generar ideas en un entorno libre, o en el trabajo social ayudando a otros.",
        th: "คุณจะพบความพึงพอใจในสาขาอาชีพอิสระหรือศิลปะที่คุณสามารถสร้างสรรค์แนวคิดในสภาพแวดล้อมที่อิสระ หรือในงานสังคมสงเคราะห์ที่ช่วยเหลือผู้อื่น",
        id: "Anda akan menemukan kepuasan di bidang freelance atau artistik di mana Anda dapat menghasilkan ide-ide di lingkungan yang bebas, atau dalam pekerjaan sosial membantu orang lain."
      }
    }
  },
  // =================================
  // 2. 사랑 (Love)
  // =================================
  love: {
    wood: {
      strong: {
        ko: "관계를 주도하는 적극적인 스타일이지만, 때로는 자신의 방식을 강요하기보다 상대방의 의견을 존중하는 자세가 필요합니다.",
        en: "You have an active style of leading relationships, but sometimes you need to respect your partner's opinions rather than imposing your own way.",
        ja: "人間関係をリードする積極的なスタイルですが、時には自分のやり方を押し付けるのではなく、パートナーの意見を尊重する必要があります。",
        fr: "Vous avez un style actif pour diriger les relations, mais vous devez parfois respecter les opinions de votre partenaire plutôt que d'imposer votre propre façon de faire.",
        de: "Sie haben einen aktiven Stil, Beziehungen zu führen, aber manchmal müssen Sie die Meinung Ihres Partners respektieren, anstatt Ihren eigenen Weg aufzuzwingen.",
        it: "Hai uno stile attivo nel guidare le relazioni, ma a volte devi rispettare le opinioni del tuo partner piuttosto che imporre il tuo modo di fare.",
        pt: "Você tem um estilo ativo de liderar relacionamentos, mas às vezes precisa respeitar as opiniões do seu parceiro em vez de impor o seu próprio jeito.",
        es: "Tienes un estilo activo para liderar las relaciones, pero a veces necesitas respetar las opiniones de tu pareja en lugar de imponer tu propia forma de ser.",
        th: "คุณมีสไตล์การเป็นผู้นำในความสัมพันธ์ที่กระตือรือร้น แต่บางครั้งคุณต้องเคารพความคิดเห็นของคู่ของคุณแทนที่จะยัดเยียดวิธีการของคุณเอง",
        id: "Anda memiliki gaya aktif dalam memimpin hubungan, tetapi terkadang Anda perlu menghormati pendapat pasangan Anda daripada memaksakan cara Anda sendiri."
      },
      moderate: {
        ko: "함께 성장하는 안정적인 연애를 추구하며, 연인에게 든든한 버팀목이 되어주는 따뜻한 사람입니다.",
        en: "You are a warm person who seeks a stable relationship of mutual growth, becoming a strong pillar of support for your partner.",
        ja: "相互の成長を伴う安定した関係を求める温かい人であり、パートナーにとって強力な支えとなります。",
        fr: "Vous êtes une personne chaleureuse qui recherche une relation stable de croissance mutuelle, devenant un solide pilier de soutien pour votre partenaire.",
        de: "Sie sind eine warmherzige Person, die eine stabile Beziehung des gegenseitigen Wachstums anstrebt und zu einer starken Stütze für Ihren Partner wird.",
        it: "Sei una persona calorosa che cerca una relazione stabile di crescita reciproca, diventando un forte pilastro di sostegno per il tuo partner.",
        pt: "Você é uma pessoa calorosa que busca um relacionamento estável de crescimento mútuo, tornando-se um forte pilar de apoio para seu parceiro.",
        es: "Eres una persona cálida que busca una relación estable de crecimiento mutuo, convirtiéndote en un fuerte pilar de apoyo para tu pareja.",
        th: "คุณเป็นคนอบอุ่นที่แสวงหาความสัมพันธ์ที่มั่นคงของการเติบโตร่วมกัน กลายเป็นเสาหลักที่แข็งแกร่งในการสนับสนุนคู่ของคุณ",
        id: "Anda adalah orang yang hangat yang mencari hubungan yang stabil untuk pertumbuhan bersama, menjadi pilar dukungan yang kuat bagi pasangan Anda."
      },
      weak: {
        ko: "파트너에게 깊은 신뢰와 편안함을 주지만, 때로는 먼저 마음을 표현하는 용기가 관계를 더욱 풍요롭게 만듭니다.",
        en: "You give deep trust and comfort to your partner, but sometimes the courage to express your feelings first will enrich the relationship.",
        ja: "あなたはパートナーに深い信頼と快適さを与えますが、時には最初に自分の気持ちを表現する勇気が関係を豊かにします。",
        fr: "Vous donnez une confiance et un réconfort profonds à votre partenaire, mais parfois, le courage d'exprimer vos sentiments en premier enrichira la relation.",
        de: "Sie geben Ihrem Partner tiefes Vertrauen und Trost, aber manchmal wird der Mut, Ihre Gefühle zuerst auszudrücken, die Beziehung bereichern.",
        it: "Dai profonda fiducia e conforto al tuo partner, ma a volte il coraggio di esprimere prima i tuoi sentimenti arricchirà la relazione.",
        pt: "Você dá profunda confiança e conforto ao seu parceiro, mas às vezes a coragem de expressar seus sentimentos primeiro enriquecerá o relacionamento.",
        es: "Le das a tu pareja una profunda confianza y consuelo, pero a veces el coraje de expresar tus sentimientos primero enriquecerá la relación.",
        th: "คุณให้ความไว้วางใจและความสบายใจอย่างลึกซึ้งแก่คู่ของคุณ แต่บางครั้งความกล้าหาญที่จะแสดงความรู้สึกของคุณออกมาก่อนจะช่วยเสริมสร้างความสัมพันธ์ให้ดียิ่งขึ้น",
        id: "Anda memberikan kepercayaan dan kenyamanan yang mendalam kepada pasangan Anda, tetapi terkadang keberanian untuk mengungkapkan perasaan Anda terlebih dahulu akan memperkaya hubungan."
      }
    },
    fire: {
      strong: {
        ko: "불꽃처럼 뜨겁고 정열적인 사랑을 하지만, 감정 기복이 상대방을 지치게 할 수 있으니 속도를 조절하는 지혜가 필요합니다.",
        en: "You love passionately like a flame, but your emotional fluctuations can tire your partner, so wisdom in controlling your pace is needed.",
        ja: "炎のように情熱的に愛しますが、感情の起伏がパートナーを疲れさせることがあるため、ペースをコントロールする知恵が必要です。",
        fr: "Vous aimez passionnément comme une flamme, mais vos fluctuations émotionnelles peuvent fatiguer votre partenaire, il faut donc de la sagesse pour contrôler votre rythme.",
        de: "Sie lieben leidenschaftlich wie eine Flamme, aber Ihre emotionalen Schwankungen können Ihren Partner ermüden, daher ist Weisheit bei der Kontrolle Ihres Tempos erforderlich.",
        it: "Ami appassionatamente come una fiamma, ma le tue fluttuazioni emotive possono stancare il tuo partner, quindi è necessaria saggezza nel controllare il tuo ritmo.",
        pt: "Você ama apaixonadamente como uma chama, mas suas flutuações emocionais podem cansar seu parceiro, então é necessária sabedoria para controlar seu ritmo.",
        es: "Amas apasionadamente como una llama, pero tus fluctuaciones emocionales pueden cansar a tu pareja, por lo que se necesita sabiduría para controlar tu ritmo.",
        th: "คุณรักอย่างร้อนแรงเหมือนเปลวไฟ แต่ความผันผวนทางอารมณ์ของคุณอาจทำให้คู่ของคุณเหนื่อยได้ ดังนั้นจึงจำเป็นต้องมีสติปัญญาในการควบคุมจังหวะของคุณ",
        id: "Anda mencintai dengan penuh gairah seperti nyala api, tetapi fluktuasi emosi Anda dapat membuat pasangan Anda lelah, jadi diperlukan kebijaksanaan dalam mengontrol kecepatan Anda."
      },
      moderate: {
        ko: "낭만적인 이벤트와 표현을 즐기며 연애에 활기를 불어넣지만, 일상 속의 잔잔한 행복도 소중히 여겨야 합니다.",
        en: "You enjoy romantic events and expressions that vitalize your love life, but you must also cherish the quiet happiness of daily life.",
        ja: "あなたは恋愛生活を活性化させるロマンチックなイベントや表現を楽しみますが、日常生活の静かな幸せも大切にしなければなりません。",
        fr: "Vous appréciez les événements romantiques et les expressions qui dynamisent votre vie amoureuse, mais vous devez également chérir le bonheur tranquille de la vie quotidienne.",
        de: "Sie genießen romantische Ereignisse und Ausdrucksformen, die Ihr Liebesleben beleben, aber Sie müssen auch das stille Glück des täglichen Lebens schätzen.",
        it: "Ti piacciono gli eventi e le espressioni romantiche che vitalizzano la tua vita amorosa, ma devi anche custodire la tranquilla felicità della vita quotidiana.",
        pt: "Você gosta de eventos e expressões românticas que vitalizam sua vida amorosa, mas também deve valorizar a felicidade tranquila da vida diária.",
        es: "Disfrutas de los eventos y expresiones románticas que vitalizan tu vida amorosa, pero también debes apreciar la tranquila felicidad de la vida diaria.",
        th: "คุณสนุกกับกิจกรรมโรแมนติกและการแสดงออกที่ทำให้ชีวิตรักของคุณมีชีวิตชีวา แต่คุณต้องทะนุถนอมความสุขที่เงียบสงบของชีวิตประจำวันด้วย",
        id: "Anda menikmati acara dan ekspresi romantis yang menghidupkan kehidupan cinta Anda, tetapi Anda juga harus menghargai kebahagiaan yang tenang dalam kehidupan sehari-hari."
      },
      weak: {
        ko: "상대방에게 헌신하고 마음을 다하지만, 자신의 에너지가 소진되지 않도록 스스로를 돌보는 시간도 중요합니다.",
        en: "You are devoted and give your all to your partner, but it's also important to take time to care for yourself so your energy isn't depleted.",
        ja: "あなたはパートナーに献身的ですべてを捧げますが、エネルギーを使い果たさないように自分自身の世話をする時間を取ることも重要です。",
        fr: "Vous êtes dévoué et donnez tout à votre partenaire, mais il est également important de prendre du temps pour prendre soin de vous afin que votre énergie ne soit pas épuisée.",
        de: "Sie sind hingebungsvoll und geben alles für Ihren Partner, aber es ist auch wichtig, sich Zeit für sich selbst zu nehmen, damit Ihre Energie nicht erschöpft ist.",
        it: "Sei devoto e dai tutto al tuo partner, ma è anche importante prenderti del tempo per prenderti cura di te stesso in modo che la tua energia non si esaurisca.",
        pt: "Você é dedicado e dá tudo de si ao seu parceiro, mas também é importante reservar um tempo para cuidar de si mesmo para que sua energia não se esgote.",
        es: "Eres devoto y lo das todo a tu pareja, pero también es importante tomarse un tiempo para cuidarse para que tu energía no se agote.",
        th: "คุณทุ่มเทและมอบทุกสิ่งทุกอย่างให้กับคู่ของคุณ แต่ก็สำคัญเช่นกันที่จะต้องใช้เวลาดูแลตัวเองเพื่อไม่ให้พลังงานของคุณหมดไป",
        id: "Anda berbakti dan memberikan segalanya untuk pasangan Anda, tetapi penting juga untuk meluangkan waktu untuk merawat diri sendiri agar energi Anda tidak terkuras."
      }
    },
    earth: {
      strong: {
        ko: "한번 마음을 주면 변치 않는 바위 같은 사랑을 하지만, 가끔은 고집을 내려놓고 새로운 변화를 받아들이는 유연함이 필요합니다.",
        en: "Once you give your heart, your love is steadfast like a rock, but sometimes you need the flexibility to let go of stubbornness and embrace change.",
        ja: "一度心を捧げると、あなたの愛は岩のように揺るぎないものになりますが、時には頑固さを手放し、変化を受け入れる柔軟性が必要です。",
        fr: "Une fois que vous donnez votre cœur, votre amour est constant comme un roc, mais vous avez parfois besoin de la flexibilité de laisser tomber l'entêtement et d'embrasser le changement.",
        de: "Sobald Sie Ihr Herz verschenken, ist Ihre Liebe standhaft wie ein Fels, aber manchmal brauchen Sie die Flexibilität, Sturheit loszulassen und Veränderungen anzunehmen.",
        it: "Una volta che doni il tuo cuore, il tuo amore è saldo come una roccia, ma a volte hai bisogno della flessibilità di lasciar andare l'ostinazione e abbracciare il cambiamento.",
        pt: "Uma vez que você entrega seu coração, seu amor é firme como uma rocha, mas às vezes você precisa da flexibilidade para abandonar a teimosia e abraçar a mudança.",
        es: "Una vez que entregas tu corazón, tu amor es firme como una roca, pero a veces necesitas la flexibilidad para dejar de lado la terquedad y aceptar el cambio.",
        th: "เมื่อคุณมอบหัวใจของคุณแล้ว ความรักของคุณจะมั่นคงเหมือนหิน แต่บางครั้งคุณก็ต้องการความยืดหยุ่นในการปล่อยวางความดื้อรั้นและยอมรับการเปลี่ยนแปลง",
        id: "Begitu Anda memberikan hati Anda, cinta Anda teguh seperti batu karang, tetapi terkadang Anda membutuhkan fleksibilitas untuk melepaskan sifat keras kepala dan menerima perubahan."
      },
      moderate: {
        ko: "성실하고 안정적인 연애를 가장 중요하게 생각하며, 연인에게 깊은 신뢰와 편안함을 주는 배우자감입니다.",
        en: "You prioritize a sincere and stable relationship above all, making you a partner who gives deep trust and comfort.",
        ja: "何よりも誠実で安定した関係を優先し、深い信頼と快適さを与えるパートナーになります。",
        fr: "Vous privilégiez avant tout une relation sincère et stable, ce qui fait de vous un partenaire qui donne une confiance et un réconfort profonds.",
        de: "Sie legen Wert auf eine aufrichtige und stabile Beziehung vor allem anderen und sind ein Partner, der tiefes Vertrauen und Trost spendet.",
        it: "Dai priorità a una relazione sincera e stabile sopra ogni altra cosa, il che ti rende un partner che dà profonda fiducia e conforto.",
        pt: "Você prioriza um relacionamento sincero e estável acima de tudo, tornando-se um parceiro que dá profunda confiança e conforto.",
        es: "Priorizas una relación sincera y estable por encima de todo, lo que te convierte en una pareja que da profunda confianza y consuelo.",
        th: "คุณให้ความสำคัญกับความสัมพันธ์ที่จริงใจและมั่นคงเหนือสิ่งอื่นใด ทำให้คุณเป็นคู่ครองที่ให้ความไว้วางใจและความสบายใจอย่างลึกซึ้ง",
        id: "Anda memprioritaskan hubungan yang tulus dan stabil di atas segalanya, menjadikan Anda pasangan yang memberikan kepercayaan dan kenyamanan yang mendalam."
      },
      weak: {
        ko: "다소 표현이 서툴러 마음이 전달되지 않을 수 있습니다. 작은 행동이나 말로 꾸준히 애정을 보여주는 노력이 필요합니다.",
        en: "Your expressions can be somewhat clumsy, so your feelings may not always get across. Effort is needed to consistently show affection through small actions or words.",
        ja: "あなたの表現はやや不器用なので、あなたの気持ちが常に伝わるとは限りません。小さな行動や言葉で一貫して愛情を示す努力が必要です。",
        fr: "Vos expressions peuvent être un peu maladroites, de sorte que vos sentiments ne passent pas toujours. Des efforts sont nécessaires pour montrer constamment de l'affection par de petites actions ou des mots.",
        de: "Ihre Ausdrucksweise kann etwas unbeholfen sein, sodass Ihre Gefühle möglicherweise nicht immer ankommen. Es sind Anstrengungen erforderlich, um durch kleine Handlungen oder Worte beständig Zuneigung zu zeigen.",
        it: "Le tue espressioni possono essere un po' goffe, quindi i tuoi sentimenti potrebbero non arrivare sempre. È necessario uno sforzo per mostrare costantemente affetto attraverso piccole azioni o parole.",
        pt: "Suas expressões podem ser um tanto desajeitadas, então seus sentimentos nem sempre podem ser transmitidos. É necessário esforço para demonstrar afeto de forma consistente por meio de pequenas ações ou palavras.",
        es: "Tus expresiones pueden ser un poco torpes, por lo que es posible que tus sentimientos no siempre se transmitan. Se necesita esfuerzo para mostrar afecto de manera constante a través de pequeñas acciones o palabras.",
        th: "การแสดงออกของคุณอาจจะดูเงอะงะไปบ้าง ดังนั้นความรู้สึกของคุณอาจจะสื่อไปไม่ถึงเสมอไป ต้องใช้ความพยายามในการแสดงความรักอย่างสม่ำเสมอผ่านการกระทำหรือคำพูดเล็กๆ น้อยๆ",
        id: "Ekspresi Anda bisa agak canggung, sehingga perasaan Anda mungkin tidak selalu tersampaikan. Diperlukan usaha untuk secara konsisten menunjukkan kasih sayang melalui tindakan kecil atau kata-kata."
      }
    },
    metal: {
      strong: {
        ko: "자신만의 원칙이 확고하여 연인에게도 높은 기준을 요구할 수 있습니다. 비판적인 말보다 따뜻한 격려가 관계를 발전시킵니다.",
        en: "Your principles are firm, and you may demand high standards from your partner. Warm encouragement, rather than critical words, will develop the relationship.",
        ja: "あなたの原則は固く、パートナーに高い基準を要求するかもしれません。批判的な言葉ではなく、温かい励ましが関係を発展させます。",
        fr: "Vos principes sont fermes et vous pouvez exiger des normes élevées de votre partenaire. Des encouragements chaleureux, plutôt que des paroles critiques, développeront la relation.",
        de: "Ihre Prinzipien sind fest, und Sie können hohe Anforderungen an Ihren Partner stellen. Warme Ermutigung statt kritischer Worte wird die Beziehung entwickeln.",
        it: "I tuoi principi sono saldi e potresti pretendere standard elevati dal tuo partner. Un incoraggiamento caloroso, piuttosto che parole critiche, svilupperà la relazione.",
        pt: "Seus princípios são firmes e você pode exigir altos padrões de seu parceiro. O incentivo caloroso, em vez de palavras críticas, desenvolverá o relacionamento.",
        es: "Tus principios son firmes y puedes exigir altos estándares a tu pareja. El aliento cálido, en lugar de las palabras críticas, desarrollará la relación.",
        th: "หลักการของคุณมั่นคง และคุณอาจเรียกร้องมาตรฐานที่สูงจากคู่ของคุณ การให้กำลังใจที่อบอุ่นแทนที่จะเป็นคำพูดวิจารณ์จะช่วยพัฒนาความสัมพันธ์",
        id: "Prinsip-prinsip Anda teguh, dan Anda mungkin menuntut standar tinggi dari pasangan Anda. Dorongan hangat, bukan kata-kata kritis, akan mengembangkan hubungan."
      },
      moderate: {
        ko: "이성적이고 합리적인 관계를 선호하며, 갈등이 생겼을 때 감정보다 논리로 해결하려는 경향이 있습니다.",
        en: "You prefer rational and reasonable relationships, and you tend to resolve conflicts with logic rather than emotion.",
        ja: "あなたは合理的で合理的な関係を好み、対立が生じた場合は感情よりも論理で解決する傾向があります。",
        fr: "Vous préférez les relations rationnelles et raisonnables, et vous avez tendance à résoudre les conflits avec la logique plutôt qu'avec l'émotion.",
        de: "Sie bevorzugen rationale und vernünftige Beziehungen und neigen dazu, Konflikte eher mit Logik als mit Emotionen zu lösen.",
        it: "Preferisci relazioni razionali e ragionevoli e tendi a risolvere i conflitti con la logica piuttosto che con le emozioni.",
        pt: "Você prefere relacionamentos racionais e razoáveis e tende a resolver conflitos com lógica em vez de emoção.",
        es: "Prefieres las relaciones racionales y razonables, y tiendes a resolver los conflictos con la lógica en lugar de con la emoción.",
        th: "คุณชอบความสัมพันธ์ที่มีเหตุผลและสมเหตุสมผล และคุณมักจะแก้ไขความขัดแย้งด้วยเหตุผลมากกว่าอารมณ์",
        id: "Anda lebih menyukai hubungan yang rasional dan masuk akal, dan Anda cenderung menyelesaikan konflik dengan logika daripada emosi."
      },
      weak: {
        ko: "상대방에게 상처받는 것을 두려워하여 마음을 여는 데 시간이 걸릴 수 있습니다. 당신의 진심을 알아주는 사람을 기다리는 편입니다.",
        en: "You may take time to open your heart for fear of getting hurt. You tend to wait for someone who recognizes your true feelings.",
        ja: "傷つくことを恐れて心を開くのに時間がかかるかもしれません。あなたは本当の気持ちを認めてくれる人を待つ傾向があります。",
        fr: "Vous pouvez prendre du temps pour ouvrir votre cœur de peur d'être blessé. Vous avez tendance à attendre quelqu'un qui reconnaisse vos vrais sentiments.",
        de: "Es kann eine Weile dauern, bis Sie Ihr Herz aus Angst vor Verletzungen öffnen. Sie neigen dazu, auf jemanden zu warten, der Ihre wahren Gefühle erkennt.",
        it: "Potresti impiegare del tempo per aprire il tuo cuore per paura di essere ferito. Tendi ad aspettare qualcuno che riconosca i tuoi veri sentimenti.",
        pt: "Você pode levar tempo para abrir seu coração por medo de se machucar. Você tende a esperar por alguém que reconheça seus verdadeiros sentimentos.",
        es: "Puedes tardar en abrir tu corazón por miedo a que te hagan daño. Tiendes a esperar a alguien que reconozca tus verdaderos sentimientos.",
        th: "คุณอาจใช้เวลาในการเปิดใจเพราะกลัวว่าจะเจ็บ คุณมักจะรอใครสักคนที่รับรู้ความรู้สึกที่แท้จริงของคุณ",
        id: "Anda mungkin membutuhkan waktu untuk membuka hati karena takut terluka. Anda cenderung menunggu seseorang yang mengenali perasaan Anda yang sebenarnya."
      }
    },
    water: {
      strong: {
        ko: "상대방의 모든 것을 이해하고 받아들이려는 깊은 마음을 가졌지만, 때로는 지나친 생각과 의심이 관계를 힘들게 할 수 있습니다.",
        en: "You have a deep heart that tries to understand and accept everything about your partner, but sometimes overthinking and suspicion can make the relationship difficult.",
        ja: "あなたはパートナーのすべてを理解し、受け入れようとする深い心を持っていますが、考えすぎや疑いが関係を難しくすることがあります。",
        fr: "Vous avez un cœur profond qui essaie de tout comprendre et d'accepter de votre partenaire, mais parfois une réflexion excessive et des soupçons peuvent rendre la relation difficile.",
        de: "Sie haben ein tiefes Herz, das versucht, alles an Ihrem Partner zu verstehen und zu akzeptieren, aber manchmal können übermäßiges Nachdenken und Misstrauen die Beziehung schwierig machen.",
        it: "Hai un cuore profondo che cerca di capire e accettare tutto del tuo partner, ma a volte il pensiero eccessivo e il sospetto possono rendere la relazione difficile.",
        pt: "Você tem um coração profundo que tenta entender e aceitar tudo sobre seu parceiro, mas às vezes o excesso de pensamentos e a desconfiança podem dificultar o relacionamento.",
        es: "Tienes un corazón profundo que trata de entender y aceptar todo sobre tu pareja, pero a veces pensar demasiado y la sospecha pueden dificultar la relación.",
        th: "คุณมีหัวใจที่ลึกซึ้งที่พยายามทำความเข้าใจและยอมรับทุกอย่างเกี่ยวกับคู่ของคุณ แต่บางครั้งการคิดมากและความสงสัยอาจทำให้ความสัมพันธ์ยากลำบาก",
        id: "Anda memiliki hati yang dalam yang mencoba memahami dan menerima segala sesuatu tentang pasangan Anda, tetapi terkadang terlalu banyak berpikir dan kecurigaan dapat membuat hubungan menjadi sulit."
      },
      moderate: {
        ko: "친구처럼 편안하고 지적인 대화가 통하는 연애를 선호하며, 상대방의 개인적인 공간을 존중해주는 사람입니다.",
        en: "You prefer a relationship where you can have comfortable, intelligent conversations like with a friend, and you respect your partner's personal space.",
        ja: "友人のように快適で知的な会話ができる関係を好み、パートナーの個人的なスペースを尊重します。",
        fr: "Vous préférez une relation où vous pouvez avoir des conversations confortables et intelligentes comme avec un ami, et vous respectez l'espace personnel de votre partenaire.",
        de: "Sie bevorzugen eine Beziehung, in der Sie wie mit einem Freund angenehme, intelligente Gespräche führen können, und Sie respektieren den persönlichen Freiraum Ihres Partners.",
        it: "Preferisci una relazione in cui puoi avere conversazioni comode e intelligenti come con un amico e rispetti lo spazio personale del tuo partner.",
        pt: "Você prefere um relacionamento onde possa ter conversas confortáveis e inteligentes como com um amigo, e você respeita o espaço pessoal do seu parceiro.",
        es: "Prefieres una relación en la que puedas tener conversaciones cómodas e inteligentes como con un amigo, y respetas el espacio personal de tu pareja.",
        th: "คุณชอบความสัมพันธ์ที่คุณสามารถสนทนาที่สบายและฉลาดเหมือนกับเพื่อน และคุณเคารพพื้นที่ส่วนตัวของคู่ของคุณ",
        id: "Anda lebih menyukai hubungan di mana Anda dapat melakukan percakapan yang nyaman dan cerdas seperti dengan seorang teman, dan Anda menghormati ruang pribadi pasangan Anda."
      },
      weak: {
        ko: "감성적이고 헌신적이지만, 상대방에게 너무 의존하게 될 수 있습니다. 관계 속에서도 자신의 중심을 지키는 것이 중요합니다.",
        en: "You are emotional and devoted, but you can become too dependent on your partner. It's important to maintain your own center within the relationship.",
        ja: "あなたは感情的で献身的ですが、パートナーに依存しすぎる可能性があります。関係の中で自分自身の中心を維持することが重要です。",
        fr: "Vous êtes émotif et dévoué, mais vous pouvez devenir trop dépendant de votre partenaire. Il est important de conserver votre propre centre au sein de la relation.",
        de: "Sie sind emotional und hingebungsvoll, können aber zu sehr von Ihrem Partner abhängig werden. Es ist wichtig, Ihr eigenes Zentrum innerhalb der Beziehung zu bewahren.",
        it: "Sei emotivo e devoto, ma puoi diventare troppo dipendente dal tuo partner. È importante mantenere il proprio centro all'interno della relazione.",
        pt: "Você é emocional e dedicado, mas pode se tornar muito dependente de seu parceiro. É importante manter seu próprio centro dentro do relacionamento.",
        es: "Eres emocional y devoto, pero puedes volverte demasiado dependiente de tu pareja. Es importante mantener tu propio centro dentro de la relación.",
        th: "คุณเป็นคนเจ้าอารมณ์และทุ่มเท แต่คุณอาจพึ่งพาคู่ของคุณมากเกินไป สิ่งสำคัญคือต้องรักษาความเป็นตัวของตัวเองไว้ในความสัมพันธ์",
        id: "Anda emosional dan berbakti, tetapi Anda bisa menjadi terlalu bergantung pada pasangan Anda. Penting untuk mempertahankan pusat diri Anda sendiri dalam hubungan."
      }
    }
  },
  // =================================
  // 3. 건강 (Health)
  // =================================
  health: {
    wood: {
      strong: {
        ko: "에너지가 넘치지만 스트레스가 간과 담낭에 영향을 줄 수 있습니다. 꾸준한 운동과 취미 생활로 스트레스를 해소하는 것이 중요합니다.",
        en: "You are full of energy, but stress can affect your liver and gallbladder. It's important to relieve stress through regular exercise and hobbies.",
        ja: "あなたはエネルギーに満ちていますが、ストレスが肝臓や胆嚢に影響を与える可能性があります。定期的な運動や趣味を通じてストレスを解消することが重要です。",
        fr: "Vous êtes plein d'énergie, mais le stress peut affecter votre foie et votre vésicule biliaire. Il est important de soulager le stress par des exercices réguliers et des passe-temps.",
        de: "Sie sind voller Energie, aber Stress kann sich auf Ihre Leber und Gallenblase auswirken. Es ist wichtig, Stress durch regelmäßige Bewegung und Hobbys abzubauen.",
        it: "Sei pieno di energia, ma lo stress può influire sul fegato e sulla cistifellea. È importante alleviare lo stress attraverso un regolare esercizio fisico e degli hobby.",
        pt: "Você está cheio de energia, mas o estresse pode afetar seu fígado e vesícula biliar. É importante aliviar o estresse através de exercícios regulares e hobbies.",
        es: "Estás lleno de energía, pero el estrés puede afectar tu hígado y tu vesícula biliar. Es importante aliviar el estrés mediante el ejercicio regular y los pasatiempos.",
        th: "คุณเต็มไปด้วยพลังงาน แต่ความเครียดอาจส่งผลต่อตับและถุงน้ำดีของคุณ สิ่งสำคัญคือต้องคลายความเครียดด้วยการออกกำลังกายเป็นประจำและงานอดิเรก",
        id: "Anda penuh energi, tetapi stres dapat memengaruhi hati dan kantong empedu Anda. Penting untuk menghilangkan stres melalui olahraga teratur dan hobi."
      },
      moderate: {
        ko: "전반적으로 건강하지만, 앉아있는 시간이 길어지면 근육과 관절에 무리가 갈 수 있습니다. 규칙적인 스트레칭이 도움이 됩니다.",
        en: "You are generally healthy, but long periods of sitting can strain your muscles and joints. Regular stretching is helpful.",
        ja: "一般的に健康ですが、長時間座っていると筋肉や関節に負担がかかることがあります。定期的なストレッチが役立ちます。",
        fr: "Vous êtes généralement en bonne santé, mais de longues périodes de sédentarité peuvent fatiguer vos muscles et vos articulations. Des étirements réguliers sont utiles.",
        de: "Sie sind im Allgemeinen gesund, aber langes Sitzen kann Ihre Muskeln und Gelenke belasten. Regelmäßiges Dehnen ist hilfreich.",
        it: "Sei generalmente in buona salute, ma lunghi periodi di seduta possono affaticare i muscoli e le articolazioni. Lo stretching regolare è utile.",
        pt: "Você geralmente é saudável, mas longos períodos sentado podem sobrecarregar seus músculos e articulações. O alongamento regular é útil.",
        es: "Generalmente gozas de buena salud, pero los períodos prolongados de estar sentado pueden forzar los músculos y las articulaciones. El estiramiento regular es útil.",
        th: "โดยทั่วไปคุณมีสุขภาพดี แต่การนั่งเป็นเวลานานอาจทำให้กล้ามเนื้อและข้อต่อของคุณตึงได้ การยืดกล้ามเนื้อเป็นประจำจะมีประโยชน์",
        id: "Anda umumnya sehat, tetapi duduk dalam waktu lama dapat membuat otot dan sendi Anda tegang. Peregangan teratur sangat membantu."
      },
      weak: {
        ko: "에너지 소모가 많은 편은 아니지만, 신경이 예민하여 두통이나 소화 불량이 생기기 쉽습니다. 마음의 안정이 중요합니다.",
        en: "You don't expend a lot of energy, but your sensitive nerves can easily lead to headaches or indigestion. Peace of mind is important.",
        ja: "あなたは多くのエネルギーを消費しませんが、あなたの敏感な神経は頭痛や消化不良に簡単につながる可能性があります。心の安らぎが重要です。",
        fr: "Vous ne dépensez pas beaucoup d'énergie, mais vos nerfs sensibles peuvent facilement entraîner des maux de tête ou une indigestion. La tranquillité d'esprit est importante.",
        de: "Sie verbrauchen nicht viel Energie, aber Ihre empfindlichen Nerven können leicht zu Kopfschmerzen oder Verdauungsstörungen führen. Seelenfrieden ist wichtig.",
        it: "Non consumi molta energia, ma i tuoi nervi sensibili possono facilmente portare a mal di testa o indigestione. La pace della mente è importante.",
        pt: "Você não gasta muita energia, mas seus nervos sensíveis podem facilmente levar a dores de cabeça ou indigestão. A paz de espírito é importante.",
        es: "No gastas mucha energía, pero tus nervios sensibles pueden provocar fácilmente dolores de cabeza o indigestión. La tranquilidad es importante.",
        th: "คุณไม่ได้ใช้พลังงานมากนัก แต่เส้นประสาทที่อ่อนไหวของคุณอาจทำให้ปวดศีรษะหรืออาหารไม่ย่อยได้ง่าย ความสงบของจิตใจเป็นสิ่งสำคัญ",
        id: "Anda tidak mengeluarkan banyak energi, tetapi saraf sensitif Anda dapat dengan mudah menyebabkan sakit kepala atau gangguan pencernaan. Ketenangan pikiran itu penting."
      }
    },
    fire: {
      strong: {
        ko: "항상 에너지가 넘치지만, 심장과 혈압 계통에 부담이 갈 수 있습니다. 주기적인 휴식과 차분한 운동이 건강을 유지하는 열쇠입니다.",
        en: "You are always full of energy, but it can strain your heart and circulatory system. Periodic rest and calm exercise are key to maintaining health.",
        ja: "あなたはいつもエネルギーに満ちていますが、それはあなたの心臓と循環器系に負担をかける可能性があります。定期的な休息と穏やかな運動が健康を維持するための鍵です。",
        fr: "Vous êtes toujours plein d'énergie, mais cela peut fatiguer votre cœur et votre système circulatoire. Un repos périodique et un exercice calme sont la clé pour rester en bonne santé.",
        de: "Sie sind immer voller Energie, aber das kann Ihr Herz und Ihr Kreislaufsystem belasten. Periodische Ruhe und ruhige Bewegung sind der Schlüssel zur Erhaltung der Gesundheit.",
        it: "Sei sempre pieno di energia, ma questo può affaticare il cuore e il sistema circolatorio. Riposo periodico ed esercizio fisico calmo sono la chiave per mantenersi in salute.",
        pt: "Você está sempre cheio de energia, mas isso pode sobrecarregar seu coração e sistema circulatório. O descanso periódico e o exercício calmo são a chave para manter a saúde.",
        es: "Siempre estás lleno de energía, pero esto puede forzar tu corazón y tu sistema circulatorio. El descanso periódico y el ejercicio tranquilo son la clave para mantener la salud.",
        th: "คุณเต็มไปด้วยพลังงานเสมอ แต่ก็อาจทำให้หัวใจและระบบไหลเวียนโลหิตของคุณตึงเครียดได้ การพักผ่อนเป็นระยะและการออกกำลังกายที่สงบเป็นกุญแจสำคัญในการรักษาสุขภาพ",
        id: "Anda selalu penuh energi, tetapi hal itu dapat membebani jantung dan sistem peredaran darah Anda. Istirahat berkala dan olahraga yang tenang adalah kunci untuk menjaga kesehatan."
      },
      moderate: {
        ko: "대체로 건강하지만, 즐거움을 좇다 보면 밤낮이 바뀌는 등 생활 리듬이 깨지기 쉽습니다. 규칙적인 수면 습관이 중요합니다.",
        en: "You are mostly healthy, but in pursuit of pleasure, your daily rhythm can be easily disrupted. Regular sleeping habits are important.",
        ja: "あなたはほとんど健康ですが、楽しみを追求する中で、あなたの毎日のリズムは簡単に乱される可能性があります。規則正しい睡眠習慣が重要です。",
        fr: "Vous êtes généralement en bonne santé, mais à la recherche du plaisir, votre rythme quotidien peut être facilement perturbé. Des habitudes de sommeil régulières sont importantes.",
        de: "Sie sind größtenteils gesund, aber auf der Suche nach Vergnügen kann Ihr Tagesrhythmus leicht gestört werden. Regelmäßige Schlafgewohnheiten sind wichtig.",
        it: "Sei per lo più in salute, ma alla ricerca del piacere, il tuo ritmo quotidiano può essere facilmente interrotto. Abitudini di sonno regolari sono importanti.",
        pt: "Você é majoritariamente saudável, mas em busca do prazer, seu ritmo diário pode ser facilmente interrompido. Hábitos de sono regulares são importantes.",
        es: "Generalmente gozas de buena salud, pero en la búsqueda del placer, tu ritmo diario puede verse fácilmente alterado. Los hábitos de sueño regulares son importantes.",
        th: "โดยทั่วไปคุณมีสุขภาพดี แต่ในการแสวงหาความสุข จังหวะชีวิตประจำวันของคุณอาจหยุดชะงักได้ง่าย การนอนหลับอย่างสม่ำเสมอเป็นสิ่งสำคัญ",
        id: "Anda sebagian besar sehat, tetapi dalam mengejar kesenangan, ritme harian Anda dapat dengan mudah terganggu. Kebiasaan tidur yang teratur itu penting."
      },
      weak: {
        ko: "기운이 쉽게 소진되어 무기력감을 느낄 수 있습니다. 심장에 부담을 주지 않는 가벼운 산책과 충분한 휴식이 필요합니다.",
        en: "Your energy can be easily depleted, leaving you feeling lethargic. Light walks that don't strain the heart and ample rest are necessary.",
        ja: "あなたのエネルギーは簡単に枯渇し、無気力に感じることがあります。心臓に負担をかけない軽い散歩と十分な休息が必要です。",
        fr: "Votre énergie peut être facilement épuisée, vous laissant léthargique. Des promenades légères qui ne fatiguent pas le cœur et un repos suffisant sont nécessaires.",
        de: "Ihre Energie kann leicht erschöpft sein, sodass Sie sich lethargisch fühlen. Leichte Spaziergänge, die das Herz nicht belasten, und ausreichend Ruhe sind notwendig.",
        it: "La tua energia può essere facilmente esaurita, lasciandoti letargico. Sono necessarie passeggiate leggere che non affatichino il cuore e un ampio riposo.",
        pt: "Sua energia pode se esgotar facilmente, deixando você letárgico. Caminhadas leves que não sobrecarregam o coração e descanso amplo são necessários.",
        es: "Tu energía puede agotarse fácilmente, dejándote letárgico. Son necesarias caminatas ligeras que no fuercen el corazón y un amplio descanso.",
        th: "พลังงานของคุณอาจหมดลงได้ง่าย ทำให้คุณรู้สึกเซื่องซึม การเดินเบาๆ ที่ไม่ทำให้หัวใจทำงานหนักและการพักผ่อนอย่างเพียงพอเป็นสิ่งจำเป็น",
        id: "Energi Anda dapat dengan mudah terkuras, membuat Anda merasa lesu. Jalan santai yang tidak membebani jantung dan istirahat yang cukup sangat diperlukan."
      }
    },
    earth: {
      strong: {
        ko: "체력은 좋으나, 한번 살이 찌면 잘 빠지지 않는 체질일 수 있습니다. 소화기(위, 비장) 건강에 유의하고 과식을 피해야 합니다.",
        en: "You have good stamina, but you may have a constitution where it's hard to lose weight once gained. Pay attention to digestive health (stomach, spleen) and avoid overeating.",
        ja: "あなたは体力がありますが、一度太ると痩せにくい体質かもしれません。消化器の健康（胃、脾臓）に注意し、過食を避けてください。",
        fr: "Vous avez une bonne endurance, mais vous pouvez avoir une constitution où il est difficile de perdre du poids une fois pris. Faites attention à la santé digestive (estomac, rate) et évitez de trop manger.",
        de: "Sie haben eine gute Ausdauer, aber Sie haben möglicherweise eine Konstitution, bei der es schwierig ist, einmal zugenommenes Gewicht wieder zu verlieren. Achten Sie auf die Gesundheit der Verdauung (Magen, Milz) und vermeiden Sie übermäßiges Essen.",
        it: "Hai una buona resistenza, ma potresti avere una costituzione in cui è difficile perdere peso una volta acquisito. Presta attenzione alla salute dell'apparato digerente (stomaco, milza) ed evita di mangiare troppo.",
        pt: "Você tem boa resistência, mas pode ter uma constituição em que é difícil perder peso depois de ganho. Preste atenção à saúde digestiva (estômago, baço) e evite comer demais.",
        es: "Tienes buena resistencia, pero puedes tener una constitución en la que es difícil perder peso una vez que se ha ganado. Presta atención a la salud digestiva (estómago, bazo) y evita comer en exceso.",
        th: "คุณมีความแข็งแกร่งที่ดี แต่คุณอาจมีร่างกายที่ลดน้ำหนักได้ยากเมื่อน้ำหนักขึ้นแล้ว ให้ใส่ใจสุขภาพทางเดินอาหาร (กระเพาะอาหาร ม้าม) และหลีกเลี่ยงการกินมากเกินไป",
        id: "Anda memiliki stamina yang baik, tetapi Anda mungkin memiliki konstitusi di mana sulit untuk menurunkan berat badan setelah naik. Perhatikan kesehatan pencernaan (lambung, limpa) dan hindari makan berlebihan."
      },
      moderate: {
        ko: "안정적인 건강 상태를 유지하지만, 스트레스가 쌓이면 소화 기능이 가장 먼저 약해질 수 있습니다. 규칙적인 식사가 중요합니다.",
        en: "You maintain a stable state of health, but when stress accumulates, your digestive function may be the first to weaken. Regular meals are important.",
        ja: "あなたは安定した健康状態を維持しますが、ストレスが蓄積すると、あなたの消化機能が最初に弱まる可能性があります。規則正しい食事が重要です。",
        fr: "Vous maintenez un état de santé stable, mais lorsque le stress s'accumule, votre fonction digestive peut être la première à s'affaiblir. Des repas réguliers sont importants.",
        de: "Sie erhalten einen stabilen Gesundheitszustand, aber wenn sich Stress ansammelt, kann Ihre Verdauungsfunktion als erste schwächer werden. Regelmäßige Mahlzeiten sind wichtig.",
        it: "Mantieni uno stato di salute stabile, ma quando lo stress si accumula, la tua funzione digestiva potrebbe essere la prima a indebolirsi. I pasti regolari sono importanti.",
        pt: "Você mantém um estado de saúde estável, mas quando o estresse se acumula, sua função digestiva pode ser a primeira a enfraquecer. Refeições regulares são importantes.",
        es: "Mantienes un estado de salud estable, pero cuando el estrés se acumula, tu función digestiva puede ser la primera en debilitarse. Las comidas regulares son importantes.",
        th: "คุณรักษาสถานะสุขภาพที่มั่นคง แต่เมื่อความเครียดสะสม การทำงานของระบบย่อยอาหารของคุณอาจอ่อนแอลงเป็นอันดับแรก การรับประทานอาหารอย่างสม่ำเสมอเป็นสิ่งสำคัญ",
        id: "Anda mempertahankan kondisi kesehatan yang stabil, tetapi ketika stres menumpuk, fungsi pencernaan Anda mungkin menjadi yang pertama melemah. Makan teratur itu penting."
      },
      weak: {
        ko: "몸이 차가워지기 쉽고 소화 기능이 약할 수 있습니다. 항상 몸을 따뜻하게 하고, 소화가 잘되는 음식을 섭취하는 것이 좋습니다.",
        en: "Your body can get cold easily, and your digestive function may be weak. It's good to always keep your body warm and eat easily digestible foods.",
        ja: "あなたの体は冷えやすく、消化機能が弱いかもしれません。常に体を温め、消化しやすい食べ物を食べることが良いでしょう。",
        fr: "Votre corps peut se refroidir facilement et votre fonction digestive peut être faible. Il est bon de toujours garder votre corps au chaud et de manger des aliments faciles à digérer.",
        de: "Ihr Körper kann leicht auskühlen und Ihre Verdauungsfunktion kann schwach sein. Es ist gut, Ihren Körper immer warm zu halten und leicht verdauliche Lebensmittel zu essen.",
        it: "Il tuo corpo può raffreddarsi facilmente e la tua funzione digestiva potrebbe essere debole. È bene tenere sempre il corpo al caldo e mangiare cibi facilmente digeribili.",
        pt: "Seu corpo pode esfriar facilmente e sua função digestiva pode ser fraca. É bom sempre manter seu corpo aquecido e comer alimentos de fácil digestão.",
        es: "Tu cuerpo puede enfriarse fácilmente y tu función digestiva puede ser débil. Es bueno mantener siempre tu cuerpo caliente y comer alimentos fáciles de digerir.",
        th: "ร่างกายของคุณอาจเย็นได้ง่าย และการทำงานของระบบย่อยอาหารของคุณอาจอ่อนแอ เป็นการดีที่จะทำให้ร่างกายอบอุ่นอยู่เสมอและรับประทานอาหารที่ย่อยง่าย",
        id: "Tubuh Anda bisa mudah kedinginan, dan fungsi pencernaan Anda mungkin lemah. Sebaiknya selalu jaga kehangatan tubuh Anda dan makan makanan yang mudah dicerna."
      }
    },
    metal: {
      strong: {
        ko: "체력과 정신력이 강하지만, 건조한 기운으로 인해 호흡기(폐, 대장)가 약해지기 쉽습니다. 물을 자주 마시는 습관이 중요합니다.",
        en: "You have strong physical and mental strength, but your respiratory system (lungs, large intestine) can be weakened by dry energy. The habit of drinking water frequently is important.",
        ja: "あなたは肉体的にも精神的にも強いですが、乾燥したエネルギーによって呼吸器系（肺、大腸）が弱くなる可能性があります。頻繁に水を飲む習慣が重要です。",
        fr: "Vous avez une forte force physique et mentale, mais votre système respiratoire (poumons, gros intestin) peut être affaibli par l'énergie sèche. L'habitude de boire de l'eau fréquemment est importante.",
        de: "Sie haben eine starke körperliche und geistige Stärke, aber Ihr Atmungssystem (Lunge, Dickdarm) kann durch trockene Energie geschwächt werden. Die Gewohnheit, häufig Wasser zu trinken, ist wichtig.",
        it: "Hai una forte forza fisica e mentale, ma il tuo sistema respiratorio (polmoni, intestino crasso) può essere indebolito dall'energia secca. L'abitudine di bere acqua frequentemente è importante.",
        pt: "Você tem forte força física e mental, mas seu sistema respiratório (pulmões, intestino grosso) pode ser enfraquecido pela energia seca. O hábito de beber água com frequência é importante.",
        es: "Tienes una gran fuerza física y mental, pero tu sistema respiratorio (pulmones, intestino grueso) puede debilitarse por la energía seca. El hábito de beber agua con frecuencia es importante.",
        th: "คุณมีความแข็งแกร่งทางร่างกายและจิตใจ แต่ระบบทางเดินหายใจของคุณ (ปอด, ลำไส้ใหญ่) อาจอ่อนแอลงได้จากพลังงานแห้ง การดื่มน้ำบ่อยๆ เป็นสิ่งสำคัญ",
        id: "Anda memiliki kekuatan fisik dan mental yang kuat, tetapi sistem pernapasan Anda (paru-paru, usus besar) dapat dilemahkan oleh energi kering. Kebiasaan sering minum air putih itu penting."
      },
      moderate: {
        ko: "대체로 건강하지만, 완벽주의적인 성향이 자신을 압박하여 신경성 질환을 유발할 수 있습니다. 의식적인 휴식이 필요합니다.",
        en: "You are generally healthy, but your perfectionist tendencies can pressure you and cause nervous system disorders. Conscious relaxation is necessary.",
        ja: "あなたは概して健康ですが、あなたの完璧主義の傾向があなたにプレッシャーをかけ、神経系の障害を引き起こす可能性があります。意識的なリラクゼーションが必要です。",
        fr: "Vous êtes généralement en bonne santé, mais vos tendances perfectionnistes peuvent vous mettre la pression et provoquer des troubles du système nerveux. Une relaxation consciente est nécessaire.",
        de: "Sie sind im Allgemeinen gesund, aber Ihre perfektionistischen Tendenzen können Sie unter Druck setzen und zu Störungen des Nervensystems führen. Bewusste Entspannung ist notwendig.",
        it: "Sei generalmente in buona salute, ma le tue tendenze perfezioniste possono metterti sotto pressione e causare disturbi del sistema nervoso. È necessario un rilassamento consapevole.",
        pt: "Você geralmente é saudável, mas suas tendências perfeccionistas podem pressioná-lo e causar distúrbios do sistema nervoso. O relaxamento consciente é necessário.",
        es: "Generalmente gozas de buena salud, pero tus tendencias perfeccionistas pueden presionarte y causar trastornos del sistema nervioso. Es necesaria una relajación consciente.",
        th: "โดยทั่วไปคุณมีสุขภาพดี แต่แนวโน้มที่สมบูรณ์แบบของคุณอาจกดดันคุณและทำให้เกิดความผิดปกติของระบบประสาทได้ การผ่อนคลายอย่างมีสติเป็นสิ่งจำเป็น",
        id: "Anda umumnya sehat, tetapi kecenderungan perfeksionis Anda dapat menekan Anda dan menyebabkan gangguan sistem saraf. Relaksasi sadar diperlukan."
      },
      weak: {
        ko: "피부가 민감하고 호흡기가 약할 수 있습니다. 맑은 공기를 자주 쐬고, 적절한 습도를 유지하는 것이 건강에 도움이 됩니다.",
        en: "Your skin may be sensitive and your respiratory system weak. Getting fresh air often and maintaining proper humidity will benefit your health.",
        ja: "あなたの肌は敏感で、呼吸器系が弱いかもしれません。頻繁に新鮮な空気を吸い、適切な湿度を維持することがあなたの健康に役立ちます。",
        fr: "Votre peau peut être sensible et votre système respiratoire faible. Prendre l'air frais souvent et maintenir une humidité adéquate sera bénéfique pour votre santé.",
        de: "Ihre Haut kann empfindlich und Ihr Atmungssystem schwach sein. Oft frische Luft zu schnappen und die richtige Luftfeuchtigkeit aufrechtzuerhalten, wird Ihrer Gesundheit zugute kommen.",
        it: "La tua pelle potrebbe essere sensibile e il tuo sistema respiratorio debole. Prendere spesso aria fresca e mantenere un'umidità adeguata gioverà alla tua salute.",
        pt: "Sua pele pode ser sensível e seu sistema respiratório fraco. Tomar ar fresco com frequência e manter a umidade adequada beneficiará sua saúde.",
        es: "Tu piel puede ser sensible y tu sistema respiratorio débil. Tomar aire fresco con frecuencia y mantener una humedad adecuada beneficiará tu salud.",
        th: "ผิวของคุณอาจแพ้ง่ายและระบบทางเดินหายใจของคุณอ่อนแอ การได้รับอากาศบริสุทธิ์บ่อยๆ และรักษาระดับความชื้นที่เหมาะสมจะเป็นประโยชน์ต่อสุขภาพของคุณ",
        id: "Kulit Anda mungkin sensitif dan sistem pernapasan Anda lemah. Sering menghirup udara segar dan menjaga kelembapan yang tepat akan bermanfaat bagi kesehatan Anda."
      }
    },
    water: {
      strong: {
        ko: "정신력은 강하지만, 몸이 차가워지기 쉬워 신장과 방광 기능에 주의가 필요합니다. 몸을 따뜻하게 유지하는 것이 핵심입니다.",
        en: "You have strong mental power, but your body can get cold easily, requiring attention to kidney and bladder function. Keeping your body warm is key.",
        ja: "あなたは強い精神力を持っていますが、あなたの体は冷えやすく、腎臓と膀胱の機能に注意が必要です。体を温かく保つことが鍵です。",
        fr: "Vous avez une grande force mentale, mais votre corps peut se refroidir facilement, ce qui nécessite une attention particulière à la fonction rénale et vésicale. Garder votre corps au chaud est la clé.",
        de: "Sie haben eine starke mentale Kraft, aber Ihr Körper kann leicht auskühlen, was Aufmerksamkeit für die Nieren- und Blasenfunktion erfordert. Ihren Körper warm zu halten ist der Schlüssel.",
        it: "Hai una forte potenza mentale, ma il tuo corpo può raffreddarsi facilmente, richiedendo attenzione alla funzione di reni e vescica. Mantenere il corpo caldo è la chiave.",
        pt: "Você tem um forte poder mental, mas seu corpo pode esfriar facilmente, exigindo atenção à função renal e da bexiga. Manter seu corpo aquecido é a chave.",
        es: "Tienes un gran poder mental, pero tu cuerpo puede enfriarse fácilmente, lo que requiere atención a la función renal y de la vejiga. Mantener tu cuerpo caliente es la clave.",
        th: "คุณมีพลังจิตที่แข็งแกร่ง แต่ร่างกายของคุณอาจเย็นได้ง่าย ซึ่งต้องให้ความสนใจกับการทำงานของไตและกระเพาะปัสสาวะ การทำให้ร่างกายอบอุ่นเป็นกุญแจสำคัญ",
        id: "Anda memiliki kekuatan mental yang kuat, tetapi tubuh Anda bisa mudah kedinginan, sehingga memerlukan perhatian pada fungsi ginjal dan kandung kemih. Menjaga tubuh Anda tetap hangat adalah kuncinya."
      },
      moderate: {
        ko: "유연한 신체를 가졌지만, 감정의 변화가 몸의 컨디션에 영향을 주기 쉽습니다. 긍정적인 마음을 유지하는 것이 중요합니다.",
        en: "You have a flexible body, but emotional changes can easily affect your physical condition. Maintaining a positive mindset is important.",
        ja: "あなたは柔軟な体を持っていますが、感情の変化があなたの体調に簡単に影響を与える可能性があります。前向きな考え方を維持することが重要です。",
        fr: "Vous avez un corps souple, mais les changements émotionnels peuvent facilement affecter votre condition physique. Il est important de maintenir un état d'esprit positif.",
        de: "Sie haben einen flexiblen Körper, aber emotionale Veränderungen können sich leicht auf Ihre körperliche Verfassung auswirken. Eine positive Einstellung zu bewahren ist wichtig.",
        it: "Hai un corpo flessibile, ma i cambiamenti emotivi possono facilmente influenzare la tua condizione fisica. Mantenere una mentalità positiva è importante.",
        pt: "Você tem um corpo flexível, mas as mudanças emocionais podem afetar facilmente sua condição física. Manter uma mentalidade positiva é importante.",
        es: "Tienes un cuerpo flexible, pero los cambios emocionales pueden afectar fácilmente tu condición física. Mantener una mentalidad positiva es importante.",
        th: "คุณมีร่างกายที่ยืดหยุ่น แต่การเปลี่ยนแปลงทางอารมณ์อาจส่งผลต่อสภาพร่างกายของคุณได้ง่าย การรักษาทัศนคติเชิงบวกเป็นสิ่งสำคัญ",
        id: "Anda memiliki tubuh yang fleksibel, tetapi perubahan emosional dapat dengan mudah memengaruhi kondisi fisik Anda. Menjaga pola pikir positif itu penting."
      },
      weak: {
        ko: "전반적으로 기력이 약하고 몸이 차가워지기 쉽습니다. 충분한 수면과 휴식, 그리고 몸을 따뜻하게 하는 음식이 보약입니다.",
        en: "Overall, your energy is weak and your body gets cold easily. Sufficient sleep and rest, along with foods that warm the body, are your best medicine.",
        ja: "全体的に、あなたのエネルギーは弱く、体は冷えやすいです。十分な睡眠と休息、そして体を温める食べ物があなたの最善の薬です。",
        fr: "Dans l'ensemble, votre énergie est faible et votre corps se refroidit facilement. Un sommeil et un repos suffisants, ainsi que des aliments qui réchauffent le corps, sont votre meilleur remède.",
        de: "Insgesamt ist Ihre Energie schwach und Ihr Körper wird leicht kalt. Ausreichend Schlaf und Ruhe sowie Lebensmittel, die den Körper wärmen, sind Ihre beste Medizin.",
        it: "In generale, la tua energia è debole e il tuo corpo si raffredda facilmente. Un sonno e un riposo sufficienti, insieme a cibi che riscaldano il corpo, sono la tua migliore medicina.",
        pt: "No geral, sua energia é fraca e seu corpo esfria facilmente. Sono e descanso suficientes, juntamente com alimentos que aquecem o corpo, são o seu melhor remédio.",
        es: "En general, tu energía es débil y tu cuerpo se enfría fácilmente. Dormir y descansar lo suficiente, junto con alimentos que calientan el cuerpo, son tu mejor medicina.",
        th: "โดยรวมแล้ว พลังงานของคุณอ่อนแอและร่างกายของคุณเย็นลงได้ง่าย การนอนหลับพักผ่อนอย่างเพียงพอ ควบคู่ไปกับอาหารที่ทำให้ร่างกายอบอุ่น เป็นยาที่ดีที่สุดของคุณ",
        id: "Secara keseluruhan, energi Anda lemah dan tubuh Anda mudah kedinginan. Tidur dan istirahat yang cukup, bersama dengan makanan yang menghangatkan tubuh, adalah obat terbaik Anda."
      }
    }
  },
  // =================================
  // 4. 재물 (Wealth)
  // =================================
  wealth: {
    wood: {
      strong: {
        ko: "새로운 사업이나 도전을 통해 큰 재물을 얻을 수 있는 잠재력이 있습니다. 다만, 지나친 확장은 금물이며 안정적인 관리가 필요합니다.",
        en: "You have the potential to gain great wealth through new businesses or challenges. However, excessive expansion is ill-advised, and stable management is necessary.",
        ja: "新しい事業や挑戦を通じて大きな富を得る可能性があります。ただし、過度の拡大は賢明ではなく、安定した管理が必要です。",
        fr: "Vous avez le potentiel de gagner une grande richesse grâce à de nouvelles entreprises ou de nouveaux défis. Cependant, une expansion excessive est déconseillée et une gestion stable est nécessaire.",
        de: "Sie haben das Potenzial, durch neue Unternehmen oder Herausforderungen großen Reichtum zu erlangen. Eine übermäßige Expansion ist jedoch nicht ratsam, und ein stabiles Management ist erforderlich.",
        it: "Hai il potenziale per ottenere una grande ricchezza attraverso nuove attività o sfide. Tuttavia, un'espansione eccessiva è sconsigliata ed è necessaria una gestione stabile.",
        pt: "Você tem o potencial de ganhar grande riqueza através de novos negócios ou desafios. No entanto, a expansão excessiva é desaconselhável e é necessária uma gestão estável.",
        es: "Tienes el potencial de obtener una gran riqueza a través de nuevos negocios o desafíos. Sin embargo, la expansión excesiva no es aconsejable y se necesita una gestión estable.",
        th: "คุณมีศักยภาพที่จะได้รับความมั่งคั่งมหาศาลผ่านธุรกิจใหม่หรือความท้าทาย อย่างไรก็ตาม การขยายตัวมากเกินไปนั้นไม่แนะนำ และจำเป็นต้องมีการจัดการที่มั่นคง",
        id: "Anda memiliki potensi untuk memperoleh kekayaan besar melalui bisnis atau tantangan baru. Namun, ekspansi yang berlebihan tidak dianjurkan, dan manajemen yang stabil diperlukan."
      },
      moderate: {
        ko: "꾸준한 저축과 장기적인 안목의 투자가 당신의 재산을 안정적으로 늘려줍니다. 부동산이나 가치주 투자가 잘 맞습니다.",
        en: "Steady savings and long-term investments will stably increase your wealth. Real estate or value stock investments are a good fit for you.",
        ja: "着実な貯蓄と長期的な投資があなたの富を安定的に増やします。不動産やバリュー株への投資があなたに適しています。",
        fr: "Des économies régulières et des investissements à long terme augmenteront de manière stable votre patrimoine. Les investissements immobiliers ou en actions de valeur vous conviennent bien.",
        de: "Stetige Ersparnisse und langfristige Investitionen werden Ihr Vermögen stabil vermehren. Immobilien- oder Value-Aktienanlagen passen gut zu Ihnen.",
        it: "Risparmi costanti e investimenti a lungo termine aumenteranno stabilmente la tua ricchezza. Gli investimenti immobiliari o in azioni di valore sono adatti a te.",
        pt: "Poupanças constantes e investimentos de longo prazo aumentarão de forma estável sua riqueza. Investimentos em imóveis ou ações de valor são uma boa opção para você.",
        es: "Los ahorros constantes y las inversiones a largo plazo aumentarán de manera estable tu riqueza. Las inversiones en bienes raíces o en acciones de valor son una buena opción para ti.",
        th: "การออมอย่างสม่ำเสมอและการลงทุนระยะยาวจะช่วยเพิ่มความมั่งคั่งของคุณอย่างมั่นคง การลงทุนในอสังหาริมทรัพย์หรือหุ้นคุณค่าเป็นทางเลือกที่ดีสำหรับคุณ",
        id: "Tabungan yang stabil dan investasi jangka panjang akan secara stabil meningkatkan kekayaan Anda. Investasi real estat atau saham bernilai cocok untuk Anda."
      },
      weak: {
        ko: "큰돈을 한 번에 벌기보다는, 안정적인 수입원을 확보하고 지출을 관리하는 것이 부를 쌓는 가장 확실한 방법입니다.",
        en: "Rather than earning a large sum at once, securing a stable source of income and managing expenses is the surest way to build wealth.",
        ja: "一度に大金を稼ぐのではなく、安定した収入源を確保し、支出を管理することが、富を築く最も確実な方法です。",
        fr: "Plutôt que de gagner une grosse somme d'un coup, s'assurer une source de revenus stable et gérer ses dépenses est le moyen le plus sûr de s'enrichir.",
        de: "Anstatt auf einmal eine große Summe zu verdienen, ist die Sicherung einer stabilen Einkommensquelle und die Verwaltung der Ausgaben der sicherste Weg, um Wohlstand aufzubauen.",
        it: "Piuttosto che guadagnare una grossa somma in una volta, assicurarsi una fonte di reddito stabile e gestire le spese è il modo più sicuro per costruire ricchezza.",
        pt: "Em vez de ganhar uma grande quantia de uma vez, garantir uma fonte de renda estável e gerenciar as despesas é a maneira mais segura de construir riqueza.",
        es: "En lugar de ganar una gran suma de una vez, asegurar una fuente de ingresos estable y administrar los gastos es la forma más segura de acumular riqueza.",
        th: "แทนที่จะหารายได้จำนวนมากในคราวเดียว การมีแหล่งรายได้ที่มั่นคงและจัดการค่าใช้จ่ายเป็นวิธีที่แน่นอนที่สุดในการสร้างความมั่งคั่ง",
        id: "Daripada menghasilkan sejumlah besar uang sekaligus, mengamankan sumber pendapatan yang stabil dan mengelola pengeluaran adalah cara paling pasti untuk membangun kekayaan."
      }
    },
    fire: {
      strong: {
        ko: "강한 추진력으로 단기간에 큰 재물을 얻을 수 있으나, 감정적인 소비나 투자는 경계해야 합니다. 계획적인 지출이 부를 지켜줍니다.",
        en: "You can gain great wealth in a short period with your strong drive, but you must be wary of emotional spending or investments. Planned expenditures will protect your wealth.",
        ja: "あなたは強い意欲で短期間で大きな富を得ることができますが、感情的な支出や投資には注意しなければなりません。計画的な支出があなたの富を守ります。",
        fr: "Vous pouvez gagner une grande richesse en peu de temps grâce à votre forte motivation, mais vous devez vous méfier des dépenses ou des investissements émotionnels. Des dépenses planifiées protégeront votre patrimoine.",
        de: "Sie können mit Ihrem starken Antrieb in kurzer Zeit großen Reichtum erlangen, müssen sich aber vor emotionalen Ausgaben oder Investitionen hüten. Geplante Ausgaben werden Ihr Vermögen schützen.",
        it: "Puoi ottenere una grande ricchezza in un breve periodo con la tua forte spinta, ma devi diffidare di spese o investimenti emotivi. Le spese pianificate proteggeranno la tua ricchezza.",
        pt: "Você pode ganhar grande riqueza em um curto período com seu forte impulso, mas deve ter cuidado com gastos ou investimentos emocionais. Despesas planejadas protegerão sua riqueza.",
        es: "Puedes obtener una gran riqueza en un corto período con tu fuerte impulso, pero debes tener cuidado con los gastos o las inversiones emocionales. Los gastos planificados protegerán tu riqueza.",
        th: "คุณสามารถได้รับความมั่งคั่งมหาศาลในระยะเวลาอันสั้นด้วยแรงผลักดันที่แข็งแกร่งของคุณ แต่คุณต้องระวังการใช้จ่ายหรือการลงทุนตามอารมณ์ การใช้จ่ายตามแผนจะช่วยปกป้องความมั่งคั่งของคุณ",
        id: "Anda dapat memperoleh kekayaan besar dalam waktu singkat dengan dorongan kuat Anda, tetapi Anda harus waspada terhadap pengeluaran atau investasi emosional. Pengeluaran yang terencana akan melindungi kekayaan Anda."
      },
      moderate: {
        ko: "자신의 재능과 인기를 활용하여 부를 창출할 수 있습니다. 명성을 얻으면 돈은 자연스럽게 따라오는 유형입니다.",
        en: "You can create wealth by utilizing your talents and popularity. You are the type for whom money naturally follows once fame is achieved.",
        ja: "あなたは自分の才能と人気を活用して富を築くことができます。名声を得れば、お金は自然についてくるタイプです。",
        fr: "Vous pouvez créer de la richesse en utilisant vos talents et votre popularité. Vous êtes du genre pour qui l'argent suit naturellement une fois la célébrité atteinte.",
        de: "Sie können Wohlstand schaffen, indem Sie Ihre Talente und Ihre Popularität nutzen. Sie sind der Typ, bei dem Geld von Natur aus folgt, sobald Ruhm erreicht ist.",
        it: "Puoi creare ricchezza utilizzando i tuoi talenti e la tua popolarità. Sei il tipo per cui il denaro segue naturalmente una volta raggiunta la fama.",
        pt: "Você pode criar riqueza utilizando seus talentos e popularidade. Você é do tipo para quem o dinheiro segue naturalmente uma vez que a fama é alcançada.",
        es: "Puedes crear riqueza utilizando tus talentos y tu popularidad. Eres del tipo para quien el dinero sigue naturalmente una vez que se alcanza la fama.",
        th: "คุณสามารถสร้างความมั่งคั่งได้โดยใช้ความสามารถและความนิยมของคุณ คุณเป็นประเภทที่เงินทองจะตามมาเองเมื่อมีชื่อเสียง",
        id: "Anda dapat menciptakan kekayaan dengan memanfaatkan bakat dan popularitas Anda. Anda adalah tipe orang yang uangnya akan mengikuti secara alami begitu ketenaran tercapai."
      },
      weak: {
        ko: "씀씀이가 헤퍼 돈이 모이지 않을 수 있습니다. 수입과 지출을 기록하고, 소비 습관을 점검하는 것이 가장 중요합니다.",
        en: "Your spending can be lavish, making it difficult to accumulate money. The most important thing is to record your income and expenses and review your spending habits.",
        ja: "あなたの支出は贅沢で、お金を貯めるのが難しいかもしれません。最も重要なことは、収入と支出を記録し、支出習慣を見直すことです。",
        fr: "Vos dépenses peuvent être somptueuses, ce qui rend difficile l'accumulation d'argent. La chose la plus importante est d'enregistrer vos revenus et vos dépenses et de revoir vos habitudes de consommation.",
        de: "Ihre Ausgaben können verschwenderisch sein, was es schwierig macht, Geld anzuhäufen. Das Wichtigste ist, Ihre Einnahmen und Ausgaben aufzuzeichnen und Ihre Ausgabengewohnheiten zu überprüfen.",
        it: "Le tue spese possono essere sontuose, rendendo difficile accumulare denaro. La cosa più importante è registrare le tue entrate e le tue uscite e rivedere le tue abitudini di spesa.",
        pt: "Seus gastos podem ser generosos, dificultando a acumulação de dinheiro. O mais importante é registrar suas receitas e despesas e revisar seus hábitos de consumo.",
        es: "Tus gastos pueden ser excesivos, lo que dificulta la acumulación de dinero. Lo más importante es registrar tus ingresos y gastos y revisar tus hábitos de consumo.",
        th: "การใช้จ่ายของคุณอาจฟุ่มเฟือย ทำให้ยากต่อการสะสมเงิน สิ่งที่สำคัญที่สุดคือการบันทึกรายรับและรายจ่ายและทบทวนพฤติกรรมการใช้จ่ายของคุณ",
        id: "Pengeluaran Anda bisa boros, sehingga sulit untuk mengumpulkan uang. Hal terpenting adalah mencatat pendapatan dan pengeluaran Anda dan meninjau kebiasaan belanja Anda."
      }
    },
    earth: {
      strong: {
        ko: "부동산이나 장기적인 가치 투자를 통해 큰 부를 쌓을 수 있는 그릇입니다. 단기적인 유혹에 흔들리지 않는 것이 중요합니다.",
        en: "You have the capacity to build great wealth through real estate or long-term value investing. It's important not to be swayed by short-term temptations.",
        ja: "あなたは不動産や長期的な価値投資を通じて大きな富を築く能力を持っています。短期的な誘惑に惑わされないことが重要です。",
        fr: "Vous avez la capacité de bâtir une grande richesse grâce à l'immobilier ou à l'investissement axé sur la valeur à long terme. Il est important de ne pas se laisser influencer par les tentations à court terme.",
        de: "Sie haben die Fähigkeit, durch Immobilien oder langfristige Wertinvestitionen großen Reichtum aufzubauen. Es ist wichtig, sich nicht von kurzfristigen Versuchungen beeinflussen zu lassen.",
        it: "Hai la capacità di costruire una grande ricchezza attraverso investimenti immobiliari o di valore a lungo termine. È importante non lasciarsi influenzare dalle tentazioni a breve termine.",
        pt: "Você tem a capacidade de construir grande riqueza através de imóveis ou investimentos de valor a longo prazo. É importante não se deixar levar por tentações de curto prazo.",
        es: "Tienes la capacidad de construir una gran riqueza a través de bienes raíces o inversiones de valor a largo plazo. Es importante no dejarse llevar por las tentaciones a corto plazo.",
        th: "คุณมีความสามารถในการสร้างความมั่งคั่งมหาศาลผ่านอสังหาริมทรัพย์หรือการลงทุนแบบเน้นคุณค่าระยะยาว สิ่งสำคัญคืออย่าหวั่นไหวไปกับสิ่งล่อใจในระยะสั้น",
        id: "Anda memiliki kapasitas untuk membangun kekayaan besar melalui investasi real estat atau nilai jangka panjang. Penting untuk tidak terpengaruh oleh godaan jangka pendek."
      },
      moderate: {
        ko: "성실함과 신용을 바탕으로 재산을 차곡차곡 쌓아가는 안정적인 타입입니다. 투기보다는 저축과 투자의 균형이 중요합니다.",
        en: "You are a stable type who accumulates wealth step by step based on sincerity and credit. A balance between savings and investment is more important than speculation.",
        ja: "あなたは誠実さと信用に基づいて段階的に富を蓄積する安定したタイプです。投機よりも貯蓄と投資のバランスが重要です。",
        fr: "Vous êtes un type stable qui accumule de la richesse pas à pas en fonction de la sincérité et du crédit. Un équilibre entre l'épargne et l'investissement est plus important que la spéculation.",
        de: "Sie sind ein stabiler Typ, der Schritt für Schritt auf der Grundlage von Aufrichtigkeit und Kredit Vermögen anhäuft. Ein Gleichgewicht zwischen Sparen und Investieren ist wichtiger als Spekulation.",
        it: "Sei un tipo stabile che accumula ricchezza passo dopo passo in base alla sincerità e al credito. Un equilibrio tra risparmio e investimento è più importante della speculazione.",
        pt: "Você é um tipo estável que acumula riqueza passo a passo com base na sinceridade e no crédito. Um equilíbrio entre poupança e investimento é mais importante do que a especulação.",
        es: "Eres un tipo estable que acumula riqueza paso a paso basándose en la sinceridad y el crédito. Un equilibrio entre el ahorro y la inversión es más importante que la especulación.",
        th: "คุณเป็นคนประเภทมั่นคงที่สะสมความมั่งคั่งทีละขั้นตอนโดยอาศัยความจริงใจและเครดิต ความสมดุลระหว่างการออมและการลงทุนมีความสำคัญมากกว่าการเก็งกำไร",
        id: "Anda adalah tipe yang stabil yang mengumpulkan kekayaan selangkah demi selangkah berdasarkan ketulusan dan kredit. Keseimbangan antara tabungan dan investasi lebih penting daripada spekulasi."
      },
      weak: {
        ko: "다른 사람의 말을 믿고 투자했다가 손해를 볼 수 있습니다. 돈 문제에 있어서는 보수적으로 접근하고, 스스로 꼼꼼히 확인해야 합니다.",
        en: "You may suffer losses by trusting others' words in investments. You need to approach money matters conservatively and meticulously check things for yourself.",
        ja: "投資において他人の言葉を信じて損失を被る可能性があります。お金の問題には保守的にアプローチし、自分で細心の注意を払って物事を確認する必要があります。",
        fr: "Vous pouvez subir des pertes en faisant confiance aux paroles des autres en matière d'investissements. Vous devez aborder les questions d'argent de manière conservatrice et vérifier méticuleusement les choses par vous-même.",
        de: "Sie können Verluste erleiden, indem Sie den Worten anderer bei Investitionen vertrauen. Sie müssen Geldangelegenheiten konservativ angehen und die Dinge sorgfältig selbst überprüfen.",
        it: "Potresti subire perdite fidandoti delle parole degli altri negli investimenti. Devi affrontare le questioni di denaro in modo conservativo e controllare meticolosamente le cose da solo.",
        pt: "Você pode sofrer perdas ao confiar nas palavras de outras pessoas em investimentos. Você precisa abordar os assuntos financeiros de forma conservadora e verificar as coisas meticulosamente por si mesmo.",
        es: "Puedes sufrir pérdidas al confiar en las palabras de otros en las inversiones. Debes abordar los asuntos de dinero de manera conservadora y verificar meticulosamente las cosas por ti mismo.",
        th: "คุณอาจขาดทุนจากการเชื่อคำพูดของผู้อื่นในการลงทุน คุณต้องเข้าหาเรื่องเงินอย่างระมัดระวังและตรวจสอบสิ่งต่างๆ อย่างพิถีพิถันด้วยตัวคุณเอง",
        id: "Anda mungkin menderita kerugian dengan mempercayai kata-kata orang lain dalam investasi. Anda perlu mendekati masalah uang secara konservatif dan memeriksa sendiri semuanya dengan cermat."
      }
    },
    metal: {
      strong: {
        ko: "합리적인 판단력과 강한 실행력으로 재산을 불려 나갑니다. 자신만의 원칙을 세워 투자하고 관리하는 능력이 탁월합니다.",
        en: "You increase your wealth with rational judgment and strong execution. You have an excellent ability to invest and manage by setting your own principles.",
        ja: "あなたは合理的な判断力と強力な実行力で富を増やします。独自の原則を設定して投資および管理する優れた能力があります。",
        fr: "Vous augmentez votre richesse avec un jugement rationnel et une exécution solide. Vous avez une excellente capacité à investir et à gérer en définissant vos propres principes.",
        de: "Sie vermehren Ihr Vermögen mit rationalem Urteilsvermögen und starker Ausführung. Sie haben eine ausgezeichnete Fähigkeit, zu investieren und zu verwalten, indem Sie Ihre eigenen Prinzipien festlegen.",
        it: "Aumenti la tua ricchezza con un giudizio razionale e una forte esecuzione. Hai un'eccellente capacità di investire e gestire stabilendo i tuoi principi.",
        pt: "Você aumenta sua riqueza com julgamento racional e forte execução. Você tem uma excelente capacidade de investir e gerenciar estabelecendo seus próprios princípios.",
        es: "Aumentas tu riqueza con un juicio racional y una ejecución sólida. Tienes una excelente habilidad para invertir y administrar estableciendo tus propios principios.",
        th: "คุณเพิ่มความมั่งคั่งของคุณด้วยการตัดสินอย่างมีเหตุผลและการดำเนินการที่แข็งแกร่ง คุณมีความสามารถที่ยอดเยี่ยมในการลงทุนและจัดการโดยการกำหนดหลักการของคุณเอง",
        id: "Anda meningkatkan kekayaan Anda dengan penilaian rasional dan eksekusi yang kuat. Anda memiliki kemampuan yang sangat baik untuk berinvestasi dan mengelola dengan menetapkan prinsip-prinsip Anda sendiri."
      },
      moderate: {
        ko: "정확한 데이터 분석과 체계적인 관리를 통해 재산을 늘리는 데 재능이 있습니다. 분산 투자가 위험을 줄여줍니다.",
        en: "You have a talent for increasing wealth through accurate data analysis and systematic management. Diversified investment will reduce risks.",
        ja: "あなたは正確なデータ分析と体系的な管理を通じて富を増やす才能があります。分散投資はリスクを軽減します。",
        fr: "Vous avez un talent pour augmenter la richesse grâce à une analyse de données précise et une gestion systématique. Un investissement diversifié réduira les risques.",
        de: "Sie haben ein Talent dafür, durch genaue Datenanalyse und systematisches Management Vermögen zu vermehren. Diversifizierte Anlagen reduzieren die Risiken.",
        it: "Hai un talento per aumentare la ricchezza attraverso un'accurata analisi dei dati e una gestione sistematica. L'investimento diversificato ridurrà i rischi.",
        pt: "Você tem talento para aumentar a riqueza através de uma análise de dados precisa e uma gestão sistemática. O investimento diversificado reduzirá os riscos.",
        es: "Tienes talento para aumentar la riqueza a través de un análisis de datos preciso y una gestión sistemática. La inversión diversificada reducirá los riesgos.",
        th: "คุณมีความสามารถในการเพิ่มความมั่งคั่งผ่านการวิเคราะห์ข้อมูลที่แม่นยำและการจัดการอย่างเป็นระบบ การลงทุนที่หลากหลายจะช่วยลดความเสี่ยง",
        id: "Anda memiliki bakat untuk meningkatkan kekayaan melalui analisis data yang akurat dan manajemen yang sistematis. Investasi yang terdiversifikasi akan mengurangi risiko."
      },
      weak: {
        ko: "의리가 앞서 주변 사람들에게 돈을 빌려주거나 보증을 서서 손해를 볼 수 있습니다. 금전 거래는 냉정하게 판단해야 합니다.",
        en: "Your sense of loyalty may lead you to lend money or guarantee loans for others, resulting in losses. Financial transactions must be judged with a cool head.",
        ja: "あなたの忠誠心は、他人に金を貸したり、融資を保証したりすることにつながり、損失を被る可能性があります。金融取引は冷静に判断しなければなりません。",
        fr: "Votre sens de la loyauté peut vous amener à prêter de l'argent ou à garantir des prêts pour d'autres, ce qui entraîne des pertes. Les transactions financières doivent être jugées avec sang-froid.",
        de: "Ihr Loyalitätssinn kann dazu führen, dass Sie anderen Geld leihen oder Kredite garantieren, was zu Verlusten führt. Finanztransaktionen müssen mit kühlem Kopf beurteilt werden.",
        it: "Il tuo senso di lealtà potrebbe portarti a prestare denaro o a garantire prestiti per altri, con conseguenti perdite. Le transazioni finanziarie devono essere giudicate a mente fredda.",
        pt: "Seu senso de lealdade pode levá-lo a emprestar dinheiro ou garantir empréstimos para outros, resultando em perdas. As transações financeiras devem ser julgadas com a cabeça fria.",
        es: "Tu sentido de la lealtad puede llevarte a prestar dinero o a garantizar préstamos para otros, lo que puede ocasionar pérdidas. Las transacciones financieras deben juzgarse con la cabeza fría.",
        th: "ความรู้สึกภักดีของคุณอาจทำให้คุณให้ยืมเงินหรือค้ำประกันเงินกู้ให้ผู้อื่น ซึ่งส่งผลให้เกิดความสูญเสีย การทำธุรกรรมทางการเงินต้องตัดสินด้วยความสุขุม",
        id: "Rasa kesetiaan Anda mungkin membuat Anda meminjamkan uang atau menjamin pinjaman untuk orang lain, yang mengakibatkan kerugian. Transaksi keuangan harus dinilai dengan kepala dingin."
      }
    },
    water: {
      strong: {
        ko: "자신만의 아이디어나 지식을 활용하여 큰돈을 벌 수 있는 잠재력이 있습니다. 투자의 흐름을 읽는 직관력이 뛰어납니다.",
        en: "You have the potential to earn large sums of money by utilizing your own ideas or knowledge. You have excellent intuition for reading investment flows.",
        ja: "あなたは自分自身のアイデアや知識を活用して大金を稼ぐ可能性を秘めています。あなたは投資の流れを読むための優れた直感を持っています。",
        fr: "Vous avez le potentiel de gagner de grosses sommes d'argent en utilisant vos propres idées ou connaissances. Vous avez une excellente intuition pour lire les flux d'investissement.",
        de: "Sie haben das Potenzial, große Geldsummen zu verdienen, indem Sie Ihre eigenen Ideen oder Ihr Wissen nutzen. Sie haben eine ausgezeichnete Intuition, um Investitionsströme zu lesen.",
        it: "Hai il potenziale per guadagnare ingenti somme di denaro utilizzando le tue idee o le tue conoscenze. Hai un'eccellente intuizione per leggere i flussi di investimento.",
        pt: "Você tem o potencial de ganhar grandes somas de dinheiro utilizando suas próprias ideias ou conhecimentos. Você tem excelente intuição para ler os fluxos de investimento.",
        es: "Tienes el potencial de ganar grandes sumas de dinero utilizando tus propias ideas o conocimientos. Tienes una excelente intuición para leer los flujos de inversión.",
        th: "คุณมีศักยภาพที่จะสร้างรายได้จำนวนมากโดยใช้ความคิดหรือความรู้ของคุณเอง คุณมีสัญชาตญาณที่ยอดเยี่ยมในการอ่านกระแสการลงทุน",
        id: "Anda memiliki potensi untuk menghasilkan banyak uang dengan memanfaatkan ide atau pengetahuan Anda sendiri. Anda memiliki intuisi yang sangat baik untuk membaca arus investasi."
      },
      moderate: {
        ko: "유연한 사고방식으로 다양한 재정적 기회를 포착할 수 있습니다. 해외 투자나 새로운 형태의 자산에도 관심을 가져볼 만합니다.",
        en: "With a flexible mindset, you can seize various financial opportunities. It's worth taking an interest in overseas investments or new forms of assets.",
        ja: "柔軟な考え方で、さまざまな金融機会をつかむことができます。海外投資や新しい形態の資産に興味を持つ価値があります。",
        fr: "Avec un état d'esprit flexible, vous pouvez saisir diverses opportunités financières. Il est intéressant de s'intéresser aux investissements à l'étranger ou à de nouvelles formes d'actifs.",
        de: "Mit einer flexiblen Denkweise können Sie verschiedene finanzielle Möglichkeiten nutzen. Es lohnt sich, sich für ausländische Investitionen oder neue Anlageformen zu interessieren.",
        it: "Con una mentalità flessibile, puoi cogliere varie opportunità finanziarie. Vale la pena interessarsi a investimenti all'estero o a nuove forme di attività.",
        pt: "Com uma mentalidade flexível, você pode aproveitar várias oportunidades financeiras. Vale a pena se interessar por investimentos no exterior ou novas formas de ativos.",
        es: "Con una mentalidad flexible, puedes aprovechar diversas oportunidades financieras. Vale la pena interesarse por las inversiones en el extranjero o por nuevas formas de activos.",
        th: "ด้วยกรอบความคิดที่ยืดหยุ่น คุณสามารถคว้าโอกาสทางการเงินต่างๆ ได้ การลงทุนในต่างประเทศหรือสินทรัพย์รูปแบบใหม่ๆ ก็น่าสนใจ",
        id: "Dengan pola pikir yang fleksibel, Anda dapat memanfaatkan berbagai peluang keuangan. Ada baiknya untuk menaruh minat pada investasi di luar negeri atau bentuk aset baru."
      },
      weak: {
        ko: "욕심을 부리기보다 순리대로 따를 때 재물이 자연스럽게 흘러 들어옵니다. 안정적인 자산 관리가 마음의 평화를 가져다줍니다.",
        en: "Wealth flows naturally when you follow the course of nature rather than being greedy. Stable asset management will bring you peace of mind.",
        ja: "富は、貪欲になるのではなく、自然の流れに従うときに自然に流れ込みます。安定した資産管理は、あなたに心の安らぎをもたらします。",
        fr: "La richesse coule naturellement lorsque vous suivez le cours de la nature plutôt que d'être avide. Une gestion stable des actifs vous apportera la tranquillité d'esprit.",
        de: "Reichtum fließt auf natürliche Weise, wenn Sie dem Lauf der Natur folgen, anstatt gierig zu sein. Eine stabile Vermögensverwaltung wird Ihnen Seelenfrieden bringen.",
        it: "La ricchezza fluisce naturalmente quando segui il corso della natura piuttosto che essere avido. Una gestione patrimoniale stabile ti porterà tranquillità.",
        pt: "A riqueza flui naturalmente quando você segue o curso da natureza em vez de ser ganancioso. A gestão estável de ativos lhe trará paz de espírito.",
        es: "La riqueza fluye naturalmente cuando sigues el curso de la naturaleza en lugar de ser codicioso. La gestión estable de activos te traerá tranquilidad.",
        th: "ความมั่งคั่งจะไหลมาเองตามธรรมชาติเมื่อคุณดำเนินไปตามวิถีแห่งธรรมชาติมากกว่าที่จะโลภ การจัดการสินทรัพย์ที่มั่นคงจะทำให้คุณสบายใจ",
        id: "Kekayaan mengalir secara alami ketika Anda mengikuti jalan alam daripada menjadi serakah. Manajemen aset yang stabil akan memberi Anda ketenangan pikiran."
      }
    }
  }
};