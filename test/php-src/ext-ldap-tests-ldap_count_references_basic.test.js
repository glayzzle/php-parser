// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_count_references_basic.phpt
  it("ldap_count_references() - Basic ldap_count_references test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nldap_add($link, \"cn=userref,$base\", array(\n        \"objectClass\" => array(\"extensibleObject\", \"referral\"),\n        \"cn\" => \"userref\",\n        \"ref\" => \"cn=userA,$base\",\n));\nldap_add($link, \"cn=userref2,$base\", array(\n        \"objectClass\" => array(\"extensibleObject\", \"referral\"),\n        \"cn\" => \"userref2\",\n        \"ref\" => \"cn=userB,$base\",\n));\nldap_set_option($link, LDAP_OPT_DEREF, LDAP_DEREF_NEVER);\n$result = ldap_search($link, \"$base\", \"(cn=*)\");\nvar_dump(ldap_count_references($link, $result));\n?>")).toMatchSnapshot();
  });
});
