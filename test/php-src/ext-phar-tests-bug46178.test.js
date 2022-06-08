// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug46178.phpt
  it("Phar: PHP bug #46178: \"memory leak in ext/phar\"", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$phar = new Phar($fname);\n$phar['long/path/name.txt'] = 'hi';\n$phar->addEmptyDir('long/path');\n?>\n===DONE===")).toMatchSnapshot();
  });
});
