const _0x26a5de = _0x2ca9;
(function (_0x14ed28, _0x2d4f77) {
    const _0x509ae8 = _0x2ca9,
        _0x3c7d40 = _0x14ed28();
    while (!![]) {
        try {
            const _0x59b6d3 = parseInt(_0x509ae8(0x157)) / 0x1 + parseInt(_0x509ae8(0x15c)) / 0x2 * (-parseInt(_0x509ae8(0x136)) / 0x3) + -parseInt(_0x509ae8(0x15e)) / 0x4 + parseInt(_0x509ae8(0x150)) / 0x5 * (-parseInt(_0x509ae8(0x14d)) / 0x6) + parseInt(_0x509ae8(0x142)) / 0x7 + parseInt(_0x509ae8(0x14a)) / 0x8 + parseInt(_0x509ae8(0x13f)) / 0x9 * (-parseInt(_0x509ae8(0x15b)) / 0xa);
            if (_0x59b6d3 === _0x2d4f77) break;
            else _0x3c7d40['push'](_0x3c7d40['shift']());
        } catch (_0x1887cd) {
            _0x3c7d40['push'](_0x3c7d40['shift']());
        }
    }
}(_0x24cb, 0xae313));
let myname = localStorage['mengchat_username'];
const db_global = firebase['database']()[_0x26a5de(0x13d)]('Global_Chat'),
    input_msg = document['getElementById'](_0x26a5de(0x141)),
    chat_bar_content = document[_0x26a5de(0x158)](_0x26a5de(0x152));
document[_0x26a5de(0x147)]('fa-paper-plane')[0x0][_0x26a5de(0x159)] = () => {
    const _0x31c82e = _0x26a5de;
    input_msg[_0x31c82e(0x14e)] && input_msg[_0x31c82e(0x14e)] != '\x20' && db_global['push']({
        'username': myname,
        'msg': input_msg[_0x31c82e(0x14e)]['trim']()[_0x31c82e(0x14b)](/</g, _0x31c82e(0x154))
    }), input_msg[_0x31c82e(0x14e)] = '';
}, input_msg['addEventListener']('keyup', _0x58baa6 => {
    const _0x3b8093 = _0x26a5de;
    _0x58baa6[_0x3b8093(0x137)] === 0xd && (input_msg['value'] && (db_global[_0x3b8093(0x13a)]({
        'username': myname,
        'msg': input_msg[_0x3b8093(0x14e)]['trim']()[_0x3b8093(0x14b)](/</g, '&lt;')
    }), input_msg[_0x3b8093(0x14e)] = ''));
});
var prev_id = '';
db_global['on']('child_added', _0xeb1834 => {
    const _0x2564e6 = _0x26a5de;
    _0xeb1834[_0x2564e6(0x13c)]()['username'] === myname ? prev_id != _0xeb1834[_0x2564e6(0x13c)]()[_0x2564e6(0x149)] ? chat_bar_content[_0x2564e6(0x15d)] += _0x2564e6(0x14f) + _0xeb1834[_0x2564e6(0x13c)]()[_0x2564e6(0x14c)] + _0x2564e6(0x144) : chat_bar_content['innerHTML'] += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22my-chat\x20chating\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22my-msg\x20chat-bar-msg\x22>\x20' + _0xeb1834[_0x2564e6(0x13c)]()[_0x2564e6(0x14c)] + _0x2564e6(0x144) : prev_id != _0xeb1834['val']()[_0x2564e6(0x149)] ? chat_bar_content[_0x2564e6(0x15d)] += _0x2564e6(0x13b) + _0xeb1834['val']()[_0x2564e6(0x149)] + _0x2564e6(0x138) + _0xeb1834[_0x2564e6(0x13c)]()[_0x2564e6(0x14c)] + _0x2564e6(0x143) : chat_bar_content[_0x2564e6(0x15d)] += _0x2564e6(0x140) + _0xeb1834[_0x2564e6(0x13c)]()[_0x2564e6(0x14c)] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', prev_id = _0xeb1834[_0x2564e6(0x13c)]()[_0x2564e6(0x149)], chat_bar_content[_0x2564e6(0x15f)](0x0, 0x3e8);
}), document[_0x26a5de(0x158)](_0x26a5de(0x155))['addEventListener'](_0x26a5de(0x151), () => {
    const _0x516a83 = _0x26a5de;
    document['querySelector'](_0x516a83(0x156))[_0x516a83(0x139)]['toggle'](_0x516a83(0x145)), document['querySelector'](_0x516a83(0x15a))[_0x516a83(0x139)][_0x516a83(0x13e)](_0x516a83(0x145));
});

function _0x24cb() {
    const _0xe6632c = ['</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22their-chat\x20chating\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22their-msg\x20chat-bar-msg\x22>', 'classList', 'push', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22their-username\x20chat-bar-username\x22>\x20~\x20', 'val', 'ref', 'toggle', '50634yKfSAL', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22their-chat\x20chating\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22their-msg\x20chat-bar-msg\x22>', 'input-send-msg', '8765484GakzPF', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'active', '.chat-bar', 'getElementsByClassName', 'zIndex', 'username', '2264080jcxGWO', 'replace', 'msg', '2760984VQEshi', 'value', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22my-username\x20chat-bar-username\x22>\x20You\x20~</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22my-chat\x20chating\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22my-msg\x20chat-bar-msg\x22>\x20', '10PySqXG', 'click', '.chat-bar-content', 'style', '&lt;', '.fa-bars', '.isi-nav', '1295696qRJvGg', 'querySelector', 'onclick', 'nav', '910IlxQsE', '8DSAbFy', 'innerHTML', '924244OCVxdI', 'scrollBy', '340554bUnFfZ', 'keyCode'];
    _0x24cb = function () {
        return _0xe6632c;
    };
    return _0x24cb();
}

function bukaGlobal() {
    const _0x501476 = _0x26a5de;
    document[_0x501476(0x158)](_0x501476(0x146))[_0x501476(0x153)][_0x501476(0x148)] = '999';
}

function _0x2ca9(_0x4b37b9, _0x27fdf5) {
    const _0x24cb86 = _0x24cb();
    return _0x2ca9 = function (_0x2ca97b, _0x516709) {
        _0x2ca97b = _0x2ca97b - 0x136;
        let _0x5ccacd = _0x24cb86[_0x2ca97b];
        return _0x5ccacd;
    }, _0x2ca9(_0x4b37b9, _0x27fdf5);
}

function backToList() {
    const _0x34b588 = _0x26a5de;
    document[_0x34b588(0x158)](_0x34b588(0x146))['style']['zIndex'] = '0';
}