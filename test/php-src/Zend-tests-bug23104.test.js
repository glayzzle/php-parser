// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug23104.phpt
  it("Bug #23104 (Hash position not reset for constant arrays)", function () {
    expect(parser.parseCode("<?php\nfunction foo($bar = array(\"a\", \"b\", \"c\"))\n{\n    var_dump(current($bar));\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
