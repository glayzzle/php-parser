// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug43541.phpt
  it("Bug #43541 (length parameter omitted or not does not work when casted to float)", function () {
    expect(parser.parseCode("<?php\n$arr = array(1, 2, 3, 4, 5, 6);\nvar_dump(array_slice($arr, 0, (float)2));\nvar_dump(array_slice($arr, 0, (int)2));\n?>")).toMatchSnapshot();
  });
});
