// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug41964.phpt
  it("Bug #41964 (strtotime returns a timestamp for non-time string of pattern '(A|a) .+')", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\nerror_reporting(0);\n$res = date_parse('Ask the Experts');\nvar_dump($res['zone'], $res['tz_abbr']);\necho \"\\n\";\n$res = date_parse('A ');\nvar_dump($res['zone'], $res['tz_abbr']);\necho \"\\n\";\n$res = date_parse('A');\nvar_dump($res['zone'], $res['tz_abbr']);\necho \"\\n\";\n$res = date_parse('a ');\nvar_dump($res['zone'], $res['tz_abbr']);\necho \"\\n\";\n$res = date_parse('a');\nvar_dump($res['zone'], $res['tz_abbr']);\necho \"\\n\";\n$res = date_parse('A Revolution in Development');\nvar_dump($res['zone'], $res['tz_abbr']);\necho \"\\n\";\n$res = date_parse('a nothing');\nvar_dump($res['zone'], $res['tz_abbr']);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
