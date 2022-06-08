// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_encode_mimeheader_basic.phpt
  it("Test mb_encode_mimeheader() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of mb_encode_mimeheader with different strings.\n * For the below strings:\n * 'English' is ASCII only, 'Japanese' has no ASCII characters and 'Greek' is mixed.\n */\necho \"*** Testing mb_encode_mimeheader() : basic ***\\n\";\n$english = array('English' => 'This is an English string. 0123456789');\n$nonEnglish = array('Japanese' => base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CC'),\n                'Greek' => base64_decode('zpHPhc+Ez4wgzrXOr869zrHOuSDOtc67zrvOt869zrnOus+MIM66zrXOr868zrXOvc6/LiAwMTIzNDU2Nzg5Lg=='));\nforeach ($english as $lang => $input) {\n    echo \"\\nLanguage: $lang\\n\";\n    echo \"-- Base 64: --\\n\";\n    var_dump(mb_encode_mimeheader($input, 'UTF-8', 'B'));\n    echo \"-- Quoted-Printable --\\n\";\n    var_dump(mb_encode_mimeheader($input, 'UTF-8', 'Q'));\n}\nmb_internal_encoding('utf-8');\nforeach ($nonEnglish as $lang => $input) {\n    echo \"\\nLanguage: $lang\\n\";\n    echo \"-- Base 64: --\\n\";\n    var_dump(mb_encode_mimeheader($input, 'UTF-8', 'B'));\n    echo \"-- Quoted-Printable --\\n\";\n    var_dump(mb_encode_mimeheader($input, 'UTF-8', 'Q'));\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
