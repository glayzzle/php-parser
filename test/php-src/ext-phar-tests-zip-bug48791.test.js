// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/bug48791.phpt
  it("Phar: Bug #48791: open office documents always reported as corrupted by phar extension", function () {
    expect(parser.parseCode("<?php\necho file_get_contents('phar://' . __DIR__ . '/files/test.odt/content.xml'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
