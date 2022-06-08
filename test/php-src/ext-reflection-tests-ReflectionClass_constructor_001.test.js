// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_constructor_001.phpt
  it("ReflectionClass::__constructor()", function () {
    expect(parser.parseCode("<?php\n$r1 = new ReflectionClass(\"stdClass\");\n$myInstance = new stdClass;\n$r2 = new ReflectionClass($myInstance);\nclass TrickClass {\n    function __toString() {\n        //Return the name of another class\n        return \"Exception\";\n    }\n}\n$myTrickClass = new TrickClass;\n$r3 = new ReflectionClass($myTrickClass);\nvar_dump($r1, $r2, $r3);\n?>")).toMatchSnapshot();
  });
});
