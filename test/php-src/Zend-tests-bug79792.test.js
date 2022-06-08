// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79792.phpt
  it("Bug #79792: HT iterators not removed if empty array is destroyed", function () {
    expect(parser.parseCode("<?php\n$a = [42];\nforeach ($a as &$c) {\n    // Make the array empty.\n    unset($a[0]);\n    // Destroy the array.\n    $a = null;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
