// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/015.phpt
  it("timezone object reference handling", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$dto = new DateTime();\n$tzold = $dto->getTimezone();\nvar_dump($tzold->getName());\n$dto->setTimezone(new DateTimeZone('US/Eastern'));\nvar_dump($tzold->getName());\nvar_dump($dto->getTimezone()->getName());\nunset($dto);\nvar_dump($tzold->getName());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
