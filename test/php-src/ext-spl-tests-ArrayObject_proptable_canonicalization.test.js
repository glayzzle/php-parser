// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_proptable_canonicalization.phpt
  it("When ArrayObject wraps an object, we should use proptable canonicalization", function () {
    expect(parser.parseCode("<?php\n$o = new stdClass;\n$ao = new ArrayObject($o);\n$ao[0] = 1;\nvar_dump($o);\n$ao[0] += 1;\nvar_dump($o);\nvar_dump(isset($ao[0]));\nvar_dump((array) $ao);\nunset($ao[0]);\nvar_dump($o);\n?>")).toMatchSnapshot();
  });
});
