// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_next_variation002.phpt
  it("SPL: SplFileObject::next variation 002, read ahead", function () {
    expect(parser.parseCode("<?php\n//line 2\n//line 3\n//line 4\n//line 5\n$s = new SplFileObject(__FILE__);\n$s->seek(2);\necho $s->current();\n$s->next();\necho $s->current();\n$s->setFlags(SplFileObject::READ_AHEAD);\n$s->seek(2);\necho $s->current();\n$s->next();\necho $s->current();\n?>")).toMatchSnapshot();
  });
});
