// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_mod_ext.phpt
  it("ldap_mod_ext() - Modify operations with controls", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\ninsert_dummy_data($link, $base);\n$entry = array(\n    \"description\"\t=> \"Domain description\",\n);\nvar_dump(\n    $result = ldap_mod_add_ext($link, \"o=test,$base\", $entry,\n        [\n            ['oid' => LDAP_CONTROL_PRE_READ,  'iscritical' => TRUE, 'value' => ['attrs' => ['description']]],\n            ['oid' => LDAP_CONTROL_POST_READ, 'iscritical' => TRUE, 'value' => ['attrs' => ['description']]],\n        ]\n    ),\n    ldap_parse_result($link, $result, $errcode, $matcheddn, $errmsg, $referrals, $ctrls),\n    $errcode,\n    $errmsg,\n    $ctrls,\n    ldap_get_entries(\n        $link,\n        ldap_search($link, \"o=test,$base\", \"(Description=Domain description)\")\n    ),\n    $result = ldap_mod_del_ext($link, \"o=test,$base\", $entry,\n        [\n            ['oid' => LDAP_CONTROL_PRE_READ,  'iscritical' => TRUE, 'value' => ['attrs' => ['description']]],\n            ['oid' => LDAP_CONTROL_POST_READ, 'iscritical' => TRUE, 'value' => ['attrs' => ['description']]],\n        ]\n    ),\n    ldap_parse_result($link, $result, $errcode, $matcheddn, $errmsg, $referrals, $ctrls),\n    $errcode,\n    $errmsg,\n    $ctrls,\n    ldap_get_entries(\n        $link,\n        ldap_search($link, \"o=test,$base\", \"(Description=Domain description)\")\n    )\n);\n?>")).toMatchSnapshot();
  });
});
