// Imports
import {TMenuMap, TMenuName, TMenuState} from "../types";

// Utils
export const getMenu = (menuState: TMenuState): number[] => {
  if (menuState.diacriticKey > 0) return menuMap[2000];
  if (Object.keys(menuMap).indexOf(menuState.menuKey.toString()) > -1) return menuMap[menuState.menuKey];
  return menuMap[1000];
}

export const getMenuName = (menuState: TMenuState): string => {
  let menuType = "Menu";
  if (menuState.diacriticKey > 0) menuType = "Diacritic Menu";
  return `${menuNameMap[menuState.menuKey]} ${menuType}`
}

const menuNameMap: TMenuName = {
  1000: "Home",
  15214: "Long Vertical",
  14960: "Short Vertical",
  17449: "Long Horizontal",
  15474: "Short Horizontal",
  24883: "Long Diagonal",
  17700: "Short Diagonal",
  14417: "Large Shallow Curve",
  17705: "Small Shallow Curve",
  13403: "Large Deep Curve",
  21061: "Small Deep Curve",
  17462: "Large Circle",
  15666: "Small Circle",
  13607: "Large Triangle",
  14166: "Small Triangle",
  13934: "Large Square",
  17717: "Small Square",
  23431: "Horizontal Rectangle",
  15962: "Vertical Rectangle",
  15656: "Large Half Circle",
  14905: "House",
  12374: "Mathematical",



  15742: "Numbers",
  12324: "Pointer",
  17983: "Direction",
  25011: "Uppercase Letters",
  12366: "Lowercase Letters",
  13867: "Dot",
  8485: "Punctuation",
  18232: "Wheels",
  14647: "Cross",
  17252: "Asterix",
  23476: "IO",
  15923: "Container",
  26054: "Animals",
  14626: "People",
  16161: "Person",
}

