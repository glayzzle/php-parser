// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_read_object_return.phpt
  it("Returning an object from stream_read() is invalid, but should not leak", function () {
    expect(parser.parseCode("<?php\nclass MyStream {\n    function stream_open() {\n        return true;\n    }\n    function stream_stat() {\n        return false;\n    }\n    function stream_read() {\n        return new stdClass;\n    }\n}\nstream_wrapper_register('mystream', MyStream::class);\ntry {\n    var_dump(file_get_contents('mystream://'));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
