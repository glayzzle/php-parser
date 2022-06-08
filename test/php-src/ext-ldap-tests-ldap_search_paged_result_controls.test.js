// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_search_paged_result_controls.phpt
  it("ldap_search() test with paged result controls", function () {
    expect(parser.parseCode("<?php\ninclude \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$dn = \"$base\";\n$filter = \"(cn=user*)\";\nvar_dump(\n    $result = ldap_search($link, $dn, $filter, array('cn'), 0, 0, 0, LDAP_DEREF_NEVER,\n        [['oid' => LDAP_CONTROL_PAGEDRESULTS, 'value' => ['size' => 2]]]),\n    ldap_get_entries($link, $result),\n    ldap_parse_result($link, $result, $errcode , $matcheddn , $errmsg , $referrals, $controls),\n    $result = ldap_search($link, $dn, $filter, array('cn'), 0, 0, 0, LDAP_DEREF_NEVER,\n        [['oid' => LDAP_CONTROL_PAGEDRESULTS, 'value' => ['size' => 20, 'cookie' => $controls[LDAP_CONTROL_PAGEDRESULTS]['value']['cookie']]]]),\n    ldap_get_entries($link, $result)\n);\n?>")).toMatchSnapshot();
  });
});
