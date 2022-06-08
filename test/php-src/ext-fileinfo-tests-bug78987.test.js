// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug78987.phpt
  it("Bug #78987 High memory usage during encoding detection", function () {
    expect(parser.parseCode("<?php\n$finfo = new finfo(FILEINFO_MIME_TYPE);\n$minSize = 128 * 1024;\n$maxSize = 16 * 1024 * 1024;\n$map = array(\n\t131072 => 9113600,\n\t262144 => 9113600,\n\t524288 => 10850304,\n\t1048576 => 11210752,\n\t2097152 => 13312000,\n\t4194304 => 17510400,\n\t8388608 => 23801856,\n\t16777216 => 36384768,\n);\nfor($size = $minSize; $size <= $maxSize; $size *= 2) {\n\t$content = str_repeat('0', $size);\n\t$finfo->buffer($content);\n\t$m = memory_get_peak_usage(true);\n\tprintf(\"%-8d => %s\\n\", $size, $m <= $map[$size] ? \"ok\" : \"$m\");\n}\n?>")).toMatchSnapshot();
  });
});
