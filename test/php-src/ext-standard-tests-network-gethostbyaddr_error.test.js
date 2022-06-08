// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostbyaddr_error.phpt
  it("Test gethostbyaddr() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"Testing gethostbyaddr : error conditions\\n\";\necho \"\\n-- Testing gethostbyaddr function with invalid addresses --\\n\";\n$ip_address = 'invalid';\nvar_dump( gethostbyaddr($ip_address) );\n$ip_address = '300.1.2.3';\nvar_dump( gethostbyaddr($ip_address) );\n$ip_address = '256.1.2.3';\nvar_dump( gethostbyaddr($ip_address) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
