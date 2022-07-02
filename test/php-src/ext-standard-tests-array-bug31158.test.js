// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug31158.phpt
  it("Bug #31158 (array_splice on $GLOBALS crashes)", function () {
    expect(parser.parseCode("<?php\nfunction __(){\n  $GLOBALS['a'] = \"bug\\n\";\n  array_splice($GLOBALS,0,count($GLOBALS));\n  /* All global variables including $GLOBALS are removed */\n  echo $GLOBALS['a'];\n}\n__();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
