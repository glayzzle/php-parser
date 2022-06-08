// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/drcp_cclass1.phpt
  it("DRCP: Test setting connection class inline", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/details.inc\");\n// Initialization\n$t = time();\n$cc1 = 'cc1_'.$t;\n$cc2 = 'cc2_'.$t;\n// Run Test\necho \"Test 1\\n\";\nini_set('oci8.connection_class', $cc1);\n$c = oci_pconnect($user, $password, $dbase);\n$s = oci_parse($c, \"select * from dual\");\noci_execute($s);\noci_fetch_all($s, $r);\nvar_dump($r);\necho \"Test 2\\n\";\nini_set('oci8.connection_class', $cc2);\n$c = oci_pconnect($user, $password, $dbase);\n$s = oci_parse($c, \"select * from dual\");\noci_execute($s);\noci_fetch_all($s, $r);\nvar_dump($r);\necho \"Test 3\\n\";\n$s = oci_parse($c, \"select cclass_name from v\\$cpool_cc_stats where cclass_name like '%.cc__$t' order by cclass_name\");\noci_execute($s);\noci_fetch_all($s, $r);\nvar_dump($r);\n// Cleanup\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
