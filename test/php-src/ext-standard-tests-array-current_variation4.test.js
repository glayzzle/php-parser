// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/current_variation4.phpt
  it("Test current() function : usage variations - multi-dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how current() behaves with muti-dimensional and recursive arrays\n */\necho \"*** Testing current() : usage variations ***\\n\";\necho \"\\n-- Two Dimensional Array --\\n\";\n$multi_array = array ('zero', array (1, 2, 3), 'two');\necho \"Initial Position: \";\nvar_dump(current($multi_array));\necho \"Next Position:    \";\nnext($multi_array);\nvar_dump(current($multi_array));\necho \"End Position:     \";\nend($multi_array);\nvar_dump(current($multi_array));\necho \"\\n-- Access an Array Within an Array --\\n\";\n//accessing an array within an array\necho \"Initial Position: \";\nvar_dump(current($multi_array[1]));\necho \"\\n-- Recursive, Multidimensional Array --\\n\";\n//create a recursive array\n$multi_array[] = &$multi_array;\n//See where internal pointer is after adding more elements\necho \"Current Position: \";\nvar_dump(current($multi_array));\n//see if internal pointer is in same position as referenced array\nvar_dump(current($multi_array[3][3][3]));\n// see if internal pointer is in the same position from when accessing this inner array\nvar_dump(current($multi_array[3][3][3][1]));\n?>")).toMatchSnapshot();
  });
});
