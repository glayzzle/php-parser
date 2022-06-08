// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_addglob.phpt
  it("ZipArchive::addGlob() method", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/utils.inc';\n$dirname = __DIR__ . '/oo_addglob_dir/';\n$file = $dirname . 'tmp.zip';\n@mkdir($dirname);\ncopy(__DIR__ . '/test.zip', $file);\ntouch($dirname . 'foo.txt');\ntouch($dirname . 'bar.baz');\n$zip = new ZipArchive();\nif (!$zip->open($file)) {\n        exit('failed');\n}\n$options = array('add_path' => 'baz/', 'remove_all_path' => TRUE);\nif (!$zip->addGlob($dirname . '*.{txt,baz}', GLOB_BRACE, $options)) {\n    echo \"failed 1\\n\";\n}\nif (!$zip->addGlob($dirname . '*.{txt,baz}', GLOB_BRACE, $options)) {\n    echo \"failed 2\\n\";\n}\n$options['flags'] = 0; // clean FL_OVERWRITE\nif (!$zip->addGlob($dirname . '*.{txt,baz}', GLOB_BRACE, $options)) {\n    var_dump($zip->getStatusString());\n}\n$options['flags'] = ZipArchive::FL_OVERWRITE;\nif (!$zip->addGlob($dirname . '*.{txt,baz}', GLOB_BRACE, $options)) {\n    echo \"failed 3\\n\";\n}\nif ($zip->status == ZIPARCHIVE::ER_OK) {\n        if (!verify_entries($zip, [\n            \"bar\",\n            \"foobar/\",\n            \"foobar/baz\",\n            \"entry1.txt\",\n            \"baz/foo.txt\",\n            \"baz/bar.baz\"\n        ])) {\n            echo \"failed\\n\";\n        } else {\n            echo \"OK\";\n        }\n        $zip->close();\n} else {\n        echo \"failed 4\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
