// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug39621.phpt
  it("Bug #39621 (str_replace() is not binary safe on strings with equal length)", function () {
    expect(parser.parseCode("<?php\n$search =  \"qxxx\\0qqqqqqqq\";\n$subject = \"qxxx\\0xxxxxxxx\";\n$replace = \"any text\";\n$result = str_replace ( $search, $replace, $subject );\nvar_dump($result);\n$search =  \"QXXX\\0qqqqqqqq\";\n$subject = \"qxxx\\0xxxxxxxx\";\n$replace = \"any text\";\n$result = str_ireplace ( $search, $replace, $subject );\nvar_dump($result);\n$search =  \"qxxx\\0xxxxxxxx\";\n$subject = \"qxxx\\0xxxxxxxx\";\n$replace = \"any text\";\n$result = str_replace ( $search, $replace, $subject );\nvar_dump($result);\n$search =  \"qXxx\\0xXxXxXxx\";\n$subject = \"qxXx\\0xxxxxxxx\";\n$replace = \"any text\";\n$result = str_ireplace ( $search, $replace, $subject );\nvar_dump($result);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
