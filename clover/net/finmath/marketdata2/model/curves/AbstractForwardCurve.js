var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":178,"id":7524,"methods":[{"el":70,"sc":2,"sl":52},{"el":89,"sc":2,"sl":82},{"el":107,"sc":2,"sl":99},{"el":115,"sc":2,"sl":112},{"el":142,"sc":2,"sl":120},{"el":160,"sc":2,"sl":151},{"el":165,"sc":2,"sl":162},{"el":169,"sc":2,"sl":167},{"el":173,"sc":2,"sl":171},{"el":177,"sc":2,"sl":175}],"name":"AbstractForwardCurve","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1012":{"methods":[{"sl":52},{"sl":82}],"name":"testForwardCurveFromDiscountCurve","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88}]},"test_1053":{"methods":[{"sl":52},{"sl":82},{"sl":99},{"sl":112},{"sl":120},{"sl":162},{"sl":167},{"sl":171},{"sl":175}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":122},{"sl":123},{"sl":164},{"sl":168},{"sl":172},{"sl":176}]},"test_1075":{"methods":[{"sl":52},{"sl":82}],"name":"testForwardCurveFromDiscountCurve","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88}]},"test_1122":{"methods":[{"sl":52},{"sl":82},{"sl":99},{"sl":112},{"sl":120},{"sl":162},{"sl":167},{"sl":171},{"sl":175}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":122},{"sl":123},{"sl":164},{"sl":168},{"sl":172},{"sl":176}]},"test_257":{"methods":[{"sl":52},{"sl":82},{"sl":99},{"sl":112},{"sl":120},{"sl":162},{"sl":167},{"sl":171},{"sl":175}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":122},{"sl":123},{"sl":164},{"sl":168},{"sl":172},{"sl":176}]},"test_415":{"methods":[{"sl":52},{"sl":82},{"sl":99},{"sl":112},{"sl":120},{"sl":162},{"sl":167},{"sl":171},{"sl":175}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":122},{"sl":123},{"sl":164},{"sl":168},{"sl":172},{"sl":176}]},"test_471":{"methods":[{"sl":99},{"sl":120},{"sl":167}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":122},{"sl":123},{"sl":168}]},"test_484":{"methods":[{"sl":52},{"sl":82}],"name":"testForwardCurveFromDiscountCurve","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88}]},"test_574":{"methods":[{"sl":52},{"sl":82}],"name":"testForwardCurveFromDiscountCurve","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88}]},"test_584":{"methods":[{"sl":52},{"sl":82}],"name":"testForwardCurveFromDiscountCurve","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88}]},"test_764":{"methods":[{"sl":52},{"sl":82},{"sl":99},{"sl":112},{"sl":120},{"sl":162},{"sl":167},{"sl":171},{"sl":175}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":122},{"sl":123},{"sl":164},{"sl":168},{"sl":172},{"sl":176}]},"test_901":{"methods":[{"sl":99},{"sl":120},{"sl":167}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":122},{"sl":123},{"sl":168}]},"test_905":{"methods":[{"sl":52},{"sl":82}],"name":"testForwardCurveFromDiscountCurve","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88}]},"test_985":{"methods":[{"sl":52},{"sl":82},{"sl":99},{"sl":112},{"sl":120},{"sl":162},{"sl":167},{"sl":171},{"sl":175}],"name":"testCurvesAndCalibration","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":88},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":122},{"sl":123},{"sl":164},{"sl":168},{"sl":172},{"sl":176}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1012, 1053, 1075, 415, 764, 905, 574, 257, 985, 1122, 484, 584], [], [], [], [], [], [], [], [], [], [1012, 1053, 1075, 415, 764, 905, 574, 257, 985, 1122, 484, 584], [1012, 1053, 1075, 415, 764, 905, 574, 257, 985, 1122, 484, 584], [1012, 1053, 1075, 415, 764, 905, 574, 257, 985, 1122, 484, 584], [1012, 1053, 1075, 415, 764, 905, 574, 257, 985, 1122, 484, 584], [], [1012, 1053, 1075, 415, 764, 905, 574, 257, 985, 1122, 484, 584], [], [1012, 1053, 1075, 415, 764, 905, 574, 257, 985, 1122, 484, 584], [], [], [], [], [], [], [], [], [], [], [], [], [1012, 1053, 1075, 415, 764, 905, 574, 257, 985, 1122, 484, 584], [], [], [], [], [], [1012, 1053, 1075, 415, 764, 905, 574, 257, 985, 1122, 484, 584], [], [], [], [], [], [], [], [], [], [], [471, 1053, 415, 764, 901, 257, 985, 1122], [471, 1053, 415, 764, 901, 257, 985, 1122], [471, 1053, 415, 764, 901, 257, 985, 1122], [471, 1053, 415, 764, 901, 257, 985, 1122], [], [471, 1053, 415, 764, 901, 257, 985, 1122], [471, 1053, 415, 764, 901, 257, 985, 1122], [471, 1053, 415, 764, 901, 257, 985, 1122], [], [], [], [], [], [1053, 415, 764, 257, 985, 1122], [], [1053, 415, 764, 257, 985, 1122], [], [], [], [], [], [471, 1053, 415, 764, 901, 257, 985, 1122], [], [471, 1053, 415, 764, 901, 257, 985, 1122], [471, 1053, 415, 764, 901, 257, 985, 1122], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1053, 415, 764, 257, 985, 1122], [], [1053, 415, 764, 257, 985, 1122], [], [], [471, 1053, 415, 764, 901, 257, 985, 1122], [471, 1053, 415, 764, 901, 257, 985, 1122], [], [], [1053, 415, 764, 257, 985, 1122], [1053, 415, 764, 257, 985, 1122], [], [], [1053, 415, 764, 257, 985, 1122], [1053, 415, 764, 257, 985, 1122], [], []]