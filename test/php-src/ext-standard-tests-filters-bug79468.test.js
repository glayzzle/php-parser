// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug79468.phpt
  it("Bug #79468\tSIGSEGV when closing stream handle with a stream filter appended", function () {
    expect(parser.parseCode("<?php\n$fp = fopen('php://temp', 'rb');\n$rot13_filter = stream_filter_append($fp, \"string.rot13\", STREAM_FILTER_WRITE);\nfwrite($fp, \"This is \");\nfclose($fp);\ntry {\n    stream_filter_remove($rot13_filter);\n} catch (\\Throwable $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
