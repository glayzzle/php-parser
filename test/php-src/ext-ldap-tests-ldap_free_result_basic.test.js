// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_free_result_basic.phpt
  it("ldap_free_result() - Basic ldap_free_result tests", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$result = ldap_search($link, \"$base\", \"(objectclass=person)\");\nvar_dump(ldap_free_result($result));\n?>")).toMatchSnapshot();
  });
});
