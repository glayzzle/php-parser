// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_wrapper_level.phpt
  it("compress.zlib:// wrapper with compression level", function () {
    expect(parser.parseCode("<?php declare(strict_types=1);\n$filename = tempnam(sys_get_temp_dir(), \"php-zlib-test-\");\n$thisfile = file_get_contents(__FILE__);\nfunction write_at_level(int $level) {\n  global $filename, $thisfile;\n  $ctx = stream_context_create(['zlib' => ['level' => $level] ]);\n  $fp = fopen(\"compress.zlib://$filename\", 'w', false, $ctx);\n  for ($i = 0; $i < 10; ++$i) {\n    fwrite($fp, $thisfile);\n  }\n  fclose($fp);\n  $size = filesize($filename);\n  unlink($filename);\n  return $size;\n}\n$size1 = write_at_level(1);\n$size9 = write_at_level(9);\nvar_dump(10 * strlen($thisfile));\nvar_dump($size1);\nvar_dump($size9);\nvar_dump($size9 < $size1);\n?>")).toMatchSnapshot();
  });
});
