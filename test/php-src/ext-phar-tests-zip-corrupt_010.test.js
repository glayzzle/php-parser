// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/corrupt_010.phpt
  it("Phar: unable to process zip (zip spanning multiple archives)", function () {
    expect(parser.parseCode("<?php\ntry {\n    new PharData(__DIR__ . '/files/disknumber.zip');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
