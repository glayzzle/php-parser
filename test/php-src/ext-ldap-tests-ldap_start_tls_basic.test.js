// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_start_tls_basic.phpt
  it("ldap_start_tls() - Basic ldap_start_tls test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\nvar_dump(ldap_start_tls($link));\n?>")).toMatchSnapshot();
  });
});
