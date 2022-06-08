// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation22.phpt
  it("Test lstat() and stat() functions: usage variations - invalid filenames", function () {
    expect(parser.parseCode("<?php\necho \"*** testing stat ***\\n\";\nvar_dump(stat(false));\nvar_dump(stat(''));\nvar_dump(stat(' '));\nvar_dump(stat('|'));\necho \"*** testing lstat ***\\n\";\nvar_dump(lstat(false));\nvar_dump(lstat(''));\nvar_dump(lstat(' '));\nvar_dump(lstat('|'));\n?>")).toMatchSnapshot();
  });
});
