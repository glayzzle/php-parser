// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_bind_variation.phpt
  it("ldap_bind() - Advanced binding", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\nvar_dump(ldap_bind($link, $user, $passwd));\n?>")).toMatchSnapshot();
  });
});
