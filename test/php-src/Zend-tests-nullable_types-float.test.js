// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/float.phpt
  it("Explicitly nullable float type", function () {
    expect(parser.parseCode("<?php\nfunction _float_(?float $v): ?float {\n    return $v;\n}\nvar_dump(_float_(null));\nvar_dump(_float_(1.3));\n?>")).toMatchSnapshot();
  });
});
