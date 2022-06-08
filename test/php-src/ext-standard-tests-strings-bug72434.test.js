// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72434.phpt
  it("Bug #72434: ZipArchive class Use After Free Vulnerability in PHP's GC algorithm and unserialize", function () {
    expect(parser.parseCode("<?php\n// The following array will be serialized and this representation will be freed later on.\n$free_me = array(new StdClass());\n// Create our payload and unserialize it.\n$serialized_payload = 'a:3:{i:1;N;i:2;O:10:\"ZipArchive\":1:{s:8:\"filename\";'.serialize($free_me).'}i:1;R:4;}';\n$unserialized_payload = unserialize($serialized_payload);\ngc_collect_cycles();\n// The reference counter for $free_me is at -1 for PHP 7 right now.\n// Increment the reference counter by 1 -> rc is 0\n$a = $unserialized_payload[1];\n// Increment the reference counter by 1 again -> rc is 1\n$b = $a;\n// Trigger free of $free_me (referenced by $m[1]).\nunset($b);\n$fill_freed_space_1 = \"filler_zval_1\";\n$fill_freed_space_2 = \"filler_zval_2\";\n$fill_freed_space_3 = \"filler_zval_3\";\n$fill_freed_space_4 = \"filler_zval_4\";\ndebug_zval_dump($unserialized_payload[1]);\n?>")).toMatchSnapshot();
  });
});
