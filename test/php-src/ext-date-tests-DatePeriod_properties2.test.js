// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DatePeriod_properties2.phpt
  it("DatePeriod: Test cannot modify read only properties", function () {
    expect(parser.parseCode("<?php\n$period = new DatePeriod(new DateTime, new DateInterval('P1D'), new DateTime);\n$properties = [\n    \"recurrences\",\n    \"include_start_date\",\n    \"start\",\n    \"current\",\n    \"end\",\n    \"interval\",\n];\nforeach ($properties as $property) {\n    try {\n        $period->$property = \"new\";\n    } catch (Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        $period->$property[] = \"extra\";\n    } catch (Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
