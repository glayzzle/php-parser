// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_current_empty_storage.phpt
  it("Check that SplObjectStorage::current() throws when iterator invalid", function () {
    expect(parser.parseCode("<?php\n$s = new SplObjectStorage();\nvar_dump($s->valid());\ntry {\n    var_dump($s->current());\n} catch (RuntimeException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
