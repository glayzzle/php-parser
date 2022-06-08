// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_contents_negative_length.phpt
  it("stream_get_contents() with negative max length", function () {
    expect(parser.parseCode("<?php\n$tmp = tmpfile();\nfwrite($tmp, \"abcd\");\nvar_dump(stream_get_contents($tmp, 2, 1));\ntry {\n    stream_get_contents($tmp, -2);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
