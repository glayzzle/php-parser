// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/prev_basic.phpt
  it("Test prev() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of prev()\n */\necho \"*** Testing prev() : basic functionality ***\\n\";\n$array = array('zero', 'one', 'two');\nend($array);\necho key($array) . \" => \" . current($array) . \"\\n\";\nvar_dump(prev($array));\necho key($array) . \" => \" . current($array) . \"\\n\";\nvar_dump(prev($array));\necho key($array) . \" => \" . current($array) . \"\\n\";\nvar_dump(prev($array));\necho \"\\n*** Testing an array with differing values/keys ***\\n\";\n$array2 = array('one', 2 => \"help\", 3, false, 'stringkey2' => 'val2', 'stringkey1' => 'val1');\nend($array2);\n$length = count($array2);\nfor ($i = $length; $i > 0; $i--) {\n    var_dump(prev($array2));\n}\n?>")).toMatchSnapshot();
  });
});
