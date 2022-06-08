// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_pad_variation5.phpt
  it("Test str_pad() function : usage variations - unexpected large value for '$pad_length' argument", function () {
    expect(parser.parseCode("<?php\n/* Test str_pad() function: with unexpected inputs for '$pad_length'\n *  and expected type for '$input'\n*/\necho \"*** Testing str_pad() function: with large value for for 'pad_length' argument ***\\n\";\n//defining '$input' argument\n$input = \"Test string\";\n$pad_length = PHP_INT_MAX - 16; /* zend_string header is 16 bytes */\nvar_dump( str_pad($input, $pad_length) );\n?>")).toMatchSnapshot();
  });
});
