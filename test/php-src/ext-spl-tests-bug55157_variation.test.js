// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug55157_variation.phpt
  it("Bug #55157: ArrayIterator always skips the second element in the array when calling offsetUnset()", function () {
    expect(parser.parseCode("<?php\n$nums = range(0, 3);\n$numIt = new ArrayIterator($nums);\nfor ($numIt->rewind(); $numIt->valid();) {\n    echo \"{$numIt->key()} => {$numIt->current()}\\n\";\n    $numIt->offsetUnset($numIt->key());\n}\n?>")).toMatchSnapshot();
  });
});
