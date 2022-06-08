// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug65458.phpt
  it("Bug #65458 (curl memory leak)", function () {
    expect(parser.parseCode("<?php\n$ch = curl_init();\n$init = memory_get_usage();\nfor ($i = 0; $i < 10000; $i++) {\n    curl_setopt($ch, CURLOPT_HTTPHEADER, [ \"SOAPAction: getItems\" ]);\n}\n$preclose = memory_get_usage();\ncurl_close($ch);\n// This is a slightly tricky heuristic, but basically, we want to ensure\n// $preclose - $init has a delta in the order of bytes, not megabytes. Given\n// the number of iterations in the loop, if we're wasting memory here, we\n// should have megs and megs of extra allocations.\nvar_dump(($preclose - $init) < 10000);\n?>")).toMatchSnapshot();
  });
});
