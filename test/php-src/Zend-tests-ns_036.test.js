// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_036.phpt
  it("036: Name ambiguity in compile-time constant reference (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace A;\nuse A as B;\nclass ArrayObject {\n    const STD_PROP_LIST = 2;\n}\nfunction f1($x = ArrayObject::STD_PROP_LIST) {\n    var_dump($x);\n}\nfunction f2($x = \\ArrayObject::STD_PROP_LIST) {\n    var_dump($x);\n}\nfunction f3($x = \\A\\ArrayObject::STD_PROP_LIST) {\n    var_dump($x);\n}\nfunction f4($x = B\\ArrayObject::STD_PROP_LIST) {\n    var_dump($x);\n}\nvar_dump(ArrayObject::STD_PROP_LIST);\nvar_dump(\\ArrayObject::STD_PROP_LIST);\nvar_dump(B\\ArrayObject::STD_PROP_LIST);\nvar_dump(\\A\\ArrayObject::STD_PROP_LIST);\nf1();\nf2();\nf3();\nf4();\n?>")).toMatchSnapshot();
  });
});
