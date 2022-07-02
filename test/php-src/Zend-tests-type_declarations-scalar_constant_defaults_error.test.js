// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_constant_defaults_error.phpt
  it("Scalar type - default via constants - error condition", function () {
    expect(parser.parseCode("<?php\nconst STRING_VAL = \"test\";\nfunction int_val(int $a = STRING_VAL): int {\n    return $a;\n}\nvar_dump(int_val());\n?>")).toMatchSnapshot();
  });
});
