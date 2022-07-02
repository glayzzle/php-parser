// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_014.phpt
  it("Trying to override final method", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function test() { return 3; }\n}\nclass baz {\n    final public function test() { return 4; }\n}\nclass bar extends baz {\n    use foo { test as public; }\n}\n$x = new bar;\nvar_dump($x->test());\n?>")).toMatchSnapshot();
  });
});
