interface Footer {
	icon_url?: string;
	text?: string;
}

interface Thumbnail {
	url?: string;
}

interface Image {
	url?: string;
}

interface Author {
	name?: string;
	url?: string;
	icon_url?: string;
}

interface Field {
	name?: string;
	value?: string;
}

interface Embed {
	title: string;
	description: string;
	url?: string;
	color?: number;
	timestamp?: string;
	footer?: Footer;
	thumbnail?: Thumbnail;
	image?: Image;
	author: Author;
	fields?: Field[];
}

export interface DiscordMessage {
	embed: Embed;
}