// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_delete_ext.phpt
  it("ldap_delete_ext() - Delete operation with controls", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\nldap_add($link, \"dc=my-domain,$base\", array(\n    \"objectClass\"\t=> array(\n        \"top\",\n        \"dcObject\",\n        \"organization\"),\n    \"dc\"\t\t\t=> \"my-domain\",\n    \"o\"\t\t\t\t=> \"my-domain\",\n));\nvar_dump(\n    $result = ldap_delete_ext($link, \"dc=my-domain,$base\",\n        [['oid' => LDAP_CONTROL_PRE_READ, 'iscritical' => TRUE, 'value' => ['attrs' => ['dc', 'o']]]]\n    ),\n    ldap_parse_result($link, $result, $errcode, $matcheddn, $errmsg, $referrals, $ctrls),\n    $errcode,\n    $errmsg,\n    $ctrls[LDAP_CONTROL_PRE_READ],\n    @ldap_search($link, \"dc=my-domain,$base\", \"(o=my-domain)\")\n);\n?>")).toMatchSnapshot();
  });
});
