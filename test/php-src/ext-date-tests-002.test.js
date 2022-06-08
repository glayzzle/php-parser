// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/002.phpt
  it("strtotime() function", function () {
    expect(parser.parseCode("<?php\n    $dates = array (\n        \"1999-10-13\",\n        \"Oct 13  1999\",\n        \"2000-01-19\",\n        \"Jan 19  2000\",\n        \"2001-12-21\",\n        \"Dec 21  2001\",\n        \"2001-12-21 12:16\",\n        \"Dec 21 2001 12:16\",\n        \"Dec 21  12:16\",\n        \"2001-10-22 21:19:58\",\n        \"2001-10-22 21:19:58-02\",\n        \"2001-10-22 21:19:58-0213\",\n        \"2001-10-22 21:19:58+02\",\n        \"2001-10-22 21:19:58+0213\",\n        \"2001-10-22T21:20:58-03:40\",\n        \"2001-10-22T211958-2\",\n        \"20011022T211958+0213\",\n        \"20011022T21:20+0215\",\n        \"1997W011\",\n        \"2004W101T05:00+0\",\n    );\n    echo \"*** GMT0\\n\";\n    date_default_timezone_set(\"GMT0\");\n    foreach ($dates as $date) {\n        echo date (\"Y-m-d H:i:s\\n\", strtotime ($date));\n    }\n    echo \"*** US/Eastern\\n\";\n    date_default_timezone_set(\"US/Eastern\");\n    if( date(\"T\") == \"GMT\" ) {\n        // POSIX style\n        date_default_timezone_set(\"EST5EDT4,M4.1.0,M10.5.0\");\n    }\n    foreach ($dates as $date) {\n        echo date (\"Y-m-d H:i:s\\n\", strtotime ($date));\n    }\n?>")).toMatchSnapshot();
  });
});
