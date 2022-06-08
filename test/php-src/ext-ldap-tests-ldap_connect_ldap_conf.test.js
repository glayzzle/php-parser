// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_connect_ldap_conf.phpt
  it("ldap_connect() - Connection using default host from openldap's ldap.conf", function () {
    expect(parser.parseCode("<?php\n$link = ldap_connect();\nldap_get_option($link, LDAP_OPT_HOST_NAME, $host);\nvar_dump($host);\n?>")).toMatchSnapshot();
  });
});
