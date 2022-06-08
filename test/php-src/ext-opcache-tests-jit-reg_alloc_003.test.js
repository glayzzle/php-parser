// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_003.phpt
  it("Register Alloction 003: Reuse temporary register", function () {
    expect(parser.parseCode("<?php\nfunction test($char_code) {\n    if ($char_code == !($char_code & 0xffffff80)) {\n        return \"correct\";\n    } else {\n        return \"wrong\";\n    }\n}\necho test(65), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
