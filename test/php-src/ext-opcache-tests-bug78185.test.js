// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78185.phpt
  it("Bug #78185: file cache only no longer works", function () {
    expect(parser.parseCode("<?php\nif (substr(PHP_OS, 0, 3) !== 'WIN') {\n    $pattern = __DIR__ . '/*/' . __DIR__ . '/*78185.php.bin';\n} else {\n    $pattern = __DIR__ . '/*/*/' . str_replace(':', '', __DIR__) . '/*78185.php.bin';\n}\nforeach (glob($pattern) as $p) {\n    var_dump($p);\n}\n?>")).toMatchSnapshot();
  });
});
