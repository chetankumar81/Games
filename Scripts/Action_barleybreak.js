﻿var result,count,win,stop,time,c;window.onload=load;
function shuffle(o){for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);return o;};
function check(){stop=true;for(l=0;l<win.length;l++)if(win[l]!=count[l])stop=false;return stop;}
function oneline(n,m){return Math.floor(n/4)==Math.floor(m/4);}
function swap(a,b){$('#'+(b)).html(count[a]);$('#'+(a)).html('');count[a]+=count[b];count[b]=count[a]-count[b];count[a]-=count[b];
result=$("#out").html();result++;$("#out").text(result);stop=check();if(stop){alert("Congratulations");stopTimer();}}
function choose(num){if(!stop){if(count[num+4]==0)swap(num,num+4);if(count[num-4]==0)swap(num,num-4);
if(count[num+1]==0&&oneline(num,num+1))swap(num,num+1);if(count[num-1]==0&&oneline(num,num-1))swap(num,num-1);}}
function startTimer(){c=setInterval(function (){time++;$("#timer").text(time);},1000)}
function stopTimer(){clearInterval(c);}
function load(){ count=[];win=[];stop=false;stopTimer();startTimer();
for (p = 0; p < 16; p++){count.push(p);if(p>0)win.push(p);$('td').attr("id",function(p){return p;});}win.push(0);
result = 0;time=0;$("#out").text(result);$("#timer").text(time);
count = shuffle(count);for (p = 0; p < count.length; p++) {$('#'+(p)).html((count[p]!=0?count[p]:''));}}
$(document).ready(function (){$('td').click(function(){choose(+($(this).attr('id')));});});