// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_get_option_package_basic.phpt
  it("ldap_get_option() - Basic test for getting the TLS package ldap option", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\n$result = ldap_get_option($link, LDAP_OPT_X_TLS_PACKAGE, $optionval);\nvar_dump(in_array($optionval, ['GnuTLS', 'OpenSSL', 'MozNSS']));\n// This is a read-only option.\nvar_dump(ldap_set_option($link, LDAP_OPT_X_TLS_PACKAGE, 'foo'));\n?>")).toMatchSnapshot();
  });
});
