// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug75054.phpt
  it("Bug #75054: A Denial of Service Vulnerability was found when performing deserialization", function () {
    expect(parser.parseCode("<?php\n$poc = 'a:9:{i:0;s:4:\"0000\";i:0;s:4:\"0000\";i:0;R:2;s:4:\"5003\";R:2;s:4:\"0000\";R:2;s:4:\"0000\";R:2;s:4:\"';\n$poc .= \"\\x06\";\n$poc .= '000\";R:2;s:4:\"0000\";d:0;s:4:\"0000\";a:9:{s:4:\"0000\";';\nvar_dump(unserialize($poc));\n?>")).toMatchSnapshot();
  });
});
