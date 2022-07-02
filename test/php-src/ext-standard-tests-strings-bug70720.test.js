// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug70720.phpt
  it("Bug #70720 (strip_tags() doesn't handle \"xml\" correctly)", function () {
    expect(parser.parseCode("<?php\nvar_dump(strip_tags('<?php $dom->test(); ?> this is a test'));\nvar_dump(strip_tags('<?php $xml->test(); ?> this is a test'));\nvar_dump(strip_tags('<?xml $xml->test(); ?> this is a test'));\n/* \"->\" case in HTML */\nvar_dump(strip_tags(\"<span class=sf-dump-> this is a test</span>\"));\n?>")).toMatchSnapshot();
  });
});
