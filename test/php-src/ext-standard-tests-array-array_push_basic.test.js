// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_push_basic.phpt
  it("Test array_push() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of array_push with indexed and associative arrays\n */\necho \"*** Testing array_push() : basic functionality ***\\n\";\n$array = array ('zero', 'one', 'two');\n$var1 = 'three';\n$var2 = 'four';\necho \"\\n-- Push values onto an indexed array --\\n\";\nvar_dump(array_push($array, $var1, $var2));\nvar_dump($array);\n$array_assoc = array ('one' => 'un', 'two' => 'deux');\necho \"\\n-- Push values onto an associative array --\\n\";\nvar_dump(array_push($array_assoc, $var1, $var2));\nvar_dump($array_assoc);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
