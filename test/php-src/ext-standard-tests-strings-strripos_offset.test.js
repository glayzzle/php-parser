// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strripos_offset.phpt
  it("strripos() offset integer overflow", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(strripos(\"t\", \"t\", PHP_INT_MAX+1));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    strripos(1024, 1024, -PHP_INT_MAX);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    strripos(1024, \"te\", -PHP_INT_MAX);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    strripos(1024, 1024, -PHP_INT_MAX-1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    strripos(1024, \"te\", -PHP_INT_MAX-1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
