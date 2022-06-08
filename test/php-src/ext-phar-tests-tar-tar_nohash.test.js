// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_nohash.phpt
  it("Phar: tar archive, require_hash=1, should not error out", function () {
    expect(parser.parseCode("<?php\ntry {\n    $phar = new PharData(__DIR__ . '/files/Net_URL-1.0.15.tgz');\n    var_dump($phar->getStub());\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
