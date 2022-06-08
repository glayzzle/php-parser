// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_connect_error.phpt
  it("ldap_connect() - Connection errors", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n// too many arguments\nvar_dump(ldap_connect(\"ldap://$host:$port/$base\"));\n$links = array();\n$links[0] = ldap_connect($host, $port);\n$links[1] = ldap_connect($host, $port);\n?>")).toMatchSnapshot();
  });
});
