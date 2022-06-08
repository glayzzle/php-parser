// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getInterfaces_003.phpt
  it("ReflectionClass::getInterfaces() - odd ampersand behaviour.", function () {
    expect(parser.parseCode("<?php\necho \"An object is in an array and is referenced. As expected, var_dumping the array shows '&':\\n\";\n$a = array(new stdclass);\n$b =& $a[0];\nvar_dump($a);\necho \"Naturally, this remains true if we modify the object:\\n\";\n$a[0]->x = 1;\nvar_dump($a);\necho \"\\n\\nObtain the array of interfaces implemented by C.\\n\";\ninterface I {}\nclass C implements I {}\n$rc = new ReflectionClass('C');\n$a = $rc->getInterfaces();\necho \"The result is an array in which each element is an object (an instance of ReflectionClass)\\n\";\necho \"Var_dumping this array shows that the elements are referenced. By what?\\n\";\nvar_dump($a);\necho \"Modify the object, and it is apparently no longer referenced.\\n\";\n$a['I']->x = 1;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
