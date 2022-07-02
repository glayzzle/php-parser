// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/011.phpt
  it("Test isset and empty on nullsafe property", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $bar;\n}\nclass Bar {\n    public $baz;\n}\n$bar = new Bar();\n$bar->baz = 'baz';\nvar_dump(isset($foo?->bar));\nvar_dump(empty($foo?->bar));\nvar_dump(isset($foo?->bar->baz));\nvar_dump(empty($foo?->bar->baz));\necho \"\\n\";\n$foo = null;\nvar_dump(isset($foo?->bar));\nvar_dump(empty($foo?->bar));\nvar_dump(isset($foo?->bar->baz));\nvar_dump(empty($foo?->bar->baz));\necho \"\\n\";\n$foo = new Foo();\nvar_dump(isset($foo?->bar->baz));\nvar_dump(empty($foo?->bar->baz));\n$foo->bar = $bar;\nvar_dump(isset($foo?->bar->baz));\nvar_dump(empty($foo?->bar->baz));\n?>")).toMatchSnapshot();
  });
});
