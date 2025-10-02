// Name Harmonies Database
// Contains multilingual harmony descriptions for Korean names

export interface NameHarmony {
  id: string; // unique identifier matching koreanNames.ts
  harmony: {
    [key: string]: string; // locale-based harmonies
  };
}

export const NAME_HARMONIES: NameHarmony[] = [
  {
    id: '민준_wood_01',
    harmony: {
      en: 'With your Wood nature, this name creates a perfect synergy, fostering deep roots of wisdom and continuous growth. Its quick-witted aspect complements your innate patience, while the name’s handsome meaning reflects an inner beauty born from cultivated knowledge and a true heart.',
      ko: '당신의 목(木) 기운은 이 이름과 만나 지혜의 뿌리를 깊게 내리고 성장을 거듭하는 완벽한 시너지를 이룹니다. 이름에 담긴 빠른 판단력은 당신의 타고난 인내심을 보완하고, 수려한 외모를 뜻하는 글자는 갈고 닦은 지식과 진실한 마음에서 우러나오는 내면의 아름다움을 비춥니다.',
      ja: 'あなたの木の性質はこの名前と完璧に調和し、学習と成長の深い根を作ります。素早い思考があなたの生来の忍耐力とバランスを取り、ハンサムな意味は教養ある知恵と真の性格から来る内面の美しさを反映します。',
      zh: '你的木元素性质与这个名字完美和谐，创造了学习和成长的深根。快速思考的特质平衡了你天生的耐心，而英俊的含义反映了来自修养智慧和真实品格的内在美。',
      fr: 'Votre nature d\'élément Bois s\'harmonise parfaitement avec ce nom, créant des racines profondes d\'apprentissage et de croissance. L\'aspect de pensée rapide équilibre votre patience naturelle, tandis que la signification belle reflète la beauté intérieure qui vient de la sagesse cultivée et du caractère authentique.',
      de: 'Ihre Holz-Element-Natur harmoniert perfekt mit diesem Namen und schafft tiefe Wurzeln des Lernens und Wachstums. Der schnelldenkende Aspekt balanciert Ihre natürliche Geduld, während die schöne Bedeutung die innere Schönheit widerspiegelt, die aus kultivierter Weisheit und echtem Charakter kommt.',
      es: 'Su naturaleza del elemento Madera armoniza perfectamente con este nombre, creando raíces profundas de aprendizaje y crecimiento. El aspecto de pensamiento rápido equilibra su paciencia natural, mientras que el significado hermoso refleja la belleza interior que proviene de la sabiduría cultivada y el carácter genuino.',
      ru: 'Ваша природа элемента Дерева прекрасно гармонирует с этим именем, создавая глубокие корни обучения и роста. Аспект быстрого мышления уравновешивает ваше природное терпение, в то время как красивое значение отражает внутреннюю красоту, происходящую от культивированной мудрости и подлинного характера.',
      ar: 'طبيعتك لعنصر الخشب تتناغم تماماً مع هذا الاسم، مما يخلق جذوراً عميقة للتعلم والنمو. جانب التفكير السريع يوازن صبرك الطبيعي، بينما المعنى الجميل يعكس الجمال الداخلي الذي يأتي من الحكمة المهذبة والشخصية الحقيقية.',
      hi: 'आपकी लकड़ी तत्व प्रकृति इस नाम के साथ पूर्ण रूप से सामंजस्य बिठाती है, सीखने और विकास की गहरी जड़ें बनाती है। तेज़ सोच का पहलू आपके प्राकृतिक धैर्य को संतुलित करता है, जबकि सुंदर अर्थ उस आंतरिक सुंदरता को दर्शाता है जो संस्कारित बुद्धि और वास्तविक चरित्र से आती है।' 
    }
  },
  {
    id: '건우_wood_01',
    harmony: {
      en: 'Your Wood nature finds a powerful ally in this name, establishing deep roots of strength and protection. The name’s excellent and strong qualities resonate with your capacity for patient growth, allowing your protective instincts to flourish like the vast branches of a mighty tree sheltering all beneath it.',
      ko: '당신의 목(木) 기운은 이 이름 안에서 힘과 보호의 깊은 뿌리를 내리는 강력한 동맹을 찾습니다. 이름에 담긴 뛰어나고 굳센 기운은 당신의 꾸준한 성장 능력과 공명하며, 당신의 보호 본능은 모든 것을 감싸는 거목의 가지처럼 무성하게 뻗어 나갈 것입니다.',
      ja: 'あなたの木の性質は、この名前の中に力強い味方を見つけ、強さと保護の深い根を確立します。この名前の優れた、そして強い品質は、あなたの忍耐強い成長能力と共鳴し、あなたの保護本能が、その下にすべてを保護する巨大な木の広大な枝のように繁栄することを可能にします。',
      zh: '你的木属性在这个名字中找到了一个强大的盟友，建立了力量和保护的深厚根基。这个名字的卓越和强大的品质与你耐心成长的能力产生共鸣，让你的保护本能像一棵大树的广阔枝干一样茁壮成长，庇护着它下面的一切。',
      fr: 'Votre nature Bois trouve un allié puissant dans ce nom, établissant des racines profondes de force et de protection. Les qualités excellentes et fortes du nom résonnent avec votre capacité de croissance patiente, permettant à vos instincts protecteurs de s\'épanouir comme les vastes branches d\'un arbre puissant abritant tout ce qui se trouve en dessous.',
      de: 'Ihre Holz-Natur findet in diesem Namen einen mächtigen Verbündeten, der tiefe Wurzeln der Stärke und des Schutzes schlägt. Die ausgezeichneten und starken Eigenschaften des Namens schwingen mit Ihrer Fähigkeit zu geduldigem Wachstum mit und ermöglichen es Ihren Schutzinstinkten, sich wie die riesigen Äste eines mächtigen Baumes zu entfalten, der alles unter sich schützt.',
      es: 'Tu naturaleza de Madera encuentra un poderoso aliado en este nombre, estableciendo profundas raíces de fuerza y protección. Las excelentes y fuertes cualidades del nombre resuenan con tu capacidad de crecimiento paciente, permitiendo que tus instintos protectores florezcan como las vastas ramas de un árbol poderoso que cobija todo lo que está debajo de él.',
      ru: 'Ваша природа Дерева находит в этом имени мощного союзника, создавая глубокие корни силы и защиты. Превосходные и сильные качества имени резонируют с вашей способностью к терпеливому росту, позволяя вашим защитным инстинктам процветать, подобно огромным ветвям могучего дерева, укрывающего все под собой.',
      ar: 'طبيعتك الخشبية تجد حليفًا قويًا في هذا الاسم، حيث ترسخ جذورًا عميقة للقوة والحماية. تتناغم صفات الاسم الممتازة والقوية مع قدرتك على النمو بصبر، مما يسمح لغرائزك الوقائية بالازدهار مثل الأغصان الواсعة لشجرة عظيمة تؤوي كل ما تحتها.',
      hi: 'आपकी लकड़ी की प्रकृति इस नाम में एक शक्तिशाली सहयोगी पाती है, जो ताकत और सुरक्षा की गहरी जड़ें स्थापित करती है। नाम के उत्कृष्ट और मजबूत गुण आपके रोगी विकास की क्षमता के साथ प्रतिध्वनित होते हैं, जिससे आपकी सुरक्षात्मक प्रवृत्ति एक शक्तिशाली पेड़ की विशाल शाखाओं की तरह पनपती है जो इसके नीचे सभी को आश्रय देती है।'
    }
  },
  {
    id: '지호_wood_01',
    harmony: {
      en: 'With your Wood nature, this name cultivates profound wisdom through patience and steady growth. The name’s meaning of wisdom and greatness resonates with your ability to nurture understanding, allowing your inner sage to flourish like an ancient tree offering guidance to all.',
      ko: '당신의 목(木) 기운과 함께 이 이름은 인내와 꾸준한 성장을 통해 깊은 지혜를 길러냅니다. 이름에 담긴 지혜와 위대함은 이해심을 키우는 당신의 능력과 공명하여, 모든 이에게 길잡이가 되어주는 고목처럼 당신의 내면의 현자가 번성하게 합니다.',
      ja: 'あなたの木の性質により、この名前は忍耐と着実な成長を通じて深い知恵を育みます。知恵と偉大さという意味を持つこの名前は、理解を育むあなたの能力と共鳴し、あなたの内なる賢者がすべての人に導きを与える古代の木のように繁栄することを可能にします。',
      zh: '你的木属性与这个名字相结合，通过耐心和稳定的成长培养出深刻的智慧。这个名字所蕴含的智慧和伟大的含义与你培养理解力的能力产生共鸣，让你内心的圣人像一棵为所有人提供指引的古树一样茁壮成长。',
      fr: 'Avec votre nature Bois, ce nom cultive une sagesse profonde par la patience et une croissance régulière. La signification de sagesse et de grandeur du nom résonne avec votre capacité à nourrir la compréhension, permettant à votre sage intérieur de s\'épanouir comme un arbre ancien offrant des conseils à tous.',
      de: 'Mit Ihrer Holz-Natur kultiviert dieser Name durch Geduld und stetiges Wachstum tiefgreifende Weisheit. Die Bedeutung des Namens von Weisheit und Größe schwingt mit Ihrer Fähigkeit mit, Verständnis zu fördern, und ermöglicht es Ihrem inneren Weisen, wie ein alter Baum zu gedeihen, der allen Führung bietet.',
      es: 'Con tu naturaleza de Madera, este nombre cultiva una profunda sabiduría a través de la paciencia y el crecimiento constante. El significado de sabiduría y grandeza del nombre resuena con tu capacidad para nutrir la comprensión, permitiendo que tu sabio interior florezca como un árbol antiguo que ofrece guía a todos.',
      ru: 'С вашей природой Дерева это имя развивает глубокую мудрость через терпение и постоянный рост. Значение имени, мудрость и величие, резонирует с вашей способностью развивать понимание, позволяя вашему внутреннему мудрецу процветать, подобно древнему дереву, дающему всем руководство.',
      ar: 'مع طبيعتك الخشبية، يزرع هذا الاسم حكمة عميقة من خلال الصبر والنمو المطرد. صدى معنى الاسم للحكمة والعظمة مع قدرتك على رعاية الفهم، مما يسمح لحكيمك الداخلي بالازدهار مثل شجرة قديمة تقدم التوجيه للجميع.',
      hi: 'आपके लकड़ी के स्वभाव के साथ, यह नाम धैर्य और स्थिर विकास के माध्यम से गहन ज्ञान की खेती करता है। नाम का ज्ञान और महानता का अर्थ समझने की आपकी क्षमता के साथ प्रतिध्वनित होता है, जिससे आपका आंतरिक ऋषि एक प्राचीन पेड़ की तरह पनपता है जो सभी को मार्गदर्शन प्रदान करता है।'
    }
  },
  {
    id: '재민_wood_01',
    harmony: {
      en: 'Your Wood nature perfectly embodies this name’s resilient talent, which bends but never breaks. The name’s qualities of talent and quickness resonate with your natural adaptability, allowing your abilities to flourish like bamboo—swift, flexible, and strong in all seasons.',
      ko: '당신의 목(木) 기운은 휘어질지언정 부러지지 않는 이 이름의 강인한 재능을 완벽하게 구현합니다. 이름에 담긴 재능과 민첩함은 당신의 타고난 적응력과 공명하여, 사계절 내내 빠르고 유연하며 강한 대나무처럼 당신의 능력이 만개하도록 합니다.',
      ja: 'あなたの木の性質は、この名前の回復力のある才能を完璧に具現化し、曲がることはあっても決して壊れません。才能と素早さという名前の資質は、あなたの自然な適応性と共鳴し、あなたの能力が竹のように、すべての季節で迅速、柔軟、そして強く繁栄することを可能にします。',
      zh: '你的木属性完美地体现了这名字所蕴含的坚韧天赋，它会弯曲但从不断裂。这名字的才华和敏捷的特质与你的天生适应能力产生共鸣，让你的能力像竹子一样茁壮成长——在所有季节都迅速、灵活和坚强。',
      fr: 'Votre nature Bois incarne parfaitement le talent résilient de ce nom, qui plie mais ne rompt jamais. Les qualités de talent et de rapidité du nom résonnent avec votre adaptabilité naturelle, permettant à vos capacités de s\'épanouir comme le bambou - rapide, flexible et fort en toutes saisons.',
      de: 'Ihre Holz-Natur verkörpert perfekt das widerstandsfähige Talent dieses Namens, das sich biegt, aber niemals bricht. Die Eigenschaften von Talent und Schnelligkeit des Namens schwingen mit Ihrer natürlichen Anpassungsfähigkeit mit und ermöglichen es Ihren Fähigkeiten, wie Bambus zu gedeihen – schnell, flexibel und stark zu jeder Jahreszeit.',
      es: 'Tu naturaleza de Madera encarna perfectamente el talento resistente de este nombre, que se dobla pero nunca se rompe. Las cualidades de talento y rapidez del nombre resuenan con tu adaptabilidad natural, permitiendo que tus habilidades florezcan como el bambú: rápido, flexible y fuerte en todas las estaciones.',
      ru: 'Ваша природа Дерева идеально воплощает в себе стойкий талант этого имени, который гнется, но никогда не ломается. Качества имени, талант и быстрота, резонируют с вашей природной приспособляемостью, позволяя вашим способностям процветать, подобно бамбуку — быстрому, гибкому и сильному в любое время года.',
      ar: 'طبيعتك الخشبية تجسد تمامًا موهبة هذا الاسم المرنة، التي تنحني ولكن لا تنكسر أبدًا. تتناغم صفات الاسم من الموهبة والسرعة مع قدرتك الطبيعية على التكيف، مما يسمح لقدراتك بالازدهار مثل الخيزران - سريع ومرن وقوي في جميع الفصول.',
      hi: 'आपकी लकड़ी की प्रकृति इस नाम की लचीली प्रतिभा का पूरी तरह से प्रतीक है, जो झुकती है लेकिन कभी टूटती नहीं है। नाम की प्रतिभा और फुर्ती के गुण आपकी प्राकृतिक अनुकूलन क्षमता के साथ प्रतिध्वनित होते हैं, जिससे आपकी क्षमताएं बांस की तरह पनपती हैं - सभी मौसमों में तेज, लचीली और मजबूत।'
    }
  },
  {
    id: '민성_wood_01',
    harmony: {
      en: 'Your Wood nature harmonizes with this name to foster rapid growth and a sincere heart. Your quickness of thought, combined with a sincerity of purpose, allows you to achieve success through honest effort and a natural, flowing adaptability.',
      ko: '당신의 목(木) 기운은 이 이름과 조화를 이루어 빠른 성장과 성실한 마음을 길러냅니다. 당신의 빠른 생각과 진실된 목표가 결합하여, 정직한 노력과 자연스러운 적응력을 통해 성공을 이룰 수 있게 합니다.',
      ja: 'あなたの木の性質は、この名前と調和して、急速な成長と誠実な心を育みます。あなたの思考の速さは、目的の誠実さと組み合わさって、正直な努力と自然で流れるような適応性を通じて成功を収めることを可能にします。',
      zh: '你的木属性与这个名字相协调，以促进快速成长和一颗真诚的心。你思想的敏捷性，加上目标的真诚，让你通过诚实的努力和自然的、流畅的适应性来取得成功。',
      fr: 'Votre nature Bois s\'harmonise avec ce nom pour favoriser une croissance rapide et un cœur sincère. Votre vivacité d\'esprit, combinée à une sincérité d\'intention, vous permet de réussir grâce à un effort honnête et à une adaptabilité naturelle et fluide.',
      de: 'Ihre Holz-Natur harmoniert mit diesem Namen, um schnelles Wachstum und ein aufrichtiges Herz zu fördern. Ihre Schnelligkeit im Denken, kombiniert mit einer Aufrichtigkeit des Ziels, ermöglicht es Ihnen, durch ehrliche Anstrengung und eine natürliche, fließende Anpassungsfähigkeit Erfolg zu haben.',
      es: 'Tu naturaleza de Madera armoniza con este nombre para fomentar un crecimiento rápido y un corazón sincero. Tu rapidez de pensamiento, combinada con una sinceridad de propósito, te permite alcanzar el éxito a través del esfuerzo honesto y una adaptabilidad natural y fluida.',
      ru: 'Ваша природа Дерева гармонирует с этим именем, способствуя быстрому росту и искреннему сердцу. Ваша быстрота мысли в сочетании с искренностью цели позволяет вам достигать успеха благодаря честным усилиям и естественной, плавной адаптивности.',
      ar: 'تتناغم طبيعتك الخشبية مع هذا الاسم لتعزيز النمو السريع والقلب المخلص. تسمح لك سرعة تفكيرك، جنبًا إلى جنب مع صدق الهدف، بتحقيق النجاح من خلال الجهد الصادق والقدرة على التكيف الطبيعية المتدفقة.',
      hi: 'आपकी लकड़ी की प्रकृति इस नाम के साथ तेजी से विकास और एक ईमानदार दिल को बढ़ावा देने के लिए सामंजस्य स्थापित करती है। आपकी विचार की तेज़ी, उद्देश्य की ईमानदारी के साथ मिलकर, आपको ईमानदार प्रयास और एक प्राकृतिक, बहने वाली अनुकूलन क्षमता के माध्यम से सफलता प्राप्त करने की अनुमति देती है।'
    }
  },
  {
    id: '성민_wood_01',
    harmony: {
      en: 'This name and your Wood nature create a perfect harmony of sincere growth and quick thinking. Your sincerity of heart provides deep, strong roots, while your quick thinking allows for swift and graceful adaptation to any changing circumstance.',
      ko: '이 이름과 당신의 목(木) 기운은 성실한 성장과 빠른 사고의 완벽한 조화를 이룹니다. 당신의 진실된 마음은 깊고 강한 뿌리가 되어주고, 빠른 생각은 어떤 변화하는 상황에도 신속하고 우아하게 적응할 수 있게 합니다.',
      ja: 'この名前とあなたの木の性質は、誠実な成長と迅速な思考の完璧な調和を生み出します。あなたの心の誠実さは深く強い根を提供し、あなたの迅速な思考はどんな変化する状況にも迅速かつ優雅に適応することを可能にします。',
      zh: '这个名字和你的木属性创造了真诚成长和敏捷思维的完美和谐。你内心的真诚提供了深刻、坚固的根基，而你敏捷的思维则让你能够迅速而优雅地适应任何变化的环境。',
      fr: 'Ce nom et votre nature Bois créent une harmonie parfaite entre une croissance sincère et une pensée rapide. Votre sincérité de cœur fournit des racines profondes et solides, tandis que votre pensée rapide permet une adaptation rapide et gracieuse à toute circonstance changeante.',
      de: 'Dieser Name und Ihre Holz-Natur schaffen eine perfekte Harmonie aus aufrichtigem Wachstum und schnellem Denken. Ihre Aufrichtigkeit des Herzens sorgt für tiefe, starke Wurzeln, während Ihr schnelles Denken eine schnelle und anmutige Anpassung an jede sich ändernde Situation ermöglicht.',
      es: 'Este nombre y tu naturaleza de Madera crean una armonía perfecta de crecimiento sincero y pensamiento rápido. Tu sinceridad de corazón proporciona raíces profundas y fuertes, mientras que tu pensamiento rápido permite una adaptación rápida y elegante a cualquier circunstancia cambiante.',
      ru: 'Это имя и ваша природа Дерева создают идеальную гармонию искреннего роста и быстрого мышления. Ваша искренность сердца обеспечивает глубокие, крепкие корни, в то время как ваше быстрое мышление позволяет быстро и изящно приспосабливаться к любым меняющимся обстоятельствам.',
      ar: 'هذا الاسم وطبيعتك الخشبية يخلقان انسجامًا مثاليًا للنمو الصادق والتفكير السريع. يوفر صدق قلبك جذورًا عميقة وقوية، بينما يسمح تفكيرك السريع بالتكيف السريع والرشيق مع أي ظرف متغير.',
      hi: 'यह नाम और आपकी लकड़ी की प्रकृति ईमानदार विकास और त्वरित सोच का एक आदर्श सामंजस्य बनाती है। आपके दिल की ईमानदारी गहरी, मजबूत जड़ें प्रदान करती है, जबकि आपकी त्वरित सोच किसी भी बदलती परिस्थिति में तेजी से और सुंदर अनुकूलन की अनुमति देती है।'
    }
  },
  {
    id: '민우_wood_01',
    harmony: {
      en: 'Your Wood nature and this name combine to create a character of swift growth and excellent spirit. Your quick mind and outstanding character merge to form a natural leader, capable of inspiring and achieving great things.',
      ko: '당신의 목(木) 기운과 이 이름이 만나 신속한 성장과 뛰어난 정신력을 지닌 품성을 만들어냅니다. 당신의 빠른 두뇌와 뛰어난 인품이 결합하여, 다른 이들에게 영감을 주고 위대한 일을 성취할 수 있는 타고난 리더를 형성합니다.',
      ja: 'あなたの木の性質とこの名前が組み合わさって、迅速な成長と優れた精神の性格を生み出します。あなたの素早い頭脳と卓越した人格が融合して、偉大なことを鼓舞し達成することができる自然なリーダーを形成します。',
      zh: '你的木属性和这个名字相结合，创造了一个迅速成长和卓越精神的品格。你敏捷的头脑和杰出的品格融合成一个天生的领导者，能够激励和实现伟大的事情。',
      fr: 'Votre nature Bois et ce nom se combinent pour créer un caractère de croissance rapide et d\'un excellent esprit. Votre esprit vif et votre caractère exceptionnel fusionnent pour former un leader naturel, capable d\'inspirer et d\'accomplir de grandes choses.',
      de: 'Ihre Holz-Natur und dieser Name vereinen sich zu einem Charakter von schnellem Wachstum und ausgezeichnetem Geist. Ihr schneller Verstand und Ihr herausragender Charakter verschmelzen zu einem natürlichen Führer, der in der Lage ist, große Dinge zu inspirieren und zu erreichen.',
      es: 'Tu naturaleza de Madera y este nombre se combinan para crear un carácter de crecimiento rápido y excelente espíritu. Tu mente rápida y tu carácter sobresaliente se fusionan para formar un líder natural, capaz de inspirar y lograr grandes cosas.',
      ru: 'Ваша природа Дерева и это имя в сочетании создают характер быстрого роста и превосходного духа. Ваш быстрый ум и выдающийся характер сливаются, образуя прирожденного лидера, способного вдохновлять и достигать великих свершений.',
      ar: 'تتحد طبيعتك الخشبية وهذا الاسم لخلق شخصية سريعة النمو وروح ممتازة. يندمج عقلك السريع وشخصيتك المتميزة لتشكيل قائد طبيعي قادر على إلهام وتحقيق أشياء عظيمة.',
      hi: 'आपकी लकड़ी की प्रकृति और यह नाम मिलकर तीव्र विकास और उत्कृष्ट भावना का चरित्र बनाते हैं। आपका तेज दिमाग और उत्कृष्ट चरित्र मिलकर एक प्राकृतिक नेता बनाते हैं, जो महान चीजों को प्रेरित करने और हासिल करने में सक्षम है।'
    }
  },
  {
    id: '재현_wood_01',
    harmony: {
      en: 'This name, combined with your Wood nature, fosters talented growth and a virtuous spirit. Your creative talent and virtuous character come together to manifest beautiful works that inspire and uplift all who witness them.',
      ko: '이 이름은 당신의 목(木) 기운과 결합하여 재능의 성장과 덕망 있는 정신을 길러냅니다. 당신의 창의적 재능과 고결한 품성이 만나, 보는 모든 이에게 영감을 주고 마음을 끌어올리는 아름다운 결과물들을 만들어냅니다.',
      ja: 'この名前は、あなたの木の性質と組み合わさって、才能ある成長と高潔な精神を育みます。あなたの創造的な才能と高潔な人格が一緒になって、それらを目撃するすべての人を鼓舞し、高揚させる美しい作品を明らかにします。',
      zh: '这个名字与你的木属性相结合，培养了才华的成长和高尚的精神。你的创造性才华和高尚品格相结合，体现出美丽的作品，激励和提升所有见证它们的人。',
      fr: 'Ce nom, combiné à votre nature Bois, favorise une croissance talentueuse et un esprit vertueux. Votre talent créatif et votre caractère vertueux s\'unissent pour manifester de belles œuvres qui inspirent et élèvent tous ceux qui en sont témoins.',
      de: 'Dieser Name, kombiniert mit Ihrer Holz-Natur, fördert talentiertes Wachstum und einen tugendhaften Geist. Ihr kreatives Talent und Ihr tugendhafter Charakter vereinen sich, um wunderschöne Werke zu manifestieren, die alle, die sie bezeugen, inspirieren und erheben.',
      es: 'Este nombre, combinado con tu naturaleza de Madera, fomenta un crecimiento talentoso y un espíritu virtuoso. Tu talento creativo y tu carácter virtuoso se unen para manifestar hermosas obras que inspiran y elevan a todos los que las presencian.',
      ru: 'Это имя в сочетании с вашей природой Дерева способствует талантливому росту и добродетельному духу. Ваш творческий талант и добродетельный характер объединяются, чтобы явить прекрасные произведения, которые вдохновляют и возвышают всех, кто их видит.',
      ar: 'هذا الاسم، مع طبيعتك الخشبية، يعزز النمو الموهوب والروح الفاضلة. تجتمع موهبتك الإبداعية وشخصيتك الفاضلة معًا لإظهار أعمال جميلة تلهم وترفع كل من يشهدها.',
      hi: 'यह नाम, आपकी लकड़ी की प्रकृति के साथ मिलकर, प्रतिभाशाली विकास और एक गुणी आत्मा को बढ़ावा देता है। आपकी रचनात्मक प्रतिभा और गुणी चरित्र एक साथ मिलकर सुंदर कार्यों को प्रकट करते हैं जो उन्हें देखने वाले सभी को प्रेरित और उत्साहित करते हैं।'
    }
  },
  {
    id: '지우_wood_01',
    harmony: {
      en: 'Your Wood nature finds a perfect match in this name, creating a character of wise growth and a gentle spirit. Your wisdom and understanding, combined with a gentle strength, allow you to nurture growth and awakening in those around you.',
      ko: '당신의 목(木) 기운은 이 이름에서 완벽한 짝을 찾아, 지혜로운 성장과 온화한 정신을 지닌 품성을 만들어냅니다. 당신의 지혜와 이해심이 부드러운 힘과 결합하여, 주변 사람들의 성장과 깨달음을 촉진시킬 수 있게 합니다.',
      ja: 'あなたの木の性質は、この名前に完璧にマッチし、賢明な成長と穏やかな精神の性格を生み出します。あなたの知恵と理解は、穏やかな強さと組み合わさって、あなたの周りの人々の成長と目覚めを育むことを可能にします。',
      zh: '你的木属性在这个名字中找到了完美的匹配，创造了一个智慧成长和温柔精神的品格。你的智慧和理解，加上温柔的力量，让你能够培养周围人的成长和觉醒。',
      fr: 'Votre nature Bois trouve une correspondance parfaite dans ce nom, créant un caractère de croissance sage et d\'un esprit doux. Votre sagesse et votre compréhension, combinées à une force douce, vous permettent de nourrir la croissance et l\'éveil de ceux qui vous entourent.',
      de: 'Ihre Holz-Natur findet in diesem Namen eine perfekte Entsprechung und schafft einen Charakter von weisem Wachstum und sanftem Geist. Ihre Weisheit und Ihr Verständnis, kombiniert mit einer sanften Stärke, ermöglichen es Ihnen, Wachstum und Erwachen bei Ihren Mitmenschen zu fördern.',
      es: 'Tu naturaleza de Madera encuentra una pareja perfecta en este nombre, creando un carácter de crecimiento sabio y un espíritu gentil. Tu sabiduría y comprensión, combinadas con una fuerza suave, te permiten nutrir el crecimiento y el despertar en quienes te rodean.',
      ru: 'Ваша природа Дерева находит в этом имени идеальное соответствие, создавая характер мудрого роста и нежного духа. Ваша мудрость и понимание в сочетании с мягкой силой позволяют вам питать рост и пробуждение в окружающих.',
      ar: 'تجد طبيعتك الخشبية تطابقًا مثاليًا في هذا الاسم، مما يخلق شخصية ذات نمو حكيم وروح لطيفة. تسمح لك حكمتك وفهمك، جنبًا إلى جنب مع القوة اللطيفة، برعاية النمو واليقظة لدى من حولك.',
      hi: 'आपकी लकड़ी की प्रकृति इस नाम में एक आदर्श मेल पाती है, जो बुद्धिमान विकास और एक सौम्य आत्मा का चरित्र बनाती है। आपकी बुद्धि और समझ, एक सौम्य शक्ति के साथ मिलकर, आपको अपने आस-पास के लोगों में विकास और जागृति का पोषण करने की अनुमति देती है।'
    }
  },
  {
    id: '건희_wood_01',
    harmony: {
      en: 'This name and your Wood nature create a character of strong growth and a bright, hopeful spirit. Your strength of character and bright optimism combine to form a natural leader who illuminates the path and guides others forward.',
      ko: '이 이름과 당신의 목(木) 기운은 강한 성장력과 밝고 희망찬 정신을 지닌 품성을 만들어냅니다. 당신의 굳센 성품과 밝은 긍정이 결합하여, 앞길을 비추고 다른 사람들을 이끌어주는 타고난 리더를 형성합니다.',
      ja: 'この名前とあなたの木の性質は、力強い成長と明るく希望に満ちた精神の性格を生み出します。あなたの性格の強さと明るい楽観主義が組み合わさって、道を照らし、他の人を前進させる自然なリーダーを形成します。',
      zh: '这个名字和你的木属性创造了一个强劲成长和光明、充满希望的精神的品格。你的品格力量和光明的乐观主义相结合，形成一个天生的领导者，照亮道路并引导他人前进。',
      fr: 'Ce nom et votre nature Bois créent un caractère de forte croissance et un esprit brillant et plein d\'espoir. Votre force de caractère et votre optimisme éclatant se combinent pour former un leader naturel qui illumine le chemin et guide les autres vers l\'avant.',
      de: 'Dieser Name und Ihre Holz-Natur schaffen einen Charakter von starkem Wachstum und einem hellen, hoffnungsvollen Geist. Ihre Charakterstärke und Ihr strahlender Optimismus vereinen sich zu einem natürlichen Führer, der den Weg erleuchtet und andere vorwärts führt.',
      es: 'Este nombre y tu naturaleza de Madera crean un carácter de fuerte crecimiento y un espíritu brillante y esperanzado. Tu fuerza de carácter y tu brillante optimismo se combinan para formar un líder natural que ilumina el camino y guía a otros hacia adelante.',
      ru: 'Это имя и ваша природа Дерева создают характер сильного роста и светлого, полного надежд духа. Ваша сила характера и светлый оптимизм в сочетании образуют прирожденного лидера, который освещает путь и ведет других вперед.',
      ar: 'هذا الاسم وطبيعتك الخشبية يخلقان شخصية ذات نمو قوي وروح مشرقة ومتفائلة. تتحد قوة شخصيتك وتفاؤلك المشرق لتشكيل قائد طبيعي ينير الطريق ويوجه الآخرين إلى الأمام.',
      hi: 'यह नाम और आपकी लकड़ी की प्रकृति मजबूत विकास और एक उज्ज्वल, आशावादी भावना का चरित्र बनाती है। आपके चरित्र की ताकत और उज्ज्वल आशावाद मिलकर एक प्राकृतिक नेता बनाते हैं जो मार्ग को रोशन करता है और दूसरों को आगे बढ़ाता है।'
    }
  },
  {
    id: '민재_wood_01',
    harmony: {
      en: 'With your Wood nature, this name fosters swift growth and a talented spirit. Your quick mind flows like a powerful stream, naturally and gracefully finding its way through any obstacle that lies in your path.',
      ko: '당신의 목(木) 기운과 함께, 이 이름은 신속한 성장과 재능 있는 정신을 길러냅니다. 당신의 빠른 두뇌는 강력한 물줄기처럼 흘러, 앞을 가로막는 어떤 장애물도 자연스럽고 우아하게 통과하여 자신의 길을 찾아냅니다.',
      ja: 'あなたの木の性質で、この名前は迅速な成長と才能ある精神を育みます。あなたの素早い心は力強い流れのように流れ、あなたの道にあるどんな障害物も自然かつ優雅に通り抜けていきます。',
      zh: '你的木属性与这个名字相结合，培养了迅速的成长和才华横溢的精神。你敏捷的头脑像一股强大的溪流一样流动，自然而优雅地穿过你道路上的任何障碍。',
      fr: 'Avec votre nature Bois, ce nom favorise une croissance rapide et un esprit talentueux. Votre esprit vif coule comme un courant puissant, trouvant naturellement et gracieusement son chemin à travers tout obstacle qui se trouve sur votre chemin.',
      de: 'Mit Ihrer Holz-Natur fördert dieser Name schnelles Wachstum und einen talentierten Geist. Ihr schneller Verstand fließt wie ein mächtiger Strom und findet auf natürliche und anmutige Weise seinen Weg durch jedes Hindernis, das sich Ihnen in den Weg stellt.',
      es: 'Con tu naturaleza de Madera, este nombre fomenta un crecimiento rápido y un espíritu talentoso. Tu mente rápida fluye como una corriente poderosa, encontrando su camino de forma natural y elegante a través de cualquier obstáculo que se interponga en tu camino.',
      ru: 'С вашей природой Дерева это имя способствует быстрому росту и талантливому духу. Ваш быстрый ум течет, как мощный поток, естественно и изящно находя свой путь через любое препятствие, которое лежит на вашем пути.',
      ar: 'مع طبيعتك الخشبية، يعزز هذا الاسم النمو السريع والروح الموهوبة. يتدفق عقلك السريع مثل تيار قوي، يجد طريقه بشكل طبيعي ورشيق عبر أي عقبة تقع في طريقك.',
      hi: 'आपकी लकड़ी की प्रकृति के साथ, यह नाम तेजी से विकास और एक प्रतिभाशाली आत्मा को बढ़ावा देता है। आपका तेज दिमाग एक शक्तिशाली धारा की तरह बहता है, जो आपके रास्ते में आने वाली किसी भी बाधा के माध्यम से स्वाभाविक रूप से और शान से अपना रास्ता खोजता है।'
    }
  },
  {
    id: '현민_wood_01',
    harmony: {
      en: 'Your Wood nature harmonizes with this name to create a character of virtuous growth and quick thinking. Your virtuous character provides deep moral roots, while your quick thinking enables swift, righteous, and decisive action in all situations.',
      ko: '당신의 목(木) 기운은 이 이름과 조화를 이루어 덕망 있는 성장과 빠른 사고를 지닌 품성을 만들어냅니다. 당신의 고결한 품성은 깊은 도덕적 뿌리를 제공하고, 빠른 생각은 모든 상황에서 신속하고 의로우며 결단력 있는 행동을 가능하게 합니다.',
      ja: 'あなたの木の性質は、この名前と調和して、高潔な成長と迅速な思考の性格を生み出します。あなたの高潔な性格は深い道徳的根源を提供し、あなたの迅速な思考はすべての状況で迅速、正義、そして決定的な行動を可能にします。',
      zh: '你的木属性与这个名字相协调，创造了一个品德高尚、思维敏捷的品格。你高尚的品格提供了深刻的道德根基，而你敏捷的思维则使你在所有情况下都能迅速、正义和果断地采取行动。',
      fr: 'Votre nature Bois s\'harmonise avec ce nom pour créer un caractère de croissance vertueuse et de pensée rapide. Votre caractère vertueux fournit des racines morales profondes, tandis que votre pensée rapide permet une action rapide, juste et décisive en toutes situations.',
      de: 'Ihre Holz-Natur harmoniert mit diesem Namen, um einen Charakter von tugendhaftem Wachstum und schnellem Denken zu schaffen. Ihr tugendhafter Charakter sorgt für tiefe moralische Wurzeln, während Ihr schnelles Denken schnelles, rechtschaffenes und entschlossenes Handeln in allen Situationen ermöglicht.',
      es: 'Tu naturaleza de Madera armoniza con este nombre para crear un carácter de crecimiento virtuoso y pensamiento rápido. Tu carácter virtuoso proporciona profundas raíces morales, mientras que tu pensamiento rápido permite una acción rápida, justa y decisiva en todas las situaciones.',
      ru: 'Ваша природа Дерева гармонирует с этим именем, создавая характер добродетельного роста и быстрого мышления. Ваш добродетельный характер обеспечивает глубокие моральные корни, в то время как ваше быстрое мышление позволяет быстро, праведно и решительно действовать в любых ситуациях.',
      ar: 'تتناغم طبيعتك الخشبية مع هذا الاسم لخلق شخصية ذات نمو فاضل وتفكير سريع. توفر شخصيتك الفاضلة جذورًا أخلاقية عميقة، بينما يتيح تفكيرك السريع اتخاذ إجراءات سريعة وصالحة وحاسمة في جميع المواقف.',
      hi: 'आपकी लकड़ी की प्रकृति इस नाम के साथ एक गुणी विकास और त्वरित सोच का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। आपका गुणी चरित्र गहरी नैतिक जड़ें प्रदान करता है, जबकि आपकी त्वरित सोच सभी स्थितियों में तेज, धर्मी और निर्णायक कार्रवाई को सक्षम बनाती है।'
    }
  },
  {
    id: '지성_wood_01',
    harmony: {
      en: 'This name and your Wood nature create a character of wise growth and a sincere spirit. Your profound wisdom, combined with sincere practice, creates a deep knowledge rooted in honest, persistent effort, like an ancient, respected tree.',
      ko: '이 이름과 당신의 목(木) 기운은 지혜로운 성장과 성실한 정신을 지닌 품성을 만들어냅니다. 당신의 깊은 지혜가 성실한 실천과 결합하여, 오래되고 존경받는 나무처럼 정직하고 끈기 있는 노력에 뿌리를 둔 깊은 지식을 창조합니다.',
      ja: 'この名前とあなたの木の性質は、賢明な成長と誠実な精神の性格を生み出します。あなたの深い知恵は、誠実な実践と組み合わさって、古代の尊敬される木のように、正直で粘り強い努力に根ざした深い知識を生み出します。',
      zh: '这个名字和你的木属性创造了一个智慧成长和真诚精神的品格。你深刻的智慧，加上真诚的实践，创造了植根于诚实、不懈努力的深厚知识，就像一棵古老、受人尊敬的树。',
      fr: 'Ce nom et votre nature Bois créent un caractère de croissance sage et d\'un esprit sincère. Votre profonde sagesse, combinée à une pratique sincère, crée une connaissance profonde enracinée dans un effort honnête et persistant, comme un arbre ancien et respecté.',
      de: 'Dieser Name und Ihre Holz-Natur schaffen einen Charakter von weisem Wachstum und aufrichtigem Geist. Ihre tiefgreifende Weisheit, kombiniert mit aufrichtiger Praxis, schafft ein tiefes Wissen, das in ehrlicher, beharrlicher Anstrengung verwurzelt ist, wie ein alter, angesehener Baum.',
      es: 'Este nombre y tu naturaleza de Madera crean un carácter de crecimiento sabio y un espíritu sincero. Tu profunda sabiduría, combinada con una práctica sincera, crea un conocimiento profundo arraigado en un esfuerzo honesto y persistente, como un árbol antiguo y respetado.',
      ru: 'Это имя и ваша природа Дерева создают характер мудрого роста и искреннего духа. Ваша глубокая мудрость в сочетании с искренней практикой создает глубокие знания, основанные на честных, настойчивых усилиях, подобно древнему, уважаемому дереву.',
      ar: 'هذا الاسم وطبيعتك الخشبية يخلقان شخصية ذات نمو حكيم وروح مخلصة. حكمتك العميقة، جنبًا إلى جنب مع الممارسة المخلصة، تخلق معرفة عميقة متجذرة في جهد صادق ومثابر، مثل شجرة قديمة محترمة.',
      hi: 'यह नाम और आपकी लकड़ी की प्रकृति बुद्धिमान विकास और एक ईमानदार आत्मा का चरित्र बनाती है। आपकी गहरी बुद्धि, ईमानदार अभ्यास के साथ मिलकर, एक प्राचीन, सम्मानित पेड़ की तरह, ईमानदार, लगातार प्रयास में निहित एक गहरा ज्ञान बनाती है।'
    }
  },
  {
    id: '민기_wood_01',
    harmony: {
      en: 'Your Wood nature harmonizes with this name to create a character of quick growth and an energetic spirit. Your quick mind moves like a vibrant wind through spring leaves, bringing life, freshness, and movement to everything you touch.',
      ko: '당신의 목(木) 기운은 이 이름과 조화를 이루어 빠른 성장과 활기찬 정신을 지닌 품성을 만들어냅니다. 당신의 빠른 두뇌는 봄의 나뭇잎 사이를 스치는 활기찬 바람처럼 움직여, 당신이 닿는 모든 것에 생명, 신선함, 그리고 움직임을 가져다줍니다.',
      ja: 'あなたの木の性質は、この名前と調和して、迅速な成長とエネルギッシュな精神の性格を生み出します。あなたの素早い心は、春の葉を通る活気に満ちた風のように動き、あなたが触れるすべてのものに生命、新鮮さ、そして動きをもたらします。',
      zh: '你的木属性与这个名字相协调，创造了一个快速成长和充满活力的精神的品格。你敏捷的头脑像一阵充满活力的风穿过春天的树叶一样移动，为你接触到的一切带来生命、新鲜感和动感。',
      fr: 'Votre nature Bois s\'harmonise avec ce nom pour créer un caractère de croissance rapide et un esprit énergique. Votre esprit vif se déplace comme un vent vibrant à travers les feuilles de printemps, apportant vie, fraîcheur et mouvement à tout ce que vous touchez.',
      de: 'Ihre Holz-Natur harmoniert mit diesem Namen, um einen Charakter von schnellem Wachstum und einem energiegeladenen Geist zu schaffen. Ihr schneller Verstand bewegt sich wie ein lebhafter Wind durch Frühlingsblätter und bringt Leben, Frische und Bewegung in alles, was Sie berühren.',
      es: 'Tu naturaleza de Madera armoniza con este nombre para crear un carácter de crecimiento rápido y un espíritu enérgico. Tu mente rápida se mueve como un viento vibrante a través de las hojas de primavera, trayendo vida, frescura y movimiento a todo lo que tocas.',
      ru: 'Ваша природа Дерева гармонирует с этим именем, создавая характер быстрого роста и энергичного духа. Ваш быстрый ум движется, как живой ветер сквозь весенние листья, принося жизнь, свежесть и движение всему, к чему вы прикасаетесь.',
      ar: 'تتناغم طبيعتك الخشبية مع هذا الاسم لخلق شخصية سريعة النمو وروح نشطة. يتحرك عقلك السريع مثل رياح نابضة بالحياة عبر أوراق الربيع، مما يجلب الحياة والنضارة والحركة لكل ما تلمسه.',
      hi: 'आपकी लकड़ी की प्रकृति इस नाम के साथ तेजी से विकास और एक ऊर्जावान आत्मा का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। आपका तेज दिमाग वसंत के पत्तों के माध्यम से एक जीवंत हवा की तरह चलता है, जो आपके द्वारा छुई गई हर चीज में जीवन, ताजगी और गति लाता है।'
    }
  },
  {
    id: '재우_wood_01',
    harmony: {
      en: 'With your Wood nature, this name fosters talented growth and an excellent spirit. These qualities align perfectly with your natural abilities, creating a harmonious path for growth and positive character development, like a well-nurtured tree bearing fruit.',
      ko: '당신의 목(木) 기운과 함께, 이 이름은 재능 있는 성장과 뛰어난 정신을 길러냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 잘 가꾸어진 나무가 열매를 맺듯 조화로운 성장의 길과 긍정적인 인격 발전을 이끌어냅니다.',
      ja: 'あなたの木の性質で、この名前は才能ある成長と優れた精神を育みます。これらの資質はあなたの自然な能力と完全に一致し、実を結ぶよく育てられた木のように、成長と前向きな人格形成のための調和のとれた道を作り出します。',
      zh: '你的木属性与这个名字相结合，培养了才华的成长和卓越的精神。这些品质与你的天生能力完美契合，为成长和积极的品格发展创造了一条和谐的道路，就像一棵精心培育的树结出果实一样。',
      fr: 'Avec votre nature Bois, ce nom favorise une croissance talentueuse et un excellent esprit. Ces qualities s\'alignent parfaitement avec vos capacités naturelles, créant un chemin harmonieux pour la croissance et le développement d\'un caractère positif, comme un arbre bien nourri portant des fruits.',
      de: 'Mit Ihrer Holz-Natur fördert dieser Name talentiertes Wachstum und einen ausgezeichneten Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und schaffen einen harmonischen Weg für Wachstum und positive Charakterentwicklung, wie ein gut gepflegter Baum, der Früchte trägt.',
      es: 'Con tu naturaleza de Madera, este nombre fomenta un crecimiento talentoso y un espíritu excelente. Estas cualidades se alinean perfectamente con tus habilidades naturales, creando un camino armonioso para el crecimiento y el desarrollo positivo del carácter, como un árbol bien nutrido que da frutos.',
      ru: 'С вашей природой Дерева это имя способствует талантливому росту и превосходному духу. Эти качества идеально сочетаются с вашими природными способностями, создавая гармоничный путь для роста и позитивного развития характера, подобно хорошо ухоженному дереву, приносящему плоды.',
      ar: 'مع طبيعتك الخشبية، يعزز هذا الاسم النمو الموهوب والروح الممتازة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يخلق مسارًا متناغمًا للنمو وتنمية الشخصية الإيجابية، مثل شجرة يتم رعايتها جيدًا وتؤتي ثمارها.',
      hi: 'आपकी लकड़ी की प्रकृति के साथ, यह नाम प्रतिभाशाली विकास और एक उत्कृष्ट आत्मा को बढ़ावा देता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो विकास और सकारात्मक चरित्र विकास के लिए एक सामंजस्यपूर्ण मार्ग बनाते हैं, जैसे एक अच्छी तरह से पोषित पेड़ फल देता है।'
    }
  },
  {
    id: '태형_wood_01',
    harmony: {
      en: 'Your Wood nature harmonizes perfectly with this name, embodying the spirit of victorious and grand growth. The name’s meaning of triumph aligns with your innate ability to overcome challenges and inspire others, leading to a tall, magnificent, and respected success.',
      ko: '당신의 목(木) 기운은 이 이름과 완벽하게 조화를 이루며, 승리에 찬 웅장한 성장의 정신을 구현합니다. 이름에 담긴 승리의 의미는 도전을 극복하고 다른 이들에게 영감을 주는 당신의 타고난 능력과 일치하며, 높고 웅장하며 존경받는 성공으로 이어집니다.',
      ja: 'あなたの木の性質は、この名前と完全に調和し、勝利に満ちた壮大な成長の精神を具現化します。名前の勝利という意味は、挑戦を克服し、他の人を鼓舞するあなたの生来の能力と一致し、高く、壮大で、尊敬される成功につながります。',
      zh: '你的木属性与这个名字完美协调，体现了胜利和宏伟成长的精神。这个名字的胜利含义与你克服挑战和激励他人的天生能力相一致，从而带来崇高、宏伟和受人尊敬的成功。',
      fr: 'Votre nature Bois s\'harmonise parfaitement avec ce nom, incarnant l\'esprit de croissance victorieuse et grandiose. Le sens du nom de triomphe s\'aligne sur votre capacité innée à surmonter les défis et à inspirer les autres, conduisant à un succès grand, magnifique et respecté.',
      de: 'Ihre Holz-Natur harmoniert perfekt mit diesem Namen und verkörpert den Geist des siegreichen und großen Wachstums. Die Bedeutung des Namens des Triumphs stimmt mit Ihrer angeborenen Fähigkeit überein, Herausforderungen zu meistern und andere zu inspirieren, was zu einem großen, großartigen und angesehenen Erfolg führt.',
      es: 'Tu naturaleza de Madera armoniza perfectamente con este nombre, encarnando el espíritu de un crecimiento victorioso y grandioso. El significado de triunfo del nombre se alinea con tu habilidad innata para superar desafíos e inspirar a otros, lo que lleva a un éxito alto, magnífico y respetado.',
      ru: 'Ваша природа Дерева идеально гармонирует с этим именем, воплощая дух победоносного и грандиозного роста. Значение имени триумф совпадает с вашей врожденной способностью преодолевать трудности и вдохновлять других, что ведет к высокому, великолепному и уважаемому успеху.',
      ar: 'تتناغم طبيعتك الخشبية تمامًا مع هذا الاسم، مجسدة روح النمو المنتصر والعظيم. يتماشى معنى الاسم المتمثل في الانتصار مع قدرتك الفطرية على التغلب على التحديات وإلهام الآخرين، مما يؤدي إلى نجاح طويل ورائع ومحترم.',
      hi: 'आपकी लकड़ी की प्रकृति इस नाम के साथ पूरी तरह से सामंजस्य स्थापित करती है, जो विजयी और भव्य विकास की भावना का प्रतीक है। नाम का विजय का अर्थ चुनौतियों को दूर करने और दूसरों को प्रेरित करने की आपकी जन्मजात क्षमता के साथ संरेखित करता है, जिससे एक लंबी, शानदार और सम्मानित सफलता मिलती है।'
    }
  },
  {
    id: '남준_wood_01',
    harmony: {
      en: 'Your Wood nature finds perfect harmony with this name, as the warmth of the south encourages your talented growth. The name’s meaning aligns with your natural ability to nurture and flourish, creating supportive and prosperous environments where everyone can thrive.',
      ko: '당신의 목(木) 기운은 이 이름과 완벽한 조화를 이루며, 남쪽의 따스함이 당신의 재능 있는 성장을 북돋웁니다. 이름의 의미는 양육하고 번성하는 당신의 타고난 능력과 일치하여, 모든 사람이 함께 번창할 수 있는 지원적이고 풍요로운 환경을 조성합니다.',
      ja: 'あなたの木の性質は、南の暖かさがあなたの才能ある成長を促すので、この名前と完璧な調和を見出します。名前の意味は、育み、繁栄するあなたの自然な能力と一致し、誰もが繁栄できる支援的で繁栄した環境を作り出します。',
      zh: '你的木属性在这个名字中找到了完美的和谐，因为南方的温暖鼓励你才华横溢的成长。这个名字的含义与你培养和繁荣的自然能力相一致，创造了支持性和繁荣的环境，让每个人都能茁壮成长。',
      fr: 'Votre nature Bois trouve une harmonie parfaite avec ce nom, car la chaleur du sud encourage votre croissance talentueuse. La signification du nom s\'aligne sur votre capacité naturelle à nourrir et à vous épanouir, créant des environnements favorables et prospères où chacun peut s\'épanouir.',
      de: 'Ihre Holz-Natur findet perfekte Harmonie mit diesem Namen, da die Wärme des Südens Ihr talentiertes Wachstum fördert. Die Bedeutung des Namens stimmt mit Ihrer natürlichen Fähigkeit überein, zu nähren und zu gedeihen, und schafft unterstützende und wohlhabende Umgebungen, in denen jeder gedeihen kann.',
      es: 'Tu naturaleza de Madera encuentra una armonía perfecta con este nombre, ya que la calidez del sur fomenta tu crecimiento talentoso. El significado del nombre se alinea con tu habilidad natural para nutrir y florecer, creando ambientes de apoyo y prósperos donde todos pueden prosperar.',
      ru: 'Ваша природа Дерева находит идеальную гармонию с этим именем, поскольку тепло юга способствует вашему талантливому росту. Значение имени совпадает с вашей природной способностью лелеять и процветать, создавая благоприятную и процветающую среду, в которой каждый может процветать.',
      ar: 'تجد طبيعتك الخشبية انسجامًا تامًا مع هذا الاسم، حيث يشجع دفء الجنوب نموك الموهوب. يتماشى معنى الاسم مع قدرتك الطبيعية على الرعاية والازدهار، مما يخلق بيئات داعمة ومزدهرة حيث يمكن للجميع أن يزدهر.',
      hi: 'आपकी लकड़ी की प्रकृति इस नाम के साथ पूर्ण सामंजस्य पाती है, क्योंकि दक्षिण की गर्मी आपके प्रतिभाशाली विकास को प्रोत्साहित करती है। नाम का अर्थ पोषण और फलने-फूलने की आपकी प्राकृतिक क्षमता के साथ संरेखित होता है, सहायक और समृद्ध वातावरण बनाता है जहाँ हर कोई पनप सकता है।'
    }
  },
  {
    id: '윤기_wood_01',
    harmony: {
      en: 'With your Wood nature, this name creates a character of prosperous growth from a solid, shining foundation. These qualities align perfectly with your natural abilities, creating a path for harmonious growth and positive, radiant character development.',
      ko: '당신의 목(木) 기운으로, 이 이름은 단단하고 빛나는 기반에서 비롯된 번영하는 성장의 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 긍정적이고 빛나는 인격 발전을 위한 길을 열어줍니다.',
      ja: 'あなたの木の性質で、この名前は、堅固で輝く基盤からの繁栄した成長の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と前向きで輝く人格形成への道を作り出します。',
      zh: '你的木属性与这个名字相结合，从坚实、闪亮的基础上创造了一个繁荣成长的品格。这些品质与你的天生能力完美契合，为和谐成长和积极、容光焕发的品格发展创造了一条道路。',
      fr: 'Avec votre nature Bois, ce nom crée un caractère de croissance prospère à partir d\'une base solide et brillante. Ces qualités s\'alignent perfectly with your natural abilities, creating a path for harmonious growth and positive, radiant character development.',
      de: 'Mit Ihrer Holz-Natur schafft dieser Name einen Charakter von prosperierendem Wachstum auf einer soliden, glänzenden Grundlage. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und schaffen einen Weg für harmonisches Wachstum und eine positive, strahlende Charakterentwicklung.',
      es: 'Con tu naturaleza de Madera, este nombre crea un carácter de crecimiento próspero a partir de una base sólida y brillante. Estas cualidades se alinean perfectamente con tus habilidades naturales, creando un camino para el crecimiento armonioso y el desarrollo de un carácter positivo y radiante.',
      ru: 'С вашей природой Дерева это имя создает характер процветающего роста на прочном, сияющем фундаменте. Эти качества идеально сочетаются с вашими природными способностями, создавая путь для гармоничного роста и позитивного, сияющего развития характера.',
      ar: 'مع طبيعتك الخشبية، يخلق هذا الاسم شخصية من النمو المزدهر من أساس متين ومشرق. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يخلق مسارًا للنمو المتناغم وتنمية الشخصية الإيجابية والمشرقة.',
      hi: 'आपकी लकड़ी की प्रकृति के साथ, यह नाम एक ठोस, चमकते हुए आधार से समृद्ध विकास का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और सकारात्मक, उज्ज्वल चरित्र विकास के लिए एक मार्ग बनाते हैं।'
    }
  },
  {
    id: '서연_wood_01',
    harmony: {
      en: 'Your destiny is to weave auspicious and beautiful connections that strengthen entire communities. Like the hidden root network that nourishes a forest, you create bonds of support and prosperity for all who are touched by your harmonious and graceful spirit.',
      ko: '당신의 운명은 공동체 전체를 강화하는 상서롭고 아름다운 인연을 엮어내는 것입니다. 숲을 키우는 보이지 않는 뿌리처럼, 당신은 당신의 조화롭고 우아한 정신에 닿는 모든 이들을 위해 지지와 번영의 유대를 만들어냅니다.',
      ja: 'あなたの運命は、コミュニティ全体を強化する縁起の良い美しいつながりを織りなすことです。森を養う隠れた根のネットワークのように、あなたはあなたの調和のとれた優雅な精神に触れるすべての人々のために、支援と繁栄の絆を築きます。',
      zh: '你的命运是编织吉祥而美丽的联系，以加强整个社区。就像滋养森林的隐藏根系网络一样，你为你和谐而优雅的精神所触及的所有人创造了支持和繁荣的纽带。',
      fr: 'Votre destin est de tisser des liens auspicieux et magnifiques qui renforcent des communautés entières. Comme le réseau de racines cachées qui nourrit une forêt, vous créez des liens de soutien et de prospérité pour tous ceux qui sont touchés par votre esprit harmonieux et gracieux.',
      de: 'Ihr Schicksal ist es, glückverheißende und schöne Verbindungen zu knüpfen, die ganze Gemeinschaften stärken. Wie das verborgene Wurzelnetzwerk, das einen Wald nährt, schaffen Sie Bande der Unterstützung und des Wohlstands für alle, die von Ihrem harmonischen und anmutigen Geist berührt werden.',
      es: 'Tu destino es tejer conexiones auspiciosas y hermosas que fortalezcan a comunidades enteras. Como la red de raíces ocultas que nutre un bosque, creas lazos de apoyo y prosperidad para todos los que son tocados por tu espíritu armonioso y elegante.',
      ru: 'Ваша судьба - плести благоприятные и прекрасные связи, которые укрепляют целые сообщества. Подобно скрытой корневой сети, которая питает лес, вы создаете узы поддержки и процветания для всех, кого коснется ваш гармоничный и изящный дух.',
      ar: 'قدرك هو نسج روابط ميمونة وجميلة تقوي مجتمعات بأكملها. مثل شبكة الجذر الخفية التي تغذي الغابة، فإنك تخلق روابط دعم وازدهار لجميع من يلمسهم روحك المتناغمة والرشيقة.',
      hi: 'आपका भाग्य शुभ और सुंदर संबंध बनाना है जो पूरे समुदायों को मजबूत करता है। एक जंगल को पोषण देने वाले छिपे हुए जड़ नेटवर्क की तरह, आप उन सभी के लिए समर्थन और समृद्धि के बंधन बनाते हैं जो आपकी सामंजस्यपूर्ण और सुंदर आत्मा से प्रभावित होते हैं।'
    }
  },
  {
    id: '채원_wood_01',
    harmony: {
      en: 'Your destiny blooms with the beauty of a diverse, colorful garden, where every talent contributes to a magnificent whole. Like a master gardener who creates harmony from variety, you bring together different gifts to create spectacular and natural abundance.',
      ko: '당신의 운명은 다채로운 정원의 아름다움 속에서 피어납니다. 그곳에서는 모든 재능이 하나의 장엄한 전체를 이룹니다. 다양함 속에서 조화를 창조하는 정원사처럼, 당신은 각기 다른 재능들을 모아 화려하고 자연스러운 풍요를 만들어냅니다.',
      ja: 'あなたの運命は、多様でカラフルな庭園の美しさで開花し、そこではすべての才能が壮大な全体に貢献します。多様性から調和を生み出すマスターガーデナーのように、あなたはさまざまな才能を結集して、壮観で自然な豊かさを生み出します。',
      zh: '你的命运在多样化、色彩缤纷的花园的美景中绽放，在那里，每一种才能都为一个宏伟的整体做出贡献。就像一位从多样性中创造和谐的园艺大师一样，你汇集不同的天赋，创造出壮观而自然的丰饶。',
      fr: 'Votre destin s\'épanouit avec la beauté d\'un jardin diversifié et coloré, où chaque talent contribue à un ensemble magnifique. Tel un maître jardinier qui crée l\'harmonie à partir de la variété, vous rassemblez différents dons pour créer une abondance spectaculaire et naturelle.',
      de: 'Ihr Schicksal erblüht in der Schönheit eines vielfältigen, farbenfrohen Gartens, in dem jedes Talent zu einem großartigen Ganzen beiträgt. Wie ein Gärtnermeister, der aus Vielfalt Harmonie schafft, bringen Sie verschiedene Gaben zusammen, um eine spektakuläre und natürliche Fülle zu schaffen.',
      es: 'Tu destino florece con la belleza de un jardín diverso y colorido, donde cada talento contribuye a un todo magnífico. Como un maestro jardinero que crea armonía a partir de la variedad, reúnes diferentes dones para crear una abundancia espectacular y natural.',
      ru: 'Ваша судьба расцветает красотой разнообразного, красочного сада, где каждый талант вносит свой вклад в великолепное целое. Подобно искусному садовнику, который создает гармонию из разнообразия, вы объединяете разные дары, чтобы создать впечатляющее и естественное изобилие.',
      ar: 'يزدهر مصيرك بجمال حديقة متنوعة وملونة، حيث تساهم كل موهبة في تكوين كل رائع. مثل بستاني محترف يخلق الانسجام من التنوع، فإنك تجمع مواهب مختلفة لخلق وفرة مذهلة وطبيعية.',
      hi: 'आपका भाग्य एक विविध, रंगीन बगीचे की सुंदरता के साथ खिलता है, जहाँ हर प्रतिभा एक शानदार पूरे में योगदान करती है। एक मास्टर माली की तरह जो विविधता से सद्भाव बनाता है, आप शानदार और प्राकृतिक प्रचुरता बनाने के लिए विभिन्न उपहारों को एक साथ लाते हैं।'
    }
  },
  {
    id: '지유_wood_01',
    harmony: {
      en: 'Your wisdom grows from gentle nurturing and patient understanding, blessed with the ability to cultivate abundant growth in others. Like rich earth that knows exactly what each seed needs, you provide the perfect conditions for potential to flourish into reality.',
      ko: '당신의 지혜는 부드러운 보살핌과 끈기 있는 이해 속에서 자라나며, 다른 이들의 풍요로운 성장을 이끌어내는 능력의 축복을 받았습니다. 각 씨앗에 무엇이 필요한지 정확히 아는 비옥한 땅처럼, 당신은 잠재력이 현실로 피어날 완벽한 조건을 제공합니다.',
      ja: 'あなたの知恵は、穏やかな育成と忍耐強い理解から成長し、他の人の豊かな成長を育む能力に恵まれています。それぞれの種が必要とするものを正確に知っている豊かな大地のように、あなたは可能性が現実へと開花するための完璧な条件を提供します。',
      zh: '你的智慧源于温柔的培育和耐心的理解，并有幸拥有培养他人茁壮成长的能力。就像肥沃的土地确切地知道每颗种子需要什么一样，你为潜力蓬勃发展为现实提供了完美的条件。',
      fr: 'Votre sagesse grandit grâce à une douce nourriture et à une compréhension patiente, bénie de la capacité de cultiver une croissance abondante chez les autres. Telle une terre riche qui sait exactly ce dont chaque graine a besoin, vous offrez les conditions parfaites pour que le potentiel s\'épanouisse en réalité.',
      de: 'Ihre Weisheit wächst aus sanfter Pflege und geduldigem Verständnis, gesegnet mit der Fähigkeit, reichliches Wachstum bei anderen zu kultivieren. Wie reiche Erde, die genau weiß, was jeder Same braucht, schaffen Sie die perfekten Bedingungen, damit sich Potenzial zur Wirklichkeit entfalten kann.',
      es: 'Tu sabiduría crece a partir de una crianza suave y una comprensión paciente, bendecida con la capacidad de cultivar un crecimiento abundante en los demás. Como la tierra rica que sabe exactamente lo que necesita cada semilla, proporcionas las condiciones perfectas para que el potencial florezca en la realidad.',
      ru: 'Ваша мудрость растет из нежного воспитания и терпеливого понимания, благословленная способностью развивать обильный рост в других. Подобно богатой земле, которая точно знает, что нужно каждому семени, вы создаете идеальные условия для того, чтобы потенциал превратился в реальность.',
      ar: 'تنمو حكمتك من الرعاية اللطيفة والتفاهم الصبور، مباركة بالقدرة على تنمية النمو الوفير لدى الآخرين. مثل الأرض الغنية التي تعرف بالضبط ما تحتاجه كل بذرة، فإنك توفر الظروف المثالية لازدهار الإمكانات إلى حقيقة.',
      hi: 'आपका ज्ञान कोमल पोषण और धैर्यपूर्ण समझ से बढ़ता है, जो दूसरों में प्रचुर मात्रा में विकास करने की क्षमता से धन्य है। समृद्ध पृथ्वी की तरह जो ठीक-ठीक जानती है कि प्रत्येक बीज को क्या चाहिए, आप क्षमता को वास्तविकता में पनपने के लिए आदर्श परिस्थितियाँ प्रदान करते हैं।'
    }
  },
  {
    id: '서우_wood_01',
    harmony: {
      en: 'Your Wood nature and this name create a character of auspicious growth and gentle spirit. These qualities align perfectly with your natural abilities, fostering a harmonious path for personal growth and positive, supportive character development.',
      ko: '당신의 목(木) 기운과 이 이름은 상서로운 성장과 온화한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 개인적인 성장과 긍정적이고 지지적인 인격 발전을 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの木の性質とこの名前は、縁起の良い成長と穏やかな精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、個人の成長と前向きで支援的な人格形成のための調和のとれた道を育みます。',
      zh: '你的木属性和这个名字创造了一个吉祥成长和温柔精神的品格。这些品质与你的天生能力完美契合，为个人成长和积极、支持性的品格发展营造了一条和谐的道路。',
      fr: 'Votre nature Bois et ce nom créent un caractère de croissance auspicieuse et d\'esprit doux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin harmonieux pour la croissance personnelle et le développement d\'un caractère positif et solidaire.',
      de: 'Ihre Holz-Natur und dieser Name schaffen einen Charakter von glückverheißendem Wachstum und sanftem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen harmonischen Weg für persönliches Wachstum und eine positive, unterstützende Charakterentwicklung.',
      es: 'Tu naturaleza de Madera y este nombre crean un carácter de crecimiento auspicioso y espíritu gentil. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino armonioso para el crecimiento personal y el desarrollo de un carácter positivo y de apoyo.',
      ru: 'Ваша природа Дерева и это имя создают характер благоприятного роста и нежного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному пути личностного роста и позитивного, поддерживающего развития характера.',
      ar: 'تخلق طبيعتك الخشبية وهذا الاسم شخصية ذات نمو ميمون وروح لطيفة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا متناغمًا للنمو الشخصي وتنمية الشخصية الإيجابية والداعمة.',
      hi: 'आपकी लकड़ी की प्रकृति और यह नाम शुभ विकास और सौम्य विकास और सौम्य आत्मा का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, व्यक्तिगत विकास और सकारात्मक, सहायक चरित्र विकास के लिए एक सामंजस्यपूर्ण मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '서진_wood_01',
    harmony: {
      en: 'With your Wood nature, this name fosters auspicious growth and a precious, treasured spirit. These qualities align perfectly with your natural abilities, fostering a path for growth and the development of a valuable and respected character.',
      ko: '당신의 목(木) 기운으로, 이 이름은 상서로운 성장과 귀하고 소중한 정신을 길러냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성장과 가치 있고 존경받는 인격으로 성장하기 위한 조화로운 길을 만들어냅니다.',
      ja: 'あなたの木の性質で、この名前は縁起の良い成長と貴重で大切な精神を育みます。これらの資質はあなたの自然な能力と完全に一致し、成長と価値ある尊敬される人格の育成への道を育みます。',
      zh: '你的木属性与这个名字相结合，培养了吉祥的成长和宝贵、珍爱的精神。这些品质与你的天生能力完美契合，为成长和发展有价值和受人尊敬的品格铺平了道路。',
      fr: 'Avec votre nature Bois, ce nom favorise une croissance auspicieuse et un esprit précieux et chéri. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance et le développement d\'un caractère précieux et respecté.',
      de: 'Mit Ihrer Holz-Natur fördert dieser Name glückverheißendes Wachstum und einen kostbaren, geschätzten Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für Wachstum und die Entwicklung eines wertvollen und angesehenen Charakters.',
      es: 'Con tu naturaleza de Madera, este nombre fomenta un crecimiento auspicioso y un espíritu precioso y atesorado. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento y el desarrollo de un carácter valioso y respetado.',
      ru: 'С вашей природой Дерева это имя способствует благоприятному росту и драгоценному, лелеемому духу. Эти качества идеально сочетаются с вашими природными способностями, способствуя пути роста и развития ценного и уважаемого характера.',
      ar: 'مع طبيعتك الخشبية، يعزز هذا الاسم النمو الميمون والروح الثمينة والغالية. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو وتنمية شخصية قيمة ومحترمة.',
      hi: 'आपकी लकड़ी की प्रकृति के साथ, यह नाम शुभ विकास और एक कीमती, पोषित आत्मा को बढ़ावा देता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो विकास और एक मूल्यवान और सम्मानित चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '서영_wood_01',
    harmony: {
      en: 'Your Wood nature harmonizes with this name to create a character of auspicious growth and a prosperous spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a successful and flourishing character.',
      ko: '당신의 목(木) 기운은 이 이름과 조화를 이루어 상서로운 성장과 번영하는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 성공적이고 번창하는 인격의 발전을 돕습니다.',
      ja: 'あなたの木の性質は、この名前と調和して、縁起の良い成長と繁栄する精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と成功し繁栄する人格の育成を促進します。',
      zh: '你的木属性与这个名字相协调，创造了一个吉祥成长和繁荣精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和成功、繁荣品格的发展。',
      fr: 'Votre nature Bois s\'harmonise avec ce nom pour créer un caractère de croissance auspicieuse et un esprit prospère. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère réussi et florissant.',
      de: 'Ihre Holz-Natur harmoniert mit diesem Namen, um einen Charakter von glückverheißendem Wachstum und einem prosperierenden Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines erfolgreichen und blühenden Charakters.',
      es: 'Tu naturaleza de Madera armoniza con este nombre para crear un carácter de crecimiento auspicioso y un espíritu próspero. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter exitoso y floreciente.',
      ru: 'Ваша природа Дерева гармонирует с этим именем, создавая характер благоприятного роста и процветающего духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию успешного и процветающего характера.',
      ar: 'تتناغم طبيعتك الخشبية مع هذا الاسم لخلق شخصية ذات نمو ميمون وروح مزدهرة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية ناجحة ومزدهرة.',
      hi: 'आपकी लकड़ी की प्रकृति इस नाम के साथ शुभ विकास और एक समृद्ध आत्मा का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सफल और फलते-फूलते चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '지은_wood_01',
    harmony: {
      en: 'Your wisdom flows like a graceful river through generations, blessed with the ability to transmit knowledge with love and kindness. Like a wise teacher who nurtures growth, you create lasting legacies of understanding that enrich families and communities alike.',
      ko: '당신의 지혜는 여러 세대를 거쳐 흐르는 우아한 강물처럼, 사랑과 친절로 지식을 전달하는 능력의 축복을 받았습니다. 성장을 이끄는 현명한 스승처럼, 당신은 가족과 공동체 모두를 풍요롭게 하는 이해의 영원한 유산을 만들어냅니다.',
      ja: 'あなたの知恵は、世代を超えて流れる優雅な川のように、愛と優しさをもって知識を伝える能力に恵まれています。成長を育む賢明な教師のように、あなたは家族とコミュニティの両方を豊かにする理解の永続的な遺産を創造します。',
      zh: '你的智慧像一条优雅的河流，流传数代，有幸拥有用爱和仁慈传播知识的能力。就像一位培养成长的智慧老师一样，你创造了理解的持久遗产，丰富了家庭和社区。',
      fr: 'Votre sagesse coule comme une rivière gracieuse à travers les générations, bénie de la capacité de transmettre la connaissance avec amour et gentillesse. Tel un sage enseignant qui nourrit la croissance, vous créez des héritages durables de compréhension qui enrichissent les familles et les communautés.',
      de: 'Ihre Weisheit fließt wie ein anmutiger Fluss durch die Generationen, gesegnet mit der Fähigkeit, Wissen mit Liebe und Freundlichkeit weiterzugeben. Wie ein weiser Lehrer, der das Wachstum fördert, schaffen Sie bleibende Vermächtnisse des Verständnisses, die Familien und Gemeinschaften gleichermaßen bereichern.',
      es: 'Tu sabiduría fluye como un río elegante a través de las generaciones, bendecida con la habilidad de transmitir conocimiento con amor y amabilidad. Como un sabio maestro que nutre el crecimiento, creas legados duraderos de comprensión que enriquecen a las familias y comunidades por igual.',
      ru: 'Ваша мудрость течет, как изящная река сквозь поколения, благословленная способностью передавать знания с любовью и добротой. Подобно мудрому учителю, который лелеет рост, вы создаете прочные наследия понимания, которые обогащают как семьи, так и сообщества.',
      ar: 'تتدفق حكمتك مثل نهر رشيق عبر الأجيال، مباركة بالقدرة على نقل المعرفة بالحب واللطف. مثل المعلم الحكيم الذي يغذي النمو، فإنك تخلق موروثات دائمة من التفاهم تثري العائلات والمجتمعات على حد سواء.',
      hi: 'आपका ज्ञान पीढ़ियों से एक सुंदर नदी की तरह बहता है, जिसे प्रेम और दया के साथ ज्ञान प्रसारित करने की क्षमता का आशीर्वाद प्राप्त है। विकास का पोषण करने वाले एक बुद्धिमान शिक्षक की तरह, आप समझ की स्थायी विरासत बनाते हैं जो परिवारों और समुदायों को समान रूप से समृद्ध करती है।'
    }
  },
  {
    id: '채린_wood_01',
    harmony: {
      en: 'Your wisdom shines with the vibrant colors of diversity, blessed with the ability to see beauty in all perspectives. Like an autumn forest where every leaf adds to the magnificent whole, you create harmony by celebrating the unique gifts each person brings.',
      ko: '당신은 모든 관점에서 아름다움을 발견하는 능력의 축복을 받아, 당신의 지혜는 다채로운 다양성의 색으로 빛납니다. 모든 잎이 장엄한 전체를 이루는 가을 숲처럼, 당신은 각자가 가진 독특한 재능을 축복하며 조화를 만들어냅니다.',
      ja: 'あなたの知恵は多様性の鮮やかな色で輝き、あらゆる視点から美しさを見る能力に恵まれています。すべての葉が壮大な全体に加わる秋の森のように、あなたは一人一人がもたらすユニークな才能を祝うことによって調和を生み出します。',
      zh: '你的智慧闪耀着多样性的鲜艳色彩，有幸拥有从所有角度看美的能力。就像秋天的森林里，每一片叶子都为宏伟的整体增添色彩一样，你通过庆祝每个人带来的独特天赋来创造和谐。',
      fr: 'Votre sagesse brille des couleurs vibrantes de la diversité, bénie de la capacité de voir la beauté dans toutes les perspectives. Comme une forêt d\'automne où chaque feuille ajoute à l\'ensemble magnifique, vous créez l\'harmonie en célébrant les dons uniques que chaque personne apporte.',
      de: 'Ihre Weisheit erstrahlt in den leuchtenden Farben der Vielfalt, gesegnet mit der Fähigkeit, Schönheit in allen Perspektiven zu sehen. Wie ein Herbstwald, in dem jedes Blatt zum prächtigen Ganzen beiträgt, schaffen Sie Harmonie, indem Sie die einzigartigen Gaben feiern, die jeder Mensch mitbringt.',
      es: 'Tu sabiduría brilla con los colores vibrantes de la diversidad, bendecida con la habilidad de ver la belleza en todas las perspectivas. Como un bosque de otoño donde cada hoja se suma al magnífico todo, creas armonía celebrando los dones únicos que cada persona aporta.',
      ru: 'Ваша мудрость сияет яркими красками разнообразия, благословленная способностью видеть красоту во всех ракурсах. Подобно осеннему лесу, где каждый лист дополняет великолепное целое, вы создаете гармонию, празднуя уникальные дары, которые приносит каждый человек.',
      ar: 'تتألق حكمتك بألوان التنوع النابضة بالحياة، مباركة بالقدرة على رؤية الجمال في جميع وجهات النظر. مثل غابة خريفية حيث تضيف كل ورقة إلى الكل الرائع، فإنك تخلق الانسجام من خلال الاحتفال بالهدايا الفريدة التي يجلبها كل شخص.',
      hi: 'आपकी बुद्धि विविधता के जीवंत रंगों से चमकती है, जिसे सभी दृष्टिकोणों में सुंदरता देखने की क्षमता का आशीर्वाद प्राप्त है। एक शरद ऋतु के जंगल की तरह जहां हर पत्ती शानदार पूरे में जुड़ जाती है, आप प्रत्येक व्यक्ति द्वारा लाए गए अद्वितीय उपहारों का जश्न मनाकर सद्भाव बनाते हैं।'
    }
  },
  {
    id: '하준_fire_01',
    harmony: {
      en: 'Your Fire nature and this name ignite in a perfect union of summer warmth and passionate talent. The name’s meaning resonates with your capacity for illumination, creating brilliant success like the zenith sun that nurtures all life with its generous, radiant light.',
      ko: '당신의 화(火) 기운과 이 이름은 한여름의 따스함과 열정적인 재능의 완벽한 결합으로 타오릅니다. 이름의 의미는 당신의 빛을 발하는 능력과 공명하며, 아낌없는 광채로 모든 생명을 키우는 절정의 태양처럼 눈부신 성공을 만들어냅니다.',
      ja: 'あなたの火の性質とこの名前は、夏の暖かさと情熱的な才能の完璧な結合で燃え上がります。名前の意味は、あなたの照明能力と共鳴し、その寛大で輝く光ですべての生命を育む天頂の太陽のような輝かしい成功を生み出します。',
      zh: '你的火属性和这个名字在夏日的温暖和热情的才华的完美结合中点燃。这个名字的含义与你的照明能力产生共鸣，创造出像天顶的太阳一样辉煌的成功，用它慷慨、灿烂的光芒哺育所有生命。',
      fr: 'Votre nature Feu et ce nom s\'enflamment dans une union parfaite de chaleur estivale et de talent passionné. La signification du nom résonne avec votre capacité d\'illumination, créant un succès brillant comme le soleil au zénith qui nourrit toute vie de sa lumière généreuse et rayonnante.',
      de: 'Ihre Feuer-Natur und dieser Name entzünden sich in einer perfekten Vereinigung von Sommerwärme und leidenschaftlichem Talent. Die Bedeutung des Namens schwingt mit Ihrer Fähigkeit zur Erleuchtung mit und schafft brillanten Erfolg wie die Zenitsonne, die alles Leben mit ihrem großzügigen, strahlenden Licht nährt.',
      es: 'Tu naturaleza de Fuego y este nombre se encienden en una unión perfecta de calidez de verano y talento apasionado. El significado del nombre resuena con tu capacidad de iluminación, creando un éxito brillante como el sol cenital que nutre toda la vida con su luz generosa y radiante.',
      ru: 'Ваша природа Огня и это имя воспламеняются в идеальном союзе летнего тепла и страстного таланта. Значение имени резонирует с вашей способностью к освещению, создавая блестящий успех, подобный зенитному солнцу, которое питает всю жизнь своим щедрым, лучистым светом.',
      ar: 'طبيعتك النارية وهذا الاسم يشتعلان في اتحاد مثالي من دفء الصيف والموهبة العاطفية. صدى معنى الاسم مع قدرتك على الإضاءة، مما يخلق نجاحًا باهرًا مثل شمس الظهيرة التي تغذي كل أشكال الحياة بنورها السخي والمشرق.',
      hi: 'आपकी अग्नि प्रकृति और यह नाम गर्मियों की गर्मी और भावुक प्रतिभा के एक आदर्श मिलन में प्रज्वलित होते हैं। नाम का अर्थ रोशनी के लिए आपकी क्षमता के साथ प्रतिध्वनित होता है, जो कि चरम पर स्थित सूर्य की तरह शानदार सफलता बनाता है जो अपने उदार, उज्ज्वल प्रकाश से सभी जीवन का पोषण करता है।'
    }
  },
  {
    id: '시우_fire_01',
    harmony: {
      en: 'With your Fire nature, this name brings passionate energy to renewal and new beginnings. The name’s meaning of “first rain” aligns with your ability to ignite hope, creating transformative change like a storm that breaks a drought and awakens life.',
      ko: '당신의 화(火) 기운과 함께, 이 이름은 새로운 시작과 부활에 열정적인 에너지를 불어넣습니다. ‘첫 비’라는 이름의 의미는 희망에 불을 붙이는 당신의 능력과 일치하며, 가뭄을 끝내고 생명을 깨우는 폭풍우처럼 변혁적인 변화를 만들어냅니다.',
      ja: 'あなたの火の性質で、この名前は更新と新しい始まりに情熱的なエネルギーをもたらします。「最初の雨」という意味の名前は、希望に火をつけるあなたの能力と一致し、干ばつを終わらせて生命を目覚めさせる嵐のような変革的な変化を生み出します。',
      zh: '你的火属性与这个名字相结合，为更新和新的开始带来热情的能量。“第一场雨”这个名字的含义与你点燃希望的能力相一致，创造出像打破干旱、唤醒生命的暴风雨一样的变革性变化。',
      fr: 'Avec votre nature Feu, ce nom apporte une énergie passionnée au renouveau et aux nouveaux départs. La signification du nom de « première pluie » s\'aligne sur votre capacité à allumer l\'espoir, créant un changement transformateur comme une tempête qui rompt une sécheresse et éveille la vie.',
      de: 'Mit Ihrer Feuer-Natur bringt dieser Name leidenschaftliche Energie für Erneuerung und Neuanfänge. Die Bedeutung des Namens „erster Regen“ stimmt mit Ihrer Fähigkeit überein, Hoffnung zu entfachen, und schafft transformative Veränderungen wie ein Sturm, der eine Dürre beendet und das Leben erweckt.',
      es: 'Con tu naturaleza de Fuego, este nombre aporta una energía apasionada a la renovación y a los nuevos comienzos. El significado del nombre de \'primera lluvia\' se alinea con tu capacidad para encender la esperanza, creando un cambio transformador como una tormenta que rompe una sequía y despierta la vida.',
      ru: 'С вашей природой Огня это имя приносит страстную энергию обновлению и новым начинаниям. Значение имени «первый дождь» совпадает с вашей способностью зажигать надежду, создавая преобразующие изменения, подобные буре, которая прекращает засуху и пробуждает жизнь.',
      ar: 'مع طبيعتك النارية، يجلب هذا الاسم طاقة عاطفية للتجديد والبدايات الجديدة. يتماشى معنى الاسم \'المطر الأول\' مع قدرتك على إشعال الأمل، مما يخلق تغييرًا تحويليًا مثل عاصفة تكسر الجفاف وتوقظ الحياة.',
      hi: 'आपकी अग्नि प्रकृति के साथ, यह नाम नवीनीकरण और नई शुरुआत के लिए भावुक ऊर्जा लाता है। \'पहली बारिश\' नाम का अर्थ आशा को प्रज्वलित करने की आपकी क्षमता के साथ संरेखित करता है, जो एक तूफान की तरह परिवर्तनकारी परिवर्तन पैदा करता है जो सूखे को तोड़ता है और जीवन को जागृत करता है।'
    }
  },
  {
    id: '도윤_fire_01',
    harmony: {
      en: 'Your Fire nature harmonizes with this name, illuminating a path to moral prosperity through passionate integrity and transformative leadership. The name’s ethical and successful meaning resonates with your capacity for purification, creating abundance like a sacred flame that guides communities toward enlightenment.',
      ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어, 열정적인 진실성과 변혁적인 리더십을 통해 도덕적 번영의 길을 밝힙니다. 이름에 담긴 윤리적이고 성공적인 의미는 당신의 정화 능력과 공명하며, 공동체를 깨달음으로 이끄는 신성한 불꽃처럼 풍요를 창조합니다.',
      ja: 'あなたの火の性質は、この名前と調和し、情熱的な誠実さと変革的なリーダーシップを通じて道徳的な繁栄への道を照らします。名前の倫理的で成功した意味は、あなたの浄化能力と共鳴し、コミュニティを悟りへと導く神聖な炎のような豊かさを生み出します。',
      zh: '你的火属性与这个名字相协调，通过热情的正直和变革性的领导力，照亮通往道德繁荣的道路。这个名字的道德和成功的含义与你的净化能力产生共鸣，创造出像引导社区走向启蒙的神圣火焰一样的富足。',
      fr: 'Votre nature Feu s\'harmonise avec ce nom, éclairant un chemin vers la prospérité morale grâce à une intégrité passionnée et un leadership transformateur. La signification éthique et réussie du nom résonne avec votre capacité de purification, créant une abondance comme une flamme sacrée qui guide les communautés vers l\'illumination.',
      de: 'Ihre Feuer-Natur harmoniert mit diesem Namen und erleuchtet einen Weg zu moralischem Wohlstand durch leidenschaftliche Integrität und transformative Führung. Die ethische und erfolgreiche Bedeutung des Namens schwingt mit Ihrer Fähigkeit zur Reinigung mit und schafft Fülle wie eine heilige Flamme, die Gemeinschaften zur Erleuchtung führt.',
      es: 'Tu naturaleza de Fuego armoniza con este nombre, iluminando un camino hacia la prosperidad moral a través de la integridad apasionada y el liderazgo transformador. El significado ético y exitoso del nombre resuena con tu capacidad de purificación, creando abundancia como una llama sagrada que guía a las comunidades hacia la iluminación.',
      ru: 'Ваша природа Огня гармонирует с этим именем, освещая путь к моральному процветанию через страстную честность и преобразующее лидерство. Этическое и успешное значение имени резонирует с вашей способностью к очищению, создавая изобилие, подобное священному пламени, которое ведет сообщества к просветлению.',
      ar: 'تتناغم طبيعتك النارية مع هذا الاسم، وتضيء طريقًا إلى الازدهار الأخلاقي من خلال النزاهة العاطفية والقيادة التحويلية. صدى معنى الاسم الأخلاقي والناجح مع قدرتك على التطهير، مما يخلق وفرة مثل شعلة مقدسة ترشد المجتمعات نحو التنوير.',
      hi: 'आपकी अग्नि प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो भावुक अखंडता और परिवर्तनकारी नेतृत्व के माध्यम से नैतिक समृद्धि का मार्ग रोशन करती है। नाम का नैतिक और सफल अर्थ शुद्धिकरण के लिए आपकी क्षमता के साथ प्रतिध्वनित होता है, जो एक पवित्र लौ की तरह प्रचुरता पैदा करता है जो समुदायों को आत्मज्ञान की ओर मार्गदर्शन करता है।'
    }
  },
  {
    id: '태민_fire_01',
    harmony: {
      en: 'Your spirit burns like a great, swift flame moving toward excellence. Like lightning that strikes with perfect timing, you achieve magnificent results through passionate dedication, inspiring others with your brilliant energy and swift, decisive accomplishments.',
      ko: '당신의 영혼은 탁월함을 향해 빠르게 나아가는 거대한 불꽃처럼 타오릅니다. 완벽한 순간에 내리치는 번개처럼, 당신은 열정적인 헌신을 통해 장엄한 결과를 이루어내고, 당신의 눈부신 에너지와 신속하고 결단력 있는 성취로 다른 이들에게 영감을 줍니다.',
      ja: 'あなたの精神は、卓越性に向かって動く、大きく、速い炎のように燃えます。完璧なタイミングで打つ稲妻のように、あなたは情熱的な献身を通して壮大な結果を達成し、あなたの素晴らしいエネルギーと迅速で決定的な成果で他の人を鼓舞します。',
      zh: '你的精神像一团巨大、迅捷的火焰，追求卓越。就像在完美的时机划破天空的闪电一样，你通过热情的奉献取得了辉煌的成果，用你灿烂的能量和迅速、果断的成就激励着他人。',
      fr: 'Votre esprit brûle comme une grande flamme rapide qui tend vers l\'excellence. Telle la foudre qui frappe au moment parfait, vous obtenez des résultats magnifiques grâce à un dévouement passionné, inspirant les autres par votre énergie brillante et vos accomplissements rapides et décisifs.',
      de: 'Ihr Geist brennt wie eine große, schnelle Flamme, die sich auf Exzellenz zubewegt. Wie ein Blitz, der im perfekten Moment einschlägt, erzielen Sie durch leidenschaftliche Hingabe großartige Ergebnisse und inspirieren andere mit Ihrer brillanten Energie und Ihren schnellen, entscheidenden Leistungen.',
      es: 'Tu espíritu arde como una gran y veloz llama que se mueve hacia la excelencia. Como un rayo que cae en el momento perfecto, logras resultados magníficos a través de una dedicación apasionada, inspirando a otros con tu energía brillante y tus logros rápidos y decisivos.',
      ru: 'Ваш дух горит, как великое, быстрое пламя, движущееся к совершенству. Подобно молнии, которая ударяет в идеальный момент, вы достигаете великолепных результатов благодаря страстной самоотдаче, вдохновляя других своей блестящей энергией и быстрыми, решительными достижениями.',
      ar: 'روحك تحترق مثل لهب عظيم وسريع يتحرك نحو التميز. مثل البرق الذي يضرب في التوقيت المثالي، فإنك تحقق نتائج رائعة من خلال التفاني العاطفي، وتلهم الآخرين بطاقتك الرائعة وإنجازاتك السريعة والحاسمة.',
      hi: 'आपकी आत्मा उत्कृष्टता की ओर बढ़ती हुई एक महान, तेज लौ की तरह जलती है। सही समय पर प्रहार करने वाली बिजली की तरह, आप भावुक समर्पण के माध्यम से शानदार परिणाम प्राप्त करते हैं, अपनी शानदार ऊर्जा और तेज, निर्णायक उपलब्धियों से दूसरों को प्रेरित करते हैं।'
    }
  },
  {
    id: '정우_fire_01',
    harmony: {
      en: 'Your Fire nature and this name create a character of righteous passion and excellent spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a strong, positive character.',
      ko: '당신의 화(火) 기운과 이 이름은 정의로운 열정과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성장과 강하고 긍정적인 인격 발전을 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質とこの名前は、義にかなった情熱と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と強く前向きな人格の育成への道を育みます。',
      zh: '你的火属性和这个名字创造了一个正义的热情和卓越的精神的品格。这些品质与你的天生能力完美契合，为和谐成长和坚强、积极品格的发展铺平了道路。',
      fr: 'Votre nature Feu et ce nom créent un caractère de passion juste et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère fort et positif.',
      de: 'Ihre Feuer-Natur und dieser Name schaffen einen Charakter von rechtschaffener Leidenschaft und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines starken, positiven Charakters.',
      es: 'Tu naturaleza de Fuego y este nombre crean un carácter de pasión justa y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter fuerte y positivo.',
      ru: 'Ваша природа Огня и это имя создают характер праведной страсти и превосходного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию сильного, позитивного характера.',
      ar: 'تخلق طبيعتك النارية وهذا الاسم شخصية من العاطفة الصالحة والروح الممتازة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية قوية وإيجابية.',
      hi: 'आपकी अग्नि प्रकृति और यह नाम धर्मी जुनून और उत्कृष्ट भावना का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक मजबूत, सकारात्मक चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '동현_fire_01',
    harmony: {
      en: 'Your destiny rises with the glory of the eastern dawn, blessed with achievements that herald new beginnings. Like the morning sun that awakens the world, your merit brings hope and renewal to all who encounter your radiant accomplishments.',
      ko: '당신의 운명은 새로운 시작을 알리는 성취로 축복받으며, 동쪽 새벽의 영광과 함께 떠오릅니다. 세상을 깨우는 아침 해처럼, 당신의 공로는 당신의 빛나는 업적을 마주하는 모든 이에게 희망과 새로움을 가져다줍니다.',
      ja: 'あなたの運命は、新しい始まりを告げる成果に恵まれ、東の夜明けの栄光とともに昇ります。世界を目覚めさせる朝日のように、あなたの功績は、あなたの輝かしい業績に出会うすべての人に希望と刷新をもたらします。',
      zh: '你的命运随着东方黎明的荣耀而升起，并有幸取得了预示着新起点的成就。就像唤醒世界的朝阳一样，你的功绩为你遇到的所有人的光辉成就带来希望和更新。',
      fr: 'Votre destin se lève avec la gloire de l\'aube orientale, béni par des réalisations qui annoncent de nouveaux départs. Tel le soleil du matin qui éveille le monde, votre mérite apporte espoir et renouveau à tous ceux qui rencontrent vos réalisations rayonnantes.',
      de: 'Ihr Schicksal erhebt sich mit dem Ruhm der östlichen Morgendämmerung, gesegnet mit Errungenschaften, die neue Anfänge ankündigen. Wie die Morgensonne, die die Welt erweckt, bringt Ihr Verdienst allen, die Ihren strahlenden Leistungen begegnen, Hoffnung und Erneuerung.',
      es: 'Tu destino se eleva con la gloria del amanecer oriental, bendecido con logros que anuncian nuevos comienzos. Como el sol de la mañana que despierta al mundo, tu mérito trae esperanza y renovación a todos los que se encuentran con tus radiantes logros.',
      ru: 'Ваша судьба восходит со славой восточной зари, благословленная достижениями, которые предвещают новые начинания. Подобно утреннему солнцу, которое пробуждает мир, ваши заслуги приносят надежду и обновление всем, кто сталкивается с вашими сияющими достижениями.',
      ar: 'يرتفع مصيرك مع مجد فجر الشرق، مباركًا بإنجازات تبشر ببدايات جديدة. مثل شمس الصباح التي توقظ العالم، فإن مآثرك تجلب الأمل والتجديد لكل من يصادف إنجازاتك المشرقة.',
      hi: 'आपका भाग्य पूर्वी भोर की महिमा के साथ उगता है, जो नई शुरुआत की घोषणा करने वाली उपलब्धियों से धन्य है। सुबह के सूरज की तरह जो दुनिया को जगाता है, आपकी योग्यता उन सभी के लिए आशा और नवीनीकरण लाती है जो आपकी उज्ज्वल उपलब्धियों का सामना करते हैं।'
    }
  },
  {
    id: '지환_fire_01',
    harmony: {
      en: 'With your Fire nature, this name creates a character of wise passion and a bright spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of an insightful and radiant character.',
      ko: '당신의 화(火) 기운으로, 이 이름은 지혜로운 열정과 밝은 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 통찰력 있고 빛나는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質で、この名前は賢明な情熱と明るい精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、洞察力に富んだ輝く人格の育成への道を育みます。',
      zh: '你的火属性与这个名字相结合，创造了一个智慧的热情和光明的精神的品格。这些品质与你的天生能力完美契合，为和谐成长和发展富有洞察力和光芒四射的品格铺平了道路。',
      fr: 'Avec votre nature Feu, ce nom crée un caractère de passion sage et d\'esprit brillant. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère perspicace et radieux.',
      de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von weiser Leidenschaft und einem strahlenden Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines aufschlussreichen und strahlenden Charakters.',
      es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de pasión sabia y un espíritu brillante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter perspicaz y radiante.',
      ru: 'С вашей природой Огня это имя создает характер мудрой страсти и светлого духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию проницательного и сияющего характера.',
      ar: 'مع طبيعتك النارية، يخلق هذا الاسم شخصية من العاطفة الحكيمة والروح المشرقة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية ثاقبة ومشرقة.',
      hi: 'आपकी अग्नि प्रकृति के साथ, यह नाम बुद्धिमान जुनून और एक उज्ज्वल आत्मा का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक perspicacious और उज्ज्वल चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '태준_fire_01',
    harmony: {
      en: 'Like a great bonfire that draws people together with its light and warmth, your Fire nature and this name give you a talent for creating community, connection, and a shared sense of belonging.',
      ko: '빛과 온기로 사람들을 불러 모으는 거대한 모닥불처럼, 당신의 화(火) 기운과 이 이름은 당신에게 공동체와 연결, 그리고 함께하는 소속감을 만들어내는 재능을 부여합니다.',
      ja: '光と暖かさで人々を集める大きなたき火のように、あなたの火の性質とこの名前は、コミュニティ、つながり、そして共有された帰属意識を生み出す才能をあなたに与えます。',
      zh: '就像一堆用光和温暖将人们聚集在一起的大篝火一样，你的火属性和这个名字赋予你创造社区、联系和共同归属感的天赋。',
      fr: 'Tel un grand feu de joie qui rassemble les gens par sa lumière et sa chaleur, votre nature Feu et ce nom vous donnent le talent de créer une communauté, des liens et un sentiment d\'appartenance partagé.',
      de: 'Wie ein großes Lagerfeuer, das Menschen mit seinem Licht und seiner Wärme zusammenbringt, verleihen Ihnen Ihre Feuernatur und dieser Name ein Talent dafür, Gemeinschaft, Verbindung und ein gemeinsames Zugehörigkeitsgefühl zu schaffen.',
      es: 'Como una gran hoguera que une a las personas con su luz y calor, tu naturaleza de Fuego y este nombre te dan un talento para crear comunidad, conexión y un sentido de pertenencia compartido.',
      ru: 'Подобно большому костру, который собирает людей своим светом и теплом, ваша природа Огня и это имя дают вам талант создавать сообщество, связь и общее чувство принадлежности.',
      ar: 'مثل نار المخيم الكبيرة التي تجمع الناس معًا بنورها ودفئها، تمنحك طبيعتك النارية وهذا الاسم موهبة في خلق المجتمع والتواصل والشعور المشترك بالانتماء.',
      hi: 'एक बड़ी अलाव की तरह जो लोगों को अपनी रोशनी और गर्मी से एक साथ खींचती है, आपकी अग्नि प्रकृति और यह नाम आपको समुदाय, संबंध और अपनेपन की साझा भावना पैदा करने की प्रतिभा देते हैं।'
    }
  },
  {
    id: '승우_fire_01',
    harmony: {
      en: 'Your Fire nature harmonizes with this name to create a character of victorious passion and excellent spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a triumphant, positive character.',
      ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어 승리에 찬 열정과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 승리를 쟁취하는 긍정적인 인격 발전을 위한 길을 열어줍니다.',
      ja: 'あなたの火の性質は、この名前と調和して、勝利の情熱と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と勝利を収めた前向きな人格の育成への道を育みます。',
      zh: '你的火属性与这个名字相协调，创造了一个胜利的热情和卓越的精神的品格。这些品质与你的天生能力完美契合，为和谐成长和发展胜利、积极的品格铺平了道路。',
      fr: 'Votre nature Feu s\'harmonise avec ce nom pour créer un caractère de passion victorieuse et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère triomphant et positif.',
      de: 'Ihre Feuer-Natur harmoniert mit diesem Namen, um einen Charakter von siegreicher Leidenschaft und ausgezeichnetem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines triumphierenden, positiven Charakters.',
      es: 'Tu naturaleza de Fuego armoniza con este nombre para crear un carácter de pasión victoriosa y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter triunfante y positivo.',
      ru: 'Ваша природа Огня гармонирует с этим именем, создавая характер победоносной страсти и превосходного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию триумфального, позитивного характера.',
      ar: 'تتناغم طبيعتك النارية مع هذا الاسم لخلق شخصية من العاطفة المنتصرة والروح الممتازة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية منتصرة وإيجابية.',
      hi: 'आपकी अग्नि प्रकृति इस नाम के साथ विजयी जुनून और उत्कृष्ट भावना का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक विजयी, सकारात्मक चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '동민_fire_01',
    harmony: {
      en: 'With your Fire nature, this name creates a character of eastern brightness and quick thinking. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a radiant and agile character.',
      ko: '당신의 화(火) 기운으로, 이 이름은 동쪽의 밝음과 빠른 사고를 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 빛나고 민첩한 인격의 발전을 돕습니다.',
      ja: 'あなたの火の性質で、この名前は東の明るさと素早い思考の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と輝く機敏な人格の育成を促進します。',
      zh: '你的火属性与这个名字相结合，创造了一个东方光明和敏捷思维的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个容光焕发、敏捷的品格。',
      fr: 'Avec votre nature Feu, ce nom crée un caractère de luminosité orientale et de pensée rapide. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère radieux et agile.',
      de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von östlicher Helligkeit und schnellem Denken. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines strahlenden und agilen Charakters.',
      es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de brillo oriental y pensamiento rápido. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter radiante y ágil.',
      ru: 'С вашей природой Огня это имя создает характер восточной яркости и быстрого мышления. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию сияющего и подвижного характера.',
      ar: 'مع طبيعتك النارية، يخلق هذا الاسم شخصية من السطوع الشرقي والتفكير السريع. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية مشعة ورشيقة.',
      hi: 'आपकी अग्नि प्रकृति के साथ, यह नाम पूर्वी चमक और त्वरित सोच का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक उज्ज्वल और फुर्तीले चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '태우_fire_01',
    harmony: {
      en: 'Your Fire nature and this name combine to create a character of great passion and excellent spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a powerful and positive character.',
      ko: '당신의 화(火) 기운과 이 이름이 결합하여 위대한 열정과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 강력하고 긍정적인 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質とこの名前が組み合わさって、大きな情熱と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と強力で前向きな人格の育成への道を育みます。',
      zh: '你的火属性和这个名字相结合，创造了一个充满激情和卓越精神的品格。这些品质与你的天生能力完美契合，为和谐成长和发展强大、积极的品格铺平了道路。',
      fr: 'Votre nature Feu et ce nom se combinent pour créer un caractère de grande passion et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère puissant et positif.',
      de: 'Ihre Feuer-Natur und dieser Name vereinen sich zu einem Charakter von großer Leidenschaft und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines kraftvollen und positiven Charakters.',
      es: 'Tu naturaleza de Fuego y este nombre se combinan para crear un carácter de gran pasión y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter poderoso y positivo.',
      ru: 'Ваша природа Огня и это имя в сочетании создают характер великой страсти и превосходного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию сильного и позитивного характера.',
      ar: 'تتحد طبيعتك النارية وهذا الاسم لخلق شخصية ذات شغف كبير وروح ممتازة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية قوية وإيجابية.',
      hi: 'आपकी अग्नि प्रकृति और यह नाम मिलकर महान जुनून और उत्कृष्ट भावना का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक शक्तिशाली और सकारात्मक चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '정국_fire_01',
    harmony: {
      en: 'Your destiny burns with a righteous fire that protects all that is precious and sacred. Like a guardian flame defending the homeland, you are blessed with a patriotic passion and moral strength that creates safety and prosperity for your entire community.',
      ko: '당신의 운명은 소중하고 신성한 모든 것을 지키는 정의로운 불꽃으로 타오릅니다. 조국을 지키는 수호의 불꽃처럼, 당신은 공동체 전체에 안전과 번영을 가져오는 애국적인 열정과 도덕적 힘의 축복을 받았습니다.',
      ja: 'あなたの運命は、貴重で神聖なものすべてを守る義の火で燃えています。故郷を守る守護の炎のように、あなたは愛国的な情熱と道徳的な力に恵まれ、コミュニティ全体に安全と繁栄をもたらします。',
      zh: '你的命运燃烧着正义之火，保护着所有珍贵和神圣的东西。就像保卫家园的守护之火一样，你被赋予了爱国的热情和道德的力量，为你整个社区创造安全和繁荣。',
      fr: 'Votre destin brûle d\'un feu juste qui protège tout ce qui est précieux et sacré. Telle une flamme gardienne défendant la patrie, vous êtes béni d\'une passion patriotique et d\'une force morale qui créent la sécurité et la prospérité pour toute votre communauté.',
      de: 'Ihr Schicksal brennt mit einem rechtschaffenen Feuer, das alles schützt, was kostbar und heilig ist. Wie eine Schutzflamme, die die Heimat verteidigt, sind Sie mit einer patriotischen Leidenschaft und moralischen Stärke gesegnet, die Sicherheit und Wohlstand für Ihre gesamte Gemeinschaft schaffen.',
      es: 'Tu destino arde con un fuego justo que protege todo lo que es precioso y sagrado. Como una llama guardiana que defiende la patria, eres bendecido con una pasión patriótica y una fuerza moral que crean seguridad y prosperidad para toda tu comunidad.',
      ru: 'Ваша судьба горит праведным огнем, который защищает все драгоценное и священное. Подобно пламени-хранителю, защищающему родину, вы благословлены патриотической страстью и моральной силой, которые создают безопасность и процветание для всего вашего сообщества.',
      ar: 'يحترق مصيرك بنار праведной تحمي كل ما هو ثمين ومقدس. مثل شعلة الوصي التي تدافع عن الوطن، فأنت مبارك بشغف وطني وقوة أخلاقية تخلق الأمان والازدهار لمجتمعك بأكمله.',
      hi: 'आपका भाग्य एक धर्मी आग से जलता है जो सभी कीमती और पवित्र चीजों की रक्षा करता है। मातृभूमि की रक्षा करने वाली एक संरक्षक लौ की तरह, आपको एक देशभक्ति के जुनून और नैतिक शक्ति का आशीर्वाद प्राप्त है जो आपके पूरे समुदाय के लिए सुरक्षा और समृद्धि पैदा करता है।'
    }
  },
  {
    id: '호석_fire_01',
    harmony: {
      en: 'Your spirit combines the solidity of a great stone with the warmth of a passionate fire, creating an unshakeable strength filled with joyful energy. Like a hearthstone that provides both stability and warmth, you create lasting happiness and security for yourself and others.',
      ko: '당신의 영혼은 거대한 돌의 견고함과 열정적인 불의 따스함을 결합하여, 즐거운 에너지로 가득 찬 흔들리지 않는 힘을 만들어냅니다. 안정과 온기를 모두 제공하는 화덕의 돌처럼, 당신은 자신과 다른 이들을 위해 지속적인 행복과 안정을 만들어냅니다.',
      ja: 'あなたの精神は、大きな石の堅固さと情熱的な火の暖かさを組み合わせ、楽しいエネルギーに満ちた揺るぎない強さを生み出します。安定と暖かさの両方を提供する炉床石のように、あなたは自分自身と他の人のために永続的な幸福と安全を創造します。',
      zh: '你的精神将巨石的坚固与激情之火的温暖相结合，创造出一种充满快乐能量的不可动摇的力量。就像既能提供稳定又能提供温暖的炉石一样，你为自己和他人创造了持久的幸福和安全。',
      fr: 'Votre esprit combine la solidité d\'une grande pierre avec la chaleur d\'un feu passionné, créant une force inébranlable remplie d\'énergie joyeuse. Telle une pierre de foyer qui apporte à la fois stabilité et chaleur, vous créez un bonheur et une sécurité durables pour vous-même et pour les autres.',
      de: 'Ihr Geist verbindet die Festigkeit eines großen Steins mit der Wärme eines leidenschaftlichen Feuers und schafft so eine unerschütterliche Stärke, die von freudiger Energie erfüllt ist. Wie ein Kaminstein, der sowohl Stabilität als auch Wärme spendet, schaffen Sie dauerhaftes Glück und Sicherheit für sich und andere.',
      es: 'Tu espíritu combina la solidez de una gran piedra con el calor de un fuego apasionado, creando una fuerza inquebrantable llena de energía alegre. Como una piedra de hogar que proporciona tanto estabilidad como calidez, creas felicidad y seguridad duraderas para ti y para los demás.',
      ru: 'Ваш дух сочетает в себе прочность большого камня с теплом страстного огня, создавая непоколебимую силу, наполненную радостной энергией. Подобно очагу, который обеспечивает как стабильность, так и тепло, вы создаете прочное счастье и безопасность для себя и других.',
      ar: 'روحك تجمع بين صلابة حجر عظيم ودفء نار عاطفية، مما يخلق قوة لا تتزعزع مليئة بالطاقة المبهجة. مثل حجر الموقد الذي يوفر الاستقرار والدفء على حد سواء، فإنك تخلق سعادة وأمانًا دائمين لنفسك وللآخرين.',
      hi: 'आपकी आत्मा एक महान पत्थर की दृढ़ता को एक भावुक आग की गर्मी के साथ जोड़ती है, जो आनंदमय ऊर्जा से भरी एक अटूट शक्ति बनाती है। एक चूल्हा पत्थर की तरह जो स्थिरता और गर्मी दोनों प्रदान करता है, आप अपने और दूसरों के लिए स्थायी खुशी और सुरक्षा बनाते हैं।'
    }
  },
  {
    id: '서윤_fire_01',
    harmony: {
      en: 'Your path shines with the golden light of western prosperity, destined to bring abundance through your generous and allowing spirit. Like the evening star that guides travelers home, you create wealth not just for yourself but for your entire community.',
      ko: '당신의 길은 너그럽고 허용적인 정신을 통해 풍요를 가져올 운명으로, 서쪽에서 오는 번영의 황금빛으로 빛납니다. 여행자를 집으로 안내하는 저녁 별처럼, 당신은 자신뿐만 아니라 공동체 전체를 위한 부를 창출합니다.',
      ja: 'あなたの道は、あなたの寛大で許容的な精神を通して豊かさをもたらす運命にある、西の繁栄の黄金の光で輝いています。旅行者を家に導く宵の明星のように、あなたは自分自身のためだけでなく、コミュニティ全体のために富を創造します。',
      zh: '你的道路闪耀着西方繁荣的金色光芒，注定要通过你慷慨和包容的精神带来富足。就像引导旅行者回家的昏星一样，你不仅为自己创造财富，也为你整个社区创造财富。',
      fr: 'Votre chemin brille de la lumière dorée de la prospérité occidentale, destiné à apporter l\'abondance grâce à votre esprit généreux et permissif. Telle l\'étoile du soir qui guide les voyageurs chez eux, vous créez de la richesse non seulement pour vous-même mais pour toute votre communauté.',
      de: 'Ihr Weg erstrahlt im goldenen Licht des westlichen Wohlstands und ist dazu bestimmt, durch Ihren großzügigen und nachsichtigen Geist Überfluss zu bringen. Wie der Abendstern, der Reisende nach Hause führt, schaffen Sie Wohlstand nicht nur für sich selbst, sondern für Ihre gesamte Gemeinschaft.',
      es: 'Tu camino brilla con la luz dorada de la prosperidad occidental, destinado a traer abundancia a través de tu espíritu generoso y permisivo. Como la estrella de la tarde que guía a los viajeros a casa, creas riqueza no solo para ti, sino para toda tu comunidad.',
      ru: 'Ваш путь сияет золотым светом западного процветания, которому суждено принести изобилие благодаря вашему щедрому и всепрощающему духу. Подобно вечерней звезде, которая ведет путников домой, вы создаете богатство не только для себя, но и для всего вашего сообщества.',
      ar: 'يضيء طريقك بالنور الذهبي للازدهار الغربي، ومقدر له أن يجلب الوفرة من خلال روحك السخية والمتسامحة. مثل نجمة المساء التي ترشد المسافرين إلى ديارهم، فإنك تخلق الثروة ليس فقط لنفسك ولكن لمجتمعك بأكمله.',
      hi: 'आपका मार्ग पश्चिमी समृद्धि के सुनहरे प्रकाश से चमकता है, जो आपकी उदार और अनुमति देने वाली आत्मा के माध्यम से प्रचुरता लाने के लिए नियत है। शाम के तारे की तरह जो यात्रियों को घर का मार्गदर्शन करता है, आप न केवल अपने लिए बल्कि अपने पूरे समुदाय के लिए धन का निर्माण करते हैं।'
    }
  },
  {
    id: '예린_fire_01',
    harmony: {
      en: 'Your soul burns with the dual flame of beauty and wisdom, destined to bring people together through your radiant understanding and insight. Like a gathering fire that shares both light and warmth, you naturally create communities of learning, connection, and love.',
      ko: '당신의 영혼은 아름다움과 지혜라는 두 개의 불꽃으로 타오르며, 당신의 빛나는 이해와 통찰력으로 사람들을 하나로 모을 운명입니다. 빛과 온기를 함께 나누는 모닥불처럼, 당신은 자연스럽게 배움과 연결, 그리고 사랑의 공동체를 만들어냅니다.',
      ja: 'あなたの魂は美と知恵の二重の炎で燃え、あなたの輝く理解と洞察を通して人々を一つにする運命にあります。光と暖かさの両方を分かち合う集いの火のように、あなたは自然に学習、つながり、そして愛のコミュニティを創造します。',
      zh: '你的灵魂燃烧着美丽与智慧的双重火焰，注定要通过你容光焕发的理解和洞察力将人们聚集在一起。就像一堆分享光明和温暖的篝火一样，你自然而然地创造了学习、联系和爱的社区。',
      fr: 'Votre âme brûle de la double flamme de la beauté et de la sagesse, destinée à rassembler les gens grâce à votre compréhension et votre perspicacité rayonnantes. Tel un feu rassembleur qui partage à la fois la lumière et la chaleur, vous créez naturellement des communautés d\'apprentissage, de connexion et d\'amour.',
      de: 'Ihre Seele brennt mit der doppelten Flamme von Schönheit und Weisheit und ist dazu bestimmt, Menschen durch Ihr strahlendes Verständnis und Ihre Einsicht zusammenzubringen. Wie ein wärmendes Feuer, das sowohl Licht als auch Wärme teilt, schaffen Sie auf natürliche Weise Gemeinschaften des Lernens, der Verbindung und der Liebe.',
      es: 'Tu alma arde con la doble llama de la belleza y la sabiduría, destinada a unir a las personas a través de tu radiante comprensión y perspicacia. Como un fuego de reunión que comparte tanto la luz como el calor, creas naturalmente comunidades de aprendizaje, conexión y amor.',
      ru: 'Ваша душа горит двойным пламенем красоты и мудрости, которому суждено объединять людей благодаря вашему сияющему пониманию и проницательности. Подобно собирающему огню, который делится и светом, и теплом, вы естественным образом создаете сообщества обучения, связи и любви.',
      ar: 'روحك تحترق باللهب المزدوج للجمال والحكمة، ومقدر لها أن تجمع الناس معًا من خلال فهمك ورؤيتك المشرقة. مثل نار التجمع التي تشترك في الضوء والدفء على حد سواء، فإنك تنشئ بشكل طبيعي مجتمعات من التعلم والتواصل والحب.',
      hi: 'आपकी आत्मा सौंदर्य और ज्ञान की दोहरी लौ से जलती है, जो आपकी उज्ज्वल समझ और अंतर्दृष्टि के माध्यम से लोगों को एक साथ लाने के लिए नियत है। एक सभा की आग की तरह जो प्रकाश और गर्मी दोनों को साझा करती है, आप स्वाभाविक रूप से सीखने, संबंध और प्रेम के समुदाय बनाते हैं।'
    }
  },
  {
    id: '지아_fire_01',
    harmony: {
      en: 'Your destiny flows with the wisdom of ages and the beauty of eternal flames. You are born to be a bridge between knowledge and grace, helping others discover their own inner wisdom while creating harmony in all relationships and communities.',
      ko: '당신의 운명은 오랜 세월의 지혜와 영원한 불꽃의 아름다움과 함께 흐릅니다. 당신은 지식과 은혜 사이의 다리가 되어, 다른 사람들이 자신의 내면의 지혜를 발견하도록 돕고 모든 관계와 공동체에 조화를 창조하기 위해 태어났습니다.',
      ja: 'あなたの運命は、時代の知恵と永遠の炎の美しさとともに流れます。あなたは知識と恵みの間の架け橋となるために生まれ、他の人が自分自身の内なる知恵を発見するのを助けながら、すべての関係とコミュニティに調和を創造します。',
      zh: '你的命运与时代的智慧和永恒火焰的美丽一起流动。你生来就是知识与优雅之间的桥梁，帮助他人发现自己内心的智慧，同时在所有关系和社区中创造和谐。',
      fr: 'Votre destin coule avec la sagesse des âges et la beauté des flammes éternelles. Vous êtes né pour être un pont entre la connaissance et la grâce, aidant les autres à découvrir leur propre sagesse intérieure tout en créant l\'harmonie dans toutes les relations et communautés.',
      de: 'Ihr Schicksal fließt mit der Weisheit der Zeitalter und der Schönheit ewiger Flammen. Sie sind geboren, um eine Brücke zwischen Wissen und Anmut zu sein, anderen zu helfen, ihre eigene innere Weisheit zu entdecken, während Sie in allen Beziehungen und Gemeinschaften Harmonie schaffen.',
      es: 'Tu destino fluye con la sabiduría de los siglos y la belleza de las llamas eternas. Naciste para ser un puente entre el conocimiento y la gracia, ayudando a otros a descubrir su propia sabiduría interior mientras creas armonía en todas las relaciones y comunidades.',
      ru: 'Ваша судьба течет с мудростью веков и красотой вечного пламени. Вы рождены, чтобы быть мостом между знанием и благодатью, помогая другим открывать свою внутреннюю мудрость, создавая при этом гармонию во всех отношениях и сообществах.',
      ar: 'مصيرك يتدفق بحكمة العصور وجمال اللهب الأبدي. لقد ولدت لتكون جسراً بين المعرفة والنعمة، ومساعدة الآخرين على اكتشاف حكمتهم الداخلية مع خلق الانسجام في جميع العلاقات والمجتمعات.',
      hi: 'आपका भाग्य युगों के ज्ञान और शाश्वत लपटों की सुंदरता के साथ बहता है। आप ज्ञान और कृपा के बीच एक सेतु बनने के लिए पैदा हुए हैं, जो दूसरों को अपने भीतर के ज्ञान की खोज करने में मदद करते हैं, जबकि सभी रिश्तों और समुदायों में सद्भाव पैदा करते हैं।'
    }
  },
  {
    id: '소연_fire_01',
    harmony: {
      en: 'Your Fire nature harmonizes with this name to create a character of gentle passion and resilient beauty. The name’s meaning of a “small lotus” resonates with your ability to bloom in any circumstance, your inner fire providing the warmth and light for your delicate strength to unfold.',
      ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어 부드러운 열정과 강인한 아름다움을 지닌 품성을 만들어냅니다. ‘작은 연꽃’이라는 이름의 의미는 어떤 상황에서도 피어나는 당신의 능력과 공명하며, 당신의 내면의 불은 당신의 섬세한 힘이 펼쳐질 수 있도록 온기와 빛을 제공합니다.',
      ja: 'あなたの火の性質は、この名前と調和して、穏やかな情熱と回復力のある美しさの性格を生み出します。「小さな蓮」という意味の名前は、どんな状況でも開花するあなたの能力と共鳴し、あなたの内なる火はあなたの繊細な力が展開するための暖かさと光を提供します。',
      zh: '你的火属性与这个名字相协调，创造了一个温柔的热情和坚韧的美丽的品格。“小莲花”这个名字的含义与你在任何情况下都能开花的能力产生共鸣，你内心的火焰为你纤弱的力量的展现提供了温暖和光明。',
      fr: 'Votre nature Feu s\'harmonise avec ce nom pour créer un caractère de passion douce et de beauté résiliente. La signification du nom d\'un « petit lotus » résonne avec votre capacité à vous épanouir en toute circonstance, votre feu intérieur fournissant la chaleur et la lumière pour que votre force délicate se déploie.',
      de: 'Ihre Feuer-Natur harmoniert mit diesem Namen, um einen Charakter von sanfter Leidenschaft und widerstandsfähiger Schönheit zu schaffen. Die Bedeutung des Namens „kleiner Lotus“ schwingt mit Ihrer Fähigkeit mit, unter allen Umständen zu blühen, wobei Ihr inneres Feuer die Wärme und das Licht liefert, damit sich Ihre zarte Stärke entfalten kann.',
      es: 'Tu naturaleza de Fuego armoniza con este nombre para crear un carácter de pasión suave y belleza resistente. El significado del nombre de un \'pequeño loto\' resuena con tu capacidad para florecer en cualquier circunstancia, tu fuego interior proporciona el calor y la luz para que tu delicada fuerza se despliegue.',
      ru: 'Ваша природа Огня гармонирует с этим именем, создавая характер нежной страсти и стойкой красоты. Значение имени «маленький лотос» резонирует с вашей способностью цвести в любых обстоятельствах, ваш внутренний огонь обеспечивает тепло и свет для раскрытия вашей тонкой силы.',
      ar: 'تتناغم طبيعتك النارية مع هذا الاسم لخلق شخصية من العاطفة اللطيفة والجمال المرن. صدى معنى الاسم \'لوتس صغير\' مع قدرتك على التفتح في أي ظرف من الظروف، حيث يوفر نارك الداخلي الدفء والضوء لقوتك الحساسة لتتكشف.',
      hi: 'आपकी अग्नि प्रकृति इस नाम के साथ कोमल जुनून और लचीला सौंदर्य का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। \'छोटे कमल\' नाम का अर्थ किसी भी परिस्थिति में खिलने की आपकी क्षमता के साथ प्रतिध्वनित होता है, आपकी आंतरिक आग आपकी नाजुक ताकत को प्रकट करने के लिए गर्मी और प्रकाश प्रदान करती है।'
    }
  },
  {
    id: '예나_fire_01',
    harmony: {
      en: 'With your Fire nature, this name creates a character of confident beauty and radiant self-expression. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a self-assured and inspiring character.',
      ko: '당신의 화(火) 기운으로, 이 이름은 자신감 있는 아름다움과 빛나는 자기표현의 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 자신감 넘치고 영감을 주는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質で、この名前は自信に満ちた美しさと輝く自己表現の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、自信に満ちた感動的な人格の育成への道を育みます。',
      zh: '你的火属性与这个名字相结合，创造了一个自信的美丽和容光焕发的自我表达的品格。这些品质与你的天生能力完美契合，为和谐成长和发展一个自信和鼓舞人心的品格铺平了道路。',
      fr: 'Avec votre nature Feu, ce nom crée un caractère de beauté confiante et d\'expression de soi radieuse. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère sûr de soi et inspirant.',
      de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von selbstbewusster Schönheit und strahlender Selbstdarstellung. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines selbstbewussten und inspirierenden Charakters.',
      es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de belleza segura y radiante autoexpresión. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter seguro de sí mismo e inspirador.',
      ru: 'С вашей природой Огня это имя создает характер уверенной красоты и сияющего самовыражения. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию самоуверенного и вдохновляющего характера.',
      ar: 'مع طبيعتك النارية، يخلق هذا الاسم شخصية من الجمال الواثق والتعبير عن الذات المشرق. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية واثقة من نفسها وملهمة.',
      hi: 'आपकी अग्नि प्रकृति के साथ, यह नाम आत्मविश्वास से भरपूर सुंदरता और उज्ज्वल आत्म-अभिव्यक्ति का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक आत्मविश्वासी और प्रेरक चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '다은_fire_01',
    harmony: {
      en: 'Your Fire nature and this name combine to create a character of abundant grace and radiant warmth. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a generous and brightly shining character.',
      ko: '당신의 화(火) 기운과 이 이름이 결합하여 풍부한 은혜와 빛나는 온기를 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 너그럽고 밝게 빛나는 인격의 발전을 돕습니다.',
      ja: 'あなたの火の性質とこの名前が組み合わさって、豊かな恵みと輝く暖かさの性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と寛大で明るく輝く人格の育成を促進します。',
      zh: '你的火属性和这个名字相结合，创造了一个充满恩典和容光焕发的热情的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个慷慨和光明磊落的品格。',
      fr: 'Votre nature Feu et ce nom se combinent pour créer un caractère de grâce abondante et de chaleur rayonnante. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère généreux et brillamment brillant.',
      de: 'Ihre Feuernatur und dieser Name vereinen sich zu einem Charakter von überfließender Anmut und strahlender Wärme. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines großzügigen und strahlend leuchtenden Charakters.',
      es: 'Tu naturaleza de Fuego y este nombre se combinan para crear un carácter de abundante gracia y calidez radiante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter generoso y brillantemente brillante.',
      ru: 'Ваша природа Огня и это имя в сочетании создают характер обильной благодати и лучистого тепла. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию щедрого и ярко сияющего характера.',
      ar: 'تتحد طبيعتك النارية وهذا الاسم لخلق شخصية من النعمة الوفيرة والدفء المشع. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية سخية ومشرقة.',
      hi: 'आपकी अग्नि प्रकृति और यह नाम मिलकर प्रचुर कृपा और उज्ज्वल गर्मी का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक उदार और उज्ज्वल चमक वाले चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '서현_fire_01',
    harmony: {
      en: 'This name burns like a virtuous fire under auspicious stars, representing a moral character blessed with good fortune and destined to shine. Your Fire nature amplifies this, creating a path of integrity, warmth, and brilliant success.',
      ko: '이 이름은 상서로운 별빛 아래 타오르는 고결한 불꽃처럼, 행운의 축복을 받고 빛날 운명을 지닌 도덕적 품성을 나타냅니다. 당신의 화(火) 기운은 이를 증폭시켜, 진실성, 따뜻함, 그리고 눈부신 성공의 길을 만들어냅니다.',
      ja: 'この名前は、幸運な星の下で高潔な火のように燃え、幸運に恵まれ、輝く運命にある道徳的な性格を表しています。あなたの火の性質はこれを増幅し、誠実さ、暖かさ、そして輝かしい成功の道を作り出します。',
      zh: '这个名字像吉祥星光下的一团贤德之火一样燃烧，代表着一种有幸拥有好运并注定要发光的道德品格。你的火属性放大了这一点，创造了一条正直、温暖和辉煌成功的道路。',
      fr: 'Ce nom brûle comme un feu vertueux sous des étoiles auspicieuses, représentant un caractère moral béni de bonne fortune et destiné à briller. Votre nature Feu amplifie cela, créant un chemin d\'intégrité, de chaleur et de succès brillant.',
      de: 'Dieser Name brennt wie ein tugendhaftes Feuer unter glückverheißenden Sternen und repräsentiert einen moralischen Charakter, der mit Glück gesegnet und dazu bestimmt ist, zu glänzen. Ihre Feuernatur verstärkt dies und schafft einen Weg der Integrität, Wärme und des brillanten Erfolgs.',
      es: 'Este nombre arde como un fuego virtuoso bajo estrellas auspiciosas, representando un carácter moral bendecido con buena fortuna y destinado a brillar. Tu naturaleza de Fuego amplifica esto, creando un camino de integridad, calidez y éxito brillante.',
      ru: 'Это имя горит, как добродетельный огонь под благоприятными звездами, представляя собой моральный характер, благословленный удачей и предназначенный для сияния. Ваша природа Огня усиливает это, создавая путь целостности, тепла и блестящего успеха.',
      ar: 'هذا الاسم يحترق مثل نار فاضلة تحت النجوم الميمونة، ويمثل شخصية أخلاقية مباركة بحسن الحظ ومقدر لها أن تتألق. طبيعتك النارية تضخم هذا، مما يخلق طريقًا للنزاهة والدفء والنجاح الباهر.',
      hi: 'यह नाम शुभ सितारों के नीचे एक गुणी आग की तरह जलता है, जो सौभाग्य से धन्य और चमकने के लिए नियत एक नैतिक चरित्र का प्रतिनिधित्व करता है। आपकी अग्नि प्रकृति इसे बढ़ाती है, अखंडता, गर्मी और शानदार सफलता का मार्ग बनाती है।'
    }
  },
  {
    id: '지현_fire_01',
    harmony: {
      en: 'Your Fire nature harmonizes with this name to create a character of wise passion and virtuous spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of an insightful and morally strong character.',
      ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어 지혜로운 열정과 덕망 있는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 통찰력 있고 도덕적으로 강한 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質は、この名前と調和して、賢明な情熱と高潔な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、洞察力に富んだ道徳的に強い人格の育成への道を育みます。',
      zh: '你的火属性与这个名字相协调，创造了一个智慧的热情和高尚的精神的品格。这些品质与你的天生能力完美契合，为和谐成长和发展富有洞察力和道德上坚强的品格铺平了道路。',
      fr: 'Votre nature Feu s\'harmonise avec ce nom pour créer un caractère de passion sage et d\'esprit vertueux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère perspicace et moralement fort.',
      de: 'Ihre Feuer-Natur harmoniert mit diesem Namen, um einen Charakter von weiser Leidenschaft und tugendhaftem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines aufschlussreichen und moralisch starken Charakters.',
      es: 'Tu naturaleza de Fuego armoniza con este nombre para crear un carácter de pasión sabia y espíritu virtuoso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter perspicaz y moralmente fuerte.',
      ru: 'Ваша природа Огня гармонирует с этим именем, создавая характер мудрой страсти и добродетельного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию проницательного и морально сильного характера.',
      ar: 'تتناغم طبيعتك النارية مع هذا الاسم لخلق شخصية من العاطفة الحكيمة والروح الفاضلة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية ثاقبة وقوية أخلاقياً.',
      hi: 'आपकी अग्नि प्रकृति इस नाम के साथ बुद्धिमान जुनून और गुणी आत्मा का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक perspicacious और नैतिक रूप से मजबूत चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '예원_fire_01',
    harmony: {
      en: 'With your Fire nature, this name creates a character of beautiful passion and a radiant, artistic spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a creative and brightly shining character.',
      ko: '당신의 화(火) 기운으로, 이 이름은 아름다운 열정과 빛나는 예술적 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 창의적이고 밝게 빛나는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質で、この名前は美しい情熱と輝く芸術的な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、創造的で明るく輝く人格の育成への道を育みます。',
      zh: '你的火属性与这个名字相结合，创造了一个美丽的激情和容光焕发的艺术精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个富有创造力和光明磊落的品格。',
      fr: 'Avec votre nature Feu, ce nom crée un caractère de belle passion et d\'esprit artistique radieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère créatif et brillamment brillant.',
      de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von schöner Leidenschaft und einem strahlenden, künstlerischen Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines kreativen und strahlend leuchtenden Charakters.',
      es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de hermosa pasión y un espíritu artístico radiante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter creativo y brillantemente brillante.',
      ru: 'С вашей природой Огня это имя создает характер прекрасной страсти и сияющего, артистичного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию творческого и ярко сияющего характера.',
      ar: 'مع طبيعتك النارية، يخلق هذا الاسم شخصية من العاطفة الجميلة والروح الفنية المشرقة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية إبداعية ومشرقة.',
      hi: 'आपकी अग्नि प्रकृति के साथ, यह नाम सुंदर जुनून और एक उज्ज्वल, कलात्मक भावना का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक रचनात्मक और उज्ज्वल चमक वाले चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '소희_fire_01',
    harmony: {
      en: 'Your Fire nature and this name combine to create a character of pure passion and bright, cheerful joy. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a happy and radiant character.',
      ko: '당신의 화(火) 기운과 이 이름이 결합하여 순수한 열정과 밝고 명랑한 기쁨을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 행복하고 빛나는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質とこの名前が組み合わさって、純粋な情熱と明るく陽気な喜びの性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と幸福で輝く人格の育成への道を育みます。',
      zh: '你的火属性和这个名字相结合，创造了一个纯粹的热情和光明、快乐的喜悦的品格。这些品质与你的天生能力完美契合，为和谐成长和发展一个快乐和容光焕发的品格铺平了道路。',
      fr: 'Votre nature Feu et ce nom se combinent pour créer un caractère de pure passion et de joie vive et joyeuse. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère heureux et radieux.',
      de: 'Ihre Feuernatur und dieser Name vereinen sich zu einem Charakter von reiner Leidenschaft und strahlender, fröhlicher Freude. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines glücklichen und strahlenden Charakters.',
      es: 'Tu naturaleza de Fuego y este nombre se combinan para crear un carácter de pura pasión y brillante y alegre alegría. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter feliz y radiante.',
      ru: 'Ваша природа Огня и это имя в сочетании создают характер чистой страсти и светлой, веселой радости. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию счастливого и сияющего характера.',
      ar: 'تتحد طبيعتك النارية وهذا الاسم لخلق شخصية من العاطفة النقية والفرح المشرق والمبهج. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية سعيدة ومشرقة.',
      hi: 'आपकी अग्नि प्रकृति और यह नाम मिलकर शुद्ध जुनून और उज्ज्वल, हंसमुख आनंद का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक खुश और उज्ज्वल चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '지원_fire_01',
    harmony: {
      en: 'Your Fire nature harmonizes with this name to create a character of wise passion and a radiant, supportive spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of an insightful and community-oriented character.',
      ko: '당신의 화(火) 기운은 이 이름과 조화를 이루어 지혜로운 열정과 빛나고 지지적인 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 통찰력 있고 공동체 지향적인 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質は、この名前と調和して、賢明な情熱と輝く、支援的な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、洞察力に富んだコミュニティ志向の人格の育成への道を育みます。',
      zh: '你的火属性与这个名字相协调，创造了一个智慧的热情和容光焕发、支持性的精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个富有洞察力和面向社区的品格。',
      fr: 'Votre nature Feu s\'harmonise avec ce nom pour créer un caractère de passion sage et d\'esprit radieux et solidaire. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère perspicace et axé sur la communauté.',
      de: 'Ihre Feuernatur harmoniert mit diesem Namen, um einen Charakter von weiser Leidenschaft und einem strahlenden, unterstützenden Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines aufschlussreichen und gemeinschaftsorientierten Charakters.',
      es: 'Tu naturaleza de Fuego armoniza con este nombre para crear un carácter de pasión sabia y un espíritu radiante y de apoyo. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter perspicaz y orientado a la comunidad.',
      ru: 'Ваша природа Огня гармонирует с этим именем, создавая характер мудрой страсти и сияющего, поддерживающего духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию проницательного и ориентированного на сообщество характера.',
      ar: 'تتناغم طبيعتك النارية مع هذا الاسم لخلق شخصية من العاطفة الحكيمة والروح المشرقة والداعمة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية ثاقبة وموجهة نحو المجتمع.',
      hi: 'आपकी अग्नि प्रकृति इस नाम के साथ बुद्धिमान जुनून और एक उज्ज्वल, सहायक भावना का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक perspicacious और समुदाय-उन्मुख चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '예진_fire_01',
    harmony: {
      en: 'With your Fire nature, this name creates a character of beautiful passion and a precious, treasured spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a valuable and authentic character.',
      ko: '당신의 화(火) 기운으로, 이 이름은 아름다운 열정과 귀하고 소중한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 가치 있고 진정성 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質で、この名前は美しい情熱と貴重で大切な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、価値ある本物の人格の育成への道を育みます。',
      zh: '你的火属性与这个名字相结合，创造了一个美丽的热情和宝贵、珍爱的精神的品格。这些品质与你的天生能力完美契合，为和谐成长和发展一个有价值和真实品格铺平了道路。',
      fr: 'Avec votre nature Feu, ce nom crée un caractère de belle passion et d\'esprit précieux et chéri. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère précieux et authentique.',
      de: 'Mit Ihrer Feuer-Natur schafft dieser Name einen Charakter von schöner Leidenschaft und einem kostbaren, geschätzten Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines wertvollen und authentischen Charakters.',
      es: 'Con tu naturaleza de Fuego, este nombre crea un carácter de hermosa pasión y un espíritu precioso y atesorado. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter valioso y auténtico.',
      ru: 'С вашей природой Огня это имя создает характер прекрасной страсти и драгоценного, лелеемого духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию ценного и подлинного характера.',
      ar: 'مع طبيعتك النارية، يخلق هذا الاسم شخصية من العاطفة الجميلة والروح الثمينة والغالية. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية قيمة وأصيلة.',
      hi: 'आपकी अग्नि प्रकृति के साथ, यह नाम सुंदर जुनून और एक कीमती, पोषित आत्मा का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक मूल्यवान और प्रामाणिक चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '하영_fire_01',
    harmony: {
      en: 'Your Fire nature and this name combine to create a character of great passion and a prosperous, flourishing spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a successful and radiant character.',
      ko: '당신의 화(火) 기운과 이 이름이 결합하여 위대한 열정과 번영하고 번창하는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성공적이고 빛나는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの火の性質とこの名前が組み合わさって、大きな情熱と繁栄し、繁栄する精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と成功した輝く人格の育成を促進します。',
      zh: '你的火属性和这个名字相结合，创造了一个充满激情和繁荣、昌盛的精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个成功和容光焕发的品格。',
      fr: 'Votre nature Feu et ce nom se combinent pour créer un caractère de grande passion et un esprit prospère et florissant. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère réussi et radieux.',
      de: 'Ihre Feuernatur und dieser Name vereinen sich zu einem Charakter von großer Leidenschaft und einem prosperierenden, blühenden Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines erfolgreichen und strahlenden Charakters.',
      es: 'Tu naturaleza de Fuego y este nombre se combinan para crear un carácter de gran pasión y un espíritu próspero y floreciente. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter exitoso y radiante.',
      ru: 'Ваша природа Огня и это имя в сочетании создают характер великой страсти и процветающего, цветущего духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию успешного и сияющего характера.',
      ar: 'تتحد طبيعتك النارية وهذا الاسم لخلق شخصية ذات شغف كبير وروح مزدهرة ومزدهرة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية ناجحة ومشرقة.',
      hi: 'आपकी अग्नि प्रकृति और यह नाम मिलकर महान जुनून और एक समृद्ध, फलते-फूलते भावना का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सफल और उज्ज्वल चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '나연_fire_01',
    harmony: {
      en: 'Your heart burns with the sacred fire of connection, destined to weave together souls who need each other. Like a bright flame that draws people from the cold, your Fire nature and this name allow you to create warmth and belonging wherever you shine.',
      ko: '당신의 마음은 서로를 필요로 하는 영혼들을 하나로 엮을 운명을 지닌, 신성한 연결의 불꽃으로 타오릅니다. 추위 속에서 사람들을 끌어당기는 밝은 불꽃처럼, 당신의 화(火) 기운과 이 이름은 당신이 빛나는 곳마다 따뜻함과 소속감을 만들어내게 합니다.',
      ja: 'あなたの心は、お互いを必要とする魂を結びつける運命にある、神聖なつながりの火で燃えています。寒さから人々を引き寄せる明るい炎のように、あなたの火の性質とこの名前は、あなたが輝くどこでも暖かさと帰属意識を生み出すことを可能にします。',
      zh: '你的心燃烧着神圣的联系之火，注定要将需要彼此的灵魂编织在一起。就像一团明亮的火焰，将人们从寒冷中吸引过来一样，你的火属性和这个名字让你无论在哪里闪耀，都能创造出温暖和归属感。',
      fr: 'Votre cœur brûle du feu sacré de la connexion, destiné à tisser ensemble des âmes qui ont besoin les unes des autres. Telle une flamme brillante qui attire les gens du froid, votre nature Feu et ce nom vous permettent de créer de la chaleur et un sentiment d\'appartenance partout où vous brillez.',
      de: 'Ihr Herz brennt mit dem heiligen Feuer der Verbindung und ist dazu bestimmt, Seelen zusammenzuweben, die einander brauchen. Wie eine helle Flamme, die Menschen aus der Kälte anzieht, ermöglichen Ihnen Ihre Feuernatur und dieser Name, Wärme und Zugehörigkeit zu schaffen, wo immer Sie leuchten.',
      es: 'Tu corazón arde con el fuego sagrado de la conexión, destinado a entrelazar almas que se necesitan mutuamente. Como una llama brillante que atrae a la gente del frío, tu naturaleza de Fuego y este nombre te permiten crear calidez y pertenencia dondequiera que brilles.',
      ru: 'Ваше сердце горит священным огнем связи, которому суждено сплести вместе души, которые нуждаются друг в друге. Подобно яркому пламени, которое привлекает людей из холода, ваша природа Огня и это имя позволяют вам создавать тепло и принадлежность, где бы вы ни сияли.',
      ar: 'قلبك يحترق بنار الاتصال المقدسة، ومقدر له أن ينسج معًا الأرواح التي تحتاج إلى بعضها البعض. مثل اللهب الساطع الذي يجذب الناس من البرد، تسمح لك طبيعتك النارية وهذا الاسم بخلق الدفء والانتماء أينما كنت تتألق.',
      hi: 'आपका दिल संबंध की पवित्र अग्नि से जलता है, जो एक-दूसरे की ज़रूरत वाली आत्माओं को एक साथ बुनने के लिए नियत है। एक उज्ज्वल लौ की तरह जो लोगों को ठंड से खींचती है, आपकी अग्नि प्रकृति और यह नाम आपको जहाँ भी चमकते हैं, गर्मी और अपनेपन का एहसास कराते हैं।'
    }
  },
  {
    id: '정연_fire_01',
    harmony: {
      en: 'This name burns like a righteous fire that forges pure and honest connections. With your Fire nature, this represents a character built on moral strength, warm sincerity, and the courage to create and protect truthful relationships.',
      ko: '이 이름은 순수하고 정직한 인연을 맺는 정의로운 불꽃처럼 타오릅니다. 당신의 화(火) 기운과 함께, 이는 도덕적 힘, 따뜻한 진실성, 그리고 진실된 관계를 만들고 지키는 용기 위에 세워진 품성을 나타냅니다.',
      ja: 'この名前は、純粋で正直なつながりを築く義の火のように燃えます。あなたの火の性質で、これは道徳的な強さ、温かい誠実さ、そして真実の関係を創造し保護する勇気の上に築かれた性格を表しています。',
      zh: '这个名字像一团正义之火一样燃烧，锻造纯洁而诚实的联系。你的火属性代表着建立在道德力量、热情真诚以及创造和保护真实关系的勇气之上的品格。',
      fr: 'Ce nom brûle comme un feu juste qui forge des liens purs et honnêtes. Avec votre nature Feu, cela représente un caractère bâti sur la force morale, la sincérité chaleureuse et le courage de créer et de protéger des relations véridiques.',
      de: 'Dieser Name brennt wie ein rechtschaffenes Feuer, das reine und ehrliche Verbindungen schmiedet. Mit Ihrer Feuernatur repräsentiert dies einen Charakter, der auf moralischer Stärke, warmer Aufrichtigkeit und dem Mut, wahrhaftige Beziehungen zu schaffen und zu schützen, aufgebaut ist.',
      es: 'Este nombre arde como un fuego justo que forja conexiones puras y honestas. Con tu naturaleza de Fuego, esto representa un carácter construido sobre la fuerza moral, la sinceridad cálida y el coraje para crear y proteger relaciones veraces.',
      ru: 'Это имя горит, как праведный огонь, который выковывает чистые и честные связи. С вашей природой Огня это представляет собой характер, построенный на моральной силе, теплой искренности и смелости создавать и защищать правдивые отношения.',
      ar: 'هذا الاسم يحترق مثل نار праведной تصوغ روابط نقية وصادقة. مع طبيعتك النارية، يمثل هذا شخصية مبنية على القوة الأخلاقية والإخلاص الدافئ والشجاعة لخلق وحماية العلاقات الصادقة.',
      hi: 'यह नाम एक धर्मी आग की तरह जलता है जो शुद्ध और ईमानदार संबंध बनाता है। आपकी अग्नि प्रकृति के साथ, यह नैतिक शक्ति, गर्म ईमानदारी और सच्चे रिश्तों को बनाने और उनकी रक्षा करने के साहस पर बने चरित्र का प्रतिनिधित्व करता है।'
    }
  },
  {
    id: '이준_earth_01',
    harmony: {
      en: 'Your Earth nature harmonizes with this name, providing a stable foundation for nurturing talent and steady growth. The name’s meaning of “talented” resonates with your capacity for grounding and support, creating abundance like fertile soil that nourishes countless seeds into life.',
      ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어, 재능을 키우고 꾸준히 성장할 수 있는 안정적인 기반을 제공합니다. 이름에 담긴 ‘재능’의 의미는 당신의 굳건한 지지 능력과 공명하며, 수많은 씨앗에 생명을 불어넣는 비옥한 토양처럼 풍요를 창조합니다.',
      ja: 'あなたの地球の性質は、この名前と調和し、才能を育み、着実な成長を遂げるための安定した基盤を提供します。「才能のある」という意味の名前は、あなたのグラウンディングとサポートの能力と共鳴し、無数の種子を生命に育む肥沃な土壌のような豊かさを生み出します。',
      zh: '你的土属性与这个名字相协调，为培养才华和稳定成长提供了稳定的基础。“才华横溢”这个名字的含义与你的扎根和支持能力产生共鸣，创造出像肥沃的土壤一样滋养无数种子生命的富足。',
      fr: 'Votre nature Terre s\'harmonise avec ce nom, offrant une base stable pour nourrir le talent et une croissance régulière. La signification du nom « talentueux » résonne avec votre capacité d\'ancrage et de soutien, créant une abondance comme une terre fertile qui nourrit d\'innombrables graines pour leur donner vie.',
      de: 'Ihre Erdnatur harmoniert mit diesem Namen und bietet eine stabile Grundlage für die Förderung von Talent und stetigem Wachstum. Die Bedeutung des Namens „talentiert“ schwingt mit Ihrer Fähigkeit zur Erdung und Unterstützung mit und schafft Fülle wie fruchtbarer Boden, der unzählige Samen zum Leben erweckt.',
      es: 'Tu naturaleza de Tierra armoniza con este nombre, proporcionando una base estable para nutrir el talento y el crecimiento constante. El significado del nombre de \'talentoso\' resuena con tu capacidad de enraizamiento y apoyo, creando abundancia como la tierra fértil que nutre innumerables semillas para que cobren vida.',
      ru: 'Ваша природа Земли гармонирует с этим именем, обеспечивая стабильную основу для воспитания таланта и устойчивого роста. Значение имени «талантливый» резонирует с вашей способностью к заземлению и поддержке, создавая изобилие, подобное плодородной почве, которая питает бесчисленные семена к жизни.',
      ar: 'تتناغم طبيعتك الأرضية مع هذا الاسم، مما يوفر أساسًا مستقرًا لرعاية المواهب والنمو المطرد. صدى معنى الاسم \'الموهوب\' مع قدرتك على التأريض والدعم، مما يخلق وفرة مثل التربة الخصبة التي تغذي بذورًا لا حصر لها في الحياة.',
      hi: 'आपकी पृथ्वी की प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो प्रतिभा को पोषित करने और स्थिर विकास के लिए एक स्थिर आधार प्रदान करती है। \'प्रतिभाशाली\' नाम का अर्थ ग्राउंडिंग और समर्थन के लिए आपकी क्षमता के साथ प्रतिध्वनित होता है, जो उपजाऊ मिट्टी की तरह प्रचुरता पैदा करता है जो अनगिनत बीजों को जीवन में पोषित करता है।'
    }
  },
  {
    id: '주원_earth_01',
    harmony: {
      en: 'With your Earth nature, you embody this name’s meaning as a reliable, primary source of stability and prosperity. This aligns with your ability to provide grounding support, creating lasting abundance like the bedrock that feeds eternal springs and sustains entire ecosystems.',
      ko: '당신의 토(土) 기운과 함께, 당신은 안정과 번영의 믿음직한 근원이라는 이 이름의 의미를 구현합니다. 이는 흔들리지 않는 지원을 제공하는 당신의 능력과 일치하며, 영원한 샘물을 공급하고 생태계 전체를 유지하는 기반암처럼 지속적인 풍요를 창조합니다.',
      ja: 'あなたの地球の性質で、あなたはこの名前の意味を、安定と繁栄の信頼できる主要な源として具現化します。これは、あなたのグラウンディングサポートを提供する能力と一致し、永遠の泉を養い、生態系全体を維持する岩盤のような永続的な豊かさを生み出します。',
      zh: '你的土属性让你体现了这个名字的含义，即稳定和繁荣的可靠、主要来源。这与你提供扎根支持的能力相一致，创造出像基岩一样的持久富足，它为永恒的泉水提供水源，并维持整个生态系统。',
      fr: 'Avec votre nature Terre, vous incarnez la signification de ce nom en tant que source fiable et principale de stabilité et de prospérité. Cela correspond à votre capacité à fournir un soutien d\u0027ancrage, créant une abondance durable comme le substrat rocheux qui alimente les sources éternelles et soutient des écosystèmes entiers.',
      de: 'Mit Ihrer Erdnatur verkörpern Sie die Bedeutung dieses Namens als zuverlässige, primäre Quelle für Stabilität und Wohlstand. Dies steht im Einklang mit Ihrer Fähigkeit, erdende Unterstützung zu bieten und dauerhaften Überfluss zu schaffen, wie das Grundgestein, das ewige Quellen speist und ganze Ökosysteme erhält.',
      es: 'Con tu naturaleza de Tierra, encarnas el significado de este nombre como una fuente confiable y principal de estabilidad y prosperidad. Esto se alinea con tu capacidad para proporcionar un apoyo de base, creando una abundancia duradera como el lecho de roca que alimenta los manantiales eternos y sostiene ecosistemas enteros.',
      ru: 'С вашей природой Земли вы воплощаете значение этого имени как надежный, основной источник стабильности и процветания. Это согласуется с вашей способностью оказывать заземляющую поддержку, создавая прочное изобилие, подобное коренной породе, которая питает вечные источники и поддерживает целые экосистемы.',
      ar: 'مع طبيعتك الأرضية، فإنك تجسد معنى هذا الاسم كمصدر موثوق وأساسي للاستقرار والازدهار. يتماشى هذا مع قدرتك على توفير الدعم الأساسي، مما يخلق وفرة دائمة مثل الأساس الصخري الذي يغذي الينابيع الأبدية ويحافظ على النظم البيئية بأكملها.',
      hi: 'आपकी पृथ्वी प्रकृति के साथ, आप इस नाम के अर्थ को स्थिरता और समृद्धि के एक विश्वसनीय, प्राथमिक स्रोत के रूप में अपनाते हैं। यह ग्राउंडिंग समर्थन प्रदान करने की आपकी क्षमता के साथ संरेखित होता है, जो आधारशिला की तरह स्थायी प्रचुरता पैदा करता है जो शाश्वत झरनों को खिलाता है और पूरे पारिस्थितिकी तंत्र को बनाए रखता है।'
    }
  },
  {
    id: '우진_earth_01',
    harmony: {
      en: 'Like fertile soil that receives rain and yields a harvest of truth, your Earth nature and this name combine to represent honest, fruitful productivity that benefits all. You are a foundation of truth and abundance.',
      ko: '비를 받아 진실의 열매를 맺는 비옥한 토양처럼, 당신의 토(土) 기운과 이 이름은 모두에게 이로운 정직하고 풍성한 결실을 맺는 조화를 이룹니다. 당신은 진실과 풍요의 기반입니다.',
      ja: '雨を受けて真実の収穫をもたらす肥沃な土壌のように、あなたの地球の性質とこの名前は、すべての人に利益をもたらす正直で実りある生産性を表すために組み合わされています。あなたは真実と豊かさの基盤です。',
      zh: '就像肥沃的土壤接受雨水并结出真理的果实一样，你的土属性和这个名字相结合，代表着诚实、富有成效的生产力，造福所有人。你是真理和富足的基础。',
      fr: 'Telle une terre fertile qui reçoit la pluie et produit une récolte de vérité, votre nature Terre et ce nom se combinent pour représenter une productivité honnête et fructueuse qui profite à tous. Vous êtes un fondement de vérité et d\'abondance.',
      de: 'Wie fruchtbarer Boden, der Regen empfängt und eine Ernte der Wahrheit hervorbringt, verbinden sich Ihre Erdnatur und dieser Name, um ehrliche, fruchtbare Produktivität darzustellen, die allen zugute kommt. Sie sind ein Fundament der Wahrheit und des Überflusses.',
      es: 'Como la tierra fértil que recibe la lluvia y produce una cosecha de verdad, tu naturaleza de Tierra y este nombre se combinan para representar una productividad honesta y fructífera que beneficia a todos. Eres un fundamento de verdad y abundancia.',
      ru: 'Подобно плодородной почве, которая получает дождь и приносит урожай истины, ваша природа Земли и это имя в сочетании представляют собой честную, плодотворную производительность, которая приносит пользу всем. Вы - основа истины и изобилия.',
      ar: 'مثل التربة الخصبة التي تتلقى المطر وتنتج حصادًا من الحقيقة، تتحد طبيعتك الأرضية وهذا الاسم لتمثيل إنتاجية صادقة ومثمرة تفيد الجميع. أنت أساس الحقيقة والوفرة.',
      hi: 'उपजाऊ मिट्टी की तरह जो बारिश प्राप्त करती है और सच्चाई की फसल देती है, आपकी पृथ्वी की प्रकृति और यह नाम ईमानदार, फलदायी उत्पादकता का प्रतिनिधित्व करने के लिए गठबंधन करते हैं जो सभी को लाभ पहुंचाता है। आप सच्चाई और प्रचुरता की नींव हैं।'
    }
  },
  {
    id: '예준_earth_01',
    harmony: {
      en: 'Your destiny combines refined talent with humble precision, blessed to create masterworks through a respectful and grounded character. Like a wise craftsman who honors tradition while innovating, your Earth nature helps you achieve an excellence that inspires deep admiration.',
      ko: '당신의 운명은 세련된 재능과 겸손한 정밀함을 결합하여, 존중심 있고 안정된 성품을 통해 걸작을 창조하도록 축복받았습니다. 전통을 존중하며 혁신하는 현명한 장인처럼, 당신의 토(土) 기운은 깊은 감탄을 자아내는 탁월함을 성취하도록 돕습니다.',
      ja: 'あなたの運命は、洗練された才能と謙虚な正確さを組み合わせ、敬意と思いやりのある性格を通して傑作を生み出すように祝福されています。伝統を尊重しながら革新する賢明な職人のように、あなたの地球の性質は、深い賞賛を刺激する卓越性を達成するのに役立ちます。',
      zh: '你的命运将精致的才华与谦逊的精确相结合，有幸通过一个受人尊敬和脚踏实地的品格创作出杰作。就像一位在创新的同时尊重传统的智慧工匠一样，你的土属性帮助你达到一种激发深深钦佩的卓越。',
      fr: 'Votre destin combine un talent raffiné avec une humble précision, béni de créer des chefs-d\'œuvre grâce à un caractère respectueux et ancré. Tel un sage artisan qui honore la tradition tout en innovant, votre nature Terre vous aide à atteindre une excellence qui inspire une profonde admiration.',
      de: 'Ihr Schicksal verbindet verfeinertes Talent mit bescheidener Präzision und ist gesegnet, durch einen respektvollen und geerdeten Charakter Meisterwerke zu schaffen. Wie ein weiser Handwerker, der die Tradition ehrt und gleichzeitig innovativ ist, hilft Ihnen Ihre Erdnatur, eine Exzellenz zu erreichen, die tiefe Bewunderung hervorruft.',
      es: 'Tu destino combina un talento refinado con una precisión humilde, bendecido para crear obras maestras a través de un carácter respetuoso y arraigado. Como un sabio artesano que honra la tradición mientras innova, tu naturaleza de Tierra te ayuda a alcanzar una excelencia que inspira una profunda admiración.',
      ru: 'Ваша судьба сочетает в себе утонченный талант со скромной точностью, благословленная на создание шедевров благодаря уважительному и приземленному характеру. Подобно мудрому мастеру, который чтит традиции, внедряя новшества, ваша природа Земли помогает вам достичь совершенства, которое вызывает глубокое восхищение.',
      ar: 'يجمع مصيرك بين الموهبة الرفيعة والدقة المتواضعة، المباركة لخلق روائع من خلال شخصية محترمة ومتجذرة. مثل الحرفي الحكيم الذي يكرم التقاليد أثناء الابتكار، تساعدك طبيعتك الأرضية على تحقيق التميز الذي يلهم الإعجاب العميق.',
      hi: 'आपका भाग्य विनम्र परिशुद्धता के साथ परिष्कृत प्रतिभा को जोड़ता है, जो एक सम्मानजनक और जमीनी चरित्र के माध्यम से उत्कृष्ट कृतियों को बनाने के लिए धन्य है। एक बुद्धिमान शिल्पकार की तरह जो नवाचार करते हुए परंपरा का सम्मान करता है, आपकी पृथ्वी प्रकृति आपको एक ऐसी उत्कृष्टता प्राप्त करने में मदद करती है जो गहरी प्रशंसा को प्रेरित करती है।'
    }
  },
  {
    id: '성현_earth_01',
    harmony: {
      en: 'Your soul stands as a sacred mountain embodying divine virtue, destined to provide moral guidance and unwavering stability. Like an ancient peak that serves as a beacon, your Earth nature solidifies a character that creates a foundation of trust and righteousness for all.',
      ko: '당신의 영혼은 신성한 덕을 구현하는 성산(聖山)으로, 도덕적 지침과 확고한 안정을 제공할 운명입니다. 길잡이가 되는 오래된 봉우리처럼, 당신의 토(土) 기운은 모두를 위한 신뢰와 정의의 기초를 다지는 품성을 굳건히 합니다.',
      ja: 'あなたの魂は、神聖な美徳を具現化する聖なる山として立ち、道徳的な導きと揺るぎない安定を提供する運命にあります。ビーコンとして機能する古代の山頂のように、あなたの地球の性質は、すべての人のための信頼と義の基盤を創造する性格を固めます。',
      zh: '你的灵魂像一座体现神圣美德的圣山一样矗立，注定要提供道德指引和坚定不移的稳定。就像一座作为灯塔的古老山峰一样，你的土属性巩固了一种为所有人创造信任和正义基础的品格。',
      fr: 'Votre âme se dresse comme une montagne sacrée incarnant la vertu divine, destinée à fournir des conseils moraux et une stabilité inébranlable. Tel un ancien sommet qui sert de phare, votre nature Terre solidifie un caractère qui crée un fondement de confiance et de droiture pour tous.',
      de: 'Ihre Seele steht als heiliger Berg, der die göttliche Tugend verkörpert und dazu bestimmt ist, moralische Führung und unerschütterliche Stabilität zu bieten. Wie ein alter Gipfel, der als Leuchtfeuer dient, festigt Ihre Erdnatur einen Charakter, der ein Fundament des Vertrauens und der Gerechtigkeit für alle schafft.',
      es: 'Tu alma se erige como una montaña sagrada que encarna la virtud divina, destinada a proporcionar guía moral y una estabilidad inquebrantable. Como un pico antiguo que sirve de faro, tu naturaleza de Tierra solidifica un carácter que crea una base de confianza y rectitud para todos.',
      ru: 'Ваша душа стоит как священная гора, воплощающая божественную добродетель, которой суждено давать моральное руководство и непоколебимую стабильность. Подобно древней вершине, которая служит маяком, ваша природа Земли укрепляет характер, который создает основу доверия и праведности для всех.',
      ar: 'روحك تقف كجبل مقدس يجسد الفضيلة الإلهية، ومقدر لها أن تقدم التوجيه الأخلاقي والاستقرار الذي لا يتزعزع. مثل قمة قديمة تعمل كمنارة، فإن طبيعتك الأرضية ترسخ شخصية تخلق أساسًا من الثقة والبر للجميع.',
      hi: 'आपकी आत्मा दिव्य पुण्य का प्रतीक एक पवित्र पर्वत के रूप में खड़ी है, जो नैतिक मार्गदर्शन और अटूट स्थिरता प्रदान करने के लिए नियत है। एक प्राचीन शिखर की तरह जो एक प्रकाशस्तंभ के रूप में कार्य करता है, आपकी पृथ्वी प्रकृति एक ऐसे चरित्र को मजबूत करती है जो सभी के लिए विश्वास और धार्मिकता की नींव बनाता है।'
    }
  },
  {
    id: '준영_earth_01',
    harmony: {
      en: 'Your Earth nature and this name create a character of talented growth and prosperous spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a successful and well-grounded character.',
      ko: '당신의 토(土) 기운과 이 이름이 결합하여 재능 있는 성장과 번영하는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성공적이고 안정된 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質とこの名前は、才能ある成長と繁栄する精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と成功した、地に足の着いた人格の育成への道を育みます。',
      zh: '你的土属性和这个名字相结合，创造了一个才华横溢的成长和繁荣精神的品格。这些品质与你的天生能力完美契合，为和谐成长和发展一个成功和脚踏实地的品格铺平了道路。',
      fr: 'Votre nature Terre et ce nom créent un caractère de croissance talentueuse et d\'esprit prospère. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère réussi et bien ancré.',
      de: 'Ihre Erdnatur und dieser Name schaffen einen Charakter von talentiertem Wachstum und prosperierendem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines erfolgreichen und bodenständigen Charakters.',
      es: 'Tu naturaleza de Tierra y este nombre crean un carácter de crecimiento talentoso y espíritu próspero. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter exitoso y bien fundamentado.',
      ru: 'Ваша природа Земли и это имя создают характер талантливого роста и процветающего духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию успешного и основательного характера.',
      ar: 'تخلق طبيعتك الأرضية وهذا الاسم شخصية ذات نمو موهوب وروح مزدهرة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية ناجحة وراسخة.',
      hi: 'आपकी पृथ्वी प्रकृति और यह नाम प्रतिभाशाली विकास और समृद्ध भावना का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सफल और अच्छी तरह से आधारित चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '윤수_earth_01',
    harmony: {
      en: 'With your Earth nature, this name creates a character of prosperous growth and excellent spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a high-achieving and abundant character.',
      ko: '당신의 토(土) 기운으로, 이 이름은 번영하는 성장과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 높은 성취를 이루고 풍요로운 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質で、この名前は繁栄した成長と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、高い達成感と豊かな人格の育成への道を育みます。',
      zh: '你的土属性与这个名字相结合，创造了一个繁荣成长和卓越精神的品格。这些品质与你的天生能力完美契合，为和谐成长和发展一个成就卓著、富足的品格铺平了道路。',
      fr: 'Avec votre nature Terre, ce nom crée un caractère de croissance prospère et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère très performant et abondant.',
      de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von prosperierendem Wachstum und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines leistungsstarken und reichhaltigen Charakters.',
      es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de crecimiento próspero y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter de alto rendimiento y abundante.',
      ru: 'С вашей природой Земли это имя создает характер процветающего роста и превосходного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию высокодоходного и изобильного характера.',
      ar: 'مع طبيعتك الأرضية، يخلق هذا الاسم شخصية من النمو المزدهر والروح الممتازة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية عالية الإنجاز وفيرة.',
      hi: 'आपकी पृथ्वी प्रकृति के साथ, यह नाम समृद्ध विकास और उत्कृष्ट भावना का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक उच्च-उपलब्धि और प्रचुर चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '상우_earth_01',
    harmony: {
      en: 'Your Earth nature and this name combine to create a character of mutual growth and excellent spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a cooperative and high-achieving character.',
      ko: '당신의 토(土) 기운과 이 이름이 결합하여 상호 성장과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 협력적이고 높은 성취를 이루는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質とこの名前が組み合わさって、相互の成長と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、協力的で高い達成感のある人格の育成への道を育みます。',
      zh: '你的土属性和这个名字相结合，创造了一个相互成长和卓越精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个合作和高成就的品格。',
      fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance mutuelle et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère coopératif et très performant.',
      de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von gegenseitigem Wachstum und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines kooperativen und leistungsstarken Charakters.',
      es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento mutuo y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter cooperativo y de alto rendimiento.',
      ru: 'Ваша природа Земли и это имя в сочетании создают характер взаимного роста и превосходного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию кооперативного и высокодоходного характера.',
      ar: 'تتحد طبيعتك الأرضية وهذا الاسم لخلق شخصية من النمو المتبادل والروح الممتازة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية تعاونية وعالية الإنجاز.',
      hi: 'आपकी पृथ्वी प्रकृति और यह नाम मिलकर आपसी विकास और उत्कृष्ट भावना का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सहकारी और उच्च-उपलब्धि वाले चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '진우_earth_01',
    harmony: {
      en: 'Your Earth nature harmonizes with this name to create a character of precious growth and excellent spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a valuable and high-achieving character.',
      ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 귀한 성장과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 가치 있고 높은 성취를 이루는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質は、この名前と調和して、貴重な成長と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と価値ある高い達成感のある人格の育成を促進します。',
      zh: '你的土属性与这个名字相协调，创造了一个宝贵的成长和卓越的精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个有价值和高成就的品格。',
      fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de croissance précieuse et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère précieux et très performant.',
      de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von kostbarem Wachstum und ausgezeichnetem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines wertvollen und leistungsstarken Charakters.',
      es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de crecimiento precioso y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter valioso y de alto rendimiento.',
      ru: 'Ваша природа Земли гармонирует с этим именем, создавая характер драгоценного роста и превосходного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию ценного и высокодоходного характера.',
      ar: 'تتناغم طبيعتك الأرضية مع هذا الاسم لخلق شخصية ذات نمو ثمين وروح ممتازة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية قيمة وعالية الإنجاز.',
      hi: 'आपकी पृथ्वी की प्रकृति इस नाम के साथ कीमती विकास और उत्कृष्ट भावना का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक मूल्यवान और उच्च-उपलब्धि वाले चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '성진_earth_01',
    harmony: {
      en: 'With your Earth nature, this name creates a character of holy growth and a precious spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a sacred and valuable character.',
      ko: '당신의 토(土) 기운으로, 이 이름은 성스러운 성장과 귀한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성스럽고 가치 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質で、この名前は聖なる成長と貴重な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、神聖で価値のある人格の育成への道を育みます。',
      zh: '你的土属性与这个名字相结合，创造了一个神圣成长和宝贵精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个神圣而有价值的品格。',
      fr: 'Avec votre nature Terre, ce nom crée un caractère de croissance sainte et d\'esprit précieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère sacré et précieux.',
      de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von heiligem Wachstum und einem kostbaren Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines heiligen und wertvollen Charakters.',
      es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de crecimiento santo y un espíritu precioso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter sagrado y valioso.',
      ru: 'С вашей природой Земли это имя создает характер святого роста и драгоценного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию священного и ценного характера.',
      ar: 'مع طبيعتك الأرضية، يخلق هذا الاسم شخصية من النمو المقدس والروح الثمينة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية مقدسة وقيمة.',
      hi: 'आपकी पृथ्वी प्रकृति के साथ, यह नाम पवित्र विकास और एक कीमती आत्मा का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक पवित्र और मूल्यवान चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '준서_earth_01',
    harmony: {
      en: 'Your Earth nature and this name combine to create a character of talented growth and auspicious spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a skilled and fortunate character.',
      ko: '당신의 토(土) 기운과 이 이름이 결합하여 재능 있는 성장과 상서로운 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 숙련되고 행운이 깃든 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質とこの名前が組み合わさって、才能ある成長と縁起の良い精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、熟練した幸運な人格の育成への道を育みます。',
      zh: '你的土属性和这个名字相结合，创造了一个才华横溢的成长和吉祥精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个熟练和幸运的品格。',
      fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance talentueuse et d\'esprit auspicieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère compétent et chanceux.',
      de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von talentiertem Wachstum und glückverheißendem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines qualifizierten und glücklichen Charakters.',
      es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento talentoso y espíritu auspicioso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter hábil y afortunado.',
      ru: 'Ваша природа Земли и это имя в сочетании создают характер талантливого роста и благоприятного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию квалифицированного и удачливого характера.',
      ar: 'تتحد طبيعتك الأرضية وهذا الاسم لخلق شخصية ذات نمو موهوب وروح ميمونة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية ماهرة ومحظوظة.',
      hi: 'आपकी पृथ्वी प्रकृति और यह नाम मिलकर प्रतिभाशाली विकास और शुभ भावना का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक कुशल और भाग्यशाली चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '윤호_earth_01',
    harmony: {
      en: 'Your Earth nature harmonizes with this name to create a character of prosperous growth and great spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a successful and grand character.',
      ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 번영하는 성장과 위대한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성공적이고 위대한 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質は、この名前と調和して、繁栄した成長と偉大な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と成功した壮大な人格の育成を促進します。',
      zh: '你的土属性与这个名字相协调，创造了一个繁荣成长和伟大精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个成功和宏伟的品格。',
      fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de croissance prospère et de grand esprit. Ces qualités s\'alignent parfaitement avec vos-capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère réussi et grandiose.',
      de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von prosperierendem Wachstum und großem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines erfolgreichen und großen Charakters.',
      es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de crecimiento próspero y gran espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter exitoso y grandioso.',
      ru: 'Ваша природа Земли гармонирует с этим именем, создавая характер процветающего роста и великого духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию успешного и великого характера.',
      ar: 'تتناغم طبيعتك الأرضية مع هذا الاسم لخلق شخصية من النمو المزدهر والروح العظيمة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية ناجحة وكبيرة.',
      hi: 'आपकी पृथ्वी की प्रकृति इस नाम के साथ समृद्ध विकास और महान भावना का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सफल और भव्य चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '상민_earth_01',
    harmony: {
      en: 'With your Earth nature, this name creates a character of mutual growth and quick thinking. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a cooperative and agile character.',
      ko: '당신의 토(土) 기운으로, 이 이름은 상호 성장과 빠른 사고를 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 협력적이고 민첩한 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質で、この名前は相互の成長と素早い思考の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、協力的で機敏な人格の育成への道を育みます。',
      zh: '你的土属性与这个名字相结合，创造了一个相互成长和敏捷思维的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个合作和敏捷的品格。',
      fr: 'Avec votre nature Terre, ce nom crée un caractère de croissance mutuelle et de pensée rapide. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère coopératif et agile.',
      de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von gegenseitigem Wachstum und schnellem Denken. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines kooperativen und agilen Charakters.',
      es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de crecimiento mutuo y pensamiento rápido. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter cooperativo y ágil.',
      ru: 'С вашей природой Земли это имя создает характер взаимного роста и быстрого мышления. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию кооперативного и подвижного характера.',
      ar: 'مع طبيعتك الأرضية، يخلق هذا الاسم شخصية من النمو المتبادل والتفكير السريع. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية تعاونية ورشيقة.',
      hi: 'आपकी पृथ्वी प्रकृति के साथ, यह नाम आपसी विकास और त्वरित सोच का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सहकारी और फुर्तीले चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '성수_earth_01',
    harmony: {
      en: 'Your Earth nature and this name combine to create a character of holy growth and excellent spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a sacred and high-achieving character.',
      ko: '당신의 토(土) 기운과 이 이름이 결합하여 성스러운 성장과 뛰어난 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 성스럽고 높은 성취를 이루는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質とこの名前が組み合わさって、聖なる成長と優れた精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、神聖で高い達成感のある人格の育成への道を育みます。',
      zh: '你的土属性和这个名字相结合，创造了一个神圣成长和卓越精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个神圣和高成就的品格。',
      fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance sainte et d\'excellent esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère sacré et très performant.',
      de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von heiligem Wachstum und ausgezeichnetem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines heiligen und leistungsstarken Charakters.',
      es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento santo y excelente espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter sagrado y de alto rendimiento.',
      ru: 'Ваша природа Земли и это имя в сочетании создают характер святого роста и превосходного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию священного и высокодоходного характера.',
      ar: 'تتحد طبيعتك الأرضية وهذا الاسم لخلق شخصية من النمو المقدس والروح الممتازة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية مقدسة وعالية الإنجاز.',
      hi: 'आपकी पृथ्वी प्रकृति और यह नाम मिलकर पवित्र विकास और उत्कृष्ट भावना का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक पवित्र और उच्च-उपलब्धि वाले चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '승민_earth_01',
    harmony: {
      en: 'Your Earth nature harmonizes with this name, representing a success built on solid foundations and determined effort. The name’s meaning of victory and quickness aligns with your ability to achieve goals through a combination of persistence and agile thinking.',
      ko: '당신의 토(土) 기운은 이 이름과 조화를 이루며, 견고한 기반과 결단력 있는 노력 위에 세워진 성공을 나타냅니다. 이름에 담긴 승리와 민첩함의 의미는 끈기와 민첩한 사고의 결합을 통해 목표를 달성하는 당신의 타고난 능력과 일치합니다.',
      ja: 'あなたの地球の性質は、この名前と調和し、強固な基盤と断固たる努力の上に築かれた成功を表しています。勝利と素早さという意味の名前は、粘り強さと機敏な思考の組み合わせを通じて目標を達成するあなたの能力と一致しています。',
      zh: '你的土属性与这个名字相协调，代表着建立在坚实基础和坚定努力之上的成功。这个名字的胜利和敏捷的含义与你通过毅力和敏捷思维相结合实现目标的能力相一致。',
      fr: 'Votre nature Terre s\'harmonise avec ce nom, représentant un succès bâti sur des fondations solides et un effort déterminé. La signification de victoire et de rapidité du nom s\'aligne sur votre capacité à atteindre des objectifs grâce à une combinaison de persévérance et de pensée agile.',
      de: 'Ihre Erdnatur harmoniert mit diesem Namen und steht für einen Erfolg, der auf soliden Grundlagen und entschlossenem Bemühen aufbaut. Die Bedeutung des Namens Sieg und Schnelligkeit stimmt mit Ihrer Fähigkeit überein, Ziele durch eine Kombination aus Beharrlichkeit und agilem Denken zu erreichen.',
      es: 'Tu naturaleza de Tierra armoniza con este nombre, representando un éxito construido sobre cimientos sólidos y un esfuerzo decidido. El significado de victoria y rapidez del nombre se alinea con tu capacidad para lograr metas a través de una combinación de persistencia y pensamiento ágil.',
      ru: 'Ваша природа Земли гармонирует с этим именем, представляя собой успех, построенный на прочном фундаменте и решительных усилиях. Значение имени победа и быстрота совпадает с вашей способностью достигать целей за счет сочетания настойчивости и гибкого мышления.',
      ar: 'تتناغم طبيعتك الأرضية مع هذا الاسم، مما يمثل نجاحًا مبنيًا على أسس متينة وجهد حازم. يتماشى معنى الاسم المتمثل في النصر والسرعة مع قدرتك على تحقيق الأهداف من خلال مزيج من المثابرة والتفكير السريع.',
      hi: 'आपकी पृथ्वी की प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो ठोस नींव और दृढ़ प्रयास पर बनी सफलता का प्रतिनिधित्व करती है। नाम का जीत और फुर्ती का अर्थ दृढ़ता और फुर्तीली सोच के संयोजन के माध्यम से लक्ष्यों को प्राप्त करने की आपकी क्षमता के साथ संरेखित करता है।'
    }
  },
  {
    id: '현진_earth_01',
    harmony: {
      en: 'Your soul stands like precious earth embodying virtue, representing a moral character that becomes more valuable and refined through time and trials. Like a wise craftsman who honors tradition while innovating, your Earth nature helps you achieve an excellence that inspires deep admiration and respect.',
      ko: '당신의 영혼은 덕을 구현하는 귀한 흙과 같아서, 시간과 시련을 통해 더욱 가치 있고 세련되어지는 도덕적 품성을 나타냅니다. 전통을 존중하며 혁신하는 현명한 장인처럼, 당신의 토(土) 기운은 깊은 감탄과 존경을 자아내는 탁월함을 성취하도록 돕습니다.',
      ja: 'あなたの魂は、美徳を具現化する貴重な地球のように立っており、時間と試練を通してより価値があり洗練されたものになる道徳的な性格を表しています。伝統を尊重しながら革新する賢明な職人のように、あなたの地球の性質は、深い賞賛と尊敬を刺激する卓越性を達成するのに役立ちます。',
      zh: '你的灵魂像珍贵的泥土一样，体现着美德，代表着一种通过时间和考验变得更有价值和更精致的道德品格。就像一位在创新的同时尊重传统的智慧工匠一样，你的土属性帮助你达到一种激发深深钦佩和尊重的卓越。',
      fr: 'Votre âme se dresse comme une terre précieuse incarnant la vertu, représentant un caractère moral qui devient plus précieux et raffiné à travers le temps et les épreuves. Tel un sage artisan qui honore la tradition tout en innovant, votre nature Terre vous aide à atteindre une excellence qui inspire une profonde admiration et un profond respect.',
      de: 'Ihre Seele steht wie kostbare Erde, die Tugend verkörpert, und repräsentiert einen moralischen Charakter, der durch Zeit und Prüfungen wertvoller und verfeinerter wird. Wie ein weiser Handwerker, der die Tradition ehrt und gleichzeitig innovativ ist, hilft Ihnen Ihre Erdnatur, eine Exzellenz zu erreichen, die tiefe Bewunderung und Respekt hervorruft.',
      es: 'Tu alma se erige como una tierra preciosa que encarna la virtud, representando un carácter moral que se vuelve más valioso y refinado a través del tiempo y las pruebas. Como un sabio artesano que honra la tradición mientras innova, tu naturaleza de Tierra te ayuda a alcanzar una excelencia que inspira una profunda admiración y respeto.',
      ru: 'Ваша душа стоит, как драгоценная земля, воплощающая добродетель, представляя собой моральный характер, который со временем и испытаниями становится все более ценным и утонченным. Подобно мудрому мастеру, который чтит традиции, внедряя новшества, ваша природа Земли помогает вам достичь совершенства, которое вызывает глубокое восхищение и уважение.',
      ar: 'روحك تقف مثل أرض ثمينة تجسد الفضيلة، وتمثل شخصية أخلاقية تصبح أكثر قيمة وصقلًا عبر الزمن والمحن. مثل الحرفي الحكيم الذي يكرم التقاليد أثناء الابتكار، تساعدك طبيعتك الأرضية على تحقيق التميز الذي يلهم الإعجاب والاحترام العميقين.',
      hi: 'आपकी आत्मा पुण्य का प्रतीक कीमती पृथ्वी की तरह खड़ी है, जो एक नैतिक चरित्र का प्रतिनिधित्व करती है जो समय और परीक्षणों के माध्यम से अधिक मूल्यवान और परिष्कृत हो जाती है। एक बुद्धिमान शिल्पकार की तरह जो नवाचार करते हुए परंपरा का सम्मान करता है, आपकी पृथ्वी प्रकृति आपको एक ऐसी उत्कृष्टता प्राप्त करने में मदद करती है जो गहरी प्रशंसा और सम्मान को प्रेरित करती है।'
    }
  },
  {
    id: '한_earth_01',
    harmony: {
      en: 'Like the great, vast earth that supports all life, your Earth nature and this name give you boundless potential and the ability to provide a stable, unwavering foundation for others to build upon.',
      ko: '모든 생명을 지탱하는 위대하고 광활한 대지처럼, 당신의 토(土) 기운과 이 이름은 당신에게 무한한 잠재력과 다른 사람들이 기댈 수 있는 안정되고 흔들리지 않는 기반을 제공하는 능력을 부여합니다.',
      ja: 'すべての生命を支える偉大で広大な地球のように、あなたの地球の性質とこの名前は、あなたに無限の可能性と、他の人がその上に築くための安定した、揺るぎない基盤を提供する能力を与えます。',
      zh: '就像支撑所有生命的伟大、浩瀚的地球一样，你的土属性和这个名字赋予你无限的潜力和为他人提供稳定、坚定不移的基础的能力。',
      fr: 'Telle la grande et vaste terre qui soutient toute vie, votre nature Terre et ce nom vous confèrent un potentiel illimité et la capacité de fournir une base stable et inébranlable sur laquelle les autres peuvent s\'appuyer.',
      de: 'Wie die große, weite Erde, die alles Leben trägt, verleihen Ihnen Ihre Erdnatur und dieser Name grenzenloses Potenzial und die Fähigkeit, anderen ein stabiles, unerschütterliches Fundament zu bieten, auf dem sie aufbauen können.',
      es: 'Como la gran y vasta tierra que sustenta toda la vida, tu naturaleza de Tierra y este nombre te dan un potencial ilimitado y la capacidad de proporcionar una base estable e inquebrantable para que otros construyan sobre ella.',
      ru: 'Подобно великой, необъятной земле, которая поддерживает всю жизнь, ваша природа Земли и это имя дают вам безграничный потенциал и способность обеспечивать стабильную, непоколебимую основу для других, на которой они могут строить.',
      ar: 'مثل الأرض العظيمة الشاسعة التي تدعم كل أشكال الحياة، تمنحك طبيعتك الأرضية وهذا الاسم إمكانات لا حدود لها والقدرة على توفير أساس مستقر لا يتزعزع للآخرين للبناء عليه.',
      hi: 'महान, विशाल पृथ्वी की तरह जो सभी जीवन का समर्थन करती है, आपकी पृथ्वी प्रकृति और यह नाम आपको असीम क्षमता और दूसरों के लिए एक स्थिर, अटूट नींव प्रदान करने की क्षमता प्रदान करता है जिस पर वे निर्माण कर सकते हैं।'
    }
  },
  {
    id: '이서_earth_01',
    harmony: {
      en: 'Your soul carries a gentle grace that creates auspicious conditions for others to flourish and succeed. Like fertile earth that transforms seeds into gardens, your Earth nature allows you to naturally cultivate environments where prosperity and happiness can take root and bloom.',
      ko: '당신의 영혼은 다른 이들이 번성하고 성공할 수 있는 상서로운 조건을 만들어내는 부드러운 은혜를 지니고 있습니다. 씨앗을 정원으로 바꾸는 비옥한 땅처럼, 당신의 토(土) 기운은 번영과 행복이 뿌리내리고 꽃피울 수 있는 환경을 자연스럽게 가꾸게 합니다.',
      ja: 'あなたの魂は、他の人が繁栄し成功するための縁起の良い条件を作り出す穏やかな恵みを運んでいます。種子を庭に変える肥沃な大地のように、あなたの地球の性質は、繁栄と幸福が根付き、開花できる環境を自然に育むことを可能にします。',
      zh: '你的灵魂带有一种温柔的优雅，为他人创造了茁壮成长和成功的吉祥条件。就像将种子变成花园的肥沃土地一样，你的土属性让你能够自然地培养繁荣和幸福可以扎根和开花的环境。',
      fr: 'Votre âme porte une grâce douce qui crée des conditions auspicieuses pour que les autres s\'épanouissent et réussissent. Telle une terre fertile qui transforme les graines en jardins, votre nature Terre vous permet de cultiver naturellement des environnements où la prospérité et le bonheur peuvent prendre racine et s\'épanouir.',
      de: 'Ihre Seele trägt eine sanfte Anmut, die günstige Bedingungen für andere schafft, um zu gedeihen und erfolgreich zu sein. Wie fruchtbare Erde, die Samen in Gärten verwandelt, ermöglicht Ihnen Ihre Erdnatur, auf natürliche Weise Umgebungen zu kultivieren, in denen Wohlstand und Glück Wurzeln schlagen und blühen können.',
      es: 'Tu alma lleva una gracia suave que crea condiciones auspiciosas para que otros florezcan y tengan éxito. Como la tierra fértil que transforma las semillas en jardines, tu naturaleza de Tierra te permite cultivar naturalmente ambientes donde la prosperidad y la felicidad pueden arraigar y florecer.',
      ru: 'Ваша душа несет в себе нежную грацию, которая создает благоприятные условия для процветания и успеха других. Подобно плодородной земле, которая превращает семена в сады, ваша природа Земли позволяет вам естественным образом создавать среду, в которой могут укорениться и расцвести процветание и счастье.',
      ar: 'روحك تحمل نعمة لطيفة تخلق ظروفًا ميمونة للآخرين ليزدهروا وينجحوا. مثل الأرض الخصبة التي تحول البذور إلى حدائق، تسمح لك طبيعتك الأرضية بزراعة البيئات بشكل طبيعي حيث يمكن أن يتجذر ويزدهر الرخاء والسعادة.',
      hi: 'आपकी आत्मा में एक कोमल कृपा है जो दूसरों को फलने-फूलने और सफल होने के लिए शुभ परिस्थितियाँ बनाती है। उपजाऊ पृथ्वी की तरह जो बीजों को बगीचों में बदल देती है, आपकी पृथ्वी प्रकृति आपको स्वाभाविक रूप से ऐसे वातावरण की खेती करने की अनुमति देती है जहाँ समृद्धि और खुशी जड़ें जमा सकती हैं और खिल सकती हैं।'
    }
  },
  {
    id: '수아_earth_01',
    harmony: {
      en: 'Your destiny flows with a quiet strength that shapes the world through persistent, beautiful action. Like a gentle stream that carves magnificent valleys, your Earth nature helps you create lasting, meaningful change through consistent grace and patient determination.',
      ko: '당신의 운명은 끈기 있고 아름다운 행동을 통해 세상을 빚어가는 조용한 힘으로 흐릅니다. 웅장한 계곡을 조각하는 부드러운 시냇물처럼, 당신의 토(土) 기운은 일관된 우아함과 끈기 있는 결단력을 통해 지속적이고 의미 있는 변화를 만들어내도록 돕습니다.',
      ja: 'あなたの運命は、永続的で美しい行動を通して世界を形作る静かな力で流れます。壮大な谷を刻む穏やかな小川のように、あなたの地球の性質は、一貫した恵みと忍耐強い決意を通して、永続的で意味のある変化を生み出すのに役立ちます。',
      zh: '你的命运以一种安静的力量流动，通过执着、美好的行动塑造世界。就像一条雕刻出壮丽山谷的温柔溪流一样，你的土属性帮助你通过始终如一的优雅和耐心的决心，创造出持久、有意义的改变。',
      fr: 'Votre destin coule avec une force tranquille qui façonne le monde par une action persistante et magnifique. Tel un doux ruisseau qui sculpte de magnifiques vallées, votre nature Terre vous aide à créer un changement durable et significatif grâce à une grâce constante et une détermination patiente.',
      de: 'Ihr Schicksal fließt mit einer stillen Stärke, die die Welt durch beharrliches, schönes Handeln formt. Wie ein sanfter Strom, der prächtige Täler formt, hilft Ihnen Ihre Erdnatur, durch beständige Anmut und geduldige Entschlossenheit dauerhafte, bedeutungsvolle Veränderungen zu schaffen.',
      es: 'Tu destino fluye con una fuerza tranquila que da forma al mundo a través de una acción persistente y hermosa. Como un arroyo suave que esculpe valles magníficos, tu naturaleza de Tierra te ayuda a crear un cambio duradero y significativo a través de una gracia constante y una determinación paciente.',
      ru: 'Ваша судьба течет с тихой силой, которая формирует мир посредством настойчивых, прекрасных действий. Подобно нежному потоку, который вырезает великолепные долины, ваша природа Земли помогает вам создавать прочные, значимые изменения посредством постоянной грации и терпеливой решимости.',
      ar: 'مصيرك يتدفق بقوة هادئة تشكل العالم من خلال العمل المستمر والجميل. مثل تيار لطيف ينحت وديانًا رائعة، تساعدك طبيعتك الأرضية على إحداث تغيير دائم وهادف من خلال النعمة المستمرة والتصميم الصبور.',
      hi: 'आपका भाग्य एक शांत शक्ति के साथ बहता है जो लगातार, सुंदर कार्रवाई के माध्यम से दुनिया को आकार देता है। एक कोमल धारा की तरह जो शानदार घाटियों को तराशती है, आपकी पृथ्वी प्रकृति आपको लगातार कृपा और धैर्यपूर्ण दृढ़ संकल्प के माध्यम से स्थायी, सार्थक परिवर्तन बनाने में मदद करती है।'
    }
  },
  {
    id: '소율_earth_01',
    harmony: {
      en: 'Like the steady, grounding heartbeat of the earth itself, your Earth nature and this name give you the ability to bring harmony, stability, and a natural, calming rhythm to any aspect of life you touch.',
      ko: '마치 땅 자체의 꾸준하고 안정적인 심장 박동처럼, 당신의 토(土) 기운과 이 이름은 당신이 닿는 삶의 모든 측면에 조화, 안정, 그리고 자연스럽고 차분한 리듬을 가져다주는 능력을 부여합니다.',
      ja: '地球自体の安定した、地に足の着いた心臓の鼓動のように、あなたの地球の性質とこの名前は、あなたが触れる人生のあらゆる側面に調和、安定、そして自然で落ち着いたリズムをもたらす能力をあなたに与えます。',
      zh: '就像地球本身稳定、踏实的心跳一样，你的土属性和这个名字赋予你为你所触及的生活的任何方面带来和谐、稳定和自然、平静的节奏的能力。',
      fr: 'Telle le battement de cœur régulier et ancré de la terre elle-même, votre nature Terre et ce nom vous donnent la capacité d\'apporter l\'harmonie, la stabilité et un rythme naturel et apaisant à tout aspect de la vie que vous touchez.',
      de: 'Wie der stetige, erdende Herzschlag der Erde selbst, verleihen Ihnen Ihre Erdnatur und dieser Name die Fähigkeit, Harmonie, Stabilität und einen natürlichen, beruhigenden Rhythmus in jeden Aspekt des Lebens zu bringen, den Sie berühren.',
      es: 'Como el latido constante y firme de la tierra misma, tu naturaleza de Tierra y este nombre te dan la habilidad de traer armonía, estabilidad y un ritmo natural y calmante a cualquier aspecto de la vida que toques.',
      ru: 'Подобно устойчивому, заземляющему сердцебиению самой земли, ваша природа Земли и это имя дают вам способность привносить гармонию, стабильность и естественный, успокаивающий ритм в любой аспект жизни, к которому вы прикасаетесь.',
      ar: 'مثل نبضات قلب الأرض الثابتة والمؤرضة، تمنحك طبيعتك الأرضية وهذا الاسم القدرة على إضفاء الانسجام والاستقرار والإيقاع الطبيعي المهدئ على أي جانب من جوانب الحياة تلمسه.',
      hi: 'पृथ्वी के स्थिर, ग्राउंडिंग दिल की धड़कन की तरह, आपकी पृथ्वी प्रकृति और यह नाम आपको जीवन के किसी भी पहलू में सद्भाव, स्थिरता और एक प्राकृतिक, शांत लय लाने की क्षमता प्रदान करता है जिसे आप छूते हैं।'
    }
  },
  {
    id: '서아_earth_01',
    harmony: {
      en: 'Your Earth nature harmonizes with this name to create a character of auspicious growth and beautiful spirit. These qualities align perfectly with your natural abilities, fostering a path for harmonious growth and the development of a fortunate and graceful character.',
      ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 상서로운 성장과 아름다운 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 행운이 깃들고 우아한 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質は、この名前と調和して、縁起の良い成長と美しい精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、幸運で優雅な人格の育成への道を育みます。',
      zh: '你的土属性与这个名字相协调，创造了一个吉祥成长和美丽精神的品格。这些品质与你的天生能力完美契合，为和谐成长和发展一个幸运和优雅的品格铺平了道路。',
      fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de croissance auspicieuse et de bel esprit. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant un chemin de croissance harmonieuse et le développement d\'un caractère chanceux et gracieux.',
      de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von glückverheißendem Wachstum und schönem Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern einen Weg für harmonisches Wachstum und die Entwicklung eines glücklichen und anmutigen Charakters.',
      es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de crecimiento auspicioso y hermoso espíritu. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un camino para el crecimiento armonioso y el desarrollo de un carácter afortunado y elegante.',
      ru: 'Ваша природа Земли гармонирует с этим именем, создавая характер благоприятного роста и прекрасного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию удачливого и изящного характера.',
      ar: 'تتناغم طبيعتك الأرضية مع هذا الاسم لخلق شخصية ذات نمو ميمون وروح جميلة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز مسارًا للنمو المتناغم وتنمية شخصية محظوظة ورشيقة.',
      hi: 'आपकी पृथ्वी की प्रकृति इस नाम के साथ शुभ विकास और सुंदर भावना का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक भाग्यशाली और सुंदर चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '유나_earth_01',
    harmony: {
      en: 'Like abundant earth that generously supports all growth, your Earth nature and this name give you a warm self-confidence that allows you to nurture and encourage abundance in others as well as yourself.',
      ko: '모든 성장을 아낌없이 지원하는 풍요로운 대지처럼, 당신의 토(土) 기운과 이 이름은 당신 자신뿐만 아니라 다른 사람들의 풍요를 키우고 격려할 수 있는 따뜻한 자신감을 부여합니다.',
      ja: 'すべての成長を惜しみなくサポートする豊かな大地のように、あなたの地球の性質とこの名前は、あなた自身だけでなく他の人の豊かさを育み、奨励することを可能にする温かい自信をあなたに与えます。',
      zh: '就像慷慨地支持所有成长的富饶大地一样，你的土属性和这个名字给了你温暖的自信，让你能够培养和鼓励他人以及自己的富足。',
      fr: 'Telle une terre abondante qui soutient généreusement toute croissance, votre nature Terre et ce nom vous donnent une chaleureuse confiance en vous qui vous permet de nourrir et d\'encourager l\'abondance chez les autres ainsi qu\'en vous-même.',
      de: 'Wie eine reiche Erde, die großzügig alles Wachstum unterstützt, verleihen Ihnen Ihre Erdnatur und dieser Name ein warmes Selbstvertrauen, das es Ihnen ermöglicht, Fülle bei anderen und bei sich selbst zu nähren und zu fördern.',
      es: 'Como la tierra abundante que apoya generosamente todo crecimiento, tu naturaleza de Tierra y este nombre te dan una cálida confianza en ti mismo que te permite nutrir y alentar la abundancia en los demás y en ti mismo.',
      ru: 'Подобно обильной земле, которая щедро поддерживает весь рост, ваша природа Земли и это имя дают вам теплую уверенность в себе, которая позволяет вам лелеять и поощрять изобилие в других, а также в себе.',
      ar: 'مثل الأرض الوفيرة التي تدعم بسخاء كل النمو، تمنحك طبيعتك الأرضية وهذا الاسم ثقة دافئة بالنفس تسمح لك برعاية وتشجيع الوفرة لدى الآخرين وكذلك في نفسك.',
      hi: 'प्रचुर मात्रा में पृथ्वी की तरह जो उदारता से सभी विकास का समर्थन करती है, आपकी पृथ्वी प्रकृति और यह नाम आपको एक गर्म आत्मविश्वास देता है जो आपको दूसरों के साथ-साथ खुद में भी प्रचुरता का पोषण और प्रोत्साहन करने की अनुमति देता है।'
    }
  },
  {
    id: '채영_earth_01',
    harmony: {
      en: 'Your Earth nature harmonizes with this name, cultivating a holy and refined character through patient and steady growth. The name’s meaning of sacred refinement resonates with your ability to grow in wisdom and grace, creating a presence that is both grounding and inspiring.',
      ko: '당신의 토(土) 기운은 이 이름과 완벽하게 조화를 이루며, 인내심 있고 꾸준한 성장을 통해 성스럽고 세련된 품성을 길러냅니다. 신성한 세련됨이라는 이름의 의미는 지혜와 품위 안에서 성장하는 당신의 타고난 능력과 공명하며, 안정감을 주면서도 영감을 주는 존재감을 만들어냅니다.',
      ja: 'あなたの地球の性質は、この名前と調和し、忍耐強く着実な成長を通して、聖で洗練された性格を育みます。神聖な洗練という意味の名前は、知恵と恵みの中で成長するあなたの能力と共鳴し、地に足の着いた、感動的な存在感を生み出します。',
      zh: '你的土属性与这个名字完美协调，通过耐心和稳定的成长，培养出一种神圣而精致的品格。这个名字的神圣精致的含义与你在智慧和优雅中成长的能力产生共鸣，创造出一种既踏实又鼓舞人心的存在感。',
      fr: 'Votre nature Terre s\'harmonise avec ce nom, cultivant un caractère saint et raffiné par une croissance patiente et régulière. La signification de raffinement sacré du nom résonne avec votre capacité à grandir en sagesse et en grâce, créant une présence à la fois ancrée et inspirante.',
      de: 'Ihre Erdnatur harmoniert mit diesem Namen und kultiviert durch geduldiges und stetiges Wachstum einen heiligen und verfeinerten Charakter. Die Bedeutung des Namens der heiligen Verfeinerung schwingt mit Ihrer Fähigkeit mit, an Weisheit und Anmut zu wachsen, und schafft eine Präsenz, die sowohl erdend als auch inspirierend ist.',
      es: 'Tu naturaleza de Tierra armoniza con este nombre, cultivando un carácter santo y refinado a través de un crecimiento paciente y constante. El significado del nombre de refinamiento sagrado resuena con tu capacidad para crecer en sabiduría y gracia, creando una presencia que es a la vez arraigada e inspiradora.',
      ru: 'Ваша природа Земли гармонирует с этим именем, развивая святой и утонченный характер через терпеливый и неуклонный рост. Значение имени священного утонченности резонирует с вашей способностью расти в мудрости и благодати, создавая присутствие, которое одновременно заземляет и вдохновляет.',
      ar: 'تتناغم طبيعتك الأرضية تمامًا مع هذا الاسم، وتزرع شخصية مقدسة ومصقولة من خلال النمو الصبور والمطرد. صدى معنى الاسم المتمثل في الصقل المقدس مع قدرتك على النمو في الحكمة والنعمة، مما يخلق حضورًا مؤرضًا وملهمًا.',
      hi: 'आपकी पृथ्वी की प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, धैर्यवान और स्थिर विकास के माध्यम से एक पवित्र और परिष्कृत चरित्र की खेती करती है। पवित्र शोधन नाम का अर्थ ज्ञान और कृपा में बढ़ने की आपकी क्षमता के साथ प्रतिध्वनित होता है, जो एक ऐसी उपस्थिति बनाता है जो ग्राउंडिंग और प्रेरणादायक दोनों है।'
    }
  },
  {
    id: '수연_earth_01',
    harmony: {
      en: 'With your Earth nature, this name creates a character of beautiful connections and a grounded, stable spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a reliable and well-connected character.',
      ko: '당신의 토(土) 기운으로, 이 이름은 아름다운 연결과 안정되고 견고한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 조화로운 성장과 신뢰할 수 있고 관계를 잘 맺는 인격의 발전을 돕습니다.',
      ja: 'あなたの地球の性質で、この名前は美しいつながりと、地に足の着いた、安定した精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、調和のとれた成長と信頼できる、つながりの良い人格の育成を促進します。',
      zh: '你的土属性与这个名字相结合，创造了一个美丽联系和脚踏实地、稳定精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个可靠和人脉广泛的品格。',
      fr: 'Avec votre nature Terre, ce nom crée un caractère de belles connexions et un esprit ancré et stable. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère fiable et bien connecté.',
      de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von schönen Verbindungen und einem geerdeten, stabilen Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines zuverlässigen und gut vernetzten Charakters.',
      es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de hermosas conexiones y un espíritu arraigado y estable. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter confiable y bien conectado.',
      ru: 'С вашей природой Земли это имя создает характер прекрасных связей и заземленного, стабильного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию надежного и хорошо связанного характера.',
      ar: 'مع طبيعتك الأرضية، يخلق هذا الاسم شخصية من الروابط الجميلة والروح الراسخة والمستقرة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية موثوقة ومتصلة جيدًا.',
      hi: 'आपकी पृथ्वी प्रकृति के साथ, यह नाम सुंदर कनेक्शन और एक जमीनी, स्थिर भावना का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक विश्वसनीय और अच्छी तरह से जुड़े चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '은서_earth_01',
    harmony: {
      en: 'Your soul carries a gentle grace that creates auspicious conditions for others to flourish. Like fertile earth that transforms seeds into gardens, your Earth nature allows you to naturally cultivate environments where prosperity and happiness can take root and bloom.',
      ko: '당신의 영혼은 다른 이들이 번성할 수 있는 상서로운 조건을 만들어내는 부드러운 은혜를 지니고 있습니다. 씨앗을 정원으로 바꾸는 비옥한 땅처럼, 당신의 토(土) 기운은 번영과 행복이 뿌리내리고 꽃피울 수 있는 환경을 자연스럽게 가꾸게 합니다.',
      ja: 'あなたの魂は、他の人が繁栄するための縁起の良い条件を作り出す穏やかな恵みを運んでいます。種子を庭に変える肥沃な大地のように、あなたの地球の性質は、繁栄と幸福が根付き、開花できる環境を自然に育むことを可能にします。',
      zh: '你的灵魂带有一种温柔的优雅，为他人创造了茁壮成长的吉祥条件。就像将种子变成花园的肥沃土地一样，你的土属性让你能够自然地培养繁荣和幸福可以扎根和开花的环境。',
      fr: 'Votre âme porte une grâce douce qui crée des conditions auspicieuses pour que les autres s\'épanouissent. Telle une terre fertile qui transforme les graines en jardins, votre nature Terre vous permet de cultiver naturellement des environnements où la prospérité et le bonheur peuvent prendre racine et s\'épanouir.',
      de: 'Ihre Seele trägt eine sanfte Anmut, die günstige Bedingungen für andere schafft, um zu gedeihen. Wie fruchtbare Erde, die Samen in Gärten verwandelt, ermöglicht Ihnen Ihre Erdnatur, auf natürliche Weise Umgebungen zu kultivieren, in denen Wohlstand und Glück Wurzeln schlagen und blühen können.',
      es: 'Tu alma lleva una gracia suave que crea condiciones auspiciosas para que otros florezcan. Como la tierra fértil que transforma las semillas en jardines, tu naturaleza de Tierra te permite cultivar naturalmente ambientes donde la prosperidad y la felicidad pueden arraigar y florecer.',
      ru: 'Ваша душа несет в себе нежную грацию, которая создает благоприятные условия для процветания других. Подобно плодородной земле, которая превращает семена в сады, ваша природа Земли позволяет вам естественным образом создавать среду, в которой могут укорениться и расцвести процветание и счастье.',
      ar: 'روحك تحمل نعمة لطيفة تخلق ظروفًا ميمونة للآخرين ليزدهروا. مثل الأرض الخصبة التي تحول البذور إلى حدائق، تسمح لك طبيعتك الأرضية بزراعة البيئات بشكل طبيعي حيث يمكن أن يتجذر ويزدهر الرخاء والسعادة.',
      hi: 'आपकी आत्मा में एक कोमल कृपा है जो दूसरों को फलने-फूलने के लिए शुभ परिस्थितियाँ बनाती है। उपजाऊ पृथ्वी की तरह जो बीजों को बगीचों में बदल देती है, आपकी पृथ्वी प्रकृति आपको स्वाभाविक रूप से ऐसे वातावरण की खेती करने की अनुमति देती है जहाँ समृद्धि और खुशी जड़ें जमा सकती हैं और खिल सकती हैं।'
    }
  },
  {
    id: '예서_earth_01',
    harmony: {
      en: 'Your Earth nature and this name combine to create a character of beautiful growth and auspicious spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a graceful and fortunate character.',
      ko: '당신의 토(土) 기운과 이 이름이 결합하여 아름다운 성장과 상서로운 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 우아하고 행운이 깃든 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質とこの名前が組み合わさって、美しい成長と縁起の良い精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、優雅で幸運な人格の育成への道を育みます。',
      zh: '你的土属性和这个名字相结合，创造了一个美丽成长和吉祥精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个优雅和幸运的品格。',
      fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de belle croissance et d\'esprit auspicieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère gracieux et chanceux.',
      de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von schönem Wachstum und glückverheißendem Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines anmutigen und glücklichen Charakters.',
      es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de hermoso crecimiento y espíritu auspicioso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter elegante y afortunado.',
      ru: 'Ваша природа Земли и это имя в сочетании создают характер прекрасного роста и благоприятного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию изящного и удачливого характера.',
      ar: 'تتحد طبيعتك الأرضية وهذا الاسم لخلق شخصية ذات نمو جميل وروح ميمونة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية رشيقة ومحظوظة.',
      hi: 'आपकी पृथ्वी प्रकृति और यह नाम मिलकर सुंदर विकास और शुभ भावना का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सुंदर और भाग्यशाली चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '수민_earth_01',
    harmony: {
      en: 'Your Earth nature harmonizes with this name to create a character of beautiful growth and quick thinking. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a graceful and agile-minded character.',
      ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 아름다운 성장과 빠른 사고를 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 우아하고 민첩한 사고를 지닌 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質は、この名前と調和して、美しい成長と素早い思考の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、優雅で機敏な心を持つ人格の育成を促進します。',
      zh: '你的土属性与这个名字相协调，创造了一个美丽成长和敏捷思维的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个优雅和敏捷的品格。',
      fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de belle croissance et de pensée rapide. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère gracieux et à l\'esprit agile.',
      de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von schönem Wachstum und schnellem Denken zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines anmutigen und agilen Charakters.',
      es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de hermoso crecimiento y pensamiento rápido. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter elegante y de mente ágil.',
      ru: 'Ваша природа Земли гармонирует с этим именем, создавая характер прекрасного роста и быстрого мышления. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию изящного и подвижного характера.',
      ar: 'تتناغم طبيعتك الأرضية مع هذا الاسم لخلق شخصية ذات نمو جميل وتفكير سريع. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية رشيقة ورشيقة الذهن.',
      hi: 'आपकी पृथ्वी की प्रकृति इस नाम के साथ सुंदर विकास और त्वरित सोच का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सुंदर और फुर्तीले दिमाग वाले चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '지연_earth_01',
    harmony: {
      en: 'With your Earth nature, this name creates a character of wise connections and a grounded, stable spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of an insightful and reliable character.',
      ko: '당신의 토(土) 기운으로, 이 이름은 지혜로운 연결과 안정되고 견고한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 통찰력 있고 신뢰할 수 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質で、この名前は賢明なつながりと、地に足の着いた、安定した精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、洞察力に富んだ信頼できる人格の育成への道を育みます。',
      zh: '你的土属性与这个名字相结合，创造了一个智慧的联系和脚踏实地、稳定精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个富有洞察力和可靠的品格。',
      fr: 'Avec votre nature Terre, ce nom crée un caractère de connexions sages et un esprit ancré et stable. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère perspicace et fiable.',
      de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von weisen Verbindungen und einem geerdeten, stabilen Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines aufschlussreichen und zuverlässigen Charakters.',
      es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de conexiones sabias y un espíritu arraigado y estable. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter perspicaz y confiable.',
      ru: 'С вашей природой Земли это имя создает характер мудрых связей и заземленного, стабильного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию проницательного и надежного характера.',
      ar: 'مع طبيعتك الأرضية، يخلق هذا الاسم شخصية من الروابط الحكيمة والروح الراسخة والمستقرة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية ثاقبة وموثوقة.',
      hi: 'आपकी पृथ्वी प्रकृति के साथ, यह नाम बुद्धिमान कनेक्शन और एक जमीनी, स्थिर भावना का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक perspicacious और विश्वसनीय चरित्र के विकास के लिए एक मार्ग को बढ़ावा देते हैं।'
    }
  },
  {
    id: '유진_earth_01',
    harmony: {
      en: 'Your Earth nature and this name combine to create a character of abundant growth and a precious, treasured spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a generous and valuable character.',
      ko: '당신의 토(土) 기운과 이 이름이 결합하여 풍부한 성장과 귀하고 소중한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 너그럽고 가치 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質とこの名前が組み合わさって、豊かな成長と貴重で大切な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、寛大で価値のある人格の育成への道を育みます。',
      zh: '你的土属性和这个名字相结合，创造了一个富足的成长和宝贵、珍爱的精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个慷慨和有价值的品格。',
      fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance abondante et d\'esprit précieux et chéri. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère généreux et précieux.',
      de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von reichlichem Wachstum und einem kostbaren, geschätzten Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines großzügigen und wertvollen Charakters.',
      es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento abundante y un espíritu precioso y atesorado. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter generoso y valioso.',
      ru: 'Ваша природа Земли и это имя в сочетании создают характер обильного роста и драгоценного, лелеемого духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию щедрого и ценного характера.',
      ar: 'تتحد طبيعتك الأرضية وهذا الاسم لخلق شخصية ذات نمو وفير وروح ثمينة وغالية. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية سخية وقيمة.',
      hi: 'आपकी पृथ्वी प्रकृति और यह नाम मिलकर प्रचुर मात्रा में विकास और एक कीमती, पोषित आत्मा का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक उदार और मूल्यवान चरित्र के विकास को बढ़ावा देते हैं।' 
    }
  },
  {
    id: '채은_earth_01',
    harmony: {
      en: 'Your Earth nature harmonizes with this name to create a character of colorful growth and a graceful spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a diverse and elegant character.',
      ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 다채로운 성장과 우아한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 다양하고 품위 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質は、この名前と調和して、カラフルな成長と優雅な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、多様でエレガントな人格の育成を促進します。',
      zh: '你的土属性与这个名字相协调，创造了一个丰富多彩的成长和优雅精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个多样化和优雅的品格。',
      fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de croissance colorée et d\'esprit gracieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère diversifié et élégant.',
      de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von farbenfrohem Wachstum und einem anmutigen Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines vielfältigen und eleganten Charakters.',
      es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de crecimiento colorido y un espíritu elegante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter diverso y elegante.',
      ru: 'Ваша природа Земли гармонирует с этим именем, создавая характер красочного роста и изящного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию разностороннего и элегантного характера.',
      ar: 'تتناغم طبيعتك الأرضية مع هذا الاسم لخلق شخصية ذات نمو ملون وروح رشيقة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية متنوعة وأنيقة.',
      hi: 'आपकी पृथ्वी की प्रकृति इस नाम के साथ रंगीन विकास और एक सुंदर भावना का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक विविध और सुरुचिपूर्ण चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '수현_earth_01',
    harmony: {
      en: 'With your Earth nature, this name creates a character of beautiful growth and a virtuous spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a graceful and morally upright character.',
      ko: '당신의 토(土) 기운으로, 이 이름은 아름다운 성장과 덕망 있는 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 우아하고 도덕적으로 올바른 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質で、この名前は美しい成長と高潔な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、優雅で道徳的に正しい人格の育成への道を育みます。',
      zh: '你的土属性与这个名字相结合，创造了一个美丽成长和高尚精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个优雅和道德高尚的品格。',
      fr: 'Avec votre nature Terre, ce nom crée un caractère de belle croissance et d\'esprit vertueux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère gracieux et moralement droit.',
      de: 'Mit Ihrer Erdnatur schafft dieser Name einen Charakter von schönem Wachstum und einem tugendhaften Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines anmutigen und moralisch aufrechten Charakters.',
      es: 'Con tu naturaleza de Tierra, este nombre crea un carácter de hermoso crecimiento y un espíritu virtuoso. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter elegante y moralmente recto.',
      ru: 'С вашей природой Земли это имя создает характер прекрасного роста и добродетельного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию изящного и морально праведного характера.',
      ar: 'مع طبيعتك الأرضية، يخلق هذا الاسم شخصية ذات نمو جميل وروح فاضلة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية رشيقة ومستقيمة أخلاقياً.',
      hi: 'आपकी पृथ्वी प्रकृति के साथ, यह नाम सुंदर विकास और एक गुणी आत्मा का चरित्र बनाता है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सुंदर और नैतिक रूप से ईमानदार चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '은지_earth_01',
    harmony: {
      en: 'Your Earth nature and this name combine to create a character of kind growth and a wise spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of a compassionate and insightful character.',
      ko: '당신의 토(土) 기운과 이 이름이 결합하여 친절한 성장과 지혜로운 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 자비롭고 통찰력 있는 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質とこの名前が組み合わさって、親切な成長と賢明な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、思いやりのある洞察力に富んだ人格の育成への道を育みます。',
      zh: '你的土属性和这个名字相结合，创造了一个善良的成长和智慧的精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个富有同情心和洞察力的品格。',
      fr: 'Votre nature Terre et ce nom se combinent pour créer un caractère de croissance bienveillante et d\'esprit sage. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère compatissant et perspicace.',
      de: 'Ihre Erdnatur und dieser Name vereinen sich zu einem Charakter von freundlichem Wachstum und einem weisen Geist. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines mitfühlenden und aufschlussreichen Charakters.',
      es: 'Tu naturaleza de Tierra y este nombre se combinan para crear un carácter de crecimiento amable y un espíritu sabio. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter compasivo y perspicaz.',
      ru: 'Ваша природа Земли и это имя в сочетании создают характер доброго роста и мудрого духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию сострадательного и проницательного характера.',
      ar: 'تتحد طبيعتك الأرضية وهذا الاسم لخلق شخصية ذات نمو لطيف وروح حكيمة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية رحيمة وبصيرة.',
      hi: 'आपकी पृथ्वी प्रकृति और यह नाम मिलकर दयालु विकास और एक बुद्धिमान आत्मा का चरित्र बनाते हैं। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक दयालु और perspicacious चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '예은_earth_01',
    harmony: {
      en: 'Your Earth nature harmonizes with this name to create a character of beautiful growth and a graceful spirit. These qualities align perfectly with your natural abilities, fostering harmonious growth and the development of an elegant and kind-hearted character.',
      ko: '당신의 토(土) 기운은 이 이름과 조화를 이루어 아름다운 성장과 우아한 정신을 지닌 품성을 만들어냅니다. 이러한 자질들은 당신의 타고난 능력과 완벽하게 일치하여, 품위 있고 친절한 마음을 지닌 인격으로 성장하기 위한 조화로운 길을 열어줍니다.',
      ja: 'あなたの地球の性質は、この名前と調和して、美しい成長と優雅な精神の性格を生み出します。これらの資質はあなたの自然な能力と完全に一致し、エレガントで親切な心を持つ人格の育成を促進します。',
      zh: '你的土属性与这个名字相协调，创造了一个美丽成长和优雅精神的品格。这些品质与你的天生能力完美契合，促进和谐成长和发展一个优雅和善良的品格。',
      fr: 'Votre nature Terre s\'harmonise avec ce nom pour créer un caractère de belle croissance et d\'esprit gracieux. Ces qualités s\'alignent parfaitement avec vos capacités naturelles, favorisant une croissance harmonieuse et le développement d\'un caractère élégant et bienveillant.',
      de: 'Ihre Erdnatur harmoniert mit diesem Namen, um einen Charakter von schönem Wachstum und einem anmutigen Geist zu schaffen. Diese Eigenschaften stimmen perfekt mit Ihren natürlichen Fähigkeiten überein und fördern ein harmonisches Wachstum und die Entwicklung eines eleganten und gutherzigen Charakters.',
      es: 'Tu naturaleza de Tierra armoniza con este nombre para crear un carácter de hermoso crecimiento y un espíritu elegante. Estas cualidades se alinean perfectamente con tus habilidades naturales, fomentando un crecimiento armonioso y el desarrollo de un carácter elegante y de buen corazón.',
      ru: 'Ваша природа Земли гармонирует с этим именем, создавая характер прекрасного роста и изящного духа. Эти качества идеально сочетаются с вашими природными способностями, способствуя гармоничному росту и развитию элегантного и добросердечного характера.',
      ar: 'تتناغم طبيعتك الأرضية مع هذا الاسم لخلق شخصية ذات نمو جميل وروح رشيقة. تتماشى هذه الصفات تمامًا مع قدراتك الطبيعية، مما يعزز النمو المتناغم وتنمية شخصية أنيقة وطيبة القلب.',
      hi: 'आपकी पृथ्वी की प्रकृति इस नाम के साथ सुंदर विकास और एक सुंदर भावना का चरित्र बनाने के लिए सामंजस्य स्थापित करती है। ये गुण आपकी प्राकृतिक क्षमताओं के साथ पूरी तरह से मेल खाते हैं, जो सामंजस्यपूर्ण विकास और एक सुरुचिपूर्ण और दयालु चरित्र के विकास को बढ़ावा देते हैं।'
    }
  },
  {
    id: '미나_earth_01',
    harmony: {
      en: 'Your inner beauty grows from solid self-confidence and natural grace, blessed by your Earth nature to inspire self-acceptance in others. Like fertile ground that recognizes its own worth, you create an authentic beauty that radiates confidence and empowers those around you.',
      ko: '당신의 내면의 아름다움은 당신의 토(土) 기운의 축복을 받아, 다른 사람들에게 자기 수용의 영감을 주는 단단한 자신감과 자연스러운 품위에서 자라납니다. 자신의 가치를 아는 비옥한 땅처럼, 당신은 자신감을 발산하고 주변 사람들에게 힘을 실어주는 진정한 아름다움을 창조합니다.',
      ja: 'あなたの内なる美しさは、あなたの地球の性質によって祝福され、他の人に自己受容を促す確固たる自信と自然な恵みから成長します。自分の価値を認識する肥沃な大地のように、あなたは自信を放ち、周りの人々に力を与える本物の美しさを創造します。',
      zh: '你的内在美源于坚实的自信和自然的优雅，并受到你的土属性的祝福，以激励他人自我接纳。就像认识到自身价值的肥沃土地一样，你创造了一种散发着自信并赋予周围人力量的真实之美。',
      fr: 'Votre beauté intérieure naît d\'une solide confiance en soi et d\'une grâce naturelle, bénie par votre nature Terre pour inspirer l\'acceptation de soi chez les autres. Telle une terre fertile qui reconnaît sa propre valeur, vous créez une beauté authentique qui rayonne de confiance et donne du pouvoir à ceux qui vous entourent.',
      de: 'Ihre innere Schönheit wächst aus solidem Selbstvertrauen und natürlicher Anmut, gesegnet durch Ihre Erdnatur, um bei anderen Selbstakzeptanz zu inspirieren. Wie fruchtbarer Boden, der seinen eigenen Wert erkennt, schaffen Sie eine authentische Schönheit, die Selbstvertrauen ausstrahlt und Ihre Mitmenschen stärkt.',
      es: 'Tu belleza interior crece a partir de una sólida confianza en ti mismo y una gracia natural, bendecida por tu naturaleza de Tierra para inspirar la autoaceptación en los demás. Como la tierra fértil que reconoce su propio valor, creas una belleza auténtica que irradia confianza y empodera a quienes te rodean.',
      ru: 'Ваша внутренняя красота произрастает из твердой уверенности в себе и естественной грации, благословленная вашей природой Земли, чтобы вдохновлять других на самопринятие. Подобно плодородной почве, которая признает свою собственную ценность, вы создаете подлинную красоту, которая излучает уверенность и наделяет силой окружающих.',
      ar: 'جمالك الداخلي ينمو من الثقة بالنفس الراسخة والنعمة الطبيعية، مباركة بطبيعتك الأرضية لإلهام قبول الذات لدى الآخرين. مثل الأرض الخصبة التي تعترف بقيمتها الخاصة، فإنك تخلق جمالًا أصيلًا يشع بالثقة ويمكّن من حولك.',
      hi: 'आपकी आंतरिक सुंदरता ठोस आत्मविश्वास और प्राकृतिक कृपा से बढ़ती है, जो दूसरों में आत्म-स्वीकृति को प्रेरित करने के लिए आपकी पृथ्वी प्रकृति द्वारा धन्य है। उपजाऊ भूमि की तरह जो अपने स्वयं के मूल्य को पहचानती है, आप एक प्रामाणिक सुंदरता बनाते हैं जो आत्मविश्वास विकीर्ण करती है और आपके आस-पास के लोगों को सशक्त बनाती है।'
    }
  },
  {
    id: '지효_earth_01',
    harmony: {
      en: 'Your soul carries the sacred power of renewal and filial piety, destined to bring hope where despair has taken root. Like the first blessed rain after a long drought, your Earth nature helps you restore faith and create new beginnings for your family and community.',
      ko: '당신의 영혼은 부활과 효도의 신성한 힘을 지니고 있어, 절망이 뿌리내린 곳에 희망을 가져다줄 운명입니다. 오랜 가뭄 끝에 내리는 첫 단비처럼, 당신의 토(土) 기운은 당신의 가족과 공동체를 위해 믿음을 회복하고 새로운 시작을 창조하도록 돕습니다.',
      ja: 'あなたの魂は、更新と親孝行の神聖な力を運び、絶望が根付いた場所に希望をもたらす運命にあります。長い干ばつの後の最初の恵みの雨のように、あなたの地球の性質は、あなたの家族とコミュニティのために信仰を回復し、新しい始まりを創造するのに役立ちます。',
      zh: '你的灵魂承载着更新和孝道的神圣力量，注定要给绝望扎根的地方带来希望。就像久旱后的第一场甘霖一样，你的土属性帮助你为你的家庭和社区恢复信念，创造新的开始。',
      fr: 'Votre âme porte le pouvoir sacré du renouveau et de la piété filiale, destinée à apporter l\'espoir là où le désespoir a pris racine. Telle la première pluie bénie après une longue sécheresse, votre nature Terre vous aide à restaurer la foi et à créer de nouveaux départs pour votre famille et votre communauté.',
      de: 'Ihre Seele trägt die heilige Kraft der Erneuerung und der kindlichen Frömmigkeit und ist dazu bestimmt, Hoffnung dorthin zu bringen, wo Verzweiflung Wurzeln geschlagen hat. Wie der erste gesegnete Regen nach einer langen Dürre hilft Ihnen Ihre Erdnatur, den Glauben wiederherzustellen und neue Anfänge für Ihre Familie und Gemeinschaft zu schaffen.',
      es: 'Tu alma lleva el poder sagrado de la renovación y la piedad filial, destinada a llevar esperanza donde la desesperación ha echado raíces. Como la primera lluvia bendita después de una larga sequía, tu naturaleza de Tierra te ayuda a restaurar la fe y a crear nuevos comienzos para tu familia y comunidad.',
      ru: 'Ваша душа несет в себе священную силу обновления и сыновней почтительности, которой суждено принести надежду туда, где укоренилось отчаяние. Подобно первому благословенному дождю после долгой засухи, ваша природа Земли помогает вам восстановить веру и создать новые начинания для вашей семьи и сообщества.',
      ar: 'روحك تحمل القوة المقدسة للتجديد والبر بالوالدين، ومقدر لها أن تجلب الأمل حيث ترسخ اليأس. مثل أول مطر مبارك بعد جفاف طويل، تساعدك طبيعتك الأرضية على استعادة الإيمان وخلق بدايات جديدة لعائلتك ومجتمعك.',
      hi: 'आपकी आत्मा में नवीनीकरण और पुत्र-पुत्री भक्ति की पवित्र शक्ति है, जो निराशा ने जड़ें जमा ली हैं, वहां आशा लाने के लिए नियत है। एक लंबे सूखे के बाद पहली धन्य बारिश की तरह, आपकी पृथ्वी प्रकृति आपको विश्वास बहाल करने और अपने परिवार और समुदाय के लिए नई शुरुआत करने में मदद करती है।'
    }
  },
  {
    id: '동수_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, embodying an Eastern excellence that flows with unstoppable grace. The eastern direction and outstanding achievement combine, creating a wisdom that rises like the morning sun over flowing waters, illuminating the path to greatness.',
      ko: '당신의 수(水) 기운은 이 이름과 조화를 이루어, 멈출 수 없는 우아함으로 흐르는 동양의 탁월함을 구현합니다. 동쪽 방향과 뛰어난 성취가 결합하여, 흐르는 물 위로 떠오르는 아침 해처럼 위대함으로 가는 길을 비추는 지혜를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、止められない優雅さで流れる東洋の卓越性を具現化します。東の方向と卓越した業績が組み合わさって、流れる水の上に昇る朝日のように、偉大さへの道を照らす知恵を生み出します。',
      zh: '你的水属性与这个名字相协调，体现了以不可阻挡的优雅流动的东方卓越。东方的方向和杰出的成就相结合，创造出一种像朝阳从流水上升起一样的智慧，照亮通往伟大的道路。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, incarnant une excellence orientale qui coule avec une grâce imparable. La direction de l\'est et l\'accomplissement exceptionnel se combinent, créant une sagesse qui s\'élève comme le soleil du matin sur les eaux vives, illuminant le chemin vers la grandeur.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und verkörpert eine östliche Exzellenz, die mit unaufhaltsamer Anmut fließt. Die östliche Richtung und die herausragende Leistung vereinen sich und schaffen eine Weisheit, die sich wie die Morgensonne über fließenden Gewässern erhebt und den Weg zur Größe erleuchtet.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, encarnando una excelencia oriental que fluye con una gracia imparable. La dirección oriental y el logro sobresaliente se combinan, creando una sabiduría que se eleva como el sol de la mañana sobre las aguas que fluyen, iluminando el camino hacia la grandeza.',
      ru: 'Ваша природа Воды гармонирует с этим именем, воплощая восточное совершенство, которое течет с неудержимой грацией. Восточное направление и выдающиеся достижения в сочетании создают мудрость, которая восходит, как утреннее солнце над текучими водами, освещая путь к величию.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، مجسدة امتيازًا شرقيًا يتدفق بنعمة لا يمكن إيقافها. يتحد الاتجاه الشرقي والإنجاز المتميز، مما يخلق حكمة ترتفع مثل شمس الصباح فوق المياه المتدفقة، وتضيء الطريق إلى العظمة.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक पूर्वी उत्कृष्टता का प्रतीक है जो unstoppable अनुग्रह के साथ बहती है। पूर्वी दिशा और उत्कृष्ट उपलब्धि मिलकर एक ऐसी बुद्धि का निर्माण करती है जो बहते पानी पर सुबह के सूरज की तरह उगती है, जो महानता के मार्ग को रोशन करती है।'
    }
  },
  {
    id: '류진_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, forging dragon-like strength with precious wisdom. The powerful dragon energy and treasured value combine, creating an unbreakable spirit that soars above challenges while remaining grounded in authentic worth.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 용과 같은 힘과 귀중한 지혜를 벼려냅니다. 강력한 용의 에너지와 소중한 가치가 결합하여, 진정한 가치에 뿌리를 두면서도 도전을 넘어 비상하는 불굴의 정신을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、貴重な知恵で竜のような強さを鍛えます。強力な竜のエネルギーと大切な価値が組み合わさって、本物の価値に根ざしながら挑戦を超えて舞い上がる不屈の精神を生み出します。',
      zh: '你的金属性与这个名字相协调，用宝贵的智慧锻造出龙一样的力量。强大的龙的能量和珍贵的价值相结合，创造出一种不屈不挠的精神，它在挑战之上翱翔，同时又植根于真实的价值。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une force de dragon avec une sagesse précieuse. La puissante énergie du dragon et la valeur précieuse se combinent, créant un esprit incassable qui s\'élève au-dessus des défis tout en restant ancré dans une valeur authentique.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet drachenähnliche Stärke mit kostbarer Weisheit. Die kraftvolle Drachenenergie und der geschätzte Wert vereinen sich und schaffen einen unzerbrechlichen Geist, der sich über Herausforderungen erhebt und gleichzeitig in authentischem Wert verankert bleibt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una fuerza de dragón con una sabiduría preciosa. La poderosa energía del dragón y el valor atesorado se combinan, creando un espíritu inquebrantable que se eleva por encima de los desafíos mientras permanece anclado en un valor auténtico.',
      ru: 'Ваша природа Металла гармонирует с этим именем, выковывая драконью силу с драгоценной мудростью. Мощная энергия дракона и драгоценная ценность в сочетании создают несокрушимый дух, который парит над трудностями, оставаясь при этом основанным на подлинной ценности.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصوغ قوة تشبه التنين بحكمة ثمينة. تتحد طاقة التنين القوية والقيمة الثمينة، مما يخلق روحًا غير قابلة للكسر ترتفع فوق التحديات بينما تظل متجذرة في القيمة الأصيلة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, कीमती ज्ञान के साथ ड्रैगन जैसी ताकत बनाती है। शक्तिशाली ड्रैगन ऊर्जा और क़ीमती मूल्य मिलकर एक अटूट भावना पैदा करते हैं जो चुनौतियों से ऊपर उठती है और प्रामाणिक मूल्य में निहित रहती है।'
    }
  },
  {
    id: '민수_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling quick excellence through fluid adaptability. Your swift thinking flows like a mountain stream that carves its path with gentle persistence, achieving remarkable results through natural intelligence and graceful determination.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 유연한 적응력을 통해 신속한 탁월함을 이끌어냅니다. 당신의 빠른 생각은 부드러운 끈기로 자신의 길을 개척하는 산골짜기 시냇물처럼 흘러, 타고난 지성과 우아한 결단력으로 놀라운 결과를 성취합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、流動的な適応性を通して迅速な卓越性を導きます。あなたの素早い思考は、穏やかな粘り強さでその道を切り開く山の小川のように流れ、自然な知性と優雅な決意を通して驚くべき結果を達成します。',
      zh: '你的水属性与这个名字相协调，通过流动的适应性引导快速的卓越。你敏捷的思维像山涧一样流动，用温和的毅力开辟自己的道路，通过天生的智慧和优雅的决心取得非凡的成果。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une excellence rapide grâce à une adaptabilité fluide. Votre pensée rapide coule comme un ruisseau de montagne qui trace son chemin avec une douce persistance, obtenant des résultats remarquables grâce à une intelligence naturelle et une détermination gracieuse.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert schnelle Exzellenz durch fließende Anpassungsfähigkeit. Ihr schnelles Denken fließt wie ein Gebirgsbach, der sich mit sanfter Beharrlichkeit seinen Weg bahnt und durch natürliche Intelligenz und anmutige Entschlossenheit bemerkenswerte Ergebnisse erzielt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una rápida excelencia a través de una fluida adaptabilidad. Tu pensamiento rápido fluye como un arroyo de montaña que traza su camino con suave persistencia, logrando resultados notables a través de la inteligencia natural y la determinación elegante.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя быстрое совершенство через плавную адаптивность. Ваше быстрое мышление течет, как горный ручей, который прокладывает свой путь с мягкой настойчивостью, достигая замечательных результатов благодаря природному интеллекту и изящной решимости.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه التميز السريع من خلال القدرة على التكيف السلس. يتدفق تفكيرك السريع مثل تيار جبلي يشق طريقه بإصرار لطيف، ويحقق نتائج رائعة من خلال الذكاء الطبيعي والتصميم الرشيق.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो द्रव अनुकूलनशीलता के माध्यम से त्वरित उत्कृष्टता को प्रसारित करती है। आपकी तेज सोच एक पहाड़ी धारा की तरह बहती है जो कोमल दृढ़ता के साथ अपना रास्ता बनाती है, प्राकृतिक बुद्धि और सुंदर दृढ़ संकल्प के माध्यम से उल्लेखनीय परिणाम प्राप्त करती है।'
    }
  },
  {
    id: '민정_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, blending quick reflexes with pure, clear intentions. Your swift clarity flows like a crystal spring that never loses its transparency, creating an authentic leadership that inspires trust through honest and clear-sighted action.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 빠른 반사 신경과 순수하고 맑은 의도를 결합합니다. 당신의 신속한 명료함은 투명성을 잃지 않는 수정 샘물처럼 흘러, 정직하고 명철한 행동을 통해 신뢰를 불러일으키는 진정한 리더십을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、素早い反射神経と純粋で明確な意図を融合させます。あなたの迅速な明快さは、その透明性を決して失わない水晶の泉のように流れ、正直で明確な行動を通して信頼を刺激する本物のリーダーシップを生み出します。',
      zh: '你的水属性与这个名字相协调，将快速的反应与纯洁、清晰的意图融为一体。你敏捷的清晰度像一个永不失去透明度的水晶泉一样流动，创造出一种通过诚实和清晰的行动激发信任的真实领导力。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, mêlant des réflexes rapides à des intentions pures et claires. Votre clarté rapide coule comme une source de cristal qui ne perd jamais sa transparence, créant un leadership authentique qui inspire la confiance par une action honnête et clairvoyante.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und verbindet schnelle Reflexe mit reinen, klaren Absichten. Ihre schnelle Klarheit fließt wie eine Kristallquelle, die niemals ihre Transparenz verliert, und schafft eine authentische Führung, die durch ehrliches und klares Handeln Vertrauen schafft.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, mezclando reflejos rápidos con intenciones puras y claras. Tu rápida claridad fluye como un manantial de cristal que nunca pierde su transparencia, creando un liderazgo auténtico que inspira confianza a través de una acción honesta y clarividente.',
      ru: 'Ваша природа Воды гармонирует с этим именем, сочетая быстрые рефлексы с чистыми, ясными намерениями. Ваша быстрая ясность течет, как кристальный источник, который никогда не теряет своей прозрачности, создавая подлинное лидерство, которое внушает доверие благодаря честным и ясным действиям.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتمزج بين ردود الفعل السريعة والنوايا النقية والواضحة. يتدفق وضوحك السريع مثل نبع بلوري لا يفقد شفافيته أبدًا، مما يخلق قيادة أصيلة تلهم الثقة من خلال العمل الصادق والواضح.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो त्वरित सजगता को शुद्ध, स्पष्ट इरादों के साथ मिश्रित करती है। आपकी तेज स्पष्टता एक क्रिस्टल झरने की तरह बहती है जो कभी भी अपनी पारदर्शिता नहीं खोती है, एक प्रामाणिक नेतृत्व बनाती है जो ईमानदार और स्पष्ट-दृष्टि वाली कार्रवाई के माध्यम से विश्वास को प्रेरित करती है।'
    }
  },
  {
    id: '민주_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, polishing swift thinking into precious wisdom. Your quick intellect sparkles like a rare pearl formed in deep waters, creating treasured insights that illuminate solutions with a gentle, profound brilliance.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 신속한 사고를 귀중한 지혜로 다듬습니다. 당신의 빠른 지성은 깊은 물속에서 형성된 희귀한 진주처럼 반짝이며, 부드럽고 심오한 총명함으로 해결책을 비추는 소중한 통찰력을 만들어냅니다.',
      ja: 'あなたの水の性質は、この名前と調和し、素早い思考を貴重な知恵に磨き上げます。あなたの素早い知性は、深い水で形成された珍しい真珠のように輝き、穏やかで深遠な輝きで解決策を照らす貴重な洞察を生み出します。',
      zh: '你的水属性与这个名字相协调，将敏捷的思维打磨成宝贵的智慧。你敏捷的智慧像一颗在深水中形成的稀有珍珠一样闪闪发光，创造出珍贵的见解，用温柔、深邃的光芒照亮解决方案。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, polissant la pensée rapide en une sagesse précieuse. Votre intellect vif scintille comme une perle rare formée dans les eaux profondes, créant des aperçus précieux qui illuminent les solutions avec un éclat doux et profond.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und poliert schnelles Denken zu kostbarer Weisheit. Ihr schneller Intellekt funkelt wie eine seltene Perle, die in tiefen Gewässern gebildet wird, und schafft wertvolle Einsichten, die Lösungen mit einer sanften, tiefen Brillanz beleuchten.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, puliendo el pensamiento rápido en una sabiduría preciosa. Tu rápido intelecto brilla como una perla rara formada en aguas profundas, creando ideas valiosas que iluminan las soluciones con un brillo suave y profundo.',
      ru: 'Ваша природа Воды гармонирует с этим именем, превращая быстрое мышление в драгоценную мудрость. Ваш быстрый интеллект сверкает, как редкая жемчужина, образовавшаяся в глубоких водах, создавая драгоценные прозрения, которые освещают решения с нежным, глубоким блеском.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتصقل التفكير السريع إلى حكمة ثمينة. يلمع عقلك السريع مثل لؤلؤة نادرة تشكلت في المياه العميقة، مما يخلق رؤى ثمينة تضيء الحلول ببراعة لطيفة وعميقة.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो तेज सोच को कीमती ज्ञान में बदल देती है। आपकी तेज बुद्धि गहरे पानी में बने एक दुर्लभ मोती की तरह चमकती है, जो कोमल, गहन प्रतिभा के साथ समाधानों को रोशन करने वाली अनमोल अंतर्दृष्टि बनाती है।'
    }
  },
  {
    id: '민지_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, weaving quick thinking with profound wisdom. Your rapid understanding flows like an ancient river that has gathered knowledge from countless journeys, creating a deep insight that guides others with compassionate intelligence.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 빠른 사고와 깊은 지혜를 엮어냅니다. 당신의 신속한 이해력은 수많은 여정에서 지식을 모은 고대 강물처럼 흘러, 자비로운 지성으로 다른 사람들을 안내하는 깊은 통찰력을 만들어냅니다.',
      ja: 'あなたの水の性質は、この名前と調和し、素早い思考と深い知恵を織り交ぜます。あなたの迅速な理解は、数え切れないほどの旅から知識を集めた古代の川のように流れ、思いやりのある知性で他の人を導く深い洞察を生み出します。',
      zh: '你的水属性与这个名字相协调，将敏捷的思维与深刻的智慧交织在一起。你迅速的理解力像一条古老的河流一样流动，它从无数的旅程中收集了知识，创造出一种深刻的洞察力，用富有同情心的智慧引导他人。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, tissant une pensée rapide avec une sagesse profonde. Votre compréhension rapide coule comme une ancienne rivière qui a recueilli des connaissances d\'innombrables voyages, créant une perspicacité profonde qui guide les autres avec une intelligence compatissante.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und verwebt schnelles Denken mit tiefer Weisheit. Ihr schnelles Verständnis fließt wie ein alter Fluss, der Wissen aus unzähligen Reisen gesammelt hat, und schafft eine tiefe Einsicht, die andere mit mitfühlender Intelligenz führt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, tejiendo un pensamiento rápido con una profunda sabiduría. Tu rápida comprensión fluye como un río antiguo que ha acumulado conocimiento de innumerables viajes, creando una profunda perspicacia que guía a otros con una inteligencia compasiva.',
      ru: 'Ваша природа Воды гармонирует с этим именем, сплетая быстрое мышление с глубокой мудростью. Ваше быстрое понимание течет, как древняя река, которая собрала знания из бесчисленных путешествий, создавая глубокое прозрение, которое направляет других с сострадательным интеллектом.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتنسج التفكير السريع بالحكمة العميقة. يتدفق فهمك السريع مثل نهر قديم جمع المعرفة من رحلات لا حصر لها، مما يخلق بصيرة عميقة ترشد الآخرين بذكاء رحيم.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो तेज सोच को गहरे ज्ञान के साथ बुनती है। आपकी तीव्र समझ एक प्राचीन नदी की तरह बहती है जिसने अनगिनत यात्राओं से ज्ञान इकट्ठा किया है, एक गहरी अंतर्दृष्टि पैदा करती है जो दूसरों को दयालु बुद्धि से मार्गदर्शन करती है।'
    }
  },
  {
    id: '민철_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, forging quick reactions into iron-strong resolve. Your swift decision-making and unbreakable determination combine, creating a leadership that cuts through confusion with sharp clarity and unwavering purpose.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 빠른 반응을 강철 같은 결의로 벼려냅니다. 당신의 신속한 의사 결정과 불굴의 결단력이 결합하여, 날카로운 명료함과 흔들리지 않는 목적으로 혼돈을 가르는 리더십을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、素早い反応を鉄のように強い決意に鍛え上げます。あなたの迅速な意思決定と不屈の決意が組み合わさって、鋭い明快さと揺るぎない目的で混乱を切り裂くリーダーシップを生み出します。',
      zh: '你的金属性与这个名字相协调，将快速的反应锻造成钢铁般的决心。你迅速的决策和坚不可摧的决心相结合，创造出一种以敏锐的清晰度和坚定不移的目标来消除混乱的领导力。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant des réactions rapides en une résolution à toute épreuve. Votre prise de décision rapide et votre détermination inébranlable se combinent, créant un leadership qui tranche la confusion avec une clarté nette et un objectif inébranlable.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet schnelle Reaktionen zu eiserner Entschlossenheit. Ihre schnelle Entscheidungsfindung und Ihre unzerbrechliche Entschlossenheit vereinen sich und schaffen eine Führung, die Verwirrung mit scharfer Klarheit und unerschütterlichem Ziel durchbricht.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, forjando reacciones rápidas en una resolución de hierro. Tu rápida toma de decisiones y tu inquebrantable determinación se combinan, creando un liderazgo que atraviesa la confusión con una claridad nítida y un propósito inquebrantable.',
      ru: 'Ваша природа Металла гармонирует с этим именем, выковывая быстрые реакции в железную решимость. Ваше быстрое принятие решений и несокрушимая решимость в сочетании создают лидерство, которое прорезает путаницу с острой ясностью и непоколебимой целью.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصوغ ردود فعل سريعة إلى عزيمة حديدية. يتحد اتخاذك السريع للقرار وتصميمك الذي لا يتزعزع، مما يخلق قيادة تخترق الارتباك بوضوح حاد وهدف لا يتزعزع.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो त्वरित प्रतिक्रियाओं को लोहे की तरह मजबूत संकल्प में बदल देती है। आपका तेज निर्णय लेने और अटूट दृढ़ संकल्प का संयोजन, एक ऐसा नेतृत्व बनाता है जो तेज स्पष्टता और अटूट उद्देश्य के साथ भ्रम को दूर करता है।'
    }
  },
  {
    id: '민혁_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling quick innovation through adaptive creativity. Your swift desire for change flows like a dynamic current that reshapes landscapes, bringing revolutionary solutions that emerge naturally from a deep understanding of the world.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 적응력 있는 창의성을 통해 신속한 혁신을 이끌어냅니다. 변화에 대한 당신의 빠른 열망은 지형을 바꾸는 역동적인 물결처럼 흘러, 세상에 대한 깊은 이해에서 자연스럽게 비롯되는 혁명적인 해결책을 가져옵니다.',
      ja: 'あなたの水の性質は、この名前と調和し、適応性のある創造性を通して迅速な革新を導きます。変化へのあなたの迅速な欲求は、風景を再形成するダイナミックな流れのように流れ、世界の深い理解から自然に現れる革新的な解決策をもたらします。',
      zh: '你的水属性与这个名字相协调，通过适应性强的创造力引导快速的创新。你对变革的迅速渴望像一股重塑地貌的动态潮流一样流动，带来了从对世界的深刻理解中自然产生的革命性解决方案。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une innovation rapide grâce à une créativité adaptative. Votre désir rapide de changement coule comme un courant dynamique qui remodèle les paysages, apportant des solutions révolutionnaires qui émergent naturellement d\'une profonde compréhension du monde.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert schnelle Innovation durch adaptive Kreativität. Ihr schneller Wunsch nach Veränderung fließt wie ein dynamischer Strom, der Landschaften neu formt und revolutionäre Lösungen hervorbringt, die sich auf natürliche Weise aus einem tiefen Verständnis der Welt ergeben.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una rápida innovación a través de una creatividad adaptativa. Tu rápido deseo de cambio fluye como una corriente dinámica que remodela los paisajes, trayendo soluciones revolucionarias que surgen naturalmente de una profunda comprensión del mundo.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя быстрые инновации через адаптивное творчество. Ваше быстрое стремление к переменам течет, как динамичный поток, который меняет ландшафты, принося революционные решения, которые естественным образом возникают из глубокого понимания мира.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه الابتكار السريع من خلال الإبداع التكيفي. تتدفق رغبتك السريعة في التغيير مثل تيار ديناميكي يعيد تشكيل المناظر الطبيعية، ويجلب حلولًا ثورية تنشأ بشكل طبيعي من فهم عميق للعالم.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो अनुकूली रचनात्मकता के माध्यम से त्वरित नवाचार को प्रसारित करती है। परिवर्तन के लिए आपकी तीव्र इच्छा एक गतिशील धारा की तरह बहती है जो परिदृश्य को नया आकार देती है, क्रांतिकारी समाधान लाती है जो दुनिया की गहरी समझ से स्वाभाविक रूप से उभरती है।'
    }
  },
  {
    id: '민호_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, combining swift agility with a great depth of character. Your quick and mighty spirit flows like powerful rapids carving magnificent canyons, achieving greatness through a perfect balance of speed, strength, and depth.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 신속한 민첩성과 위대한 인품의 깊이를 결합합니다. 당신의 빠르고 강한 정신은 웅장한 협곡을 깎아내는 거센 급류처럼 흘러, 속도, 힘, 그리고 깊이의 완벽한 균형을 통해 위대함을 성취합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、素早い敏捷性と素晴らしい人格の深さを兼ね備えています。あなたの素早く力強い精神は、壮大な峡谷を刻む強力な急流のように流れ、スピード、強さ、そして深さの完璧なバランスを通して偉大さを達成します。',
      zh: '你的水属性与这个名字相协调，将敏捷的敏捷性与深刻的品格深度相结合。你敏捷而强大的精神像强大的急流一样流动，雕刻出壮丽的峡谷，通过速度、力量和深度的完美平衡实现伟大。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, combinant une agilité rapide avec une grande profondeur de caractère. Votre esprit vif et puissant coule comme des rapides puissants creusant de magnifiques canyons, atteignant la grandeur grâce à un équilibre parfait entre vitesse, force et profondeur.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kombiniert schnelle Agilität mit einer großen Charaktertiefe. Ihr schneller und mächtiger Geist fließt wie reißende Stromschnellen, die prächtige Schluchten formen, und erreicht Größe durch ein perfektes Gleichgewicht von Geschwindigkeit, Stärke und Tiefe.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, combinando una rápida agilidad con una gran profundidad de carácter. Tu espíritu rápido y poderoso fluye como rápidos poderosos que tallan magníficos cañones, logrando la grandeza a través de un equilibrio perfecto de velocidad, fuerza y profundidad.',
      ru: 'Ваша природа Воды гармонирует с этим именем, сочетая быструю ловкость с большой глубиной характера. Ваш быстрый и могучий дух течет, как мощные пороги, высекающие великолепные каньоны, достигая величия благодаря идеальному балансу скорости, силы и глубины.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتجمع بين الرشاقة السريعة وعمق الشخصية العظيم. تتدفق روحك السريعة والقوية مثل المنحدرات القوية التي تنحت الأخاديد الرائعة، وتحقق العظمة من خلال توازن مثالي بين السرعة والقوة والعمق.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो तेज चपलता को चरित्र की एक बड़ी गहराई के साथ जोड़ती है। आपकी तेज और शक्तिशाली आत्मा शक्तिशाली रैपिड्स की तरह बहती है जो शानदार घाटियों को तराशती है, गति, शक्ति और गहराई के एक आदर्श संतुलन के माध्यम से महानता प्राप्त करती है।'
    }
  },
  {
    id: '방찬_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, creating spaces filled with brilliant, room-brightening radiance. Your energy forges connections like a precious metal conducting light, illuminating any environment so that others feel welcomed and inspired to flourish.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 방을 밝히는 눈부신 광채로 가득 찬 공간을 창조합니다. 당신의 에너지는 빛을 전도하는 귀금속처럼 연결을 벼려내어, 어떤 환경이든 밝게 비추어 다른 사람들이 환영받고 번성하도록 영감을 줍니다.',
      ja: 'あなたの金の性質は、この名前と調和し、輝く、部屋を明るくする輝きに満ちた空間を作り出します。あなたのエネルギーは、光を伝導する貴金属のように接続を築き、どんな環境も照らし、他の人が歓迎され、繁栄するように促します。',
      zh: '你的金属性与这个名字相协调，创造出充满灿烂、照亮房间的光辉的空间。你的能量像导光的贵金属一样锻造联系，照亮任何环境，让别人感到受欢迎并受到鼓舞而茁壮成长。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, créant des espaces remplis d\'un éclat brillant qui illumine la pièce. Votre énergie forge des liens comme un métal précieux conduisant la lumière, illuminant n\'importe quel environnement pour que les autres se sentent accueillis et inspirés à s\'épanouir.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schafft Räume, die mit strahlender, raumaufhellender Ausstrahlung gefüllt sind. Ihre Energie schmiedet Verbindungen wie ein Edelmetall, das Licht leitet, und beleuchtet jede Umgebung, sodass sich andere willkommen und inspiriert fühlen, zu gedeihen.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, creando espacios llenos de un resplandor brillante que ilumina la habitación. Tu energía forja conexiones como un metal precioso que conduce la luz, iluminando cualquier ambiente para que otros se sientan bienvenidos e inspirados a florecer.',
      ru: 'Ваша природа Металла гармонирует с этим именем, создавая пространства, наполненные блестящим, осветляющим комнату сиянием. Ваша энергия создает связи, подобные драгоценному металлу, проводящему свет, освещая любую среду, чтобы другие чувствовали себя желанными и вдохновленными на процветание.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، مما يخلق مساحات مليئة بإشراق لامع يضيء الغرفة. طاقتك تصوغ روابط مثل معدن ثمين يوصل الضوء، وتضيء أي بيئة حتى يشعر الآخرون بالترحيب والإلهام للازدهار.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो शानदार, कमरे को रोशन करने वाली चमक से भरे स्थान बनाती है। आपकी ऊर्जा एक कीमती धातु की तरह संबंध बनाती है जो प्रकाश का संचालन करती है, किसी भी वातावरण को रोशन करती है ताकि दूसरे स्वागत और फलने-फूलने के लिए प्रेरित महसूस करें।'
    }
  },
  {
    id: '서준_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, channeling the talent of the west with sharp precision. This directional strength combines with your exceptional ability, creating a leadership that shines like polished steel, guiding others toward their highest potential with unwavering focus.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 서쪽의 재능을 날카로운 정밀함으로 이끌어냅니다. 이 방향의 힘은 당신의 탁월한 능력과 결합하여, 잘 닦인 강철처럼 빛나는 리더십을 창조하고, 흔들림 없는 집중력으로 다른 사람들을 최고의 잠재력으로 이끕니다.',
      ja: 'あなたの金の性質は、この名前と調和し、鋭い精度で西の才能を導きます。この方向性の強さは、あなたの卓越した能力と組み合わさって、磨かれた鋼のように輝くリーダーシップを生み出し、揺るぎない集中力で他の人を最高の可能性へと導きます。',
      zh: '你的金属性与这个名字相协调，以敏锐的精确度引导西方的才华。这种方向性的力量与你卓越的能力相结合，创造出一种像抛光钢一样闪耀的领导力，以坚定不移的专注力引导他人发挥最高潜力。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, canalisant le talent de l\'ouest avec une précision aiguë. Cette force directionnelle se combine avec votre capacité exceptionnelle, créant un leadership qui brille comme de l\'acier poli, guidant les autres vers leur plus haut potentiel avec une concentration inébranlable.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und kanalisiert das Talent des Westens mit scharfer Präzision. Diese Richtungsstärke verbindet sich mit Ihrer außergewöhnlichen Fähigkeit und schafft eine Führung, die wie polierter Stahl glänzt und andere mit unerschütterlichem Fokus auf ihr höchstes Potenzial führt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, canalizando el talento del oeste con una precisión afilada. Esta fuerza direccional se combina con tu habilidad excepcional, creando un liderazgo que brilla como el acero pulido, guiando a otros hacia su máximo potencial con un enfoque inquebrantable.',
      ru: 'Ваша природа Металла гармонирует с этим именем, направляя талант запада с острой точностью. Эта направленная сила в сочетании с вашими исключительными способностями создает лидерство, которое сияет, как полированная сталь, направляя других к их высочайшему потенциалу с непоколебимой сосредоточенностью.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتوجه موهبة الغرب بدقة حادة. تتحد هذه القوة الاتجاهية مع قدرتك الاستثنائية، مما يخلق قيادة تتألق مثل الفولاذ المصقول، وتوجه الآخرين نحو أعلى إمكاناتهم بتركيز لا يتزعزع.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो पश्चिम की प्रतिभा को तेज सटीकता के साथ प्रसारित करती है। यह दिशात्मक शक्ति आपकी असाधारण क्षमता के साथ मिलती है, एक ऐसा नेतृत्व बनाती है जो पॉलिश किए हुए स्टील की तरह चमकता है, जो दूसरों को अटूट फोकस के साथ उनकी उच्चतम क्षमता की ओर मार्गदर्शन करता है।'
    }
  },
  {
    id: '선우_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, refining goodness into excellent character. Your virtuous foundation and outstanding quality combine to create a moral strength like a fine-tempered sword, cutting through deception while protecting the innocent.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 선량함을 탁월한 품성으로 정제합니다. 당신의 고결한 기반과 뛰어난 자질이 결합하여, 잘 벼린 검처럼 속임수를 베어내고 무고한 이들을 보호하는 도덕적 힘을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、善を優れた人格に磨き上げます。あなたの高潔な基盤と卓越した品質が組み合わさって、無実の人々を守りながら欺瞞を切り裂く、よく鍛えられた剣のような道徳的な強さを生み出します。',
      zh: '你的金属性与这个名字相协调，将善良提炼成卓越的品格。你高尚的基础和卓越的品质相结合，创造出一种像一把经过精良回火的剑一样的道德力量，在保护无辜者的同时，也能识破欺骗。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, affinant la bonté en un excellent caractère. Votre fondation vertueuse et votre qualité exceptionnelle se combinent pour créer une force morale semblable à une épée bien trempée, tranchant la tromperie tout en protégeant les innocents.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und verfeinert Güte zu exzellentem Charakter. Ihre tugendhafte Grundlage und Ihre herausragende Qualität vereinen sich zu einer moralischen Stärke wie ein fein gehärtetes Schwert, das Täuschung durchschneidet und gleichzeitig die Unschuldigen schützt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, refinando la bondad en un carácter excelente. Tu base virtuosa y tu calidad sobresaliente se combinan para crear una fuerza moral como una espada bien templada, que atraviesa el engaño mientras protege a los inocentes.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая доброту в превосходный характер. Ваша добродетельная основа и выдающееся качество в сочетании создают моральную силу, подобную хорошо закаленному мечу, прорезающему обман и защищающему невинных.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصقل الخير إلى شخصية ممتازة. يتحد أساسك الفاضل وجودتك المتميزة لخلق قوة أخلاقية مثل سيف جيد الصنع، يقطع الخداع مع حماية الأبرياء.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो अच्छाई को उत्कृष्ट चरित्र में परिष्कृत करती है। आपकी गुणी नींव और उत्कृष्ट गुणवत्ता मिलकर एक बढ़िया स्वभाव वाली तलवार की तरह एक नैतिक शक्ति बनाती है, जो निर्दोषों की रक्षा करते हुए धोखे को काटती है।'
    }
  },
  {
    id: '성호_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, forging a holy purpose with great determination. Your sacred calling and magnificent strength combine to create a spiritual leadership that shines like consecrated gold, inspiring reverence and devotion in all who witness your noble character.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 성스러운 목적을 위대한 결단력으로 벼려냅니다. 당신의 신성한 소명과 장엄한 힘이 결합하여, 축성된 황금처럼 빛나는 영적 리더십을 창조하고, 당신의 고귀한 품성을 목격하는 모든 이에게 경외와 헌신을 불러일으킵니다.',
      ja: 'あなたの金の性質は、この名前と調和し、大きな決意をもって聖なる目的を築きます。あなたの神聖な召命と壮大な力が組み合わさって、聖別された金のように輝く精神的なリーダーシップを生み出し、あなたの高貴な人格を目撃するすべての人に畏敬と献身を促します。',
      zh: '你的金属性与这个名字相协调，以巨大的决心锻造一个神圣的目标。你神圣的使命和宏伟的力量相结合，创造出一种像圣金一样闪耀的精神领导力，在你高尚品格的所有见证者中激发敬畏和奉献。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant un but sacré avec une grande détermination. Votre vocation sacrée et votre force magnifique se combinent pour créer un leadership spirituel qui brille comme de l\'or consacré, inspirant la révérence et la dévotion chez tous ceux qui sont témoins de votre noble caractère.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet mit großer Entschlossenheit einen heiligen Zweck. Ihre heilige Berufung und Ihre großartige Stärke vereinen sich zu einer spirituellen Führung, die wie geweihtes Gold glänzt und bei allen, die Ihren edlen Charakter bezeugen, Ehrfurcht und Hingabe hervorruft.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, forjando un propósito sagrado con gran determinación. Tu vocación sagrada y tu magnífica fuerza se combinan para crear un liderazgo espiritual que brilla como el oro consagrado, inspirando reverencia y devoción en todos los que presencian tu noble carácter.',
      ru: 'Ваша природа Металла гармонирует с этим именем, выковывая святую цель с великой решимостью. Ваше священное призвание и великолепная сила в сочетании создают духовное лидерство, которое сияет, как освященное золото, внушая благоговение и преданность всем, кто видит ваш благородный характер.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصوغ هدفًا مقدسًا بتصميم كبير. تتحد دعوتك المقدسة وقوتك الرائعة لخلق قيادة روحية تتألق مثل الذهب المكرس، وتلهم الرهبة والتفاني في كل من يشهد على شخصيتك النبيلة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो बड़े दृढ़ संकल्प के साथ एक पवित्र उद्देश्य बनाती है। आपका पवित्र बुलावा और शानदार ताकत मिलकर एक आध्यात्मिक नेतृत्व बनाती है जो पवित्र सोने की तरह चमकता है, जो आपके महान चरित्र को देखने वाले सभी लोगों में श्रद्धा और भक्ति को प्रेरित करता है।'
    }
  },
  {
    id: '소영_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, cultivating small beginnings into magnificent prosperity. Your humble start and flourishing growth combine to create an authentic success that gleams like refined silver, proving that true wealth comes from patient cultivation.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 작은 시작을 장엄한 번영으로 일구어냅니다. 당신의 겸손한 시작과 무성한 성장이 결합하여, 잘 닦인 은처럼 빛나는 진정한 성공을 창조하며, 참된 부는 끈기 있는 경작에서 비롯됨을 증명합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、小さな始まりを壮大な繁栄に育てます。あなたの謙虚な始まりと繁栄する成長が組み合わさって、洗練された銀のように輝く本物の成功を生み出し、真の富は忍耐強い育成から生まれることを証明します。',
      zh: '你的金属性与这个名字相协调，将小的开端培养成宏伟的繁荣。你谦逊的开端和蓬勃的成长相结合，创造出一种像精炼银一样闪闪发光的真实成功，证明了真正的财富来自耐心的培养。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, cultivant de petits commencements en une magnifique prospérité. Votre humble départ et votre croissance florissante se combinent pour créer un succès authentique qui brille comme de l\'argent raffiné, prouvant que la vraie richesse vient d\'une culture patiente.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und kultiviert kleine Anfänge zu großartigem Wohlstand. Ihr bescheidener Anfang und Ihr blühendes Wachstum vereinen sich zu einem authentischen Erfolg, der wie raffiniertes Silber glänzt und beweist, dass wahrer Reichtum aus geduldiger Kultivierung entsteht.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, cultivando pequeños comienzos en una magnífica prosperidad. Tu humilde comienzo y tu floreciente crecimiento se combinan para crear un éxito auténtico que brilla como la plata refinada, demostrando que la verdadera riqueza proviene de un cultivo paciente.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая малые начинания в великолепное процветание. Ваше скромное начало и процветающий рост в сочетании создают подлинный успех, который сияет, как очищенное серебро, доказывая, что истинное богатство приходит от терпеливого взращивания.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتزرع البدايات الصغيرة لتتحول إلى ازدهار رائع. يتحد بدايتك المتواضعة ونموك المزدهر لخلق نجاح حقيقي يلمع مثل الفضة المكررة، مما يثبت أن الثروة الحقيقية تأتي من الزراعة الصبورة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो छोटी शुरुआत को शानदार समृद्धि में विकसित करती है। आपकी विनम्र शुरुआत और फलते-फूलते विकास मिलकर एक प्रामाणिक सफलता बनाते हैं जो परिष्कृत चांदी की तरह चमकती है, यह साबित करती है कि सच्चा धन धैर्यपूर्ण खेती से आता है।'
    }
  },
  {
    id: '소정_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, transforming small clarities into brilliant illumination. Your crystalline purity and precise focus combine to create a wisdom that sparkles like a flawless diamond, revealing truth through gentle yet unwavering insight.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 작은 명료함을 눈부신 광명으로 변모시킵니다. 당신의 수정 같은 순수함과 정확한 집중력이 결합하여, 흠 없는 다이아몬드처럼 반짝이는 지혜를 창조하고, 부드러우면서도 흔들림 없는 통찰력으로 진실을 드러냅니다.',
      ja: 'あなたの金の性質は、この名前と調和し、小さな明快さを輝かしい照明に変えます。あなたの結晶のような純粋さと正確な焦点が組み合わさって、完璧なダイヤモンドのように輝く知恵を生み出し、穏やかでありながら揺るぎない洞察を通して真実を明らかにします。',
      zh: '你的金属性与这个名字相协调，将小的清晰转化为灿烂的光明。你晶莹剔透的纯洁和精确的专注相结合，创造出一种像完美无瑕的钻石一样闪闪发光的智慧，通过温和而坚定不移的洞察力揭示真理。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, transformant de petites clartés en une illumination brillante. Votre pureté cristalline et votre concentration précise se combinent pour créer une sagesse qui scintille comme un diamant sans défaut, révélant la vérité par une perspicacité douce mais inébranlable.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und verwandelt kleine Klarheiten in brillante Erleuchtung. Ihre kristalline Reinheit und Ihr präziser Fokus vereinen sich zu einer Weisheit, die wie ein makelloser Diamant funkelt und die Wahrheit durch sanfte, aber unerschütterliche Einsicht enthüllt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, transformando pequeñas claridades en una iluminación brillante. Tu pureza cristalina y tu enfoque preciso se combinan para crear una sabiduría que brilla como un diamante impecable, revelando la verdad a través de una visión suave pero inquebrantable.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая малые ясности в блестящее озарение. Ваша кристальная чистота и точная фокусировка в сочетании создают мудрость, которая сверкает, как безупречный бриллиант, открывая истину через нежное, но непоколебимое прозрение.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتحول الوضوح الصغير إلى إضاءة رائعة. تتحد نقاوتك البلورية وتركيزك الدقيق لخلق حكمة تتلألأ مثل الماس الخالي من العيوب، وتكشف الحقيقة من خلال بصيرة لطيفة ولكن لا تتزعزع.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो छोटी स्पष्टता को शानदार रोशनी में बदल देती है। आपकी क्रिस्टलीय शुद्धता और सटीक ध्यान मिलकर एक ऐसी बुद्धि का निर्माण करते हैं जो एक निर्दोष हीरे की तरह चमकती है, जो कोमल लेकिन अटूट अंतर्दृष्टि के माध्यम से सच्चाई को प्रकट करती है।'
    }
  },
  {
    id: '소진_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, polishing small treasures into extraordinary value. Your precious essence and careful refinement combine to create a character that shines like a rare gem, demonstrating that true worth lies in authentic quality, not just appearance.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 작은 보물을 비범한 가치로 닦아냅니다. 당신의 귀중한 본질과 세심한 정제가 결합하여, 희귀한 보석처럼 빛나는 품성을 창조하며, 진정한 가치는 외양이 아닌 진정한 품질에 있음을 보여줍니다.',
      ja: 'あなたの金の性質は、この名前と調和し、小さな宝物を並外れた価値に磨き上げます。あなたの貴重な本質と注意深い洗練が組み合わさって、希少な宝石のように輝く性格を生み出し、真の価値は外見だけでなく本物の品質にあることを示します。',
      zh: '你的金属性与这个名字相协调，将小宝藏打磨成非凡的价值。你珍贵的本质和精心的提炼相结合，创造出一种像稀有宝石一样闪耀的品格，表明真正的价值在于真实的品质，而不仅仅是外表。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant de petits trésors en une valeur extraordinaire. Votre essence précieuse et votre raffinement soigné se combinent pour créer un caractère qui brille comme une gemme rare, démontrant que la vraie valeur réside dans la qualité authentique, et non dans la simple apparence.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert kleine Schätze zu außergewöhnlichem Wert. Ihre kostbare Essenz und Ihre sorgfältige Verfeinerung vereinen sich zu einem Charakter, der wie ein seltener Edelstein glänzt und zeigt, dass wahrer Wert in authentischer Qualität und nicht nur im Aussehen liegt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo pequeños tesoros en un valor extraordinario. Tu esencia preciosa y tu cuidadoso refinamiento se combinan para crear un carácter que brilla como una gema rara, demostrando que el verdadero valor reside en la calidad auténtica, no solo en la apariencia.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая маленькие сокровища в необычайную ценность. Ваша драгоценная сущность и тщательная обработка в сочетании создают характер, который сияет, как редкий драгоценный камень, демонстрируя, что истинная ценность заключается в подлинном качестве, а не только во внешности.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصقل الكنوز الصغيرة إلى قيمة غير عادية. يتحد جوهرك الثمين وصقلك الدقيق لخلق شخصية تتألق مثل جوهرة نادرة، مما يدل على أن القيمة الحقيقية تكمن في الجودة الأصيلة، وليس فقط المظهر.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो छोटे खजानों को असाधारण मूल्य में चमकाती है। आपका कीमती सार और सावधानीपूर्वक शोधन मिलकर एक ऐसा चरित्र बनाते हैं जो एक दुर्लभ रत्न की तरह चमकता है, यह दर्शाता है कि सच्चा मूल्य केवल उपस्थिति में ही नहीं, बल्कि प्रामाणिक गुणवत्ता में निहित है।'
    }
  },
  {
    id: '수빈_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, flowing with an excellence that endures through grace. Your beautiful achievements and lasting strength combine to create a wisdom that endures like an ancient river, nourishing civilizations across countless generations.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 우아함을 통해 지속되는 탁월함으로 흐릅니다. 당신의 아름다운 성취와 지속적인 힘이 결합하여, 수많은 세대에 걸쳐 문명을 키워온 고대 강물처럼 영속하는 지혜를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、優雅さを通して持続する卓越性で流れます。あなたの美しい業績と永続的な強さが組み合わさって、古代の川のように持続する知恵を生み出し、数え切れないほどの世代にわたって文明を育みます。',
      zh: '你的水属性与这个名字相协调，以一种通过优雅而持久的卓越流动。你美丽的成就和持久的力量相结合，创造出一种像古老的河流一样持久的智慧，滋养着无数代文明。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une excellence qui perdure par la grâce. Vos belles réalisations et votre force durable se combinent pour créer une sagesse qui perdure comme une ancienne rivière, nourrissant les civilisations à travers d\'innombrables générations.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit einer Exzellenz, die durch Anmut Bestand hat. Ihre schönen Errungenschaften und Ihre dauerhafte Stärke vereinen sich zu einer Weisheit, die wie ein alter Fluss Bestand hat und Zivilisationen über unzählige Generationen hinweg nährt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una excelencia que perdura a través de la gracia. Tus hermosos logros y tu fuerza duradera se combinan para crear una sabiduría que perdura como un río antiguo, nutriendo civilizaciones a través de innumerables generaciones.',
      ru: 'Ваша природа Воды гармонирует с этим именем, текущим с совершенством, которое сохраняется благодаря изяществу. Ваши прекрасные достижения и прочная сила в сочетании создают мудрость, которая сохраняется, как древняя река, питая цивилизации на протяжении бесчисленных поколений.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتتدفق بامتياز يدوم من خلال النعمة. تتحد إنجازاتك الجميلة وقوتك الدائمة لخلق حكمة تدوم مثل نهر قديم، وتغذي الحضارات عبر أجيال لا حصر لها.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक ऐसी उत्कृष्टता के साथ बहती है जो कृपा के माध्यम से बनी रहती है। आपकी सुंदर उपलब्धियां और स्थायी ताकत मिलकर एक ऐसी बुद्धि का निर्माण करती है जो एक प्राचीन नदी की तरह बनी रहती है, जो अनगिनत पीढ़ियों तक सभ्यताओं का पोषण करती है।'
    }
  },
  {
    id: '수정_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, crystallizing beauty into perfect clarity. Your gorgeous crystal formation and unbreakable transparency combine to create a character that refracts light like a precious gem, revealing the hidden beauty in everything you touch.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 아름다움을 완벽한 투명함으로 결정화합니다. 당신의 화려한 수정 형태와 깨지지 않는 투명성이 결합하여, 귀한 보석처럼 빛을 굴절시키는 품성을 창조하고, 당신이 닿는 모든 것에서 숨겨진 아름다움을 드러냅니다.',
      ja: 'あなたの金の性質は、この名前と調和し、美しさを完璧な透明度に結晶化させます。あなたの豪華な結晶形成と壊れない透明性が組み合わさって、貴重な宝石のように光を屈折させる性格を生み出し、あなたが触れるすべてのものに隠された美しさを明らかにします。',
      zh: '你的金属性与这个名字相协调，将美丽结晶成完美的清晰度。你华丽的水晶形态和坚不可摧的透明度相结合，创造出一种像珍贵宝石一样折射光线的品格，揭示你所接触到的一切事物中隐藏的美丽。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, cristallisant la beauté en une clarté parfaite. Votre magnifique formation cristalline et votre transparence incassable se combinent pour créer un caractère qui réfracte la lumière comme une gemme précieuse, révélant la beauté cachée dans tout ce que vous touchez.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und kristallisiert Schönheit zu perfekter Klarheit. Ihre wunderschöne Kristallbildung und Ihre unzerbrechliche Transparenz vereinen sich zu einem Charakter, der das Licht wie ein kostbarer Edelstein bricht und die verborgene Schönheit in allem, was Sie berühren, enthüllt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, cristalizando la belleza en una claridad perfecta. Tu hermosa formación de cristal y tu transparencia inquebrantable se combinan para crear un carácter que refracta la luz como una gema preciosa, revelando la belleza oculta en todo lo que tocas.',
      ru: 'Ваша природа Металла гармонирует с этим именем, кристаллизуя красоту в совершенную ясность. Ваше великолепное кристаллическое образование и нерушимая прозрачность в сочетании создают характер, который преломляет свет, как драгоценный камень, раскрывая скрытую красоту во всем, к чему вы прикасаетесь.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتبلور الجمال في وضوح تام. يتحد تكوين الكريستال الرائع والشفافية غير القابلة للكسر لخلق شخصية تكسر الضوء مثل جوهرة ثمينة، وتكشف عن الجمال الخفي في كل ما تلمسه.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो सुंदरता को पूर्ण स्पष्टता में क्रिस्टलीकृत करती है। आपका भव्य क्रिस्टल गठन और अटूट पारदर्शिता मिलकर एक ऐसा चरित्र बनाते हैं जो एक कीमती रत्न की तरह प्रकाश को अपवर्तित करता है, जो आपके द्वारा छुई गई हर चीज में छिपी सुंदरता को प्रकट करता है।'
    }
  },
  {
    id: '수진_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, forging a beautiful character with precious determination. Your stunning quality and treasured resolve combine to create a strength that gleams like polished gold, inspiring others through your commitment to authentic excellence.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 아름다운 품성을 귀한 결단력으로 벼려냅니다. 당신의 빼어난 자질과 소중한 결의가 결합하여, 잘 닦인 금처럼 빛나는 힘을 창조하고, 진정한 탁월함을 향한 당신의 헌신을 통해 다른 이들에게 영감을 줍니다.',
      ja: 'あなたの金の性質は、この名前と調和し、貴重な決意をもって美しい人格を築きます。あなたの見事な品質と大切な決意が組み合わさって、磨かれた金のように輝く強さを生み出し、真の卓越性へのあなたのコミットメントを通して他の人を鼓舞します。',
      zh: '你的金属性与这个名字相协调，以宝贵的决心锻造出一个美丽的品格。你惊人的品质和珍贵的决心相结合，创造出一种像抛光金一样闪闪发光的\n力量，通过你对真实卓越的承诺来激励他人。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant un beau caractère avec une détermination précieuse. Votre qualité étonnante et votre résolution précieuse se combinent pour créer une force qui brille comme de l\'or poli, inspirant les autres par votre engagement envers l\'excellence authentique.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet einen schönen Charakter mit kostbarer Entschlossenheit. Ihre atemberaubende Qualität und Ihre geschätzte Entschlossenheit vereinen sich zu einer Stärke, die wie poliertes Gold glänzt und andere durch Ihr Engagement für authentische Exzellenz inspiriert.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, forjando un hermoso carácter con una preciosa determinación. Tu impresionante calidad y tu preciada resolución se combinan para crear una fuerza que brilla como el oro pulido, inspirando a otros a través de tu compromiso con la auténtica excelencia.',
      ru: 'Ваша природа Металла гармонирует с этим именем, выковывая прекрасный характер с драгоценной решимостью. Ваше потрясающее качество и драгоценная решимость в сочетании создают силу, которая сияет, как полированное золото, вдохновляя других вашей приверженностью подлинному совершенству.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصوغ شخصية جميلة بتصميم ثمين. تتحد جودتك المذهلة وعزمك الثمين لخلق قوة تلمع مثل الذهب المصقول، وتلهم الآخرين من خلال التزامك بالتميز الأصيل.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो कीमती दृढ़ संकल्प के साथ एक सुंदर चरित्र का निर्माण करती है। आपकी आश्चर्यजनक गुणवत्ता और क़ीमती संकल्प मिलकर एक ऐसी ताकत बनाते हैं जो पॉलिश किए हुए सोने की तरह चमकती है, जो प्रामाणिक उत्कृष्टता के प्रति आपकी प्रतिबद्धता के माध्यम से दूसरों को प्रेरित करती है।'
    }
  },
  {
    id: '승수_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling victory through a flowing, graceful excellence. Your triumphant spirit and outstanding achievement combine to create a success that moves like a mighty river, overcoming all obstacles through persistent, fluid grace.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 흐르는 듯한 우아한 탁월함을 통해 승리를 이끌어냅니다. 당신의 승리에 찬 정신과 뛰어난 성취가 결합하여, 끈기 있고 유연한 우아함으로 모든 장애물을 극복하는 거대한 강물처럼 움직이는 성공을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、流れるような、優雅な卓越性を通して勝利を導きます。あなたの勝利の精神と卓越した業績が組み合わさって、永続的で流動的な優雅さですべての障害を克服する、力強い川のように動く成功を生み出します。',
      zh: '你的水属性与这个名字相协调，通过流动的、优雅的卓越来引导胜利。你胜利的精神和杰出的成就相结合，创造出一种像一条强大的河流一样移动的成功，通过执着的、流动的优雅克服所有障碍。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant la victoire par une excellence fluide et gracieuse. Votre esprit triomphant et vos réalisations exceptionnelles se combinent pour créer un succès qui se déplace comme une rivière puissante, surmontant tous les obstacles grâce à une grâce persistante et fluide.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert den Sieg durch eine fließende, anmutige Exzellenz. Ihr triumphaler Geist und Ihre herausragende Leistung vereinen sich zu einem Erfolg, der sich wie ein mächtiger Fluss bewegt und alle Hindernisse durch beharrliche, fließende Anmut überwindet.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando la victoria a través de una excelencia fluida y elegante. Tu espíritu triunfante y tus logros sobresalientes se combinan para crear un éxito que se mueve como un río caudaloso, superando todos los obstáculos a través de una gracia persistente y fluida.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя победу через текучее, изящное совершенство. Ваш триумфальный дух и выдающиеся достижения в сочетании создают успех, который движется, как могучая река, преодолевая все препятствия благодаря настойчивой, плавной грации.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه النصر من خلال التميز المتدفق والرشيق. تتحد روحك المنتصرة وإنجازك المتميز لخلق نجاح يتحرك مثل نهر عظيم، ويتغلب على جميع العقبات من خلال النعمة المستمرة والسائلة.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक बहती, सुंदर उत्कृष्टता के माध्यम से जीत को प्रसारित करती है। आपकी विजयी भावना और उत्कृष्ट उपलब्धि मिलकर एक ऐसी सफलता बनाती है जो एक शक्तिशाली नदी की तरह चलती है, जो लगातार, तरल कृपा के माध्यम से सभी बाधाओं को दूर करती है।'
    }
  },
  {
    id: '승재_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, sharpening victory into exceptional talent. Your triumphant strength and brilliant ability combine to create a mastery that cuts through challenges like a perfectly forged blade, achieving success through skilled precision and unwavering will.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 승리를 비범한 재능으로 날카롭게 벼려냅니다. 당신의 승리의 힘과 눈부신 능력이 결합하여, 완벽하게 벼려진 칼날처럼 도전을 가르는 숙달의 경지를 창조하고, 숙련된 정밀함과 흔들림 없는 의지를 통해 성공을 성취합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、勝利を並外れた才能に研ぎ澄まします。あなたの勝利の強さと素晴らしい能力が組み合わさって、完璧に鍛えられた刃のように挑戦を切り裂く熟練を生み出し、熟練した精度と揺るぎない意志を通して成功を収めます。',
      zh: '你的金属性与这个名字相协调，将胜利磨练成非凡的才华。你胜利的力量和卓越的能力相结合，创造出一种像一把完美锻造的刀片一样能够克服挑战的精通，通过熟练的精确度和坚定不移的意志取得成功。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, aiguisant la victoire en un talent exceptionnel. Votre force triomphante et votre capacité brillante se combinent pour créer une maîtrise qui tranche les défis comme une lame parfaitement forgée, réussissant grâce à une précision habile et une volonté inébranlable.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schärft den Sieg zu außergewöhnlichem Talent. Ihre triumphale Stärke und Ihre brillante Fähigkeit vereinen sich zu einer Meisterschaft, die Herausforderungen wie eine perfekt geschmiedete Klinge durchdringt und durch geschickte Präzision und unerschütterlichen Willen Erfolg hat.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, agudizando la victoria en un talento excepcional. Tu fuerza triunfante y tu brillante habilidad se combinan para crear una maestría que atraviesa los desafíos como una hoja perfectamente forjada, logrando el éxito a través de una hábil precisión y una voluntad inquebrantable.',
      ru: 'Ваша природа Металла гармонирует с этим именем, оттачивая победу в исключительный талант. Ваша триумфальная сила и блестящие способности в сочетании создают мастерство, которое прорезает трудности, как идеально выкованный клинок, достигая успеха благодаря умелой точности и непоколебимой воле.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتشحذ النصر إلى موهبة استثنائية. تتحد قوتك المنتصرة وقدرتك الرائعة لخلق إتقان يقطع التحديات مثل نصل مصقول تمامًا، وتحقيق النجاح من خلال الدقة الماهرة والإرادة التي لا تتزعزع.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो जीत को असाधारण प्रतिभा में तेज करती है। आपकी विजयी ताकत और शानदार क्षमता मिलकर एक ऐसी महारत बनाती है जो एक पूरी तरह से जाली ब्लेड की तरह चुनौतियों को काटती है, कुशल परिशुद्धता और अटूट इच्छा के माध्यम से सफलता प्राप्त करती है।'
    }
  },
  {
    id: '승철_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, tempering victory into iron-clad resolve. Your triumphant will and unbreakable strength combine to create a determination that stands like fortress walls, protecting your principles while conquering every challenge you face.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 승리를 철갑 같은 결의로 단련합니다. 당신의 승리의 의지와 깨지지 않는 힘이 결합하여, 성채의 벽처럼 굳건히 서서 당신이 마주하는 모든 도전을 정복하면서 당신의 원칙을 보호하는 결단력을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、勝利を鉄壁の決意に和らげます。あなたの勝利の意志と壊れない強さが組み合わさって、あなたが直面するすべての挑戦を征服しながらあなたの原則を守る、要塞の壁のように立つ決意を生み出します。',
      zh: '你的金属性与这个名字相协调，将胜利磨练成钢铁般的决心。你胜利的意志和坚不可摧的力量相结合，创造出一种像堡垒墙一样坚定的决心，在征服你面临的每一个挑战的同时，保护你的原则。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant la victoire en une résolution à toute épreuve. Votre volonté triomphante et votre force incassable se combinent pour créer une détermination qui se dresse comme des murs de forteresse, protégeant vos principes tout en conquérant chaque défi que vous rencontrez.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert den Sieg zu eiserner Entschlossenheit. Ihr triumphaler Wille und Ihre unzerbrechliche Stärke vereinen sich zu einer Entschlossenheit, die wie Festungsmauern steht und Ihre Prinzipien schützt, während Sie jede Herausforderung meistern, der Sie sich stellen.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, templando la victoria en una resolución férrea. Tu voluntad triunfante y tu fuerza inquebrantable se combinan para crear una determinación que se yergue como muros de fortaleza, protegiendo tus principios mientras conquistas cada desafío que enfrentas.',
      ru: 'Ваша природа Металла гармонирует с этим именем, закаляя победу в железную решимость. Ваша триумфальная воля и несокрушимая сила в сочетании создают решимость, которая стоит, как стены крепости, защищая ваши принципы и побеждая все трудности, с которыми вы сталкиваетесь.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتخفف من حدة النصر إلى عزيمة حديدية. تتحد إرادتك المنتصرة وقوتك غير القابلة للكسر لخلق تصميم يقف مثل جدران القلعة، ويحمي مبادئك أثناء قهر كل تحد تواجهه.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो जीत को लोहे के संकल्प में बदल देती है। आपकी विजयी इच्छा और अटूट ताकत मिलकर एक ऐसा दृढ़ संकल्प बनाती है जो किले की दीवारों की तरह खड़ा होता है, जो आपके सामने आने वाली हर चुनौती पर विजय प्राप्त करते हुए आपके सिद्धांतों की रक्षा करता है।'
    }
  },
  {
    id: '승호_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, flowing with victory toward magnificent achievements. Your triumphant energy and great purpose combine to create a success that surges like ocean tides, bringing an abundance that benefits entire communities.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 승리와 함께 장엄한 성취를 향해 흘러갑니다. 당신의 승리의 에너지와 위대한 목적이 결합하여, 바다의 조수처럼 밀려와 공동체 전체에 이로움을 주는 풍요를 가져오는 성공을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、壮大な業績に向かって勝利とともに流れます。あなたの勝利のエネルギーと偉大な目的が組み合わさって、海の潮のように押し寄せる成功を生み出し、コミュニティ全体に利益をもたらす豊かさをもたらします。',
      zh: '你的水属性与这个名字相协调，带着胜利流向宏伟的成就。你胜利的能量和伟大的目标相结合，创造出一种像海潮一样汹涌的成功，带来造福整个社区的富足。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec la victoire vers de magnifiques réalisations. Votre énergie triomphante et votre grand objectif se combinent pour créer un succès qui déferle comme les marées de l\'océan, apportant une abondance qui profite à des communautés entières.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit dem Sieg zu großartigen Errungenschaften. Ihre triumphale Energie und Ihr großes Ziel vereinen sich zu einem Erfolg, der wie Meeresgezeiten ansteigt und einen Überfluss bringt, der ganzen Gemeinschaften zugute kommt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con la victoria hacia logros magníficos. Tu energía triunfante y tu gran propósito se combinan para crear un éxito que surge como las mareas del océano, trayendo una abundancia que beneficia a comunidades enteras.',
      ru: 'Ваша природа Воды гармонирует с этим именем, текущим с победой к великолепным достижениям. Ваша триумфальная энергия и великая цель в сочетании создают успех, который нарастает, как океанские приливы, принося изобилие, которое приносит пользу целым сообществам.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتتدفق بالنصر نحو إنجازات رائعة. تتحد طاقتك المنتصرة وهدفك العظيم لخلق نجاح يتدفق مثل أمواج المحيط، مما يجلب وفرة تفيد مجتمعات بأكملها.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो शानदार उपलब्धियों की ओर जीत के साथ बहती है। आपकी विजयी ऊर्जा और महान उद्देश्य मिलकर एक ऐसी सफलता बनाते हैं जो समुद्र के ज्वार की तरह बढ़ती है, जो पूरे समुदायों को लाभ पहुंचाने वाली प्रचुरता लाती है।'
    }
  },
  {
    id: '원영_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling prosperity from its source through endless generosity. Your wellspring of abundance and flourishing growth combine to create a wealth that flows like an eternal spring, nourishing countless lives with genuine prosperity.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 끝없는 너그러움을 통해 근원으로부터의 번영을 이끌어냅니다. 당신의 풍요의 샘과 무성한 성장이 결합하여, 영원한 샘물처럼 흘러 수많은 생명을 진정한 번영으로 키우는 부를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、無限の寛大さを通してその源から繁栄を導きます。あなたの豊かさの源泉と繁栄する成長が組み合わさって、永遠の泉のように流れる富を生み出し、無数の生命を真の繁栄で養います。',
      zh: '你的水属性与这个名字相协调，通过无尽的慷慨从其源头引导繁荣。你丰富的源泉和蓬勃的成长相结合，创造出一种像永恒的春天一样流动的财富，用真正的繁荣滋养着无数的生命。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant la prospérité de sa source par une générosité sans fin. Votre source d\'abondance et votre croissance florissante se combinent pour créer une richesse qui coule comme une source éternelle, nourrissant d\'innombrables vies d\'une prospérité authentique.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert den Wohlstand von seiner Quelle durch endlose Großzügigkeit. Ihre Quelle des Überflusses und Ihr blühendes Wachstum vereinen sich zu einem Reichtum, der wie eine ewige Quelle fließt und unzählige Leben mit echtem Wohlstand nährt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando la prosperidad desde su fuente a través de una generosidad infinita. Tu fuente de abundancia y tu floreciente crecimiento se combinan para crear una riqueza que fluye como un manantial eterno, nutriendo innumerables vidas con una prosperidad genuina.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя процветание от его источника через бесконечную щедрость. Ваш источник изобилия и процветающий рост в сочетании создают богатство, которое течет, как вечный источник, питая бесчисленные жизни подлинным процветанием.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه الازدهار من مصدره من خلال الكرم اللامتناهي. يتحد ينبوع الوفرة والنمو المزدهر لديك لخلق ثروة تتدفق مثل نبع أبدي، وتغذي حياة لا حصر لها بالازدهار الحقيقي.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो अंतहीन उदारता के माध्यम से अपने स्रोत से समृद्धि को प्रसारित करती है। आपकी प्रचुरता और फलते-फूलते विकास का स्रोत मिलकर एक ऐसा धन बनाता है जो एक शाश्वत झरने की तरह बहता है, जो अनगिनत जीवन को वास्तविक समृद्धि से पोषित करता है।'
    }
  },
  {
    id: '원우_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, sourcing excellence from deep wells of wisdom. Your fundamental strength and outstanding quality combine to create a leadership that flows like a pristine mountain spring, providing pure, inexhaustible guidance.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 깊은 지혜의 우물에서 탁월함을 길어 올립니다. 당신의 근본적인 힘과 뛰어난 자질이 결합하여, 맑고 깨끗한 산골 샘물처럼 흘러 마르지 않는 순수한 지침을 제공하는 리더십을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、知恵の深い井戸から卓越性を調達します。あなたの基本的な強さと卓越した品質が組み合わさって、純粋で尽きることのないガイダンスを提供する、手付かずの山の泉のように流れるリーダーシップを生み出します。',
      zh: '你的水属性与这个名字相协调，从智慧的深井中汲取卓越。你的基本力量和卓越的品质相结合，创造出一种像原始山泉一样流动的领导力，提供纯粹、取之不尽的指导。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, puisant l\'excellence dans de profonds puits de sagesse. Votre force fondamentale et votre qualité exceptionnelles se combinent pour créer un leadership qui coule comme une source de montagne vierge, offrant des conseils purs et inépuisables.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und bezieht Exzellenz aus tiefen Brunnen der Weisheit. Ihre grundlegende Stärke und Ihre herausragende Qualität vereinen sich zu einer Führung, die wie eine unberührte Bergquelle fließt und reine, unerschöpfliche Führung bietet.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, obteniendo la excelencia de profundos pozos de sabiduría. Tu fuerza fundamental y tu calidad sobresaliente se combinan para crear un liderazgo que fluye como un manantial de montaña prístino, proporcionando una guía pura e inagotable.',
      ru: 'Ваша природа Воды гармонирует с этим именем, черпая совершенство из глубоких колодцев мудрости. Ваша фундаментальная сила и выдающееся качество в сочетании создают лидерство, которое течет, как нетронутый горный источник, обеспечивая чистое, неиссякаемое руководство.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتستمد التميز من آبار الحكمة العميقة. تتحد قوتك الأساسية وجودتك المتميزة لخلق قيادة تتدفق مثل نبع جبلي نقي، وتوفر إرشادات نقية لا تنضب.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो ज्ञान के गहरे कुओं से उत्कृष्टता प्राप्त करती है। आपकी मौलिक शक्ति और उत्कृष्ट गुणवत्ता मिलकर एक ऐसा नेतृत्व बनाती है जो एक प्राचीन पहाड़ी झरने की तरह बहता है, जो शुद्ध, अटूट मार्गदर्शन प्रदान करता है।'
    }
  },
  {
    id: '윤서_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, flowing with prosperous kindness through auspicious channels. Your nurturing abundance and blessed fortune combine to create a generosity that moves like a gentle rain, bringing both growth and good omens to all it touches.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 상서로운 통로를 통해 번영하는 친절함을 흘려보냅니다. 당신의 자양분을 주는 풍요와 축복받은 행운이 결합하여, 닿는 모든 것에 성장과 좋은 징조를 함께 가져다주는 부드러운 비처럼 움직이는 너그러움을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、縁起の良いチャネルを通して繁栄した優しさで流れます。あなたの育む豊かさと祝福された幸運が組み合わさって、穏やかな雨のように動く寛大さを生み出し、それが触れるすべてに成長と吉兆の両方をもたらします。',
      zh: '你的水属性与这个名字相协调，通过吉祥的渠道流淌着繁荣的善意。你滋养的富足和幸福的财富相结合，创造出一种像温柔的雨一样移动的慷慨，为你所触及的一切带来成长和好兆头。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une bonté prospère par des canaux auspicieux. Votre abondance nourricière et votre fortune bénie se combinent pour créer une générosité qui se déplace comme une douce pluie, apportant à la fois croissance et bons présages à tout ce qu\'elle touche.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit wohlhabender Freundlichkeit durch glückverheißende Kanäle. Ihre nährende Fülle und Ihr gesegnetes Glück vereinen sich zu einer Großzügigkeit, die sich wie ein sanfter Regen bewegt und allem, was sie berührt, sowohl Wachstum als auch gute Omen bringt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una bondad próspera a través de canales auspiciosos. Tu abundancia nutritiva y tu bendita fortuna se combinan para crear una generosidad que se mueve como una lluvia suave, trayendo tanto crecimiento como buenos presagios a todo lo que toca.',
      ru: 'Ваша природа Воды гармонирует с этим именем, текущим с процветающей добротой по благоприятным каналам. Ваше питательное изобилие и благословенная удача в сочетании создают щедрость, которая движется, как нежный дождь, принося рост и добрые предзнаменования всему, к чему прикасается.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتتدفق بلطف مزدهر عبر قنوات ميمونة. يتحد وفرة رعايتك وثروتك المباركة لخلق كرم يتحرك مثل المطر اللطيف، ويجلب النمو والبشائر الطيبة لكل ما يلمسه.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो शुभ चैनलों के माध्यम से समृद्ध दया के साथ बहती है। आपकी पोषण करने वाली प्रचुरता और धन्य भाग्य मिलकर एक ऐसी उदारता पैदा करते हैं जो एक कोमल बारिश की तरह चलती है, जो विकास और अच्छे शगुन दोनों को उन सभी के लिए लाती है जिन्हें यह छूती है।'
    }
  },
  {
    id: '은영_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, polishing silver prosperity into radiant success. Your precious metal foundation and flourishing achievement combine to create a wealth that gleams like moonlight on water, bringing both material and spiritual abundance.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 은빛 번영을 찬란한 성공으로 닦아냅니다. 당신의 귀금속 기반과 무성한 성취가 결합하여, 물 위에 비친 달빛처럼 빛나며 물질적, 정신적 풍요를 모두 가져다주는 부를 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、銀の繁栄を輝かしい成功に磨き上げます。あなたの貴金属の基盤と繁栄する業績が組み合わさって、水面の月光のように輝く富を生み出し、物質的および精神的な豊かさの両方をもたらします。',
      zh: '你的金属性与这个名字相协调，将银色的繁荣打磨成灿烂的成功。你珍贵的金属基础和蓬勃的成就相结合，创造出一种像水上月光一样闪闪发光的财富，带来物质和精神上的富足。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant la prospérité de l\'argent en un succès radieux. Votre fondation en métal précieux et votre accomplissement florissant se combinent pour créer une richesse qui brille comme le clair de l\'eau, apportant à la fois l\'abondance matérielle et spirituelle.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert silbernen Wohlstand zu strahlendem Erfolg. Ihre Edelmetallbasis und Ihre blühende Leistung vereinen sich zu einem Reichtum, der wie Mondlicht auf dem Wasser glänzt und sowohl materiellen als auch spirituellen Überfluss bringt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo la prosperidad de la plata en un éxito radiante. Tu base de metales preciosos y tus logros florecientes se combinan para crear una riqueza que brilla como la luz de la luna sobre el agua, trayendo abundancia tanto material como espiritual.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая серебряное процветание в сияющий успех. Ваша основа из драгоценных металлов и процветающие достижения в сочетании создают богатство, которое сияет, как лунный свет на воде, принося как материальное, так и духовное изобилие.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصقل ازدهار الفضة إلى نجاح مشع. يتحد أساسك من المعدن الثمين وإنجازك المزدهر لخلق ثروة تلمع مثل ضوء القمر على الماء، وتجلب الوفرة المادية والروحية على حد سواء.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो चांदी की समृद्धि को उज्ज्वल सफलता में चमकाती है। आपकी कीमती धातु की नींव और फलती-फूलती उपलब्धि मिलकर एक ऐसा धन बनाती है जो पानी पर चांदनी की तरह चमकता है, जो भौतिक और आध्यात्मिक दोनों तरह की प्रचुरता लाता है।'
    }
  },
  {
    id: '은우_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling kindness into excellent character. Your gracious spirit and outstanding virtue combine to create a compassion that flows like a healing spring, offering comfort and inspiration to all who need renewal.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 친절함을 탁월한 품성으로 이끌어냅니다. 당신의 은혜로운 정신과 뛰어난 덕성이 결합되어, 치유의 샘물처럼 흘러 새로움을 필요로 하는 모든 이에게 위안과 영감을 주는 연민을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、優しさを優れた人格に導きます。あなたの優雅な精神と卓越した美徳が組み合わさって、癒しの泉のように流れる思いやりを生み出し、更新を必要とするすべての人に慰めとインスピレーションを提供します。',
      zh: '你的水属性与这个名字相协调，将善良引导到卓越的品格中。你仁慈的精神和卓越的美德相结合，创造出一种像疗愈之泉一样流动的同情心，为所有需要更新的人提供安慰和灵感。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant la gentillesse en un excellent caractère. Votre esprit gracieux et votre vertu exceptionnelle se combinent pour créer une compassion qui coule comme une source de guérison, offrant réconfort et inspiration à tous ceux qui ont besoin de renouveau.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert Freundlichkeit in einen ausgezeichneten Charakter. Ihr anmutiger Geist und Ihre herausragende Tugend vereinen sich zu einem Mitgefühl, das wie eine heilende Quelle fließt und allen, die Erneuerung brauchen, Trost und Inspiration bietet.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando la bondad en un carácter excelente. Tu espíritu amable y tu virtud sobresaliente se combinan para crear una compasión que fluye como un manantial curativo, ofreciendo consuelo e inspiración a todos los que necesitan renovación.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя доброту в превосходный характер. Ваш милостивый дух и выдающаяся добродетель в сочетании создают сострадание, которое течет, как исцеляющий источник, предлагая утешение и вдохновение всем, кто нуждается в обновлении.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه اللطف إلى شخصية ممتازة. تتحد روحك الكريمة وفضيلتك المتميزة لخلق تعاطف يتدفق مثل نبع شفاء، ويقدم الراحة والإلهام لجميع الذين يحتاجون إلى التجديد.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो दया को उत्कृष्ट चरित्र में प्रसारित करती है। आपकी कृपालु आत्मा और उत्कृष्ट गुण मिलकर एक ऐसी करुणा पैदा करते हैं जो एक उपचार झरने की तरह बहती है, जो उन सभी को आराम और प्रेरणा प्रदान करती है जिन्हें नवीनीकरण की आवश्यकता है।'
    }
  },
  {
    id: '정민_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, forging a righteous purpose with swift action. Your moral clarity and agile thinking combine to create an integrity that cuts through confusion like a sharp blade, always choosing the path of justice with decisive speed.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 목적을 신속한 행동으로 벼려냅니다. 당신의 도덕적 명료함과 민첩한 사고가 결합하여, 날카로운 칼날처럼 혼돈을 가르고 항상 결단력 있는 속도로 정의의 길을 선택하는 진실성을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、迅速な行動で義の目的を築きます。あなたの道徳的な明快さと機敏な思考が組み合わさって、鋭い刃のように混乱を切り裂く誠実さを生み出し、常に決定的な速さで正義の道を選びます。',
      zh: '你的金属性与这个名字相协调，以迅速的行动锻造一个正义的目标。你清晰的道德观和敏捷的思维相结合，创造出一种像锋利的刀片一样能够消除混乱的正直，总是以果断的速度选择正义的道路。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant un but juste avec une action rapide. Votre clarté morale et votre pensée agile se combinent pour créer une intégrité qui tranche la confusion comme une lame tranchante, choisissant toujours le chemin de la justice avec une vitesse décisive.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet mit schnellem Handeln einen rechtschaffenen Zweck. Ihre moralische Klarheit und Ihr agiles Denken vereinen sich zu einer Integrität, die Verwirrung wie eine scharfe Klinge durchschneidet und immer den Weg der Gerechtigkeit mit entscheidender Geschwindigkeit wählt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, forjando un propósito justo con una acción rápida. Tu claridad moral y tu pensamiento ágil se combinan para crear una integridad que atraviesa la confusión como una cuchilla afilada, eligiendo siempre el camino de la justicia con una velocidad decisiva.',
      ru: 'Ваша природа Металла гармонирует с этим именем, выковывая праведную цель быстрым действием. Ваша моральная ясность и гибкое мышление в сочетании создают целостность, которая прорезает путаницу, как острое лезвие, всегда выбирая путь справедливости с решительной скоростью.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصوغ هدفًا صالحًا بعمل سريع. يتحد وضوحك الأخلاقي وتفكيرك الرشيق لخلق نزاهة تخترق الارتباك مثل نصل حاد، وتختار دائمًا طريق العدالة بسرعة حاسمة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो तेज कार्रवाई के साथ एक धर्मी उद्देश्य बनाती है। आपकी नैतिक स्पष्टता और फुर्तीली सोच मिलकर एक ऐसी अखंडता बनाती है जो एक तेज ब्लेड की तरह भ्रम को काटती है, हमेशा निर्णायक गति के साथ न्याय का मार्ग चुनती है।'
    }
  },
  {
    id: '정석_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, establishing a righteous foundation as solid as stone. Your moral strength and unshakeable principles combine to create a character that stands like a mountain peak, providing reliable guidance through unwavering virtue.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 돌처럼 단단한 정의로운 기반을 세웁니다. 당신의 도덕적 힘과 흔들리지 않는 원칙이 결합하여, 산봉우리처럼 우뚝 서서 흔들림 없는 덕으로 신뢰할 수 있는 지침을 제공하는 품성을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、石のように固い義の基盤を確立します。あなたの道徳的な強さと揺るぎない原則が組み合わさって、山の頂のように立つ性格を生み出し、揺るぎない美徳を通して信頼できる導きを提供します。',
      zh: '你的金属性与这个名字相协调，建立了像石头一样坚固的正义基础。你的道德力量和不可动摇的原则相结合，创造出一种像山峰一样矗立的品格，通过坚定不移的美德提供可靠的指导。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, établissant une fondation juste aussi solide que la pierre. Votre force morale et vos principes inébranlables se combinent pour créer un caractère qui se dresse comme un sommet de montagne, offrant des conseils fiables grâce à une vertu inébranlable.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schafft ein rechtschaffenes Fundament, das so fest wie Stein ist. Ihre moralische Stärke und Ihre unerschütterlichen Prinzipien vereinen sich zu einem Charakter, der wie ein Berggipfel steht und durch unerschütterliche Tugend zuverlässige Führung bietet.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, estableciendo una base justa tan sólida como la piedra. Tu fuerza moral y tus principios inquebrantables se combinan para crear un carácter que se yergue como la cima de una montaña, proporcionando una guía confiable a través de una virtud inquebrantable.',
      ru: 'Ваша природа Металла гармонирует с этим именем, создавая праведную основу, твердую, как камень. Ваша моральная сила и непоколебимые принципы в сочетании создают характер, который стоит, как горная вершина, обеспечивая надежное руководство благодаря непоколебимой добродетели.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتؤسس أساسًا صالحًا صلبًا كالحجر. تتحد قوتك الأخلاقية ومبادئك التي لا تتزعزع لخلق شخصية تقف مثل قمة جبل، وتوفر إرشادات موثوقة من خلال فضيلة لا تتزعزع.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो पत्थर की तरह ठोस एक धर्मी नींव स्थापित करती है। आपकी नैतिक शक्ति और अटूट सिद्धांत मिलकर एक ऐसा चरित्र बनाते हैं जो एक पर्वत शिखर की तरह खड़ा होता है, जो अटूट पुण्य के माध्यम से विश्वसनीय मार्गदर्शन प्रदान करता है।'
    }
  },
  {
    id: '정수_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, distilling righteous excellence from pure intentions. Your moral clarity and outstanding achievement combine to create a wisdom that flows like sacred waters, purifying everything it touches with justice and grace.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 순수한 의도에서 의로운 탁월함을 증류해냅니다. 당신의 도덕적 명료함과 뛰어난 성취가 결합하여, 신성한 물처럼 흘러 닿는 모든 것을 정의와 은혜로 정화하는 지혜를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、純粋な意図から義の卓越性を蒸留します。あなたの道徳的な明快さと卓越した業績が組み合わさって、聖なる水のように流れる知恵を生み出し、それが触れるすべてのものを正義と恵みで浄化します。',
      zh: '你的水属性与这个名字相协调，从纯粹的意图中提炼出正义的卓越。你清晰的道德观和杰出的成就相结合，创造出一种像圣水一样流动的智慧，用正义和恩典净化它所触及的一切。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, distillant une excellence juste à partir d\'intentions pures. Votre clarté morale et vos réalisations exceptionnelles se combinent pour créer une sagesse qui coule comme des eaux sacrées, purifiant tout ce qu\'elle touche avec justice et grâce.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und destilliert rechtschaffene Exzellenz aus reinen Absichten. Ihre moralische Klarheit und Ihre herausragende Leistung vereinen sich zu einer Weisheit, die wie heiliges Wasser fließt und alles, was sie berührt, mit Gerechtigkeit und Anmut reinigt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, destilando una excelencia justa a partir de intenciones puras. Tu claridad moral y tus logros sobresalientes se combinan para crear una sabiduría que fluye como aguas sagradas, purificando todo lo que toca con justicia y gracia.',
      ru: 'Ваша природа Воды гармонирует с этим именем, дистиллируя праведное совершенство из чистых намерений. Ваша моральная ясность и выдающиеся достижения в сочетании создают мудрость, которая течет, как священные воды, очищая все, к чему прикасается, справедливостью и благодатью.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتقطير التميز الصالح من النوايا النقية. يتحد وضوحك الأخلاقي وإنجازك المتميز لخلق حكمة تتدفق مثل المياه المقدسة، وتطهر كل ما تلمسه بالعدل والنعمة.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो शुद्ध इरादों से धर्मी उत्कृष्टता को निकालती है। आपकी नैतिक स्पष्टता और उत्कृष्ट उपलब्धि मिलकर एक ऐसी बुद्धि का निर्माण करती है जो पवित्र जल की तरह बहती है, जो न्याय और कृपा से छूने वाली हर चीज को शुद्ध करती है।'
    }
  },
  {
    id: '정아_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, refining a righteous character into beautiful virtue. Your moral strength and elegant grace combine to create a nobility that shines like polished silver, inspiring others through your dignified and principled example.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 품성을 아름다운 덕으로 정제합니다. 당신의 도덕적 힘과 우아한 기품이 결합하여, 잘 닦인 은처럼 빛나며 당신의 품위 있고 원칙적인 모범을 통해 다른 이들에게 영감을 주는 고귀함을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、義の性格を美しい美徳に磨き上げます。あなたの道徳的な強さとエレガントな恵みが組み合わさって、磨かれた銀のように輝く高貴さを生み出し、あなたの威厳のある原則的な模範を通して他の人を鼓舞します。',
      zh: '你的金属性与这个名字相协调，将一个正义的品格提炼成美丽的德行。你的道德力量和优雅的风度相结合，创造出一种像抛光银一样闪耀的贵族气质，通过你庄重和有原则的榜样来激励他人。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, affinant un caractère juste en une belle vertu. Votre force morale et votre grâce élégante se combinent pour créer une noblesse qui brille comme de l\'argent poli, inspirant les autres par votre exemple digne et fondé sur des principes.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und verfeinert einen rechtschaffenen Charakter zu schöner Tugend. Ihre moralische Stärke und Ihre elegante Anmut vereinen sich zu einem Adel, der wie poliertes Silber glänzt und andere durch Ihr würdevolles und prinzipientreues Beispiel inspiriert.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, refinando un carácter justo en una hermosa virtud. Tu fuerza moral y tu elegante gracia se combinan para crear una nobleza que brilla como la plata pulida, inspirando a otros a través de tu ejemplo digno y de principios.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая праведный характер в прекрасную добродетель. Ваша моральная сила и элегантная грация в сочетании создают благородство, которое сияет, как полированное серебро, вдохновляя других своим достойным и принципиальным примером.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصقل شخصية صالحة إلى فضيلة جميلة. تتحد قوتك الأخلاقية ونعمتك الأنيقة لخلق نبل يضيء مثل الفضة المصقولة، ويلهم الآخرين من خلال مثالك الكريم والمبدئي.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक धर्मी चरित्र को सुंदर गुण में परिष्कृत करती है। आपकी नैतिक शक्ति और सुरुचिपूर्ण कृपा मिलकर एक ऐसी कुलीनता बनाती है जो पॉलिश की हुई चांदी की तरह चमकती है, जो आपके गरिमापूर्ण और सैद्धांतिक उदाहरण के माध्यम से दूसरों को प्रेरित करती है।'
    }
  },
  {
    id: '정은_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, tempering a righteous heart with genuine kindness. Your moral conviction and compassionate grace combine to create a character that gleams like a precious metal, demonstrating that true strength lies in merciful justice.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 마음을 진정한 친절로 단련합니다. 당신의 도덕적 신념과 자비로운 은혜가 결합하여, 귀금속처럼 빛나는 품성을 창조하며, 진정한 힘은 자비로운 정의에 있음을 보여줍니다.',
      ja: 'あなたの金の性質は、この名前と調和し、義の心を本物の優しさで和らげます。あなたの道徳的な信念と思いやりのある恵みが組み合わさって、貴金属のように輝く性格を生み出し、真の強さは慈悲深い正義にあることを示します。',
      zh: '你的金属性与这个名字相协调，用真正的善良来调和一颗正义的心。你的道德信念和富有同情心的优雅相结合，创造出一种像贵金属一样闪闪发光的品格，表明真正的力量在于仁慈的正义。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant un cœur juste avec une véritable bonté. Votre conviction morale et votre grâce compatissante se combinent pour créer un caractère qui brille comme un métal précieux, démontrant que la vraie force réside dans une justice miséricordieuse.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert ein rechtschaffenes Herz mit echter Freundlichkeit. Ihre moralische Überzeugung und Ihre mitfühlende Gnade vereinen sich zu einem Charakter, der wie ein Edelmetall glänzt und zeigt, dass wahre Stärke in barmherziger Gerechtigkeit liegt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, templando un corazón justo con una bondad genuina. Tu convicción moral y tu gracia compasiva se combinan para crear un carácter que brilla como un metal precioso, demostrando que la verdadera fuerza reside en una justicia misericordiosa.',
      ru: 'Ваша природа Металла гармонирует с этим именем, смягчая праведное сердце подлинной добротой. Ваше моральное убеждение и сострадательная благодать в сочетании создают характер, который сияет, как драгоценный металл, демонстрируя, что истинная сила заключается в милосердном правосудии.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتخفف من حدة القلب الصالح بلطف حقيقي. يتحد اقتناعك الأخلاقي ونعمتك الرحيمة لخلق شخصية تلمع مثل معدن ثمين، مما يدل على أن القوة الحقيقية تكمن في العدالة الرحيمة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक धर्मी हृदय को सच्ची दया से तड़का लगाती है। आपका नैतिक विश्वास और दयालु कृपा मिलकर एक ऐसा चरित्र बनाते हैं जो एक कीमती धातु की तरह चमकता है, यह दर्शाता है कि सच्ची ताकत दयालु न्याय में निहित है।'
    }
  },
  {
    id: '정현_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, forging righteous wisdom into virtuous strength. Your moral clarity and noble character combine to create a leadership that cuts through ambiguity like a perfectly balanced sword, always choosing the path of virtue.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 의로운 지혜를 고결한 힘으로 벼려냅니다. 당신의 도덕적 명료함과 고귀한 품성이 결합하여, 완벽하게 균형 잡힌 검처럼 모호함을 베어내고 항상 덕의 길을 선택하는 리더십을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、義の知恵を高潔な強さに鍛え上げます。あなたの道徳的な明快さと高貴な人格が組み合わさって、完全にバランスの取れた剣のように曖昧さを切り裂き、常に美徳の道を選ぶリーダーシップを生み出します。',
      zh: '你的金属性与这个名字相协调，将正义的智慧锻造成高尚的力量。你清晰的道德观和高尚的品格相结合，创造出一种像一把完美平衡的剑一样能够消除模棱两可的领导力，总是选择美德的道路。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une sagesse juste en une force vertueuse. Votre clarté morale et votre caractère noble se combinent pour créer un leadership qui tranche l\'ambiguïté comme une épée parfaitement équilibrée, choisissant toujours le chemin de la vertu.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet rechtschaffene Weisheit zu tugendhafter Stärke. Ihre moralische Klarheit und Ihr edler Charakter vereinen sich zu einer Führung, die Mehrdeutigkeit wie ein perfekt ausbalanciertes Schwert durchdringt und immer den Weg der Tugend wählt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una sabiduría justa en una fuerza virtuosa. Tu claridad moral y tu carácter noble se combinan para crear un liderazgo que atraviesa la ambigüedad como una espada perfectamente equilibrada, eligiendo siempre el camino de la virtud.',
      ru: 'Ваша природа Металла гармонирует с этим именем, выковывая праведную мудрость в добродетельную силу. Ваша моральная ясность и благородный характер в сочетании создают лидерство, которое прорезает двусмысленность, как идеально сбалансированный меч, всегда выбирая путь добродетели.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصوغ الحكمة الصالحة إلى قوة فاضلة. يتحد وضوحك الأخلاقي وشخصيتك النبيلة لخلق قيادة تخترق الغموض مثل سيف متوازن تمامًا، وتختار دائمًا طريق الفضيلة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो धर्मी ज्ञान को गुणी शक्ति में बदल देती है। आपकी नैतिक स्पष्टता और महान चरित्र मिलकर एक ऐसा नेतृत्व बनाते हैं जो एक पूरी तरह से संतुलित तलवार की तरह अस्पष्टता को काटता है, हमेशा पुण्य का मार्ग चुनता है।'
    }
  },
  {
    id: '정호_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, establishing righteous greatness through unwavering integrity. Your moral strength and magnificent purpose combine to create a leadership that stands like a beacon tower, guiding others toward justice with brilliant clarity.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 흔들림 없는 진실성을 통해 의로운 위대함을 세웁니다. 당신의 도덕적 힘과 장엄한 목적이 결합하여, 등대처럼 우뚝 서서 눈부신 명료함으로 다른 사람들을 정의로 이끄는 리더십을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、揺るぎない誠実さを通して義の偉大さを確立します。あなたの道徳的な強さと壮大な目的が組み合わさって、ビーコンタワーのように立つリーダーシップを生み出し、輝かしい明快さで他の人を正義へと導きます。',
      zh: '你的金属性与这个名字相协调，通过坚定不移的正直建立正义的伟大。你的道德力量和宏伟的目标相结合，创造出一种像灯塔一样矗立的领导力，以灿烂的清晰度引导他人走向正义。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, établissant une juste grandeur par une intégrité inébranlable. Votre force morale et votre magnifique objectif se combinent pour créer un leadership qui se dresse comme une tour de phare, guidant les autres vers la justice avec une clarté brillante.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und begründet rechtschaffene Größe durch unerschütterliche Integrität. Ihre moralische Stärke und Ihr großartiges Ziel vereinen sich zu einer Führung, die wie ein Leuchtturm dasteht und andere mit brillanter Klarheit zur Gerechtigkeit führt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, estableciendo una grandeza justa a través de una integridad inquebrantable. Tu fuerza moral y tu magnífico propósito se combinan para crear un liderazgo que se yergue como una torre de faro, guiando a otros hacia la justicia con una claridad brillante.',
      ru: 'Ваша природа Металла гармонирует с этим именем, устанавливая праведное величие через непоколебимую целостность. Ваша моральная сила и великолепная цель в сочетании создают лидерство, которое стоит, как маяк, направляя других к справедливости с блестящей ясностью.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتؤسس عظمة صالحة من خلال النزاهة التي لا تتزعزع. تتحد قوتك الأخلاقية وهدفك الرائع لخلق قيادة تقف مثل برج منارة، وتوجه الآخرين نحو العدالة بوضوح رائع.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो अटूट अखंडता के माध्यम से धर्मी महानता स्थापित करती है। आपकी नैतिक शक्ति और शानदार उद्देश्य मिलकर एक ऐसा नेतृत्व बनाते हैं जो एक प्रकाशस्तंभ की तरह खड़ा होता है, जो दूसरों को शानदार स्पष्टता के साथ न्याय की ओर मार्गदर्शन करता है।'
    }
  },
  {
    id: '준수_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling talented excellence through a graceful, flowing energy. Your gifted ability and outstanding achievement combine to create a mastery that moves like pristine waters, achieving remarkable results through natural intelligence.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 우아하고 흐르는 에너지를 통해 재능 있는 탁월함을 이끌어냅니다. 당신의 타고난 능력과 뛰어난 성취가 결합하여, 맑고 깨끗한 물처럼 움직여 타고난 지성으로 놀라운 결과를 성취하는 경지를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、優雅で流れるようなエネルギーを通して才能ある卓越性を導きます。あなたの才能ある能力と卓越した業績が組み合わさって、自然の知性を通して驚くべき結果を達成する、手付かずの水のように動く熟練を生み出します。',
      zh: '你的水属性与这个名字相协调，通过优雅、流动的能量引导才华横溢的卓越。你天赋异禀的能力和杰出的成就相结合，创造出一种像原始水域一样移动的精通，通过天生的智慧取得非凡的成果。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une excellence talentueuse grâce à une énergie gracieuse et fluide. Votre capacité douée et vos réalisations exceptionnelles se combinent pour créer une maîtrise qui se déplace comme des eaux pures, obtenant des résultats remarquables grâce à l\'intelligence naturelle.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert talentierte Exzellenz durch eine anmutige, fließende Energie. Ihre begabte Fähigkeit und Ihre herausragende Leistung vereinen sich zu einer Meisterschaft, die sich wie unberührtes Wasser bewegt und durch natürliche Intelligenz bemerkenswerte Ergebnisse erzielt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una excelencia talentosa a través de una energía elegante y fluida. Tu habilidad superdotada y tus logros sobresalientes se combinan para crear una maestría que se mueve como aguas cristalinas, logrando resultados notables a través de la inteligencia natural.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя талантливое совершенство через изящную, текучую энергию. Ваши одаренные способности и выдающиеся достижения в сочетании создают мастерство, которое движется, как нетронутые воды, достигая замечательных результатов благодаря природному интеллекту.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه التميز الموهوب من خلال طاقة رشيقة ومتدفقة. تتحد قدرتك الموهوبة وإنجازك المتميز لخلق إتقان يتحرك مثل المياه النقية، وتحقيق نتائج رائعة من خلال الذكاء الطبيعي.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक सुंदर, बहने वाली ऊर्जा के माध्यम से प्रतिभाशाली उत्कृष्टता को प्रसारित करती है। आपकी प्रतिभाशाली क्षमता और उत्कृष्ट उपलब्धि मिलकर एक ऐसी महारत बनाती है जो प्राचीन जल की तरह चलती है, जो प्राकृतिक बुद्धि के माध्यम से उल्लेखनीय परिणाम प्राप्त करती है।'
    }
  },
  {
    id: '준철_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, forging talented strength into iron-clad determination. Your gifted spirit and unbreakable resolve combine to create a character that stands like a steel column, supporting others while pursuing excellence with unwavering focus.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 재능 있는 힘을 철갑 같은 결단력으로 벼려냅니다. 당신의 타고난 정신과 깨지지 않는 결의가 결합하여, 강철 기둥처럼 굳건히 서서 흔들림 없는 집중력으로 탁월함을 추구하며 다른 사람들을 지지하는 품성을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、才能ある強さを鉄壁の決意に鍛え上げます。あなたの才能ある精神と壊れない決意が組み合わさって、揺るぎない集中力で卓越性を追求しながら他の人を支える、鋼の柱のように立つ性格を生み出します。',
      zh: '你的金属性与这个名字相协调，将才华横溢的力量锻造成钢铁般的决心。你天赋异禀的精神和坚不可摧的决心相结合，创造出一种像钢柱一样矗立的品格，在以坚定不移的专注追求卓越的同时，支持他人。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une force talentueuse en une détermination à toute épreuve. Votre esprit doué et votre résolution inébranlable se combinent pour créer un caractère qui se dresse comme une colonne d\'acier, soutenant les autres tout en poursuivant l\'excellence avec une concentration inébranlable.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet talentierte Stärke zu eiserner Entschlossenheit. Ihr begabter Geist und Ihre unzerbrechliche Entschlossenheit vereinen sich zu einem Charakter, der wie eine Stahlsäule dasteht und andere unterstützt, während er mit unerschütterlichem Fokus nach Exzellenz strebt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una fuerza talentosa en una determinación férrea. Tu espíritu dotado y tu resolución inquebrantable se combinan para crear un carácter que se yergue como una columna de acero, apoyando a otros mientras persigues la excelencia con un enfoque inquebrantable.',
      ru: 'Ваша природа Металла гармонирует с этим именем, выковывая талантливую силу в железную решимость. Ваш одаренный дух и несокрушимая решимость в сочетании создают характер, который стоит, как стальная колонна, поддерживая других и стремясь к совершенству с непоколебимой сосредоточенностью.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصوغ قوة موهوبة إلى تصميم حديدي. تتحد روحك الموهوبة وعزمك الذي لا يتزعزع لخلق شخصية تقف مثل عمود فولاذي، وتدعم الآخرين أثناء السعي إلى التميز بتركيز لا يتزعزع.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो प्रतिभाशाली ताकत को लोहे के दृढ़ संकल्प में बदल देती है। आपकी प्रतिभाशाली भावना और अटूट संकल्प मिलकर एक ऐसा चरित्र बनाते हैं जो एक स्टील के स्तंभ की तरह खड़ा होता है, जो अटूट फोकस के साथ उत्कृष्टता का पीछा करते हुए दूसरों का समर्थन करता है।'
    }
  },
  {
    id: '준혁_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, flowing with talented innovation and adaptive change. Your gifted creativity and revolutionary thinking combine to create breakthroughs that surge like powerful currents, transforming challenges into opportunities for growth.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 재능 있는 혁신과 적격 있는 변화로 흘러갑니다. 당신의 타고난 창의성과 혁명적인 사고가 결합하여, 강력한 물결처럼 밀려와 도전을 성장의 기회로 바꾸는 돌파구를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、才能ある革新と適応性のある変化とともに流れます。あなたの才能ある創造性と革新的な思考が組み合わさって、強力な流れのように押し寄せるブレークスルーを生み出し、挑戦を成長の機会に変えます。',
      zh: '你的水属性与这个名字相协调，充满了才华横溢的创新和适应性强的变化。你天赋异禀的创造力和革命性的思维相结合，创造出像强大潮流一样汹涌的突破，将挑战转化为成长的机遇。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une innovation talentueuse et un changement adaptatif. Votre créativité douée et votre pensée révolutionnaire se combinent pour créer des percées qui déferlent comme de puissants courants, transformant les défis en opportunités de croissance.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit talentierter Innovation und adaptivem Wandel. Ihre begabte Kreativität und Ihr revolutionäres Denken vereinen sich zu Durchbrüchen, die wie starke Strömungen ansteigen und Herausforderungen in Wachstumschancen verwandeln.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una innovación talentosa y un cambio adaptativo. Tu creatividad superdotada y tu pensamiento revolucionario se combinan para crear avances que surgen como corrientes poderosas, transformando los desafíos en oportunidades de crecimiento.',
      ru: 'Ваша природа Воды гармонирует с этим именем, текущим с талантливыми инновациями и адаптивными изменениями. Ваше одаренное творчество и революционное мышление в сочетании создают прорывы, которые нарастают, как мощные потоки, превращая проблемы в возможности для роста.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتتدفق مع الابتكار الموهوب والتغيير التكيفي. يتحد إبداعك الموهوب وتفكيرك الثوري لخلق اختراقات تتدفق مثل التيارات القوية، وتحول التحديات إلى فرص للنمو.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो प्रतिभाशाली नवाचार और अनुकूली परिवर्तन के साथ बहती है। आपकी प्रतिभाशाली रचनात्मकता और क्रांतिकारी सोच मिलकर ऐसे सफलताएं बनाती हैं जो शक्तिशाली धाराओं की तरह बढ़ती हैं, जो चुनौतियों को विकास के अवसरों में बदल देती हैं।'
    }
  },
  {
    id: '준호_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling talented greatness through a magnificent, powerful flow. Your gifted ability and extraordinary purpose combine to create achievements that move like a majestic river, inspiring others through your noble pursuit of excellence.',
      ko: '당신은 물의 속성과 완벽하게 조화를 이루며, 웅장하고 강력한 흐름을 통해 재능 있는 위대함을 전달합니다. 당신의 타고난 능력과 비범한 목적이 결합하여, 장엄한 강처럼 움직이는 성취를 창조하며, 탁월함을 향한 당신의 고귀한 추구를 통해 다른 사람들에게 영감을 줍니다.',
      ja: 'あなたの水の性質は、この名前と調和し、壮大で力強い流れを通して才能ある偉大さを導きます。あなたの才能ある能力と並外れた目的が組み合わさって、雄大な川のように動く成果を生み出し、卓越性の高貴な追求を通して他の人を鼓舞します。',
      zh: '你的水属性与这个名字相协调，通过宏伟、强大的流动引导才华横溢的伟大。你天赋异禀的能力和非凡的目标相结合，创造出像一条雄伟的河流一样移动的成就，通过你对卓越的崇高追求来激励他人。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une grandeur talentueuse à travers un flux magnifique et puissant. Votre capacité douée et votre objectif extraordinaire se combinent pour créer des réalisations qui se déplacent comme une rivière majestueuse, inspirant les autres par votre noble quête de l\'excellence.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert talentierte Größe durch einen großartigen, kraftvollen Fluss. Ihre begabte Fähigkeit und Ihr außergewöhnliches Ziel vereinen sich zu Errungenschaften, die sich wie ein majestätischer Fluss bewegen und andere durch Ihr edles Streben nach Exzellenz inspirieren.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una grandeza talentosa a través de un flujo magnífico y poderoso. Tu habilidad superdotada y tu propósito extraordinario se combinan para crear logros que se mueven como un río majestuoso, inspirando a otros a través de tu noble búsqueda de la excelencia.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя талантливое величие через великолепный, мощный поток. Ваши одаренные способности и необычайная цель в сочетании создают достижения, которые движутся, как величественная река, вдохновляя других вашим благородным стремлением к совершенству.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه العظمة الموهوبة من خلال تدفق رائع وقوي. تتحد قدرتك الموهوبة وهدفك غير العادي لخلق إنجازات تتحرك مثل نهر مهيب، وتلهم الآخرين من خلال سعيك النبيل للتميز.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक शानदार, शक्तिशाली प्रवाह के माध्यम से प्रतिभाशाली महानता को प्रसारित करती है। आपकी प्रतिभाशाली क्षमता और असाधारण उद्देश्य मिलकर ऐसी उपलब्धियाँ बनाते हैं जो एक राजसी नदी की तरह चलती हैं, जो उत्कृष्टता की आपकी महान खोज के माध्यम से दूसरों को प्रेरित करती हैं।'
    }
  },
  {
    id: '지영_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling wise prosperity through a flowing, generous intelligence. Your thoughtful wisdom and flourishing success combine to create an abundance that spreads like nourishing waters, enriching communities through intelligent generosity.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 흐르는 듯한 너그러운 지성을 통해 지혜로운 번영을 이끌어냅니다. 당신의 사려 깊은 지혜와 무성한 성공이 결합하여, 영양분을 공급하는 물처럼 퍼져나가 지적인 관대함으로 공동체를 풍요롭게 하는 풍요를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、流れるような、寛大な知性を通して賢明な繁栄を導きます。あなたの思慮深い知恵と繁栄する成功が組み合わさって、栄養を与える水のように広がる豊かさを生み出し、知的な寛大さでコミュニティを豊かにします。',
      zh: '你的水属性与这个名字相协调，通过流动的、慷慨的智慧引导智慧的繁荣。你深思熟虑的智慧和蓬勃的成功相结合，创造出一种像滋养的水域一样蔓延的富足，通过智慧的慷慨来丰富社区。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une sage prospérité grâce à une intelligence fluide et généreuse. Votre sagesse réfléchie et votre succès florissant se combinent pour créer une abondance qui se propage comme des eaux nourricières, enrichissant les communautés par une générosité intelligente.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert weisen Wohlstand durch eine fließende, großzügige Intelligenz. Ihre nachdenkliche Weisheit und Ihr blühender Erfolg vereinen sich zu einem Überfluss, der sich wie nährendes Wasser ausbreitet und Gemeinschaften durch intelligente Großzügigkeit bereichert.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una sabia prosperidad a través de una inteligencia fluida y generosa. Tu sabiduría reflexiva y tu éxito floreciente se combinan para crear una abundancia que se extiende como aguas nutritivas, enriqueciendo a las comunidades a través de una generosidad inteligente.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя мудрое процветание через текучий, щедрый интеллект. Ваша вдумчивая мудрость и процветающий успех в сочетании создают изобилие, которое распространяется, как питательные воды, обогащая сообщества благодаря разумной щедрости.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه الازدهار الحكيم من خلال ذكاء متدفق وسخي. تتحد حكمتك المدروسة ونجاحك المزدهر لخلق وفرة تنتشر مثل المياه المغذية، وتثري المجتمعات من خلال الكرم الذكي.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक बहती, उदार बुद्धि के माध्यम से बुद्धिमान समृद्धि को प्रसारित करती है। आपकी विचारशील बुद्धि और फलती-फूलती सफलता मिलकर एक ऐसी प्रचुरता बनाती है जो पौष्टिक जल की तरह फैलती है, जो बुद्धिमान उदारता के माध्यम से समुदायों को समृद्ध करती है।'
    }
  },
  {
    id: '진석_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, polishing a precious character into stone-solid virtue. Your treasured essence and unshakeable foundation combine to create an integrity that gleams like a gemstone set in bedrock, providing lasting value through principled strength.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 귀중한 품성을 돌처럼 단단한 덕으로 닦아냅니다. 당신의 소중한 본질과 흔들리지 않는 기반이 결합하여, 기반암에 박힌 보석처럼 빛나는 진실성을 창조하고, 원칙 있는 힘을 통해 지속적인 가치를 제공합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、貴重な人格を石のように固い美徳に磨き上げます。あなたの貴重な本質と揺るぎない基盤が組み合わさって、岩盤にセットされた宝石のように輝く誠実さを生み出し、原則に基づいた強さを通して永続的な価値を提供します。',
      zh: '你的金属性与这个名字相协调，将一个珍贵的品格打磨成坚如磐石的美德。你珍贵的本质和不可动摇的基础相结合，创造出一种像镶嵌在基岩中的宝石一样闪闪发光的正直，通过有原则的力量提供持久的价值。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant un caractère précieux en une vertu solide comme le roc. Votre essence précieuse et votre fondation inébranlable se combinent pour créer une intégrité qui brille comme une gemme sertie dans la roche mère, offrant une valeur durable grâce à une force de principe.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert einen kostbaren Charakter zu steinfester Tugend. Ihre geschätzte Essenz und Ihr unerschütterliches Fundament vereinen sich zu einer Integrität, die wie ein in Fels gefasster Edelstein glänzt und durch prinzipienfeste Stärke dauerhaften Wert bietet.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo un carácter precioso en una virtud sólida como una roca. Tu esencia atesorada y tu base inquebrantable se combinan para crear una integridad que brilla como una gema engastada en el lecho de roca, proporcionando un valor duradero a través de una fuerza de principios.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая драгоценный характер в каменную добродетель. Ваша драгоценная сущность и непоколебимая основа в сочетании создают целостность, которая сияет, как драгоценный камень в скале, обеспечивая прочную ценность благодаря принципиальной силе.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصقل شخصية ثمينة إلى فضيلة صلبة كالحجر. يتحد جوهرك الثمين وأساسك الذي لا يتزعزع لخلق نزاهة تلمع مثل حجر كريم مرصع في صخر الأساس، مما يوفر قيمة دائمة من خلال القوة المبدئية.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक कीमती चरित्र को पत्थर-ठोस गुण में चमकाती है। आपकी क़ीमती सार और अटूट नींव मिलकर एक ऐसी अखंडता बनाती है जो आधारशिला में स्थापित एक रत्न की तरह चमकती है, जो सैद्धांतिक ताकत के माध्यम से स्थायी मूल्य प्रदान करती है।'
    }
  },
  {
    id: '진수_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, distilling precious excellence from deep wisdom. Your treasured quality and outstanding achievement combine to create a mastery that flows like a rare mountain spring, offering pure, invaluable guidance to those who seek truth.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 깊은 지혜에서 귀중한 탁월함을 증류해냅니다. 당신의 소중한 자질과 뛰어난 성취가 결합하여, 희귀한 산골 샘물처럼 흘러 진리를 찾는 이들에게 순수하고 귀중한 지침을 제공하는 경지를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、深い知恵から貴重な卓越性を蒸留します。あなたの貴重な品質と卓越した業績が組み合わさって、真実を求める人々に純粋で貴重なガイダンスを提供する、珍しい山の泉のように流れる熟練を生み出します。',
      zh: '你的水属性与这个名字相协调，从深刻的智慧中提炼出宝贵的卓越。你珍贵的品质和杰出的成就相结合，创造出一种像稀有的山泉一样流动的精通，为那些寻求真理的人提供纯粹、无价的指导。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, distillant une excellence précieuse d\'une profonde sagesse. Votre qualité précieuse et vos réalisations exceptionnelles se combinent pour créer une maîtrise qui coule comme une source de montagne rare, offrant des conseils purs et inestimables à ceux qui cherchent la vérité.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und destilliert kostbare Exzellenz aus tiefer Weisheit. Ihre geschätzte Qualität und Ihre herausragende Leistung vereinen sich zu einer Meisterschaft, die wie eine seltene Bergquelle fließt und denjenigen, die die Wahrheit suchen, reine, unschätzbare Führung bietet.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, destilando una preciosa excelencia de una profunda sabiduría. Tu preciada cualidad y tus logros sobresalientes se combinan para crear una maestría que fluye como un raro manantial de montaña, ofreciendo una guía pura e invaluable a quienes buscan la verdad.',
      ru: 'Ваша природа Воды гармонирует с этим именем, дистиллируя драгоценное совершенство из глубокой мудрости. Ваше драгоценное качество и выдающиеся достижения в сочетании создают мастерство, которое течет, как редкий горный источник, предлагая чистое, бесценное руководство тем, кто ищет истину.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتقطير التميز الثمين من الحكمة العميقة. تتحد جودتك الثمينة وإنجازك المتميز لخلق إتقان يتدفق مثل نبع جبلي نادر، ويقدم إرشادات نقية لا تقدر بثمن لأولئك الذين يبحثون عن الحقيقة.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो गहरे ज्ञान से कीमती उत्कृष्टता को निकालती है। आपकी क़ीमती गुणवत्ता और उत्कृष्ट उपलब्धि मिलकर एक ऐसी महारत बनाती है जो एक दुर्लभ पहाड़ी झरने की तरह बहती है, जो सत्य की तलाश करने वालों को शुद्ध, अमूल्य मार्गदर्शन प्रदान करती है।'
    }
  },
  {
    id: '진영_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, cultivating precious prosperity through refined excellence. Your treasured value and flourishing growth combine to create a wealth that shines like polished jewels, demonstrating that true abundance comes from authentic quality.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 세련된 탁월함을 통해 귀중한 번영을 일구어냅니다. 당신의 소중한 가치와 무성한 성장이 결합하여, 잘 닦인 보석처럼 빛나는 부를 창조하며, 진정한 풍요는 진정한 품질에서 비롯됨을 보여줍니다.',
      ja: 'あなたの金の性質は、この名前と調和し、洗練された卓越性を通して貴重な繁栄を育みます。あなたの貴重な価値と繁栄する成長が組み合わさって、磨かれた宝石のように輝く富を生み出し、真の豊かさは本物の品質から生まれることを示します。',
      zh: '你的金属性与这个名字相协调，通过精致的卓越来培养宝贵的繁荣。你珍贵的价值和蓬勃的成长相结合，创造出一种像抛光珠宝一样闪耀的财富，表明真正的富足来自真实的品质。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, cultivant une prospérité précieuse grâce à une excellence raffinée. Votre valeur précieuse et votre croissance florissante se combinent pour créer une richesse qui brille comme des bijoux polis, démontrant que la véritable abondance vient d\'une qualité authentique.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und kultiviert kostbaren Wohlstand durch verfeinerte Exzellenz. Ihr geschätzter Wert und Ihr blühendes Wachstum vereinen sich zu einem Reichtum, der wie polierte Juwelen glänzt und zeigt, dass wahrer Überfluss von authentischer Qualität herrührt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, cultivando una preciosa prosperidad a través de una refinada excelencia. Tu valor atesorado y tu crecimiento floreciente se combinan para crear una riqueza que brilla como joyas pulidas, demostrando que la verdadera abundancia proviene de la calidad auténtica.',
      ru: 'Ваша природа Металла гармонирует с этим именем, взращивая драгоценное процветание через утонченное совершенство. Ваша драгоценная ценность и процветающий рост в сочетании создают богатство, которое сияет, как полированные драгоценности, демонстрируя, что истинное изобилие происходит от подлинного качества.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتزرع ازدهارًا ثمينًا من خلال التميز المصقول. تتحد قيمتك الثمينة ونموك المزدهر لخلق ثروة تتألق مثل الجواهر المصقولة، مما يدل على أن الوفرة الحقيقية تأتي من الجودة الأصيلة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो परिष्कृत उत्कृष्टता के माध्यम से कीमती समृद्धि की खेती करती है। आपकी क़ीमती मूल्य और फलते-फूलते विकास मिलकर एक ऐसा धन बनाते हैं जो पॉलिश किए हुए गहनों की तरह चमकता है, यह दर्शाता है कि सच्ची प्रचुरता प्रामाणिक गुणवत्ता से आती है।'
    }
  },
  {
    id: '진호_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, forging a precious character into great strength. Your treasured essence and magnificent purpose combine to create a leadership that gleams like royal gold, inspiring others through your commitment to noble excellence.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 귀중한 품성을 위대한 힘으로 벼려냅니다. 당신의 소중한 본질과 장엄한 목적이 결합하여, 왕가의 금처럼 빛나는 리더십을 창조하고, 고귀한 탁월함을 향한 당신의 헌신을 통해 다른 이들에게 영감을 줍니다.',
      ja: 'あなたの金の性質は、この名前と調和し、貴重な人格を大きな強さに鍛え上げます。あなたの貴重な本質と壮大な目的が組み合わさって、王室の金のように輝くリーダーシップを生み出し、高貴な卓越性へのあなたのコミットメントを通して他の人を鼓舞します。',
      zh: '你的金属性与这个名字相协调，将一个珍贵的品格锻造成强大的力量。你珍贵的本质和宏伟的目标相结合，创造出一种像皇家黄金一样闪闪发光的领导力，通过你对崇高卓越的承诺来激励他人。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant un caractère précieux en une grande force. Votre essence précieuse et votre magnifique objectif se combinent pour créer un leadership qui brille comme de l\'or royal, inspirant les autres par votre engagement envers l\'excellence noble.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet einen kostbaren Charakter zu großer Stärke. Ihre geschätzte Essenz und Ihr großartiges Ziel vereinen sich zu einer Führung, die wie königliches Gold glänzt und andere durch Ihr Engagement für edle Exzellenz inspiriert.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, forjando un carácter precioso en una gran fuerza. Tu esencia atesorada y tu magnífico propósito se combinaban para crear un liderazgo que brilla como el oro real, inspirando a otros a través de tu compromiso con la noble excelencia.',
      ru: 'Ваша природа Металла гармонирует с этим именем, выковывая драгоценный характер в великую силу. Ваша драгоценная сущность и великолепная цель в сочетании создают лидерство, которое сияет, как королевское золото, вдохновляя других вашей приверженностью благородному совершенству.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصوغ شخصية ثمينة إلى قوة عظمى. يتحد جوهرك الثمين وهدفك الرائع لخلق قيادة تلمع مثل الذهب الملكي، وتلهم الآخرين من خلال التزامك بالتميز النبيل.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक कीमती चरित्र को महान शक्ति में बदल देती है। आपका क़ीमती सार और शानदार उद्देश्य मिलकर एक ऐसा नेतृत्व बनाते हैं जो शाही सोने की तरह चमकता है, जो महान उत्कृष्टता के प्रति आपकी प्रतिबद्धता के माध्यम से दूसरों को प्रेरित करता है।'
    }
  },
  {
    id: '창빈_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, sharpening focused precision into refined, shining strength. Your pointed clarity and elegant cultivation combine to create a character that strikes true like a well-crafted spear, achieving goals through disciplined excellence.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 집중된 정밀함을 세련되고 빛나는 힘으로 날카롭게 벼려냅니다. 당신의 예리한 명료함과 우아한 수양이 결합하여, 잘 만들어진 창처럼 정확하게 목표를 꿰뚫고, 훈련된 탁월함을 통해 목표를 달성하는 품성을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、集中した精度を洗練された輝く強さに研ぎ澄まします。あなたの鋭い明快さとエレガントな育成が組み合わさって、巧みに作られた槍のように真実を突く性格を生み出し、規律ある卓越性を通して目標を達成します。',
      zh: '你的金属性与这个名字相协调，将集中的精确性磨练成精致、闪耀的力量。你尖锐的清晰度和优雅的修养相结合，创造出一种像精心制作的长矛一样能够准确打击的品格，通过有纪律的卓越来实现目标。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, aiguisant une précision ciblée en une force raffinée et brillante. Votre clarté pointue et votre culture élégante se combinent pour créer un caractère qui frappe juste comme une lance bien conçue, atteignant ses objectifs grâce à une excellence disciplinée.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schärft fokussierte Präzision zu verfeinerter, glänzender Stärke. Ihre pointierte Klarheit und Ihre elegante Kultivierung vereinen sich zu einem Charakter, der wie ein gut gearbeiteter Speer zutrifft und Ziele durch disziplinierte Exzellenz erreicht.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, agudizando la precisión enfocada en una fuerza refinada y brillante. Tu claridad puntiaguda y tu elegante cultivo se combinan para crear un carácter que da en el blanco como una lanza bien elaborada, logrando metas a través de una excelencia disciplinada.',
      ru: 'Ваша природа Металла гармонирует с этим именем, оттачивая сфокусированную точность в утонченную, сияющую силу. Ваша острая ясность и элегантное совершенствование в сочетании создают характер, который поражает цель, как хорошо сделанное копье, достигая целей благодаря дисциплинированному совершенству.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتشحذ الدقة المركزة إلى قوة مصقولة ومشرقة. يتحد وضوحك المدبب وزراعتك الأنيقة لخلق شخصية تضرب الحقيقة مثل رمح جيد الصنع، وتحقق الأهداف من خلال التميز المنضبط.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो केंद्रित परिशुद्धता को परिष्कृत, चमकती ताकत में तेज करती है। आपकी नुकीली स्पष्टता और सुरुचिपूर्ण खेती मिलकर एक ऐसा चरित्र बनाती है जो एक अच्छी तरह से तैयार किए गए भाले की तरह सच होता है, जो अनुशासित उत्कृष्टता के माध्यम से लक्ष्यों को प्राप्त करता है।'
    }
  },
  {
    id: '철민_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, tempering iron strength with swift adaptability. Your metallic foundation and agile thinking combine to create a resilience that bends without breaking, achieving success through a perfect balance of strength and flexibility.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 강철의 힘을 신속한 적응력으로 단련합니다. 당신의 금속성 기반과 민첩한 사고가 결합하여, 부러지지 않고 휘어지는 회복력을 창조하며, 힘과 유연성의 완벽한 균형을 통해 성공을 성취합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、鉄の強さを素早い適応性で和らげます。あなたの金属的な基盤と機敏な思考が組み合わさって、壊れることなく曲がる回復力を生み出し、強さと柔軟性の完璧なバランスを通して成功を収めます。',
      zh: '你的金属性与这个名字相协调，用迅速的适应性来调和钢铁般的力量。你的金属基础和敏捷的思维相结合，创造出一种可以弯曲而不会断裂的韧性，通过力量和灵活性的完美平衡取得成功。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant la force du fer avec une adaptabilité rapide. Votre fondation métallique et votre pensée agile se combinent pour créer une résilience qui plie sans se rompre, réussissant grâce à un équilibre parfait entre force et flexibilité.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert Eisenstärke mit schneller Anpassungsfähigkeit. Ihre metallische Grundlage und Ihr agiles Denken vereinen sich zu einer Widerstandsfähigkeit, die sich biegt, ohne zu brechen, und durch ein perfektes Gleichgewicht von Stärke und Flexibilität Erfolg hat.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, templando la fuerza del hierro con una rápida adaptabilidad. Tu base metálica y tu pensamiento ágil se combinan para crear una resiliencia que se dobla sin romperse, logrando el éxito a través de un equilibrio perfecto de fuerza y flexibilidad.',
      ru: 'Ваша природа Металла гармонирует с этим именем, закаляя железную прочность быстрой приспособляемостью. Ваша металлическая основа и гибкое мышление в сочетании создают устойчивость, которая гнется, не ломаясь, достигая успеха благодаря идеальному балансу прочности и гибкости.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتخفف من قوة الحديد مع القدرة على التكيف السريع. يتحد أساسك المعدني وتفكيرك الرشيق لخلق مرونة تنحني دون أن تنكسر، وتحقق النجاح من خلال توازن مثالي بين القوة والمرونة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो लोहे की ताकत को तेज अनुकूलनशीलता के साथ तड़का लगाती है। आपकी धातु की नींव और फुर्तीली सोच मिलकर एक ऐसी लचीलापन बनाती है जो बिना टूटे झुक जाती है, जो ताकत और लचीलेपन के एक आदर्श संतुलन के माध्यम से सफलता प्राप्त करती है।'
    }
  },
  {
    id: '태윤_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, forging great prosperity through magnificent refinement. Your supreme achievement and abundant flow combine to create a wealth that gleams like a precious metal, bringing both material success and spiritual abundance.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 장엄한 정제를 통해 위대한 번영을 벼려냅니다. 당신의 최고의 성취와 풍부한 흐름이 결합하여, 귀금속처럼 빛나는 부를 창조하며, 물질적 성공과 정신적 풍요를 모두 가져다줍니다.',
      ja: 'あなたの金の性質は、この名前と調和し、壮大な洗練を通して大きな繁栄を築きます。あなたの最高の業績と豊かな流れが組み合わさって、貴金属のように輝く富を生み出し、物質的な成功と精神的な豊かさの両方をもたらします。',
      zh: '你的金属性与这个名字相协调，通过宏伟的提炼锻造出巨大的繁荣。你至高无上的成就和丰富的流动相结合，创造出一种像贵金属一样闪闪发光的财富，带来物质上的成功和精神上的富足。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, forgeant une grande prospérité par un raffinement magnifique. Votre accomplissement suprême et votre flux abondant se combinent pour créer une richesse qui brille comme un métal précieux, apportant à la fois le succès matériel et l\'abondance spirituelle.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und schmiedet großen Wohlstand durch großartige Verfeinerung. Ihre höchste Errungenschaft und Ihr reichlicher Fluss vereinen sich zu einem Reichtum, der wie ein Edelmetall glänzt und sowohl materiellen Erfolg als auch spirituellen Überfluss bringt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, forjando una gran prosperidad a través de un magnífico refinamiento. Tu logro supremo y tu flujo abundante se combinan para crear una riqueza que brilla como un metal precioso, trayendo tanto el éxito material como la abundancia espiritual.',
      ru: 'Ваша природа Металла гармонирует с этим именем, выковывая великое процветание через великолепное утончение. Ваше высшее достижение и обильный поток в сочетании создают богатство, которое сияет, как драгоценный металл, принося как материальный успех, так и духовное изобилие.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصوغ ازدهارًا كبيرًا من خلال صقل رائع. يتحد إنجازك الأسمى وتدفقك الوفير لخلق ثروة تلمع مثل معدن ثمين، وتجلب النجاح المادي والوفرة الروحية على حد سواء.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो शानदार शोधन के माध्यम से महान समृद्धि का निर्माण करती है। आपकी सर्वोच्च उपलब्धि और प्रचुर प्रवाह मिलकर एक ऐसा धन बनाते हैं जो एक कीमती धातु की तरह चमकता है, जो भौतिक सफलता और आध्यात्मिक प्रचुरता दोनों लाता है।'
    }
  },
  {
    id: '하린_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, polishing beautiful aspirations into sky-high achievements. Your gorgeous ambition and celestial grace combine to create a character that shines like a star in the clear heavens, inspiring others to reach for their highest dreams.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 아름다운 포부를 하늘 높은 성취로 닦아냅니다. 당신의 화려한 야망과 천상의 우아함이 결합하여, 맑은 하늘의 별처럼 빛나며 다른 사람들이 가장 높은 꿈을 향해 나아가도록 영감을 주는 품성을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、美しい願望を天文学的な業績に磨き上げます。あなたの豪華な野心と天の恵みが組み合わさって、澄んだ天の星のように輝く性格を生み出し、他の人が最高の夢に到達するように促します。',
      zh: '你的金属性与这个名字相协调，将美丽的愿望打磨成天高的成就。你华丽的雄心和天体的优雅相结合，创造出一种像晴朗天空中的星星一样闪耀的品格，激励他人去追求他们最高的梦想。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant de belles aspirations en des réalisations vertigineuses. Votre ambition magnifique et votre grâce céleste se combinent pour créer un caractère qui brille comme une étoile dans les cieux clairs, inspirant les autres à atteindre leurs rêves les plus élevés.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert schöne Bestrebungen zu himmelhohen Errungenschaften. Ihr wunderschöner Ehrgeiz und Ihre himmlische Anmut vereinen sich zu einem Charakter, der wie ein Stern am klaren Himmel leuchtet und andere dazu inspiriert, nach ihren höchsten Träumen zu greifen.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo hermosas aspiraciones en logros altísimos. Tu hermosa ambición y tu gracia celestial se combinan para crear un carácter que brilla como una estrella en los cielos despejados, inspirando a otros a alcanzar sus sueños más elevados.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая прекрасные устремления в заоблачные достижения. Ваши великолепные амбиции и небесная грация в сочетании создают характер, который сияет, как звезда на ясном небе, вдохновляя других стремиться к своим высшим мечтам.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصقل التطلعات الجميلة إلى إنجازات شاهقة. يتحد طموحك الرائع ونعمتك السماوية لخلق شخصية تتألق مثل نجم في السماء الصافية، وتلهم الآخرين للوصال إلى أعلى أحلامهم.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो सुंदर आकांक्षाओं को आसमान छूती उपलब्धियों में चमकाती है। आपकी भव्य महत्वाकांक्षा और दिव्य कृपा मिलकर एक ऐसा चरित्र बनाती है जो साफ आसमान में एक तारे की तरह चमकता है, जो दूसरों को अपने उच्चतम सपनों तक पहुंचने के लिए प्रेरित करता है।'
    }
  },
  {
    id: '해린_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling the beauty of the ocean through endless grace. Your vast magnificence and flowing elegance combine to create a character that moves like the tides, bringing renewal and abundance wherever your influence reaches.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 끝없는 우아함을 통해 바다의 아름다움을 이끌어냅니다. 당신의 광대한 장엄함과 흐르는 듯한 우아함이 결합하여, 조석력처럼 움직이며 당신의 영향력이 닿는 곳마다 새로움과 풍요를 가져다주는 품성을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、無限の優雅さを通して海の美しさを導きます。あなたの広大な壮大さと流れるような優雅さが組み合わさって、潮のように動く性格を生み出し、あなたの影響が及ぶどこにでも更新と豊かさをもたらします。',
      zh: '你的水属性与这个名字相协调，通过无尽的优雅引导海洋之美。你浩瀚的壮丽和流动的优雅相结合，创造出一种像潮汐一样移动的品格，在你影响所及的任何地方带来更新和富足。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant la beauté de l\'océan par une grâce infinie. Votre vaste magnificence et votre élégance fluide se combinent pour créer un caractère qui se déplace comme les marées, apportant renouveau et abondance partout où votre influence s\'étend.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert die Schönheit des Ozeans durch endlose Anmut. Ihre große Pracht und Ihre fließende Eleganz vereinen sich zu einem Charakter, der sich wie die Gezeiten bewegt und Erneuerung und Fülle bringt, wohin auch immer Ihr Einfluss reicht.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando la belleza del océano a través de una gracia infinita. Tu vasta magnificencia y tu fluida elegancia se combinan para crear un carácter que se mueve como las mareas, trayendo renovación y abundancia dondequiera que llegue tu influencia.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя красоту океана через бесконечную грацию. Ваше огромное великолепие и плавная элегантность в сочетании создают характер, который движется, как приливы, принося обновление и изобилие везде, куда достигает ваше влияние.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه جمال المحيط من خلال نعمة لا نهاية لها. يتحد روعتك الشاسعة وأناقتك المتدفقة لخلق شخصية تتحرك مثل المد والجزر، وتجلب التجديد والوفرة أينما يصل تأثيرك.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो अंतहीन कृपा के माध्यम से समुद्र की सुंदरता को प्रसारित करती है। आपकी विशाल भव्यता और बहने वाली लालित्य मिलकर एक ऐसा चरित्र बनाते हैं जो ज्वार की तरह चलता है, जहाँ भी आपका प्रभाव पहुँचता है, वहाँ नवीनीकरण और प्रचुरता लाता है।'
    }
  },
  {
    id: '현서_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, flowing with virtuous wisdom through auspicious channels. Your noble character and blessed fortune combine to create a grace that moves like a gentle rain, bringing both moral guidance and good fortune to all who follow your example.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 상서로운 통로를 통해 고결한 지혜로 흘러갑니다. 당신의 고귀한 품성과 축복받은 행운이 결합하여, 신성한 물처럼 움직이며 당신의 모범을 따르는 모든 이에게 도덕적 지침과 행운을 함께 가져다주는 은혜를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、縁起の良いチャネルを通して高潔な知恵で流れます。あなたの高貴な人格と祝福された幸運が組み合わさって、穏やかな雨のように動く恵みを生み出し、あなたの模範に従うすべての人に道徳的な導きと幸運の両方をもたらします。',
      zh: '你的水属性与这个名字相协调，通过吉祥的渠道流淌着贤德的智慧。你高尚的品格和幸福的财富相结合，创造出一种像温柔的雨一样移动的恩典，为你榜样的人带来道德指导和好运。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une sagesse vertueuse par des canaux auspicieux. Votre caractère noble et votre fortune bénie se combinent pour créer une grâce qui se déplace comme une douce pluie, apportant à la fois des conseils moraux et la bonne fortune à tous ceux qui suivent votre exemple.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit tugendhafter Weisheit durch glückverheißende Kanäle. Ihr edler Charakter und Ihr gesegnetes Glück vereinen sich zu einer Anmut, die sich wie ein sanfter Regen bewegt und allen, die Ihrem Beispiel folgen, sowohl moralische Führung als auch Glück bringt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una sabiduría virtuosa a través de canales auspiciosos. Tu carácter noble y tu bendita fortuna se combinan para crear una gracia que se mueve como una lluvia suave, trayendo tanto guía moral como buena fortuna a todos los que siguen tu ejemplo.',
      ru: 'Ваша природа Воды гармонирует с этим именем, текущим с добродетельной мудростью по благоприятным каналам. Ваш благородный характер и благословенная удача в сочетании создают грацию, которая движется, как нежный дождь, принося как моральное руководство, так и удачу всем, кто следует вашему примеру.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتتدفق بحكمة فاضلة عبر قنوات ميمونة. يتحد طابعك النبيل وثروتك المباركة لخلق نعمة تتحرك مثل المطر اللطيف، وتجلب التوجيه الأخلاقي والحظ السعيد لكل من يتبع مثالك.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो शुभ चैनलों के माध्यम से गुणी ज्ञान के साथ बहती है। आपका महान चरित्र और धन्य भाग्य मिलकर एक ऐसी कृपा पैदा करते हैं जो एक कोमल बारिश की तरह चलती है, जो आपके उदाहरण का पालन करने वाले सभी लोगों के लिए नैतिक मार्गदर्शन और सौभाग्य दोनों लाती है।'
    }
  },
  {
    id: '현우_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, refining a wise character into excellent virtue. Your virtuous wisdom and outstanding quality combine to create a nobility that gleams like refined gold, demonstrating that true excellence comes from moral cultivation.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 지혜로운 품성을 탁월한 덕으로 정제합니다. 당신의 고결한 지혜와 뛰어난 자질이 결합하여, 잘 닦인 금처럼 빛나는 고귀함을 창조하며, 진정한 탁월함은 도덕적 수양에서 비롯됨을 보여줍니다.',
      ja: 'あなたの金の性質は、この名前と調和し、賢明な人格を優れた美徳に磨き上げます。あなたの高潔な知恵と卓越した品質が組み合わさって、洗練された金のように輝く高貴さを生み出し、真の卓越性は道徳的な育成から生まれることを示します。',
      zh: '你的金属性与这个名字相协调，将一个智慧的品格提炼成卓越的美德。你高尚的智慧和卓越的品质相结合，创造出一种像精炼金一样闪闪发光的贵族气质，表明真正的卓越来自道德修养。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, affinant un caractère sage en une excellente vertu. Votre sagesse vertueuse et votre qualité exceptionnelle se combinent pour créer une noblesse qui brille comme de l\'or raffiné, démontrant que la véritable excellence vient de la culture morale.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und verfeinert einen weisen Charakter zu exzellenter Tugend. Ihre tugendhafte Weisheit und Ihre herausragende Qualität vereinen sich zu einem Adel, der wie raffiniertes Gold glänzt und zeigt, dass wahre Exzellenz aus moralischer Kultivierung entsteht.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, refinando un carácter sabio en una excelente virtud. Tu sabiduría virtuosa y tu calidad sobresaliente se combinan para crear una nobleza que brilla como el oro refinado, demostrando que la verdadera excelencia proviene del cultivo moral.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая мудрый характер в превосходную добродетель. Ваша добродетельная мудрость и выдающееся качество в сочетании создают благородство, которое сияет, как очищенное золото, демонстрируя, что истинное совершенство происходит от нравственного совершенствования.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصقل شخصية حكيمة إلى فضيلة ممتازة. تتحد حكمتك الفاضلة وجودتك المتميزة لخلق نبل يلمع مثل الذهب المكرر، مما يدل على أن التميز الحقيقي يأتي من الزراعة الأخلاقية.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक बुद्धिमान चरित्र को उत्कृष्ट गुण में परिष्कृत करती है। आपका गुणी ज्ञान और उत्कृष्ट गुणवत्ता मिलकर एक ऐसी कुलीनता बनाती है जो परिष्कृत सोने की तरह चमकती है, यह दर्शाती है कि सच्ची उत्कृष्टता नैतिक खेती से आती है।'
    }
  },
  {
    id: '현정_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling virtuous wisdom through pure intentions. Your noble character and crystalline purity combine to create an integrity that flows like a sacred spring, offering a moral clarity that refreshes and renews all who encounter it.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 순수한 의도를 통해 고결한 지혜를 이끌어냅니다. 당신의 고귀한 품성과 수정 같은 순수함이 결합하여, 신성한 샘물처럼 흘러 그것을 마주하는 모든 이를 상쾌하게 하고 새롭게 하는 도덕적 명료함을 지닌 진실성을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、純粋な意図を通して高潔な知恵を導きます。あなたの高貴な人格と結晶のような純粋さが組み合わさって、聖なる泉のように流れる誠実さを生み出し、それに出会うすべての人をリフレッシュし、新たにする道徳的な明快さを提供します。',
      zh: '你的水属性与这个名字相协调，通过纯粹的意图引导贤德的智慧。你高尚的品格和晶莹剔透的纯洁相结合，创造出一种像圣泉一样流动的正直，提供一种道德上的清晰，让所有遇到它的人都感到神清气爽、焕然一新。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une sagesse vertueuse par des intentions pures. Votre caractère noble et votre pureté cristalline se combinent pour créer une intégrité qui coule comme une source sacrée, offrant une clarté morale qui rafraîchit et renouvelle tous ceux qui la rencontrent.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert tugendhafte Weisheit durch reine Absichten. Ihr edler Charakter und Ihre kristalline Reinheit vereinen sich zu einer Integrität, die wie eine heilige Quelle fließt und eine moralische Klarheit bietet, die alle, die ihr begegnen, erfrischt und erneuert.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una sabiduría virtuosa a través de intenciones puras. Tu carácter noble y tu pureza cristalina se combinaban para crear una integridad que fluye como un manantial sagrado, ofreciendo una claridad moral que refresca y renueva a todos los que la encuentran.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя добродетельную мудрость через чистые намерения. Ваш благородный характер и кристальная чистота в сочетании создают целостность, которая течет, как священный источник, предлагая моральную ясность, которая освежает и обновляет всех, кто с ней сталкивается.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه الحكمة الفاضلة من خلال النوايا النقية. يتحد طابعك النبيل ونقاوتك البلورية لخلق نزاهة تتدفق مثل نبع مقدس، وتوفر وضوحًا أخلاقيًا ينعش ويجدد كل من يواجهه.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो शुद्ध इरादों के माध्यम से गुणी ज्ञान को प्रसारित करती है। आपका महान चरित्र और क्रिस्टलीय शुद्धता मिलकर एक ऐसी अखंडता बनाती है जो एक पवित्र झरने की तरह बहती है, जो एक नैतिक स्पष्टता प्रदान करती है जो इसका सामना करने वाले सभी को तरोताजा और नवीनीकृत करती है।'
    }
  },
  {
    id: '현주_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, polishing virtuous character into precious wisdom. Your noble virtue and treasured insight combine to create a character that sparkles like a pearl in deep waters, offering rare guidance that enriches the soul.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 고결한 품성을 귀중한 지혜로 닦아냅니다. 당신의 고귀한 덕과 소중한 통찰력이 결합하여, 깊은 물속의 진주처럼 반짝이며 영혼을 풍요롭게 하는 희귀한 지침을 제공하는 품성을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、高潔な人格を貴重な知恵に磨き上げます。あなたの高貴な美徳と大切な洞察力が組み合わさって、深い海の真珠のように輝く性格を生み出し、魂を豊かにする珍しい導きを提供します。',
      zh: '你的水属性与这个名字相协调，将贤德的品格打磨成宝贵的智慧。你高尚的美德和珍贵的洞察力相结合，创造出一种像深水中的珍珠一样闪闪发光的品格，提供丰富灵魂的罕见指导。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, polissant un caractère vertueux en une sagesse précieuse. Votre noble vertu et votre précieuse perspicacité se combinent pour créer un caractère qui scintille comme une perle dans les eaux profondes, offrant des conseils rares qui enrichissent l\'âme.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und poliert einen tugendhaften Charakter zu kostbarer Weisheit. Ihre edle Tugend und Ihre geschätzte Einsicht vereinen sich zu einem Charakter, der wie eine Perle in tiefen Gewässern funkelt und seltene Führung bietet, die die Seele bereichert.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, puliendo un carácter virtuoso en una sabiduría preciosa. Tu noble virtud y tu preciada perspicacia se combinan para crear un carácter que brilla como una perla en aguas profundas, ofreciendo una guía rara que enriquece el alma.',
      ru: 'Ваша природа Воды гармонирует с этим именем, превращая добродетельный характер в драгоценную мудрость. Ваша благородная добродетель и драгоценное прозрение в сочетании создают характер, который сверкает, как жемчужина в глубоких водах, предлагая редкое руководство, которое обогащает душу.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتصقل الشخصية الفاضلة إلى حكمة ثمينة. تتحد فضيلتك النبيلة وبصيرتك الثمينة لخلق شخصية تتلألأ مثل لؤلؤة في المياه العميقة، وتقدم إرشادات نادرة تثري الروح.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो गुणी चरित्र को कीमती ज्ञान में चमकाती है। आपका महान गुण और क़ीमती अंतर्दृष्टि मिलकर एक ऐसा चरित्र बनाते हैं जो गहरे पानी में एक मोती की तरह चमकता है, जो आत्मा को समृद्ध करने वाला दुर्लभ मार्गदर्शन प्रदान करता है।'
    }
  },
  {
    id: '현준_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling virtuous talent through a flowing excellence. Your noble ability and gifted achievement combine to create a mastery that moves like a pristine river, inspiring others through your commitment to ethical excellence.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 흐르는 듯한 탁월함을 통해 고결한 재능을 이끌어냅니다. 당신의 고귀한 능력과 타고난 성취가 결합하여, 맑고 깨끗한 강처럼 움직이며 윤리적 탁월함을 향한 당신의 헌신을 통해 다른 이들에게 영감을 주는 경지를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、流れるような卓越性を通して高潔な才能を導きます。あなたの高貴な能力と才能ある業績が組み合わさって、手付かずの川のように動く熟練を生み出し、倫理的な卓越性へのあなたのコミットメントを通して他の人を鼓舞します。',
      zh: '你的水属性与这个名字相协调，通过流动的卓越来引导贤德的才华。你高尚的能力和天赋异禀的成就相结合，创造出一种像原始河流一样移动的精通，通过你对道德卓越的承诺来激励他人。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant un talent vertueux par une excellence fluide. Votre capacité noble et vos réalisations douées se combinent pour créer une maîtrise qui se déplace comme une rivière vierge, inspirant les autres par votre engagement envers l\'excellence éthique.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert tugendhaftes Talent durch fließende Exzellenz. Ihre edle Fähigkeit und Ihre begabte Leistung vereinen sich zu einer Meisterschaft, die sich wie ein unberührter Fluss bewegt und andere durch Ihr Engagement für ethische Exzellenz inspiriert.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando un talento virtuoso a través de una excelencia fluida. Tu noble habilidad y tus logros superdotados se combinan para crear una maestría que se mueve como un río prístino, inspirando a otros a través de tu compromiso con la excelencia ética.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя добродетельный талант через текучее совершенство. Ваши благородные способности и одаренные достижения в сочетании создают мастерство, которое движется, как нетронутая река, вдохновляя других вашей приверженностью этическому совершенству.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه المواهب الفاضلة من خلال التميز المتدفق. تتحد قدرتك النبيلة وإنجازك الموهوب لخلق إتقان يتحرك مثل نهر نقي، ويلهم الآخرين من خلال التزامك بالتميز الأخلاقي.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक बहती हुई उत्कृष्टता के माध्यम से गुणी प्रतिभा को प्रसारित करती है। आपकी महान क्षमता और प्रतिभाशाली उपलब्धि मिलकर एक ऐसी महारत बनाती है जो एक प्राचीन नदी की तरह चलती है, जो नैतिक उत्कृष्टता के प्रति आपकी प्रतिबद्धता के माध्यम से दूसरों को प्रेरित करती है।'
    }
  },
  {
    id: '현철_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, tempering virtuous wisdom into iron-strong principles. Your noble character and unbreakable resolve combine to create an integrity that stands like a fortress pillar, protecting moral values with unwavering determination.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 고결한 지혜를 강철 같은 원칙으로 단련합니다. 당신의 고귀한 품성과 깨지지 않는 결의가 결합하여, 성채의 기둥처럼 굳건히 서서 흔들림 없는 결단력으로 도덕적 가치를 보호하는 진실성을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、高潔な知恵を鉄のように強い原則に和らげます。あなたの高貴な人格と壊れない決意が組み合わさって、揺るぎない決意で道徳的価値を守る、要塞の柱のように立つ誠実さを生み出します。',
      zh: '你的金属性与这个名字相协调，将贤德的智慧磨练成钢铁般坚强的原则。你高尚的品格和坚不可摧的决心相结合，创造出一种像堡垒支柱一样矗立的正直，以坚定不移的决心保护道德价值观。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant une sagesse vertueuse en des principes à toute épreuve. Votre caractère noble et votre résolution inébranlable se combinent pour créer une intégrité qui se dresse comme un pilier de forteresse, protégeant les valeurs morales avec une détermination inébranlable.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert tugendhafte Weisheit zu eisenharten Prinzipien. Ihr edler Charakter und Ihre unzerbrechliche Entschlossenheit vereinen sich zu einer Integrität, die wie eine Festungssäule dasteht und moralische Werte mit unerschütterlicher Entschlossenheit schützt.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, templando la sabiduría virtuosa en principios férreos. Tu carácter noble y tu resolución inquebrantable se combinan para crear una integridad que se yergue como un pilar de fortaleza, protegiendo los valores morales con una determinación inquebrantable.',
      ru: 'Ваша природа Металла гармонирует с этим именем, закаляя добродетельную мудрость в железные принципы. Ваш благородный характер и несокрушимая решимость в сочетании создают целостность, которая стоит, как столп крепости, защищая моральные ценности с непоколебимой решимостью.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتخفف من الحكمة الفاضلة إلى مبادئ حديدية. يتحد طابعك النبيل وعزمك الذي لا يتزعزع لخلق نزاهة تقف مثل عمود قلعة، وتحمي القيم الأخلاقية بتصميم لا يتزعزع.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो गुणी ज्ञान को लोहे के मजबूत सिद्धांतों में बदल देती है। आपका महान चरित्र और अटूट संकल्प मिलकर एक ऐसी अखंडता बनाते हैं जो एक किले के स्तंभ की तरह खड़ा होता है, जो अटूट दृढ़ संकल्प के साथ नैतिक मूल्यों की रक्षा करता है।'
    }
  },
  {
    id: '현호_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, flowing with virtuous greatness toward a magnificent purpose. Your noble wisdom and extraordinary achievement combine to create a leadership that surges like a mighty river, guiding others toward noble greatness.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 장엄한 목적을 향해 고결한 위대함으로 흘러갑니다. 당신의 고귀한 지혜와 비범한 성취가 결합하여, 거대한 강처럼 밀려와 다른 사람들을 고귀한 위대함으로 이끄는 리더십을 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、壮大な目的に向かって高潔な偉大さで流れます。あなたの高貴な知恵と並外れた業績が組み合わさって、力強い川のように押し寄せるリーダーシップを生み出し、他の人を高貴な偉大さへと導きます。',
      zh: '你的水属性与这个名字相协调，带着贤德的伟大流向一个宏伟的目标。你高尚的智慧和非凡的成就相结合，创造出一种像一条强大的河流一样汹涌的领导力，引导他人走向崇高的伟大。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, s\'écoulant avec une grandeur vertueuse vers un but magnifique. Votre noble sagesse et vos réalisations extraordinaires se combinent pour créer un leadership qui déferle comme une rivière puissante, guidant les autres vers une noble grandeur.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und fließt mit tugendhafter Größe auf ein großartiges Ziel zu. Ihre edle Weisheit und Ihre außergewöhnliche Leistung vereinen sich zu einer Führung, die wie ein mächtiger Fluss ansteigt und andere zu edler Größe führt.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, fluyendo con una grandeza virtuosa hacia un propósito magnífico. Tu noble sabiduría y tus logros extraordinarios se combinan para crear un liderazgo que surge como un río caudaloso, guiando a otros hacia una noble grandeza.',
      ru: 'Ваша природа Воды гармонирует с этим именем, текущим с добродетельным величием к великолепной цели. Ваша благородная мудрость и выдающиеся достижения в сочетании создают лидерство, которое нарастает, как могучая река, направляя других к благородному величию.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتتدفق بعظمة فاضلة نحو هدف رائع. تتحد حكمتك النبيلة وإنجازك غير العادي لخلق قيادة تتدفق مثل نهر عظيم، وتوجه الآخرين نحو العظمة النبيلة.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक शानदार उद्देश्य की ओर गुणी महानता के साथ बहती है। आपकी महान बुद्धि और असाधारण उपलब्धि मिलकर एक ऐसा नेतृत्व बनाती है जो एक शक्तिशाली नदी की तरह बढ़ता है, जो दूसरों को महान महानता की ओर मार्गदर्शन करता है।'
    }
  },
  {
    id: '혜린_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, polishing wise beauty into radiant excellence. Your intelligent grace and flowing elegance combine to create a character that gleams like a precious gem, inspiring others through your commitment to beautiful wisdom.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 지혜로운 아름다움을 찬란한 탁월함으로 닦아냅니다. 당신의 지적인 우아함과 흐르는 듯한 품위가 결합하여, 귀한 보석처럼 빛나며 아름다운 지혜를 향한 당신의 헌신을 통해 다른 이들에게 영감을 주는 품성을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、賢明な美しさを輝く卓越性に磨き上げます。あなたの知的な恵みと流れるような優雅さが組み合わさって、貴重な宝石のように輝く性格を生み出し、美しい知恵へのあなたのコミットメントを通して他の人を鼓舞します。',
      zh: '你的金属性与这个名字相协调，将智慧的美丽打磨成灿烂的卓越。你聪明的优雅和流动的优雅相结合，创造出一种像珍贵宝石一样闪闪发光的品格，通过你对美丽智慧的承诺来激励他人。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, polissant une beauté sage en une excellence radieuse. Votre grâce intelligente et votre élégance fluide se combinent pour créer un caractère qui brille comme une gemme précieuse, inspirant les autres par votre engagement envers une belle sagesse.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und poliert weise Schönheit zu strahlender Exzellenz. Ihre intelligente Anmut und Ihre fließende Eleganz vereinen sich zu einem Charakter, der wie ein kostbarer Edelstein glänzt und andere durch Ihr Engagement für schöne Weisheit inspiriert.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, puliendo la belleza sabia en una excelencia radiante. Tu gracia inteligente y tu elegancia fluida se combinan para crear un carácter que brilla como una gema preciosa, inspirando a otros a través de tu compromiso con una hermosa sabiduría.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая мудрую красоту в сияющее совершенство. Ваша интеллигентная грация и плавная элегантность в сочетании создают характер, который сияет, как драгоценный камень, вдохновляя других вашей приверженностью прекрасной мудрости.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصقل الجمال الحكيم إلى التميز المشع. تتحد نعمتك الذكية وأناقتك المتدفقة لخلق شخصية تلمع مثل جوهرة ثمينة، وتلهم الآخرين من خلال التزامك بالحكمة الجميلة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो बुद्धिमान सुंदरता को उज्ज्वल उत्कृष्टता में चमकाती है। आपकी बुद्धिमान कृपा और बहने वाली लालित्य मिलकर एक ऐसा चरित्र बनाते हैं जो एक कीमती रत्न की तरह चमकता है, जो सुंदर ज्ञान के प्रति आपकी प्रतिबद्धता के माध्यम से दूसरों को प्रेरित करता है।'
    }
  },
  {
    id: '혜수_water_01',
    harmony: {
      en: 'Your Water nature harmonizes with this name, channeling wise beauty through flowing excellence. Your intelligent grace and outstanding achievement combine to create a mastery that moves like a graceful stream, offering both wisdom and beauty to all who encounter your influence.',
      ko: '당신의 수(水) 기운은 이 이름과 완벽하게 조화를 이루며, 흐르는 듯한 탁월함을 통해 지혜로운 아름다움을 이끌어냅니다. 당신의 지적인 우아함과 뛰어난 성취가 결합하여, 우아한 시냇물처럼 움직이며 당신의 영향력을 마주하는 모든 이에게 지혜와 아름다움을 함께 제공하는 경지를 창조합니다.',
      ja: 'あなたの水の性質は、この名前と調和し、流れるような卓越性を通して賢明な美しさを導きます。あなたの知的な恵みと卓越した業績が組み合わさって、優雅な小川のように動く熟練を生み出し、あなたの影響に出会うすべての人に知恵と美しさの両方を提供します。',
      zh: '你的水属性与这个名字相协调，通过流动的卓越来引导智慧的美丽。你聪明的优雅和杰出的成就相结合，创造出一种像一条优美的溪流一样移动的精通，为你影响所及的所有人提供智慧和美丽。',
      fr: 'Votre nature Eau s\'harmonise avec ce nom, canalisant une beauté sage par une excellence fluide. Votre grâce intelligente et vos réalisations exceptionnelles se combinent pour créer une maîtrise qui se déplace comme un ruisseau gracieux, offrant à la fois sagesse et beauté à tous ceux qui rencontrent votre influence.',
      de: 'Ihre Wassernatur harmoniert mit diesem Namen und kanalisiert weise Schönheit durch fließende Exzellenz. Ihre intelligente Anmut und Ihre herausragende Leistung vereinen sich zu einer Meisterschaft, die sich wie ein anmutiger Strom bewegt und allen, die Ihrem Einfluss begegnen, sowohl Weisheit als auch Schönheit bietet.',
      es: 'Tu naturaleza de Agua armoniza con este nombre, canalizando una belleza sabia a través de una excelencia fluida. Tu gracia inteligente y tus logros sobresalientes se combinan para crear una maestría que se mueve como un arroyo elegante, ofreciendo tanto sabiduría como belleza a todos los que se encuentran con tu influencia.',
      ru: 'Ваша природа Воды гармонирует с этим именем, направляя мудрую красоту через текучее совершенство. Ваша интеллигентная грация и выдающиеся достижения в сочетании создают мастерство, которое движется, как изящный поток, предлагая как мудрость, так и красоту всем, кто сталкивается с вашим влиянием.',
      ar: 'تتناغم طبيعتك المائية مع هذا الاسم، وتوجه الجمال الحكيم من خلال التميز المتدفق. تتحد نعمتك الذكية وإنجازك المتميز لخلق إتقان يتحرك مثل تيار رشيق، ويقدم الحكمة والجمال لكل من يواجه تأثيرك.',
      hi: 'आपकी जल प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो बहती हुई उत्कृष्टता के माध्यम से बुद्धिमान सुंदरता को प्रसारित करती है। आपकी बुद्धिमान कृपा और उत्कृष्ट उपलब्धि मिलकर एक ऐसी महारत बनाती है जो एक सुंदर धारा की तरह चलती है, जो आपके प्रभाव का सामना करने वाले सभी लोगों को ज्ञान और सुंदरता दोनों प्रदान करती है।'
    }
  },
  {
    id: '혜영_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, refining wise prosperity into brilliant success. Your intelligent abundance and flourishing achievement combine to create a wealth that shines like polished gold, demonstrating that true prosperity comes from cultivated wisdom.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 지혜로운 번영을 눈부신 성공으로 정제합니다. 당신의 지적인 풍요와 무성한 성취가 결합하여, 잘 닦인 금처럼 빛나는 부를 창조하며, 진정한 번영은 갈고 닦은 지혜에서 비롯됨을 보여줍니다.',
      ja: 'あなたの金の性質は、この名前と調和し、賢明な繁栄を輝かしい成功に磨き上げます。あなたの知的な豊かさと繁栄する業績が組み合わさって、磨かれた金のように輝く富を生み出し、真の繁栄は培われた知恵から生まれることを示します。',
      zh: '你的金属性与这个名字相协调，将智慧的繁荣提炼成辉煌的成功。你聪明的富足和蓬勃的成就相结合，创造出一种像抛光金一样闪闪发光的财富，表明真正的繁荣来自培养的智慧。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, affinant une sage prospérité en un succès brillant. Votre abondance intelligente et votre accomplissement florissant se combinent pour créer une richesse qui brille comme de l\'or poli, démontrant que la véritable prospérité vient d\'une sagesse cultivée.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und verfeinert weisen Wohlstand zu brillantem Erfolg. Ihre intelligente Fülle und Ihre blühende Leistung vereinen sich zu einem Reichtum, der wie poliertes Gold glänzt und zeigt, dass wahrer Wohlstand aus kultivierter Weisheit entsteht.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, refinando la sabia prosperidad en un éxito brillante. Tu abundancia inteligente y tus logros florecientes se combinan para crear una riqueza que brilla como el oro pulido, demostrando que la verdadera prosperidad proviene de una sabiduría cultivada.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая мудрое процветание в блестящий успех. Ваше разумное изобилие и процветающие достижения в сочетании создают богатство, которое сияет, как полированное золото, демонстрируя, что истинное процветание происходит от взращенной мудрости.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتصقل الازدهار الحكيم إلى نجاح باهر. يتحد وفرة ذكائك وإنجازك المزدهر لخلق ثروة تتألق مثل الذهب المصقول، مما يدل على أن الازدهار الحقيقي يأتي من الحكمة المزروعة.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो बुद्धिमान समृद्धि को शानदार सफलता में परिष्कृत करती है। आपकी बौद्धिक प्रचुरता और फलती-फूलती उपलब्धि मिलकर एक ऐसा धन बनाती है जो पॉलिश किए हुए सोने की तरह चमकता है, यह दर्शाता है कि सच्ची समृद्धि सुसंस्कृत ज्ञान से आती है।'
    }
  },
  {
    id: '혜진_metal_01',
    harmony: {
      en: 'Your Metal nature harmonizes with this name, tempering a wise character into a precious virtue. Your intelligent nobility and treasured worth combine to create a character that gleams like a rare jewel, offering guidance that is both wise and genuinely valuable.',
      ko: '당신의 금(金) 기운은 이 이름과 완벽하게 조화를 이루며, 지혜로운 품성을 귀중한 덕으로 단련합니다. 당신의 지적인 고귀함과 소중한 가치가 결합하여, 희귀한 보석처럼 빛나며 지혜롭고 진정으로 가치 있는 지침을 제공하는 품성을 창조합니다.',
      ja: 'あなたの金の性質は、この名前と調和し、賢明な人格を貴重な美徳に和らげます。あなたの知的な高貴さと大切な価値が組み合わさって、希少な宝石のように輝く性格を生み出し、賢明で真に価値のあるガイダンスを提供します。',
      zh: '你的金属性与这个名字相协调，将一个智慧的品格磨练成一种宝贵的美德。你聪明的贵族气质和珍贵的价值相结合，创造出一种像稀有宝石一样闪闪发光的品格，提供既明智又真正有价值的指导。',
      fr: 'Votre nature Métal s\'harmonise avec ce nom, tempérant un caractère sage en une vertu précieuse. Votre noblesse intelligente et votre valeur précieuse se combinent pour créer un caractère qui brille comme un joyau rare, offrant des conseils à la fois sages et véritablement précieux.',
      de: 'Ihre Metallnatur harmoniert mit diesem Namen und mildert einen weisen Charakter zu einer kostbaren Tugend. Ihre intelligente Noblesse und Ihr geschätzter Wert vereinen sich zu einem Charakter, der wie ein seltenes Juwel glänzt und eine Führung bietet, die sowohl weise als auch wirklich wertvoll ist.',
      es: 'Tu naturaleza de Metal armoniza con este nombre, templando un carácter sabio en una virtud preciosa. Tu nobleza inteligente y tu valor atesorado se combinan para crear un carácter que brilla como una joya rara, ofreciendo una guía que es a la vez sabia y genuinamente valiosa.',
      ru: 'Ваша природа Металла гармонирует с этим именем, превращая мудрый характер в драгоценную добродетель. Ваше разумное благородство и драгоценная ценность в сочетании создают характер, который сияет, как редкий драгоценный камень, предлагая руководство, которое является одновременно мудрым и подлинно ценным.',
      ar: 'تتناغم طبيعتك المعدنية مع هذا الاسم، وتخفف من حدة الشخصية الحكيمة إلى فضيلة ثمينة. يتحد نبلكم الذكي وقيمتكم الثمينة لخلق شخصية تلمع مثل جوهرة نادرة، وتقدم إرشادات حكيمة وقيمة حقًا.',
      hi: 'आपकी धातु प्रकृति इस नाम के साथ सामंजस्य स्थापित करती है, जो एक बुद्धिमान चरित्र को एक कीमती गुण में बदल देती है। आपकी बौद्धिक कुलीनता और क़ीमती मूल्य मिलकर एक ऐसा चरित्र बनाते हैं जो एक दुर्लभ गहना की तरह चमकता है, जो मार्गदर्शन प्रदान करता है जो बुद्धिमान और वास्तव में मूल्यवान दोनों है।'
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
