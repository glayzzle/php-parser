// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/nl2br.phpt
  it("nl2br() function", function () {
    expect(parser.parseCode("<?php\n    var_dump(nl2br(\"test\"));\n    var_dump(nl2br(\"\"));\n    var_dump(nl2br(\"\\r\\n\"));\n    var_dump(nl2br(\"\\n\"));\n    var_dump(nl2br(\"\\r\"));\n    var_dump(nl2br(\"\\n\\r\"));\n    var_dump(nl2br(\"\\n\\r\\r\\n\\r\\r\\r\\r\"));\n    var_dump(nl2br(\"\\n\\r\\n\\n\\r\\n\\r\\r\\n\\r\\n\"));\n    var_dump(nl2br(\"\\n\\r\\n\\n\\n\\n\\r\\r\\r\\r\\n\\r\"));\n?>")).toMatchSnapshot();
  });
});
