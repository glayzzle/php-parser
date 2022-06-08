// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/show_source_basic.phpt
  it("Test function show_source() by calling it with its expected arguments, more test for highlight_file()", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling method or function with its expected arguments ***\\n\";\n$foo = 'bar';\n$baz = \"something \".$foo.\"\\n\";\nif ( $foo == 'bar' )\n{\n  $baz = 'baz';\n}\n /* some code here */\nshow_source(__FILE__);\n?>")).toMatchSnapshot();
  });
});
