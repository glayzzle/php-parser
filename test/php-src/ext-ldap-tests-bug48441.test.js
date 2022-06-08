// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/bug48441.phpt
  it("ldap_search() bug 48441 - options persists after specifying them in ldap_search", function () {
    expect(parser.parseCode("<?php\ninclude \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$dn = \"$base\";\n$filter = \"(objectclass=person)\";\nvar_dump(\n    $result = ldap_search($link, $dn, $filter, array('sn')),\n    ldap_get_entries($link, $result)\n);\nvar_dump(\n    $result = ldap_search($link, $dn, $filter, array('sn'), 1, 1, 1, LDAP_DEREF_ALWAYS),\n    ldap_get_entries($link, $result)\n);\nvar_dump(\n    $result = ldap_search($link, $dn, $filter, array('sn')),\n    ldap_get_entries($link, $result)\n);\n?>")).toMatchSnapshot();
  });
});
