//Расставить статьи по нужным дивам
function setArticles() {
var firstBlock = $('#id_article-is-it-possible').parent();
if (firstBlock === null) {
console.log('error first block');
}
doc_w = window.innerWidth;
var r1 = $('.score-variable-row:eq(0)');
var r7 = $('.score-variable-row:eq(0)');
var first_column = r1.children('div.score-variable-column:eq(0)');
var sec_column = r1.children('div.score-variable-column:eq(1)');
var third_column = r1.children('div.score-variable-column:eq(2)');
var r2 = $('.score-variable-row:eq(2)');
var fourth_column = r2.children('div.score-variable-column:eq(0)');
var fith_column = r2.children('div.score-variable-column:eq(1)');
var sixth_column = r2.children('div.score-variable-column:eq(2)');

if (doc_w >= 1366) {
if ($('#id_article-food').parent().parent().parent().attr('id') == 'id_all-articles') {
console.log('not to do');
return;
}
first_column.append($('#id_article-food'));
first_column.append($('#id_article-fibroz'));
sec_column.append($('#id_article-diffuse-changes'));
sec_column.append($('#id_article-diagnostics'));
third_column.append($('#id_article-is-it-possible'));
third_column.append($('#id_article-drugs'));
fourth_column.append($('#id_hepatosis'));
fith_column.append($('#id_symptoms'));
}

if (doc_w >= 768 && doc_w < 1366) {
console.log($('#id_article-is-it-possible').parent().parent().parent().attr('id'));
var v = $('#id_article-is-it-possible').parent().parent().parent();
if ($('#id_article-food').parent().parent().parent().attr('id') != 'id_all-articles') {
console.log('not to do');
return;
}
first_column.append($('#id_article-is-it-possible'));
first_column.append($('#id_article-diagnostics'));
sec_column.append($('#id_article-diffuse-changes'));
sec_column.append($('#id_article-drugs'));
fourth_column.append($('#id_article-fibroz'));
fourth_column.append($('#id_hepatosis'));
fith_column.append($('#id_article-food'));
fith_column.append($('#id_symptoms'));

}
if (doc_w < 768) {
first_column.append($('#id_article-food'));
first_column.append($('#id_article-fibroz'));

sec_column.append($('#id_article-diffuse-changes'));
sec_column.append($('#id_article-diagnostics'));

third_column.append($('#id_article-is-it-possible'));
third_column.append($('#id_article-drugs'));

fourth_column.append($('#id_hepatosis'));
fith_column.append($('#id_symptoms'));
}
}
//на загрузку документа
$(document).ready(function () {
setArticles();
console.log("ready!");
});
//на изменение размера документа
$(window).resize(function () {
console.log('resized');
setArticles();
});



$('.article__navigation__item-link').on('click', function(event) {
event.preventDefault();
});

$('#id_all-articles .score-variable-column div').on('click', function(event) {
window.location = $(this).find("a").attr("href");
});




