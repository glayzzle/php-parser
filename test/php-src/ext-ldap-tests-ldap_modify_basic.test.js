// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_modify_basic.phpt
  it("ldap_modify() - Basic modify operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$entry = array(\n    \"objectClass\"\t=> array(\n        \"top\",\n        \"organization\"),\n    \"o\"\t\t=> \"test\",\n    \"description\"\t=> \"Domain description\",\n);\nvar_dump(\n    ldap_modify($link, \"o=test,$base\", $entry),\n    ldap_get_entries(\n        $link,\n        ldap_search($link, \"$base\", \"(Description=Domain description)\")\n    )\n);\n?>")).toMatchSnapshot();
  });
});
