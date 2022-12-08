import { ELanguage, TMenuMap, TMenuName, TMenuState } from '../types';

export const getMenu = (menuState: TMenuState): number[] => {
  if (menuState.diacriticKey > 0) return menuMap[2000];
  if (Object.keys(menuMap).indexOf(menuState.menuKey.toString()) > -1)
    return menuMap[menuState.menuKey];
  return menuMap[1000];
};

export const getMenuName = (
  menuState: TMenuState,
  language: ELanguage = ELanguage.English,
): string => {
  let diacritic = '';
  if (menuState.diacriticKey > 0) diacritic = `(${menuNameMap[2000][language]})`;
  return `${menuNameMap[menuState.menuKey][language]} ${diacritic}`;
};

export const getMenuNameFromCharacter = (character: number): number => {
  let menu = 1000;

  Object.values(menuMap).map((x: number[]) => {
    if (x.includes(character)) menu = x[0];
  });

  return menu;
};

const menuNameMap: TMenuName = {
  1000: {
    english: 'Home menu',
    swedish: 'Hemmeny',
    norwegian: 'Hjemmeny',
    finnish: 'Kotivalikko',
    hungarian: 'Főmenü',
    german: 'Home-Menü',
    dutch: 'Startmenu',
    afrikaans: 'Tuis spyskaart',
    russian: 'Главное меню',
    latvian: 'Sākuma izvēlne',
    polish: 'Menu główne',
    french: "Menu d'accueil",
    spanish: 'Menú de inicio',
  },
  2000: {
    english: 'Diacritics',
    swedish: 'Diakritiska tecken',
    norwegian: 'Diakritikk',
    finnish: 'Diakriittiset',
    hungarian: 'Diakritikusok',
    german: 'Diakritische Zeichen',
    dutch: 'Diakritische tekens',
    afrikaans: 'Diakritiese tekens',
    russian: 'Диакритические знаки',
    latvian: 'Diakritiķi',
    polish: 'Znaki diakrytyczne',
    french: 'Diacritiques',
    spanish: 'Diacríticos',
  },
  15214: {
    english: 'Long verticals menu',
    swedish: 'Lång vertikal meny',
    norwegian: 'Lang vertikal meny',
    finnish: 'Pitkä pystysuora valikko',
    hungarian: 'Hosszú függőleges menü',
    german: 'Langes vertikales Menü',
    dutch: 'Lange verticale menu',
    afrikaans: 'Lang vertikale spyskaart',
    russian: 'Меню длинных вертикалей',
    latvian: 'Garās vertikālās izvēlnes',
    polish: 'Długie menu pionowe',
    french: 'Menu vertical long',
    spanish: 'Menú vertical largo',
  },
  14960: {
    english: 'Short verticals menu',
    swedish: 'Kort vertikal meny',
    norwegian: 'Kort vertikal meny',
    finnish: 'Lyhyt pystyvalikko',
    hungarian: 'Rövid függőleges menü',
    german: 'Kurzes vertikales Menü',
    dutch: 'Kort verticale menu',
    afrikaans: 'Kort vertikale spyskaart',
    russian: 'Короткое меню вертикалей',
    latvian: 'Īsa vertikālu izvēlne',
    polish: 'Krótkie menu wertykalne',
    french: 'Menu vertical court',
    spanish: 'Menú vertical corto',
  },
  17449: {
    english: 'Long horizontals menu',
    swedish: 'Lång horisontell meny',
    norwegian: 'Lang horisontal meny',
    finnish: 'Pitkä vaakavalikko',
    hungarian: 'Hosszú vízszintes menü',
    german: 'Langes horizontales Menü',
    dutch: 'Lang horizontaal menu',
    afrikaans: 'Lang horisontale spyskaart',
    russian: 'Меню длинных горизонталей',
    latvian: 'Garās horizontālās izvēlnes',
    polish: 'Długie menu poziome',
    french: 'Menu horizontal long',
    spanish: 'Menú horizontal largo',
  },
  15474: {
    english: 'Short horizontals menu',
    swedish: 'Kort horisontell meny',
    norwegian: 'Kort horisontal meny',
    finnish: 'Lyhyt vaaka-valikko',
    hungarian: 'Rövid vízszintes menü',
    german: 'Kurzes horizontales Menü',
    dutch: 'Kort horizontaal menu',
    afrikaans: 'Kort horisontale spyskaart',
    russian: 'Короткое меню горизонталей',
    latvian: 'Īsa horizontālā izvēlne',
    polish: 'Krótkie menu poziome',
    french: 'Menu horizontal court',
    spanish: 'Menú horizontal corto',
  },
  24883: {
    english: 'Long diagonals menu',
    swedish: 'Meny med långa diagonaler',
    norwegian: 'Meny med lange diagonaler',
    finnish: 'Pitkät diagonaalit valikko',
    hungarian: 'Hosszú átlós menü',
    german: 'Menü mit langen Diagonalen',
    dutch: 'Menu lange diagonalen',
    afrikaans: 'Lang diagonale spyskaart',
    russian: 'Меню длинных диагоналей',
    latvian: 'Garās diagonāles izvēlne',
    polish: 'Menu długich przekątnych',
    french: 'Menu longues diagonales',
    spanish: 'Menú de diagonales largas',
  },
  17700: {
    english: 'Short diagonals menu',
    swedish: 'Kort diagonal meny',
    norwegian: 'Kort diagonal meny',
    finnish: 'Lyhyet diagonaalit valikko',
    hungarian: 'Rövid átlós menü',
    german: 'Kurzes Diagonalmenü',
    dutch: 'Menu korte diagonalen',
    afrikaans: 'Kort diagonale spyskaart',
    russian: 'Меню коротких диагоналей',
    latvian: 'Īsu diagonāļu izvēlne',
    polish: 'Menu krótkich przekątnych',
    french: 'Menu diagonales courtes',
    spanish: 'Menú de diagonales cortas',
  },
  14417: {
    english: 'Large shallow curves menu',
    swedish: 'Stor meny med grunda kurvor',
    norwegian: 'Stor grunne kurver meny',
    finnish: 'Suuri matalan käyrän valikko',
    hungarian: 'Nagy, sekély görbék menü',
    german: 'Großes flaches Kurvenmenü',
    dutch: 'Groot menu met ondiepe bochten',
    afrikaans: 'Groot vlak kurwes spyskaart',
    russian: 'Меню больших пологих кривых',
    latvian: 'Liela sekla līkņu izvēlne',
    polish: 'Duże menu płytkich krzywych',
    french: 'Menu de grand courbes peu profondes',
    spanish: 'Menú de gran curvas poco profundas',
  },
  17705: {
    english: 'Small shallow curves menu',
    swedish: 'Små grunda kurvor meny',
    norwegian: 'Meny med små grunne kurver',
    finnish: 'Pienet matalat käyrät valikko',
    hungarian: 'Kis sekély görbék menü',
    german: 'Menü für kleine flache Kurven',
    dutch: 'Menu met kleine ondiepe bochten',
    afrikaans: 'Klein vlak kurwes spyskaart',
    russian: 'Меню малых пологих кривых',
    latvian: 'Mazu seklu līkņu izvēlne',
    polish: 'Małe płytkie menu krzywych',
    french: 'Menu petites courbes peu profondes',
    spanish: 'Menú de pequeñas curvas poco profundas',
  },
  13403: {
    english: 'Large deep curves menu',
    swedish: 'Stor meny med djupa kurvor',
    norwegian: 'Stor meny med dype kurver',
    finnish: 'Suuri syvän käyrän valikko',
    hungarian: 'Nagy, mély ívek menü',
    german: 'Großes Menü für tiefe Kurven',
    dutch: 'Groot menu met diepe bochten',
    afrikaans: 'Groot diep kurwes spyskaart',
    russian: 'Меню больших глубоких кривых',
    latvian: 'Liela dziļo līkņu izvēlne',
    polish: 'Duże głębokie menu krzywych',
    french: 'Menu de grand courbes profondes',
    spanish: 'Menú de gran curvas profundas',
  },
  21061: {
    english: 'Small deep curves menu',
    swedish: 'Små djupa kurvor meny',
    norwegian: 'Meny med små dype kurver',
    finnish: 'Pienet syvät käyrät valikko',
    hungarian: 'Kis mély ívek menü',
    german: 'Menü für kleine tiefe Kurven',
    dutch: 'Menu met kleine diepe bochten',
    afrikaans: 'Klein diep kurwes spyskaart',
    russian: 'Меню малых глубоких кривых',
    latvian: 'Mazo dziļo līkņu izvēlne',
    polish: 'Menu małych głębokich krzywych',
    french: 'Menu petites courbes profondes',
    spanish: 'Menú de pequeñas curvas profundas',
  },
  14636: {
    english: 'Quarter rounds menu',
    swedish: 'Kvartals rundor meny',
    norwegian: 'Kvart runder meny',
    finnish: 'Neljänneskierroksen menu',
    hungarian: 'Negyedkör menü',
    german: 'Menü Viertelrunden',
    dutch: 'Kwartronden menu',
    afrikaans: 'Kwart rondtes spyskaart',
    russian: 'Меню четверти раундов',
    latvian: 'Ceturkšņa kārtas ēdienkarte',
    polish: 'Menu ćwierćwałek',
    french: 'Menu quart de tour',
    spanish: 'Menú de cuartos de vuelta',
  },
  15656: {
    english: 'Large half circles menu',
    swedish: 'Stora halvcirklar meny',
    norwegian: 'Meny med store halvsirkler',
    finnish: 'Iso puoliympyrävalikko',
    hungarian: 'Nagy félkörök menü',
    german: 'Großes Halbkreismenü',
    dutch: 'Grote halve cirkels menu',
    afrikaans: 'Groot halwe sirkels spyskaart',
    russian: 'Меню больших полукругов',
    latvian: 'Lielu pusapļu izvēlne',
    polish: 'Duże menu półokręgów',
    french: 'Menu grand demi-cercle',
    spanish: 'Menú de semicírculos grandes',
  },
  17462: {
    english: 'Large circles menu',
    swedish: 'Meny med stora cirklar',
    norwegian: 'Meny med store sirkler',
    finnish: 'sot ympyrät valikko',
    hungarian: 'Nagy körök menü',
    german: 'Großes Kreismenü',
    dutch: 'Grote cirkels menu',
    afrikaans: 'Groot sirkels spyskaart',
    russian: 'Меню больших кругов',
    latvian: 'Lielo apļu izvēlne',
    polish: 'Menu w dużych kręgach',
    french: 'Menu grands cercles',
    spanish: 'Menú de círculos grandes',
  },
  15666: {
    english: 'Small circles menu',
    swedish: 'Små cirklar meny',
    norwegian: 'Meny for små sirkler',
    finnish: 'Pienet ympyrät valikko',
    hungarian: 'Kis körök menü',
    german: 'Menü für kleine Kreise',
    dutch: 'Kleine cirkels menu',
    afrikaans: 'Klein sirkels spyskaart',
    russian: 'Маленькие круги меню',
    latvian: 'Mazo apļu izvēlne',
    polish: 'Menu małych kółek',
    french: 'Menu petits cercles',
    spanish: 'Menú de círculos pequeños',
  },
  13607: {
    english: 'Large triangles menu',
    swedish: 'Stor trianglar meny',
    norwegian: 'Stor trekants meny',
    finnish: 'Isot kolmiot valikko',
    hungarian: 'Nagy háromszög menü',
    german: 'Großes Dreiecksmenü',
    dutch: 'Menu grote driehoeken',
    afrikaans: 'Groot driehoeke spyskaart',
    russian: 'Меню больших треугольников',
    latvian: 'Lielo trīsstūru izvēlne',
    polish: 'Menu w dużych trójkątach',
    french: 'Menu grands triangles',
    spanish: 'Menú de triángulos grandes',
  },
  14166: {
    english: 'Small triangles menu',
    swedish: 'Små trianglar meny',
    norwegian: 'Meny med små trekanter',
    finnish: 'Pienet kolmiot valikko',
    hungarian: 'Kis háromszögek menü',
    german: 'Kleines Dreiecksmenü',
    dutch: 'Menu kleine driehoekjes',
    afrikaans: 'Klein driehoeke spyskaart',
    russian: 'Меню маленьких треугольников',
    latvian: 'Mazo trīsstūru izvēlne',
    polish: 'Menu małych trójkątów',
    french: 'Menu petits triangles',
    spanish: 'Menú de pequeños triángulos',
  },
  13934: {
    english: 'Large squares menu',
    swedish: 'Meny med stora rutor',
    norwegian: 'Meny med store firkanter',
    finnish: 'Isot neliöt valikko',
    hungarian: 'Nagy négyzetek menü',
    german: 'Menü mit großen Quadraten',
    dutch: 'Grote vierkanten menu',
    afrikaans: 'Groot blokkies spyskaart',
    russian: 'Меню больших квадратов',
    latvian: 'Lielu kvadrātu izvēlne',
    polish: 'Duże kwadraty menu',
    french: 'Menu grands carrés',
    spanish: 'Menú de cuadros grandes',
  },
  17717: {
    english: 'Small squares menu',
    swedish: 'Små rutor meny',
    norwegian: 'Meny med små firkanter',
    finnish: 'Pienet neliöt valikko',
    hungarian: 'Kis négyzetek menü',
    german: 'Kleine Quadrate-Menü',
    dutch: 'Kleine vierkantjes menu',
    afrikaans: 'Klein blokkies spyskaart',
    russian: 'Маленькие квадраты меню',
    latvian: 'Mazo kvadrātu izvēlne',
    polish: 'Małe kwadraty menu',
    french: 'Menu petits carrés',
    spanish: 'Menú de cuadritos pequeños',
  },
  23431: {
    english: 'Horizontal rectangles menu',
    swedish: 'Horisontella rektanglar meny',
    norwegian: 'Horisontale rektangler meny',
    finnish: 'Vaakasuuntaisten suorakulmioiden valikko',
    hungarian: 'Vízszintes téglalapok menü',
    german: 'Menü für horizontale Rechtecke',
    dutch: 'Menu Horizontale rechthoeken',
    afrikaans: 'Horisontale reghoeke spyskaart',
    russian: 'Меню горизонтальных прямоугольников',
    latvian: 'Horizontālo taisnstūru izvēlne',
    polish: 'Menu poziomych prostokątów',
    french: 'Menu rectangles horizontaux',
    spanish: 'Menú de rectángulos horizontales',
  },
  15962: {
    english: 'Vertical rectangles menu',
    swedish: 'Vertikala rektanglar meny',
    norwegian: 'Vertikale rektangler meny',
    finnish: 'Pystysuorat suorakulmiot valikko',
    hungarian: 'Függőleges téglalapok menü',
    german: 'Menü für vertikale Rechtecke',
    dutch: 'Menu Verticale rechthoeken',
    afrikaans: 'Vertikale reghoeke spyskaart',
    russian: 'Меню вертикальных прямоугольников',
    latvian: 'Vertikālo taisnstūru izvēlne',
    polish: 'Menu z pionowymi prostokątami',
    french: 'Menu rectangles verticaux',
    spanish: 'Menú de rectángulos verticales',
  },
  14905: {
    english: 'Houses menu',
    swedish: 'Husens meny',
    norwegian: 'Hus meny',
    finnish: 'Talojen menu',
    hungarian: 'Házak menü',
    german: 'Menü Häuser',
    dutch: 'Huizen menu',
    afrikaans: 'Huise spyskaart',
    russian: 'Меню домов',
    latvian: 'Māju ēdienkarte',
    polish: 'Menu domów',
    french: 'Menu des maisons',
    spanish: 'Menú de casas',
  },
  15923: {
    english: 'Containers menu',
    swedish: 'Behållar meny',
    norwegian: 'Beholder meny',
    finnish: 'Kontit-valikko',
    hungarian: 'Konténerek menü',
    german: 'Container-Menü',
    dutch: 'Menu Containers',
    afrikaans: 'Houers spyskaart',
    russian: 'Меню контейнеров',
    latvian: 'Konteineru izvēlne',
    polish: 'Menu pojemników',
    french: 'Menu conteneurs',
    spanish: 'Menú de contenedores',
  },
  18232: {
    english: 'Wheels menu',
    swedish: 'Hjul meny',
    norwegian: 'Hjul meny',
    finnish: 'Pyörät valikko',
    hungarian: 'Kerekek menü',
    german: 'Räder Menü',
    dutch: 'Wielen menu',
    afrikaans: 'Wiele spyskaart',
    russian: 'Меню колес',
    latvian: 'Riteņu izvēlne',
    polish: 'Menu kół',
    french: 'Menu des roues',
    spanish: 'Menú de ruedas',
  },
  12378: {
    english: 'Animals menu',
    swedish: 'Djur meny',
    norwegian: 'Meny med dyr',
    finnish: 'Eläimet menu',
    hungarian: 'Állatok menü',
    german: 'Menü Tiere',
    dutch: 'Dierenmenu',
    afrikaans: 'Diere spyskaart',
    russian: 'Меню животных',
    latvian: 'Dzīvnieku ēdienkarte',
    polish: 'Menu zwierząt',
    french: 'Menu des animaux',
    spanish: 'Menú de animales',
  },
  16161: {
    english: 'Persons menu',
    swedish: 'Person meny',
    norwegian: 'Person meny',
    finnish: 'Henkilöiden valikko',
    hungarian: 'Személyek menü',
    german: 'Menü Personen',
    dutch: 'Personen menu',
    afrikaans: 'Persone spyskaart',
    russian: 'Меню персон',
    latvian: 'Personu ēdienkarte',
    polish: 'Menu osób',
    french: 'Menu personnes',
    spanish: 'Menú de persona',
  },
  12870: {
    english: 'Body and faces menu',
    swedish: 'Meny för kropp och ansikten',
    norwegian: 'Meny for kropp og ansikt',
    finnish: 'Vartalo ja kasvot valikko',
    hungarian: 'Test és arc menü',
    german: 'Körper- und Gesichtsmenü',
    dutch: 'Lichaam en gezichten menu',
    afrikaans: 'Liggaam en gesigte spyskaart',
    russian: 'Меню тела и лица',
    latvian: 'Ķermeņa un sejas izvēlne',
    polish: 'Menu ciała i twarzy',
    french: 'Menu corps et visages',
    spanish: 'Menú de cuerpo y caras',
  },
  14626: {
    english: 'Relationships menu',
    swedish: 'Relationer meny',
    norwegian: 'Relasjoner meny',
    finnish: 'Suhteet-valikko',
    hungarian: 'Kapcsolatok menü',
    german: "Menü 'Beziehungen'",
    dutch: 'Relatiemenu',
    afrikaans: 'Verhoudings spyskaart',
    russian: 'Меню отношений',
    latvian: 'Attiecību izvēlne',
    polish: 'Menu relacji',
    french: 'Menu des relations',
    spanish: 'Menú de relaciones',
  },
  25011: {
    english: 'Uppercase letters menu',
    swedish: 'Menyn för versaler',
    norwegian: 'Meny med store bokstaver',
    finnish: 'Isojen kirjainten valikko',
    hungarian: 'Nagybetűs menü',
    german: 'Menü für Großbuchstaben',
    dutch: 'Menu hoofdletters',
    afrikaans: 'Hoofletters kieslys',
    russian: 'Меню заглавных букв',
    latvian: 'Lielo burtu izvēlne',
    polish: 'Menu wielkich liter',
    french: 'Menu des lettres majuscules',
    spanish: 'Menú de letras mayúsculas',
  },
  12366: {
    english: 'Lowercase letters menu',
    swedish: 'Menyn för små bokstäver',
    norwegian: 'Meny for små bokstaver',
    finnish: 'Pienet kirjaimet valikko',
    hungarian: 'Kisbetűs menü',
    german: 'Menü für Kleinbuchstaben',
    dutch: 'Menu met kleine letters',
    afrikaans: 'Kleinletters-kieslys',
    russian: 'Меню строчных букв',
    latvian: 'Mazo burtu izvēlne',
    polish: 'Menu małych liter',
    french: 'Menu des lettres minuscules',
    spanish: 'Menú de letras minúsculas',
  },
  15742: {
    english: 'Numbers menu',
    swedish: 'Nummer meny',
    norwegian: 'Tall meny',
    finnish: 'Numerot-valikko',
    hungarian: 'Számok menü',
    german: 'Zahlenmenü',
    dutch: 'Cijfermenu',
    afrikaans: 'Getalle spyskaart',
    russian: 'Меню чисел',
    latvian: 'Ciparu izvēlne',
    polish: 'Menu liczb',
    french: 'Menu des chiffres',
    spanish: 'Menú de números',
  },
  17983: {
    english: 'Directions menu',
    swedish: 'Vägbeskrivnings meny',
    norwegian: 'Veibeskrivelse meny',
    finnish: 'Ohjevalikko',
    hungarian: 'Útvonalterv menü',
    german: 'Wegbeschreibungsmenü',
    dutch: 'Routemenu',
    afrikaans: 'Aanwysings spyskaart',
    russian: 'Меню направлений',
    latvian: 'Norādes izvēlne',
    polish: 'Menu wskazówek',
    french: 'Menu itinéraire',
    spanish: 'Menú de indicaciones',
  },
  8485: {
    english: 'Punctuation menu',
    swedish: 'Skiljetecken meny',
    norwegian: 'Tegnsettings meny',
    finnish: 'Välimerkkivalikko',
    hungarian: 'Írásjelek menü',
    german: 'Interpunktionsmenü',
    dutch: 'Interpunctiemenu',
    afrikaans: 'Leestekens spyskaart',
    russian: 'Пунктуационное меню',
    latvian: 'Pieturzīmju izvēlne',
    polish: 'Menu interpunkcyjne',
    french: 'Menu de ponctuation',
    spanish: 'Menú de puntuación',
  },
};

