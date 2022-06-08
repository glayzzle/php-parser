// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug27619.phpt
  it("Bug #27619 (filters not applied to pre-buffered data)", function () {
    expect(parser.parseCode("<?php\n    $fp = tmpfile();\n    fwrite($fp, \"this is a lowercase string.\\n\");\n    rewind($fp);\n    /* Echo out the first four bytes 'this' without applying filter\n       Remainder will get sucked into the read buffer though. */\n    echo fread($fp, 4);\n    stream_filter_append($fp, \"string.toupper\");\n    fpassthru($fp);\n?>")).toMatchSnapshot();
  });
});
