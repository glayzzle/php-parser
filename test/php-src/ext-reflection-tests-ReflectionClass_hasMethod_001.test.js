// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_hasMethod_001.phpt
  it("ReflectionClass::hasMethod()", function () {
    expect(parser.parseCode("<?php\nclass pubf {\n    public function f() {}\n    static public function s() {}\n}\nclass subpubf extends pubf {\n}\nclass protf {\n    protected function f() {}\n    static protected function s() {}\n}\nclass subprotf extends protf {\n}\nclass privf {\n    private function f() {}\n    static private function s() {}\n}\nclass subprivf extends privf  {\n}\n$classes = array(\"pubf\", \"subpubf\", \"protf\", \"subprotf\",\n                 \"privf\", \"subprivf\");\nforeach($classes as $class) {\n    echo \"Reflecting on class $class: \\n\";\n    $rc = new ReflectionClass($class);\n    echo \"  --> Check for f(): \";\n    var_dump($rc->hasMethod(\"f\"));\n    echo \"  --> Check for s(): \";\n    var_dump($rc->hasMethod(\"s\"));\n    echo \"  --> Check for F(): \";\n    var_dump($rc->hasMethod(\"F\"));\n    echo \"  --> Check for doesNotExist(): \";\n    var_dump($rc->hasMethod(\"doesNotExist\"));\n}\n?>")).toMatchSnapshot();
  });
});
