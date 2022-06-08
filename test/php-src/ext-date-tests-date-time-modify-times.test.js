// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date-time-modify-times.phpt
  it("Test for DateTime::modify() with absolute time statements", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    '2010-12-15 19:42:45 UTC' => array(\n        'october 23:00', // October 23rd, with a broken time\n        'back of 4pm',\n        'next week monday',\n        'next week monday 10am',\n        'tuesday noon',\n        'first monday of January 2011',\n        'first monday of January 2011 09:00',\n    ),\n    '2010-12-15 19:42:45' => array(\n        'october 23:00', // October 23rd, with a broken time\n        'march 28, 00:15',\n        'march 28, 01:15', // doesn't exist because of DST\n        'march 28, 02:15',\n    ),\n);\nforeach ( $tests as $start => $data )\n{\n    foreach ( $data as $test )\n    {\n        echo date_create( $start )\n            ->modify( $test )\n            ->format( DateTime::RFC2822 ), \"\\n\";\n    }\n}\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
