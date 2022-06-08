// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug63208.phpt
  it("Bug #63208 (BSTR to PHP string conversion not binary safe)", function () {
    expect(parser.parseCode("<?php\n$string = \"\\u{0905}b\\0cd\";\n$variant = new VARIANT($string, VT_ARRAY | VT_UI1, CP_UTF8); // Array of bytes\n$converted = (string) $variant;\nvar_dump(bin2hex($string));\nvar_dump(bin2hex($converted));\n?>")).toMatchSnapshot();
  });
});
