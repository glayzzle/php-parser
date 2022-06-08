// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_next_entry_basic.phpt
  it("ldap_next_entry() - Basic ldap_first_entry test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$result = ldap_list($link, \"$base\", \"(objectClass=person)\");\n$entry = ldap_first_entry($link, $result);\nvar_dump(\n    $entry = ldap_next_entry($link, $entry),\n    ldap_get_values($link, $entry, 'sn'),\n    $entry = ldap_next_entry($link, $entry)\n);\n?>")).toMatchSnapshot();
  });
});
