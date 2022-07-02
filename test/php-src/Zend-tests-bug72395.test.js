// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72395.phpt
  it("Bug #72395 (list() regression)", function () {
    expect(parser.parseCode("<?php\nlist(,,$a,,$b,) = array(1, 2, 3, 4, 5, 6);\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
