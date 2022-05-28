//刷怪
first()
function first(){
        boss1_create() 
        first_boss_skill()
}

//第三关boss创建
function boss1_create(){
            var mob = document.createElement('p');
            mob.id= "boss_first";
            mob.style.position='absolute';
            mob.style.top='0%'
            mob.heath=400;
            mob.innerHTML='<div class="bossmobbar"><div class="mobbar2" style="width:200px;"></div></div><img src="https://image.mc9y.com/2022/05/28/97e14c663ba1d.png" width="200">';
            mob.style.left="40%";
            mob.style.display='block';
            mob.className='mob1';
            box.appendChild(mob);
}
//boss子弹特殊创建
function create_bossfirst_Attack(mob){
    var mobAttack = document.createElement('p');
    mobAttack.style.width='10px';
    mobAttack.style.height='10px';
    mobAttack.style.position='absolute';
    mobAttack.style.backgroundColor='white';
    mobAttack.style.borderRadius='5px';
    mobAttack.style.top=parseFloat(mob.style.top)+50+'px';
    mobAttack.style.left=parseFloat(mob.style.left)+20+'%';
    mobAttack.className='bossAttack';
    box.appendChild(mobAttack);
}
//boss发射子弹
function boss_firstAttack(x,y){
       var mob = document.querySelector('#boss_first');
        create_bossfirst_Attack(mob);
        var x=x;
        var y = y;
        movebossAttack(x,y)
}
//boss子弹移动
function movebossAttack(x,y){
    var attacks = document.querySelectorAll('.bossAttack'); 
         for(var i=0;i<attacks.length;i++){
             ((i)=>{
                 var attack = attacks[i];
                 attack.className='bossAttack1';
               let a1=setInterval(()=>{
                     attack.style.top = parseFloat(attack.style.top)+y+'px';
                     attack.style.left = parseFloat(attack.style.left)+x+'%';
                     if(parseInt(attack.style.top)>650){
                         attack.remove();  
                     }
                     if(parseInt(attack.style.top)<0){
                        attack.remove();  
                    }
                     if(parseInt(attack.style.left)<0||parseInt(attack.style.left)>100){
                        attack.remove();
                    }
                 },10);
                 setTimeout(()=>{
                    clearInterval(a1);
                },5000)
             })(i)
         }
 }
 //boss子弹命中玩家
 function Damageplayer1(){
    var mobAttacks=document.querySelectorAll('.bossAttack1');
    for(var i=0;i<mobAttacks.length;i++){
        (function(i){
            var mobAttack = mobAttacks[i];
            if(mobAttack.offsetLeft>plant.offsetLeft&&mobAttack.offsetLeft<plant.offsetLeft+plant.scrollWidth){
                if(mobAttack.offsetTop>plant.offsetTop&&mobAttack.offsetTop<plant.offsetTop+plant.scrollHeight){
                   mobAttack.remove();
                   plant.health-=5;
                   var health=planthealth.querySelector('p');
                   health.style.width=plant.health*2+'px';
                   if(plant.health<0){
                        end();
                        plant.remove()
                   }
                }
            }
        })(i)
    }
}




//自定义位置子弹创建
function create_position_Attack(x,y){
    var mobAttack = document.createElement('p');
    mobAttack.style.width='10px';
    mobAttack.style.height='10px';
    mobAttack.style.position='absolute';
    mobAttack.style.backgroundColor='white';
    mobAttack.style.borderRadius='5px';
    mobAttack.style.top=y+'px';
    mobAttack.style.left=x+'%';
    mobAttack.className='bossAttack';
    box.appendChild(mobAttack);
}
//自定义子弹发射
function position_Attack(x,y,speedx,speedy){
        create_position_Attack(x,y);
        var speedx=speedx;
        var speedy=speedy;
        setTimeout(()=>{
            movepositionAttack(speedx,speedy);
        },1000)
        
}
//自定义子弹移动
function movepositionAttack(speedx,speedy){
    var attacks = document.querySelectorAll('.bossAttack'); 
         for(var i=0;i<attacks.length;i++){
             ((i)=>{
                var attack = attacks[i];
                attack.className='bossAttack1';
                let a1=setInterval(()=>{
                     attack.style.top = parseFloat(attack.style.top)+speedy+'px';
                     attack.style.left = parseFloat(attack.style.left)+speedx+'%';
                     if(parseInt(attack.style.top)>650){
                         attack.remove();  
                     }
                     if(parseInt(attack.style.top)<0){
                        attack.remove();  
                    }
                     if(parseInt(attack.style.left)<0||parseInt(attack.style.left)>100){
                        attack.remove();
                    }
                 },10);
                 setTimeout(()=>{
                    clearInterval(a1);
                },5000)
             })(i)
         }
 }

//boss血条变化
function bossmobbar(mob){
    var bar = mob.querySelector('.bossmobbar').querySelector('.mobbar2');
    bar.style.width=parseFloat(bar.style.width)-0.5+'px';
}
 //子弹发射技能组
