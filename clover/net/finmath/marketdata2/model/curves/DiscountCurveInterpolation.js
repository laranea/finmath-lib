var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":507,"id":8261,"methods":[{"el":54,"sc":2,"sl":52},{"el":68,"sc":2,"sl":64},{"el":84,"sc":2,"sl":80},{"el":111,"sc":2,"sl":99},{"el":132,"sc":2,"sl":125},{"el":156,"sc":2,"sl":145},{"el":165,"sc":4,"sl":164},{"el":168,"sc":2,"sl":158},{"el":186,"sc":2,"sl":178},{"el":191,"sc":4,"sl":190},{"el":194,"sc":2,"sl":188},{"el":225,"sc":2,"sl":213},{"el":250,"sc":2,"sl":244},{"el":284,"sc":2,"sl":270},{"el":306,"sc":2,"sl":298},{"el":337,"sc":2,"sl":325},{"el":369,"sc":2,"sl":355},{"el":390,"sc":2,"sl":380},{"el":412,"sc":2,"sl":401},{"el":453,"sc":2,"sl":416},{"el":470,"sc":2,"sl":463},{"el":487,"sc":2,"sl":478},{"el":491,"sc":2,"sl":489},{"el":496,"sc":2,"sl":493},{"el":501,"sc":2,"sl":498},{"el":506,"sc":2,"sl":503}],"name":"DiscountCurveInterpolation","sl":43}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_220":{"methods":[{"sl":80},{"sl":99},{"sl":125},{"sl":145},{"sl":158},{"sl":164},{"sl":489},{"sl":493},{"sl":503}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":83},{"sl":104},{"sl":106},{"sl":107},{"sl":110},{"sl":131},{"sl":150},{"sl":151},{"sl":152},{"sl":155},{"sl":163},{"sl":165},{"sl":167},{"sl":490},{"sl":495},{"sl":505}]},"test_260":{"methods":[{"sl":52},{"sl":178},{"sl":188},{"sl":190},{"sl":489},{"sl":493},{"sl":503}],"name":"testForwardCurveFromDiscountCurve","pass":true,"statements":[{"sl":53},{"sl":179},{"sl":181},{"sl":182},{"sl":185},{"sl":189},{"sl":191},{"sl":193},{"sl":490},{"sl":495},{"sl":505}]},"test_372":{"methods":[{"sl":52},{"sl":178},{"sl":188},{"sl":190},{"sl":489},{"sl":493},{"sl":503}],"name":"testForwardCurveFromDiscountCurve","pass":true,"statements":[{"sl":53},{"sl":179},{"sl":181},{"sl":182},{"sl":185},{"sl":189},{"sl":191},{"sl":193},{"sl":490},{"sl":495},{"sl":505}]},"test_504":{"methods":[{"sl":80},{"sl":99},{"sl":125},{"sl":145},{"sl":158},{"sl":164},{"sl":489},{"sl":493},{"sl":503}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":83},{"sl":104},{"sl":106},{"sl":107},{"sl":110},{"sl":131},{"sl":150},{"sl":151},{"sl":152},{"sl":155},{"sl":163},{"sl":165},{"sl":167},{"sl":490},{"sl":495},{"sl":505}]},"test_544":{"methods":[{"sl":80},{"sl":99},{"sl":125},{"sl":145},{"sl":158},{"sl":164},{"sl":489},{"sl":493},{"sl":503}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":83},{"sl":104},{"sl":106},{"sl":107},{"sl":110},{"sl":131},{"sl":150},{"sl":151},{"sl":152},{"sl":155},{"sl":163},{"sl":165},{"sl":167},{"sl":490},{"sl":495},{"sl":505}]},"test_72":{"methods":[{"sl":52},{"sl":178},{"sl":188},{"sl":190},{"sl":489},{"sl":493},{"sl":503}],"name":"testForwardCurveFromDiscountCurve","pass":true,"statements":[{"sl":53},{"sl":179},{"sl":181},{"sl":182},{"sl":185},{"sl":189},{"sl":191},{"sl":193},{"sl":490},{"sl":495},{"sl":505}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [260, 72, 372], [260, 72, 372], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [220, 544, 504], [], [], [220, 544, 504], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [220, 544, 504], [], [], [], [], [220, 544, 504], [], [220, 544, 504], [220, 544, 504], [], [], [220, 544, 504], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [220, 544, 504], [], [], [], [], [], [220, 544, 504], [], [], [], [], [], [], [], [], [], [], [], [], [], [220, 544, 504], [], [], [], [], [220, 544, 504], [220, 544, 504], [220, 544, 504], [], [], [220, 544, 504], [], [], [220, 544, 504], [], [], [], [], [220, 544, 504], [220, 544, 504], [220, 544, 504], [], [220, 544, 504], [], [], [], [], [], [], [], [], [], [], [260, 72, 372], [260, 72, 372], [], [260, 72, 372], [260, 72, 372], [], [], [260, 72, 372], [], [], [260, 72, 372], [260, 72, 372], [260, 72, 372], [260, 72, 372], [], [260, 72, 372], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [220, 260, 72, 544, 504, 372], [220, 260, 72, 544, 504, 372], [], [], [220, 260, 72, 544, 504, 372], [], [220, 260, 72, 544, 504, 372], [], [], [], [], [], [], [], [220, 260, 72, 544, 504, 372], [], [220, 260, 72, 544, 504, 372], [], []]