// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_setmtime.phpt
  it("setMtime", function () {
    expect(parser.parseCode("<?php\n$dirname = dirname(__FILE__) . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . '__tmp_oo_set_mtime.zip';\n@unlink($file);\n$zip = new ZipArchive;\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\n$zip->addFromString('foo', 'entry #1');\n$zip->addFromString('bar', 'entry #2');\n$t1 = mktime(0,0,0,12,25,2019);\n$t2 = mktime(0,0,0,14,7,2018);\necho \"Set 1\\n\";\n$s = $zip->statName('foo');\nvar_dump($s['mtime'] > $t1);\nvar_dump($zip->setMtimeName('foo', $t1));\n$s = $zip->statName('foo');\n// ONLY with 1.6.0 - var_dump($s['mtime'] ==  $t1);\necho \"Set 2\\n\";\n$s = $zip->statIndex(1);\nvar_dump($s['mtime'] > $t2);\nvar_dump($zip->setMtimeIndex(1, $t2));\n$s = $zip->statIndex(1);\n// ONLY with 1.6.0 - var_dump($s['mtime'] ==  $t2);\nif (!$zip->status == ZIPARCHIVE::ER_OK) {\n    echo \"failed to write zip\\n\";\n}\n$zip->close();\nif (!$zip->open($file)) {\n    @unlink($file);\n    exit('failed');\n}\necho \"Get 1\\n\";\n$s = $zip->statIndex(0);\nvar_dump($s['mtime'] ==  $t1);\necho \"Get 2\\n\";\n$s = $zip->statName('bar');\nvar_dump($s['mtime'] ==  $t2);\n$zip->close();\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
