// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47880.phpt
  it("Bug #47880 (crashes in call_user_func_array())", function () {
    expect(parser.parseCode("<?php\nclass bomb {\n  static function go($n)\t{\n   $backtrace = debug_backtrace(false);\n   $backtrace[1]['args'][1] = 'bomb';\n  }\n}\ncall_user_func_array(array('bomb', 'go'), array(0));\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
