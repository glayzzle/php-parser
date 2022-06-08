// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_seek_error002.phpt
  it("SPL: SplFileObject::seek error 001", function () {
    expect(parser.parseCode("<?php\n//line 2\n//line 3\n//line 4\n//line 5\n$s = new SplFileObject(__FILE__);\n$s->seek(20);\necho $s->current();\n?>")).toMatchSnapshot();
  });
});
