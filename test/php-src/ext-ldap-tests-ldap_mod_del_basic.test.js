// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_mod_del_basic.phpt
  it("ldap_mod_del() - Basic modify operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$entry = array(\n    \"description\" => \"user A\"\n);\nvar_dump(\n    ldap_mod_del($link, \"cn=userA,$base\", $entry),\n    ldap_get_entries(\n        $link,\n        ldap_search($link, \"$base\", \"(description=user A)\")\n    )\n);\n?>")).toMatchSnapshot();
  });
});
