// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_012.phpt
  it("Trying to access a protected trait method", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function test() { return 3; }\n}\nclass bar {\n    use foo { test as protected; }\n}\n$x = new bar;\nvar_dump($x->test());\n?>")).toMatchSnapshot();
  });
});
