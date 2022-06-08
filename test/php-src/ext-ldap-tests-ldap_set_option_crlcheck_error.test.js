// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_crlcheck_error.phpt
  it("ldap_set_option() - Error test for TLS CRL check ldap option", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\n$result = ldap_set_option($link, LDAP_OPT_X_TLS_CRLCHECK, 9001);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
