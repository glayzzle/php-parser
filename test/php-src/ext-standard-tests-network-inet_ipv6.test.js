// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/inet_ipv6.phpt
  it("inet_ntop() & inet_pton() IPv6 tests", function () {
    expect(parser.parseCode("<?php\n$a = array(\n    '::1',\n    '::2',\n    '::35',\n    '::255',\n    '::1024',\n    '',\n    '2001:0db8:85a3:08d3:1319:8a2e:0370:7344',\n    '2001:0db8:1234:0000:0000:0000:0000:0000',\n    '2001:0db8:1234:FFFF:FFFF:FFFF:FFFF:FFFF',\n);\nforeach ($a as $address) {\n    $packed = inet_pton($address);\n    var_dump(inet_ntop($packed));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
