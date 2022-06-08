// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug74057.phpt
  it("Bug #74057: wrong day when using \"this week\" in strtotime", function () {
    expect(parser.parseCode("<?php\necho date(\"D Y-m-d\", strtotime(\"saturday this week\", strtotime(\"Sun 2017-01-01\"))).\"\\n\";\necho date(\"D Y-m-d\", strtotime(\"saturday this week\", strtotime(\"Mon 2017-01-02\"))).\"\\n\";\necho date(\"D Y-m-d\", strtotime(\"saturday this week\", strtotime(\"Tue 2017-01-03\"))).\"\\n\";\necho date(\"D Y-m-d\", strtotime(\"saturday this week\", strtotime(\"Wed 2017-01-04\"))).\"\\n\";\necho date(\"D Y-m-d\", strtotime(\"saturday this week\", strtotime(\"Thu 2017-01-05\"))).\"\\n\";\necho date(\"D Y-m-d\", strtotime(\"saturday this week\", strtotime(\"Fri 2017-01-06\"))).\"\\n\";\necho date(\"D Y-m-d\", strtotime(\"saturday this week\", strtotime(\"Sat 2017-01-07\"))).\"\\n\";\necho date(\"D Y-m-d\", strtotime(\"saturday this week\", strtotime(\"Sun 2017-01-08\"))).\"\\n\";\necho date(\"D Y-m-d\", strtotime(\"saturday this week\", strtotime(\"Mon 2017-01-09\"))).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
