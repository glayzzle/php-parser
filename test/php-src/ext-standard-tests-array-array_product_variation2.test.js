// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_product_variation2.phpt
  it("Test array_product() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_product() : variations ***\\n\";\necho \"\\n-- Testing array_product() function with a keyed array array --\\n\";\nvar_dump( array_product(array(\"bob\" => 2, \"janet\" => 5)) );\n?>")).toMatchSnapshot();
  });
});
