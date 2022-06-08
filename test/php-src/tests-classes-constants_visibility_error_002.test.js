// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_error_002.phpt
  it("Class protected constant visibility error", function () {
    expect(parser.parseCode("<?php\nclass A {\n    protected const protectedConst = 'protectedConst';\n}\nvar_dump(A::protectedConst);\n?>")).toMatchSnapshot();
  });
});
