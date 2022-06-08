// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/self_in_eval.phpt
  it("self etc. can be used in eval() in a class scope", function () {
    expect(parser.parseCode("<?php\nclass C {\n    const FOO = 1;\n    private static $bar = 2;\n    public static function f() {\n        eval(<<<'PHP'\nvar_dump(self::FOO);\nvar_dump(self::$bar);\nvar_dump(self::class);\nvar_dump(static::class);\nPHP\n        );\n    }\n}\nC::f();\n?>")).toMatchSnapshot();
  });
});
