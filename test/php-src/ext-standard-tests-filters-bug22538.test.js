// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug22538.phpt
  it("Bug #22538 (filtered stream doesn't update file pointer)", function () {
    expect(parser.parseCode("<?php\nfunction my_stream_copy_to_stream($fin, $fout) {\n    while (!feof($fin)) {\n        fwrite($fout, fread($fin, 4096));\n    }\n}\n$size = 65536;\ndo {\n    $path1 = sprintf(\"%s/%s%da\", __DIR__, uniqid(), time());\n    $path2 = sprintf(\"%s/%s%db\", __DIR__, uniqid(), time());\n} while ($path1 == $path2);\n$fp = fopen($path1, \"w\") or die(\"Can not open $path1\\n\");\n$str = \"abcdefghijklmnopqrstuvwxyz\\n\";\n$str_len = strlen($str);\n$cnt = $size;\nwhile (($cnt -= $str_len) > 0) {\n    fwrite($fp, $str);\n}\n$cnt = $size - ($str_len + $cnt);\nfclose($fp);\n$fin = fopen($path1, \"r\") or die(\"Can not open $path1\\n\");\n$fout = fopen($path2, \"w\") or die(\"Can not open $path2\\n\");\nstream_filter_append($fout, \"string.rot13\");\nmy_stream_copy_to_stream($fin, $fout);\nfclose($fout);\nfclose($fin);\nvar_dump($cnt);\nvar_dump(filesize($path2));\nvar_dump(md5_file($path1));\nvar_dump(md5_file($path2));\nunlink($path1);\nunlink($path2);\n?>")).toMatchSnapshot();
  });
});
