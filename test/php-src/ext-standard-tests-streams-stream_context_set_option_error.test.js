// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_context_set_option_error.phpt
  it("stream_context_set_option() error conditions", function () {
    expect(parser.parseCode("<?php\n$ctx = stream_context_create();\ntry {\n    stream_context_set_option($ctx, [], \"x\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    stream_context_set_option($ctx, [], null, \"x\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    stream_context_set_option($ctx, \"x\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    stream_context_set_option($ctx, \"x\", \"y\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
