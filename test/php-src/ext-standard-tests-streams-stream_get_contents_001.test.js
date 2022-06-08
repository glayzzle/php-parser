// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_contents_001.phpt
  it("stream_get_contents() - Testing offset out of range", function () {
    expect(parser.parseCode("<?php\n$tmp = tmpfile();\nfwrite($tmp, \"12345\");\necho stream_get_contents($tmp, 2, 5), \"--\\n\";\necho stream_get_contents($tmp, 2), \"--\\n\";\necho stream_get_contents($tmp, 2, 3), \"--\\n\";\necho stream_get_contents($tmp, 2, -1), \"--\\n\";\n?>")).toMatchSnapshot();
  });
});
