// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_variation13.phpt
  it("Test strrpos() function : usage variations - checking bianry safe with 'needle' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strrpos() function with null terminated strings for 'needle' argument\n *  in order to check binary safe\n*/\necho \"*** Test strrpos() function: binary safe ***\\n\";\n$haystack = \"\\0Hello\\0World\\0\";\n$needles = array(\n  \"Hello\".chr(0).\"World\",\n  chr(0).\"Hello\\0\",\n  chr(0),\n  \"Hello\\0world\",\n  \"\\0Hello\\0world\\0\",\n  \"\\0Hello\",\n  \"Hello\\0\"\n);\nfor($index = 0; $index < count($needles); $index++ ) {\n  var_dump( strrpos($haystack, $needles[$index]) );\n  var_dump( strrpos($haystack, $needles[$index], $index) );\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
