// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63111.phpt
  it("Bug #63111 (is_callable() lies for abstract static method)", function () {
    expect(parser.parseCode("<?php\nabstract class Foo {\n        abstract static function bar();\n}\ninterface MyInterface {\n    static function bar();\n}\nabstract class Bar {\n    static function foo() {\n        echo \"ok\\n\";\n    }\n}\nvar_dump(is_callable(array(\"Foo\", \"bar\")));\nvar_dump(is_callable(\"Foo::bar\"));\nvar_dump(is_callable(array(\"MyInterface\", \"bar\")));\nvar_dump(is_callable(\"MyInterface::bar\"));\nvar_dump(is_callable(array(\"Bar\", \"foo\")));\nvar_dump(is_callable(\"Bar::foo\"));\nBar::foo();\nFoo::bar();\n?>")).toMatchSnapshot();
  });
});
