// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_invalid_timezone.phpt
  it("IntlDateFormat constructor failure", function () {
    expect(parser.parseCode("<?php\ntry {\n  new \\IntlDateFormatter('en_US', \\IntlDateFormatter::FULL, \\IntlDateFormatter::FULL);\n  echo \"Wat?\";\n} catch (\\IntlException $e) {\n  echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
