// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getName_basic.phpt
  it("ReflectionClass::getName()", function () {
    expect(parser.parseCode("<?php\nclass TrickClass {\n    function __toString() {\n        //Return the name of another class\n        return \"Exception\";\n    }\n}\n$r1 = new ReflectionClass(\"stdClass\");\n$myInstance = new stdClass;\n$r2 = new ReflectionClass($myInstance);\n$r3 = new ReflectionClass(\"TrickClass\");\nvar_dump($r1->getName(), $r2->getName(), $r3->getName());\n?>")).toMatchSnapshot();
  });
});
