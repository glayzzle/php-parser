// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_pad_variation2.phpt
  it("str_pad() function: usage variations - Non printable chars", function () {
    expect(parser.parseCode("<?php\n// Split from str_pad for NUL Bytes\n// 7-bit ASCII\n$string = chr(0).chr(255).chr(128).chr(234).chr(143);\n/* different pad_lengths */\n$pad_lengths = [\n    -PHP_INT_MAX,  // huge negative value\n    -1,  // negative value\n    0,  // pad_length < sizeof(input_string)\n    9,  // pad_length <= sizeof(input_string)\n    10,  // pad_length > sizeof(input_string)\n    16,  // pad_length > sizeof(input_string)\n];\n$pad_string = \"=\";\n/*loop through to use each variant of $pad_length on\n  each element of $input_strings array */\nforeach ($pad_lengths as $pad_length ) {\n    // default pad_string & pad_type\n    var_dump( bin2hex( str_pad($string, $pad_length) ) );\n    // default pad_type\n    var_dump( bin2hex( str_pad($string, $pad_length, $pad_string) ) );\n    var_dump( bin2hex( str_pad($string, $pad_length, $pad_string, STR_PAD_LEFT) ) );\n    var_dump( bin2hex( str_pad($string, $pad_length, $pad_string, STR_PAD_RIGHT) ) );\n    var_dump( bin2hex( str_pad($string, $pad_length, $pad_string, STR_PAD_BOTH) ) );\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
