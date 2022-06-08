// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug61335.phpt
  it("Bug #61335 - Access to array node returns wrong truth value", function () {
    expect(parser.parseCode("<?php\n$rec1 = simplexml_load_string(\"<foo><bar>aa</bar>\\n</foo>\");\n$rec2 = simplexml_load_string(\"<foo><bar>aa</bar></foo>\");\nif ($rec1->bar[0])      echo \"NONEMPTY1\\n\";\nif ($rec1->bar[0] . \"\") echo \"NONEMPTY2\\n\";\nif ($rec2->bar[0])      echo \"NONEMPTY3\\n\";\n?>")).toMatchSnapshot();
  });
});
