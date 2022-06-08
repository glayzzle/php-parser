// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/range_variation1_64bit.phpt
  it("Test range() function (variation-2)", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing max/outof range values ***\\n\";\n/*var_dump( range(\"a\", \"z\", 255) );\nvar_dump( range(\"z\", \"a\", 255) ); */\nvar_dump( range(2147483645, 2147483646) );\nvar_dump( range(2147483646, 2147483648) );\nvar_dump( range(-2147483647, -2147483646) );\nvar_dump( range(-2147483648, -2147483647) );\nvar_dump( range(-2147483649, -2147483647) );\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
