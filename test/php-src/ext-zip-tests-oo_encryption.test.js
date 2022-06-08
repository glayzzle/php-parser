// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_encryption.phpt
  it("ZipArchive::setEncryption*() functions", function () {
    expect(parser.parseCode("<?php\n$name = __DIR__ . '/encrypted.zip';\n$pass = 'secret';\necho \"== Write\\n\";\n$zip  = new ZipArchive;\n$r = $zip->open($name, ZIPARCHIVE::CREATE);\n// Clear\n$zip->addFromString('foo.txt', 'foo');\n// Encrypted\n$zip->addFromString('bar.txt', 'bar');\nvar_dump($zip->setEncryptionName('bar.txt', 9999, $pass)); // Fails\nvar_dump($zip->setEncryptionName('bar.txt', ZipArchive::EM_AES_256, $pass));\n$zip->close();\necho \"== Read\\n\";\n$r = $zip->open($name);\n$s = $zip->statName('foo.txt');\nvar_dump($s['encryption_method'] === ZipArchive::EM_NONE);\n$s = $zip->statName('bar.txt');\nvar_dump($s['encryption_method'] === ZipArchive::EM_AES_256);\nvar_dump($zip->getFromName('foo.txt')); // Clear, ok\nvar_dump($zip->getFromName('bar.txt')); // Encrypted, fails\n$zip->setPassword($pass);\nvar_dump($zip->getFromName('bar.txt')); // Ecnrypted, ok\n$zip->close();\necho \"== Stream\\n\";\nvar_dump(file_get_contents(\"zip://$name#foo.txt\")); // Clear, ok\nvar_dump(file_get_contents(\"zip://$name#bar.txt\")); // Encrypted, fails\n$ctx = stream_context_create(array('zip' => array('password' => $pass)));\nvar_dump(file_get_contents(\"zip://$name#bar.txt\", false, $ctx)); // Ecnrypted, ok\n?>\n== Done")).toMatchSnapshot();
  });
});
