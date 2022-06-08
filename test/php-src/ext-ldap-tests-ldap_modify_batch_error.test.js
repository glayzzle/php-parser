// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_modify_batch_error.phpt
  it("ldap_modify_batch() - Batch modify operations that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\n$addGivenName = array(\n    array(\n        \"attrib\"\t=> \"givenName\",\n        \"modtype\"\t=> LDAP_MODIFY_BATCH_ADD,\n        \"values\"\t=> array(\"Jack\")\n    )\n);\n// DN not found\nvar_dump(ldap_modify_batch($link, \"cn=not-found,$base\", $addGivenName));\n// Invalid DN\nvar_dump(ldap_modify_batch($link, \"weirdAttribute=val\", $addGivenName));\n// prepare\n$entry = array(\n    \"objectClass\"\t=> array(\n        \"top\",\n        \"dcObject\",\n        \"organization\"),\n    \"dc\"\t\t\t=> \"my-domain\",\n    \"o\"\t\t\t\t=> \"my-domain\",\n);\nldap_add($link, \"dc=my-domain,$base\", $entry);\n// invalid domain\n$mods = array(\n    array(\n        \"attrib\"\t=> \"dc\",\n        \"modtype\"\t=> LDAP_MODIFY_BATCH_REPLACE,\n        \"values\"\t=> array(\"Wrong Domain\")\n    )\n);\nvar_dump(ldap_modify_batch($link, \"dc=my-domain,$base\", $mods));\n// invalid attribute\n$mods = array(\n    array(\n        \"attrib\"\t=> \"weirdAttribute\",\n        \"modtype\"\t=> LDAP_MODIFY_BATCH_ADD,\n        \"values\"\t=> array(\"weirdVal\", \"anotherWeirdval\")\n    )\n);\nvar_dump(ldap_modify_batch($link, \"dc=my-domain,$base\", $mods));\n?>")).toMatchSnapshot();
  });
});
