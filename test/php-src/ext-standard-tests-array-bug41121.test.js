// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug41121.phpt
  it("Bug #41121 (range() overflow handling for large numbers on 32bit machines)", function () {
    expect(parser.parseCode("<?php\n// posotive steps\nvar_dump(range(2147483400, 2147483600, 100));\nvar_dump( range(2147483646, 2147483648, 1 ) );\nvar_dump( range(2147483646, 2147483657, 1 ) );\nvar_dump( range(2147483630, 2147483646, 5 ) );\n// negative steps\nvar_dump( range(-2147483645, -2147483648, 1 ) );\nvar_dump( range(-2147483645, -2147483649, 1 ) );\nvar_dump( range(-2147483630, -2147483646, 5 ) );\n// low > high\nvar_dump(range(2147483647, 2147483645, 1 ));\nvar_dump(range(2147483648, 2147483645, 1 ));\n?>")).toMatchSnapshot();
  });
});
