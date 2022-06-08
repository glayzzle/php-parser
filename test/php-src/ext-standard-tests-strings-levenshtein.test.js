// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/levenshtein.phpt
  it("levenshtein() function test", function () {
    expect(parser.parseCode("<?php\necho '--- Equal ---' . \\PHP_EOL;\nvar_dump(levenshtein('12345', '12345'));\necho '--- First string empty ---' . \\PHP_EOL;\nvar_dump(levenshtein('', 'xyz'));\necho '--- Second string empty ---' . \\PHP_EOL;\nvar_dump(levenshtein('xyz', ''));\necho '--- Both empty ---' . \\PHP_EOL;\nvar_dump(levenshtein('', ''));\nvar_dump(levenshtein('', '', 10, 10, 10));\necho '--- 1 character ---' . \\PHP_EOL;\nvar_dump(levenshtein('1', '2'));\necho '--- 2 character swapped ---' . \\PHP_EOL;\nvar_dump(levenshtein('12', '21'));\necho '--- Inexpensive deletion ---' . \\PHP_EOL;\nvar_dump(levenshtein('2121', '11', 2));\necho '--- Expensive deletion ---' . \\PHP_EOL;\nvar_dump(levenshtein('2121', '11', 2, 1, 5));\necho '--- Inexpensive insertion ---' . \\PHP_EOL;\nvar_dump(levenshtein('11', '2121'));\necho '--- Expensive insertion ---' . \\PHP_EOL;\nvar_dump(levenshtein('11', '2121', 5));\necho '--- Expensive replacement ---' . \\PHP_EOL;\nvar_dump(levenshtein('111', '121', 2, 3, 2));\necho '--- Very expensive replacement ---' . \\PHP_EOL;\nvar_dump(levenshtein('111', '121', 2, 9, 2));\n?>")).toMatchSnapshot();
  });
});
