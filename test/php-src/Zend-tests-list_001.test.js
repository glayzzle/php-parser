// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_001.phpt
  it("\"Nested\" list()", function () {
    expect(parser.parseCode("<?php\nlist($a, list($b)) = array(new stdclass, array(new stdclass));\nvar_dump($a, $b);\n[$a, [$b]] = array(new stdclass, array(new stdclass));\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
