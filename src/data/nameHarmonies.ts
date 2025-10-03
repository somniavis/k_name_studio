// Name Harmonies Database
// Contains multilingual harmony descriptions for Korean names

export interface NameHarmony {
  id: string; // unique identifier matching koreanNames.ts
  harmony: {
    [key: string]: string; // locale-based harmonies
  };
}

export const NAME_HARMONIES: NameHarmony[] = [
// 민준 (Min-jun)
{
  id: '민준_wood_01',
  harmony: {
    en: 'With your Wood nature, this name creates a perfect synergy, fostering deep roots of wisdom and continuous growth. Its quick-witted aspect complements your innate patience, while the name’s handsome meaning reflects an inner beauty born from cultivated knowledge and a true heart.',
    ko: '당신의 목(木) 기운은 이 이름과 만나 지혜의 뿌리를 깊게 내리고 성장을 거듭하는 완벽한 시너지를 이룹니다. 이름에 담긴 빠른 판단력은 당신의 타고난 인내심을 보완하고, 수려한 외모를 뜻하는 글자는 갈고 닦은 지식과 진실한 마음에서 우러나오는 내면의 아름다움을 비춥니다.',
    fr: 'Votre nature d\'élément Bois s\'harmonise perfectly avec ce nom, créant des racines profondes d\'apprentissage et de croissance. L\'aspect de pensée rapide équilibre votre patience naturelle, tandis que la signification belle reflète la beauté intérieure qui vient de la sagesse cultivée et du caractère authentique.',
    it: 'Con la tua natura di Legno, questo nome crea una sinergia perfetta, favorendo profonde radici di saggezza e crescita continua. Il suo aspetto arguto completa la tua pazienza innata, mentre il significato di bellezza del nome riflette una bellezza interiore nata da una conoscenza coltivata e un cuore sincero.',
    de: 'Ihre Holz-Element-Natur harmoniert perfekt mit diesem Namen und schafft tiefe Wurzeln des Lernens und Wachstums. Der schnelldenkende Aspekt balanciert Ihre natürliche Geduld, während die schöne Bedeutung die innere Schönheit widerspiegelt, die aus kultivierter Weisheit und echtem Charakter kommt.',
    pt: 'Com sua natureza de Madeira, este nome cria uma sinergia perfeita, promovendo raízes profundas de sabedoria e crescimento contínuo. Seu aspecto de raciocínio rápido complementa sua paciência inata, enquanto o belo significado do nome reflete uma beleza interior nascida do conhecimento cultivado e de um coração verdadeiro.',
    es: 'Su naturaleza del elemento Madera armoniza perfectamente con este nombre, creando raíces profundas de aprendizaje y crecimiento. El aspecto de pensamiento rápido equilibra su paciencia natural, mientras que el significado hermoso refleja la belleza interior que proviene de la sabiduría cultivada y el carácter genuino.',
    ja: 'あなたの木の性質はこの名前と完璧に調和し、学習と成長の深い根を作ります。素早い思考があなたの生来の忍耐力とバランスを取り、ハンサムな意味は教養ある知恵と真の性格から来る内面の美しさを反映します。',
    th: 'ด้วยธรรมชาติธาตุไม้ของคุณ ชื่อนี้สร้างการทำงานร่วมกันที่สมบูรณ์แบบ ส่งเสริมรากฐานที่ลึกซึ้งของปัญญาและการเติบโตอย่างต่อเนื่อง ลักษณะที่เฉียบแหลมของชื่อช่วยเสริมความอดทนโดยกำเนิดของคุณ ในขณะที่ความหมายอันหล่อเหลาของชื่อสะท้อนถึงความงามภายในที่เกิดจากความรู้ที่บ่มเพาะและหัวใจที่แท้จริง',
    id: 'Dengan sifat Kayu Anda, nama ini menciptakan sinergi yang sempurna, menumbuhkan akar kebijaksanaan yang dalam dan pertumbuhan yang berkelanjutan. Aspeknya yang cerdas melengkapi kesabaran bawaan Anda, sementara makna tampan dari nama tersebut mencerminkan keindahan batin yang lahir dari pengetahuan yang dibudidayakan dan hati yang tulus.'
  }
},
// 1. 건우 (Gun-woo)
{
  id: '건우_wood_01',
  harmony: {
    en: 'Your Wood nature finds a powerful ally in this name, establishing deep roots of strength and protection. The name’s excellent and strong qualities resonate with your capacity for patient growth, allowing your protective instincts to flourish like the vast branches of a mighty tree sheltering all beneath it.',
    ko: '당신의 목(木) 기운은 이 이름 안에서 힘과 보호의 깊은 뿌리를 내리는 강력한 동맹을 찾습니다. 이름에 담긴 뛰어나고 굳센 기운은 당신의 꾸준한 성장 능력과 공명하며, 당신의 보호 본능은 모든 것을 감싸는 거목의 가지처럼 무성하게 뻗어 나갈 것입니다.',
    fr: 'Votre nature Bois trouve un allié puissant dans ce nom, établissant des racines profondes de force et de protection. Les qualités excellentes et fortes du nom résonnent avec votre capacité de croissance patiente, permettant à vos instincts protecteurs de s\'épanouir comme les vastes branches d\'un arbre puissant abritant tout ce qui se trouve en dessous.',
    it: 'La tua natura di Legno trova un potente alleato in questo nome, stabilendo radici profonde di forza e protezione. Le eccellenti e forti qualità del nome risuonano con la tua capacità di crescita paziente, permettendo ai tuoi istinti protettivi di fiorire come i vasti rami di un albero possente che protegge tutto ciò che ha sotto.',
    de: 'Ihre Holz-Natur findet in diesem Namen einen mächtigen Verbündeten, der tiefe Wurzeln der Stärke und des Schutzes schlägt. Die ausgezeichneten und starken Eigenschaften des Namens schwingen mit Ihrer Fählighet zu geduldigem Wachstum mit und ermöglichen es Ihren Schutzinstinkten, sich wie die riesigen Äste eines mächtigen Baumes zu entfalten, der alles unter sich schützt.',
    pt: 'Sua natureza de Madeira encontra um poderoso aliado neste nome, estabelecendo raízes profundas de força e proteção. As qualidades excelentes e fortes do nome ressoam com sua capacidade de crescimento paciente, permitindo que seus instintos protetores floresçam como os vastos galhos de uma árvore poderosa que abriga tudo abaixo dela.',
    es: 'Tu naturaleza de Madera encuentra un poderoso aliado en este nombre, estableciendo profundas raíces de fuerza y protección. Las excelentes y fuertes cualidades del nombre resuenan con tu capacidad de crecimiento paciente, permitiendo que tus instintos protectores florezcan como las vastas ramas de un árbol poderoso que cobija todo lo que está debajo de él.',
    ja: 'あなたの木の性質は、この名前の中に力強い味方を見つけ、強さと保護の深い根を確立します。この名前の優れた、そして強い品質は、あなたの忍耐強い成長能力と共鳴し、あなたの保護本能が、その下にすべてを保護する巨大な木の広大な枝のように繁栄することを可能にします。',
    th: 'ธรรมชาติธาตุไม้ของคุณพบพันธมิตรอันทรงพลังในชื่อนี้ สร้างรากฐานแห่งความแข็งแกร่งและการปกป้องอย่างลึกซึ้ง คุณสมบัติที่ยอดเยี่ยมและแข็งแกร่งของชื่อสะท้อนกับความสามารถในการเติบโตอย่างอดทนของคุณ ทำให้สัญชาตญาณการปกป้องของคุณเบ่งบานเหมือนกิ่งก้านของต้นไม้ใหญ่ที่ให้ที่พักพิงแก่ทุกสิ่งที่อยู่เบื้องล่าง',
    id: 'Sifat Kayu Anda menemukan sekutu yang kuat dalam nama ini, membangun akar kekuatan dan perlindungan yang dalam. Kualitas nama yang unggul dan kuat selaras dengan kapasitas Anda untuk pertumbuhan yang sabar, memungkinkan naluri pelindung Anda berkembang seperti cabang-cabang luas pohon perkasa yang menaungi semua di bawahnya.'
  }
},
// 2. 지호 (Ji-ho)
{
  id: '지호_wood_01',
  harmony: {
    en: 'With your Wood nature, this name cultivates profound wisdom through patience and steady growth. The name’s meaning of wisdom and greatness resonates with your ability to nurture understanding, allowing your inner sage to flourish like an ancient tree offering guidance to all.',
    ko: '당신의 목(木) 기운과 함께 이 이름은 인내와 꾸준한 성장을 통해 깊은 지혜를 길러냅니다. 이름에 담긴 지혜와 위대함은 이해심을 키우는 당신의 능력과 공명하여, 모든 이에게 길잡이가 되어주는 고목처럼 당신의 내면의 현자가 번성하게 합니다.',
    fr: 'Avec votre nature Bois, ce nom cultive une sagesse profonde par la patience et une croissance régulière. La signification de sagesse et de grandeur du nom résonne avec votre capacité à nourrir la compréhension, permettant à votre sage intérieur de s\'épanouir comme un arbre ancien offrant des conseils à tous.',
    it: 'Con la tua natura di Legno, questo nome coltiva una profonda saggezza attraverso la pazienza e una crescita costante. Il significato di saggezza e grandezza del nome risuona con la tua capacità di nutrire la comprensione, permettendo al tuo saggio interiore di fiorire come un albero antico che offre guida a tutti.',
    de: 'Mit Ihrer Holz-Natur kultiviert dieser Name durch Geduld und stetiges Wachstum tiefgreifende Weisheit. Die Bedeutung des Namens von Weisheit und Größe schwingt mit Ihrer Fähigkeit mit, Verständnis zu fördern, und ermöglicht es Ihrem inneren Weisen, wie ein alter Baum zu gedeihen, der allen Führung bietet.',
    pt: 'Com sua natureza de Madeira, este nome cultiva uma sabedoria profunda através da paciência e do crescimento constante. O significado de sabedoria e grandeza do nome ressoa com sua capacidade de nutrir a compreensão, permitindo que seu sábio interior floresça como uma árvore antiga que oferece orientação a todos.',
    es: 'Con tu naturaleza de Madera, este nombre cultiva una profunda sabiduría a través de la paciencia y el crecimiento constante. El significado de sabiduría y grandeza del nombre resuena con tu capacidad para nutrir la comprensión, permitiendo que tu sabio interior florezca como un árbol antiguo que ofrece guía a todos.',
    ja: 'あなたの木の性質により、この名前は忍耐と着実な成長を通じて深い知恵を育みます。知恵と偉大さという意味を持つこの名前は、理解を育むあなたの能力と共鳴し、あなたの内なる賢者がすべての人に導きを与える古代の木のように繁栄することを可能にします。',
    th: 'ด้วยธรรมชาติธาตุไม้ของคุณ ชื่อนี้จะปลูกฝังปัญญาอันลึกซึ้งผ่านความอดทนและการเติบโตที่มั่นคง ความหมายของชื่อที่สื่อถึงสติปัญญาและความยิ่งใหญ่สอดคล้องกับความสามารถในการหล่อเลี้ยงความเข้าใจของคุณ ทำให้ปราชญ์ในตัวคุณเติบโตเหมือนต้นไม้โบราณที่ชี้แนะแนวทางแก่ทุกคน',
    id: 'Dengan sifat Kayu Anda, nama ini memupuk kebijaksanaan yang mendalam melalui kesabaran dan pertumbuhan yang stabil. Makna nama kebijaksanaan dan kebesaran selaras dengan kemampuan Anda untuk memelihara pemahaman, memungkinkan orang bijak dalam diri Anda berkembang seperti pohon kuno yang menawarkan bimbingan kepada semua.'
  }
},
// 3. 재민 (Jae-min)
{
  id: '재민_wood_01',
  harmony: {
    en: 'Your Wood nature perfectly embodies this name’s resilient talent, which bends but never breaks. The name’s qualities of talent and quickness resonate with your natural adaptability, allowing your abilities to flourish like bamboo—swift, flexible, and strong in all seasons.',
    ko: '당신의 목(木) 기운은 휘어질지언정 부러지지 않는 이 이름의 강인한 재능을 완벽하게 구현합니다. 이름에 담긴 재능과 민첩함은 당신의 타고난 적응력과 공명하여, 사계절 내내 빠르고 유연하며 강한 대나무처럼 당신의 능력이 만개하도록 합니다.',
    fr: 'Votre nature Bois incarne parfaitement le talent résilient de ce nom, qui plie mais ne rompt jamais. Les qualités de talent et de rapidité du nom résonnent avec votre adaptabilité naturelle, permettant à vos capacités de s\'épanouir comme le bambou - rapide, flexible et fort en toutes saisons.',
    it: 'La tua natura di Legno incarna perfettamente il talento resiliente di questo nome, che si piega ma non si spezza mai. Le qualità di talento e prontezza del nome risuonano con la tua naturale adattabilità, permettendo alle tue abilità di fiorire come il bambù: rapido, flessibile e forte in ogni stagione.',
    de: 'Ihre Holz-Natur verkörpert perfekt das widerstandsfähige Talent dieses Namens, das sich biegt, aber niemals bricht. Die Eigenschaften von Talent und Schnelligkeit des Namens schwingen mit Ihrer natürlichen Anpassungsfähigkeit mit und ermöglichen es Ihren Fähigkeiten, wie Bambus zu gedeihen – schnell, flexibel und stark zu jeder Jahreszeit.',
    pt: 'Sua natureza de Madeira personifica perfeitamente o talento resiliente deste nome, que se curva, mas nunca quebra. As qualidades de talento e rapidez do nome ressoam com sua adaptabilidade natural, permitindo que suas habilidades floresçam como o bambu — rápido, flexível e forte em todas as estações.',
    es: 'Tu naturaleza de Madera encarna perfectamente el talento resistente de este nombre, que se dobla pero nunca se rompe. Las cualidades de talento y rapidez del nombre resuenan con tu adaptabilidad natural, permitiendo que tus habilidades florezcan como el bambú: rápido, flexible y fuerte en todas las estaciones.',
    ja: 'あなたの木の性質は、この名前の回復力のある才能を完璧に具現化し、曲がることはあっても決して壊れません。才能と素早さという名前の資質は、あなたの自然な適応性と共鳴し、あなたの能力が竹のように、すべての季節で迅速、柔軟、そして強く繁栄することを可能にします。',
    th: 'ธรรมชาติธาตุไม้ของคุณแสดงถึงพรสวรรค์ที่ยืดหยุ่นของชื่อนี้ได้อย่างสมบูรณ์แบบ ซึ่งงอได้ แต่ไม่เคยหัก คุณสมบัติของพรสวรรค์และความรวดเร็วของชื่อสอดคล้องกับการปรับตัวตามธรรมชาติของคุณ ทำให้ความสามารถของคุณเบ่งบานเหมือนไม้ไผ่ที่รวดเร็ว ยืดหยุ่น และแข็งแกร่งในทุกฤดูกาล',
    id: 'Sifat Kayu Anda dengan sempurna mewujudkan bakat tangguh nama ini, yang lentur tetapi tidak pernah patah. Kualitas bakat dan kecepatan nama ini selaras dengan kemampuan beradaptasi alami Anda, memungkinkan kemampuan Anda berkembang seperti bambu—cepat, fleksibel, dan kuat di semua musim.'
  }
},
// 4. 민성 (Min-seong)
{
  id: '민성_wood_01',
  harmony: {
    en: 'Your Wood nature harmonizes with this name to foster rapid growth and a sincere heart. Your quickness of thought, combined with a sincerity of purpose, allows you to achieve success through honest effort and a natural, flowing adaptability.',
    ko: '당신의 목(木) 기운은 이 이름과 조화를 이루어 빠른 성장과 성실한 마음을 길러냅니다. 당신의 빠른 생각과 진실된 목표가 결합하여, 정직한 노력과 자연스러운 적응력을 통해 성공을 이룰 수 있게 합니다.',
    fr: 'Votre nature Bois s\'harmonise avec ce nom pour favoriser une croissance rapide et un cœur sincère. Votre vivacité d\'esprit, combinée à une sincérité d\'intention, vous permet de réussir grâce à un effort honnête et à une adaptabilité naturelle et fluide.',
    it: 'La tua natura di Legno si armonizza con questo nome per favorire una crescita rapida e un cuore sincero. La tua prontezza di pensiero, unita alla sincerità di intenti, ti permette di raggiungere il successo attraverso uno sforzo onesto e una naturale e fluida adattabilità.',
    de: 'Ihre Holz-Natur harmoniert mit diesem Namen, um schnelles Wachstum und ein aufrichtiges Herz zu fördern. Ihre Schnelligkeit im Denken, kombiniert mit einer Aufrichtigkeit des Ziels, ermöglicht es Ihnen, durch ehrliche Anstrengung und eine natürliche, fließende Anpassungsfähigkeit Erfolg zu haben.',
    pt: 'Sua natureza de Madeira se harmoniza com este nome para promover um crescimento rápido e um coração sincero. Sua rapidez de pensamento, combinada com a sinceridade de propósito, permite que você alcance o sucesso através de esforço honesto e uma adaptabilidade natural e fluida.',
    es: 'Tu naturaleza de Madera armoniza con este nombre para fomentar un crecimiento rápido y un corazón sincero. Tu rapidez de pensamiento, combinada con una sinceridad de propósito, te permite alcanzar el éxito a través del esfuerzo honesto y una adaptabilidad natural y fluida.',
    ja: 'あなたの木の性質は、この名前と調和して、急速な成長と誠実な心を育みます。あなたの思考の速さは、目的の誠実さと組み合わさって、正直な努力と自然で流れるような適応性を通じて成功を収めることを可能にします。',
    th: 'ธรรมชาติธาตุไม้ของคุณสอดคล้องกับชื่อนี้เพื่อส่งเสริมการเติบโตอย่างรวดเร็วและหัวใจที่จริงใจ ความคิดที่รวดเร็วของคุณ ประกอบกับความจริงใจในจุดมุ่งหมาย ช่วยให้คุณประสบความสำเร็จผ่านความพยายามที่ซื่อสัตย์และการปรับตัวที่เป็นธรรมชาติและลื่นไหล',
    id: 'Sifat Kayu Anda selaras dengan nama ini untuk mendorong pertumbuhan yang cepat dan hati yang tulus. Kecepatan berpikir Anda, dikombinasikan dengan ketulusan tujuan, memungkinkan Anda mencapai kesuksesan melalui usaha yang jujur dan kemampuan beradaptasi yang alami dan lancar.'
  }
},
// 5. 성민 (Seong-min)
{
  id: '성민_wood_01',
  harmony: {
    en: 'This name and your Wood nature create a perfect harmony of sincere growth and quick thinking. Your sincerity of heart provides deep, strong roots, while your quick thinking allows for swift and graceful adaptation to any changing circumstance.',
    ko: '이 이름과 당신의 목(木) 기운은 성실한 성장과 빠른 사고의 완벽한 조화를 이룹니다. 당신의 진실된 마음은 깊고 강한 뿌리가 되어주고, 빠른 생각은 어떤 변화하는 상황에도 신속하고 우아하게 적응할 수 있게 합니다.',
    fr: 'Ce nom et votre nature Bois créent une harmonie parfaite entre une croissance sincère et une pensée rapide. Votre sincérité de cœur fournit des racines profondes et solides, tandis que votre pensée rapide permet une adaptation rapide et gracieuse à toute circonstance changeante.',
    it: 'Questo nome e la tua natura di Legno creano una perfetta armonia di crescita sincera e pensiero rapido. La tua sincerità di cuore fornisce radici profonde e forti, mentre il tuo pensiero rapido consente un adattamento veloce e aggraziato a qualsiasi circostanza mutevole.',
    de: 'Dieser Name und Ihre Holz-Natur schaffen eine perfekte Harmonie aus aufrichtigem Wachstum und schnellem Denken. Ihre Aufrichtigkeit des Herzens sorgt für tiefe, starke Wurzeln, während Ihr schnelles Denken eine schnelle und anmutige Anpassung an jede sich ändernde Situation ermöglicht.',
    pt: 'Este nome e sua natureza de Madeira criam uma harmonia perfeita de crescimento sincero e pensamento rápido. A sinceridade do seu coração fornece raízes profundas e fortes, enquanto seu pensamento rápido permite uma adaptação rápida e graciosa a qualquer circunstância em mudança.',
    es: 'Este nombre y tu naturaleza de Madera crean una armonía perfecta de crecimiento sincero y pensamiento rápido. Tu sinceridad de corazón proporciona raíces profundas y fuertes, mientras que tu pensamiento rápido permite una adaptación rápida y elegante a cualquier circunstancia cambiante.',
    ja: 'この名前とあなたの木の性質は、誠実な成長と迅速な思考の完璧な調和を生み出します。あなたの心の誠実さは深く強い根を提供し、あなたの迅速な思考はどんな変化する状況にも迅速かつ優雅に適応することを可能にします。',
    th: 'ชื่อนี้และธรรมชาติธาตุไม้ของคุณสร้างความสามัคคีที่สมบูรณ์แบบของการเติบโตที่จริงใจและการคิดที่รวดเร็ว ความจริงใจของหัวใจของคุณให้รากฐานที่ลึกและแข็งแกร่ง ในขณะที่ความคิดที่รวดเร็วของคุณช่วยให้ปรับตัวได้อย่างรวดเร็วและสง่างามต่อทุกสถานการณ์ที่เปลี่ยนแปลง',
    id: 'Nama ini dan sifat Kayu Anda menciptakan harmoni sempurna dari pertumbuhan yang tulus dan pemikiran yang cepat. Ketulusan hati Anda memberikan akar yang dalam dan kuat, sementara pemikiran cepat Anda memungkinkan adaptasi yang cepat dan anggun terhadap keadaan yang berubah.'
  }
},
// 6. 민우 (Min-woo)
{
  id: '민우_wood_01',
  harmony: {
    en: 'Your Wood nature and this name combine to create a character of swift growth and excellent spirit. Your quick mind and outstanding character merge to form a natural leader, capable of inspiring and achieving great things.',
    ko: '당신의 목(木) 기운과 이 이름이 만나 신속한 성장과 뛰어난 정신력을 지닌 품성을 만들어냅니다. 당신의 빠른 두뇌와 뛰어난 인품이 결합하여, 다른 이들에게 영감을 주고 위대한 일을 성취할 수 있는 타고난 리더를 형성합니다.',
    fr: 'Votre nature Bois et ce nom se combinent pour créer un caractère de croissance rapide et d\'un excellent esprit. Votre esprit vif et votre caractère exceptionnel fusionnent pour former un leader naturel, capable d\'inspirer et d\'accomplir de grandes choses.',
    it: 'La tua natura di Legno e questo nome si combinano per creare un carattere di crescita rapida e spirito eccellente. La tua mente pronta e il tuo carattere eccezionale si fondono per formare un leader naturale, capace di ispirare e realizzare grandi cose.',
    de: 'Ihre Holz-Natur und dieser Name vereinen sich zu einem Charakter von schnellem Wachstum und ausgezeichnetem Geist. Ihr schneller Verstand und Ihr herausragender Charakter verschmelzen zu einem natürlichen Führer, der in der Lage ist, große Dinge zu inspirieren und zu erreichen.',
    pt: 'Sua natureza de Madeira e este nome se combinam para criar um caráter de crescimento rápido e espírito excelente. Sua mente rápida e seu caráter excepcional se fundem para formar um líder natural, capaz de inspirar e alcançar grandes coisas.',
    es: 'Tu naturaleza de Madera y este nombre se combinan para crear un carácter de crecimiento rápido y excelente espíritu. Tu mente rápida y tu carácter sobresaliente se fusionan para formar un líder natural, capaz de inspirar y lograr grandes cosas.',
    ja: 'あなたの木の性質とこの名前が組み合わさって、迅速な成長と優れた精神の性格を生み出します。あなたの素早い頭脳と卓越した人格が融合して、偉大なことを鼓舞し達成することができる自然なリーダーを形成します。',
    th: 'ธรรมชาติธาตุไม้ของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของการเติบโตที่รวดเร็วและจิตวิญญาณที่ยอดเยี่ยม จิตใจที่รวดเร็วและลักษณะนิสัยที่โดดเด่นของคุณผสานกันเป็นผู้นำโดยธรรมชาติ สามารถสร้างแรงบันดาลใจและบรรลุสิ่งที่ยิ่งใหญ่ได้',
    id: 'Sifat Kayu Anda dan nama ini bergabung untuk menciptakan karakter pertumbuhan yang cepat dan semangat yang luar biasa. Pikiran cepat dan karakter luar biasa Anda bergabung untuk membentuk seorang pemimpin alami, yang mampu menginspirasi dan mencapai hal-hal besar.'
  }
},
// 7. 재현 (Jae-hyun)
{
  id: '재현_wood_01',
  harmony: {
    en: 'This name, combined with your Wood nature, fosters talented growth and a virtuous spirit. Your creative talent and virtuous character come together to manifest beautiful works that inspire and uplift all who witness them.',
    ko: '이 이름은 당신의 목(木) 기운과 결합하여 재능의 성장과 덕망 있는 정신을 길러냅니다. 당신의 창의적 재능과 고결한 품성이 만나, 보는 모든 이에게 영감을 주고 마음을 끌어올리는 아름다운 결과물들을 만들어냅니다.',
    fr: 'Ce nom, combiné à votre nature Bois, favorise une croissance talentueuse et un esprit vertueux. Votre talent créatif et votre caractère vertueux s\'unissent pour manifester de belles œuvres qui inspirent et élèvent tous ceux qui en sont témoins.',
    it: 'Questo nome, combinato con la tua natura di Legno, favorisce una crescita talentuosa e uno spirito virtuoso. Il tuo talento creativo e il tuo carattere virtuoso si uniscono per manifestare opere meravigliose che ispirano ed elevano tutti coloro che le testimoniano.',
    de: 'Dieser Name, kombiniert mit Ihrer Holz-Natur, fördert talentiertes Wachstum und einen tugendhaften Geist. Ihr kreatives Talent und Ihr tugendhafter Charakter vereinen sich, um wunderschöne Werke zu manifestieren, die alle, die sie bezeugen, inspirieren und erheben.',
    pt: 'Este nome, combinado com sua natureza de Madeira, promove o crescimento talentoso e um espírito virtuoso. Seu talento criativo e seu caráter virtuoso se unem para manifestar belas obras que inspiram e elevam todos os que as testemunham.',
    es: 'Este nombre, combinado con tu naturaleza de Madera, fomenta un crecimiento talentoso y un espíritu virtuoso. Tu talento creativo y tu carácter virtuoso se unen para manifestar hermosas obras que inspiran y elevan a todos los que las presencian.',
    ja: 'この名前は、あなたの木の性質と組み合わさって、才能ある成長と高潔な精神を育みます。あなたの創造的な才能と高潔な人格が一緒になって、それらを目撃するすべての人を鼓舞し、高揚させる美しい作品を明らかにします。',
    th: 'ชื่อนี้เมื่อรวมกับธรรมชาติธาตุไม้ของคุณ จะส่งเสริมการเติบโตที่มีพรสวรรค์และจิตวิญญาณที่มีคุณธรรม พรสวรรค์ที่สร้างสรรค์และลักษณะนิสัยที่มีคุณธรรมของคุณมารวมกันเพื่อสร้างผลงานที่สวยงามซึ่งสร้างแรงบันดาลใจและยกระดับจิตใจทุกคนที่ได้เห็น',
    id: 'Nama ini, dikombinasikan dengan sifat Kayu Anda, mendorong pertumbuhan berbakat dan semangat yang berbudi luhur. Bakat kreatif dan karakter berbudi luhur Anda bersatu untuk mewujudkan karya-karya indah yang menginspirasi dan mengangkat semua yang menyaksikannya.'
  }
},
// 8. 지우 (Ji-woo)
{
  id: '지우_wood_01',
  harmony: {
    en: 'Your Wood nature finds a perfect match in this name, creating a character of wise growth and a gentle spirit. Your wisdom and understanding, combined with a gentle strength, allow you to nurture growth and awakening in those around you.',
    ko: '당신의 목(木) 기운은 이 이름에서 완벽한 짝을 찾아, 지혜로운 성장과 온화한 정신을 지닌 품성을 만들어냅니다. 당신의 지혜와 이해심이 부드러운 힘과 결합하여, 주변 사람들의 성장과 깨달음을 촉진시킬 수 있게 합니다.',
    fr: 'Votre nature Bois trouve une correspondance parfaite dans ce nom, créant un caractère de croissance sage et d\'un esprit doux. Votre sagesse et votre compréhension, combinées à une force douce, vous permettent de nourrir la croissance et l\'éveil de ceux qui vous entourent.',
    it: 'La tua natura di Legno trova una corrispondenza perfetta in questo nome, creando un carattere di crescita saggia e uno spirito gentile. La tua saggezza e comprensione, unite a una forza gentile, ti permettono di nutrire la crescita e il risveglio in coloro che ti circondano.',
    de: 'Ihre Holz-Natur findet in diesem Namen eine perfekte Entsprechung und schafft einen Charakter von weisem Wachstum und sanftem Geist. Ihre Weisheit und Ihr Verständnis, kombiniert mit einer sanften Stärke, ermöglichen es Ihnen, Wachstum und Erwachen bei Ihren Mitmenschen zu fördern.',
    pt: 'Sua natureza de Madeira encontra uma combinação perfeita neste nome, criando um caráter de crescimento sábio e um espírito gentil. Sua sabedoria e compreensão, combinadas com uma força gentil, permitem que você nutra o crescimento e o despertar daqueles ao seu redor.',
    es: 'Tu naturaleza de Madera encuentra una pareja perfecta en este nombre, creando un carácter de crecimiento sabio y un espíritu gentil. Tu sabiduría y comprensión, combinadas con una fuerza suave, te permiten nutrir el crecimiento y el despertar en quienes te rodean.',
    ja: 'あなたの木の性質は、この名前に完璧にマッチし、賢明な成長と穏やかな精神の性格を生み出します。あなたの知恵と理解は、穏やかな強さと組み合わさって、あなたの周りの人々の成長と目覚めを育むことを可能にします。',
    th: 'ธรรมชาติธาตุไม้ของคุณเข้ากันได้ดีกับชื่อนี้ สร้างลักษณะของการเติบโตที่ชาญฉลาดและจิตวิญญาณที่อ่อนโยน สติปัญญาและความเข้าใจของคุณ ประกอบกับความแข็งแกร่งที่อ่อนโยน ช่วยให้คุณสามารถหล่อเลี้ยงการเติบโตและการตื่นรู้ในคนรอบข้างได้',
    id: 'Sifat Kayu Anda menemukan pasangan yang sempurna dalam nama ini, menciptakan karakter pertumbuhan yang bijaksana dan semangat yang lembut. Kebijaksanaan dan pemahaman Anda, dikombinasikan dengan kekuatan yang lembut, memungkinkan Anda untuk memelihara pertumbuhan dan kebangkitan pada orang-orang di sekitar Anda.'
  }
},
// 9. 건희 (Gun-hui)
{
  id: '건희_wood_01',
  harmony: {
    en: 'This name and your Wood nature create a character of strong growth and a bright, hopeful spirit. Your strength of character and bright optimism combine to form a natural leader who illuminates the path and guides others forward.',
    ko: '이 이름과 당신의 목(木) 기운은 강한 성장력과 밝고 희망찬 정신을 지닌 품성을 만들어냅니다. 당신의 굳센 성품과 밝은 긍정이 결합하여, 앞길을 비추고 다른 사람들을 이끌어주는 타고난 리더를 형성합니다.',
    fr: 'Ce nom et votre nature Bois créent un caractère de forte croissance et un esprit brillant et plein d\'espoir. Votre force de caractère et votre optimisme éclatant se combinent pour former un leader naturel qui illumine le chemin et guide les autres vers l\'avant.',
    it: 'Questo nome e la tua natura di Legno creano un carattere di forte crescita e uno spirito brillante e pieno di speranza. La tua forza di carattere e il tuo brillante ottimismo si combinano per formare un leader naturale che illumina il cammino e guida gli altri in avanti.',
    de: 'Dieser Name und Ihre Holz-Natur schaffen einen Charakter von starkem Wachstum und einem hellen, hoffnungsvollen Geist. Ihre Charakterstärke und Ihr strahlender Optimismus vereinen sich zu einem natürlichen Führer, der den Weg erleuchtet und andere vorwärts führt.',
    pt: 'Este nome e sua natureza de Madeira criam um caráter de forte crescimento e um espírito brilhante e esperançoso. Sua força de caráter e seu otimismo brilhante se combinam para formar um líder natural que ilumina o caminho e guia os outros para a frente.',
    es: 'Este nombre y tu naturaleza de Madera crean un carácter de fuerte crecimiento y un espíritu brillante y esperanzado. Tu fuerza de carácter y tu brillante optimismo se combinan para formar un líder natural que ilumina el camino y guía a otros hacia adelante.',
    ja: 'この名前とあなたの木の性質は、力強い成長と明るく希望に満ちた精神の性格を生み出します。あなたの性格の強さと明るい楽観主義が組み合わさって、道を照らし、他の人を前進させる自然なリーダーを形成します。',
    th: 'ชื่อนี้และธรรมชาติธาตุไม้ของคุณสร้างลักษณะของการเติบโตที่แข็งแกร่งและจิตวิญญาณที่สดใสและมีความหวัง ความแข็งแกร่งของลักษณะนิสัยและการมองโลกในแง่ดีที่สดใสของคุณรวมกันเป็นผู้นำโดยธรรมชาติที่ส่องสว่างเส้นทางและชี้นำผู้อื่นไปข้างหน้า',
    id: 'Nama ini dan sifat Kayu Anda menciptakan karakter pertumbuhan yang kuat dan semangat yang cerah dan penuh harapan. Kekuatan karakter dan optimisme cerah Anda bergabung untuk membentuk seorang pemimpin alami yang menerangi jalan dan membimbing orang lain maju.'
  }
},
// 10. 민재 (Min-jae)
{
  id: '민재_wood_01',
  harmony: {
    en: 'With your Wood nature, this name fosters swift growth and a talented spirit. Your quick mind flows like a powerful stream, naturally and gracefully finding its way through any obstacle that lies in your path.',
    ko: '당신의 목(木) 기운과 함께, 이 이름은 신속한 성장과 재능 있는 정신을 길러냅니다. 당신의 빠른 두뇌는 강력한 물줄기처럼 흘러, 앞을 가로막는 어떤 장애물도 자연스럽고 우아하게 통과하여 자신의 길을 찾아냅니다.',
    fr: 'Avec votre nature Bois, ce nom favorise une croissance rapide et un esprit talentueux. Votre esprit vif coule comme un courant puissant, trouvant naturellement et gracieusement son chemin à travers tout obstacle qui se trouve sur votre chemin.',
    it: 'Con la tua natura di Legno, questo nome favorisce una crescita rapida e uno spirito di talento. La tua mente pronta scorre come un ruscello potente, trovando naturalmente e con grazia la sua strada attraverso qualsiasi ostacolo sul tuo cammino.',
    de: 'Mit Ihrer Holz-Natur fördert dieser Name schnelles Wachstum und einen talentierten Geist. Ihr schneller Verstand fließt wie ein mächtiger Strom und findet auf natürliche und anmutige Weise seinen Weg durch jedes Hindernis, das sich Ihnen in den Weg stellt.',
    pt: 'Com sua natureza de Madeira, este nome promove o crescimento rápido e um espírito talentoso. Sua mente rápida flui como um riacho poderoso, encontrando natural e graciosamente seu caminho através de qualquer obstáculo em seu caminho.',
    es: 'Con tu naturaleza de Madera, este nombre fomenta un crecimiento rápido y un espíritu talentoso. Tu mente rápida fluye como una corriente poderosa, encontrando su camino de forma natural y elegante a través de cualquier obstáculo que se interponga en tu camino.',
    ja: 'あなたの木の性質で、この名前は迅速な成長と才能ある精神を育みます。あなたの素早い心は力強い流れのように流れ、あなたの道にあるどんな障害物も自然かつ優雅に通り抜けていきます。',
    th: 'ด้วยธรรมชาติธาตุไม้ของคุณ ชื่อนี้ส่งเสริมการเติบโตที่รวดเร็วและจิตวิญญาณที่มีพรสวรรค์ จิตใจที่รวดเร็วของคุณไหลเหมือนกระแสน้ำที่ทรงพลัง ค้นหาเส้นทางผ่านอุปสรรคใดๆ ที่ขวางหน้าอย่างเป็นธรรมชาติและสง่างาม',
    id: 'Dengan sifat Kayu Anda, nama ini mendorong pertumbuhan yang cepat dan semangat yang berbakat. Pikiran cepat Anda mengalir seperti aliran deras, secara alami dan anggun menemukan jalannya melalui rintangan apa pun yang menghadang.'
  }
},
// 11. 현민 (Hyun-min)
{
  id: '현민_wood_01',
  harmony: {
    en: 'Your Wood nature harmonizes with this name to create a character of virtuous growth and quick thinking. Your virtuous character provides deep moral roots, while your quick thinking enables swift, righteous, and decisive action in all situations.',
    ko: '당신의 목(木) 기운은 이 이름과 조화를 이루어 덕망 있는 성장과 빠른 사고를 지닌 품성을 만들어냅니다. 당신의 고결한 품성은 깊은 도덕적 뿌리를 제공하고, 빠른 생각은 모든 상황에서 신속하고 의로우며 결단력 있는 행동을 가능하게 합니다.',
    fr: 'Votre nature Bois s\'harmonise avec ce nom pour créer un caractère de croissance vertueuse et de pensée rapide. Votre caractère vertueux fournit des racines morales profondes, tandis que votre pensée rapide permet une action rapide, juste et décisive en toutes situations.',
    it: 'La tua natura di Legno si armonizza con questo nome per creare un carattere di crescita virtuosa e pensiero rapido. Il tuo carattere virtuoso fornisce profonde radici morali, mentre il tuo pensiero rapido consente un\'azione veloce, giusta e decisa in ogni situazione.',
    de: 'Ihre Holz-Natur harmoniert mit diesem Namen, um einen Charakter von tugendhaftem Wachstum und schnellem Denken zu schaffen. Ihr tugendhafter Charakter sorgt für tiefe moralische Wurzeln, während Ihr schnelles Denken schnelles, rechtschaffenes und entschlossenes Handeln in allen Situationen ermöglicht.',
    pt: 'Sua natureza de Madeira harmoniza-se com este nome para criar um caráter de crescimento virtuoso e pensamento rápido. Seu caráter virtuoso fornece raízes morais profundas, enquanto seu pensamento rápido permite ações rápidas, justas e decisivas em todas as situações.',
    es: 'Tu naturaleza de Madera armoniza con este nombre para crear un carácter de crecimiento virtuoso y pensamiento rápido. Tu carácter virtuoso proporciona profundas raíces morales, mientras que tu pensamiento rápido permite una acción rápida, justa y decisiva en todas las situaciones.',
    ja: 'あなたの木の性質は、この名前と調和して、高潔な成長と迅速な思考の性格を生み出します。あなたの高潔な性格は深い道徳的根源を提供し、あなたの迅速な思考はすべての状況で迅速、正義、そして決定的な行動を可能にします。',
    th: 'ธรรมชาติธาตุไม้ของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของการเติบโตอย่างมีคุณธรรมและการคิดที่รวดเร็ว ลักษณะนิสัยที่มีคุณธรรมของคุณให้รากฐานทางศีลธรรมที่ลึกซึ้ง ในขณะที่ความคิดที่รวดเร็วของคุณช่วยให้สามารถกระทำที่รวดเร็ว ถูกต้อง และเด็ดขาดในทุกสถานการณ์',
    id: 'Sifat Kayu Anda selaras dengan nama ini untuk menciptakan karakter pertumbuhan yang berbudi luhur dan pemikiran yang cepat. Karakter berbudi luhur Anda memberikan akar moral yang dalam, sementara pemikiran cepat Anda memungkinkan tindakan yang cepat, benar, dan tegas dalam segala situasi.'
  }
},
// 12. 지성 (Ji-seong)
{
  id: '지성_wood_01',
  harmony: {
    en: 'This name and your Wood nature create a character of wise growth and a sincere spirit. Your profound wisdom, combined with sincere practice, creates a deep knowledge rooted in honest, persistent effort, like an ancient, respected tree.',
    ko: '이 이름과 당신의 목(木) 기운은 지혜로운 성장과 성실한 정신을 지닌 품성을 만들어냅니다. 당신의 깊은 지혜가 성실한 실천과 결합하여, 오래되고 존경받는 나무처럼 정직하고 끈기 있는 노력에 뿌리를 둔 깊은 지식을 창조합니다.',
    fr: 'Ce nom et votre nature Bois créent un caractère de croissance sage et d\'un esprit sincère. Votre profonde sagesse, combinée à une pratique sincère, crée une connaissance profonde enracinée dans un effort honnête et persistant, comme un arbre ancien et respecté.',
    it: 'Questo nome e la tua natura di Legno creano un carattere di crescita saggia e uno spirito sincero. La tua profonda saggezza, unita a una pratica sincera, crea una conoscenza profonda radicata in uno sforzo onesto e persistente, come un albero antico e rispettato.',
    de: 'Dieser Name und Ihre Holz-Natur schaffen einen Charakter von weisem Wachstum und aufrichtigem Geist. Ihre tiefgreifende Weisheit, kombiniert mit aufrichtiger Praxis, schafft ein tiefes Wissen, das in ehrlicher, beharrlicher Anstrengung verwurzelt ist, wie ein alter, angesehener Baum.',
    pt: 'Este nome e sua natureza de Madeira criam um caráter de crescimento sábio e um espírito sincero. Sua profunda sabedoria, combinada com a prática sincera, cria um conhecimento profundo enraizado no esforço honesto e persistente, como uma árvore antiga e respeitada.',
    es: 'Este nombre y tu naturaleza de Madera crean un carácter de crecimiento sabio y un espíritu sincero. Tu profunda sabiduría, combinada con una práctica sincera, crea un conocimiento profundo arraigado en un esfuerzo honesto y persistente, como un árbol antiguo y respetado.',
    ja: 'この名前とあなたの木の性質は、賢明な成長と誠実な精神の性格を生み出します。あなたの深い知恵は、誠実な実践と組み合わさって、古代の尊敬される木のように、正直で粘り強い努力に根ざした深い知識を生み出します。',
    th: 'ชื่อนี้และธรรมชาติธาตุไม้ของคุณสร้างลักษณะของการเติบโตที่ชาญฉลาดและจิตวิญญาณที่จริงใจ ปัญญาอันลึกซึ้งของคุณ ประกอบกับการปฏิบัติที่จริงใจ สร้างความรู้ที่ลึกซึ้งซึ่งมีรากฐานมาจากความพยายามที่ซื่อสัตย์และต่อเนื่อง เหมือนต้นไม้โบราณที่ได้รับความนับถือ',
    id: 'Nama ini dan sifat Kayu Anda menciptakan karakter pertumbuhan yang bijaksana dan semangat yang tulus. Kebijaksanaan mendalam Anda, dikombinasikan dengan praktik yang tulus, menciptakan pengetahuan mendalam yang berakar pada usaha yang jujur dan gigih, seperti pohon kuno yang dihormati.'
  }
},
// 13. 민기 (Min-gi)
{
  id: '민기_wood_01',
  harmony: {
    en: 'Your Wood nature harmonizes with this name to create a character of quick growth and an energetic spirit. Your quick mind moves like a vibrant wind through spring leaves, bringing life, freshness, and movement to everything you touch.',
    ko: '당신의 목(木) 기운은 이 이름과 조화를 이루어 빠른 성장과 활기찬 정신을 지닌 품성을 만들어냅니다. 당신의 빠른 두뇌는 봄의 나뭇잎 사이를 스치는 활기찬 바람처럼 움직여, 당신이 닿는 모든 것에 생명, 신선함, 그리고 움직임을 가져다줍니다.',
    fr: 'Votre nature Bois s\'harmonise avec ce nom pour créer un caractère de croissance rapide et un esprit énergique. Votre esprit vif se déplace comme un vent vibrant à travers les feuilles de printemps, apportant vie, fraîcheur et mouvement à tout ce que vous touchez.',
    it: 'La tua natura di Legno si armonizza con questo nome per creare un carattere di crescita rapida e uno spirito energetico. La tua mente pronta si muove come un vento vibrante tra le foglie primaverili, portando vita, freschezza e movimento a tutto ciò che tocchi.',
    de: 'Ihre Holz-Natur harmoniert mit diesem Namen, um einen Charakter von schnellem Wachstum und einem energiegeladenen Geist zu schaffen. Ihr schneller Verstand bewegt sich wie ein lebhafter Wind durch Frühlingsblätter und bringt Leben, Frische und Bewegung in alles, was Sie berühren.',
    pt: 'Sua natureza de Madeira se harmoniza com este nome para criar um caráter de crescimento rápido e um espírito energético. Sua mente rápida se move como um vento vibrante através das folhas da primavera, trazendo vida, frescor e movimento a tudo que você toca.',
    es: 'Tu naturaleza de Madera armoniza con este nombre para crear un carácter de crecimiento rápido y un espíritu enérgico. Tu mente rápida se mueve como un viento vibrante a través de las hojas de primavera, trayendo vida, frescura y movimiento a todo lo que tocas.',
    ja: 'あなたの木の性質は、この名前と調和して、迅速な成長とエネルギッシュな精神の性格を生み出します。あなたの素早い心は、春の葉を通る活気に満ちた風のように動き、あなたが触れるすべてのものに生命、新鮮さ、そして動きをもたらします。',
    th: 'ธรรมชาติธาตุไม้ของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของการเติบโตที่รวดเร็วและจิตวิญญาณที่กระตือรือร้น จิตใจที่รวดเร็วของคุณเคลื่อนไหวเหมือนลมที่สดใสพัดผ่านใบไม้ในฤดูใบไม้ผลิ นำชีวิต ความสดชื่น และการเคลื่อนไหวมาสู่ทุกสิ่งที่คุณสัมผัส',
    id: 'Sifat Kayu Anda selaras dengan nama ini untuk menciptakan karakter pertumbuhan yang cepat dan semangat yang energik. Pikiran cepat Anda bergerak seperti angin yang bersemangat melalui daun-daun musim semi, membawa kehidupan, kesegaran, dan gerakan ke semua yang Anda sentuh.'
  }
},
// 14. 재우 (Jae-woo)
{
  id: '재우_wood_01',
  harmony: {
    en: 'With your Wood nature, this name fosters talented growth and an excellent spirit. These qualities align perfectly with your natural abilities, creating a harmonious path for growth and positive character development, like a well-nurtured tree bearing fruit.',
    ko: '당신의 목(木) 기운과 함께, 이 이름은 재능 있는 성장과 뛰어난 정신을 길러냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 잘 가꾸어진 나무가 열매를 맺듯 조화로운 성장의 길과 긍정적인 인격 발전을 이끌어냅니다.',
    fr: 'Avec votre nature Bois, ce nom favorise une croissance talentueuse et un excellent esprit. Ces qualities s\'alignent parfaitement avec vos capacités naturelles, créant un chemin harmonieux pour la croissance et le développement d\'un caractère positif, comme un arbre bien nourri portant des fruits.',
    it: 'Con la tua natura di Legno, questo nome favorisce una crescita talentuosa e uno spirito eccellente. Queste qualità si allineano perfettamente con le tue abilità naturali, creando un percorso armonioso per la crescita e lo sviluppo positivo del carattere, come un albero ben nutrito che porta frutti.',
    de: 'Mit Ihrer Holz-Natur fördert dieser Name talentiertes Wachstum und einen ausgezeichneten Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und schaffen einen harmonischen Weg für Wachstum und positive Charakterentwicklung, wie ein gut gepflegter Baum, der Früchte trägt.',
    pt: 'Com sua natureza de Madeira, este nome promove o crescimento talentoso e um espírito excelente. Essas qualidades se alinham perfeitamente com suas habilidades naturais, criando um caminho harmonioso para o crescimento e o desenvolvimento positivo do caráter, como uma árvore bem nutrida que dá frutos.',
    es: 'Con tu naturaleza de Madera, este nombre fomenta un crecimiento talentoso y un espíritu excelente. Estas cualidades se alinean perfectamente con tus habilidades naturales, creando un camino armonioso para el crecimiento y el desarrollo positivo del carácter, como un árbol bien nutrido que da frutos.',
    ja: 'あなたの木の性質で、この名前は才能ある成長と優れた精神を育みます。これらの資質はあなたの自然な能力と完全に一致し、実を結ぶよく育てられた木のように、成長と前向きな人格形成のための調和のとれた道を作り出します。',
    th: 'ด้วยธรรมชาติธาตุไม้ของคุณ ชื่อนี้ส่งเสริมการเติบโตที่มีพรสวรรค์และจิตวิญญาณที่ยอดเยี่ยม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ สร้างเส้นทางที่กลมกลืนสำหรับการเติบโตและการพัฒนาลักษณะนิสัยในเชิงบวก เหมือนต้นไม้ที่ได้รับการบำรุงเลี้ยงอย่างดีและออกผล',
    id: 'Dengan sifat Kayu Anda, nama ini mendorong pertumbuhan berbakat dan semangat yang luar biasa. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, menciptakan jalur yang harmonis untuk pertumbuhan dan pengembangan karakter positif, seperti pohon yang dirawat dengan baik dan berbuah.'
  }
},
// 15. 태형 (Tae-hyung)
{
  id: '태형_wood_01',
  harmony: {
    en: 'Your Wood nature harmonizes perfectly with this name, embodying the spirit of victorious and grand growth. The name’s meaning of triumph aligns with your innate ability to overcome challenges and inspire others, leading to a tall, magnificent, and respected success.',
    ko: '당신의 목(木) 기운은 이 이름과 완벽하게 조화를 이루며, 승리에 찬 웅장한 성장의 정신을 구현합니다. 이름에 담긴 승리의 의미는 도전을 극복하고 다른 이들에게 영감을 주는 당신의 타고난 능력과 일치하며, 높고 웅장하며 존경받는 성공으로 이어집니다.',
    fr: 'Votre nature Bois s\'harmonise parfaitement avec ce nom, incarnant l\'esprit de croissance victorieuse et grandiose. Le sens du nom de triomphe s\'aligne sur votre capacité innée à surmonter les défis et à inspirer les autres, conduisant à un succès grand, magnifique et respecté.',
    it: 'La tua natura di Legno si armonizza perfettamente con questo nome, incarnando lo spirito di una crescita vittoriosa e grandiosa. Il significato di trionfo del nome si allinea con la tua capacità innata di superare le sfide e ispirare gli altri, portando a un successo elevato, magnifico e rispettato.',
    de: 'Ihre Holz-Natur harmoniert perfekt mit diesem Namen und verkörpert den Geist des siegreichen und großen Wachstums. Die Bedeutung des Namens des Triumphs stimmt mit Ihrer angeborenen Fähigkeit überein, Herausforderungen zu meistern und andere zu inspirieren, was zu einem großen, großartigen und angesehenen Erfolg führt.',
    pt: 'Sua natureza de Madeira harmoniza-se perfeitamente com este nome, incorporando o espírito de um crescimento vitorioso e grandioso. O significado de triunfo do nome alinha-se com sua habilidade inata de superar desafios e inspirar outros, levando a um sucesso alto, magnífico e respeitado.',
    es: 'Tu naturaleza de Madera armoniza perfectly con este nombre, encarnando el espíritu de un crecimiento victorioso y grandioso. El significado de triunfo del nombre se alinea con tu habilidad innata para superar desafíos e inspirar a otros, lo que lleva a un éxito alto, magnífico y respetado.',
    ja: 'あなたの木の性質は、この名前と完全に調和し、勝利に満ちた壮大な成長の精神を具現化します。名前の勝利という意味は、挑戦を克服し、他の人を鼓舞するあなたの生来の能力と一致し、高く、壮大で、尊敬される成功につながります。',
    th: 'ธรรมชาติธาตุไม้ของคุณสอดคล้องกับชื่อนี้อย่างสมบูรณ์แบบ แสดงถึงจิตวิญญาณแห่งการเติบโตที่ยิ่งใหญ่และได้รับชัยชนะ ความหมายแห่งชัยชนะของชื่อสอดคล้องกับความสามารถโดยกำเนิดของคุณในการเอาชนะความท้าทายและสร้างแรงบันดาลใจให้ผู้อื่น นำไปสู่ความสำเร็จที่สูงส่ง งดงาม และน่าเคารพ',
    id: 'Sifat Kayu Anda selaras sempurna dengan nama ini, mewujudkan semangat pertumbuhan yang jaya dan megah. Makna kemenangan dari nama ini sejalan dengan kemampuan bawaan Anda untuk mengatasi tantangan dan menginspirasi orang lain, yang mengarah pada kesuksesan yang tinggi, luar biasa, dan dihormati.'
  }
},
// 16. 남준 (Nam-jun)
{
  id: '남준_wood_01',
  harmony: {
    en: 'Your Wood nature finds perfect harmony with this name, as the warmth of the south encourages your talented growth. The name’s meaning aligns with your natural ability to nurture and flourish, creating supportive and prosperous environments where everyone can thrive.',
    ko: '당신의 목(木) 기운은 이 이름과 완벽한 조화를 이루며, 남쪽의 따스함이 당신의 재능 있는 성장을 북돋웁니다. 이름의 의미는 양육하고 번성하는 당신의 타고난 능력과 일치하여, 모든 사람이 함께 번창할 수 있는 지원적이고 풍요로운 환경을 조성합니다.',
    fr: 'Votre nature Bois trouve une harmonie parfaite avec ce nom, car la chaleur du sud encourage votre croissance talentueuse. La signification du nom s\'aligne sur votre capacité naturelle à nourrir et à vous épanouir, créant des environnements favorables et prospères où chacun peut s\'épanouir.',
    it: 'La tua natura di Legno trova un\'armonia perfetta con questo nome, poiché il calore del sud incoraggia la tua crescita talentuosa. Il significato del nome si allinea con la tua abilità naturale di nutrire e prosperare, creando ambienti di supporto e prosperi in cui tutti possono crescere.',
    de: 'Ihre Holz-Natur findet perfekte Harmonie mit diesem Namen, da die Wärme des Südens Ihr talentiertes Wachstum fördert. Die Bedeutung des Namens stimmt mit Ihrer natürlichen Fähigkeit überein, zu nähren und zu gedeihen, und schafft unterstützende und wohlhabende Umgebungen, in denen jeder gedeihen kann.',
    pt: 'Sua natureza de Madeira encontra perfeita harmonia com este nome, pois o calor do sul incentiva seu crescimento talentoso. O significado do nome se alinha com sua habilidade natural de nutrir e florescer, criando ambientes de apoio e prósperos onde todos podem prosperar.',
    es: 'Tu naturaleza de Madera encuentra una armonía perfecta con este nombre, ya que la calidez del sur fomenta tu crecimiento talentoso. El significado del nombre se alinea con tu habilidad natural para nutrir y florecer, creando ambientes de apoyo y prósperos donde todos pueden prosperar.',
    ja: 'あなたの木の性質は、南の暖かさがあなたの才能ある成長を促すので、この名前と完璧な調和を見出します。名前の意味は、育み、繁栄するあなたの自然な能力と一致し、誰もが繁栄できる支援的で繁栄した環境を作り出します。',
    th: 'ธรรมชาติธาตุไม้ของคุณพบความสามัคคีที่สมบูรณ์แบบกับชื่อนี้ เนื่องจากความอบอุ่นของทิศใต้ส่งเสริมการเติบโตที่มีพรสวรรค์ของคุณ ความหมายของชื่อสอดคล้องกับความสามารถตามธรรมชาติของคุณในการบำรุงเลี้ยงและเจริญรุ่งเรือง สร้างสภาพแวดล้อมที่สนับสนุนและเจริญรุ่งเรืองที่ทุกคนสามารถเติบโตได้',
    id: 'Sifat Kayu Anda menemukan harmoni sempurna dengan nama ini, karena kehangatan dari selatan mendorong pertumbuhan berbakat Anda. Makna nama ini selaras dengan kemampuan alami Anda untuk memelihara dan berkembang, menciptakan lingkungan yang mendukung dan makmur di mana semua orang dapat berkembang.'
  }
},
// 17. 윤기 (Yoon-gi)
{
  id: '윤기_wood_01',
  harmony: {
    en: 'With your Wood nature, this name creates a character of prosperous growth from a solid, shining foundation. These qualities align perfectly with your natural abilities, creating a path for harmonious growth and positive, radiant character development.',
    ko: '당신의 목(木) 기운으로, 이 이름은 단단하고 빛나는 기반에서 비롯된 번영하는 성장의 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 긍정적이고 빛나는 인격 발전을 위한 길을 열어줍니다.',
    fr: 'Avec votre nature Bois, ce nom crée un caractère de croissance prospère à partir d\'une base solide et brillante. Ces qualités s\'alignent perfectly with your natural abilities, creating a path for harmonious growth and positive, radiant character development.',
    it: 'Con la tua natura di Legno, questo nome crea un carattere di crescita prospera da una base solida e splendente. Queste qualità si allineano perfettamente con le tue abilità naturali, creando un percorso per una crescita armoniosa e uno sviluppo del carattere positivo e radioso.',
    de: 'Mit Ihrer Holz-Natur schafft dieser Name einen Charakter von prosperierendem Wachstum auf einer soliden, glänzenden Grundlage. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und schaffen einen Weg für harmonisches Wachstum und eine positive, strahlende Charakterentwicklung.',
    pt: 'Com sua natureza de Madeira, este nome cria um caráter de crescimento próspero a partir de uma base sólida e brilhante. Essas qualidades se alinham perfeitamente com suas habilidades naturais, criando um caminho para o crescimento harmonioso e o desenvolvimento de um caráter positivo e radiante.',
    es: 'Con tu naturaleza de Madera, este nombre crea un carácter de crecimiento próspero a partir de una base sólida y brillante. Estas cualidades se alinean perfectamente con tus habilidades naturales, creando un camino para el crecimiento armonioso y el desarrollo de un carácter positivo y radiante.',
    ja: 'あなたの木の性質で、この名前は、堅固で輝く基盤からの繁栄した成長の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と前向きで輝く人格形成への道を作り出します。',
    th: 'ด้วยธรรมชาติธาตุไม้ของคุณ ชื่อนี้สร้างลักษณะของการเติบโตที่เจริญรุ่งเรืองจากรากฐานที่มั่นคงและส่องสว่าง คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ สร้างเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยในเชิงบวกและเปล่งปลั่ง',
    id: 'Dengan sifat Kayu Anda, nama ini menciptakan karakter pertumbuhan yang makmur dari fondasi yang kokoh dan bersinar. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, menciptakan jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang positif dan bersinar.'
  }
},
// 18. 서연 (Seo-yeon)
{
  id: '서연_wood_01',
  harmony: {
    en: 'Your destiny is to weave auspicious and beautiful connections that strengthen entire communities. Like the hidden root network that nourishes a forest, you create bonds of support and prosperity for all who are touched by your harmonious and graceful spirit.',
    ko: '당신의 운명은 공동체 전체를 강화하는 상서롭고 아름다운 인연을 엮어내는 것입니다. 숲을 키우는 보이지 않는 뿌리처럼, 당신은 당신의 조화롭고 우아한 정신에 닿는 모든 이들을 위해 지지와 번영의 유대를 만들어냅니다.',
    fr: 'Votre destin est de tisser des liens auspicieux et magnifiques qui renforcent des communautés entières. Comme le réseau de racines cachées qui nourrit une forêt, vous créez des liens de soutien et de prospérité pour tous ceux qui sont touchés par votre esprit harmonieux et gracieux.',
    it: 'Il tuo destino è intrecciare connessioni propizie e meravigliose che rafforzano intere comunità. Come la rete di radici nascosta che nutre una foresta, crei legami di sostegno e prosperità per tutti coloro che sono toccati dal tuo spirito armonioso e grazioso.',
    de: 'Ihr Schicksal ist es, glückverheißende und schöne Verbindungen zu knüpfen, die ganze Gemeinschaften stärken. Wie das verborgene Wurzelnetzwerk, das einen Wald nährt, schaffen Sie Bande der Unterstützung und des Wohlstands für alle, die von Ihrem harmonischen und anmutigen Geist berührt werden.',
    pt: 'Seu destino é tecer conexões auspiciosas e belas que fortalecem comunidades inteiras. Como a rede de raízes ocultas que nutre uma floresta, você cria laços de apoio e prosperidade para todos os que são tocados pelo seu espírito harmonioso e gracioso.',
    es: 'Tu destino es tejer conexiones auspiciosas y hermosas que fortalezcan a comunidades enteras. Como la red de raíces ocultas que nutre un bosque, creas lazos de apoyo y prosperidad para todos los que son tocados por tu espíritu armonioso y elegante.',
    ja: 'あなたの運命は、コミュニティ全体を強化する縁起の良い美しいつながりを織りなすことです。森を養う隠れた根のネットワークのように、あなたはあなたの調和のとれた優雅な精神に触れるすべての人々のために、支援と繁栄の絆を築きます。',
    th: 'โชคชะตาของคุณคือการถักทอสายสัมพันธ์อันเป็นมงคลและสวยงามที่เสริมสร้างความแข็งแกร่งให้กับชุมชนทั้งหมด เช่นเดียวกับเครือข่ายรากที่ซ่อนอยู่ซึ่งหล่อเลี้ยงผืนป่า คุณสร้างสายใยแห่งการสนับสนุนและความเจริญรุ่งเรืองให้กับทุกคนที่ได้สัมผัสกับจิตวิญญาณที่กลมกลืนและสง่างามของคุณ',
    id: 'Takdir Anda adalah menjalin hubungan yang baik dan indah yang memperkuat seluruh komunitas. Seperti jaringan akar tersembunyi yang menyehatkan hutan, Anda menciptakan ikatan dukungan dan kemakmuran bagi semua yang tersentuh oleh semangat harmonis dan anggun Anda.'
  }
},
// 19. 채원 (Chae-won)
{
  id: '채원_wood_01',
  harmony: {
    en: 'Your destiny blooms with the beauty of a diverse, colorful garden, where every talent contributes to a magnificent whole. Like a master gardener who creates harmony from variety, you bring together different gifts to create spectacular and natural abundance.',
    ko: '당신의 운명은 다채로운 정원의 아름다움 속에서 피어납니다. 그곳에서는 모든 재능이 하나의 장엄한 전체를 이룹니다. 다양함 속에서 조화를 창조하는 정원사처럼, 당신은 각기 다른 재능들을 모아 화려하고 자연스러운 풍요를 만들어냅니다.',
    fr: 'Votre destin s\'épanouit avec la beauté d\'un jardin diversifié et coloré, où chaque talent contribue à un ensemble magnifique. Tel un maître jardinier qui crée l\'harmonie à partir de la variété, vous rassemblez différents dons pour créer une abondance spectaculaire et naturelle.',
    it: 'Il tuo destino fiorisce con la bellezza di un giardino vario e colorato, dove ogni talento contribuisce a un magnifico insieme. Come un maestro giardiniere che crea armonia dalla varietà, tu metti insieme doni diversi per creare un\'abbondanza spettacolare e naturale.',
    de: 'Ihr Schicksal erblüht in der Schönheit eines vielfältigen, farbenfrohen Gartens, in dem jedes Talent zu einem großartigen Ganzen beiträgt. Wie ein Gärtnermeister, der aus Vielfalt Harmonie schafft, bringen Sie verschiedene Gaben zusammen, um eine spektakuläre und natürliche Fülle zu schaffen.',
    pt: 'Seu destino floresce com a beleza de um jardim diverso e colorido, onde cada talento contribui para um todo magnífico. Como um mestre jardineiro que cria harmonia a partir da variedade, você reúne diferentes dons para criar uma abundância espetacular e natural.',
    es: 'Tu destino florece con la belleza de un jardín diverso y colorido, donde cada talento contribuye a un todo magnífico. Como un maestro jardinero que crea armonía a partir de la variedad, reúnes diferentes dones para crear una abundancia espectacular y natural.',
    ja: 'あなたの運命は、多様でカラフルな庭園の美しさで開花し、そこではすべての才能が壮大な全体に貢献します。多様性から調和を生み出すマスターガーデナーのように、あなたはさまざまな才能を結集して、壮観で自然な豊かさを生み出します。',
    th: 'โชคชะตาของคุณเบ่งบานด้วยความงามของสวนที่หลากหลายและมีสีสัน ซึ่งทุกพรสวรรค์มีส่วนช่วยสร้างทั้งหมดที่งดงาม เช่นเดียวกับนักสวนผู้เชี่ยวชาญที่สร้างความสามัคคีจากความหลากหลาย คุณรวบรวมของขวัญที่แตกต่างกันเพื่อสร้างความอุดมสมบูรณ์ที่งดงามและเป็นธรรมชาติ',
    id: 'Takdir Anda mekar dengan keindahan taman yang beragam dan penuh warna, di mana setiap bakat berkontribusi pada keseluruhan yang megah. Seperti seorang ahli taman yang menciptakan harmoni dari keragaman, Anda menyatukan berbagai karunia untuk menciptakan kelimpahan yang spektakuler dan alami.'
  }
},
// 20. 지유 (Ji-yoo)
{
  id: '지유_wood_01',
  harmony: {
    en: 'Your wisdom grows from gentle nurturing and patient understanding, blessed with the ability to cultivate abundant growth in others. Like rich earth that knows exactly what each seed needs, you provide the perfect conditions for potential to flourish into reality.',
    ko: '당신의 지혜는 부드러운 보살핌과 끈기 있는 이해 속에서 자라나며, 다른 이들의 풍요로운 성장을 이끌어내는 능력의 축복을 받았습니다. 각 씨앗에 무엇이 필요한지 정확히 아는 비옥한 땅처럼, 당신은 잠재력이 현실로 피어날 완벽한 조건을 제공합니다.',
    fr: 'Votre sagesse grandit grâce à une douce nourriture et à une compréhension patiente, bénie de la capacité de cultiver une croissance abondante chez les autres. Telle une terre riche qui sait exactly ce dont chaque graine a besoin, vous offrez les conditions parfaites pour que le potentiel s\'épanouisse en réalité.',
    it: 'La tua saggezza cresce da un nutrimento gentile e da una comprensione paziente, benedetta dalla capacità di coltivare una crescita abbondante negli altri. Come terra fertile che sa esattamente di cosa ha bisogno ogni seme, fornisci le condizioni perfette perché il potenziale fiorisca in realtà.',
    de: 'Ihre Weisheit wächst aus sanfter Pflege und geduldigem Verständnis, gesegnet mit der Fähigkeit, reichliches Wachstum bei anderen zu kultivieren. Wie reiche Erde, die genau weiß, was jeder Same braucht, schaffen Sie die perfekten Bedingungen, damit sich Potenzial zur Wirklichkeit entfalten kann.',
    pt: 'Sua sabedoria cresce a partir de um cuidado gentil e uma compreensão paciente, abençoada com a capacidade de cultivar um crescimento abundante nos outros. Como terra rica que sabe exatamente do que cada semente precisa, você fornece as condições perfeitas para que o potencial floresça em realidade.',
    es: 'Tu sabiduría crece a partir de una crianza suave y una comprensión paciente, bendecida con la capacidad de cultivar un crecimiento abundante en los demás. Como la tierra rica que sabe exactamente lo que necesita cada semilla, proporcionas las condiciones perfectas para que el potencial florezca en la realidad.',
    ja: 'あなたの知恵は、穏やかな育成と忍耐強い理解から成長し、他の人の豊かな成長を育む能力に恵まれています。それぞれの種が必要とするものを正確に知っている豊かな大地のように、あなたは可能性が現実へと開花するための完璧な条件を提供します。',
    th: 'ปัญญาของคุณเติบโตจากการบำรุงเลี้ยงที่อ่อนโยนและความเข้าใจที่อดทน ได้รับพรด้วยความสามารถในการปลูกฝังการเติบโตที่อุดมสมบูรณ์ในผู้อื่น เช่นเดียวกับดินที่อุดมสมบูรณ์ที่รู้ว่าเมล็ดพันธุ์แต่ละชนิดต้องการอะไร คุณจัดเตรียมเงื่อนไขที่สมบูรณ์แบบเพื่อให้ศักยภาพเบ่งบานเป็นความจริง',
    id: 'Kebijaksanaan Anda tumbuh dari pemeliharaan yang lembut dan pemahaman yang sabar, diberkati dengan kemampuan untuk menumbuhkan pertumbuhan yang melimpah pada orang lain. Seperti tanah subur yang tahu persis apa yang dibutuhkan setiap benih, Anda menyediakan kondisi yang sempurna agar potensi dapat berkembang menjadi kenyataan.'
  }
},
// 21. 서우 (Seo-woo)
{
  id: '서우_wood_01',
  harmony: {
    en: 'Your Wood nature and this name create a character of auspicious growth and gentle spirit. These qualities align perfectly with your natural abilities, fostering a harmonious path for personal growth and positive, supportive character development.',
    ko: '당신의 목(木) 기운과 이 이름은 상서로운 성장과 온화한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 개인적인 성장과 긍정적이고 지지적인 인격 발전을 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Bois et ce nom créent un caractère de croissance auspicieuse et d\'esprit doux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin harmonieux pour la croissance personnelle et le développement d\'un caractère positif et solidaire.',
    it: 'La tua natura di Legno e questo nome creano un carattere di crescita propizia e spirito gentile. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso armonioso per la crescita personale e lo sviluppo di un carattere positivo e di supporto.',
    de: 'Ihre Holz-Natur und dieser Name schaffen einen Charakter von glückverheißendem Wachstum und sanftem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen harmonischen Weg für persönliches Wachstum und eine positive, unterstützende Charakterentwicklung.',
    pt: 'Sua natureza de Madeira e este nome criam um caráter de crescimento auspicioso e espírito gentil. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho harmonioso para o crescimento pessoal e o desenvolvimento de um caráter positivo e de apoio.',
    es: 'Tu naturaleza de Madera y este nombre crean un carácter de crecimiento auspicioso y espíritu gentil. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino armonioso para el crecimiento personal y el desarrollo de un carácter positivo y de apoyo.',
    ja: 'あなたの木の性質とこの名前は、縁起の良い成長と穏やかな精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、個人の成長と前向きで支援的な人格形成のための調和のとれた道を育みます。',
    th: 'ธรรมชาติธาตุไม้ของคุณและชื่อนี้สร้างลักษณะของการเติบโตที่เป็นมงคลและจิตวิญญาณที่อ่อนโยน คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางที่กลมกลืนสำหรับการเติบโตส่วนบุคคลและการพัฒนาลักษณะนิสัยในเชิงบวกและสนับสนุน',
    id: 'Sifat Kayu Anda dan nama ini menciptakan karakter pertumbuhan yang baik dan semangat yang lembut. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur yang harmonis untuk pertumbuhan pribadi dan pengembangan karakter yang positif dan mendukung.'
  }
},
// 22. 서진 (Seo-jin)
{
  id: '서진_wood_01',
  harmony: {
    en: 'With your Wood nature, this name fosters auspicious growth and a precious, treasured spirit. These qualities align perfectly with your natural abilities, fostering a path for growth and the development of a valuable and respected character.',
    ko: '당신의 목(木) 기운으로, 이 이름은 상서로운 성장과 귀하고 소중한 정신을 길러냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성장과 가치 있고 존경받는 인격으로 성장하기 위한 조화로운 길을 만들어냅니다.',
    fr: 'Avec votre nature Bois, ce nom favorise une croissance auspicieuse et un esprit précieux et chéri. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance et le développement d\'un caractère précieux et respecté.',
    it: 'Con la tua natura di Legno, questo nome favorisce una crescita propizia e uno spirito prezioso e caro. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita e lo sviluppo di un carattere prezioso e rispettato.',
    de: 'Mit Ihrer Holz-Natur fördert dieser Name glückverheißendes Wachstum und einen kostbaren, geschätzten Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für Wachstum und die Entwicklung eines wertvollen und angesehenen Charakters.',
    pt: 'Com sua natureza de Madeira, este nome promove o crescimento auspicioso e um espírito precioso e estimado. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento e o desenvolvimento de um caráter valioso e respeitado.',
    es: 'Con tu naturaleza de Madera, este nombre fomenta un crecimiento auspicioso y un espíritu precioso y atesorado. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento y el desarrollo de un carácter valioso y respetado.',
    ja: 'あなたの木の性質で、この名前は縁起の良い成長と貴重で大切な精神を育みます。これらの資質はあなたの自然な能力と完全に一致し、成長と価値ある尊敬される人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุไม้ของคุณ ชื่อนี้ส่งเสริมการเติบโตที่เป็นมงคลและจิตวิญญาณอันล้ำค่า คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตและการพัฒนาลักษณะนิสัยที่มีคุณค่าและเป็นที่นับถือ',
    id: 'Dengan sifat Kayu Anda, nama ini mendorong pertumbuhan yang baik dan semangat yang berharga dan dihargai. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan dan pengembangan karakter yang berharga dan dihormati.'
  }
},
// 23. 서영 (Seo-yeong)
{
  id: '서영_wood_01',
  harmony: {
    en: 'Your Wood nature harmonizes with this name to create a character of auspicious growth and a prosperous spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a successful and flourishing character.',
    ko: '당신의 목(木) 기운은 이 이름과 조화를 이루어 상서로운 성장과 번영하는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 성공적이고 번창하는 인격의 발전을 돕습니다.',
    fr: 'Votre nature Bois s\'harmonise avec ce nom pour créer un caractère de croissance auspicieuse et un esprit prospère. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère réussi et florissant.',
    it: 'La tua natura di Legno si armonizza con questo nome per creare un carattere di crescita propizia e uno spirito prospero. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere di successo e fiorente.',
    de: 'Ihre Holz-Natur harmoniert mit diesem Namen, um einen Charakter von glückverheißendem Wachstum und einem prosperierenden Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines erfolgreichen und blühenden Charakters.',
    pt: 'Sua natureza de Madeira se harmoniza com este nome para criar um caráter de crescimento auspicioso e um espírito próspero. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter bem-sucedido e florescente.',
    es: 'Tu naturaleza de Madera armoniza con este nombre para crear un carácter de crecimiento auspicioso y un espíritu próspero. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter exitoso y floreciente.',
    ja: 'あなたの木の性質は、この名前と調和して、縁起の良い成長と繁栄する精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と成功し繁栄する人格の育成を促進します。',
    th: 'ธรรมชาติธาตุไม้ของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของการเติบโตที่เป็นมงคลและจิตวิญญาณที่เจริญรุ่งเรือง คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ประสบความสำเร็จและเจริญรุ่งเรือง',
    id: 'Sifat Kayu Anda selaras dengan nama ini untuk menciptakan karakter pertumbuhan yang baik dan semangat yang makmur. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang sukses dan berkembang.'
  }
},
// 24. 지은 (Ji-eun)
{
  id: '지은_wood_01',
  harmony: {
    en: 'Your wisdom flows like a graceful river through generations, blessed with the ability to transmit knowledge with love and kindness. Like a wise teacher who nurtures growth, you create lasting legacies of understanding that enrich families and communities alike.',
    ko: '당신의 지혜는 여러 세대를 거쳐 흐르는 우아한 강물처럼, 사랑과 친절로 지식을 전달하는 능력의 축복을 받았습니다. 성장을 이끄는 현명한 스승처럼, 당신은 가족과 공동체 모두를 풍요롭게 하는 이해의 영원한 유산을 만들어냅니다.',
    fr: 'Votre sagesse coule comme une rivière gracieuse à travers les générations, bénie de la capacité de transmettre la connaissance avec amour et gentillesse. Tel un sage enseignant qui nourrit la croissance, vous créez des héritages durables de compréhension qui enrichissent les familles et les communautés.',
    it: 'La tua saggezza scorre come un fiume grazioso attraverso le generazioni, benedetta dalla capacità di trasmettere la conoscenza con amore e gentilezza. Come un saggio insegnante che nutre la crescita, crei eredità durature di comprensione che arricchiscono famiglie e comunità.',
    de: 'Ihre Weisheit fließt wie ein anmutiger Fluss durch die Generationen, gesegnet mit der Fähigkeit, Wissen mit Liebe und Freundlichkeit weiterzugeben. Wie ein weiser Lehrer, der das Wachstum fördert, schaffen Sie bleibende Vermächtnisse des Verständnisses, die Familien und Gemeinschaften gleichermaßen bereichern.',
    pt: 'Sua sabedoria flui como um rio gracioso através das gerações, abençoada com a capacidade de transmitir conhecimento com amor e bondade. Como um professor sábio que nutre o crescimento, você cria legados duradouros de compreensão que enriquecem famílias e comunidades.',
    es: 'Tu sabiduría fluye como un río elegante a través de las generaciones, bendecida con la habilidad de transmitir conocimiento con amor y amabilidad. Como un sabio maestro que nutre el crecimiento, creas legados duraderos de comprensión que enriquecen a las familias y comunidades por igual.',
    ja: 'あなたの知恵は、世代を超えて流れる優雅な川のように、愛と優しさをもって知識を伝える能力に恵まれています。成長を育む賢明な教師のように、あなたは家族とコミュニティの両方を豊かにする理解の永続的な遺産を創造します。',
    th: 'ปัญญาของคุณไหลเหมือนแม่น้ำที่สง่างามผ่านรุ่นต่อรุ่น ได้รับพรด้วยความสามารถในการถ่ายทอดความรู้ด้วยความรักและความเมตตา เช่นเดียวกับครูผู้ชาญฉลาดที่บำรุงเลี้ยงการเติบโต คุณสร้างมรดกแห่งความเข้าใจที่ยั่งยืนซึ่งทำให้ครอบครัวและชุมชนสมบูรณ์ยิ่งขึ้น',
    id: 'Kebijaksanaan Anda mengalir seperti sungai yang anggun dari generasi ke generasi, diberkati dengan kemampuan untuk menularkan pengetahuan dengan cinta dan kebaikan. Seperti seorang guru bijak yang memelihara pertumbuhan, Anda menciptakan warisan pemahaman yang langgeng yang memperkaya keluarga dan komunitas.'
  }
},
// 25. 채린 (Chae-rin)
{
  id: '채린_wood_01',
  harmony: {
    en: 'Your wisdom shines with the vibrant colors of diversity, blessed with the ability to see beauty in all perspectives. Like an autumn forest where every leaf adds to the magnificent whole, you create harmony by celebrating the unique gifts each person brings.',
    ko: '당신은 모든 관점에서 아름다움을 발견하는 능력의 축복을 받아, 당신의 지혜는 다채로운 다양성의 색으로 빛납니다. 모든 잎이 장엄한 전체를 이루는 가을 숲처럼, 당신은 각자가 가진 독특한 재능을 축복하며 조화를 만들어냅니다.',
    fr: 'Votre sagesse brille des couleurs vibrantes de la diversité, bénie de la capacité de voir la beauté dans toutes les perspectives. Comme une forêt d\'automne où chaque feuille ajoute à l\'ensemble magnifique, vous créez l\'harmonie en célébrant les dons uniques que chaque personne apporte.',
    it: 'La tua saggezza risplende dei colori vibranti della diversità, benedetta dalla capacità di vedere la bellezza in tutte le prospettive. Come una foresta autunnale in cui ogni foglia contribuisce al magnifico insieme, crei armonia celebrando i doni unici che ogni persona porta.',
    de: 'Ihre Weisheit erstrahlt in den leuchtenden Farben der Vielfalt, gesegnet mit der Fähigkeit, Schönheit in allen Perspektiven zu sehen. Wie ein Herbstwald, in dem jedes Blatt zum prächtigen Ganzen beiträgt, schaffen Sie Harmonie, indem Sie die einzigartigen Gaben feiern, die jeder Mensch mitbringt.',
    pt: 'Sua sabedoria brilha com as cores vibrantes da diversidade, abençoada com a capacidade de ver a beleza em todas as perspectivas. Como uma floresta de outono onde cada folha contribui para o todo magnífico, você cria harmonia celebrando os dons únicos que cada pessoa traz.',
    es: 'Tu sabiduría brilla con los colores vibrantes de la diversidad, bendecida con la habilidad de ver la belleza en todas las perspectivas. Como un bosque de otoño donde cada hoja se suma al magnífico todo, creas armonía celebrando los dones únicos que cada persona aporta.',
    ja: 'あなたの知恵は多様性の鮮やかな色で輝き、あらゆる視点から美しさを見る能力に恵まれています。すべての葉が壮大な全体に加わる秋の森のように、あなたは一人一人がもたらすユニークな才能を祝うことによって調和を生み出します。',
    th: 'ปัญญาของคุณส่องประกายด้วยสีสันที่สดใสของความหลากหลาย ได้รับพรด้วยความสามารถในการมองเห็นความงามในทุกมุมมอง เช่นเดียวกับป่าในฤดูใบไม้ร่วงที่ใบไม้ทุกใบช่วยเพิ่มความงดงามให้กับภาพรวม คุณสร้างความสามัคคีโดยการเฉลิมฉลองของขวัญอันเป็นเอกลักษณ์ที่แต่ละคนนำมา',
    id: 'Kebijaksanaan Anda bersinar dengan warna-warni keragaman yang cerah, diberkati dengan kemampuan untuk melihat keindahan dalam semua perspektif. Seperti hutan musim gugur di mana setiap daun menambah keseluruhan yang megah, Anda menciptakan harmoni dengan merayakan karunia unik yang dibawa setiap orang.'
  }
},
// 26. 하준 (Ha-jun)
{
  id: '하준_fire_01',
  harmony: {
    en: 'Your Fire nature and this name ignite in a perfect union of summer warmth and passionate talent. The name’s meaning resonates with your capacity for illumination, creating brilliant success like the zenith sun that nurtures all life with its generous, radiant light.',
    ko: '당신의 화(火) 기운과 이 이름은 한여름의 따스함과 열정적인 재능의 완벽한 결합으로 타오릅니다. 이름의 의미는 당신의 빛을 발하는 능력과 공명하며, 아낌없는 광채로 모든 생명을 키우는 절정의 태양처럼 눈부신 성공을 만들어냅니다.',
    fr: 'Votre nature Feu et ce nom s\'enflamment dans une union parfaite de chaleur estivale et de talent passionné. La signification du nom résonne avec votre capacité d\'illumination, créant un succès brillant comme le soleil au zénith qui nourrit toute vie de sa lumière généreuse et rayonnante.',
    it: 'La tua natura di Fuoco e questo nome si accendono in un\'unione perfetta di calore estivo e talento appassionato. Il significato del nome risuona con la tua capacità di illuminazione, creando un successo brillante come il sole allo zenit che nutre ogni forma di vita con la sua luce generosa e radiosa.',
    de: 'Ihre Feuer-Natur und dieser Name entzünden sich in einer perfekten Vereinigung von Sommerwärme und leidenschaftlichem Talent. Die Bedeutung des Namens schwingt mit Ihrer Fähigkeit zur Erleuchtung mit und schafft brillanten Erfolg wie die Zenitsonne, die alles Leben mit ihrem großzügigen, strahlenden Licht nährt.',
    pt: 'Sua natureza de Fogo e este nome se acendem em uma união perfeita de calor de verão e talento apaixonado. O significado do nome ressoa com sua capacidade de iluminação, criando um sucesso brilhante como o sol do zênite que nutre toda a vida com sua luz generosa e radiante.',
    es: 'Tu naturaleza de Fuego y este nombre se encienden en una unión perfecta de calidez de verano y talento apasionado. El significado del nombre resuena con tu capacidad de iluminación, creando un éxito brillante como el sol cenital que nutre toda la vida con su luz generosa y radiante.',
    ja: 'あなたの火の性質とこの名前は、夏の暖かさと情熱的な才能の完璧な結合で燃え上がります。名前の意味は、あなたの照明能力と共鳴し、その寛大で輝く光ですべての生命を育む天頂の太陽のような輝かしい成功を生み出します。',
    th: 'ธรรมชาติธาตุไฟของคุณและชื่อนี้จุดประกายในการผสมผสานที่ลงตัวระหว่างความอบอุ่นในฤดูร้อนและพรสวรรค์ที่เปี่ยมด้วย Leidenschaft ความหมายของชื่อสะท้อนถึงความสามารถในการให้ความสว่างของคุณ สร้างความสำเร็จที่ยอดเยี่ยมเหมือนดวงอาทิตย์ที่จุดสูงสุดที่หล่อเลี้ยงทุกชีวิตด้วยแสงที่เอื้อเฟื้อและเจิดจ้า',
    id: 'Sifat Api Anda dan nama ini menyala dalam perpaduan sempurna antara kehangatan musim panas dan bakat yang penuh semangat. Makna nama ini selaras dengan kapasitas Anda untuk penerangan, menciptakan kesuksesan cemerlang seperti matahari di puncaknya yang memelihara semua kehidupan dengan cahayanya yang murah hati dan bersinar.'
  }
},
// 27. 시우 (Si-woo)
{
  id: '시우_fire_01',
  harmony: {
    en: 'With your Fire nature, this name brings passionate energy to renewal and new beginnings. The name’s meaning of “first rain” aligns with your ability to ignite hope, creating transformative change like a storm that breaks a drought and awakens life.',
    ko: '당신의 화(火) 기운과 함께, 이 이름은 새로운 시작과 부활에 열정적인 에너지를 불어넣습니다. ‘첫 비’라는 이름의 의미는 희망에 불을 붙이는 당신의 능력과 일치하며, 가뭄을 끝내고 생명을 깨우는 폭풍우처럼 변혁적인 변화를 만들어냅니다.',
    fr: 'Avec votre nature Feu, ce nom apporte une énergie passionnée au renouveau et aux nouveaux départs. La signification du nom de « première pluie » s\'aligne sur votre capacité à allumer l\'espoir, créant un changement transformateur comme une tempête qui rompt une sécheresse et éveille la vie.',
    it: 'Con la tua natura di Fuoco, questo nome porta energia appassionata al rinnovamento e ai nuovi inizi. Il significato del nome "prima pioggia" si allinea con la tua capacità di accendere la speranza, creando un cambiamento trasformativo come una tempesta che interrompe una siccità e risveglia la vita.',
    de: 'Mit Ihrer Feuer-Natur bringt dieser Name leidenschaftliche Energie für Erneuerung und Neuanfänge. Die Bedeutung des Namens „erster Regen“ stimmt mit Ihrer Fähigkeit überein, Hoffnung zu entfachen, und schafft transformative Veränderungen wie ein Sturm, der eine Dürre beendet und das Leben erweckt.',
    pt: 'Com sua natureza de Fogo, este nome traz energia apaixonada para a renovação e novos começos. O significado do nome "primeira chuva" alinha-se com sua capacidade de acender a esperança, criando uma mudança transformadora como uma tempestade que quebra uma seca e desperta a vida.',
    es: 'Con tu naturaleza de Fuego, este nombre aporta una energía apasionada a la renovación y a los nuevos comienzos. El significado del nombre de \'primera lluvia\' se alinea con tu capacidad para encender la esperanza, creando un cambio transformador como una tormenta que rompe una sequía y despierta la vida.',
    ja: 'あなたの火の性質で、この名前は更新と新しい始まりに情熱的なエネルギーをもたらします。「最初の雨」という意味の名前は、希望に火をつけるあなたの能力と一致し、干ばつを終わらせて生命を目覚めさせる嵐のような変革的な変化を生み出します。',
    th: 'ด้วยธรรมชาติธาตุไฟของคุณ ชื่อนี้จะนำพลังงานที่เปี่ยมด้วย Leidenschaft มาสู่การฟื้นฟูและการเริ่มต้นใหม่ ความหมายของชื่อ "ฝนแรก" สอดคล้องกับความสามารถในการจุดประกายความหวังของคุณ สร้างการเปลี่ยนแปลงที่พลิกผันเหมือนพายุที่ทำลายความแห้งแล้งและปลุกชีวิตให้ตื่นขึ้น',
    id: 'Dengan sifat Api Anda, nama ini membawa energi penuh semangat untuk pembaruan dan awal yang baru. Makna nama "hujan pertama" selaras dengan kemampuan Anda untuk menyalakan harapan, menciptakan perubahan transformatif seperti badai yang memecah kekeringan dan membangkitkan kehidupan.'
  }
},
// 28. 도윤 (Do-yoon)
{
  id: '도윤_fire_01',
  harmony: {
    en: 'Your Fire nature harmonizes with this name, illuminating a path to moral prosperity through passionate integrity and transformative leadership. The name’s ethical and successful meaning resonates with your capacity for purification, creating abundance like a sacred flame that guides communities toward enlightenment.',
    ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어, 열정적인 진실성과 변혁적인 리더십을 통해 도덕적 번영의 길을 밝힙니다. 이름에 담긴 윤리적이고 성공적인 의미는 당신의 정화 능력과 공명하며, 공동체를 깨달음으로 이끄는 신성한 불꽃처럼 풍요를 창조합니다.',
    fr: 'Votre nature Feu s\'harmonise avec ce nom, éclairant un chemin vers la prospérité morale grâce à une intégrité passionnée et un leadership transformateur. La signification éthique et réussie du nom résonne avec votre capacité de purification, créant une abondance comme une flamme sacrée qui guide les communautés vers l\'illumination.',
    it: 'La tua natura di Fuoco si armonizza con questo nome, illuminando un sentiero verso la prosperità morale attraverso un\'integrità appassionata e una leadership trasformativa. Il significato etico e di successo del nome risuona con la tua capacità di purificazione, creando abbondanza come una fiamma sacra che guida le comunità verso l\'illuminazione.',
    de: 'Ihre Feuer-Natur harmoniert mit diesem Namen und erleuchtet einen Weg zu moralischem Wohlstand durch leidenschaftliche Integrität und transformative Führung. Die ethische und erfolgreiche Bedeutung des Namens schwingt mit Ihrer Fähigkeit zur Reinigung mit und schafft Fülle wie eine heilige Flamme, die Gemeinschaften zur Erleuchtung führt.',
    pt: 'Sua natureza de Fogo se harmoniza com este nome, iluminando um caminho para a prosperidade moral através da integridade apaixonada e da liderança transformadora. O significado ético e bem-sucedido do nome ressoa com sua capacidade de purificação, criando abundância como uma chama sagrada que guia as comunidades em direção à iluminação.',
    es: 'Tu naturaleza de Fuego armoniza con este nombre, iluminando un camino hacia la prosperidad moral a través de la integridad apasionada y el liderazgo transformador. El significado ético y exitoso del nombre resuena con tu capacidad de purificación, creando abundancia como una llama sagrada que guía a las comunidades hacia la iluminación.',
    ja: 'あなたの火の性質は、この名前と調和し、情熱的な誠実さと変革的なリーダーシップを通じて道徳的な繁栄への道を照らします。名前の倫理的で成功した意味は、あなたの浄化能力と共鳴し、コミュニティを悟りへと導く神聖な炎のような豊かさを生み出します。',
    th: 'ธรรมชาติธาตุไฟของคุณสอดคล้องกับชื่อนี้ ส่องสว่างเส้นทางสู่ความเจริญรุ่งเรืองทางศีลธรรมผ่านความซื่อสัตย์ที่เปี่ยมด้วย Leidenschaft และความเป็นผู้นำที่เปลี่ยนแปลง ความหมายทางจริยธรรมและความสำเร็จของชื่อสะท้อนถึงความสามารถในการชำระล้างของคุณ สร้างความอุดมสมบูรณ์เหมือนเปลวไฟศักดิ์สิทธิ์ที่นำทางชุมชนไปสู่การตรัสรู้',
    id: 'Sifat Api Anda selaras dengan nama ini, menerangi jalan menuju kemakmuran moral melalui integritas yang penuh semangat dan kepemimpinan transformatif. Makna etis dan sukses dari nama ini selaras dengan kapasitas Anda untuk pemurnian, menciptakan kelimpahan seperti nyala api suci yang membimbing komunitas menuju pencerahan.'
  }
},
// 29. 태민 (Tae-min)
{
  id: '태민_fire_01',
  harmony: {
    en: 'Your spirit burns like a great, swift flame moving toward excellence. Like lightning that strikes with perfect timing, you achieve magnificent results through passionate dedication, inspiring others with your brilliant energy and swift, decisive accomplishments.',
    ko: '당신의 영혼은 탁월함을 향해 빠르게 나아가는 거대한 불꽃처럼 타오릅니다. 완벽한 순간에 내리치는 번개처럼, 당신은 열정적인 헌신을 통해 장엄한 결과를 이루어내고, 당신의 눈부신 에너지와 신속하고 결단력 있는 성취로 다른 이들에게 영감을 줍니다.',
    fr: 'Votre esprit brûle comme une grande flamme rapide qui tend vers l\'excellence. Telle la foudre qui frappe au moment parfait, vous obtenez des résultats magnifiques grâce à un dévouement passionné, inspirant les autres par votre énergie brillante et vos accomplissements rapides et décisifs.',
    it: 'Il tuo spirito arde come una grande e rapida fiamma che si muove verso l\'eccellenza. Come un fulmine che colpisce al momento perfetto, ottieni risultati magnifici attraverso una dedizione appassionata, ispirando gli altri con la tua energia brillante e i tuoi rapidi e decisi successi.',
    de: 'Ihr Geist brennt wie eine große, schnelle Flamme, die sich auf Exzellenz zubewegt. Wie ein Blitz, der im perfekten Moment einschlägt, erzielen Sie durch leidenschaftliche Hingabe großartige Ergebnisse und inspirieren andere mit Ihrer brillanten Energie und Ihren schnellen, entscheidenden Leistungen.',
    pt: 'Seu espírito queima como uma grande e rápida chama movendo-se em direção à excelência. Como um raio que atinge no momento perfeito, você alcança resultados magníficos através da dedicação apaixonada, inspirando outros com sua energia brilhante e suas realizações rápidas e decisivas.',
    es: 'Tu espíritu arde como una gran y veloz llama que se mueve hacia la excelencia. Como un rayo que cae en el momento perfecto, logras resultados magníficos a través de una dedicación apasionada, inspirando a otros con tu energía brillante y tus logros rápidos y decisivos.',
    ja: 'あなたの精神は、卓越性に向かって動く、大きく、速い炎のように燃えます。完璧なタイミングで打つ稲妻のように、あなたは情熱的な献身を通して壮大な結果を達成し、あなたの素晴らしいエネルギーと迅速で決定的な成果で他の人を鼓舞します。',
    th: 'จิตวิญญาณของคุณลุกโชนเหมือนเปลวไฟที่ยิ่งใหญ่และรวดเร็วที่มุ่งสู่ความเป็นเลิศ เช่นเดียวกับสายฟ้าที่ฟาดลงมาในเวลาที่เหมาะสม คุณจะบรรลุผลลัพธ์ที่งดงามผ่านการอุทิศตนอย่างเปี่ยมด้วย Leidenschaft สร้างแรงบันดาลใจให้ผู้อื่นด้วยพลังงานที่ยอดเยี่ยมและความสำเร็จที่รวดเร็วและเด็ดขาดของคุณ',
    id: 'Semangat Anda membara seperti nyala api yang besar dan cepat bergerak menuju keunggulan. Seperti kilat yang menyambar pada waktu yang tepat, Anda mencapai hasil yang luar biasa melalui dedikasi yang penuh semangat, menginspirasi orang lain dengan energi cemerlang dan pencapaian yang cepat dan tegas.'
  }
},
// 30. 정우 (Jeong-woo)
{
  id: '정우_fire_01',
  harmony: {
    en: 'Your Fire nature and this name create a character of righteous passion and excellent spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a strong, positive character.',
    ko: '당신의 화(火) 기운과 이 이름은 정의로운 열정과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성장과 강하고 긍정적인 인격 발전을 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Feu et ce nom créent un caractère de passion juste et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère fort et positif.',
    it: 'La tua natura di Fuoco e questo nome creano un carattere di passione giusta e spirito eccellente. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere forte e positivo.',
    de: 'Ihre Feuer-Natur und dieser Name schaffen einen Charakter von rechtschaffener Leidenschaft und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines starken, positiven Charakters.',
    pt: 'Sua natureza de Fogo e este nome criam um caráter de paixão justa e espírito excelente. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter forte e positivo.',
    es: 'Tu naturaleza de Fuego y este nombre crean un carácter de pasión justa y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter fuerte y positivo.',
    ja: 'あなたの火の性質とこの名前は、義にかなった情熱と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と強く前向きな人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุไฟของคุณและชื่อนี้สร้างลักษณะของความหลงใหลที่ชอบธรรมและจิตวิญญาณที่ยอดเยี่ยม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่แข็งแกร่งและเป็นบวก',
    id: 'Sifat Api Anda dan nama ini menciptakan karakter semangat yang benar dan semangat yang luar biasa. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang kuat dan positif.'
  }
},
// 31. 동현 (Dong-hyun)
{
  id: '동현_fire_01',
  harmony: {
    en: 'Your destiny rises with the glory of the eastern dawn, blessed with achievements that herald new beginnings. Like the morning sun that awakens the world, your merit brings hope and renewal to all who encounter your radiant accomplishments.',
    ko: '당신의 운명은 새로운 시작을 알리는 성취로 축복받으며, 동쪽 새벽의 영광과 함께 떠오릅니다. 세상을 깨우는 아침 해처럼, 당신의 공로는 당신의 빛나는 업적을 마주하는 모든 이에게 희망과 새로움을 가져다줍니다.',
    fr: 'Votre destin se lève avec la gloire de l\'aube orientale, béni par des réalisations qui annoncent de nouveaux départs. Tel le soleil du matin qui éveille le monde, votre mérite apporte espoir et renouveau à tous ceux qui rencontrent vos réalisations rayonnantes.',
    it: 'Il tuo destino sorge con la gloria dell\'alba orientale, benedetto da successi che annunciano nuovi inizi. Come il sole del mattino che risveglia il mondo, il tuo merito porta speranza e rinnovamento a tutti coloro che incontrano le tue radiose realizzazioni.',
    de: 'Ihr Schicksal erhebt sich mit dem Ruhm der östlichen Morgendämmerung, gesegnet mit Errungenschaften, die neue Anfänge ankündigen. Wie die Morgensonne, die die Welt erweckt, bringt Ihr Verdienst allen, die Ihren strahlenden Leistungen begegnen, Hoffnung und Erneuerung.',
    pt: 'Seu destino nasce com a glória da aurora oriental, abençoado com conquistas que anunciam novos começos. Como o sol da manhã que desperta o mundo, seu mérito traz esperança e renovação a todos que encontram suas realizações radiantes.',
    es: 'Tu destino se eleva con la gloria del amanecer oriental, bendecido con logros que anuncian nuevos comienzos. Como el sol de la mañana que despierta al mundo, tu mérito trae esperanza y renovación a todos los que se encuentran con tus radiantes logros.',
    ja: 'あなたの運命は、新しい始まりを告げる成果に恵まれ、東の夜明けの栄光とともに昇ります。世界を目覚めさせる朝日のように、あなたの功績は、あなたの輝かしい業績に出会うすべての人に希望と刷新をもたらします。',
    th: 'โชคชะตาของคุณรุ่งโรจน์ด้วยความรุ่งโรจน์ของรุ่งอรุณตะวันออก ได้รับพรด้วยความสำเร็จที่เป็นลางบอกเหตุของการเริ่มต้นใหม่ เช่นเดียวกับดวงอาทิตย์ยามเช้าที่ปลุกโลกให้ตื่น คุณความดีของคุณนำความหวังและการเริ่มต้นใหม่มาสู่ทุกคนที่ได้พบกับความสำเร็จอันสดใสของคุณ',
    id: 'Takdir Anda terbit bersama kemuliaan fajar timur, diberkati dengan pencapaian yang menandai awal yang baru. Seperti matahari pagi yang membangunkan dunia, jasa Anda membawa harapan dan pembaruan bagi semua yang menyaksikan pencapaian gemilang Anda.'
  }
},
// 32. 지환 (Ji-hwan)
{
  id: '지환_fire_01',
  harmony: {
    en: 'With your Fire nature, this name creates a character of wise passion and a bright spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of an insightful and radiant character.',
    ko: '당신의 화(火) 기운으로, 이 이름은 지혜로운 열정과 밝은 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 통찰력 있고 빛나는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Avec votre nature Feu, ce nom crée un caractère de passion sage et d\'esprit brillant. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère perspicace et radieux.',
    it: 'Con la tua natura di Fuoco, questo nome crea un carattere di saggia passione e uno spirito brillante. Queste qualità si allineano perfectly con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere perspicace e radioso.',
    de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von weiser Leidenschaft und einem strahlenden Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines aufschlussreichen und strahlenden Charakters.',
    pt: 'Com sua natureza de Fogo, este nome cria um caráter de paixão sábia e um espírito brilhante. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter perspicaz e radiante.',
    es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de pasión sabia y un espíritu brillante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter perspicaz y radiante.',
    ja: 'あなたの火の性質で、この名前は賢明な情熱と明るい精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、洞察力に富んだ輝く人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุไฟของคุณ ชื่อนี้สร้างลักษณะของความหลงใหลที่ชาญฉลาดและจิตวิญญาณที่สดใส คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ลึกซึ้งและเปล่งปลั่ง',
    id: 'Dengan sifat Api Anda, nama ini menciptakan karakter semangat yang bijaksana dan semangat yang cerah. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang berwawasan luas dan bersinar.'
  }
},
// 33. 태준 (Tae-jun)
{
  id: '태준_fire_01',
  harmony: {
    en: 'Like a great bonfire that draws people together with its light and warmth, your Fire nature and this name give you a talent for creating community, connection, and a shared sense of belonging.',
    ko: '빛과 온기로 사람들을 불러 모으는 거대한 모닥불처럼, 당신의 화(火) 기운과 이 이름은 당신에게 공동체와 연결, 그리고 함께하는 소속감을 만들어내는 재능을 부여합니다.',
    fr: 'Tel un grand feu de joie qui rassemble les gens par sa lumière et sa chaleur, votre nature Feu et ce nom vous donnent le talent de créer une communauté, des liens et un sentiment d\'appartenance partagé.',
    it: 'Come un grande falò che attira le persone con la sua luce e il suo calore, la tua natura di Fuoco e questo nome ti danno il talento di creare comunità, connessione e un senso di appartenenza condiviso.',
    de: 'Wie ein großes Lagerfeuer, das Menschen mit seinem Licht und seiner Wärme zusammenbringt, verleihen Ihnen Ihre Feuernatur und dieser Name ein Talent dafür, Gemeinschaft, Verbindung und ein gemeinsames Zugehörigkeitsgefühl zu schaffen.',
    pt: 'Como uma grande fogueira que reúne as pessoas com sua luz e calor, sua natureza de Fogo e este nome lhe dão o talento para criar comunidade, conexão e um senso compartilhado de pertencimento.',
    es: 'Como una gran hoguera que une a las personas con su luz y calor, tu naturaleza de Fuego y este nombre te dan un talento para crear comunidad, conexión y un sentido de pertenencia compartido.',
    ja: '光と暖かさで人々を集める大きなたき火のように、あなたの火の性質とこの名前は、コミュニティ、つながり、そして共有された帰属意識を生み出す才能をあなたに与えます。',
    th: 'เช่นเดียวกับกองไฟขนาดใหญ่ที่ดึงดูดผู้คนด้วยแสงสว่างและความอบอุ่น ธรรมชาติธาตุไฟของคุณและชื่อนี้มอบพรสวรรค์ในการสร้างชุมชน การเชื่อมต่อ และความรู้สึกเป็นส่วนหนึ่งของกันและกัน',
    id: 'Seperti api unggun besar yang menyatukan orang-orang dengan cahaya dan kehangatannya, sifat Api Anda dan nama ini memberi Anda bakat untuk menciptakan komunitas, hubungan, dan rasa memiliki bersama.'
  }
},
// 34. 승우 (Seung-woo)
{
  id: '승우_fire_01',
  harmony: {
    en: 'Your Fire nature harmonizes with this name to create a character of victorious passion and excellent spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a triumphant, positive character.',
    ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어 승리에 찬 열정과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 승리를 쟁취하는 긍정적인 인격 발전을 위한 길을 열어줍니다.',
    fr: 'Votre nature Feu s\'harmonise avec ce nom pour créer un caractère de passion victorieuse et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère triomphant et positif.',
    it: 'La tua natura di Fuoco si armonizza con questo nome per creare un carattere di passione vittoriosa e spirito eccellente. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere trionfante e positivo.',
    de: 'Ihre Feuer-Natur harmoniert mit diesem Namen, um einen Charakter von siegreicher Leidenschaft und ausgezeichnetem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines triumphierenden, positiven Charakters.',
    pt: 'Sua natureza de Fogo se harmoniza com este nome para criar um caráter de paixão vitoriosa e espírito excelente. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter triunfante e positivo.',
    es: 'Tu naturaleza de Fuego armoniza con este nombre para crear un carácter de pasión victoriosa y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter triunfante y positivo.',
    ja: 'あなたの火の性質は、この名前と調和して、勝利の情熱と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と勝利を収めた前向きな人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุไฟของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของความหลงใหลในชัยชนะและจิตวิญญาณที่ยอดเยี่ยม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ได้รับชัยชนะและเป็นบวก',
    id: 'Sifat Api Anda selaras dengan nama ini untuk menciptakan karakter semangat kemenangan dan semangat yang luar biasa. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang berjaya dan positif.'
  }
},
// 35. 동민 (Dong-min)
{
  id: '동민_fire_01',
  harmony: {
    en: 'With your Fire nature, this name creates a character of eastern brightness and quick thinking. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a radiant and agile character.',
    ko: '당신의 화(火) 기운으로, 이 이름은 동쪽의 밝음과 빠른 사고를 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 빛나고 민첩한 인격의 발전을 돕습니다.',
    fr: 'Avec votre nature Feu, ce nom crée un caractère de luminosité orientale et de pensée rapide. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère radieux et agile.',
    it: 'Con la tua natura di Fuoco, questo nome crea un carattere di luminosità orientale e pensiero rapido. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere radioso e agile.',
    de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von östlicher Helligkeit und schnellem Denken. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines strahlenden und agilen Charakters.',
    pt: 'Com sua natureza de Fogo, este nome cria um caráter de brilho oriental e pensamento rápido. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter radiante e ágil.',
    es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de brillo oriental y pensamiento rápido. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter radiante y ágil.',
    ja: 'あなたの火の性質で、この名前は東の明るさと素早い思考の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と輝く機敏な人格の育成を促進します。',
    th: 'ด้วยธรรมชาติธาตุไฟของคุณ ชื่อนี้สร้างลักษณะของความสว่างแบบตะวันออกและการคิดที่รวดเร็ว คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่เปล่งปลั่งและว่องไว',
    id: 'Dengan sifat Api Anda, nama ini menciptakan karakter kecerahan timur dan pemikiran cepat. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang bersinar dan gesit.'
  }
},
// 36. 태우 (Tae-woo)
{
  id: '태우_fire_01',
  harmony: {
    en: 'Your Fire nature and this name combine to create a character of great passion and excellent spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a powerful and positive character.',
    ko: '당신의 화(火) 기운과 이 이름이 결합하여 위대한 열정과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 강력하고 긍정적인 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Feu et ce nom se combinent pour créer un caractère de grande passion et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère puissant et positif.',
    it: 'La tua natura di Fuoco e questo nome si combinano per creare un carattere di grande passione e spirito eccellente. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere potente e positivo.',
    de: 'Ihre Feuer-Natur und dieser Name vereinen sich zu einem Charakter von großer Leidenschaft und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines kraftvollen und positiven Charakters.',
    pt: 'Sua natureza de Fogo e este nome se combinam para criar um caráter de grande paixão e espírito excelente. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter poderoso e positivo.',
    es: 'Tu naturaleza de Fuego y este nombre se combinan para crear un carácter de gran pasión y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter poderoso y positivo.',
    ja: 'あなたの火の性質とこの名前が組み合わさって、大きな情熱と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と強力で前向きな人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุไฟของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของความหลงใหลที่ยิ่งใหญ่และจิตวิญญาณที่ยอดเยี่ยม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ทรงพลังและเป็นบวก',
    id: 'Sifat Api Anda dan nama ini bergabung untuk menciptakan karakter semangat yang besar dan semangat yang luar biasa. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang kuat dan positif.'
  }
},
// 37. 정국 (Jeong-guk)
{
  id: '정국_fire_01',
  harmony: {
    en: 'Your destiny burns with a righteous fire that protects all that is precious and sacred. Like a guardian flame defending the homeland, you are blessed with a patriotic passion and moral strength that creates safety and prosperity for your entire community.',
    ko: '당신의 운명은 소중하고 신성한 모든 것을 지키는 정의로운 불꽃으로 타오릅니다. 조국을 지키는 수호의 불꽃처럼, 당신은 공동체 전체에 안전과 번영을 가져오는 애국적인 열정과 도덕적 힘의 축복을 받았습니다.',
    fr: 'Votre destin brûle d\'un feu juste qui protège tout ce qui est précieux et sacré. Telle une flamme gardienne défendant la patrie, vous êtes béni d\'une passion patriotique et d\'une force morale qui créent la sécurité et la prospérité pour toute votre communauté.',
    it: 'Il tuo destino arde di un fuoco giusto che protegge tutto ciò che è prezioso e sacro. Come una fiamma custode che difende la patria, sei benedetto da una passione patriottica e da una forza morale che creano sicurezza e prosperità per tutta la tua comunità.',
    de: 'Ihr Schicksal brennt mit einem rechtschaffenen Feuer, das alles schützt, was kostbar und heilig ist. Wie eine Schutzflamme, die die Heimat verteidigt, sind Sie mit einer patriotischen Leidenschaft und moralischen Stärke gesegnet, die Sicherheit und Wohlstand für Ihre gesamte Gemeinschaft schaffen.',
    pt: 'Seu destino queima com um fogo justo que protege tudo o que é precioso e sagrado. Como uma chama guardiã defendendo a pátria, você é abençoado com uma paixão patriótica e uma força moral que criam segurança e prosperidade para toda a sua comunidade.',
    es: 'Tu destino arde con un fuego justo que protege todo lo que es precioso y sagrado. Como una llama guardiana que defiende la patria, eres bendecido con una pasión patriótica y una fuerza moral que crean seguridad y prosperidad para toda tu comunidad.',
    ja: 'あなたの運命は、貴重で神聖なものすべてを守る義の火で燃えています。故郷を守る守護の炎のように、あなたは愛国的な情熱と道徳的な力に恵まれ、コミュニティ全体に安全と繁栄をもたらします。',
    th: 'โชคชะตาของคุณลุกโชนด้วยไฟแห่งความชอบธรรมที่ปกป้องทุกสิ่งที่ล้ำค่าและศักดิ์สิทธิ์ เช่นเดียวกับเปลวไฟผู้พิทักษ์ที่ปกป้องบ้านเกิดเมืองนอน คุณได้รับพรด้วยความรักชาติอย่างเปี่ยมล้นและพลังทางศีลธรรมที่สร้างความปลอดภัยและความเจริญรุ่งเรืองให้กับชุมชนทั้งหมดของคุณ',
    id: 'Takdir Anda membara dengan api kebenaran yang melindungi semua yang berharga dan suci. Seperti nyala api penjaga yang membela tanah air, Anda diberkati dengan semangat patriotik dan kekuatan moral yang menciptakan keamanan dan kemakmuran bagi seluruh komunitas Anda.'
  }
},
// 38. 호석 (Ho-seok)
{
  id: '호석_fire_01',
  harmony: {
    en: 'Your spirit combines the solidity of a great stone with the warmth of a passionate fire, creating an unshakeable strength filled with joyful energy. Like a hearthstone that provides both stability and warmth, you create lasting happiness and security for yourself and others.',
    ko: '당신의 영혼은 거대한 돌의 견고함과 열정적인 불의 따스함을 결합하여, 즐거운 에너지로 가득 찬 흔들리지 않는 힘을 만들어냅니다. 안정과 온기를 모두 제공하는 화덕의 돌처럼, 당신은 자신과 다른 이들을 위해 지속적인 행복과 안정을 만들어냅니다.',
    fr: 'Votre esprit combine la solidité d\'une grande pierre avec la chaleur d\'un feu passionné, créant une force inébranlable remplie d\'énergie joyeuse. Telle une pierre de foyer qui apporte à la fois stabilité et chaleur, vous créez un bonheur et une sécurité durables pour vous-même et pour les autres.',
    it: 'Il tuo spirito combina la solidità di una grande pietra con il calore di un fuoco appassionato, creando una forza incrollabile piena di energia gioiosa. Come una pietra del focolare che fornisce stabilità e calore, crei felicità e sicurezza durature per te stesso e per gli altri.',
    de: 'Ihr Geist verbindet die Festigkeit eines großen Steins mit der Wärme eines leidenschaftlichen Feuers und schafft so eine unerschütterliche Stärke, die von freudiger Energie erfüllt ist. Wie ein Kaminstein, der sowohl Stabilität als auch Wärme spendet, schaffen Sie dauerhaftes Glück und Sicherheit für sich und andere.',
    pt: 'Seu espírito combina a solidez de uma grande pedra com o calor de um fogo apaixonado, criando uma força inabalável cheia de energia alegre. Como uma pedra de lareira que fornece estabilidade e calor, você cria felicidade e segurança duradouras para si e para os outros.',
    es: 'Tu espíritu combina la solidez de una gran piedra con el calor de un fuego apasionado, creando una fuerza inquebrantable llena de energía alegre. Como una piedra de hogar que proporciona tanto estabilidad como calidez, creas felicidad y seguridad duraderas para ti y para los demás.',
    ja: 'あなたの精神は、大きな石の堅固さと情熱的な火の暖かさを組み合わせ、楽しいエネルギーに満ちた揺るぎない強さを生み出します。安定と暖かさの両方を提供する炉床石のように、あなたは自分自身と他の人のために永続的な幸福と安全を創造します。',
    th: 'จิตวิญญาณของคุณผสมผสานความแข็งแกร่งของหินก้อนใหญ่เข้ากับความอบอุ่นของไฟที่เปี่ยมด้วย Leidenschaft สร้างความแข็งแกร่งที่ไม่สั่นคลอนซึ่งเต็มไปด้วยพลังงานที่สนุกสนาน เช่นเดียวกับหินเตาไฟที่ให้ทั้งความมั่นคงและความอบอุ่น คุณสร้างความสุขและความปลอดภัยที่ยั่งยืนให้กับตัวเองและผู้อื่น',
    id: 'Semangat Anda menggabungkan kekokohan batu besar dengan kehangatan api yang penuh semangat, menciptakan kekuatan tak tergoyahkan yang dipenuhi dengan energi gembira. Seperti batu perapian yang memberikan stabilitas dan kehangatan, Anda menciptakan kebahagiaan dan keamanan abadi untuk diri sendiri dan orang lain.'
  }
},
// 39. 서윤 (Seo-yoon)
{
  id: '서윤_fire_01',
  harmony: {
    en: 'Your path shines with the golden light of western prosperity, destined to bring abundance through your generous and allowing spirit. Like the evening star that guides travelers home, you create wealth not just for yourself but for your entire community.',
    ko: '당신의 길은 너그럽고 허용적인 정신을 통해 풍요를 가져올 운명으로, 서쪽에서 오는 번영의 황금빛으로 빛납니다. 여행자를 집으로 안내하는 저녁 별처럼, 당신은 자신뿐만 아니라 공동체 전체를 위한 부를 창출합니다.',
    fr: 'Votre chemin brille de la lumière dorée de la prospérité occidentale, destiné à apporter l\'abondance grâce à votre esprit généreux et permissif. Telle l\'étoile du soir qui guide les voyageurs chez eux, vous créez de la richesse non seulement pour vous-même mais pour toute votre communauté.',
    it: 'Il tuo sentiero brilla della luce dorata della prosperità occidentale, destinato a portare abbondanza attraverso il tuo spirito generoso e tollerante. Come la stella della sera che guida i viaggiatori a casa, crei ricchezza non solo per te stesso ma per tutta la tua comunità.',
    de: 'Ihr Weg erstrahlt im goldenen Licht des westlichen Wohlstands und ist dazu bestimmt, durch Ihren großzügigen und nachsichtigen Geist Überfluss zu bringen. Wie der Abendstern, der Reisende nach Hause führt, schaffen Sie Wohlstand nicht nur für sich selbst, sondern für Ihre gesamte Gemeinschaft.',
    pt: 'Seu caminho brilha com a luz dourada da prosperidade ocidental, destinado a trazer abundância através de seu espírito generoso e permissivo. Como a estrela da noite que guia os viajantes para casa, você cria riqueza não apenas para si mesmo, mas para toda a sua comunidade.',
    es: 'Tu camino brilla con la luz dorada de la prosperidad occidental, destinado a traer abundancia a través de tu espíritu generoso y permisivo. Como la estrella de la tarde que guía a los viajeros a casa, creas riqueza no solo para ti, sino para toda tu comunidad.',
    ja: 'あなたの道は、あなたの寛大で許容的な精神を通して豊かさをもたらす運命にある、西の繁栄の黄金の光で輝いています。旅行者を家に導く宵の明星のように、あなたは自分自身のためだけでなく、コミュニティ全体のために富を創造します。',
    th: 'เส้นทางของคุณส่องสว่างด้วยแสงสีทองแห่งความเจริญรุ่งเรืองทางตะวันตก ถูกกำหนดให้นำความอุดมสมบูรณ์มาสู่จิตวิญญาณที่เอื้อเฟื้อเผื่อแผ่และอนุญาตของคุณ เช่นเดียวกับดาวประจำเมืองที่นำทางนักเดินทางกลับบ้าน คุณสร้างความมั่งคั่งไม่เพียงแต่เพื่อตัวคุณเอง แต่เพื่อชุมชนทั้งหมดของคุณ',
    id: 'Jalan Anda bersinar dengan cahaya keemasan kemakmuran barat, ditakdirkan untuk membawa kelimpahan melalui semangat Anda yang murah hati dan mengizinkan. Seperti bintang malam yang memandu para pelancong pulang, Anda menciptakan kekayaan bukan hanya untuk diri sendiri tetapi untuk seluruh komunitas Anda.'
  }
},
// 40. 예린 (Ye-rin)
{
  id: '예린_fire_01',
  harmony: {
    en: 'Your soul burns with the dual flame of beauty and wisdom, destined to bring people together through your radiant understanding and insight. Like a gathering fire that shares both light and warmth, you naturally create communities of learning, connection, and love.',
    ko: '당신의 영혼은 아름다움과 지혜라는 두 개의 불꽃으로 타오르며, 당신의 빛나는 이해와 통찰력으로 사람들을 하나로 모을 운명입니다. 빛과 온기를 함께 나누는 모닥불처럼, 당신은 자연스럽게 배움과 연결, 그리고 사랑의 공동체를 만들어냅니다.',
    fr: 'Votre âme brûle de la double flamme de la beauté et de la sagesse, destinée à rassembler les gens grâce à votre compréhension et votre perspicacité rayonnantes. Tel un feu rassembleur qui partage à la fois la lumière et la chaleur, vous créez naturellement des communautés d\'apprentissage, de connexion et d\'amour.',
    it: 'La tua anima arde della duplice fiamma della bellezza e della saggezza, destinata a unire le persone attraverso la tua radiosa comprensione e intuizione. Come un fuoco che riunisce e condivide luce e calore, crei naturalmente comunità di apprendimento, connessione e amore.',
    de: 'Ihre Seele brennt mit der doppelten Flamme von Schönheit und Weisheit und ist dazu bestimmt, Menschen durch Ihr strahlendes Verständnis und Ihre Einsicht zusammenzubringen. Wie ein wärmendes Feuer, das sowohl Licht als auch Wärme teilt, schaffen Sie auf natürliche Weise Gemeinschaften des Lernens, der Verbindung und der Liebe.',
    pt: 'Sua alma queima com a dupla chama da beleza e da sabedoria, destinada a unir as pessoas através de sua compreensão e percepção radiantes. Como um fogo que reúne e compartilha luz e calor, você naturalmente cria comunidades de aprendizado, conexão e amor.',
    es: 'Tu alma arde con la doble llama de la belleza y la sabiduría, destinada a unir a las personas a través de tu radiante comprensión y perspicacia. Como un fuego de reunión que comparte tanto la luz como el calor, creas naturalmente comunidades de aprendizaje, conexión y amor.',
    ja: 'あなたの魂は美と知恵の二重の炎で燃え、あなたの輝く理解と洞察を通して人々を一つにする運命にあります。光と暖かさの両方を分かち合う集いの火のように、あなたは自然に学習、つながり、そして愛のコミュニティを創造します。',
    th: 'จิตวิญญาณของคุณลุกโชนด้วยเปลวไฟคู่แห่งความงามและปัญญา ถูกกำหนดให้นำผู้คนมารวมกันผ่านความเข้าใจและข้อมูลเชิงลึกที่เปล่งประกายของคุณ เช่นเดียวกับไฟรวมตัวที่แบ่งปันทั้งแสงสว่างและความอบอุ่น คุณสร้างชุมชนแห่งการเรียนรู้ การเชื่อมต่อ และความรักอย่างเป็นธรรมชาติ',
    id: 'Jiwa Anda membara dengan nyala api ganda keindahan dan kebijaksanaan, ditakdirkan untuk menyatukan orang-orang melalui pemahaman dan wawasan Anda yang cemerlang. Seperti api pertemuan yang berbagi cahaya dan kehangatan, Anda secara alami menciptakan komunitas belajar, hubungan, dan cinta.'
  }
},
// 41. 지아 (Ji-ah)
{
  id: '지아_fire_01',
  harmony: {
    en: 'Your destiny flows with the wisdom of ages and the beauty of eternal flames. You are born to be a bridge between knowledge and grace, helping others discover their own inner wisdom while creating harmony in all relationships and communities.',
    ko: '당신의 운명은 오랜 세월의 지혜와 영원한 불꽃의 아름다움과 함께 흐릅니다. 당신은 지식과 은혜 사이의 다리가 되어, 다른 사람들이 자신의 내면의 지혜를 발견하도록 돕고 모든 관계와 공동체에 조화를 창조하기 위해 태어났습니다.',
    fr: 'Votre destin coule avec la sagesse des âges et la beauté des flammes éternelles. Vous êtes né pour être un pont entre la connaissance et la grâce, aidant les autres à découvrir leur propre sagesse intérieure tout en créant l\'harmonie dans toutes les relations et communautés.',
    it: 'Il tuo destino scorre con la saggezza dei secoli e la bellezza delle fiamme eterne. Sei nato per essere un ponte tra conoscenza e grazia, aiutando gli altri a scoprire la propria saggezza interiore e creando armonia in tutte le relazioni e comunità.',
    de: 'Ihr Schicksal fließt mit der Weisheit der Zeitalter und der Schönheit ewiger Flammen. Sie sind geboren, um eine Brücke zwischen Wissen und Anmut zu sein, anderen zu helfen, ihre eigene innere Weisheit zu entdecken, während Sie in allen Beziehungen und Gemeinschaften Harmonie schaffen.',
    pt: 'Seu destino flui com a sabedoria dos séculos e a beleza das chamas eternas. Você nasceu para ser uma ponte entre o conhecimento e a graça, ajudando os outros a descobrir sua própria sabedoria interior enquanto cria harmonia em todos os relacionamentos e comunidades.',
    es: 'Tu destino fluye con la sabiduría de los siglos y la belleza de las llamas eternas. Naciste para ser un puente entre el conocimiento y la gracia, ayudando a otros a descubrir su propia sabiduría interior mientras creas armonía en todas las relaciones y comunidades.',
    ja: 'あなたの運命は、時代の知恵と永遠の炎の美しさとともに流れます。あなたは知識と恵みの間の架け橋となるために生まれ、他の人が自分自身の内なる知恵を発見するのを助けながら、すべての関係とコミュニティに調和を創造します。',
    th: 'โชคชะตาของคุณไหลลื่นด้วยปัญญาแห่งยุคสมัยและความงามของเปลวไฟนิรันดร์ คุณเกิดมาเพื่อเป็นสะพานเชื่อมระหว่างความรู้และความสง่างาม ช่วยให้ผู้อื่นค้นพบปัญญาภายในของตนเองพร้อมกับสร้างความสามัคคีในทุกความสัมพันธ์และชุมชน',
    id: 'Takdir Anda mengalir dengan kebijaksanaan zaman dan keindahan api abadi. Anda dilahirkan untuk menjadi jembatan antara pengetahuan dan anugerah, membantu orang lain menemukan kebijaksanaan batin mereka sendiri sambil menciptakan keharmonisan dalam semua hubungan dan komunitas.'
  }
},
// 42. 소연 (So-yeon)
{
  id: '소연_fire_01',
  harmony: {
    en: 'Your Fire nature harmonizes with this name to create a character of gentle passion and resilient beauty. The name’s meaning of a “small lotus” resonates with your ability to bloom in any circumstance, your inner fire providing the warmth and light for your delicate strength to unfold.',
    ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어 부드러운 열정과 강인한 아름다움을 지닌 품성을 만들어냅니다. ‘작은 연꽃’이라는 이름의 의미는 어떤 상황에서도 피어나는 당신의 능력과 공명하며, 당신의 내면의 불은 당신의 섬세한 힘이 펼쳐질 수 있도록 온기와 빛을 제공합니다.',
    fr: 'Votre nature Feu s\'harmonise avec ce nom pour créer un caractère de passion douce et de beauté résiliente. La signification du nom d\'un « petit lotus » résonne avec votre capacité à vous épanouir en toute circonstance, votre feu intérieur fournissant la chaleur et la lumière pour que votre force délicate se déploie.',
    it: 'La tua natura di Fuoco si armonizza con questo nome per creare un carattere di passione gentile e bellezza resiliente. Il significato del nome "piccolo loto" risuona con la tua capacità di sbocciare in qualsiasi circostanza, con il tuo fuoco interiore che fornisce il calore e la luce perché la tua delicata forza si dispieghi.',
    de: 'Ihre Feuer-Natur harmoniert mit diesem Namen, um einen Charakter von sanfter Leidenschaft und widerstandsfähiger Schönheit zu schaffen. Die Bedeutung des Namens „kleiner Lotus“ schwingt mit Ihrer Fähigkeit mit, unter allen Umständen zu blühen, wobei Ihr inneres Feuer die Wärme und das Licht liefert, damit sich Ihre zarte Stärke entfalten kann.',
    pt: 'Sua natureza de Fogo se harmoniza com este nome para criar um caráter de paixão gentil e beleza resiliente. O significado do nome "pequeno lótus" ressoa com sua capacidade de florescer em qualquer circunstância, com seu fogo interior fornecendo o calor e a luz para que sua força delicada se desdobre.',
    es: 'Tu naturaleza de Fuego armoniza con este nombre para crear un carácter de pasión suave y belleza resistente. El significado del nombre de un \'pequeno loto\' resuena con tu capacidad para florecer en cualquier circunstancia, tu fuego interior proporciona el calor y la luz para que tu delicada fuerza se despliegue.',
    ja: 'あなたの火の性質は、この名前と調和して、穏やかな情熱と回復力のある美しさの性格を生み出します。「小さな蓮」という意味の名前は、どんな状況でも開花するあなたの能力と共鳴し、あなたの内なる火はあなたの繊細な力が展開するための暖かさと光を提供します。',
    th: 'ธรรมชาติธาตุไฟของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของความหลงใหลที่อ่อนโยนและความงามที่ยืดหยุ่น ความหมายของชื่อ "บัวน้อย" สอดคล้องกับความสามารถของคุณในการเบ่งบานในทุกสถานการณ์ ไฟภายในของคุณให้ความอบอุ่นและแสงสว่างเพื่อให้ความแข็งแกร่งที่ละเอียดอ่อนของคุณเผยออกมา',
    id: 'Sifat Api Anda selaras dengan nama ini untuk menciptakan karakter semangat lembut dan keindahan yang tangguh. Makna nama "teratai kecil" selaras dengan kemampuan Anda untuk mekar dalam keadaan apa pun, dengan api batin Anda memberikan kehangatan dan cahaya agar kekuatan lembut Anda terungkap.'
  }
},
// 43. 예나 (Ye-na)
{
  id: '예나_fire_01',
  harmony: {
    en: 'With your Fire nature, this name creates a character of confident beauty and radiant self-expression. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a self-assured and inspiring character.',
    ko: '당신의 화(火) 기운으로, 이 이름은 자신감 있는 아름다움과 빛나는 자기표현의 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 자신감 넘치고 영감을 주는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Avec votre nature Feu, ce nom crée un caractère de beauté confiante et d\'expression de soi radieuse. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère sûr de soi et inspirant.',
    it: 'Con la tua natura di Fuoco, questo nome crea un carattere di bellezza sicura e radiosa espressione di sé. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere sicuro di sé e ispiratore.',
    de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von selbstbewusster Schönheit und strahlender Selbstdarstellung. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines selbstbewussten und inspirierenden Charakters.',
    pt: 'Com sua natureza de Fogo, este nome cria um caráter de beleza confiante e autoexpressão radiante. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter autoconfiante e inspirador.',
    es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de belleza segura y radiante autoexpresión. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter seguro de sí mismo e inspirador.',
    ja: 'あなたの火の性質で、この名前は自信に満ちた美しさと輝く自己表現の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、自信に満ちた感動的な人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุไฟของคุณ ชื่อนี้สร้างลักษณะของความงามที่มั่นใจและการแสดงออกที่เปล่งปลั่ง คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่มั่นใจและสร้างแรงบันดาลใจ',
    id: 'Dengan sifat Api Anda, nama ini menciptakan karakter keindahan yang percaya diri dan ekspresi diri yang bersinar. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang percaya diri dan menginspirasi.'
  }
},
// 44. 다은 (Da-eun)
{
  id: '다은_fire_01',
  harmony: {
    en: 'Your Fire nature and this name combine to create a character of abundant grace and radiant warmth. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a generous and brightly shining character.',
    ko: '당신의 화(火) 기운과 이 이름이 결합하여 풍부한 은혜와 빛나는 온기를 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 너그럽고 밝게 빛나는 인격의 발전을 돕습니다.',
    fr: 'Votre nature Feu et ce nom se combinent pour créer un caractère de grâce abondante et de chaleur rayonnante. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère généreux et brillamment brillant.',
    it: 'La tua natura di Fuoco e questo nome si combinano per creare un carattere di grazia abbondante e calore radioso. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere generoso e brillantemente splendente.',
    de: 'Ihre Feuernatur und dieser Name vereinen sich zu einem Charakter von überfließender Anmut und strahlender Wärme. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines großzügigen und strahlend leuchtenden Charakters.',
    pt: 'Sua natureza de Fogo e este nome se combinam para criar um caráter de graça abundante e calor radiante. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter generoso e brilhantemente resplandecente.',
    es: 'Tu naturaleza de Fuego y este nombre se combinan para crear un carácter de abundante gracia y calidez radiante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter generoso y brillantemente brillante.',
    ja: 'あなたの火の性質とこの名前が組み合わさって、豊かな恵みと輝く暖かさの性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と寛大で明るく輝く人格の育成を促進します。',
    th: 'ธรรมชาติธาตุไฟของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของความสง่างามที่อุดมสมบูรณ์และความอบอุ่นที่เปล่งปลั่ง คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ใจกว้างและส่องสว่างสดใส',
    id: 'Sifat Api Anda dan nama ini bergabung untuk menciptakan karakter anugerah yang melimpah dan kehangatan yang bersinar. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang murah hati dan bersinar terang.'
  }
},
// 45. 서현 (Seo-hyun)
{
  id: '서현_fire_01',
  harmony: {
    en: 'This name burns like a virtuous fire under auspicious stars, representing a moral character blessed with good fortune and destined to shine. Your Fire nature amplifies this, creating a path of integrity, warmth, and brilliant success.',
    ko: '이 이름은 상서로운 별빛 아래 타오르는 고결한 불꽃처럼, 행운의 축복을 받고 빛날 운명을 지닌 도덕적 품성을 나타냅니다. 당신의 화(火) 기운은 이를 증폭시켜, 진실성, 따뜻함, 그리고 눈부신 성공의 길을 만들어냅니다.',
    fr: 'Ce nom brûle comme un feu vertueux sous des étoiles auspicieuses, représentant un caractère moral béni de bonne fortune et destiné à briller. Votre nature Feu amplifie cela, créant un chemin d\'intégrité, de chaleur et de succès brillant.',
    it: 'Questo nome arde come un fuoco virtuoso sotto stelle propizie, rappresentando un carattere morale benedetto dalla buona sorte e destinato a brillare. La tua natura di Fuoco amplifica questo, creando un percorso di integrità, calore e successo brillante.',
    de: 'Dieser Name brennt wie ein tugendhaftes Feuer unter glückverheißenden Sternen und repräsentiert einen moralischen Charakter, der mit Glück gesegnet und dazu bestimmt ist, zu glänzen. Ihre Feuernatur verstärkt dies und schafft einen Weg der Integrität, Wärme und des brillanten Erfolgs.',
    pt: 'Este nome queima como um fogo virtuoso sob estrelas auspiciosas, representando um caráter moral abençoado com boa sorte e destinado a brilhar. Sua natureza de Fogo amplifica isso, criando um caminho de integridade, calor e sucesso brilhante.',
    es: 'Este nombre arde como un fuego virtuoso bajo estrellas auspiciosas, representando un carácter moral bendecido con buena fortuna y destinado a brillar. Tu naturaleza de Fuego amplifica esto, creando un camino de integridad, calidez y éxito brillante.',
    ja: 'この名前は、幸運な星の下で高潔な火のように燃え、幸運に恵まれ、輝く運命にある道徳的な性格を表しています。あなたの火の性質はこれを増幅し、誠実さ、暖かさ、そして輝かしい成功の道を作り出します。',
    th: 'ชื่อนี้ลุกโชนเหมือนไฟแห่งคุณธรรมภายใต้ดวงดาวอันเป็นมงคล แสดงถึงลักษณะทางศีลธรรมที่ได้รับพรด้วยโชคลาภและถูกกำหนดให้ส่องแสง ธรรมชาติธาตุไฟของคุณขยายสิ่งนี้ สร้างเส้นทางแห่งความซื่อสัตย์ ความอบอุ่น และความสำเร็จที่ยอดเยี่ยม',
    id: 'Nama ini membara seperti api kebajikan di bawah bintang-bintang keberuntungan, mewakili karakter moral yang diberkati dengan nasib baik dan ditakdirkan untuk bersinar. Sifat Api Anda memperkuat ini, menciptakan jalan integritas, kehangatan, dan kesuksesan yang cemerlang.'
  }
},
// 46. 지현 (Ji-hyun)
{
  id: '지현_fire_01',
  harmony: {
    en: 'Your Fire nature harmonizes with this name to create a character of wise passion and virtuous spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of an insightful and morally strong character.',
    ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어 지혜로운 열정과 덕망 있는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 통찰력 있고 도덕적으로 강한 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Feu s\'harmonise avec ce nom pour créer un caractère de passion sage et d\'esprit vertueux. Ces qualités s\'alignent perfectly avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère perspicace et moralement fort.',
    it: 'La tua natura di Fuoco si armonizza con questo nome per creare un carattere di saggia passione e spirito virtuoso. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere perspicace e moralmente forte.',
    de: 'Ihre Feuer-Natur harmoniert mit diesem Namen, um einen Charakter von weiser Leidenschaft und tugendhaftem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines aufschlussreichen und moralisch starken Charakters.',
    pt: 'Sua natureza de Fogo se harmoniza com este nome para criar um caráter de paixão sábia e espírito virtuoso. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter perspicaz e moralmente forte.',
    es: 'Tu naturaleza de Fuego armoniza con este nombre para crear un carácter de pasión sabia y espíritu virtuoso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter perspicaz y moralmente fuerte.',
    ja: 'あなたの火の性質は、この名前と調和して、賢明な情熱と高潔な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、洞察力に富んだ道徳的に強い人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุไฟของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของความหลงใหลที่ชาญฉลาดและจิตวิญญาณที่มีคุณธรรม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ลึกซึ้งและแข็งแกร่งทางศีลธรรม',
    id: 'Sifat Api Anda selaras dengan nama ini untuk menciptakan karakter semangat yang bijaksana dan semangat yang berbudi luhur. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang berwawasan luas dan kuat secara moral.'
  }
},
// 47. 예원 (Ye-won)
{
  id: '예원_fire_01',
  harmony: {
    en: 'With your Fire nature, this name creates a character of beautiful passion and a radiant, artistic spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a creative and brightly shining character.',
    ko: '당신의 화(火) 기운으로, 이 이름은 아름다운 열정과 빛나는 예술적 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 창의적이고 밝게 빛나는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Avec votre nature Feu, ce nom crée un caractère de belle passion et d\'esprit artistique radieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère créatif et brillamment brillant.',
    it: 'Con la tua natura di Fuoco, questo nome crea un carattere di bella passione e uno spirito radioso e artistico. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere creativo e brillantemente splendente.',
    de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von schöner Leidenschaft und einem strahlenden, künstlerischen Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines kreativen und strahlend leuchtenden Charakters.',
    pt: 'Com sua natureza de Fogo, este nome cria um caráter de bela paixão e um espírito radiante e artístico. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter criativo e brilhantemente resplandecente.',
    es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de hermosa pasión y un espíritu artístico radiante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter creativo y brillantemente brillante.',
    ja: 'あなたの火の性質で、この名前は美しい情熱と輝く芸術的な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、創造的で明るく輝く人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุไฟของคุณ ชื่อนี้สร้างลักษณะของความหลงใหลที่สวยงามและจิตวิญญาณแห่งศิลปะที่เปล่งปลั่ง คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่สร้างสรรค์และส่องสว่างสดใส',
    id: 'Dengan sifat Api Anda, nama ini menciptakan karakter semangat yang indah dan semangat artistik yang bersinar. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang kreatif dan bersinar terang.'
  }
},
// 48. 소희 (So-hui)
{
  id: '소희_fire_01',
  harmony: {
    en: 'Your Fire nature and this name combine to create a character of pure passion and bright, cheerful joy. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a happy and radiant character.',
    ko: '당신의 화(火) 기운과 이 이름이 결합하여 순수한 열정과 밝고 명랑한 기쁨을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 행복하고 빛나는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Feu et ce nom se combinent pour créer un caractère de pure passion et de joie vive et joyeuse. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère heureux et radieux.',
    it: 'La tua natura di Fuoco e questo nome si combinano per creare un carattere di pura passione e gioia brillante e allegra. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere felice e radioso.',
    de: 'Ihre Feuernatur und dieser Name vereinen sich zu einem Charakter von reiner Leidenschaft und strahlender, fröhlicher Freude. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines glücklichen und strahlenden Charakters.',
    pt: 'Sua natureza de Fogo e este nome se combinam para criar um caráter de pura paixão e alegria brilhante e alegre. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter feliz e radiante.',
    es: 'Tu naturaleza de Fuego y este nombre se combinan para crear un carácter de pura pasión y brillante y alegre alegría. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter feliz y radiante.',
    ja: 'あなたの火の性質とこの名前が組み合わさって、純粋な情熱と明るく陽気な喜びの性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と幸福で輝く人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุไฟของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของความหลงใหลที่บริสุทธิ์และความสุขที่สดใสและร่าเริง คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่มีความสุขและเปล่งปลั่ง',
    id: 'Sifat Api Anda dan nama ini bergabung untuk menciptakan karakter semangat murni dan kegembiraan yang cerah dan ceria. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang bahagia dan bersinar.'
  }
},
// 49. 지원 (Ji-won)
{
  id: '지원_fire_01',
  harmony: {
    en: 'Your Fire nature harmonizes with this name to create a character of wise passion and a radiant, supportive spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of an insightful and community-oriented character.',
    ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어 지혜로운 열정과 빛나고 지지적인 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 통찰력 있고 공동체 지향적인 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Feu s\'harmonise avec ce nom pour créer un caractère de passion sage et d\'esprit radieux et solidaire. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère perspicace et axé sur la communauté.',
    it: 'La tua natura di Fuoco si armonizza con questo nome per creare un carattere di saggia passione e uno spirito radioso e di supporto. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere perspicace e orientato alla comunità.',
    de: 'Ihre Feuernatur harmoniert mit diesem Namen, um einen Charakter von weiser Leidenschaft und einem strahlenden, unterstützenden Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines aufschlussreichen und gemeinschaftsorientierten Charakters.',
    pt: 'Sua natureza de Fogo se harmoniza com este nome para criar um caráter de paixão sábia e um espírito radiante e de apoio. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter perspicaz e orientado para a comunidade.',
    es: 'Tu naturaleza de Fuego armoniza con este nombre para crear un carácter de pasión sabia y un espíritu radiante y de apoyo. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter perspicaz y orientado a la comunidad.',
    ja: 'あなたの火の性質は、この名前と調和して、賢明な情熱と輝く、支援的な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、洞察力に富んだコミュニティ志向の人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุไฟของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของความหลงใหลที่ชาญฉลาดและจิตวิญญาณที่เปล่งปลั่งและสนับสนุน คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ลึกซึ้งและมุ่งเน้นชุมชน',
    id: 'Sifat Api Anda selaras dengan nama ini untuk menciptakan karakter semangat yang bijaksana dan semangat yang bersinar dan mendukung. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang berwawasan luas dan berorientasi pada komunitas.'
  }
},
// 50. 예진 (Ye-jin)
{
  id: '예진_fire_01',
  harmony: {
    en: 'With your Fire nature, this name creates a character of beautiful passion and a precious, treasured spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a valuable and authentic character.',
    ko: '당신의 화(火) 기운으로, 이 이름은 아름다운 열정과 귀하고 소중한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 가치 있고 진정성 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Avec votre nature Feu, ce nom crée un caractère de belle passion et d\'esprit précieux et chéri. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère précieux et authentique.',
    it: 'Con la tua natura di Fuoco, questo nome crea un carattere di bella passione e uno spirito prezioso e caro. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere prezioso e autentico.',
    de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von schöner Leidenschaft und einem kostbaren, geschätzten Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines wertvollen und authentischen Charakters.',
    pt: 'Com sua natureza de Fogo, este nome cria um caráter de bela paixão e um espírito precioso e estimado. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter valioso e autêntico.',
    es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de hermosa pasión y un espíritu precioso y atesorado. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter valioso y auténtico.',
    ja: 'あなたの火の性質で、この名前は美しい情熱と貴重で大切な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、価値ある本物の人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุไฟของคุณ ชื่อนี้สร้างลักษณะของความหลงใหลที่สวยงามและจิตวิญญาณอันล้ำค่า คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่มีคุณค่าและเป็นของแท้',
    id: 'Dengan sifat Api Anda, nama ini menciptakan karakter semangat yang indah dan semangat yang berharga dan dihargai. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang berharga dan otentik.'
  }
},
// 51. 하영 (Ha-yeong)
{
  id: '하영_fire_01',
  harmony: {
    en: 'Your Fire nature and this name combine to create a character of great passion and a prosperous, flourishing spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a successful and radiant character.',
    ko: '당신의 화(火) 기운과 이 이름이 결합하여 위대한 열정과 번영하고 번창하는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성공적이고 빛나는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Feu et ce nom se combinent pour créer un caractère de grande passion et un esprit prospère et florissant. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère réussi et radieux.',
    it: 'La tua natura di Fuoco e questo nome si combinano per creare un carattere di grande passione e uno spirito prospero e fiorente. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere di successo e radioso.',
    de: 'Ihre Feuernatur und dieser Name vereinen sich zu einem Charakter von großer Leidenschaft und einem prosperierenden, blühenden Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines erfolgreichen und strahlenden Charakters.',
    pt: 'Sua natureza de Fogo e este nome se combinam para criar um caráter de grande paixão e um espírito próspero e florescente. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter bem-sucedido e radiante.',
    es: 'Tu naturaleza de Fogo y este nombre se combinan para crear un carácter de gran pasión y un espíritu próspero y floreciente. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter exitoso y radiante.',
    ja: 'あなたの火の性質とこの名前が組み合わさって、大きな情熱と繁栄し、繁栄する精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と成功した輝く人格の育成を促進します。',
    th: 'ธรรมชาติธาตุไฟของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของความหลงใหลที่ยิ่งใหญ่และจิตวิญญาณที่เจริญรุ่งเรืองและเฟื่องฟู คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ประสบความสำเร็จและเปล่งปลั่ง',
    id: 'Sifat Api Anda dan nama ini bergabung untuk menciptakan karakter semangat yang besar dan semangat yang makmur dan berkembang. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang sukses dan bersinar.'
  }
},
// 52. 나연 (Na-yeon)
{
  id: '나연_fire_01',
  harmony: {
    en: 'Your heart burns with the sacred fire of connection, destined to weave together souls who need each other. Like a bright flame that draws people from the cold, your Fire nature and this name allow you to create warmth and belonging wherever you shine.',
    ko: '당신의 마음은 서로를 필요로 하는 영혼들을 하나로 엮을 운명을 지닌, 신성한 연결의 불꽃으로 타오릅니다. 추위 속에서 사람들을 끌어당기는 밝은 불꽃처럼, 당신의 화(火) 기운과 이 이름은 당신이 빛나는 곳마다 따뜻함과 소속감을 만들어내게 합니다.',
    fr: 'Votre cœur brûle du feu sacré de la connexion, destiné à tisser ensemble des âmes qui ont besoin les unes des autres. Telle une flamme brillante qui attire les gens du froid, votre nature Feu et ce nom vous permettent de créer de la chaleur et un sentiment d\'appartenance partout où vous brillez.',
    it: 'Il tuo cuore arde del sacro fuoco della connessione, destinato a unire anime che hanno bisogno l\'una dell\'altra. Come una fiamma brillante che attira le persone dal freddo, la tua natura di Fuoco e questo nome ti permettono di creare calore e appartenenza ovunque tu splenda.',
    de: 'Ihr Herz brennt mit dem heiligen Feuer der Verbindung und ist dazu bestimmt, Seelen zusammenzuweben, die einander brauchen. Wie eine helle Flamme, die Menschen aus der Kälte anzieht, ermöglichen Ihnen Ihre Feuernatur und dieser Name, Wärme und Zugehörigkeit zu schaffen, wo immer Sie leuchten.',
    pt: 'Seu coração queima com o fogo sagrado da conexão, destinado a unir almas que precisam umas das outras. Como uma chama brilhante que atrai as pessoas do frio, sua natureza de Fogo e este nome permitem que você crie calor e pertencimento onde quer que brilhe.',
    es: 'Tu corazón arde con el fuego sagrado de la conexión, destinado a entrelazar almas que se necesitan mutuamente. Como una llama brillante que atrae a la gente del frío, tu naturaleza de Fuego y este nombre te permiten crear calidez y pertenencia dondequiera que brilles.',
    ja: 'あなたの心は、お互いを必要とする魂を結びつける運命にある、神聖なつながりの火で燃えています。寒さから人々を引き寄せる明るい炎のように、あなたの火の性質とこの名前は、あなたが輝くどこでも暖かさと帰属意識を生み出すことを可能にします。',
    th: 'หัวใจของคุณลุกโชนด้วยไฟศักดิ์สิทธิ์แห่งการเชื่อมต่อ ถูกกำหนดให้ถักทอจิตวิญญาณที่ต้องการกันและกัน เช่นเดียวกับเปลวไฟที่สว่างไสวที่ดึงดูดผู้คนจากความหนาวเย็น ธรรมชาติธาตุไฟของคุณและชื่อนี้ช่วยให้คุณสร้างความอบอุ่นและความรู้สึกเป็นส่วนหนึ่งของทุกที่ที่คุณส่องแสง',
    id: 'Hati Anda membara dengan api suci hubungan, ditakdirkan untuk menyatukan jiwa-jiwa yang saling membutuhkan. Seperti nyala api terang yang menarik orang dari kedinginan, sifat Api Anda dan nama ini memungkinkan Anda menciptakan kehangatan dan rasa memiliki di mana pun Anda bersinar.'
  }
},
// 53. 정연 (Jeong-yeon)
{
  id: '정연_fire_01',
  harmony: {
    en: 'This name burns like a righteous fire that forges pure and honest connections. With your Fire nature, this represents a character built on moral strength, warm sincerity, and the courage to create and protect truthful relationships.',
    ko: '이 이름은 순수하고 정직한 인연을 맺는 정의로운 불꽃처럼 타오릅니다. 당신의 화(火) 기운과 함께, 이는 도덕적 힘, 따뜻한 진실성, 그리고 진실된 관계를 만들고 지키는 용기 위에 세워진 품성을 나타냅니다.',
    fr: 'Ce nom brûle comme un feu juste qui forge des liens purs et honnêtes. Avec votre nature Feu, cela représente un caractère bâti sur la force morale, la sincérité chaleureuse et le courage de créer et de protéger des relations véridiques.',
    it: 'Questo nome arde come un fuoco giusto che forgia connessioni pure e oneste. Con la tua natura di Fuoco, questo rappresenta un carattere costruito sulla forza morale, la calda sincerità e il coraggio di creare e proteggere relazioni veritiere.',
    de: 'Dieser Name brennt wie ein rechtschaffenes Feuer, das reine und ehrliche Verbindungen schmiedet. Mit Ihrer Feuernatur repräsentiert dies einen Charakter, der auf moralischer Stärke, warmer Aufrichtigkeit und dem Mut, wahrhaftige Beziehungen zu schaffen und zu schützen, aufgebaut ist.',
    pt: 'Este nome queima como um fogo justo que forja conexões puras e honestas. Com sua natureza de Fogo, isso representa um caráter construído sobre força moral, sinceridade calorosa e a coragem de criar e proteger relacionamentos verdadeiros.',
    es: 'Este nombre arde como un fuego justo que forja conexiones puras y honestas. Con tu naturaleza de Fuego, esto representa un carácter construido sobre la fuerza moral, la sinceridad cálida y el coraje para crear y proteger relaciones veraces.',
    ja: 'この名前は、純粋で正直なつながりを築く義の火のように燃えます。あなたの火の性質で、これは道徳的な強さ、温かい誠実さ、そして真実の関係を創造し保護する勇気の上に築かれた性格を表しています。',
    th: 'ชื่อนี้ลุกโชนเหมือนไฟแห่งความชอบธรรมที่สร้างสายสัมพันธ์ที่บริสุทธิ์และซื่อสัตย์ ด้วยธรรมชาติธาตุไฟของคุณ สิ่งนี้แสดงถึงลักษณะนิสัยที่สร้างขึ้นจากความแข็งแกร่งทางศีลธรรม ความจริงใจที่อบอุ่น และความกล้าหาญที่จะสร้างและปกป้องความสัมพันธ์ที่จริงใจ',
    id: 'Nama ini membara seperti api kebenaran yang menjalin hubungan yang murni dan jujur. Dengan sifat Api Anda, ini melambangkan karakter yang dibangun di atas kekuatan moral, ketulusan yang hangat, dan keberanian untuk menciptakan dan melindungi hubungan yang jujur.'
  }
},
// 54. 이준 (Yi-jun)
{
  id: '이준_earth_01',
  harmony: {
    en: 'Your Earth nature harmonizes with this name, providing a stable foundation for nurturing talent and steady growth. The name’s meaning of “talented” resonates with your capacity for grounding and support, creating abundance like fertile soil that nourishes countless seeds into life.',
    ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어, 재능을 키우고 꾸준히 성장할 수 있는 안정적인 기반을 제공합니다. 이름에 담긴 ‘재능’의 의미는 당신의 굳건한 지지 능력과 공명하며, 수많은 씨앗에 생명을 불어넣는 비옥한 토양처럼 풍요를 창조합니다.',
    fr: 'Votre nature Terre s\'harmonise avec ce nom, offrant une base stable pour nourrir le talent et une croissance régulière. La signification du nom « talentueux » résonne avec votre capacité d\'ancrage et de soutien, créant une abondance comme une terre fertile qui nourrit d\'innombrables graines pour leur donner vie.',
    it: 'La tua natura di Terra si armonizza con questo nome, fornendo una base stabile per coltivare il talento e una crescita costante. Il significato di "talentuoso" del nome risuona con la tua capacità di radicamento e supporto, creando abbondanza come un terreno fertile che nutre innumerevoli semi alla vita.',
    de: 'Ihre Erdnatur harmoniert mit diesem Namen und bietet eine stabile Grundlage für die Förderung von Talent und stetigem Wachstum. Die Bedeutung des Namens „talentiert“ schwingt mit Ihrer Fähigkeit zur Erdung und Unterstützung mit und schafft Fülle wie fruchtbarer Boden, der unzählige Samen zum Leben erweckt.',
    pt: 'Sua natureza de Terra se harmoniza com este nome, fornecendo uma base estável para nutrir o talento e o crescimento constante. O significado de "talentoso" do nome ressoa com sua capacidade de aterramento e apoio, criando abundância como solo fértil que nutre inúmeras sementes para a vida.',
    es: 'Tu naturaleza de Tierra armoniza con este nombre, proporcionando una base estable para nutrir el talento y el crecimiento constante. El significado del nombre de \'talentoso\' resuena con tu capacidad de enraizamiento y apoyo, creando abundancia como la tierra fértil que nutre innumerables semillas para que cobren vida.',
    ja: 'あなたの地球の性質は、この名前と調和し、才能を育み、着実な成長を遂げるための安定した基盤を提供します。「才能のある」という意味の名前は、あなたのグラウンディングとサポートの能力と共鳴し、無数の種子を生命に育む肥沃な土壌のような豊かさを生み出します。',
    th: 'ธรรมชาติธาตุดินของคุณสอดคล้องกับชื่อนี้ ให้รากฐานที่มั่นคงสำหรับการบำรุงเลี้ยงพรสวรรค์และการเติบโตที่มั่นคง ความหมายของชื่อ "ผู้มีพรสวรรค์" สอดคล้องกับความสามารถในการหยั่งรากและการสนับสนุนของคุณ สร้างความอุดมสมบูรณ์เหมือนดินที่อุดมสมบูรณ์ที่หล่อเลี้ยงเมล็ดพันธุ์นับไม่ถ้วนให้มีชีวิต',
    id: 'Sifat Tanah Anda selaras dengan nama ini, memberikan fondasi yang stabil untuk memelihara bakat dan pertumbuhan yang stabil. Arti nama "berbakat" selaras dengan kapasitas Anda untuk membumi dan mendukung, menciptakan kelimpahan seperti tanah subur yang menyehatkan banyak benih menjadi kehidupan.'
  }
},
// 55. 주원 (Ju-won)
{
  id: '주원_earth_01',
  harmony: {
    en: 'With your Earth nature, you embody this name’s meaning as a reliable, primary source of stability and prosperity. This aligns with your ability to provide grounding support, creating lasting abundance like the bedrock that feeds eternal springs and sustains entire ecosystems.',
    ko: '당신의 토(土) 기운과 함께, 당신은 안정과 번영의 믿음직한 근원이라는 이 이름의 의미를 구현합니다. 이는 흔들리지 않는 지원을 제공하는 당신의 능력과 일치하며, 영원한 샘물을 공급하고 생태계 전체를 유지하는 기반암처럼 지속적인 풍요를 창조합니다.',
    fr: 'Avec votre nature Terre, vous incarnez la signification de ce nom en tant que source fiable et principale de stabilité et de prospérité. Cela correspond à votre capacité à fournir un soutien d\'ancrage, créant une abondance durable comme le substrat rocheux qui alimente les sources éternelles et soutient des écosystèmes entiers.',
    it: 'Con la tua natura di Terra, incarni il significato di questo nome come una fonte affidabile e primaria di stabilità e prosperità. Ciò si allinea con la tua capacità di fornire supporto di radicamento, creando un\'abbondanza duratura come la roccia madre che alimenta sorgenti eterne e sostiene interi ecosistemi.',
    de: 'Mit Ihrer Erdnatur verkörpern Sie die Bedeutung dieses Namens als zuverlässige, primäre Quelle für Stabilität und Wohlstand. Dies steht im Einklang mit Ihrer Fähigkeit, erdende Unterstützung zu bieten und dauerhaften Überfluss zu schaffen, wie das Grundgestein, das ewige Quellen speist und ganze Ökosysteme erhält.',
    pt: 'Com sua natureza de Terra, você personifica o significado deste nome como uma fonte confiável e primária de estabilidade e prosperidade. Isso se alinha com sua capacidade de fornecer suporte de aterramento, criando abundância duradoura como a rocha-mãe que alimenta fontes eternas e sustenta ecossistemas inteiros.',
    es: 'Con tu naturaleza de Tierra, encarnas el significado de este nombre como una fuente confiable y principal de estabilidad y prosperidad. Esto se alinea con tu capacidad para proporcionar un apoyo de base, creando una abundancia duradera como el lecho de roca que alimenta los manantiales eternos y sostiene ecosistemas enteros.',
    ja: 'あなたの地球の性質で、あなたはこの名前の意味を、安定と繁栄の信頼できる主要な源として具現化します。これは、あなたのグラウンディングサポートを提供する能力と一致し、永遠の泉を養い、生態系全体を維持する岩盤のような永続的な豊かさを生み出します。',
    th: 'ด้วยธรรมชาติธาตุดินของคุณ คุณเป็นตัวแทนของความหมายของชื่อนี้ในฐานะแหล่งที่มาหลักที่เชื่อถือได้ของความมั่นคงและความเจริญรุ่งเรือง สิ่งนี้สอดคล้องกับความสามารถของคุณในการให้การสนับสนุนที่หยั่งราก สร้างความอุดมสมบูรณ์ที่ยั่งยืนเหมือนหินแข็งที่หล่อเลี้ยงน้ำพุชั่วนิรันดร์และค้ำจุนระบบนิเวศทั้งหมด',
    id: 'Dengan sifat Tanah Anda, Anda mewujudkan arti nama ini sebagai sumber utama stabilitas dan kemakmuran yang dapat diandalkan. Ini sejalan dengan kemampuan Anda untuk memberikan dukungan yang membumi, menciptakan kelimpahan abadi seperti batuan dasar yang memberi makan mata air abadi dan menopang seluruh ekosistem.'
  }
},
// 56. 우진 (Woo-jin)
{
  id: '우진_earth_01',
  harmony: {
    en: 'Like fertile soil that receives rain and yields a harvest of truth, your Earth nature and this name combine to represent honest, fruitful productivity that benefits all. You are a foundation of truth and abundance.',
    ko: '비를 받아 진실의 열매를 맺는 비옥한 토양처럼, 당신의 토(土) 기운과 이 이름은 모두에게 이로운 정직하고 풍성한 결실을 맺는 조화를 이룹니다. 당신은 진실과 풍요의 기반입니다.',
    fr: 'Telle une terre fertile qui reçoit la pluie et produit une récolte de vérité, votre nature Terre et ce nom se combinent pour représenter une productivité honnête et fructueuse qui profite à tous. Vous êtes un fondement de vérité et d\'abondance.',
    it: 'Come un terreno fertile che riceve la pioggia e produce un raccolto di verità, la tua natura di Terra e questo nome si combinano per rappresentare una produttività onesta e fruttuosa a beneficio di tutti. Sei un fondamento di verità e abbondanza.',
    de: 'Wie fruchtbarer Boden, der Regen empfängt und eine Ernte der Wahrheit hervorbringt, verbinden sich Ihre Erdnatur und dieser Name, um ehrliche, fruchtbare Produktivität darzustellen, die allen zugute kommt. Sie sind ein Fundament der Wahrheit und des Überflusses.',
    pt: 'Como solo fértil que recebe chuva e produz uma colheita de verdade, sua natureza de Terra e este nome se combinam para representar uma produtividade honesta e frutífera que beneficia a todos. Você é uma base de verdade e abundância.',
    es: 'Como la tierra fértil que recibe la lluvia y produce una cosecha de verdad, tu naturaleza de Tierra y este nombre se combinan para representar una productividad honesta y fructífera que beneficia a todos. Eres un fundamento de verdad y abundancia.',
    ja: '雨を受けて真実の収穫をもたらす肥沃な土壌のように、あなたの地球の性質とこの名前は、すべての人に利益をもたらす正直で実りある生産性を表すために組み合わされています。あなたは真実と豊かさの基盤です。',
    th: 'เช่นเดียวกับดินที่อุดมสมบูรณ์ที่ได้รับฝนและให้ผลผลิตแห่งความจริง ธรรมชาติธาตุดินของคุณและชื่อนี้รวมกันเพื่อแสดงถึงผลิตภาพที่ซื่อสัตย์และเกิดผลซึ่งเป็นประโยชน์ต่อทุกคน คุณคือรากฐานแห่งความจริงและความอุดมสมบูรณ์',
    id: 'Seperti tanah subur yang menerima hujan dan menghasilkan panen kebenaran, sifat Tanah Anda dan nama ini bergabung untuk mewakili produktivitas yang jujur dan bermanfaat bagi semua. Anda adalah fondasi kebenaran dan kelimpahan.'
  }
},
// 57. 예준 (Ye-jun)
{
  id: '예준_earth_01',
  harmony: {
    en: 'Your destiny combines refined talent with humble precision, blessed to create masterworks through a respectful and grounded character. Like a wise craftsman who honors tradition while innovating, your Earth nature helps you achieve an excellence that inspires deep admiration.',
    ko: '당신의 운명은 세련된 재능과 겸손한 정밀함을 결합하여, 존중심 있고 안정된 성품을 통해 걸작을 창조하도록 축복받았습니다. 전통을 존중하며 혁신하는 현명한 장인처럼, 당신의 토(土) 기운은 깊은 감탄을 자아내는 탁월함을 성취하도록 돕습니다.',
    fr: 'Votre destin combine un talent raffiné avec une humble précision, béni de créer des chefs-d\'œuvre grâce à un caractère respectueux et ancré. Tel un sage artisan qui honore la tradition tout en innovant, votre nature Terre vous aide à atteindre une excellence qui inspire une profonde admiration.',
    it: 'Il tuo destino combina un talento raffinato con una precisione umile, benedetto per creare capolavori attraverso un carattere rispettoso e radicato. Come un saggio artigiano che onora la tradizione innovando, la tua natura di Terra ti aiuta a raggiungere un\'eccellenza che ispira profonda ammirazione.',
    de: 'Ihr Schicksal verbindet verfeinertes Talent mit bescheidener Präzision und ist gesegnet, durch einen respektvollen und geerdeten Charakter Meisterwerke zu schaffen. Wie ein weiser Handwerker, der die Tradition ehrt und gleichzeitig innovativ ist, hilft Ihnen Ihre Erdnatur, eine Exzellenz zu erreichen, die tiefe Bewunderung hervorruft.',
    pt: 'Seu destino combina talento refinado com precisão humilde, abençoado para criar obras-primas através de um caráter respeitoso e com os pés no chão. Como um sábio artesão que honra a tradição enquanto inova, sua natureza de Terra o ajuda a alcançar uma excelência que inspira profunda admiração.',
    es: 'Tu destino combina un talento refinado con una precisión humilde, bendecido para crear obras maestras a través de un carácter respetuoso y arraigado. Como un sabio artesano que honra la tradición mientras innova, tu naturaleza de Tierra te ayuda a alcanzar una excelencia que inspira una profunda admiración.',
    ja: 'あなたの運命は、洗練された才能と謙虚な正確さを組み合わせ、敬意と思いやりのある性格を通して傑作を生み出すように祝福されています。伝統を尊重しながら革新する賢明な職人のように、あなたの地球の性質は、深い賞賛を刺激する卓越性を達成するのに役立ちます。',
    th: 'โชคชะตาของคุณผสมผสานพรสวรรค์ที่ปราณีตเข้ากับความแม่นยำที่ถ่อมตน ได้รับพรให้สร้างผลงานชิ้นเอกผ่านลักษณะนิสัยที่น่าเคารพและติดดิน เช่นเดียวกับช่างฝีมือผู้ชาญฉลาดที่ให้เกียรติประเพณีในขณะที่สร้างสรรค์สิ่งใหม่ๆ ธรรมชาติธาตุดินของคุณช่วยให้คุณบรรลุความเป็นเลิศที่สร้างแรงบันดาลใจให้เกิดความชื่นชมอย่างสุดซึ้ง',
    id: 'Takdir Anda menggabungkan bakat yang halus dengan presisi yang rendah hati, diberkati untuk menciptakan karya agung melalui karakter yang penuh hormat dan membumi. Seperti seorang pengrajin bijak yang menghormati tradisi sambil berinovasi, sifat Tanah Anda membantu Anda mencapai keunggulan yang menginspirasi kekaguman yang mendalam.'
  }
},
// 58. 성현 (Seong-hyun)
{
  id: '성현_earth_01',
  harmony: {
    en: 'Your soul stands as a sacred mountain embodying divine virtue, destined to provide moral guidance and unwavering stability. Like an ancient peak that serves as a beacon, your Earth nature solidifies a character that creates a foundation of trust and righteousness for all.',
    ko: '당신의 영혼은 신성한 덕을 구현하는 성산(聖山)으로, 도덕적 지침과 확고한 안정을 제공할 운명입니다. 길잡이가 되는 오래된 봉우리처럼, 당신의 토(土) 기운은 모두를 위한 신뢰와 정의의 기초를 다지는 품성을 굳건히 합니다.',
    fr: 'Votre âme se dresse comme une montagne sacrée incarnant la vertu divine, destinée à fournir des conseils moraux et une stabilité inébranlable. Tel un ancien sommet qui sert de phare, votre nature Terre solidifie un caractère qui crée un fondement de confiance et de droiture pour tous.',
    it: 'La tua anima si erge come una montagna sacra che incarna la virtù divina, destinata a fornire una guida morale e una stabilità incrollabile. Come un\'antica cima che funge da faro, la tua natura di Terra solidifica un carattere che crea un fondamento di fiducia e rettitudine per tutti.',
    de: 'Ihre Seele steht als heiliger Berg, der die göttliche Tugend verkörpert und dazu bestimmt ist, moralische Führung und unerschütterliche Stabilität zu bieten. Wie ein alter Gipfel, der als Leuchtfeuer dient, festigt Ihre Erdnatur einen Charakter, der ein Fundament des Vertrauens und der Gerechtigkeit für alle schafft.',
    pt: 'Sua alma se ergue como uma montanha sagrada que incorpora a virtude divina, destinada a fornecer orientação moral e estabilidade inabalável. Como um pico antigo que serve de farol, sua natureza de Terra solidifica um caráter que cria uma base de confiança e retidão para todos.',
    es: 'Tu alma se erige como una montaña sagrada que encarna la virtud divina, destinada a proporcionar guía moral y una estabilidad inquebrantable. Como un pico antiguo que sirve de faro, tu naturaleza de Tierra solidifica un carácter que crea una base de confianza y rectitud para todos.',
    ja: 'あなたの魂は、神聖な美徳を具現化する聖なる山として立ち、道徳的な導きと揺るぎない安定を提供する運命にあります。ビーコンとして機能する古代の山頂のように、あなたの地球の性質は、すべての人のための信頼と義の基盤を創造する性格を固めます。',
    th: 'จิตวิญญาณของคุณตั้งตระหง่านเหมือนภูเขาศักดิ์สิทธิ์ที่รวบรวมคุณธรรมอันสูงส่ง ถูกกำหนดให้เป็นแนวทางทางศีลธรรมและความมั่นคงที่ไม่สั่นคลอน เช่นเดียวกับยอดเขาโบราณที่ทำหน้าที่เป็นสัญญาณ ธรรมชาติธาตุดินของคุณทำให้ลักษณะนิสัยที่สร้างรากฐานของความไว้วางใจและความชอบธรรมสำหรับทุกคนมั่นคงขึ้น',
    id: 'Jiwa Anda berdiri sebagai gunung suci yang mewujudkan kebajikan ilahi, ditakdirkan untuk memberikan bimbingan moral dan stabilitas yang tak tergoyahkan. Seperti puncak kuno yang berfungsi sebagai suar, sifat Tanah Anda memperkuat karakter yang menciptakan fondasi kepercayaan dan kebenaran bagi semua.'
  }
},
// 59. 준영 (Jun-yeong)
{
  id: '준영_earth_01',
  harmony: {
    en: 'Your Earth nature and this name create a character of talented growth and prosperous spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a successful and well-grounded character.',
    ko: '당신의 토(土) 기운과 이 이름이 결합하여 재능 있는 성장과 번영하는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성공적이고 안정된 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre et ce nom créent un caractère de croissance talentueuse et d\'esprit prospère. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère réussi et bien ancré.',
    it: 'La tua natura di Terra e questo nome creano un carattere di crescita talentuosa e spirito prospero. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere di successo e ben radicato.',
    de: 'Ihre Erdnatur und dieser Name schaffen einen Charakter von talentiertem Wachstum und prosperierendem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines erfolgreichen und bodenständigen Charakters.',
    pt: 'Sua natureza de Terra e este nome criam um caráter de crescimento talentoso e espírito próspero. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter bem-sucedido e bem fundamentado.',
    es: 'Tu naturaleza de Tierra y este nombre crean un carácter de crecimiento talentoso y espíritu próspero. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter exitoso y bien fundamentado.',
    ja: 'あなたの地球の性質とこの名前は、才能ある成長と繁栄する精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と成功した、地に足の着いた人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุดินของคุณและชื่อนี้สร้างลักษณะของการเติบโตที่มีพรสวรรค์และจิตวิญญาณที่เจริญรุ่งเรือง คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ประสบความสำเร็จและมีพื้นฐานที่ดี',
    id: 'Sifat Tanah Anda dan nama ini menciptakan karakter pertumbuhan berbakat dan semangat makmur. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang sukses dan membumi.'
  }
},
// 60. 윤수 (Yoon-soo)
{
  id: '윤수_earth_01',
  harmony: {
    en: 'With your Earth nature, this name creates a character of prosperous growth and excellent spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a high-achieving and abundant character.',
    ko: '당신의 토(土) 기운으로, 이 이름은 번영하는 성장과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 높은 성취를 이루고 풍요로운 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Avec votre nature Terre, ce nom crée un caractère de croissance prospère et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère très performant et abondant.',
    it: 'Con la tua natura di Terra, questo nome crea un carattere di crescita prospera e spirito eccellente. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere di successo e abbondante.',
    de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von prosperierendem Wachstum und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines leistungsstarken und reichhaltigen Charakters.',
    pt: 'Com sua natureza de Terra, este nome cria um caráter de crescimento próspero e espírito excelente. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter de alto desempenho e abundante.',
    es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de crecimiento próspero y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter de alto rendimiento y abundante.',
    ja: 'あなたの地球の性質で、この名前は繁栄した成長と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、高い達成感と豊かな人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุดินของคุณ ชื่อนี้สร้างลักษณะของการเติบโตที่เจริญรุ่งเรืองและจิตวิญญาณที่ยอดเยี่ยม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ประสบความสำเร็จสูงและอุดมสมบูรณ์',
    id: 'Dengan sifat Tanah Anda, nama ini menciptakan karakter pertumbuhan yang makmur dan semangat yang luar biasa. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang berprestasi tinggi dan berlimpah.'
  }
},
// 61. 상우 (Sang-woo)
{
  id: '상우_earth_01',
  harmony: {
    en: 'Your Earth nature and this name combine to create a character of mutual growth and excellent spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a cooperative and high-achieving character.',
    ko: '당신의 토(土) 기운과 이 이름이 결합하여 상호 성장과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 협력적이고 높은 성취를 이루는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance mutuelle et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère coopératif et très performant.',
    it: 'La tua natura di Terra e questo nome si combinano per creare un carattere di crescita reciproca e spirito eccellente. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere cooperativo e di successo.',
    de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von gegenseitigem Wachstum und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines kooperativen und leistungsstarken Charakters.',
    pt: 'Sua natureza de Terra e este nome se combinam para criar um caráter de crescimento mútuo e espírito excelente. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter cooperativo e de alto desempenho.',
    es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento mutuo y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter cooperativo y de alto rendimiento.',
    ja: 'あなたの地球の性質とこの名前が組み合わさって、相互の成長と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、協力的で高い達成感のある人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุดินของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของการเติบโตร่วมกันและจิตวิญญาณที่ยอดเยี่ยม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ให้ความร่วมมือและประสบความสำเร็จสูง',
    id: 'Sifat Tanah Anda dan nama ini bergabung untuk menciptakan karakter pertumbuhan bersama dan semangat yang luar biasa. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang kooperatif dan berprestasi tinggi.'
  }
},
// 62. 진우 (Jin-woo)
{
  id: '진우_earth_01',
  harmony: {
    en: 'Your Earth nature harmonizes with this name to create a character of precious growth and excellent spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a valuable and high-achieving character.',
    ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 귀한 성장과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 가치 있고 높은 성취를 이루는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de croissance précieuse et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère précieux et très performant.',
    it: 'La tua natura di Terra si armonizza con questo nome per creare un carattere di crescita preziosa e spirito eccellente. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere prezioso e di successo.',
    de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von kostbarem Wachstum und ausgezeichnetem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines wertvollen und leistungsstarken Charakters.',
    pt: 'Sua natureza de Terra se harmoniza com este nome para criar um caráter de crescimento precioso e espírito excelente. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter valioso e de alto desempenho.',
    es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de crecimiento precioso y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter valioso y de alto rendimiento.',
    ja: 'あなたの地球の性質は、この名前と調和して、貴重な成長と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と価値ある高い達成感のある人格の育成を促進します。',
    th: 'ธรรมชาติธาตุดินของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของการเติบโตอันล้ำค่าและจิตวิญญาณที่ยอดเยี่ยม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่มีคุณค่าและประสบความสำเร็จสูง',
    id: 'Sifat Tanah Anda selaras dengan nama ini untuk menciptakan karakter pertumbuhan yang berharga dan semangat yang luar biasa. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang berharga dan berprestasi tinggi.'
  }
},
// 63. 성진 (Seong-jin)
{
  id: '성진_earth_01',
  harmony: {
    en: 'With your Earth nature, this name creates a character of holy growth and a precious spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a sacred and valuable character.',
    ko: '당신의 토(土) 기운으로, 이 이름은 성스러운 성장과 귀한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성스럽고 가치 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Avec votre nature Terre, ce nom crée un caractère de croissance sainte et d\'esprit précieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère sacré et précieux.',
    it: 'Con la tua natura di Terra, questo nome crea un carattere di crescita santa e uno spirito prezioso. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere sacro e prezioso.',
    de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von heiligem Wachstum und einem kostbaren Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines heiligen und wertvollen Charakters.',
    pt: 'Com sua natureza de Terra, este nome cria um caráter de crescimento sagrado e um espírito precioso. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter sagrado e valioso.',
    es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de crecimiento santo y un espíritu precioso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter sagrado y valioso.',
    ja: 'あなたの地球の性質で、この名前は聖なる成長と貴重な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、神聖で価値のある人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุดินของคุณ ชื่อนี้สร้างลักษณะของการเติบโตอันศักดิ์สิทธิ์และจิตวิญญาณอันล้ำค่า คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ศักดิ์สิทธิ์และมีคุณค่า',
    id: 'Dengan sifat Tanah Anda, nama ini menciptakan karakter pertumbuhan suci dan semangat yang berharga. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang sakral dan berharga.'
  }
},
// 64. 준서 (Jun-seo)
{
  id: '준서_earth_01',
  harmony: {
    en: 'Your Earth nature and this name combine to create a character of talented growth and auspicious spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a skilled and fortunate character.',
    ko: '당신의 토(土) 기운과 이 이름이 결합하여 재능 있는 성장과 상서로운 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 숙련되고 행운이 깃든 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance talentueuse et d\'esprit auspicieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère compétent et chanceux.',
    it: 'La tua natura di Terra e questo nome si combinano per creare un carattere di crescita talentuosa e spirito propizio. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere abile e fortunato.',
    de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von talentiertem Wachstum und glückverheißendem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines qualifizierten und glücklichen Charakters.',
    pt: 'Sua natureza de Terra e este nome se combinam para criar um caráter de crescimento talentoso e espírito auspicioso. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter habilidoso e afortunado.',
    es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento talentoso y espíritu auspicioso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter hábil y afortunado.',
    ja: 'あなたの地球の性質とこの名前が組み合わさって、才能ある成長と縁起の良い精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、熟練した幸運な人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุดินของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของการเติบโตที่มีพรสวรรค์และจิตวิญญาณที่เป็นมงคล คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่มีทักษะและโชคดี',
    id: 'Sifat Tanah Anda dan nama ini bergabung untuk menciptakan karakter pertumbuhan berbakat dan semangat yang baik. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang terampil dan beruntung.'
  }
},
// 65. 윤호 (Yoon-ho)
{
  id: '윤호_earth_01',
  harmony: {
    en: 'Your Earth nature harmonizes with this name to create a character of prosperous growth and great spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a successful and grand character.',
    ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 번영하는 성장과 위대한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성공적이고 위대한 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de croissance prospère et de grand esprit. Ces qualités s\'alignent parfaitement avec vos-capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère réussi et grandiose.',
    it: 'La tua natura di Terra si armonizza con questo nome per creare un carattere di crescita prospera e grande spirito. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere di successo e grandioso.',
    de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von prosperierendem Wachstum und großem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines erfolgreichen und großen Charakters.',
    pt: 'Sua natureza de Terra se harmoniza com este nome para criar um caráter de crescimento próspero e grande espírito. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter bem-sucedido e grandioso.',
    es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de crecimiento próspero y gran espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter exitoso y grandioso.',
    ja: 'あなたの地球の性質は、この名前と調和して、繁栄した成長と偉大な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と成功した壮大な人格の育成を促進します。',
    th: 'ธรรมชาติธาตุดินของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของการเติบโตที่เจริญรุ่งเรืองและจิตวิญญาณที่ยิ่งใหญ่ คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ประสบความสำเร็จและยิ่งใหญ่',
    id: 'Sifat Tanah Anda selaras dengan nama ini untuk menciptakan karakter pertumbuhan yang makmur dan semangat yang besar. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang sukses dan agung.'
  }
},
// 66. 상민 (Sang-min)
{
  id: '상민_earth_01',
  harmony: {
    en: 'With your Earth nature, this name creates a character of mutual growth and quick thinking. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a cooperative and agile character.',
    ko: '당신의 토(土) 기운으로, 이 이름은 상호 성장과 빠른 사고를 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 협력적이고 민첩한 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Avec votre nature Terre, ce nom crée un caractère de croissance mutuelle et de pensée rapide. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère coopératif et agile.',
    it: 'Con la tua natura di Terra, questo nome crea un carattere di crescita reciproca e pensiero rapido. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere cooperativo e agile.',
    de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von gegenseitigem Wachstum und schnellem Denken. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines kooperativen und agilen Charakters.',
    pt: 'Com sua natureza de Terra, este nome cria um caráter de crescimento mútuo e pensamento rápido. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter cooperativo e ágil.',
    es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de crecimiento mutuo y pensamiento rápido. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter cooperativo y ágil.',
    ja: 'あなたの地球の性質で、この名前は相互の成長と素早い思考の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、協力的で機敏な人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุดินของคุณ ชื่อนี้สร้างลักษณะของการเติบโตร่วมกันและการคิดที่รวดเร็ว คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ให้ความร่วมมือและว่องไว',
    id: 'Dengan sifat Tanah Anda, nama ini menciptakan karakter pertumbuhan bersama dan pemikiran cepat. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang kooperatif dan gesit.'
  }
},
// 67. 성수 (Seong-soo)
{
  id: '성수_earth_01',
  harmony: {
    en: 'Your Earth nature and this name combine to create a character of holy growth and excellent spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a sacred and high-achieving character.',
    ko: '당신의 토(土) 기운과 이 이름이 결합하여 성스러운 성장과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성스럽고 높은 성취를 이루는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance sainte et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère sacré et très performant.',
    it: 'La tua natura di Terra e questo nome si combinano per creare un carattere di crescita santa e spirito eccellente. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere sacro e di successo.',
    de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von heiligem Wachstum und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines heiligen und leistungsstarken Charakters.',
    pt: 'Sua natureza de Terra e este nome se combinam para criar um caráter de crescimento sagrado e espírito excelente. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter sagrado e de alto desempenho.',
    es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento santo y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter sagrado y de alto rendimiento.',
    ja: 'あなたの地球の性質とこの名前が組み合わさって、聖なる成長と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、神聖で高い達成感のある人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุดินของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของการเติบโตอันศักดิ์สิทธิ์และจิตวิญญาณที่ยอดเยี่ยม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ศักดิ์สิทธิ์และประสบความสำเร็จสูง',
    id: 'Sifat Tanah Anda dan nama ini bergabung untuk menciptakan karakter pertumbuhan suci dan semangat yang luar biasa. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang sakral dan berprestasi tinggi.'
  }
},
// 68. 승민 (Seung-min)
{
  id: '승민_earth_01',
  harmony: {
    en: 'Your Earth nature harmonizes with this name, representing a success built on solid foundations and determined effort. The name’s meaning of victory and quickness aligns with your ability to achieve goals through a combination of persistence and agile thinking.',
    ko: '당신의 토(土) 기운은 이 이름과 조화를 이루며, 견고한 기반과 결단력 있는 노력 위에 세워진 성공을 나타냅니다. 이름에 담긴 승리와 민첩함의 의미는 끈기와 민첩한 사고의 결합을 통해 목표를 달성하는 당신의 타고난 능력과 일치합니다.',
    fr: 'Votre nature Terre s\'harmonise avec ce nom, représentant un succès bâti sur des fondations solides et un effort déterminé. La signification de victoire et de rapidité du nom s\'aligne sur votre capacité à atteindre des objectifs grâce à une combinaison de persévérance et de pensée agile.',
    it: 'La tua natura di Terra si armonizza con questo nome, rappresentando un successo costruito su solide fondamenta e uno sforzo determinato. Il significato di vittoria e prontezza del nome si allinea con la tua capacità di raggiungere gli obiettivi attraverso una combinazione di perseveranza e pensiero agile.',
    de: 'Ihre Erdnatur harmoniert mit diesem Namen und steht für einen Erfolg, der auf soliden Grundlagen und entschlossenem Bemühen aufbaut. Die Bedeutung des Namens Sieg und Schnelligkeit stimmt mit Ihrer Fähigkeit überein, Ziele durch eine Kombination aus Beharrlichkeit und agilem Denken zu erreichen.',
    pt: 'Sua natureza de Terra se harmoniza com este nome, representando um sucesso construído sobre bases sólidas e esforço determinado. O significado de vitória e rapidez do nome se alinha com sua capacidade de alcançar objetivos através de uma combinação de persistência e pensamento ágil.',
    es: 'Tu naturaleza de Tierra armoniza con este nombre, representando un éxito construido sobre cimientos sólidos y un esfuerzo decidido. El significado de victoria y rapidez del nombre se alinea con tu capacidad para lograr metas a través de una combinación de persistencia y pensamiento ágil.',
    ja: 'あなたの地球の性質は、この名前と調和し、強固な基盤と断固たる努力の上に築かれた成功を表しています。勝利と素早さという意味の名前は、粘り強さと機敏な思考の組み合わせを通じて目標を達成するあなたの能力と一致しています。',
    th: 'ธรรมชาติธาตุดินของคุณสอดคล้องกับชื่อนี้ แสดงถึงความสำเร็จที่สร้างขึ้นบนรากฐานที่มั่นคงและความพยายามที่แน่วแน่ ความหมายของชัยชนะและความรวดเร็วของชื่อสอดคล้องกับความสามารถของคุณในการบรรลุเป้าหมายผ่านการผสมผสานระหว่างความพากเพียรและการคิดที่ว่องไว',
    id: 'Sifat Tanah Anda selaras dengan nama ini, mewakili kesuksesan yang dibangun di atas fondasi yang kokoh dan usaha yang tekun. Makna kemenangan dan kecepatan dari nama ini selaras dengan kemampuan Anda untuk mencapai tujuan melalui kombinasi kegigihan dan pemikiran yang gesit.'
  }
},
// 69. 현진 (Hyun-jin)
{
  id: '현진_earth_01',
  harmony: {
    en: 'Your soul stands like precious earth embodying virtue, representing a moral character that becomes more valuable and refined through time and trials. Like a wise craftsman who honors tradition while innovating, your Earth nature helps you achieve an excellence that inspires deep admiration and respect.',
    ko: '당신의 영혼은 덕을 구현하는 귀한 흙과 같아서, 시간과 시련을 통해 더욱 가치 있고 세련되어지는 도덕적 품성을 나타냅니다. 전통을 존중하며 혁신하는 현명한 장인처럼, 당신의 토(土) 기운은 깊은 감탄과 존경을 자아내는 탁월함을 성취하도록 돕습니다.',
    fr: 'Votre âme se dresse comme une terre précieuse incarnant la vertu, représentant un caractère moral qui devient plus précieux et raffiné à travers le temps et les épreuves. Tel un sage artisan qui honore la tradition tout en innovant, votre nature Terre vous aide à atteindre une excellence qui inspire une profonde admiration et un profond respect.',
    it: 'La tua anima si erge come terra preziosa che incarna la virtù, rappresentando un carattere morale che diventa più prezioso e raffinato attraverso il tempo e le prove. Come un saggio artigiano che onora la tradizione innovando, la tua natura di Terra ti aiuta a raggiungere un\'eccellenza che ispira profonda ammirazione e rispetto.',
    de: 'Ihre Seele steht wie kostbare Erde, die Tugend verkörpert, und repräsentiert einen moralischen Charakter, der durch Zeit und Prüfungen wertvoller und verfeinerter wird. Wie ein weiser Handwerker, der die Tradition ehrt und gleichzeitig innovativ ist, hilft Ihnen Ihre Erdnatur, eine Exzellenz zu erreichen, die tiefe Bewunderung und Respekt hervorruft.',
    pt: 'Sua alma se ergue como terra preciosa que incorpora a virtude, representando um caráter moral que se torna mais valioso e refinado através do tempo e das provações. Como um sábio artesão que honra a tradição enquanto inova, sua natureza de Terra o ajuda a alcançar uma excelência que inspira profunda admiração e respeito.',
    es: 'Tu alma se erige como una tierra preciosa que encarna la virtud, representando un carácter moral que se vuelve más valioso y refinado a través del tiempo y las pruebas. Como un sabio artesano que honra la tradición mientras innova, tu naturaleza de Tierra te ayuda a alcanzar una excelencia que inspira una profunda admiración y respeto.',
    ja: 'あなたの魂は、美徳を具現化する貴重な地球のように立っており、時間と試練を通してより価値があり洗練されたものになる道徳的な性格を表しています。伝統を尊重しながら革新する賢明な職人のように、あなたの地球の性質は、深い賞賛と尊敬を刺激する卓越性を達成するのに役立ちます。',
    th: 'จิตวิญญาณของคุณเปรียบเสมือนดินอันล้ำค่าที่รวบรวมคุณธรรมไว้ แสดงถึงลักษณะทางศีลธรรมที่มีคุณค่าและปราณีตยิ่งขึ้นเมื่อผ่านกาลเวลาและการทดลอง เช่นเดียวกับช่างฝีมือผู้ชาญฉลาดที่ให้เกียรติประเพณีในขณะที่สร้างสรรค์สิ่งใหม่ๆ ธรรมชาติธาตุดินของคุณช่วยให้คุณบรรลุความเป็นเลิศที่สร้างแรงบันดาลใจให้เกิดความชื่นชมและเคารพอย่างสุดซึ้ง',
    id: 'Jiwa Anda berdiri seperti tanah berharga yang mewujudkan kebajikan, mewakili karakter moral yang menjadi lebih berharga dan halus melalui waktu dan cobaan. Seperti seorang pengrajin bijak yang menghormati tradisi sambil berinovasi, sifat Tanah Anda membantu Anda mencapai keunggulan yang menginspirasi kekaguman dan rasa hormat yang mendalam.'
  }
},
// 70. 한 (Han)
{
  id: '한_earth_01',
  harmony: {
    en: 'Like the great, vast earth that supports all life, your Earth nature and this name give you boundless potential and the ability to provide a stable, unwavering foundation for others to build upon.',
    ko: '모든 생명을 지탱하는 위대하고 광활한 대지처럼, 당신의 토(土) 기운과 이 이름은 당신에게 무한한 잠재력과 다른 사람들이 기댈 수 있는 안정되고 흔들리지 않는 기반을 제공하는 능력을 부여합니다.',
    fr: 'Telle la grande et vaste terre qui soutient toute vie, votre nature Terre et ce nom vous confèrent un potentiel illimité et la capacité de fournir une base stable et inébranlable sur laquelle les autres peuvent s\'appuyer.',
    it: 'Come la grande e vasta terra che sostiene ogni forma di vita, la tua natura di Terra e questo nome ti danno un potenziale sconfinato e la capacità di fornire una base stabile e incrollabile su cui gli altri possono costruire.',
    de: 'Wie die große, weite Erde, die alles Leben trägt, verleihen Ihnen Ihre Erdnatur und dieser Name grenzenloses Potenzial und die Fähigkeit, anderen ein stabiles, unerschütterliches Fundament zu bieten, auf dem sie aufbauen können.',
    pt: 'Como a grande e vasta terra que sustenta toda a vida, sua natureza de Terra e este nome lhe dão um potencial ilimitado e a capacidade de fornecer uma base estável e inabalável para que outros possam construir sobre ela.',
    es: 'Como la gran y vasta tierra que sustenta toda la vida, tu naturaleza de Tierra y este nombre te dan un potencial ilimitado y la capacidad de proporcionar una base estable e inquebrantable para que otros construyan sobre ella.',
    ja: 'すべての生命を支える偉大で広大な地球のように、あなたの地球の性質とこの名前は、あなたに無限の可能性と、他の人がその上に築くための安定した、揺るぎない基盤を提供する能力を与えます。',
    th: 'เช่นเดียวกับโลกอันกว้างใหญ่ที่ค้ำจุนทุกชีวิต ธรรมชาติธาตุดินของคุณและชื่อนี้มอบศักยภาพที่ไร้ขีดจำกัดและความสามารถในการเป็นรากฐานที่มั่นคงและไม่สั่นคลอนเพื่อให้ผู้อื่นได้สร้างสรรค์ต่อยอด',
    id: 'Seperti bumi yang besar dan luas yang menopang semua kehidupan, sifat Tanah Anda dan nama ini memberi Anda potensi tak terbatas dan kemampuan untuk menyediakan fondasi yang stabil dan tak tergoyahkan bagi orang lain untuk membangun di atasnya.'
  }
},
// 71. 이서 (Yi-seo)
{
  id: '이서_earth_01',
  harmony: {
    en: 'Your soul carries a gentle grace that creates auspicious conditions for others to flourish and succeed. Like fertile earth that transforms seeds into gardens, your Earth nature allows you to naturally cultivate environments where prosperity and happiness can take root and bloom.',
    ko: '당신의 영혼은 다른 이들이 번성하고 성공할 수 있는 상서로운 조건을 만들어내는 부드러운 은혜를 지니고 있습니다. 씨앗을 정원으로 바꾸는 비옥한 땅처럼, 당신의 토(土) 기운은 번영과 행복이 뿌리내리고 꽃피울 수 있는 환경을 자연스럽게 가꾸게 합니다.',
    fr: 'Votre âme porte une grâce douce qui crée des conditions auspicieuses pour que les autres s\'épanouissent et réussissent. Telle une terre fertile qui transforme les graines en jardins, votre nature Terre vous permet de cultiver naturellement des environnements où la prospérité et le bonheur peuvent prendre racine et s\'épanouir.',
    it: 'La tua anima porta una grazia gentile che crea condizioni propizie affinché gli altri possano fiorire e avere successo. Come terra fertile che trasforma i semi in giardini, la tua natura di Terra ti permette di coltivare naturalmente ambienti in cui prosperità e felicità possono mettere radici e sbocciare.',
    de: 'Ihre Seele trägt eine sanfte Anmut, die günstige Bedingungen für andere schafft, um zu gedeihen und erfolgreich zu sein. Wie fruchtbare Erde, die Samen in Gärten verwandelt, ermöglicht Ihnen Ihre Erdnatur, auf natürliche Weise Umgebungen zu kultivieren, in denen Wohlstand und Glück Wurzeln schlagen und blühen können.',
    pt: 'Sua alma carrega uma graça gentil que cria condições auspiciosas para que outros floresçam e tenham sucesso. Como terra fértil que transforma sementes em jardins, sua natureza de Terra permite que você cultive naturalmente ambientes onde a prosperidade e a felicidade podem criar raízes e florescer.',
    es: 'Tu alma lleva una gracia suave que crea condiciones auspiciosas para que otros florezcan y tengan éxito. Como la tierra fértil que transforma las semillas en jardines, tu naturaleza de Tierra te permite cultivar naturalmente ambientes donde la prosperidad y la felicidad pueden arraigar y florecer.',
    ja: 'あなたの魂は、他の人が繁栄し成功するための縁起の良い条件を作り出す穏やかな恵みを運んでいます。種子を庭に変える肥沃な大地のように、あなたの地球の性質は、繁栄と幸福が根付き、開花できる環境を自然に育むことを可能にします。',
    th: 'จิตวิญญาณของคุณมีความสง่างามที่อ่อนโยนซึ่งสร้างเงื่อนไขที่เป็นมงคลให้ผู้อื่นเจริญรุ่งเรืองและประสบความสำเร็จ เช่นเดียวกับดินที่อุดมสมบูรณ์ที่เปลี่ยนเมล็ดพันธุ์ให้กลายเป็นสวน ธรรมชาติธาตุดินของคุณช่วยให้คุณสามารถเพาะปลูกสภาพแวดล้อมที่ความเจริญรุ่งเรืองและความสุขสามารถหยั่งรากและเบ่งบานได้อย่างเป็นธรรมชาติ',
    id: 'Jiwa Anda membawa anugerah lembut yang menciptakan kondisi yang baik bagi orang lain untuk berkembang dan berhasil. Seperti tanah subur yang mengubah benih menjadi taman, sifat Tanah Anda memungkinkan Anda untuk secara alami menumbuhkan lingkungan di mana kemakmuran dan kebahagiaan dapat berakar dan mekar.'
  }
},
// 72. 수아 (Soo-ah)
{
  id: '수아_earth_01',
  harmony: {
    en: 'Your destiny flows with a quiet strength that shapes the world through persistent, beautiful action. Like a gentle stream that carves magnificent valleys, your Earth nature helps you create lasting, meaningful change through consistent grace and patient determination.',
    ko: '당신의 운명은 끈기 있고 아름다운 행동을 통해 세상을 빚어가는 조용한 힘으로 흐릅니다. 웅장한 계곡을 조각하는 부드러운 시냇물처럼, 당신의 토(土) 기운은 일관된 우아함과 끈기 있는 결단력을 통해 지속적이고 의미 있는 변화를 만들어내도록 돕습니다.',
    fr: 'Votre destin coule avec une force tranquille qui façonne le monde par une action persistante et magnifique. Tel un doux ruisseau qui sculpte de magnifiques vallées, votre nature Terre vous aide à créer un changement durable et significatif grâce à une grâce constante et une détermination patiente.',
    it: 'Il tuo destino scorre con una forza tranquilla che modella il mondo attraverso un\'azione persistente e meravigliosa. Come un dolce ruscello che scolpisce magnifiche valli, la tua natura di Terra ti aiuta a creare un cambiamento duraturo e significativo attraverso una grazia costante e una determinazione paziente.',
    de: 'Ihr Schicksal fließt mit einer stillen Stärke, die die Welt durch beharrliches, schönes Handeln formt. Wie ein sanfter Strom, der prächtige Täler formt, hilft Ihnen Ihre Erdnatur, durch beständige Anmut und geduldige Entschlossenheit dauerhafte, bedeutungsvolle Veränderungen zu schaffen.',
    pt: 'Seu destino flui com uma força tranquila que molda o mundo através de uma ação persistente e bela. Como um riacho suave que esculpe vales magníficos, sua natureza de Terra o ajuda a criar mudanças duradouras e significativas através da graça consistente e da determinação paciente.',
    es: 'Tu destino fluye con una fuerza tranquila que da forma al mundo a través de una acción persistente y hermosa. Como un arroyo suave que esculpe valles magníficos, tu naturaleza de Tierra te ayuda a crear un cambio duradero y significativo a través de una gracia constante y una determinación paciente.',
    ja: 'あなたの運命は、永続的で美しい行動を通して世界を形作る静かな力で流れます。壮大な谷を刻む穏やかな小川のように、あなたの地球の性質は、一貫した恵みと忍耐強い決意を通して、永続的で意味のある変化を生み出すのに役立ちます。',
    th: 'โชคชะตาของคุณไหลด้วยพลังอันเงียบสงบที่หล่อหลอมโลกผ่านการกระทำที่ต่อเนื่องและสวยงาม เช่นเดียวกับลำธารที่อ่อนโยนที่แกะสลักหุบเขาอันงดงาม ธรรมชาติธาตุดินของคุณช่วยให้คุณสร้างการเปลี่ยนแปลงที่ยั่งยืนและมีความหมายผ่านความสง่างามที่สม่ำเสมอและความมุ่งมั่นที่อดทน',
    id: 'Takdir Anda mengalir dengan kekuatan tenang yang membentuk dunia melalui tindakan yang gigih dan indah. Seperti aliran air lembut yang mengukir lembah-lembah megah, sifat Tanah Anda membantu Anda menciptakan perubahan yang langgeng dan bermakna melalui keanggunan yang konsisten dan tekad yang sabar.'
  }
},
// 73. 소율 (So-yul)
{
  id: '소율_earth_01',
  harmony: {
    en: 'Like the steady, grounding heartbeat of the earth itself, your Earth nature and this name give you the ability to bring harmony, stability, and a natural, calming rhythm to any aspect of life you touch.',
    ko: '마치 땅 자체의 꾸준하고 안정적인 심장 박동처럼, 당신의 토(土) 기운과 이 이름은 당신이 닿는 삶의 모든 측면에 조화, 안정, 그리고 자연스럽고 차분한 리듬을 가져다주는 능력을 부여합니다.',
    fr: 'Telle le battement de cœur régulier et ancré de la terre elle-même, votre nature Terre et ce nom vous donnent la capacité d\'apporter l\'harmonie, la stabilité et un rythme naturel et apaisant à tout aspect de la vie que vous touchez.',
    it: 'Come il battito cardiaco costante e radicante della terra stessa, la tua natura di Terra e questo nome ti danno la capacità di portare armonia, stabilità e un ritmo naturale e calmante in ogni aspetto della vita che tocchi.',
    de: 'Wie der stetige, erdende Herzschlag der Erde selbst, verleihen Ihnen Ihre Erdnatur und dieser Name die Fähigkeit, Harmonie, Stabilität und einen natürlichen, beruhigenden Rhythmus in jeden Aspekt des Lebens zu bringen, den Sie berühren.',
    pt: 'Como o batimento cardíaco constante e firme da própria terra, sua natureza de Terra e este nome lhe dão a capacidade de trazer harmonia, estabilidade e um ritmo natural e calmante para qualquer aspecto da vida que você toca.',
    es: 'Como el latido constante y firme de la tierra misma, tu naturaleza de Tierra y este nombre te dan la habilidad de traer armonía, estabilidad y un ritmo natural y calmante a cualquier aspecto de la vida que toques.',
    ja: '地球自体の安定した、地に足の着いた心臓の鼓動のように、あなたの地球の性質とこの名前は、あなたが触れる人生のあらゆる側面に調和、安定、そして自然で落ち着いたリズムをもたらす能力をあなたに与えます。',
    th: 'เช่นเดียวกับจังหวะการเต้นของหัวใจที่มั่นคงและหยั่งรากของโลก ธรรมชาติธาตุดินของคุณและชื่อนี้มอบความสามารถในการนำความสามัคคี ความมั่นคง และจังหวะที่เป็นธรรมชาติและสงบสุขมาสู่ทุกแง่มุมของชีวิตที่คุณสัมผัส',
    id: 'Seperti detak jantung bumi yang stabil dan membumi, sifat Tanah Anda dan nama ini memberi Anda kemampuan untuk membawa harmoni, stabilitas, dan ritme alami yang menenangkan ke setiap aspek kehidupan yang Anda sentuh.'
  }
},
// 74. 서아 (Seo-ah)
{
  id: '서아_earth_01',
  harmony: {
    en: 'Your Earth nature harmonizes with this name to create a character of auspicious growth and beautiful spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a fortunate and graceful character.',
    ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 상서로운 성장과 아름다운 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 행운이 깃들고 우아한 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de croissance auspicieuse et de bel esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère chanceux et gracieux.',
    it: 'La tua natura di Terra si armonizza con questo nome per creare un carattere di crescita propizia e spirito bellissimo. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo un percorso di crescita armoniosa e lo sviluppo di un carattere fortunato e grazioso.',
    de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von glückverheißendem Wachstum und schönem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines glücklichen und anmutigen Charakters.',
    pt: 'Sua natureza de Terra se harmoniza com este nome para criar um caráter de crescimento auspicioso e espírito belo. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo um caminho para o crescimento harmonioso e o desenvolvimento de um caráter afortunado e gracioso.',
    es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de crecimiento auspicioso y hermoso espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter afortunado y elegante.',
    ja: 'あなたの地球の性質は、この名前と調和して、縁起の良い成長と美しい精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、幸運で優雅な人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุดินของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของการเติบโตที่เป็นมงคลและจิตวิญญาณที่สวยงาม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมเส้นทางสำหรับการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่โชคดีและสง่างาม',
    id: 'Sifat Tanah Anda selaras dengan nama ini untuk menciptakan karakter pertumbuhan yang baik dan semangat yang indah. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong jalur untuk pertumbuhan yang harmonis dan pengembangan karakter yang beruntung dan anggun.'
  }
},
// 75. 유나 (Yu-na)
{
  id: '유나_earth_01',
  harmony: {
    en: 'Like abundant earth that generously supports all growth, your Earth nature and this name give you a warm self-confidence that allows you to nurture and encourage abundance in others as well as yourself.',
    ko: '모든 성장을 아낌없이 지원하는 풍요로운 대지처럼, 당신의 토(土) 기운과 이 이름은 당신 자신뿐만 아니라 다른 사람들의 풍요를 키우고 격려할 수 있는 따뜻한 자신감을 부여합니다.',
    fr: 'Telle une terre abondante qui soutient généreusement toute croissance, votre nature Terre et ce nom vous donnent une chaleureuse confiance en vous qui vous permet de nourrir et d\'encourager l\'abondance chez les autres ainsi qu\'en vous-même.',
    it: 'Come la terra abbondante che sostiene generosamente ogni crescita, la tua natura di Terra e questo nome ti danno una calda fiducia in te stesso che ti permette di nutrire e incoraggiare l\'abbondanza negli altri e in te stesso.',
    de: 'Wie eine reiche Erde, die großzügig alles Wachstum unterstützt, verleihen Ihnen Ihre Erdnatur und dieser Name ein warmes Selbstvertrauen, das es Ihnen ermöglicht, Fülle bei anderen und bei sich selbst zu nähren und zu fördern.',
    pt: 'Como a terra abundante que generosamente apoia todo o crescimento, sua natureza de Terra e este nome lhe dão uma calorosa autoconfiança que lhe permite nutrir e incentivar a abundância nos outros, bem como em si mesmo.',
    es: 'Como la tierra abundante que apoya generosamente todo crecimiento, tu naturaleza de Tierra y este nombre te dan una cálida confianza en ti mismo que te permite nutrir y alentar la abundancia en los demás y en ti mismo.',
    ja: 'すべての成長を惜しみなくサポートする豊かな大地のように、あなたの地球の性質とこの名前は、あなた自身だけでなく他の人の豊かさを育み、奨励することを可能にする温かい自信をあなたに与えます。',
    th: 'เช่นเดียวกับดินที่อุดมสมบูรณ์ที่สนับสนุนการเติบโตทั้งหมดอย่างไม่เห็นแก่ตัว ธรรมชาติธาตุดินของคุณและชื่อนี้มอบความมั่นใจในตนเองที่อบอุ่นซึ่งช่วยให้คุณสามารถบำรุงเลี้ยงและส่งเสริมความอุดมสมบูรณ์ในผู้อื่นและตัวคุณเอง',
    id: 'Seperti bumi yang melimpah yang dengan murah hati mendukung semua pertumbuhan, sifat Tanah Anda dan nama ini memberi Anda kepercayaan diri yang hangat yang memungkinkan Anda untuk memelihara dan mendorong kelimpahan pada orang lain maupun diri Anda sendiri.'
  }
},
// 76. 채영 (Chae-yeong)
{
  id: '채영_earth_01',
  harmony: {
    en: 'Your Earth nature harmonizes with this name, cultivating a holy and refined character through patient and steady growth. The name’s meaning of sacred refinement resonates with your ability to grow in wisdom and grace, creating a presence that is both grounding and inspiring.',
    ko: '당신의 토(土) 기운은 이 이름과 완벽하게 조화를 이루며, 인내심 있고 꾸준한 성장을 통해 성스럽고 세련된 품성을 길러냅니다. 신성한 세련됨이라는 이름의 의미는 지혜와 품위 안에서 성장하는 당신의 타고난 능력과 공명하며, 안정감을 주면서도 영감을 주는 존재감을 만들어냅니다.',
    fr: 'Votre nature Terre s\'harmonise avec ce nom, cultivant un caractère saint et raffiné par une croissance patiente et régulière. La signification de raffinement sacré du nom résonne avec votre capacité à grandir en sagesse et en grâce, créant une présence à la fois ancrée et inspirante.',
    it: 'La tua natura di Terra si armonizza con questo nome, coltivando un carattere sacro e raffinato attraverso una crescita paziente e costante. Il significato di raffinatezza sacra del nome risuona con la tua capacità di crescere in saggezza e grazia, creando una presenza che è sia radicata che ispiratrice.',
    de: 'Ihre Erdnatur harmoniert mit diesem Namen und kultiviert durch geduldiges und stetiges Wachstum einen heiligen und verfeinerten Charakter. Die Bedeutung des Namens der heiligen Verfeinerung schwingt mit Ihrer Fähigkeit mit, an Weisheit und Anmut zu wachsen, und schafft eine Präsenz, die sowohl erdend als auch inspirierend ist.',
    pt: 'Sua natureza de Terra se harmoniza com este nome, cultivando um caráter sagrado e refinado através de um crescimento paciente e constante. O significado de refinamento sagrado do nome ressoa com sua capacidade de crescer em sabedoria e graça, criando uma presença que é ao mesmo tempo aterradora и inspiradora.',
    es: 'Tu naturaleza de Tierra armoniza con este nombre, cultivando un carácter santo y refinado a través de un crecimiento paciente y constante. El significado del nombre de refinamiento sagrado resuena con tu capacidad para crecer en sabiduría y gracia, creando una presencia que es a la vez arraigada e inspiradora.',
    ja: 'あなたの地球の性質は、この名前と調和し、忍耐強く着実な成長を通して、聖で洗練された性格を育みます。神聖な洗練という意味の名前は、知恵と恵みの中で成長するあなたの能力と共鳴し、地に足の着いた、感動的な存在感を生み出します。',
    th: 'ธรรมชาติธาตุดินของคุณสอดคล้องกับชื่อนี้อย่างสมบูรณ์แบบ ปลูกฝังลักษณะนิสัยที่ศักดิ์สิทธิ์และปราณีตผ่านการเติบโตที่อดทนและมั่นคง ความหมายของชื่อที่หมายถึงความประณีตอันศักดิ์สิทธิ์สะท้อนถึงความสามารถโดยกำเนิดของคุณในการเติบโตในสติปัญญาและความสง่างาม สร้างการมีอยู่ที่ทั้งหยั่งรากและสร้างแรงบันดาลใจ',
    id: 'Sifat Tanah Anda selaras sempurna dengan nama ini, memupuk karakter yang suci dan halus melalui pertumbuhan yang sabar dan stabil. Makna nama dari pemurnian suci selaras dengan kemampuan bawaan Anda untuk tumbuh dalam kebijaksanaan dan keanggunan, menciptakan kehadiran yang membumi dan menginspirasi.'
  }
},
// 77. 수연 (Soo-yeon)
{
  id: '수연_earth_01',
  harmony: {
    en: 'With your Earth nature, this name creates a character of beautiful connections and a grounded, stable spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a reliable and well-connected character.',
    ko: '당신의 토(土) 기운으로, 이 이름은 아름다운 연결과 안정되고 견고한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 신뢰할 수 있고 관계를 잘 맺는 인격의 발전을 돕습니다.',
    fr: 'Avec votre nature Terre, ce nom crée un caractère de belles connexions et un esprit ancré et stable. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère fiable et bien connecté.',
    it: 'Con la tua natura di Terra, questo nome crea un carattere di belle connessioni e uno spirito radicato e stabile. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere affidabile e ben collegato.',
    de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von schönen Verbindungen und einem geerdeten, stabilen Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines zuverlässigen und gut vernetzten Charakters.',
    pt: 'Com sua natureza de Terra, este nome cria um caráter de belas conexões e um espírito firme e estável. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter confiável e bem conectado.',
    es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de hermosas conexiones y un espíritu arraigado y estable. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter confiable y bien conectado.',
    ja: 'あなたの地球の性質で、この名前は美しいつながりと、地に足の着いた、安定した精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と信頼できる、つながりの良い人格の育成を促進します。',
    th: 'ด้วยธรรมชาติธาตุดินของคุณ ชื่อนี้สร้างลักษณะของการเชื่อมต่อที่สวยงามและจิตวิญญาณที่มั่นคงและหยั่งราก คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่น่าเชื่อถือและมีการเชื่อมต่อที่ดี',
    id: 'Dengan sifat Tanah Anda, nama ini menciptakan karakter hubungan yang indah dan semangat yang membumi dan stabil. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang andal dan terhubung dengan baik.'
  }
},
// 78. 은서 (Eun-seo)
{
  id: '은서_earth_01',
  harmony: {
    en: 'Your soul carries a gentle grace that creates auspicious conditions for others to flourish. Like fertile earth that transforms seeds into gardens, your Earth nature allows you to naturally cultivate environments where prosperity and happiness can take root and bloom.',
    ko: '당신의 영혼은 다른 이들이 번성할 수 있는 상서로운 조건을 만들어내는 부드러운 은혜를 지니고 있습니다. 씨앗을 정원으로 바꾸는 비옥한 땅처럼, 당신의 토(土) 기운은 번영과 행복이 뿌리내리고 꽃피울 수 있는 환경을 자연스럽게 가꾸게 합니다.',
    fr: 'Votre âme porte une grâce douce qui crée des conditions auspicieuses pour que les autres s\'épanouissent. Telle une terre fertile qui transforme les graines en jardins, votre nature Terre vous permet de cultiver naturellement des environnements où la prospérité et le bonheur peuvent prendre racine et s\'épanouir.',
    it: 'La tua anima porta una grazia gentile che crea condizioni propizie affinché gli altri possano fiorire. Come terra fertile che trasforma i semi in giardini, la tua natura di Terra ti permette di coltivare naturalmente ambienti in cui prosperità e felicità possono mettere radici e sbocciare.',
    de: 'Ihre Seele trägt eine sanfte Anmut, die günstige Bedingungen für andere schafft, um zu gedeihen. Wie fruchtbare Erde, die Samen in Gärten verwandelt, ermöglicht Ihnen Ihre Erdnatur, auf natürliche Weise Umgebungen zu kultivieren, in denen Wohlstand und Glück Wurzeln schlagen und blühen können.',
    pt: 'Sua alma carrega uma graça gentil que cria condições auspiciosas para que outros floresçam. Como terra fértil que transforma sementes em jardins, sua natureza de Terra permite que você cultive naturalmente ambientes onde a prosperidade e a felicidade podem criar raízes e florescer.',
    es: 'Tu alma lleva una gracia suave que crea condiciones auspiciosas para que otros florezcan. Como la tierra fértil que transforma las semillas en jardines, tu naturaleza de Tierra te permite cultivar naturalmente ambientes donde la prosperidad y la felicidad pueden arraigar y florecer.',
    ja: 'あなたの魂は、他の人が繁栄するための縁起の良い条件を作り出す穏やかな恵みを運んでいます。種子を庭に変える肥沃な大地のように、あなたの地球の性質は、繁栄と幸福が根付き、開花できる環境を自然に育むことを可能にします。',
    th: 'จิตวิญญาณของคุณมีความสง่างามที่อ่อนโยนซึ่งสร้างเงื่อนไขที่เป็นมงคลให้ผู้อื่นเจริญรุ่งเรือง เช่นเดียวกับดินที่อุดมสมบูรณ์ที่เปลี่ยนเมล็ดพันธุ์ให้กลายเป็นสวน ธรรมชาติธาตุดินของคุณช่วยให้คุณสามารถเพาะปลูกสภาพแวดล้อมที่ความเจริญรุ่งเรืองและความสุขสามารถหยั่งรากและเบ่งบานได้อย่างเป็นธรรมชาติ',
    id: 'Jiwa Anda membawa anugerah lembut yang menciptakan kondisi yang baik bagi orang lain untuk berkembang. Seperti tanah subur yang mengubah benih menjadi taman, sifat Tanah Anda memungkinkan Anda untuk secara alami menumbuhkan lingkungan di mana kemakmuran dan kebahagiaan dapat berakar dan mekar.'
  }
},
// 79. 예서 (Ye-seo)
{
  id: '예서_earth_01',
  harmony: {
    en: 'Your Earth nature and this name combine to create a character of beautiful growth and auspicious spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a graceful and fortunate character.',
    ko: '당신의 토(土) 기운과 이 이름이 결합하여 아름다운 성장과 상서로운 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 우아하고 행운이 깃든 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de belle croissance et d\'esprit auspicieux. Ces qualities s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère gracieux et chanceux.',
    it: 'La tua natura di Terra e questo nome si combinano per creare un carattere di bella crescita e spirito propizio. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere grazioso e fortunato.',
    de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von schönem Wachstum und glückverheißendem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines anmutigen und glücklichen Charakters.',
    pt: 'Sua natureza de Terra e este nome se combinam para criar um caráter de belo crescimento e espírito auspicioso. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter gracioso e afortunado.',
    es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de hermoso crecimiento y espíritu auspicioso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter elegante y afortunado.',
    ja: 'あなたの地球の性質とこの名前が組み合わさって、美しい成長と縁起の良い精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、優雅で幸運な人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุดินของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของการเติบโตที่สวยงามและจิตวิญญาณที่เป็นมงคล คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่สง่างามและโชคดี',
    id: 'Sifat Tanah Anda dan nama ini bergabung untuk menciptakan karakter pertumbuhan yang indah dan semangat yang baik. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang anggun dan beruntung.'
  }
},
// 80. 수민 (Soo-min)
{
  id: '수민_earth_01',
  harmony: {
    en: 'Your Earth nature harmonizes with this name to create a character of beautiful growth and quick thinking. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a graceful and agile-minded character.',
    ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 아름다운 성장과 빠른 사고를 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 우아하고 민첩한 사고를 지닌 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de belle croissance et de pensée rapide. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère gracieux et à l\'esprit agile.',
    it: 'La tua natura di Terra si armonizza con questo nome per creare un carattere di bella crescita e pensiero rapido. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere grazioso e dalla mente agile.',
    de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von schönem Wachstum und schnellem Denken zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines anmutigen und agilen Charakters.',
    pt: 'Sua natureza de Terra se harmoniza com este nome para criar um caráter de belo crescimento e pensamento rápido. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter gracioso e de mente ágil.',
    es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de hermoso crecimiento y pensamiento rápido. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter elegante y de mente ágil.',
    ja: 'あなたの地球の性質は、この名前と調和して、美しい成長と素早い思考の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、優雅で機敏な心を持つ人格の育成を促進します。',
    th: 'ธรรมชาติธาตุดินของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของการเติบโตที่สวยงามและการคิดที่รวดเร็ว คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่สง่างามและมีไหวพริบ',
    id: 'Sifat Tanah Anda selaras dengan nama ini untuk menciptakan karakter pertumbuhan yang indah dan pemikiran yang cepat. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang anggun dan berpikiran gesit.'
  }
},
// 81. 지연 (Ji-yeon)
{
  id: '지연_earth_01',
  harmony: {
    en: 'With your Earth nature, this name creates a character of wise connections and a grounded, stable spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of an insightful and reliable character.',
    ko: '당신의 토(土) 기운으로, 이 이름은 지혜로운 연결과 안정되고 견고한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 통찰력 있고 신뢰할 수 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Avec votre nature Terre, ce nom crée un caractère de connexions sages et un esprit ancré et stable. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère perspicace et fiable.',
    it: 'Con la tua natura di Terra, questo nome crea un carattere di connessioni sagge e uno spirito radicato e stabile. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere perspicace e affidabile.',
    de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von weisen Verbindungen und einem geerdeten, stabilen Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines aufschlussreichen und zuverlässigen Charakters.',
    pt: 'Com sua natureza de Terra, este nome cria um caráter de conexões sábias e um espírito firme e estável. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter perspicaz e confiável.',
    es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de conexiones sabias y un espíritu arraigado y estable. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter perspicaz y confiable.',
    ja: 'あなたの地球の性質で、この名前は賢明なつながりと、地に足の着いた、安定した精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、洞察力に富んだ信頼できる人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุดินของคุณ ชื่อนี้สร้างลักษณะของการเชื่อมต่อที่ชาญฉลาดและจิตวิญญาณที่มั่นคงและหยั่งราก คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ลึกซึ้งและน่าเชื่อถือ',
    id: 'Dengan sifat Tanah Anda, nama ini menciptakan karakter hubungan yang bijaksana dan semangat yang membumi dan stabil. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang berwawasan luas dan dapat diandalkan.'
  }
},
// 82. 유진 (Yu-jin)
{
  id: '유진_earth_01',
  harmony: {
    en: 'Your Earth nature and this name combine to create a character of abundant growth and a precious, treasured spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a generous and valuable character.',
    ko: '당신의 토(土) 기운과 이 이름이 결합하여 풍부한 성장과 귀하고 소중한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 너그럽고 가치 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance abondante et d\'esprit précieux et chéri. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère généreux et précieux.',
    it: 'La tua natura di Terra e questo nome si combinano per creare un carattere di crescita abbondante e uno spirito prezioso e caro. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere generoso e prezioso.',
    de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von reichlichem Wachstum und einem kostbaren, geschätzten Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines großzügigen und wertvollen Charakters.',
    pt: 'Sua natureza de Terra e este nome se combinam para criar um caráter de crescimento abundante e um espírito precioso e estimado. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter generoso e valioso.',
    es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento abundante y un espíritu precioso y atesorado. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter generoso y valioso.',
    ja: 'あなたの地球の性質とこの名前が組み合わさって、豊かな成長と貴重で大切な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、寛大で価値のある人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุดินของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของการเติบโตที่อุดมสมบูรณ์และจิตวิญญาณอันล้ำค่า คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่ใจกว้างและมีคุณค่า',
    id: 'Sifat Tanah Anda dan nama ini bergabung untuk menciptakan karakter pertumbuhan yang melimpah dan semangat yang berharga dan dihargai. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang murah hati dan berharga.'
  }
},
// 83. 채은 (Chae-eun)
{
  id: '채은_earth_01',
  harmony: {
    en: 'Your Earth nature harmonizes with this name to create a character of colorful growth and a graceful spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a diverse and elegant character.',
    ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 다채로운 성장과 우아한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 다양하고 품위 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de croissance colorée et d\'esprit gracieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère diversifié et élégant.',
    it: 'La tua natura di Terra si armonizza con questo nome per creare un carattere di crescita colorata e uno spirito grazioso. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere vario ed elegante.',
    de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von farbenfrohem Wachstum und einem anmutigen Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines vielfältigen und eleganten Charakters.',
    pt: 'Sua natureza de Terra se harmoniza com este nome para criar um caráter de crescimento colorido e um espírito gracioso. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter diversificado e elegante.',
    es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de crecimiento colorido y un espíritu elegante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter diverso y elegante.',
    ja: 'あなたの地球の性質は、この名前と調和して、カラフルな成長と優雅な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、多様でエレガントな人格の育成を促進します。',
    th: 'ธรรมชาติธาตุดินของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของการเติบโตที่มีสีสันและจิตวิญญาณที่สง่างาม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่หลากหลายและสง่างาม',
    id: 'Sifat Tanah Anda selaras dengan nama ini untuk menciptakan karakter pertumbuhan yang penuh warna dan semangat yang anggun. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang beragam dan elegan.'
  }
},
// 84. 수현 (Soo-hyun)
{
  id: '수현_earth_01',
  harmony: {
    en: 'With your Earth nature, this name creates a character of beautiful growth and a virtuous spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a graceful and morally upright character.',
    ko: '당신의 토(土) 기운으로, 이 이름은 아름다운 성장과 덕망 있는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 우아하고 도덕적으로 올바른 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Avec votre nature Terre, ce nom crée un caractère de belle croissance et d\'esprit vertueux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère gracieux et moralement droit.',
    it: 'Con la tua natura di Terra, questo nome crea un carattere di bella crescita e uno spirito virtuoso. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere grazioso e moralmente retto.',
    de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von schönem Wachstum und einem tugendhaften Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines anmutigen und moralisch aufrechten Charakters.',
    pt: 'Com sua natureza de Terra, este nome cria um caráter de belo crescimento e um espírito virtuoso. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter gracioso e moralmente reto.',
    es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de hermoso crecimiento y un espíritu virtuoso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter elegante y moralmente recto.',
    ja: 'あなたの地球の性質で、この名前は美しい成長と高潔な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、優雅で道徳的に正しい人格の育成への道を育みます。',
    th: 'ด้วยธรรมชาติธาตุดินของคุณ ชื่อนี้สร้างลักษณะของการเติบโตที่สวยงามและจิตวิญญาณที่มีคุณธรรม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่สง่างามและมีศีลธรรมอันดีงาม',
    id: 'Dengan sifat Tanah Anda, nama ini menciptakan karakter pertumbuhan yang indah dan semangat yang berbudi luhur. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang anggun dan lurus secara moral.'
  }
},
// 85. 은지 (Eun-ji)
{
  id: '은지_earth_01',
  harmony: {
    en: 'Your Earth nature and this name combine to create a character of kind growth and a wise spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a compassionate and insightful character.',
    ko: '당신의 토(土) 기운과 이 이름이 결합하여 친절한 성장과 지혜로운 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 자비롭고 통찰력 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance bienveillante et d\'esprit sage. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère compatissant et perspicace.',
    it: 'La tua natura di Terra e questo nome si combinano per creare un carattere di crescita gentile e uno spirito saggio. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere compassionevole e perspicace.',
    de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von freundlichem Wachstum und einem weisen Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines mitfühlenden und aufschlussreichen Charakters.',
    pt: 'Sua natureza de Terra e este nome se combinam para criar um caráter de crescimento gentil e um espírito sábio. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter compassivo e perspicaz.',
    es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento amable y un espíritu sabio. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter compasivo y perspicaz.',
    ja: 'あなたの地球の性質とこの名前が組み合わさって、親切な成長と賢明な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、思いやりのある洞察力に富んだ人格の育成への道を育みます。',
    th: 'ธรรมชาติธาตุดินของคุณและชื่อนี้รวมกันเพื่อสร้างลักษณะของการเติบโตที่ใจดีและจิตวิญญาณที่ชาญฉลาด คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่เห็นอกเห็นใจและลึกซึ้ง',
    id: 'Sifat Tanah Anda dan nama ini bergabung untuk menciptakan karakter pertumbuhan yang baik hati dan semangat yang bijaksana. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang welas asih dan berwawasan luas.'
  }
},
// 86. 예은 (Ye-eun)
{
  id: '예은_earth_01',
  harmony: {
    en: 'Your Earth nature harmonizes with this name to create a character of beautiful growth and a graceful spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of an elegant and kind-hearted character.',
    ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 아름다운 성장과 우아한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 품위 있고 친절한 마음을 지닌 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
    fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de belle croissance et d\'esprit gracieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère élégant et bienveillant.',
    it: 'La tua natura di Terra si armonizza con questo nome per creare un carattere di bella crescita e uno spirito grazioso. Queste qualità si allineano perfettamente con le tue abilità naturali, favorendo una crescita armoniosa e lo sviluppo di un carattere elegante e di buon cuore.',
    de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von schönem Wachstum und einem anmutigen Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines eleganten und gutherzigen Charakters.',
    pt: 'Sua natureza de Terra se harmoniza com este nome para criar um caráter de belo crescimento e um espírito gracioso. Essas qualidades se alinham perfeitamente com suas habilidades naturais, promovendo o crescimento harmonioso e o desenvolvimento de um caráter elegante и de bom coração.',
    es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de hermoso crecimiento y un espíritu elegante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter elegante y de buen corazón.',
    ja: 'あなたの地球の性質は、この名前と調和して、美しい成長と優雅な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、エレガントで親切な心を持つ人格の育成を促進します。',
    th: 'ธรรมชาติธาตุดินของคุณสอดคล้องกับชื่อนี้เพื่อสร้างลักษณะของการเติบโตที่สวยงามและจิตวิญญาณที่สง่างาม คุณสมบัติเหล่านี้สอดคล้องกับความสามารถตามธรรมชาติของคุณอย่างสมบูรณ์แบบ ส่งเสริมการเติบโตที่กลมกลืนและการพัฒนาลักษณะนิสัยที่สง่างามและมีจิตใจดี',
    id: 'Sifat Tanah Anda selaras dengan nama ini untuk menciptakan karakter pertumbuhan yang indah dan semangat yang anggun. Kualitas-kualitas ini selaras sempurna dengan kemampuan alami Anda, mendorong pertumbuhan yang harmonis dan pengembangan karakter yang elegan dan baik hati.'
  }
},
// 87. 미나 (Mi-na)
{
  id: '미나_earth_01',
  harmony: {
    en: 'Your inner beauty grows from solid self-confidence and natural grace, blessed by your Earth nature to inspire self-acceptance in others. Like fertile ground that recognizes its own worth, you create an authentic beauty that radiates confidence and empowers those around you.',
    ko: '당신의 내면의 아름다움은 당신의 토(土) 기운의 축복을 받아, 다른 사람들에게 자기 수용의 영감을 주는 단단한 자신감과 자연스러운 품위에서 자라납니다. 자신의 가치를 아는 비옥한 땅처럼, 당신은 자신감을 발산하고 주변 사람들에게 힘을 실어주는 진정한 아름다움을 창조합니다.',
    fr: 'Votre beauté intérieure naît d\'une solide confiance en soi et d\'une grâce naturelle, bénie par votre nature Terre pour inspirer l\'acceptation de soi chez les autres. Telle une terre fertile qui reconnaît sa propre valeur, vous créez une beauté authentique qui rayonne de confiance et donne du pouvoir à ceux qui vous entourent.',
    it: 'La tua bellezza interiore cresce da una solida fiducia in te stesso e da una grazia naturale, benedetta dalla tua natura di Terra per ispirare l\'accettazione di sé negli altri. Come un terreno fertile che riconosce il proprio valore, crei una bellezza autentica che irradia fiducia e dà potere a coloro che ti circondano.',
    de: 'Ihre innere Schönheit wächst aus solidem Selbstvertrauen und natürlicher Anmut, gesegnet durch Ihre Erdnatur, um bei anderen Selbstakzeptanz zu inspirieren. Wie fruchtbarer Boden, der seinen eigenen Wert erkennt, schaffen Sie eine authentische Schönheit, die Selbstvertrauen ausstrahlt und Ihre Mitmenschen stärkt.',
    pt: 'Sua beleza interior cresce a partir de uma sólida autoconfiança e graça natural, abençoada por sua natureza de Terra para inspirar a autoaceitação nos outros. Como um solo fértil que reconhece seu próprio valor, você cria uma beleza autêntica que irradia confiança e capacita aqueles ao seu redor.',
    es: 'Tu belleza interior crece a partir de una sólida confianza en ti mismo y una gracia natural, bendecida por tu naturaleza de Tierra para inspirar la autoaceptación en los demás. Como la tierra fértil que reconoce su propio valor, creas una belleza auténtica que irradia confianza y empodera a quienes te rodean.',
    ja: 'あなたの内なる美しさは、あなたの地球の性質によって祝福され、他の人に自己受容を促す確固たる自信と自然な恵みから成長します。自分の価値を認識する肥沃な大地のように、あなたは自信を放ち、周りの人々に力を与える本物の美しさを創造します。',
    th: 'ความงามภายในของคุณเติบโตจากความมั่นใจในตนเองที่มั่นคงและความสง่างามตามธรรมชาติ ได้รับพรจากธรรมชาติธาตุดินของคุณเพื่อสร้างแรงบันดาลใจให้ผู้อื่นยอมรับตนเอง เช่นเดียวกับดินที่อุดมสมบูรณ์ที่ตระหนักถึงคุณค่าของตนเอง คุณสร้างความงามที่แท้จริงซึ่งแผ่กระจายความมั่นใจและมอบพลังให้กับคนรอบข้าง',
    id: 'Kecantikan batin Anda tumbuh dari kepercayaan diri yang kokoh dan keanggunan alami, diberkati oleh sifat Tanah Anda untuk menginspirasi penerimaan diri pada orang lain. Seperti tanah subur yang mengakui nilainya sendiri, Anda menciptakan keindahan otentik yang memancarkan kepercayaan diri dan memberdayakan orang-orang di sekitar Anda.'
  }
},
// 88. 지효 (Ji-hyo)
{
  id: '지효_earth_01',
  harmony: {
    en: 'Your soul carries the sacred power of renewal and filial piety, destined to bring hope where despair has taken root. Like the first blessed rain after a long drought, your Earth nature helps you restore faith and create new beginnings for your family and community.',
    ko: '당신의 영혼은 부활과 효도의 신성한 힘을 지니고 있어, 절망이 뿌리내린 곳에 희망을 가져다줄 운명입니다. 오랜 가뭄 끝에 내리는 첫 단비처럼, 당신의 토(土) 기운은 당신의 가족과 공동체를 위해 믿음을 회복하고 새로운 시작을 창조하도록 돕습니다.',
    fr: 'Votre âme porte le pouvoir sacré du renouveau et de la piété filiale, destinée à apporter l\'espoir là où le désespoir a pris racine. Telle la première pluie bénie après une longue sécheresse, votre nature Terre vous aide à restaurer la foi et à créer de nouveaux départs pour votre famille et votre communauté.',
    it: 'La tua anima porta il potere sacro del rinnovamento e della pietà filiale, destinata a portare speranza dove la disperazione ha messo radici. Come la prima pioggia benedetta dopo una lunga siccità, la tua natura di Terra ti aiuta a ripristinare la fede e a creare nuovi inizi per la tua famiglia e la tua comunità.',
    de: 'Ihre Seele trägt die heilige Kraft der Erneuerung und der kindlichen Frömmigkeit und ist dazu bestimmt, Hoffnung dorthin zu bringen, wo Verzweiflung Wurzeln geschlagen hat. Wie der erste gesegnete Regen nach einer langen Dürre hilft Ihnen Ihre Erdnatur, den Glauben wiederherzustellen und neue Anfänge für Ihre Familie und Gemeinschaft zu schaffen.',
    pt: 'Sua alma carrega o poder sagrado da renovação e da piedade filial, destinada a trazer esperança onde o desespero criou raízes. Como a primeira chuva abençoada após uma longa seca, sua natureza de Terra o ajuda a restaurar a fé e a criar novos começos para sua família e comunidade.',
    es: 'Tu alma lleva el poder sagrado de la renovación y la piedad filial, destinada a llevar esperanza donde la desesperación ha echado raíces. Como la primera lluvia bendita después de una larga sequía, tu naturaleza de Tierra te ayuda a restaurar la fe y a crear nuevos comienzos para tu familia y comunidad.',
    ja: 'あなたの魂は、更新と親孝行の神聖な力を運び、絶望が根付いた場所に希望をもたらす運命にあります。長い干ばつの後の最初の恵みの雨のように、あなたの地球の性質は、あなたの家族とコミュニティのために信仰を回復し、新しい始まりを創造するのに役立ちます。',
    th: 'จิตวิญญาณของคุณมีพลังศักดิ์สิทธิ์แห่งการฟื้นฟูและความกตัญญู ถูกกำหนดให้นำความหวังมาสู่ที่ที่ความสิ้นหวังได้หยั่งราก เช่นเดียวกับฝนที่โปรยปรายครั้งแรกหลังภัยแล้งอันยาวนาน ธรรมชาติธาตุดินของคุณช่วยให้คุณฟื้นฟูศรัทธาและสร้างการเริ่มต้นใหม่สำหรับครอบครัวและชุมชนของคุณ',
    id: 'Jiwa Anda membawa kekuatan suci pembaruan dan bakti, ditakdirkan untuk membawa harapan di mana keputusasaan telah berakar. Seperti hujan berkah pertama setelah kemarau panjang, sifat Tanah Anda membantu Anda memulihkan iman dan menciptakan awal yang baru bagi keluarga dan komunitas Anda.'
  }
},
// 89. 동수 (Dong-soo)
{
  id: '동수_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, embodying an Eastern excellence that flows with unstoppable grace. The eastern direction and outstanding achievement combine, creating a wisdom that rises like the morning sun over flowing waters, illuminating the path to greatness.',
    ko: '당신의 수(水) 기운은 이 이름과 조화를 이루어, 멈출 수 없는 우아함으로 흐르는 동양의 탁월함을 구현합니다. 동쪽 방향과 뛰어난 성취가 결합하여, 흐르는 물 위로 떠오르는 아침 해처럼 위대함으로 가는 길을 비추는 지혜를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, incarnant une excellence orientale qui coule avec une grâce imparable. La direction de l\'est et l\'accomplissement exceptionnel se combinent, créant une sagesse qui s\'élève comme le soleil du matin sur les eaux vives, illuminant le chemin vers la grandeur.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incarnando un\'eccellenza orientale che scorre con grazia inarrestabile. La direzione orientale e il risultato eccezionale si combinano, creando una saggezza che sorge come il sole del mattino su acque che scorrono, illuminando il sentiero verso la grandezza.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und verkörpert eine östliche Exzellenz, die mit unaufhaltsamer Anmut fließt. Die östliche Richtung und die herausragende Leistung vereinen sich und schaffen eine Weisheit, die sich wie die Morgensonne über fließenden Gewässern erhebt und den Weg zur Größe erleuchtet.',
    pt: 'Sua natureza de Água se harmoniza com este nome, incorporando uma excelência oriental que flui com graça imparável. A direção leste e a realização excepcional se combinam, criando uma sabedoria que se eleva como o sol da manhã sobre águas correntes, iluminando o caminho para a grandeza.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, encarnando una excelencia oriental que fluye con una gracia imparable. La dirección oriental y el logro sobresaliente se combinan, creando una sabiduría que se eleva como el sol de la mañana sobre las aguas que fluyen, iluminando el camino hacia la grandeza.',
    ja: 'あなたの水の性質は、この名前と調和し、止められない優雅さで流れる東洋の卓越性を具現化します。東の方向と卓越した業績が組み合わさって、流れる水の上に昇る朝日のように、偉大さへの道を照らす知恵を生み出します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ แสดงถึงความเป็นเลิศแบบตะวันออกที่ไหลลื่นด้วยความสง่างามที่ไม่อาจหยุดยั้งได้ ทิศตะวันออกและความสำเร็จที่โดดเด่นผสมผสานกัน สร้างสติปัญญาที่ลอยขึ้นเหมือนดวงอาทิตย์ยามเช้าเหนือสายน้ำที่ไหลเชี่ยว ส่องสว่างเส้นทางสู่ความยิ่งใหญ่',
    id: 'Sifat Air Anda selaras dengan nama ini, mewujudkan keunggulan Timur yang mengalir dengan keanggunan yang tak terbendung. Arah timur dan pencapaian luar biasa berpadu, menciptakan kebijaksanaan yang terbit seperti matahari pagi di atas air yang mengalir, menerangi jalan menuju kebesaran.'
  }
},
// 90. 류진 (Ryu-jin)
{
  id: '류진_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging dragon-like strength with precious wisdom. The powerful dragon energy and treasured value combine, creating an unbreakable spirit that soars above challenges while remaining grounded in authentic worth.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 용과 같은 힘과 귀중한 지혜를 벼려냅니다. 강력한 용의 에너지와 소중한 가치가 결합하여, 진정한 가치에 뿌리를 두면서도 도전을 넘어 비상하는 불굴의 정신을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une force de dragon avec une sagesse précieuse. La puissante énergie du dragon et la valeur précieuse se combinent, créant un esprit incassable qui s\'élève au-dessus des défis tout en restant ancré dans une valeur authentique.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando una forza simile a quella di un drago con una saggezza preziosa. La potente energia del drago e il valore prezioso si combinano, creando uno spirito indistruttibile che si libra al di sopra delle sfide rimanendo radicato in un valore autentico.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet drachenähnliche Stärke mit kostbarer Weisheit. Die kraftvolle Drachenenergie und der geschätzte Wert vereinen sich und schaffen einen unzerbrechlichen Geist, der sich über Herausforderungen erhebt und gleichzeitig in authentischem Wert verankert bleibt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando uma força de dragão com sabedoria preciosa. A poderosa energia do dragão e o valor precioso se combinam, criando um espírito inquebrável que se eleva acima dos desafios, permanecendo fundamentado em um valor autêntico.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una fuerza de dragón con una sabiduría preciosa. La poderosa energía del dragón y el valor atesorado se combinan, creando un espíritu inquebrantable que se eleva por encima de los desafíos mientras permanece anclado en un valor auténtico.',
    ja: 'あなたの金の性質は、この名前と調和し、貴重な知恵で竜のような強さを鍛えます。強力な竜のエネルギーと大切な価値が組み合わさって、本物の価値に根ざしながら挑戦を超えて舞い上がる不屈の精神を生み出します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมสร้างความแข็งแกร่งดุจมังกรด้วยปัญญาอันล้ำค่า พลังมังกรอันทรงพลังและคุณค่าอันล้ำค่าผสมผสานกัน สร้างจิตวิญญาณที่ไม่แตกสลายซึ่งทะยานเหนือความท้าทายในขณะที่ยังคงหยั่งรากในคุณค่าที่แท้จริง',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa kekuatan seperti naga dengan kebijaksanaan yang berharga. Energi naga yang kuat dan nilai yang berharga berpadu, menciptakan semangat yang tak terpatahkan yang melambung di atas tantangan sambil tetap membumi pada nilai otentik.'
  }
},
// 91. 민수 (Min-soo)
{
  id: '민수_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling quick excellence through fluid adaptability. Your swift thinking flows like a mountain stream that carves its path with gentle persistence, achieving remarkable results through natural intelligence and graceful determination.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 유연한 적응력을 통해 신속한 탁월함을 이끌어냅니다. 당신의 빠른 생각은 부드러운 끈기로 자신의 길을 개척하는 산골짜기 시냇물처럼 흘러, 타고난 지성과 우아한 결단력으로 놀라운 결과를 성취합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une excellence rapide grâce à une adaptabilité fluide. Votre pensée rapide coule comme un ruisseau de montagne qui trace son chemin avec une douce persistance, obtenant des résultats remarquables grâce à une intelligence naturelle et une détermination gracieuse.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando una rapida eccellenza attraverso un\'adattabilità fluida. Il tuo pensiero veloce scorre come un ruscello di montagna che traccia il suo percorso con dolce persistenza, ottenendo risultati notevoli attraverso l\'intelligenza naturale e una determinazione aggraziata.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert schnelle Exzellenz durch fließende Anpassungsfähigkeit. Ihr schnelles Denken fließt wie ein Gebirgsbach, der sich mit sanfter Beharrlichkeit seinen Weg bahnt und durch natürliche Intelligenz und anmutige Entschlossenheit bemerkenswerte Ergebnisse erzielt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando a excelência rápida através da adaptabilidade fluida. Seu pensamento rápido flui como um riacho de montanha que traça seu caminho com persistência suave, alcançando resultados notáveis através da inteligência natural e da determinação graciosa.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una rápida excelencia a través de una fluida adaptabilidad. Tu pensamiento rápido fluye como un arroyo de montaña que traza su camino con suave persistencia, logrando resultados notables a través de la inteligencia natural y la determinación elegante.',
    ja: 'あなたの水の性質は、この名前と調和し、流動的な適応性を通して迅速な卓越性を導きます。あなたの素早い思考は、穏やかな粘り強さでその道を切り開く山の小川のように流れ、自然な知性と優雅な決意を通して驚くべき結果を達成します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความเป็นเลิศอย่างรวดเร็วผ่านความสามารถในการปรับตัวที่ลื่นไหล ความคิดที่รวดเร็วของคุณไหลเหมือนลำธารบนภูเขาที่แกะสลักเส้นทางด้วยความพากเพียรที่อ่อนโยน บรรลุผลลัพธ์ที่น่าทึ่งผ่านสติปัญญาโดยธรรมชาติและความมุ่งมั่นที่สง่างาม',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan keunggulan cepat melalui kemampuan beradaptasi yang lancar. Pemikiran cepat Anda mengalir seperti aliran gunung yang mengukir jalannya dengan kegigihan yang lembut, mencapai hasil yang luar biasa melalui kecerdasan alami dan tekad yang anggun.'
  }
},
// 92. 민정 (Min-jeong)
{
  id: '민정_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, blending quick reflexes with pure, clear intentions. Your swift clarity flows like a crystal spring that never loses its transparency, creating an authentic leadership that inspires trust through honest and clear-sighted action.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 빠른 반사 신경과 순수하고 맑은 의도를 결합합니다. 당신의 신속한 명료함은 투명성을 잃지 않는 수정 샘물처럼 흘러, 정직하고 명철한 행동을 통해 신뢰를 불러일으키는 진정한 리더십을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, mêlant des réflexes rapides à des intentions pures et claires. Votre clarté rapide coule comme une source de cristal qui ne perd jamais sa transparence, créant un leadership authentique qui inspire la confiance par une action honnête et clairvoyante.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, mescolando riflessi pronti con intenzioni pure e chiare. La tua rapida chiarezza scorre come una sorgente di cristallo che non perde mai la sua trasparenza, creando una leadership autentica che ispira fiducia attraverso un\'azione onesta e lungimirante.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und verbindet schnelle Reflexe mit reinen, klaren Absichten. Ihre schnelle Klarheit fließt wie eine Kristallquelle, die niemals ihre Transparenz verliert, und schafft eine authentische Führung, die durch ehrliches und klares Handeln Vertrauen schafft.',
    pt: 'Sua natureza de Água se harmoniza com este nome, misturando reflexos rápidos com intenções puras e claras. Sua clareza rápida flui como uma fonte de cristal que nunca perde sua transparência, criando uma liderança autêntica que inspira confiança através de ações honestas e perspicazes.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, mezclando reflejos rápidos con intenciones puras y claras. Tu rápida claridad fluye como un manantial de cristal que nunca pierde su transparencia, creando un liderazgo auténtico que inspira confianza a través de una acción honesta y clarividente.',
    ja: 'あなたの水の性質は、この名前と調和し、素早い反射神経と純粋で明確な意図を融合させます。あなたの迅速な明快さは、その透明性を決して失わない水晶の泉のように流れ、正直で明確な行動を通して信頼を刺激する本物のリーダーシップを生み出します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ผสมผสานปฏิกิริยาตอบสนองที่รวดเร็วเข้ากับเจตนาที่บริสุทธิ์และชัดเจน ความชัดเจนที่รวดเร็วของคุณไหลเหมือนน้ำพุคริสตัลที่ไม่เคยสูญเสียความโปร่งใส สร้างความเป็นผู้นำที่แท้จริงซึ่งสร้างแรงบันดาลใจให้เกิดความไว้วางใจผ่านการกระทำที่ซื่อสัตย์และมองการณ์ไกล',
    id: 'Sifat Air Anda selaras dengan nama ini, memadukan refleks cepat dengan niat yang murni dan jelas. Kejelasan cepat Anda mengalir seperti mata air kristal yang tidak pernah kehilangan transparansinya, menciptakan kepemimpinan otentik yang menginspirasi kepercayaan melalui tindakan yang jujur dan berpandangan jernih.'
  }
},
// 93. 민주 (Min-ju)
{
  id: '민주_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, polishing swift thinking into precious wisdom. Your quick intellect sparkles like a rare pearl formed in deep waters, creating treasured insights that illuminate solutions with a gentle, profound brilliance.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 신속한 사고를 귀중한 지혜로 다듬습니다. 당신의 빠른 지성은 깊은 물속에서 형성된 희귀한 진주처럼 반짝이며, 부드럽고 심오한 총명함으로 해결책을 비추는 소중한 통찰력을 만들어냅니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, polissant la pensée rapide en une sagesse précieuse. Votre intellect vif scintille comme une perle rare formée dans les eaux profondes, créant des aperçus précieux qui illuminent les solutions avec un éclat doux et profond.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, lucidando il pensiero veloce in una saggezza preziosa. Il tuo rapido intelletto brilla come una perla rara formata nelle acque profonde, creando intuizioni preziose che illuminano le soluzioni con una brillantezza gentile e profonda.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und poliert schnelles Denken zu kostbarer Weisheit. Ihr schneller Intellekt funkelt wie eine seltene Perle, die in tiefen Gewässern gebildet wird, und schafft wertvolle Einsichten, die Lösungen mit einer sanften, tiefen Brillanz beleuchten.',
    pt: 'Sua natureza de Água se harmoniza com este nome, polindo o pensamento rápido em sabedoria preciosa. Seu intelecto rápido brilha como uma pérola rara formada em águas profundas, criando insights preciosos que iluminam soluções com um brilho suave e profundo.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, puliendo el pensamiento rápido en una sabiduría preciosa. Tu rápido intelecto brilla como una perla rara formada en aguas profundas, creando ideas valiosas que iluminan las soluciones con un brillo suave y profundo.',
    ja: 'あなたの水の性質は、この名前と調和し、素早い思考を貴重な知恵に磨き上げます。あなたの素早い知性は、深い水で形成された珍しい真珠のように輝き、穏やかで深遠な輝きで解決策を照らす貴重な洞察を生み出します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ขัดเกลาความคิดที่รวดเร็วให้เป็นปัญญาอันล้ำค่า สติปัญญาที่รวดเร็วของคุณเปล่งประกายเหมือนไข่มุกหายากที่ก่อตัวในน้ำลึก สร้างข้อมูลเชิงลึกอันล้ำค่าที่ส่องสว่างแนวทางแก้ไขด้วยความเฉลียวฉลาดที่อ่อนโยนและลึกซึ้ง',
    id: 'Sifat Air Anda selaras dengan nama ini, memoles pemikiran cepat menjadi kebijaksanaan yang berharga. Intelek cepat Anda berkilau seperti mutiara langka yang terbentuk di perairan dalam, menciptakan wawasan berharga yang menerangi solusi dengan kecemerlangan yang lembut dan mendalam.'
  }
},
// 94. 민지 (Min-ji)
{
  id: '민지_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, weaving quick thinking with profound wisdom. Your rapid understanding flows like an ancient river that has gathered knowledge from countless journeys, creating a deep insight that guides others with compassionate intelligence.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 빠른 사고와 깊은 지혜를 엮어냅니다. 당신의 신속한 이해력은 수많은 여정에서 지식을 모은 고대 강물처럼 흘러, 자비로운 지성으로 다른 사람들을 안내하는 깊은 통찰력을 만들어냅니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, tissant une pensée rapide avec une sagesse profonde. Votre compréhension rapide coule comme une ancienne rivière qui a recueilli des connaissances d\'innombrables voyages, créant une perspicacité profonde qui guide les autres avec une intelligence compatissante.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, intrecciando il pensiero rapido con una profonda saggezza. La tua rapida comprensione scorre come un antico fiume che ha raccolto conoscenza da innumerevoli viaggi, creando una profonda intuizione che guida gli altri con un\'intelligenza compassionevole.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und verwebt schnelles Denken mit tiefer Weisheit. Ihr schnelles Verständnis fließt wie ein alter Fluss, der Wissen aus unzähligen Reisen gesammelt hat, und schafft eine tiefe Einsicht, die andere mit mitfühlender Intelligenz führt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, tecendo o pensamento rápido com a sabedoria profunda. Sua rápida compreensão flui como um rio antigo que acumulou conhecimento de inúmeras jornadas, criando uma visão profunda que guia os outros com inteligência compassiva.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, tejiendo un pensamiento rápido con una profunda sabiduría. Tu rápida comprensión fluye como un río antiguo que ha acumulado conocimiento de innumerables viajes, creando una profunda perspicacia que guía a otros con una inteligencia compasiva.',
    ja: 'あなたの水の性質は、この名前と調和し、素早い思考と深い知恵を織り交ぜます。あなたの迅速な理解は、数え切れないほどの旅から知識を集めた古代の川のように流れ、思いやりのある知性で他の人を導く深い洞察を生み出します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ สานความคิดที่รวดเร็วเข้ากับปัญญาอันลึกซึ้ง ความเข้าใจอย่างรวดเร็วของคุณไหลเหมือนแม่น้ำโบราณที่รวบรวมความรู้จากการเดินทางนับไม่ถ้วน สร้างข้อมูลเชิงลึกที่ชี้นำผู้อื่นด้วยสติปัญญาที่เปี่ยมด้วยความเมตตา',
    id: 'Sifat Air Anda selaras dengan nama ini, menenun pemikiran cepat dengan kebijaksanaan yang mendalam. Pemahaman cepat Anda mengalir seperti sungai kuno yang telah mengumpulkan pengetahuan dari perjalanan yang tak terhitung jumlahnya, menciptakan wawasan mendalam yang membimbing orang lain dengan kecerdasan welas asih.'
  }
},
// 95. 민철 (Min-chul)
{
  id: '민철_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging quick reactions into iron-strong resolve. Your swift decision-making and unbreakable determination combine, creating a leadership that cuts through confusion with sharp clarity and unwavering purpose.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 빠른 반응을 강철 같은 결의로 벼려냅니다. 당신의 신속한 의사 결정과 불굴의 결단력이 결합하여, 날카로운 명료함과 흔들리지 않는 목적으로 혼돈을 가르는 리더십을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant des réactions rapides en une résolution à toute épreuve. Votre prise de décision rapide et votre détermination inébranlable se combinent, créant un leadership qui tranche la confusion avec une clarté nette et un objectif inébranlable.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando reazioni rapide in una determinazione ferrea. La tua rapida capacità decisionale e la tua incrollabile determinazione si combinano, creando una leadership che squarcia la confusione con acuta chiarezza e uno scopo incrollabile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet schnelle Reaktionen zu eiserner Entschlossenheit. Ihre schnelle Entscheidungsfindung und Ihre unzerbrechliche Entschlossenheit vereinen sich und schaffen eine Führung, die Verwirrung mit scharfer Klarheit und unerschütterlichem Ziel durchbricht.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando reações rápidas em uma determinação de ferro. Sua rápida tomada de decisão e sua determinação inabalável se combinam, criando uma liderança que corta a confusão com clareza nítida e propósito inabalável.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando reacciones rápidas en una resolución de hierro. Tu rápida toma de decisiones y tu inquebrantable determinación se combinan, creando un liderazgo que atraviesa la confusión con una claridad nítida y un propósito inquebrantable.',
    ja: 'あなたの金の性質は、この名前と調和し、素早い反応を鉄のように強い決意に鍛え上げます。あなたの迅速な意思決定と不屈の決意が組み合わさって、鋭い明快さと揺るぎない目的で混乱を切り裂くリーダーシップを生み出します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมปฏิกิริยาที่รวดเร็วให้เป็นความมุ่งมั่นที่แข็งแกร่งดุจเหล็ก การตัดสินใจที่รวดเร็วและความมุ่งมั่นที่ไม่แตกสลายของคุณรวมกัน สร้างความเป็นผู้นำที่ตัดผ่านความสับสนด้วยความชัดเจนที่เฉียบคมและจุดมุ่งหมายที่ไม่สั่นคลอน',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa reaksi cepat menjadi tekad sekuat baja. Pengambilan keputusan Anda yang cepat dan tekad yang tak terpatahkan berpadu, menciptakan kepemimpinan yang menembus kebingungan dengan kejelasan yang tajam dan tujuan yang tak tergoyahkan.'
  }
},
// 96. 민혁 (Min-hyuk)
{
  id: '민혁_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling quick innovation through adaptive creativity. Your swift desire for change flows like a dynamic current that reshapes landscapes, bringing revolutionary solutions that emerge naturally from a deep understanding of the world.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 적응력 있는 창의성을 통해 신속한 혁신을 이끌어냅니다. 변화에 대한 당신의 빠른 열망은 지형을 바꾸는 역동적인 물결처럼 흘러, 세상에 대한 깊은 이해에서 자연스럽게 비롯되는 혁명적인 해결책을 가져옵니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une innovation rapide grâce à une créativité adaptative. Votre désir rapide de changement coule comme un courant dynamique qui remodèle les paysages, apportant des solutions révolutionnaires qui émergent naturellement d\'une profonde compréhension du monde.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando un\'innovazione rapida attraverso la creatività adattiva. Il tuo rapido desiderio di cambiamento scorre come una corrente dinamica che rimodella i paesaggi, portando soluzioni rivoluzionarie che emergono naturalmente da una profonda comprensione del mondo.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert schnelle Innovation durch adaptive Kreativität. Ihr schneller Wunsch nach Veränderung fließt wie ein dynamischer Strom, der Landschaften neu formt und revolutionäre Lösungen hervorbringt, die sich auf natürliche Weise aus einem tiefen Verständnis der Welt ergeben.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando a inovação rápida através da criatividade adaptativa. Seu rápido desejo de mudança flui como uma corrente dinâmica que remodela paisagens, trazendo soluções revolucionárias que emergem naturalmente de uma profunda compreensão do mundo.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una rápida innovación a través de una creatividad adaptativa. Tu rápido deseo de cambio fluye como una corriente dinámica que remodela los paisajes, trayendo soluciones revolucionarias que surgen naturalmente de una profunda comprensión del mundo.',
    ja: 'あなたの水の性質は、この名前と調和し、適応性のある創造性を通して迅速な革新を導きます。変化へのあなたの迅速な欲求は、風景を再形成するダイナミックな流れのように流れ、世界の深い理解から自然に現れる革新的な解決策をもたらします。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านนวัตกรรมที่รวดเร็วผ่านความคิดสร้างสรรค์ที่ปรับเปลี่ยนได้ ความปรารถนาในการเปลี่ยนแปลงอย่างรวดเร็วของคุณไหลเหมือนกระแสน้ำที่เปลี่ยนแปลงภูมิทัศน์ นำมาซึ่งโซลูชันที่ปฏิวัติวงการซึ่งเกิดขึ้นตามธรรมชาติจากความเข้าใจอย่างลึกซึ้งต่อโลก',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan inovasi cepat melalui kreativitas adaptif. Keinginan cepat Anda untuk perubahan mengalir seperti arus dinamis yang membentuk kembali lanskap, membawa solusi revolusioner yang muncul secara alami dari pemahaman mendalam tentang dunia.'
  }
},
// 97. 민호 (Min-ho)
{
  id: '민호_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, combining swift agility with a great depth of character. Your quick and mighty spirit flows like powerful rapids carving magnificent canyons, achieving greatness through a perfect balance of speed, strength, and depth.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 신속한 민첩성과 위대한 인품의 깊이를 결합합니다. 당신의 빠르고 강한 정신은 웅장한 협곡을 깎아내는 거센 급류처럼 흘러, 속도, 힘, 그리고 깊이의 완벽한 균형을 통해 위대함을 성취합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, combinant une agilité rapide avec une grande profondeur de caractère. Votre esprit vif et puissant coule comme des rapides puissants creusant de magnifiques canyons, atteignant la grandeur grâce à un équilibre parfait entre vitesse, force et profondeur.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, combinando un\'agilità scattante con una grande profondità di carattere. Il tuo spirito rapido e possente scorre come rapide potenti che scavano magnifici canyon, raggiungendo la grandezza attraverso un perfetto equilibrio di velocità, forza e profondità.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kombiniert schnelle Agilität mit einer großen Charaktertiefe. Ihr schneller und mächtiger Geist fließt wie reißende Stromschnellen, die prächtige Schluchten formen, und erreicht Größe durch ein perfektes Gleichgewicht von Geschwindigkeit, Stärke und Tiefe.',
    pt: 'Sua natureza de Água se harmoniza com este nome, combinando agilidade rápida com uma grande profundidade de caráter. Seu espírito rápido e poderoso flui como corredeiras poderosas que esculpem cânions magníficos, alcançando a grandeza através de um equilíbrio perfeito de velocidade, força e profundidade.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, combinando una rápida agilidad con una gran profundidad de carácter. Tu espíritu rápido y poderoso fluye como rápidos poderosos que tallan magníficos cañones, logrando la grandeza a través de un equilibrio perfecto de velocidad, fuerza y profundidad.',
    ja: 'あなたの水の性質は、この名前と調和し、素早い敏捷性と素晴らしい人格の深さを兼ね備えています。あなたの素早く力強い精神は、壮大な峡谷を刻む強力な急流のように流れ、スピード、強さ、そして深さの完璧なバランスを通して偉大さを達成します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ผสมผสานความคล่องแคล่วว่องไวเข้ากับความลึกซึ้งของลักษณะนิสัย จิตวิญญาณที่รวดเร็วและทรงพลังของคุณไหลเหมือนกระแสน้ำเชี่ยวที่แกะสลักหุบเขาอันงดงาม บรรลุความยิ่งใหญ่ผ่านความสมดุลที่สมบูรณ์แบบของความเร็ว ความแข็งแกร่ง และความลึก',
    id: 'Sifat Air Anda selaras dengan nama ini, menggabungkan kelincahan cepat dengan kedalaman karakter yang luar biasa. Semangat Anda yang cepat dan perkasa mengalir seperti jeram deras yang mengukir ngarai-ngarai megah, mencapai kebesaran melalui keseimbangan sempurna antara kecepatan, kekuatan, dan kedalaman.'
  }
},
// 98. 방찬 (Bang-chan)
{
  id: '방찬_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, creating spaces filled with brilliant, room-brightening radiance. Your energy forges connections like a precious metal conducting light, illuminating any environment so that others feel welcomed and inspired to flourish.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 방을 밝히는 눈부신 광채로 가득 찬 공간을 창조합니다. 당신의 에너지는 빛을 전도하는 귀금속처럼 연결을 벼려내어, 어떤 환경이든 밝게 비추어 다른 사람들이 환영받고 번성하도록 영감을 줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, créant des espaces remplis d\'un éclat brillant qui illumine la pièce. Votre énergie forge des liens comme un métal précieux conduisant la lumière, illuminant n\'importe quel environnement pour que les autres se sentent accueillis et inspirés à s\'épanouir.',
    it: 'La tua natura di Metallo si armonizza con questo nome, creando spazi pieni di una radiosità brillante che illumina la stanza. La tua energia forgia connessioni come un metallo prezioso che conduce la luce, illuminando ogni ambiente in modo che gli altri si sentano accolti e ispirati a prosperare.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schafft Räume, die mit strahlender, raumaufhellender Ausstrahlung gefüllt sind. Ihre Energie schmiedet Verbindungen wie ein Edelmetall, das Licht leitet, und beleuchtet jede Umgebung, sodass sich andere willkommen und inspiriert fühlen, zu gedeihen.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, criando espaços repletos de um brilho radiante que ilumina o ambiente. Sua energia forja conexões como um metal precioso que conduz a luz, iluminando qualquer ambiente para que os outros se sintam acolhidos e inspirados a florescer.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, creando espacios llenos de un resplandor brillante que ilumina la habitación. Tu energía forja conexiones como un metal precioso que conduce la luz, iluminando cualquier ambiente para que otros se sientan bienvenidos e inspirados a florecer.',
    ja: 'あなたの金の性質は、この名前と調和し、輝く、部屋を明るくする輝きに満ちた空間を作り出します。あなたのエネルギーは、光を伝導する貴金属のように接続を築き、どんな環境も照らし、他の人が歓迎され、繁栄するように促します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ สร้างพื้นที่ที่เต็มไปด้วยความสดใสที่ทำให้ห้องสว่างไสว พลังงานของคุณสร้างการเชื่อมต่อเหมือนโลหะมีค่าที่นำแสง ส่องสว่างทุกสภาพแวดล้อมเพื่อให้ผู้อื่นรู้สึกได้รับการต้อนรับและได้รับแรงบันดาลใจให้เติบโต',
    id: 'Sifat Logam Anda selaras dengan nama ini, menciptakan ruang yang dipenuhi dengan pancaran cemerlang yang menerangi ruangan. Energi Anda menjalin hubungan seperti logam mulia yang menghantarkan cahaya, menerangi lingkungan apa pun sehingga orang lain merasa disambut dan terinspirasi untuk berkembang.'
  }
},
// 99. 서준 (Seo-jun)
{
  id: '서준_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, channeling the talent of the west with sharp precision. This directional strength combines with your exceptional ability, creating a leadership that shines like polished steel, guiding others toward their highest potential with unwavering focus.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 서쪽의 재능을 날카로운 정밀함으로 이끌어냅니다. 이 방향의 힘은 당신의 탁월한 능력과 결합하여, 잘 닦인 강철처럼 빛나는 리더십을 창조하고, 흔들림 없는 집중력으로 다른 사람들을 최고의 잠재력으로 이끕니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, canalisant le talent de l\'ouest avec une précision aiguë. Cette force directionnelle se combine avec votre capacité exceptionnelle, créant un leadership qui brille comme de l\'acier poli, guidant les autres vers leur plus haut potentiel avec une concentration inébranlable.',
    it: 'La tua natura di Metallo si armonizza con questo nome, incanalando il talento dell\'ovest con acuta precisione. Questa forza direzionale si combina con la tua eccezionale abilità, creando una leadership che brilla come acciaio lucidato, guidando gli altri verso il loro massimo potenziale con una concentrazione incrollabile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und kanalisiert das Talent des Westens mit scharfer Präzision. Diese Richtungsstärke verbindet sich mit Ihrer außergewöhnlichen Fähigkeit und schafft eine Führung, die wie polierter Stahl glänzt und andere mit unerschütterlichem Fokus auf ihr höchstes Potenzial führt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, canalizando o talento do oeste com precisão afiada. Essa força direcional se combina com sua habilidade excepcional, criando uma liderança que brilha como aço polido, guiando os outros em direção ao seu maior potencial com foco inabalável.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, canalizando el talento del oeste con una precisión afilada. Esta fuerza direccional se combina con tu habilidad excepcional, creando un liderazgo que brilla como el acero pulido, guiando a otros hacia su máximo potencial con un enfoque inquebrantable.',
    ja: 'あなたの金の性質は、この名前と調和し、鋭い精度で西の才能を導きます。この方向性の強さは、あなたの卓越した能力と組み合わさって、磨かれた鋼のように輝くリーダーシップを生み出し、揺るぎない集中力で他の人を最高の可能性へと導きます。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ส่งผ่านพรสวรรค์ของทิศตะวันตกด้วยความแม่นยำที่เฉียบคม พลังแห่งทิศทางนี้รวมกับความสามารถพิเศษของคุณ สร้างความเป็นผู้นำที่ส่องประกายเหมือนเหล็กขัดเงา นำทางผู้อื่นไปสู่ศักยภาพสูงสุดด้วยการมุ่งเน้นที่ไม่สั่นคลอน',
    id: 'Sifat Logam Anda selaras dengan nama ini, menyalurkan bakat dari barat dengan presisi yang tajam. Kekuatan terarah ini berpadu dengan kemampuan luar biasa Anda, menciptakan kepemimpinan yang bersinar seperti baja poles, membimbing orang lain menuju potensi tertinggi mereka dengan fokus yang tak tergoyahkan.'
  }
},
// 100. 선우 (Seon-woo)
{
  id: '선우_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, refining goodness into excellent character. Your virtuous foundation and outstanding quality combine to create a moral strength like a fine-tempered sword, cutting through deception while protecting the innocent.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 선량함을 탁월한 품성으로 정제합니다. 당신의 고결한 기반과 뛰어난 자질이 결합하여, 잘 벼린 검처럼 속임수를 베어내고 무고한 이들을 보호하는 도덕적 힘을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, affinant la bonté en un excellent caractère. Votre fondation vertueuse et votre qualité exceptionnelle se combinent pour créer une force morale semblable à une épée bien trempée, tranchant la tromperie tout en protégeant les innocents.',
    it: 'La tua natura di Metallo si armonizza con questo nome, affinando la bontà in un carattere eccellente. La tua base virtuosa e la tua eccezionale qualità si combinano per creare una forza morale simile a una spada ben temprata, che squarcia l\'inganno proteggendo gli innocenti.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und verfeinert Güte zu exzellentem Charakter. Ihre tugendhafte Grundlage und Ihre herausragende Qualität vereinen sich zu einer moralischen Stärke wie ein fein gehärtetes Schwert, das Täuschung durchschneidet und gleichzeitig die Unschuldigen schützt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, refinando a bondade em um caráter excelente. Sua base virtuosa e sua qualidade excepcional se combinam para criar uma força moral como uma espada bem temperada, cortando o engano enquanto protege os inocentes.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, refinando la bondad en un carácter excelente. Tu base virtuosa y tu calidad sobresaliente se combinan para crear una fuerza moral como una espada bien templada, que atraviesa el engaño mientras protege a los inocentes.',
    ja: 'あなたの金の性質は、この名前と調和し、善を優れた人格に磨き上げます。あなたの高潔な基盤と卓越した品質が組み合わさって、無実の人々を守りながら欺瞞を切り裂く、よく鍛えられた剣のような道徳的な強さを生み出します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาความดีงามให้เป็นลักษณะนิสัยที่ยอดเยี่ยม รากฐานแห่งคุณธรรมและคุณภาพที่โดดเด่นของคุณรวมกันเพื่อสร้างความแข็งแกร่งทางศีลธรรมเหมือนดาบที่ได้รับการตีอย่างดี ตัดผ่านการหลอกลวงพร้อมปกป้องผู้บริสุทธิ์',
    id: 'Sifat Logam Anda selaras dengan nama ini, menyempurnakan kebaikan menjadi karakter yang unggul. Fondasi berbudi luhur dan kualitas luar biasa Anda berpadu untuk menciptakan kekuatan moral seperti pedang yang ditempa dengan baik, menembus tipu daya sambil melindungi yang tidak bersalah.'
  }
},
// 101. 성호 (Seong-ho)
{
  id: '성호_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging a holy purpose with great determination. Your sacred calling and magnificent strength combine to create a spiritual leadership that shines like consecrated gold, inspiring reverence and devotion in all who witness your noble character.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 성스러운 목적을 위대한 결단력으로 벼려냅니다. 당신의 신성한 소명과 장엄한 힘이 결합하여, 축성된 황금처럼 빛나는 영적 리더십을 창조하고, 당신의 고귀한 품성을 목격하는 모든 이에게 경외와 헌신을 불러일으킵니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant un but sacré avec une grande détermination. Votre vocation sacrée et votre force magnifique se combinent pour créer un leadership spirituel qui brille comme de l\'or consacré, inspirant la révérence et la dévotion chez tous ceux qui sont témoins de votre noble caractère.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando uno scopo sacro con grande determinazione. La tua vocazione sacra e la tua magnifica forza si combinano per creare una leadership spirituale che brilla come oro consacrato, ispirando riverenza e devozione in tutti coloro che testimoniano il tuo nobile carattere.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet mit großer Entschlossenheit einen heiligen Zweck. Ihre heilige Berufung und Ihre großartige Stärke vereinen sich zu einer spirituellen Führung, die wie geweihtes Gold glänzt und bei allen, die Ihren edlen Charakter bezeugen, Ehrfurcht und Hingabe hervorruft.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando um propósito sagrado com grande determinação. Seu chamado sagrado e sua magnífica força se combinam para criar uma liderança espiritual que brilha como ouro consagrado, inspirando reverência e devoção em todos os que testemunham seu nobre caráter.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando un propósito sagrado con gran determinación. Tu vocación sagrada y tu magnífica fuerza se combinan para crear un liderazgo espiritual que brilla como el oro consagrado, inspirando reverencia y devoción en todos los que presencian tu noble carácter.',
    ja: 'あなたの金の性質は、この名前と調和し、大きな決意をもって聖なる目的を築きます。あなたの神聖な召命と壮大な力が組み合わさって、聖別された金のように輝く精神的なリーダーシップを生み出し、あなたの高貴な人格を目撃するすべての人に畏敬と献身を促します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมสร้างจุดประสงค์อันศักดิ์สิทธิ์ด้วยความมุ่งมั่นอันยิ่งใหญ่ การเรียกอันศักดิ์สิทธิ์และความแข็งแกร่งอันงดงามของคุณรวมกันเพื่อสร้างความเป็นผู้นำทางจิตวิญญาณที่ส่องประกายเหมือนทองคำที่ได้รับการถวาย สร้างแรงบันดาลใจให้เกิดความเคารพและความจงรักภักดีในทุกคนที่ได้เห็นลักษณะนิสัยอันสูงส่งของคุณ',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa tujuan suci dengan tekad yang besar. Panggilan suci dan kekuatan agung Anda berpadu untuk menciptakan kepemimpinan spiritual yang bersinar seperti emas yang disucikan, menginspirasi rasa hormat dan pengabdian pada semua yang menyaksikan karakter mulia Anda.'
  }
},
// 102. 소영 (So-yeong)
{
  id: '소영_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, cultivating small beginnings into magnificent prosperity. Your humble start and flourishing growth combine to create an authentic success that gleams like refined silver, proving that true wealth comes from patient cultivation.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 작은 시작을 장엄한 번영으로 일구어냅니다. 당신의 겸손한 시작과 무성한 성장이 결합하여, 잘 닦인 은처럼 빛나는 진정한 성공을 창조하며, 참된 부는 끈기 있는 경작에서 비롯됨을 증명합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, cultivant de petits commencements en une magnifique prospérité. Votre humble départ et votre croissance florissante se combinent pour créer un succès authentique qui brille comme de l\'argent raffiné, prouvant que la vraie richesse vient d\'une culture patiente.',
    it: 'La tua natura di Metallo si armonizza con questo nome, coltivando piccoli inizi in una magnifica prosperità. Il tuo umile inizio e la tua crescita fiorente si combinano per creare un successo autentico che brilla come argento raffinato, dimostrando che la vera ricchezza deriva da una coltivazione paziente.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und kultiviert kleine Anfänge zu großartigem Wohlstand. Ihr bescheidener Anfang und Ihr blühendes Wachstum vereinen sich zu einem authentischen Erfolg, der wie raffiniertes Silber glänzt und beweist, dass wahrer Reichtum aus geduldiger Kultivierung entsteht.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, cultivando pequenos começos em uma magnífica prosperidade. Seu começo humilde e seu crescimento florescente se combinam para criar um sucesso autêntico que brilha como prata refinada, provando que a verdadeira riqueza vem do cultivo paciente.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, cultivando pequeños comienzos en una magnífica prosperidad. Tu humilde comienzo y tu floreciente crecimiento se combinan para crear un éxito auténtico que brilla como la plata refinada, demostrando que la verdadera riqueza proviene de un cultivo paciente.',
    ja: 'あなたの金の性質は、この名前と調和し、小さな始まりを壮大な繁栄に育てます。あなたの謙虚な始まりと繁栄する成長が組み合わさって、洗練された銀のように輝く本物の成功を生み出し、真の富は忍耐強い育成から生まれることを証明します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ บ่มเพาะการเริ่มต้นเล็กๆ ให้กลายเป็นความเจริญรุ่งเรืองอันงดงาม การเริ่มต้นที่ถ่อมตนและการเติบโตที่เฟื่องฟูของคุณรวมกันเพื่อสร้างความสำเร็จที่แท้จริงซึ่งเปล่งประกายเหมือนเงินบริสุทธิ์ พิสูจน์ให้เห็นว่าความมั่งคั่งที่แท้จริงมาจากการบ่มเพาะอย่างอดทน',
    id: 'Sifat Logam Anda selaras dengan nama ini, memupuk awal yang kecil menjadi kemakmuran yang luar biasa. Awal yang sederhana dan pertumbuhan yang berkembang pesat berpadu untuk menciptakan kesuksesan otentik yang berkilau seperti perak murni, membuktikan bahwa kekayaan sejati berasal dari penanaman yang sabar.'
  }
},
// 103. 소정 (So-jeong)
{
  id: '소정_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, transforming small clarities into brilliant illumination. Your crystalline purity and precise focus combine to create a wisdom that sparkles like a flawless diamond, revealing truth through gentle yet unwavering insight.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 작은 명료함을 눈부신 광명으로 변모시킵니다. 당신의 수정 같은 순수함과 정확한 집중력이 결합하여, 흠 없는 다이아몬드처럼 반짝이는 지혜를 창조하고, 부드러우면서도 흔들림 없는 통찰력으로 진실을 드러냅니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, transformant de petites clartés en une illumination brillante. Votre pureté cristalline et votre concentration précise se combinent pour créer une sagesse qui scintille comme un diamant sans défaut, révélant la vérité par une perspicacité douce mais inébranlable.',
    it: 'La tua natura di Metallo si armonizza con questo nome, trasformando piccole chiarezze in un\'illuminazione brillante. La tua purezza cristallina e la tua precisa concentrazione si combinano per creare una saggezza che scintilla come un diamante impeccabile, rivelando la verità attraverso un\'intuizione gentile ma incrollabile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und verwandelt kleine Klarheiten in brillante Erleuchtung. Ihre kristalline Reinheit und Ihr präziser Fokus vereinen sich zu einer Weisheit, die wie ein makelloser Diamant funkelt und die Wahrheit durch sanfte, aber unerschütterliche Einsicht enthüllt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, transformando pequenas clarezas em iluminação brilhante. Sua pureza cristalina e seu foco preciso se combinam para criar uma sabedoria que brilha como um diamante impecável, revelando a verdade através de uma visão gentil, porém inabalável.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, transformando pequeñas claridades en una iluminación brillante. Tu pureza cristalina y tu enfoque preciso se combinan para crear una sabiduría que brilla como un diamante impecable, revelando la verdad a través de una visión suave pero inquebrantable.',
    ja: 'あなたの金の性質は、この名前と調和し、小さな明快さを輝かしい照明に変えます。あなたの結晶のような純粋さと正確な焦点が組み合わさって、完璧なダイヤモンドのように輝く知恵を生み出し、穏やかでありながら揺るぎない洞察を通して真実を明らかにします。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ เปลี่ยนความชัดเจนเล็กๆ ให้กลายเป็นการส่องสว่างที่ยอดเยี่ยม ความบริสุทธิ์ดุจคริสตัลและสมาธิที่แม่นยำของคุณรวมกันเพื่อสร้างปัญญาที่เปล่งประกายเหมือนเพชรที่ไร้ที่ติ เผยให้เห็นความจริงผ่านความเข้าใจที่อ่อนโยนแต่ไม่สั่นคลอน',
    id: 'Sifat Logam Anda selaras dengan nama ini, mengubah kejernihan kecil menjadi pencerahan yang cemerlang. Kemurnian kristal dan fokus presisi Anda berpadu untuk menciptakan kebijaksanaan yang berkilau seperti berlian tanpa cacat, mengungkapkan kebenaran melalui wawasan yang lembut namun tak tergoyahkan.'
  }
},
// 104. 소진 (So-jin)
{
  id: '소진_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, polishing small treasures into extraordinary value. Your precious essence and careful refinement combine to create a character that shines like a rare gem, demonstrating that true worth lies in authentic quality, not just appearance.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 작은 보물을 비범한 가치로 닦아냅니다. 당신의 귀중한 본질과 세심한 정제가 결합하여, 희귀한 보석처럼 빛나는 품성을 창조하며, 진정한 가치는 외양이 아닌 진정한 품질에 있음을 보여줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant de petits trésors en une valeur extraordinaire. Votre essence précieuse et votre raffinement soigné se combinent pour créer un caractère qui brille comme une gemme rare, démontrant que la vraie valeur réside dans la qualité authentique, et non dans la simple apparence.',
    it: 'La tua natura di Metallo si armonizza con questo nome, lucidando piccoli tesori in un valore straordinario. La tua essenza preziosa e la tua attenta raffinatezza si combinano per creare un carattere che brilla come una gemma rara, dimostrando che il vero valore risiede nella qualità autentica, non solo nell\'aspetto.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert kleine Schätze zu außergewöhnlichem Wert. Ihre kostbare Essenz und Ihre sorgfältige Verfeinerung vereinen sich zu einem Charakter, der wie ein seltener Edelstein glänzt und zeigt, dass wahrer Wert in authentischer Qualität und nicht nur im Aussehen liegt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, polindo pequenos tesouros em um valor extraordinário. Sua essência preciosa e seu refinamento cuidadoso se combinam para criar um caráter que brilha como uma joia rara, demonstrando que o verdadeiro valor está na qualidade autêntica, não apenas na aparência.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo pequeños tesoros en un valor extraordinario. Tu esencia preciosa y tu cuidadoso refinamiento se combinan para crear un carácter que brilla como una gema rara, demostrando que el verdadero valor reside en la calidad auténtica, no solo en la apariencia.',
    ja: 'あなたの金の性質は、この名前と調和し、小さな宝物を並外れた価値に磨き上げます。あなたの貴重な本質と注意深い洗練が組み合わさって、希少な宝石のように輝く性格を生み出し、真の価値は外見だけでなく本物の品質にあることを示します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาสมบัติเล็กๆ ให้มีค่าพิเศษ สาระสำคัญอันล้ำค่าและการขัดเกลาอย่างระมัดระวังของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ส่องประกายเหมือนอัญมณีหายาก แสดงให้เห็นว่าคุณค่าที่แท้จริงอยู่ที่คุณภาพที่แท้จริง ไม่ใช่แค่รูปลักษณ์ภายนอก',
    id: 'Sifat Logam Anda selaras dengan nama ini, memoles harta karun kecil menjadi nilai yang luar biasa. Esensi berharga dan pemurnian yang cermat berpadu untuk menciptakan karakter yang bersinar seperti permata langka, menunjukkan bahwa nilai sejati terletak pada kualitas otentik, bukan hanya penampilan.'
  }
},
// 105. 수빈 (Soo-bin)
{
  id: '수빈_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, flowing with an excellence that endures through grace. Your beautiful achievements and lasting strength combine to create a wisdom that endures like an ancient river, nourishing civilizations across countless generations.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 우아함을 통해 지속되는 탁월함으로 흐릅니다. 당신의 아름다운 성취와 지속적인 힘이 결합하여, 수많은 세대에 걸쳐 문명을 키워온 고대 강물처럼 영속하는 지혜를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une excellence qui perdure par la grâce. Vos belles réalisations et votre force durable se combinent pour créer une sagesse qui perdure comme une ancienne rivière, nourrissant les civilisations à travers d\'innombrables générations.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, scorrendo con un\'eccellenza che perdura attraverso la grazia. I tuoi meravigliosi risultati e la tua forza duratura si combinano per creare una saggezza che perdura come un antico fiume, nutrendo civiltà attraverso innumerevoli generazioni.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit einer Exzellenz, die durch Anmut Bestand hat. Ihre schönen Errungenschaften und Ihre dauerhafte Stärke vereinen sich zu einer Weisheit, die wie ein alter Fluss Bestand hat und Zivilisationen über unzählige Generationen hinweg nährt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, fluindo com uma excelência que perdura através da graça. Suas belas realizações e sua força duradoura se combinam para criar uma sabedoria que perdura como um rio antigo, nutrindo civilizações por inúmeras gerações.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una excelencia que perdura a través de la gracia. Tus hermosos logros y tu fuerza duradera se combinan para crear una sabiduría que perdura como un río antiguo, nutriendo civilizaciones a través de innumerables generaciones.',
    ja: 'あなたの水の性質は、この名前と調和し、優雅さを通して持続する卓越性で流れます。あなたの美しい業績と永続的な強さが組み合わさって、古代の川のように持続する知恵を生み出し、数え切れないほどの世代にわたって文明を育みます。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ไหลลื่นด้วยความเป็นเลิศที่คงอยู่ผ่านความสง่างาม ความสำเร็จที่สวยงามและความแข็งแกร่งที่ยั่งยืนของคุณรวมกันเพื่อสร้างปัญญาที่คงอยู่เหมือนแม่น้ำโบราณ หล่อเลี้ยงอารยธรรมมานับไม่ถ้วน',
    id: 'Sifat Air Anda selaras dengan nama ini, mengalir dengan keunggulan yang bertahan melalui keanggunan. Pencapaian indah dan kekuatan abadi Anda berpadu untuk menciptakan kebijaksanaan yang bertahan seperti sungai kuno, menyehatkan peradaban selama beberapa generasi.'
  }
},
// 106. 수정 (Soo-jeong)
{
  id: '수정_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, crystallizing beauty into perfect clarity. Your gorgeous crystal formation and unbreakable transparency combine to create a character that refracts light like a precious gem, revealing the hidden beauty in everything you touch.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 아름다움을 완벽한 투명함으로 결정화합니다. 당신의 화려한 수정 형태와 깨지지 않는 투명성이 결합하여, 귀한 보석처럼 빛을 굴절시키는 품성을 창조하고, 당신이 닿는 모든 것에서 숨겨진 아름다움을 드러냅니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, cristallisant la beauté en une clarté parfaite. Votre magnifique formation cristalline et votre transparence incassable se combinent pour créer un caractère qui réfracte la lumière comme une gemme précieuse, révélant la beauté cachée dans tout ce que vous touchez.',
    it: 'La tua natura di Metallo si armonizza con questo nome, cristallizzando la bellezza in una chiarezza perfetta. La tua splendida formazione cristallina e la tua trasparenza infrangibile si combinano per creare un carattere che rifrange la luce come una gemma preziosa, rivelando la bellezza nascosta in ogni cosa che tocchi.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und kristallisiert Schönheit zu perfekter Klarheit. Ihre wunderschöne Kristallbildung und Ihre unzerbrechliche Transparenz vereinen sich zu einem Charakter, der das Licht wie ein kostbarer Edelstein bricht und die verborgene Schönheit in allem, was Sie berühren, enthüllt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, cristalizando a beleza em clareza perfeita. Sua linda formação de cristal e sua transparência inquebrável se combinam para criar um caráter que refrata a luz como uma pedra preciosa, revelando a beleza oculta em tudo que você toca.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, cristalizando la belleza en una claridad perfecta. Tu hermosa formación de cristal y tu transparencia inquebrantable se combinan para crear un carácter que refracta la luz como una gema preciosa, revelando la belleza oculta en todo lo que tocas.',
    ja: 'あなたの金の性質は、この名前と調和し、美しさを完璧な透明度に結晶化させます。あなたの豪華な結晶形成と壊れない透明性が組み合わさって、貴重な宝石のように光を屈折させる性格を生み出し、あなたが触れるすべてのものに隠された美しさを明らかにします。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ตกผลึกความงามให้กลายเป็นความชัดเจนที่สมบูรณ์แบบ รูปทรงคริสตัลที่งดงามและความโปร่งใสที่ไม่แตกสลายของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่หักเหแสงเหมือนอัญมณีล้ำค่า เผยให้เห็นความงามที่ซ่อนอยู่ในทุกสิ่งที่คุณสัมผัส',
    id: 'Sifat Logam Anda selaras dengan nama ini, mengkristalkan keindahan menjadi kejernihan yang sempurna. Formasi kristal Anda yang indah dan transparansi yang tak terpatahkan berpadu untuk menciptakan karakter yang membiaskan cahaya seperti permata berharga, mengungkapkan keindahan tersembunyi dalam segala hal yang Anda sentuh.'
  }
},
// 107. 수진 (Soo-jin)
{
  id: '수진_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging a beautiful character with precious determination. Your stunning quality and treasured resolve combine to create a strength that gleams like polished gold, inspiring others through your commitment to authentic excellence.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 아름다운 품성을 귀한 결단력으로 벼려냅니다. 당신의 빼어난 자질과 소중한 결의가 결합하여, 잘 닦인 금처럼 빛나는 힘을 창조하고, 진정한 탁월함을 향한 당신의 헌신을 통해 다른 이들에게 영감을 줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant un beau caractère avec une détermination précieuse. Votre qualité étonnante et votre résolution précieuse se combinent pour créer une force qui brille comme de l\'or poli, inspirant les autres par votre engagement envers l\'excellence authentique.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando un bel carattere con una preziosa determinazione. La tua straordinaria qualità e la tua preziosa determinazione si combinano per creare una forza che brilla come oro lucidato, ispirando gli altri attraverso il tuo impegno per un\'eccellenza autentica.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet einen schönen Charakter mit kostbarer Entschlossenheit. Ihre atemberaubende Qualität und Ihre geschätzte Entschlossenheit vereinen sich zu einer Stärke, die wie poliertes Gold glänzt und andere durch Ihr Engagement für authentische Exzellenz inspiriert.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando um belo caráter com preciosa determinação. Sua qualidade impressionante e sua resolução valiosa se combinam para criar uma força que brilha como ouro polido, inspirando outros através de seu compromisso com a excelência autêntica.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando un hermoso carácter con una preciosa determinación. Tu impresionante calidad y tu preciada resolución se combinan para crear una fuerza que brilla como el oro pulido, inspirando a otros a través de tu compromiso con la auténtica excelencia.',
    ja: 'あなたの金の性質は、この名前と調和し、貴重な決意をもって美しい人格を築きます。あなたの見事な品質と大切な決意が組み合わさって、磨かれた金のように輝く強さを生み出し、真の卓越性へのあなたのコミットメントを通して他の人を鼓舞します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมสร้างลักษณะนิสัยที่สวยงามด้วยความมุ่งมั่นอันล้ำค่า คุณภาพที่น่าทึ่งและความมุ่งมั่นอันล้ำค่าของคุณรวมกันเพื่อสร้างความแข็งแกร่งที่เปล่งประกายเหมือนทองคำขัดเงา สร้างแรงบันดาลใจให้ผู้อื่นผ่านความมุ่งมั่นของคุณสู่ความเป็นเลิศที่แท้จริง',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa karakter yang indah dengan tekad yang berharga. Kualitas Anda yang menakjubkan dan tekad yang berharga berpadu untuk menciptakan kekuatan yang berkilau seperti emas poles, menginspirasi orang lain melalui komitmen Anda pada keunggulan otentik.'
  }
},
// 108. 승수 (Seung-soo)
{
  id: '승수_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling victory through a flowing, graceful excellence. Your triumphant spirit and outstanding achievement combine to create a success that moves like a mighty river, overcoming all obstacles through persistent, fluid grace.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 흐르는 듯한 우아한 탁월함을 통해 승리를 이끌어냅니다. 당신의 승리에 찬 정신과 뛰어난 성취가 결합하여, 끈기 있고 유연한 우아함으로 모든 장애물을 극복하는 거대한 강물처럼 움직이는 성공을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant la victoire par une excellence fluide et gracieuse. Votre esprit triomphant et vos réalisations exceptionnelles se combinent pour créer un succès qui se déplace comme une rivière puissante, surmontant tous les obstacles grâce à une grâce persistante et fluide.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando la vittoria attraverso un\'eccellenza fluida e aggraziata. Il tuo spirito trionfante e i tuoi eccezionali risultati si combinano per creare un successo che si muove come un fiume possente, superando tutti gli ostacoli con una grazia persistente e fluida.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert den Sieg durch eine fließende, anmutige Exzellenz. Ihr triumphaler Geist und Ihre herausragende Leistung vereinen sich zu einem Erfolg, der sich wie ein mächtiger Fluss bewegt und alle Hindernisse durch beharrliche, fließende Anmut überwindet.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando a vitória através de uma excelência fluida e graciosa. Seu espírito triunfante e sua realização excepcional se combinam para criar um sucesso que se move como um rio poderoso, superando todos os obstáculos através da graça persistente e fluida.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando la victoria a través de una excelencia fluida y elegante. Tu espíritu triunfante y tus logros sobresalientes se combinan para crear un éxito que se mueve como un río caudaloso, superando todos los obstáculos a través de una gracia persistente y fluida.',
    ja: 'あなたの水の性質は、この名前と調和し、流れるような、優雅な卓越性を通して勝利を導きます。あなたの勝利の精神と卓越した業績が組み合わさって、永続的で流動的な優雅さですべての障害を克服する、力強い川のように動く成功を生み出します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านชัยชนะผ่านความเป็นเลิศที่ลื่นไหลและสง่างาม จิตวิญญาณแห่งชัยชนะและความสำเร็จที่โดดเด่นของคุณรวมกันเพื่อสร้างความสำเร็จที่เคลื่อนไหวเหมือนแม่น้ำที่ยิ่งใหญ่ เอาชนะอุปสรรคทั้งหมดด้วยความสง่างามที่ต่อเนื่องและลื่นไหล',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan kemenangan melalui keunggulan yang mengalir dan anggun. Semangat kemenangan dan pencapaian luar biasa Anda berpadu untuk menciptakan kesuksesan yang bergerak seperti sungai besar, mengatasi semua rintangan melalui keanggunan yang gigih dan lancar.'
  }
},
// 109. 승재 (Seung-jae)
{
  id: '승재_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, sharpening victory into exceptional talent. Your triumphant strength and brilliant ability combine to create a mastery that cuts through challenges like a perfectly forged blade, achieving success through skilled precision and unwavering will.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 승리를 비범한 재능으로 날카롭게 벼려냅니다. 당신의 승리의 힘과 눈부신 능력이 결합하여, 완벽하게 벼려진 칼날처럼 도전을 가르는 숙달의 경지를 창조하고, 숙련된 정밀함과 흔들림 없는 의지를 통해 성공을 성취합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, aiguisant la victoire en un talent exceptionnel. Votre force triomphante et votre capacité brillante se combinent pour créer une maîtrise qui tranche les défis comme une lame parfaitement forgée, réussissant grâce à une précision habile et une volonté inébranlable.',
    it: 'La tua natura di Metallo si armonizza con questo nome, affinando la vittoria in un talento eccezionale. La tua forza trionfante e la tua brillante abilità si combinano per creare una maestria che fende le sfide come una lama perfettamente forgiata, raggiungendo il successo attraverso una precisione abile e una volontà incrollabile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schärft den Sieg zu außergewöhnlichem Talent. Ihre triumphale Stärke und Ihre brillante Fähigkeit vereinen sich zu einer Meisterschaft, die Herausforderungen wie eine perfekt geschmiedete Klinge durchdringt und durch geschickte Präzision und unerschütterlichen Willen Erfolg hat.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, afiando a vitória em um talento excepcional. Sua força triunfante e sua habilidade brilhante se combinam para criar uma maestria que corta os desafios como uma lâmina perfeitamente forjada, alcançando o sucesso através de precisão habilidosa e vontade inabalável.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, agudizando la victoria en un talento excepcional. Tu fuerza triunfante y tu brillante habilidad se combinan para crear una maestría que atraviesa los desafíos como una hoja perfectamente forjada, logrando el éxito a través de una hábil precisión y una voluntad inquebrantable.',
    ja: 'あなたの金の性質は、この名前と調和し、勝利を並外れた才能に研ぎ澄まします。あなたの勝利の強さと素晴らしい能力が組み合わさって、完璧に鍛えられた刃のように挑戦を切り裂く熟練を生み出し、熟練した精度と揺るぎない意志を通して成功を収めます。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ลับชัยชนะให้กลายเป็นพรสวรรค์ที่ยอดเยี่ยม ความแข็งแกร่งแห่งชัยชนะและความสามารถอันยอดเยี่ยมของคุณรวมกันเพื่อสร้างความเชี่ยวชาญที่ตัดผ่านความท้าทายเหมือนใบมีดที่ตีอย่างสมบูรณ์แบบ บรรลุความสำเร็จผ่านความแม่นยำที่มีทักษะและความตั้งใจที่ไม่สั่นคลอน',
    id: 'Sifat Logam Anda selaras dengan nama ini, mempertajam kemenangan menjadi bakat yang luar biasa. Kekuatan kemenangan dan kemampuan cemerlang Anda berpadu untuk menciptakan penguasaan yang menembus tantangan seperti pisau yang ditempa dengan sempurna, mencapai kesuksesan melalui presisi yang terampil dan kemauan yang tak tergoyahkan.'
  }
},
// 110. 승철 (Seung-chul)
{
  id: '승철_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, tempering victory into iron-clad resolve. Your triumphant will and unbreakable strength combine to create a determination that stands like fortress walls, protecting your principles while conquering every challenge you face.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 승리를 철갑 같은 결의로 단련합니다. 당신의 승리의 의지와 깨지지 않는 힘이 결합하여, 성채의 벽처럼 굳건히 서서 당신이 마주하는 모든 도전을 정복하면서 당신의 원칙을 보호하는 결단력을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant la victoire en une résolution à toute épreuve. Votre volonté triomphante et votre force incassable se combinent pour créer une détermination qui se dresse comme des murs de forteresse, protégeant vos principes tout en conquérant chaque défi que vous rencontrez.',
    it: 'La tua natura di Metallo si armonizza con questo nome, temprando la vittoria in una determinazione ferrea. La tua volontà trionfante e la tua forza indistruttibile si combinano per creare una determinazione che si erge come le mura di una fortezza, proteggendo i tuoi principi mentre conquisti ogni sfida che affronti.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert den Sieg zu eiserner Entschlossenheit. Ihr triumphaler Wille und Ihre unzerbrechliche Stärke vereinen sich zu einer Entschlossenheit, die wie Festungsmauern steht und Ihre Prinzipien schützt, während Sie jede Herausforderung meistern, der Sie sich stellen.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, temperando a vitória em uma resolução de ferro. Sua vontade triunfante e sua força inquebrável se combinam para criar uma determinação que se ergue como muralhas de uma fortaleza, protegendo seus princípios enquanto conquista cada desafio que você enfrenta.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, templando la victoria en una resolución férrea. Tu voluntad triunfante y tu fuerza inquebrantable se combinan para crear una determinación que se yergue como muros de fortaleza, protegiendo tus principios mientras conquistas cada desafío que enfrentas.',
    ja: 'あなたの金の性質は、この名前と調和し、勝利を鉄壁の決意に和らげます。あなたの勝利の意志と壊れない強さが組み合わさって、あなたが直面するすべての挑戦を征服しながらあなたの原則を守る、要塞の壁のように立つ決意を生み出します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ บ่มเพาะชัยชนะให้เป็นความมุ่งมั่นที่แข็งแกร่งดุจเหล็กเจือเกราะ ความตั้งใจแห่งชัยชนะและความแข็งแกร่งที่ไม่แตกสลายของคุณรวมกันเพื่อสร้างความมุ่งมั่นที่ยืนหยัดเหมือนกำแพงป้อมปราการ ปกป้องหลักการของคุณในขณะที่พิชิตทุกความท้าทายที่คุณเผชิญ',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa kemenangan menjadi tekad sekuat baja. Kehendak kemenangan dan kekuatan tak terpatahkan Anda berpadu untuk menciptakan tekad yang berdiri seperti tembok benteng, melindungi prinsip-prinsip Anda sambil menaklukkan setiap tantangan yang Anda hadapi.'
  }
},
// 111. 승호 (Seung-ho)
{
  id: '승호_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, flowing with victory toward magnificent achievements. Your triumphant energy and great purpose combine to create a success that surges like ocean tides, bringing an abundance that benefits entire communities.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 승리와 함께 장엄한 성취를 향해 흘러갑니다. 당신의 승리의 에너지와 위대한 목적이 결합하여, 바다의 조수처럼 밀려와 공동체 전체에 이로움을 주는 풍요를 가져오는 성공을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec la victoire vers de magnifiques réalisations. Votre énergie triomphante et votre grand objectif se combinent pour créer un succès qui déferle comme les marées de l\'océan, apportant une abondance qui profite à des communautés entières.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, scorrendo con la vittoria verso magnifici risultati. La tua energia trionfante e il tuo grande scopo si combinano per creare un successo che cresce come le maree oceaniche, portando un\'abbondanza che beneficia intere comunità.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit dem Sieg zu großartigen Errungenschaften. Ihre triumphale Energie und Ihr großes Ziel vereinen sich zu einem Erfolg, der wie Meeresgezeiten ansteigt und einen Überfluss bringt, der ganzen Gemeinschaften zugute kommt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, fluindo com a vitória em direção a magníficas realizações. Sua energia triunfante e seu grande propósito se combinam para criar um sucesso que surge como as marés do oceano, trazendo uma abundância que beneficia comunidades inteiras.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con la victoria hacia logros magníficos. Tu energía triunfante y tu gran propósito se combinan para crear un éxito que surge como las mareas del océano, trayendo una abundancia que beneficia a comunidades enteras.',
    ja: 'あなたの水の性質は、この名前と調和し、壮大な業績に向かって勝利とともに流れます。あなたの勝利のエネルギーと偉大な目的が組み合わさって、海の潮のように押し寄せる成功を生み出し、コミュニティ全体に利益をもたらす豊かさをもたらします。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ไหลลื่นด้วยชัยชนะไปสู่ความสำเร็จอันงดงาม พลังแห่งชัยชนะและจุดประสงค์อันยิ่งใหญ่ของคุณรวมกันเพื่อสร้างความสำเร็จที่เพิ่มขึ้นเหมือนกระแสน้ำในมหาสมุทร นำมาซึ่งความอุดมสมบูรณ์ที่เป็นประโยชน์ต่อชุมชนทั้งหมด',
    id: 'Sifat Air Anda selaras dengan nama ini, mengalir dengan kemenangan menuju pencapaian yang luar biasa. Energi kemenangan dan tujuan besar Anda berpadu untuk menciptakan kesuksesan yang melonjak seperti pasang surut samudra, membawa kelimpahan yang bermanfaat bagi seluruh komunitas.'
  }
},
// 112. 원영 (Won-yeong)
{
  id: '원영_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling prosperity from its source through endless generosity. Your wellspring of abundance and flourishing growth combine to create a wealth that flows like an eternal spring, nourishing countless lives with genuine prosperity.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 끝없는 너그러움을 통해 근원으로부터의 번영을 이끌어냅니다. 당신의 풍요의 샘과 무성한 성장이 결합하여, 영원한 샘물처럼 흘러 수많은 생명을 진정한 번영으로 키우는 부를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant la prospérité de sa source par une générosité sans fin. Votre source d\'abondance et votre croissance florissante se combinent pour créer une richesse qui coule comme une source éternelle, nourrissant d\'innombrables vies d\'une prospérité authentique.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando la prosperità dalla sua fonte attraverso una generosità infinita. La tua fonte di abbondanza e la tua crescita fiorente si combinano per creare una ricchezza che scorre come una sorgente eterna, nutrendo innumerevoli vite con una prosperità genuina.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert den Wohlstand von seiner Quelle durch endlose Großzügigkeit. Ihre Quelle des Überflusses und Ihr blühendes Wachstum vereinen sich zu einem Reichtum, der wie eine ewige Quelle fließt und unzählige Leben mit echtem Wohlstand nährt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando a prosperidade de sua fonte através da generosidade infinita. Sua fonte de abundância e seu crescimento florescente se combinam para criar uma riqueza que flui como uma fonte eterna, nutrindo inúmeras vidas com prosperidade genuína.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando la prosperidad desde su fuente a través de una generosidad infinita. Tu fuente de abundancia y tu floreciente crecimiento se combinan para crear una riqueza que fluye como un manantial eterno, nutriendo innumerables vidas con una prosperidad genuina.',
    ja: 'あなたの水の性質は、この名前と調和し、無限の寛大さを通してその源から繁栄を導きます。あなたの豊かさの源泉と繁栄する成長が組み合わさって、永遠の泉のように流れる富を生み出し、無数の生命を真の繁栄で養います。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความเจริญรุ่งเรืองจากแหล่งกำเนิดผ่านความเอื้ออาทรที่ไม่สิ้นสุด แหล่งความอุดมสมบูรณ์และการเติบโตที่เฟื่องฟูของคุณรวมกันเพื่อสร้างความมั่งคั่งที่ไหลเหมือนน้ำพุชั่วนิรันดร์ หล่อเลี้ยงชีวิตนับไม่ถ้วนด้วยความเจริญรุ่งเรืองอย่างแท้จริง',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan kemakmuran dari sumbernya melalui kemurahan hati yang tak ada habisnya. Sumber kelimpahan dan pertumbuhan Anda yang berkembang pesat berpadu untuk menciptakan kekayaan yang mengalir seperti mata air abadi, menyehatkan banyak kehidupan dengan kemakmuran sejati.'
  }
},
// 113. 원우 (Won-woo)
{
  id: '원우_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, sourcing excellence from deep wells of wisdom. Your fundamental strength and outstanding quality combine to create a leadership that flows like a pristine mountain spring, providing pure, inexhaustible guidance.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 깊은 지혜의 우물에서 탁월함을 길어 올립니다. 당신의 근본적인 힘과 뛰어난 자질이 결합하여, 맑고 깨끗한 산골 샘물처럼 흘러 마르지 않는 순수한 지침을 제공하는 리더십을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, puisant l\'excellence dans de profonds puits de sagesse. Votre force fondamentale et votre qualité exceptionnelles se combinent pour créer un leadership qui coule comme une source de montagne vierge, offrant des conseils purs et inépuisables.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, attingendo eccellenza da profondi pozzi di saggezza. La tua forza fondamentale e la tua eccezionale qualità si combinano per creare una leadership che scorre come una sorgente di montagna incontaminata, fornendo una guida pura e inesauribile.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und bezieht Exzellenz aus tiefen Brunnen der Weisheit. Ihre grundlegende Stärke und Ihre herausragende Qualität vereinen sich zu einer Führung, die wie eine unberührte Bergquelle fließt und reine, unerschöpfliche Führung bietet.',
    pt: 'Sua natureza de Água se harmoniza com este nome, buscando excelência em poços profundos de sabedoria. Sua força fundamental e sua qualidade excepcional se combinam para criar uma liderança que flui como uma fonte de montanha intocada, fornecendo orientação pura e inesgotável.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, obteniendo la excelencia de profundos pozos de sabiduría. Tu fuerza fundamental y tu calidad sobresaliente se combinan para crear un liderazgo que fluye como un manantial de montaña prístino, proporcionando una guía pura e inagotable.',
    ja: 'あなたの水の性質は、この名前と調和し、知恵の深い井戸から卓越性を調達します。あなたの基本的な強さと卓越した品質が組み合わさって、純粋で尽きることのないガイダンスを提供する、手付かずの山の泉のように流れるリーダーシップを生み出します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ แสวงหาความเป็นเลิศจากบ่อปัญญาอันลึกซึ้ง ความแข็งแกร่งพื้นฐานและคุณภาพที่โดดเด่นของคุณรวมกันเพื่อสร้างความเป็นผู้นำที่ไหลเหมือนน้ำพุบนภูเขาที่บริสุทธิ์ ให้คำแนะนำที่บริสุทธิ์และไม่มีวันหมดสิ้น',
    id: 'Sifat Air Anda selaras dengan nama ini, mengambil keunggulan dari sumur kebijaksanaan yang dalam. Kekuatan fundamental dan kualitas luar biasa Anda berpadu untuk menciptakan kepemimpinan yang mengalir seperti mata air pegunungan yang masih asli, memberikan bimbingan yang murni dan tak ada habisnya.'
  }
},
// 114. 윤서 (Yoon-seo)
{
  id: '윤서_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, flowing with prosperous kindness through auspicious channels. Your nurturing abundance and blessed fortune combine to create a generosity that moves like a gentle rain, bringing both growth and good omens to all it touches.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 상서로운 통로를 통해 번영하는 친절함을 흘려보냅니다. 당신의 자양분을 주는 풍요와 축복받은 행운이 결합하여, 닿는 모든 것에 성장과 좋은 징조를 함께 가져다주는 부드러운 비처럼 움직이는 너그러움을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une bonté prospère par des canaux auspicieux. Votre abondance nourricière et votre fortune bénie se combinent pour créer une générosité qui se déplace comme une douce pluie, apportant à la fois croissance et bons présages à tout ce qu\'elle touche.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, scorrendo con una gentilezza prospera attraverso canali propizi. La tua abbondanza nutriente e la tua fortuna benedetta si combinano per creare una generosità che si muove come una pioggia gentile, portando crescita e buoni presagi a tutto ciò che tocca.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit wohlhabender Freundlichkeit durch glückverheißende Kanäle. Ihre nährende Fülle und Ihr gesegnetes Glück vereinen sich zu einer Großzügigkeit, die sich wie ein sanfter Regen bewegt und allem, was sie berührt, sowohl Wachstum als auch gute Omen bringt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, fluindo com bondade próspera através de canais auspiciosos. Sua abundância nutritiva e sua fortuna abençoada se combinam para criar uma generosidade que se move como uma chuva suave, trazendo crescimento e bons presságios para tudo o que toca.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una bondad próspera a través de canales auspiciosos. Tu abundancia nutritiva y tu bendita fortuna se combinan para crear una generosidad que se mueve como una lluvia suave, trayendo tanto crecimiento como buenos presagios a todo lo que toca.',
    ja: 'あなたの水の性質は、この名前と調和し、縁起の良いチャネルを通して繁栄した優しさで流れます。あなたの育む豊かさと祝福された幸運が組み合わさって、穏やかな雨のように動く寛大さを生み出し、それが触れるすべてに成長と吉兆の両方をもたらします。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ไหลลื่นด้วยความเมตตาที่เจริญรุ่งเรืองผ่านช่องทางที่เป็นมงคล ความอุดมสมบูรณ์ที่บำรุงเลี้ยงและโชคลาภที่ได้รับพรของคุณรวมกันเพื่อสร้างความเอื้ออาทรที่เคลื่อนไหวเหมือนสายฝนที่อ่อนโยน นำมาซึ่งการเติบโตและลางดีมาสู่ทุกสิ่งที่สัมผัส',
    id: 'Sifat Air Anda selaras dengan nama ini, mengalir dengan kebaikan yang makmur melalui saluran yang baik. Kelimpahan pengasuhan dan nasib baik Anda berpadu untuk menciptakan kemurahan hati yang bergerak seperti hujan lembut, membawa pertumbuhan dan pertanda baik bagi semua yang disentuhnya.'
  }
},
// 115. 은영 (Eun-yeong)
{
  id: '은영_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, polishing silver prosperity into radiant success. Your precious metal foundation and flourishing achievement combine to create a wealth that gleams like moonlight on water, bringing both material and spiritual abundance.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 은빛 번영을 찬란한 성공으로 닦아냅니다. 당신의 귀금속 기반과 무성한 성취가 결합하여, 물 위에 비친 달빛처럼 빛나며 물질적, 정신적 풍요를 모두 가져다주는 부를 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant la prospérité de l\'argent en un succès radieux. Votre fondation en métal précieux et votre accomplissement florissant se combinent pour créer une richesse qui brille comme le clair de l\'eau, apportant à la fois l\'abondance matérielle et spirituelle.',
    it: 'La tua natura di Metallo si armonizza con questo nome, lucidando la prosperità dell\'argento in un successo radioso. La tua base di metallo prezioso e il tuo fiorente successo si combinano per creare una ricchezza che brilla come il chiaro di luna sull\'acqua, portando abbondanza sia materiale che spirituale.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert silbernen Wohlstand zu strahlendem Erfolg. Ihre Edelmetallbasis und Ihre blühende Leistung vereinen sich zu einem Reichtum, der wie Mondlicht auf dem Wasser glänzt und sowohl materiellen als auch spirituellen Überfluss bringt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, polindo a prosperidade da prata em um sucesso radiante. Sua base de metal precioso e sua realização florescente se combinam para criar uma riqueza que brilha como o luar na água, trazendo abundância material e espiritual.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo la prosperidad de la plata en un éxito radiante. Tu base de metales preciosos y tus logros florecientes se combinan para crear una riqueza que brilla como la luz de la luna sobre el agua, trayendo abundancia tanto material como espiritual.',
    ja: 'あなたの金の性質は、この名前と調和し、銀の繁栄を輝かしい成功に磨き上げます。あなたの貴金属の基盤と繁栄する業績が組み合わさって、水面の月光のように輝く富を生み出し、物質的および精神的な豊かさの両方をもたらします。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาความเจริญรุ่งเรืองสีเงินให้กลายเป็นความสำเร็จที่เปล่งปลั่ง รากฐานโลหะมีค่าและความสำเร็จที่เฟื่องฟูของคุณรวมกันเพื่อสร้างความมั่งคั่งที่เปล่งประกายเหมือนแสงจันทร์บนผืนน้ำ นำมาซึ่งความอุดมสมบูรณ์ทั้งทางวัตถุและจิตวิญญาณ',
    id: 'Sifat Logam Anda selaras dengan nama ini, memoles kemakmuran perak menjadi kesuksesan yang bersinar. Fondasi logam mulia dan pencapaian Anda yang berkembang pesat berpadu untuk menciptakan kekayaan yang berkilau seperti cahaya bulan di atas air, membawa kelimpahan materi dan spiritual.'
  }
},
// 116. 은우 (Eun-woo)
{
  id: '은우_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling kindness into excellent character. Your gracious spirit and outstanding virtue combine to create a compassion that flows like a healing spring, offering comfort and inspiration to all who need renewal.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 친절함을 탁월한 품성으로 이끌어냅니다. 당신의 은혜로운 정신과 뛰어난 덕성이 결합되어, 치유의 샘물처럼 흘러 새로움을 필요로 하는 모든 이에게 위안과 영감을 주는 연민을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant la gentillesse en un excellent caractère. Votre esprit gracieux et votre vertu exceptionnelle se combinent pour créer une compassion qui coule comme une source de guérison, offrant réconfort et inspiration à tous ceux qui ont besoin de renouveau.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando la gentilezza in un carattere eccellente. Il tuo spirito grazioso e la tua virtù eccezionale si combinano per creare una compassione che scorre come una sorgente curativa, offrendo conforto e ispirazione a tutti coloro che necessitano di rinnovamento.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert Freundlichkeit in einen ausgezeichneten Charakter. Ihr anmutiger Geist und Ihre herausragende Tugend vereinen sich zu einem Mitgefühl, das wie eine heilende Quelle fließt und allen, die Erneuerung brauchen, Trost und Inspiration bietet.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando a bondade em um caráter excelente. Seu espírito gracioso e sua virtude excepcional se combinam para criar uma compaixão que flui como uma fonte de cura, oferecendo conforto e inspiração a todos que precisam de renovação.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando la bondad en un carácter excelente. Tu espíritu amable y tu virtud sobresaliente se combinan para crear una compasión que fluye como un manantial curativo, ofreciendo consuelo e inspiración a todos los que necesitan renovación.',
    ja: 'あなたの水の性質は、この名前と調和し、優しさを優れた人格に導きます。あなたの優雅な精神と卓越した美徳が組み合わさって、癒しの泉のように流れる思いやりを生み出し、更新を必要とするすべての人に慰めとインスピレーションを提供します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความเมตตาให้กลายเป็นลักษณะนิสัยที่ยอดเยี่ยม จิตวิญญาณที่สง่างามและคุณธรรมที่โดดเด่นของคุณรวมกันเพื่อสร้างความเมตตาที่ไหลเหมือนน้ำพุแห่งการเยียวยา มอบความสบายใจและแรงบันดาลใจให้กับทุกคนที่ต้องการการฟื้นฟู',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan kebaikan menjadi karakter yang unggul. Semangat ramah dan kebajikan luar biasa Anda berpadu untuk menciptakan welas asih yang mengalir seperti mata air penyembuhan, menawarkan kenyamanan dan inspirasi bagi semua yang membutuhkan pembaruan.'
  }
},
// 117. 정민 (Jeong-min)
{
  id: '정민_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging a righteous purpose with swift action. Your moral clarity and agile thinking combine to create an integrity that cuts through confusion like a sharp blade, always choosing the path of justice with decisive speed.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 목적을 신속한 행동으로 벼려냅니다. 당신의 도덕적 명료함과 민첩한 사고가 결합하여, 날카로운 칼날처럼 혼돈을 가르고 항상 결단력 있는 속도로 정의의 길을 선택하는 진실성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant un but juste avec une action rapide. Votre clarté morale et votre pensée agile se combinent pour créer une intégrité qui tranche la confusion comme une lame tranchante, choisissant toujours le chemin de la justice avec une vitesse décisive.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando uno scopo giusto con un\'azione rapida. La tua chiarezza morale e il tuo pensiero agile si combinano per creare un\'integrità che squarcia la confusione come una lama affilata, scegliendo sempre il sentiero della giustizia con velocità decisiva.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet mit schnellem Handeln einen rechtschaffenen Zweck. Ihre moralische Klarheit und Ihr agiles Denken vereinen sich zu einer Integrität, die Verwirrung wie eine scharfe Klinge durchschneidet und immer den Weg der Gerechtigkeit mit entscheidender Geschwindigkeit wählt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando um propósito justo com ação rápida. Sua clareza moral e seu pensamento ágil se combinam para criar uma integridade que corta a confusão como uma lâmina afiada, sempre escolhendo o caminho da justiça com velocidade decisiva.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando un propósito justo con una acción rápida. Tu claridad moral y tu pensamiento ágil se combinan para crear una integridad que atraviesa la confusión como una cuchilla afilada, eligiendo siempre el camino de la justicia con una velocidad decisiva.',
    ja: 'あなたの金の性質は、この名前と調和し、迅速な行動で義の目的を築きます。あなたの道徳的な明快さと機敏な思考が組み合わさって、鋭い刃のように混乱を切り裂く誠実さを生み出し、常に決定的な速さで正義の道を選びます。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมสร้างจุดประสงค์อันชอบธรรมด้วยการกระทำที่รวดเร็ว ความชัดเจนทางศีลธรรมและการคิดที่ว่องไวของคุณรวมกันเพื่อสร้างความซื่อสัตย์ที่ตัดผ่านความสับสนเหมือนใบมีดที่คมกริบ เลือกเส้นทางแห่งความยุติธรรมด้วยความเร็วที่เด็ดขาดเสมอ',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa tujuan yang benar dengan tindakan cepat. Kejelasan moral dan pemikiran gesit Anda berpadu untuk menciptakan integritas yang menembus kebingungan seperti pisau tajam, selalu memilih jalan keadilan dengan kecepatan yang menentukan.'
  }
},
// 118. 정석 (Jeong-seok)
{
  id: '정석_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, establishing a righteous foundation as solid as stone. Your moral strength and unshakeable principles combine to create a character that stands like a mountain peak, providing reliable guidance through unwavering virtue.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 돌처럼 단단한 정의로운 기반을 세웁니다. 당신의 도덕적 힘과 흔들리지 않는 원칙이 결합하여, 산봉우리처럼 우뚝 서서 흔들림 없는 덕으로 신뢰할 수 있는 지침을 제공하는 품성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, établissant une fondation juste aussi solide que la pierre. Votre force morale et vos principes inébranlables se combinent pour créer un caractère qui se dresse comme un sommet de montagne, offrant des conseils fiables grâce à une vertu inébranlable.',
    it: 'La tua natura di Metallo si armonizza con questo nome, stabilendo una base giusta solida come la pietra. La tua forza morale e i tuoi principi incrollabili si combinano per creare un carattere che si erge come la cima di una montagna, fornendo una guida affidabile attraverso una virtù incrollabile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schafft ein rechtschaffenes Fundament, das so fest wie Stein ist. Ihre moralische Stärke und Ihre unerschütterlichen Prinzipien vereinen sich zu einem Charakter, der wie ein Berggipfel steht und durch unerschütterliche Tugend zuverlässige Führung bietet.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, estabelecendo uma base justa tão sólida quanto a pedra. Sua força moral e seus princípios inabaláveis se combinam para criar um caráter que se ergue como um pico de montanha, fornecendo orientação confiável através de uma virtude inabalável.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, estableciendo una base justa tan sólida como la piedra. Tu fuerza moral y tus principios inquebrantables se combinan para crear un carácter que se yergue como la cima de una montaña, proporcionando una guía confiable a través de una virtud inquebrantable.',
    ja: 'あなたの金の性質は、この名前と調和し、石のように固い義の基盤を確立します。あなたの道徳的な強さと揺るぎない原則が組み合わさって、山の頂のように立つ性格を生み出し、揺るぎない美徳を通して信頼できる導きを提供します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ สร้างรากฐานอันชอบธรรมที่แข็งแกร่งดุจหิน ความแข็งแกร่งทางศีลธรรมและหลักการที่ไม่สั่นคลอนของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ยืนหยัดเหมือนยอดเขา ให้คำแนะนำที่เชื่อถือได้ผ่านคุณธรรมที่ไม่สั่นคลอน',
    id: 'Sifat Logam Anda selaras dengan nama ini, membangun fondasi yang benar sekokoh batu. Kekuatan moral dan prinsip-prinsip Anda yang tak tergoyahkan berpadu untuk menciptakan karakter yang berdiri seperti puncak gunung, memberikan bimbingan yang andal melalui kebajikan yang tak tergoyahkan.'
  }
},
// 119. 정수 (Jeong-soo)
{
  id: '정수_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, distilling righteous excellence from pure intentions. Your moral clarity and outstanding achievement combine to create a wisdom that flows like sacred waters, purifying everything it touches with justice and grace.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 순수한 의도에서 의로운 탁월함을 증류해냅니다. 당신의 도덕적 명료함과 뛰어난 성취가 결합하여, 신성한 물처럼 흘러 닿는 모든 것을 정의와 은혜로 정화하는 지혜를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, distillant une excellence juste à partir d\'intentions pures. Votre clarté morale et vos réalisations exceptionnelles se combinent pour créer une sagesse qui coule comme des eaux sacrées, purifiant tout ce qu\'elle touche avec justice et grâce.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, distillando un\'eccellenza giusta da intenzioni pure. La tua chiarezza morale e i tuoi eccezionali risultati si combinano per creare una saggezza che scorre come acque sacre, purificando tutto ciò che tocca con giustizia e grazia.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und destilliert rechtschaffene Exzellenz aus reinen Absichten. Ihre moralische Klarheit und Ihre herausragende Leistung vereinen sich zu einer Weisheit, die wie heiliges Wasser fließt und alles, was sie berührt, mit Gerechtigkeit und Anmut reinigt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, destilando a excelência justa de intenções puras. Sua clareza moral e sua realização excepcional se combinam para criar uma sabedoria que flui como águas sagradas, purificando tudo o que toca com justiça e graça.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, destilando una excelencia justa a partir de intenciones puras. Tu claridad moral y tus logros sobresalientes se combinan para crear una sabiduría que fluye como aguas sagradas, purificando todo lo que toca con justicia y gracia.',
    ja: 'あなたの水の性質は、この名前と調和し、純粋な意図から義の卓越性を蒸留します。あなたの道徳的な明快さと卓越した業績が組み合わさって、聖なる水のように流れる知恵を生み出し、それが触れるすべてのものを正義と恵みで浄化します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ กลั่นความเป็นเลิศอันชอบธรรมจากเจตนาที่บริสุทธิ์ ความชัดเจนทางศีลธรรมและความสำเร็จที่โดดเด่นของคุณรวมกันเพื่อสร้างปัญญาที่ไหลเหมือนน้ำศักดิ์สิทธิ์ ชำระล้างทุกสิ่งที่สัมผัสด้วยความยุติธรรมและความสง่างาม',
    id: 'Sifat Air Anda selaras dengan nama ini, menyaring keunggulan yang benar dari niat murni. Kejelasan moral dan pencapaian luar biasa Anda berpadu untuk menciptakan kebijaksanaan yang mengalir seperti air suci, memurnikan semua yang disentuhnya dengan keadilan dan anugerah.'
  }
},
// 120. 정아 (Jeong-ah)
{
  id: '정아_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, refining a righteous character into beautiful virtue. Your moral strength and elegant grace combine to create a nobility that shines like polished silver, inspiring others through your dignified and principled example.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 품성을 아름다운 덕으로 정제합니다. 당신의 도덕적 힘과 우아한 기품이 결합하여, 잘 닦인 은처럼 빛나며 당신의 품위 있고 원칙적인 모범을 통해 다른 이들에게 영감을 주는 고귀함을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, affinant un caractère juste en une belle vertu. Votre force morale et votre grâce élégante se combinent pour créer une noblesse qui brille comme de l\'argent poli, inspirant les autres par votre exemple digne et fondé sur des principes.',
    it: 'La tua natura di Metallo si armonizza con questo nome, affinando un carattere giusto in una bella virtù. La tua forza morale e la tua grazia elegante si combinano per creare una nobiltà che brilla come argento lucidato, ispirando gli altri attraverso il tuo esempio dignitoso e di principi.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und verfeinert einen rechtschaffenen Charakter zu schöner Tugend. Ihre moralische Stärke und Ihre elegante Anmut vereinen sich zu einem Adel, der wie poliertes Silber glänzt und andere durch Ihr würdevolles und prinzipientreues Beispiel inspiriert.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, refinando um caráter justo em uma bela virtude. Sua força moral e sua graça elegante se combinam para criar uma nobreza que brilha como prata polida, inspirando outros através de seu exemplo digno e de princípios.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, refinando un carácter justo en una hermosa virtud. Tu fuerza moral y tu elegante gracia se combinan para crear una nobleza que brilla como la plata pulida, inspirando a otros a través de tu ejemplo digno y de principios.',
    ja: 'あなたの金の性質は、この名前と調和し、義の性格を美しい美徳に磨き上げます。あなたの道徳的な強さとエレガントな恵みが組み合わさって、磨かれた銀のように輝く高貴さを生み出し、あなたの威厳のある原則的な模範を通して他の人を鼓舞します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาลักษณะนิสัยที่ชอบธรรมให้เป็นคุณธรรมที่สวยงาม ความแข็งแกร่งทางศีลธรรมและความสง่างามของคุณรวมกันเพื่อสร้างความสูงส่งที่ส่องประกายเหมือนเงินขัดเงา สร้างแรงบันดาลใจให้ผู้อื่นผ่านแบบอย่างที่สง่างามและมีหลักการของคุณ',
    id: 'Sifat Logam Anda selaras dengan nama ini, menyempurnakan karakter yang benar menjadi kebajikan yang indah. Kekuatan moral dan keanggunan Anda berpadu untuk menciptakan kemuliaan yang bersinar seperti perak poles, menginspirasi orang lain melalui teladan Anda yang bermartabat dan berprinsip.'
  }
},
// 121. 정은 (Jeong-eun)
{
  id: '정은_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, tempering a righteous heart with genuine kindness. Your moral conviction and compassionate grace combine to create a character that gleams like a precious metal, demonstrating that true strength lies in merciful justice.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 마음을 진정한 친절로 단련합니다. 당신의 도덕적 신념과 자비로운 은혜가 결합하여, 귀금속처럼 빛나는 품성을 창조하며, 진정한 힘은 자비로운 정의에 있음을 보여줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant un cœur juste avec une véritable bonté. Votre conviction morale et votre grâce compatissante se combinent pour créer un caractère qui brille comme un métal précieux, démontrant que la vraie force réside dans une justice miséricordieuse.',
    it: 'La tua natura di Metallo si armonizza con questo nome, temprando un cuore giusto con una gentilezza genuina. La tua convinzione morale e la tua grazia compassionevole si combinano per creare un carattere che brilla come un metallo prezioso, dimostrando che la vera forza risiede nella giustizia misericordiosa.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert ein rechtschaffenes Herz mit echter Freundlichkeit. Ihre moralische Überzeugung und Ihre mitfühlende Gnade vereinen sich zu einem Charakter, der wie ein Edelmetall glänzt und zeigt, dass wahre Stärke in barmherziger Gerechtigkeit liegt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, temperando um coração justo com bondade genuína. Sua convicção moral e sua graça compassiva se combinam para criar um caráter que brilha como um metal precioso, demonstrando que a verdadeira força reside na justiça misericordiosa.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, templando un corazón justo con una bondad genuina. Tu convicción moral y tu gracia compasiva se combinan para crear un carácter que brilla como un metal precioso, demostrando que la verdadera fuerza reside en una justicia misericordiosa.',
    ja: 'あなたの金の性質は、この名前と調和し、義の心を本物の優しさで和らげます。あなたの道徳的な信念と思いやりのある恵みが組み合わさって、貴金属のように輝く性格を生み出し、真の強さは慈悲深い正義にあることを示します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หล่อหลอมหัวใจที่ชอบธรรมด้วยความเมตตาอย่างแท้จริง ความเชื่อมั่นทางศีลธรรมและความสง่างามที่เปี่ยมด้วยความเมตตาของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่เปล่งประกายเหมือนโลหะมีค่า แสดงให้เห็นว่าความแข็งแกร่งที่แท้จริงอยู่ที่ความยุติธรรมที่เมตตา',
    id: 'Sifat Logam Anda selaras dengan nama ini, melembutkan hati yang benar dengan kebaikan yang tulus. Keyakinan moral dan anugerah welas asih Anda berpadu untuk menciptakan karakter yang berkilau seperti logam mulia, menunjukkan bahwa kekuatan sejati terletak pada keadilan yang berbelas kasih.'
  }
},
// 122. 정현 (Jeong-hyun)
{
  id: '정현_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging righteous wisdom into virtuous strength. Your moral clarity and noble character combine to create a leadership that cuts through ambiguity like a perfectly balanced sword, always choosing the path of virtue.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 지혜를 고결한 힘으로 벼려냅니다. 당신의 도덕적 명료함과 고귀한 품성이 결합하여, 완벽하게 균형 잡힌 검처럼 모호함을 베어내고 항상 덕의 길을 선택하는 리더십을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une sagesse juste en une force vertueuse. Votre clarté morale et votre caractère noble se combinent pour créer un leadership qui tranche l\'ambiguïté comme une épée parfaitement équilibrée, choisissant toujours le chemin de la vertu.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando una saggia rettitudine in una forza virtuosa. La tua chiarezza morale e il tuo nobile carattere si combinano per creare una leadership che taglia l\'ambiguità come una spada perfettamente bilanciata, scegliendo sempre il sentiero della virtù.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet rechtschaffene Weisheit zu tugendhafter Stärke. Ihre moralische Klarheit und Ihr edler Charakter vereinen sich zu einer Führung, die Mehrdeutigkeit wie ein perfekt ausbalanciertes Schwert durchdringt und immer den Weg der Tugend wählt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando a sabedoria justa em força virtuosa. Sua clareza moral e seu caráter nobre se combinam para criar uma liderança que corta a ambiguidade como uma espada perfeitamente equilibrada, sempre escolhendo o caminho da virtude.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una sabiduría justa en una fuerza virtuosa. Tu claridad moral y tu carácter noble se combinan para crear un liderazgo que atraviesa la ambigüedad como una espada perfectamente equilibrada, eligiendo siempre el camino de la virtud.',
    ja: 'あなたの金の性質は、この名前と調和し、義の知恵を高潔な強さに鍛え上げます。あなたの道徳的な明快さと高貴な人格が組み合わさって、完全にバランスの取れた剣のように曖昧さを切り裂き、常に美徳の道を選ぶリーダーシップを生み出します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมปัญญาที่ชอบธรรมให้เป็นความแข็งแกร่งที่มีคุณธรรม ความชัดเจนทางศีลธรรมและลักษณะนิสัยอันสูงส่งของคุณรวมกันเพื่อสร้างความเป็นผู้นำที่ตัดผ่านความคลุมเครือเหมือนดาบที่สมดุลอย่างสมบูรณ์แบบ เลือกเส้นทางแห่งคุณธรรมเสมอ',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa kebijaksanaan yang benar menjadi kekuatan yang berbudi luhur. Kejelasan moral dan karakter mulia Anda berpadu untuk menciptakan kepemimpinan yang menembus ambiguitas seperti pedang yang seimbang sempurna, selalu memilih jalan kebajikan.'
  }
},
// 123. 정호 (Jeong-ho)
{
  id: '정호_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, establishing righteous greatness through unwavering integrity. Your moral strength and magnificent purpose combine to create a leadership that stands like a beacon tower, guiding others toward justice with brilliant clarity.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 흔들림 없는 진실성을 통해 의로운 위대함을 세웁니다. 당신의 도덕적 힘과 장엄한 목적이 결합하여, 등대처럼 우뚝 서서 눈부신 명료함으로 다른 사람들을 정의로 이끄는 리더십을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, établissant une juste grandeur par une intégrité inébranlable. Votre force morale et votre magnifique objectif se combinent pour créer un leadership qui se dresse comme une tour de phare, guidant les autres vers la justice avec une clarté brillante.',
    it: 'La tua natura di Metallo si armonizza con questo nome, stabilendo una giusta grandezza attraverso un\'integrità incrollabile. La tua forza morale e il tuo magnifico scopo si combinano per creare una leadership che si erge come una torre faro, guidando gli altri verso la giustizia con brillante chiarezza.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und begründet rechtschaffene Größe durch unerschütterliche Integrität. Ihre moralische Stärke und Ihr großartiges Ziel vereinen sich zu einer Führung, die wie ein Leuchtturm dasteht und andere mit brillanter Klarheit zur Gerechtigkeit führt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, estabelecendo a grandeza justa através de uma integridade inabalável. Sua força moral e seu magnífico propósito se combinam para criar uma liderança que se ergue como uma torre de farol, guiando os outros em direção à justiça com clareza brilhante.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, estableciendo una grandeza justa a través de una integridad inquebrantable. Tu fuerza moral y tu magnífico propósito se combinan para crear un liderazgo que se yergue como una torre de faro, guiando a otros hacia la justicia con una claridad brillante.',
    ja: 'あなたの金の性質は、この名前と調和し、揺るぎない誠実さを通して義の偉大さを確立します。あなたの道徳的な強さと壮大な目的が組み合わさって、ビーコンタワーのように立つリーダーシップを生み出し、輝かしい明快さで他の人を正義へと導きます。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ สร้างความยิ่งใหญ่อันชอบธรรมผ่านความซื่อสัตย์ที่ไม่สั่นคลอน ความแข็งแกร่งทางศีลธรรมและจุดประสงค์อันงดงามของคุณรวมกันเพื่อสร้างความเป็นผู้นำที่ยืนหยัดเหมือนหอประภาคาร นำทางผู้อื่นไปสู่ความยุติธรรมด้วยความชัดเจนที่ยอดเยี่ยม',
    id: 'Sifat Logam Anda selaras dengan nama ini, membangun kebesaran yang benar melalui integritas yang tak tergoyahkan. Kekuatan moral dan tujuan agung Anda berpadu untuk menciptakan kepemimpinan yang berdiri seperti menara suar, membimbing orang lain menuju keadilan dengan kejelasan yang cemerlang.'
  }
},
// 124. 준수 (Jun-soo)
{
  id: '준수_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling talented excellence through a graceful, flowing energy. Your gifted ability and outstanding achievement combine to create a mastery that moves like pristine waters, achieving remarkable results through natural intelligence.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 우아하고 흐르는 에너지를 통해 재능 있는 탁월함을 이끌어냅니다. 당신의 타고난 능력과 뛰어난 성취가 결합하여, 맑고 깨끗한 물처럼 움직여 타고난 지성으로 놀라운 결과를 성취하는 경지를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une excellence talentueuse grâce à une énergie gracieuse et fluide. Votre capacité douée et vos réalisations exceptionnelles se combinent pour créer une maîtrise qui se déplace comme des eaux pures, obtenant des résultats remarquables grâce à l\'intelligence naturelle.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando un\'eccellenza talentuosa attraverso un\'energia aggraziata e fluida. La tua abilità dotata e i tuoi eccezionali risultati si combinano per creare una maestria che si muove come acque incontaminate, ottenendo risultati notevoli attraverso l\'intelligenza naturale.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert talentierte Exzellenz durch eine anmutige, fließende Energie. Ihre begabte Fähigkeit und Ihre herausragende Leistung vereinen sich zu einer Meisterschaft, die sich wie unberührtes Wasser bewegt und durch natürliche Intelligenz bemerkenswerte Ergebnisse erzielt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando a excelência talentosa através de uma energia graciosa e fluida. Sua habilidade talentosa e sua realização excepcional se combinam para criar uma maestria que se move como águas cristalinas, alcançando resultados notáveis através da inteligência natural.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una excelencia talentosa a través de una energía elegante y fluida. Tu habilidad superdotada y tus logros sobresalientes se combinan para crear una maestría que se mueve como aguas cristalinas, logrando resultados notables a través de la inteligencia natural.',
    ja: 'あなたの水の性質は、この名前と調和し、優雅で流れるようなエネルギーを通して才能ある卓越性を導きます。あなたの才能ある能力と卓越した業績が組み合わさって、自然の知性を通して驚くべき結果を達成する、手付かずの水のように動く熟練を生み出します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความเป็นเลิศที่มีพรสวรรค์ผ่านพลังงานที่สง่างามและลื่นไหล ความสามารถที่มีพรสวรรค์และความสำเร็จที่โดดเด่นของคุณรวมกันเพื่อสร้างความเชี่ยวชาญที่เคลื่อนไหวเหมือนน้ำบริสุทธิ์ บรรลุผลลัพธ์ที่น่าทึ่งผ่านสติปัญญาโดยธรรมชาติ',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan keunggulan berbakat melalui energi yang anggun dan mengalir. Kemampuan berbakat dan pencapaian luar biasa Anda berpadu untuk menciptakan penguasaan yang bergerak seperti air murni, mencapai hasil yang luar biasa melalui kecerdasan alami.'
  }
},
// 125. 준철 (Jun-chul)
{
  id: '준철_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging talented strength into iron-clad determination. Your gifted spirit and unbreakable resolve combine to create a character that stands like a steel column, supporting others while pursuing excellence with unwavering focus.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 재능 있는 힘을 철갑 같은 결단력으로 벼려냅니다. 당신의 타고난 정신과 깨지지 않는 결의가 결합하여, 강철 기둥처럼 굳건히 서서 흔들림 없는 집중력으로 탁월함을 추구하며 다른 사람들을 지지하는 품성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une force talentueuse en une détermination à toute épreuve. Votre esprit doué et votre résolution inébranlable se combinent pour créer un caractère qui se dresse comme une colonne d\'acier, soutenant les autres tout en poursuivant l\'excellence avec une concentration inébranlable.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando una forza talentuosa in una determinazione ferrea. Il tuo spirito dotato e la tua incrollabile determinazione si combinano per creare un carattere che si erge come una colonna d\'acciaio, sostenendo gli altri mentre persegue l\'eccellenza con una concentrazione incrollabile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet talentierte Stärke zu eiserner Entschlossenheit. Ihr begabter Geist und Ihre unzerbrechliche Entschlossenheit vereinen sich zu einem Charakter, der wie eine Stahlsäule dasteht und andere unterstützt, während er mit unerschütterlichem Fokus nach Exzellenz strebt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando a força talentosa em uma determinação de ferro. Seu espírito talentoso e sua resolução inabalável se combinam para criar um caráter que se ergue como uma coluna de aço, apoiando os outros enquanto busca a excelência com foco inabalável.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una fuerza talentosa en una determinación férrea. Tu espíritu dotado y tu resolución inquebrantable se combinan para crear un carácter que se yergue como una columna de acero, apoyando a otros mientras persigues la excelencia con un enfoque inquebrantable.',
    ja: 'あなたの金の性質は、この名前と調和し、才能ある強さを鉄壁の決意に鍛え上げます。あなたの才能ある精神と壊れない決意が組み合わさって、揺るぎない集中力で卓越性を追求しながら他の人を支える、鋼の柱のように立つ性格を生み出します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมสร้างความแข็งแกร่งที่มีพรสวรรค์ให้เป็นความมุ่งมั่นที่แข็งแกร่งดุจเหล็ก จิตวิญญาณที่มีพรสวรรค์และความมุ่งมั่นที่ไม่แตกสลายของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ยืนหยัดเหมือนเสาเหล็ก สนับสนุนผู้อื่นในขณะที่มุ่งสู่ความเป็นเลิศด้วยการมุ่งเน้นที่ไม่สั่นคลอน',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa kekuatan berbakat menjadi tekad sekuat baja. Semangat berbakat dan tekad tak terpatahkan Anda berpadu untuk menciptakan karakter yang berdiri seperti tiang baja, mendukung orang lain sambil mengejar keunggulan dengan fokus yang tak tergoyahkan.'
  }
},
// 126. 준혁 (Jun-hyuk)
{
  id: '준혁_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, flowing with talented innovation and adaptive change. Your gifted creativity and revolutionary thinking combine to create breakthroughs that surge like powerful currents, transforming challenges into opportunities for growth.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 재능 있는 혁신과 적격 있는 변화로 흘러갑니다. 당신의 타고난 창의성과 혁명적인 사고가 결합하여, 강력한 물결처럼 밀려와 도전을 성장의 기회로 바꾸는 돌파구를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une innovation talentueuse et un changement adaptatif. Votre créativité douée et votre pensée révolutionnaire se combinent pour créer des percées qui déferlent comme de puissants courants, transformant les défis en opportunités de croissance.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, scorrendo con innovazione talentuosa e cambiamento adattivo. La tua creatività dotata e il tuo pensiero rivoluzionario si combinano per creare scoperte che si infrangono come correnti potenti, trasformando le sfide in opportunità di crescita.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit talentierter Innovation und adaptivem Wandel. Ihre begabte Kreativität und Ihr revolutionäres Denken vereinen sich zu Durchbrüchen, die wie starke Strömungen ansteigen und Herausforderungen in Wachstumschancen verwandeln.',
    pt: 'Sua natureza de Água se harmoniza com este nome, fluindo com inovação talentosa e mudança adaptativa. Sua criatividade talentosa e seu pensamento revolucionário se combinam para criar avanços que surgem como correntes poderosas, transformando desafios em oportunidades de crescimento.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una innovación talentosa y un cambio adaptativo. Tu creatividad superdotada y tu pensamiento revolucionario se combinan para crear avances que surgen como corrientes poderosas, transformando los desafíos en oportunidades de crecimiento.',
    ja: 'あなたの水の性質は、この名前と調和し、才能ある革新と適応性のある変化とともに流れます。あなたの才能ある創造性と革新的な思考が組み合わさって、強力な流れのように押し寄せるブレークスルーを生み出し、挑戦を成長の機会に変えます。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ไหลลื่นด้วยนวัตกรรมที่มีพรสวรรค์และการเปลี่ยนแปลงที่ปรับเปลี่ยนได้ ความคิดสร้างสรรค์ที่มีพรสวรรค์และการคิดแบบปฏิวัติของคุณรวมกันเพื่อสร้างความก้าวหน้าที่เพิ่มขึ้นเหมือนกระแสน้ำที่ทรงพลัง เปลี่ยนความท้าทายให้เป็นโอกาสในการเติบโต',
    id: 'Sifat Air Anda selaras dengan nama ini, mengalir dengan inovasi berbakat dan perubahan adaptif. Kreativitas berbakat dan pemikiran revolusioner Anda berpadu untuk menciptakan terobosan yang melonjak seperti arus deras, mengubah tantangan menjadi peluang untuk berkembang.'
  }
},
// 127. 준호 (Jun-ho)
{
  id: '준호_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling talented greatness through a magnificent, powerful flow. Your gifted ability and extraordinary purpose combine to create achievements that move like a majestic river, inspiring others through your noble pursuit of excellence.',
    ko: '당신은 물의 속성과 완벽하게 조화를 이루며, 웅장하고 강력한 흐름을 통해 재능 있는 위대함을 전달합니다. 당신의 타고난 능력과 비범한 목적이 결합하여, 장엄한 강처럼 움직이는 성취를 창조하며, 탁월함을 향한 당신의 고귀한 추구를 통해 다른 사람들에게 영감을 줍니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une grandeur talentueuse à travers un flux magnifique et puissant. Votre capacité douée et votre objectif extraordinaire se combinent pour créer des réalisations qui se déplacent comme une rivière majestueuse, inspirant les autres par votre noble quête de l\'excellence.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando una grandezza talentuosa attraverso un flusso magnifico e potente. La tua abilità dotata e il tuo scopo straordinario si combinano per creare risultati che si muovono come un fiume maestoso, ispirando gli altri attraverso la tua nobile ricerca dell\'eccellenza.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert talentierte Größe durch einen großartigen, kraftvollen Fluss. Ihre begabte Fähigkeit und Ihr außergewöhnliches Ziel vereinen sich zu Errungenschaften, die sich wie ein majestätischer Fluss bewegen und andere durch Ihr edles Streben nach Exzellenz inspirieren.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando a grandeza talentosa através de um fluxo magnífico e poderoso. Sua habilidade talentosa e seu propósito extraordinário se combinam para criar realizações que se movem como um rio majestoso, inspirando outros através de sua nobre busca pela excelência.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una grandeza talentosa a través de un flujo magnífico y poderoso. Tu habilidad superdotada y tu propósito extraordinario se combinan para crear logros que se mueven como un río majestuoso, inspirando a otros a través de tu noble búsqueda de la excelencia.',
    ja: 'あなたの水の性質は、この名前と調和し、壮大で力強い流れを通して才能ある偉大さを導きます。あなたの才能ある能力と並外れた目的が組み合わさって、雄大な川のように動く成果を生み出し、卓越性の高貴な追求を通して他の人を鼓舞します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความยิ่งใหญ่ที่มีพรสวรรค์ผ่านกระแสที่งดงามและทรงพลัง ความสามารถที่มีพรสวรรค์และจุดประสงค์ที่ไม่ธรรมดาของคุณรวมกันเพื่อสร้างความสำเร็จที่เคลื่อนไหวเหมือนแม่น้ำที่สง่างาม สร้างแรงบันดาลใจให้ผู้อื่นผ่านการแสวงหาความเป็นเลิศอันสูงส่งของคุณ',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan kebesaran berbakat melalui aliran yang megah dan kuat. Kemampuan berbakat dan tujuan luar biasa Anda berpadu untuk menciptakan pencapaian yang bergerak seperti sungai agung, menginspirasi orang lain melalui pengejaran mulia Anda akan keunggulan.'
  }
},
// 128. 정석 (Jeong-seok)
{
  id: '정석_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, establishing a righteous foundation as solid as stone. Your moral strength and unshakeable principles combine to create a character that stands like a mountain peak, providing reliable guidance through unwavering virtue.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 돌처럼 단단한 정의로운 기반을 세웁니다. 당신의 도덕적 힘과 흔들리지 않는 원칙이 결합하여, 산봉우리처럼 우뚝 서서 흔들림 없는 덕으로 신뢰할 수 있는 지침을 제공하는 품성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, établissant une fondation juste aussi solide que la pierre. Votre force morale et vos principes inébranlables se combinent pour créer un caractère qui se dresse comme un sommet de montagne, offrant des conseils fiables grâce à une vertu inébranlable.',
    it: 'La tua natura di Metallo si armonizza con questo nome, stabilendo una base giusta solida come la pietra. La tua forza morale e i tuoi principi incrollabili si combinano per creare un carattere che si erge come la cima di una montagna, fornendo una guida affidabile attraverso una virtù incrollabile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schafft ein rechtschaffenes Fundament, das so fest wie Stein ist. Ihre moralische Stärke und Ihre unerschütterlichen Prinzipien vereinen sich zu einem Charakter, der wie ein Berggipfel steht und durch unerschütterliche Tugend zuverlässige Führung bietet.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, estabelecendo uma base justa tão sólida quanto a pedra. Sua força moral e seus princípios inabaláveis se combinam para criar um caráter que se ergue como um pico de montanha, fornecendo orientação confiável através de uma virtude inabalável.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, estableciendo una base justa tan sólida como la piedra. Tu fuerza moral y tus principios inquebrantables se combinan para crear un carácter que se yergue como la cima de una montaña, proporcionando una guía confiable a través de una virtud inquebrantable.',
    ja: 'あなたの金の性質は、この名前と調和し、石のように固い義の基盤を確立します。あなたの道徳的な強さと揺るぎない原則が組み合わさって、山の頂のように立つ性格を生み出し、揺るぎない美徳を通して信頼できる導きを提供します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ สร้างรากฐานที่ชอบธรรมแข็งแกร่งดั่งหิน พลังทางศีลธรรมและหลักการที่ไม่สั่นคลอนของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ตั้งตระหง่านเหมือนยอดเขา ให้คำแนะนำที่น่าเชื่อถือผ่านคุณธรรมที่ไม่เปลี่ยนแปลง',
    id: 'Sifat Logam Anda selaras dengan nama ini, membangun fondasi kebenaran yang kokoh seperti batu. Kekuatan moral dan prinsip-prinsip Anda yang tak tergoyahkan bergabung untuk menciptakan karakter yang berdiri seperti puncak gunung, memberikan panduan yang dapat diandalkan melalui kebajikan yang tak tergoyahkan.'
  }
},
// 129. 정수 (Jeong-soo)
{
  id: '정수_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, distilling righteous excellence from pure intentions. Your moral clarity and outstanding achievement combine to create a wisdom that flows like sacred waters, purifying everything it touches with justice and grace.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 순수한 의도에서 의로운 탁월함을 증류해냅니다. 당신의 도덕적 명료함과 뛰어난 성취가 결합하여, 신성한 물처럼 흘러 닿는 모든 것을 정의와 은혜로 정화하는 지혜를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, distillant une excellence juste à partir d\'intentions pures. Votre clarté morale et vos réalisations exceptionnelles se combinent pour créer une sagesse qui coule comme des eaux sacrées, purifiant tout ce qu\'elle touche avec justice et grâce.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, distillando un\'eccellenza giusta da intenzioni pure. La tua chiarezza morale e i tuoi eccezionali risultati si combinano per creare una saggezza che scorre come acque sacre, purificando tutto ciò che tocca con giustizia e grazia.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und destilliert rechtschaffene Exzellenz aus reinen Absichten. Ihre moralische Klarheit und Ihre herausragende Leistung vereinen sich zu einer Weisheit, die wie heiliges Wasser fließt und alles, was sie berührt, mit Gerechtigkeit und Anmut reinigt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, destilando excelência justa de intenções puras. Sua clareza moral e suas realizações notáveis se combinam para criar uma sabedoria que flui como águas sagradas, purificando tudo o que toca com justiça e graça.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, destilando una excelencia justa a partir de intenciones puras. Tu claridad moral y tus logros sobresalientes se combinan para crear una sabiduría que fluye como aguas sagradas, purificando todo lo que toca con justicia y gracia.',
    ja: 'あなたの水の性質は、この名前と調和し、純粋な意図から義の卓越性を蒸留します。あなたの道徳的な明快さと卓越した業績が組み合わさって、聖なる水のように流れる知恵を生み出し、それが触れるすべてのものを正義と恵みで浄化します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ กลั่นความเป็นเลิศที่ชอบธรรมจากเจตนาที่บริสุทธิ์ ความชัดเจนทางศีลธรรมและความสำเร็จที่โดดเด่นของคุณรวมกันเพื่อสร้างปัญญาที่ไหลเหมือนน้ำศักดิ์สิทธิ์ ชำระล้างทุกสิ่งที่สัมผัสด้วยความยุติธรรมและความสง่างาม',
    id: 'Sifat Air Anda selaras dengan nama ini, menyaring keunggulan yang benar dari niat murni. Kejelasan moral dan pencapaian luar biasa Anda bergabung untuk menciptakan kebijaksanaan yang mengalir seperti air suci, memurnikan semua yang disentuhnya dengan keadilan dan anugerah.'
  }
},
// 130. 정아 (Jeong-ah)
{
  id: '정아_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, refining a righteous character into beautiful virtue. Your moral strength and elegant grace combine to create a nobility that shines like polished silver, inspiring others through your dignified and principled example.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 품성을 아름다운 덕으로 정제합니다. 당신의 도덕적 힘과 우아한 기품이 결합하여, 잘 닦인 은처럼 빛나며 당신의 품위 있고 원칙적인 모범을 통해 다른 이들에게 영감을 주는 고귀함을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, affinant un caractère juste en une belle vertu. Votre force morale et votre grâce élégante se combinent pour créer une noblesse qui brille comme de l\'argent poli, inspirant les autres par votre exemple digne et fondé sur des principes.',
    it: 'La tua natura di Metallo si armonizza con questo nome, affinando un carattere giusto in una bella virtù. La tua forza morale e la tua grazia elegante si combinano per creare una nobiltà che brilla come argento lucidato, ispirando gli altri attraverso il tuo esempio dignitoso e di principio.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und verfeinert einen rechtschaffenen Charakter zu schöner Tugend. Ihre moralische Stärke und Ihre elegante Anmut vereinen sich zu einem Adel, der wie poliertes Silber glänzt und andere durch Ihr würdevolles und prinzipientreues Beispiel inspiriert.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, refinando um caráter justo em uma bela virtude. Sua força moral e sua graça elegante se combinam para criar uma nobreza que brilha como prata polida, inspirando outros através de seu exemplo digno e de princípios.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, refinando un carácter justo en una hermosa virtud. Tu fuerza moral y tu elegante gracia se combinan para crear una nobleza que brilla como la plata pulida, inspirando a otros a través de tu ejemplo digno y de principios.',
    ja: 'あなたの金の性質は、この名前と調和し、義の性格を美しい美徳に磨き上げます。あなたの道徳的な強さとエレガントな恵みが組み合わさって、磨かれた銀のように輝く高貴さを生み出し、あなたの威厳のある原則的な模範を通して他の人を鼓舞します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาลักษณะนิสัยที่ชอบธรรมให้เป็นคุณธรรมที่สวยงาม พลังทางศีลธรรมและความสง่างามของคุณรวมกันเพื่อสร้างความสูงส่งที่ส่องประกายเหมือนเงินขัดเงา สร้างแรงบันดาลใจให้ผู้อื่นผ่านแบบอย่างที่สง่างามและมีหลักการของคุณ',
    id: 'Sifat Logam Anda selaras dengan nama ini, memurnikan karakter yang benar menjadi kebajikan yang indah. Kekuatan moral dan keanggunan Anda yang elegan bergabung untuk menciptakan kemuliaan yang bersinar seperti perak yang dipoles, menginspirasi orang lain melalui teladan Anda yang bermartabat dan berprinsip.'
  }
},
// 131. 정은 (Jeong-eun)
{
  id: '정은_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, tempering a righteous heart with genuine kindness. Your moral conviction and compassionate grace combine to create a character that gleams like a precious metal, demonstrating that true strength lies in merciful justice.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 마음을 진정한 친절로 단련합니다. 당신의 도덕적 신념과 자비로운 은혜가 결합하여, 귀금속처럼 빛나는 품성을 창조하며, 진정한 힘은 자비로운 정의에 있음을 보여줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant un cœur juste avec une véritable bonté. Votre conviction morale et votre grâce compatissante se combinent pour créer un caractère qui brille comme un métal précieux, démontrant que la vraie force réside dans une justice miséricordieuse.',
    it: 'La tua natura di Metallo si armonizza con questo nome, temperando un cuore giusto con una gentilezza genuina. La tua convinzione morale e la tua grazia compassionevole si combinano per creare un carattere che brilla come un metallo prezioso, dimostrando che la vera forza risiede nella giustizia misericordiosa.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert ein rechtschaffenes Herz mit echter Freundlichkeit. Ihre moralische Überzeugung und Ihre mitfühlende Gnade vereinen sich zu einem Charakter, der wie ein Edelmetall glänzt und zeigt, dass wahre Stärke in barmherziger Gerechtigkeit liegt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, temperando um coração justo com bondade genuína. Sua convicção moral e sua graça compassiva se combinam para criar um caráter que brilha como um metal precioso, demonstrando que a verdadeira força reside na justiça misericordiosa.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, templando un corazón justo con una bondad genuina. Tu convicción moral y tu gracia compasiva se combinan para crear un carácter que brilla como un metal precioso, demostrando que la verdadera fuerza reside en una justicia misericordiosa.',
    ja: 'あなたの金の性質は、この名前と調和し、義の心を本物の優しさで和らげます。あなたの道徳的な信念と思いやりのある恵みが組み合わさって、貴金属のように輝く性格を生み出し、真の強さは慈悲深い正義にあることを示します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ทำให้หัวใจที่ชอบธรรมอ่อนลงด้วยความเมตตาอย่างแท้จริง ความเชื่อมั่นทางศีลธรรมและความสง่างามที่เปี่ยมด้วยความเห็นอกเห็นใจของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ส่องประกายเหมือนโลหะมีค่า แสดงให้เห็นว่าความแข็งแกร่งที่แท้จริงอยู่ในความยุติธรรมที่เมตตา',
    id: 'Sifat Logam Anda selaras dengan nama ini, melembutkan hati yang benar dengan kebaikan yang tulus. Keyakinan moral dan anugerah welas asih Anda bergabung untuk menciptakan karakter yang berkilau seperti logam mulia, menunjukkan bahwa kekuatan sejati terletak pada keadilan yang berbelas kasih.'
  }
},
// 132. 정현 (Jeong-hyun)
{
  id: '정현_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging righteous wisdom into virtuous strength. Your moral clarity and noble character combine to create a leadership that cuts through ambiguity like a perfectly balanced sword, always choosing the path of virtue.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 지혜를 고결한 힘으로 벼려냅니다. 당신의 도덕적 명료함과 고귀한 품성이 결합하여, 완벽하게 균형 잡힌 검처럼 모호함을 베어내고 항상 덕의 길을 선택하는 리더십을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une sagesse juste en une force vertueuse. Votre clarté morale et votre caractère noble se combinent pour créer un leadership qui tranche l\'ambiguïté comme une épée parfaitement équilibrée, choisissant toujours le chemin de la vertu.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando una saggia rettitudine in una forza virtuosa. La tua chiarezza morale e il tuo carattere nobile si combinano per creare una leadership che taglia l\'ambiguità come una spada perfettamente bilanciata, scegliendo sempre il sentiero della virtù.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet rechtschaffene Weisheit zu tugendhafter Stärke. Ihre moralische Klarheit und Ihr edler Charakter vereinen sich zu einer Führung, die Mehrdeutigkeit wie ein perfekt ausbalanciertes Schwert durchdringt und immer den Weg der Tugend wählt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando sabedoria justa em força virtuosa. Sua clareza moral e seu caráter nobre se combinam para criar uma liderança que corta a ambiguidade como uma espada perfeitamente equilibrada, sempre escolhendo o caminho da virtude.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una sabiduría justa en una fuerza virtuosa. Tu claridad moral y tu carácter noble se combinan para crear un liderazgo que atraviesa la ambigüedad como una espada perfectamente equilibrada, eligiendo siempre el camino de la virtud.',
    ja: 'あなたの金の性質は、この名前と調和し、義の知恵を高潔な強さに鍛え上げます。あなたの道徳的な明快さと高貴な人格が組み合わさって、完全にバランスの取れた剣のように曖昧さを切り裂き、常に美徳の道を選ぶリーダーシップを生み出します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หล่อหลอมปัญญาที่ชอบธรรมให้เป็นพลังแห่งคุณธรรม ความชัดเจนทางศีลธรรมและลักษณะนิสัยที่สูงส่งของคุณรวมกันเพื่อสร้างความเป็นผู้นำที่ขจัดความคลุมเครือเหมือนดาบที่สมดุลอย่างสมบูรณ์แบบ โดยเลือกเส้นทางแห่งคุณธรรมเสมอ',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa kebijaksanaan yang benar menjadi kekuatan yang berbudi luhur. Kejelasan moral dan karakter mulia Anda bergabung untuk menciptakan kepemimpinan yang memotong ambiguitas seperti pedang yang seimbang sempurna, selalu memilih jalan kebajikan.'
  }
},
// 133. 정호 (Jeong-ho)
{
  id: '정호_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, establishing righteous greatness through unwavering integrity. Your moral strength and magnificent purpose combine to create a leadership that stands like a beacon tower, guiding others toward justice with brilliant clarity.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 흔들림 없는 진실성을 통해 의로운 위대함을 세웁니다. 당신의 도덕적 힘과 장엄한 목적이 결합하여, 등대처럼 우뚝 서서 눈부신 명료함으로 다른 사람들을 정의로 이끄는 리더십을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, établissant une juste grandeur par une intégrité inébranlable. Votre force morale et votre magnifique objectif se combinent pour créer un leadership qui se dresse comme une tour de phare, guidant les autres vers la justice avec une clarté brillante.',
    it: 'La tua natura di Metallo si armonizza con questo nome, stabilendo una giusta grandezza attraverso un\'integrità incrollabile. La tua forza morale e il tuo magnifico scopo si combinano per creare una leadership che si erge come un faro, guidando gli altri verso la giustizia con brillante chiarezza.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und begründet rechtschaffene Größe durch unerschütterliche Integrität. Ihre moralische Stärke und Ihr großartiges Ziel vereinen sich zu einer Führung, die wie ein Leuchtturm dasteht und andere mit brillanter Klarheit zur Gerechtigkeit führt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, estabelecendo grandeza justa através de integridade inabalável. Sua força moral e seu propósito magnífico se combinam para criar uma liderança que se ergue como uma torre de farol, guiando outros em direção à justiça com clareza brilhante.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, estableciendo una grandeza justa a través de una integridad inquebrantable. Tu fuerza moral y tu magnífico propósito se combinan para crear un liderazgo que se yergue como una torre de faro, guiando a otros hacia la justicia con una claridad brillante.',
    ja: 'あなたの金の性質は、この名前と調和し、揺るぎない誠実さを通して義の偉大さを確立します。あなたの道徳的な強さと壮大な目的が組み合わさって、ビーコンタワーのように立つリーダーシップを生み出し、輝かしい明快さで他の人を正義へと導きます。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ สร้างความยิ่งใหญ่ที่ชอบธรรมผ่านความซื่อสัตย์ที่ไม่สั่นคลอน พลังทางศีลธรรมและจุดประสงค์อันงดงามของคุณรวมกันเพื่อสร้างความเป็นผู้นำที่ตั้งตระหง่านเหมือนหอประภาคาร นำทางผู้อื่นไปสู่ความยุติธรรมด้วยความชัดเจนที่ยอดเยี่ยม',
    id: 'Sifat Logam Anda selaras dengan nama ini, membangun kebesaran yang benar melalui integritas yang tak tergoyahkan. Kekuatan moral dan tujuan mulia Anda bergabung untuk menciptakan kepemimpinan yang berdiri seperti menara suar, membimbing orang lain menuju keadilan dengan kejelasan yang cemerlang.'
  }
},
// 134. 준수 (Jun-soo)
{
  id: '준수_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling talented excellence through a graceful, flowing energy. Your gifted ability and outstanding achievement combine to create a mastery that moves like pristine waters, achieving remarkable results through natural intelligence.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 우아하고 흐르는 에너지를 통해 재능 있는 탁월함을 이끌어냅니다. 당신의 타고난 능력과 뛰어난 성취가 결합하여, 맑고 깨끗한 물처럼 움직여 타고난 지성으로 놀라운 결과를 성취하는 경지를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une excellence talentueuse grâce à une énergie gracieuse et fluide. Votre capacité douée et vos réalisations exceptionnelles se combinent pour créer une maîtrise qui se déplace comme des eaux pures, obtenant des résultats remarquables grâce à l\'intelligence naturelle.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando un\'eccellenza talentuosa attraverso un\'energia aggraziata e fluida. La tua abilità dotata e i tuoi eccezionali risultati si combinano per creare una maestria che si muove come acque incontaminate, ottenendo risultati notevoli attraverso l\'intelligenza naturale.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert talentierte Exzellenz durch eine anmutige, fließende Energie. Ihre begabte Fähigkeit und Ihre herausragende Leistung vereinen sich zu einer Meisterschaft, die sich wie unberührtes Wasser bewegt und durch natürliche Intelligenz bemerkenswerte Ergebnisse erzielt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando excelência talentosa através de uma energia graciosa e fluida. Sua habilidade talentosa e suas realizações notáveis se combinam para criar uma maestria que se move como águas cristalinas, alcançando resultados notáveis através da inteligência natural.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una excelencia talentosa a través de una energía elegante y fluida. Tu habilidad superdotada y tus logros sobresalientes se combinan para crear una maestría que se mueve como aguas cristalinas, logrando resultados notables a través de la inteligencia natural.',
    ja: 'あなたの水の性質は、この名前と調和し、優雅で流れるようなエネルギーを通して才能ある卓越性を導きます。あなたの才能ある能力と卓越した業績が組み合わさって、自然の知性を通して驚くべき結果を達成する、手付かずの水のように動く熟練を生み出します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความเป็นเลิศที่มีพรสวรรค์ผ่านพลังงานที่สง่างามและลื่นไหล ความสามารถพิเศษและความสำเร็จที่โดดเด่นของคุณรวมกันเพื่อสร้างความเชี่ยวชาญที่เคลื่อนไหวเหมือนน้ำบริสุทธิ์ บรรลุผลลัพธ์ที่น่าทึ่งผ่านสติปัญญาโดยกำเนิด',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan keunggulan berbakat melalui energi yang anggun dan mengalir. Kemampuan berbakat dan pencapaian luar biasa Anda bergabung untuk menciptakan penguasaan yang bergerak seperti air murni, mencapai hasil yang luar biasa melalui kecerdasan alami.'
  }
},
// 135. 준철 (Jun-chul)
{
  id: '준철_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging talented strength into iron-clad determination. Your gifted spirit and unbreakable resolve combine to create a character that stands like a steel column, supporting others while pursuing excellence with unwavering focus.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 재능 있는 힘을 철갑 같은 결단력으로 벼려냅니다. 당신의 타고난 정신과 깨지지 않는 결의가 결합하여, 강철 기둥처럼 굳건히 서서 흔들림 없는 집중력으로 탁월함을 추구하며 다른 사람들을 지지하는 품성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une force talentueuse en une détermination à toute épreuve. Votre esprit doué et votre résolution inébranlable se combinent pour créer un caractère qui se dresse comme une colonne d\'acier, soutenant les autres tout en poursuivant l\'excellence avec une concentration inébranlable.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando una forza talentuosa in una determinazione ferrea. Il tuo spirito dotato e la tua risolutezza incrollabile si combinano per creare un carattere che si erge come una colonna d\'acciaio, sostenendo gli altri mentre persegue l\'eccellenza con una concentrazione incrollabile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet talentierte Stärke zu eiserner Entschlossenheit. Ihr begabter Geist und Ihre unzerbrechliche Entschlossenheit vereinen sich zu einem Charakter, der wie eine Stahlsäule dasteht und andere unterstützt, während er mit unerschütterlichem Fokus nach Exzellenz strebt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando força talentosa em determinação de ferro. Seu espírito talentoso e sua resolução inabalável se combinam para criar um caráter que se ergue como uma coluna de aço, apoiando os outros enquanto busca a excelência com foco inabalável.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una fuerza talentosa en una determinación férrea. Tu espíritu dotado y tu resolución inquebrantable se combinan para crear un carácter que se yergue como una columna de acero, apoyando a otros mientras persigues la excelencia con un enfoque inquebrantable.',
    ja: 'あなたの金の性質は、この名前と調和し、才能ある強さを鉄壁の決意に鍛え上げます。あなたの才能ある精神と壊れない決意が組み合わさって、揺るぎない集中力で卓越性を追求しながら他の人を支える、鋼の柱のように立つ性格を生み出します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมความแข็งแกร่งที่มีพรสวรรค์ให้เป็นความมุ่งมั่นที่แข็งแกร่งดุจเหล็กกล้า จิตวิญญาณที่มีพรสวรรค์และความมุ่งมั่นที่ไม่แตกหักของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ยืนหยัดเหมือนเสาเหล็ก สนับสนุนผู้อื่นในขณะที่มุ่งสู่ความเป็นเลิศด้วยความมุ่งมั่นที่ไม่เปลี่ยนแปลง',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa kekuatan berbakat menjadi tekad baja. Semangat berbakat dan tekad Anda yang tak terpatahkan bergabung untuk menciptakan karakter yang berdiri seperti pilar baja, mendukung orang lain sambil mengejar keunggulan dengan fokus yang tak tergoyahkan.'
  }
},
// 136. 준혁 (Jun-hyuk)
{
  id: '준혁_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, flowing with talented innovation and adaptive change. Your gifted creativity and revolutionary thinking combine to create breakthroughs that surge like powerful currents, transforming challenges into opportunities for growth.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 재능 있는 혁신과 적격 있는 변화로 흘러갑니다. 당신의 타고난 창의성과 혁명적인 사고가 결합하여, 강력한 물결처럼 밀려와 도전을 성장의 기회로 바꾸는 돌파구를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une innovation talentueuse et un changement adaptatif. Votre créativité douée et votre pensée révolutionnaire se combinent pour créer des percées qui déferlent comme de puissants courants, transformant les défis en opportunités de croissance.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, fluendo con innovazione talentuosa e cambiamento adattivo. La tua creatività dotata e il tuo pensiero rivoluzionario si combinano per creare scoperte che sorgono come correnti potenti, trasformando le sfide in opportunità di crescita.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit talentierter Innovation und adaptivem Wandel. Ihre begabte Kreativität und Ihr revolutionäres Denken vereinen sich zu Durchbrüchen, die wie starke Strömungen ansteigen und Herausforderungen in Wachstumschancen verwandeln.',
    pt: 'Sua natureza de Água se harmoniza com este nome, fluindo com inovação talentosa e mudança adaptativa. Sua criatividade talentosa e seu pensamento revolucionário se combinam para criar avanços que surgem como correntes poderosas, transformando desafios em oportunidades de crescimento.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una innovación talentosa y un cambio adaptativo. Tu creatividad superdotada y tu pensamiento revolucionario se combinan para crear avances que surgen como corrientes poderosas, transformando los desafíos en oportunidades de crecimiento.',
    ja: 'あなたの水の性質は、この名前と調和し、才能ある革新と適応性のある変化とともに流れます。あなたの才能ある創造性と革新的な思考が組み合わさって、強力な流れのように押し寄せるブレークスルーを生み出し、挑戦を成長の機会に変えます。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ไหลลื่นด้วยนวัตกรรมที่มีพรสวรรค์และการเปลี่ยนแปลงที่ปรับตัวได้ ความคิดสร้างสรรค์ที่มีพรสวรรค์และความคิดที่ปฏิวัติของคุณรวมกันเพื่อสร้างความก้าวหน้าที่เพิ่มขึ้นเหมือนกระแสน้ำที่ทรงพลัง เปลี่ยนความท้าทายให้เป็นโอกาสในการเติบโต',
    id: 'Sifat Air Anda selaras dengan nama ini, mengalir dengan inovasi berbakat dan perubahan adaptif. Kreativitas berbakat dan pemikiran revolusioner Anda bergabung untuk menciptakan terobosan yang melonjak seperti arus yang kuat, mengubah tantangan menjadi peluang untuk pertumbuhan.'
  }
},
// 137. 준호 (Jun-ho)
{
  id: '준호_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling talented greatness through a magnificent, powerful flow. Your gifted ability and extraordinary purpose combine to create achievements that move like a majestic river, inspiring others through your noble pursuit of excellence.',
    ko: '당신은 물의 속성과 완벽하게 조화를 이루며, 웅장하고 강력한 흐름을 통해 재능 있는 위대함을 전달합니다. 당신의 타고난 능력과 비범한 목적이 결합하여, 장엄한 강처럼 움직이는 성취를 창조하며, 탁월함을 향한 당신의 고귀한 추구를 통해 다른 사람들에게 영감을 줍니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une grandeur talentueuse à travers un flux magnifique et puissant. Votre capacité douée et votre objectif extraordinaire se combinent pour créer des réalisations qui se déplacent comme une rivière majestueuse, inspirant les autres par votre noble quête de l\'excellence.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando una grandezza talentuosa attraverso un flusso magnifico e potente. La tua abilità dotata e il tuo scopo straordinario si combinano per creare risultati che si muovono come un fiume maestoso, ispirando gli altri attraverso la tua nobile ricerca dell\'eccellenza.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert talentierte Größe durch einen großartigen, kraftvollen Fluss. Ihre begabte Fähigkeit und Ihr außergewöhnliches Ziel vereinen sich zu Errungenschaften, die sich wie ein majestätischer Fluss bewegen und andere durch Ihr edles Streben nach Exzellenz inspirieren.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando grandeza talentosa através de um fluxo magnífico e poderoso. Sua habilidade talentosa e seu propósito extraordinário se combinam para criar realizações que se movem como um rio majestoso, inspirando outros através de sua nobre busca pela excelência.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una grandeza talentosa a través de un flujo magnífico y poderoso. Tu habilidad superdotada y tu propósito extraordinario se combinan para crear logros que se mueven como un río majestuoso, inspirando a otros a través de tu noble búsqueda de la excelencia.',
    ja: 'あなたの水の性質は、この名前と調和し、壮大で力強い流れを通して才能ある偉大さを導きます。あなたの才能ある能力と並外れた目的が組み合わさって、雄大な川のように動く成果を生み出し、卓越性の高貴な追求を通して他の人を鼓舞します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความยิ่งใหญ่ที่มีพรสวรรค์ผ่านกระแสที่งดงามและทรงพลัง ความสามารถพิเศษและจุดประสงค์ที่ไม่ธรรมดาของคุณรวมกันเพื่อสร้างความสำเร็จที่เคลื่อนไหวเหมือนแม่น้ำที่สง่างาม สร้างแรงบันดาลใจให้ผู้อื่นผ่านการแสวงหาความเป็นเลิศอันสูงส่งของคุณ',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan kebesaran berbakat melalui aliran yang megah dan kuat. Kemampuan berbakat dan tujuan luar biasa Anda bergabung untuk menciptakan pencapaian yang bergerak seperti sungai agung, menginspirasi orang lain melalui pengejaran mulia Anda akan keunggulan.'
  }
},
// 138. 지영 (Ji-yeong)
{
  id: '지영_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling wise prosperity through a flowing, generous intelligence. Your thoughtful wisdom and flourishing success combine to create an abundance that spreads like nourishing waters, enriching communities through intelligent generosity.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 흐르는 듯한 너그러운 지성을 통해 지혜로운 번영을 이끌어냅니다. 당신의 사려 깊은 지혜와 무성한 성공이 결합하여, 영양분을 공급하는 물처럼 퍼져나가 지적인 관대함으로 공동체를 풍요롭게 하는 풍요를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une sage prospérité grâce à une intelligence fluide et généreuse. Votre sagesse réfléchie et votre succès florissant se combinent pour créer une abondance qui se propage comme des eaux nourricières, enrichissant les communautés par une générosité intelligente.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando una saggia prosperità attraverso un\'intelligenza fluida e generosa. La tua saggezza ponderata e il tuo successo fiorente si combinano per creare un\'abbondanza che si diffonde come acque nutrienti, arricchendo le comunità attraverso una generosità intelligente.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert weisen Wohlstand durch eine fließende, großzügige Intelligenz. Ihre nachdenkliche Weisheit und Ihr blühender Erfolg vereinen sich zu einem Überfluss, der sich wie nährendes Wasser ausbreitet und Gemeinschaften durch intelligente Großzügigkeit bereichert.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando prosperidade sábia através de uma inteligência fluida e generosa. Sua sabedoria ponderada e seu sucesso florescente se combinam para criar uma abundância que se espalha como águas nutritivas, enriquecendo comunidades através da generosidade inteligente.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una sabia prosperidad a través de una inteligencia fluida y generosa. Tu sabiduría reflexiva y tu éxito floreciente se combinan para crear una abundancia que se extiende como aguas nutritivas, enriqueciendo a las comunidades a través de una generosidad inteligente.',
    ja: 'あなたの水の性質は、この名前と調和し、流れるような、寛大な知性を通して賢明な繁栄を導きます。あなたの思慮深い知恵と繁栄する成功が組み合わさって、栄養を与える水のように広がる豊かさを生み出し、知的な寛大さでコミュニティを豊かにします。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความเจริญรุ่งเรืองที่ชาญฉลาดผ่านสติปัญญาที่ลื่นไหลและมีน้ำใจ ปัญญาที่รอบคอบและความสำเร็จที่เฟื่องฟูของคุณรวมกันเพื่อสร้างความอุดมสมบูรณ์ที่แผ่ขยายเหมือนน้ำที่บำรุงเลี้ยง ทำให้ชุมชนร่ำรวยขึ้นผ่านความเอื้ออาทรที่ชาญฉลาด',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan kemakmuran yang bijaksana melalui kecerdasan yang mengalir dan murah hati. Kebijaksanaan Anda yang bijaksana dan kesuksesan yang berkembang bergabung untuk menciptakan kelimpahan yang menyebar seperti air yang menyehatkan, memperkaya komunitas melalui kemurahan hati yang cerdas.'
  }
},
// 139. 진석 (Jin-seok)
{
  id: '진석_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, polishing a precious character into stone-solid virtue. Your treasured essence and unshakeable foundation combine to create an integrity that gleams like a gemstone set in bedrock, providing lasting value through principled strength.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 귀중한 품성을 돌처럼 단단한 덕으로 닦아냅니다. 당신의 소중한 본질과 흔들리지 않는 기반이 결합하여, 기반암에 박힌 보석처럼 빛나는 진실성을 창조하고, 원칙 있는 힘을 통해 지속적인 가치를 제공합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant un caractère précieux en une vertu solide comme le roc. Votre essence précieuse et votre fondation inébranlable se combinent pour créer une intégrité qui brille comme une gemme sertie dans la roche mère, offrant une valeur durable grâce à une force de principe.',
    it: 'La tua natura di Metallo si armonizza con questo nome, lucidando un carattere prezioso in una virtù solida come la roccia. La tua essenza preziosa e le tue fondamenta incrollabili si combinano per creare un\'integrità che brilla come una gemma incastonata nella roccia madre, fornendo un valore duraturo attraverso una forza basata sui principi.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert einen kostbaren Charakter zu steinfester Tugend. Ihre geschätzte Essenz und Ihr unerschütterliches Fundament vereinen sich zu einer Integrität, die wie ein in Fels gefasster Edelstein glänzt und durch prinzipienfeste Stärke dauerhaften Wert bietet.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, polindo um caráter precioso em uma virtude sólida como rocha. Sua essência preciosa e sua base inabalável se combinam para criar uma integridade que brilha como uma pedra preciosa cravada na rocha, fornecendo valor duradouro através da força de princípios.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo un carácter precioso en una virtud sólida como una roca. Tu esencia atesorada y tu base inquebrantable se combinan para crear una integridad que brilla como una gema engastada en el lecho de roca, proporcionando un valor duradero a través de una fuerza de principios.',
    ja: 'あなたの金の性質は、この名前と調和し、貴重な人格を石のように固い美徳に磨き上げます。あなたの貴重な本質と揺るぎない基盤が組み合わさって、岩盤にセットされた宝石のように輝く誠実さを生み出し、原則に基づいた強さを通して永続的な価値を提供します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาลักษณะนิสัยอันล้ำค่าให้เป็นคุณธรรมที่แข็งแกร่งดั่งหิน แก่นแท้ที่ล้ำค่าและรากฐานที่ไม่สั่นคลอนของคุณรวมกันเพื่อสร้างความซื่อสัตย์ที่ส่องประกายเหมือนอัญมณีที่ฝังอยู่ในหินแข็ง ให้คุณค่าที่ยั่งยืนผ่านความแข็งแกร่งที่มีหลักการ',
    id: 'Sifat Logam Anda selaras dengan nama ini, memoles karakter berharga menjadi kebajikan yang kokoh seperti batu. Esensi berharga Anda dan fondasi yang tak tergoyahkan bergabung untuk menciptakan integritas yang berkilau seperti batu permata yang tertanam di batuan dasar, memberikan nilai abadi melalui kekuatan berprinsip.'
  }
},
// 140. 진수 (Jin-soo)
{
  id: '진수_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, distilling precious excellence from deep wisdom. Your treasured quality and outstanding achievement combine to create a mastery that flows like a rare mountain spring, offering pure, invaluable guidance to those who seek truth.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 깊은 지혜에서 귀중한 탁월함을 증류해냅니다. 당신의 소중한 자질과 뛰어난 성취가 결합하여, 희귀한 산골 샘물처럼 흘러 진리를 찾는 이들에게 순수하고 귀중한 지침을 제공하는 경지를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, distillant une excellence précieuse d\'une profonde sagesse. Votre qualité précieuse et vos réalisations exceptionnelles se combinent pour créer une maîtrise qui coule comme une source de montagne rare, offrant des conseils purs et inestimables à ceux qui cherchent la vérité.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, distillando un\'eccellenza preziosa da una profonda saggezza. La tua qualità preziosa e i tuoi eccezionali risultati si combinano per creare una maestria che scorre come una rara sorgente di montagna, offrendo una guida pura e inestimabile a coloro che cercano la verità.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und destilliert kostbare Exzellenz aus tiefer Weisheit. Ihre geschätzte Qualität und Ihre herausragende Leistung vereinen sich zu einer Meisterschaft, die wie eine seltene Bergquelle fließt und denjenigen, die die Wahrheit suchen, reine, unschätzbare Führung bietet.',
    pt: 'Sua natureza de Água se harmoniza com este nome, destilando excelência preciosa de sabedoria profunda. Sua qualidade preciosa e suas realizações notáveis se combinam para criar uma maestria que flui como uma rara fonte de montanha, oferecendo orientação pura e inestimável para aqueles que buscam a verdade.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, destilando una preciosa excelencia de una profunda sabiduría. Tu preciada cualidad y tus logros sobresalientes se combinan para crear una maestría que fluye como un raro manantial de montaña, ofreciendo una guía pura e invaluable a quienes buscan la verdad.',
    ja: 'あなたの水の性質は、この名前と調和し、深い知恵から貴重な卓越性を蒸留します。あなたの貴重な品質と卓越した業績が組み合わさって、真実を求める人々に純粋で貴重なガイダンスを提供する、珍しい山の泉のように流れる熟練を生み出します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ กลั่นความเป็นเลิศอันล้ำค่าจากปัญญาอันลึกซึ้ง คุณภาพอันล้ำค่าและความสำเร็จที่โดดเด่นของคุณรวมกันเพื่อสร้างความเชี่ยวชาญที่ไหลเหมือนน้ำพุบนภูเขาที่หายาก ให้คำแนะนำที่บริสุทธิ์และประเมินค่าไม่ได้แก่ผู้ที่แสวงหาความจริง',
    id: 'Sifat Air Anda selaras dengan nama ini, menyaring keunggulan berharga dari kebijaksanaan yang mendalam. Kualitas berharga Anda dan pencapaian luar biasa bergabung untuk menciptakan penguasaan yang mengalir seperti mata air pegunungan yang langka, menawarkan bimbingan murni yang tak ternilai bagi mereka yang mencari kebenaran.'
  }
},
// 141. 진영 (Jin-yeong)
{
  id: '진영_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, cultivating precious prosperity through refined excellence. Your treasured value and flourishing growth combine to create a wealth that shines like polished jewels, demonstrating that true abundance comes from authentic quality.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 세련된 탁월함을 통해 귀중한 번영을 일구어냅니다. 당신의 소중한 가치와 무성한 성장이 결합하여, 잘 닦인 보석처럼 빛나는 부를 창조하며, 진정한 풍요는 진정한 품질에서 비롯됨을 보여줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, cultivant une prospérité précieuse grâce à une excellence raffinée. Votre valeur précieuse et votre croissance florissante se combinent pour créer une richesse qui brille comme des bijoux polis, démontrant que la véritable abondance vient d\'une qualité authentique.',
    it: 'La tua natura di Metallo si armonizza con questo nome, coltivando una prosperità preziosa attraverso un\'eccellenza raffinata. Il tuo valore prezioso e la tua crescita fiorente si combinano per creare una ricchezza che brilla come gioielli lucidati, dimostrando che la vera abbondanza deriva da una qualità autentica.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und kultiviert kostbaren Wohlstand durch verfeinerte Exzellenz. Ihr geschätzter Wert und Ihr blühendes Wachstum vereinen sich zu einem Reichtum, der wie polierte Juwelen glänzt und zeigt, dass wahrer Überfluss von authentischer Qualität herrührt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, cultivando prosperidade preciosa através de excelência refinada. Seu valor precioso e seu crescimento florescente se combinam para criar uma riqueza que brilha como joias polidas, demonstrando que a verdadeira abundância vem de qualidade autêntica.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, cultivando una preciosa prosperidad a través de una refinada excelencia. Tu valor atesorado y tu crecimiento floreciente se combinan para crear una riqueza que brilla como joyas pulidas, demostrando que la verdadera abundancia proviene de la calidad auténtica.',
    ja: 'あなたの金の性質は、この名前と調和し、洗練された卓越性を通して貴重な繁栄を育みます。あなたの貴重な価値と繁栄する成長が組み合わさって、磨かれた宝石のように輝く富を生み出し、真の豊かさは本物の品質から生まれることを示します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ปลูกฝังความเจริญรุ่งเรืองอันล้ำค่าผ่านความเป็นเลิศที่ปราณีต คุณค่าอันล้ำค่าและการเติบโตที่เฟื่องฟูของคุณรวมกันเพื่อสร้างความมั่งคั่งที่ส่องประกายเหมือนอัญมณีขัดเงา แสดงให้เห็นว่าความอุดมสมบูรณ์ที่แท้จริงมาจากคุณภาพที่แท้จริง',
    id: 'Sifat Logam Anda selaras dengan nama ini, menumbuhkan kemakmuran yang berharga melalui keunggulan yang halus. Nilai berharga Anda dan pertumbuhan yang berkembang bergabung untuk menciptakan kekayaan yang bersinar seperti perhiasan yang dipoles, menunjukkan bahwa kelimpahan sejati berasal dari kualitas otentik.'
  }
},
// 142. 진호 (Jin-ho)
{
  id: '진호_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging a precious character into great strength. Your treasured essence and magnificent purpose combine to create a leadership that gleams like royal gold, inspiring others through your commitment to noble excellence.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 귀중한 품성을 위대한 힘으로 벼려냅니다. 당신의 소중한 본질과 장엄한 목적이 결합하여, 왕가의 금처럼 빛나는 리더십을 창조하고, 고귀한 탁월함을 향한 당신의 헌신을 통해 다른 이들에게 영감을 줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant un caractère précieux en une grande force. Votre essence précieuse et votre magnifique objectif se combinent pour créer un leadership qui brille comme de l\'or royal, inspirant les autres par votre engagement envers l\'excellence noble.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando un carattere prezioso in una grande forza. La tua essenza preziosa e il tuo magnifico scopo si combinano per creare una leadership che brilla come oro regale, ispirando gli altri attraverso il tuo impegno per un\'eccellenza nobile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet einen kostbaren Charakter zu großer Stärke. Ihre geschätzte Essenz und Ihr großartiges Ziel vereinen sich zu einer Führung, die wie königliches Gold glänzt und andere durch Ihr Engagement für edle Exzellenz inspiriert.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando um caráter precioso em grande força. Sua essência preciosa e seu propósito magnífico se combinam para criar uma liderança que brilha como ouro real, inspirando outros através de seu compromisso com a nobre excelência.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando un carácter precioso en una gran fuerza. Tu esencia atesorada y tu magnífico propósito se combinaban para crear un liderazgo que brilla como el oro real, inspirando a otros a través de tu compromiso con la noble excelencia.',
    ja: 'あなたの金の性質は、この名前と調和し、貴重な人格を大きな強さに鍛え上げます。あなたの貴重な本質と壮大な目的が組み合わさって、王室の金のように輝くリーダーシップを生み出し、高貴な卓越性へのあなたのコミットメントを通して他の人を鼓舞します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมลักษณะนิสัยอันล้ำค่าให้เป็นความแข็งแกร่งที่ยิ่งใหญ่ แก่นแท้ที่ล้ำค่าและจุดประสงค์อันงดงามของคุณรวมกันเพื่อสร้างความเป็นผู้นำที่ส่องประกายเหมือนทองคำหลวง สร้างแรงบันดาลใจให้ผู้อื่นผ่านความมุ่งมั่นสู่ความเป็นเลิศอันสูงส่งของคุณ',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa karakter berharga menjadi kekuatan besar. Esensi berharga dan tujuan mulia Anda bergabung untuk menciptakan kepemimpinan yang berkilau seperti emas kerajaan, menginspirasi orang lain melalui komitmen Anda pada keunggulan mulia.'
  }
},
// 143. 창빈 (Chang-bin)
{
  id: '창빈_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, sharpening focused precision into refined, shining strength. Your pointed clarity and elegant cultivation combine to create a character that strikes true like a well-crafted spear, achieving goals through disciplined excellence.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 집중된 정밀함을 세련되고 빛나는 힘으로 날카롭게 벼려냅니다. 당신의 예리한 명료함과 우아한 수양이 결합하여, 잘 만들어진 창처럼 정확하게 목표를 꿰뚫고, 훈련된 탁월함을 통해 목표를 달성하는 품성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, aiguisant une précision ciblée en une force raffinée et brillante. Votre clarté pointue et votre culture élégante se combinent pour créer un caractère qui frappe juste comme une lance bien conçue, atteignant ses objectifs grâce à une excellence disciplinée.',
    it: 'La tua natura di Metallo si armonizza con questo nome, affinando una precisione mirata in una forza raffinata e splendente. La tua chiarezza acuta e la tua coltivazione elegante si combinano per creare un carattere che colpisce nel segno come una lancia ben realizzata, raggiungendo gli obiettivi attraverso un\'eccellenza disciplinata.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schärft fokussierte Präzision zu verfeinerter, glänzender Stärke. Ihre pointierte Klarheit und Ihre elegante Kultivierung vereinen sich zu einem Charakter, der wie ein gut gearbeiteter Speer zutrifft und Ziele durch disziplinierte Exzellenz erreicht.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, afiando a precisão focada em uma força refinada e brilhante. Sua clareza pontual e seu cultivo elegante se combinam para criar um caráter que atinge o alvo como uma lança bem trabalhada, alcançando objetivos através da excelência disciplinada.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, agudizando la precisión enfocada en una fuerza refinada y brillante. Tu claridad puntiaguda y tu elegante cultivo se combinan para crear un carácter que da en el blanco como una lanza bien elaborada, logrando metas a través de una excelencia disciplinada.',
    ja: 'あなたの金の性質は、この名前と調和し、集中した精度を洗練された輝く強さに研ぎ澄まします。あなたの鋭い明快さとエレガントな育成が組み合わさって、巧みに作られた槍のように真実を突く性格を生み出し、規律ある卓越性を通して目標を達成します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ทำให้ความแม่นยำที่มุ่งเน้นเฉียบคมขึ้นเป็นความแข็งแกร่งที่ปราณีตและส่องสว่าง ความชัดเจนที่เฉียบแหลมและการฝึกฝนที่สง่างามของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ตรงเป้าหมายเหมือนหอกที่สร้างขึ้นอย่างดี บรรลุเป้าหมายผ่านความเป็นเลิศที่มีวินัย',
    id: 'Sifat Logam Anda selaras dengan nama ini, mempertajam presisi yang terfokus menjadi kekuatan yang halus dan bersinar. Kejelasan Anda yang tajam dan kultivasi yang elegan bergabung untuk menciptakan karakter yang tepat sasaran seperti tombak yang dibuat dengan baik, mencapai tujuan melalui keunggulan yang disiplin.'
  }
},
// 144. 철민 (Chul-min)
{
  id: '철민_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, tempering iron strength with swift adaptability. Your metallic foundation and agile thinking combine to create a resilience that bends without breaking, achieving success through a perfect balance of strength and flexibility.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 강철의 힘을 신속한 적응력으로 단련합니다. 당신의 금속성 기반과 민첩한 사고가 결합하여, 부러지지 않고 휘어지는 회복력을 창조하며, 힘과 유연성의 완벽한 균형을 통해 성공을 성취합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant la force du fer avec une adaptabilité rapide. Votre fondation métallique et votre pensée agile se combinent pour créer une résilience qui plie sans se rompre, réussissant grâce à un équilibre parfait entre force et flexibilité.',
    it: 'La tua natura di Metallo si armonizza con questo nome, temperando la forza del ferro con una rapida adattabilità. La tua base metallica e il tuo pensiero agile si combinano per creare una resilienza che si piega senza spezzarsi, ottenendo successo attraverso un perfetto equilibrio di forza e flessibilità.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert Eisenstärke mit schneller Anpassungsfähigkeit. Ihre metallische Grundlage und Ihr agiles Denken vereinen sich zu einer Widerstandsfähigkeit, die sich biegt, ohne zu brechen, und durch ein perfektes Gleichgewicht von Stärke und Flexibilität Erfolg hat.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, temperando a força do ferro com rápida adaptabilidade. Sua base metálica e seu pensamento ágil se combinam para criar uma resiliência que se dobra sem quebrar, alcançando o sucesso através de um equilíbrio perfeito de força e flexibilidade.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, templando la fuerza del hierro con una rápida adaptabilidad. Tu base metálica y tu pensamiento ágil se combinan para crear una resiliencia que se dobla sin romperse, logrando el éxito a través de un equilibrio perfecto de fuerza y flexibilidad.',
    ja: 'あなたの金の性質は、この名前と調和し、鉄の強さを素早い適応性で和らげます。あなたの金属的な基盤と機敏な思考が組み合わさって、壊れることなく曲がる回復力を生み出し、強さと柔軟性の完璧なバランスを通して成功を収めます。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ทำให้ความแข็งแกร่งของเหล็กอ่อนลงด้วยการปรับตัวที่รวดเร็ว รากฐานที่เป็นโลหะและความคิดที่ว่องไวของคุณรวมกันเพื่อสร้างความยืดหยุ่นที่งอได้โดยไม่แตกหัก บรรลุความสำเร็จผ่านความสมดุลที่สมบูรณ์แบบของความแข็งแกร่งและความยืดหยุ่น',
    id: 'Sifat Logam Anda selaras dengan nama ini, melembutkan kekuatan besi dengan kemampuan beradaptasi yang cepat. Fondasi logam dan pemikiran gesit Anda bergabung untuk menciptakan ketahanan yang lentur tanpa patah, mencapai kesuksesan melalui keseimbangan sempurna antara kekuatan dan fleksibilitas.'
  }
},
// 145. 태윤 (Tae-yoon)
{
  id: '태윤_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, forging great prosperity through magnificent refinement. Your supreme achievement and abundant flow combine to create a wealth that gleams like a precious metal, bringing both material success and spiritual abundance.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 장엄한 정제를 통해 위대한 번영을 벼려냅니다. 당신의 최고의 성취와 풍부한 흐름이 결합하여, 귀금속처럼 빛나는 부를 창조하며, 물질적 성공과 정신적 풍요를 모두 가져다줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une grande prospérité par un raffinement magnifique. Votre accomplissement suprême et votre flux abondant se combinent pour créer une richesse qui brille comme un métal précieux, apportant à la fois le succès matériel et l\'abondance spirituelle.',
    it: 'La tua natura di Metallo si armonizza con questo nome, forgiando una grande prosperità attraverso una magnifica raffinatezza. Il tuo supremo successo e il tuo flusso abbondante si combinano per creare una ricchezza che brilla come un metallo prezioso, portando sia successo materiale che abbondanza spirituale.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet großen Wohlstand durch großartige Verfeinerung. Ihre höchste Errungenschaft und Ihr reichlicher Fluss vereinen sich zu einem Reichtum, der wie ein Edelmetall glänzt und sowohl materiellen Erfolg als auch spirituellen Überfluss bringt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, forjando grande prosperidade através de um refinamento magnífico. Sua conquista suprema e seu fluxo abundante se combinam para criar uma riqueza que brilha como um metal precioso, trazendo tanto sucesso material quanto abundância espiritual.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una gran prosperidad a través de un magnífico refinamiento. Tu logro supremo y tu flujo abundante se combinan para crear una riqueza que brilla como un metal precioso, trayendo tanto el éxito material como la abundancia espiritual.',
    ja: 'あなたの金の性質は、この名前と調和し、壮大な洗練を通して大きな繁栄を築きます。あなたの最高の業績と豊かな流れが組み合わさって、貴金属のように輝く富を生み出し、物質的な成功と精神的な豊かさの両方をもたらします。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ หลอมความเจริญรุ่งเรืองที่ยิ่งใหญ่ผ่านการขัดเกลาที่งดงาม ความสำเร็จสูงสุดและการไหลเวียนที่อุดมสมบูรณ์ของคุณรวมกันเพื่อสร้างความมั่งคั่งที่ส่องประกายเหมือนโลหะมีค่า นำมาซึ่งความสำเร็จทางวัตถุและความอุดมสมบูรณ์ทางจิตวิญญาณ',
    id: 'Sifat Logam Anda selaras dengan nama ini, menempa kemakmuran besar melalui pemurnian yang luar biasa. Pencapaian tertinggi dan aliran melimpah Anda bergabung untuk menciptakan kekayaan yang berkilau seperti logam mulia, membawa kesuksesan material dan kelimpahan spiritual.'
  }
},
// 146. 하린 (Ha-rin)
{
  id: '하린_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, polishing beautiful aspirations into sky-high achievements. Your gorgeous ambition and celestial grace combine to create a character that shines like a star in the clear heavens, inspiring others to reach for their highest dreams.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 아름다운 포부를 하늘 높은 성취로 닦아냅니다. 당신의 화려한 야망과 천상의 우아함이 결합하여, 맑은 하늘의 별처럼 빛나며 다른 사람들이 가장 높은 꿈을 향해 나아가도록 영감을 주는 품성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant de belles aspirations en des réalisations vertigineuses. Votre ambition magnifique et votre grâce céleste se combinent pour créer un caractère qui brille comme une étoile dans les cieux clairs, inspirant les autres à atteindre leurs rêves les plus élevés.',
    it: 'La tua natura di Metallo si armonizza con questo nome, lucidando belle aspirazioni in successi altissimi. La tua splendida ambizione e la tua grazia celestiale si combinano per creare un carattere che brilla come una stella nei cieli limpidi, ispirando gli altri a raggiungere i loro sogni più alti.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert schöne Bestrebungen zu himmelhohen Errungenschaften. Ihr wunderschöner Ehrgeiz und Ihre himmlische Anmut vereinen sich zu einem Charakter, der wie ein Stern am klaren Himmel leuchtet und andere dazu inspiriert, nach ihren höchsten Träumen zu greifen.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, polindo belas aspirações em conquistas altíssimas. Sua ambição deslumbrante e sua graça celestial se combinam para criar um caráter que brilha como uma estrela nos céus claros, inspirando outros a alcançar seus sonhos mais elevados.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo hermosas aspiraciones en logros altísimos. Tu hermosa ambición y tu gracia celestial se combinan para crear un carácter que brilla como una estrella en los cielos despejados, inspirando a otros a alcanzar sus sueños más elevados.',
    ja: 'あなたの金の性質は、この名前と調和し、美しい願望を天文学的な業績に磨き上げます。あなたの豪華な野心と天の恵みが組み合わさって、澄んだ天の星のように輝く性格を生み出し、他の人が最高の夢に到達するように促します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาแรงบันดาลใจที่สวยงามให้เป็นความสำเร็จที่สูงเสียดฟ้า ความทะเยอทะยานที่งดงามและความสง่างามบนท้องฟ้าของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ส่องประกายเหมือนดวงดาวบนท้องฟ้าที่แจ่มใส สร้างแรงบันดาลใจให้ผู้อื่นไปให้ถึงความฝันสูงสุดของพวกเขา',
    id: 'Sifat Logam Anda selaras dengan nama ini, memoles aspirasi indah menjadi pencapaian setinggi langit. Ambisi indah dan anugerah surgawi Anda bergabung untuk menciptakan karakter yang bersinar seperti bintang di langit yang cerah, menginspirasi orang lain untuk meraih impian tertinggi mereka.'
  }
},
// 147. 해린 (Hae-rin)
{
  id: '해린_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling the beauty of the ocean through endless grace. Your vast magnificence and flowing elegance combine to create a character that moves like the tides, bringing renewal and abundance wherever your influence reaches.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 끝없는 우아함을 통해 바다의 아름다움을 이끌어냅니다. 당신의 광대한 장엄함과 흐르는 듯한 우아함이 결합하여, 조석력처럼 움직이며 당신의 영향력이 닿는 곳마다 새로움과 풍요를 가져다주는 품성을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant la beauté de l\'océan par une grâce infinie. Votre vaste magnificence et votre élégance fluide se combinent pour créer un caractère qui se déplace comme les marées, apportant renouveau et abondance partout où votre influence s\'étend.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando la bellezza dell\'oceano attraverso una grazia infinita. La tua vasta magnificenza e la tua eleganza fluente si combinano per creare un carattere che si muove come le maree, portando rinnovamento e abbondanza ovunque giunga la tua influenza.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert die Schönheit des Ozeans durch endlose Anmut. Ihre große Pracht und Ihre fließende Eleganz vereinen sich zu einem Charakter, der sich wie die Gezeiten bewegt und Erneuerung und Fülle bringt, wohin auch immer Ihr Einfluss reicht.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando a beleza do oceano através de uma graça infinita. Sua vasta magnificência e sua elegância fluida se combinam para criar um caráter que se move como as marés, trazendo renovação e abundância onde quer que sua influência alcance.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando la belleza del océano a través de una gracia infinita. Tu vasta magnificencia y tu fluida elegancia se combinan para crear un carácter que se mueve como las mareas, trayendo renovación y abundancia dondequiera que llegue tu influencia.',
    ja: 'あなたの水の性質は、この名前と調和し、無限の優雅さを通して海の美しさを導きます。あなたの広大な壮大さと流れるような優雅さが組み合わさって、潮のように動く性格を生み出し、あなたの影響が及ぶどこにでも更新と豊かさをもたらします。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความงามของมหาสมุทรผ่านความสง่างามที่ไม่สิ้นสุด ความงดงามอันกว้างใหญ่และความสง่างามที่ลื่นไหลของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่เคลื่อนไหวเหมือนกระแสน้ำ นำมาซึ่งการเริ่มต้นใหม่และความอุดมสมบูรณ์ในทุกที่ที่อิทธิพลของคุณไปถึง',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan keindahan lautan melalui keanggunan yang tak ada habisnya. Keagungan Anda yang luas dan keanggunan yang mengalir bergabung untuk menciptakan karakter yang bergerak seperti pasang surut, membawa pembaruan dan kelimpahan di mana pun pengaruh Anda mencapai.'
  }
},
// 148. 현서 (Hyun-seo)
{
  id: '현서_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, flowing with virtuous wisdom through auspicious channels. Your noble character and blessed fortune combine to create a grace that moves like a gentle rain, bringing both moral guidance and good fortune to all who follow your example.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 상서로운 통로를 통해 고결한 지혜로 흘러갑니다. 당신의 고귀한 품성과 축복받은 행운이 결합하여, 신성한 물처럼 움직이며 당신의 모범을 따르는 모든 이에게 도덕적 지침과 행운을 함께 가져다주는 은혜를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une sagesse vertueuse par des canaux auspicieux. Votre caractère noble et votre fortune bénie se combinent pour créer une grâce qui se déplace comme une douce pluie, apportant à la fois des conseils moraux et la bonne fortune à tous ceux qui suivent votre exemple.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, fluendo con saggia virtù attraverso canali propizi. Il tuo carattere nobile e la tua fortuna benedetta si combinano per creare una grazia che si muove come una pioggia gentile, portando guida morale e buona sorte a tutti coloro che seguono il tuo esempio.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit tugendhafter Weisheit durch glückverheißende Kanäle. Ihr edler Charakter und Ihr gesegnetes Glück vereinen sich zu einer Anmut, die sich wie ein sanfter Regen bewegt und allen, die Ihrem Beispiel folgen, sowohl moralische Führung als auch Glück bringt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, fluindo com sabedoria virtuosa através de canais auspiciosos. Seu caráter nobre e sua fortuna abençoada se combinam para criar uma graça que se move como uma chuva suave, trazendo tanto orientação moral quanto boa sorte a todos que seguem seu exemplo.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una sabiduría virtuosa a través de canales auspiciosos. Tu carácter noble y tu bendita fortuna se combinan para crear una gracia que se mueve como una lluvia suave, trayendo tanto guía moral como buena fortuna a todos los que siguen tu ejemplo.',
    ja: 'あなたの水の性質は、この名前と調和し、縁起の良いチャネルを通して高潔な知恵で流れます。あなたの高貴な人格と祝福された幸運が組み合わさって、穏やかな雨のように動く恵みを生み出し、あなたの模範に従うすべての人に道徳的な導きと幸運の両方をもたらします。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ไหลลื่นด้วยปัญญาอันมีคุณธรรมผ่านช่องทางอันเป็นมงคล ลักษณะนิสัยที่สูงส่งและโชคลาภที่ได้รับพรของคุณรวมกันเพื่อสร้างความสง่างามที่เคลื่อนไหวเหมือนสายฝนที่อ่อนโยน นำมาซึ่งทั้งแนวทางทางศีลธรรมและโชคดีแก่ทุกคนที่ปฏิบัติตามแบบอย่างของคุณ',
    id: 'Sifat Air Anda selaras dengan nama ini, mengalir dengan kebijaksanaan berbudi luhur melalui saluran yang baik. Karakter mulia dan nasib baik Anda yang terberkati bergabung untuk menciptakan anugerah yang bergerak seperti hujan lembut, membawa bimbingan moral dan nasib baik bagi semua yang mengikuti teladan Anda.'
  }
},
// 149. 현우 (Hyun-woo)
{
  id: '현우_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, refining a wise character into excellent virtue. Your virtuous wisdom and outstanding quality combine to create a nobility that gleams like refined gold, demonstrating that true excellence comes from moral cultivation.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 지혜로운 품성을 탁월한 덕으로 정제합니다. 당신의 고결한 지혜와 뛰어난 자질이 결합하여, 잘 닦인 금처럼 빛나는 고귀함을 창조하며, 진정한 탁월함은 도덕적 수양에서 비롯됨을 보여줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, affinant un caractère sage en une excellente vertu. Votre sagesse vertueuse et votre qualité exceptionnelle se combinent pour créer une noblesse qui brille comme de l\'or raffiné, démontrant que la véritable excellence vient de la culture morale.',
    it: 'La tua natura di Metallo si armonizza con questo nome, affinando un carattere saggio in una virtù eccellente. La tua saggezza virtuosa e la tua qualità eccezionale si combinano per creare una nobiltà che brilla come oro raffinato, dimostrando che la vera eccellenza deriva dalla coltivazione morale.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und verfeinert einen weisen Charakter zu exzellenter Tugend. Ihre tugendhafte Weisheit und Ihre herausragende Qualität vereinen sich zu einem Adel, der wie raffiniertes Gold glänzt und zeigt, dass wahre Exzellenz aus moralischer Kultivierung entsteht.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, refinando um caráter sábio em uma excelente virtude. Sua sabedoria virtuosa e sua qualidade excepcional se combinam para criar uma nobreza que brilha como ouro refinado, demonstrando que a verdadeira excelência vem do cultivo moral.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, refinando un carácter sabio en una excelente virtud. Tu sabiduría virtuosa y tu calidad sobresaliente se combinan para crear una nobleza que brilla como el oro refinado, demostrando que la verdadera excelencia proviene del cultivo moral.',
    ja: 'あなたの金の性質は、この名前と調和し、賢明な人格を優れた美徳に磨き上げます。あなたの高潔な知恵と卓越した品質が組み合わさって、洗練された金のように輝く高貴さを生み出し、真の卓越性は道徳的な育成から生まれることを示します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาลักษณะนิสัยที่ชาญฉลาดให้เป็นคุณธรรมที่ยอดเยี่ยม ปัญญาอันมีคุณธรรมและคุณภาพที่โดดเด่นของคุณรวมกันเพื่อสร้างความสูงส่งที่ส่องประกายเหมือนทองคำขัดเงา แสดงให้เห็นว่าความเป็นเลิศที่แท้จริงมาจากการบ่มเพาะทางศีลธรรม',
    id: 'Sifat Logam Anda selaras dengan nama ini, memurnikan karakter bijaksana menjadi kebajikan yang luar biasa. Kebijaksanaan berbudi luhur dan kualitas luar biasa Anda bergabung untuk menciptakan kemuliaan yang berkilau seperti emas murni, menunjukkan bahwa keunggulan sejati berasal dari kultivasi moral.'
  }
},
// 150. 현정 (Hyun-jeong)
{
  id: '현정_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling virtuous wisdom through pure intentions. Your noble character and crystalline purity combine to create an integrity that flows like a sacred spring, offering a moral clarity that refreshes and renews all who encounter it.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 순수한 의도를 통해 고결한 지혜를 이끌어냅니다. 당신의 고귀한 품성과 수정 같은 순수함이 결합하여, 신성한 샘물처럼 흘러 그것을 마주하는 모든 이를 상쾌하게 하고 새롭게 하는 도덕적 명료함을 지닌 진실성을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une sagesse vertueuse par des intentions pures. Votre caractère noble et votre pureté cristalline se combinent pour créer une intégrité qui coule comme une source sacrée, offrant une clarté morale qui rafraîchit et renouvelle tous ceux qui la rencontrent.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando una saggia virtù attraverso intenzioni pure. Il tuo carattere nobile e la tua purezza cristallina si combinano per creare un\'integrità che scorre come una sorgente sacra, offrendo una chiarezza morale che rinfresca e rinnova tutti coloro che la incontrano.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert tugendhafte Weisheit durch reine Absichten. Ihr edler Charakter und Ihre kristalline Reinheit vereinen sich zu einer Integrität, die wie eine heilige Quelle fließt und eine moralische Klarheit bietet, die alle, die ihr begegnen, erfrischt und erneuert.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando sabedoria virtuosa através de intenções puras. Seu caráter nobre e sua pureza cristalina se combinam para criar uma integridade que flui como uma fonte sagrada, oferecendo uma clareza moral que refresca e renova todos que a encontram.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una sabiduría virtuosa a través de intenciones puras. Tu carácter noble y tu pureza cristalina se combinaban para crear una integridad que fluye como un manantial sagrado, ofreciendo una claridad moral que refresca y renueva a todos los que la encuentran.',
    ja: 'あなたの水の性質は、この名前と調和し、純粋な意図を通して高潔な知恵を導きます。あなたの高貴な人格と結晶のような純粋さが組み合わさって、聖なる泉のように流れる誠実さを生み出し、それに出会うすべての人をリフレッシュし、新たにする道徳的な明快さを提供します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านปัญญาอันมีคุณธรรมผ่านเจตนาที่บริสุทธิ์ ลักษณะนิสัยที่สูงส่งและความบริสุทธิ์ดุจคริสตัลของคุณรวมกันเพื่อสร้างความซื่อสัตย์ที่ไหลเหมือนน้ำพุศักดิ์สิทธิ์ ให้ความชัดเจนทางศีลธรรมที่ทำให้ทุกคนที่ได้พบสดชื่นและเริ่มต้นใหม่',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan kebijaksanaan berbudi luhur melalui niat murni. Karakter mulia dan kemurnian kristal Anda bergabung untuk menciptakan integritas yang mengalir seperti mata air suci, menawarkan kejelasan moral yang menyegarkan dan memperbarui semua orang yang menjumpainya.'
  }
},
// 151. 현주 (Hyun-ju)
{
  id: '현주_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, polishing virtuous character into precious wisdom. Your noble virtue and treasured insight combine to create a character that sparkles like a pearl in deep waters, offering rare guidance that enriches the soul.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 고결한 품성을 귀중한 지혜로 닦아냅니다. 당신의 고귀한 덕과 소중한 통찰력이 결합하여, 깊은 물속의 진주처럼 반짝이며 영혼을 풍요롭게 하는 희귀한 지침을 제공하는 품성을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, polissant un caractère vertueux en une sagesse précieuse. Votre noble vertu et votre précieuse perspicacité se combinent pour créer un caractère qui scintille comme une perle dans les eaux profondes, offrant des conseils rares qui enrichissent l\'âme.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, lucidando un carattere virtuoso in una saggezza preziosa. La tua nobile virtù e la tua preziosa intuizione si combinano per creare un carattere che brilla come una perla nelle acque profonde, offrendo una guida rara che arricchisce l\'anima.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und poliert einen tugendhaften Charakter zu kostbarer Weisheit. Ihre edle Tugend und Ihre geschätzte Einsicht vereinen sich zu einem Charakter, der wie eine Perle in tiefen Gewässern funkelt und seltene Führung bietet, die die Seele bereichert.',
    pt: 'Sua natureza de Água se harmoniza com este nome, polindo o caráter virtuoso em sabedoria preciosa. Sua nobre virtude e sua preciosa percepção se combinam para criar um caráter que brilha como uma pérola em águas profundas, oferecendo uma orientação rara que enriquece a alma.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, puliendo un carácter virtuoso en una sabiduría preciosa. Tu noble virtud y tu preciada perspicacia se combinan para crear un carácter que brilla como una perla en aguas profundas, ofreciendo una guía rara que enriquece el alma.',
    ja: 'あなたの水の性質は、この名前と調和し、高潔な人格を貴重な知恵に磨き上げます。あなたの高貴な美徳と大切な洞察力が組み合わさって、深い海の真珠のように輝く性格を生み出し、魂を豊かにする珍しい導きを提供します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ขัดเกลาลักษณะนิสัยที่มีคุณธรรมให้เป็นปัญญาอันล้ำค่า คุณธรรมอันสูงส่งและข้อมูลเชิงลึกอันล้ำค่าของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ส่องประกายเหมือนไข่มุกในน้ำลึก ให้คำแนะนำที่หายากซึ่งทำให้จิตวิญญาณสมบูรณ์ยิ่งขึ้น',
    id: 'Sifat Air Anda selaras dengan nama ini, memoles karakter berbudi luhur menjadi kebijaksanaan yang berharga. Kebajikan mulia dan wawasan berharga Anda bergabung untuk menciptakan karakter yang berkilau seperti mutiara di perairan dalam, menawarkan bimbingan langka yang memperkaya jiwa.'
  }
},
// 152. 현준 (Hyun-jun)
{
  id: '현준_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling virtuous talent through a flowing excellence. Your noble ability and gifted achievement combine to create a mastery that moves like a pristine river, inspiring others through your commitment to ethical excellence.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 흐르는 듯한 탁월함을 통해 고결한 재능을 이끌어냅니다. 당신의 고귀한 능력과 타고난 성취가 결합하여, 맑고 깨끗한 강처럼 움직이며 윤리적 탁월함을 향한 당신의 헌신을 통해 다른 이들에게 영감을 주는 경지를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant un talent vertueux par une excellence fluide. Votre capacité noble et vos réalisations douées se combinent pour créer une maîtrise qui se déplace comme une rivière vierge, inspirant les autres par votre engagement envers l\'excellence éthique.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando un talento virtuoso attraverso un\'eccellenza fluida. La tua nobile abilità e i tuoi risultati dotati si combinano per creare una maestria che si muove come un fiume incontaminato, ispirando gli altri attraverso il tuo impegno per l\'eccellenza etica.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert tugendhaftes Talent durch fließende Exzellenz. Ihre edle Fähigkeit und Ihre begabte Leistung vereinen sich zu einer Meisterschaft, die sich wie ein unberührter Fluss bewegt und andere durch Ihr Engagement für ethische Exzellenz inspiriert.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando talento virtuoso através de uma excelência fluida. Sua nobre habilidade e suas realizações talentosas se combinam para criar uma maestria que se move como um rio intocado, inspirando outros através de seu compromisso com a excelência ética.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando un talento virtuoso a través de una excelencia fluida. Tu noble habilidad y tus logros superdotados se combinan para crear una maestría que se mueve como un río prístino, inspirando a otros a través de tu compromiso con la excelencia ética.',
    ja: 'あなたの水の性質は、この名前と調和し、流れるような卓越性を通して高潔な才能を導きます。あなたの高貴な能力と才能ある業績が組み合わさって、手付かずの川のように動く熟練を生み出し、倫理的な卓越性へのあなたのコミットメントを通して他の人を鼓舞します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านพรสวรรค์อันมีคุณธรรมผ่านความเป็นเลิศที่ลื่นไหล ความสามารถอันสูงส่งและความสำเร็จที่มีพรสวรรค์ของคุณรวมกันเพื่อสร้างความเชี่ยวชาญที่เคลื่อนไหวเหมือนแม่น้ำบริสุทธิ์ สร้างแรงบันดาลใจให้ผู้อื่นผ่านความมุ่งมั่นสู่ความเป็นเลิศทางจริยธรรมของคุณ',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan bakat berbudi luhur melalui keunggulan yang mengalir. Kemampuan mulia dan pencapaian berbakat Anda bergabung untuk menciptakan penguasaan yang bergerak seperti sungai murni, menginspirasi orang lain melalui komitmen Anda pada keunggulan etis.'
  }
},
// 153. 현철 (Hyun-chul)
{
  id: '현철_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, tempering virtuous wisdom into iron-strong principles. Your noble character and unbreakable resolve combine to create an integrity that stands like a fortress pillar, protecting moral values with unwavering determination.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 고결한 지혜를 강철 같은 원칙으로 단련합니다. 당신의 고귀한 품성과 깨지지 않는 결의가 결합하여, 성채의 기둥처럼 굳건히 서서 흔들림 없는 결단력으로 도덕적 가치를 보호하는 진실성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant une sagesse vertueuse en des principes à toute épreuve. Votre caractère noble et votre résolution inébranlable se combinent pour créer une intégrité qui se dresse comme un pilier de forteresse, protégeant les valeurs morales avec une détermination inébranlable.',
    it: 'La tua natura di Metallo si armonizza con questo nome, temperando una saggia virtù in principi ferrei. Il tuo carattere nobile e la tua risolutezza incrollabile si combinano per creare un\'integrità che si erge come un pilastro di fortezza, proteggendo i valori morali con una determinazione incrollabile.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert tugendhafte Weisheit zu eisenharten Prinzipien. Ihr edler Charakter und Ihre unzerbrechliche Entschlossenheit vereinen sich zu einer Integrität, die wie eine Festungssäule dasteht und moralische Werte mit unerschütterlicher Entschlossenheit schützt.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, temperando a sabedoria virtuosa em princípios de ferro. Seu caráter nobre e sua resolução inabalável se combinam para criar uma integridade que se ergue como um pilar de fortaleza, protegendo os valores morais com determinação inabalável.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, templando la sabiduría virtuosa en principios férreos. Tu carácter noble y tu resolución inquebrantable se combinan para crear una integridad que se yergue como un pilar de fortaleza, protegiendo los valores morales con una determinación inquebrantable.',
    ja: 'あなたの金の性質は、この名前と調和し、高潔な知恵を鉄のように強い原則に和らげます。あなたの高貴な人格と壊れない決意が組み合わさって、揺るぎない決意で道徳的価値を守る、要塞の柱のように立つ誠実さを生み出します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ทำให้ปัญญาอันมีคุณธรรมกลายเป็นหลักการที่แข็งแกร่งดุจเหล็กกล้า ลักษณะนิสัยที่สูงส่งและความมุ่งมั่นที่ไม่แตกหักของคุณรวมกันเพื่อสร้างความซื่อสัตย์ที่ยืนหยัดเหมือนเสาหลักของป้อมปราการ ปกป้องคุณค่าทางศีลธรรมด้วยความมุ่งมั่นที่ไม่เปลี่ยนแปลง',
    id: 'Sifat Logam Anda selaras dengan nama ini, melembutkan kebijaksanaan berbudi luhur menjadi prinsip-prinsip sekuat baja. Karakter mulia dan tekad Anda yang tak terpatahkan bergabung untuk menciptakan integritas yang berdiri seperti pilar benteng, melindungi nilai-nilai moral dengan tekad yang tak tergoyahkan.'
  }
},
// 154. 현호 (Hyun-ho)
{
  id: '현호_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, flowing with virtuous greatness toward a magnificent purpose. Your noble wisdom and extraordinary achievement combine to create a leadership that surges like a mighty river, guiding others toward noble greatness.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 장엄한 목적을 향해 고결한 위대함으로 흘러갑니다. 당신의 고귀한 지혜와 비범한 성취가 결합하여, 거대한 강처럼 밀려와 다른 사람들을 고귀한 위대함으로 이끄는 리더십을 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une grandeur vertueuse vers un but magnifique. Votre noble sagesse et vos réalisations extraordinaires se combinent pour créer un leadership qui déferle comme une rivière puissante, guidant les autres vers une noble grandeur.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, fluendo con grandezza virtuosa verso uno scopo magnifico. La tua nobile saggezza e i tuoi straordinari risultati si combinano per creare una leadership che si impone come un fiume possente, guidando gli altri verso una nobile grandezza.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit tugendhafter Größe auf ein großartiges Ziel zu. Ihre edle Weisheit und Ihre außergewöhnliche Leistung vereinen sich zu einer Führung, die wie ein mächtiger Fluss ansteigt und andere zu edler Größe führt.',
    pt: 'Sua natureza de Água se harmoniza com este nome, fluindo com grandeza virtuosa em direção a um propósito magnífico. Sua nobre sabedoria e suas realizações extraordinárias se combinam para criar uma liderança que surge como um rio poderoso, guiando outros em direção à nobre grandeza.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una grandeza virtuosa hacia un propósito magnífico. Tu noble sabiduría y tus logros extraordinarios se combinan para crear un liderazgo que surge como un río caudaloso, guiando a otros hacia una noble grandeza.',
    ja: 'あなたの水の性質は、この名前と調和し、壮大な目的に向かって高潔な偉大さで流れます。あなたの高貴な知恵と並外れた業績が組み合わさって、力強い川のように押し寄せるリーダーシップを生み出し、他の人を高貴な偉大さへと導きます。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ไหลลื่นด้วยความยิ่งใหญ่อันมีคุณธรรมไปสู่จุดประสงค์อันงดงาม ปัญญาอันสูงส่งและความสำเร็จที่ไม่ธรรมดาของคุณรวมกันเพื่อสร้างความเป็นผู้นำที่เพิ่มขึ้นเหมือนแม่น้ำที่ทรงพลัง นำทางผู้อื่นไปสู่ความยิ่งใหญ่อันสูงส่ง',
    id: 'Sifat Air Anda selaras dengan nama ini, mengalir dengan kebesaran berbudi luhur menuju tujuan yang mulia. Kebijaksanaan mulia dan pencapaian luar biasa Anda bergabung untuk menciptakan kepemimpinan yang melonjak seperti sungai yang perkasa, membimbing orang lain menuju kebesaran yang mulia.'
  }
},
// 155. 혜린 (Hye-rin)
{
  id: '혜린_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, polishing wise beauty into radiant excellence. Your intelligent grace and flowing elegance combine to create a character that gleams like a precious gem, inspiring others through your commitment to beautiful wisdom.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 지혜로운 아름다움을 찬란한 탁월함으로 닦아냅니다. 당신의 지적인 우아함과 흐르는 듯한 품위가 결합하여, 귀한 보석처럼 빛나며 아름다운 지혜를 향한 당신의 헌신을 통해 다른 이들에게 영감을 주는 품성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant une beauté sage en une excellence radieuse. Votre grâce intelligente et votre élégance fluide se combinent pour créer un caractère qui brille comme une gemme précieuse, inspirant les autres par votre engagement envers une belle sagesse.',
    it: 'La tua natura di Metallo si armonizza con questo nome, lucidando una saggia bellezza in un\'eccellenza radiosa. La tua grazia intelligente e la tua eleganza fluente si combinano per creare un carattere che brilla come una gemma preziosa, ispirando gli altri attraverso il tuo impegno per una bella saggezza.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert weise Schönheit zu strahlender Exzellenz. Ihre intelligente Anmut und Ihre fließende Eleganz vereinen sich zu einem Charakter, der wie ein kostbarer Edelstein glänzt und andere durch Ihr Engagement für schöne Weisheit inspiriert.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, polindo a beleza sábia em excelência radiante. Sua graça inteligente e sua elegância fluida se combinam para criar um caráter que brilha como uma pedra preciosa, inspirando outros através de seu compromisso com a bela sabedoria.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo la belleza sabia en una excelencia radiante. Tu gracia inteligente y tu elegancia fluida se combinan para crear un carácter que brilla como una gema preciosa, inspirando a otros a través de tu compromiso con una hermosa sabiduría.',
    ja: 'あなたの金の性質は、この名前と調和し、賢明な美しさを輝く卓越性に磨き上げます。あなたの知的な恵みと流れるような優雅さが組み合わさって、貴重な宝石のように輝く性格を生み出し、美しい知恵へのあなたのコミットメントを通して他の人を鼓舞します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาความงามที่ชาญฉลาดให้เป็นความเป็นเลิศที่เปล่งปลั่ง ความสง่างามที่ชาญฉลาดและความสง่างามที่ลื่นไหลของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ส่องประกายเหมือนอัญมณีล้ำค่า สร้างแรงบันดาลใจให้ผู้อื่นผ่านความมุ่งมั่นสู่ปัญญาที่สวยงามของคุณ',
    id: 'Sifat Logam Anda selaras dengan nama ini, memoles keindahan yang bijaksana menjadi keunggulan yang bersinar. Keanggunan cerdas dan keanggunan Anda yang mengalir bergabung untuk menciptakan karakter yang berkilau seperti permata berharga, menginspirasi orang lain melalui komitmen Anda pada kebijaksanaan yang indah.'
  }
},
// 156. 혜수 (Hye-soo)
{
  id: '혜수_water_01',
  harmony: {
    en: 'Your Water nature harmonizes with this name, channeling wise beauty through flowing excellence. Your intelligent grace and outstanding achievement combine to create a mastery that moves like a graceful stream, offering both wisdom and beauty to all who encounter your influence.',
    ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 흐르는 듯한 탁월함을 통해 지혜로운 아름다움을 이끌어냅니다. 당신의 지적인 우아함과 뛰어난 성취가 결합하여, 우아한 시냇물처럼 움직이며 당신의 영향력을 마주하는 모든 이에게 지혜와 아름다움을 함께 제공하는 경지를 창조합니다.',
    fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une beauté sage par une excellence fluide. Votre grâce intelligente et vos réalisations exceptionnelles se combinent pour créer une maîtrise qui se déplace comme un ruisseau gracieux, offrant à la fois sagesse et beauté à tous ceux qui rencontrent votre influence.',
    it: 'La tua natura d\'Acqua si armonizza con questo nome, incanalando una saggia bellezza attraverso un\'eccellenza fluida. La tua grazia intelligente e i tuoi eccezionali risultati si combinano per creare una maestria che si muove come un ruscello aggraziato, offrendo saggezza e bellezza a tutti coloro che incontrano la tua influenza.',
    de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert weise Schönheit durch fließende Exzellenz. Ihre intelligente Anmut und Ihre herausragende Leistung vereinen sich zu einer Meisterschaft, die sich wie ein anmutiger Strom bewegt und allen, die Ihrem Einfluss begegnen, sowohl Weisheit als auch Schönheit bietet.',
    pt: 'Sua natureza de Água se harmoniza com este nome, canalizando beleza sábia através de excelência fluida. Sua graça inteligente e suas realizações notáveis se combinam para criar uma maestria que se move como um riacho gracioso, oferecendo sabedoria e beleza a todos que encontram sua influência.',
    es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una belleza sabia a través de una excelencia fluida. Tu gracia inteligente y tus logros sobresalientes se combinan para crear una maestría que se mueve como un arroyo elegante, ofreciendo tanto sabiduría como belleza a todos los que se encuentran con tu influencia.',
    ja: 'あなたの水の性質は、この名前と調和し、流れるような卓越性を通して賢明な美しさを導きます。あなたの知的な恵みと卓越した業績が組み合わさって、優雅な小川のように動く熟練を生み出し、あなたの影響に出会うすべての人に知恵と美しさの両方を提供します。',
    th: 'ธรรมชาติธาตุน้ำของคุณสอดคล้องกับชื่อนี้ ส่งผ่านความงามที่ชาญฉลาดผ่านความเป็นเลิศที่ลื่นไหล ความสง่างามที่ชาญฉลาดและความสำเร็จที่โดดเด่นของคุณรวมกันเพื่อสร้างความเชี่ยวชาญที่เคลื่อนไหวเหมือนลำธารที่สง่างาม มอบทั้งปัญญาและความงามแก่ทุกคนที่ได้สัมผัสกับอิทธิพลของคุณ',
    id: 'Sifat Air Anda selaras dengan nama ini, menyalurkan keindahan yang bijaksana melalui keunggulan yang mengalir. Keanggunan cerdas dan pencapaian luar biasa Anda bergabung untuk menciptakan penguasaan yang bergerak seperti aliran yang anggun, menawarkan kebijaksanaan dan keindahan bagi semua yang merasakan pengaruh Anda.'
  }
},
// 157. 혜영 (Hye-yeong)
{
  id: '혜영_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, refining wise prosperity into brilliant success. Your intelligent abundance and flourishing achievement combine to create a wealth that shines like polished gold, demonstrating that true prosperity comes from cultivated wisdom.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 지혜로운 번영을 눈부신 성공으로 정제합니다. 당신의 지적인 풍요와 무성한 성취가 결합하여, 잘 닦인 금처럼 빛나는 부를 창조하며, 진정한 번영은 갈고 닦은 지혜에서 비롯됨을 보여줍니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, affinant une sage prospérité en un succès brillant. Votre abondance intelligente et votre accomplissement florissant se combinent pour créer une richesse qui brille comme de l\'or poli, démontrant que la véritable prospérité vient d\'une sagesse cultivée.',
    it: 'La tua natura di Metallo si armonizza con questo nome, affinando una saggia prosperità in un brillante successo. La tua abbondanza intelligente e il tuo successo fiorente si combinano per creare una ricchezza che brilla come oro lucidato, dimostrando che la vera prosperità deriva da una saggezza coltivata.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und verfeinert weisen Wohlstand zu brillantem Erfolg. Ihre intelligente Fülle und Ihre blühende Leistung vereinen sich zu einem Reichtum, der wie poliertes Gold glänzt und zeigt, dass wahrer Wohlstand aus kultivierter Weisheit entsteht.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, refinando a prosperidade sábia em sucesso brilhante. Sua abundância inteligente e sua realização florescente se combinam para criar uma riqueza que brilha como ouro polido, demonstrando que a verdadeira prosperidade vem da sabedoria cultivada.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, refinando la sabia prosperidad en un éxito brillante. Tu abundancia inteligente y tus logros florecientes se combinan para crear una riqueza que brilla como el oro pulido, demostrando que la verdadera prosperidad proviene de una sabiduría cultivada.',
    ja: 'あなたの金の性質は、この名前と調和し、賢明な繁栄を輝かしい成功に磨き上げます。あなたの知的な豊かさと繁栄する業績が組み合わさって、磨かれた金のように輝く富を生み出し、真の繁栄は培われた知恵から生まれることを示します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ขัดเกลาความเจริญรุ่งเรืองที่ชาญฉลาดให้เป็นความสำเร็จที่ยอดเยี่ยม ความอุดมสมบูรณ์ที่ชาญฉลาดและความสำเร็จที่เฟื่องฟูของคุณรวมกันเพื่อสร้างความมั่งคั่งที่ส่องประกายเหมือนทองคำขัดเงา แสดงให้เห็นว่าความเจริญรุ่งเรืองที่แท้จริงมาจากปัญญาที่บ่มเพาะ',
    id: 'Sifat Logam Anda selaras dengan nama ini, memurnikan kemakmuran yang bijaksana menjadi kesuksesan yang cemerlang. Kelimpahan cerdas dan pencapaian yang berkembang bergabung untuk menciptakan kekayaan yang bersinar seperti emas yang dipoles, menunjukkan bahwa kemakmuran sejati berasal dari kebijaksanaan yang dikembangkan.'
  }
},
// 158. 혜진 (Hye-jin)
{
  id: '혜진_metal_01',
  harmony: {
    en: 'Your Metal nature harmonizes with this name, tempering a wise character into a precious virtue. Your intelligent nobility and treasured worth combine to create a character that gleams like a rare jewel, offering guidance that is both wise and genuinely valuable.',
    ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 지혜로운 품성을 귀중한 덕으로 단련합니다. 당신의 지적인 고귀함과 소중한 가치가 결합하여, 희귀한 보석처럼 빛나며 지혜롭고 진정으로 가치 있는 지침을 제공하는 품성을 창조합니다.',
    fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant un caractère sage en une vertu précieuse. Votre noblesse intelligente et votre valeur précieuse se combinent pour créer un caractère qui brille comme un joyau rare, offrant des conseils à la fois sages et véritablement précieux.',
    it: 'La tua natura di Metallo si armonizza con questo nome, temperando un carattere saggio in una virtù preziosa. La tua nobiltà intelligente e il tuo valore prezioso si combinano per creare un carattere che brilla come un gioiello raro, offrendo una guida che è sia saggia che genuinamente preziosa.',
    de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert einen weisen Charakter zu einer kostbaren Tugend. Ihre intelligente Noblesse und Ihr geschätzter Wert vereinen sich zu einem Charakter, der wie ein seltenes Juwel glänzt und eine Führung bietet, die sowohl weise als auch wirklich wertvoll ist.',
    pt: 'Sua natureza de Metal se harmoniza com este nome, temperando um caráter sábio em uma virtude preciosa. Sua nobreza inteligente e seu valor precioso se combinam para criar um caráter que brilha como uma joia rara, oferecendo uma orientação que é ao mesmo tempo sábia e genuinamente valiosa.',
    es: 'Tu naturaleza de Metal armoniza con este nombre, templando un carácter sabio en una virtud preciosa. Tu nobleza inteligente y tu valor atesorado se combinan para crear un carácter que brilla como una joya rara, ofreciendo una guía que es a la vez sabia y genuinamente valiosa.',
    ja: 'あなたの金の性質は、この名前と調和し、賢明な人格を貴重な美徳に和らげます。あなたの知的な高貴さと大切な価値が組み合わさって、希少な宝石のように輝く性格を生み出し、賢明で真に価値のあるガイダンスを提供します。',
    th: 'ธรรมชาติธาตุโลหะของคุณสอดคล้องกับชื่อนี้ ทำให้ลักษณะนิสัยที่ชาญฉลาดกลายเป็นคุณธรรมอันล้ำค่า ความสูงส่งที่ชาญฉลาดและคุณค่าอันล้ำค่าของคุณรวมกันเพื่อสร้างลักษณะนิสัยที่ส่องประกายเหมือนอัญมณีหายาก ให้คำแนะนำที่ทั้งฉลาดและมีคุณค่าอย่างแท้จริง',
    id: 'Sifat Logam Anda selaras dengan nama ini, melembutkan karakter bijaksana menjadi kebajikan yang berharga. Kebangsawanan cerdas dan nilai berharga Anda bergabung untuk menciptakan karakter yang berkilau seperti permata langka, menawarkan bimbingan yang bijaksana dan benar-benar berharga.'
  }
}

];

// Helper function to get harmony by name
export const getHarmonyById = (id: string): NameHarmony | undefined => {
  return NAME_HARMONIES.find(harmony => harmony.id === id);
};

export const getHarmoniesByKoreanName = (koreanName: string): NameHarmony[] => {
  return NAME_HARMONIES.filter(harmony => harmony.id.startsWith(koreanName + '_'));
};
