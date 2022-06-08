// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug64887.phpt
  it("Bug #64887: Allow DateTime modification with subsecond items", function () {
    expect(parser.parseCode("<?php\n$tests = [\n    '+1 ms',\n    '-2 msec',\n    '+3 msecs',\n    '-4 millisecond',\n    '+5 milliseconds',\n    '-6 usec',\n    '+7 usecs',\n    '-8 microsecond',\n    '+9 microseconds',\n    '-10 µs',\n    '+11 µsec',\n    '-12 µsecs',\n    '+8 msec -2 µsec',\n];\n$datetime = new DateTimeImmutable( \"2016-10-07 13:25:50\" );\nforeach ( $tests as $test )\n{\n    echo $datetime->modify( $test )->format( 'Y-m-d H:i:s.u' ), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
