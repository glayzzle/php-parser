// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug73809.phpt
  it("Bug #73809 (Phar Zip parse crash - mmap fail)", function () {
    expect(parser.parseCode("<?php\n// create the ZIP to be tested\n$zip = new ZipArchive;\n$zip->open(__DIR__ . '/73809.zip', ZipArchive::CREATE);\n$zip->addFromString('73809.txt', 'yada yada');\n$zip->addFromString('.phar/signature.bin', str_repeat('*', 64 * 1024 + 1));\n$zip->setCompressionName('.phar/signature.bin', ZipArchive::CM_STORE);\nvar_dump($zip->close());\ntry {\n    $phar = new PharData(__DIR__ . '/73809.zip');\n} catch (Exception $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
