// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug71509.phpt
  it("Bug #71509 Zip problem with swedish letters in filename.", function () {
    expect(parser.parseCode("<?PHP\n// ���\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv(\"ISO-8859-1\", \"UTF-8\", \"R�d_Statistics\"); // cp1252\n$prefix = create_data(\"bug71509\", \"$item.txt\");\n$testfile_zip = $prefix . DIRECTORY_SEPARATOR . \"$item.txt\";\n$outputfile_zip = $prefix . DIRECTORY_SEPARATOR . \"$item.zip\";\nvar_dump(file_exists($testfile_zip));\n$zipfile = new ZipArchive;\n$return_code = $zipfile->open($outputfile_zip, ZipArchive::CREATE);\nif ($return_code != true) die(\"Failed to open file: \" . $return_code);\n$return_code = $zipfile->addfile($testfile_zip, basename($testfile_zip));\nif ($return_code != true) print(\"Failed to add file: \" . $zipfile->getStatusString());\n$return_code = $zipfile->close();\nif ($return_code != true) die(\"Failed to close archive: \" . $zipfile->getStatusString());\nvar_dump(file_exists($outputfile_zip));\nremove_data(\"bug71509\");\n?>")).toMatchSnapshot();
  });
});
