// @flow
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();

export default function md(str: string) {
  return markdown.render(str);
}
