// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/ip_x86_64.phpt
  it("ip2long() & long2ip() tests", function () {
    expect(parser.parseCode("<?php\n$array = array(\n    \"127.0.0.1\",\n    \"10.0.0.1\",\n    \"255.255.255.255\",\n    \"255.255.255.0\",\n    \"0.0.0.0\",\n    \"66.163.161.116\",\n);\nforeach ($array as $ip) {\n    var_dump($long = ip2long($ip));\n    var_dump(long2ip($long));\n}\nvar_dump(ip2long(\"\"));\nvar_dump(ip2long(\"777.777.777.777\"));\nvar_dump(ip2long(\"111.111.111.111\"));\nvar_dump(long2ip(-110000));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
