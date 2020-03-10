import React from "react";
import TagCloud from "../../src/index";

export default class Demo1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tagName: []
		};
	}

	handleClick(tag) {
		alert(`id:${tag.id};name:${tag.name}`);
	}

	render() {
		let tagName = [
			{ id: "java", name: "java" },
			{ id: "javscript", name: "javscript" },
			{ id: "C", name: "C" },
			{ id: "C++", name: "C++" },
			{ id: "fe", name: "前端" },
			{ id: "React", name: "React" },
			{ id: "Vue", name: "Vue" },
			{ id: "redux", name: "redux" },
			{ id: "writing", name: "写作" },
			{ id: "programmer", name: "程序员" },
			{ id: "programme", name: "编程" }
		];
		tagName = [...tagName, ...tagName, ...tagName];

		return (
			<div style={{ width: "300px", height: "300px", padding: "100px" }}>
				<TagCloud
					tagName={tagName}
					radius={200}
					onClick={this.handleClick}
				></TagCloud>
			</div>
		);
	}
}
