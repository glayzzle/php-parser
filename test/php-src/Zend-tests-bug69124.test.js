// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69124.phpt
  it("Bug 69124: Method name must be as string (invalid error message when using reference to a string)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function bar() {\n        print \"Success\\n\";\n    }\n}\nfunction test(&$instance, &$method) {\n    $instance->{$method}();\n}\n$instance = new Foo;\n$method = \"bar\";\ntest($instance, $method);\n?>")).toMatchSnapshot();
  });
});
