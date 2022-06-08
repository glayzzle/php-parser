// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_base64_basic.phpt
  it("Test imap_base64() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_base64() : basic functionality ***\\n\";\n$str = 'This is an example string to be base 64 encoded';\n$base64 = base64_encode($str);\nif (imap_base64($base64) == $str) {\n    echo \"TEST PASSED\\n\";\n} else {\n    echo \"TEST FAILED\";\n}\n$str = '!£$%^&*()_+-={][];;@~#?/>.<,';\n$base64 = base64_encode($str);\nif (imap_base64($base64) == $str) {\n    echo \"TEST PASSED\\n\";\n} else {\n    echo \"TEST FAILED\";\n}\n$hex = 'x00\\x01\\x02\\x03\\x04\\x05\\x06\\xFA\\xFB\\xFC\\xFD\\xFE\\xFF';\n$base64 = base64_encode($hex);\nif (imap_base64($base64) == $hex) {\n    echo \"TEST PASSED\\n\";\n} else {\n    echo \"TEST FAILED\";\n}\n?>")).toMatchSnapshot();
  });
});
