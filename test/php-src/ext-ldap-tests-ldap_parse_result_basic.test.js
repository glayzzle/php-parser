// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_parse_result_basic.phpt
  it("ldap_parse_result() - Basic ldap_parse_result test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nldap_add($link, \"cn=userref,$base\", array(\n        \"objectClass\" => array(\"extensibleObject\", \"referral\"),\n        \"cn\" => \"userref\",\n        \"ref\" => \"cn=userA,$base\",\n));\n$result = ldap_search($link, \"cn=userref,$base\", \"(cn=user*)\");\n$errcode = $dn = $errmsg = $refs =  null;\nvar_dump(\n    ldap_parse_result($link, $result, $errcode, $dn, $errmsg, $refs),\n    $errcode, $dn, $errmsg, $refs\n);\n?>")).toMatchSnapshot();
  });
});
