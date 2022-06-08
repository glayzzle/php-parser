// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/generic_timeout_error.phpt
  it("Generic timeout (wrong community)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n//EXPECTF format is quickprint OFF\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\nvar_dump(snmpget($hostname, 'timeout_community_432', '.1.3.6.1.2.1.1.1.0', $timeout, $retries));\nvar_dump(snmpget($hostname, 'timeout_community_432', array('.1.3.6.1.2.1.1.1.0'), $timeout, $retries));\n?>")).toMatchSnapshot();
  });
});
