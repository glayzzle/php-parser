// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug63435.phpt
  it("Bug #63435 \tDatetime::format('u') sometimes wrong by 1 microsecond", function () {
    expect(parser.parseCode("<?php\nfor ($i=1 ; $i<999 ; $i++) {\n    $datetime = Datetime::createFromFormat(\"u\", sprintf(\"%06ld\", $i));\n    $res = $datetime->format(\"u\");\n    if ($res != $i) {\n        echo \"$i != $res\\n\";\n    }\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
