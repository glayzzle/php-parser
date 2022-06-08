// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug77247.phpt
  it("PHP bug #77247 (heap buffer overflow in phar_detect_phar_fname_ext)", function () {
    expect(parser.parseCode("<?php\ntry {\nvar_dump(new Phar('a/.b', 0,'test.phar'));\n} catch(UnexpectedValueException $e) {\n    echo \"OK\";\n}\n?>")).toMatchSnapshot();
  });
});
