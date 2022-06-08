// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_008.phpt
  it("Bad unserialize_callback_func", function () {
    expect(parser.parseCode("<?php\nini_set('unserialize_callback_func','Nonexistent');\n$o = unserialize('O:3:\"FOO\":0:{}');\nvar_dump($o);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
