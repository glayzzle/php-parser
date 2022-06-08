// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_period-immutable.phpt
  it("DatePeriod", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$db1 = new DateTimeImmutable( '2008-01-01' );\n$db2 = new DateTime( '2008-01-01' );\n$de = new DateTime( '2008-03-31' );\n$di = DateInterval::createFromDateString( 'first day of next month' );\nforeach ( new DatePeriod( $db1, $di, $de ) as $dt )\n{\n    echo get_class( $dt ), \"\\n\";\n    echo $dt->format( \"l Y-m-d\\n\" );\n    echo $dt->modify( \"3 tuesday\" )->format( \"l Y-m-d\\n\" );\n    echo $dt->format( \"l Y-m-d\\n\\n\" );\n}\nforeach ( new DatePeriod( $db2, $di, $de ) as $dt )\n{\n    echo get_class( $dt ), \"\\n\";\n    echo $dt->format( \"l Y-m-d\\n\" );\n    echo $dt->modify( \"3 tuesday\" )->format( \"l Y-m-d\\n\" );\n    echo $dt->format( \"l Y-m-d\\n\\n\" );\n}\n?>")).toMatchSnapshot();
  });
});
