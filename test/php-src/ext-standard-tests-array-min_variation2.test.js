// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/min_variation2.phpt
  it("Test variations in usage of min()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/array.c\n*/\necho \"\\n*** Testing arrays  ***\\n\";\nvar_dump(min(array(2,1,2)));\nvar_dump(min(array(-2,1,2)));\nvar_dump(min(array(2.1,2.11,2.09)));\nvar_dump(min(array(\"\", \"t\", \"b\")));\nvar_dump(min(array(false, true, false)));\nvar_dump(min(array(true, false, true)));\nvar_dump(min(array(1, true, false, true)));\nvar_dump(min(array(0, true, false, true)));\nvar_dump(min(array(0, 1, array(2,3))));\nvar_dump(min(array(2147483645, 2147483646)));\nvar_dump(min(array(2147483647, 2147483648)));\nvar_dump(min(array(2147483646, 2147483648)));\nvar_dump(min(array(-2147483647, -2147483646)));\nvar_dump(min(array(-2147483648, -2147483647)));\nvar_dump(min(array(-2147483649, -2147483647)));\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
