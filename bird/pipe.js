/**
 * Created by wei on 2017/6/2.
 */

function Pipe(option) {
    this.ctx = option.ctx;
    this.x = option.x;

    //上面管道的坐标,取值范围控制在(-150,-300) 之间
    this.y = -(150 + Math.random()*150); //(-150 ~ -300)

    this.topImage = option.topImage;
    this.bottomImage = option.bottomImage;

    //上面管道与下面的管道之间的空隙距离
    this.spaceY = 120;

    //下面管道的坐标
    this.bottomY = this.y + this.topImage.height + this.spaceY;

    this.speed = 2;
}

Pipe.prototype = {
    constructor : Pipe,
    draw : function () {

        //在路径上绘制一个与管道一样大小的矩形区域,为了做小鸟与管道撞击判断
        this.ctx.rect(this.x,this.y,this.topImage.width,this.topImage.height);
        this.ctx.rect(this.x,this.bottomY,this.bottomImage.width,this.bottomImage.height);
        //this.ctx.stroke();

        this.ctx.drawImage(this.topImage,this.x,this.y);
        this.ctx.drawImage(this.bottomImage,this.x,this.bottomY);

        this.x -= this.speed;
        if(this.x < -this.topImage.width) {
            this.x += 6 * 200;

            //管道出去之后,下次再使用的时候,坐标需要重新产生
            this.y = -(150 + Math.random()*150);
            this.bottomY = this.y + this.topImage.height + this.spaceY;
        }
    }
}