// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_add_ext.phpt
  it("ldap_add_ext() - Add operation with controls", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\nvar_dump(\n    $result = ldap_add_ext($link, \"o=test_ldap_add_ext,$base\", array(\n        \"objectClass\"\t=> array(\n            \"top\",\n            \"organization\"),\n        \"o\"\t=> \"test_ldap_add_ext\",\n    ), [['oid' => LDAP_CONTROL_POST_READ, 'iscritical' => TRUE, 'value' => ['attrs' => ['o']]]]),\n    ldap_parse_result($link, $result, $errcode, $matcheddn, $errmsg, $referrals, $ctrls),\n    $errcode,\n    $errmsg,\n    $ctrls[LDAP_CONTROL_POST_READ],\n    ldap_get_entries(\n        $link,\n        ldap_search($link, \"$base\", \"(o=test_ldap_add_ext)\")\n    )\n);\n?>")).toMatchSnapshot();
  });
});
