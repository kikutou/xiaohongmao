var document_title;$(window).on('hashchange', function() {	if (window.location.hash.indexOf('#!') != -1)	{		if ($('a[name=' + window.location.hash.replace('#!', '') + ']').length)		{			$.scrollTo($('a[name=' + window.location.hash.replace('#!', '') + ']').offset()['top'] - 20, 600, {queue:true});		}	}});$(document).ready(function (){    document_title = document.title;    // fix form bug...    $("form[action='']").attr('action', window.location.href);    $('img#captcha').attr('src', G_BASE_URL + '/account/captcha/');        $('.tooltip').tooltip();        $('.autosize').autosize();    if (typeof (G_NOTIFICATION_INTERVAL) != 'undefined')    {        check_notifications();        setInterval('check_notifications()', G_NOTIFICATION_INTERVAL);    }    $('a[rel=lightbox]').fancybox(    {        openEffect: 'none',        closeEffect: 'none',        prevEffect: 'none',        nextEffect: 'none',        closeBtn: false,        helpers:        {            buttons:            {                position: 'bottom'            }        },        afterLoad: function ()        {            this.title = '第 ' + (this.index + 1) + ' 张, 共 ' + this.group.length + ' 张' + (this.title ? ' - ' + this.title : '');        }    });		if (window.location.hash.indexOf('#!') != -1)	{		if ($('a[name=' + window.location.hash.replace('#!', '') + ']').length)		{			$.scrollTo($('a[name=' + window.location.hash.replace('#!', '') + ']').offset()['top'] - 20, 600, {queue:true});		}	}	    //问题页添加评论, 文章页添加评论, 话题添加 绑定事件    init_comment_box('.aw-add-comment');    init_article_comment_box('.aw-article-detail .aw-article-comment');    init_topic_edit_box('.aw-edit-topic');	    /*用户头像提示box*/    show_card_box('.aw-user-name, .aw-user-img', 'user');    show_card_box('.aw-topic-name, .aw-topic-img', 'topic');        //动态绑定给用户头像提示box事件    $(document).on('mouseover', '#aw-card-tips', function ()    {        clearTimeout(cardBoxTimeout);        $(this).show();    });        $(document).on('mouseout', '#aw-card-tips', function ()    {        $(this).hide();    });        /*加关注icon提示*/    $(document).on('mouseover', '.voter, .icon-ok-sign , .icon-thumbs-up-alt , .icon-thumbs-down-alt , .aw-icon-no-help-tips , .aw-icon-thank-tips, .ht-icon', function ()    {        $(this).tooltip('show');    });	    //话题编辑下拉菜单mouseover click事件动态绑定    $(document).on('mouseover', '.aw-edit-topic-box .aw-dropdown-list li', function ()    {        $('.aw-edit-topic-box #aw_edit_topic_title').val($(this).text());    });        $(document).on('click', '.aw-edit-topic-box .aw-dropdown-list li', function ()    {        $('.aw-edit-topic-box #aw_edit_topic_title').val($(this).text());        $('.aw-edit-topic-box .submit-edit').click();        $('.aw-edit-topic-box .aw-dropdown').hide();    });    //分享私信用户下拉点击事件动态绑定    $(document).on('click','.aw-share-box .aw-dropdown-list li a, .aw-inbox .aw-dropdown-list li a',function(){    	$('.alert-box #quick_publish input.form-control').val($(this).text());    	$(this).parents('.aw-dropdown').hide();    });    $(document).on('mouseover','.aw-question-dropdown .aw-question-dropdown-list',function(){        clearTimeout(qDropdownTimeout);    });        $(document).on('mouseout','.aw-question-dropdown .aw-question-dropdown-list',function(){        qDropdownTimeout = setTimeout(function(){            _obj.next().hide();        },1000);    });        //搜索下拉    bind_dropdown_list('#aw-search-query', 'search')    	    //ie浏览器下input,textarea兼容    if (document.all)    {        $('input,textarea').each(function ()        {            if (typeof ($(this).attr("placeholder")) != "undefined")            {                if ($(this).val() == '')                {	                $(this).addClass('aw-placeholder').val($(this).attr("placeholder"));                }                $(this).focus(function () {                    if ($(this).val() == $(this).attr('placeholder'))                    {                        $(this).removeClass('aw-placeholder').val('');                    }                });                $(this).blur(function () {                    if ($(this).val() == '')                    {                        $(this).addClass('aw-placeholder').val($(this).attr('placeholder'));                    }                });            }        });    }        //编辑器自动长高度    if (typeof (myMarkdownSettings) != 'undefined' && document.getElementById('advanced_editor'))    {        $('#advanced_editor').markItUp(myMarkdownSettings);        $.setEditorPreview();    }    else if (document.getElementById('markItUpPreviewFrame'))    {        $('#markItUpPreviewFrame').hide();    }});//用户小卡片关注更新缓存$(document).on('click', '.aw-card-tips-user .focus', function (){    var uid = $(this).parents('.aw-card-tips').find('.name').attr('data-id');        $.each(cashUserData, function (i, a)    {        //存在缓存        if (a.match('data-id="' + uid + '"'))        {            if (cashUserData.length == 1)            {                cashUserData = [];            }            else            {                cashUserData[i] = '';            }        }    });});//话题小卡片关注更新缓存$(document).on('click', '.aw-card-tips-topic .focus', function (){    var topic_id = $(this).parents('.aw-card-tips').find('.name').attr('data-id');        $.each(cashTopicData, function (i, a)    {        //存在缓存        if (a.match('data-id="' + topic_id + '"'))        {            if (cashTopicData.length == 1)            {                cashTopicData = [];            }            else            {                cashTopicData[i] = '';            }        }    });});$(window).scroll(function (){    if ($('.aw-back-top').length)    {        if ($(window).scrollTop() > ($(window).height() / 2))        {            $('.aw-back-top').fadeIn();        }        else        {            $('.aw-back-top').fadeOut();        }    }});