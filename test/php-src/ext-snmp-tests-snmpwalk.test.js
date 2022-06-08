// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmpwalk.phpt
  it("Function snmpwalk", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n//EXPECTF format is quickprint OFF\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\necho \"Checking working\\n\";\necho \"Single OID\\n\";\n$return = snmpwalk($hostname, $community, '.1.3.6.1.2.1.1', $timeout, $retries);\nvar_dump(gettype($return));\nvar_dump(sizeof($return));\nvar_dump(gettype($return[0]));\nvar_dump(gettype($return[1]));\necho \"Single OID in array\\n\";\n$return = snmpwalk($hostname, $community, array('.1.3.6.1.2.1.1'), $timeout, $retries);\nvar_dump(gettype($return));\nvar_dump(gettype($return[0]));\necho \"Default OID\\n\";\n$return = snmpwalk($hostname, $community, '', $timeout, $retries);\nvar_dump(gettype($return));\nvar_dump(gettype($return[0]));\necho \"More error handling\\n\";\necho \"Single incorrect OID\\n\";\n$return = snmpwalk($hostname, $community, '.1.3.6...1', $timeout, $retries);\nvar_dump($return);\necho \"Multiple correct OID\\n\";\n$return = snmpwalk($hostname, $community, array('.1.3.6.1.2.1.1', '.1.3.6'), $timeout, $retries);\nvar_dump($return);\necho \"Multiple OID with wrong OID\\n\";\n$return = snmpwalk($hostname, $community, array('.1.3.6.1.2.1.1', '.1.3.6...1'), $timeout, $retries);\nvar_dump($return);\n$return = snmpwalk($hostname, $community, array('.1.3.6...1', '.1.3.6.1.2.1.1'), $timeout, $retries);\nvar_dump($return);\necho \"Single nonexisting OID\\n\";\n$return = snmpwalk($hostname, $community, array('.1.3.6.99999.0.99999.111'), $timeout, $retries);\nvar_dump($return);\n?>")).toMatchSnapshot();
  });
});
