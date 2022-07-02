// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_values_variation5.phpt
  it("Test array_values() function : usage variations - internal array pointer", function () {
    expect(parser.parseCode("<?php\n/*\n * Test the position of the internal array pointer after a call to array_values\n */\necho \"*** Testing array_values() : usage variations ***\\n\";\n$input = array ('one' => 'un', 'two' => 'deux', 'three' => 'trois');\necho \"\\n-- Call array_values() --\\n\";\nvar_dump($result = array_values($input));\necho \"-- Position of Internal Pointer in Result: --\\n\";\necho key($result) . \" => \" . current($result) . \"\\n\";\necho \"\\n-- Position of Internal Pointer in Original Array: --\\n\";\necho key($input) . \" => \" . current ($input) . \"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
