// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug71884.phpt
  it("Bug #71884 (Null pointer deref (segfault) in stream_context_get_default)", function () {
    expect(parser.parseCode("<?php\n$arr=array();\n$arr[0]['A']=0;\ntry {\n    stream_context_get_default($arr);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
