// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug44562.phpt
  it("Bug #44562 (Creating instance of DatePeriod crashes)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\ntry {\n    $dp = new DatePeriod('2D');\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$begin = new DateTime( \"2008-07-20T22:44:53+0200\" );\n$interval = DateInterval::createFromDateString( \"1 day\" );\n$dp = new DatePeriod( $begin, $interval, 10 );\nforeach ( $dp as $d )\n{\n    var_dump ($d->format( DATE_ISO8601 ) );\n}\n?>")).toMatchSnapshot();
  });
});
