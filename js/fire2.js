//第一关刷怪
first()
function first(){
        boss1_create()
        first_boss_skill()
    setTimeout(()=>{
        var mob = document.querySelector('#boss_first');
        mob.style.display='block';
    },20000)
    
}

//第二关boss创建
function boss1_create(){
            var mob = document.createElement('p');
            mob.id= "boss_first";
            mob.style.position='absolute';
            mob.style.top='0%'
            mob.heath=200;
            mob.innerHTML='<div class="bossmobbar"><div class="mobbar2" style="width:200px;"></div></div><img src="https://image.mc9y.com/2022/05/26/e0ab2a1e2e2a5.png" width="200">';
            mob.style.left="40%";
            mob.style.display='none';
            mob.className='mob1';
            box.appendChild(mob);
}
//boss子弹特殊创建
function create_bossfirst_Attack(mob){
    var mobAttack = document.createElement('p');
    mobAttack.style.width='10px';
    mobAttack.style.height='10px';
    mobAttack.style.position='absolute';
    mobAttack.style.backgroundColor='black';
    mobAttack.style.borderRadius='5px';
    mobAttack.style.top=parseFloat(mob.style.top)+mob.scrollHeight+'px';
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
                 setInterval(()=>{
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
//boss血条变化
function bossmobbar(mob){
    var bar = mob.querySelector('.bossmobbar').querySelector('.mobbar2');
    bar.style.width=parseInt(bar.style.width)-1+'px';
}
 //子弹发射技能组
function first_boss_skill(){
    setTimeout(()=>{
        setTimeout(()=>{
        leap();
        skill3();
        },1000)
        setTimeout(()=>{
            leap();
            skill3();
        },2000)
        setTimeout(()=>{
            leap();
            skill3();
        },3000)
        setTimeout(()=>{
            summon();
        },4000)
        setTimeout(()=>{
            skill2();
        },8000)
        setTimeout(()=>{
            leap();
            skill3();
        },16000)
        setTimeout(()=>{
            leap();
            skill3();
        },18000)
        setTimeout(()=>{
            skill2();
        },20000)
    },2000);
    setInterval(()=>{
        setTimeout(()=>{
            leap();
            skill3();
            },1000)
            setTimeout(()=>{
                leap();
                skill3();
            },2000)
            setTimeout(()=>{
                leap();
                skill3();
            },3000)
            setTimeout(()=>{
                summon();
            },4000)
            setTimeout(()=>{
                skill2();
            },8000)
            setTimeout(()=>{
                leap();
                skill3();
            },16000)
            setTimeout(()=>{
                leap();
                skill3();
            },18000)
            setTimeout(()=>{
                skill2();
            },20000)
    },30000)
    setTimeout(()=>{
        damage();
    },2000)
}

//boss瞬移
function leap(){
    var mob = document.querySelector('#boss_first');
    var random = Math.floor(Math.random()*5)
    switch(random){
        case 1:
            mob.style.left='0%';
            mob.style.top='0%';
            break;
        case 2:
            mob.style.left='60%';
            mob.style.top='10%';
            break;
        case 3:
            mob.style.left='30%';
            mob.style.top='20%';
            break;
        case 4:
            mob.style.left='60%';
            mob.style.top='30%';
            break;
    }
}
//场中间放技能 (技能持续5秒)
function skill2(){
    var mob = document.querySelector('#boss_first');
    mob.style.left='30%';
    mob.style.top='30%';
    setTimeout(()=>{
        var a1=setInterval(()=>{
            boss_firstAttack(0.05,2);
            boss_firstAttack(-0.05,2);
            skill3()
        },500);
        setTimeout(()=>{
            clearInterval(a1);
            mob.style.left='30%';
            mob.style.top='0%';
        },5000)
    },1000);
}
//boss普攻
function damage(){
    var mob = document.querySelector('#boss_first');
    setInterval(()=>{
            boss_firstAttack(0.1,2);
            boss_firstAttack(0,2);
            boss_firstAttack(-0.1,2);
    },500)
}
//boss召唤小怪
function summon(){
    var mob = document.querySelector('#boss_first');
    if(mob.heath<100){
        createmob();
        createmob();
        createmob();
        createmob();
        createmob();
        var mobs = document.querySelectorAll(".mob1");
        for(var i=0;i<mobs.length;i++){
            var mob1=mobs[i];
            mob1.style.top='50%';
        }
    }
    
}
//弹幕
function skill3(){
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