// Menus
const menuMap: TMenuMap = {
  // Home Menus
  1000: [
    15214, 14960, 17449, 15474, 24883, 17700, 14417, 17705, 13403, 21061, 17462, 15666,
    13607, 14166, 13934, 17717, 23431, 15962, 15656, 14905, 12374, 13867, 18232,
    14647, 17252, 23476, 15923, 16161, 14626, 26054, 25011, 12366, 15742,
    12324, 17983, 8485,
  ],

  // Indicator Menus
  2000: [
    3333, 8993, 24665, 8998, 8996, 8997, 8994, 9003, 9001, 9006, 9007, 9008,
    9002, 9009, 9010, 9011, 24667, 24670, 8995, 9000, 9005, 8999, 9004,
    24675, 24807, 24674, 24677,
  ],

  // Long Vertical
  15214: [
    15214, 15964, 24934, 25546, 12656, 12348, 12669, 25548, 23409, 25396, 25560, 23958,
    16499, 15689, 13613, 24210, 14704, 15998, 25577, 15187, 25604, 14667, 14180,
    15927, 17221, 16674, 23250, 23117, 25564, 15460, 25585, 15682, 23904,
    16736,15454,
  ],

  // Short Vertical
  14960: [
    14960, 25586, 16984, 24938, 15193, 15443, 25607, 25559, 25522, 17739, 14403, 17982,
    16181, 24309, 13094, 12577, 18284, 13916, 13148, 17747, 16165, 25609, 12578,
    14690, 20518, 24941, 12912, 25529, 13157,
  ],

  // Long Horizontal
  17449: [
    17449, 17969, 23619, 27113, 13901, 12402, 15737, 18236, 16193, 17773, 25783, 25633,
    15672, 12640, 22625, 14958, 25610, 18279, 16163, 14638, 17006, 22583, 14374,
    13942, 18278, 21098, 16430, 25611, 13346, 25612, 16186, 16495, 15981,
    25553, 21282, 15422, 15953, 20769,
  ],

  // Short Horizontal
  15474: [
    15474, 26165, 15918, 24918, 24917, 12333, 24909, 24875, 24806, 17520, 25748, 23955,
    23952, 23803, 23929, 23966, 23809, 18293, 17247, 24761, 15678, 24944, 25528,
    15986, 12600,
  ],

  // Long Diagonal
  24883: [
    24883, 13675, 14666, 14389, 15159, 16212, 24962, 25588, 17233, 18043, 14421, 13158,
    16727, 22067, 23859, 25556, 12376, 16206, 25543, 25547, 15991, 12857, 21624,
    15691, 25526, 13922, 16234, 12334, 21589, 13949, 15701, 15732, 17017,
    17506, 25618, 25619, 12356, 23886, 15209, 13918, 25290, 17235, 23629, 24852,
  ],

  // Short Diagonal
  17700: [
    17700, 12321, 23627, 13100, 17707, 12351, 23179, 12335, 14943, 25554, 25520, 14381,
    26059, 26060, 14891, 17726, 22574, 12359, 16420, 17209, 13638, 15912, 15425,
    14151, 25597, 17966, 24482, 16164, 16481, 16479, 15928, 16224,
  ],

  // Large Shallow Curve
  14417: [
    14417, 15975, 24750, 25568, 22837, 12642, 15987, 16246, 15183, 25613, 13946, 15190,
    13096,21807, 15952, 15651, 12623, 15719, 13950, 23942, 13894, 17216, 15172,
    15712, 13895, 24176, 12405, 15983, 23819, 23818, 23959,
  ],

  // Small Shallow Curve
  17705: [
    17705, 12352, 15736, 21082, 14660, 14636, 14625, 24726, 15180, 23658, 16505, 14173,
    13145, 25777, 18209, 15914, 21880, 17472, 13367, 24302, 17226, 12631, 25615,
    16188, 15917, 14183, 25600, 16739, 14696, 24920, 25878, 25616, 13092,
    17775, 14116, 12894, 17783, 13424, 25626, 15969, 24015, 18259, 20571, 15200, 16688,
  ],

  // Large Open Deep Curve
  13403: [
    13403, 23817, 25535, 15471, 25536, 13627, 12580, 25635, 24717, 25562, 14883, 12902,
    24916, 24913, 17961, 25538, 25539, 21607, 15925, 24846, 24216, 15441, 15726,
    13401, 25569, 25523, 25602, 25434, 24833, 24240, 24903, 25555, 22913,
    24927, 25627, 24249, 24272, 17229, 24889,
  ],

  // Small Deep Curve
  21061: [
    21061, 15960, 17189, 17190, 14895, 17188, 14655, 15144, 15703, 16966, 25550, 14955,
    24443, 25524, 12621, 24739, 24895, 14114, 14139, 25379, 15484, 13093, 23230,
    23223, 13101, 14921, 22369, 20517, 14443, 14164, 13687, 20563, 20564,
    21044, 24961, 25132, 14396, 15399,
  ],

  // Large Circle
  17462: [
    17462, 13639, 25601, 16675, 15208, 21540, 13912, 13395, 13936, 25525, 24451, 25582,
    14689, 15406, 15741, 15740, 12592, 17732, 15212, 13892, 12622, 15452, 17244,
    22107, 18289, 15730, 26211, 13902, 26245, 17219, 26246, 18224, 26212,
  ],

  // Small Circle
  15666: [
    15666, 13685, 14377, 13881, 13377, 17238, 20522, 25558, 14136, 14134, 15218, 22561,
    14424, 14205, 17259, 25563, 12880, 13380, 21849, 15152, 12882, 14405, 12666,
    13623, 14635, 16939, 16208, 13159, 16463, 25608, 25617, 16196, 24778,
    15933, 17278, 18004, 18005, 18006, 15920, 14422, 26050, 12919, 14206, 17958, 23833,
  ],

  // Large Triangle
  13607: [
    13607, 23583, 13134, 13632, 25574, 17786, 16443, 15663, 22613, 23439, 16194, 16735,
    21036, 14451, 21040, 20561, 17251, 26057, 17999, 21363,
  ],

  // Small Triangle
  14166: [
    14166, 23127, 17759, 17708, 14428, 16751, 17267, 20519, 22059, 14659, 22375, 17755,
    17517, 25567, 13124, 25822, 22060, 25614, 13138, 18221, 13910, 12649, 16177,
  ],

  // Large Square
  13934: [
    13934, 14932, 18256, 18257, 24904, 12360, 25631, 25532, 16954, 16227, 16745, 17008,
    13111, 12393, 17273, 22577, 15463, 14412, 15464, 16975, 17758, 12881, 17760,
    14450, 14203, 14202, 13626, 12886, 15198, 15966, 13128, 25620, 25537,
    15155, 25549,
  ],

  // Small Square
  17717: [
    17717, 15431, 14457, 25387, 25311, 25408, 25364, 25533, 25621, 25565, 14919, 25570,
    22365, 14193, 13423, 22069, 17007, 13619, 24847, 24825, 25534, 14132, 23690,
    15166, 13365, 13366, 17205, 17248, 12860,
  ],

  // Horizontal Rectangle
  23431: [
    23431, 22371, 22592, 20599, 16683, 12895, 16190, 25530, 21116, 23892, 14941, 25573,
    13162, 13874, 12618, 23511, 12908, 13419, 17493, 16953, 23673, 13907, 12868,
    24214, 16187, 23872, 23150, 25339, 25340, 16219,
  ],

  // Vertical Rectangle
  15962: [
    15962, 13115, 23599, 23926, 23927, 16191, 12330, 13621, 15451, 24518, 23240, 21809,
    14442, 20528, 12875, 13622, 12875, 15946, 13140, 13388, 13413, 16182, 18007,
    15995, 22366, 22068,
  ],

  // Large Half Circle
  15656: [
    15656, 14894, 21623, 15649, 22307, 14668, 12869, 22061, 22065, 22066, 20520, 22064,
    22062, 22063, 15206, 24098, 25779, 22834, 13900, 24605, 22600, 13645, 13151,
    13667, 18214, 25587, 25594, 12616, 15162, 21297, 25629, 14149, 13400,
    14188, 23204, 23044, 23706, 16992, 23124, 13864, 17473, 15419, 25593, 23854, 26197,
  ],

  // House
  14905: [
    14905, 25591, 24859, 25605, 26045, 13168, 26043, 23026, 26047, 23085, 26044, 23029,
    26046, 23089, 23201, 23193, 26063, 17441, 26048, 18287, 14167, 26049, 24281,
    23437, 22618,
  ],

  // Mathematical
  12374: [
    12374, 12663, 18267, 25596, 25595, 24912, 13857, 12339, 24925, 8490,
  ],











  // Dot
  13867: [
    13867, 12350, 8483, 12873, 15972, 23839, 13914, 23871, 22116, 14133,
    25557, 22362, 23589, 15472, 24198, 15929, 25480, 15948, 8486, 8487,
    16233, 16749, 24940, 17445, 24515, 17720, 17697, 8488, 16482, 8489,
    12322, 12591, 25579, 14708, 14947, 14973, 15942, 26051, 26052, 26053,
    25628,
  ],

  // Wheels (Done)
  18232: [
    18232, 25119, 17779, 17734, 14701, 12357, 18233, 21820, 25625, 13127, 16452, 13120,
    16685, 18010, 13121, 26062, 26061, 16678, 16997, 18028, 21813, 25624, 13113,
    14420, 24332, 13089, 17781, 17504, 23472, 17765,
  ],
  
  // Cross
  14647: [
    14647, 15661, 24879, 16205, 14430, 13175, 15673, 25362, 24855, 18036,
  ],

  // Asterix
  17252: [
    17252, 13384, 17192, 17195, 18034, 12843,
  ],

  // IO
  23476: [
    23476, 23475, 23500, 24638, 25552, 15432, 25551,
  ],

  // Container
  15923: [
    15923, 13866, 16687, 14185, 24120, 13378, 13139, 13414, 18033, 16229,
    22584, 16701, 25575, 13690, 23603, 16709, 17218, 24949, 22578, 22579,
  ],

  // Person
  16161: [
    16161, 23577, 20568, 16166, 15417, 14145, 15968, 21090, 17237, 21093,
    21054, 24051, 26055, 26056, 26058, 13615, 18029, 26040, 26041, 26042,
    13929, 17996, 15700, 16426, 16964, 16974, 17265, 12842, 12899, 25590,
    13161, 17994, 12870, 25580, 13169, 12644, 14384, 14661, 15699, 14138,
    13097, 14431, 12609, 13944, 15994, 15189, 14379, 14713, 15188, 14700,
    17745, 14924, 25578, 25531, 16162, 12604,
  ],

  // People
  14626: [
    14626, 14627, 14628, 14629, 14630, 14631, 14632, 17967, 21091, 12391,
    16180, 15416, 13349, 13425, 13427, 14144, 14157, 14914, 23576, 17260,
    17261, 20572, 21092, 18269, 23581, 15662, 15157, 13156, 17516, 18251,
    26323, 12603, 12596, 25812, 12607, 13166, 12341, 12888, 14439, 14170,
    25710, 25711, 25712,
  ],





  // Animals
  26054: [
    26054, 17496, 23702, 24155, 24196, 12917, 17959, 15226, 24801, 24897,
    25681, 13354, 13355, 14371, 14415, 23477, 12378, 12636, 13110, 12383,
    12380, 13885, 14438, 23097, 23527, 14897, 15978, 16175, 12379, 12381,
    12389, 14714, 16501, 25632, 14896, 25571, 25572, 25521, 12837, 25267,
    12840, 12655,
  ],

  // Uppercase Letters
  25011: [
    25011, 8551, 8552, 8553, 8554, 8555, 8556, 8557, 8558, 8559,
    8560, 8561, 8562, 8563, 8564, 8565, 8566, 8567, 8568, 8569,
    8570, 8571, 8572, 8573, 8574, 8575, 8576,
  ],

  // Lowercase Letters
  12366: [
    12366, 8521, 8522, 8523, 8524, 8525, 8526, 8527, 8528, 8529,
    8530, 8531, 8532, 8533, 8534, 8535, 8536, 8537, 8538, 8539,
    8540, 8541, 8542, 8543, 8544, 8545, 8546,
  ],

  // Numbers
  15742: [
    15742, 24937, 24880, 24932, 26064, 24906, 26065, 26066, 8496, 8497,
    8498, 8499, 8500, 8501, 8502, 8503, 8504, 8505, 8510, 8511,
    8512, 8513, 8514, 8515, 8516, 8517, 8518, 8519,
  ],

  // Direction (Remove 8)
  17983: [
    17983, 14427, 24887, 17255, 13869, 24422, 22105, 16455, 13935, 12658,
    24890, 21841, 14390, 12354, 12610, 21855, 24884, 17724, 17451, 24445,
    24899, 16451, 16677, 18255, 12613, 23488, 13871, 25401, 13870, 22386,
    15476, 22384, 22377, 24714, 24727, 16976, 25406, 13649, 14926, 23542,
    23550, 24805, 24926, 24891, 25581, 25583, 25584, 25589, 25592, 25599,
    25603, 25630, 20524, 17987, 17986, 25544, 25545,
  ],

  // Pointer
  12324: [
    12324, 14382, 12367, 16480, 16437, 16167, 22599, 22598, 12916, 25134,
    15944, 23169, 17257, 16968, 25070, 25133, 15943, 16254, 14952, 25598,
    25606, 25622, 25634, 25636, 25972, 25894, 25895, 25896, 25527, 25566,
  ],

  // Punctuation
  8485: [
    8485, 18237, 22911, 14128, 22914, 16445, 18229, 16713, 8484, 13382,
    13143, 13863, 16232, 21541, 25576,
  ],

  // Relationships?
  // 25540, 25541, 25713,
};
