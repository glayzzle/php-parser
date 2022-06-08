// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getInterfaceNames_basic.phpt
  it("ReflectionClass::getInterfaceNames()", function () {
    expect(parser.parseCode("<?php\ninterface Foo { }\ninterface Bar { }\nclass Baz implements Foo, Bar { }\nclass Qux {}\n$rc1 = new ReflectionClass(\"Baz\");\nvar_dump($rc1->getInterfaceNames());\n$rc2 = new ReflectionClass(\"Qux\");\nvar_dump($rc2->getInterfaceNames());\n?>")).toMatchSnapshot();
  });
});
