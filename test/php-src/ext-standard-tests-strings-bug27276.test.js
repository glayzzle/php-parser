// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug27276.phpt
  it("Bug #27276 (str_replace tries to use obscene amounts of ram)", function () {
    expect(parser.parseCode("<?php\nini_set(\"memory_limit\", \"12m\");\n$replacement = str_repeat(\"x\", 12444);\n$string = str_repeat(\"x\", 9432);\n$key =    \"{BLURPS}\";\nstr_replace($key, $replacement, $string);\necho \"Alive!\\n\";\n?>")).toMatchSnapshot();
  });
});
