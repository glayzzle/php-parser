// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation27.phpt
  it("Test sprintf() function : usage variations - char formats with char values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : char formats with char values ***\\n\";\n// array of char values\n$char_values = array( 'a', \"a\", 67, -67, 99, ' ', '', 'A', \"A\" );\n// array of char formats\n$char_formats = array(\n  \"%c\", \"%lc\", \" %c\", \"%c \",\n  \"\\t%c\", \"\\n%c\", \"%4c\", \"%30c\",\n);\n$count = 1;\nforeach($char_values as $char_value) {\n  echo \"\\n-- Iteration $count --\\n\";\n  foreach($char_formats as $format) {\n    var_dump( sprintf($format, $char_value) );\n  }\n  $count++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
