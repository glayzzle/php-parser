// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/corrupt_003.phpt
  it("Phar: corrupted zip (truncated file comment)", function () {
    expect(parser.parseCode("<?php\ntry {\n    new PharData(__DIR__ . '/files/filecomment.zip');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
