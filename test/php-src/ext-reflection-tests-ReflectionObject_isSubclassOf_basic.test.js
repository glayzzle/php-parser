// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_isSubclassOf_basic.phpt
  it("ReflectionObject::isSubclassOf() - basic function test", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B extends A {}\nclass C extends B {}\ninterface I {}\nclass X implements I {}\n$classNames = array('A', 'B', 'C', 'I', 'X');\n//Create ReflectionClasses\nforeach ($classNames as $className) {\n    $rcs[$className] = new ReflectionClass($className);\n}\n//Create ReflectionObjects\nforeach ($classNames as $className) {\n    if ($rcs[$className]->isInstantiable()) {\n        $ros[$className] = new ReflectionObject(new $className);\n    }\n}\nforeach ($ros as $childName => $child) {\n    foreach ($rcs as $parentName => $parent) {\n        echo \"Is \" . $childName . \" a subclass of \" . $parentName . \"? \\n\";\n        echo \"   - Using ReflectionClass object argument: \";\n        var_dump($child->isSubclassOf($parent));\n        if ($parent->isInstantiable()) {\n            echo \"   - Using ReflectionObject object argument: \";\n            var_dump($child->isSubclassOf($ros[$parentName]));\n        }\n        echo \"   - Using string argument: \";\n        var_dump($child->isSubclassOf($parentName));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
