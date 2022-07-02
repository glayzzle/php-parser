// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_recursive.phpt
  it("Test array_walk_recursive()", function () {
    expect(parser.parseCode("<?php\nfunction foo($value) {\n    echo $value . \" foo\\n\";\n}\nfunction bar($value) {\n    echo $value . \" bar\\n\";\n}\n$arr = array (1,2,3);\nvar_dump (array_walk_recursive ($arr, 'foo'));\nvar_dump (array_walk_recursive ($arr, 'bar'));\n?>")).toMatchSnapshot();
  });
});
