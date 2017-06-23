/**
 * Created by wei on 2017/6/2.
 */

function MyTime(option) {
    this.ctx = option.ctx;

    this.startDete = new Date();
}

MyTime.prototype = {
    constructor : MyTime,
    draw : function () {

        //计算出游戏进行的时间
        var duration = (new Date() - this.startDete) / 1000;

        var h = Math.floor(duration / 3600);
        var m = Math.floor(duration % 3600 / 60);
        var s = Math.floor(duration % 60);

        var text = "你坚持了"+h+"小时"+m+"分钟"+s+"秒";

        this.ctx.save();

        this.ctx.fillStyle = "red";
        this.ctx.font = "15px 微软雅黑";
        this.ctx.textBaseline = "top";
        this.ctx.textAlign = "right";
        this.ctx.fillText(text,800,0);

        this.ctx.restore();
    }
}
