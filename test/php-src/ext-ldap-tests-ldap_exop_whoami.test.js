// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_exop_whoami.phpt
  it("ldap_exop_whoami() - EXOP whoami operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nvar_dump(\n  ldap_exop_whoami($link)\n);\n?>")).toMatchSnapshot();
  });
});
