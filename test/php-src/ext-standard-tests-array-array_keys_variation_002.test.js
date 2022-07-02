// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_keys_variation_002.phpt
  it("Test array_keys() function (variation - 2)", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing array_keys() on an array created on the fly ***\\n\";\nvar_dump(array_keys(array(\"a\" => 1, \"b\" => 2, \"c\" => 3)));\nvar_dump(array_keys(array()));  // null array\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
