// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_option_reqcert_error.phpt
  it("ldap_option_reqcert_error() - A test to check if ldap can't connect to a LDAP server with a invalid certificate with certificate checking enabled", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\nldap_set_option(null, LDAP_OPT_X_TLS_REQUIRE_CERT, LDAP_OPT_X_TLS_HARD);\n$link = ldap_connect($host, $port);\nldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\nvar_dump(@ldap_bind($link, $user, $passwd));\n?>")).toMatchSnapshot();
  });
});
