// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/join_variation4.phpt
  it("Test join() function : usage variations - different values for 'glue' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * test join() by passing different glue arguments\n*/\necho \"*** Testing join() : usage variations ***\\n\";\n$glues = array (\n  \"TRUE\",\n  true,\n  false,\n  array(\"key1\", \"key2\"),\n  \"\",\n  \" \",\n  \"string\\x00between\",\n  -1.566599999999999,\n  -0,\n  '\\0'\n);\n$pieces = array (\n  2,\n  0,\n  -639,\n  -1.3444,\n  true,\n  \"PHP\",\n  false,\n  \"\",\n  \" \",\n  6999.99999999,\n  \"string\\x00with\\x00...\\0\"\n);\n/* loop through  each element of $glues and call join */\n$counter = 1;\nfor($index = 0; $index < count($glues); $index ++) {\n  echo \"-- Iteration $counter --\\n\";\n  try {\n    var_dump(join($glues[$index], $pieces));\n  } catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n  }\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
