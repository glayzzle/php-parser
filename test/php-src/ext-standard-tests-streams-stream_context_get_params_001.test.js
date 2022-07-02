// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_context_get_params_001.phpt
  it("stream_context_get_params()", function () {
    expect(parser.parseCode("<?php\n$ctx = stream_context_create();\nvar_dump($ctx);\nvar_dump(stream_context_get_params($ctx));\nvar_dump(stream_context_set_option($ctx, \"foo\",\"bar\",\"baz\"));\nvar_dump(stream_context_get_params($ctx));\nvar_dump(stream_context_set_params($ctx, array(\"notification\" => \"stream_notification_callback\")));\nvar_dump(stream_context_get_params($ctx));\nvar_dump(stream_context_set_params($ctx, array(\"notification\" => array(\"stream\",\"notification_callback\"))));\nvar_dump(stream_context_get_params($ctx));\nvar_dump(stream_context_get_params($ctx));\nvar_dump(stream_context_get_options($ctx));\nvar_dump(stream_context_get_params($ctx));\nvar_dump(stream_context_get_options($ctx));\n?>")).toMatchSnapshot();
  });
});
