// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_period_bad_iso_format.phpt
  it("Test bad ISO date formats passed to DatePeriod constructor", function () {
    expect(parser.parseCode("<?php\ntry {\n    new DatePeriod(\"R4\");\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    new DatePeriod(\"R4/2012-07-01T00:00:00Z\");\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    new DatePeriod(\"2012-07-01T00:00:00Z/P7D\");\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
