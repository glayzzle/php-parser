// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/pharfileinfo_chmod.phpt
  it("Phar: PharFileInfo::chmod extra code coverage", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$pname = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar['a/b'] = 'hi there';\n$b = $phar['a/b'];\ntry {\n$phar['a']->chmod(066);\n} catch (Exception $e) {\necho $e->getMessage(), \"\\n\";\n}\nlstat($pname . '/a/b'); // sets BG(CurrentLStatFile)\n$b->chmod(0666);\n?>")).toMatchSnapshot();
  });
});
