// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70398.phpt
  it("Bug #70398 (SIGSEGV, Segmentation fault zend_ast_destroy_ex)", function () {
    expect(parser.parseCode("<?php\ndefine(\"FILE_STREAM\", fopen(\"php://temp\", \"r\"));\ndefine(\"FILE_STREAMS\", array(fopen(\"php://temp\", \"r\")));\nvar_dump(FILE_STREAM);\nvar_dump(FILE_STREAMS);\n?>")).toMatchSnapshot();
  });
});
