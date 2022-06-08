// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug69413.phpt
  it("Bug #69413: Warning in array_count_values() about array values not being string/int", function () {
    expect(parser.parseCode("<?php\n$array = ['a', 'b'];\n$ref =& $array[0];\nvar_dump(array_count_values($array));\n?>")).toMatchSnapshot();
  });
});
