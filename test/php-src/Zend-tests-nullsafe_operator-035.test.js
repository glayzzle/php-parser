// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/035.phpt
  it("Test nullsafe operator on delayed var", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public ?Bar $bar;\n}\nclass Bar {\n    public string $baz;\n}\n$foo = new Foo();\n$foo->bar = null;\nvar_dump($foo->bar?->baz);\n$bar = new Bar();\n$bar->baz = 'baz';\n$foo->bar = $bar;\nvar_dump($foo->bar?->baz);\n?>")).toMatchSnapshot();
  });
});
