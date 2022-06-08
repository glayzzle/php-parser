// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/pharfileinfo_destruct.phpt
  it("Phar: PharFileInfo::__destruct", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$pname = 'phar://' . $fname;\n$a = new Phar($fname);\n$a['a/subdir/here'] = 'hi';\n$b = new PharFileInfo($pname . '/a/subdir');\nunset($b);\n$b = new PharFileInfo($pname . '/a/subdir/here');\nunset($b);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
