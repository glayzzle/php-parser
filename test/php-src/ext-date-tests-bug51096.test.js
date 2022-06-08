// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug51096.phpt
  it("Bug #51096 (Test for \"first day\" vs \"first day of\")", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    'first day',\n    'last day',\n    'next month',\n    'first day next month',\n    'last day next month',\n    'first day of next month',\n    'last day of next month'\n);\nforeach ( $tests as $test )\n{\n    $result = date_parse( $test );\n    $rel = $result['relative'];\n    echo $test, \"\\n- month: \", $rel['month'], '; day: ', $rel['day'],\n         '; first-day-of: ', isset( $rel['first_day_of_month'] ) ? 'true' : 'false',\n         '; last-day-of: ', isset( $rel['last_day_of_month'] ) ? 'true' : 'false', \"\\n\";\n    $date = new DateTime( '2010-03-06 15:21 UTC' );\n    echo '- ', $date->format( DateTime::ISO8601 );\n    $date->modify( $test );\n    echo ' -> ', $date->format( DateTime::ISO8601 ), \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
