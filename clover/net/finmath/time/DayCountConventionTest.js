var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":214,"id":48184,"methods":[{"el":65,"sc":2,"sl":30},{"el":76,"sc":2,"sl":67},{"el":93,"sc":2,"sl":78},{"el":106,"sc":2,"sl":95},{"el":119,"sc":2,"sl":108},{"el":135,"sc":2,"sl":121},{"el":166,"sc":2,"sl":137},{"el":213,"sc":2,"sl":168}],"name":"DayCountConventionTest","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_153":{"methods":[{"sl":30}],"name":"testDayCountConvention_ACT_ACT_ISDA","pass":true,"statements":[{"sl":32},{"sl":34},{"sl":39},{"sl":40},{"sl":43},{"sl":44},{"sl":47},{"sl":48},{"sl":51},{"sl":52},{"sl":55},{"sl":56},{"sl":59},{"sl":60},{"sl":63},{"sl":64}]},"test_205":{"methods":[{"sl":95}],"name":"testDayCountConvention_ACT_365","pass":true,"statements":[{"sl":97},{"sl":99},{"sl":101},{"sl":102},{"sl":104},{"sl":105}]},"test_302":{"methods":[{"sl":67}],"name":"testDayCountConventionAdditivity_ACT_ACT_ISDA","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":74},{"sl":75}]},"test_391":{"methods":[{"sl":137}],"name":"testDayCountConventionAdditivity_ACT_ACT_ICMA","pass":true,"statements":[{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":147},{"sl":148},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":162},{"sl":163},{"sl":164},{"sl":165}]},"test_425":{"methods":[{"sl":108}],"name":"testDayCountConvention_ACT_360","pass":true,"statements":[{"sl":110},{"sl":112},{"sl":114},{"sl":115},{"sl":117},{"sl":118}]},"test_562":{"methods":[{"sl":78}],"name":"testDayCountConvention_30E_360","pass":true,"statements":[{"sl":80},{"sl":82},{"sl":87},{"sl":88},{"sl":91},{"sl":92}]},"test_584":{"methods":[{"sl":121}],"name":"testDayCountConvention_ACT_ACT_YEARFRAC","pass":true,"statements":[{"sl":123},{"sl":125},{"sl":127},{"sl":128},{"sl":130},{"sl":131},{"sl":133},{"sl":134}]},"test_94":{"methods":[{"sl":168}],"name":"testDayCountConventionConsistency_ACT_ACT_ICMA_versus_ACT_ACT_ISDA","pass":true,"statements":[{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":179},{"sl":181},{"sl":183},{"sl":195},{"sl":207},{"sl":208},{"sl":209},{"sl":211}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [153], [], [153], [], [153], [], [], [], [], [153], [153], [], [], [153], [153], [], [], [153], [153], [], [], [153], [153], [], [], [153], [153], [], [], [153], [153], [], [], [153], [153], [], [], [302], [], [302], [], [], [302], [302], [302], [302], [], [], [562], [], [562], [], [562], [], [], [], [], [562], [562], [], [], [562], [562], [], [], [205], [], [205], [], [205], [], [205], [205], [], [205], [205], [], [], [425], [], [425], [], [425], [], [425], [425], [], [425], [425], [], [], [584], [], [584], [], [584], [], [584], [584], [], [584], [584], [], [584], [584], [], [], [391], [], [391], [391], [391], [391], [391], [391], [], [391], [391], [391], [], [391], [391], [391], [], [391], [391], [391], [391], [], [391], [], [], [391], [391], [391], [391], [], [], [94], [], [], [], [], [94], [94], [94], [94], [94], [], [94], [], [94], [], [94], [], [], [], [], [], [], [], [], [], [], [], [94], [], [], [], [], [], [], [], [], [], [], [], [94], [94], [94], [], [94], [], [], []]