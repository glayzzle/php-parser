// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug69939.phpt
  it("Bug #69939 (Casting object to bool returns false)", function () {
    expect(parser.parseCode("<?php\nvar_dump((bool) new COM('WScript.Shell'));\n?>")).toMatchSnapshot();
  });
});
