// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_count_entries_basic.phpt
  it("ldap_count_entries() - Basic counting LDAP entries", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$result = ldap_search($link, \"$base\", \"(objectclass=person)\");\nvar_dump(ldap_count_entries($link, $result));\n?>")).toMatchSnapshot();
  });
});
