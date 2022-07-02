// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/025.phpt
  it("Testing dynamic calls", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static public function a() {\n        print \"ok\\n\";\n    }\n}\n$a = 'a';\n$b = 'a';\n$class = 'foo';\nfoo::a();\nfoo::$a();\nfoo::$$b();\n$class::a();\n$class::$a();\n$class::$$b();\n?>")).toMatchSnapshot();
  });
});
