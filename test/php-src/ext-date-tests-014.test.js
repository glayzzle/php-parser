// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/014.phpt
  it("timezone_offset_get() tests", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$dto = date_create(\"2006-12-12\");\nvar_dump($dto);\n$dtz = date_timezone_get($dto);\nvar_dump($dtz);\nvar_dump(timezone_offset_get($dtz, $dto));\nvar_dump(timezone_offset_get($dto, $dtz));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
