// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug55407.phpt
  it("Bug #55407 (Impossible to prototype DateTime::createFromFormat)", function () {
    expect(parser.parseCode("<?php namespace melt\\core;\nclass DateTime extends \\DateTime {\n    public static function createFromFormat($format, $time, \\DateTimeZone $timezone = null): DateTime|false {\n        return new DateTime(parent::createFromFormat($format, $time, $timezone));\n    }\n}\necho \"DONE\\n\";\n?>")).toMatchSnapshot();
  });
});
