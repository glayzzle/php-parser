// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug80833.phpt
  it("Bug #80833 (ZipArchive::getStream doesn't use setPassword)", function () {
    expect(parser.parseCode("<?php\n$create_zip = new ZipArchive();\n$create_zip->open(__DIR__ . \"/80833.zip\", ZipArchive::CREATE);\n$create_zip->setPassword(\"default_password\");\n$create_zip->addFromString(\"test.txt\", \"This is a test string.\");\n$create_zip->setEncryptionName(\"test.txt\", ZipArchive::EM_AES_256, \"first_password\");\n$create_zip->addFromString(\"test2.txt\", \"This is another test string.\");\n$create_zip->setEncryptionName(\"test2.txt\", ZipArchive::EM_AES_256, \"second_password\");\n$create_zip->close();\n// Stream API\n$o = [\n\t'zip' => [\n\t\t'password' => \"first_password\",\n\t],\n];\n$c = stream_context_create($o);\nvar_dump(file_get_contents(\"zip://\" . __DIR__ . \"/80833.zip#test.txt\", false, $c));\n// getStream method\n$extract_zip = new ZipArchive();\n$extract_zip->open(__DIR__ . \"/80833.zip\", ZipArchive::RDONLY);\n$extract_zip->setPassword(\"first_password\");\n$file_stream = $extract_zip->getStream(\"test.txt\");\nvar_dump(stream_get_contents($file_stream));\nfclose($file_stream);\n$extract_zip->setPassword(\"second_password\");\n$file_stream = $extract_zip->getStream(\"test2.txt\");\nvar_dump(stream_get_contents($file_stream));\nfclose($file_stream);\n// Archive close before the stream\n$extract_zip->setPassword(\"first_password\");\n$file_stream = $extract_zip->getStream(\"test.txt\");\n$extract_zip->close();\nvar_dump(stream_get_contents($file_stream));\nfclose($file_stream);\n?>")).toMatchSnapshot();
  });
});
