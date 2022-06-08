// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_parse_result_controls.phpt
  it("ldap_parse_result() - Test the parsing of controls from result object", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$dn = \"$base\";\n$filter = \"(cn=user*)\";\nvar_dump(\n    $result = ldap_search($link, $dn, $filter, array('cn'), 0, 0, 0, LDAP_DEREF_NEVER,\n        [['oid' => LDAP_CONTROL_PAGEDRESULTS, 'iscritical' => TRUE, 'value' => ['size' => 1]]]),\n    ldap_parse_result($link, $result, $errcode, $dn, $errmsg, $refs, $ctrls),\n    $ctrls[LDAP_CONTROL_PAGEDRESULTS]['oid'],\n    $ctrls[LDAP_CONTROL_PAGEDRESULTS]['value']['size'],\n    bin2hex($ctrls[LDAP_CONTROL_PAGEDRESULTS]['value']['cookie']),\n    ldap_get_entries($link, $result)['count']\n);\n?>")).toMatchSnapshot();
  });
});
