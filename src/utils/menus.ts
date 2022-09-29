// Imports
import { IMenuMap } from "../types";

// Utils
export const getMenu = (menuState: any): number[] => {
  if (menuState.diacriticKey > 0) return menuMap[2000];
  if (Object.keys(menuMap).indexOf(menuState.menuKey.toString()) > -1) return menuMap[menuState.menuKey];
  return menuMap[1000];
}

// Menus
const menuMap: IMenuMap = {
  // Home Menus
  1000: [
    15214, 13901, 15991, 24883, 14417, 13403, 17462, 13607, 13934, 14164,
    14960, 15474, 12321, 17700, 17705, 21061, 15666, 14166, 17717, 23431,
    15962, 15742, 12374, 12324, 17983, 25011, 12366, 13867, 8485, 18232,
    14647, 17252, 23476, 15656, 15923, 14167, 26054, 14626, 16161,
  ],

  // Indicator Menus
  2000: [
    3333, 8993, 8994, 8995, 8996, 8997, 8998, 8999, 9000, 9001, 9002,
    9003, 9004, 9005, 9006, 9007, 9008, 9009, 9010, 9011, 24665,
    24667, 24670,  24674, 24675, 24677, 24807,
  ],

  // Long Vertical
  15214: [
    15214, 23958, 16499, 15964, 24934, 12656, 12348, 12669, 24920, 15689,
    13613, 24210, 14704, 24875, 24806, 12333, 25577, 15187, 25604, 13097,
    14431, 12609, 13944, 15994, 14667, 15703, 24015, 25585, 25548, 25551,
    20528, 17783, 17221, 16674, 15454, 13424, 15998, 17520, 14180, 23250,
    15460, 15927
  ],

  // Long Horizontal
  13901: [
    13901, 12402, 15737, 18236, 15672, 12640, 18279, 16163, 14638, 17449,
    17969, 23619, 15193, 15443, 17006, 14374, 18278, 13942, 16430, 16193,
    22583, 17773, 13346, 25610,
  ],

  // Long Declining Diagonal
  15991: [
    15991, 17235, 15673, 25362, 24855, 16479, 15928, 24852, 18036, 12857,
    13922, 21624, 13949, 12334, 16234, 21589, 16212, 16224, 17986, 12376,
    16206, 15189, 14379, 14713, 15188, 14700, 17745, 14924,
  ],

  // Long Inclining Diagonal
  24883: [
    23859, 22067, 22579, 12356, 17017, 23886, 15209, 13675, 13918, 25290,
    17233, 16452, 13120, 23629, 18043, 14421, 13158, 17987, 15701, 25556,
    25578, 25588, 15732, 14666, 14389, 15159, 17966, 25597, 24962,
  ],

  // Large Shallow Curve
  14417: [
    14417, 15975, 22837, 12642, 16246, 15183, 15651, 12623, 15719, 24750,
    15172, 15712, 12837, 25267, 12840, 13895, 15987, 23818, 23819, 23959,
    26197, 13096, 24176, 13894, 25568, 25613, 17216, 13950, 13946,
  ],

  // Large Open Deep Curve
  13403: [
    13403, 15471, 14883, 12902, 24717, 12580, 13401, 24916, 24913, 17961,
    23817, 25535, 25536, 25538, 25539, 25569, 25602, 13627, 25434, 21607,
    24833, 24903, 25555, 24240, 15441, 25562, 24272, 15925, 24846, 24216,
    23230, 15726, 17229, 23223, 25627, 25635, 22913, 24927, 24249, 25523,
  ],

  // Large Circle
  17462: [
    17462, 15208, 21540, 17732, 22107, 13639, 18289, 13395, 13902, 13936,
    24451, 14689, 15406, 15730, 15741, 15740, 17219, 12592, 15212, 12622,
    16675, 13892, 13912, 18224, 25582, 25601, 26211, 26212, 26245, 26246,
    25525,
  ],

  // Large Triangle
  13607: [
    13607, 23583, 13632, 14451, 25574, 20561, 17786, 13134, 16443, 22613,
    15663, 23439, 16194, 16735, 21036, 21040, 13138, 18221, 17251,
  ],

  // Large Square
  13934: [
    13934, 12886, 16745, 12360, 12393, 18257, 24904, 12875, 15463, 15464,
    16975, 12881, 17008, 17273, 18256, 16954, 13874, 13111, 14932, 14412,
    25631, 15966, 13622, 15198, 17760, 22577, 14450, 14203, 14202, 17758,
    13128,
  ],

  // Heart and Odd Shapes (Remove 6)
  14164: [
    14164, 13687, 20563, 21044, 24961, 14396, 15399, 25132, 15981, 16495,
    25553, 21282, 13140, 13388, 13413, 12405, 16966, 15422, 16182, 20564,
    15953, 12600, 20769, 22366, 22369, 15155, 22068, 22618, 23437, 21363,
    25549, 13159, 13864, 14635, 15190, 15419, 15452, 15917, 15983, 15986,
    15995, 16208, 16463, 16939, 16992, 17244, 17473, 18007, 15952, 15946,
    16188,
  ],

  // Short Vertical
  14960: [
    14960, 25559, 16181, 16984, 24917, 24938, 17739, 14403, 24309, 22578,
    13094, 23409, 13148, 17747, 16727, 17982, 18284, 14690, 12578, 20518,
    12912, 24941, 23117, 13626, 16219, 13916, 16186, 16162, 16164, 12577,
    25586, 25607,
  ],

  // Short Horizontal
  15474: [
    15474, 22625, 24918, 24909, 15918, 14958, 23955, 23952, 23803, 23929,
    23809, 15678, 24761, 18293, 23966, 24944, 26165, 25528, 25748, 16165,
    17247, 25609,
  ],

  // Short Declining Diagonal
  12321: [
    12321, 23627, 12351, 13100, 23179, 14381, 25554, 16420, 12335, 14943,
    17707, 17726, 26059, 26060, 17209, 13638, 15912, 15425, 27113, 26057,
    14891, 22574,
  ],

  // Short Inclining Diagonal
  17700: [
    17700, 17506, 12860, 12359, 25396, 25520, 25521, 25522, 25529, 25530,
    25531, 25537, 25540, 25541, 25543, 25544, 25545, 25546, 25547, 25558,
    25560, 25563, 25564, 25571, 25572, 25614, 25620, 25710, 25711, 25712,
    25713, 12843, 14905, 14151, 24482, 16481,
  ],

  // Small Shallow Curve
  17705: [
    17705, 15736, 12352, 14636, 14625, 23658, 16505, 24726, 18259, 17775,
    14116, 12894, 13092, 14183, 17226, 18209, 15914, 21880, 14696, 17190,
    17472, 21082, 23942, 24302, 12631, 14660, 25600, 25615, 25616, 25626,
    25633, 25777, 25783, 25878, 13367, 16739, 13145, 13157, 14173, 20571,
    15969,
  ],

  // Small Deep Curve
  21061: [
    21061, 15960, 14895, 14921, 17188, 17189, 25550, 21807, 13101, 13124,
    23854, 15180, 15200, 16688, 14955, 14655, 15144, 24895, 13093, 20517,
    14114, 14139, 25379, 24739, 12621, 15691,
  ],

  // Small Circle (Remove 8)
  15666: [
    15666, 21098, 24889, 14443, 14377, 13881, 13377, 17238, 20522, 14205,
    17259, 12880, 15920, 15484, 13380, 21849, 14424, 15152, 18005, 18006,
    14422, 12882, 22561, 15218, 12604, 12919, 14405, 12666, 15682, 23904,
    16736, 13623, 13685, 14134, 14136, 25526, 25608, 25611, 25612, 25617,
    25618, 25619, 16196, 17958, 26050, 23833, 24443, 24778, 25524, 14206,
    15933, 17278, 18004,
  ],

  // Small Triangle
  14166: [
    14166, 13910, 17999, 12649, 16177, 23127, 17759, 17708, 14428, 16751,
    17267, 20519, 22059, 14659, 22375, 17755, 17517, 25567, 25822, 22060,
  ],

  // Small Square
  17717: [
    17717, 13365, 14457, 14132, 16227, 24825, 25311, 25387, 25364, 25621,
    25408, 17205, 17248, 15431, 14919, 22365, 17007, 14193, 13423, 22069,
    15166, 13619, 25532, 25533, 25534, 25570, 13366, 25339, 25340, 23690,
    24847, 25565,
  ],

  // Horizontal Rectangle
  23431: [
    23431, 16187, 23872, 22371, 20599, 12895, 22592, 21116, 23892, 14941,
    13162, 12618, 23511, 12908, 13419, 17493, 16953, 23673, 13907, 12868,
    24214, 23150, 25573, 16190, 16683,
  ],

  // Vertical Rectangle
  15962: [
    15962, 13115, 23599, 23926, 23927, 16191, 12330, 13621, 15451, 24518,
    23240, 21809, 14442,
  ],

  // Numbers
  15742: [
    15742, 24937, 24880, 24932, 26064, 24906, 26065, 26066, 8496, 8497,
    8498, 8499, 8500, 8501, 8502, 8503, 8504, 8505, 8510, 8511,
    8512, 8513, 8514, 8515, 8516, 8517, 8518, 8519,
  ],

  // Mathematical
  12374: [
    12374, 13857, 25595, 25596, 12339, 24925, 12663, 18267, 24912, 8490,
  ],

  // Pointer
  12324: [
    12324, 14382, 12367, 16480, 16437, 16167, 22599, 22598, 12916, 25134,
    15944, 23169, 17257, 16968, 25070, 25133, 15943, 16254, 14952, 25598,
    25606, 25622, 25634, 25636, 25972, 25894, 25895, 25896, 25527, 25566,
  ],

  // Direction (Remove 8)
  17983: [
    17983, 14427, 24887, 17255, 13869, 24422, 22105, 16455, 13935, 12658,
    24890, 21841, 14390, 12354, 12610, 21855, 24884, 17724, 17451, 24445,
    24899, 16451, 16677, 18255, 12613, 23488, 13871, 25401, 13870, 22386,
    15476, 22384, 22377, 24714, 24727, 16976, 25406, 13649, 14926, 23542,
    23550, 24805, 24926, 24891, 25581, 25583, 25584, 25589, 25592, 25599,
    25603, 25630, 20524,
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

  // Dot
  13867: [
    13867, 12350, 8483, 12873, 15972, 23839, 13914, 23871, 22116, 14133,
    25557, 22362, 23589, 15472, 24198, 15929, 25480, 15948, 8486, 8487,
    16233, 16749, 24940, 17445, 24515, 17720, 17697, 8488, 16482, 8489,
    12322, 12591, 25579, 14708, 14947, 14973, 15942, 26051, 26052, 26053,
    25628,
  ],

  // Punctuation
  8485: [
    8485, 18237, 22911, 14128, 22914, 16445, 18229, 16713, 8484, 13382,
    13143, 13863, 16232, 21541, 25576,
  ],

  // Wheels
  18232: [
    18232, 13121, 17504, 18028, 16685, 18233, 13113, 14420, 17765, 17779,
    17781, 14701, 18010, 25119, 24332, 17734, 23472, 26061, 26062, 12357,
    21813, 16997, 21820, 16678, 13089, 25624, 25625, 13127,
  ],

  // Cross
  14647: [
    14647, 15661, 24879, 16205, 14430, 13175,
  ],

  // Asterix
  17252: [
    17252, 13384, 17192, 17195, 18034,
  ],

  // IO
  23476: [
    23476, 23475, 23500, 24638, 25552, 15432,
  ],

  // Large Half Circle
  15656: [
    15656, 14894, 21623, 15649, 22307, 14668, 12655, 12869, 22061, 22065,
    22066, 20520, 22064, 15206, 24098, 22834, 13900, 24605, 13645, 13151,
    13667, 18214, 25587, 25594, 25779, 22062, 22063, 22600, 12616, 15162,
    21297, 14149, 13400, 23204, 23706, 14188, 23124, 25629, 23044, 25593,
  ],

  // Container
  15923: [
    15923, 13866, 16687, 14185, 24120, 13378, 13139, 13414, 18033, 16229,
    22584, 16701, 25575, 13690, 23603, 16709, 17218, 24949,
  ],

  // House
  14167: [
    14167, 24281, 23085, 23029, 17441, 18287, 25591, 26043, 26044, 26045,
    26046, 26047, 26048, 26049, 25605, 13168, 23089, 23193, 23201, 23026,
    26063, 24859,
  ],

  // Animals
  26054: [
    26054, 17496, 23702, 24155, 24196, 12917, 17959, 15226, 24801, 24897,
    25681, 13354, 13355, 14371, 14415, 23477, 12378, 12636, 13110, 12383,
    12380, 13885, 14438, 23097, 23527, 14897, 15978, 16175, 12379, 12381,
    12389, 14714, 16501, 25632, 14896,
  ],

  // People
  14626: [
    14626, 14627, 14628, 14629, 14630, 14631, 14632, 17967, 21091, 12391,
    16180, 15416, 13349, 13425, 13427, 14144, 14157, 14914, 23576, 17260,
    17261, 20572, 21092, 18269, 23581, 15662, 15157, 13156, 17516, 18251,
    26323, 12603, 12596, 25812, 12607, 13166, 12341, 12888, 14439, 14170,
  ],

  // Person
  16161: [
    16161, 23577, 20568, 16166, 15417, 14145, 15968, 21090, 17237, 21093,
    21054, 24051, 26055, 26056, 26058, 13615, 18029, 26040, 26041, 26042,
    13929, 17996, 15700, 16426, 16964, 16974, 17265, 12842, 12899, 25590,
    13161, 17994, 12870, 25580, 13169, 12644, 14384, 14661, 15699, 14138,
  ],
};
