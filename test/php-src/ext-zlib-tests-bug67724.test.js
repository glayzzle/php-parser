// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug67724.phpt
  it("Bug #67724 (chained zlib filters silently fail with large amounts of data)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\n$f = fopen(__DIR__.\"/bug67724.gz.gz\", \"rb\")\n    or die(current(error_get_last()));\nstream_filter_append($f, \"zlib.inflate\", STREAM_FILTER_READ, [\"window\" => 30]);\nstream_filter_append($f, \"zlib.inflate\", STREAM_FILTER_READ, [\"window\" => 30]);\nfor ($i = 0; !feof($f); $i += strlen(fread($f, 0x1000)))\n    ;\nfclose($f);\nvar_dump($i);\n?>\nDONE")).toMatchSnapshot();
  });
});
