// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug77621.phpt
  it("Bug #77621 (Already defined constants are not properly reported)", function () {
    expect(parser.parseCode("<?php\ndefine('ADSTYPE_INVALID', 0);\n$root = dirname(array_change_key_case($_SERVER, CASE_UPPER)['COMSPEC']);\ncom_load_typelib(\"$root\\activeds.tlb\");\n?>")).toMatchSnapshot();
  });
});
