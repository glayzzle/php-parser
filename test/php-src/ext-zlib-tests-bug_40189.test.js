// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug_40189.phpt
  it("Bug #40189 (endless loop in zlib.inflate stream filter)", function () {
    expect(parser.parseCode("<?php\n// this string is an excerpt of a phar archive that caused an infinite loop\n$a = \"\\x3\\x0\\x85\\x46\\x2f\\x7c\\xc2\\xaa\\x69\\x2b\\x6d\\xe5\\xdb\\xfe\\xe4\\x21\\x8f\\x0\\x97\\x21\\x1d\\x2\\x0\\x0\\x0\\x47\\x42\\x4d\\x42\";\nvar_dump(base64_encode($a));\n$gp = fopen(__DIR__ . '/test.other', 'wb');\n$fp = fopen('data://text/plain;base64,AwCFRi98wqppK23l2/7kIY8AlyEdAgAAAEdCTUI=', 'r');\nstream_filter_append($fp, 'zlib.inflate', STREAM_FILTER_READ);\nvar_dump(stream_copy_to_stream($fp, $gp, 5));\nfclose($fp);\nfclose($gp);\nvar_dump(file_get_contents(__DIR__ . '/test.other'));\n?>")).toMatchSnapshot();
  });
});
