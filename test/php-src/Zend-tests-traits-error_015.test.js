// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_015.phpt
  it("Trying to add an alias to a trait method where there is another with same name.\nShould warn about the conflict.", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function test() { return 3; }\n}\ntrait baz {\n    public function test() { return 4; }\n}\nclass bar {\n    use foo, baz {\n        baz::test as zzz;\n    }\n}\n$x = new bar;\nvar_dump($x->test());\n?>")).toMatchSnapshot();
  });
});
