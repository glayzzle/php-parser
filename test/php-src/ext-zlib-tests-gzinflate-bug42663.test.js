// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzinflate-bug42663.phpt
  it("Bug #42663 (gzinflate() try to allocate all memory with truncated $data)", function () {
    expect(parser.parseCode("<?php\n// build a predictable string\n$string = '';\nfor($i=0; $i<30000; ++$i) $string .= $i . ' ';\nvar_dump(strlen($string));\n// deflate string\n$deflated = gzdeflate($string,9);\nvar_dump(strlen($deflated));\n// truncate $deflated string\n$truncated = substr($deflated, 0, 65535);\nvar_dump(strlen($truncated));\n// inflate $truncated string (check if it will not eat all memory)\nvar_dump(gzinflate($truncated));\n?>")).toMatchSnapshot();
  });
});
