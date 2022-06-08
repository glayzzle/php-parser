// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substitute_character_variation2.phpt
  it("Test mb_substitute_character() function : variation unmappable out char for convert encoding", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_substitute_character() : variation ***\\n\";\n//japenese utf-8\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI');\n//output the default which is ? in ISO-8859-1, x3f\nvar_dump(bin2hex(mb_convert_encoding($string_mb, \"ISO-8859-1\", \"UTF-8\")));\nmb_substitute_character(66);  //'B' in ISO-8859-1, x42\nvar_dump(bin2hex(mb_convert_encoding($string_mb, \"ISO-8859-1\", \"UTF-8\")));\nmb_substitute_character(\"none\"); //no substitution\nvar_dump(bin2hex(mb_convert_encoding($string_mb, \"ISO-8859-1\", \"UTF-8\")));\nmb_substitute_character(280); //not valid in ISO-8859-1\nvar_dump(bin2hex(mb_convert_encoding($string_mb, \"ISO-8859-1\", \"UTF-8\")));\n?>")).toMatchSnapshot();
  });
});
