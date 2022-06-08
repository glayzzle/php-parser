// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/bug71827.phpt
  it("Bug #71827 (substr_replace bug when length type is string )", function () {
    expect(parser.parseCode("<?php\n$line  = str_repeat(' ',20); $value ='03'; $pos=0; $len='2';\n$line = substr_replace($line,$value,$pos,$len);\necho \"[$line]\\n\";\n?>")).toMatchSnapshot();
  });
});
