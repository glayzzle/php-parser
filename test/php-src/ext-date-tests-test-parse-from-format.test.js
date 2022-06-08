// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/test-parse-from-format.phpt
  it("date_create_from_format() and date_parse_from_format().", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\n$formats = array( DATE_ATOM, DATE_COOKIE, DATE_ISO8601, DATE_RFC822,\n        DATE_RFC850, DATE_RFC1036, DATE_RFC1123, DATE_RFC2822, DATE_RFC3339,\n        DATE_RSS, DATE_W3C );\nforeach( $formats as $format )\n{\n    $date = new DateTime( \"2008-07-08T22:14:12+02:00\" );\n    $formatted = $date->format( $format ) ;\n    $date2 = date_create_from_format( $format, $formatted );\n    var_dump( $format, $formatted, $date2 );\n    echo \"\\n\";\n    if ( $date2 === false )\n    {\n        var_dump(date_parse_from_format( $format, $formatted ) );\n    }\n}\n?>")).toMatchSnapshot();
  });
});
