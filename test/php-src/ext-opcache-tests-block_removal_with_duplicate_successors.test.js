// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/block_removal_with_duplicate_successors.phpt
  it("Removing a block that has duplicate successors", function () {
    expect(parser.parseCode("<?php\nfunction test($foo) {\n    $bar = 0;\n    if ($bar === 1 && $foo && PHP_SAPI !== 'cli') {\n        echo \"foo\\n\";\n    }\n    echo \"bar\\n\";\n}\ntest(1);\n?>")).toMatchSnapshot();
  });
});
