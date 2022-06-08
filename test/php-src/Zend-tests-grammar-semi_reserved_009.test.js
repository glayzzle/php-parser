// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/semi_reserved_009.phpt
  it("Edge case: T_STRING<as> as T_STRING<?>", function () {
    expect(parser.parseCode("<?php\ntrait TraitA\n{\n    public static function as(){ echo __METHOD__, PHP_EOL; }\n}\nclass Foo\n{\n    use TraitA  {\n        as as try;\n    }\n}\nFoo::try();\necho PHP_EOL, \"Done\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
