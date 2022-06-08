// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_reqcert_error.phpt
  it("ldap_option_reqcert_basic() - Error test for TLS require cert ldap option", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\n$result = ldap_set_option($link, LDAP_OPT_X_TLS_REQUIRE_CERT, 9001);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
