// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32296.phpt
  it("Bug #32296 (get_class_methods output has changed between 5.0.2 and 5.0.3)", function () {
    expect(parser.parseCode("<?php\nabstract class space{\n    function __construct(){}\n    abstract protected function unfold();\n}\nabstract class shape extends space{\n    private function x1() {}\n    protected final function unfold(){}\n}\nabstract class quad extends shape{\n    private function x2() {}\n    function buggy(){\n        $c = get_class($this);\n        $a = get_class_methods(get_class($this));\n        $b = get_class_methods($this);\n        print($c.\"\\n\".'a:');\n        print_r($a);\n        print('b:');\n        print_r($b);\n    }\n}\nclass square extends quad{}\n$a = new square();\n$a->buggy();\nprint_r(get_class_methods(\"square\"));\nprint_r(get_class_methods($a));\n?>")).toMatchSnapshot();
  });
});
