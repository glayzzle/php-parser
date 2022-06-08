// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_convert_encoding_stateful.phpt
  it("mb_convert_encoding() with stateful encodings", function () {
    expect(parser.parseCode("<?php\necho \"ISO-2022-JP empty segment\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"1b24401b24402121\"), \"UTF-8\", \"ISO-2022-JP\")), \"\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"1b24421b24422121\"), \"UTF-8\", \"ISO-2022-JP\")), \"\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"1b28421b284261626364\"), \"UTF-8\", \"ISO-2022-JP\")), \"\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"1b284a1b284a61626364\"), \"UTF-8\", \"ISO-2022-JP\")), \"\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"1b24401b284261626364\"), \"UTF-8\", \"ISO-2022-JP\")), \"\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"1b24401b284a61626364\"), \"UTF-8\", \"ISO-2022-JP\")), \"\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"1b24421b284261626364\"), \"UTF-8\", \"ISO-2022-JP\")), \"\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"1b24421b284a61626364\"), \"UTF-8\", \"ISO-2022-JP\")), \"\\n\";\necho \"ISO-2022-KR empty segment\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"1b2429430e0f61626364\"), \"UTF-8\", \"ISO-2022-KR\")), \"\\n\";\necho \"HZ empty segment\\n\";\necho bin2hex(mb_convert_encoding(pack(\"H*\", \"7e7b7e7d61626364\"), \"UTF-8\", \"HZ\")), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
