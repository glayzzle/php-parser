// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug46426.phpt
  it("Bug #46426 (3rd parameter offset of stream_get_contents not works for \"0\")", function () {
    expect(parser.parseCode("<?php\n$tmp = tmpfile();\nfwrite($tmp, \"12345\");\necho stream_get_contents($tmp, 2, 1);\necho \"\\n\";\necho stream_get_contents($tmp, -1);\necho \"\\n\";\necho stream_get_contents($tmp, -1, 0);\necho \"\\n\";\necho stream_get_contents($tmp, -1, 2);\necho \"\\n\";\necho stream_get_contents($tmp, 0, 0);\necho \"\\n\";\necho stream_get_contents($tmp, 1, 0);\necho \"\\n\";\necho stream_get_contents($tmp, -1);\n?>")).toMatchSnapshot();
  });
});
