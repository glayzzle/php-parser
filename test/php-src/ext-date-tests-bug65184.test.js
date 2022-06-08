// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug65184.phpt
  it("Test bug #65184 strftime() returns insufficient-length string under multibyte locales", function () {
    expect(parser.parseCode("<?php\n    setlocale(LC_ALL, 'Japanese_Japan.932');\n    /* timestamp has to be some wednesday */\n    $s = strftime('%A', 1372884126);\n    for ($i = 0; $i < strlen($s); $i++) {\n        printf(\"%x \", ord($s[$i]));\n    }\n    echo \"\\n\";\n    echo strlen(strftime('%A')), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
