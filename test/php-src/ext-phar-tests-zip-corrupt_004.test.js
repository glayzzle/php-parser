// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/corrupt_004.phpt
  it("Phar: corrupted zip (central directory offset incorrect)", function () {
    expect(parser.parseCode("<?php\ntry {\n    new PharData(__DIR__ . '/files/cdir_offset.zip');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
