// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_top_variation_003.phpt
  it("SPL: SplHeap top of empty heap", function () {
    expect(parser.parseCode("<?php\n$h = new SplMinHeap();\ntry {\n    $h->top();\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
