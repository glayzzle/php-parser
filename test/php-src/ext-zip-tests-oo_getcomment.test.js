// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_getcomment.phpt
  it("getComment", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$file = $dirname . 'test_with_comment.zip';\ninclude $dirname . 'utils.inc';\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('failed');\n}\necho $zip->getArchiveComment() . \"\\n\";\n$idx = $zip->locateName('foo');\nvar_dump($zip->getCommentName('foo'));\nvar_dump($zip->getCommentIndex($idx));\ntry {\n    echo $zip->getCommentName('') . \"\\n\";\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$zip->close();\n?>")).toMatchSnapshot();
  });
});
