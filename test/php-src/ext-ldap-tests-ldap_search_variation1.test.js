// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_search_variation1.phpt
  it("ldap_search() test", function () {
    expect(parser.parseCode("<?php\ninclude \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$dn = \"$base\";\n$filter = \"(dc=*)\";\nvar_dump(\n    $result = ldap_search($link, \"o=test,$base\", \"(o=*)\", array('o')),\n    ldap_get_entries($link, $result)\n);\n?>")).toMatchSnapshot();
  });
});
