// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/compact_order.phpt
  it("compact() and hashmap order", function () {
    expect(parser.parseCode("<?php\n$foo = null;\n$bar = null;\nvar_dump(compact('foo', 'bar'));\nvar_dump(compact('bar', 'foo'));\n?>")).toMatchSnapshot();
  });
});
