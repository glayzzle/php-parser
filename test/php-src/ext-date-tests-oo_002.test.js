// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/oo_002.phpt
  it("date OO cloning", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Berlin');\nclass _d extends DateTime {}\nclass _t extends DateTimeZone {}\n$d = new _d(\"1pm Aug 1 GMT 2007\");\nvar_dump($d->format(DateTime::RFC822));\n$c = clone $d;\nvar_dump($c->format(DateTime::RFC822));\n$d->modify(\"1 hour\");\n$c->modify(\"1 second ago\");\nvar_dump($d->format(DateTime::RFC822));\nvar_dump($c->format(DateTime::RFC822));\n$t = new _t(\"Asia/Tokyo\");\nvar_dump($t->getName());\n$c = clone $t;\nvar_dump($c->getName());\n?>")).toMatchSnapshot();
  });
});
