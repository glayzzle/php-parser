// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_011.phpt
  it("STATIC heredocs CAN be used as static scalars.", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nclass e {\n    const E = <<<THISMUSTNOTERROR\nIf you DON'T see this, something's wrong.\nTHISMUSTNOTERROR;\n};\nprint e::E . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
