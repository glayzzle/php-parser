// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug39217.phpt
  it("Bug #39217 (Large serial number return -1)", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__;\n$certs = array('bug39217cert2.txt', 'bug39217cert1.txt');\nforeach($certs as $cert) {\n    $res = openssl_x509_parse(file_get_contents($dir . '/' . $cert));\n    print_r($res['serialNumber']);\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
