// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/029.phpt
  it("tidy_get_body() crash", function () {
    expect(parser.parseCode("<?php\n// bug report taken from http://news.php.net/php.notes/130628\n$inputs = array(\n    '<frameset > </frameset>',\n    '<html><frameset> </frameset> </html',\n);\nforeach ($inputs as $input) {\n    $t = tidy_parse_string($input);\n    $t->cleanRepair();\n    var_dump(tidy_get_body($t));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
