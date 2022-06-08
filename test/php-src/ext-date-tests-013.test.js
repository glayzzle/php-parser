// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/013.phpt
  it("date_date_set() tests", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$dto = date_create(\"2006-12-12\");\nvar_dump($dto);\nvar_dump($dto->format(\"Y.m.d H:i:s\"));\nvar_dump(date_date_set($dto, 2006, 2, 15));\nvar_dump($dto->format(\"Y.m.d H:i:s\"));\nvar_dump(date_date_set($dto, 2006, 24, 60));\nvar_dump($dto->format(\"Y.m.d H:i:s\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
