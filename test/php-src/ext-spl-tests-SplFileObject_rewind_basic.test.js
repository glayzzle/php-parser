// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_rewind_basic.phpt
  it("SPL: SplFileObject::rewind basic", function () {
    expect(parser.parseCode("<?php\n//line 2\n//line 3\n//line 4\n//line 5\n$s = new SplFileObject(__FILE__);\n$s->seek(3);\n$s->rewind();\necho $s->current();\n?>")).toMatchSnapshot();
  });
});
