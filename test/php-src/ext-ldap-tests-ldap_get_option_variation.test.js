// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_get_option_variation.phpt
  it("ldap_get_option() - More ldap_get_option() operations", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\n$option = null;\n$controls = array(\n    array(\"oid\" => \"1.2.752.58.10.1\", \"iscritical\" => true),\n    array(\"oid\" => \"1.2.752.58.1.10\", \"value\" => \"magic\"),\n);\nldap_set_option($link, LDAP_OPT_DEREF, LDAP_DEREF_NEVER);\nldap_set_option($link, LDAP_OPT_SIZELIMIT, 123);\nldap_set_option($link, LDAP_OPT_TIMELIMIT, 33);\nldap_set_option($link, LDAP_OPT_NETWORK_TIMEOUT, 44);\nldap_set_option($link, LDAP_OPT_TIMEOUT, 55);\nldap_set_option($link, LDAP_OPT_REFERRALS, false);\nldap_set_option($link, LDAP_OPT_SERVER_CONTROLS, $controls);\nldap_set_option($link, LDAP_OPT_CLIENT_CONTROLS, $controls);\nldap_set_option($link, LDAP_OPT_RESTART, false);\nvar_dump(\n    ldap_get_option($link, LDAP_OPT_DEREF, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_SIZELIMIT, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_TIMELIMIT, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_NETWORK_TIMEOUT, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_TIMEOUT, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_REFERRALS, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_RESTART, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_SERVER_CONTROLS, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_CLIENT_CONTROLS, $option),\n    $option\n);\n?>")).toMatchSnapshot();
  });
});
