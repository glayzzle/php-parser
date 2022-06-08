// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_context_set_option_basic.phpt
  it("stream_context_set_option() function - basic test for stream_context_set_option()", function () {
    expect(parser.parseCode("<?php\n$context = stream_context_create();\n// Single option\nvar_dump(stream_context_set_option($context, 'http', 'method', 'POST'));\n// Array of options\n$options = array(\n    'http' => array(\n        'protocol_version' => 1.1,\n        'user_agent'       => 'PHPT Agent',\n    ),\n);\nvar_dump(stream_context_set_option($context, $options));\nvar_dump(stream_context_get_options($context));\n?>")).toMatchSnapshot();
  });
});
