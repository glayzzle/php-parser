// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_resource_id.phpt
  it("get_resource_id() function", function () {
    expect(parser.parseCode("<?php\n$file = fopen(__FILE__, 'r');\n// get_resource_id() is equivalent to an integer cast.\nvar_dump(get_resource_id($file) === (int) $file);\n// Also works with closed resources.\nfclose($file);\nvar_dump(get_resource_id($file) === (int) $file);\n?>")).toMatchSnapshot();
  });
});
