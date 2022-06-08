// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getConstructor_basic.phpt
  it("ReflectionClass::getConstructor()", function () {
    expect(parser.parseCode("<?php\nclass NewCtor {\n    function __construct() {}\n}\nclass ExtendsNewCtor extends NewCtor {\n}\n$classes = array('NewCtor', 'ExtendsNewCtor');\nforeach ($classes as $class) {\n    $rc = new ReflectionClass($class);\n    $rm = $rc->getConstructor();\n    if ($rm != null) {\n        echo \"Constructor of $class: \" . $rm->getName() . \"\\n\";\n    }  else {\n        echo \"No constructor for $class\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
