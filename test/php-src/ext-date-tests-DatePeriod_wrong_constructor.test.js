// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DatePeriod_wrong_constructor.phpt
  it("DatePeriod: Test wrong __construct parameter", function () {
    expect(parser.parseCode("<?php\ntry {\n    new DatePeriod();\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
