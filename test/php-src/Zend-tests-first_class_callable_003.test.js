// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_003.phpt
  it("First Class Callable from Method", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function bar()  {\n        echo \"OK\";\n    }\n}\n$foo = new Foo;\n$bar = $foo->bar(...);\necho $bar();\n?>")).toMatchSnapshot();
  });
});
