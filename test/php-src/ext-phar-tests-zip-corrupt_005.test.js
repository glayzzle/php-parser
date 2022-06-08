// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/corrupt_005.phpt
  it("Phar: encrypted zip", function () {
    expect(parser.parseCode("<?php\ntry {\n    new PharData(__DIR__ . '/files/encrypted.zip');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
