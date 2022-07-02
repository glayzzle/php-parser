// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_novar_1.phpt
  it("catch without capturing a variable", function () {
    expect(parser.parseCode("<?php\ntry {\n    throw new Exception();\n} catch (Exception) {\n    echo \"Exception\\n\";\n}\ntry {\n    throw new Exception();\n} catch (Exception) {\n    echo \"Exception\\n\";\n} catch (Error) {\n    echo \"FAIL\\n\";\n}\ntry {\n    throw new Exception();\n} catch (Exception|Error) {\n    echo \"Exception\\n\";\n} catch (Throwable) {\n    echo \"FAIL\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
