// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/ucwords_variation3.phpt
  it("Test ucwords() function : usage variations - single quoted string", function () {
    expect(parser.parseCode("<?php\n/*\n * test ucwords() with different string prepared using single quote\n*/\necho \"*** Testing ucwords() : usage variations ***\\n\";\n// different strings containing regular chars and special chars\n$str_array = array(\n  // multiple spaces\n  'testing    ucwords',\n  't e s t i n g   u c w o r d s ',\n  // brackets in sentence\n  'testing function(ucwords)',\n  '(testing ( function (ucwords) )a )test',\n  '(t)',\n  ' ( t )t',\n  // using quote chars in sentence\n  '\"testing\",ucword,\"test\"',\n  '\"t\"\"t\",test, t',\n  '\\'t \\'t\\',test',\n  // using other white spaces\n  '\\ttesting\\ttesting\\tucwords',\n  'testing\\rucwords testing ucwords',\n  'testing\\fucwords \\f testing \\nucwords',\n  '\\ntesting\\nucwords\\n testing \\n ucwords',\n  'using\\vvertical\\vtab',\n  //using special chars in sentence\n  't@@#$% %test ^test &test *test +test -test',\n  '!test ~test `test` =test= @test@test.com',\n  '/test/r\\test\\ucwords\\t\\y\\y\\u\\3 \\yy\\ /uu/',\n  //only special chars\n  '!@#$%^&*()_+=-`~'\n);\n// loop through the $str_array array to test ucwords on each element\n$iteration = 1;\nfor($index = 0; $index < count($str_array); $index++) {\n  echo \"-- Iteration $iteration --\\n\";\n  var_dump( ucwords($str_array[$index]) );\n  $iteration++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
