// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug26976.phpt
  it("Bug #26976 (Can not access array elements using array indices)", function () {
    expect(parser.parseCode("<?php\n$root = simplexml_load_string(\n'<?xml version=\"1.0\"?>\n<root>\n <child>a</child>\n <child>b</child>\n <child>c</child>\n <child>d</child>\n</root>\n');\necho $root->child[0], \"\\n\";\necho $root->child[1], \"\\n\";\necho $root->child[2], \"\\n\";\necho $root->child[3], \"\\n\";\n?>")).toMatchSnapshot();
  });
});
