// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getservbyname_basic.phpt
  it("Test function getservbyname()", function () {
    expect(parser.parseCode("<?php\n    $services = array('http', 'ftp', 'ssh', 'telnet', 'imap', 'smtp', 'nicname', 'gopher', 'finger', 'pop3', 'www');\n    foreach ($services as $service) {\n            $port = getservbyname($service, 'tcp');\n            var_dump($port);\n    }\n?>")).toMatchSnapshot();
  });
});
