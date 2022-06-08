// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug45571.phpt
  it("Bug #45571 (ReflectionClass::__toString() shows superclasses' private static methods.)", function () {
    expect(parser.parseCode("<?php\nClass A {\n    static private $a \t= 0;\n    static protected $b = 1;\n    static public $c \t= 2;\n    private function f() {}\n    private static function sf() {}\n}\nClass C extends A { }\necho new ReflectionClass(\"C\");\n?>")).toMatchSnapshot();
  });
});
