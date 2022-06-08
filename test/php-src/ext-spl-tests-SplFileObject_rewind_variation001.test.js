// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_rewind_variation001.phpt
  it("SPL: SplFileObject::rewind variation 001", function () {
    expect(parser.parseCode("<?php\n//line 2\n//line 3\n//line 4\n//line 5\n$s = new SplFileObject(__FILE__);\n$s->seek(15);\necho $s->current();\n$s->next();\necho $s->current();\nvar_dump($s->valid());\n$s->rewind();\nvar_dump($s->valid());\necho $s->current();\n?>")).toMatchSnapshot();
  });
});
