/**
 * Created by wei on 2017/6/2.
 */

function Sky(option) {
    this.ctx = option.ctx;
    this.image = option.image;

    this.x = option.x;
    this.speed = 2;
}

Sky.prototype = {
    constructor : Sky,
    draw : function () {
        ctx.drawImage(this.image,this.x,0);
        this.x -= this.speed;
        if(this.x < -this.image.width) {
            this.x += 2 * this.image.width;
        }

    }
}
