//9396 -> 7889...ing
/**
*	Make SoungJin
*	github : github.com/patrickmonster
*	Pop up music player
*	RPlay - google play to - play.google.com/store/apps/details?id=com.rplay
**/
imgs="http://549.ipdisk.co.kr/img/";U=undefined;list=[];op={c:-1,n:"",p:false,s:false,o:false,r:true,m:false};obj={p:U,e:U,b:U,l:U,c:U,n:U,s:U};si={a:3000,b:1500,m:50,t:30,s:300,i:35,c:0};css=eve=V=U;
function ad(t){$('body').html($('body').html()+t)}
function rs(){w=$("#music").innerWidth();h=$("#music").innerHeight();console.log(w+"/"+h);obj.n.css({width:(op.o?w-obj.l.innerWidth():w)+'px'})}
function cv(x){a.volume=x}
function rp(){obj.c.attr({"src":imgs+(op.r?"rotate1.png":"synchronize1.png")});op.r=!op.r}
function na(){obj.n.html("<p>"+op.n+"�ъ깮以�...</p>");obj.n.animate({"bottom":op.m?-obj.n.innerHeight():0},si.b,function(){op.m&&setTimeout(na,si.a)});op.m=!op.m}
function ne(i=op.c){if(++i>=list.length)i=0;if(i<0)i=list.length-1;point(i);op.p||setTimeout(play(),30)}
function re(i){list.splice(i, 1);item(list,true);si.c=list.length;op.c==i&&point(i),op.p||setTimeout(play(),30)}
function opening(){obj.l.css({"bottom":(-obj.l.innerHeight())+'px'});obj.p.animate({"bottom":(h/2)+"px","right":"0px"},si.a, function() {V&&V.animate({"opacity":1},si.a);point(0);setTimeout(play(),30);eve=setTimeout(function(){obj.p.animate({"bottom":0,"right":0},si.b)},si.b)})}
$(window).resize(rs);
$(document).bind("contextmenu",function(a){a.preventDefault()}).bind("click",function() {$("div.custom-menu").hide()});
function init(){
ad('<div id="music"><img id="play" src="'+imgs+'pause1.png"/><img id="mp-begin" src="'+imgs+'begin1.png"/><img id="mp-end" src="'+imgs+'end1.png"/><img id="mp-control" src="'+imgs+'synchronize1.png"/></div>');
ad('<div id="playbox"></div><div id="namebox">Test</div><input id="volume" type="range" min="0" max="1" step="0.0001" value="0.5" oninput="cv(this.value);">');
ad('<style type="text/css">.active a{ color:#5DB0E6;text-decoration:none;}music{width:100%;height:100%;left:0}img{cursor:pointer}#play, #frameview, #musiclist, #playbox, #namebox, #mp-begin, #mp-end, #mp-control, #volume{position: fixed}#music{width:100%;height:100%;left:0}#playbox div{background:#333;cursor:pointer;display: block;}div a{color: #eeeedd;padding: 5px;width:'+(si.s-25)+'px;text-overflow: ellipsis;overflow: hidden;display:inline-block;}div img{width:'+si.t+'px; height:'+si.t+'px;} #namebox p{font-size:20px}</style>');
ad('<style type="text/css">#playbox::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);background-color:#eeeedd;}#playbox::-webkit-scrollbar{width: 10px;background-color: #F5F5F5;}#playbox::-webkit-scrollbar-thumb{background-color: #0ae;background-image: -webkit-gradient(linear, 0 0, 0 100%,color-stop(.5, rgba(255, 255, 255, .2)),color-stop(.5, transparent), to(transparent));}</style>');
ad('<style type="text/css">input[type=range]{-webkit-appearance:none;outline:none;width:160px;height:9px;border-radius:4px;border:1px solid #252525;float:left;background-color:#f3f3f3;margin-left:0px;margin-top:0px;}input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;background-color:#0ae;width:8px;height:7px;}</style>')
w=$("#music").innerWidth();h=$("#music").innerHeight();
css={"sb":{"bottom":(-si.t)+'px',"right":0,'width':si.t+'px','height':si.t+'px',"z-index":"997"},"pb":{"width":si.m+"px","height":si.m+"px","bottom":(h/2)+"px","right":w+"px","z-index": "999"},"bx":{"bottom":0,"float":'top',"right":0,"z-index":"998"},};
a=new Audio('');a.volume=0.5;a.addEventListener('ended',function(){op.r?ne():(point(op.c),play());});
obj.p=$("#play").css(css.pb);obj.p.on("mousedown", function(e){e.button==2?open():play()});
obj.l=$("#playbox");obj.l.css(css.bx).css({"width":(si.s+25)+'px'});
obj.n=$("#namebox");obj.n.css(css.bx).css({"left":0,"bottom":-obj.n.innerHeight(),"backgroundColor":"aqua","z-index":"996"});	
obj.s=$("#volume");obj.s.css({"bottom":(-si.t)+'px',"right":0,'width':(si.s-si.m-si.t*3)+'px',/*'height':si.t+'px',*/"z-index":"997"});
obj.e=$("#mp-end").css(css.sb).on("click",function(){ne()});
obj.b=$("#mp-begin").css(css.sb).on("click", function(){ne(op.c-2)});
obj.c=$("#mp-control").css(css.sb).on("click",rp);
console.log(w + "/" + h);
item(load("http://549.ipdisk.co.kr/Music/?dir=MusicList"));
opening()
}
function point(p){
if(p=>si.c)op.c=0;if(p<0)op.c=si.c-1;
op.c=p;
if(op.n===list[op.c].name&&op.r)return;
op.p&&play();
a.src = list[op.c].dir;
op.n=list[op.c].name;
op.s=true;
a.load()
}
function play() {
if (!op.s)return;
$($("#playbox").find('a')[op.c]).parent().addClass("active").siblings().removeClass('active');
op.p?a.pause():(a.play(),na());
op.p=!op.p;
obj.p.attr({"src":imgs+(op.p?"play1.png":"pause1.png")})
}

