var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":340,"id":14698,"methods":[{"el":74,"sc":2,"sl":60},{"el":100,"sc":2,"sl":87},{"el":114,"sc":2,"sl":107},{"el":141,"sc":2,"sl":127},{"el":156,"sc":2,"sl":153},{"el":180,"sc":2,"sl":168},{"el":194,"sc":2,"sl":192},{"el":199,"sc":2,"sl":196},{"el":204,"sc":2,"sl":201},{"el":209,"sc":2,"sl":206},{"el":219,"sc":2,"sl":211},{"el":237,"sc":2,"sl":221},{"el":245,"sc":2,"sl":239},{"el":250,"sc":2,"sl":247},{"el":255,"sc":2,"sl":252},{"el":260,"sc":2,"sl":257},{"el":278,"sc":2,"sl":262},{"el":285,"sc":2,"sl":283},{"el":292,"sc":2,"sl":290},{"el":299,"sc":2,"sl":297},{"el":306,"sc":2,"sl":304},{"el":313,"sc":2,"sl":311},{"el":320,"sc":2,"sl":318},{"el":327,"sc":2,"sl":325},{"el":338,"sc":2,"sl":332}],"name":"VarianceGammaModel","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_212":{"methods":[{"sl":168},{"sl":192},{"sl":196},{"sl":201},{"sl":206},{"sl":211},{"sl":221},{"sl":239},{"sl":247},{"sl":257}],"name":"test","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":193},{"sl":198},{"sl":203},{"sl":208},{"sl":213},{"sl":217},{"sl":223},{"sl":225},{"sl":232},{"sl":236},{"sl":242},{"sl":243},{"sl":244},{"sl":249},{"sl":259}]},"test_305":{"methods":[{"sl":107},{"sl":127},{"sl":153},{"sl":196},{"sl":201},{"sl":206},{"sl":211},{"sl":221},{"sl":239},{"sl":247},{"sl":257}],"name":"test","pass":true,"statements":[{"sl":108},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":140},{"sl":155},{"sl":198},{"sl":203},{"sl":208},{"sl":213},{"sl":214},{"sl":223},{"sl":225},{"sl":226},{"sl":227},{"sl":229},{"sl":236},{"sl":242},{"sl":243},{"sl":244},{"sl":249},{"sl":259}]},"test_399":{"methods":[{"sl":168},{"sl":192},{"sl":196},{"sl":201},{"sl":206},{"sl":211},{"sl":221},{"sl":239},{"sl":247},{"sl":257}],"name":"testMartingalePropertyMonteCarlo","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":193},{"sl":198},{"sl":203},{"sl":208},{"sl":213},{"sl":217},{"sl":223},{"sl":225},{"sl":232},{"sl":236},{"sl":242},{"sl":243},{"sl":244},{"sl":249},{"sl":259}]},"test_458":{"methods":[{"sl":168},{"sl":192},{"sl":196},{"sl":201},{"sl":206},{"sl":211},{"sl":221},{"sl":239},{"sl":247},{"sl":257}],"name":"test","pass":true,"statements":[{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":193},{"sl":198},{"sl":203},{"sl":208},{"sl":213},{"sl":217},{"sl":223},{"sl":225},{"sl":232},{"sl":236},{"sl":242},{"sl":243},{"sl":244},{"sl":249},{"sl":259}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [305], [305], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [305], [], [], [305], [305], [305], [305], [305], [305], [305], [305], [305], [], [305], [], [], [], [], [], [], [], [], [], [], [], [], [305], [], [305], [], [], [], [], [], [], [], [], [], [], [], [], [399, 458, 212], [], [399, 458, 212], [399, 458, 212], [399, 458, 212], [399, 458, 212], [399, 458, 212], [399, 458, 212], [399, 458, 212], [399, 458, 212], [399, 458, 212], [399, 458, 212], [], [], [], [], [], [], [], [], [], [], [], [], [399, 458, 212], [399, 458, 212], [], [], [399, 305, 458, 212], [], [399, 305, 458, 212], [], [], [399, 305, 458, 212], [], [399, 305, 458, 212], [], [], [399, 305, 458, 212], [], [399, 305, 458, 212], [], [], [399, 305, 458, 212], [], [399, 305, 458, 212], [305], [], [], [399, 458, 212], [], [], [], [399, 305, 458, 212], [], [399, 305, 458, 212], [], [399, 305, 458, 212], [305], [305], [], [305], [], [], [399, 458, 212], [], [], [], [399, 305, 458, 212], [], [], [399, 305, 458, 212], [], [], [399, 305, 458, 212], [399, 305, 458, 212], [399, 305, 458, 212], [], [], [399, 305, 458, 212], [], [399, 305, 458, 212], [], [], [], [], [], [], [], [399, 305, 458, 212], [], [399, 305, 458, 212], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]