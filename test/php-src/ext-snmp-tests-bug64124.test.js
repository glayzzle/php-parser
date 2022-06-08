// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/bug64124.phpt
  it("Bug #64124 IPv6 malformed", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n# hostname variable was modified inline in netsnmp_session_init()\n# Should be checked with IPv6 since IPv4 processing code do not alter pointer position\n//EXPECTF format is quickprint OFF\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\n$checkvar = \"$hostname6_port\";\nvar_dump(snmpget($checkvar, $community, '.1.3.6.1.2.1.1.1.0'));\nvar_dump(($checkvar === $hostname6_port));\nvar_dump(snmpget($checkvar, $community, '.1.3.6.1.2.1.1.1.0'));\nvar_dump(($checkvar === $hostname6_port));\nvar_dump(snmpget($checkvar, $community, '.1.3.6.1.2.1.1.1.0'));\nvar_dump(($checkvar === $hostname6_port));\n?>")).toMatchSnapshot();
  });
});
