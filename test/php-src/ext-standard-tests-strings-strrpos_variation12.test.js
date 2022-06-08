// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_variation12.phpt
  it("Test strrpos() function : usage variations - checking binary safe with 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strrpos() function with null terminated strings for 'haystack' argument\n *  in order to check the binary safe\n*/\necho \"*** Test strrpos() function: binary safe ***\\n\";\n$haystacks = array(\n  \"Hello\".chr(0).\"World\",\n  chr(0).\"Hello World\",\n  \"Hello World\".chr(0),\n  chr(0).chr(0).chr(0),\n  \"Hello\\0world\",\n  \"\\0Hello\",\n  \"Hello\\0\"\n);\nfor($index = 0; $index < count($haystacks); $index++ ) {\n  var_dump( strrpos($haystacks[$index], \"\\0\") );\n  var_dump( strrpos($haystacks[$index], \"\\0\", $index) );\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
