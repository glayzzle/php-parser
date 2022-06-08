// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getConstant_basic.phpt
  it("ReflectionClass::getConstant()", function () {
    expect(parser.parseCode("<?php\nclass C {\n    const a = 'hello from C';\n}\nclass D extends C {\n}\nclass E extends D {\n}\nclass F extends E {\n    const a = 'hello from F';\n}\nclass X {\n}\n$classes = array(\"C\", \"D\", \"E\", \"F\", \"X\");\nforeach($classes as $class) {\n    echo \"Reflecting on class $class:\\n\";\n    $rc = new ReflectionClass($class);\n    var_dump($rc->getConstant('a'));\n    var_dump($rc->getConstant('doesnotexist'));\n}\n?>")).toMatchSnapshot();
  });
});
