export default function ButtonItem({ style, name, click }) {
  return (
    <button type="submit" className={style}>
      {name}
    </button>
  );
}
