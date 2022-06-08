// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug65371.phpt
  it("Testing bug #65371", function () {
    expect(parser.parseCode("<?php\nfunction p($str)\n{\n  echo $str, \"\\n\";\n  echo strftime($str), \"\\n\";\n  echo bin2hex($str), \"\\n\";\n  echo bin2hex(strftime($str));\n}\nsetlocale(LC_ALL, 'C');\np('あ');\n?>")).toMatchSnapshot();
  });
});
