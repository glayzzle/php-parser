// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug71498.phpt
  it("Phar: bug #71498: Out-of-Bound Read in phar_parse_zipfile()", function () {
    expect(parser.parseCode("<?php\ntry {\n$p = new PharData(__DIR__.\"/bug71498.zip\");\n} catch(UnexpectedValueException $e) {\n    echo $e->getMessage();\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
