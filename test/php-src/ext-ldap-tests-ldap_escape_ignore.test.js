// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_escape_ignore.phpt
  it("ldap_escape() test ignore", function () {
    expect(parser.parseCode("<?php\n$subject = 'foo=bar(baz)*';\n$ignore = 'ao';\nvar_dump(ldap_escape($subject, $ignore));\n?>")).toMatchSnapshot();
  });
});
