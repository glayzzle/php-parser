// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug63740.phpt
  it("Bug #63740 (strtotime seems to use both sunday and monday as start of week)", function () {
    expect(parser.parseCode("<?php\n$dates = [\n    '2015-07-04',\n    '2015-07-05',\n    '2015-07-06',\n    '2015-07-07',\n    '2015-07-08',\n    '2015-07-09',\n    '2015-07-10',\n    '2015-07-11',\n    '2015-07-12',\n    '2015-07-13',\n    '2015-07-14',\n];\nforeach ( $dates as $date )\n{\n    $dt = new DateTimeImmutable( \"$date 00:00 UTC\" );\n    echo $dt->format( \"D Y-m-d H:i\" ), \" → \";\n    $dtn = $dt->modify( \"this week\" );\n    echo $dtn->format( \"D Y-m-d H:i\" ), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
