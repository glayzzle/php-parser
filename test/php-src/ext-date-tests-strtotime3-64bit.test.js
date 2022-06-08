// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strtotime3-64bit.phpt
  it("strtotime() function (64 bit)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Lisbon');\n$time = 1150494719; // 16/June/2006\n$strs = array(\n    '',\n    \" \\t\\r\\n000\",\n    'yesterday',\n    '22:49:12',\n    '22:49:12 bogusTZ',\n    '22.49.12.42GMT',\n    '22.49.12.42bogusTZ',\n    't0222',\n    't0222 t0222',\n    '022233',\n    '022233 bogusTZ',\n    '2-3-2004',\n    '2.3.2004',\n    '20060212T23:12:23UTC',\n    '20060212T23:12:23 bogusTZ',\n    '2006167', //pgydotd\n    'Jan-15-2006', //pgtextshort\n    '2006-Jan-15', //pgtextreverse\n    '10/Oct/2000:13:55:36 +0100', //clf\n    '10/Oct/2000:13:55:36 +00100', //clf\n    '2006',\n    '1986', // year\n    'JAN',\n    'January',\n);\nforeach ($strs as $str) {\n    $t = strtotime($str, $time);\n    if (is_integer($t)) {\n        var_dump(date(DATE_RFC2822, $t));\n    } else {\n        var_dump($t);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
