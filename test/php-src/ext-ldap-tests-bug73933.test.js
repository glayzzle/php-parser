// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/bug73933.phpt
  it("Bug #73933 (error/segfault with ldap_mod_replace and opcache)", function () {
    expect(parser.parseCode("<?php\n/* We are assuming 3333 is not connectable */\n$ldap = ldap_connect('127.0.0.1', 3333);\nldap_mod_replace($ldap, '', array(\n    'lockoutTime' => array(0),\n));\nldap_modify_batch($ldap, '', array(    [\n    \"attrib\"  => \"mail\",\n    \"modtype\" => LDAP_MODIFY_BATCH_ADD,\n    \"values\"  => [\n        \"test@example.com\",\n        \"test-2@example.com\", ]]));\nldap_close($ldap);\n?>")).toMatchSnapshot();
  });
});
