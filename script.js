    onload=calculateDay();
      function showDate(a){
        var mont=document.getElementById('selMon').value;
        var years=document.getElementById('selYear').value;
        if(a!='--'){
          document.getElementById('dateBox').innerHTML=a+"/"+mont+"/"+years;
        }
        //alert(a);
      }

      function showCalTable(){
        if(document.getElementById('calTable').style.visibility='hidden'){
          document.getElementById('calTable').style.visibility='visible';
        }else if(document.getElementById('calTable').style.visibility='visible'){
          document.getElementById('calTable').style.visibility='hidden';
        }
      }

      function calculateDay(){
        var mon = document.getElementById('selMon').value;
        var year = document.getElementById('selYear').value;

        if(year==2000){var yearDay=7;}
        else{var yearDay=((year-1999)+ Math.floor((year-2001)/4))%7; if(yearDay==0){yearDay=7;}}

        var day=7, monthEnd=31;
        switch(mon){
          case '01':
            monthEnd=31; day=yearDay; break;
          case '02':
            if(year%4==0){monthEnd=29; day=(yearDay+3)%7;}else{monthEnd=28; day=(yearDay+3)%7;} break;
          case '03':
            if(year%4==0){day=(yearDay+4)%7;}else{day=(yearDay+3)%7;} monthEnd=31; break;
          case '04':
            if(year%4==0){day=(yearDay+7)%7;}else{day=(yearDay+6)%7;} monthEnd=30; break;
          case '05':
            if(year%4==0){day=(yearDay+9)%7;}else{day=(yearDay+8)%7;} monthEnd=31; break;
          case '06':
            if(year%4==0){day=(yearDay+12)%7;}else{day=(yearDay+11)%7;} monthEnd=30; break;
          case '07':
            if(year%4==0){day=(yearDay+14)%7;}else{day=(yearDay+13)%7;} monthEnd=31; break;
          case '08':
            if(year%4==0){day=(yearDay+17)%7;}else{day=(yearDay+16)%7;} monthEnd=31; break;
          case '09':
            if(year%4==0){day=(yearDay+20)%7;}else{day=(yearDay+19)%7;} monthEnd=30; break;
          case '10':
            if(year%4==0){day=(yearDay+22)%7;}else{day=(yearDay+21)%7;} monthEnd=31; break;
          case '11':
            if(year%4==0){day=(yearDay+25)%7;}else{day=(yearDay+24)%7;} monthEnd=30; break;
          case '12':
            if(year%4==0){day=(yearDay+27)%7;}else{day=(yearDay+26)%7;} monthEnd=31; break;
          default: monthEnd=10; day=1;
        }
        if(day==0){day=7;}
        var dateCount=1, arr=[['--','--','--','--','--','--','--'],[],[],[],['--','--','--','--','--','--','--'],['--','--','--','--','--','--','--'],[]];
        for(var i=0; i<(day-1); i++){
          arr[0][i]='--';
        }
        while(i<=6){
          arr[0][i]=dateCount;
          dateCount++;
          i++;
        }
        for(var week=1; week<=5; week++){
          var i=0;
          while(dateCount<=monthEnd && i<=6){
            arr[week][i]=dateCount;
            dateCount++;
            i++;
          }
        }
        document.getElementById('calendarRow1').innerHTML="<td onclick=showDate('"+arr[0][0]+"')>"+arr[0][0]+"</td><td onclick=showDate('"+arr[0][1]+"')>"+arr[0][1]+"</td><td onclick=showDate('"+arr[0][2]+"')>"+arr[0][2]+"</td><td onclick=showDate('"+arr[0][3]+"')>"+arr[0][3]+"</td><td onclick=showDate('"+arr[0][4]+"')>"+arr[0][4]+"</td><td onclick=showDate('"+arr[0][5]+"')>"+arr[0][5]+"</td><td onclick=showDate('"+arr[0][6]+"')>"+arr[0][6]+"</td>";
        document.getElementById('calendarRow2').innerHTML="<td onclick=showDate('"+arr[1][0]+"')>"+arr[1][0]+"</td><td onclick=showDate('"+arr[1][1]+"')>"+arr[1][1]+"</td><td onclick=showDate('"+arr[1][2]+"')>"+arr[1][2]+"</td><td onclick=showDate('"+arr[1][3]+"')>"+arr[1][3]+"</td><td onclick=showDate('"+arr[1][4]+"')>"+arr[1][4]+"</td><td onclick=showDate('"+arr[1][5]+"')>"+arr[1][5]+"</td><td onclick=showDate('"+arr[1][6]+"')>"+arr[1][6]+"</td>";
        document.getElementById('calendarRow3').innerHTML="<td onclick=showDate('"+arr[2][0]+"')>"+arr[2][0]+"</td><td onclick=showDate('"+arr[2][1]+"')>"+arr[2][1]+"</td><td onclick=showDate('"+arr[2][2]+"')>"+arr[2][2]+"</td><td onclick=showDate('"+arr[2][3]+"')>"+arr[2][3]+"</td><td onclick=showDate('"+arr[2][4]+"')>"+arr[2][4]+"</td><td onclick=showDate('"+arr[2][5]+"')>"+arr[2][5]+"</td><td onclick=showDate('"+arr[2][6]+"')>"+arr[2][6]+"</td>";
        document.getElementById('calendarRow4').innerHTML="<td onclick=showDate('"+arr[3][0]+"')>"+arr[3][0]+"</td><td onclick=showDate('"+arr[3][1]+"')>"+arr[3][1]+"</td><td onclick=showDate('"+arr[3][2]+"')>"+arr[3][2]+"</td><td onclick=showDate('"+arr[3][3]+"')>"+arr[3][3]+"</td><td onclick=showDate('"+arr[3][4]+"')>"+arr[3][4]+"</td><td onclick=showDate('"+arr[3][5]+"')>"+arr[3][5]+"</td><td onclick=showDate('"+arr[3][6]+"')>"+arr[3][6]+"</td>";
        document.getElementById('calendarRow5').innerHTML="<td onclick=showDate('"+arr[4][0]+"')>"+arr[4][0]+"</td><td onclick=showDate('"+arr[4][1]+"')>"+arr[4][1]+"</td><td onclick=showDate('"+arr[4][2]+"')>"+arr[4][2]+"</td><td onclick=showDate('"+arr[4][3]+"')>"+arr[4][3]+"</td><td onclick=showDate('"+arr[4][4]+"')>"+arr[4][4]+"</td><td onclick=showDate('"+arr[4][5]+"')>"+arr[4][5]+"</td><td onclick=showDate('"+arr[4][6]+"')>"+arr[4][6]+"</td>";
        document.getElementById('calendarRow6').innerHTML="<td onclick=showDate('"+arr[5][0]+"')>"+arr[5][0]+"</td><td onclick=showDate('"+arr[5][1]+"')>"+arr[5][1]+"</td><td onclick=showDate('"+arr[5][2]+"')>"+arr[5][2]+"</td><td onclick=showDate('"+arr[5][3]+"')>"+arr[5][3]+"</td><td onclick=showDate('"+arr[5][4]+"')>"+arr[5][4]+"</td><td onclick=showDate('"+arr[5][5]+"')>"+arr[5][5]+"</td><td onclick=showDate('"+arr[5][6]+"')>"+arr[5][6]+"</td>";

      }
