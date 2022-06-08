// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_modify_error.phpt
  it("ldap_modify() - Modify operations that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\n// DN not found\nvar_dump(ldap_modify($link, \"cn=not-found,$base\", array()));\n// Invalid DN\nvar_dump(ldap_modify($link, \"weirdAttribute=val\", array()));\n$entry = array(\n    \"objectClass\"\t=> array(\n        \"top\",\n        \"dcObject\",\n        \"organization\"),\n    \"dc\"\t\t\t=> \"my-domain\",\n    \"o\"\t\t\t\t=> \"my-domain\",\n);\nldap_add($link, \"dc=my-domain,$base\", $entry);\n$entry2 = $entry;\n$entry2[\"dc\"] = \"Wrong Domain\";\nvar_dump(ldap_modify($link, \"dc=my-domain,$base\", $entry2));\n$entry2 = $entry;\n$entry2[\"weirdAttribute\"] = \"weirdVal\";\nvar_dump(ldap_modify($link, \"dc=my-domain,$base\", $entry2));\n?>")).toMatchSnapshot();
  });
});
