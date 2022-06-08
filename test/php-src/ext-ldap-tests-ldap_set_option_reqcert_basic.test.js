// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_reqcert_basic.phpt
  it("ldap_option_reqcert_basic() - Error test for TLS require cert ldap option", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nforeach([\n    LDAP_OPT_X_TLS_NEVER,\n    LDAP_OPT_X_TLS_HARD,\n    LDAP_OPT_X_TLS_DEMAND,\n    LDAP_OPT_X_TLS_ALLOW,\n    LDAP_OPT_X_TLS_TRY,\n] as $option) {\n    $result = ldap_set_option($link, LDAP_OPT_X_TLS_REQUIRE_CERT, $option);\n    var_dump($result);\n    ldap_get_option($link, LDAP_OPT_X_TLS_REQUIRE_CERT, $optionval);\n    var_dump($optionval);\n}\n?>")).toMatchSnapshot();
  });
});
