// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/next_basic.phpt
  it("Test next() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of next()\n */\necho \"*** Testing next() : basic functionality ***\\n\";\n$array = array('zero', 'one', 'two');\necho key($array) . \" => \" . current($array) . \"\\n\";\nvar_dump(next($array));\necho key($array) . \" => \" . current($array) . \"\\n\";\nvar_dump(next($array));\necho key($array) . \" => \" . current($array) . \"\\n\";\nvar_dump(next($array));\n?>")).toMatchSnapshot();
  });
});
