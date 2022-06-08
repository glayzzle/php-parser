// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_get_cert_locations_basic.phpt
  it("openssl_get_cert_locations() tests", function () {
    expect(parser.parseCode("<?php\n// openssl locations differ per distro.\nvar_dump(openssl_get_cert_locations());\n?>")).toMatchSnapshot();
  });
});
