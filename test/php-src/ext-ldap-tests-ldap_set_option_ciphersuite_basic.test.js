// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_ciphersuite_basic.phpt
  it("ldap_set_option() - Basic test for TLS cipher suite ldap option", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\n$result = ldap_set_option($link, LDAP_OPT_X_TLS_CIPHER_SUITE, '3DES');\nvar_dump($result);\nldap_get_option($link, LDAP_OPT_X_TLS_CIPHER_SUITE, $optionval);\nvar_dump($optionval);\n?>")).toMatchSnapshot();
  });
});
