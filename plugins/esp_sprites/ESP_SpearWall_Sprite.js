// Wall off all the haters

class ESPSpearWallSprite extends ESPGameSprite {
	constructor(object) {
		super();

		this.espObject = object;

		this.ObjectHolderOffsetY = -8;

		this._spears = [];
		for(let i = 0; i < object._width; i++) {
			for(let j = 0; j < 4; j++) {
				const spear = new ESPAnimatedSprite(ImageManager.loadBitmapFromUrl("img/other/Spear.png"), 10, {
					FrameCount: 2
				});
				spear.scale.set(2, this.espObject._showAnimation ? 0 : 2);
				spear.anchor.set(0.5, 1);
				spear.x = ((TS / -2) + (TS * (j / 4)) + (i * TS)) + 4;
				spear.y = j % 2 === 0 ? 8 : 0;//(Math.random() * (TS / 2)) - (TS / 4);
				//spear.rotation = (Math.random() * 0.25) - 0.125;
				this.ObjectHolder.addChild(spear);
				this._spears.push(spear);
			}
		}
		
		this.ObjectHolder.children.sort(function(a, b) {
			if(a.y !== b.y) return a.y - b.y;
			return a.spriteId - b.spriteId;
		})

		this.ShadowSprite.visible = false;
	}

	update() {
		super.update();
		if(this._spears) this._spears.forEach(s => s.scale.set(2, this.espObject._scaleState * 2));
	}

	updateShadowSprite() {
	}
}