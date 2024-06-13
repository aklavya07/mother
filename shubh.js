function _0x5aa7() {
    const _0x5038e8 = [
        'div[aria-labelledby=\x22each-type-question\x22]',
        'Failed\x20to\x20paste:',
        'replace',
        'stringify',
        'content',
        'Text\x20not\x20found',
        'catch',
        'Error:',
        'closest',
        '[aria-labelledby=\x22instruction-card\x22]',
        'key',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'json',
        'dispatchEvent',
        'querySelector',
        'log',
        'writeText',
        '637PplWgL',
        'trim',
        'disconnect',
        'activeElement',
        '8YFKKvD',
        '1314kiVuVW',
        '4648230qmXMmp',
        'readText',
        '182564zyPpBJ',
        'Cleaned\x20Text:',
        'keydown',
        'observe',
        'style',
        'input',
        'value',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        'clipboard',
        'black',
        'target',
        'altKey',
        'innerText',
        '1xAgIUN',
        'HTTP\x20error!\x20Status:\x20',
        '2657030TpDJgw',
        '11755719dsDCPz',
        'error',
        'Formatted\x20Clipboard\x20Text:',
        'text',
        'message',
        'candidates',
        '3866049xrisqW',
        'AIzaSyBrqUsiEPy_4K3k6JKLGFzLXuDuaJPqgtM',
        'dblclick',
        '35OnWnFc',
        'color',
        '\x0a\x20print\x20in\x20proper\x20c\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'then',
        '12997963jTpKNm'
    ];
    _0x5aa7 = function () {
        return _0x5038e8;
    };
    return _0x5aa7();
}
(function (_0x3cdaf2, _0x466cbc) {
    const _0x17ccc4 = _0x3cdaf2();
    function _0x5d108e(_0x26c2f0, _0x35038f) {
        return _0x1bc2(_0x35038f - -0x329, _0x26c2f0);
    }
    while (!![]) {
        try {
            const _0x9eefbe = -parseInt(_0x5d108e(-0x2f4, -0x2fa)) / 0x1 * (-parseInt(_0x5d108e(-0x2ea, -0x2f8)) / 0x2) + -parseInt(_0x5d108e(-0x329, -0x328)) / 0x3 + -parseInt(_0x5d108e(-0x2f0, -0x307)) / 0x4 * (-parseInt(_0x5d108e(-0x32d, -0x325)) / 0x5) + parseInt(_0x5d108e(-0x316, -0x30a)) / 0x6 * (parseInt(_0x5d108e(-0x325, -0x30f)) / 0x7) + parseInt(_0x5d108e(-0x30a, -0x30b)) / 0x8 * (-parseInt(_0x5d108e(-0x307, -0x2f7)) / 0x9) + parseInt(_0x5d108e(-0x31d, -0x309)) / 0xa + parseInt(_0x5d108e(-0x306, -0x321)) / 0xb;
            if (_0x9eefbe === _0x466cbc) {
                break;
            } else {
                _0x17ccc4['push'](_0x17ccc4['shift']());
            }
        } catch (_0x260c8d) {
            _0x17ccc4['push'](_0x17ccc4['shift']());
        }
    }
}(_0x5aa7, 0xafa99));
async function copyTextToClipboard(_0x35987d) {
    function _0x1b38ac(_0x3b34c6, _0x4efcee) {
        return _0x1bc2(_0x3b34c6 - 0x219, _0x4efcee);
    }
    try {
        if (!_0x35987d) {
            throw new Error(_0x1b38ac(0x227, 0x22c));
        }
        await navigator[_0x1b38ac(0x243, 0x248)][_0x1b38ac(0x232, 0x22e)](_0x35987d);
    } catch (_0x51c5e0) {
        console[_0x1b38ac(0x24c, 0x24f)]('Error\x20copying\x20to\x20clipboard:', _0x51c5e0);
        throw _0x51c5e0;
    }
}
async function sendToOpenAI(_0xb177db) {
    const _0xc65ea7 = _0x68b8c8(-0x122, -0x119);
    const _0x5b09c8 = _0x68b8c8(-0xfd, -0x107) + _0xc65ea7;
    function _0x68b8c8(_0x3b77fb, _0x41d691) {
        return _0x1bc2(_0x41d691 - -0x11b, _0x3b77fb);
    }
    const _0x373b04 = {
        'method': 'POST',
        'headers': { 'Content-Type': 'application/json' },
        'body': JSON[_0x68b8c8(-0xf4, -0x10f)]({ 'contents': [{ 'parts': [{ 'text': _0xb177db }] }] })
    };
    try {
        const _0x347349 = await fetch(_0x5b09c8, _0x373b04);
        if (!_0x347349['ok']) {
            throw new Error(_0x68b8c8(-0xee, -0xeb) + _0x347349['status']);
        }
        const _0x526267 = await _0x347349[_0x68b8c8(-0x114, -0x106)]();
        const _0x32efe9 = _0x526267[_0x68b8c8(-0x100, -0x11b)];
        const _0x56697f = _0x32efe9[0x0][_0x68b8c8(-0x11a, -0x10e)]['parts'][0x0][_0x68b8c8(-0xea, -0xe6)];
        console[_0x68b8c8(-0xea, -0x103)]('Extracted\x20Text:', _0x56697f);
        await copyTextToClipboard(_0x56697f);
        return _0x56697f;
    } catch (_0x43bfe0) {
        console[_0x68b8c8(-0xfa, -0xe8)](_0x68b8c8(-0xf6, -0x10b), _0x43bfe0[_0x68b8c8(-0xf3, -0xe5)]);
        throw _0x43bfe0;
    }
}
async function handleDoubleClick(_0x127961) {
    function _0x511e6f(_0x41f3ad, _0x3edd8c) {
        return _0x1bc2(_0x41f3ad - 0x331, _0x3edd8c);
    }
    try {
        const _0x10fa81 = _0x127961[_0x511e6f(0x35d, 0x350)][_0x511e6f(0x342, 0x353)](_0x511e6f(0x33a, 0x350));
        if (!_0x10fa81)
            throw new Error('Target\x20element\x20not\x20found');
        const _0x418aeb = _0x10fa81[_0x511e6f(0x35f, 0x376)][_0x511e6f(0x33c, 0x337)](/\n{3,}/g, '\x0a')[_0x511e6f(0x34c, 0x334)]();
        console[_0x511e6f(0x349, 0x33f)](_0x511e6f(0x354, 0x361), _0x418aeb);
        const _0x195725 = document[_0x511e6f(0x348, 0x330)](_0x511e6f(0x343, 0x340));
        let _0xdac098 = '';
        if (!_0x195725) {
            _0xdac098 = _0x418aeb + _0x511e6f(0x35a, 0x34b);
        } else {
            _0xdac098 = _0x418aeb + '\x20using\x20' + _0x195725[_0x511e6f(0x35f, 0x34a)] + _0x511e6f(0x337, 0x330);
        }
        console[_0x511e6f(0x349, 0x341)](_0x511e6f(0x365, 0x34b), _0xdac098);
        await copyTextToClipboard(_0xdac098);
        _0xdac098 = await navigator[_0x511e6f(0x35b, 0x36e)][_0x511e6f(0x352, 0x33f)]();
        await sendToOpenAI(_0xdac098);
        const _0x585fe5 = document['querySelector']('.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold');
        if (_0x585fe5) {
            _0x585fe5['style']['color'] = 'grey';
            setTimeout(() => {
                function _0x4a6d18(_0x3b4b10, _0x42c3dc) {
                    return _0x511e6f(_0x3b4b10 - -0x46d, _0x42c3dc);
                }
                _0x585fe5[_0x4a6d18(-0x116, -0x117)][_0x4a6d18(-0x137, -0x14e)] = _0x4a6d18(-0x111, -0x10b);
            }, 0xbb8);
        }
    } catch (_0x5e5280) {
        console[_0x511e6f(0x364, 0x35a)](_0x511e6f(0x341, 0x352), _0x5e5280[_0x511e6f(0x367, 0x34f)]);
    }
}
function _0x3478a1(_0x5d87b3, _0xf1efb0) {
    return _0x1bc2(_0x5d87b3 - -0x2b1, _0xf1efb0);
}
function Hack() {
    function _0x169072(_0x20faea, _0x3871f1) {
        return _0x1bc2(_0x3871f1 - 0x161, _0x20faea);
    }
    const _0x5a25fc = new MutationObserver((_0x3d4eb8, _0x228770) => {
        function _0x4d2d4f(_0x11a510, _0x4677ca) {
            return _0x1bc2(_0x11a510 - 0x252, _0x4677ca);
        }
        if (document[_0x4d2d4f(0x269, 0x252)](_0x4d2d4f(0x25b, 0x24c))) {
            _0x228770[_0x4d2d4f(0x26e, 0x26a)]();
        }
    });
    _0x5a25fc[_0x169072(0x194, 0x186)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document['addEventListener'](_0x169072(0x16e, 0x164), handleDoubleClick);
}
function _0x1bc2(_0x48cbb6, _0x5aa73d) {
    const _0x1bc242 = _0x5aa7();
    _0x1bc2 = function (_0x190e6c, _0x7ef564) {
        _0x190e6c = _0x190e6c - 0x0;
        let _0x48c7ea = _0x1bc242[_0x190e6c];
        return _0x48c7ea;
    };
    return _0x1bc2(_0x48cbb6, _0x5aa73d);
}
document['addEventListener'](_0x3478a1(-0x28d, -0x293), _0x3c6225 => {
    function _0x6a2e1(_0x3f4486, _0x5ab8d1) {
        return _0x3478a1(_0x5ab8d1 - 0x17d, _0x3f4486);
    }
    if (_0x3c6225['ctrlKey'] && _0x3c6225['key'] === 'y' || _0x3c6225[_0x6a2e1(-0xed, -0x107)] && _0x3c6225[_0x6a2e1(-0x133, -0x121)] === 'y') {
        navigator[_0x6a2e1(-0xfc, -0x10a)][_0x6a2e1(-0x116, -0x113)]()[_0x6a2e1(-0x117, -0x12d)](_0x38d4fe => {
            function _0x33b38c(_0x119150, _0x5bd5a9) {
                return _0x6a2e1(_0x119150, _0x5bd5a9 - -0x112);
            }
            if (document[_0x33b38c(-0x233, -0x229)] instanceof HTMLInputElement || document['activeElement'] instanceof HTMLTextAreaElement) {
                document['activeElement'][_0x33b38c(-0x218, -0x21e)] = _0x38d4fe;
                document['activeElement'][_0x33b38c(-0x235, -0x230)](new Event(_0x33b38c(-0x21d, -0x21f), { 'bubbles': !![] }));
            }
        })[_0x6a2e1(-0x135, -0x125)](_0x3fb31e => {
            function _0x3bc1dd(_0x126630, _0x26f461) {
                return _0x6a2e1(_0x126630, _0x26f461 - -0x2a);
            }
            console[_0x3bc1dd(-0x13f, -0x12b)](_0x3bc1dd(-0x140, -0x154), _0x3fb31e);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
