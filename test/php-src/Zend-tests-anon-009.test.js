// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/009.phpt
  it("testing traits in anon classes", function () {
    expect(parser.parseCode("<?php\ntrait Foo {\n    public function someMethod() {\n      return \"bar\";\n    }\n}\n$anonClass = new class {\n    use Foo;\n};\nvar_dump($anonClass->someMethod());\n?>")).toMatchSnapshot();
  });
});
