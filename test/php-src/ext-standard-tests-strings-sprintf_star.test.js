// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_star.phpt
  it("Star width and precision in sprintf()", function () {
    expect(parser.parseCode("<?php\n$f = 1.23456789012345678;\n$fx = 1.23456789012345678e100;\nvar_dump($f, $fx);\nprintf(\"%.*f\\n\", 10, $f);\nprintf(\"%.*G\\n\", 10, $f);\nprintf(\"%.*g\\n\", -1, $fx);\nprintf(\"%.*G\\n\", -1, $fx);\nprintf(\"%.*h\\n\", -1, $fx);\nprintf(\"%.*H\\n\", -1, $fx);\nprintf(\"%.*s\\n\", 3, \"foobar\");\necho \"\\n\";\nprintf(\"%*f\\n\", 10, $f);\nprintf(\"%*G\\n\", 10, $f);\nprintf(\"%*s\\n\", 10, \"foobar\");\necho \"\\n\";\nprintf(\"%*.*f\\n\", 10, 3, $f);\nprintf(\"%*.*G\\n\", 10, 3, $f);\nprintf(\"%*.*s\\n\", 10, 3, \"foobar\");\necho \"\\n\";\nprintf(\"%1$.*2\\$f\\n\", $f, 10);\nprintf(\"%.*2\\$f\\n\", $f, 10);\nprintf(\"%2$.*f\\n\", 10, $f);\nprintf(\"%1$*2\\$f\\n\", $f, 10);\nprintf(\"%*2\\$f\\n\", $f, 10);\nprintf(\"%2$*f\\n\", 10, $f);\nprintf(\"%1$*2$.*3\\$f\\n\", $f, 10, 3);\nprintf(\"%*2$.*3\\$f\\n\", $f, 10, 3);\nprintf(\"%3$*.*f\\n\", 10, 3, $f);\necho \"\\n\";\ntry {\n    printf(\"%.*G\\n\", \"foo\", 1.5);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    printf(\"%.*G\\n\", -100, 1.5);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    printf(\"%.*s\\n\", -1, \"Foo\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    printf(\"%*G\\n\", -1, $f);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
