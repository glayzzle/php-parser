// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_count_basic1.phpt
  it("SPL: ArrayObject::count() and ArrayIterator::count() basic functionality.", function () {
    expect(parser.parseCode("==ArrayObject==\n<?php\nclass C extends ArrayObject {\n  function count(): int {\n    return 99;\n  }\n}\n$c = new C;\n$ao = new ArrayObject;\nvar_dump(count($c), count($ao));\n$c[] = 'a';\n$ao[] = 'a';\nvar_dump(count($c), count($ao));\n$c[] = 'b';\n$ao[] = 'b';\nvar_dump(count($c), count($ao));\nunset($c[0]);\nunset($ao[0]);\nvar_dump($c->count(), $ao->count());\n?>\n==ArrayIterator==\n<?php\nclass D extends ArrayIterator {\n  function count(): int {\n    return 99;\n  }\n}\n$c = new D;\n$ao = new ArrayIterator;\nvar_dump(count($c), count($ao));\n$c[] = 'a';\n$ao[] = 'a';\nvar_dump(count($c), count($ao));\n$c[] = 'b';\n$ao[] = 'b';\nvar_dump(count($c), count($ao));\nunset($c[0]);\nunset($ao[0]);\nvar_dump($c->count(), $ao->count());\n?>")).toMatchSnapshot();
  });
});
