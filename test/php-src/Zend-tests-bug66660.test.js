// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug66660.phpt
  it("Bug #66660 (Composer.phar install/update fails)", function () {
    expect(parser.parseCode("<?php\nfile_put_contents(__DIR__.\"/bug66660.tmp.php\", \"<?php __CLASS__ ?>\");\necho php_strip_whitespace(__DIR__.\"/bug66660.tmp.php\");\n?>")).toMatchSnapshot();
  });
});
