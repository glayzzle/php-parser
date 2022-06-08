// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_property_id.phpt
  it("Transliterator - \"id\" property", function () {
    expect(parser.parseCode("<?php\n$tr = Transliterator::create(\"Katakana-Latin\");\necho $tr->id, \"\\n\";\n$revtr = $tr->createInverse();\necho $revtr->id, \"\\n\";\nvar_dump($revtr);\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
