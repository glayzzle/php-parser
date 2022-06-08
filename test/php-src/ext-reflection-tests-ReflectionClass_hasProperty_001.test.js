// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_hasProperty_001.phpt
  it("ReflectionClass::hasProperty()", function () {
    expect(parser.parseCode("<?php\nclass pubf {\n    public $a;\n    static public $s;\n}\nclass subpubf extends pubf {\n}\nclass protf {\n    protected $a;\n    static protected $s;\n}\nclass subprotf extends protf {\n}\nclass privf {\n    private $a;\n    static protected $s;\n}\nclass subprivf extends privf  {\n}\n$classes = array(\"pubf\", \"subpubf\", \"protf\", \"subprotf\",\n                 \"privf\", \"subprivf\");\nforeach($classes as $class) {\n    echo \"Reflecting on class $class: \\n\";\n    $rc = new ReflectionClass($class);\n    echo \"  --> Check for s: \";\n    var_dump($rc->hasProperty(\"s\"));\n    echo \"  --> Check for a: \";\n    var_dump($rc->hasProperty(\"a\"));\n    echo \"  --> Check for A: \";\n    var_dump($rc->hasProperty(\"A\"));\n    echo \"  --> Check for doesNotExist: \";\n    var_dump($rc->hasProperty(\"doesNotExist\"));\n}\n?>")).toMatchSnapshot();
  });
});
