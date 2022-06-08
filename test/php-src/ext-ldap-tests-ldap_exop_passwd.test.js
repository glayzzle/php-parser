// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_exop_passwd.phpt
  it("ldap_exop_passwd() - Changing password through EXOP", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n// ldap_exop_passwd() allows to pass the DN, OLD and NEW passwords,\n// and optionally returns the NEW password if none was passed.\nvar_dump(\n  $genpw = ldap_exop_passwd($link, \"cn=userA,$base\", \"oops\", \"\", $ctrls),\n  $ctrls,\n  $genpw = ldap_exop_passwd($link, \"cn=userA,$base\"),\n  test_bind($host, $port, \"cn=userA,$base\", $genpw, $protocol_version),\n  ldap_exop_passwd($link, \"cn=userA,$base\", $genpw, \"newPassword\"),\n  test_bind($host, $port, \"cn=userA,$base\", \"newPassword\", $protocol_version)\n);\n?>")).toMatchSnapshot();
  });
});
