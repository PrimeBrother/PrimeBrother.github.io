/**
 * Created by wei on 2017/6/2.
 */

function Bird(option) {
    this.ctx = option.ctx;
    this.image = option.image;
    this.y = option.y;
    this.x = option.x;

    this.picW = this.image.width / 3;
    this.picH = this.image.height;
    this.index = 0;
    this.acc = 0.0002;
    this.v = 0;
    this.maxAngle = 60;
    this.maxSpeed = 0.38;
    this.lastTime = new Date();
}


Bird.prototype = {
    constructor : Bird,
    draw : function () {
        var currentTime = new Date();
        var duration = currentTime - this.lastTime;
        this.lastTime = currentTime;

        //经过一帧的时间,所移动的距离
        var s = this.v * duration + this.acc * duration * duration / 2;
        //经过一帧的时间,加速之后的速度
        this.v = this.v + this.acc * duration;
        this.y += s;

        var angle = this.maxAngle / this.maxSpeed * this.v;

        //变换坐标系之前,线保存正常的坐标系
        this.ctx.save();

        //将坐标系平移到小鸟的中心点位置
        this.ctx.translate(this.x+this.picW/2, this.y+this.picH/2);
        this.ctx.rotate(convertAngle(angle));

        this.ctx.drawImage(this.image,
            this.picW*this.index,0,this.picW,this.picH,
            -this.picW/2,-this.picH/2,this.picW,this.picH);

        //为了调试 给小鸟绘制边框
        //this.ctx.strokeRect(-this.picW/2,-this.picH/2,this.picW,this.picH);

        //小鸟旋转的变换用完之后,再恢复成正常的坐标系
        this.ctx.restore();


        this.index++; //0,1,2
        if(this.index == 3) {
            this.index = 0;
        }

    }
}