function first_boss_skill(){
    var mob = document.querySelector("#boss_first");
    setInterval(()=>{
        skill4()
    },2000);
    setTimeout(()=>{
        setTimeout(()=>{
            skill1();
        },1000)
        setTimeout(()=>{
            skill2();
        },10000)
        setTimeout(()=>{
            skill3();
        },20000)
        setTimeout(()=>{
            skill5();
            leap();
        },26000)
        setTimeout(()=>{
            skill5();
            leap();
        },27000)
        setTimeout(()=>{
            skill5();
            leap();
        },28000)
    },10)
    setInterval(()=>{
        setTimeout(()=>{
            skill1();
        },1000)
        setTimeout(()=>{
            skill2();
        },10000)
        setTimeout(()=>{
            skill3();
        },20000)
        setTimeout(()=>{
            skill5();
            leap();
        },26000)
        setTimeout(()=>{
            skill5();
            leap();
        },27000)
        setTimeout(()=>{
            skill5();
            leap();
        },26000)
    },28000)  
    var a1=setInterval(()=>{
        if(mob.heath<200){
            boss_range_two()
            clearInterval(a1);
        }
    },100);
}
//天降弹幕技能
function skill1(){
    setTimeout(()=>{
        var nub=0;
        for(let i =0;i<10;i++){
        nub+=5;
        position_Attack(nub,0,0,5);
    }
    leap();
    },0)
    setTimeout(()=>{
        var nub=30;
        for(let i =0;i<10;i++){
        nub+=5;
        position_Attack(nub,0,0,5);
    }
    leap();
    },3000)
    setTimeout(()=>{
        var nub=10;
        for(let i =0;i<15;i++){
        nub+=5;
        position_Attack(nub,0,0,5);
    }
    leap();
    },6000)
}
//两边向中间发射子弹
function skill2(){
    position_Attack(0,650,1,0)
    position_Attack(0,550,1,0)
    position_Attack(0,450,1,0)
    position_Attack(0,350,1,0)
    position_Attack(0,250,1,0)
    position_Attack(0,150,1,0) 
    leap();
    setTimeout(()=>{
        position_Attack(100,600,-1,0)
        position_Attack(100,500,-1,0)
        position_Attack(100,400,-1,0)
        position_Attack(100,300,-1,0)
        position_Attack(100,200,-1,0)
        position_Attack(100,100,-1,0) 
        leap();
    },2000)
    setTimeout(()=>{
        position_Attack(0,650,1,0)
        position_Attack(0,600,1,0)
        position_Attack(0,550,1,0)
        position_Attack(0,500,1,0)
        position_Attack(0,400,1,0)
        position_Attack(0,350,1,0) 
        position_Attack(0,300,1,0) 
        position_Attack(0,250,1,0) 
        position_Attack(0,200,1,0) 
        leap();
    },4000)
    setTimeout(()=>{
        position_Attack(0,650,1,0)
        position_Attack(0,600,1,0)
        position_Attack(0,550,1,0)
        position_Attack(0,500,1,0)
        position_Attack(0,450,1,0)
        position_Attack(0,400,1,0) 
        position_Attack(0,300,1,0) 
        position_Attack(0,250,1,0) 
        position_Attack(0,200,1,0) 
        position_Attack(0,150,1,0) 
        position_Attack(0,100,1,0) 
        position_Attack(0,50,1,0) 
        leap();
    },6000)
    setTimeout(()=>{
        position_Attack(0,0,0,5);
        position_Attack(10,0,0,5);
        position_Attack(20,0,0,5);
        position_Attack(30,0,0,5);
        position_Attack(40,0,0,5);
        position_Attack(50,0,0,5);
        position_Attack(60,0,0,5);
        position_Attack(70,0,0,5);
        position_Attack(85,0,0,5);
        position_Attack(90,0,0,5);
        position_Attack(100,0,0,5);
        leap();
    },8000)
}
//boss瞬移到中间发射弹幕
function skill3(){
    var mob = document.querySelector("#boss_first");
    mob.style.left='30%';
    mob.style.top='30%';
    var a1=setInterval(()=>{
        boss_firstAttack(0.05,4);
        boss_firstAttack(0.1,4);
        boss_firstAttack(0.15,4);
        boss_firstAttack(0.2,4);
        boss_firstAttack(-0.15,4);
        boss_firstAttack(-0.1,4);
        boss_firstAttack(-0.15,4);
        boss_firstAttack(-0.2,4);
    },500)
    setTimeout(()=>{
        clearInterval(a1);
        mob.style.left='30%';
        mob.style.top='0%';
    },5000)
}
//boss普攻
function skill4(){
    var mob = document.querySelector('#boss_first');
    boss_firstAttack(0,4);
    boss_firstAttack(-0.15,4);
    boss_firstAttack(0.15,4);
    boss_firstAttack(-0.3,4);
    boss_firstAttack(0.3,4);
}
//boss瞬移
function leap(){
    var mob = document.querySelector("#boss_first");
    mob.style.left=Math.floor(Math.random()*80)+'%';
    mob.style.top='0%';
}
//弹幕
function skill5(){
    var mob = document.querySelector('#boss_first');
    if(mob.heath<140){
        boss_firstAttack(0.1,2);
        boss_firstAttack(-0.1,2);
        boss_firstAttack(0.13,2);
        boss_firstAttack(-0.13,2);
        boss_firstAttack(0.15,2);
        boss_firstAttack(-0.15,2);
    }
}

//半血二阶段
function boss_range_two(){
    var mob = document.querySelector("#boss_first");
    mob.style.left='30%';
    mob.style.top='30%';
    mob.style.display='none'
    setTimeout(()=>{
        mob.style.display='block';
    },10000)
}