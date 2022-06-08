// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmp_set_enum_print.phpt
  it("Function snmp_set_enum_print", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\necho \"Checking working\\n\";\nvar_dump(snmp_set_enum_print(0));\nvar_dump(snmp_set_enum_print(1));\n?>")).toMatchSnapshot();
  });
});
