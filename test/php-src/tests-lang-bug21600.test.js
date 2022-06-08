// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug21600.phpt
  it("Bug #21600 (assign by reference function call changes variable contents)", function () {
    expect(parser.parseCode("<?php\n$tmp = array();\n$tmp['foo'] = \"test\";\n$tmp['foo'] = &bar($tmp['foo']);\nvar_dump($tmp);\nunset($tmp);\n$tmp = array();\n$tmp['foo'] = \"test\";\n$tmp['foo'] = &fubar($tmp['foo']);\nvar_dump($tmp);\nfunction bar($text){\n  return $text;\n}\nfunction fubar($text){\n  $text = &$text;\n  return $text;\n}\n?>")).toMatchSnapshot();
  });
});
