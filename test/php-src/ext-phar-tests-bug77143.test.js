// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug77143.phpt
  it("PHP bug #77143: Heap Buffer Overflow (READ: 4) in phar_parse_pharfile", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\ntry {\nvar_dump(new Phar('bug77143.phar',0,'project.phar'));\necho \"OK\\n\";\n} catch(UnexpectedValueException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
