// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getInterfaces_001.phpt
  it("ReflectionClass::getInterfaces()", function () {
    expect(parser.parseCode("<?php\nclass A0 {}\nclass B0 extends A0 {}\nabstract class A1 {}\nclass B1 extends A1 {}\ninterface I0 {}\ninterface I1 {}\ninterface I2 {}\ninterface I3 {}\ninterface I4 extends I3 {}\ninterface I5 extends I4 {}\ninterface I6 extends I5, I1, I2 {}\ninterface I7 extends I6 {}\nclass C0 implements I0 {}\nclass C1 implements I1, I3 {}\nclass C2 extends C1 {}\nclass C3 extends C2 implements I1 {}\nclass C4 extends C3 implements I2 {}\nclass C5 extends C4 implements I7 {}\nclass C6 implements I1, I2, I3, I4, I5, I6, I7 {}\n$classes = array( \t'A0', 'A1', 'B0', 'B1',\n                    'I0', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7',\n                    'C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6'\t);\nforeach ($classes as $class) {\n    echo \"---( Interfaces implemented by $class )---\\n \";\n    $rc = new ReflectionClass($class);\n    $interfaces = $rc->getInterfaces();\n    // Sort interfaces so that tests do not fail because of wrong order.\n    ksort($interfaces);\n    print_r($interfaces);\n}\n?>")).toMatchSnapshot();
  });
});
