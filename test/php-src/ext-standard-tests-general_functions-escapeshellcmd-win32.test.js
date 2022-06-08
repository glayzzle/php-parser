// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/escapeshellcmd-win32.phpt
  it("Test escapeshellcmd() functionality on Windows", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing escapeshellcmd() basic operations ***\\n\";\n$data = array(\n    '\"abc',\n    \"'abc\",\n    '?<>',\n    '()[]{}$',\n    '%^',\n    '#&;`|*?',\n    '~<>\\\\',\n    '%NOENV%',\n    '!NOENV!'\n);\n$count = 1;\nforeach ($data AS $value) {\n    echo \"-- Test \" . $count++ . \" --\\n\";\n    var_dump(escapeshellcmd($value));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
