// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_exop_refresh.phpt
  it("ldap_exop_refresh() - Test LDAP refresh extended operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\nldap_add($link, \"cn=tmp,$base\", array(\n    \"objectclass\" => array(\"person\", \"dynamicObject\"),\n    \"cn\" => \"tmp\",\n    \"sn\" => \"tmp\"\n));\nvar_dump(\n    ldap_exop_refresh($link, \"cn=tmp,$base\", 1234)\n);\n?>")).toMatchSnapshot();
  });
});
