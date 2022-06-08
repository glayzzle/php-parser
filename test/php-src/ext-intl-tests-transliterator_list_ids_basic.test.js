// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_list_ids_basic.phpt
  it("Transliterator::listIDs (basic)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(count(transliterator_list_ids()) > 100);\nvar_dump(count(Transliterator::listIDs()) > 100);\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
