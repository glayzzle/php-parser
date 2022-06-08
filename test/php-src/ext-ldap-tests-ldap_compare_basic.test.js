// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_compare_basic.phpt
  it("ldap_compare() - Basic ldap_compare test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nvar_dump(\n    ldap_compare($link, \"cn=userA,$base\", \"sn\", \"testSN1\"),\n    ldap_compare($link, \"cn=userA,$base\", \"telephoneNumber\", \"yy-yy-yy-yy-yy\")\n);\n?>")).toMatchSnapshot();
  });
});
