import React, { useState } from 'react';
import { marked } from 'marked';
import './Home.css';

export default function Home() {
	const [text, setText] = useState(`
# H1
## H2
[title](http://www.example.com)
\`code\`
\`\`\`
{
	"firstName": "John",
	"lastName": "Smith",
	"age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](https://thumb1.shutterstock.com/thumb_large/304147919/2025872663/stock-photo-head-shot-of-a-wet-capibara-looking-toward-the-afternoon-sun-in-las-flores-lagoon-buenos-aires-2025872663.jpg)

**bold text**
`);	


	marked.setOptions({
		breaks:true
	})

	return (
		<div id='container'>
			<div>
				<h3>EDITOR</h3>
				<textarea
					id="editor" 
					value={text}
					onChange={(event)=>{
						setText(event.target.value)					
					}}
				/>				
			</div>

			<div>
				<h3>PREVIEW</h3>
				<div 
					id="preview"
					dangerouslySetInnerHTML={{
					  __html: marked(text),
					}}
				></div>				
			</div>

		</div>
	)
}