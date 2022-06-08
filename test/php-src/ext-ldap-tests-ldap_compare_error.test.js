// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_compare_error.phpt
  it("ldap_compare() - Testing ldap_compare() that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nvar_dump(\n    ldap_compare($link, \"cn=userNotAvailable,$base\", \"sn\", \"testSN1\"),\n    ldap_error($link),\n    ldap_errno($link)\n);\n?>")).toMatchSnapshot();
  });
});
