// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug78650.phpt
  it("Bug #78650 (new COM Crash)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/bug78650/foo/bar';\nmkdir($fname, 0777, true);\n$fso = new COM(\"Scripting.FileSystemObject\");\n$folder = $fso->GetFolder($fname);\n$folder->ParentFolder->Name = 'baz';\nprint('OK');\n?>")).toMatchSnapshot();
  });
});
