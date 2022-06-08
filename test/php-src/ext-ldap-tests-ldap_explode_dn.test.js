// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_explode_dn.phpt
  it("ldap_explode_dn() test", function () {
    expect(parser.parseCode("<?php\n/* Explode with attributes */\nvar_dump(ldap_explode_dn(\"cn=bob,dc=example,dc=com\", 0));\n/* Explode with attributes */\nvar_dump(ldap_explode_dn(\"cn=bob,ou=users,dc=example,dc=com\", 0));\n/* Explode without attributes */\nvar_dump(ldap_explode_dn(\"cn=bob,dc=example,dc=com\", 1));\n/* Explode without attributes */\nvar_dump(ldap_explode_dn(\"cn=bob,ou=users,dc=example,dc=com\", 1));\n/* Explode with attributes and < > characters */\nvar_dump(ldap_explode_dn(\"cn=<bob>,dc=example,dc=com\", 0));\n/* Explode without attributes and < > characters */\nvar_dump(ldap_explode_dn(\"cn=<bob>,dc=example,dc=com\", 1));\n/* Bad DN value with attributes */\nvar_dump(ldap_explode_dn(\"bob,dc=example,dc=com\", 0));\n/* Bad DN value without attributes */\nvar_dump(ldap_explode_dn(\"bob,dc=example,dc=com\", 1));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
