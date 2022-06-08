// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_exop_passwd_error.phpt
  it("ldap_exop_passwd() - Giving wrong value for old password", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nvar_dump(ldap_exop_passwd($link, \"cn=userA,$base\", \"wrongPassword\", \"newPassword\", $ctrls));\nvar_dump($ctrls);\nvar_dump(ldap_error($link));\nvar_dump(ldap_errno($link));\nvar_dump(test_bind($host, $port, \"cn=userA,$base\", \"newPassword\", $protocol_version));\n?>")).toMatchSnapshot();
  });
});
