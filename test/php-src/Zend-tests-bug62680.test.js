// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62680.phpt
  it("Bug #62680 (Function isset() throws fatal error on set array if non-existent key depth >= 3)", function () {
    expect(parser.parseCode("<?php\n$array = array(\"\");\nvar_dump(isset($array[0][\"a\"][\"b\"]));\nvar_dump(isset($array[0][\"a\"][\"b\"][\"c\"]));\n?>")).toMatchSnapshot();
  });
});
