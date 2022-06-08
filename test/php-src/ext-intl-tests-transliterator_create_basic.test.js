// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_create_basic.phpt
  it("Transliterator::create (basic)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$t = Transliterator::create(\"any-latin\");\necho $t->id,\"\\n\";\n$t = transliterator_create(\"any-latin\");\necho $t->id,\"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
