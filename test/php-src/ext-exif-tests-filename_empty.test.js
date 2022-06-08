// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/filename_empty.phpt
  it("Passing empty filename to exif_read_data() and exif_thumnail()", function () {
    expect(parser.parseCode("<?php\ntry {\n    exif_read_data(\"\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    exif_thumbnail(\"\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    exif_read_data(\"foo\\0bar\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    exif_thumbnail(\"foo\\0bar\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
