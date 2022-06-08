// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/mhash_002.phpt
  it("MHash: mhash_get_block_size() & mhash_get_hash_name() test", function () {
    expect(parser.parseCode("<?php\n$supported_hash_al = array(\n\"MD5\"       => 16,\n\"MD4\"       => 16,\n\"SHA1\"      => 20,\n\"SHA256\"    => 32,\n\"HAVAL256\"  => 32,\n\"HAVAL192\"  => 24,\n\"HAVAL224\"  => 28,\n\"HAVAL160\"  => 20,\n\"HAVAL128\"  => 16,\n\"RIPEMD160\" => 20,\n\"GOST\"      => 32,\n\"TIGER\"     => 24,\n\"TIGER160\"  => 20,\n\"TIGER128\"  => 16,\n\"CRC32\"     => 4,\n\"CRC32B\"    => 4,\n\"ADLER32\"   => 4,\n\"NA_XYZ\"    => 0   /* verify that the algorithm works */\n);\n$hc = mhash_count() + 1;\n$known_hash_al = array();\nfor ($i=0; $i < $hc; $i++) {\n    $known_hash_al[mhash_get_hash_name($i)] = $i;\n}\nforeach ($supported_hash_al as $name => $len) {\n    if (array_key_exists($name, $known_hash_al)) {\n        $len = mhash_get_block_size($known_hash_al[$name]);\n        echo \"$name = $len\\n\";\n    } else {\n        echo \"$name ? $len\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
