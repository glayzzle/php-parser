// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DatePeriod_wrong_recurrence_on_constructor.phpt
  it("DatePeriod: Test wrong recurrence parameter on __construct", function () {
    expect(parser.parseCode("<?php\ntry {\n    new DatePeriod(new DateTime('yesterday'), new DateInterval('P1D'), 0);\n} catch (Exception $exception) {\n    echo $exception->getMessage(), \"\\n\";\n}\ntry {\n    new DatePeriod(new DateTime('yesterday'), new DateInterval('P1D'), -1);\n} catch (Exception $exception) {\n    echo $exception->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
