// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_getConstant_basic.phpt
  it("ReflectionObject::getConstant() basic function test", function () {
    expect(parser.parseCode("<?php\nclass C {\n    const a = 'hello from C';\n}\nclass D extends C {\n}\nclass E extends D {\n}\nclass F extends E {\n    const a = 'hello from F';\n}\nclass X {\n}\n$classes = array(\"C\", \"D\", \"E\", \"F\", \"X\");\nforeach($classes as $class) {\n    echo \"Reflecting on instance of class $class: \\n\";\n    $rc = new ReflectionObject(new $class);\n    var_dump($rc->getConstant('a'));\n    var_dump($rc->getConstant('doesNotexist'));\n}\n?>")).toMatchSnapshot();
  });
});
