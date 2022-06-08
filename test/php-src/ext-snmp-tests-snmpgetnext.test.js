// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmpgetnext.phpt
  it("Function snmpgetnext", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n//EXPECTF format is quickprint OFF\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\necho \"Single OID\\n\";\nvar_dump(snmpgetnext($hostname, $community, '.1.3.6.1.2.1.1.1.0', $timeout, $retries));\necho \"Single OID in array\\n\";\nvar_dump(snmpgetnext($hostname, $community, array('.1.3.6.1.2.1.1.1.0'), $timeout, $retries));\necho \"Multiple OID\\n\";\nvar_dump(snmpgetnext($hostname, $community, array('.1.3.6.1.2.1.1.1.0', '.1.3.6.1.2.1.1.6.0'), $timeout, $retries));\n?>")).toMatchSnapshot();
  });
});
