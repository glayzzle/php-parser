// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fopen_variation6.phpt
  it("Test fopen() function : variation: use include path and stream context relative/absolute file", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fopen() : variation ***\\n\";\n$absfile = __FILE__.'.tmp';\n$relfile = \"fopen_variation6.tmp\";\n$h = fopen($absfile, \"w\");\nfwrite($h, \"This is an absolute file\");\nfclose($h);\n$h = fopen($relfile, \"w\");\nfwrite($h, \"This is a relative file\");\nfclose($h);\n$ctx = stream_context_create();\n$h = fopen($absfile, \"r\", true, $ctx);\nfpassthru($h);\nfclose($h);\necho \"\\n\";\n$h = fopen($relfile, \"r\", true, $ctx);\nfpassthru($h);\nfclose($h);\necho \"\\n\";\nunlink($absfile);\nunlink($relfile);\n?>")).toMatchSnapshot();
  });
});
