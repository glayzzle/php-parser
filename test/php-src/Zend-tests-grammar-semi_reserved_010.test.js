// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/semi_reserved_010.phpt
  it("Edge case: T_STRING<insteadof> insteadof T_STRING<?>", function () {
    expect(parser.parseCode("<?php\ntrait TraitA\n{\n    public static function insteadof(){ echo __METHOD__, PHP_EOL; }\n}\ntrait TraitB\n{\n    public static function insteadof(){ echo __METHOD__, PHP_EOL; }\n}\nclass Foo\n{\n    use TraitA , TraitB {\n        TraitB::insteadof\n            insteadof TraitA;\n    }\n}\nFoo::insteadof();\necho PHP_EOL, \"Done\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
