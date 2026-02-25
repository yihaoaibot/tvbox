// 村长影视 - 基于首图2模板
var 村长影视 = {
    title: '村长影视',
    host: 'https://www.czc6.cn',
    url: '/list/fyclass-fypage.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'UC_UA',
    },
    class_parse: '.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;.*/(.*?).html',
    play_parse: true,
    lazy: `js:
        let html = request(input);
        let hconf = html.match(/r player_.*?=(.*?)</)[1];
        let json = JSON5.parse(hconf);
        let url = json.url;
        if (json.encrypt == '1') { url = unescape(url); } 
        else if (json.encrypt == '2') { url = unescape(base64Decode(url)); }
        if (/\\.(m3u8|mp4)/.test(url)) { input = { parse: 0, url: url }; }
        else { input = url && url.startsWith('http') ? {parse:0,url:url} : input; }`,
    limit: 6,
    double: true,
    推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级: {
        title: '.stui-content__detail .title&&Text;.stui-content__detail&&p:eq(-2)&&a&&Text',
        img: '.stui-content__thumb .lazyload&&data-original',
        desc: '.stui-content__detail p&&Text;.stui-content__detail&&p:eq(-2)&&a:eq(2)&&Text;.stui-content__detail&&p:eq(-2)&&a:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text;.stui-content__detail p:eq(1)&&Text',
        content: '.detail&&Text',
        tabs: '.stui-pannel__head h3',
        lists: '.stui-content__playlist:eq(#id) li',
    },
    搜索: 'ul.stui-vodlist__media,ul.stui-vodlist,#searchList li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href;.detail&&Text',
};

// 欧科影视 - 基于mxpro模板
var 欧科影视 = {
    title: '欧科影视',
    host: 'https://www.okzy.tv',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: { 'User-Agent': 'MOBILE_UA' },
    class_parse: '.navbar-items li:gt(0):lt(10);a&&Text;a&&href;/(\\d+)',
    play_parse: true,
    lazy: `js:
        let html = request(input);
        let hconf = html.match(/r player_.*?=(.*?)</)[1];
        let json = JSON5.parse(hconf);
        let url = json.url;
        if (json.encrypt) { url = unescape(url); }
        if (/\\.(m3u8|mp4)/.test(url)) { input = { parse: 0, url: url }; }
        else { input = {parse:0,url:url}; }`,
    limit: 6,
    double: true,
    推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级: {
        title: 'h1&&Text;.module-info-tag-link:eq(-1)&&Text',
        img: '.lazyload&&data-original',
        desc: '.module-info-item:eq(-2)&&Text;.module-info-tag-link&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(1)&&Text',
        content: '.module-info-introduction&&Text',
        tabs: '.module-tab-item',
        lists: '.module-play-list:eq(#id) a',
        tab_text: 'div--small&&Text',
    },
    搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
};

export default { 村长影视, 欧科影视 };

// 南瓜影视 - 基于采集1模板
var 南瓜影视 = {
    title: '南瓜影视',
    host: 'https://www.nangua6.com',
    url: '/api.php/provide/vod/?ac=detail&pg=fypage&t=fyclass',
    searchUrl: '/api.php/provide/vod/?wd=**&pg=fypage',
    headers: {'User-Agent': 'MOBILE_UA'},
    timeout: 5000,
    class_parse: 'json:class;',
    limit: 20,
    multi: 1,
    searchable: 2,
    quickSearch: 1,
    filterable: 0,
    play_parse: true,
    lazy: `js:
        if (/\\.(m3u8|mp4)/.test(input)) { input = { parse: 0, url: input }; }
        else { input = { parse: 1, url: input }; }`,
    推荐: '*',
    一级: 'json:list;vod_name;vod_pic;vod_remarks;vod_id;vod_play_from',
    搜索: '*',
};

// 麻绳影视 - 基于mx模板
var 麻绳影视 = {
    title: '麻绳影视',
    host: 'https://www.maseng.cn',
    url: '/vodshow/fyclass--------fypage---/',
    searchUrl: '/vodsearch/**----------fypage---/',
    class_parse: '.top_nav li;a&&Text;a&&href;.*/(.*?)/',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: { 'User-Agent': 'MOBILE_UA' },
    play_parse: true,
    lazy: `js:
        let html = request(input);
        let hconf = html.match(/r player_.*?=(.*?)</)[1];
        let json = JSON5.parse(hconf);
        let url = json.url;
        if (json.encrypt) { url = unescape(url); }
        input = /\\.(m3u8|mp4)/.test(url) ? {parse:0,url:url} : {parse:1,url:input};`,
    limit: 6,
    double: true,
    推荐: '.cbox_list;*;*;*;*;*',
    一级: 'ul.vodlist li;a&&title;a&&data-original;.pic_text&&Text;a&&href',
    二级: {
        title: 'h2&&Text;.content_detail:eq(1)&&li&&a:eq(2)&&Text',
        img: '.vodlist_thumb&&data-original',
        desc: '.content_detail:eq(1)&&li:eq(1)&&Text;.content_detail:eq(1)&&li&&a&&Text',
        content: '.content_desc&&span&&Text',
        tabs: '.play_source_tab&&a',
        lists: '.content_playlist:eq(#id) li',
    },
    搜索: '*',
};

// 蜂鸟影视 - 基于海螺3模板
var 蜂鸟影视 = {
    title: '蜂鸟影视',
    host: 'https://www.fengniao.tv',
    url: '/vod_____show/fyclass--------fypage---.html',
    searchUrl: '/v_search/**----------fypage---.html',
    headers: { 'User-Agent': 'MOBILE_UA' },
    timeout: 5000,
    class_parse: 'body&&.hl-nav li:gt(0);a&&Text;a&&href;.*/(.*?).html',
    cate_exclude: '明星|专题 最新 排行',
    limit: 40,
    play_parse: true,
    lazy: `js:
        let html = request(input);
        let hconf = html.match(/r player_.*?=(.*?)</)[1];
        let json = JSON5.parse(hconf);
        let url = json.url;
        if (json.encrypt) { url = unescape(url); }
        input = /\\.(m3u8|mp4)/.test(url) ? {parse:0,url:url} : {parse:1,url:input};`,
    double: true,
    推荐: '.hl-vod-list;li;a&&title;a&&data-original;.remarks&&Text;a&&href',
    一级: '.hl-vod-list&&.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href',
    二级: {
        title: '.hl-dc-title&&Text',
        img: '.hl-lazy&&data-original',
        desc: '.hl-dc-content&&li:eq(10)&&Text;.hl-dc-content&&li:eq(4)&&Text',
        content: '.hl-content-text&&Text',
        tabs: '.hl-tabs&&a',
        tab_text: 'a--span&&Text',
        lists: '.hl-plays-list:eq(#id)&&li',
    },
    搜索: '.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
};

export default { 村长影视, 欧科影视, 南瓜影视, 麻绳影视, 蜂鸟影视 };
