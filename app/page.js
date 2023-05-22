"use client"
import React from 'react';

import { useRouter } from 'next/router';

export default function Home() {
 

  return (
    <> 
  <section className="home" id="home">
<div className="swiper home-slider">
<div className="swiper-wrapper">
<div
className="swiper-slide slide"
style={{ background: 'url(image/product_01.jpg) no-repeat' }}
>
<div className="content">
<a href="#" className="btn" onClick={() => router.push('/cartProducts')}>
shop now
</a>
</div>
</div>
</div>
</div>
</section>

<div id="hd">
    
  </div>
  <div id="bd">
    <div id="yui-main">
      <div class="yui-b">
        <div class="yui-g">
          <div class="yui-u first">
            <div class="content"><img src="image/product_03.jpg" alt="Description de l'image" width={800} height={100} /></div>
          </div>
          <div class="yui-u">
            <div class="content"><div class="content"><img src="image/product_07.jpg" alt="Description de l'image" width={800} height={100} /></div></div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div id="ft">
    
  </div>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
      <video controls>
        <source src="image/yt5s.com-iPhone 12 Pro Apple _chaque vidéo devient un grand film_ Pub 30s(720p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  <style>{`
        
        */
/* for all templates and grids */
body{text-align:center;}
#ft{clear:both;}
/**/
/* 750 centered, and backward compatibility */ 
#doc,#doc2,#doc3,.yui-t1,.yui-t2,.yui-t3,.yui-t4,.yui-t5,.yui-t6,.yui-t7 {
	margin:auto;text-align:left;
	width:57.69em;*width:56.3em;min-width:750px;}
/* 950 centered */ 
#doc2 {
	width:73.074em;*width:71.313em;min-width:950px;}
/* 100% with 10px viewport side matting */ 
#doc3 {
	margin:auto 10px; /* not for structure, but so content doesn't bleed to edge */
	width:auto;}
	
/* below required for all fluid grids; adjust widths and margins above accordingly */

	/* to preserve source-order independence for Gecko */
	.yui-b{position:relative;}
	.yui-b{_position:static;} /* for IE < 7 */
	#yui-main .yui-b{position:static;} 

#yui-main {width:100%;}
.yui-t1 #yui-main,
.yui-t2 #yui-main,
.yui-t3 #yui-main{float:right;margin-left:-25em;/* IE: preserve layout at narrow widths */}

.yui-t4 #yui-main,
.yui-t5 #yui-main,
.yui-t6 #yui-main{float:left;margin-right:-25em;/* IE: preserve layout at narrow widths */}

.yui-t1 .yui-b {
	float:left;
    width:12.3207em;*width:12.0106em;}
.yui-t1 #yui-main .yui-b{
    margin-left:13.3207em;*margin-left:13.0106em;
}

.yui-t2 .yui-b {
	float:left;
    width:13.8456em;*width:13.512em;}
.yui-t2 #yui-main .yui-b {
    margin-left:14.8456em;*margin-left:14.512em;
}

.yui-t3 .yui-b {
	float:left;
    width:23.0759em;*width:22.52em;}
.yui-t3 #yui-main .yui-b {
    margin-left:24.0759em;*margin-left:23.52em;
}

.yui-t4 .yui-b {
	float:right;
    width:13.8456em;*width:13.512em;}
.yui-t4 #yui-main .yui-b {
    margin-right:14.8456em;*margin-right:14.512em;
}

.yui-t5 .yui-b {
	float:right;
    width:18.4608em;*width:18.016em;}
.yui-t5 #yui-main .yui-b {
    margin-right:19.4608em;*margin-right:19.016em;
}

.yui-t6 .yui-b {
	float:right;
    width:23.0759em;*width:22.52em;}
.yui-t6 #yui-main .yui-b {
    margin-right:24.0759em;*margin-right:23.52em;
}

.yui-t7 #yui-main .yui-b {
	display:block;margin:0 0 1em 0;
}
#yui-main .yui-b {float:none;width:auto;}
/* GRIDS (not TEMPLATES) */
.yui-g .yui-u, 
.yui-g .yui-g, 
.yui-gc .yui-u,
.yui-gc .yui-g .yui-u,
.yui-ge .yui-u, 
.yui-gf .yui-u{float:right;display:inline;}
.yui-g div.first, 
.yui-gc div.first,
.yui-gc div.first div.first,
.yui-gd div.first, 
.yui-ge div.first, 
.yui-gf div.first{float:left;}
.yui-g .yui-u, 
.yui-g .yui-g{width:49.1%;}
.yui-g .yui-g .yui-u,
.yui-gc .yui-g .yui-u {width:48.1%;}
.yui-gb .yui-u, 
.yui-gc .yui-u, 
.yui-gd .yui-u{float:left;margin-left:2%;*margin-left:1.895%;width:32%;}
.yui-gb div.first, 
.yui-gc div.first, 
.yui-gd div.first{margin-left:0;}
.yui-gc div.first, 
.yui-gd .yui-u{width:66%;}
.yui-gd div.first{width:32%;}
.yui-ge .yui-u{width:24%;}
.yui-ge div.first, 
.yui-gf .yui-u{width:74.2%;}
.yui-gf div.first{width:24%;}
.yui-ge div.first{width:74.2%;}
#bd:after,
.yui-g:after, 
.yui-gb:after, 
.yui-gc:after, 
.yui-gd:after, 
.yui-ge:after, 
.yui-gf:after{content:".";display:block;height:0;clear:both;visibility:hidden;}
#bd,
.yui-g, 
.yui-gb, 
.yui-gc, 
.yui-gd, 
.yui-ge, 
.yui-gf{zoom:1;}


/* Basic Element Formatting */

#header{
	height:100px;
	background-color:#F3F2ED;
	margin:0;
	padding:0;
	}
	
#header h1{
	font-size:1em;
	margin:0;
	padding:10px;
	}
	
#header h1 a{
	color:#000000;
	background-color:#F3F2ED;
	}
	
.content{
	height:300px;
	background:#CCC8B3;
	border-top:#FFFFFF 2px solid;
	margin:0;
	padding:0;
	}
	
#secondary{
	height:300px;
	background:#F6F0E0;
	border-top:#FFFFFF 2px solid;
	margin:0;
	padding:0;
	}
	
#secondaryFull{
	height:50px;
	background-color:#CFB59F;
	border-top:#FFFFFF 2px solid;
	margin:0;
	padding:0;
	}
	
#footer{
	height:50px;
	background:#BFBD93;
	border-top:#FFFFFF 2px solid;
	margin:0;
	padding:0;
	} 
        
      `}</style>






    </>
  )
}
