// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_009.phpt
  it("\"Reference Unpacking - VM Safety\" list()", function () {
    expect(parser.parseCode("<?php\n$ary = [[0, 1]];\n[[\n    0 => &$a,\n    ($ary[\"foo\"] = 1) => &$b\n]] = $ary;\nvar_dump($ary, $a, $b);\nunset($ary, $a, $b);\n$ary = [[0, 1]];\n[\n    0 => &$a,\n    ($ary[\"foo\"] = 1) => &$b\n] = $ary[0];\nvar_dump($ary, $a, $b);\n?>")).toMatchSnapshot();
  });
});
