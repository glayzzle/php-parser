// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug63391.phpt
  it("Test for #63391 (Incorrect/inconsistent day of week prior to the year 1600)", function () {
    expect(parser.parseCode("<?php\nini_set('date.timezone', 'UTC');\nprint \"Date         PHP\\n\";\nprint \"----------   ---\\n\";\n$dates = array('1599-12-30', '1599-12-31', '1600-01-01', '1600-01-02');\nforeach ($dates as $date) {\n    echo date_create($date)->format('Y-m-d   D'), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
