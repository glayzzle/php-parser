// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/bug64159.phpt
  it("Bug #64159: Truncated snmpget", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_LIBRARY);\nvar_dump((\"ab8283f948419b2d24d22f44a80b17d3\" === md5(snmpget($hostname, $community, '.1.3.6.1.4.1.2021.8.1.101.1'))));\n?>")).toMatchSnapshot();
  });
});
