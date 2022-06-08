// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strtotime2.phpt
  it("strtotime() on date constants", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Europe/Oslo\");\n$time = time();\n$constants = array(\n    'DATE_ATOM',\n    'DATE_COOKIE',\n    'DATE_ISO8601',\n    'DATE_RFC822',\n    'DATE_RFC850',\n    'DATE_RFC1036',\n    'DATE_RFC1123',\n    'DATE_RFC2822',\n    'DATE_RFC3339',\n    'DATE_RSS',\n    'DATE_W3C'\n);\nforeach ($constants as $const) {\n    echo \"$const:\\t\";\n    echo ((strtotime(date(constant($const), $time)) === $time) ? \"OK\" : \"FAIL\") . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
