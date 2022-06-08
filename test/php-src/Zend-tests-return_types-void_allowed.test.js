// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/void_allowed.phpt
  it("void return type: acceptable cases", function () {
    expect(parser.parseCode("<?php\nfunction foo(): void {\n    // okay\n}\nfoo();\nfunction bar(): void {\n    return; // okay\n}\nbar();\necho \"OK!\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
