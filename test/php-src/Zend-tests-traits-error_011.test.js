// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_011.phpt
  it("Testing trait collisions", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function test() { return 3; }\n}\ntrait c {\n    public function test() { return 2; }\n}\ntrait b {\n    public function test() { return 1; }\n}\nclass bar {\n    use foo, c, b;\n}\n$x = new bar;\nvar_dump($x->test());\n?>")).toMatchSnapshot();
  });
});
