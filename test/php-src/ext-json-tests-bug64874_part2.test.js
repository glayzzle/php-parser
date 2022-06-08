// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug64874_part2.phpt
  it("Case-sensitivity part of bug #64874 (\"json_decode handles whitespace and case-sensitivity incorrectly\")", function () {
    expect(parser.parseCode("<?php\nfunction decode($json) {\n    var_dump(json_decode($json));\n    echo ((json_last_error() !== 0) ? 'ERROR' : 'SUCCESS') . PHP_EOL;\n}\n// Only lowercase should work\ndecode('true');\ndecode('True');\ndecode('[true]');\ndecode('[True]');\necho PHP_EOL;\ndecode('false');\ndecode('False');\ndecode('[false]');\ndecode('[False]');\necho PHP_EOL;\ndecode('null');\ndecode('Null');\ndecode('[null]');\ndecode('[Null]');\necho PHP_EOL;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
