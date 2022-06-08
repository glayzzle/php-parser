// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug72928.phpt
  it("Phar: #72928 (Out of bound when verify signature of zip phar in phar_parse_zipfile)", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\ntry {\n$phar = new PharData('bug72928.zip');\nvar_dump($phar);\n} catch(UnexpectedValueException $e) {\n    print $e->getMessage().\"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
