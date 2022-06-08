// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_create-2.phpt
  it("date_create() function [2]", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\n$d = date_create(\"2005-07-18 22:10:00 +0400\");\necho $d->format('D, d M Y H:i:s T'), \"\\n\";\n$d = date_create(\"@1121710200 +0912\");\necho $d->format('D, d M Y H:i:s T'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
