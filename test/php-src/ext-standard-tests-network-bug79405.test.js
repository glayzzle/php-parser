// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug79405.phpt
  it("Bug #79405 - gethostbyname() silently truncates after a null byte", function () {
    expect(parser.parseCode("<?php\n$host = \"localhost\\0.example.com\";\ntry {\n\tvar_dump(gethostbyname($host));\n} catch(Error $e) {\n\tprint $e->getMessage().\"\\n\";\n}\ntry {\nvar_dump(gethostbynamel($host));\n} catch(Error $e) {\n\tprint $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
