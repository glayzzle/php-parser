// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_next_basic.phpt
  it("SPL: SplFileObject::next basic", function () {
    expect(parser.parseCode("<?php\n//line 2\n//line 3\n//line 4\n//line 5\n$s = new SplFileObject(__FILE__);\necho $s->current();\n$s->next();\necho $s->current();\n?>")).toMatchSnapshot();
  });
});
