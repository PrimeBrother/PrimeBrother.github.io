/**
 * Created by wei on 2017/6/2.
 */

function Land(option) {
    this.ctx = option.ctx;
    this.image = option.image;
    this.x = option.x;
    this.y = option.y;
    this.width = this.image.width;

    this.speed = 2;
}

Land.prototype = {
    constructor : Land,
    draw : function () {

        this.ctx.drawImage(this.image,this.x,this.y);
        this.x -= this.speed;

        if(this.x < -this.width) {
            this.x += this.width * 4;
        }

    }
}