import { TextLine } from './textLine';

export class Text {
	
	textLines: TextLine[];
	
	constructor(text: string[]) {
		if(!text || text.length == 0) {
			throw new Error('text is null or length = 0');
		}
		
		this.textLines = [];
		
		for(let string of text) {
			this.textLines.push(new TextLine(string));
		}
	}
	
	getTextLines(): TextLine[] {
		return this.textLines;
	}
	
	getTextLine(line: number): TextLine {
		if(this.textLines.length < line || line < 0) {
			throw new Error('OUB in textLines. Line:: ' + line); 
		}
		return this.getTextLines()[line];
	}
}