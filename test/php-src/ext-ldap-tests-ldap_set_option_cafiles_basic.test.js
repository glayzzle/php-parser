// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_cafiles_basic.phpt
  it("ldap_set_option() - Basic test for TLS CA/Cert/CRL/DH/Key file ldap options", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nforeach([\n    LDAP_OPT_X_TLS_CACERTDIR,\n    LDAP_OPT_X_TLS_CACERTFILE,\n    LDAP_OPT_X_TLS_CERTFILE,\n    LDAP_OPT_X_TLS_KEYFILE,\n    LDAP_OPT_X_TLS_CRLFILE,\n    LDAP_OPT_X_TLS_DHFILE,\n] as $option) {\n    $result = ldap_set_option($link, $option, '/foo/bar');\n    var_dump($result);\n    ldap_get_option($link, $option, $optionval);\n    var_dump($optionval);\n}\n?>")).toMatchSnapshot();
  });
});
