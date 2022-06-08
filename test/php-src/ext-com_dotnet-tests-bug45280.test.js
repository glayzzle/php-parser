// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug45280.phpt
  it("Bug #45280 (Reflection of instantiated COM classes causes PHP to crash)", function () {
    expect(parser.parseCode("<?php\n$dict = new COM(\"Scripting.Dictionary\");\n$reflection = new ReflectionObject($dict);\nob_start();\necho $reflection;\nob_get_clean();\necho 'done';\n?>")).toMatchSnapshot();
  });
});
