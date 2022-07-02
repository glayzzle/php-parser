// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_constants_001.phpt
  it("class constants basic tests", function () {
    expect(parser.parseCode("<?php\nclass test {\n    const val = \"string\";\n    const val2 = 1;\n}\nvar_dump(test::val);\nvar_dump(test::val2);\nvar_dump(test::val3);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
