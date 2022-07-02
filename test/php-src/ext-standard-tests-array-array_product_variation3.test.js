// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_product_variation3.phpt
  it("Test array_product() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_product() : variations - negative numbers***\\n\";\necho \"\\n-- Testing array_product() function with one negative number --\\n\";\nvar_dump( array_product(array(-2)) );\necho \"\\n-- Testing array_product() function with two negative numbers --\\n\";\nvar_dump( array_product(array(-2, -3)) );\necho \"\\n-- Testing array_product() function with three negative numbers --\\n\";\nvar_dump( array_product(array(-2, -3, -4)) );\necho \"\\n-- Testing array_product() function with negative floats --\\n\";\nvar_dump( array_product(array(-1.5)));\necho \"\\n-- Testing array_product() function with negative floats --\\n\";\nvar_dump( array_product(array(-99999999.9, 99999999.1)));\n?>")).toMatchSnapshot();
  });
});
