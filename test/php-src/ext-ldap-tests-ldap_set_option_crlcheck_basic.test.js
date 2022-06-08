// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_crlcheck_basic.phpt
  it("ldap_set_option() - Basic test for TLS CRL check ldap option", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nforeach([\n    LDAP_OPT_X_TLS_CRL_NONE,\n    LDAP_OPT_X_TLS_CRL_PEER,\n    LDAP_OPT_X_TLS_CRL_ALL,\n] as $option) {\n    $result = ldap_set_option($link, LDAP_OPT_X_TLS_CRLCHECK, $option);\n    var_dump($result);\n    ldap_get_option($link, LDAP_OPT_X_TLS_CRLCHECK, $optionval);\n    var_dump($optionval);\n}\n?>")).toMatchSnapshot();
  });
});
