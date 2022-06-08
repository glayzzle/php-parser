// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_search_overrides.phpt
  it("ldap_search() test - test that overrides aren't permanent", function () {
    expect(parser.parseCode("<?php\ninclude \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\nldap_set_option($link, LDAP_OPT_DEREF, LDAP_DEREF_SEARCHING);\nldap_set_option($link, LDAP_OPT_SIZELIMIT, 123);\nldap_set_option($link, LDAP_OPT_TIMELIMIT, 33);\nldap_set_option($link, LDAP_OPT_NETWORK_TIMEOUT, 44);\ninsert_dummy_data($link, $base);\nvar_dump(\n    $result = ldap_search($link, \"$base\", \"(objectClass=person)\", array(), 0, 111, 22, LDAP_DEREF_NEVER),\n    ldap_get_entries($link, $result)\n);\nvar_dump(\n    ldap_get_option($link, LDAP_OPT_DEREF, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_SIZELIMIT, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_TIMELIMIT, $option),\n    $option,\n    ldap_get_option($link, LDAP_OPT_NETWORK_TIMEOUT, $option),\n    $option\n);\n?>")).toMatchSnapshot();
  });
});
