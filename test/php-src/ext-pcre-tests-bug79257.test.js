// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug79257.phpt
  it("Bug #79257: Duplicate named groups (?J) prefer last alternative even if not matched", function () {
    expect(parser.parseCode("<?php\npreg_match('/(?J)(?:(?<g>foo)|(?<g>bar))/', 'foo', $matches);\nvar_dump($matches);\npreg_match('/(?J)(?:(?<g>foo)|(?<g>bar))/', 'foo', $matches,\n    PREG_UNMATCHED_AS_NULL);\nvar_dump($matches);\npreg_match('/(?J)(?:(?<g>foo)|(?<g>bar))/', 'foo', $matches,\n    PREG_OFFSET_CAPTURE);\nvar_dump($matches);\npreg_match('/(?J)(?:(?<g>foo)|(?<g>bar))/', 'foo', $matches,\n    PREG_UNMATCHED_AS_NULL|PREG_OFFSET_CAPTURE);\nvar_dump($matches);\npreg_match('/(?J)(?:(?<g>foo)|(?<g>bar))(?<h>baz)/', 'foobaz', $matches);\nvar_dump($matches);\npreg_match('/(?J)(?:(?<g>foo)|(?<g>bar))(?<h>baz)/', 'foobaz', $matches,\n    PREG_UNMATCHED_AS_NULL);\nvar_dump($matches);\npreg_match('/(?J)(?:(?<g>foo)|(?<g>bar))(?<h>baz)/', 'foobaz', $matches,\n    PREG_OFFSET_CAPTURE);\nvar_dump($matches);\npreg_match('/(?J)(?:(?<g>foo)|(?<g>bar))(?<h>baz)/', 'foobaz', $matches,\n    PREG_UNMATCHED_AS_NULL|PREG_OFFSET_CAPTURE);\nvar_dump($matches);\n?>")).toMatchSnapshot();
  });
});
