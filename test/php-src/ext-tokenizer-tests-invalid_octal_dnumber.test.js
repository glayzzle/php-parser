// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/invalid_octal_dnumber.phpt
  it("Invalid octal number that overflows to double", function () {
    expect(parser.parseCode("<?php\necho token_name(token_get_all('<?php 0177777777777777777777787')[1][0]), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
