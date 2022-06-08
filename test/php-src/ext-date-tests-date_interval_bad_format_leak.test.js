// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_interval_bad_format_leak.phpt
  it("DateInterval with bad format should not leak period", function () {
    expect(parser.parseCode("<?php\ntry {\n    new DateInterval('P3\"D');\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    new DatePeriod('P3\"D');\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    new DatePeriod('2008-03-01T12:00:00Z1');\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
