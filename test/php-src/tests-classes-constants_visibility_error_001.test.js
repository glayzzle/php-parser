// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_error_001.phpt
  it("Class private constant visibility error", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private const privateConst = 'privateConst';\n}\nvar_dump(A::privateConst);\n?>")).toMatchSnapshot();
  });
});
