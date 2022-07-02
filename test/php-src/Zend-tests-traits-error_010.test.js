// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_010.phpt
  it("Trying to exclude trait method multiple times", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function test() { return 3; }\n}\ntrait c {\n    public function test() { return 2; }\n}\nclass bar {\n    use foo, c { c::test insteadof foo; }\n    use foo, c { c::test insteadof foo; }\n}\n$x = new bar;\nvar_dump($x->test());\n?>")).toMatchSnapshot();
  });
});
