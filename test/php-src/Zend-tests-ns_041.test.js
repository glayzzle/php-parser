// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_041.phpt
  it("041: Constants in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nconst FOO = \"ok\\n\";\necho(FOO);\necho(\\test\\ns1\\FOO);\necho(\\test\\ns1\\FOO);\necho(BAR);\nconst BAR = \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
