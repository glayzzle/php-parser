// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60350.phpt
  it("Bug #60350 No string escape code for ESC (ascii 27), normally \\e", function () {
    expect(parser.parseCode("<?php\n$str = \"\\e\";\nif (ord($str) == 27) {\n    echo \"Works\";\n}\n?>")).toMatchSnapshot();
  });
});
