// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/deflate_add_buffer_full.phpt
  it("Test deflate_add() buffer issue with data that fills deflate buffer while using ZLIB_SYNC_FLUSH on ZLIB_ENCODING_RAW.", function () {
    expect(parser.parseCode("<?php\n/*\n * When using ZLIB_ENCODING_RAW, the deflated buffer should always end in 00 00 ff ff\n * Many streaming deflate users rely on this behaviour.\n * example: websocket permessage-deflate extension\n * (https://tools.ietf.org/html/draft-ietf-hybi-permessage-compression-28#section-7.2.1)\n *\n * Prior to fixing, the output buffer size was not being checked. According to the zlib\n * manual, deflate must be called again with more buffer space.\n */\n$deflateContext = deflate_init(ZLIB_ENCODING_RAW);\n$deflated = deflate_add(\n    $deflateContext,\n    hex2bin(\"255044462d312e320a25c7ec8fa20a362030206f626a0a3c3c2f4c656e6774682037203020522f46696c746572202f466c6174654465636f64653e3e0a737472\"),\n    ZLIB_SYNC_FLUSH\n);\necho bin2hex(substr($deflated, strlen($deflated) - 4)) . \"\\n\";\n$deflated = deflate_add(\n    $deflateContext,\n    hex2bin(\"65616d0a789c7d53c16ed43010bde7c037f85824766a7bc6767c2ca8a00a016a1b2edcb2dbecaed1266937d98afe3d6327363794439437e3f17b6f5e242821e3\"),\n    ZLIB_SYNC_FLUSH\n);\necho bin2hex(substr($deflated, strlen($deflated) - 4)) . \"\\n\";\n$deflated = deflate_add(\n    $deflateContext,\n    hex2bin(\"b3be777df5525d3f90384cd58b50a9945fbb5e7c6cb8c89fca8156c688665f2de794504a81f75658a7c1d54a347d7575fb6e17ba617edffcae9c84da3aee6c9e\"),\n    ZLIB_SYNC_FLUSH\n);\necho bin2hex(substr($deflated, strlen($deflated) - 4)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
