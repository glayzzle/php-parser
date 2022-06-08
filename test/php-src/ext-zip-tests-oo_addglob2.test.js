// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_addglob2.phpt
  it("ZipArchive::addGlob() method with more compression and encryption", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$dirname = __DIR__ . '/__tmp_oo_addglob2/';\n$file = $dirname . 'test.zip';\n@mkdir($dirname);\ncopy(__FILE__, $dirname . 'foo.txt');\ncopy(__FILE__, $dirname . 'bar.txt');\n$zip = new ZipArchive();\nif (!$zip->open($file, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {\n        exit('failed');\n}\n$options = [\n    'remove_all_path' => true,\n];\nif (!$zip->addGlob($dirname . 'foo.*', GLOB_BRACE, $options)) {\n        echo \"failed 1\\n\";\n}\n$options = [\n    'remove_all_path' => true,\n    'comp_method' => ZipArchive::CM_STORE,\n    'comp_flags' => 5,\n    'enc_method' => ZipArchive::EM_AES_256,\n    'enc_password' => 'secret',\n];\nif (!$zip->addGlob($dirname . 'bar.*', GLOB_BRACE, $options)) {\n        echo \"failed 2\\n\";\n}\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n        $zip->close();\n        $zip = new ZipArchive();\n        $zip->open($file);\n        for($i=0; $i<$zip->numFiles; $i++) {\n            $sb = $zip->statIndex($i);\n            echo \"$i: \" . $sb['name'] .\n                \", comp=\" . $sb['comp_method'] .\n                \", enc=\"  . $sb['encryption_method'] . \"\\n\";\n        }\n} else {\n        echo \"failed 3\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
