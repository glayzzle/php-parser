// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug72321.phpt
  it("Phar: PHP bug #72321: invalid free in phar_extract_file()", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nmkdir(\"test72321\");\n$phar = new PharData(\"72321_1.zip\");\n$phar->extractTo(\"test72321\");\n$phar = new PharData(\"72321_2.zip\");\ntry {\n$phar->extractTo(\"test72321\");\n} catch(PharException $e) {\n    print $e->getMessage().\"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
