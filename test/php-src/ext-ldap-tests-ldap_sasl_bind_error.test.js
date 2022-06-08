// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_sasl_bind_error.phpt
  it("ldap_sasl_bind() - Binding that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nldap_unbind($link);\n$link = ldap_connect($host, $port);\nldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\n// Invalid DN\nvar_dump(ldap_sasl_bind($link, \"Invalid DN\", $sasl_passwd, 'DIGEST-MD5', 'realm', $sasl_user));\n// Invalid user\nvar_dump(ldap_sasl_bind($link, null, \"ThisIsNotCorrect$sasl_passwd\", 'DIGEST-MD5', \"realm\", \"invalid$sasl_user\"));\n// Invalid password\nvar_dump(ldap_sasl_bind($link, null, \"ThisIsNotCorrect$sasl_passwd\", 'DIGEST-MD5', \"realm\", $sasl_user));\nvar_dump(ldap_sasl_bind($link, null, $sasl_passwd, 'DIGEST-MD5', \"realm\", \"Manager\", \"test\"));\n// Invalid DN syntax\nvar_dump(ldap_sasl_bind($link, \"unexistingProperty=weirdValue,$user\", $sasl_passwd));\n?>")).toMatchSnapshot();
  });
});
