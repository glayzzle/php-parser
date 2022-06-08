// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_error_basic.phpt
  it("ldap_error() - Basic ldap_error() operation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect_and_bind($host, $port, $user, $passwd, $protocol_version);\n@ldap_add($link, \"badDN $base\", array(\n    \"objectClass\"\t=> array(\n        \"top\",\n        \"dcObject\",\n        \"organization\"),\n    \"dc\"\t\t\t=> \"my-domain\",\n    \"o\"\t\t\t\t=> \"my-domain\",\n));\nvar_dump(\n    ldap_error($link)\n);\n?>")).toMatchSnapshot();
  });
});
