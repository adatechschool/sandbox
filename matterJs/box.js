function makeBox(x, y, w, h)
{
    let options = {friction : 1};
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(myWorld, this.body);

    this.show = function()
    {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rotate(angle);
        rect(0, 0, this.w, this.h);
        pop();
    }
}

function makeBubble(x, y, r)
{
    let options = {friction:1};
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(myWorld, this.body);

    this.show = function()
    {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rotate(angle);
        circle(0, 0, r);
        pop();
    }
}