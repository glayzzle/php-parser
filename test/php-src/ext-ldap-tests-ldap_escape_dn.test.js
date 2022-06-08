// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_escape_dn.phpt
  it("ldap_escape() test DN", function () {
    expect(parser.parseCode("<?php\n$subject = 'foo=bar(baz)*';\nvar_dump(ldap_escape($subject, '', LDAP_ESCAPE_DN));\n?>")).toMatchSnapshot();
  });
});
