// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug79299.phpt
  it("Bug #79299 (com_print_typeinfo prints duplicate variables)", function () {
    expect(parser.parseCode("<?php\n$dict = new COM(\"Scripting.Dictionary\");\nob_start();\ncom_print_typeinfo($dict);\n$typeinfo = ob_get_clean();\npreg_match_all('/\\/\\* DISPID=9 \\*\\//', $typeinfo, $matches);\nvar_dump($matches[0]);\n?>")).toMatchSnapshot();
  });
});
