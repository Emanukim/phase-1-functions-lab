function distanceFromHqInBlocks(b){
    if(b>42){
        return b-42;
    }
    else if (b<42){
        return 42-b;
    }
}

function distanceFromHqInFeet(f){
    if(f>42){
        return (f-42)*264;
    }
    else if (f<42){
        return (42-f)*264;
    }
}

function distanceTravelledInFeet(num1,num2){
    if(num1>num2){
        return (num1-num2)*264;
    }
    else if (num2>num1){
        return (num2-num1)*264;
    }
}

function calculatesFarePrice(d1,d2){
        if((d1-d2)*264 <= 400){
          return 0;
        }
         else if((d1-d2)*264 < 2000){
            return ((((d1-d2)*264)-400)*0.02);
         }
         else if(((d1-d2)*264) <= 2500){
            return 25;
         }
         else if((d1-d2)*264 > 2500){
          return "cannot travel that far";}
    }

