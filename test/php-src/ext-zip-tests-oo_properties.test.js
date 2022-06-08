// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_properties.phpt
  it("ziparchive::properties isset()/empty() checks", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$file = $dirname . '__property_test.zip';\ncopy($dirname . 'test_with_comment.zip', $file);\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('failed');\n}\nprintf(\"zip->status (%d):\\n\\tempty(): %d\\n\\tisset(): %d\\n\", $zip->status, empty($zip->status), isset($zip->status));\nprintf(\"zip->numFiles (%d):\\n\\tempty(): %d\\n\\tisset(): %d\\n\", $zip->numFiles, empty($zip->numFiles), isset($zip->numFiles));\nprintf(\"zip->bogus (%d):\\n\\tempty(): %d\\n\\tisset(): %d\\n\", $zip->bogus, empty($zip->bogus), isset($zip->bogus));\n$zip->addEmptyDir('emptydir');\nprintf(\"zip->status (%d):\\n\\tempty(): %d\\n\\tisset(): %d\\n\", $zip->status, empty($zip->status), isset($zip->status));\nprintf(\"zip->numFiles (%d):\\n\\tempty(): %d\\n\\tisset(): %d\\n\", $zip->numFiles, empty($zip->numFiles), isset($zip->numFiles));\nprintf(\"zip->filename (%d):\\n\\tempty(): %d\\n\\tisset(): %d\\n\", strlen($zip->filename), empty($zip->filename), isset($zip->filename));\nprintf(\"zip->comment (%d):\\n\\tempty(): %d\\n\\tisset(): %d\\n\", strlen($zip->comment), empty($zip->comment), isset($zip->comment));\nunset($zip); //close the file before unlinking\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
