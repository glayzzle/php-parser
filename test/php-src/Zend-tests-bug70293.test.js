// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70293.phpt
  it("Crash with specific assertions and zend.assertions=-1", function () {
    expect(parser.parseCode("<?php\nfunction f() {\n    assert(@$a ?: 1);\n    echo \"OK\";\n};\nf();\n?>")).toMatchSnapshot();
  });
});
