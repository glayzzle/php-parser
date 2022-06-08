// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug79242.phpt
  it("Bug #79242 (COM error constants don't match com_exception codes)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    DISP_E_DIVBYZERO,\n    DISP_E_OVERFLOW,\n    DISP_E_BADINDEX,\n    MK_E_UNAVAILABLE\n);\n?>")).toMatchSnapshot();
  });
});
