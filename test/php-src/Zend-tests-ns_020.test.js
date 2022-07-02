// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_020.phpt
  it("020: Accessing internal namespace function", function () {
    expect(parser.parseCode("<?php\nnamespace X;\nuse X as Y;\nfunction foo() {\n    echo __FUNCTION__,\"\\n\";\n}\nfoo();\n\\X\\foo();\nY\\foo();\n\\X\\foo();\n?>")).toMatchSnapshot();
  });
});
