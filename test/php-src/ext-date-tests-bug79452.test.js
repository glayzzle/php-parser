// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug79452.phpt
  it("Bug #79452 (DateTime::diff() generates months differently between time zones)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/New_York');\n$from = new DateTime('2019-06-01');\n$to = new DateTime('2019-10-01');\nvar_dump($from->diff($to)->m);\ndate_default_timezone_set('Asia/Tokyo');\n$from = new DateTime('2019-06-01');\n$to = new DateTime('2019-10-01');\nvar_dump($from->diff($to)->m);\n?>")).toMatchSnapshot();
  });
});
