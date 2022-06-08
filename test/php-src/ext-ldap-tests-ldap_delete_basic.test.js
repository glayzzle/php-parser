// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_delete_basic.phpt
  it("ldap_delete() - Basic delete operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\nldap_add($link, \"dc=my-domain,$base\", array(\n    \"objectClass\"\t=> array(\n        \"top\",\n        \"dcObject\",\n        \"organization\"),\n    \"dc\"\t\t\t=> \"my-domain\",\n    \"o\"\t\t\t\t=> \"my-domain\",\n));\nvar_dump(\n    ldap_delete($link, \"dc=my-domain,$base\"),\n    @ldap_search($link, \"dc=my-domain,$base\", \"(o=my-domain)\")\n);\n?>")).toMatchSnapshot();
  });
});
