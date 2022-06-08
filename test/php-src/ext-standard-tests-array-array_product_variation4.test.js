// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_product_variation4.phpt
  it("Test array_product() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_product() : variations ***\\n\";\necho \"\\n-- Testing array_product() function with a very large array --\\n\";\n$array = array();\nfor ($i = 0; $i < 999; $i++) {\n  $array[] = 999;\n}\nvar_dump( array_product($array) );\n?>")).toMatchSnapshot();
  });
});
