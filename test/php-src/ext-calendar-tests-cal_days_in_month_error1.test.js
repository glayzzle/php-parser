// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/cal_days_in_month_error1.phpt
  it("Test cal_days_in_month() function : error conditions", function () {
    expect(parser.parseCode("<?php\ntry {\n    cal_days_in_month(-1, 4, 2017);\n} catch (ValueError $ex) {\n    echo \"{$ex->getMessage()}\\n\";\n}\ntry{\n    cal_days_in_month(CAL_GREGORIAN,0, 2009);\n} catch (ValueError $ex) {\n    echo \"{$ex->getMessage()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
