/**
 * Created by Administrator on 2019/10/14.
 */
//��ȡitem-list �����е�li
var liList=document.getElementsByClassName("item-list");
//ѭ���������飬Ϊÿ��li�󶨵���¼�
for(var i= 0;i<liList.length;i++){
    //���������li��class
    //for(var j=0;j<liList.length;j++){
    //    liList[j].removeAttribute("class");
    //}
    liList[i].onclick= function () {
        this.className="active";
        console.log();

    }
}