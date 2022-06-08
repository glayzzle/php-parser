// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug69453.phpt
  it("Phar: bug #69453: Memory Corruption in phar_parse_tarfile when entry filename starts with null", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/bug69453.tar.phar';\ntry {\n$r = new Phar($fname, 0);\n} catch(UnexpectedValueException $e) {\n    echo $e;\n}\n?>")).toMatchSnapshot();
  });
});
