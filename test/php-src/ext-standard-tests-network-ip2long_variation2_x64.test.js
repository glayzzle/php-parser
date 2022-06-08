// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/ip2long_variation2_x64.phpt
  it("Test ip2long() function : usage variation 2, 64 bit", function () {
    expect(parser.parseCode("<?php\n$ips = array(\n    \"1.1.011.011\",\n    \"127.0.0.1\",\n    \"1.1.071.071\",\n    \"0.0.0.0\",\n    \"1.1.081.081\",\n    \"192.168.0.0\",\n    \"256.0.0.1\",\n    \"192.168.0xa.5\",\n);\nforeach($ips as $ip) {\n    var_dump(ip2long($ip));\n}\n?>")).toMatchSnapshot();
  });
});
