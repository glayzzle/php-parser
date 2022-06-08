// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_rename_ext.phpt
  it("ldap_rename_ext() - Rename operation with controls", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nvar_dump(\n    $result = ldap_rename_ext($link, \"cn=userA,$base\", \"cn=userZ\", \"$base\", TRUE,\n        [\n            ['oid' => LDAP_CONTROL_PRE_READ,  'iscritical' => TRUE, 'value' => ['attrs' => ['cn']]],\n            ['oid' => LDAP_CONTROL_POST_READ, 'iscritical' => TRUE, 'value' => ['attrs' => ['cn']]]\n        ]\n    ),\n    ldap_parse_result($link, $result, $errcode, $matcheddn, $errmsg, $referrals, $ctrls),\n    $errcode,\n    $errmsg,\n    $ctrls[LDAP_CONTROL_PRE_READ],\n    $ctrls[LDAP_CONTROL_POST_READ],\n    ldap_count_entries($link, ldap_search($link, \"$base\", \"(cn=userA)\", array(\"cn\"))),\n    ldap_count_entries($link, ldap_search($link, \"$base\", \"(cn=userZ)\", array(\"cn\")))\n);\n?>")).toMatchSnapshot();
  });
});
