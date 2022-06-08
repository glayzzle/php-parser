// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79790.phpt
  it("Bug #79790: \"Illegal offset type\" exception during AST evaluation not handled properly", function () {
    expect(parser.parseCode("<?php\nb();\nfunction b($a = array()[array ()]) {\n    ++$c[function () {}];\n}\n?>")).toMatchSnapshot();
  });
});
