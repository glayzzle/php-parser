// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_err2str_basic.phpt
  it("ldap_err2str() - Basic error number to string conversion", function () {
    expect(parser.parseCode("<?php\nvar_dump(ldap_err2str(2));\n?>")).toMatchSnapshot();
  });
});
