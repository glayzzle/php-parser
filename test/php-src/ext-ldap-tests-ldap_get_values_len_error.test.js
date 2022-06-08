// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_get_values_len_error.phpt
  it("ldap_get_values_len() - Testing ldap_get_values_len() that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$result = ldap_search($link, \"$base\", \"(objectclass=organization)\");\n$entry = ldap_first_entry($link, $result);\nvar_dump(ldap_get_values_len($link, $entry, \"inexistentAttribute\"));\n?>")).toMatchSnapshot();
  });
});
