// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmp_read_mib.phpt
  it("Function snmp_read_mib", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\necho \"Checking error handling\\n\";\nvar_dump(snmp_read_mib(__DIR__.'/cannotfindthisfile'));\necho \"Checking working\\n\";\nvar_dump(snmp_read_mib($mibdir . '/SNMPv2-MIB.txt'));\n?>")).toMatchSnapshot();
  });
});
