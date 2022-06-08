// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_getConstructor_basic.phpt
  it("ReflectionObject::getConstructor() - basic function test", function () {
    expect(parser.parseCode("<?php\nclass NewCtor {\n    function __construct() {}\n}\nclass ExtendsNewCtor extends NewCtor {\n}\nclass X {\n    function Y() {}\n}\nclass Y extends X {\n}\nclass B {\n    function B() {}\n}\nclass C extends B {\n    function C() {}\n}\nclass D1 extends C {\n    function __construct() {}\n}\nclass D2 extends C {\n}\n$classes = array('NewCtor', 'ExtendsNewCtor',\n                 'B', 'C', 'D1', 'D2', 'X', 'Y');\nforeach ($classes as $class) {\n    $rc = new ReflectionObject(new $class);\n    $rm = $rc->getConstructor();\n    if ($rm != null) {\n        echo \"Constructor of $class: \" . $rm->getName() . \"\\n\";\n    }  else {\n        echo \"No constructor for $class\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
