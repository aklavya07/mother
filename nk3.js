function _0xbe1272(_0x4514ca, _0x3525a3) {
    return _0x1eb8(_0x4514ca - -0x17d, _0x3525a3);
}
(function (_0x4f68be, _0x450d4e) {
    const _0x2fe33f = _0x4f68be();
    function _0x2dde58(_0x58749b, _0x1d169e) {
        return _0x1eb8(_0x58749b - 0xc6, _0x1d169e);
    }
    while (!![]) {
        try {
            const _0x204c25 = -parseInt(_0x2dde58(0xfa, 0xe7)) / 0x1 * (-parseInt(_0x2dde58(0xd9, 0xcd)) / 0x2) + parseInt(_0x2dde58(0xc9, 0xac)) / 0x3 * (-parseInt(_0x2dde58(0xe7, 0xf0)) / 0x4) + -parseInt(_0x2dde58(0xee, 0x10a)) / 0x5 * (-parseInt(_0x2dde58(0xf3, 0xe8)) / 0x6) + parseInt(_0x2dde58(0xd8, 0xcc)) / 0x7 * (-parseInt(_0x2dde58(0xdd, 0xc8)) / 0x8) + -parseInt(_0x2dde58(0xe9, 0xd5)) / 0x9 + -parseInt(_0x2dde58(0xd3, 0xd3)) / 0xa * (parseInt(_0x2dde58(0xe1, 0xd0)) / 0xb) + parseInt(_0x2dde58(0xf5, 0x102)) / 0xc;
            if (_0x204c25 === _0x450d4e) {
                break;
            } else {
                _0x2fe33f['push'](_0x2fe33f['shift']());
            }
        } catch (_0x44d9f8) {
            _0x2fe33f['push'](_0x2fe33f['shift']());
        }
    }
}(_0x23d6, 0xdccac));
function _0x23d6() {
    const _0x108c3a = [
        'ctrlKey',
        'Failed\x20to\x20paste:',
        'addEventListener',
        '7353666jGfftl',
        'Cleaned\x20Text:',
        '22658904XQnene',
        'keydown',
        'black',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'log',
        '1VyYKGh',
        'replace',
        'closest',
        '[aria-labelledby=\x22instruction-card\x22]',
        'POST',
        'querySelector',
        'clipboard',
        'readText',
        'innerText',
        'text',
        '36TfYXZP',
        'key',
        'target',
        'dispatchEvent',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'catch',
        'input',
        'trim',
        'stringify',
        '\x20using\x20',
        '10UlUlVu',
        'Error:',
        'activeElement',
        'candidates',
        'error',
        '10749109QmwOQq',
        '3282658pvFOOh',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        'observe',
        'Text\x20not\x20found',
        '8bpVXUH',
        'message',
        'altKey',
        'grey',
        '5915459mEPUil',
        'application/json',
        'disconnect',
        'dblclick',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'color',
        '472364VJGhmJ',
        'Formatted\x20Clipboard\x20Text:',
        '3243330wkMGco',
        'Extracted\x20Text:',
        'Target\x20element\x20not\x20found',
        'writeText',
        'json',
        '5DXzIxh',
        'style'
    ];
    _0x23d6 = function () {
        return _0x108c3a;
    };
    return _0x23d6();
}
async function copyTextToClipboard(_0x5fd2ea) {
    function _0x4aee0a(_0x445300, _0x289233) {
        return _0x1eb8(_0x289233 - 0x7b, _0x445300);
    }
    try {
        if (!_0x5fd2ea) {
            throw new Error(_0x4aee0a(0xa2, 0x91));
        }
        await navigator[_0x4aee0a(0xae, 0xb5)][_0x4aee0a(0x9a, 0xa1)](_0x5fd2ea);
    } catch (_0x2e8955) {
        console['error']('Error\x20copying\x20to\x20clipboard:', _0x2e8955);
        throw _0x2e8955;
    }
}
async function sendToOpenAI(_0x4a8510) {
    const _0x240446 = 'AIzaSyBVLygMFzwJsE5jdh5yTAnsOLwfx6J7xa0';
    const _0x2566cf = _0x5e59e4(0x27f, 0x270) + _0x240446;
    const _0x2ad7c5 = {
        'method': _0x5e59e4(0x298, 0x2a6),
        'headers': { 'Content-Type': _0x5e59e4(0x27c, 0x292) },
        'body': JSON[_0x5e59e4(0x26b, 0x27e)]({ 'contents': [{ 'parts': [{ 'text': _0x4a8510 }] }] })
    };
    function _0x5e59e4(_0x312be8, _0x1805fa) {
        return _0x1eb8(_0x312be8 - 0x260, _0x1805fa);
    }
    try {
        const _0x4dedbf = await fetch(_0x2566cf, _0x2ad7c5);
        if (!_0x4dedbf['ok']) {
            throw new Error('HTTP\x20error!\x20Status:\x20' + _0x4dedbf['status']);
        }
        const _0x199272 = await _0x4dedbf[_0x5e59e4(0x287, 0x29d)]();
        const _0x23e5e6 = _0x199272[_0x5e59e4(0x270, 0x25f)];
        const _0x3f77f3 = _0x23e5e6[0x0]['content']['parts'][0x0][_0x5e59e4(0x262, 0x263)];
        console[_0x5e59e4(0x293, 0x292)](_0x5e59e4(0x284, 0x280), _0x3f77f3);
        await copyTextToClipboard(_0x3f77f3);
        return _0x3f77f3;
    } catch (_0x2ecf32) {
        console['error'](_0x5e59e4(0x26e, 0x251), _0x2ecf32[_0x5e59e4(0x278, 0x270)]);
        throw _0x2ecf32;
    }
}
async function handleDoubleClick(_0x59c2f8) {
    function _0x1667f2(_0x2057b5, _0x45842a) {
        return _0x1eb8(_0x45842a - 0x6d, _0x2057b5);
    }
    try {
        const _0x18d175 = _0x59c2f8[_0x1667f2(0x85, 0x72)][_0x1667f2(0xa2, 0xa3)](_0x1667f2(0x8e, 0x9f));
        if (!_0x18d175)
            throw new Error(_0x1667f2(0xaa, 0x92));
        const _0x20c428 = _0x18d175[_0x1667f2(0x50, 0x6e)][_0x1667f2(0xbe, 0xa2)](/\n{3,}/g, '\x0a')[_0x1667f2(0x84, 0x77)]();
        console[_0x1667f2(0xbb, 0xa0)](_0x1667f2(0x9d, 0x9b), _0x20c428);
        const _0x6e536c = document[_0x1667f2(0x8b, 0xa6)](_0x1667f2(0x92, 0xa4));
        let _0x222a77 = '';
        if (!_0x6e536c) {
            _0x222a77 = _0x20c428 + _0x1667f2(0x6a, 0x81);
        } else {
            _0x222a77 = _0x20c428 + _0x1667f2(0x5e, 0x79) + _0x6e536c['innerText'] + '\x0a\x20print\x20in\x20proper\x20c\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.';
        }
        console[_0x1667f2(0xae, 0xa0)](_0x1667f2(0xab, 0x8f), _0x222a77);
        await copyTextToClipboard(_0x222a77);
        _0x222a77 = await navigator[_0x1667f2(0xbf, 0xa7)][_0x1667f2(0x69, 0x6d)]();
        await sendToOpenAI(_0x222a77);
        const _0x3bc112 = document[_0x1667f2(0xa7, 0xa6)](_0x1667f2(0x88, 0x74));
        if (_0x3bc112) {
            _0x3bc112[_0x1667f2(0x83, 0x96)][_0x1667f2(0x76, 0x8d)] = _0x1667f2(0x9c, 0x87);
            setTimeout(() => {
                function _0x40f54e(_0x17171c, _0x3eb103) {
                    return _0x1667f2(_0x17171c, _0x3eb103 - 0xce);
                }
                _0x3bc112[_0x40f54e(0x177, 0x164)][_0x40f54e(0x16d, 0x15b)] = _0x40f54e(0x171, 0x16c);
            }, 0xbb8);
        }
    } catch (_0x292837) {
        console[_0x1667f2(0x97, 0x7e)](_0x1667f2(0x68, 0x7b), _0x292837[_0x1667f2(0x89, 0x85)]);
    }
}
function Hack() {
    const _0x1499cd = new MutationObserver((_0x7cbbe9, _0x208382) => {
        function _0x2bd364(_0x2ec9ff, _0xd4482) {
            return _0x1eb8(_0x2ec9ff - -0xad, _0xd4482);
        }
        if (document[_0x2bd364(-0x74, -0x62)](_0x2bd364(-0x7b, -0x91))) {
            _0x208382[_0x2bd364(-0x90, -0x90)]();
        }
    });
    _0x1499cd[_0x2a716f(0x20d, 0x1f1)](document, {
        'childList': !![],
        'subtree': !![]
    });
    function _0x2a716f(_0x3b44b5, _0x1dde15) {
        return _0x1eb8(_0x1dde15 - 0x1dc, _0x3b44b5);
    }
    document['addEventListener'](_0x2a716f(0x207, 0x1fa), handleDoubleClick);
}
function _0x1eb8(_0x55a332, _0x23d69b) {
    const _0x1eb82c = _0x23d6();
    _0x1eb8 = function (_0x4ed5da, _0x3cf437) {
        _0x4ed5da = _0x4ed5da - 0x0;
        let _0x35c795 = _0x1eb82c[_0x4ed5da];
        return _0x35c795;
    };
    return _0x1eb8(_0x55a332, _0x23d69b);
}
document[_0xbe1272(-0x151, -0x160)](_0xbe1272(-0x14d, -0x12f), _0x4da13a => {
    function _0xd66f8b(_0xac6089, _0x3ef92e) {
        return _0xbe1272(_0x3ef92e - 0x287, _0xac6089);
    }
    if (_0x4da13a[_0xd66f8b(0x122, 0x134)] && _0x4da13a[_0xd66f8b(0x106, 0x10e)] === 'y' || _0x4da13a[_0xd66f8b(0x140, 0x123)] && _0x4da13a[_0xd66f8b(0xfc, 0x10e)] === 'y') {
        navigator['clipboard'][_0xd66f8b(0x122, 0x10a)]()['then'](_0x30137b => {
            function _0x234d07(_0x19f768, _0xcc50b1) {
                return _0xd66f8b(_0xcc50b1, _0x19f768 - 0x150);
            }
            if (document[_0x234d07(0x269, 0x281)] instanceof HTMLInputElement || document[_0x234d07(0x269, 0x258)] instanceof HTMLTextAreaElement) {
                document[_0x234d07(0x269, 0x279)]['value'] = _0x30137b;
                document[_0x234d07(0x269, 0x256)][_0x234d07(0x260, 0x276)](new Event(_0x234d07(0x263, 0x271), { 'bubbles': !![] }));
            }
        })[_0xd66f8b(0x114, 0x112)](_0x1be355 => {
            function _0x57488a(_0x258762, _0x22c3be) {
                return _0xd66f8b(_0x22c3be, _0x258762 - -0x47a);
            }
            console['error'](_0x57488a(-0x345, -0x35f), _0x1be355);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
