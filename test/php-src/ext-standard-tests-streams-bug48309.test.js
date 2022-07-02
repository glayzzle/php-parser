// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug48309.phpt
  it("Bug #48309 (stream_copy_to_stream() and fpasstru() do not update stream position)", function () {
    expect(parser.parseCode("<?php\n$tmp = tmpfile();\nfwrite($tmp, 'test');\nfseek($tmp, 0, SEEK_SET);\necho \"-- stream_copy_to_stream() --\\n\";\nfseek($tmp, 0, SEEK_SET);\nstream_copy_to_stream($tmp, STDOUT, 2);\necho \"\\n\";\nvar_dump(stream_get_contents($tmp));\necho \"-- fpassthru() --\\n\";\nfseek($tmp, 0, SEEK_SET);\nfpassthru($tmp);\necho \"\\n\";\nvar_dump(stream_get_contents($tmp));\n?>")).toMatchSnapshot();
  });
});
