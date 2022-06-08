// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_first_reference_basic.phpt
  it("ldap_first_reference() - Basic ldap_first_reference test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nldap_add($link, \"cn=userref,$base\", array(\n        \"objectClass\" => array(\"extensibleObject\", \"referral\"),\n        \"cn\" => \"userref\",\n        \"ref\" => \"cn=userA,$base\",\n));\nldap_set_option($link, LDAP_OPT_DEREF, LDAP_DEREF_NEVER);\n$result = ldap_search($link, \"$base\", \"(cn=*)\");\nvar_dump($ref = ldap_first_reference($link, $result));\n$refs = null;\nldap_parse_reference($link, $ref, $refs);\nvar_dump($refs);\n?>")).toMatchSnapshot();
  });
});
