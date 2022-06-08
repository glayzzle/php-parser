// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_bind_ext.phpt
  it("ldap_bind_ext() - Basic binding", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\nvar_dump(\n    $result = ldap_bind_ext($link, $user, $passwd),\n    ldap_parse_result($link, $result, $errcode, $matcheddn, $errmsg, $referrals, $ctrls),\n    $errcode,\n    $errmsg,\n    $ctrls,\n    $result = ldap_bind_ext($link, $user, $passwd, [['oid' => LDAP_CONTROL_PASSWORDPOLICYREQUEST]]),\n    ldap_parse_result($link, $result, $errcode, $matcheddn, $errmsg, $referrals, $ctrls),\n    $errcode,\n    $errmsg,\n    $ctrls\n);\n/* Failures */\nvar_dump(\n    $result = ldap_bind_ext($link, $user, \"wrongPassword\", [['oid' => LDAP_CONTROL_PASSWORDPOLICYREQUEST]]),\n    ldap_parse_result($link, $result, $errcode, $matcheddn, $errmsg, $referrals, $ctrls),\n    $errcode,\n    $errmsg,\n    $ctrls,\n    $result = ldap_bind_ext($link, \"unexistingProperty=weirdValue,$user\", $passwd, [['oid' => LDAP_CONTROL_PASSWORDPOLICYREQUEST]]),\n    ldap_parse_result($link, $result, $errcode, $matcheddn, $errmsg, $referrals, $ctrls),\n    $errcode,\n    $errmsg,\n    $ctrls\n);\n?>")).toMatchSnapshot();
  });
});
