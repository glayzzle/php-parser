// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_unbind_variation.phpt
  it("ldap_unbind() - Variation of ldap_unbind() function using ldap_set_rebind_proc()", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\nfunction rebind_proc ($ds, $ldap_url) {\n    global $user;\n    global $passwd;\n    global $protocol_version;\n    // required by most modern LDAP servers, use LDAPv3\n    ldap_set_option($a, LDAP_OPT_PROTOCOL_VERSION, $protocol_version);\n    if (!ldap_bind($a, $user, $passwd)) {\n        print \"Cannot bind\";\n    }\n}\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\nldap_set_rebind_proc($link, \"rebind_proc\");\nvar_dump(ldap_unbind($link));\n?>")).toMatchSnapshot();
  });
});
