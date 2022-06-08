// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33277.phpt
  it("Bug #33277 (private method accessed by child class)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n        private function bar() {\n                echo \"private!\\n\";\n        }\n}\nclass fooson extends foo {\n        function barson() {\n                $this->bar();\n        }\n}\nclass foo2son extends fooson {\n        function bar() {\n                echo \"public!\\n\";\n        }\n}\n$b = new foo2son();\n$b->barson();\n?>")).toMatchSnapshot();
  });
});
