// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/basename_bug66395_variation2-win32.phpt
  it("basename bug #66395 check drive traversing and NTFS streams", function () {
    expect(parser.parseCode("<?php\necho basename(\"y:\") . \"\\n\";\necho basename(\"y:/\") . \"\\n\";\necho basename(\"notdriveletter:file.txt\") . \"\\n\";\necho basename(\"a:\\\\b:c:d:hello.txt\\\\hcd:c.txt\") . \"\\n\";\necho basename(\"a:b:c:d:hello.txt\\\\d:some.txt\") . \"\\n\";\necho basename(\"a:b:c:d:hello\\world\\a.bmp\\c:d:e:f.txt\") . \"\\n\";\necho basename(\"a:\\\\b:\\\\c:d:hello\\\\world\\\\a.bmp\\\\d:e:f:g.txt\") . \"\\n\";\necho basename(\"a:\\\\b:\\\\c:d:hello/world\\\\a.bmp\\\\d:\\\\e:\\\\f:g.txt\") . \"\\n\";\necho basename(\"a:\\\\b:/c:d:hello\\\\world:somestream\") . \"\\n\";\necho basename(\"a:\\\\b:\\\\c:d:hello\\\\world:some.stream\") . \"\\n\";\necho basename(\"a:/b:\\\\c:d:hello\\\\world:some.stream:\\$DATA\") . \"\\n\";\necho basename(\"x:y:z:hello\\world:my.stream:\\$DATA\") . \"\\n\";\necho basename(\"a:\\\\b:\\\\c:d:hello\\\\world:c:\\$DATA\") . \"\\n\";\necho basename(\"a:\\\\b:\\\\c:d:hello\\\\d:world:c:\\$DATA\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
