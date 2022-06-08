// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug48377.phpt
  it("Phar: PHP bug #48377 \"error message unclear on converting phar with existing file\"", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.zip';\ntouch($fname2);\n$phar = new Phar($fname, 0, 'a.phar');\n$phar['x'] = 'hi';\ntry {\n    $phar->convertToData(Phar::ZIP, Phar::NONE, 'zip');\n} catch (BadMethodCallException $e) {\n    echo $e->getMessage(),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
