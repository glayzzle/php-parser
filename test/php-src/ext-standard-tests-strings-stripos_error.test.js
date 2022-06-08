// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripos_error.phpt
  it("Test stripos() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing stripos() function: error conditions ***\\n\";\necho \"\\n-- Offset beyond the end of the string --\\n\";\ntry {\n    stripos(\"Hello World\", \"o\", 12);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"\\n-- Offset before the start of the string --\\n\";\ntry {\n    stripos(\"Hello World\", \"o\", -12);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
