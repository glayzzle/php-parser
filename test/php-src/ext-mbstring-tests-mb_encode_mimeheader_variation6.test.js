// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_encode_mimeheader_variation6.phpt
  it("Test mb_encode_mimeheader() function : usage variations - Pass different strings to $linefeed arg", function () {
    expect(parser.parseCode("<?php\n/* (string $str [, string $charset [, string $transfer_encoding [, string $linefeed [, int $indent]]]])\n * Description: Converts the string to MIME \"encoded-word\" in the format of =?charset?(B|Q)?encoded_string?=\n * Source code: ext/mbstring/mbstring.c\n */\n/*\n * Pass different strings to $linefeed argument\n */\necho \"*** Testing mb_encode_mimeheader() : usage variations ***\\n\";\nmb_internal_encoding('utf-8');\n$linefeeds = array(\"\\r\\n\",\n                   \"\\n\",\n                   \"---\");\n$str = base64_decode('zpHPhc+Ez4wgzrXOr869zrHOuSDOtc67zrvOt869zrnOus+MIM66zrXOr868zrXOvc6/LiAwMTIzNDU2Nzg5Lg==');\n$iterator = 1;\nforeach ($linefeeds as $linefeed) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    var_dump(mb_encode_mimeheader($str, 'utf-8', 'B', $linefeed));\n    $iterator++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
