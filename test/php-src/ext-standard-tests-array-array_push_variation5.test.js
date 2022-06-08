// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_push_variation5.phpt
  it("Test array_push() function : usage variations - position of internal array pointer", function () {
    expect(parser.parseCode("<?php\n/*\n * Check the position of the internal array pointer after calling array_push()\n */\necho \"*** Testing array_push() : usage variations ***\\n\";\n$stack = array ('one' => 'un', 'two' => 'deux');\n$var0 = 'zero';\necho \"\\n-- Call array_push() --\\n\";\nvar_dump($result = array_push($stack, $var0));\necho \"\\n-- Position of Internal Pointer in Original Array: --\\n\";\necho key($stack) . \" => \" . current ($stack) . \"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
