function timeConversion(s) {
    var time = s.slice(0,-2).split(':');
    var base = s.slice(-2)
     if(base == 'PM'){
         if(time[0] != '12'){
             time[0] = parseInt(time[0], 10)+12;
         }
     } else if(time[0]=='12'){
         time[0] = '00';
     }
 
    return time[0]+':'+time[1]+':'+time[2];
 }

 timeConversion('07:05:45PM')