// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/string.phpt
  it("Explicitly nullable string type", function () {
    expect(parser.parseCode("<?php\nfunction _string_(?string $v): ?string {\n    return $v;\n}\nvar_dump(_string_(null));\nvar_dump(_string_(\"php\"));\n?>")).toMatchSnapshot();
  });
});
