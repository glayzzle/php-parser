// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/avif_decode_encode.phpt
  it("avif decoding/encoding tests", function () {
    expect(parser.parseCode("<?php\n    require_once __DIR__ . '/similarity.inc';\n    $infile = __DIR__  . '/girl.avif';\n    $outfile = __DIR__  . '/test.avif';\n    echo 'Decoding AVIF image: ';\n    $img = imagecreatefromavif($infile);\n    echo_status($img);\n    echo 'Default AVIF encoding: ';\n    echo_status(imageavif($img, $outfile));\n    echo 'Encoding AVIF at quality 70: ';\n    echo_status(imageavif($img, $outfile, 70));\n    echo 'Encoding AVIF at quality 70 with speed 5: ';\n    echo_status(imageavif($img, $outfile, 70, 5));\n    echo 'Encoding AVIF with default quality: ';\n    echo_status(imageavif($img, $outfile, -1));\n    echo 'Encoding AVIF with illegal quality: ';\n    echo_status(imageavif($img, $outfile, 1234));\n    echo 'Encoding AVIF with illegal speed: ';\n    echo_status(imageavif($img, $outfile, 70, 1234));\n    echo 'Encoding AVIF losslessly... ';\n    echo_status(imageavif($img, $outfile, 100, 0));\n    echo \"Decoding the AVIF we just wrote...\\n\";\n    $img_from_avif = imagecreatefromavif($outfile);\n    // Note we could also forgive a certain number of pixel differences.\n    // With the current test image, we just didn't need to.\n    echo 'How many pixels are different in the two images? ';\n    print_r(calc_image_dissimilarity($img, $img_from_avif));\n    unlink($outfile);\n    function echo_status($success) {\n        echo $success ? \"ok\\n\" : \"failed\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
