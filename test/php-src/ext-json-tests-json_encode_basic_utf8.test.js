// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_encode_basic_utf8.phpt
  it("Test json_encode() function : basic functionality with UTF8 string input", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing json_encode() : basic functionality with UTF-8 input***\\n\";\n$utf8_string = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\nvar_dump(json_encode($utf8_string));\n?>")).toMatchSnapshot();
  });
});
