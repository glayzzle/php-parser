// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_035.phpt
  it("035: Name ambiguity in compile-time constant reference (php name)", function () {
    expect(parser.parseCode("<?php\nnamespace A;\nuse \\ArrayObject;\nfunction f1($x = ArrayObject::STD_PROP_LIST) {\n    var_dump($x);\n}\nfunction f2($x = \\ArrayObject::STD_PROP_LIST) {\n    var_dump($x);\n}\nvar_dump(ArrayObject::STD_PROP_LIST);\nvar_dump(\\ArrayObject::STD_PROP_LIST);\nf1();\nf2();\n?>")).toMatchSnapshot();
  });
});
