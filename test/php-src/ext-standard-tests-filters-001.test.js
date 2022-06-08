// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/001.phpt
  it("stream_filter_register() and invalid arguments", function () {
    expect(parser.parseCode("<?php\ntry {\n    stream_filter_register(\"\", \"\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    stream_filter_register(\"test\", \"\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    stream_filter_register(\"\", \"test\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(stream_filter_register(\"------\", \"nonexistentclass\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
