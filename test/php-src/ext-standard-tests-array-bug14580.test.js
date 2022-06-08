// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug14580.phpt
  it("Bug #14580 (key() not binary safe)", function () {
    expect(parser.parseCode("<?php\n    $arr = array (\"foo\\0bar\" => \"foo\\0bar\");\n    $key = key($arr);\n    echo strlen($key), ': ';\n    echo urlencode($key), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
