// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_resource_type_basic.phpt
  it("Test get_resource_type() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_resource_type() : basic functionality ***\\n\";\n$res = fopen(__FILE__, \"r\");\nvar_dump(get_resource_type($res));\n?>")).toMatchSnapshot();
  });
});
