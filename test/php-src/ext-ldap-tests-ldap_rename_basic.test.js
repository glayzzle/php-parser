// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_rename_basic.phpt
  it("ldap_rename() - Basic ldap_rename test", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nvar_dump(\n    ldap_rename($link, \"cn=userA,$base\", \"cn=userZ\", \"$base\", true)\n);\n$result = ldap_search($link, \"$base\", \"(cn=userA)\", array(\"cn\", \"sn\"));\n$result = ldap_search($link, \"$base\", \"(cn=userZ)\", array(\"cn\", \"sn\"));\nvar_dump(ldap_get_entries($link, $result));\n?>")).toMatchSnapshot();
  });
});
