// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrchr_variation12.phpt
  it("Test strrchr() function : usage variations - binary safe", function () {
    expect(parser.parseCode("<?php\n/* Test strrchr() function: with binary values & null terminated strings passed to 'str1' & 'str2' */\necho \"*** Test strrchr() function: binary safe ***\\n\";\n$haystacks = array(\n  \"Hello\".chr(0).\"World\",\n  chr(0).\"Hello World\",\n  \"Hello World\".chr(0),\n  chr(0).chr(0).chr(0),\n  \"Hello\\0world\",\n  \"\\0Hello\",\n  \"Hello\\0\"\n);\nfor($index = 0; $index < count($haystacks); $index++ ) {\n  //needle as null string\n  var_dump( strrchr($haystacks[$index], \"\\0\") );\n  //needle as empty string\n  var_dump( strrchr($haystacks[$index], \"\") );\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
