// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77434.phpt
  it("Bug #77434: php-fpm workers are segfaulting in zend_gc_addref", function () {
    expect(parser.parseCode("<?php\nfunction test(int $x) {\n    $a = ['a' => 0, 'b' => $x];\n    $b = [];\n    $b[0] = $a;\n    $c = $b[0];\n}\nfunction test2(int $x) {\n    $a = ['a' => 0, 'b' => $x];\n    $b = [$a];\n    $c = $b[0];\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
