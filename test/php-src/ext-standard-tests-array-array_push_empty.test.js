// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_push_empty.phpt
  it("Test array_push() function : push empty set to the array", function () {
    expect(parser.parseCode("<?php\n$array = [1,2,3];\n$values = [];\nvar_dump( array_push($array) );\nvar_dump( array_push($array, ...$values) );\nvar_dump( $array );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
