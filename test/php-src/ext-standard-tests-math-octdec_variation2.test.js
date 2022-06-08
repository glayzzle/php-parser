// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/octdec_variation2.phpt
  it("Test octdec() function : strange literals", function () {
    expect(parser.parseCode("<?php\nvar_dump(octdec('0o'));\nvar_dump(octdec('0O'));\nvar_dump(octdec('0'));\nvar_dump(octdec(''));\n?>")).toMatchSnapshot();
  });
});
