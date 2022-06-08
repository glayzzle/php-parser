// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_sunrise_and_sunset_error.phpt
  it("Test error condition of date_sunrise() and date_sunset()", function () {
    expect(parser.parseCode("<?php\ntry {\n    date_sunrise(time(), 3);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    date_sunset(time(), 4);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
