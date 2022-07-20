import React from "react";

// const Coffees = ({ numCoffees }) => {
//   return <span>{"☕️".repeat(numCoffees)}</span>;
// };
// const Bentos = ({ numBentos }) => {
//   return <span>{"🍱".repeat(numBentos)}</span>;
// };

const makeEmojiList = (minutes) => {
  const interval = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";

  let emojis = "";
  for (let i = 0; i < minutes; i += interval) {
    emojis += emoji;
  }
  return emojis;
};
const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  // const numCoffees = (Math.ceil(article.minutes / 5) * 5) / 5;
  // const numBentos = (Math.ceil(article.minutes / 10) * 10) / 10;

  const emojis = makeEmojiList(minutes);
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis}
        {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
