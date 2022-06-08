// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripos_variation12.phpt
  it("Test stripos() function : usage variations - null terminated strings for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test stripos() function with null terminated strings for 'haystack' argument\n *  in order to check the binary safe\n*/\necho \"*** Test stripos() function: binary safe ***\\n\";\n$haystacks = array(\n  \"Hello\".chr(0).\"World\",\n  chr(0).\"Hello World\",\n  \"Hello World\".chr(0),\n  chr(0).chr(0).chr(0),\n  \"Hello\\0world\",\n  \"\\0Hello\",\n  \"Hello\\0\"\n);\nfor($index = 0; $index < count($haystacks); $index++ ) {\n  var_dump( stripos($haystacks[$index], \"\\0\") );\n  var_dump( stripos($haystacks[$index], \"\\0\", $index) );\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
