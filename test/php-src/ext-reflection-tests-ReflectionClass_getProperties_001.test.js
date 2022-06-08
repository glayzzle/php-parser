// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getProperties_001.phpt
  it("ReflectionClass::getProperties()", function () {
    expect(parser.parseCode("<?php\nclass pubf {\n    public $a;\n    static public $s;\n}\nclass subpubf extends pubf {\n}\nclass protf {\n    protected $a;\n    static protected $s;\n}\nclass subprotf extends protf {\n}\nclass privf {\n    private $a;\n    static private $s;\n}\nclass subprivf extends privf  {\n}\n$classes = array(\"pubf\", \"subpubf\", \"protf\", \"subprotf\",\n                 \"privf\", \"subprivf\");\nforeach($classes as $class) {\n    echo \"Reflecting on class $class: \\n\";\n    $rc = new ReflectionClass($class);\n    var_dump($rc->getProperties());\n}\n?>")).toMatchSnapshot();
  });
});
