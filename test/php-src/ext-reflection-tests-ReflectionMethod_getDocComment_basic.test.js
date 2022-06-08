// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_getDocComment_basic.phpt
  it("ReflectionMethod::getDocComment()", function () {
    expect(parser.parseCode("<?php\n/**\n * My Doc Comment for A\n */\nclass A {\n    /**\n     * My Doc Comment for A::f\n     */\n    function f() {}\n    /**\n     * My Doc Comment for A::privf\n     */\n    private function privf() {}\n    /** My Doc Comment for A::protStatf */\n    protected static function protStatf() {}\n    /**\n     * My Doc Comment for A::finalStatPubf\n     */\n    final static public function finalStatPubf() {}\n}\nclass B extends A {\n    /*** Not a doc comment */\n    function f() {}\n    /** *\n     * My Doc Comment for B::privf\n     */\n    private function privf() {}\n    /** My Doc Comment for B::protStatf\n    */\n    protected static function protStatf() {}\n}\nforeach (array('A', 'B') as $class) {\n    $rc = new ReflectionClass($class);\n    $rms = $rc->getMethods();\n    foreach ($rms as $rm) {\n        echo \"\\n\\n---> Doc comment for $class::\" . $rm->getName() . \"():\\n\";\n        var_dump($rm->getDocComment());\n    }\n}\n?>")).toMatchSnapshot();
  });
});
