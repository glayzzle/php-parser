// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24396.phpt
  it("Bug #24396 (global $$variable broken)", function () {
    expect(parser.parseCode("<?php\n$arr = array('a' => 1, 'b' => 2, 'c' => 3);\nforeach($arr as $k=>$v)  {\n    global $$k; // comment this out and it works in PHP 7 too..\n    echo \"($k => $v)\\n\";\n    $$k = $v;\n}\n?>")).toMatchSnapshot();
  });
});
