// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_rename_error.phpt
  it("ldap_rename() - Testing ldap_rename() that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nvar_dump(ldap_rename($link, \"cn=userNotFound,$base\", \"cn=userZ\", \"$base\", true));\n?>")).toMatchSnapshot();
  });
});
