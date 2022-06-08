// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/match_always_error.phpt
  it("match expression always errors", function () {
    expect(parser.parseCode("<?php\nfunction get_value() {\n    return 0;\n}\nfunction test() {\n    match(get_value()) {\n        false => $a,\n        true => $b,\n    };\n}\ntry {\n    test();\n} catch (UnhandledMatchError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
