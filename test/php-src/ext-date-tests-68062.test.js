// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/68062.phpt
  it("DateTimeZone::getOffset() accepts a DateTimeInterface object", function () {
    expect(parser.parseCode("<?php\n$tz = new DateTimeZone('Europe/London');\n$dt = new DateTimeImmutable('2014-09-20', $tz);\necho $tz->getOffset($dt), \"\\n\";\ntry {\n    echo $tz->getOffset(1);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
