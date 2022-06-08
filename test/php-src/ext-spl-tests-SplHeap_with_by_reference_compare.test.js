// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplHeap_with_by_reference_compare.phpt
  it("SplHeap using a compare function returning by-reference", function () {
    expect(parser.parseCode("<?php\nclass Heap extends SplMinHeap {\n    public function &compare($a, $b): int {\n        return $a;\n    }\n}\n$h = new Heap;\n$h->insert(0);\n$h->insert(0);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
