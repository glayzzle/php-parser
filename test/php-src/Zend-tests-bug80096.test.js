// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80096.phpt
  it("Bug #80096: Segmentation fault with named arguments in nested call", function () {
    expect(parser.parseCode("<?php\nfunction println($arg) {\n    echo $arg, \"\\n\";\n}\nprintln(htmlentities(\"The < character is encoded as &lt;\", double_encode: false));\n?>")).toMatchSnapshot();
  });
});
