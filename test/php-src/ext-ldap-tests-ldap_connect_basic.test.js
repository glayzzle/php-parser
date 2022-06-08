// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_connect_basic.phpt
  it("ldap_connect() - Basic connection", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\nvar_dump($link);\n?>")).toMatchSnapshot();
  });
});
