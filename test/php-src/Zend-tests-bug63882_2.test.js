// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63882_2.phpt
  it("Bug #63882_2 (arsort crash on recursion)", function () {
    expect(parser.parseCode("<?php\n$token = array();\n$conditions = array();\nfor ($i = 0; $i <= 2; $i++) {\n    $tokens = $conditions;\n    $a[0] =& $a;\n    $a = unserialize(serialize($GLOBALS));\n    $a[0] =& $a;\n    $a = unserialize(serialize($GLOBALS));\n    $a[0] =& $a;\n    foreach($a as $v) {\n        if ($v == 1) {\n            arsort($a);\n        }\n    }\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
