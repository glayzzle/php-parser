// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug66960.phpt
  it("Bug #66960 phar long filename crash", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . DIRECTORY_SEPARATOR . 'bug66960.phar';\n$phar = new Phar($file);\nvar_dump(file_exists(\"phar://$file/\". str_repeat('a', PHP_MAXPATHLEN-1)));\nvar_dump(file_exists(\"phar://$file/\". str_repeat('a', PHP_MAXPATHLEN)));\nvar_dump(file_exists(\"phar://$file/\". str_repeat('a', PHP_MAXPATHLEN+1)));\necho 'done';\n?>")).toMatchSnapshot();
  });
});
