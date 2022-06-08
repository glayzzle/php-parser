// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_escape_filter.phpt
  it("ldap_escape() test filter", function () {
    expect(parser.parseCode("<?php\n$subject = 'foo=bar(baz)*';\nvar_dump(ldap_escape($subject, '', LDAP_ESCAPE_FILTER));\n?>")).toMatchSnapshot();
  });
});
