// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/int.phpt
  it("Explicitly nullable int type", function () {
    expect(parser.parseCode("<?php\nfunction _int_(?int $v): ?int {\n    return $v;\n}\nvar_dump(_int_(null));\nvar_dump(_int_(1));\n?>")).toMatchSnapshot();
  });
});
