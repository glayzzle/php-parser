// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMCharacterData_length_error_001.phpt
  it("Invalid State Error when getting length on DOMCharacterData out of content.", function () {
    expect(parser.parseCode("<?php\n$character_data = new DOMCharacterData();\ntry {\n    print $character_data->length;\n} catch (DOMException $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
