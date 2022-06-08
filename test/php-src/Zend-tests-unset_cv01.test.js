// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv01.phpt
  it("unset() CV 1 (unset() global variable)", function () {
    expect(parser.parseCode("<?php\n$x = \"ok\\n\";\necho $x;\nunset($x);\necho $x;\n?>")).toMatchSnapshot();
  });
});
