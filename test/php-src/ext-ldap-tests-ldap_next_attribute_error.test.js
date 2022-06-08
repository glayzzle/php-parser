// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_next_attribute_error.phpt
  it("ldap_next_attribute() - Testing ldap_next_attribute() that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$result = ldap_search($link, \"$base\", \"(objectclass=organization)\");\n$entry = ldap_first_entry($link, $result);\nvar_dump(\n    ldap_next_attribute($link, $entry)\n);\n?>")).toMatchSnapshot();
  });
});
