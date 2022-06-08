// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_first_entry_basic.phpt
  it("ldap_first_entry() - Basic ldap_first_entry test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$result = ldap_search($link, \"$base\", \"(objectclass=person)\");\nvar_dump(\n    $entry = ldap_first_entry($link, $result),\n    ldap_get_values($link, $entry, 'sn')\n);\n?>")).toMatchSnapshot();
  });
});
