// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug49192.phpt
  it("Bug #49192 (PHP crashes when GC invoked on COM object)", function () {
    expect(parser.parseCode("<?php\n$dbConnection = new Com('ADODB.Connection');\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
