/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=b8e15646f387d5949f68)
 * Config saved to config.json and https://gist.github.com/b8e15646f387d5949f68
 */

/* Is 'csapatepites.html' page */

var isCsapatepites = false;

if ( $('body').hasClass("page-csapatepites") ){
    isCsapatepites = true;
}

/* Is 'csapatepites.html' page END */

$(".button-collapse").sideNav();

var bkelm = $('#header-bk-btn');
var buttonPosition = bkelm.offset();
var easyNavigation = $('nav');
var eurHuf = 315;

function setVidHeight(){
    var vidHeight = $('#header-vid').height();
    $('#vid-overlay').height(vidHeight);
};

if (window.top = window.self) {
    easyNavigation.removeClass('ontopnav');
}

function checkPosition() {
    if ($(document).scrollTop() > 50) {
        easyNavigation.removeClass('ontopnav');
    } else {
        easyNavigation.addClass('ontopnav');
    }

    if ($(document).scrollTop() > buttonPosition.top - 50 && !($('#booking-li').hasClass('book-li'))) {
        $('#booking-li').addClass('book-li');
        $('#mobile-bk-btn, #mobile-teamb-btn').addClass('show-btn');
    } else if ( !($(document).scrollTop() > buttonPosition.top - 50) && $('#booking-li').hasClass('book-li')){
        $('#booking-li').removeClass('book-li');
        $('#mobile-bk-btn, #mobile-teamb-btn').removeClass('show-btn');
    }  
}

$(window).scroll(function() {
    checkPosition();
});

if($('#calendar').length > 0){
    $(function() {
        var transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition' : 'transitionend',
            'OTransition' : 'oTransitionEnd',
            'msTransition' : 'MSTransitionEnd',
            'transition' : 'transitionend'
        },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            $wrapper = $( '#custom-inner' ),
            $calendar = $( '#calendar' ),
            cal = $calendar.calendario( {
                onDayClick : function( $el, $contentEl, dateProperties ) {

                    var isFullDay = $contentEl['context'].className.indexOf('fullday');

                    if( $contentEl.length > 0 && isFullDay < 0 ) {
                        setDate( $contentEl, dateProperties );

                        if($(window).width()<992){
                            scrollToForm();
                        }
                    }
                },
                caldata : codropsEvents,
                displayWeekAbbr : true
            } ),
            $month = $( '#custom-month' ).html( cal.getMonthName() ),
            $year = $( '#custom-year' ).html( cal.getYear() );

        $( '#custom-next' ).on( 'click', function() {
            cal.gotoNextMonth( updateMonthYear );
        } );
        $( '#custom-prev' ).on( 'click', function() {
            cal.gotoPreviousMonth( updateMonthYear );
        } );

        function updateMonthYear() {
            $month.html( cal.getMonthName() );
            $year.html( cal.getYear() );
        }

        function setDate( $contentEl, dateProperties ) {

            var bookinHour = "13:00 - 17:30, ";

            // console.log('contentel:',$contentEl,' dataprop: ', dateProperties);
            var _month = dateProperties.monthname;
            var _day = dateProperties.day;
            var _weekday = dateProperties.weekdayname;
            var _year = dateProperties.year;

            if(_weekday== undefined && dateProperties.weekday == 7){
                _weekday = 'Sunday';

                if (isCsapatepites){
                    _weekday = 'Vasárnap';
                }
            }

            if (isCsapatepites){
                _month = _month.toLowerCase();
                $('#entry_1430024425').val(_year+'. '+_month+' '+_day+'., '+_weekday).addClass('validate valid');
            }
            else{
                $('#entry_1430024425').val(bookinHour+''+_month+' '+_day+', '+_weekday+' '+_year).addClass('validate valid');
            }
        }

        function scrollToForm(){
            $('html, body').animate({
                scrollTop: $("#entry_1430024425").offset().top-100
            }, 2000);
        }
    });
};

window.addEventListener("resize", function(){
    setVidHeight();
}, false);