function item(l,z=false){
var t='';
for(var i in l)t+='<div><a>'+l[i].name+'</a><img id="remove" src="'+imgs+'remove.png"></div>';
si.c=l.length;list=l;
obj.l[0].innerHTML=t;obj.l.css({"overflow-y":si.c>5?"scroll":"hidden","overflow-x":"hidden","height":(si.i*(si.c>5?5:si.c))+'px'});obj.l.find('a').on("click",function(e){e.preventDefault();ne($(this).parent().index()-1)});obj.l.find('img').on("click", function(e){e.preventDefault();var p=$(this).parent();re(p.index());p.remove()});
$($("#playbox").find('a')[op.c]).parent().addClass("active").siblings().removeClass('active');
m=obj.l.innerHeight();r=obj.l.innerWidth()-si.m;
z&&obj.p.animate({"bottom":m+"px","right":r+'px'},si.b);z&&op.o&&(obj.e.animate({"bottom":m+'px',"right":(r-si.t*2)+"px"},si.b),obj.b.animate({"bottom":m+'px',"right":(r-si.t)+"px"},si.b),obj.c.animate({"bottom":m+'px'},si.b),obj.s.animate({"bottom":m+"px"},si.b));
si.c<=5&&obj.l.find('a').css({"width":(si.s-15)+'px'})
}

function load(b) {
var l=[];
$.ajax({url:b,type:'post',dataType:'json',async:false,success:function(e) {for(var i in e){var a={};a.dir="http://"+encodeURI(e[i].host+e[i].dir+e[i].name);a.name=e[i].name.substring(0,e[i].name.lastIndexOf('.'));l.push(a);}
},error:function() {
l=[{dir:"http://549.ipdisk.co.kr/Music/MusicList/CLICK%5BClariS%5D.mp3",name:"CLICK[ClariS]"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/Coloring%5BHorie%20Yui%5D.mp3",name:"Coloring[Horie Yui]"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/Kimi%20to%20Boku%5BHorie%20Yui%5D.mp3",name:"Kimi to Boku[Horie Yui]"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/LUVORATORRRRRY!%20ver%20%E3%82%8C%E3%82%92%E3%82%8B%20feat.nqrse.mp3",name:"LUVORATORRRRRY! ver �뚣굮�� feat.nqrse"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/P0k3r%20FaC3%5BHorie%20Yui%5D.mp3",name:"P0k3r FaC3[Horie Yui]"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/Sweet%20&%20Sweet%20CHERRY.mp3",name:"Sweet & Sweet CHERRY"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/monochrome.mp3",name:"monochrome"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/reunion%5BClariS%5D.mp3",name:"reunion[ClariS]"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/second%20story%5BClariS%5D.mp3",name:"second story[ClariS]"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/%E3%83%99%E3%82%B9%E3%83%88%E3%83%95%E3%83%AC%E3%83%B3%E3%83%89.mp3",name:"�쇻궧�덀깢�с꺍��"},
{dir:"http://549.ipdisk.co.kr/Music/MusicList/%ED%98%BC%EC%9E%A3%EB%A7%90(%E3%83%92%E3%83%88%E3%83%AA%E3%82%B4%E3%83%88)%5BClariS%5D.mp3",name:"�쇱옡留�(�믡깉�ゃ궡��)[ClariS]"}];
}
});
return l;
}
function open() {
eve&&clearTimeout(eve);
if (op.o==false){obj.l.animate({"bottom":0+"px"},si.b);obj.e.animate({"bottom":m+'px',"right":(r-si.t*2)+"px"},si.b);obj.b.animate({"bottom":m+'px',"right":(r-si.t)+"px"},si.b);obj.p.animate({"bottom":m+"px","right":r+'px'},si.b);obj.s.animate({"bottom":m+"px","right":si.t},si.b);obj.c.animate({"bottom":m+"px","right":0},si.b)
}else{obj.e.animate({"bottom":-si.t+'px',"right":0},si.b);obj.b.animate({"bottom":-si.t+'px',"right":0},si.b);obj.c.animate({"bottom":-si.t+'px',"right":0},si.b);obj.s.animate({"bottom":-si.t+"px","right":0},si.b);obj.p.animate({"bottom":0,"right":0},si.b);obj.l.animate({"bottom":-m+"px"},si.b)}
op.o=!op.o
}
$(function(){init()})
