for (let i=0; i < 100; i++) {
	animateDiv();
}
function animateDiv() {
	console.log("Test Fun!!!!");
	const divEl = document.createElement("div");
	const ogTop = window.innerHeight / 2;
	const ogLeft = window.innerWidth / 2;
	divEl.style.width = "20px";
	divEl.style.height = "20px";
	divEl.style.opacity = "0.5";
	divEl.style.backgroundColor = "red";
	divEl.style.top = window.innerHeight / 2 + 'px';
	divEl.style.left = window.innerWidth / 2 + 'px';
	divEl.style.position = "absolute";
	const body = document.body;
	body.appendChild(divEl);
	const negOne = function() {
      const arr = [1, -1];
      const pos = Math.floor(Math.random() * 2);
      return arr[pos];
	};
	const trackPosition = {
		x: window.innerHeight / 2,
		y: window.innerWidth / 2,
		xi: Math.floor(Math.random() * 10) * negOne(),
		yi: Math.floor(Math.random() * 10) * negOne(),
		increment: function() {
		  setTimeout(() => {
		 	 this.x += this.xi;
	         this.y += this.yi;
	         this.setEl();
	         this.increment();
		 }, 10);
	     
		},
		setEl: function() {
		   if (this.x > window.innerWidth || this.y > window.innerHeight) {
		   	console.log('setEl inside', this.y, this.x);
		   	 this.y = ogTop;
	         this.x = ogLeft;
		   }
	       divEl.style.top = this.y + 'px';
	       divEl.style.left = this.x + 'px';
	       console.log('setEl', this.y, this.x);
		}
	}
	console.log(trackPosition);
	trackPosition.increment();
}
