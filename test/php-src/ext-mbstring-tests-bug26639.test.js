// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug26639.phpt
  it("Bug #26639 (mb_convert_variables() clutters variables beyond the references)", function () {
    expect(parser.parseCode("<?php\n$a = \"����������\";\n$b = $a;\nmb_convert_variables(\"EUC-JP\", \"Shift_JIS\", $b);\nvar_dump($a);\nvar_dump($b);\nunset($a);\nunset($b);\n$a = \"����������\";\n$b = &$a;\nmb_convert_variables(\"EUC-JP\", \"Shift_JIS\", $b);\nvar_dump($a);\nvar_dump($b);\nunset($a);\nunset($b);\n$a = \"����������\";\n$b = array($a);\n$c = $b;\nmb_convert_variables(\"EUC-JP\", \"Shift_JIS\", $c);\nvar_dump($b);\nvar_dump($c);\nunset($a);\nunset($b);\nunset($c);\n$a = \"����������\";\n$b = array(&$a);\n$c = $b;\nmb_convert_variables(\"EUC-JP\", \"Shift_JIS\", $c);\nvar_dump($b);\nvar_dump($c);\nunset($a);\nunset($b);\nunset($c);\n$a = \"����������\";\n$b = array($a);\n$c = &$b;\nmb_convert_variables(\"EUC-JP\", \"Shift_JIS\", $c);\nvar_dump($b);\nvar_dump($c);\nunset($a);\nunset($b);\nunset($c);\n$a = \"����������\";\n$b = array(&$a);\n$c = &$b;\nmb_convert_variables(\"EUC-JP\", \"Shift_JIS\", $c);\nvar_dump($b);\nvar_dump($c);\nunset($a);\nunset($b);\nunset($c);\n$a = array(array(\"����������\"));\n$b = $a;\n$c = $b;\nmb_convert_variables(\"EUC-JP\", \"Shift_JIS\", $c);\nvar_dump($b);\nvar_dump($c);\nunset($a);\nunset($b);\nunset($c);\n?>")).toMatchSnapshot();
  });
});
