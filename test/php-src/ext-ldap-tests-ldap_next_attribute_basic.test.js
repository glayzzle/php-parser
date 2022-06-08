// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_next_attribute_basic.phpt
  it("ldap_next_attribute() - Basic ldap_next_attribute test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$result = ldap_search($link, \"$base\", \"(cn=userC)\");\n$entry = ldap_first_entry($link, $result);\n$attribute = ldap_first_attribute($link, $entry);\nvar_dump(\n    ldap_next_attribute($link, $entry),\n    ldap_next_attribute($link, $entry),\n    ldap_next_attribute($link, $entry),\n    ldap_next_attribute($link, $entry)\n);\n?>")).toMatchSnapshot();
  });
});
