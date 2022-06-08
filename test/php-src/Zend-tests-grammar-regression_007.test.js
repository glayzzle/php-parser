// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_007.phpt
  it("Test to ensure semi reserved words allow deference", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const use = 'yay';\n    public static function new() {\n        echo __METHOD__, PHP_EOL;\n        return new static();\n    }\n    public function self() {\n        echo __METHOD__, PHP_EOL;\n        return $this;\n    }\n}\nFoo::new()::new()::new();\nvar_dump(\n    (new Foo)->self()::new()->self()->self()::use\n);\nFoo::{'new'}();\nvar_dump(Foo::use);\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
