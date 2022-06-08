// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_search_basic.phpt
  it("ldap_search() test", function () {
    expect(parser.parseCode("<?php\ninclude \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nvar_dump(\n    $result = ldap_search($link, \"$base\", \"(objectClass=person)\"),\n    ldap_get_entries($link, $result)\n);\n?>")).toMatchSnapshot();
  });
});
