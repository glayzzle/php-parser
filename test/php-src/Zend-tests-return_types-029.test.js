// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/029.phpt
  it("return type with finally", function () {
    expect(parser.parseCode("<?php\nfunction foo() : array {\n    try {\n        throw new Exception(\"xxxx\");\n    } finally {\n        return null;\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
