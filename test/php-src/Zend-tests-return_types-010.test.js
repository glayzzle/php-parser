// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/010.phpt
  it("Returned null, expected array reference", function () {
    expect(parser.parseCode("<?php\nfunction &foo(array &$in) : array {\n    return null;\n}\n$array = [1, 2, 3];\nvar_dump(foo($array));\n?>")).toMatchSnapshot();
  });
});
