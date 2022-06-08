// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlspecialchars_decode_variation6.phpt
  it("Test htmlspecialchars_decode() function : usage variations - binary safe", function () {
    expect(parser.parseCode("<?php\n/*\n * testing whether htmlspecialchars_decode() is binary safe or not\n*/\necho \"*** Testing htmlspecialchars_decode() : usage variations ***\\n\";\n//various string inputs\n$strings = array (\n  \"\\tHello \\$world \".chr(0).\"\\&!)The big brown fox jumped over the\\t\\f lazy dog\\v\\n\",\n  \"\\tHello \\\"world\\\"\\t\\v \\0 This is a valid\\t string\",\n  \"This converts\\t decimal to \\$string\".decbin(65).\"Hello world\",\n  \"This is a binary\\t \\v\\fstring\"\n);\n//loop through the strings array to check if htmlspecialchars_decode() is binary safe\n$iterator = 1;\nforeach($strings as $value) {\n      echo \"-- Iteration $iterator --\\n\";\n      if ($iterator < 4) {\n        var_dump( htmlspecialchars_decode($value) );\n      } else {\n        var_dump( bin2hex(htmlspecialchars_decode($value)));\n      }\n      $iterator++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
