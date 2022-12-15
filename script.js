let daily=[[5,7],[1,2],[0,1],[1,1],[1,3],[0,1]]
let weekly=[[32,36],[10,8],[4,7],[4,5],[5,10],[2,2]]
let monthly=[[103,128],[23,29],[13,19],[11,18],[21,23],[7,11]]

 let current=document.getElementsByClassName("current");
let previous=document.getElementsByClassName("prev");
weeklyStats();
function dailyStats()
{
    for(let i=0;i<6;i++)
    {
        current[i].innerHTML=daily[i][0] + "hrs";
        previous[i].innerHTML="Last Week - " + daily[i][1]  +" hrs" 
    }
}
function weeklyStats()
{
    for(let i=0;i<6;i++)
    {
        current[i].innerHTML=weekly[i][0] + "hrs";
        previous[i].innerHTML="Last Week - " +weekly[i][1]  +" hrs" 
    }
}
function monthlyStats()
{
    for(let i=0;i<6;i++)
    {
        current[i].innerHTML=monthly[i][0] + "hrs";
        previous[i].innerHTML="Last Week - " +monthly[i][1]  +" hrs" 
    }
}