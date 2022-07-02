// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/double_array_cast.phpt
  it("Double array cast", function () {
    expect(parser.parseCode("<?php\n$array = [1, 2, $x = 3];\nvar_dump((array) (array) $array);\n?>")).toMatchSnapshot();
  });
});
