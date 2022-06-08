// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrev_variation1.phpt
  it("Test strrev() function : usage variations - double quoted strings", function () {
    expect(parser.parseCode("<?php\n/* Testing strrev() function with various double quoted strings for 'str' */\necho \"*** Testing strrev() : with various double quoted strings ***\\n\";\n$str = \"Hiiii\";\n$strings = array(\n  //strings containing escape chars\n  \"hello\\\\world\",\n  \"hello\\$world\",\n  \"\\ttesting\\ttesting\\tstrrev\",\n  \"testing\\rstrrev testing strrev\",\n  \"testing\\fstrrev \\f testing \\nstrrev\",\n  \"\\ntesting\\nstrrev\\n testing \\n strrev\",\n  \"using\\vvertical\\vtab\",\n  //polyndrome strings\n  \"HelloolleH\",\n  \"ababababababa\",\n  //numeric + strings\n  \"Hello123\",\n  \"123Hello\",\n  \"123.34Hello\",\n  \"Hello1.234\",\n  \"123Hello1.234\",\n  //concatenated strings\n  \"Hello\".chr(0).\"World\",\n  \"Hello\".\"world\",\n  \"Hello\".$str,\n  //strings containing white spaces\n  \"              h\",\n  \"h              \",\n  \"      h        \",\n  \"h  e  l  l  o  \",\n  //strings containing quotes\n  \"\\hello\\'world\",\n  \"hello\\\"world\",\n  //special chars in strings\n  \"t@@#$% %test ^test &test *test +test -test\",\n  \"!test ~test `test` =test= @test@test.com\",\n  \"/test/r\\test\\strrev\\t\\\\u /uu/\",\n  //only special chars\n  \"!@#$%^&*()_+=-`~\"\n);\n$count = 1;\nfor( $index = 0; $index < count($strings); $index++ ) {\n  echo \"\\n-- Iteration $count --\\n\";\n  var_dump( strrev($strings[$index]) );\n  $count ++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
