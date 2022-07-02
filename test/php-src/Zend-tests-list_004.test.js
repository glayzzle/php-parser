// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_004.phpt
  it("list() with array reference", function () {
    expect(parser.parseCode("<?php\n$arr = array(2, 1);\n$b =& $arr;\nlist(,$a) = $b;\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
