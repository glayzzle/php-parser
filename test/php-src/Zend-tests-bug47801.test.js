// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47801.phpt
  it("Bug #47801 (__call() accessed via parent:: operator is provided incorrect method name)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n  function __call($name, $args)\n  {\n    echo(\"magic method called: $name\\n\");\n  }\n}\nclass B extends A\n{\n  function getFoo()\n  {\n    parent::getFoo();\n  }\n}\n$a = new A();\n$a->getFoo();\n$b = new B();\n$b->getFoo();\n?>")).toMatchSnapshot();
  });
});
