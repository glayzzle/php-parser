// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gh8115.phpt
  it("GH-8115 (Can't catch deprecation in IntlDateFormatter)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nset_error_handler(function ($errNo, $errStr) {\n    echo \"Caught ($errNo): $errStr\\n\";\n});\ntry {\n    new \\IntlDateFormatter(null, null, null);\n} catch (\\IntlException) {}\ntry {\n    new \\IntlRuleBasedBreakIterator(null, null);\n} catch (\\IntlException) {}\n// Can't be tested since all params are optional\nnew \\IntlGregorianCalendar(null, null);\nnew \\Collator(null);\n// Can't be tested since all params are optional\nnew \\IntlDatePatternGenerator(null);\nnew \\NumberFormatter(null, null);\ntry {\n    new \\MessageFormatter(null, null);\n} catch (\\IntlException) {}\nnew \\ResourceBundle(null, null, null);\n?>")).toMatchSnapshot();
  });
});
