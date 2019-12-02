/**
 * Created by Administrator on 2019/10/14.
 */
//获取item-list 下所有的li
var liList=document.getElementsByClassName("item-list");
//循环遍历数组，为每个li绑定点击事件
for(var i= 0;i<liList.length;i++){
    //先清除所有li的class
    //for(var j=0;j<liList.length;j++){
    //    liList[j].removeAttribute("class");
    //}
    liList[i].onclick= function () {
        this.className="active";
        console.log();

    }
}