// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_dn2ufn.phpt
  it("ldap_dn2ufn() test", function () {
    expect(parser.parseCode("<?php\n/* Convert valid DN */\nvar_dump(ldap_dn2ufn(\"cn=bob,dc=example,dc=com\"));\n/* Convert valid DN */\nvar_dump(ldap_dn2ufn(\"cn=bob,ou=users,dc=example,dc=com\"));\n/* Convert DN with < > characters */\nvar_dump(ldap_dn2ufn(\"cn=<bob>,dc=example,dc=com\"));\n/* Bad DN value */\nvar_dump(ldap_dn2ufn(\"bob,dc=example,dc=com\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
