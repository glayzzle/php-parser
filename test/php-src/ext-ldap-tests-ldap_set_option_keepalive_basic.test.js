// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_keepalive_basic.phpt
  it("ldap_set_option() - Basic test for TCP keepalive ldap options", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nforeach([\n    LDAP_OPT_X_KEEPALIVE_IDLE,\n    LDAP_OPT_X_KEEPALIVE_PROBES,\n    LDAP_OPT_X_KEEPALIVE_INTERVAL,\n] as $option) {\n    $result = ldap_set_option($link, $option, 5);\n    var_dump($result);\n    ldap_get_option($link, $option, $optionval);\n    var_dump($optionval);\n}\n?>")).toMatchSnapshot();
  });
});
