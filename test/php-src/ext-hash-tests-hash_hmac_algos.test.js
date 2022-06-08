// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_hmac_algos.phpt
  it("Hash: hash_hmac_algos() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nprint_r(hash_hmac_algos());\n?>")).toMatchSnapshot();
  });
});
