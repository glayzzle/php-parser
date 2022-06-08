// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/chunked_001.phpt
  it("Chunked encoding", function () {
    expect(parser.parseCode("<?php\n$streams = array(\n    \"data://text/plain,0\\r\\n\",\n    \"data://text/plain,2\\r\\nte\\r\\n2\\r\\nst\\r\\n0\\r\\n\",\n    \"data://text/plain,2\\nte\\n2\\nst\\n0\\n\",\n    \"data://text/plain,2;a=1\\nte\\n2;a=2;b=3\\r\\nst\\n0\\n\",\n    \"data://text/plain,2\\nte\\n2\\nst\\n0\\na=b\\r\\nc=d\\n\\r\\n\",\n    \"data://text/plain,1f\\n0123456789abcdef0123456789abcde\\n1\\nf\\n0\\n\",\n    \"data://text/plain,1E\\n0123456789abcdef0123456789abcd\\n2\\nef\\n0\\n\",\n);\nforeach ($streams as $name) {\n    $fp = fopen($name, \"r\");\n    stream_filter_append($fp, \"dechunk\", STREAM_FILTER_READ);\n    var_dump(stream_get_contents($fp));\n    fclose($fp);\n}\n?>")).toMatchSnapshot();
  });
});
