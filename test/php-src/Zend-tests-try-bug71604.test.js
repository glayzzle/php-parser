// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug71604.phpt
  it("Bug #71604: Aborted Generators continue after nested finally", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    try {\n        try {\n            yield;\n        } finally {\n            print \"INNER\\n\";\n        }\n    } catch (Exception $e) {\n        print \"EX\\n\";\n    } finally {\n        print \"OUTER\\n\";\n    }\n    print \"NOTREACHED\\n\";\n}\ngen()->current();\n?>")).toMatchSnapshot();
  });
});
