// 基于道长模板的采集站爬虫集合
// 这些是常见的采集站API格式，很多视频站都在用

// 采集站1 - 通用格式
var 采集站通用 = {
    title: '采集站通用',
    host: '',
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
        else if (rule.parse_url) { input = rule.parse_url + input; }`,
    推荐: '*',
    一级: 'json:list;vod_name;vod_pic;vod_remarks;vod_id;vod_play_from',
    搜索: '*',
};

// 采集站2 - 无class分类
var 采集站无分类 = {
    title: '采集站无分类',
    host: '',
    url: '/api.php/provide/vod/?ac=detail&pg=fypage',
    searchUrl: '/api.php/provide/vod/?wd=**&pg=fypage',
    headers: {'User-Agent': 'MOBILE_UA'},
    timeout: 5000,
    class_name: '电影&电视剧&综艺&动漫',
    class_url: '1&2&3&4',
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

// 蜂蜜资源站 - 常见采集站
var 蜂蜜资源 = {
    title: '蜂蜜资源',
    host: 'https://www.fengmiyuan.com',
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
        else { input = input; }`,
    推荐: '*',
    一级: 'json:list;vod_name;vod_pic;vod_remarks;vod_id;vod_play_from',
    搜索: '*',
};

// 樱花资源站 - 常见采集站  
var 樱花资源 = {
    title: '樱花资源',
    host: 'https://www.yhzy.cc',
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
        if (/\\.(m3u8|mp4)/.test(input)) { input = { parse: 0, url: input }; }`,
    推荐: '*',
    一级: 'json:list;vod_name;vod_pic;vod_remarks;vod_id;vod_play_from',
    搜索: '*',
};

// 章鱼资源站 - 常见采集站
var 章鱼资源 = {
    title: '章鱼资源',
    host: 'https://www.zhangyuwang.com',
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
        if (/\\.(m3u8|mp4)/.test(input)) { input = { parse: 0, url: input }; }`,
    推荐: '*',
    一级: 'json:list;vod_name;vod_pic;vod_remarks;vod_id;vod_play_from',
    搜索: '*',
};

// 两个BT - 已验证可用
var 两个BT = {
    title: '两个BT',
    host: 'https://www.bttwoo.com',
    url: '/movie/fyclass-fypage.html',
    searchUrl: '/search.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {'User-Agent': 'MOBILE_UA'},
    class_parse: '.pagination a;a&&Text;a&&href;.*/(\\d+).html',
    play_parse: false,
    lazy: `js:
        if (/\\.(m3u8|mp4)/.test(input)) { input = { parse: 0, url: input }; }
        else { input = input; }`,
    limit: 6,
    double: true,
    推荐: '.movie-list;*;*;*;*;*',
    一级: '.movie-item;a&&title;img&&data-src;.info&&Text;a&&href',
    二级: {
        title: 'h1&&Text;.info&&p:eq(0)&&Text',
        img: '.cover img&&data-src',
        desc: '.info&&p:eq(1)&&Text;.info&&p:eq(2)&&Text',
        tabs: '.play-list&&h3',
        lists: '.play-list:eq(#id) a',
    },
    搜索: '.search-list li;a&&title;img&&data-src;.info&&Text;a&&href',
};

// 蓝光影院 - 基于mxpro
var 蓝光影院 = {
    title: '蓝光影院',
    host: 'https://www.lgyy.tv',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {'User-Agent': 'MOBILE_UA'},
    class_parse: '.navbar-items li:gt(0):lt(10);a&&Text;a&&href;/(\\d+)',
    play_parse: true,
    lazy: `js:
        let html = request(input);
        let hconf = html.match(/r player_.*?=(.*?)</)[1];
        let json = JSON5.parse(hconf);
        let url = json.url;
        if (json.encrypt) { url = unescape(url); }
        if (/\\.(m3u8|mp4)/.test(url)) { input = { parse: 0, url: url }; }
        else { input = {parse:1,url:input}; }`,
    limit: 6,
    double: true,
    推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级: {
        title: 'h1&&Text',
        img: '.lazyload&&data-original',
        desc: '.module-info-item&&Text',
        tabs: '.module-tab-item',
        lists: '.module-play-list:eq(#id) a',
    },
    搜索: 'body .module-item',
};

// 4K影院 - 基于mx
var 4K影院 = {
    title: '4K影院',
    host: 'https://www.4kyy.cn',
    url: '/vodshow/fyclass--------fypage---/',
    searchUrl: '/vodsearch/**----------fypage---/',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {'User-Agent': 'MOBILE_UA'},
    class_parse: '.top_nav li;a&&Text;a&&href;.*/(.*?)/',
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
        title: 'h2&&Text',
        img: '.vodlist_thumb&&data-original',
        desc: '.content_detail:eq(1)&&li&&a&&Text',
        tabs: '.play_source_tab&&a',
        lists: '.content_playlist:eq(#id) li',
    },
    搜索: '*',
};

export default {
    采集站通用, 采集站无分类, 蜂蜜资源, 樱花资源, 章鱼资源,
    两个BT, 蓝光影院, '4K影院': 4K影院
};
