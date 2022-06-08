// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_top_variation_002.phpt
  it("SPL: SplHeap top, corrupted heap", function () {
    expect(parser.parseCode("<?php\n// override heap to force corruption by throwing exception in compare\nclass SplMinHeap2 extends SplMinHeap {\n    public function compare($a, $b): int {\n        throw new Exception('Corrupt heap');\n    }\n}\n$h = new SplMinHeap2();\n// insert 2 elements to hit our overridden compare\n$h->insert(4);\ntry {\n    $h->insert(5);\n} catch (Exception $e) {}\n// call top, should fail with corrupted heap\ntry {\n    $h->top();\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
