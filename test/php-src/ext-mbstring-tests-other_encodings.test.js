// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/other_encodings.phpt
  it("Test of oddball text encodings which are not tested elsewhere", function () {
    expect(parser.parseCode("<?php\nmb_substitute_character(0x25);\n// \"7bit\". This is not a real text encoding.\nvar_dump(mb_convert_encoding(\"ABC\", \"7bit\", \"ASCII\"));\nvar_dump(mb_convert_encoding(\"\\x80\", \"7bit\", \"ASCII\"));\nvar_dump(mb_convert_encoding(\"ABC\", \"8bit\", \"7bit\"));\nvar_dump(mb_check_encoding(chr(255), '7bit'));\necho \"7bit done\\n\";\n// \"8bit\"\nvar_dump(mb_convert_encoding(\"\\x01\\x00\", \"8bit\", \"UTF-16BE\")); // codepoints over 0xFF are illegal for '8-bit'\necho \"8bit done\\n\";\n// UCS-2\necho bin2hex(mb_convert_encoding(\"\\xFF\\xFE\\x00\\x30\", \"UTF-16BE\", \"UCS-2\")), \"\\n\";\necho bin2hex(mb_convert_encoding(\"\\xFE\\xFF\\x30\\x00\", \"UTF-16BE\", \"UCS-2\")), \"\\n\";\necho bin2hex(mb_convert_encoding(\"\\x00\\x30\", \"UTF-16BE\", \"UCS-2LE\")), \"\\n\";\necho \"UCS-2 done\\n\";\n// UCS-4\necho bin2hex(mb_convert_encoding(\"\\xFF\\xFE\\x00\\x00\\x00\\x30\\x00\\x00\", \"UTF-16BE\", \"UCS-4\")), \"\\n\";\necho bin2hex(mb_convert_encoding(\"\\x00\\x00\\xFE\\xFF\\x00\\x00\\x30\\x01\", \"UTF-16BE\", \"UCS-4\")), \"\\n\";\necho bin2hex(mb_convert_encoding(\"\\x02\\x30\\x00\\x00\", \"UTF-16BE\", \"UCS-4LE\")), \"\\n\";\necho bin2hex(mb_convert_encoding(\"\\x00\\x00\\x30\\x03\", \"UTF-16BE\", \"UCS-4BE\")), \"\\n\";\nmb_substitute_character(\"long\");\necho mb_convert_encoding(\"\\x01\\x02\\x03\", \"UTF-8\", \"UCS-4\"), \"\\n\";\necho \"UCS-4 done\\n\";\n?>")).toMatchSnapshot();
  });
});
