// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_bind_error.phpt
  it("ldap_bind() - Binding that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\n// Invalid password\nvar_dump(ldap_bind($link, $user, \"ThisIsNotCorrect$passwd\"));\n// Invalid DN syntax\nvar_dump(ldap_bind($link, \"unexistingProperty=weirdValue,$user\", $passwd));\n?>")).toMatchSnapshot();
  });
});
