// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62004.phpt
  it("Bug #62004 (SplFileObject: fgets after seek returns wrong line)", function () {
    expect(parser.parseCode("<?php\n$f = new SplFileObject(__DIR__ . '/bug62004.txt');\n$f->setFlags(SplFileObject::SKIP_EMPTY);\n$f->seek(0);\necho $f->fgets();\n$f->seek(1);\necho $f->fgets();\n$f->seek(2);\necho $f->fgets();\n?>")).toMatchSnapshot();
  });
});
