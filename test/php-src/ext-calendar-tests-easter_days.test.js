// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/easter_days.phpt
  it("easter_days()", function () {
    expect(parser.parseCode("<?php\necho easter_days(1999), \"\\n\";\necho easter_days(1492), \"\\n\";\necho easter_days(1913), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
