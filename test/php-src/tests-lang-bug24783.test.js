// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24783.phpt
  it("Bug #24783 ($key not binary safe in \"foreach($arr as $key => $val)\")", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n    $arr = array (\"foo\\0bar\" => \"foo\\0bar\");\n    foreach ($arr as $key => $val) {\n        echo strlen($key), ': ';\n        echo urlencode($key), ' => ', urlencode($val), \"\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
