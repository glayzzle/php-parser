// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_openssl_hash.phpt
  it("Phar: tar archive, require_hash=1, OpenSSL hash", function () {
    expect(parser.parseCode("<?php\ntry {\n    $phar = new PharData(__DIR__ . '/files/P1-1.0.0.tgz');\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
