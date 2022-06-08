// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_delete_error.phpt
  it("ldap_delete() - Delete operation that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\n// Invalid DN\nvar_dump(\n    ldap_delete($link, \"weirdAttribute=val\"),\n    ldap_error($link),\n    ldap_errno($link)\n);\n// Deleting unexisting data\nvar_dump(\n    ldap_delete($link, \"dc=my-domain,$base\"),\n    ldap_error($link),\n    ldap_errno($link)\n);\n?>")).toMatchSnapshot();
  });
});
