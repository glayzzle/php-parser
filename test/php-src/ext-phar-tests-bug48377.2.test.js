// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug48377.2.phpt
  it("Phar: PHP bug #48377 \"error message unclear on converting phar with existing file\" test #2", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.zip';\n$phar = new PharData($fname);\n$phar['x'] = 'hi';\ntry {\n    $phar->convertToData(Phar::ZIP, Phar::NONE, 'phar.zip');\n} catch (BadMethodCallException $e) {\n    echo $e->getMessage(),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
