// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmp_get_quick_print.phpt
  it("Function snmp_get_quick_print / snmp_set_quick_print", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\necho \"Checking working\\n\";\nvar_dump(snmp_get_quick_print());\nsnmp_set_quick_print(false);\nvar_dump(snmp_get_quick_print());\nsnmp_set_quick_print(true);\nvar_dump(snmp_get_quick_print());\n?>")).toMatchSnapshot();
  });
});
