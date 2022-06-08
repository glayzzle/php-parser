// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70868.phpt
  it("Bug #70868, with PCRE JIT", function () {
    expect(parser.parseCode("<?php\nnamespace X;\n$iterator =\n    new \\RegexIterator(\n        new \\ArrayIterator(['A.phpt', 'B.phpt', 'C.phpt']),\n        '/\\.phpt$/'\n    )\n;\nforeach ($iterator as $foo) {\n    var_dump($foo);\n    preg_replace('/\\.phpt$/', '', '');\n}\necho \"Done\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
