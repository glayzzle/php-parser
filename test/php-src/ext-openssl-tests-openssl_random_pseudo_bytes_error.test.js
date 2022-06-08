// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_random_pseudo_bytes_error.phpt
  it("Test error operation of openssl_random_pseudo_bytes()", function () {
    expect(parser.parseCode("<?php\ntry {\n    openssl_random_pseudo_bytes(0);\n} catch (Error $e) {\n    echo $e->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
