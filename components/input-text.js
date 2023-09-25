export default function InputText({ labelText, id, placeholder, name, style }) {
  return (
    <div className="flex flex-col gap-1">
      <label for={id} className="font-bold">
        {labelText}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        name={name}
        className={style}
      />
    </div>
  );
}
