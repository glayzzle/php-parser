// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmp2_set-nomib.phpt
  it("Function snmp2_set (without MIBs loading)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n//EXPECTF format is quickprint OFF\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\necho \"Check error handing\\n\";\necho \"Nonexisting OID\\n\";\n$z = snmp2_set($hostname, $communityWrite, '.1.3.6.777.888.999.444.0', 's', 'bbb', $timeout, $retries);\nvar_dump($z);\necho \"Bogus OID\\n\";\n$z = snmp2_set($hostname, $communityWrite, '.1.3.6...777.888.999.444.0', 's', 'bbb', $timeout, $retries);\nvar_dump($z);\necho \"Checking working\\n\";\n$oid1 = '.1.3.6.1.2.1.1.4.0';\n$oldvalue1 = snmpget($hostname, $communityWrite, $oid1, $timeout, $retries);\n$newvalue1 = $oldvalue1 . '0';\necho \"Single OID\\n\";\n$z = snmp2_set($hostname, $communityWrite, $oid1, 's', $newvalue1, $timeout, $retries);\nvar_dump($z);\nvar_dump((snmpget($hostname, $communityWrite, $oid1, $timeout, $retries) === $newvalue1));\n$z = snmp2_set($hostname, $communityWrite, $oid1, 's', $oldvalue1, $timeout, $retries);\nvar_dump($z);\nvar_dump((snmpget($hostname, $communityWrite, $oid1, $timeout, $retries) === $oldvalue1));\n?>")).toMatchSnapshot();
  });
});
