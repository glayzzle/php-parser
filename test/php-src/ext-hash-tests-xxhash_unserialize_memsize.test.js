// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/xxhash_unserialize_memsize.phpt
  it("xxhash memsize must be in range when unserializing", function () {
    expect(parser.parseCode("<?php\ntry {\n    $str = <<<'STR'\n    O:11:\"HashContext\":5:{i:0;s:5:\"xxh32\";i:1;i:0;i:2;a:12:{i:0;i:0;i:1;i:0;i:2;i:606290984;i:3;i:-2048144777;i:4;i:0;i:5;i:1640531535;i:6;i:0;i:7;i:0;i:8;i:0;i:9;i:0;i:10;i:30;i:11;i:0;}i:3;i:2;i:4;a:0:{}}\n    STR;\n    $hash = unserialize($str);\n    hash_update($hash, '');\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $str = <<<'STR'\n    O:11:\"HashContext\":5:{i:0;s:5:\"xxh64\";i:1;i:0;i:2;a:22:{i:0;i:0;i:1;i:0;i:2;i:6;i:3;i:2;i:4;i:8;i:5;i:9;i:6;i:0;i:7;i:0;i:8;i:1;i:9;i:5;i:10;i:0;i:11;i:0;i:12;i:0;i:13;i:0;i:14;i:0;i:15;i:0;i:16;i:0;i:17;i:0;i:18;i:70;i:19;i:0;i:20;i:0;i:21;i:0;}i:3;i:2;i:4;a:0:{}}\n    STR;\n    $hash = unserialize($str);\n    hash_update($hash, '');\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
