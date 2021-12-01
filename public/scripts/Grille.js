export class Grille {
    constructor(opts) {
        this.canvas = opts.canvas;
        this.ctx = opts.canvas.getContext("2d");
        this.data = opts.data;
        this.nbColonnes = opts.data[0].length;
        this.nbLignes = opts.data.length;
        this.blockStyles = opts.blockStyles;
        this.couleurFond = opts.couleurFond;
        this.couleurGrille = opts.couleurGrille;
        this.blockHeight = Math.round(this.canvas.height / this.data.length);
        this.blockWidth = Math.round(this.canvas.width / this.nbColonnes);
        this.angleRayons = opts.angleRayons;
    }
    dessineGrille() {
        this.ctx.fillStyle = this.couleurFond;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = this.couleurGrille;
        this.ctx.beginPath();
        for (let i = 1; i < this.data.length; i++) {
            const y = i * this.blockHeight;
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
        }
        for (let i = 1; i < this.data[0].length; i++) {
            const x = i * this.blockWidth;
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }
    dessineBlocks() {
    }
    dessine() {
        this.dessineGrille();
        this.dessineBlocks();
    }
}
//# sourceMappingURL=Grille.js.map