// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/basename_bug66395-win32.phpt
  it("basename bug #66395", function () {
    expect(parser.parseCode("<?php\necho basename(\"c:file.txt\") . \"\\n\";\necho basename(\"d:subdir\\\\file.txt\") . \"\\n\";\necho basename(\"y:file.txt\", \".txt\") . \"\\n\";\necho basename(\"notdriveletter:file.txt\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