$(document).ready(function(){
    setVidHeight();
    checkPosition();

    $('.scrollspy').scrollSpy({
        offset: 100
    });

    $("#classes-steps").owlCarousel({
        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 2],
            [1000, 2],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],
        singleItem:false,
        navigation : true,
    });
    $("#classes-steps-csapatepites").owlCarousel({
        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 2],
            [1000, 2],
            [1200, 3],
            [1400, 3],
            [1600, 3]
        ],
        singleItem:false,
        navigation : true,
    });
    $("#testimonials").owlCarousel({
        items: 3,
        singleItem:false,
        navigation : true,
    });

    //Material Photo Gallery
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    var isDraggable = w > 480 ? true : false;
    var mapOptions = {
        draggable: isDraggable,
        scrollwheel: false
    };

    $( ".side-nav li" ).click(function() {
        $('.button-collapse').sideNav('hide');
    });

    // update calendar days infos
    function updateDays(){
        var activeDays = $('.fc-content');

        activeDays.each( function(){

            var empSpaces = Number($(this).children().children('.empty-spaces').html());

            // closed days
            if(empSpaces<1){
                $(this).addClass('fullday');
            } else{
                $(this).removeClass('fullday');
            }
            // closed days END

            // adding popover

            if (isCsapatepites){
                $(this).append( '<span class="popover above"> Szabad hely: '+ empSpaces +'</span>' );
            } else {
                $(this).append( '<span class="popover above"> Free spaces: '+ empSpaces +'</span>' );
            }

            // adding popover END

        });
    }

    updateDays();

    $( '#custom-prev, #custom-next').on( 'click', function() {
        updateDays();
        /*   setTimeout(function(){
        }, 1);*/
    });
});

$( '#entry_1430024425' ).click(function() {
    // alert( "Handler for .click() called." );
});

// Youtube API

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('playerSteps', {
        height: '315',
        width: '560',
        videoId: 'Vo4QDS3qnkk',
        events: {
            //  'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Addition for ganalytics (from: https://megalytic.com/blog/tracking-youtube-videos-using-google-analytics )

var pauseFlag = false;
function onPlayerReady(event) {
    // do nothing, no tracking needed
}
function onPlayerStateChange(event) {
    // track when user clicks to Play
    if (event.data == YT.PlayerState.PLAYING) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'Videos',
            eventAction: 'play',
            eventLabel: 'Fall Campaign'
        });

        pauseFlag = true;
    }
    // track when user clicks to Pause
    if (event.data == YT.PlayerState.PAUSED && pauseFlag) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'Videos',
            eventAction: 'pause',
            eventLabel: 'Fall Campaign'
        });

        pauseFlag = false;
    }
    // track when video ends
    if (event.data == YT.PlayerState.ENDED) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'Videos',
            eventAction: 'finished',
            eventLabel: 'Fall Campaign'
        });

    }
}

// GTM - tracking bookings

function sendBasket(submitted){
    if(submitted){
        var price = 79; // EUR

        // convert to HUF
        price = Math.round(price * eurHuf * 100) / 100;
        // convert to HUF END

        var d = new Date();
        var particCount = Number( $('#entry_924831542').val());
        var trId = String(d.getFullYear()) + '-' + ("0" + (d.getMonth() + 1 )).slice(-2) + '-' +
            ("0" + d.getDate()).slice(-2) + '-' + ("0" + d.getHours()).slice(-2) + ("0" + d.getMinutes()).slice(-2) + '-' + d.getTime();
        var trRev = Math.round(Number(price * particCount) * 100 ) / 100;

        dataLayer.push({
            'event': 'easytransaction',
            'transactionId': trId,
            'transactionAffiliation': 'EasyCookingBP',
            'transactionTotal': trRev,
            'transactionTax': 0,
            'transactionShipping': 0,
            // 'currency': 'EUR',
            'transactionProducts': [{
                'sku': '-',
                'name': 'EasyFood',
                'category': '-',
                'price': price,
                'quantity': particCount
            }]
        });
        //        console.log('sendBasket run..')
    }
};


// Highlighting calendar

$('.date-col.easycalendar-col').click(function(){

    var wW = window.innerWidth;

    if(wW < 992){
        $('html, body').animate({
            scrollTop: $('#easycalendar-wrap').offset().top - 70
        }, 1500);
    }

    var calendarInner = $('#easycalendar-wrap .custom-inner');
    calendarInner.addClass('flashing-border');

    setTimeout(function(){
        calendarInner.removeClass('flashing-border');
    }, 3000);

});

// For Yahoo exchange rate

getRate("EUR", "HUF");

function getRate(from, to) {
    var script = document.createElement('script');
    script.setAttribute('src', "http://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D"+from+to+"%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json&callback=parseExchangeRate");
    document.body.appendChild(script);
}

function parseExchangeRate(data) {
    var name = data.query.results.row.name;
    var rate = parseFloat(data.query.results.row.rate, 10);
    // alert("Exchange rate " + name + " is " + rate);
    eurHuf = rate;
}

// For Yahoo exchange rate END
$(document).euCookieLawPopup().init({
    cookiePolicyUrl : '#',
    popupPosition : 'bottomleft',
    colorStyle : 'inverse',
    compactStyle : true,
    buttonLearnmoreOpenInNewWindow : false,
    agreementExpiresInDays : 200,
    autoAcceptCookiePolicy : true
});

$( ".eupopup-buttons .eupopup-button_2" ).click(function() {
    $('#cookie-modal').openModal();
});
