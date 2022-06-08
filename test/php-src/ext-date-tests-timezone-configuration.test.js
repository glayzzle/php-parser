// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone-configuration.phpt
  it("timezone configuration [1]", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set('Europe/Oslo');\n    echo strtotime(\"2005-06-18 22:15:44\"), \"\\n\";\n    date_default_timezone_set('Europe/London');\n    echo strtotime(\"2005-06-18 22:15:44\"), \"\\n\";\n    date_default_timezone_set('Europe/Oslo');\n    echo strtotime(\"2005-06-18 22:15:44\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
