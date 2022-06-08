// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_006.phpt
  it("SPL: SplMaxHeap: large unordered input iterated", function () {
    expect(parser.parseCode("<?php\n$input = range(1,100);\nshuffle($input);\n$h = new SplMaxHeap();\nforeach($input as $i) {\n    $h->insert($i);\n}\nforeach ($h as $k => $o) {\n    echo \"$k => $o\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
