// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_rebind_proc_basic.phpt
  it("ldap_set_rebind_proc() - Basic ldap_set_rebind_proc test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\nfunction rebind_proc ($ds, $ldap_url) {\n  global $user;\n  global $passwd;\n  global $protocol_version;\n  // required by most modern LDAP servers, use LDAPv3\n  ldap_set_option($a, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\n  if (!ldap_bind($a, $user, $passwd)) {\n        print \"Cannot bind\";\n  }\n}\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\nvar_dump(ldap_set_rebind_proc($link, \"rebind_proc\"));\nvar_dump(ldap_set_rebind_proc($link, null));\n?>")).toMatchSnapshot();
  });
});
