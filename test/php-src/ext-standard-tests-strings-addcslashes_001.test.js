// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/addcslashes_001.phpt
  it("Test addcslashes() function (variation 1)", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing addcslashes() for basic operations ***\\n\";\n/* checking normal operation of addcslashes */\n$string = \"goodyear12345NULL\\0truefalse\\a\\v\\f\\b\\n\\r\\t\";\n$charlist = array (\n  2,\n  array(5,6,7),\n  \"a\",\n  \"\\0\",\n  \"\\n\",\n  \"\\r\",\n  \"\\t\",\n  \"\\a\",\n  \"\\v\",\n  \"\\b\",\n  \"\\f\"\n);\n/* loop prints string with backslashes before characters\n   mentioned in $char using addcslashes() */\n$counter = 1;\nforeach($charlist as $char) {\n  echo \"-- Iteration $counter --\\n\";\n  try {\n    var_dump( addcslashes($string, $char) );\n  } catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n  }\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