// Menus
const menuMap: TMenuMap = {
  // Home Menus
  1000: [
    15214, 14960, 17449, 15474, 24883, 17700, 14417, 17705, 13403, 21061, 14636, 15656, 17462,
    15666, 13607, 14166, 13934, 17717, 23431, 15962, 14905, 15923, 18232, 12378, 16161, 12870,
    14626, 25011, 12366, 15742, 17983, 8485,
  ],

  // Indicator Menus
  2000: [
    3333, 8993, 24665, 8998, 8996, 8997, 8994, 9003, 9001, 9006, 9007, 9008, 9002, 9009, 9010, 9011,
    24667, 24670, 8995, 9000, 9005, 8999, 9004, 24675, 24807, 24674, 24677,
  ],

  // Long Vertical
  15214: [
    15214, 15964, 24934, 25546, 12656, 12348, 12669, 25622, 25634, 25548, 23409, 25396, 25551,
    25579, 25560, 23958, 13935, 12658, 21841, 17724, 24445, 16499, 22384, 22386, 15689, 13613,
    24210, 14704, 15998, 25577, 15187, 25604, 14667, 14180, 15927, 17221, 16674, 23250, 23117,
    25564, 25630, 15454, 17192, 17195, 18034,
  ],

  // Short Vertical
  14960: [
    14960, 25586, 16984, 24938, 15193, 15443, 25607, 8483, 12873, 25559, 25522, 17739, 14403, 17982,
    16181, 24309, 13094, 12577, 18284, 13916, 13148, 17747, 16165, 25609, 25603, 12578, 14690,
    20518, 24941, 12912, 25529, 13157, 25606, 24884, 24890,
  ],

  // Long Horizontal
  17449: [
    17449, 17969, 15948, 25628, 16749, 23619, 27113, 13901, 12402, 15737, 18236, 16193, 25566,
    24422, 17773, 25633, 15672, 12640, 25527, 25544, 22625, 14958, 25610, 14891, 18279, 16163,
    14638, 17006, 22583, 14374, 13942, 18278, 21098, 25552, 16430, 25611, 13346, 25612, 16186,
    21282, 15422, 15953, 20769,
  ],

  // Short Horizontal
  15474: [
    15474, 26165, 15918, 24918, 24917, 12333, 24909, 24875, 24806, 17520, 25748, 23955, 23952,
    23803, 23929, 23966, 23809, 18293, 17247, 24761, 15678, 24944, 25528, 14973,
  ],

  // Long Diagonal
  24883: [
    24883, 13675, 14666, 14389, 15159, 16212, 16727, 22067, 23859, 25556, 12376, 16206, 25543,
    15991, 12857, 21624, 15691, 25526, 13922, 16234, 12334, 21589, 13949, 15701, 15732, 17017,
    17506, 25618, 25619, 12356, 23886, 15209, 18255, 13918, 25290, 17235, 23629, 24852, 12322,
    15673, 24855, 18036,
  ],

  // Short Diagonal
  17700: [
    17700, 12321, 23627, 13100, 17707, 14708, 13914, 15929, 12591, 12324, 14382, 12351, 12367,
    25972, 17720, 17697, 23179, 12335, 14943, 25554, 25520, 14381, 26059, 26060, 17726, 22574,
    12359, 16420, 16164, 12843, 25598, 16437, 16480, 16479, 15928, 16224, 16167, 14647, 15661,
    24879, 25362, 13690, 23603, 16709, 17218,
  ],

  // Large Shallow Curve
  14417: [
    14417, 15975, 24750, 25568, 22837, 12642, 15987, 16246, 15183, 25613, 13946, 15190, 13096,
    21807, 15952, 15651, 12623, 15719, 13950, 23942, 13894, 17216, 15172, 15712, 13895, 24176,
    12405, 15983, 23819, 23818, 23959, 25480,
  ],

  // Small Shallow Curve
  17705: [
    17705, 12352, 15736, 21082, 14660, 25777, 18209, 15914, 21880, 17472, 13367, 24302, 17226,
    12631, 25615, 13395, 25547, 16188, 14183, 25600, 16739, 14696, 24920, 25878, 25616, 24940,
    23839, 17255, 16455, 16677, 25597,
  ],

  // Large Deep Curve
  13403: [
    13403, 23817, 25535, 15471, 25536, 13627, 12580, 25635, 24717, 25562, 14883, 12902, 21607,
    15925, 24846, 24216, 15441, 15726, 13401, 25602, 25434, 24833, 24926, 25593, 13649, 24482,
    24903, 25555, 24727, 16976, 23542, 14926, 22913, 24927, 24272, 24891, 24714, 21855, 17229,
    24889, 13384, 23475, 23500, 16701, 25575,
  ],

  // Small Deep Curve
  21061: [
    21061, 15960, 17189, 17190, 14895, 17188, 14655, 15144, 15703, 16966, 25550, 14955, 24443,
    25524, 12621, 24739, 24895, 14114, 14139, 25379, 15484, 13093, 23230, 23223, 13101, 14921,
    22369, 20517, 14443, 16205, 17966, 14164, 13687, 20563, 20564, 21044, 24961, 25132, 14396,
    15399, 16495, 15981, 25553,
  ],

  // Quarter Round
  14636: [
    14636, 14625, 24726, 15180, 25783, 23658, 16505, 14173, 14151, 13145, 13092, 17775, 14116,
    12894, 17783, 13424, 25626, 15969, 24015, 18259, 20571, 15200, 16688, 15917, 14405, 12666,
    13623, 14635, 16939, 16208, 13159, 15986, 12600, 15419, 16463, 25608, 25617, 16196, 15933,
    17278, 18004, 18005, 18006,
  ],

  // Large Half Circle
  15656: [
    15656, 14894, 21623, 15649, 24897, 22307, 14668, 12869, 22061, 22065, 22066, 20520, 22064,
    22062, 22063, 15206, 24098, 25779, 22834, 13900, 24605, 22600, 13645, 13151, 13667, 18214,
    25587, 25594, 12616, 15162, 23589, 21297, 25629, 24899, 14149, 13400, 14188, 23204, 23044,
    23706, 16992, 23124, 23854, 26197, 22105,
  ],

  // Large Circle
  17462: [
    17462, 13639, 25601, 16675, 15208, 21540, 13912, 13936, 25525, 24451, 25582, 14689, 15406,
    15741, 15740, 12592, 17732, 15212, 13892, 12622, 15452, 17244, 22107, 18289, 15730, 26211,
    13902, 26245, 17219, 26246, 18224, 26212, 22599, 22598,
  ],

  // Small Circle
  15666: [
    15666, 13685, 14377, 13881, 13377, 17238, 20522, 25558, 14136, 14134, 15218, 22561, 14424,
    14205, 17259, 25563, 12880, 13380, 21849, 15152, 12882, 24778, 15920, 14422, 26050, 12919,
    14206, 17958, 23833, 14133, 26051, 25557, 12916, 25581, 15460, 25585, 15682, 23904, 16736,
    24962, 25588, 17233, 14430, 13175,
  ],

  // Large Triangle
  13607: [
    13607, 23583, 13134, 13632, 25574, 17786, 16443, 15663, 22613, 23439, 16194, 16735, 21036,
    14451, 21040, 20561, 17251, 26057, 17999, 21363, 15472, 15432,
  ],

  // Small Triangle
  14166: [
    14166, 23127, 17759, 17708, 14428, 16751, 17267, 20519, 22059, 14659, 22375, 17517, 25567,
    13124, 25822, 22060, 25614, 13138, 18221, 13910, 12649, 16177,
  ],

  // Large Square
  13934: [
    13934, 14932, 18256, 18257, 24904, 12360, 25631, 25532, 16954, 16227, 16745, 17008, 13111,
    12393, 17273, 22577, 15463, 14412, 15464, 16975, 17758, 12881, 17760, 14450, 13626, 12886,
    15198, 15966, 13128, 15155, 25549, 17445, 15942, 24638, 22584, 24949, 25894, 25895, 25896,
    25134, 15944, 15943, 14952, 16254,
  ],

  // Small Square
  17717: [
    17717, 15431, 14457, 25387, 25311, 25408, 25364, 25533, 25621, 25565, 14919, 25570, 22365,
    14193, 13423, 22069, 17007, 13619, 24847, 24825, 25534, 14132, 23690, 15166, 13365, 13366,
    17205, 17248, 12860, 24515, 22578, 22579, 25070, 25599, 18043, 14421, 13158, 17755, 25133,
    25620, 25537, 23169,
  ],

  // Horizontal Rectangle
  23431: [
    23431, 22371, 22592, 20599, 16683, 12895, 16190, 25530, 21116, 23892, 14941, 25573, 13162,
    13874, 12618, 23511, 12908, 13419, 17493, 16953, 23673, 13907, 12868, 24214, 16187, 23872,
    23150, 25339, 25340, 16219, 24120, 13378, 16229,
  ],

  // Vertical Rectangle
  15962: [
    15962, 13115, 23599, 23926, 23871, 23927, 16191, 12330, 13621, 15451, 24518, 23240, 21809,
    14442, 20528, 12875, 13622, 12875, 15946, 13140, 13388, 13413, 16182, 18007, 15995, 22366,
    22068,
  ],

  // House
  14905: [
    14905, 22116, 25591, 24859, 25605, 26045, 13168, 26043, 23026, 26047, 23085, 26044, 23029,
    26046, 23089, 23201, 23193, 26063, 17441, 26048, 18287, 14167, 26049, 24281, 23437, 22618,
  ],

  // Container
  15923: [15923, 17257, 16968, 13866, 16687, 14185, 13139, 13414, 18033, 14203, 14202],

  // Wheels
  18232: [
    18232, 25119, 17779, 17734, 14701, 12357, 18233, 21820, 25625, 13127, 16452, 13120, 16685,
    18010, 13121, 26062, 26061, 16678, 16997, 18028, 21813, 25624, 13113, 14420, 24332, 13089,
    17781, 17504, 23472, 17765,
  ],

  // Animals
  12378: [
    12378, 15978, 12389, 25632, 23527, 26054, 14415, 16175, 12379, 14896, 12381, 23097, 12917,
    12383, 13354, 12636, 14897, 24155, 24196, 25571, 25572, 14714, 16501, 23702, 13885, 13110,
    12380, 17496, 23477, 14438, 25521, 12655, 17959, 13864, 15226, 25681, 12837, 12840, 25267,
    13355, 14371, 17473, 24801,
  ],

  // Person
  16161: [
    16161, 15416, 18269, 23577, 23576, 23581, 20568, 12603, 12604, 12607, 13166, 12888, 14439,
    17516, 12341, 13097, 14431, 12609, 25531, 16162, 12391, 15157, 13944, 15994, 15189, 14379,
    14713, 15188, 14700, 17745, 25578, 14924, 25636,
  ],

  // Body & Face
  12870: [
    12870, 15700, 13615, 16964, 16974, 18029, 17265, 13161, 26058, 25590, 26041, 24198, 26040,
    25580, 26042, 16426, 12899, 13929, 17994, 17996, 14170, 12842, 14138, 13156, 13169, 14384,
    26053, 16180, 26052, 12644, 26055, 15699, 26323, 26056, 14661,
  ],

  // Relationships
  14626: [
    14626, 14627, 14628, 14629, 14630, 14631, 14632, 17967, 21091, 25712, 25713, 13349, 13425,
    13427, 14144, 14157, 14914, 17260, 17261, 20572, 21092, 12596, 25812, 25710, 25711, 25540,
    25541, 14145, 15968, 21090, 17237, 21093, 18251, 15662, 21054, 24051, 17209, 13638, 15912,
    15425, 16481,
  ],

  // Uppercase Letters
  25011: [
    25011, 8551, 8552, 8553, 8554, 8555, 8556, 8557, 8558, 8559, 8560, 8561, 8562, 8563, 8564, 8565,
    8566, 8567, 8568, 8569, 8570, 8571, 8572, 8573, 8574, 8575, 8576,
  ],

  // Lowercase Letters
  12366: [
    12366, 8521, 8522, 8523, 8524, 8525, 8526, 8527, 8528, 8529, 8530, 8531, 8532, 8533, 8534, 8535,
    8536, 8537, 8538, 8539, 8540, 8541, 8542, 8543, 8544, 8545, 8546,
  ],

  // Numbers
  15742: [
    15742, 24937, 24880, 24240, 24932, 26064, 24906, 26065, 26066, 8496, 8497, 8498, 8499, 8500,
    8501, 8502, 8503, 8504, 8505, 8510, 8511, 8512, 8513, 8514, 8515, 8516, 8517, 8518, 8519,
  ],

  // Direction
  17983: [
    17983, 14427, 24887, 13869, 13871, 25401, 13870, 14390, 12354, 12610, 17451, 16451, 23488,
    12613, 15476, 22377, 23550, 24805, 25583, 25584, 25589, 25592, 20524, 17987, 17986, 25545,
    25627, 24249, 25406,
  ],

  // Punctuation
  8485: [
    8485, 18237, 22911, 14128, 22914, 16445, 18229, 16713, 8484, 13382, 13143, 13863, 16232, 21541,
    25576, 13867, 12350, 16233, 22362, 8486, 8487, 8488, 16482, 8489, 12374, 12663, 18267, 25596,
    25595, 24912, 15972, 13857, 12339, 24925, 8490, 17252, 23476, 14947, 24916, 24913, 17961, 25538,
    25539, 25569, 25523,
  ],
};
