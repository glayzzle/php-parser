// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation7.phpt
  it("Test extract() function (variation 7)", function () {
    expect(parser.parseCode("<?php\n/* EXTR_PREFIX_ALL called twice with same prefix string */\necho \"\\n*** Testing for EXTR_PREFIX_ALL called twice with same prefix string ***\\n\";\n$a = array( \"1\" => \"one\", \"2\" => \"two\", \"3\" => \"three\", \"4\" => \"four\", \"5\" => \"five\" );\nvar_dump ( extract($a, EXTR_PREFIX_ALL, \"same\"));\n$b = array( \"f\" => \"fff\", \"1\" => \"one\", 4 => 6, \"\" => \"blank\", 2 => \"float\", \"F\" => \"FFF\",\n             \"blank\" => \"\", 3 => 3.7, 5 => 7, 6 => 8.6, '5' => \"Five\", \"4name\" => \"jonny\", \"a\" => NULL, NULL => 3 );\nvar_dump ( extract($b, EXTR_PREFIX_ALL, \"same\"));\nvar_dump ( extract($b, EXTR_PREFIX_ALL, \"diff\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
