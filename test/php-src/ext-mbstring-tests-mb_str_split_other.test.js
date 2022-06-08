// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_str_split_other.phpt
  it("mb_str_split() tests for more text encodings", function () {
    expect(parser.parseCode("<?php\n$array = mb_str_split(\"\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\", 2, \"UCS-2BE\");\necho \"[\", bin2hex($array[0]), \", \", bin2hex($array[1]), \"]\\n\";\n?>")).toMatchSnapshot();
  });
});
