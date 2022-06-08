// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_key_error001.phpt
  it("SPL: SplFileObject::key error", function () {
    expect(parser.parseCode("<?php\n//line 2\n//line 3\n//line 4\n//line 5\n$s = new SplFileObject(__FILE__);\n$s->seek(13);\n$s->next();\nvar_dump($s->key());\nvar_dump($s->valid());\n?>")).toMatchSnapshot();
  });
});
