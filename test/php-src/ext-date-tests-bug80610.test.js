// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug80610.phpt
  it("Bug #80610 (DateTime calculate wrong with DateInterval)", function () {
    expect(parser.parseCode("<?php\n$expectEaster = date_create_from_format('Y-m-d H:i:s', '2020-04-12 12:00:00', new DateTimeZone('Europe/Berlin'));\n$interval = new DateInterval('PT20800M');\n$expectEaster->sub($interval);\n$expectEaster->add($interval);\necho('easter '.$expectEaster->format('Y-m-d H:i:s').\"\\n\" );\n$expectEaster = date_create_from_format('Y-m-d H:i:s', '2020-04-12 12:00:00', new DateTimeZone('Europe/Berlin'));\n$interval = new DateInterval('PT20715M');\n$expectEaster->sub($interval);\n$expectEaster->add($interval);\necho('easter '.$expectEaster->format('Y-m-d H:i:s').\"\\n\");\n$expectEaster = date_create_from_format('Y-m-d H:i:s', '2020-04-12 12:00:00', new DateTimeZone('Europe/Berlin'));\n$interval = new DateInterval('PT20700M');\n$expectEaster->sub($interval);\n$expectEaster->add($interval);\necho('easter '.$expectEaster->format('Y-m-d H:i:s').\"\\n\");\n?>")).toMatchSnapshot();
  });
});
