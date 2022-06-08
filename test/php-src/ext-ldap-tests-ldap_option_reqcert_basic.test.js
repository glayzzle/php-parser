// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_option_reqcert_basic.phpt
  it("ldap_option_reqcert_basic() - Basic test to check if PHP can connect to a LDAP server with an invalid certificate with certificate checking disabled", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\nldap_set_option(null, LDAP_OPT_X_TLS_REQUIRE_CERT, LDAP_OPT_X_TLS_NEVER);\n$link = ldap_connect($host, $port);\nldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\nvar_dump(@ldap_bind($link, $user, $passwd));\n?>")).toMatchSnapshot();
  });
});
