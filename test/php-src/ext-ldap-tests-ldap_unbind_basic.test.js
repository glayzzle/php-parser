// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_unbind_basic.phpt
  it("ldap_unbind() - Basic ldap_unbind() operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\nvar_dump(ldap_unbind($link));\n?>")).toMatchSnapshot();
  });
});
