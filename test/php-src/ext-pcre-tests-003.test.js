// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/003.phpt
  it("abusing preg_match_all()", function () {
    expect(parser.parseCode("<?php\nforeach (array(PREG_PATTERN_ORDER, PREG_SET_ORDER) as $flag) {\n    var_dump(preg_match_all('~\n        (?P<date>\n        (?P<year>(\\d{2})?\\d\\d) -\n        (?P<month>(?:\\d\\d|[a-zA-Z]{2,3})) -\n        (?P<day>[0-3]?\\d))\n        ~x',\n        '2006-05-13 e outra data: \"12-Aug-37\"', $m, $flag));\n    var_dump($m);\n}\n?>")).toMatchSnapshot();
  });
});
