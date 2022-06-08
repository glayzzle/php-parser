// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug65698.phpt
  it("Bug #65689 (GeneralizedTime format parsing)", function () {
    expect(parser.parseCode("<?php\n$crt = substr(__FILE__, 0, -4).'.crt';\n$info = openssl_x509_parse(\"file://$crt\");\nvar_dump($info[\"validFrom\"], $info[\"validFrom_time_t\"], $info[\"validTo\"], $info[\"validTo_time_t\"]);\n?>\nDone")).toMatchSnapshot();
  });
});
