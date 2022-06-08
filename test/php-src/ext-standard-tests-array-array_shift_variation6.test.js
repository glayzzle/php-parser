// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_shift_variation6.phpt
  it("Test array_shift() function : usage variations - Referenced arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_shift when passed:\n * 1. a variable that is referenced to an array\n * 2. an array that contains a referenced array\n */\necho \"*** Testing array_shift() : usage variations ***\\n\";\necho \"\\n-- Variable is referenced array --\\n\";\n$original_array = array('zero', 'one', 'two');\n$copied_array = &$original_array;\necho \"Result: \";\nvar_dump(array_shift($copied_array));\necho \"\\n\\$original_array:\\n\";\nvar_dump($original_array);\necho \"\\n\\$copied_array:\\n\";\nvar_dump($copied_array);\necho \"\\n-- Element is referenced array --\\n\";\n$new_array = array (&$copied_array, 1, 'two');\necho \"Result: \";\nvar_dump(array_shift($new_array[0]));\necho \"\\n\\$new_array:\\n\";\nvar_dump($new_array);\necho \"\\n\\$copied_array\\n\";\nvar_dump($copied_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
