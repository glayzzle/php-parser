// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug73035.phpt
  it("Phar: #73035 (Out of bound when verify signature of tar phar in phar_parse_tarfile)", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\ntry {\n$phar = new PharData('bug73035.tar');\nvar_dump($phar);\n} catch(UnexpectedValueException $e) {\n    print $e->getMessage().\"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
