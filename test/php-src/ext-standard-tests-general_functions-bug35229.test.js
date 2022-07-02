// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug35229.phpt
  it("Bug #35229 (call_user_func() crashes when argument stack is nearly full)", function () {
    expect(parser.parseCode("<?php\nclass test2 {\n  static function use_stack() {\n    echo \"OK\\n\";\n  }\n}\nspl_autoload_register(function ($class) {\n    eval('class test1 extends test2 {}');\n    test1::use_stack(\n    1,2,3,4,5,6,7,8,9,10,\n    11,12,13,14,15,16,17,18,19,20,\n    21,22,23,24,25,26,27,28,29,30\n  );\n});\ncall_user_func(array('test1', 'use_stack'),\n  1,2,3,4,5,6,7,8,9,10,\n  11,12,13,14,15,16,17,18,19,20,\n  21,22,23,24,25,26,27,28,29,30\n);\n?>")).toMatchSnapshot();
  });
});
