// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43651.phpt
  it("Bug #43651 (is_callable() with one or more nonconsecutive colons crashes)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    static function foo() {}\n}\nvar_dump(is_callable(\"\\\\\\\\\"));\nvar_dump(is_callable(\"\\\\\"));\nvar_dump(is_callable(\"x\\\\\"));\nvar_dump(is_callable(\"\\\\x\"));\nvar_dump(is_callable(\"x\\\\x\"));\nvar_dump(is_callable(\"x\\\\\\\\\"));\nvar_dump(is_callable(\"\\\\x\"));\nvar_dump(is_callable(\"x\\\\\\\\x\"));\nvar_dump(is_callable(\"cd\"));\nvar_dump(is_callable(\"Test\\\\\"));\nvar_dump(is_callable(\"\\\\Test\"));\nvar_dump(is_callable(\"\\\\Test\\\\\"));\nvar_dump(is_callable(\"Test::foo\"));\nvar_dump(is_callable(\"\\\\Test::foo\"));\nvar_dump(is_callable(\"is_string\"));\nvar_dump(is_callable(\"\\\\is_string\"));\n?>")).toMatchSnapshot();
  });
});
