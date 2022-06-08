// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_search_variation3.phpt
  it("ldap_search() test", function () {
    expect(parser.parseCode("<?php\ninclude \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$dn = \"$base\";\n$filter = \"(objectclass=person)\";\nvar_dump(\n    $result = ldap_search($link, $dn, $filter, array('sn'), 1, 3),\n    ldap_get_entries($link, $result)\n);\nvar_dump(\n    $result = ldap_search($link, $dn, $filter, array('sn'), 1, 1),\n    ldap_get_entries($link, $result)\n);\n?>")).toMatchSnapshot();
  });
});
