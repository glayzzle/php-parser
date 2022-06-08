// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug53823.phpt
  it("Bug #53823 - preg_replace: * qualifier on unicode replace garbles the string", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_replace('/[^\\pL\\pM]*/iu', '', 'áéíóú'));\n// invalid UTF-8\nvar_dump(preg_replace('/[^\\pL\\pM]*/iu', '', \"\\xFCáéíóú\"));\nvar_dump(preg_replace('/[^\\pL\\pM]*/iu', '', \"áéíóú\\xFC\"));\n?>")).toMatchSnapshot();
  });
});
