//第一关刷怪
first()
function first(){
    setTimeout(()=>{
        createmob();
        createmob();
        createmob();
    },1000)
    setTimeout(()=>{
        createmob();
        createmob();
        createmob();
    },5000)
    setTimeout(()=>{
        createmob();
        createmob();
        createmob();
    },5000)
    setTimeout(()=>{
        createmob();
        createmob();
        createmob();
        createmob();
    },10000)
    setTimeout(()=>{
        createmob();
        createmob();
        createmob();
        createmob();
    },20000)
    setTimeout(()=>{
        createmob();
        createmob();
        createmob();
        createmob();
    },30000)
    setTimeout(()=>{
        createmob();
        createmob();
        createmob();
        createmob();
        createmob();
    },40000)
    setTimeout(()=>{
        createmob();
        createmob();
        createmob();
        createmob();
        createmob();
    },50000)   
    setTimeout(()=>{
      createmob();
        createmob();
        createmob();
        createmob();  
        boss1_create();
        first_boss_skill(); 
    },60000)
}

//第一关boss创建
function boss1_create(){
            var mob = document.createElement('p');
            mob.id= "boss_first";
            mob.style.position='absolute';
            mob.style.top='0%'
            mob.heath=100;
            mob.innerHTML='<div class="bossmobbar"><div class="mobbar2" style="width: 200px;"></div></div><img src="https://image.mc9y.com/2022/05/26/9b4000086b02d.jpeg" width="200">';
            mob.style.left="30%";
            mob.className='mob';
            box.appendChild(mob);
            mobAI();
}
//boss子弹特殊创建
function create_bossfirst_Attack(mob){
    var mobAttack = document.createElement('p');
    mobAttack.style.width='10px';
    mobAttack.style.height='10px';
    mobAttack.style.position='absolute';
    mobAttack.style.backgroundColor='red';
    mobAttack.style.borderRadius='5px';
    mobAttack.style.top=parseFloat(mob.style.top)+mob.scrollHeight+'px';
    mobAttack.style.left=parseFloat(mob.style.left)+20+'%';
    mobAttack.className='bossAttack';
    box.appendChild(mobAttack);
}
//boss发射子弹
function boss_firstAttack(){
       var mob = document.querySelector('#boss_first');
        create_bossfirst_Attack(mob);
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
                        end1()
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
    setInterval(()=>{
        setTimeout(()=>{
            boss_firstAttack()
            movebossAttack(0,2)
            boss_firstAttack()
            movebossAttack(0,2)
            boss_firstAttack()
            movebossAttack(0.1,2)
            boss_firstAttack()
            movebossAttack(0.2,2)
            boss_firstAttack()
            movebossAttack(0.3,2)
            boss_firstAttack()
            movebossAttack(0.4,2)
            boss_firstAttack()
            movebossAttack(0.5,2)
            boss_firstAttack()
            movebossAttack(-0.1,2)
            boss_firstAttack()
            movebossAttack(-0.2,2)
            boss_firstAttack()
            movebossAttack(-0.3,2)
            boss_firstAttack()
            movebossAttack(-0.4,2)
            boss_firstAttack()
            movebossAttack(-0.5,2)
        },1000);
        setTimeout(()=>{
            boss_firstAttack()
            movebossAttack(0,2)
            boss_firstAttack()
            movebossAttack(0,2)
            boss_firstAttack()
            movebossAttack(0.1,2)
            boss_firstAttack()
            movebossAttack(0.2,2)
            boss_firstAttack()
            movebossAttack(0.3,2)
            boss_firstAttack()
            movebossAttack(0.4,2)
            boss_firstAttack()
            movebossAttack(-0.1,2)
            boss_firstAttack()
            movebossAttack(-0.2,2)
            boss_firstAttack()
            movebossAttack(-0.3,2)
            boss_firstAttack()
            movebossAttack(-0.4,2)
        },3000);
        setTimeout(()=>{
            boss_firstAttack()
            movebossAttack(0,2)
            boss_firstAttack()
            movebossAttack(0,2)
            boss_firstAttack()
            movebossAttack(0.1,2)
            boss_firstAttack()
            movebossAttack(0.2,2)
            boss_firstAttack()
            movebossAttack(0.3,2)
            boss_firstAttack()
            movebossAttack(0.4,2)
            boss_firstAttack()
            movebossAttack(0.5,2)
            boss_firstAttack()
            movebossAttack(-0.1,2)
            boss_firstAttack()
            movebossAttack(-0.2,2)
            boss_firstAttack()
            movebossAttack(-0.3,2)
            boss_firstAttack()
            movebossAttack(-0.4,2)
            boss_firstAttack()
            movebossAttack(-0.5,2)
        },3500);
        setTimeout(()=>{
            boss_firstAttack()
            movebossAttack(0,2)
            boss_firstAttack()
            movebossAttack(0,2)
            boss_firstAttack()
            movebossAttack(0.1,2)
            boss_firstAttack()
            movebossAttack(0.2,2)
            boss_firstAttack()
            movebossAttack(0.3,2)
            boss_firstAttack()
            movebossAttack(0.4,2)
            boss_firstAttack()
            movebossAttack(0.5,2)
            boss_firstAttack()
            movebossAttack(-0.1,2)
            boss_firstAttack()
            movebossAttack(-0.2,2)
            boss_firstAttack()
            movebossAttack(-0.3,2)
            boss_firstAttack()
            movebossAttack(-0.4,2)
            boss_firstAttack()
            movebossAttack(-0.5,2)
        },4000);
    },6000);
    setInterval(()=>{
        boss_firstAttack()
        movebossAttack(0,2)
        boss_firstAttack()
        movebossAttack(0.2,2)
        boss_firstAttack()
        movebossAttack(-0.2,2)
    },500)
    setInterval(()=>{
        var a1=setInterval(()=>{
            boss_firstAttack()
            movebossAttack(0,2)
            boss_firstAttack()
            movebossAttack(0.1,2)
            boss_firstAttack()
            movebossAttack(0.15,2)
            boss_firstAttack()
            movebossAttack(-0.15,2)
            boss_firstAttack()
            movebossAttack(0.2,2)
            boss_firstAttack()
            movebossAttack(0.25,2)
            boss_firstAttack()
            movebossAttack(-0.25,2)
            boss_firstAttack()
            movebossAttack(0.3,2)
            boss_firstAttack()
            movebossAttack(0.4,2)
            boss_firstAttack()
            movebossAttack(0.5,2)
            boss_firstAttack()
            movebossAttack(-0.1,2)
            boss_firstAttack()
            movebossAttack(-0.2,2)
            boss_firstAttack()
            movebossAttack(-0.3,2)
            boss_firstAttack()
            movebossAttack(-0.4,2)
            boss_firstAttack()
            movebossAttack(-0.5,2)
        },500)
        setTimeout(()=>{
            clearInterval(a1);
        },3000);
    },15000)
}