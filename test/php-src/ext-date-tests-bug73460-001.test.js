// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug73460-001.phpt
  it("Bug #73460 (Datetime add not realising it already applied DST change)", function () {
    expect(parser.parseCode("<?php\n$date = new DateTime('2016-11-05 23:45:00', new DateTimeZone('America/New_York'));\nforeach (range(1, 20) as $i) {\n\techo $date->format('Y/m/d H:i e T'), \"\\n\";\n\t$date->add(new DateInterval('PT15M'));\n}\n?>")).toMatchSnapshot();
  });
});
