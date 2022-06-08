// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strripos.phpt
  it("strripos() function", function () {
    expect(parser.parseCode("<?php\n    var_dump(strripos(\"test test string\", \"test\"));\n    var_dump(strripos(\"test string sTring\", \"string\"));\n    var_dump(strripos(\"test strip string strand\", \"str\"));\n    var_dump(strripos(\"I am what I am and that's all what I am\", \"am\", -3));\n    var_dump(strripos(\"test string\", \"g\"));\n    var_dump(strripos(\"te\".chr(0).\"st\", chr(0)));\n    var_dump(strripos(\"tEst\", \"test\"));\n    var_dump(strripos(\"teSt\", \"test\"));\n    var_dump(strripos(\"foo\", \"f\", 1));\n    var_dump(strripos(\"\", \"\"));\n    var_dump(strripos(\"a\", \"\"));\n    var_dump(strripos(\"\", \"a\"));\n    var_dump(strripos(\"\\\\\\\\a\", \"\\\\a\"));\n?>")).toMatchSnapshot();
  });
});
