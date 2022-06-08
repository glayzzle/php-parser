// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug73594.phpt
  it("Bug #73594 (dns_get_record() does not populate $additional out parameter)", function () {
    expect(parser.parseCode("<?php\n$auth = array();\n$additional = array();\n$res = dns_get_record('php.net', DNS_MX, $auth, $additional);\n// only check $additional if dns_get_record is successful\nvar_dump(!empty($res) && empty($additional));\n?>")).toMatchSnapshot();
  });
});
