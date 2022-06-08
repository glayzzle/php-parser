// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_period.phpt
  it("DatePeriod", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$db = new DateTime( '2008-01-01' );\n$de = new DateTime( '2008-12-31' );\n$di = DateInterval::createFromDateString( 'first day of next month' );\nforeach ( new DatePeriod( $db, $di, $de ) as $dt )\n{\n    echo $dt->modify( \"3 tuesday\" )->format( \"l Y-m-d\\n\" );\n}\n?>\n<?php\n$db = new DateTime( '2007-12-31' );\n$de = new DateTime( '2009-12-31 23:59:59' );\n$di = DateInterval::createFromDateString( 'last thursday of next month' );\nforeach ( new DatePeriod( $db, $di, $de, DatePeriod::EXCLUDE_START_DATE ) as $dt )\n{\n    echo $dt->format( \"l Y-m-d H:i:s\\n\" );\n}\n?>")).toMatchSnapshot();
  });
});
