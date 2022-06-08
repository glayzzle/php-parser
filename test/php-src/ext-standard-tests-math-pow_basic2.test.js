// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/pow_basic2.phpt
  it("Test pow() - basic function test pow() - with large exponents", function () {
    expect(parser.parseCode("<?php\n$large_exp = 20000;\necho \"\\n-- The following all result in INF --\\n\";\nvar_dump(pow(24, $large_exp));\nvar_dump(pow(0.24, -$large_exp));\nvar_dump(pow(-0.24, -$large_exp));\necho \"\\n\\n-- The following all result in 0 --\\n\";\nvar_dump(pow(0.24, $large_exp));\nvar_dump(pow(-0.24, $large_exp));\nvar_dump(pow(24, -$large_exp));\nvar_dump(pow(-24, -$large_exp));\necho \"\\n\\n-- The following all result in -0 --\\n\";\nvar_dump(pow(-0.24, $large_exp+1));\necho \"\\n\\n-- The following all result in -INF --\\n\";\nvar_dump(pow(-24, $large_exp+1));\nvar_dump(pow(-0.24, -$large_exp+1));\n?>")).toMatchSnapshot();
  });
});
