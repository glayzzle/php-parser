// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_tls_protocol_min_basic.phpt
  it("ldap_set_option() - Basic test for TLS protocol min ldap option", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nforeach([\n    LDAP_OPT_X_TLS_PROTOCOL_SSL2,\n    LDAP_OPT_X_TLS_PROTOCOL_SSL3,\n    LDAP_OPT_X_TLS_PROTOCOL_TLS1_0,\n    LDAP_OPT_X_TLS_PROTOCOL_TLS1_1,\n    LDAP_OPT_X_TLS_PROTOCOL_TLS1_2,\n] as $option) {\n    $result = ldap_set_option($link, LDAP_OPT_X_TLS_PROTOCOL_MIN, $option);\n    var_dump($result);\n    ldap_get_option($link, LDAP_OPT_X_TLS_PROTOCOL_MIN, $optionval);\n    var_dump($optionval);\n}\n?>")).toMatchSnapshot();
  });
});
