// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug36513.phpt
  it("Bug #36513 (comment will be outputed in last line)", function () {
    expect(parser.parseCode("<?php\nfunction test($s) {\n  echo \"'\".trim(str_replace(\"&nbsp;\", \" \", htmlspecialchars_decode(strip_tags(highlight_string($s,1))))).\"'\\n\";\n}\neval('echo \"1\";//2');\neval('echo 3; //{ 4?>5');\necho \"\\n\";\n//test('<?php echo \"1\";//');\ntest('<?php echo \"1\";//2');\ntest('<?php echo \"1\";//22');\ntest('<?php echo 3; // 4 ?>5');\n?>")).toMatchSnapshot();
  });
});
