// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug63389.phpt
  it("Bug #63389 (Missing context check on libxml_set_streams_context() causes memleak)", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(\"php://input\", \"r\");\nlibxml_set_streams_context($fp);\ntry {\n    libxml_set_streams_context(\"a\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
