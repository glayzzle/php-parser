// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_setcomment_error.phpt
  it("setComment error behavior", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . '/__tmp_oo_set_comment_error.zip';\n@unlink($file);\n$zip = new ZipArchive;\nif (!$zip->open($file, ZIPARCHIVE::CREATE)) {\n    exit('failed');\n}\n$zip->addFromString('entry1.txt', 'entry #1');\n$zip->addFromString('entry2.txt', 'entry #2');\n$longComment = str_repeat('a', 0x10000);\ntry {\n    var_dump($zip->setArchiveComment($longComment));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump($zip->setCommentName('entry1.txt', $longComment));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump($zip->setCommentIndex(1, $longComment));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$zip->close();\n?>")).toMatchSnapshot();
  });
});
