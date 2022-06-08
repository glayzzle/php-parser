// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_random_pseudo_bytes_basic.phpt
  it("openssl_random_pseudo_bytes() tests", function () {
    expect(parser.parseCode("<?php\nfor ($i = 1; $i < 10; $i++) {\n    var_dump(bin2hex(openssl_random_pseudo_bytes($i)));\n}\n?>")).toMatchSnapshot();
  });
});
