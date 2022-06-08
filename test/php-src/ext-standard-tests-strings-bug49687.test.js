// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug49687.phpt
  it("Bug #49687 Several utf8_decode deficiencies and vulnerabilities", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    \"\\x41\\xC2\\x3E\\x42\",\n    \"\\xE3\\x80\\x22\",\n    \"\\x41\\x98\\xBA\\x42\\xE2\\x98\\x43\\xE2\\x98\\xBA\\xE2\\x98\",\n);\nforeach ($tests as $t) {\n    echo bin2hex(utf8_decode($t)), \"\\n\";\n}\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
