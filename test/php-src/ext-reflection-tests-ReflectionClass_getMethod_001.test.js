// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getMethod_001.phpt
  it("ReflectionClass::getMethod()", function () {
    expect(parser.parseCode("<?php\nclass pubf {\n    public function f() {}\n    static public function s() {}\n}\nclass subpubf extends pubf {\n}\nclass protf {\n    protected function f() {}\n    static protected function s() {}\n}\nclass subprotf extends protf {\n}\nclass privf {\n    private function f() {}\n    static private function s() {}\n}\nclass subprivf extends privf  {\n}\n$classes = array(\"pubf\", \"subpubf\", \"protf\", \"subprotf\",\n                 \"privf\", \"subprivf\");\nforeach($classes as $class) {\n    echo \"Reflecting on class $class: \\n\";\n    $rc = new ReflectionClass($class);\n    echo \"  --> Check for f(): \";\n    var_dump($rc->getMethod(\"f\"));\n    echo \"  --> Check for s(): \";\n    var_dump($rc->getMethod(\"s\"));\n    echo \"  --> Check for F(): \";\n    var_dump($rc->getMethod(\"F\"));\n    echo \"  --> Check for doesNotExist(): \";\n    try {\n        var_dump($rc->getMethod(\"doesNotExist\"));\n    } catch (Exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
