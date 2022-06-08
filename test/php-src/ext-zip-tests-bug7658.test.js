// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug7658.phpt
  it("Bug #7658 (modify archive with general bit flag 3 set)", function () {
    expect(parser.parseCode("<?php\n$expect = array(\n    \"mimetype\",\n    \"Configurations2/statusbar/\",\n    \"Configurations2/accelerator/current.xml\",\n    \"Configurations2/floater/\",\n    \"Configurations2/popupmenu/\",\n    \"Configurations2/progressbar/\",\n    \"Configurations2/menubar/\",\n    \"Configurations2/toolbar/\",\n    \"Configurations2/images/Bitmaps/\",\n    \"content.xml\",\n    \"styles.xml\",\n    \"meta.xml\",\n    \"Thumbnails/thumbnail.png\",\n    \"settings.xml\",\n    \"META-INF/manifest.xml\",\n);\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . '__tmp_bug7658.odt';\n$zip = new ZipArchive();\ncopy($dirname . 'bug7658.odt', $file);\nif(!$zip->open($file)) {\n    echo 'failed';\n}\n$zip->deleteName('content.xml');\n$zip->addFile($dirname . \"bug7658.xml\",\"content.xml\");\n$zip->close();\necho \"\\n\";\n$zip->open($file);\nfor($i=0; $i < $zip->numFiles; $i++) {\n    $sb = $zip->statIndex($i);\n    $found[] = $sb['name'];\n}\n$ar = array_diff($found, $expect);\nvar_dump($ar);\nunset($zip);\nunlink($file);\n?>")).toMatchSnapshot();
  });
});
