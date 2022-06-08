// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug52820.phpt
  it("Bug #52820 (writes to fopencookie FILE* not committed when seeking the stream)", function () {
    expect(parser.parseCode("<?php\nfunction do_stuff($url) {\n    $handle=curl_init('file:///i_dont_exist/');\n    curl_setopt($handle, CURLOPT_VERBOSE, true);\n    curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);\n    curl_setopt($handle, CURLOPT_STDERR, $o = fopen($url, \"w+\"));\n    curl_exec($handle);\n    echo \"About to rewind!\\n\";\n    rewind($o);\n    echo stream_get_contents($o);\n    return $o;\n}\necho \"temp stream (close after):\\n\";\nfclose(do_stuff(\"php://temp\"));\necho \"\\nmemory stream (close after):\\n\";\nfclose(do_stuff(\"php://memory\"));\necho \"\\ntemp stream (leak):\\n\";\nzend_leak_variable(do_stuff(\"php://temp\"));\necho \"\\nmemory stream (leak):\\n\";\nzend_leak_variable(do_stuff(\"php://memory\"));\necho \"\\nDone.\\n\";\n?>")).toMatchSnapshot();
  });
});
