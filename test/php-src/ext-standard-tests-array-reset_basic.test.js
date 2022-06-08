// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/reset_basic.phpt
  it("Test reset() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of reset()\n */\necho \"*** Testing reset() : basic functionality ***\\n\";\n$array = array('zero', 'one', 200 => 'two');\necho \"\\n-- Initial Position: --\\n\";\necho key($array) . \" => \" . current($array) . \"\\n\";\necho \"\\n-- Call to next() --\\n\";\nvar_dump(next($array));\necho \"\\n-- Current Position: --\\n\";\necho key($array) . \" => \" . current($array) . \"\\n\";\necho \"\\n-- Call to reset() --\\n\";\nvar_dump(reset($array));\n?>")).toMatchSnapshot();
  });
});
