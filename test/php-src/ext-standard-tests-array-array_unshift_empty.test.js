// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_unshift_empty.phpt
  it("Test array_unshift() function : prepend array with empty set", function () {
    expect(parser.parseCode("<?php\n$array = [1,2,3];\n$values = [];\nvar_dump( array_unshift($array) );\nvar_dump( array_unshift($array, ...$values) );\nvar_dump( $array );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
