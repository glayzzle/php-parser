// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_constants_002.phpt
  it("class constants as default function arguments", function () {
    expect(parser.parseCode("<?php\nclass test {\n    const val = 1;\n}\nfunction foo($v = test::val) {\n    var_dump($v);\n}\nfunction bar($b = NoSuchClass::val) {\n    var_dump($b);\n}\nfoo();\nfoo(5);\nbar(10);\nbar();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