//Скрытие статей в зависимости от ссылок
//1. Все статьи
$('.article__navigation__item-link:eq(0)').click(function (e) {
setActiveLink(e);
doc_w = window.innerWidth;
var r1 = $('.score-variable-row:eq(0)');
var first_column = r1.children('div.score-variable-column:eq(0)');
var sec_column = r1.children('div.score-variable-column:eq(1)');
var third_column = r1.children('div.score-variable-column:eq(2)');
var r2 = $('.score-variable-row:eq(2)');
var fourth_column = r2.children('div.score-variable-column:eq(0)');
var fith_column = r2.children('div.score-variable-column:eq(1)');
var sixth_column = r2.children('div.score-variable-column:eq(2)');

showAllArticles();
if (doc_w >= 1366) {
first_column.append($('#id_article-food'));
first_column.append($('#id_article-fibroz'));
sec_column.append($('#id_article-diffuse-changes'));
sec_column.append($('#id_article-diagnostics'));
third_column.append($('#id_article-is-it-possible'));
third_column.append($('#id_article-drugs'));
fourth_column.append($('#id_hepatosis'));
fith_column.append($('#id_symptoms'));
}
if (doc_w >= 768 && doc_w <= 1365) {
first_column.append($('#id_article-is-it-possible'));
first_column.append($('#id_article-diagnostics'));
sec_column.append($('#id_article-diffuse-changes'));
sec_column.append($('#id_article-drugs'));
fourth_column.append($('#id_article-fibroz'));
fourth_column.append($('#id_hepatosis'));
fith_column.append($('#id_article-food'));
fith_column.append($('#id_symptoms'));
}
if (doc_w < 768) {
first_column.append($('#id_article-food'));
first_column.append($('#id_article-fibroz'));
sec_column.append($('#id_article-diffuse-changes'));
sec_column.append($('#id_article-diagnostics'));
third_column.append($('#id_article-is-it-possible'));
third_column.append($('#id_article-drugs'));
fourth_column.append($('#id_hepatosis'));
fith_column.append($('#id_symptoms'));
}

});
//2. О болезни
$(".article__navigation__item-link:eq(1)").click(function (e) {
setActiveLink(e);
doc_w = window.innerWidth;
var r1 = $('.score-variable-row:eq(0)');
var first_column = r1.children('div.score-variable-column:eq(0)');
var sec_column = r1.children('div.score-variable-column:eq(1)');
var third_column = r1.children('div.score-variable-column:eq(2)');
var r2 = $('.score-variable-row:eq(2)');
var fourth_column = r2.children('div.score-variable-column:eq(0)');
var fith_column = r2.children('div.score-variable-column:eq(1)');
var sixth_column = r2.children('div.score-variable-column:eq(2)');

hideAllArticles();
if (doc_w >= 1366) {
first_column.append($('#id_article-diffuse-changes'));
$('#id_article-diffuse-changes').css("display", "block");
first_column.append($('#id_symptoms'));
$('#id_symptoms').css("display", "block")
sec_column.append($('#id_article-diagnostics'));
$('#id_article-diagnostics').css("display", "block");
third_column.append($('#id_hepatosis'));
$('#id_hepatosis').css("display", "block");

}
if (doc_w >= 768 && doc_w <= 1365) {
first_column.append($('#id_article-diffuse-changes'));
$('#id_article-diffuse-changes').css("display", "block");
first_column.append($('#id_symptoms'));
$('#id_symptoms').css("display", "block")
sec_column.append($('#id_article-diagnostics'));
$('#id_article-diagnostics').css("display", "block");
sec_column.append($('#id_hepatosis'));
$('#id_hepatosis').css("display", "block");
}
if (doc_w < 768) {
first_column.append($('#id_article-diffuse-changes'));
$('#id_article-diffuse-changes').css("display", "block");
first_column.append($('#id_symptoms'));
$('#id_symptoms').css("display", "block")
first_column.append($('#id_article-diagnostics'));
$('#id_article-diagnostics').css("display", "block");
first_column.append($('#id_hepatosis'));
$('#id_hepatosis').css("display", "block");
}
});
//3. Питание
$(".article__navigation__item-link:eq(2)").click(function (e) {
setActiveLink(e);
doc_w = window.innerWidth;
var r1 = $('.score-variable-row:eq(0)');
var first_column = r1.children('div.score-variable-column:eq(0)');
var sec_column = r1.children('div.score-variable-column:eq(1)');
var third_column = r1.children('div.score-variable-column:eq(2)');
var r2 = $('.score-variable-row:eq(2)');
var fourth_column = r2.children('div.score-variable-column:eq(0)');
var fith_column = r2.children('div.score-variable-column:eq(1)');
var sixth_column = r2.children('div.score-variable-column:eq(2)');

hideAllArticles();
if (doc_w >= 1366) {
$('#id_article-food').css("display", "block");
}
if (doc_w >= 768 && doc_w <= 1365) {
first_column.append($('#id_article-food'));
$('#id_article-food').css("display", "block");
}
if (doc_w < 768) {
first_column.append($('#id_article-food'));
$('#id_article-food').css("display", "block");
}
});
//4. Лечение
$(".article__navigation__item-link:eq(3)").click(function (e) {
setActiveLink(e);
doc_w = window.innerWidth;
var r1 = $('.score-variable-row:eq(0)');
var first_column = r1.children('div.score-variable-column:eq(0)');
var sec_column = r1.children('div.score-variable-column:eq(1)');
var third_column = r1.children('div.score-variable-column:eq(2)');
var r2 = $('.score-variable-row:eq(2)');
var fourth_column = r2.children('div.score-variable-column:eq(0)');
var fith_column = r2.children('div.score-variable-column:eq(1)');
var sixth_column = r2.children('div.score-variable-column:eq(2)');

hideAllArticles();
if (doc_w >= 768) {
first_column.append($('#id_article-is-it-possible'));
$('#id_article-is-it-possible').css("display", "block");
sec_column.append($('#id_article-drugs'));
$('#id_article-drugs').css("display", "block");
}

if (doc_w < 768) {
first_column.append($('#id_article-is-it-possible'));
$('#id_article-is-it-possible').css("display", "block");
first_column.append($('#id_article-drugs'));
$('#id_article-drugs').css("display", "block");
}
});
//5. Осложнение
$(".article__navigation__item-link:eq(4)").click(function (e) {
setActiveLink(e);
doc_w = window.innerWidth;
var r1 = $('.score-variable-row:eq(0)');
var first_column = r1.children('div.score-variable-column:eq(0)');
var sec_column = r1.children('div.score-variable-column:eq(1)');
var third_column = r1.children('div.score-variable-column:eq(2)');
var r2 = $('.score-variable-row:eq(2)');
var fourth_column = r2.children('div.score-variable-column:eq(0)');
var fith_column = r2.children('div.score-variable-column:eq(1)');
var sixth_column = r2.children('div.score-variable-column:eq(2)');

hideAllArticles();
first_column.append($('#id_article-fibroz'));
$('#id_article-fibroz').css("display", "block");

});

function setActiveLink(e) {
console.log(e);
$('.article__navigation__item--active').removeClass('article__navigation__item--active');
$(e.currentTarget).addClass("article__navigation__item--active");
}

function hideAllArticles() {
$('#id_article-drugs').css("display", "none");
$('#id_article-is-it-possible').css("display", "none");
$('#id_article-food').css("display", "none");
$('#id_article-fibroz').css("display", "none");
$('#id_article-diagnostics').css("display", "none");
$('#id_article-diffuse-changes').css("display", "none");
$('#id_hepatosis').css("display", "none");
$('#id_symptoms').css("display", "none");
}

function showAllArticles() {
$('#id_article-drugs').css("display", "block");
$('#id_article-is-it-possible').css("display", "block");
$('#id_article-food').css("display", "block");
$('#id_article-fibroz').css("display", "block");
$('#id_article-diagnostics').css("display", "block");
$('#id_article-diffuse-changes').css("display", "block");
$('#id_hepatosis').css("display", "block");
$('#id_symptoms').css("display", "block");
}