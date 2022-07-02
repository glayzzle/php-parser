// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/time/bug60222.phpt
  it("Bug #60222 (time_nanosleep() does validate input params)", function () {
    expect(parser.parseCode("<?php\n    try {\n        time_nanosleep(-1, 0);\n    } catch (ValueError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    try {\n        time_nanosleep(0, -1);\n    } catch (ValueError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
