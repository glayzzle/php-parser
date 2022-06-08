// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70852.phpt
  it("Bug #70852 Segfault getting NULL offset of an ArrayObject", function () {
    expect(parser.parseCode("<?php\n$y = new ArrayObject();\nvar_dump($y[NULL]);\nvar_dump($y[NULL]++);\n?>")).toMatchSnapshot();
  });
});
