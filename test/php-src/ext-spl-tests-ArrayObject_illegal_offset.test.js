// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_illegal_offset.phpt
  it("ArrayObject illegal offset", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject([1, 2, 3]);\ntry {\n    var_dump($ao[[]]);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $ao[[]] = new stdClass;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $ref =& $ao[[]];\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(isset($ao[[]]));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unset($ao[[]]);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
