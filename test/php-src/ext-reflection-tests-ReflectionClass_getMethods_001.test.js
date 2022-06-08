// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getMethods_001.phpt
  it("ReflectionClass::getMethods()", function () {
    expect(parser.parseCode("<?php\nclass pubf {\n    public function f() {}\n    static public function s() {}\n}\nclass subpubf extends pubf {\n}\nclass protf {\n    protected function f() {}\n    static protected function s() {}\n}\nclass subprotf extends protf {\n}\nclass privf {\n    private function f() {}\n    static private function s() {}\n}\nclass subprivf extends privf  {\n}\n$classes = array(\"pubf\", \"subpubf\", \"protf\", \"subprotf\",\n                 \"privf\", \"subprivf\");\nforeach($classes as $class) {\n    echo \"Reflecting on class $class: \\n\";\n    $rc = new ReflectionClass($class);\n    var_dump($rc->getMethods());\n}\n?>")).toMatchSnapshot();
  });
});
