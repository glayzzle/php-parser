// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_basic.phpt
  it("ldap_set_option() - Basic ldap_set_option() operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\n$option = null;\nvar_dump(ldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, $protocol_version));\nldap_get_option($link, LDAP_OPT_PROTOCOL_VERSION, $option);\nvar_dump($option);\n?>")).toMatchSnapshot();
  });
});
