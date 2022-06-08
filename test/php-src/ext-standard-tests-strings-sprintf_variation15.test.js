// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation15.phpt
  it("Test sprintf() function : usage variations - string formats with string values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : string formats with string values ***\\n\";\n// defining different heredoc strings\n/* string created using Heredoc (<<<) */\n$heredoc_string = <<<EOT\nThis is string defined\nusing heredoc.\nEOT;\n/* heredoc string with only numerics */\n$heredoc_numeric_string = <<<EOT\n123456 3993\n4849 string\nEOT;\n/* null heardoc string */\n$heredoc_empty_string = <<<EOT\nEOT;\n$heredoc_null_string = <<<EOT\nNULL\nEOT;\n// array of strings used to test the function\n$string_values = array(\n  \"\",\n  \" \",\n  '',\n  ' ',\n  \"string\",\n  'string',\n  \"NULL\",\n  'null',\n  \"FALSE\",\n  'true',\n  \"\\x0b\",\n  \"\\0\",\n  '\\0',\n  '\\060',\n  \"\\070\",\n  \"0x55F\",\n  \"055\",\n  \"@#$#$%%$^^$%^%^$^&\",\n  $heredoc_string,\n  $heredoc_numeric_string,\n  $heredoc_empty_string,\n  $heredoc_null_string\n);\n// array of string formats\n$string_formats = array(\n  \"%s\", \"%ls\", \" %s\", \"%s \",\n  \"\\t%s\", \"\\n%s\", \"%4s\", \"%30s\",\n);\n$count = 1;\nforeach($string_values as $string_value) {\n  echo \"\\n-- Iteration $count --\\n\";\n  foreach($string_formats as $format) {\n    var_dump( sprintf($format, $string_value) );\n  }\n  $count++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
