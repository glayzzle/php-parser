// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug39606.phpt
  it("COM: Loading typelib corrupts memory", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$arEnv = array_change_key_case($_SERVER, CASE_UPPER);\n$root = dirname($arEnv['COMSPEC']);\n$typelib = $root.'\\activeds.tlb';\nvar_dump(com_load_typelib($typelib));\nvar_dump(com_load_typelib($typelib));\n?>")).toMatchSnapshot();
  });
});
