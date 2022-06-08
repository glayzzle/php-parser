// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/002.phpt
  it("Bug #25378 (unserialize() crashes with invalid data)", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize('b:0;'));\nvar_dump(unserialize('b:1;'));\nvar_dump(unserialize('i:823;'));\nvar_dump(unserialize('s:0:\"\";'));\nvar_dump(unserialize('s:3:\"foo\";'));\nvar_dump(unserialize('a:1:{i:0;s:2:\"12\";}'));\nvar_dump(unserialize('a:2:{i:0;a:0:{}i:1;a:0:{}}'));\nvar_dump(unserialize('a:3:{i:0;s:3:\"foo\";i:1;s:3:\"bar\";i:2;s:3:\"baz\";}'));\nvar_dump(unserialize('O:8:\"stdClass\":0:{}'));\n?>")).toMatchSnapshot();
  });
});
