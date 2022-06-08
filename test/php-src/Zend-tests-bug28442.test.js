// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug28442.phpt
  it("Bug #28442 (Changing a static variables in a class changes it across sub/super classes.)", function () {
    expect(parser.parseCode("<?php\nclass ClassA\n{\n   static $prop;\n}\nclass ClassB extends ClassA\n{\n   static $prop;\n}\nclass ClassC extends ClassB\n{\n}\necho \"===INIT===\\n\";\nClassA::$prop = 'A';\nClassB::$prop = 'B';\nClassC::$prop = 'C';\nvar_dump(ClassA::$prop);\nvar_dump(ClassB::$prop);\nvar_dump(ClassC::$prop);\necho \"===SetA===\\n\";\nClassA::$prop = 'A2';\nvar_dump(ClassA::$prop);\nvar_dump(ClassB::$prop);\nvar_dump(ClassC::$prop);\necho \"===SetB===\\n\";\nClassB::$prop = 'B2';\nvar_dump(ClassA::$prop);\nvar_dump(ClassB::$prop);\nvar_dump(ClassC::$prop);\necho \"===SetC===\\n\";\nClassC::$prop = 'C2';\nvar_dump(ClassA::$prop);\nvar_dump(ClassB::$prop);\nvar_dump(ClassC::$prop);\n?>")).toMatchSnapshot();
  });
});
