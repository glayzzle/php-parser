// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/corrupt_006.phpt
  it("Phar: zip with file created from stdin", function () {
    expect(parser.parseCode("<?php\ntry {\n    new PharData(__DIR__ . '/files/stdin.zip');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
