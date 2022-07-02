// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_002.phpt
  it("\"Reference Unpacking - New Reference\" list()", function () {
    expect(parser.parseCode("<?php\n$arr = array(new stdclass);\nlist(&$a, &$b) = $arr;\nvar_dump($a, $b);\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
