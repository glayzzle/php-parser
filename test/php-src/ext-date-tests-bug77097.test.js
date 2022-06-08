// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug77097.phpt
  it("Bug #77097 (DateTime::diff gives wrong diff when the actual diff is less than 1 second)", function () {
    expect(parser.parseCode("<?php\n$now = new DateTime('2018-11-03 11:34:20.781751');\n$ago = new DateTime('2018-11-03 11:34:20.000000');\n$diff = $now->diff($ago);\nvar_dump($diff->invert, $diff->s, $diff->f);\n$diff = $ago->diff($now);\nvar_dump($diff->invert, $diff->s, $diff->f);\n$diff = $now->diff($ago, true);\nvar_dump($diff->invert, $diff->s, $diff->f);\n$diff = $ago->diff($now, true);\nvar_dump($diff->invert, $diff->s, $diff->f);\n?>")).toMatchSnapshot();
  });
});
