// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_add_basic.phpt
  it("ldap_add() - Basic add operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\nvar_dump(\n    ldap_add($link, \"dc=my-domain,$base\", array(\n        \"objectClass\"\t=> array(\n            \"top\",\n            \"dcObject\",\n            \"organization\"),\n        \"dc\"\t\t\t=> \"my-domain\",\n        \"o\"\t\t\t\t=> \"my-domain\",\n    )),\n    ldap_get_entries(\n        $link,\n        ldap_search($link, \"$base\", \"(o=my-domain)\")\n    )\n);\n?>")).toMatchSnapshot();
  });
});
