// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getModifiers_basic.phpt
  it("ReflectionClass::getModifiers()", function () {
    expect(parser.parseCode("<?php\nclass a {}\nabstract class b {}\nfinal class c {}\ninterface d {}\nclass e implements d {}\ninterface f extends d {}\nclass g extends b {}\nfunction dump_modifiers($class) {\n    $obj = new ReflectionClass($class);\n    var_dump($obj->getModifiers());\n}\ndump_modifiers('a');\ndump_modifiers('b');\ndump_modifiers('c');\ndump_modifiers('d');\ndump_modifiers('e');\ndump_modifiers('f');\ndump_modifiers('g');\n?>")).toMatchSnapshot();
  });
});
