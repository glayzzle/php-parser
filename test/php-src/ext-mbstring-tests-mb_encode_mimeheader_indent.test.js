// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_encode_mimeheader_indent.phpt
  it("Test mb_encode_mimeheader() function : basic functionality, indent", function () {
    expect(parser.parseCode("<?php\n/* (string $str [, string $charset [, string $transfer_encoding [, string $linefeed [, int $indent]]]])\n * Description: Converts the string to MIME \"encoded-word\" in the format of =?charset?(B|Q)?encoded_string?=\n * Source code: ext/mbstring/mbstring.c\n */\n/*\n * Pass different data types to $indent argument to see how mb_encode_mimeheader() behaves\n */\necho \"*** Testing mb_encode_mimeheader() : indent ***\\n\";\nmb_internal_encoding('utf-8');\n// Initialise function arguments not being substituted\n$str = base64_decode('zpHPhc+Ez4wgzrXOr869zrHOuSDOtc67zrvOt869zrnOus+MIM66zrXOr868zrXOvc6/LiAwMTIzNDU2Nzg5Lg==');\n$charset = 'utf-8';\n$linefeed = \"\\r\\n\";\nfor ($i = 0; $i < 100; $i++) {\n  echo \"\\n-- Iteration $i --\\n\";\n  var_dump( mb_encode_mimeheader($str, $charset, \"B\", $linefeed, $i));\n  var_dump( mb_encode_mimeheader($str, $charset, \"Q\", $linefeed, $i));\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
