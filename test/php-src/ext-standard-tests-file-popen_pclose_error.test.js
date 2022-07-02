// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/popen_pclose_error.phpt
  it("Test popen() and pclose function: error conditions", function () {
    expect(parser.parseCode("<?php\ntry {\n    popen(\"abc.txt\", \"x\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    popen(\"abc.txt\", \"rw\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    popen(\"abc.txt\", \"rwb\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
