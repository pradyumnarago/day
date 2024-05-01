
function year(){
        let y=parseInt(document.getElementById("year").value);
        let m=document.getElementById("month").value;
        let d=parseInt(document.getElementById("date").value);
        let z=-1,i,status,e,rem,out,month;
        month=m;
        for(i=1;i<=y;i++){
            if(z==6){
                z=0;
            }else{
                z=z+1;
            }
            if((((i)%4==0)&&((i)%100!=0))||((i)%400==0)){
                status=1;
                if(z==6){
                    z=0;
                }else{
                    z=z+1;
                }
            }else{
                status=0;
            }
        }
        m=m.toLowerCase();
        if(m[0]=='j'){
            if(m[1]=='a'){
                if(status==1){
                    m=0;
                }else{
                    m=1;
                }
                e=31;
            }else if(m[1]=='u'){
                if(m[2]=='n'){
                    m=5;
                    e=30;
                }else if(m[2]=='l'){
                    m=0;
                    e=31
                }else{
                    m=10;
                }
            }else{
                m=10;
            }
        }else if((m[0]=='f')&&(m[1]=='e')){
            if(status==0){
                m=4;
                e=28;
            }else{
                m=3;
                e=29;
            }
        }else if(m[0]=='m'){
            if(m[2]=='r'){
                m=4;
                e=31;
            }else if(m[2]=='y'){
                m=2;
                e=31;
            }else{
                m=10;
            }
        }else if(m[0]=='a'){
            if(m[1]=='p'){
                m=0;
                e=30;
            }else if(m[1]=='u'){
                m=3;
                e=31;
            }else{
                m=10;
            }
        }else if((m[0]=='s')&&(m[1]=='e')){
            m=6;
            e=30;
        }else if((m[0]=='o')&&(m[1]=='c')){
            m=1;
            e=31;
        }else if((m[0]=='n')&&(m[1]=='o')){
            m=4;
            e=30;
        }else if((m[0]=='d')&&(m[1]=='e')){
            m=6;
            e=31;
        }else{
            m=10;
        }
        if(d<=e){

        }else{
            m=10;
        }

        if(m==10){
            out=' has never existed and will never exist!!!!';
        }else{
            rem=((d/1)+(m/1)+(z/1))%7;
        }
            switch (rem) {
                case 1:out='is a sunday.';
                    
                    break;
                case 2:out='is a monday.';

                    break;
                case 3:out='is a tuesday.';
                
                    break;
                case 4:out=' is a wednesday.';

                    break;
                case 5:out=' is a thursday.';

                    break;
                case 6:out=' is a friday.';

                    break;
                case 0:out=' is a saturday.';

                    break;
                default:out=' has never existed and will never exist!!!!';

                    break;
            }
        
        document.getElementById("output").innerHTML=d+'/'+month+'/'+y+' '+out;
        document.getElementById("thank").innerHTML='Thank you for visiting my site. You can try again with a differnt day by entering it in the above feilds and press "ok". Thank you very much.';
    
    }
