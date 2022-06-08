// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_first_attribute_basic.phpt
  it("ldap_first_attribute() - Basic ldap_first_attribute test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$result = ldap_search($link, \"$base\", \"(objectclass=organization)\", array(\"objectClass\"));\n$entry = ldap_first_entry($link, $result);\nvar_dump(\n    ldap_first_attribute($link, $entry)\n);\n?>")).toMatchSnapshot();
  });
});
