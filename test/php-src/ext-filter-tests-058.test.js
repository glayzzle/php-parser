// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/058.phpt
  it("FILTER_VALIDATE_EMAIL unicode support (https://tools.ietf.org/html/rfc6531)", function () {
    expect(parser.parseCode("<?php\n$values = Array(\n'niceändsimple@example.com',\n'véry.çommon@example.com',\n'a.lîttle.lengthy.but.fiñe@dept.example.com',\n'dîsposable.style.émail.with+symbol@example.com',\n'other.émail-with-dash@example.com',\n'üser@[IPv6:2001:db8:1ff::a0b:dbd0]',\n'\"verî.uñusual.@.uñusual.com\"@example.com',\n'\"verî.(),:;<>[]\\\".VERÎ.\\\"verî@\\ \\\"verî\\\".unüsual\"@strange.example.com',\n'tést@example.com',\n'tést.child@example.com',\n'tést@xn--exmple-cua.com',\n'tést@xn----zfa.xe',\n'tést@subexample.wizard',\n'tést@[255.255.255.255]',\n'tést@[IPv6:2001:0db8:85a3:08d3:1319:8a2e:0370:7344]',\n'tést@[IPv6:2001::7344]',\n'tést@[IPv6:1111:2222:3333:4444:5555:6666:255.255.255.255]',\n'tést+reference@example.com',\n'üñîçøðé@example.com',\n'\"üñîçøðé\"@example.com',\n'ǅǼ੧ఘⅧ⒇৪@example.com',\n);\nforeach ($values as $value) {\n    var_dump(filter_var($value, FILTER_VALIDATE_EMAIL, FILTER_FLAG_EMAIL_UNICODE));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
