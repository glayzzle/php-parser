// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_binary_basic.phpt
  it("Test imap_binary() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_binary() : basic functionality ***\\n\";\necho \"Encode as short string\\n\";\n$str = 'This is an example string to be base 64 encoded';\n$base64 = imap_binary($str);\nvar_dump(bin2hex($base64));\necho \"Encode a string which results in more than 60 charters of output\\n\";\n$str = 'This is a long string with results in more than 60 characters of output';\n$base64 = imap_binary($str);\nvar_dump(bin2hex($base64));\necho \"Encode a string with special characters\\n\";\n$str = '_+-={][];;@~#?/>.<,';\n$base64 = imap_binary($str);\nvar_dump(bin2hex($base64));\necho \"Encode some hexadecimal data\\n\";\n$hex = 'x00\\x01\\x02\\x03\\x04\\x05\\x06\\xFA\\xFB\\xFC\\xFD\\xFE\\xFF';\n$base64 = imap_binary($hex);\nvar_dump(bin2hex($base64));\n?>")).toMatchSnapshot();
  });
});
