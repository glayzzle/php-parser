// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug53144.phpt
  it("Bug #53144 (Segfault in SplObjectStorage::removeAll)", function () {
    expect(parser.parseCode("<?php\n$o1 = new StdClass;\n$o2 = new StdClass;\n$b = new SplObjectStorage();\n$b[$o1] = \"bar\";\n$b[$o2] = \"baz\";\nvar_dump(count($b));\n$b->removeAll($b);\nvar_dump(count($b));\n?>")).toMatchSnapshot();
  });
});
