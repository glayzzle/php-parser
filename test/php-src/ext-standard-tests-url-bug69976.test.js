// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug69976.phpt
  it("Bug #69976 (Unable to parse \"all\" urls with colon char)", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_url(\"/busca/?fq=B:20001\"));\nvar_dump(parse_url(\"/busca/?fq=B:200013\"));\nvar_dump(parse_url(\"/busca/?fq=home:01234\"));\nvar_dump(parse_url(\"/busca/?fq=home:012345\"));\n?>")).toMatchSnapshot();
  });
});
