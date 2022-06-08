// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_mod_replace_error.phpt
  it("ldap_mod_replace() - ldap_mod_replace() operations that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\n// DN not found\nvar_dump(ldap_mod_replace($link, \"dc=my-domain,$base\", array()));\n// Invalid DN\nvar_dump(ldap_mod_replace($link, \"weirdAttribute=val\", array()));\n// Invalid attributes\nvar_dump(ldap_mod_replace($link, \"$base\", array('dc')));\n?>")).toMatchSnapshot();
  });
});
