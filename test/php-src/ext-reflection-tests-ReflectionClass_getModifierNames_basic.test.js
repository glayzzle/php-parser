// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getModifierNames_basic.phpt
  it("ReflectionClass::getModifierNames() basic tests", function () {
    expect(parser.parseCode("<?php\nclass a {}\nabstract class b {}\nfinal class c {}\nclass x\n{\n    function __construct() {}\n    function __destruct() {}\n    private function a() {}\n    private static function b() {}\n    protected function c() {}\n    protected static function d() {}\n    public function e() {}\n    public static function f() {}\n    final function g() {}\n    function h() {}\n}\nabstract class y\n{\n    abstract function a();\n    abstract protected function b();\n}\nfunction dump_modifierNames($class) {\n    $obj = new ReflectionClass($class);\n    var_dump($obj->getName(), Reflection::getModifierNames($obj->getModifiers()));\n}\nfunction dump_methodModifierNames($class) {\n    $obj = new ReflectionClass($class);\n    foreach($obj->getMethods() as $method) {\n        var_dump($obj->getName() . \"::\" . $method->getName(), Reflection::getModifierNames($method->getModifiers()));\n    }\n}\ndump_modifierNames('a');\ndump_modifierNames('b');\ndump_modifierNames('c');\ndump_methodModifierNames('x');\ndump_methodModifierNames('y');\n?>")).toMatchSnapshot();
  });
});
