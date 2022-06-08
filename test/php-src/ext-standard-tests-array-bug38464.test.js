// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug38464.phpt
  it("Bug #38464 (array_count_values() mishandles numeric strings)", function () {
    expect(parser.parseCode("<?php\n$array = array('-000', ' 001', 1, ' 123', '+123');\nvar_dump(array_count_values($array));\n?>")).toMatchSnapshot();
  });
});
