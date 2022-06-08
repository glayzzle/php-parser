// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug79199.phpt
  it("Bug #79199 (curl_copy_handle() memory leak)", function () {
    expect(parser.parseCode("<?php\n$mem_old = 0;\nfor($i = 0; $i < 50; ++$i) {\n    $c1 = curl_init();\n    $c2 = curl_copy_handle($c1);\n    curl_close($c2);\n    curl_close($c1);\n    $mem_new = memory_get_usage();\n    if ($mem_new <= $mem_old) {\n        break;\n    }\n    $mem_old = $mem_new;\n}\necho $i < 50 ? \"okay\" : \"leak\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
