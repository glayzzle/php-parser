// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug36011.phpt
  it("Bug #36011 (Strict errormsg wrong for call_user_func() and the likes)", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    static function test()\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n    function whee()\n    {\n        array_map(array('TestClass', 'test'), array('array_value'));\n    }\n    function whee4()\n    {\n        call_user_func(array('TestClass', 'test'));\n    }\n    static function whee5()\n    {\n        call_user_func(array('TestClass', 'test'));\n    }\n}\nTestClass::test();\n$a = new TestClass();\n$a->whee();\n$a->whee4();\n$a->whee5();\nTestClass::whee5();\n?>")).toMatchSnapshot();
  });
});
