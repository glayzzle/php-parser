// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug48709.phpt
  it("Bug #48709 (metaphone and 'wh')", function () {
    expect(parser.parseCode("<?php\n/* Initial letter exceptions */\n$exceptions = array(\n    'kn', // Drop first letter\n    'gn', // ditto\n    'pn', // ditto\n    'ae', // ditto\n    'wr', // ditto\n    'x',  // s\n    'wh', // w\n    'wa'  // w\n);\nforeach ($exceptions as $letter) {\n    printf(\"%s => %s\\n\", $letter, metaphone($letter));\n}\n?>")).toMatchSnapshot();
  });
});
