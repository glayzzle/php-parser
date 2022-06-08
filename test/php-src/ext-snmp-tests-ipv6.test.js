// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/ipv6.phpt
  it("IPv6 support", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n//EXPECTF format is quickprint OFF\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\nvar_dump(snmpget($hostname6_port, $community, '.1.3.6.1.2.1.1.1.0'));\nvar_dump(snmpget('[dead:beef::', $community, '.1.3.6.1.2.1.1.1.0'));\n?>")).toMatchSnapshot();
  });
});
