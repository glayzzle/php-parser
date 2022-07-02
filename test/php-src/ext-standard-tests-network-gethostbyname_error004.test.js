// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostbyname_error004.phpt
  it("gethostbyname() function - basic return valid ip address test", function () {
    expect(parser.parseCode("<?php\n    $ip = gethostbyname(\"www.php.net\");\n    var_dump((bool) ip2long($ip));\n?>")).toMatchSnapshot();
  });
});
