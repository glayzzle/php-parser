// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/method_call_on_literal.phpt
  it("Literal compaction should take method calls on literals into account", function () {
    expect(parser.parseCode("<?php\ntry {\n    (42)->foo();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
