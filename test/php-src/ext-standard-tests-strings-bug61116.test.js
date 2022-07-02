// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug61116.phpt
  it("Bug #61116 (HTML functions use encoding, not charset)", function () {
    expect(parser.parseCode("<?php\necho new ReflectionFunction('htmlspecialchars'), \"\\n\";\necho new ReflectionFunction('get_html_translation_table'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
