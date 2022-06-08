// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/wrong_hostname.phpt
  it("Wrong hostname", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n//EXPECTF format is quickprint OFF\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\nvar_dump(snmpget('192.168..6.1', 'community', '.1.3.6.1.2.1.1.1.0', $timeout, $retries));\n?>")).toMatchSnapshot();
  });
});
