// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_it_current_empty.phpt
  it("SPL: SplHeap current, check looping through an empty heap gives you no values", function () {
    expect(parser.parseCode("<?php\n$h = new SplMinHeap();\nforeach ($h as $val) { echo 'FAIL'; }\n?>")).toMatchSnapshot();
  });
});
