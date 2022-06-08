// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_modify_batch_basic.phpt
  it("ldap_modify_batch() - Basic batch modify operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$mods = array(\n    array(\n        \"attrib\"\t=> \"telephoneNumber\",\n        \"modtype\"\t=> LDAP_MODIFY_BATCH_ADD,\n        \"values\"\t=> array(\n            \"+1 555 5551717\"\n        )\n    ),\n    array(\n        \"attrib\"\t=> \"sn\",\n        \"modtype\"\t=> LDAP_MODIFY_BATCH_REPLACE,\n        \"values\"\t=> array(\"Brown-Smith\")\n    ),\n    array(\n        \"attrib\"\t=> \"description\",\n        \"modtype\"\t=> LDAP_MODIFY_BATCH_REMOVE_ALL\n    )\n);\nvar_dump(\n    ldap_modify_batch($link, \"cn=userA,$base\", $mods),\n    ldap_get_entries($link, ldap_search($link, \"$base\", \"(sn=Brown-Smith)\"))\n);\n?>")).toMatchSnapshot();
  });
});
