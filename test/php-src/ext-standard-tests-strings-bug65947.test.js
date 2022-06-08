// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug65947.phpt
  it("Bug #65947 (basename is no more working after fgetcsv in certain situation)", function () {
    expect(parser.parseCode("<?php\n$filename = 'test.toto';\n// é in ISO-8859-1\n$csv = base64_decode('6Q==');\n$adata = str_getcsv($csv,\";\");\n$b2 = basename($filename);\nif ($filename != $b2)\n    print \"BUG\";\nelse\n    print \"OKEY\";\n?>")).toMatchSnapshot();
  });
});
