// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_supported.phpt
  it("ziparchive::properties isset()/empty() checks", function () {
    expect(parser.parseCode("<?php\n$methods = [\n    ZipArchive::CM_STORE      => \"STORE\",\n    ZipArchive::CM_DEFLATE    => \"DEFLATE\",\n    ZipArchive::CM_BZIP2      => \"BZIP2\",\n    ZipArchive::CM_XZ         => \"XZ\",\n];\nforeach($methods as $method => $name) {\n    echo \"Compression $name\\n\";\n    var_dump(ZipArchive::isCompressionMethodSupported($method));\n    var_dump(ZipArchive::isCompressionMethodSupported($method, false));\n}\n$methods = [\n    ZipArchive::EM_NONE        => \"NONE\",\n    ZipArchive::EM_TRAD_PKWARE => \"TRAD_PKWARE\",\n    ZipArchive::EM_AES_128     => \"AES-128\",\n    ZipArchive::EM_AES_192     => \"AES-192\",\n    ZipArchive::EM_AES_256     => \"AES-256\",\n];\nforeach($methods as $method => $name) {\n    echo \"Encryption $name\\n\";\n    var_dump(ZipArchive::isEncryptionMethodSupported($method));\n    var_dump(ZipArchive::isEncryptionMethodSupported($method, false));\n}\n?>\nDone")).toMatchSnapshot();
  });
});
