// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/012.phpt
  it("date_isodate_set() tests", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$dto = date_create(\"2006-12-12\");\nvar_dump(date_isodate_set($dto, 2006, 2, 15));\nvar_dump($dto->format(\"Y/m/d H:i:s\"));\nvar_dump(date_isodate_set($dto, 2006, 5));\nvar_dump($dto->format(\"Y/m/d H:i:s\"));\nvar_dump(date_isodate_set($dto, 2006, 100, 15));\nvar_dump($dto->format(\"Y/m/d H:i:s\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
