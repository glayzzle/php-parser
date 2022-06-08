// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/bug77958.phpt
  it("ldap_modify_batch() - bug 77958 - values in ldap_modify_batch must be \"string\"", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$mods = array(\n    array(\n        \"attrib\"\t=> \"telephoneNumber\",\n        \"modtype\"\t=> LDAP_MODIFY_BATCH_ADD,\n        \"values\"\t=> array(\n            123456\n        )\n    ),\n    array(\n        \"attrib\"\t=> \"description\",\n        \"modtype\"\t=> LDAP_MODIFY_BATCH_REMOVE_ALL\n    )\n);\nvar_dump(\n    ldap_modify_batch($link, \"cn=userA,$base\", $mods),\n    $entry = ldap_first_entry($link, ldap_read($link, \"cn=userA,$base\", \"(telephoneNumber=*)\")),\n    ldap_get_values($link, $entry, \"telephoneNumber\")\n);\n?>")).toMatchSnapshot();
  });
});
