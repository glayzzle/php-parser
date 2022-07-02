// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug44712.phpt
  it("bug#44712 (stream_context_set_params segfaults on invalid arguments)", function () {
    expect(parser.parseCode("<?php\n$ctx = stream_context_get_default();\ntry {\n    stream_context_set_params($ctx, array(\"options\" => 1));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
