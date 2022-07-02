// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug54721.phpt
  it("Bug #54721 (Different Hashes on Windows, BSD and Linux on wrong Salt size)", function () {
    expect(parser.parseCode("<?php\necho crypt(\"\", '$1$dW0.is5.$10CH101gGOr1677ZYd517.') . \"\\n\";\necho crypt(\"b\", '$1$dW0.is5.$10CH101gGOr1677ZYd517.') . \"\\n\";\necho crypt(\"bu\", '$1$dW0.is5.$10CH101gGOr1677ZYd517.') . \"\\n\";\necho crypt(\"bug\", '$1$dW0.is5.$10CH101gGOr1677ZYd517.') . \"\\n\";\necho crypt(\"pass\", '$1$dW0.is5.$10CH101gGOr1677ZYd517.') . \"\\n\";\necho crypt(\"buged\", '$1$dW0.is5.$10CH101gGOr1677ZYd517.') . \"\\n\";\necho crypt(\"aaaaaaaaaaaaaaaaaaaaaaaaa \", '$1$dW0.is5.$10CH101gGOr1677ZYd517.') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
