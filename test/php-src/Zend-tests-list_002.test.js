// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_002.phpt
  it("Testing full-reference on list()", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$a = new stdclass;\n$b =& $a;\nlist($a, list($b)) = array($a, array($b));\nvar_dump($a, $b, $a === $b);\n?>")).toMatchSnapshot();
  });
});
