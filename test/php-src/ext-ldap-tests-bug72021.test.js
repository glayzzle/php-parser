// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/bug72021.phpt
  it("Bug #72021 (ldap_escape() with DN flag is not RFC compliant)", function () {
    expect(parser.parseCode("<?php\n$subject = \" Joe,= \\rSmith \";\nvar_dump(ldap_escape($subject, '', LDAP_ESCAPE_DN));\n?>")).toMatchSnapshot();
  });
});
