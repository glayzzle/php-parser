// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_search_variation6.phpt
  it("ldap_search() test", function () {
    expect(parser.parseCode("<?php\ninclude \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$dn = \"$base\";\n$filter = \"(objectclass=person)\";\nvar_dump(\n    $result = ldap_search(array($link, $link), $dn, $filter),\n    $result0 = ldap_get_entries($link, $result[0]),\n    ldap_get_entries($link, $result[1]) === $result0\n);\nvar_dump(\n    $result = ldap_search(array($link, $link), \"\", $filter),\n    ldap_get_entries($link, $result[0]),\n    ldap_get_entries($link, $result[1])\n);\nvar_dump(\n    $result = ldap_search(array($link, $link), \"\", array($filter, $filter)),\n    ldap_get_entries($link, $result[0]),\n    ldap_get_entries($link, $result[1])\n);\n?>")).toMatchSnapshot();
  });
});
