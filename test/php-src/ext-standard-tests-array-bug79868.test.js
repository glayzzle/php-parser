// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug79868.phpt
  it("Bug #79868: Sorting with array_unique gives unwanted result", function () {
    expect(parser.parseCode("<?php\nvar_dump(array_unique(['b', 'a', 'b'], SORT_REGULAR));\n?>")).toMatchSnapshot();
  });
});
