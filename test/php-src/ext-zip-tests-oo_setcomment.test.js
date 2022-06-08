// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_setcomment.phpt
  it("setComment", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\ninclude $dirname . 'utils.inc';\n$file = $dirname . 'oo_setcomment.zip';\n@unlink($file);\n$zip = new ZipArchive;\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\n$zip->addFromString('entry1.txt', 'entry #1');\n$zip->addFromString('entry2.txt', 'entry #2');\n$zip->addFromString('dir/entry2d.txt', 'entry #2');\n$zip->addFromString('entry4.txt', 'entry #1');\nvar_dump($zip->setCommentIndex($zip->lastId, 'entry4.txt'));\n$zip->addFromString('entry5.txt', 'entry #2');\nvar_dump($zip->setCommentIndex($zip->lastId, 'entry5.txt'));\nvar_dump($zip->setCommentName('entry1.txt', 'entry1.txt'));\nvar_dump($zip->setCommentName('entry2.txt', 'entry2.txt'));\nvar_dump($zip->setCommentName('dir/entry2d.txt', 'dir/entry2d.txt'));\nvar_dump($zip->setArchiveComment('archive'));\nvar_dump($zip->setArchiveComment('archive'));\nif (!$zip->status == ZIPARCHIVE::ER_OK) {\n    echo \"failed to write zip\\n\";\n}\n$zip->close();\nif (!$zip->open($file)) {\n    @unlink($file);\n    exit('failed');\n}\nvar_dump($zip->getCommentIndex(0));\nvar_dump($zip->getCommentIndex(1));\nvar_dump($zip->getCommentIndex(2));\nvar_dump($zip->getCommentIndex(3));\nvar_dump($zip->getCommentIndex(4));\nvar_dump($zip->getArchiveComment());\n$zip->close();\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
