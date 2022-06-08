// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_get_option_basic.phpt
  it("ldap_get_option() - Basic ldap_get_option() operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\n$option = null;\nldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\nvar_dump(\n    ldap_get_option($link, LDAP_OPT_PROTOCOL_VERSION, $option),\n    $option\n);\n?>")).toMatchSnapshot();
  });
});
