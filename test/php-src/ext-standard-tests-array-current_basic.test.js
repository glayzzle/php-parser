// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/current_basic.phpt
  it("Test current() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of current()\n */\necho \"*** Testing current() : basic functionality ***\\n\";\n$array = array ('zero', 'one', 'two', 'three' => 3);\nvar_dump(current($array));\nnext($array);\nvar_dump(current($array));\nend($array);\nvar_dump(current($array));\nnext($array);\nvar_dump(current($array));\n?>")).toMatchSnapshot();
  });
});
