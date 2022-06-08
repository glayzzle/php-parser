// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_datetime.phpt
  it("MessageFormatter::format(): DateTime accepted to format dates and times", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n//ini_set(\"intl.default_locale\", \"nl\");\n$fmt = <<<EOD\n{0,date} {0,time}\nEOD;\n$dt = new DateTime(\"2012-05-06 18:00:42\", new DateTimeZone(\"Europe/Lisbon\"));\n$dti = new DateTimeImmutable(\"2012-05-06 18:00:42\", new DateTimeZone(\"Europe/Lisbon\"));\n$mf = new MessageFormatter('en_US', $fmt);\nvar_dump($mf->format(array($dt)));\nvar_dump($mf->format(array($dti)));\n?>")).toMatchSnapshot();
  });
});
