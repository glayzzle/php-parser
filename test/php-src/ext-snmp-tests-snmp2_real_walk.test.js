// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmp2_real_walk.phpt
  it("Function snmp2_real_walk", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\n//EXPECTF format is quickprint OFF\nsnmp_set_quick_print(false);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\necho \"Checking working\\n\";\necho \"Single OID\\n\";\n$return = snmp2_real_walk($hostname, $community, '.1.3.6.1.2.1.1', $timeout, $retries);\nvar_dump(gettype($return));\nvar_dump(sizeof($return));\nvar_dump(key($return));\nvar_dump(array_shift($return));\necho \"Single OID in array\\n\";\n$return = snmp2_real_walk($hostname, $community, array('.1.3.6.1.2.1.1'), $timeout, $retries);\nvar_dump(gettype($return));\nvar_dump(sizeof($return));\nvar_dump(key($return));\nvar_dump(array_shift($return));\necho \"More error handling\\n\";\necho \"Multiple correct OID\\n\";\n$return = snmp2_real_walk($hostname, $community, array('.1.3.6.1.2.1.1', '.1.3.6'), $timeout, $retries);\nvar_dump($return);\necho \"Multiple OID with wrong OID\\n\";\n$return = snmp2_real_walk($hostname, $community, array('.1.3.6.1.2.1.1', '.1.3.6...1'), $timeout, $retries);\nvar_dump($return);\n$return = snmp2_real_walk($hostname, $community, array('.1.3.6...1', '.1.3.6.1.2.1.1'), $timeout, $retries);\nvar_dump($return);\necho \"Single nonexisting OID\\n\";\n$return = snmp2_real_walk($hostname, $community, array('.1.3.6.99999.0.99999.111'), $timeout, $retries);\nvar_dump($return);\n?>")).toMatchSnapshot();
  });
});
