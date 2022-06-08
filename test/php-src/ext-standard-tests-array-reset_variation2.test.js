// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/reset_variation2.phpt
  it("Test reset() function : usage variations - unset first element", function () {
    expect(parser.parseCode("<?php\n/*\n * Unset first element of an array and test behaviour of reset()\n */\necho \"*** Testing reset() : usage variations ***\\n\";\n$array = array('a', 'b', 'c');\necho \"\\n-- Initial Position: --\\n\";\necho current($array) . \" => \" . key($array) . \"\\n\";\necho \"\\n-- Unset First element in array and check reset() --\\n\";\nunset($array[0]);\nvar_dump(reset($array));\n?>")).toMatchSnapshot();
  });
});
