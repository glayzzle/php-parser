// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/key_basic.phpt
  it("Test key() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of key()\n */\necho \"*** Testing key() : basic functionality ***\\n\";\n$array = array ('zero', 99 => 'one', 'two', 'three' => 3);\necho \"\\n-- Initial Position: --\\n\";\nvar_dump(key($array));\necho \"\\n-- Next Position: --\\n\";\nnext($array);\nvar_dump(key($array));\necho \"\\n-- End Position: --\\n\";\nend($array);\nvar_dump(key($array));\necho \"\\n-- Past end of the array --\\n\";\nnext($array);\nvar_dump(key($array));\n?>")).toMatchSnapshot();
  });
});
