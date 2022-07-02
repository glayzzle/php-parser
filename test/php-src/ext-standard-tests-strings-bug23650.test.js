// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug23650.phpt
  it("Bug #23650 (strip_tags() removes hyphens)", function () {
    expect(parser.parseCode("<?php\n$str = <<< HERE\n1:<!-- abc -  -->\n2:<!doctype -- >\n3:\n4:<abc - def>\n5:abc - def\n6:</abc>\nHERE;\necho strip_tags($str);\necho strip_tags($str, '<abc>');\n?>")).toMatchSnapshot();
  });
});
