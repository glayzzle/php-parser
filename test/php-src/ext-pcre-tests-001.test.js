// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/001.phpt
  it("abusing preg_match()", function () {
    expect(parser.parseCode("<?php\nforeach (array('2006-05-13', '06-12-12', 'data: \"12-Aug-87\"') as $s) {\n    var_dump(preg_match('~\n        (?P<date>\n        (?P<year>(\\d{2})?\\d\\d) -\n        (?P<month>(?:\\d\\d|[a-zA-Z]{2,3})) -\n        (?P<day>[0-3]?\\d))\n    ~x', $s, $m));\n    var_dump($m);\n}\n?>")).toMatchSnapshot();
  });
});
