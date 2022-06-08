// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_get_dn_basic.phpt
  it("ldap_get_dn() - Basic ldap_get_dn test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$result = ldap_search($link, \"$base\", \"(objectclass=organization)\");\n$entry = ldap_first_entry($link, $result);\nvar_dump(\n    ldap_get_dn($link, $entry)\n);\n?>")).toMatchSnapshot();
  });
});
