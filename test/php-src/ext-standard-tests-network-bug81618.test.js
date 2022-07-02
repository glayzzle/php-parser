// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug81618.phpt
  it("Bug #81618: dns_get_record failure on FreeBSD", function () {
    expect(parser.parseCode("<?php\n$ret = dns_get_record('www.google.com', DNS_A + DNS_CNAME);\necho ($ret !== false && count($ret) > 0);\n?>")).toMatchSnapshot();
  });
});
