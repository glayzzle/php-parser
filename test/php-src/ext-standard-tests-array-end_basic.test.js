// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/end_basic.phpt
  it("Test end() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of end()\n */\necho \"*** Testing end() : basic functionality ***\\n\";\n$array = array('zero', 'one', 200 => 'two');\necho \"\\n-- Initial Position: --\\n\";\necho key($array) . \" => \" . current($array) . \"\\n\";\necho \"\\n-- Call to end() --\\n\";\nvar_dump(end($array));\necho \"\\n-- Current Position: --\\n\";\necho key($array) . \" => \" . current($array) . \"\\n\";\necho \"\\n-- Add a new element to array --\\n\";\n$array[2] = 'foo';\nvar_dump(end($array));\n?>")).toMatchSnapshot();
  });
});
