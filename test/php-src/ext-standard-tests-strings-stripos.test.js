// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripos.phpt
  it("stripos() function test", function () {
    expect(parser.parseCode("<?php\n    var_dump(stripos(\"test string\", \"TEST\"));\n    var_dump(stripos(\"test string\", \"strIng\"));\n    var_dump(stripos(\"test string\", \"stRin\"));\n    var_dump(stripos(\"test string\", \"t S\"));\n    var_dump(stripos(\"test string\", \"G\"));\n    var_dump(stripos(\"te\".chr(0).\"st\", chr(0)));\n    var_dump(stripos(\"tEst\", \"test\"));\n    var_dump(stripos(\"teSt\", \"test\"));\n    var_dump(stripos(\"\", \"\"));\n    var_dump(stripos(\"a\", \"\"));\n    var_dump(stripos(\"\", \"a\"));\n    var_dump(stripos(\"a\", \" \"));\n    var_dump(stripos(\"a\", \"a\"));\n    var_dump(stripos(\"\", 1));\n    var_dump(stripos(\"\", false));\n    var_dump(stripos(\"\", true));\n    var_dump(stripos(\"a\", 1));\n    var_dump(stripos(\"a\", false));\n    var_dump(stripos(\"a\", true));\n    var_dump(stripos(\"1\", 1));\n    var_dump(stripos(\"0\", false));\n    var_dump(stripos(\"1\", true));\n    var_dump(stripos(\"\\\\\\\\a\", \"\\\\a\"));\n?>\nDONE")).toMatchSnapshot();
  });
});
