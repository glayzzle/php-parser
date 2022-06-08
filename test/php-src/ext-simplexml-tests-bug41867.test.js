// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug41867.phpt
  it("Bug #41867 (getName is broken)", function () {
    expect(parser.parseCode("<?php\n$a = simplexml_load_string(\"<a><b><c/></b></a>\");\necho $a->getName().\"\\n\";\necho $a->b->getName().\"\\n\";\necho $a->b->c->getName().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
