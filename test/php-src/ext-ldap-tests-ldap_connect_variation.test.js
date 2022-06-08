// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_connect_variation.phpt
  it("ldap_connect() - Variation", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n// no hostname, no port\n$link = ldap_connect();\nvar_dump($link);\n// no port\n$link = ldap_connect($host);\nvar_dump($link);\n// URI\n$link = ldap_connect(\"ldap://$host:$port\");\nvar_dump($link);\n// URI no port\n$link = ldap_connect(\"ldap://$host\");\nvar_dump($link);\n// bad hostname (connect should work, not bind)\n$link = ldap_connect(\"nonexistent\" . $host);\nvar_dump($link);\n?>")).toMatchSnapshot();
  });
});
