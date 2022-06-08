// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug69441.phpt
  it("Phar: bug #69441: Buffer Overflow when parsing tar/zip/phar in phar_set_inode", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/bug69441.phar';\ntry {\n$r = new Phar($fname, 0);\n} catch(UnexpectedValueException $e) {\n    echo $e;\n}\n?>")).toMatchSnapshot();
  });
});
