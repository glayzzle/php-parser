// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_current_variation001.phpt
  it("SPL: SplFileObject::current variation", function () {
    expect(parser.parseCode("<?php\n//line 2\n//line 3\n//line 4\n//line 5\n$s = new SplFileObject(__FILE__);\n$s->seek(2);\necho $s->current();\necho $s->current();\n?>")).toMatchSnapshot();
  });
});
