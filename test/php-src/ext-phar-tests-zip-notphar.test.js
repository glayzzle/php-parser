// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/notphar.phpt
  it("Phar: a non-executable zip with no stub named .phar.zip", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$pname = 'phar://' . $fname;\ncopy(__DIR__ . '/files/zip.zip', $fname);\ninclude $fname;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
