// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79155.phpt
  it("Bug #79155: Property nullability lost when using multiple property definition", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public ?string $a, $b;\n    public ?stdClass $c, $d;\n}\n$t = new Foo;\n$t->a = \"str\";\n$t->b = \"str\";\n$t->c = new stdClass;\n$t->d = new stdClass;\nvar_dump($t->a, $t->b, $t->c, $t->d);\n$t->a = null;\n$t->b = null;\n$t->c = null;\n$t->d = null;\nvar_dump($t->a, $t->b, $t->c, $t->d);\n?>")).toMatchSnapshot();
  });
});
