// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug73594a.phpt
  it("Bug #73594 (dns_get_record() does not populate $additional out parameter - $authns parameter)", function () {
    expect(parser.parseCode("<?php\n$auth = array();\n$res = dns_get_record('php.net', DNS_MX, $auth);\n// only check $auth if dns_get_record is successful\nvar_dump(!empty($res) && empty($auth));\n?>")).toMatchSnapshot();
  });
});
