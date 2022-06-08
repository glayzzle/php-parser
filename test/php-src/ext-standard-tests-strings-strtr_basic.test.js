// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr_basic.phpt
  it("Test strtr() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strtr() : basic functionality ***\\n\";\n//definitions of required input variables\n$trans1_arr = array(\"t\" => \"T\", \"e\" => \"E\", \"st\" => \"ST\");\n$trans2_arr = array('t' => 'T', 'e' => 'E', 'st' => 'ST');\n$heredoc_str = <<<EOD\ntest strtr\nEOD;\n//translating single char\nvar_dump( strtr(\"test strtr\", \"t\", \"T\") );\nvar_dump( strtr('test strtr', 't', 'T') );\nvar_dump( strtr($heredoc_str, \"t\", \"T\") );\n//translating set of chars\n//$from and $to are of same length\nvar_dump( strtr(\"test strtr\", \"test\", \"TEST\") );\nvar_dump( strtr('test strtr', 'test', 'TEST') );\nvar_dump( strtr($heredoc_str, \"test\", \"TEST\") );\n//$from and $to are of different lengths, extra chars in the longer one are ignored\nvar_dump( strtr(\"test strtr\", \"test\", \"TESTz\") );\nvar_dump( strtr('test strtr', 'testz', 'TEST') );\nvar_dump( strtr($heredoc_str, \"test\", \"TESTz\") );\n//by using replace_pairs array\nvar_dump( strtr(\"test strtr\", $trans1_arr) );\nvar_dump( strtr('test strtr', $trans2_arr) );\nvar_dump( strtr($heredoc_str, $trans1_arr) );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
