// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_repeat.phpt
  it("Test str_repeat() function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing str_repeat() with possible strings ***\";\n$variations = array(\n  'a',\n  'foo',\n  'barbazbax',\n  \"\\x00\",\n  '\\0',\n  TRUE,\n  4,\n  1.23,\n  \"\",\n  \" \"\n);\n/* variations in string and multiplier as an int */\nforeach($variations as $input) {\n  echo \"\\n--- str_repeat() of '$input' ---\\n\" ;\n  for($n=0; $n<4; $n++) {\n    echo \"-- after repeating $n times is => \";\n    echo str_repeat($input, $n).\"\\n\";\n  }\n}\necho \"\\n\\n*** Testing error conditions ***\\n\";\ntry {\n    str_repeat($input[0], -1); // Invalid arg for multiplier\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
