// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_get_entries_basic.phpt
  it("ldap_get_entries() - Basic modify operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nvar_dump(\n    ldap_get_entries(\n        $link,\n        ldap_search($link, \"$base\", \"(o=test)\")\n    )\n);\n?>")).toMatchSnapshot();
  });
});
