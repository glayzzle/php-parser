// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/const_array_with_resource_key.phpt
  it("Constexpr arrays should be able to handle resource keys", function () {
    expect(parser.parseCode("<?php\nconst FOO = [STDIN => 42];\nvar_dump(FOO);\n?>")).toMatchSnapshot();
  });
});
