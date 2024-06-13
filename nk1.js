(function (_0x565170, _0x1d067e) {
    function _0x46e705(_0x26d5c8, _0xa96cc) {
        return _0x3744(_0xa96cc - 0x228, _0x26d5c8);
    }
    const _0x4fae04 = _0x565170();
    while (!![]) {
        try {
            const _0x15acb2 = parseInt(_0x46e705(0x247, 0x248)) / 0x1 * (-parseInt(_0x46e705(0x21d, 0x22e)) / 0x2) + -parseInt(_0x46e705(0x245, 0x25a)) / 0x3 + parseInt(_0x46e705(0x22b, 0x23b)) / 0x4 * (-parseInt(_0x46e705(0x227, 0x241)) / 0x5) + parseInt(_0x46e705(0x237, 0x236)) / 0x6 * (parseInt(_0x46e705(0x21d, 0x229)) / 0x7) + parseInt(_0x46e705(0x246, 0x249)) / 0x8 * (parseInt(_0x46e705(0x23f, 0x244)) / 0x9) + -parseInt(_0x46e705(0x253, 0x23e)) / 0xa * (parseInt(_0x46e705(0x23c, 0x254)) / 0xb) + -parseInt(_0x46e705(0x24a, 0x238)) / 0xc * (-parseInt(_0x46e705(0x26d, 0x252)) / 0xd);
            if (_0x15acb2 === _0x1d067e) {
                break;
            } else {
                _0x4fae04['push'](_0x4fae04['shift']());
            }
        } catch (_0x35baab) {
            _0x4fae04['push'](_0x4fae04['shift']());
        }
    }
}(_0x41b6, 0x8cd2d));
function _0x9068b8(_0x233bad, _0x212b83) {
    return _0x3744(_0x212b83 - 0x242, _0x233bad);
}
async function copyTextToClipboard(_0x223de3) {
    function _0x488d70(_0x4b21bc, _0x257a8b) {
        return _0x3744(_0x257a8b - 0x261, _0x4b21bc);
    }
    try {
        if (!_0x223de3) {
            throw new Error('Text\x20not\x20found');
        }
        await navigator['clipboard']['writeText'](_0x223de3);
    } catch (_0x3be389) {
        console['error'](_0x488d70(0x28c, 0x270), _0x3be389);
        throw _0x3be389;
    }
}
async function sendToOpenAI(_0x1e9841) {
    const _0x2eeb3e = _0x2a2cb5(-0x394, -0x37f);
    const _0x601be3 = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + _0x2eeb3e;
    function _0x2a2cb5(_0x1e2f35, _0x560667) {
        return _0x3744(_0x1e2f35 - -0x3c3, _0x560667);
    }
    const _0x2d01cf = {
        'method': _0x2a2cb5(-0x3a0, -0x3ab),
        'headers': { 'Content-Type': _0x2a2cb5(-0x39b, -0x3ac) },
        'body': JSON[_0x2a2cb5(-0x3b2, -0x3c9)]({ 'contents': [{ 'parts': [{ 'text': _0x1e9841 }] }] })
    };
    try {
        const _0x240937 = await fetch(_0x601be3, _0x2d01cf);
        if (!_0x240937['ok']) {
            throw new Error(_0x2a2cb5(-0x38c, -0x37e) + _0x240937[_0x2a2cb5(-0x398, -0x3ab)]);
        }
        const _0x4c1092 = await _0x240937[_0x2a2cb5(-0x3b9, -0x3b8)]();
        const _0x24449e = _0x4c1092['candidates'];
        const _0x7dbd64 = _0x24449e[0x0]['content'][_0x2a2cb5(-0x3ae, -0x3b7)][0x0][_0x2a2cb5(-0x3bc, -0x3ce)];
        console[_0x2a2cb5(-0x3a6, -0x3b2)](_0x2a2cb5(-0x3b7, -0x3c7), _0x7dbd64);
        await copyTextToClipboard(_0x7dbd64);
        return _0x7dbd64;
    } catch (_0x4e8df6) {
        console[_0x2a2cb5(-0x3c0, -0x3b7)](_0x2a2cb5(-0x3c1, -0x3cf), _0x4e8df6[_0x2a2cb5(-0x3a1, -0x394)]);
        throw _0x4e8df6;
    }
}
function _0x41b6() {
    const _0x2cb02 = [
        'color',
        '803962Gvspec',
        'text',
        'altKey',
        'black',
        'json',
        'readText',
        'Extracted\x20Text:',
        'Formatted\x20Clipboard\x20Text:',
        '6YtPgOb',
        'Error\x20copying\x20to\x20clipboard:',
        '48vUsMeP',
        'stringify',
        'then',
        '12aDwUiS',
        'Cleaned\x20Text:',
        'parts',
        '10XwTGGD',
        'style',
        'input',
        '825610IhCyev',
        'querySelector',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        '2568348PMvKrU',
        'log',
        'replace',
        'keydown',
        '2xzzAWF',
        '24QIzCFV',
        'message',
        'POST',
        'grey',
        'target',
        'activeElement',
        'ctrlKey',
        'application/json',
        'key',
        '5325762oHvQUY',
        'status',
        '9714639ubHrsp',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'closest',
        'AIzaSyCpHjWbHNW6-zKzdR_mubw4hjBpfKlMdqU',
        'dispatchEvent',
        '\x20using\x20',
        '211287EVFDdG',
        'innerText',
        'value',
        'addEventListener',
        '\x0a\x20print\x20in\x20proper\x20c\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'HTTP\x20error!\x20Status:\x20',
        'clipboard',
        '[aria-labelledby=\x22instruction-card\x22]',
        '2344349gnsCUs',
        'Error:',
        'error',
        'div[aria-labelledby=\x22each-type-question\x22]'
    ];
    _0x41b6 = function () {
        return _0x2cb02;
    };
    return _0x41b6();
}
async function handleDoubleClick(_0x59d99d) {
    function _0x47b29c(_0x4d67dd, _0x3c8eb3) {
        return _0x3744(_0x4d67dd - 0x22a, _0x3c8eb3);
    }
    try {
        const _0xd6d21b = _0x59d99d[_0x47b29c(0x24f, 0x252)][_0x47b29c(0x258, 0x240)](_0x47b29c(0x22e, 0x228));
        if (!_0xd6d21b)
            throw new Error('Target\x20element\x20not\x20found');
        const _0x2c29d6 = _0xd6d21b['innerText'][_0x47b29c(0x248, 0x24d)](/\n{3,}/g, '\x0a')['trim']();
        console[_0x47b29c(0x247, 0x245)](_0x47b29c(0x23e, 0x255), _0x2c29d6);
        const _0x13bf7b = document[_0x47b29c(0x244, 0x23b)](_0x47b29c(0x22a, 0x212));
        let _0x3d7e2a = '';
        if (!_0x13bf7b) {
            _0x3d7e2a = _0x2c29d6 + _0x47b29c(0x245, 0x240);
        } else {
            _0x3d7e2a = _0x2c29d6 + _0x47b29c(0x25b, 0x264) + _0x13bf7b[_0x47b29c(0x25d, 0x257)] + _0x47b29c(0x260, 0x257);
        }
        console[_0x47b29c(0x247, 0x23a)](_0x47b29c(0x237, 0x24d), _0x3d7e2a);
        await copyTextToClipboard(_0x3d7e2a);
        _0x3d7e2a = await navigator[_0x47b29c(0x262, 0x27c)]['readText']();
        await sendToOpenAI(_0x3d7e2a);
        const _0x4f9607 = document[_0x47b29c(0x244, 0x244)](_0x47b29c(0x257, 0x26a));
        if (_0x4f9607) {
            _0x4f9607[_0x47b29c(0x241, 0x259)][_0x47b29c(0x22f, 0x24a)] = _0x47b29c(0x24e, 0x263);
            setTimeout(() => {
                function _0x33d242(_0x2d4a3e, _0x294063) {
                    return _0x47b29c(_0x294063 - -0x20e, _0x2d4a3e);
                }
                _0x4f9607[_0x33d242(0x4a, 0x33)][_0x33d242(0x2f, 0x21)] = _0x33d242(0x3f, 0x25);
            }, 0xbb8);
        }
    } catch (_0x3fdbae) {
        console[_0x47b29c(0x22d, 0x211)](_0x47b29c(0x22c, 0x212), _0x3fdbae[_0x47b29c(0x24c, 0x25d)]);
    }
}
function Hack() {
    function _0x3f9345(_0x3255c2, _0x599ddf) {
        return _0x3744(_0x3255c2 - -0x4d, _0x599ddf);
    }
    const _0x500193 = new MutationObserver((_0xce3fab, _0x3ce912) => {
        function _0x29c4ff(_0x274d1b, _0x1b0fdf) {
            return _0x3744(_0x1b0fdf - 0x276, _0x274d1b);
        }
        if (document[_0x29c4ff(0x288, 0x290)](_0x29c4ff(0x286, 0x27a))) {
            _0x3ce912['disconnect']();
        }
    });
    _0x500193['observe'](document, {
        'childList': !![],
        'subtree': !![]
    });
    document[_0x3f9345(-0x18, -0x22)]('dblclick', handleDoubleClick);
}
document['addEventListener'](_0x9068b8(0x279, 0x261), _0x5d76c2 => {
    function _0x3e0235(_0x25cb62, _0xac4ebc) {
        return _0x9068b8(_0xac4ebc, _0x25cb62 - -0x2db);
    }
    if (_0x5d76c2[_0x3e0235(-0x72, -0x82)] && _0x5d76c2[_0x3e0235(-0x70, -0x80)] === 'y' || _0x5d76c2[_0x3e0235(-0x91, -0x82)] && _0x5d76c2[_0x3e0235(-0x70, -0x5a)] === 'y') {
        navigator[_0x3e0235(-0x61, -0x58)][_0x3e0235(-0x8e, -0x8f)]()[_0x3e0235(-0x87, -0x8b)](_0x43ad1e => {
            function _0x4edca1(_0x440ef7, _0x339d7d) {
                return _0x3e0235(_0x339d7d - 0x8f, _0x440ef7);
            }
            if (document[_0x4edca1(0x27, 0x1c)] instanceof HTMLInputElement || document['activeElement'] instanceof HTMLTextAreaElement) {
                document[_0x4edca1(0x27, 0x1c)][_0x4edca1(0x3b, 0x2a)] = _0x43ad1e;
                document[_0x4edca1(0x32, 0x1c)][_0x4edca1(0x11, 0x26)](new Event(_0x4edca1(0x6, 0xe), { 'bubbles': !![] }));
            }
        })['catch'](_0x3b5298 => {
            function _0x233077(_0x5b4c64, _0x3221d9) {
                return _0x3e0235(_0x5b4c64 - 0x1a3, _0x3221d9);
            }
            console[_0x233077(0x10d, 0x100)]('Failed\x20to\x20paste:', _0x3b5298);
        });
    }
});
function _0x3744(_0xe6346, _0x41b692) {
    const _0x37441d = _0x41b6();
    _0x3744 = function (_0x5868aa, _0x2476ad) {
        _0x5868aa = _0x5868aa - 0x0;
        let _0x4d3514 = _0x37441d[_0x5868aa];
        return _0x4d3514;
    };
    return _0x3744(_0xe6346, _0x41b692);
}
setTimeout(() => {
    Hack();
}, 0x9c40);
