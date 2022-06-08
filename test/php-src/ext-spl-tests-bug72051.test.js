// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug72051.phpt
  it("Bug #72051 (The reference in CallbackFilterIterator doesn't work as expected)", function () {
    expect(parser.parseCode("<?php\n$data = [\n    [1,2]\n];\n$callbackTest = new CallbackFilterIterator(new ArrayIterator($data), function (&$current) {\n    $current['message'] = 'Test message';\n    return true;\n});\n$callbackTest->rewind();\n$data = $callbackTest->current();\n$callbackTest->next();\nprint_r($data);\n?>")).toMatchSnapshot();
  });
});
