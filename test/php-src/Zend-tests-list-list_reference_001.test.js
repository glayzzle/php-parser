// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_001.phpt
  it("\"Reference Unpacking - General\" list()", function () {
    expect(parser.parseCode("<?php\n$arr = array(1, array(2));\nlist(&$a, list(&$b)) = $arr;\nvar_dump($a, $b);\nvar_dump($arr);\n$arr = array(1, array(2));\nlist($a, &$b) = $arr;\nvar_dump($arr);\n$arr = array(1, array(2));\n[&$a, [&$b]] = $arr;\nvar_dump($a, $b);\nvar_dump($arr);\n$arr = array(1, array(2));\n[&$a, [&$b], &$c] = $arr;\nvar_dump($a, $b, $c);\nvar_dump($arr);\n$arr = array(\"one\" => 1, \"two\" => array(2));\n[\"one\" => &$a, \"two\" => [&$b], \"three\" => &$c] = $arr;\nvar_dump($a, $b, $c);\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
