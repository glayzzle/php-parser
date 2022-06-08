// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isSubclassOf_basic.phpt
  it("ReflectionClass::isSubclassOf()", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B extends A {}\nclass C extends B {}\ninterface I {}\nclass X implements I {}\n$classNames = array('A', 'B', 'C', 'I', 'X');\nforeach ($classNames as $className) {\n    $rcs[$className] = new ReflectionClass($className);\n}\nforeach ($rcs as $childName => $child) {\n    foreach ($rcs as $parentName => $parent) {\n        echo \"Is \" . $childName . \" a subclass of \" . $parentName . \"? \\n\";\n        echo \"   - Using object argument: \";\n        var_dump($child->isSubclassOf($parent));\n        echo \"   - Using string argument: \";\n        var_dump($child->isSubclassOf($parentName));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
