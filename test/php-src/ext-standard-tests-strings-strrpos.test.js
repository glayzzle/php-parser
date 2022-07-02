// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos.phpt
  it("strrpos() function", function () {
    expect(parser.parseCode("<?php\n    var_dump(strrpos(\"test test string\", \"test\"));\n    var_dump(strrpos(\"test string sTring\", \"string\"));\n    var_dump(strrpos(\"test strip string strand\", \"str\"));\n    var_dump(strrpos(\"I am what I am and that's all what I am\", \"am\", -3));\n    var_dump(strrpos(\"test string\", \"g\"));\n    var_dump(strrpos(\"te\".chr(0).\"st\", chr(0)));\n    var_dump(strrpos(\"tEst\", \"test\"));\n    var_dump(strrpos(\"teSt\", \"test\"));\n    var_dump(strrpos(\"foo\", \"f\", 1));\n    var_dump(strrpos(\"\", \"\"));\n    var_dump(strrpos(\"a\", \"\"));\n    var_dump(strrpos(\"\", \"a\"));\n    var_dump(strrpos(\"\\\\\\\\a\", \"\\\\a\"));\n?>")).toMatchSnapshot();
  });
});
