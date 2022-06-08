// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/corrupt_007.phpt
  it("Phar: corrupted zip (truncated filename record)", function () {
    expect(parser.parseCode("<?php\ntry {\n    new PharData(__DIR__ . '/files/truncfilename.zip');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
